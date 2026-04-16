import { House } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const NotFoundPage = () => {
  return (
    <div className="site-root">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main className="site-main" id="main-content">
        <section className="page-not-found-video-style">
          <p className="notfound-code">404</p>
          <h1>Page Not Found</h1>
          <p className="notfound-subtitle">
            Looks like this friendship link is broken. The page you&apos;re looking for
            doesn&apos;t exist or has been moved.
          </p>
          <Link className="btn-primary notfound-home-btn" to="/">
            <House size={14} />
            <span>Back to Home</span>
          </Link>
        </section>
      </main>
    </div>
  )
}

export default NotFoundPage
