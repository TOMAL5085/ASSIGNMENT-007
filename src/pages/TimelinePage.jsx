import { useMemo, useState } from 'react'
import InteractionIcon from '../components/InteractionIcon'
import { useAppContext } from '../context/AppContext'
import { formatDateLabel } from '../utils/formatters'

const filterOptions = [
  { value: 'all', label: 'Filter timeline' },
  { value: 'call', label: 'Call' },
  { value: 'text', label: 'Text' },
  { value: 'video', label: 'Video' }
]

const TimelinePage = () => {
  const { timelineEntries } = useAppContext()
  const [filterType, setFilterType] = useState('all')

  const filteredEntries = useMemo(() => {
    const sorted = [...timelineEntries].sort(
      (left, right) => new Date(right.date).getTime() - new Date(left.date).getTime()
    )

    if (filterType === 'all') {
      return sorted
    }

    return sorted.filter((entry) => entry.type === filterType)
  }, [timelineEntries, filterType])

  return (
    <div className="container page-timeline">
      <h1>Timeline</h1>

      <label className="timeline-filter-label" htmlFor="timeline-filter">
        Filter timeline entries
      </label>
      <select
        id="timeline-filter"
        className="timeline-filter"
        value={filterType}
        onChange={(event) => setFilterType(event.target.value)}
      >
        {filterOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="timeline-list">
        {filteredEntries.map((entry) => {
          const [action, person] = entry.title.split(' with ')

          return (
            <article key={entry.id} className="timeline-item">
              <InteractionIcon type={entry.type} className="timeline-item-icon" />
              <div>
                <p className="timeline-item-title">
                  <span>{action}</span>
                  <span> with {person}</span>
                </p>
                <p className="timeline-item-date">{formatDateLabel(entry.date)}</p>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default TimelinePage

