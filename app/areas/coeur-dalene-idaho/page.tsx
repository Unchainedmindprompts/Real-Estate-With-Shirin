import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BASE_URL, BUSINESS_ID, WEBSITE_ID, PLACE } from '@/lib/schema-ids'

const PAGE_URL = `${BASE_URL}/areas/coeur-dalene-idaho`

export const metadata: Metadata = {
  title: "Coeur d'Alene Real Estate: Prices, Neighborhoods & Lakefront",
  description:
    "The median Coeur d'Alene home runs $601,000. What each budget buys, every neighborhood from Fort Grounds to Blackwell Hill, and how lakefront really prices.",
  alternates: {
    canonical: PAGE_URL,
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: "Real Estate Services — Coeur d'Alene, Idaho",
  serviceType: 'Real estate representation',
  provider: { '@id': BUSINESS_ID },
  areaServed: PLACE.coeurDalene,
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "Coeur d'Alene Real Estate: Prices, Neighborhoods & Lakefront",
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': BUSINESS_ID },
  mainEntity: { '@id': `${PAGE_URL}#service` },
  breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
  inLanguage: 'en-US',
}

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Areas', item: `${BASE_URL}/areas` },
    { '@type': 'ListItem', position: 3, name: "Coeur d'Alene, Idaho", item: PAGE_URL },
  ],
}

const neighborhoods = [
  { n: 'Downtown CdA & Fort Grounds', d: "Walkable access to Sherman Avenue, the lake, and the restaurant core. Among the most established and price-stable pockets in the city — you pay for the walkability and it holds." },
  { n: 'Sanders Beach', d: "Waterfront lifestyle on the eastern shore, with premium pricing to match. This is lake-adjacent living in its most literal form and it prices against waterfront demand, not city comps." },
  { n: 'Midtown CdA', d: "More affordable, eclectic, arts-forward. Attracts younger buyers and anyone who wants proximity to downtown without the downtown premium." },
  { n: 'Riverstone', d: "Master-planned along the Spokane River. Popular with young professionals and families who want newer construction, walkable amenities, and less maintenance." },
  { n: 'Dalton Gardens', d: "Just north, with larger lots and a more rural feel while staying minutes from CdA amenities. A common landing spot for buyers who want space without leaving the city's orbit." },
  { n: 'Blackwell Hill', d: "South of downtown, commanding some of the best lake and mountain views in the area. View premium is real and it shows up in the comps." },
]

const priceTiers = [
  { band: '$450,000 – $500,000', what: 'Entry-level single-family in move-in condition, typically a 3-bedroom. The thinnest band in CdA and the one where preparation matters most.' },
  { band: '$550,000 – $700,000', what: '3–4 bedrooms with updated finishes and more desirable locations. This is the working center of the CdA market and where the widest selection sits.' },
  { band: '$700,000 – $900,000', what: 'Larger homes, premium neighborhoods, lake-proximate lots, luxury finishes. The new construction median in the CdA urban area is currently over $770,000.' },
  { band: '$900,000 and up', what: 'Lakefront, deeded lake access, and view property on Blackwell Hill or Sanders Beach. This tier prices independently of the city median — see the lakefront section below.' },
]

