import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

export default function Pricing() {
  return (
    <section className="section narrow">
      <h1>Pricing</h1>
      <p className="muted">
        Every session is different, so treat these as starting points.
        Tell me what you have in mind and I'll quote properly.
      </p>

      <ul className="price-list">
        {site.pricing.map((item) => (
          <li key={item.name}>
            <div>
              <h3>{item.name}</h3>
              <p className="muted">{item.detail}</p>
            </div>
            <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>

      <Link to="/book" className="btn">Book a session</Link>
    </section>
  )
}
