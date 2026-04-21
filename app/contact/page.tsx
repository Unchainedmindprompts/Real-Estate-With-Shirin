import type { Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Shirin Abplanalp | Northern Idaho Realtor · eXp Realty',
  description:
    "Get in touch with Shirin Abplanalp, licensed Northern Idaho realtor at eXp Realty. Serving Post Falls, Coeur d'Alene, Hayden, and Kootenai County.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/contact',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Shirin Abplanalp',
  url: 'https://www.realestatewithshirin.com/contact',
  mainEntity: {
    '@type': 'RealEstateAgent',
    '@id': 'https://www.realestatewithshirin.com/#business',
    name: 'Shirin Abplanalp',
    telephone: '(208) 660-7468',
    email: 'dreamlifeinidaho@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '510 S Clearwater Loop, Suite 100',
      addressLocality: 'Post Falls',
      addressRegion: 'ID',
      postalCode: '83854',
      addressCountry: 'US',
    },
  },
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-home.jpeg"
            alt="Northern Idaho landscape"
            fill
            priority
            className="object-cover"
            
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,26,23,0.35), rgba(28,26,23,0.6))' }} />
        </div>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-3xl mx-auto">
          <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>GET IN TOUCH</p>
          <h1
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
              fontSize: 'clamp(36px, 6vw, 56px)',
              lineHeight: 1.1,
              color: '#FAFAF8',
            }}
          >
            Let&apos;s Start the Conversation
          </h1>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '18px', lineHeight: 1.7, color: '#E8DDD0' }}>
            Whether you&apos;re buying, selling, or just starting to explore Northern Idaho — reach out. No pressure, no pitch. Just an honest conversation.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 500,
                  fontSize: '32px',
                  color: '#1C1A17',
                }}
              >
                Send a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Details */}
            <div>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 500,
                  fontSize: '32px',
                  color: '#1C1A17',
                }}
              >
                Contact Details
              </h2>

              <div className="space-y-8">
                <div>
                  <p className="eyebrow mb-2" style={{ fontSize: '11px' }}>PHONE</p>
                  <a
                    href="tel:+12086607468"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '24px',
                      fontWeight: 500,
                      color: '#1C1A17',
                      textDecoration: 'none',
                    }}
                  >
                    (208) 660-7468
                  </a>
                </div>

                <div style={{ height: '1px', backgroundColor: '#E8DDD0' }} />

                <div>
                  <p className="eyebrow mb-2" style={{ fontSize: '11px' }}>EMAIL</p>
                  <a
                    href="mailto:dreamlifeinidaho@gmail.com"
                    style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: '16px',
                      color: '#C4842A',
                      textDecoration: 'none',
                    }}
                  >
                    dreamlifeinidaho@gmail.com
                  </a>
                </div>

                <div style={{ height: '1px', backgroundColor: '#E8DDD0' }} />

                <div>
                  <p className="eyebrow mb-2" style={{ fontSize: '11px' }}>OFFICE ADDRESS</p>
                  <address
                    style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: '16px',
                      color: '#5C5650',
                      fontStyle: 'normal',
                      lineHeight: 1.7,
                    }}
                  >
                    510 S Clearwater Loop, Suite 100<br />
                    Post Falls, ID 83854
                  </address>
                </div>

                <div style={{ height: '1px', backgroundColor: '#E8DDD0' }} />

                <div>
                  <p className="eyebrow mb-2" style={{ fontSize: '11px' }}>BROKERAGE</p>
                  <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '16px', color: '#5C5650' }}>
                    eXp Realty
                  </p>
                </div>

                <div style={{ height: '1px', backgroundColor: '#E8DDD0' }} />

                <div>
                  <p className="eyebrow mb-2" style={{ fontSize: '11px' }}>LICENSE</p>
                  <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '16px', color: '#5C5650' }}>
                    Idaho RE License #1371861
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
