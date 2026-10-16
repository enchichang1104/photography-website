import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { site } from '../data/site.js'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  const links = [
    { to: '/gallery',  label: 'Work' },
    { to: '/about',    label: 'About' },
    { to: '/pricing',  label: 'Pricing' },
  ]

  // 捲動超過 60px 就從透明變實色
  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 60) }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  // 只有首頁（有深色 hero）在頂端時才透明，其他頁一律實色
  const floating = pathname === '/' && !scrolled

  return (
    <header className={floating ? 'nav nav-float' : 'nav nav-solid'}>
      <div className="nav-in">
        {/* 左：Logo */}
        <Link to="/" className="wordmark">{site.name}</Link>

        {/* 中：連結 */}
        <nav className="nav-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to}>{l.label}</NavLink>
          ))}
        </nav>

        {/* 右：Instagram + 預約按鈕 */}
        <div className="nav-right">
          <a className="nav-social" href={site.instagram} target="_blank" rel="noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
            </svg>
            <span>Instagram</span>
          </a>

          <Link to="/book" className="btn btn-sm">Book a session</Link>
        </div>
      </div>
    </header>
  )
}