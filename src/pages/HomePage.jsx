import { Plus } from 'lucide-react'
import FriendCard from '../components/FriendCard'
import LoadingSpinner from '../components/LoadingSpinner'
import { useAppContext } from '../context/AppContext'

const HomePage = () => {
  const { friends, isFriendsLoading, friendsError, timelineEntries } = useAppContext()

  const month = new Date().getMonth()
  const year = new Date().getFullYear()

  const interactionCountThisMonth = timelineEntries.filter((entry) => {
    const date = new Date(entry.date)
    return date.getMonth() === month && date.getFullYear() === year
  }).length

  const onTrackCount = friends.filter((friend) => friend.status === 'on-track').length
  const needsAttentionCount = friends.filter(
    (friend) => friend.status === 'overdue' || friend.status === 'almost due'
  ).length

  return (
    <div className="container page-home">
      <section className="hero-section">
        <h1>Friends to keep close in your life</h1>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>
        <button className="btn-primary" type="button">
          <Plus size={15} />
          <span>Add a Friend</span>
        </button>
      </section>

      <section className="summary-grid" aria-label="Summary cards">
        <article className="summary-card">
          <h2>{friends.length}</h2>
          <p>Total Friends</p>
        </article>
        <article className="summary-card">
          <h2>{onTrackCount}</h2>
          <p>On Track</p>
        </article>
        <article className="summary-card">
          <h2>{needsAttentionCount}</h2>
          <p>Need Attention</p>
        </article>
        <article className="summary-card">
          <h2>{interactionCountThisMonth}</h2>
          <p>Interactions This Month</p>
        </article>
      </section>

      <section className="friends-section" aria-labelledby="friends-heading">
        <h2 id="friends-heading">Your Friends</h2>

        {isFriendsLoading ? <LoadingSpinner /> : null}

        {!isFriendsLoading && friendsError ? (
          <p className="inline-error">{friendsError}</p>
        ) : null}

        {!isFriendsLoading && !friendsError ? (
          <div className="friends-grid">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        ) : null}
      </section>
    </div>
  )
}

export default HomePage

