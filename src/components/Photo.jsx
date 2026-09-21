import { useState } from 'react'

// A single image that degrades gracefully: if the file is missing,
// you get a neutral block and the alt text instead of a broken icon.
export default function Photo({ src, alt, className = '', onClick, eager = false }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`photo-missing ${className}`} role="img" aria-label={alt}>
        <span>{alt}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onClick={onClick}
      onError={() => setFailed(true)}
    />
  )
}
