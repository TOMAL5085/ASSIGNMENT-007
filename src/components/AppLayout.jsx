import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'
import Toast from './Toast'
import { useAppContext } from '../context/AppContext'

const AppLayout = () => {
  const { toasts } = useAppContext()

  return (
    <div className="site-root">
      <ScrollToTop />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main className="site-main" id="main-content">
        <Outlet />
      </main>
      <Footer />
      <Toast toasts={toasts} />
    </div>
  )
}

export default AppLayout

