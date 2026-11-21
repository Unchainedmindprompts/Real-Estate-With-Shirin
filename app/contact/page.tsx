import type { Metadata } from 'next'
import Image from 'next/image'
import { BASE_URL, WEBSITE_ID, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
import EditorialContactForm from '@/components/editorial/EditorialContactForm'

export const metadata: Metadata = {
  title: 'Contact Shirin Abplanalp | Northern Idaho Realtor · Berkshire Hathaway HomeServices Jacklin Real Estate',
  description:
    "Get in touch with Shirin Abplanalp, licensed Northern Idaho realtor at Berkshire Hathaway HomeServices Jacklin Real Estate. Serving Post Falls, Coeur d'Alene, Hayden, and Kootenai County.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${BASE_URL}/contact#webpage`,
  name: 'Contact Shirin Abplanalp',
  url: `${BASE_URL}/contact`,
  isPartOf: { '@id': WEBSITE_ID },
  mainEntity: BRAND_PUBLISHER_STUB,
  breadcrumb: { '@id': `${BASE_URL}/contact#breadcrumb` },
  inLanguage: 'en-US',
}

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${BASE_URL}/contact#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE_URL}/contact` },
  ],
}

export default function ContactPage() {
  return (
    <div className="ed-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      {/* Deep Forest-Green Editorial Hero */}
      <section className="ed-forest-hero" style={{ paddingBottom: '74px' }} aria-labelledby="contact-title">
        <div className="ed-hero-backdrop" aria-hidden="true" />
        <div className="ed-container" style={{ position: 'relative' }}>
          <p className="ed-eyebrow ed-eyebrow-light">Get in Touch</p>
          <h1 id="contact-title">
            Let’s talk about <em>your move.</em>
          </h1>
          <p className="ed-hero-lead">
            Whether you’re buying, selling, or just starting to explore North Idaho — reach out. No pressure, no pitch, just an honest local conversation.
          </p>
        </div>
      </section>

      {/* 2-Column Editorial Contact Layout */}
      <section style={{ padding: '88px 0 100px', background: 'var(--alabaster)' }} aria-label="Contact form and details">
        <div className="ed-container ed-contact-grid">
          <EditorialContactForm />

          <aside style={{ display: 'flex', flexDirection: 'column', gap: '26px' }} aria-label="Direct contact details">
            <div className="ed-advisor-card">
              <div className="ed-advisor-top">
                <Image src="/images/shirin-portrait-2026.png" alt="Shirin Abplanalp" width={68} height={68} sizes="68px" preload />
                <div>
                  <p style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--bronze-light)' }}>Direct Line</p>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '25px', color: '#FAF7F1', lineHeight: 1.15, marginTop: '2px' }}>Shirin Abplanalp</p>
                  <p style={{ fontSize: '12px', color: 'rgba(247,244,238,0.7)', marginTop: '2px' }}>BHHS Jacklin Real Estate</p>
                </div>
              </div>

              <dl style={{ marginTop: '22px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ paddingBottom: '14px', borderBottom: '1px solid rgba(247,244,238,0.14)' }}>
                  <dt style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--bronze-light)', marginBottom: '4px' }}>Phone</dt>
                  <dd style={{ fontSize: '15px', color: '#FAF7F1' }}>
                    <a href="tel:+12086607468">(208) 660-7468</a>
                  </dd>
                </div>
                <div style={{ paddingBottom: '14px', borderBottom: '1px solid rgba(247,244,238,0.14)' }}>
                  <dt style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--bronze-light)', marginBottom: '4px' }}>Email</dt>
                  <dd style={{ fontSize: '15px', color: '#FAF7F1' }}>
                    <a href="mailto:dreamlifeinidaho@gmail.com">dreamlifeinidaho@gmail.com</a>
                  </dd>
                </div>
                <div style={{ paddingBottom: '14px', borderBottom: '1px solid rgba(247,244,238,0.14)' }}>
                  <dt style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--bronze-light)', marginBottom: '4px' }}>Office Address</dt>
                  <dd style={{ fontSize: '15px', color: '#FAF7F1', lineHeight: 1.6 }}>
                    1927 W. Riverstone Drive
                    <br />
                    Coeur d’Alene, ID 83814
                  </dd>
                </div>
                <div>
                  <dt style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--bronze-light)', marginBottom: '4px' }}>License</dt>
                  <dd style={{ fontSize: '15px', color: '#FAF7F1' }}>Idaho RE License #1371861</dd>
                </div>
              </dl>
            </div>

            <div style={{ border: '1px solid var(--hairline)', background: 'var(--alabaster-card)', padding: '28px 30px' }}>
              <h3 style={{ fontSize: '24px', color: 'var(--pine)', marginBottom: '14px' }}>What happens next</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', lineHeight: 1.65, color: 'var(--ink-muted)' }}>
                <li style={{ position: 'relative', paddingLeft: '18px' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--bronze)' }}>—</span>
                  You hear back directly from Shirin — never an assistant or call center.
                </li>
                <li style={{ position: 'relative', paddingLeft: '18px' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--bronze)' }}>—</span>
                  Zero automated drip spam or unsolicited phone sequences.
                </li>
                <li style={{ position: 'relative', paddingLeft: '18px' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--bronze)' }}>—</span>
                  Honest local context on towns, pricing, and timing tailored to your goals.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
