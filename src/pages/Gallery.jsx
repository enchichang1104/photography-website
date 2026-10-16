import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { recentWork, categories, photos } from '../data/site.js'
import Photo from '../components/Photo.jsx'
import Lightbox from '../components/Lightbox.jsx'

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams()

  // Read ?category=... from the URL. Falls back to 'All' if it's
  // missing, or if it doesn't match one of your real categories
  // (guards against someone hand-typing a bad URL).
  const urlCategory = searchParams.get('category')
  const initialFilter = categories.includes(urlCategory) ? urlCategory : 'All'

  const [filter, setFilter] = useState(initialFilter)
  const [openAt, setOpenAt] = useState(null)

  // If the person arrives here again with a different ?category=
  // while already on this page (clicking another Home card without
  // a full reload), keep the filter in sync with the URL.
  useEffect(() => {
    const next = categories.includes(urlCategory) ? urlCategory : 'All'
    setFilter(next)
  }, [urlCategory])

  const shown = filter === 'All'
    ? photos
    : photos.filter((p) => p.category === filter)

  function move(step) {
    setOpenAt((i) => (i + step + shown.length) % shown.length)
  }

  // Clicking a filter chip updates both the visible grid and the
  // URL, so the filtered view stays bookmarkable/shareable too.
  function selectFilter(c) {
    setFilter(c)
    setOpenAt(null)
    if (c === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category: c })
    }
  }

  return (
    <section className="section">
      <h1>Work</h1>

      <div className="filters">
        {['All', ...categories].map((c) => (
          <button
            key={c}
            className={filter === c ? 'chip is-on' : 'chip'}
            onClick={() => selectFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-masonry">
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