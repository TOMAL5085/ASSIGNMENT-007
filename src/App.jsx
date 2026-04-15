import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import FriendDetailsPage from './pages/FriendDetailsPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import StatsPage from './pages/StatsPage'
import TimelinePage from './pages/TimelinePage'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/friends/:id" element={<FriendDetailsPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App

