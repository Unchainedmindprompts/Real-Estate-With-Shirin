import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { AGENT_NAME, BASE_URL, BROKERAGE_NAME, EMAIL, PHONE, PHONE_DISPLAY, WEBSITE_ID, AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB, placeStub } from '@/lib/schema-ids'

type Source = { name: string; url: string }
type FAQ = { q: string; a: string }
type GuideProps = {
  slug: string
  title: string
  description: string
  datePublished: string
  dateModified: string
  image: string
  imageAlt: string
  faqs: FAQ[]
  sources: Source[]
  children: ReactNode
}

export default function RelocationGuide({ slug, title, description, datePublished, dateModified, image, imageAlt, faqs, sources, children }: GuideProps) {
  const url = `${BASE_URL}/articles/${slug}`
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title,
        description, inLanguage: 'en-US', isPartOf: { '@id': WEBSITE_ID },
        about: placeStub('northIdaho'), mainEntity: { '@id': `${url}#article` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'Article', '@id': `${url}#article`, url, headline: title,
        description, author: AGENT_AUTHOR_STUB, publisher: BRAND_PUBLISHER_STUB,
        datePublished, dateModified, inLanguage: 'en-US',
        mainEntityOfPage: { '@id': `${url}#webpage` },
        isPartOf: { '@id': `${BASE_URL}/articles` },
        about: [placeStub('northIdaho'), placeStub('postFalls'), placeStub('coeurDalene')],
        image: `${BASE_URL}${image}`,
        citation: sources.map(({ name, url: sourceUrl }) => ({ '@type': 'WebPage', name, url: sourceUrl })),
      },
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Articles', item: `${BASE_URL}/articles` },
          { '@type': 'ListItem', position: 3, name: title, item: url },
        ],
      },
      {
        '@type': 'FAQPage', '@id': `${url}#faq`, isPartOf: { '@id': `${url}#webpage` },
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />
      <section className="bg-[#F5EFE6] pt-28 lg:pt-36 pb-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-[#5C5650] mb-8"><Link className="underline" href="/">Home</Link><span className="mx-2">/</span><Link className="underline" href="/articles">Articles</Link><span className="mx-2">/</span><span>Relocation guide</span></nav>
          <p className="eyebrow mb-4" style={{ color: '#96601A' }}>NORTH IDAHO RELOCATION</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">{title}</h1>
          <p className="text-lg text-[#5C5650] leading-relaxed mb-8">{description}</p>
          <p className="text-sm text-[#5C5650]">By <Link href="/about" className="underline">{AGENT_NAME}</Link>, Licensed REALTOR®<br />{BROKERAGE_NAME}<br /><time dateTime={dateModified}>October 1, 2026</time></p>
        </div>
      </section>
      <div className="relative h-56 md:h-80">
        <Image src={image} alt={imageAlt} fill sizes="100vw" className="object-cover" />
      </div>
      <article className="max-w-4xl mx-auto px-6 lg:px-8 py-14 text-[17px] text-[#5C5650] leading-relaxed [&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:font-semibold [&_h2]:mt-12 [&_h2]:mb-5 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_li]:mb-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_a]:text-[#96601A] [&_a]:underline [&_a]:underline-offset-4 [&_strong]:text-[#1C1A17]">
        {children}
        <section aria-labelledby="relocation-faq">
          <h2 id="relocation-faq">Questions before you move</h2>
          {faqs.map(({ q, a }) => <div key={q} className="border-b border-[#E8DDD0] pb-3 mb-6"><h3>{q}</h3><p>{a}</p></div>)}
        </section>
        <section aria-labelledby="relocation-sources" className="border-t border-[#E8DDD0] mt-12 pt-4">
          <h2 id="relocation-sources">Sources and next checks</h2>
          <p className="text-sm">Official sources checked October 1, 2026. Tax rules, eligibility, road conditions, and insurance terms can change. Use the linked agencies and qualified professionals for your circumstances.</p>
          <ul className="text-sm">{sources.map(({ name, url: sourceUrl }) => <li key={sourceUrl}><a href={sourceUrl} target="_blank" rel="noopener noreferrer">{name}</a></li>)}</ul>
          <p className="text-sm">This is general home-buying information, not tax, legal, insurance, or lending advice.</p>
        </section>
      </article>
      <section className="bg-[#1C1A17] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="eyebrow mb-4">PLAN YOUR NORTH IDAHO SEARCH</p>
          <h2 className="text-4xl mb-5" style={{ color: '#FAFAF8' }}>Start with the decisions that matter to you</h2>
          <p className="text-[#E8DDD0] mb-8">Share your move timing, comfortable budget, work location, and property must-haves with Shirin. Those details are the starting point for a useful conversation about where to look.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4"><a href={`tel:${PHONE}`} className="inline-block bg-[#C4842A] text-[#1C1A17] font-semibold text-sm px-7 py-4 rounded-sm">Call Shirin: {PHONE_DISPLAY}</a><a href={`mailto:${EMAIL}`} className="inline-block border border-[#C4842A] text-[#FAFAF8] font-semibold text-sm px-7 py-4 rounded-sm">Email Shirin</a></div>
        </div>
      </section>
    </>
  )
}
