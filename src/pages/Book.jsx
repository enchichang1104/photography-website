import { site } from '../data/site.js'

// The Google Form does all the work here. There is no backend:
// the visitor's answers go straight from their browser to Google,
// and land in your response spreadsheet.
export default function Book() {
  return (
    <section className="section narrow">
      <h1>Book a session</h1>
      <p>
        Fill this in and I'll reply within 48 hours with availability and a
        quote. Nothing is confirmed until we've both agreed on a date, so
        there's no commitment in sending it.
      </p>

      <div className="form-wrap">
        <iframe
          src={site.formEmbed}
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
