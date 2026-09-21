import { useEffect } from 'react'
import Photo from './Photo.jsx'

// Full-screen view of one photograph. Closes on Escape or a click
// on the backdrop; arrow keys move between images.
export default function Lightbox({ photos, index, onClose, onMove }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onMove(1)
      if (e.key === 'ArrowLeft') onMove(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    // This cleanup runs when the lightbox closes.
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onMove])

  const photo = photos[index]
  if (!photo) return null

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lb-close" onClick={onClose} aria-label="Close">Close</button>

      <button
        className="lb-nav lb-prev"
        aria-label="Previous photograph"
        onClick={(e) => { e.stopPropagation(); onMove(-1) }}
      >‹</button>

      <figure onClick={(e) => e.stopPropagation()}>
        <Photo src={photo.src} alt={photo.alt} eager />
        <figcaption>{index + 1} / {photos.length}</figcaption>
      </figure>

      <button
        className="lb-nav lb-next"
        aria-label="Next photograph"
        onClick={(e) => { e.stopPropagation(); onMove(1) }}
      >›</button>
    </div>
  )
}
