import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { site } from '../data/site.js'


// 底部導覽列用的圖示路徑
const iconPaths = {
  home:     'M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5Z',
  work:     'M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z',
  about:    'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0',
  pricing:  'M20 12.5 12.5 20a2 2 0 0 1-2.8 0l-7-7A2 2 0 0 1 2 11.6V4h7.6a2 2 0 0 1 1.4.6l9 9a2 2 0 0 1 0 2.9Z M7 8h.01',
}

function TabIcon({ name }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={iconPaths[name]} />
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // 桌機版 header 的連結
  const links = [
    { to: '/gallery',  label: 'Work' },
    { to: '/about',    label: 'About' },
    { to: '/pricing',  label: 'Pricing' },
  ]

  // 手機版底部導覽列（多一個 Home）
  const tabs = [
    { to: '/',         label: 'Home',     icon: 'home', end: true },
    { to: '/gallery',  label: 'Work',     icon: 'work' },
    { to: '/about',    label: 'About',    icon: 'about' },
    { to: '/pricing',  label: 'Pricing',  icon: 'pricing' },
  ]

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 60) }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  const floating = pathname === '/' && !scrolled

  return (
    <>
      <header className={floating ? 'nav nav-float' : 'nav nav-solid'}>
        <div className="nav-in">
          <Link to="/" className="wordmark">{site.name}</Link>

          <nav className="nav-links">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to}>{l.label}</NavLink>
            ))}
          </nav>

          <div className="nav-right">
            <a className="nav-social" href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
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

      {/* 手機版底部浮動導覽列（桌機隱藏） */}
      <nav className="tabbar" aria-label="主要導覽">
        {tabs.map((t) => (
          <NavLink key={t.to} to={t.to} end={t.end}>
            <TabIcon name={t.icon} />
            <span>{t.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  )
}