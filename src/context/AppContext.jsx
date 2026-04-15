import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { interactionTitle } from '../utils/formatters'
import { seedTimelineEntries } from '../data/seedTimelineEntries'

const TIMELINE_STORAGE_KEY = 'keenkeeper.timeline.entries'

const AppContext = createContext(null)

const readSavedTimeline = () => {
  if (typeof window === 'undefined') {
    return seedTimelineEntries
  }

  try {
    const raw = window.localStorage.getItem(TIMELINE_STORAGE_KEY)
    if (!raw) return seedTimelineEntries

    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return seedTimelineEntries

    return parsed
  } catch {
    return seedTimelineEntries
  }
}

export const AppProvider = ({ children }) => {
  const [friends, setFriends] = useState([])
  const [isFriendsLoading, setIsFriendsLoading] = useState(true)
  const [friendsError, setFriendsError] = useState('')
  const [timelineEntries, setTimelineEntries] = useState(readSavedTimeline)
  const [toast, setToast] = useState(null)
  const toastTimeout = useRef(null)

  useEffect(() => {
    let isCancelled = false

    const loadFriends = async () => {
      setIsFriendsLoading(true)
      setFriendsError('')

      try {
        const response = await fetch('/friends.json')
        if (!response.ok) {
          throw new Error('Failed to fetch friends data.')
        }

        const payload = await response.json()

        await new Promise((resolve) => {
          setTimeout(resolve, 700)
        })

        if (!isCancelled) {
          setFriends(payload)
        }
      } catch (error) {
        if (!isCancelled) {
          setFriendsError(error.message || 'Could not load friends data.')
        }
      } finally {
        if (!isCancelled) {
          setIsFriendsLoading(false)
        }
      }
    }

    loadFriends()

    return () => {
      isCancelled = true
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(TIMELINE_STORAGE_KEY, JSON.stringify(timelineEntries))
  }, [timelineEntries])

  useEffect(
    () => () => {
      if (toastTimeout.current) {
        clearTimeout(toastTimeout.current)
      }
    },
    []
  )

  const showToast = useCallback((message) => {
    setToast({ message, id: Date.now() })

    if (toastTimeout.current) {
      clearTimeout(toastTimeout.current)
    }

    toastTimeout.current = setTimeout(() => {
      setToast(null)
    }, 3000)
  }, [])

  const addInteraction = useCallback((type, friend) => {
    const entry = {
      id: Date.now(),
      type,
      title: interactionTitle(type, friend.name),
      date: new Date().toISOString()
    }

    setTimelineEntries((prev) => [entry, ...prev])
    showToast(`${entry.title} added to timeline.`)
  }, [showToast])

  const value = useMemo(
    () => ({
      friends,
      isFriendsLoading,
      friendsError,
      timelineEntries,
      toast,
      addInteraction,
      showToast
    }),
    [
      friends,
      isFriendsLoading,
      friendsError,
      timelineEntries,
      toast,
      addInteraction,
      showToast
    ]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider.')
  }

  return context
}

