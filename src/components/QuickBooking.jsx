import { useState } from 'react'
import { site } from '../data/site.js'
import AvailabilityModal from './AvailabilityModal.jsx'

export default function QuickBooking() {
  const sessionNames = site.pricing.map((p) => p.name)
  const [sessionType, setSessionType] = useState(sessionNames[0])
  const [date, setDate] = useState('')
  const [open, setOpen] = useState(false)

  return (
    <>
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

        <button type="button" className="btn quick-btn" onClick={() => setOpen(true)}>
          Check availability
        </button>
      </div>

      {open && (
        <AvailabilityModal
          initialDate={date}
          sessionType={sessionType}
          onDateChange={setDate}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}