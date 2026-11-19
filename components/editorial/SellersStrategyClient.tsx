'use client'

import { useRef, useState } from 'react'

const STRATEGIES = {
  pricing: {
    num: '01 · Valuation',
    label: 'Pricing from Closed Sales',
    title: 'Pricing from closed sales, not wishful list prices.',
    desc: 'Overpriced homes sit — and sitting costs sellers far more than pricing accurately on day one. Shirin builds your pricing strategy from real recent closings, active competition, and neighborhood absorption.',
    points: [
      'Honest comparative market analysis grounded in closed Kootenai & Bonner County comps',
      'Clear view of list-to-sale ratios (currently 97–98% in Coeur d’Alene)',
      'Strategic launch pricing engineered to spark early showing momentum',
    ],
  },
  prep: {
    num: '02 · Presentation',
    label: 'Staging & 4K Media',
    title: 'Editorial presentation & high-ROI preparation.',
    desc: 'Not every pre-listing project pays you back. Before the photographer arrives, Shirin walks through room by room to separate high-impact updates from unnecessary expense.',
    points: [
      'Prioritized prep checklist focused on light, flow, and curb appeal',
      'Editorial 4K photography and twilight/aerial media tailored to North Idaho buyers',
      'Honest guidance on deferred maintenance before inspections',
    ],
  },
  reach: {
    num: '03 · Exposure',
    label: 'Out-of-State Reach',
    title: 'Reaching the out-of-state buyer pool.',
    desc: 'A major share of North Idaho demand comes from Washington, California, Oregon, and Arizona. Your listing needs to command attention online before a buyer ever books a flight to Spokane.',
    points: [
      'Backed by Berkshire Hathaway HomeServices Jacklin Real Estate’s regional & national network',
      'Positioned for relocation buyers searching online across CdA, Post Falls, Hayden & Sandpoint',
      'Remote video walkthrough readiness for serious out-of-state buyers',
    ],
  },
  closing: {
    num: '04 · Execution',
    label: 'Negotiation & Close',
    title: 'Steady negotiation through closing day.',
    desc: 'Getting an offer is only half the job. Protecting your net proceeds through inspection requests, appraisal, financing contingencies, and Idaho RE-21 deadlines is where experience pays off.',
    points: [
      'Line-by-line offer review comparing price, terms, financing strength, and contingencies',
      'Calm, fact-based inspection negotiation to prevent unnecessary concessions',
      'Clear weekly communication from contract acceptance to keys',
    ],
  },
} as const

type StrategyKey = keyof typeof STRATEGIES

