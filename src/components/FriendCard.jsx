import { Link } from 'react-router-dom'
import { formatShortAgo, getStatusMeta } from '../utils/formatters'

const FriendCard = ({ friend }) => {
  const statusMeta = getStatusMeta(friend.status)

  return (
    <Link
      className="friend-card"
      to={`/friends/${friend.id}`}
      aria-label={`Open details for ${friend.name}`}
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="friend-avatar"
        loading="lazy"
        decoding="async"
      />
      <h3>{friend.name}</h3>
      <p className="friend-days">{formatShortAgo(friend.days_since_contact)}</p>

      <div className="friend-tags">
        {friend.tags.map((tag) => (
          <span key={`${friend.id}-${tag}`} className="badge-tag">
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

      <span className={`badge-status ${statusMeta.className}`}>{statusMeta.label}</span>
    </Link>
  )
}

export default FriendCard

