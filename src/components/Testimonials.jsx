import { useState } from 'react'
import { testimonials } from '../data/site.js'
import Photo from './Photo.jsx'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const t = testimonials[i]

  // 沒有照片時，用名字的縮寫代替
  const initials = t.name.split(' ').map((w) => w[0]).slice(0, 2).join('')

  return (
    <section className="section testi">
      <h2>Loved by past clients</h2>

      <div className="testi-row">
        <div className="testi-card">
          {t.photo ? (
            <Photo src={t.photo} alt={t.name} className="testi-photo" />
          ) : (
            <div className="testi-initials">{initials}</div>
          )}
          <p className="testi-quote">“{t.quote}”</p>
          <p className="testi-name">{t.name}</p>
        </div>
      </div>

      {/* 只有一則評價時，圓點沒有作用，所以不顯示 */}
      {testimonials.length > 1 && (
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
      )}
    </section>
  )
}