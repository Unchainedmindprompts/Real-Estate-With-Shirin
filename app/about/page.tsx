import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL, WEBSITE_ID, AGENT_AUTHOR_STUB } from '@/lib/schema-ids'

export const metadata: Metadata = {
  title: 'About Shirin Abplanalp | North Idaho REALTOR®',
  description:
    'About Shirin Abplanalp, licensed North Idaho REALTOR® at BHHS Jacklin Real Estate. 11 years in real estate, 100+ transactions closed, 5× Top Producer.',
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
}

const jsonLdProfile = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${BASE_URL}/about#webpage`,
  url: `${BASE_URL}/about`,
  name: 'About Shirin Abplanalp | North Idaho REALTOR®',
  isPartOf: { '@id': WEBSITE_ID },
  mainEntity: AGENT_AUTHOR_STUB,
  breadcrumb: { '@id': `${BASE_URL}/about#breadcrumb` },
  inLanguage: 'en-US',
}

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${BASE_URL}/about#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'About', item: `${BASE_URL}/about` },
  ],
}

export default function AboutPage() {
  return (
    <div className="ed-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfile) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      {/* Deep Forest-Green Hero with Shirin's Emerald-Blouse Editorial Portrait */}
      <section className="ed-forest-hero" aria-labelledby="about-title">
        <div className="ed-hero-backdrop" aria-hidden="true" />
        <div className="ed-container ed-hero-grid">
          <div>
            <p className="ed-eyebrow ed-eyebrow-light">About Shirin</p>
            <h1 id="about-title">
              11 Years. 100+ Transactions.
              <br />
              One move that <em>changed everything.</em>
            </h1>
            <p className="ed-hero-lead">
              Before Shirin ever set foot in North Idaho, she had already built one of the strongest track records in Bend, Oregon real estate — closing over 100 personal transactions and earning Top Producer recognition for five consecutive years. That foundation is what every client benefits from today.
            </p>
            <div className="ed-photo-hero-actions">
              <Link className="ed-btn-alabaster" href="/contact">
                Let’s Talk About Your Move <span aria-hidden="true">↗</span>
              </Link>
              <a className="ed-link-light" href="#story">
                Read Her Story <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <aside className="ed-portrait-card" aria-label="Portrait of Shirin Abplanalp">
            <div className="ed-portrait-frame">
              <img src="/images/shirin-portrait-2026.png" alt="Shirin Abplanalp, North Idaho real estate advisor" loading="eager" />
            </div>
            <div className="ed-portrait-caption">
              <div>
                <p className="ed-portrait-kicker">North Idaho REALTOR®</p>
                <p className="ed-portrait-name">Shirin Abplanalp</p>
              </div>
              <span className="ed-portrait-sig" aria-hidden="true">Shirin</span>
            </div>
          </aside>
        </div>
      </section>

      {/* Homepage-Matching 3-Stat Strip */}
      <section style={{ background: 'var(--alabaster)', borderBottom: '1px solid var(--hairline)' }} aria-label="Track record">
        <div className="ed-container">
          <dl className="ed-stat-strip">
            <div className="ed-stat-strip-item">
              <dd style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(48px, 4.6vw, 66px)', lineHeight: 1, color: 'var(--pine)' }}>11</dd>
              <dt style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--bronze)' }}>Years in Real Estate</dt>
            </div>
            <div className="ed-stat-strip-item">
              <dd style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(48px, 4.6vw, 66px)', lineHeight: 1, color: 'var(--pine)' }}>100+</dd>
              <dt style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--bronze)' }}>Personal Transactions Closed</dt>
            </div>
            <div className="ed-stat-strip-item">
              <dd style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(48px, 4.6vw, 66px)', lineHeight: 1, color: 'var(--pine)' }}>5×</dd>
              <dt style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--bronze)' }}>Top Producer · Bend Premier</dt>
            </div>
          </dl>
        </div>
      </section>

      {/* Editorial Story Split */}
      <section style={{ padding: '96px 0', background: 'var(--alabaster)', borderBottom: '1px solid var(--hairline)' }} id="story" aria-labelledby="story-title">
        <div className="ed-container ed-story-grid">
          <div>
            <p className="ed-eyebrow">The Story</p>
            <h2 id="story-title" style={{ fontSize: 'clamp(34px, 3.6vw, 52px)', lineHeight: 1.08, marginTop: '14px', color: 'var(--pine)' }}>
              From Bend to North Idaho — <em>on purpose.</em>
            </h2>
            <p style={{ margin: '26px 0 22px', paddingLeft: '22px', borderLeft: '2px solid var(--bronze)', fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 2.3vw, 30px)', fontStyle: 'italic', lineHeight: 1.35, color: 'var(--pine)' }}>
              “Bend used to be the answer. Then it became the problem.”
            </p>
            <p style={{ marginTop: '18px', fontSize: '16px', lineHeight: 1.82, color: 'var(--ink-muted)' }}>
              Shirin watched it happen the way most people do — gradually, then all at once. The trails got crowded. The prices got serious. The thing that made it worth staying started feeling like a reason to leave.
            </p>
            <p style={{ marginTop: '18px', fontSize: '16px', lineHeight: 1.82, color: 'var(--ink-muted)' }}>
              She wasn’t looking for somewhere cheaper. She was looking for somewhere that still had what Bend used to have — actual lake access, real mountains, a community that hadn’t been discovered yet by everyone trying to escape the last place that got discovered.
            </p>
            <p style={{ marginTop: '18px', fontSize: '16px', lineHeight: 1.82, color: 'var(--ink-muted)' }}>
              North Idaho was that place. She made the move, put down roots, and hasn’t looked back.
            </p>
            <p style={{ marginTop: '18px', fontSize: '16px', lineHeight: 1.82, color: 'var(--ink-muted)' }}>
              Now she helps families do the same thing. Not just find a house — find the place. The difference is that she is not guessing what North Idaho feels like from a market report. She chose it herself, with the same questions her clients are asking right now. That is not a talking point. It is just true.
            </p>
            <div style={{ marginTop: '34px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--script)', fontSize: '46px', color: 'var(--bronze)', lineHeight: 1 }} aria-hidden="true">Shirin</span>
              <span style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>Licensed Since 2015 · SRES® Certified</span>
            </div>
          </div>

          <aside style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <img src="/images/lake-life.jpeg" alt="Summer on Lake Coeur d'Alene" loading="lazy" style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', border: '1px solid var(--hairline)' }} />
              <img src="/images/skiing-action-4k.webp" alt="Winter alpine skiing in North Idaho" loading="lazy" style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', border: '1px solid var(--hairline)' }} />
            </div>

            <div style={{ background: 'var(--alabaster-card)', border: '1px solid var(--hairline)', padding: '28px 28px 24px' }}>
              <p style={{ fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--bronze)', marginBottom: '16px' }}>Credentials &amp; Brokerage</p>
              <dl style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
                <div className="ed-compare-row"><dt style={{ color: 'var(--ink-muted)' }}>Idaho License</dt><dd style={{ fontWeight: 500 }}>#1371861</dd></div>
                <div className="ed-compare-row"><dt style={{ color: 'var(--ink-muted)' }}>Brokerage</dt><dd style={{ fontWeight: 500 }}>BHHS Jacklin Real Estate</dd></div>
                <div className="ed-compare-row"><dt style={{ color: 'var(--ink-muted)' }}>Licensed Since</dt><dd style={{ fontWeight: 500 }}>2015</dd></div>
                <div className="ed-compare-row"><dt style={{ color: 'var(--ink-muted)' }}>Designation</dt><dd style={{ fontWeight: 500 }}>SRES® Certified</dd></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}><dt style={{ color: 'var(--ink-muted)' }}>Office</dt><dd style={{ fontWeight: 500 }}>Coeur d’Alene, ID</dd></div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* What Sets Her Apart */}
      <section style={{ padding: '96px 0', background: 'var(--alabaster-warm)', borderBottom: '1px solid var(--hairline)' }} aria-labelledby="pillars-title">
        <div className="ed-container">
          <div className="ed-section-header">
            <div>
              <p className="ed-eyebrow">Why Work With Shirin</p>
              <h2 id="pillars-title">
                What sets her <em>apart.</em>
              </h2>
            </div>
            <Link className="ed-link-underlined" href="/buyers">
              Explore Buyer Representation <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="ed-pillars-grid">
            <article style={{ background: 'var(--alabaster)', border: '1px solid var(--hairline)', padding: '36px 32px' }}>
              <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '44px', lineHeight: 1, color: 'var(--bronze)', marginBottom: '18px' }}>01</span>
              <h3 style={{ fontSize: '28px', color: 'var(--pine)', lineHeight: 1.2 }}>Preparation</h3>
              <p style={{ marginTop: '14px', fontSize: '15px', lineHeight: 1.76, color: 'var(--ink-muted)' }}>
                Most buyers walk into a showing hoping the agent knows what they don’t. Shirin’s clients walk in already knowing — the neighborhood, the comps, the contingencies, and the questions worth asking.
              </p>
            </article>
            <article style={{ background: 'var(--alabaster)', border: '1px solid var(--hairline)', padding: '36px 32px' }}>
              <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '44px', lineHeight: 1, color: 'var(--bronze)', marginBottom: '18px' }}>02</span>
              <h3 style={{ fontSize: '28px', color: 'var(--pine)', lineHeight: 1.2 }}>Local Knowledge</h3>
              <p style={{ marginTop: '14px', fontSize: '15px', lineHeight: 1.76, color: 'var(--ink-muted)' }}>
                She didn’t study North Idaho from a data sheet — she chose it. Every recommendation comes from lived experience across all four seasons, not a recycled market summary.
              </p>
            </article>
            <article style={{ background: 'var(--alabaster)', border: '1px solid var(--hairline)', padding: '36px 32px' }}>
              <span style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: '44px', lineHeight: 1, color: 'var(--bronze)', marginBottom: '18px' }}>03</span>
              <h3 style={{ fontSize: '28px', color: 'var(--pine)', lineHeight: 1.2 }}>Client Outcomes</h3>
              <p style={{ marginTop: '14px', fontSize: '15px', lineHeight: 1.76, color: 'var(--ink-muted)' }}>
                Eleven years and 100+ transactions means she has seen nearly every scenario. That experience translates into fewer surprises, steadier negotiation, and stronger results.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Service Area Forest Band */}
      <section className="ed-forest-band" style={{ textAlign: 'center', padding: '84px 0' }} aria-labelledby="about-area-title">
        <div className="ed-container">
          <p className="ed-eyebrow ed-eyebrow-light">Service Area</p>
          <h2 id="about-area-title" style={{ fontSize: 'clamp(32px, 3.4vw, 48px)', lineHeight: 1.15, margin: '16px auto 0', maxWidth: '780px', color: '#FAF7F1' }}>
            Licensed across <em style={{ fontStyle: 'italic', color: 'var(--bronze-light)' }}>North Idaho.</em>
          </h2>
          <div style={{ margin: '30px auto 0', maxWidth: '920px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 18px', fontFamily: 'var(--serif)', fontSize: '23px', color: 'rgba(247,244,238,0.88)' }}>
            <Link href="/areas/coeur-dalene-idaho">Coeur d’Alene</Link><span style={{ color: 'var(--bronze-light)' }}>·</span>
            <Link href="/areas/post-falls-idaho">Post Falls</Link><span style={{ color: 'var(--bronze-light)' }}>·</span>
            <Link href="/areas/hayden-idaho">Hayden</Link><span style={{ color: 'var(--bronze-light)' }}>·</span>
            <Link href="/areas/rathdrum-idaho">Rathdrum</Link><span style={{ color: 'var(--bronze-light)' }}>·</span>
            <Link href="/areas/sandpoint-idaho">Sandpoint</Link><span style={{ color: 'var(--bronze-light)' }}>·</span>
            <span>Athol</span><span style={{ color: 'var(--bronze-light)' }}>·</span>
            <span>Bayview</span><span style={{ color: 'var(--bronze-light)' }}>·</span>
            <span>Harrison</span><span style={{ color: 'var(--bronze-light)' }}>·</span>
            <span>Wallace</span><span style={{ color: 'var(--bronze-light)' }}>·</span>
            <span>Kellogg</span>
          </div>
          <p style={{ marginTop: '18px', fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bronze-light)' }}>
            Kootenai · Bonner · Shoshone Counties
          </p>
        </div>
      </section>

      {/* Sunset Closing Band */}
      <section className="ed-closing-band" aria-labelledby="about-closing-title">
        <img className="ed-closing-photo" src="/images/field-guide/sunset-marina-clear-2048.webp" alt="Calm sunset reflection over Lake Coeur d'Alene" loading="lazy" />
        <div className="ed-closing-scrim" aria-hidden="true" />
        <div className="ed-container">
          <div className="ed-closing-inner">
            <p className="ed-eyebrow ed-eyebrow-light">Get in Touch</p>
            <h2 id="about-closing-title">
              Let’s start the <em>conversation.</em>
            </h2>
            <p style={{ marginTop: '18px', fontSize: '16px', lineHeight: 1.72, color: 'rgba(247,244,238,0.84)' }}>
              No pressure, no pitch. Whether you’re buying, selling, or figuring out if North Idaho is the right move — reach out directly at (208) 660-7468 or send a quick note.
            </p>
            <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
              <Link className="ed-btn-alabaster" href="/contact">
                Get in Touch <span aria-hidden="true">↗</span>
              </Link>
              <span className="ed-signature" aria-hidden="true">Shirin</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
