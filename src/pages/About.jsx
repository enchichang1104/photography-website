import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import Photo from '../components/Photo.jsx'

export default function About() {
  return (
    <section className="section about">
      <div className="about-grid">
        <Photo src="/photos/me.jpg" alt={`${site.name}, photographer`} className="about-img" />
        <div>
          <h1>About</h1>
          {site.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            {' · '}
            <Link to="/book">Book a session</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
