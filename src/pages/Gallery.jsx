import { useState } from 'react'
import { photos, categories } from '../data/site.js'
import Photo from '../components/Photo.jsx'
import Lightbox from '../components/Lightbox.jsx'

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [openAt, setOpenAt] = useState(null) // null = lightbox closed

  const shown = filter === 'All'
    ? photos
    : photos.filter((p) => p.category === filter)

  // Wraps around: going past the last photo returns to the first.
  function move(step) {
    setOpenAt((i) => (i + step + shown.length) % shown.length)
  }

  return (
    <section className="section">
      <h1>Work</h1>

      <div className="filters">
        {['All', ...categories].map((c) => (
          <button
            key={c}
            className={filter === c ? 'chip is-on' : 'chip'}
            onClick={() => { setFilter(c); setOpenAt(null) }}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid">
        {shown.map((p, i) => (
          <button key={p.src} className="grid-btn" onClick={() => setOpenAt(i)}>
            <Photo src={p.src} alt={p.alt} className="grid-img" />
          </button>
        ))}
      </div>

      {shown.length === 0 && (
        <p className="muted">Nothing in this category yet.</p>
      )}

      {openAt !== null && (
        <Lightbox
          photos={shown}
          index={openAt}
          onClose={() => setOpenAt(null)}
          onMove={move}
        />
      )}
    </section>
  )
}
