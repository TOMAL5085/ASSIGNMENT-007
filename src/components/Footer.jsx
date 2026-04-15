const socials = [
  { href: '#', label: 'Instagram', icon: '/assets/instagram.png' },
  { href: '#', label: 'Facebook', icon: '/assets/facebook.png' },
  { href: '#', label: 'X', icon: '/assets/twitter.png' }
]

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <img src="/assets/logo-xl.png" alt="KeenKeeper" className="footer-logo" />
        <p className="footer-subtitle">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        <h3 className="footer-heading">Social Links</h3>
        <div className="footer-socials">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="footer-social-link"
              aria-label={item.label}
            >
              <img src={item.icon} alt="" aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <p>(c) 2026 KeenKeeper. All rights reserved.</p>
          <div className="footer-policy-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
