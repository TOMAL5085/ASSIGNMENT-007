import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import Toast from './Toast'
import { useAppContext } from '../context/AppContext'

const AppLayout = () => {
  const { toast } = useAppContext()

  return (
    <div className="site-root">
      <Navbar />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
      <Toast message={toast?.message} />
    </div>
  )
}

export default AppLayout

