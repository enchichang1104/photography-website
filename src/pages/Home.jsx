import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import Photo from '../components/Photo.jsx'
import { site, categories, stats, heroPhotos, howItWorks, recentWork, sessionTypes } from '../data/site.js'
import Icon from '../components/Icon.jsx'
import QuickBooking from '../components/QuickBooking.jsx'
import Testimonials from '../components/Testimonials.jsx'

//Hero Slideshow (首頁輪播)
const INTERVAL = 5000  // 自動輪播間隔時間（5秒）

export default function Home() {
  const [active, setActive] = useState(0) // 目前顯示的輪播圖片索引 (Index)
  const timerRef = useRef(null)           // 用來儲存 setInterval 的參考，避免重繪

  // 控制邏輯（使用餘數運算 % 達成循環輪播）
  function next() { setActive((i) => (i + 1) % heroPhotos.length) }
  function prev() { setActive((i) => (i - 1 + heroPhotos.length) % heroPhotos.length) }

  useEffect(() => { 
    clearInterval(timerRef.current)                   // 每次 active 改變時，先清除舊的計時器
    timerRef.current = setInterval(next, INTERVAL)    // 重新啟動 5 秒計時器
    return () => clearInterval(timerRef.current)      // 組件卸載或更新時的清理函數
  }, [active])

  // Data Mapping
  const collectionCovers = categories.map((cat) => ({
    name: cat,
    photo: recentWork.find((p) => p.category === cat) || recentWork[0],
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

      {/* ── Recent work, one card per category ── */}
      <section className="section">
        <p className="eyebrow">Recent work</p>
        <h2>A closer look</h2>

        <div className="work-grid">
          {recentWork.map((w) => (
            <Link to={`/gallery?category=${encodeURIComponent(w.category)}`} className="work-card" key={w.category}>
              <Photo src={w.src} alt={w.alt} className="work-card-img" />
              <div className="work-card-body">
                <p className="work-card-label">{w.category}</p>
                <h3>{w.title}</h3>
                <p className="muted">{w.blurb}</p>
              </div>
            </Link>
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

      {/* ── Session types, manually chosen covers ── */}
      <section className="section">
        <p className="eyebrow">category</p>
        <h2>Pick what fits</h2>

        <div className="collections collections-two">
          {sessionTypes.map((s) => (
            <div className="collection-card" key={s.name}>
              <Photo src={s.src} alt={s.alt} className="collection-img" />
              <div className="collection-scrim" />
              <div className="collection-caption">
                <h3>{s.name}</h3>
                <p>{s.price}</p>
                <Link to="/pricing">Explore →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
    </>
  )
}