const faqs = [
  {
    q: "What is the housing market like in Coeur d'Alene Idaho in 2026?",
    a: "As of early 2026, the median sale price in Coeur d'Alene is approximately $601,000 — up 4.6% year-over-year — with average homes selling in around 49 days. Hot homes move in as few as 12 days. The market has seen showings per listing increase 46.2% year-over-year, a sign of strengthening demand even as inventory sits at 2.6 months of supply. Nearly 70% of homes are closing under list price, with a sale-to-list ratio of around 97–98%, meaning there is negotiating room for buyers who come in prepared. Demand continues to be driven by out-of-state buyers relocating from California, Washington, and Oregon.",
  },
  {
    q: "How much do homes cost in Coeur d'Alene Idaho?",
    a: "As of early 2026, the median sale price in Coeur d'Alene is approximately $601,000. Entry-level single-family homes in move-in condition typically start around $450,000–$500,000 for a 3-bedroom. The $550,000–$700,000 range gets you 3–4 bedrooms with updated finishes and more desirable locations. Above $700,000 you're looking at larger homes, premium neighborhoods, lake-proximate lots, and luxury finishes — the new construction median in the CdA urban area is currently over $770,000. Price per square foot is around $288, and Coeur d'Alene consistently runs $80,000–$100,000 higher than Post Falls at comparable size and condition.",
  },
  {
    q: "What are the best neighborhoods in Coeur d'Alene Idaho?",
    a: "Coeur d'Alene neighborhoods vary considerably by lifestyle and price point. Downtown CdA and Fort Grounds offer walkable access to Sherman Avenue, the lake, and local restaurants — these are some of the most established and stable pockets in the city. Sanders Beach on the eastern shore is a waterfront lifestyle neighborhood with premium pricing to match. Midtown CdA is more affordable and has an eclectic, arts-forward character that attracts younger buyers. Riverstone, along the Spokane River, is a master-planned community popular with young professionals and families. Dalton Gardens to the north offers larger lots and a more rural feel while staying close to CdA amenities. Blackwell Hill, south of downtown, commands some of the best lake and mountain views in the area.",
  },
  {
    q: "How does lakefront property price in Coeur d'Alene?",
    a: "Lakefront prices in its own market and does not track the city median in any useful way. Three tiers are worth separating: true Lake Coeur d'Alene frontage with private shoreline, which is the scarcest and most expensive; deeded or shared lake access without private frontage, which carries a meaningful premium over comparable inland homes but a fraction of true frontage; and view property — Blackwell Hill is the classic example — where you are paying for the sightline rather than the water itself. A $900,000 view home and a $900,000 frontage home are entirely different assets. If lake access is the goal, define early which of the three you actually mean, because it changes the search, the budget, and the inventory.",
  },
  {
    q: "Is Coeur d'Alene a good place to live?",
    a: "For buyers who want a walkable lake town with a real downtown, it is genuinely hard to beat in the Inland Northwest. Sherman Avenue, the waterfront, the restaurant scene, and Tubbs Hill are all reachable on foot from the right neighborhoods, and Spokane International Airport is 35–45 minutes west. The honest tradeoffs: you pay a premium of roughly $80,000–$100,000 over Post Falls for comparable size and condition, summer brings genuine tourist traffic that changes the feel of downtown, and buyers who want acreage or maximum square footage per dollar will do better in Hayden, Rathdrum, or Post Falls.",
  },
  {
    q: "How does Coeur d'Alene compare to Post Falls for home buyers?",
    a: "Coeur d'Alene carries a higher median price than Post Falls — roughly $601,000 versus $521,000 — but delivers lake access, a walkable downtown, and Sherman Avenue in exchange. Buyers get CdA's lifestyle premium but generally less square footage per dollar. CdA also has 2.6 months of housing supply compared to Post Falls's 1.4 months, which means more listings to choose from and slightly more negotiating leverage. For buyers who want the full CdA experience — the lake, the restaurants, the walkability — it's worth the premium. For buyers who want maximum value and newer construction, Post Falls is 10 minutes west on I-90.",
  },
  {
    q: "How does Coeur d'Alene compare to Hayden?",
    a: "Hayden's median runs about $553,000 against CdA's $601,000, and the trade is space for walkability. Hayden delivers larger lots, quieter streets, and a strong school district; CdA delivers a downtown you can walk to and direct lake proximity. Hayden is also tighter on supply at 2.1 months versus CdA's 2.6, so despite the lower price point it is not necessarily the easier market to buy in. The two sit 10–15 minutes apart, so many buyers end up touring both before deciding which tradeoff they actually want.",
  },
  {
    q: "How far is Coeur d'Alene from Spokane?",
    a: "Coeur d'Alene sits roughly 33 miles east of Spokane on I-90 — about 33 minutes off-peak and closer to 40 during the morning commute. Spokane International Airport adds a little on the far side, generally 35–45 minutes door to door depending on where in CdA you start. That proximity is a large part of why the market works: you get a lake town without giving up a major airport, full regional medical care, or big-box retail.",
  },
  {
    q: "Is Coeur d'Alene safe?",
    a: "Coeur d'Alene and the surrounding Kootenai County communities consistently show lower crime rates than Spokane across the border, and safety comes up in nearly every conversation I have with relocating buyers weighing the two sides. That said, safety varies by neighborhood the way it does anywhere, and published city-level statistics do not capture street-level differences. If it is a priority, say so early — it is a reasonable filter to build a search around, and I would rather show you fewer homes that fit than more that do not.",
  },
  {
    q: "What are property taxes like in Coeur d'Alene?",
    a: "Coeur d'Alene sits in Kootenai County, where the effective property tax rate averages about 0.452% — dramatically below most West Coast jurisdictions. On a $601,000 CdA home that works out to roughly $2,150 per year after the Idaho Homeowner's Exemption, which removes up to $125,000 from the taxable assessed value of a primary residence. The exemption does not transfer from the previous owner, so new buyers have to file with the Kootenai County Assessor after closing. Confirm current rates and the exemption cap with the county, as both can change.",
  },
]

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${PAGE_URL}#faq`,
  isPartOf: { '@id': `${PAGE_URL}#webpage` },
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const linkClass = 'text-[#C4842A] hover:underline'

