import { Link } from 'react-router-dom'
import { site, photos, heroPhoto } from '../data/site.js'
import Photo from '../components/Photo.jsx'

export default function Home() {
  // .slice(0, 6) takes the first six photographs for the preview grid.
  const preview = photos.slice(0, 6)

  return (
    <>
      <section className="hero">
        <Photo src={heroPhoto.src} alt={heroPhoto.alt} className="hero-img" eager />
        <div className="hero-text">
          <h1>{site.name}</h1>
          <p>{site.tagline}</p>
          <Link to="/book" className="btn">Book a session</Link>
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
