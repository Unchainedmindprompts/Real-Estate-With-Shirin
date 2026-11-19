import Link from 'next/link'
import FaqAccordion, { type FaqItem } from '@/components/editorial/FaqAccordion'
import BudgetExplorerClient, { type BudgetBand } from '@/components/editorial/BudgetExplorerClient'

export interface AreaGuideConfig {
  eyebrow: string
  titleLead: string
  titleEm: string
  heroLead: string
  heroImage: string
  heroAlt: string
  idxUrl: string
  idxLabel: string
  stats: { value: string; label: string; sub: string }[]
  marketHeadingLead: string
  marketHeadingEm: string
  marketParagraphs: string[]
  marketLinks: { label: string; href: string }[]
  advisorRole: string
  advisorQuote: string
  advisorFacts: { label: string; value: string }[]
  advisorFootnote?: string
  hoodHeadingLead: string
  hoodHeadingEm: string
  hoodIntro: string
  neighborhoods: { name: string; tag: string; img: string; alt: string; desc: string }[]
  spotlightEyebrow: string
  spotlightHeadingLead: string
  spotlightHeadingEm: string
  spotlightIntro: string
  spotlightCards: { num: string; title: string; desc: string }[]
  budgetHeadingLead: string
  budgetHeadingEm: string
  costGuideHref?: string
  costGuideLabel?: string
  budgetBands: BudgetBand[]
  faqHeadingLead: string
  faqHeadingEm: string
  faqIntro: string
  faqs: FaqItem[]
  closingEyebrow: string
  closingHeadingLead: string
  closingHeadingEm: string
  closingCopy: string
}