export default function CdaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 z-0">
          <Image src="/images/north-idaho-lake-hero.webp" alt="Coeur d'Alene, Idaho — lakefront and downtown" fill priority className="object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,26,23,0.35), rgba(28,26,23,0.6))' }} />
        </div>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-4xl mx-auto">
          <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>COEUR D&apos;ALENE, IDAHO</p>
          <h1 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(36px, 6vw, 56px)', lineHeight: 1.1, color: '#FAFAF8' }}>
            Coeur d&apos;Alene Real Estate
          </h1>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '18px', lineHeight: 1.7, color: '#F5EFE6', maxWidth: '640px', margin: '0 auto' }}>
            Median home: $601,000. What each budget buys, every neighborhood from Fort Grounds to Blackwell Hill, and the thing most buyers misunderstand about how lakefront actually prices.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: '#1C1A17', padding: '32px 0' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: '$601K', l: 'Median Sale Price', s: '↑ 4.6% YoY' },
              { v: '$288', l: 'Price Per Sq Ft', s: 'Early 2026' },
              { v: '2.6 mo', l: 'Months of Supply', s: 'Showings ↑ 46.2%' },
              { v: '~70%', l: 'Sell Under List', s: '97–98% sale-to-list' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '30px', color: '#C4842A', fontWeight: 600 }}>{s.v}</p>
                <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#C4BDB4', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.l}</p>
                <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9AA3AF', marginTop: '2px' }}>{s.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">THE MARKET</p>
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.2, color: '#1C1A17' }}>
            The Coeur d&apos;Alene Market Right Now
          </h2>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            The median sale price in Coeur d&apos;Alene is approximately <strong style={{ color: '#1C1A17' }}>$601,000</strong>, up 4.6% year-over-year, with price per square foot around <strong style={{ color: '#1C1A17' }}>$288</strong>. Homes average about 49 days on market, though correctly priced ones move in as few as 12.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            Two numbers tell buyers most of what they need. Showings per listing are up <strong style={{ color: '#1C1A17' }}>46.2% year-over-year</strong> — demand is strengthening. But nearly <strong style={{ color: '#1C1A17' }}>70% of homes are closing under list price</strong>, at a sale-to-list ratio of 97–98%. Together those say a market with real buyer interest that still leaves negotiating room for anyone who comes in prepared. At 2.6 months of supply, CdA also has more inventory than Post Falls (1.4) or Hayden (2.1), which is the closest thing to buyer leverage in this county.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Demand is driven heavily by out-of-state buyers from California, Washington, and Oregon. For the county-wide view see the{' '}<Link href="/areas/kootenai-county" className={linkClass}>Kootenai County guide</Link>; for a five-city side-by-side, the{' '}<Link href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className={linkClass}>North Idaho city comparison</Link>.
          </p>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">WHERE TO LOOK</p>
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.2, color: '#1C1A17' }}>
            Coeur d&apos;Alene Neighborhoods
          </h2>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '28px' }}>
            CdA is small enough to drive end to end in fifteen minutes and varied enough that the neighborhood matters more than the square footage. Here is the honest orientation.
          </p>
          <div className="space-y-5">
            {neighborhoods.map((x) => (
              <div key={x.n} style={{ borderLeft: '2px solid #C4842A', paddingLeft: '20px' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: '21px', color: '#1C1A17', marginBottom: '6px' }}>{x.n}</p>
                <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', lineHeight: 1.7 }}>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lakefront */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">THE PART BUYERS MISUNDERSTAND</p>
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.2, color: '#1C1A17' }}>
            How Lakefront Actually Prices
          </h2>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            &ldquo;Lakefront&rdquo; is the single most overloaded word in this market, and it costs buyers real time. Lake property does not track the city median in any useful way — it prices against waterfront demand, which is a separate market. Three tiers are worth separating before you start looking:
          </p>
          <div className="space-y-5" style={{ marginBottom: '20px' }}>
            {[
              { t: 'True Lake Coeur d’Alene frontage', d: 'Private shoreline on the lake itself. The scarcest and most expensive category, and the one where inventory can be counted on your hands at any given moment.' },
              { t: 'Deeded or shared lake access', d: 'No private frontage, but a legal right to the water — a community dock, a shared beach, an easement. Carries a meaningful premium over comparable inland homes at a fraction of true frontage. Read the access rights carefully; they vary enormously.' },
              { t: 'View property', d: 'You are paying for the sightline, not the water. Blackwell Hill is the classic example. A view home and a frontage home at the same price are entirely different assets with entirely different resale behavior.' },
            ].map((x) => (
              <div key={x.t} style={{ borderLeft: '2px solid #C4842A', paddingLeft: '20px' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: '20px', color: '#1C1A17', marginBottom: '6px' }}>{x.t}</p>
                <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', lineHeight: 1.7 }}>{x.d}</p>
              </div>
            ))}
          </div>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Tell me which of the three you actually mean and the search narrows immediately. Get it wrong and you spend months touring the wrong homes. Worth noting too: Hayden Lake is a separate lake and a separate market — see{' '}<Link href="/areas/hayden-idaho" className={linkClass}>the Hayden guide</Link>{' '}for how that one prices.
          </p>
        </div>
      </section>

      {/* Price tiers */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">WHAT YOUR BUDGET BUYS</p>
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.2, color: '#1C1A17' }}>
            Coeur d&apos;Alene Homes by Price Band
          </h2>
          <div className="space-y-4">
            {priceTiers.map((t) => (
              <div key={t.band} style={{ borderLeft: '2px solid #C4842A', paddingLeft: '20px' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: '21px', color: '#1C1A17', marginBottom: '6px' }}>{t.band}</p>
                <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', lineHeight: 1.7 }}>{t.what}</p>
              </div>
            ))}
          </div>
          <p className="mt-8" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', fontStyle: 'italic' }}>
            Bands are directional, not listings.{' '}<Link href="/contact" className={linkClass}>Tell me your range</Link>{' '}and I&apos;ll send what&apos;s actually available this week.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">HOW IT COMPARES</p>
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.2, color: '#1C1A17' }}>
            Coeur d&apos;Alene vs. Hayden vs. Post Falls
          </h2>
          <div className="overflow-x-auto" style={{ marginBottom: '24px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #C4842A' }}>
                  {['', "Coeur d'Alene", 'Hayden', 'Post Falls'].map((h) => (
                    <th key={h} style={{ textAlign: 'left', padding: '10px 12px', color: '#1C1A17', fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Median sale price', '$601,000', '$553,000', '$521,000'],
                  ['Months of supply', '2.6', '2.1', '1.4'],
                  ['Character', 'Walkable lake town', 'Quiet residential', 'Newer, suburban'],
                  ['Spokane commute', '35–45 min', '40–50 min', '25–30 min'],
                  ['Best for', 'Lake & walkability', 'Space & schools', 'Value & new build'],
                ].map((row) => (
                  <tr key={row[0]} style={{ borderBottom: '1px solid #E8DDD0' }}>
                    <td style={{ padding: '10px 12px', color: '#1C1A17', fontWeight: 600 }}>{row[0]}</td>
                    <td style={{ padding: '10px 12px', color: '#C4842A', fontWeight: 600 }}>{row[1]}</td>
                    <td style={{ padding: '10px 12px', color: '#5C5650' }}>{row[2]}</td>
                    <td style={{ padding: '10px 12px', color: '#5C5650' }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Deeper reads:{' '}<Link href="/areas/hayden-idaho" className={linkClass}>the Hayden guide</Link>,{' '}<Link href="/areas/post-falls-idaho" className={linkClass}>the Post Falls guide</Link>,{' '}<Link href="/articles/spokane-vs-coeur-dalene-which-is-right-for-you" className={linkClass}>Spokane vs. Coeur d&apos;Alene</Link>, and{' '}<Link href="/articles/north-idaho-to-spokane-commute-times" className={linkClass}>real commute times</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">COMMON QUESTIONS</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.2, color: '#1C1A17' }}>
              Coeur d&apos;Alene Real Estate FAQ
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} style={{ backgroundColor: '#2A2722', border: '1px solid #3A3530', borderRadius: '4px', padding: '28px 32px' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: '20px', color: '#C4842A', marginBottom: '12px' }}>{faq.q}</h3>
                <div>
                  <p style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding" style={{ backgroundColor: '#1C1A17' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>Shirin — Coeur d&apos;Alene REALTOR&reg;</p>
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.15, color: '#F5EFE6' }}>
            Looking at Coeur d&apos;Alene?
          </h2>
          <p className="mb-10" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Tell me your budget and whether the lake is a must-have — that one answer changes the entire search. I&apos;ll give you an honest read on what it buys and whether CdA or a neighbor serves you better.
          </p>
          <Link href="/contact" className="inline-block text-white text-xs uppercase font-semibold tracking-wider rounded-sm" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", backgroundColor: '#C4842A', padding: '14px 32px', letterSpacing: '0.08em' }}>
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
