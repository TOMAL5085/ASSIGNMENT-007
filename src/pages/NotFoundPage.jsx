import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="container page-not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="btn-primary" to="/">
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFoundPage

