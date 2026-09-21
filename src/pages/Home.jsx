import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { site, photos, heroPhotos } from '../data/site.js'
import Photo from '../components/Photo.jsx'

export default function Home() {
  // .slice(0, 6) takes the first six photographs for the preview grid.
  const preview = photos.slice(0, 6)

  // Which hero photo is currently showing.
  const [active, setActive] = useState(0)

  useEffect(() => {
    // Every 5 seconds, move to the next photo (wrapping back to 0 at the end).
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % heroPhotos.length)
    }, 5000)
    // Stop the timer if the component ever unmounts — prevents a memory leak.
    return () => clearInterval(timer)
  }, [])

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
