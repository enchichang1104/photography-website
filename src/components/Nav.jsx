import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { site } from '../data/site.js'

export default function Nav() {
  // useState gives a component memory. `open` is whether the
  // mobile menu is showing; setOpen changes it and redraws.
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/gallery', label: 'Work' },
    { to: '/about',   label: 'About' },
    { to: '/pricing', label: 'Pricing' },
  ]

  return (
    <header className="nav">
      <div className="nav-in">
        <Link to="/" className="wordmark" onClick={() => setOpen(false)}>
          {site.name}
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav className={open ? 'nav-links is-open' : 'nav-links'}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/book" className="btn btn-sm" onClick={() => setOpen(false)}>
            Book a session
          </Link>
        </nav>
      </div>
    </header>
  )
}
