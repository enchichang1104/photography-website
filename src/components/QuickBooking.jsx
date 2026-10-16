import { useState } from 'react'
import { site, quickBookingForm } from '../data/site.js'

export default function QuickBooking() {
  const sessionNames = site.pricing.map((p) => p.name)
  const [sessionType, setSessionType] = useState(sessionNames[0])
  const [date, setDate] = useState('')

  // Builds a pre-filled Google Form link when entry IDs are set;
  // otherwise falls back to the plain form link.
  function buildLink() {
    const { sessionTypeEntry, dateEntry } = quickBookingForm
    if (!sessionTypeEntry && !dateEntry) return site.formLink

    const params = new URLSearchParams({ usp: 'pp_url' })
    if (sessionTypeEntry) params.set(sessionTypeEntry, sessionType)
    if (dateEntry && date) params.set(dateEntry, date)
    const sep = site.formLink.includes('?') ? '&' : '?'
    return `${site.formLink}${sep}${params.toString()}`
  }

  return (
    <div className="quick-card">
      <div className="quick-field">
        <label htmlFor="qb-type">Session</label>
        <select id="qb-type" value={sessionType} onChange={(e) => setSessionType(e.target.value)}>
          {sessionNames.map((n) => <option key={n} value={n}>{n}</option>)}
        </select>
      </div>

      <div className="quick-field">
        <label htmlFor="qb-date">Preferred date</label>
        <input id="qb-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>

      <a className="btn quick-btn" href={buildLink()} target="_blank" rel="noreferrer">
        Check availability
      </a>
    </div>
  )
}