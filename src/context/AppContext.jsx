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

const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
  const [friends, setFriends] = useState([])
  const [isFriendsLoading, setIsFriendsLoading] = useState(true)
  const [friendsError, setFriendsError] = useState('')
  const [timelineEntries, setTimelineEntries] = useState([])
  const [toasts, setToasts] = useState([])
  const toastTimeoutIdsRef = useRef(new Set())

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
        if (!Array.isArray(payload)) {
          throw new Error('Invalid friends data format.')
        }

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
    const timeoutIds = toastTimeoutIdsRef.current

    return () => {
      timeoutIds.forEach((timeoutId) => {
        window.clearTimeout(timeoutId)
      })
      timeoutIds.clear()
    }
  }, [])

  const showToast = useCallback((payload) => {
    const nextToast =
      typeof payload === 'string'
        ? { message: payload }
        : {
            message: payload?.message || ''
          }

    if (!nextToast.message) {
      return
    }

    const id = Date.now() + Math.random()
    setToasts((prev) => [...prev, { ...nextToast, id }])

    const timeoutId = window.setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
      toastTimeoutIdsRef.current.delete(timeoutId)
    }, 3000)
    toastTimeoutIdsRef.current.add(timeoutId)
  }, [])

  const addInteraction = useCallback(
    (type, friend) => {
      const entry = {
        id: Date.now() + Math.random(),
        type,
        title: interactionTitle(type, friend.name),
        date: new Date().toISOString()
      }

      setTimelineEntries((prev) => [entry, ...prev].slice(0, 250))
      showToast(`${entry.title}!`)
    },
    [showToast]
  )

  const value = useMemo(
    () => ({
      friends,
      isFriendsLoading,
      friendsError,
      timelineEntries,
      toasts,
      addInteraction,
      showToast
    }),
    [
      friends,
      isFriendsLoading,
      friendsError,
      timelineEntries,
      toasts,
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
