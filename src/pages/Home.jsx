import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { site, photos, heroPhotos } from '../data/site.js'
import Photo from '../components/Photo.jsx'

const INTERVAL = 5000 // ms between automatic slides

export default function Home() {
  const preview = photos.slice(0, 6)
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)

  function next() {
    setActive((i) => (i + 1) % heroPhotos.length)
  }
  function prev() {
    setActive((i) => (i - 1 + heroPhotos.length) % heroPhotos.length)
  }
  function goTo(i) {
    setActive(i)
  }

  // Restart the auto-advance timer every time `active` changes —
  // whether that change came from the timer itself or a manual click.
  // This is what makes a manual click "reset the clock" instead of
  // the auto-advance firing again a moment later.
  useEffect(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(next, INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [active])
  
  return (
    <>
      <section className="hero-text">
          <h1>{site.name}</h1>
          <p>{site.tagline}</p>
          <Link to="/book" className="btn">Book a session</Link>
      </section>
      
      <section className="hero">
        {heroPhotos.map((p, i) => (
          <Photo
            key={p.src}
            src={p.src}
            alt={p.alt}
            eager={i === 0}
            className={i === active ? 'hero-img is-active' : 'hero-img'}
          />
        ))}

        <button className="hero-nav hero-prev" onClick={prev} aria-label="Previous photo">‹</button>
        <button className="hero-nav hero-next" onClick={next} aria-label="Next photo">›</button>

        <div className="hero-dots">
          {heroPhotos.map((p, i) => (
            <button
              key={p.src}
              className={i === active ? 'dot is-active' : 'dot'}
              onClick={() => goTo(i)}
              aria-label={`Show photo ${i + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Selected work</h2>
        <div className="grid">
          {preview.map((p) => (
            <Photo key={p.src} src={p.src} alt={p.alt} className="grid-img" />
          ))}
        </div>
        <Link to="/gallery" className="textlink">See the full portfolio</Link>
      </section>
    </>
  )
}
