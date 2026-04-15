import { createElement } from 'react'
import { NavLink } from 'react-router-dom'
import { ChartNoAxesColumn, Clock3, House } from 'lucide-react'

const links = [
  { to: '/', label: 'Home', icon: House, end: true },
  { to: '/timeline', label: 'Timeline', icon: Clock3 },
  { to: '/stats', label: 'Stats', icon: ChartNoAxesColumn }
]

const Navbar = () => {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <NavLink to="/" className="brand-link" aria-label="KeenKeeper Home">
          <img src="/assets/logo.png" alt="KeenKeeper" className="brand-logo" />
        </NavLink>

        <nav aria-label="Primary" className="main-nav">
          {links.map(({ to, label, icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              {createElement(icon, { size: 14, strokeWidth: 2 })}
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar

