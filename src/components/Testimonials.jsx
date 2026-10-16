import { useState } from 'react'
import { testimonials } from '../data/site.js'
import Photo from './Photo.jsx'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const t = testimonials[i]

  function next() { setI((n) => (n + 1) % testimonials.length) }
  function prev() { setI((n) => (n - 1 + testimonials.length) % testimonials.length) }

  // Falls back to initials in a circle if no photo file is provided.
  const initials = t.name.split(' ').map((w) => w[0]).slice(0, 2).join('')

  return (
    <section className="section testi">
      <h2>Loved by past clients</h2>

      <div className="testi-row">
        <button className="testi-arrow" onClick={prev} aria-label="Previous testimonial">‹</button>

        <div className="testi-card">
          {t.photo ? (
            <Photo src={t.photo} alt={t.name} className="testi-photo" />
          ) : (
            <div className="testi-initials">{initials}</div>
          )}
          <p className="testi-quote">“{t.quote}”</p>
          <p className="testi-name">{t.name}</p>
        </div>

        <button className="testi-arrow" onClick={next} aria-label="Next testimonial">›</button>
      </div>

      <div className="testi-dots">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={idx === i ? 'dot is-active' : 'dot'}
            onClick={() => setI(idx)}
            aria-label={`Show testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}