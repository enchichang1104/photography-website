import { useSearchParams } from 'react-router-dom'
import { site, quickBookingForm } from '../data/site.js'

export default function Book() {
  const [params] = useSearchParams()
  const date = params.get('date') || ''
  const session = params.get('session') || ''

  // 如果 site.js 的 quickBookingForm 填了 entry 編號，就把日期與服務預先填進表單
  let src = site.formEmbed
  const { sessionTypeEntry, dateEntry, sessionValues = {} } = quickBookingForm
  const fill = new URLSearchParams()
  if (sessionTypeEntry && session) {
    fill.set(sessionTypeEntry, sessionValues[session] || session)
  }
  if (dateEntry && date) fill.set(dateEntry, date)
  if (fill.toString()) {
    fill.set('usp', 'pp_url')
    src += (src.includes('?') ? '&' : '?') + fill.toString()
  }

  return (
    <section className="section narrow page-center">
      <h1>Book a session</h1>
      <p>
        Fill this in and I'll reply within 48 hours with availability and a
        quote. Nothing is confirmed until we've both agreed on a date, so
        there's no commitment in sending it.
      </p>

      {(date || session) && (
        <p className="book-note">
          Selected Date: <strong>{date || 'Not selected'}</strong>
          {session && <> · Service: <strong>{session}</strong></>}
        </p>
      )}
      
      <div className="form-wrap">
        <iframe
          key={src}
          src={src}
          title="Booking enquiry form"
          width="100%"
          height="1100"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>

      <p className="muted">
        Form not loading?{' '}
        <a href={site.formLink} target="_blank" rel="noreferrer">
          Open it in a new tab
        </a>{' '}
        or email me at <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </section>
  )
}