export default function SellersStrategyClient() {
  const [active, setActive] = useState<StrategyKey>('pricing')
  const [address, setAddress] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [timing, setTiming] = useState('Within the next 3 months')
  const [status, setStatus] = useState<'idle' | 'sending' | 'accepted' | 'error'>('idle')
  const [msg, setMsg] = useState('')
  const reqId = useRef<string | null>(null)

  const s = STRATEGIES[active]

  async function handleValuationSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'sending' || status === 'accepted') return
    if (!address.trim() || !email.trim()) {
      setStatus('error')
      setMsg('Please enter your property address and email address.')
      return
    }
    setStatus('sending')
    setMsg('')
    try {
      reqId.current ??= crypto.randomUUID()
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim() || 'Homeowner Valuation Request',
          email: email.trim(),
          phone: '',
          helpType: 'Selling',
          message: `Local Home Valuation Request\nProperty Address / Neighborhood: ${address.trim()}\nTarget Timeline: ${timing}`,
          website: '',
          requestId: reqId.current,
        }),
        signal: AbortSignal.timeout(15_000),
      })
      const data = await res.json().catch(() => null)
      if (res.status === 202 && data?.ok === true) {
        setStatus('accepted')
        setMsg('Received — Shirin will follow up personally with a local market analysis.')
      } else {
        setStatus('error')
        setMsg(typeof data?.error === 'string' ? data.error : 'Could not send right now. Please call (208) 660-7468 or use the Contact page.')
      }
    } catch {
      setStatus('error')
      setMsg('Could not send right now. Please call (208) 660-7468 or use the Contact page.')
    }
  }

  return (
    <>
      <section style={{ padding: '96px 0', background: 'var(--alabaster-warm)', borderBottom: '1px solid var(--hairline)' }} id="strategy">
        <div className="ed-container">
          <div className="ed-section-header">
            <div>
              <p className="ed-eyebrow">How We Position Your Home</p>
              <h2>
                Strategy that <em>moves the needle.</em>
              </h2>
            </div>
          </div>

          <div className="ed-strategy-tabs" role="tablist" aria-label="Seller strategy pillars">
            {(Object.keys(STRATEGIES) as StrategyKey[]).map((key) => {
              const item = STRATEGIES[key]
              const isSelected = active === key
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`ed-strategy-tab${isSelected ? ' is-active' : ''}`}
                  onClick={() => setActive(key)}
                >
                  <span style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: isSelected ? 'var(--bronze-light)' : 'var(--bronze)' }}>
                    {item.num}
                  </span>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '22px', lineHeight: 1.2 }}>{item.label}</span>
                </button>
              )
            })}
          </div>

          <div className="ed-strategy-panel" aria-live="polite">
            <div>
              <h3 style={{ fontSize: 'clamp(28px, 2.8vw, 40px)', lineHeight: 1.15, color: 'var(--pine)' }}>{s.title}</h3>
              <p style={{ marginTop: '16px', fontSize: '16px', lineHeight: 1.78, color: 'var(--ink-muted)' }}>{s.desc}</p>
            </div>
            <ul style={{ listStyle: 'none', padding: '0 0 0 28px', borderLeft: '1px solid var(--hairline)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {s.points.map((pt) => (
                <li key={pt} style={{ position: 'relative', paddingLeft: '18px', fontSize: '14px', lineHeight: 1.65, color: 'var(--pine)' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--bronze)' }}>—</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="ed-forest-band" id="valuation" aria-labelledby="valuation-title">
        <div className="ed-container ed-market-grid" style={{ alignItems: 'center' }}>
          <div>
            <p className="ed-eyebrow ed-eyebrow-light">Honest Home Valuation</p>
            <h2 id="valuation-title" style={{ fontSize: 'clamp(34px, 3.6vw, 52px)', lineHeight: 1.08, marginTop: '14px', color: '#FAF7F1' }}>
              What is your home <em style={{ fontStyle: 'italic', color: 'var(--bronze-light)' }}>actually worth?</em>
            </h2>
            <p style={{ marginTop: '18px', fontSize: '15px', lineHeight: 1.75, color: 'rgba(247,244,238,0.82)' }}>
              Automated online estimates miss lot orientation, upgrades, and street-level comps in North Idaho. Share a few details and Shirin will prepare a real comparative market analysis grounded in recent closed sales.
            </p>
          </div>

          <form
            onSubmit={handleValuationSubmit}
            noValidate
            className="ed-form-grid"
            style={{ background: 'var(--alabaster)', color: 'var(--pine)', padding: '38px 36px' }}
          >
            <div className="ed-field is-full">
              <label htmlFor="ed-val-addr">Property Address or Neighborhood *</label>
              <input
                id="ed-val-addr"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="e.g. 123 Pine St, Coeur d’Alene or Post Falls"
                required
              />
            </div>
            <div className="ed-field">
              <label htmlFor="ed-val-name">Your Name</label>
              <input id="ed-val-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="First & last name" />
            </div>
            <div className="ed-field">
              <label htmlFor="ed-val-email">Email Address *</label>
              <input id="ed-val-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
            </div>
            <div className="ed-field is-full">
              <label htmlFor="ed-val-time">Target Timeline</label>
              <select id="ed-val-time" value={timing} onChange={(e) => setTiming(e.target.value)}>
                <option value="Within the next 3 months">Within the next 3 months</option>
                <option value="Next 3 – 6 months">Next 3 – 6 months</option>
                <option value="Just exploring my options">Just exploring my options</option>
              </select>
            </div>
            <div className="ed-field is-full" style={{ marginTop: '6px', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <button type="submit" className="ed-btn-pine" disabled={status === 'sending' || status === 'accepted'}>
                {status === 'sending' ? 'Sending…' : status === 'accepted' ? 'Request Received' : 'Request Valuation ↗'}
              </button>
              {msg && (
                <span aria-live="polite" style={{ fontSize: '13px', color: status === 'error' ? '#8c2d23' : 'var(--forest)' }}>
                  {msg}
                </span>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
