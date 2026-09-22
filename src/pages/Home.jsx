import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { site, categories, photos, heroPhotos, stats, howItWorks } from '../data/site.js'
import Photo from '../components/Photo.jsx'
import Icon from '../components/Icon.jsx'
import QuickBooking from '../components/QuickBooking.jsx'
import Testimonials from '../components/Testimonials.jsx'

const INTERVAL = 5000

export default function Home() {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)

  function next() { setActive((i) => (i + 1) % heroPhotos.length) }
  function prev() { setActive((i) => (i - 1 + heroPhotos.length) % heroPhotos.length) }

  useEffect(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(next, INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [active])

  const collectionCovers = categories.map((cat) => ({
    name: cat,
    photo: photos.find((p) => p.category === cat) || photos[0],
  }))

  return (
    <>
      {/* ── Full-bleed hero, text + quick-booking card overlaid ── */}
      <section className="hero-full">
        {heroPhotos.map((p, i) => (
          <Photo
            key={p.src}
            src={p.src}
            alt={p.alt}
            eager={i === 0}
            className={i === active ? 'hero-img is-active' : 'hero-img'}
            style={{
              '--focus': p.focus || 'center center',
              '--focus-mobile': p.focusMobile || p.focus || 'center center',
            }}
          />
        ))}
        <div className="hero-scrim" />

        <button className="hero-nav hero-prev" onClick={prev} aria-label="Previous photo">‹</button>
        <button className="hero-nav hero-next" onClick={next} aria-label="Next photo">›</button>

        <div className="hero-overlay">
          <h1>{site.name}</h1>
          <p>{site.tagline}</p>
          <QuickBooking />
        </div>
      </section>

      {/* ── Stat row, overlapping the hero's bottom edge ── */}
      <div className="stat-row">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── Recent work, 2x2 ── */}
      <section className="section">
        <p className="eyebrow">Recent work</p>
        <h2>A closer look</h2>
        <div className="work-grid">
          {photos.slice(0, 4).map((p) => (
            <Photo key={p.src} src={p.src} alt={p.alt} className="work-img" />
          ))}
        </div>
        <Link to="/gallery" className="textlink">See the full portfolio</Link>
      </section>

      {/* ── How it works ── */}
      <section className="section how">
        <p className="eyebrow">How it works</p>
        <h2>One form to book</h2>
        <div className="how-row">
          {howItWorks.map((step, i) => (
            <div className="how-step" key={step.title}>
              <Icon name={step.icon} />
              <div>
                <h3>{i + 1}. {step.title}</h3>
                <p className="muted">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Session types, priced ── */}
      {/* ── Session types, destination-card style ── */}
      <section className="section">
        <div className="collections-head">
          <div>
            <p className="eyebrow">Sessions</p>
            <h2 style={{ marginBottom: 0 }}>Pick what fits</h2>
          </div>
          <div className="filters">
            {['All', ...categories].map((c) => (
              <button key={c} className={c === 'All' ? 'chip is-on' : 'chip'}>{c}</button>
            ))}
          </div>
        </div>

        <div className="collections">
          {collectionCovers.map((c) => {
            const price = site.pricing.find((p) => p.name.toLowerCase().includes(c.name.toLowerCase()))
            return (
              <div className="collection-card" key={c.name}>
                <Photo src={c.photo.src} alt={c.photo.alt} className="collection-img" />
                <div className="collection-scrim" />
                <button className="collection-bookmark" aria-label={`Save ${c.name}`}>♡</button>
                <div className="collection-caption">
                  <h3>{c.name}</h3>
                  <p>{price ? price.price : 'See pricing'}</p>
                  <Link to="/pricing">Explore →</Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <Testimonials />
    </>
  )
}