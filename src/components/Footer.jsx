import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-in">
        <div>
          <p className="footer-name">{site.name}</p>
          <p className="muted">{site.tagline}</p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <Link to="/book">Book a session</Link>
        </div>
      </div>
      <p className="muted copyright">
        © {new Date().getFullYear()} {site.name}. All photographs are my own work.
      </p>
    </footer>
  )
}
