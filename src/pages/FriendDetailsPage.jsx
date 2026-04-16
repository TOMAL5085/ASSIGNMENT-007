import { Archive, BellRing, Trash2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import InteractionIcon from '../components/InteractionIcon'
import LoadingSpinner from '../components/LoadingSpinner'
import { useAppContext } from '../context/AppContext'
import { formatDateTwoLine, getStatusMeta } from '../utils/formatters'

const quickActions = [
  { key: 'call', label: 'Call' },
  { key: 'text', label: 'Text' },
  { key: 'video', label: 'Video' }
]

const FriendDetailsPage = () => {
  const { id } = useParams()
  const { friends, isFriendsLoading, addInteraction } = useAppContext()

  if (isFriendsLoading) {
    return (
      <div className="container">
        <LoadingSpinner label="Loading friend details..." />
      </div>
    )
  }

  const friend = friends.find((entry) => String(entry.id) === id)

  if (!friend) {
    return (
      <div className="container not-found-inline">
        <h1>Friend not found</h1>
        <p>This friend profile is unavailable or no longer exists.</p>
        <Link className="btn-primary" to="/">
          Back to Home
        </Link>
      </div>
    )
  }

  const statusMeta = getStatusMeta(friend.status)
  const nextDueDate = formatDateTwoLine(friend.next_due_date)

  return (
    <div className="container page-details">
      <div className="details-layout">
        <aside>
          <article className="panel friend-profile-panel">
            <img src={friend.picture} alt={friend.name} className="friend-avatar-lg" />
            <h1>{friend.name}</h1>
            <span className={`badge-status ${statusMeta.className}`}>{statusMeta.label}</span>

            <div className="friend-tags">
              {friend.tags.map((tag) => (
                <span key={`${friend.id}-${tag}`} className="badge-tag">
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>

            <p className="friend-bio">"{friend.bio}"</p>
            <p className="friend-email">Preferred: {friend.email}</p>
          </article>

          <button className="action-row" type="button">
            <BellRing size={14} />
            <span>Snooze 2 Weeks</span>
          </button>
          <button className="action-row" type="button">
            <Archive size={14} />
            <span>Archive</span>
          </button>
          <button className="action-row action-row-danger" type="button">
            <Trash2 size={14} />
            <span>Delete</span>
          </button>
        </aside>

        <section className="details-main-column">
          <div className="summary-grid details-stats-grid">
            <article className="summary-card">
              <h2 className="details-stat-value details-stat-number">
                {friend.days_since_contact}
              </h2>
              <p>Days Since Contact</p>
            </article>
            <article className="summary-card">
              <h2 className="details-stat-value details-stat-number">{friend.goal}</h2>
              <p>Goal (Days)</p>
            </article>
            <article className="summary-card">
              <h2 className="details-stat-value details-stat-date">
                <span className="details-stat-date-line">{nextDueDate.primary}</span>
                <span className="details-stat-date-line">{nextDueDate.secondary}</span>
              </h2>
              <p>Next Due</p>
            </article>
          </div>

          <article className="panel">
            <div className="panel-row-between">
              <h2>Relationship Goal</h2>
              <button type="button" className="btn-secondary">
                Edit
              </button>
            </div>
            <p>
              Connect every <strong>{friend.goal} days</strong>
            </p>
          </article>

          <article className="panel">
            <h2>Quick Check-In</h2>
            <div className="quick-checkin-grid">
              {quickActions.map((action) => (
                <button
                  key={action.key}
                  className="quick-action-btn"
                  type="button"
                  onClick={() => addInteraction(action.key, friend)}
                >
                  <InteractionIcon type={action.key} className="interaction-icon" />
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  )
}

export default FriendDetailsPage

