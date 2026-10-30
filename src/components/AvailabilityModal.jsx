import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { busyDates } from '../data/site.js'
import { Link } from 'react-router-dom'

const pad = (n) => String(n).padStart(2, '0')
const toStr = (y, m, d) => `${y}-${pad(m + 1)}-${pad(d)}`          // m 是 0–11
// 容許你寫 '2026-11-8'，會自動補成 '2026-11-08'，避免比對失敗
const norm = (s) =>
  s.replace(/^(\d{4})-(\d{1,2})-(\d{1,2})$/, (_, y, m, d) => `${y}-${pad(m)}-${pad(d)}`)

function todayStr() {
  const d = new Date()
  return toStr(d.getFullYear(), d.getMonth(), d.getDate())
}

function isBusy(str) {
  return busyDates.some((item) => {
    if (typeof item === 'string') return norm(item) === str
    return str >= norm(item.from) && str <= norm(item.to || item.from)
  })
}

function getStatus(str) {
  if (!str) return 'none'
  if (str < todayStr()) return 'past'
  return isBusy(str) ? 'busy' : 'ok'
}

// 彈跳視窗上的文字，想改說法直接改這裡
const MESSAGES = {
  none: { icon: '?', title: 'Pick a date',                sub: 'Pick a date' },
  ok:   { icon: '✓', title: 'This date is available',     sub: 'This date is available' },
  busy: { icon: '✕', title: 'Sorry, that date is taken',  sub: 'Sorry, that date is taken' },
  past: { icon: '!', title: 'That date has passed',       sub: 'That date has passed' },
}
const WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

export default function AvailabilityModal({ initialDate, sessionType, onDateChange, onClose }) {
  const today = todayStr()
  const [picked, setPicked] = useState(initialDate || '')

  // 月曆一開始顯示的月份：選的那天所在月份，沒選或已過期就顯示本月
  const start = initialDate && initialDate >= today ? initialDate : today
  const [view, setView] = useState({
    y: Number(start.slice(0, 4)),
    m: Number(start.slice(5, 7)) - 1,
  })

  const closeRef = useRef(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  // Esc 關閉、鎖住背景捲動、一開始把焦點放在關閉鈕
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onCloseRef.current() }
    window.addEventListener('keydown', onKey)
    const before = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = before
    }
  }, [])

  const status = getStatus(picked)
  const msg = MESSAGES[status]

   // 帶著選好的日期與服務類型，進入站內的預約頁
  const bookingPath = `/book?${new URLSearchParams({ session: sessionType, date: picked })}`

  const isCurrentMonth =
    view.y === Number(today.slice(0, 4)) && view.m === Number(today.slice(5, 7)) - 1

  function shift(step) {
    setView(({ y, m }) => {
      const d = new Date(y, m + step, 1)
      return { y: d.getFullYear(), m: d.getMonth() }
    })
  }
  function pick(str) {
    setPicked(str)
    onDateChange(str)     // 同步回首頁預約卡片的日期欄位
  }

  const firstDay = new Date(view.y, view.m, 1).getDay()
  const total = new Date(view.y, view.m + 1, 0).getDate()
  const cells = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: total }, (_, i) => i + 1),
  ]

  // 用 portal 掛到 <body>，才不會被首頁大圖的圖層或置頂標題列蓋住
  return createPortal(
    <div className="avail-overlay" onClick={onClose}>
      <div
        className="avail-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="avail-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="avail-close" onClick={onClose} aria-label="Close">✕</button>

        {/* 結果：可以 / 不行 / 過期 / 尚未選擇 */}
        <div className={`avail-status is-${status}`} aria-live="polite">
          <span className="avail-icon" aria-hidden="true">{msg.icon}</span>
          <div>
            <h3 id="avail-title">{msg.title}</h3>
            <p>{picked ? `${picked} · ${msg.sub}` : msg.sub}</p>
          </div>
        </div>

        {status === 'ok' && (
          <Link to={bookingPath} className="btn avail-cta" onClick={onClose}>
            Continue to booking →
          </Link>
        )}

        {/* 月曆：紅色是你已經有安排的日子 */}
        <div className="avail-cal">
          <div className="avail-cal-head">
            <button type="button" onClick={() => shift(-1)} disabled={isCurrentMonth} aria-label="Previous month">‹</button>
            <span>{view.y} / {pad(view.m + 1)}</span>
            <button type="button" onClick={() => shift(1)} aria-label="Next month">›</button>
          </div>

          <div className="avail-grid avail-week">
            {WEEK.map((w) => <span key={w}>{w}</span>)}
          </div>

          <div className="avail-grid">
            {cells.map((d, idx) => {
              if (d === null) return <span key={`e${idx}`} />
              const str = toStr(view.y, view.m, d)
              const st = getStatus(str)
              return (
                <button
                  type="button"
                  key={str}
                  className={[
                    'avail-day',
                    `is-${st}`,
                    str === picked ? 'is-picked' : '',
                    str === today ? 'is-today' : '',
                  ].join(' ')}
                  disabled={st === 'past'}
                  onClick={() => pick(str)}
                  aria-pressed={str === picked}
                  aria-label={st === 'busy' ? `${str}（Booked）` : str}
                >
                  {d}
                </button>
              )
            })}
          </div>

          <div className="avail-legend">
            <span><i className="lg lg-busy" />Booked</span>
            <span><i className="lg lg-picked" />Selected Date</span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}