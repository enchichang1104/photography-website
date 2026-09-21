import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Without this, clicking a nav link keeps your scroll position
// from the previous page, which feels broken.
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
