import { useState, useRef, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { site } from '../data/site.js'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)
  const { pathname } = useLocation()

  const links = [
    { to: '/gallery',  label: 'Work' },
    { to: '/about',    label: 'About' },
    { to: '/pricing',  label: 'Pricing' },
  ]

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 60) }
    onScroll() // run once on mount / page change, in case already scrolled
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  useEffect(() => {
    function onClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  // Only float transparent on Home, where a dark hero sits behind it.
  // Every other page gets a normal solid nav from the start.
  const floating = pathname === '/' && !scrolled

  

  return (
    <header className={floating ? 'nav nav-float' : 'nav nav-solid'}>
      <div className="nav-in">
        <Link to="/" className="wordmark" onClick={() => setOpen(false)}>
          {site.name}
        </Link>
        <Link to="/" className="wordmark" onClick={() => setOpen(false)}>
          <span className="logo-mark" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 15c2.5-3 5.5-3 8 0s5.5 3 8 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M3 10c2.5-3 5.5-3 8 0s5.5 3 8 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity=".5"/>
            </svg>
          </span>
          {site.name}
        </Link>

        <div className="nav-right">
          <Link to="/book" className="btn btn-sm" onClick={() => setOpen(false)}>
            Book a session
          </Link>

          <div className="menu" ref={menuRef}>
            <button
              className="menu-toggle"
              aria-expanded={open}
              aria-label="Open menu"
              onClick={() => setOpen((o) => !o)}
            >
              <span></span><span></span><span></span>
            </button>

            {open && (
              <nav className="menu-panel">
                {links.map((l) => (
                  <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
                    {l.label}
                  </NavLink>
                ))}
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}