export default function AreaGuideTemplate({ config }: { config: AreaGuideConfig }) {
  return (
    <div className="ed-page">
      {/* Full-Bleed Photo Hero + 4-Stat Glass Bar */}
      <section className="ed-photo-hero is-tall" aria-labelledby="area-hero-title">
        <img className="ed-photo-hero-img" src={config.heroImage} alt={config.heroAlt} loading="eager" />
        <div className="ed-photo-hero-scrim" aria-hidden="true" />
        <div className="ed-container ed-photo-hero-inner">
          <div style={{ maxWidth: '760px' }}>
            <p className="ed-eyebrow ed-eyebrow-light">{config.eyebrow}</p>
            <h1 id="area-hero-title">
              {config.titleLead} <em>{config.titleEm}</em>
            </h1>
            <p className="ed-hero-lead" style={{ maxWidth: '640px', color: 'rgba(247,244,238,0.88)' }}>
              {config.heroLead}
            </p>
            <div className="ed-photo-hero-actions">
              <a className="ed-btn-alabaster" href={config.idxUrl} target="_blank" rel="noopener noreferrer">
                {config.idxLabel} <span aria-hidden="true">↗</span>
              </a>
              <a className="ed-link-light" href="#neighborhoods">
                Explore Neighborhoods <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <dl className="ed-stat-bar" aria-label="Market snapshot">
            {config.stats.map((st) => (
              <div key={st.label} className="ed-stat-cell">
                <dt>{st.label}</dt>
                <dd>{st.value}</dd>
                <span className="ed-stat-sub">{st.sub}</span>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Market Right Now + Shirin Local Advisor Card */}
      <section className="ed-market-section" aria-labelledby="area-market-title">
        <div className="ed-container ed-market-grid">
          <div className="ed-market-prose">
            <p className="ed-eyebrow">The Market</p>
            <h2 id="area-market-title">
              {config.marketHeadingLead} <em>{config.marketHeadingEm}</em>
            </h2>
            {config.marketParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <div style={{ marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '28px' }}>
              {config.marketLinks.map((lnk) => (
                <Link key={lnk.href} className="ed-link-underlined" href={lnk.href}>
                  {lnk.label} <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>

          <aside className="ed-advisor-card" aria-label="Local facts and advisor note">
            <div className="ed-advisor-top">
              <img src="/images/shirin-portrait-2026.png" alt="Shirin Abplanalp" loading="lazy" />
              <div>
                <p style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--bronze-light)' }}>Local Perspective</p>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '24px', color: '#FAF7F1', lineHeight: 1.15, marginTop: '2px' }}>Shirin Abplanalp</p>
                <p style={{ fontSize: '12px', color: 'rgba(247,244,238,0.68)', marginTop: '2px' }}>{config.advisorRole}</p>
              </div>
            </div>
            <blockquote className="ed-advisor-quote">“{config.advisorQuote}”</blockquote>
            <dl className="ed-advisor-facts">
              {config.advisorFacts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
            {config.advisorFootnote && (
              <p style={{ fontSize: '11px', color: 'rgba(247,244,238,0.52)', marginTop: '14px', lineHeight: 1.5 }}>
                {config.advisorFootnote}
              </p>
            )}
            <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
              <Link className="ed-btn-alabaster" href="/contact">
                Ask Shirin <span aria-hidden="true">↗</span>
              </Link>
              <span className="ed-portrait-sig" aria-hidden="true">Shirin</span>
            </div>
          </aside>
        </div>
      </section>

      {/* Visual Neighborhood Lookbook */}
      <section style={{ padding: '92px 0', background: 'var(--alabaster-warm)', borderBottom: '1px solid var(--hairline)' }} id="neighborhoods" aria-labelledby="area-hoods-title">
        <div className="ed-container">
          <div className="ed-section-header">
            <div>
              <p className="ed-eyebrow">Where to Look</p>
              <h2 id="area-hoods-title">
                {config.hoodHeadingLead} <em>{config.hoodHeadingEm}</em>
              </h2>
            </div>
            <p style={{ maxWidth: '460px', fontSize: '15px', lineHeight: 1.7, color: 'var(--ink-muted)' }}>
              {config.hoodIntro}
            </p>
          </div>

          <div className="ed-hood-grid">
            {config.neighborhoods.map((h) => (
              <article key={h.name} className="ed-hood-card">
                <div className="ed-hood-body">
                  <p className="ed-card-kicker" style={{ marginBottom: '10px' }}>{h.tag}</p>
                  <h3>{h.name}</h3>
                  <p>{h.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Forest Green 3-Pillar Local Spotlight */}
      <section className="ed-forest-band" aria-labelledby="area-spotlight-title">
        <div className="ed-container">
          <div style={{ maxWidth: '720px', marginBottom: '52px' }}>
            <p className="ed-eyebrow ed-eyebrow-light">{config.spotlightEyebrow}</p>
            <h2 id="area-spotlight-title" style={{ fontSize: 'clamp(34px, 3.8vw, 54px)', lineHeight: 1.08, marginTop: '14px', color: '#FAF7F1' }}>
              {config.spotlightHeadingLead}{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--bronze-light)' }}>{config.spotlightHeadingEm}</em>
            </h2>
            <p style={{ marginTop: '18px', fontSize: '16px', lineHeight: 1.75, color: 'rgba(247,244,238,0.8)' }}>
              {config.spotlightIntro}
            </p>
          </div>

          <div className="ed-tier-grid">
            {config.spotlightCards.map((c) => (
              <article key={c.num} className="ed-tier-card">
                <span className="ed-tier-num">{c.num}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Price Band Explorer */}
      <BudgetExplorerClient
        headingLead={config.budgetHeadingLead}
        headingEm={config.budgetHeadingEm}
        costGuideHref={config.costGuideHref}
        costGuideLabel={config.costGuideLabel}
        bands={config.budgetBands}
        idxUrl={config.idxUrl}
      />

      {/* Quiet Hairline FAQ Accordions */}
      <section style={{ padding: '96px 0', background: 'var(--alabaster)' }} id="faq" aria-labelledby="area-faq-title">
        <div className="ed-container ed-faq-layout">
          <div>
            <p className="ed-eyebrow">Common Questions</p>
            <h2 id="area-faq-title" style={{ fontSize: 'clamp(34px, 3.4vw, 48px)', lineHeight: 1.1, marginTop: '14px', color: 'var(--pine)' }}>
              {config.faqHeadingLead} <em>{config.faqHeadingEm}</em>
            </h2>
            <p style={{ margin: '18px 0 28px', fontSize: '15px', lineHeight: 1.75, color: 'var(--ink-muted)' }}>
              {config.faqIntro}
            </p>
            <Link className="ed-btn-outline-pine" href="/contact">
              Ask a Specific Question <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <FaqAccordion items={config.faqs} />
        </div>
      </section>

      {/* Full-Bleed Sunset Closing Band */}
      <section className="ed-closing-band" aria-labelledby="area-closing-title">
        <img className="ed-closing-photo" src="/images/field-guide/sunset-marina-clear-2048.webp" alt="Calm sunset reflection over North Idaho water" loading="lazy" />
        <div className="ed-closing-scrim" aria-hidden="true" />
        <div className="ed-container">
          <div className="ed-closing-inner">
            <p className="ed-eyebrow ed-eyebrow-light">{config.closingEyebrow}</p>
            <h2 id="area-closing-title">
              {config.closingHeadingLead} <em>{config.closingHeadingEm}</em>
            </h2>
            <p style={{ marginTop: '18px', fontSize: '16px', lineHeight: 1.72, color: 'rgba(247,244,238,0.84)' }}>
              {config.closingCopy}
            </p>
            <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
              <Link className="ed-btn-alabaster" href="/contact">
                Start the Conversation <span aria-hidden="true">↗</span>
              </Link>
              <a className="ed-link-light" href={config.idxUrl} target="_blank" rel="noopener noreferrer">
                Browse Live MLS Listings <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
