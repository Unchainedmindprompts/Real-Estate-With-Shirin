import type { Metadata } from 'next'
import VideoPlayer from '@/components/VideoPlayer'
import { videos } from '@/lib/videos'

const BASE_URL = 'https://www.realestatewithshirin.com'
const PAGE_URL = `${BASE_URL}/videos`

export const metadata: Metadata = {
  title: 'Videos | Shirin Abplanalp',
  description:
    "North Idaho real estate videos from Shirin Abplanalp — short, honest takes on the market, the towns, and the buying process.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Videos | Shirin Abplanalp',
    description: "North Idaho real estate videos from Shirin Abplanalp.",
    url: PAGE_URL,
    type: 'website',
  },
}

// CollectionPage schema for the page itself.
const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${PAGE_URL}#collection`,
  name: 'Real Estate With Shirin — Videos',
  url: PAGE_URL,
  description:
    "Video library from Shirin Abplanalp — Licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate. North Idaho market commentary, buyer guides, and relocation insights.",
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/#agent` },
}

// One VideoObject per video — each anchored to its #<slug> section on this page.
// This is what makes realestatewithshirin.com the canonical source for the video
// (rather than YouTube/Vimeo/etc.).
const videoSchemas = videos.map((v) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  '@id': `${PAGE_URL}#${v.slug}`,
  name: v.title,
  description: v.description,
  thumbnailUrl: `${BASE_URL}${v.thumbnail}`,
  uploadDate: v.publishedAt,
  duration: v.duration,
  contentUrl: v.contentUrl,
  embedUrl: v.embedUrl,
  url: `${PAGE_URL}#${v.slug}`,
  transcript: v.transcript,
  isPartOf: { '@id': `${PAGE_URL}#collection` },
  creator: { '@id': `${BASE_URL}/#agent` },
  author: { '@id': `${BASE_URL}/#agent` },
  publisher: { '@id': `${BASE_URL}/#business` },
  inLanguage: 'en-US',
}))

export default function VideosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      {videoSchemas.map((s) => (
        <script
          key={s['@id']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '50vh' }}>
        <div className="absolute inset-0 z-0" style={{ backgroundColor: '#1C1A17' }} />
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-3xl mx-auto pt-36">
          <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>VIDEOS</p>
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
            On Camera
          </h1>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '17px', lineHeight: 1.7, color: '#E8DDD0' }}>
            Short, honest videos on North Idaho real estate &mdash; the market, the towns, the buying process, and the things buyers actually want to know.
          </p>
        </div>
      </section>

      {/* All videos stacked on one page */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-20">
          {videos.length === 0 ? (
            <p
              className="text-center"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif", color: '#5C5650', fontSize: '17px' }}
            >
              Videos coming soon.
            </p>
          ) : (
            videos.map((v) => (
              <article key={v.slug} id={v.slug} className="scroll-mt-24">
                <header className="mb-6">
                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 600,
                      fontSize: 'clamp(28px, 4vw, 38px)',
                      lineHeight: 1.2,
                      color: '#1C1A17',
                      marginBottom: '12px',
                    }}
                  >
                    {v.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: '17px',
                      color: '#5C5650',
                      lineHeight: 1.7,
                    }}
                  >
                    {v.description}
                  </p>
                </header>

                <VideoPlayer embedUrl={v.embedUrl} thumbnail={v.thumbnail} title={v.title} />

                {/* Transcript / summary — visible on-page text */}
                <details className="mt-6 group">
                  <summary
                    className="cursor-pointer select-none"
                    style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: '13px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#C4842A',
                    }}
                  >
                    Transcript &amp; Summary
                  </summary>
                  <p
                    className="mt-4"
                    style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: '15px',
                      color: '#5C5650',
                      lineHeight: 1.75,
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {v.transcript}
                  </p>
                </details>
              </article>
            ))
          )}
        </div>
      </section>
    </>
  )
}
