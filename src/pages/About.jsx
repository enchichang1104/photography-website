import { Link } from 'react-router-dom'
import { site, aboutPhotos } from '../data/site.js'
import Photo from '../components/Photo.jsx'

export default function About() {
  // 右側大圖用 aboutPhotos 的第一張
  const main = aboutPhotos[0]

  return (
    <div className="about-band">
      <section className="about-card page-center">
        {/* 左：標籤、標題、文字、按鈕 */}
        <div className="about-copy">
          <span className="about-badge">關於我 · About me</span>
          <h1>{site.aboutTitle || site.name}</h1>

          {site.about.map((paragraph, i) => (
            <p key={i} className="muted">{paragraph}</p>
          ))}

          <div className="about-actions">
            <Link to="/book" className="btn">預約拍攝</Link>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn btn-light"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* 右：大圖 */}
        <Photo src={main.src} alt={main.alt} className="about-visual" />
      </section>
    </div>
  )
}