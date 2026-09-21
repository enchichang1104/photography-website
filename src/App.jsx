// App decides which page to show based on the URL.
// Nav and Footer sit outside <Routes>, so they appear on every page.

import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import About from './pages/About.jsx'
import Pricing from './pages/Pricing.jsx'
import Book from './pages/Book.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about"   element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/book"    element={<Book />} />
          {/* Anything else falls back to the home page. */}
          <Route path="*"        element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
