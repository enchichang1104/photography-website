import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer-dark">
      <div className="footer-grid">
        <div>
          <p className="footer-name">{site.name}</p>
          <p className="muted-dark">{site.tagline}</p>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/gallery">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/pricing">Pricing</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <Link to="/book">Book a session</Link>
        </div>

        <div>
          <h4>Stay in touch</h4>
          <p className="muted-dark small">New work and availability, occasionally.</p>
          {/* Not wired to anything yet — needs a second Google Form
             or a service like Formspree before this actually sends. */}
          <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" required />
            <button type="submit" className="btn btn-sm">Join</button>
          </form>
        </div>
      </div>

      <p className="copyright-dark">
        © {new Date().getFullYear()} {site.name} — All photographs are my own work.
      </p>
    </footer>
  )
}