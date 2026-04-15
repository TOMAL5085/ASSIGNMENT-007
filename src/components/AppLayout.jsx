import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import Toast from './Toast'
import { useAppContext } from '../context/AppContext'

const AppLayout = () => {
  const { toasts } = useAppContext()

  return (
    <div className="site-root">
      <Navbar />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
      <Toast toasts={toasts} />
    </div>
  )
}

export default AppLayout

