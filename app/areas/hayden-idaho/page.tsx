import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BASE_URL, BUSINESS_ID, WEBSITE_ID, CITY_SAMEAS } from '@/lib/schema-ids'

const PAGE_URL = `${BASE_URL}/areas/hayden-idaho`

export const metadata: Metadata = {
  title: 'Hayden Idaho Real Estate: Prices, Neighborhoods & Market',
  description:
    "The median Hayden home runs $553,000, up 13.5% in a year. What each budget actually buys, how Hayden compares to Coeur d'Alene, and a local REALTOR's honest read.",
  alternates: {
    canonical: PAGE_URL,
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Real Estate Services — Hayden, Idaho',
  serviceType: 'Real estate representation',
  provider: { '@id': BUSINESS_ID },
  areaServed: {
    '@type': 'City',
    name: 'Hayden',
    sameAs: CITY_SAMEAS.hayden,
    containedInPlace: { '@type': 'State', name: 'Idaho' },
  },
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Hayden Idaho Real Estate: Prices, Neighborhoods & Market',
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
    { '@type': 'ListItem', position: 3, name: 'Hayden, Idaho', item: PAGE_URL },
  ],
}

const faqs = [
  {
    q: 'What is the housing market like in Hayden Idaho in 2026?',
    a: 'As of early 2026, the median sale price in Hayden is approximately $553,000 — with a price per square foot of $311, up 13.5% year-over-year, one of the strongest appreciation rates in Northern Idaho. Homes are averaging around 49–57 days on market, with hot homes going pending in as few as 7 days. Hayden has 2.1 months of housing supply and inventory has contracted 26.6% year-over-year. Showings per listing are up 70.8% — the highest increase of any city in the region — signaling that buyer activity is accelerating into the spring season. The resale market is active, with previously owned homes averaging close to $787,000 in average sale price.',
  },
  {
    q: 'How much do homes cost in Hayden Idaho?',
    a: "As of early 2026, the median list price in Hayden is approximately $599,900, with an average home value around $617,000–$627,000. Entry-level resale homes in move-in condition typically start in the $450,000–$500,000 range for a standard 3-bedroom. The $550,000–$700,000 range gets you 3–4 bedrooms, larger lots, and established neighborhoods. New construction and premium properties push well above $700,000, and the resale market for upper-tier homes is averaging close to $787,000. Hayden's price per square foot is $311 — up 13.5% year-over-year.",
  },
  {
    q: 'Is Hayden Idaho a good place to live?',
    a: "For most buyers who want space and quiet without giving up access, yes. Hayden is a residential city directly north of Coeur d'Alene with larger lots, lower traffic density, and a genuinely unhurried pace — while still being roughly 10–15 minutes from downtown CdA and 40–50 minutes from Spokane. The tradeoffs are real and worth naming: less walkability than Coeur d'Alene, no downtown core of its own, and you will drive for most errands. Buyers who want to walk to restaurants and the waterfront usually prefer CdA. Buyers who want a yard, a quieter street, and a shorter commute to the lake usually prefer Hayden.",
  },
  {
    q: "What's the difference between Hayden and Hayden Lake?",
    a: "They are two different places and it confuses almost every out-of-state buyer. Hayden is the larger city directly north of Coeur d'Alene along the US-95 and Government Way corridor. Hayden Lake is both the body of water and a separate, much smaller incorporated city on its shore. Property around Hayden Lake — particularly anything with lake frontage or lake access — trades in a different and generally higher price band than the Hayden city median, so a search for \"Hayden\" and a search for \"Hayden Lake\" can return very different homes at very different prices. Be specific about which one you mean when you start looking.",
  },
  {
    q: "How does Hayden compare to Coeur d'Alene for home buyers?",
    a: "Hayden and Coeur d'Alene are adjacent markets that serve different buyer priorities. Hayden's median runs slightly lower than CdA's $601,000 — and delivers larger lots, a quieter residential character, and a strong school district in exchange for less walkability and lake-direct access. CdA has 2.6 months of supply versus Hayden's 2.1 months, so both markets are undersupplied but Hayden is tighter on a relative basis. Buyers who prioritize space, privacy, and school quality tend to land in Hayden. Buyers who want walkable access to Sherman Avenue, the waterfront, and CdA's downtown energy tend to pay the CdA premium. Both are about 10–15 minutes apart.",
  },
  {
    q: 'How does Hayden compare to Post Falls?',
    a: "Post Falls is the value play and Hayden is the space play. Post Falls runs a median around $521,000 against Hayden's $553,000, has substantially more new construction, and sits closer to the Washington line — which makes it the easier Spokane commute at 25–30 minutes off-peak. Hayden is quieter, more established, has larger lots, and sits closer to Hayden Lake and the north-end recreation. Post Falls also has the tightest inventory in the county at 1.4 months of supply versus Hayden's 2.1. If your priority is a Spokane commute or maximum square footage per dollar, look at Post Falls. If it's a quiet residential street and lake proximity, look at Hayden.",
  },
  {
    q: 'Is Hayden Idaho a good place to raise a family?',
    a: "Hayden is consistently regarded as one of the most family-oriented communities in Northern Idaho. The Lakeland School District serves the area and is well-regarded regionally. Neighborhoods are quiet with larger lots, low traffic density, and a community feel that is genuinely different from more commercial corridors. Proximity to Hayden Lake, Coeur d'Alene Lake, and the surrounding recreation makes it a natural fit for active families. The pace of life is unhurried without being isolated — Coeur d'Alene's amenities are minutes away, but the neighborhood itself stays residential.",
  },
  {
    q: 'How much snow does Hayden get?',
    a: "Hayden averages roughly 42 inches of snow per year — squarely in the Rathdrum Prairie range along with Post Falls and Rathdrum, and dramatically less than Sandpoint's 80–90 inches at lake level. That matters for more than shoveling: Hayden's design ground snow load is about 62 psf, higher than Coeur d'Alene's 43 but well below Rathdrum's 87, which affects roof engineering on anything you build or remodel. For a standard subdivision lot, a good shovel and a single-stage snowblower handle most storms. Rural acreage north of town is a different equipment conversation.",
  },
  {
    q: 'What are property taxes like in Hayden?',
    a: "Hayden sits in Kootenai County, where the effective property tax rate averages about 0.452% — dramatically below most West Coast jurisdictions. On a $553,000 Hayden home, that works out to roughly $2,000 per year after the Idaho Homeowner's Exemption, which removes up to $125,000 from the taxable assessed value of a primary residence. The exemption does not transfer automatically from the previous owner, so as a new buyer you have to file for it with the Kootenai County Assessor after closing. Confirm current rates and the exemption cap with the county — both can change.",
  },
  {
    q: 'Do I need a local realtor to buy in Hayden?',
    a: "You are not required to have one, but in this market it changes what you actually see. Hayden inventory is tight at 2.1 months of supply and showings per listing are up 70.8% year-over-year, so well-priced homes move quickly and the difference between hearing about a listing early and hearing about it late is real. Beyond speed, the local judgment matters: which streets sit closest to the US-95 noise corridor, which rural parcels are on a well and septic versus city services, which lots drain badly in spring melt, and how Hayden pricing actually compares to Hayden Lake. None of that is on the listing sheet.",
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

const priceTiers = [
  {
    band: 'Under $500,000',
    what: 'Entry-level resale. Typically a standard 3-bedroom in move-in condition on a conventional subdivision lot. This band is thin and moves fast — at 2.1 months of supply, the well-priced ones do not sit.',
  },
  {
    band: '$550,000 – $700,000',
    what: 'The heart of the Hayden market. 3–4 bedrooms, larger lots, established neighborhoods. This is where most families land and where the widest selection sits.',
  },
  {
    band: '$700,000 – $850,000',
    what: 'Newer construction, premium finishes, bigger parcels, or proximity to Hayden Lake. The upper-tier resale market has been averaging close to $787,000.',
  },
  {
    band: '$850,000 and up',
    what: 'Lake-adjacent and lake-access property, acreage, and custom builds. Hayden Lake frontage operates in its own category and prices independently of the Hayden city median.',
  },
]

const linkClass = 'text-[#C4842A] hover:underline'

export default function HaydenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 z-0">
          <Image src="/images/north-idaho-lake-hero.webp" alt="Hayden, Idaho — north of Coeur d'Alene near Hayden Lake" fill priority className="object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,26,23,0.35), rgba(28,26,23,0.6))' }} />
        </div>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-4xl mx-auto">
          <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>HAYDEN, IDAHO</p>
          <h1 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(36px, 6vw, 56px)', lineHeight: 1.1, color: '#FAFAF8' }}>
            Hayden Idaho Real Estate
          </h1>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '18px', lineHeight: 1.7, color: '#F5EFE6', maxWidth: '640px', margin: '0 auto' }}>
            Median home: $553,000, up 13.5% in a year. Here&apos;s what each budget actually buys, how Hayden compares to Coeur d&apos;Alene and Post Falls, and what buyers get wrong about Hayden versus Hayden Lake.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: '#1C1A17', padding: '32px 0' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: '$553K', l: 'Median Sale Price', s: '↑ 13.5% YoY' },
              { v: '$311', l: 'Price Per Sq Ft', s: 'Early 2026' },
              { v: '2.1 mo', l: 'Months of Supply', s: 'Inventory ↓ 26.6%' },
              { v: '+70.8%', l: 'Showings Per Listing', s: 'Highest in region' },
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

      {/* Market Overview */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">THE MARKET</p>
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.2, color: '#1C1A17' }}>
            The Hayden Market Right Now
          </h2>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            Hayden sits directly north of Coeur d&apos;Alene along the US-95 and Government Way corridor, and it has quietly become one of the strongest-appreciating markets in Northern Idaho. The median sale price is approximately <strong style={{ color: '#1C1A17' }}>$553,000</strong> as of early 2026, with price per square foot at <strong style={{ color: '#1C1A17' }}>$311 — up 13.5% year-over-year</strong>. That is one of the sharpest appreciation rates in the region.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            The supply picture is what buyers should pay attention to. Hayden has <strong style={{ color: '#1C1A17' }}>2.1 months of housing supply</strong> and inventory has contracted <strong style={{ color: '#1C1A17' }}>26.6% year-over-year</strong>. Meanwhile showings per listing are up <strong style={{ color: '#1C1A17' }}>70.8%</strong> — the highest increase of any city in the region. More buyers, fewer homes. Average days on market runs 49–57, but that number is misleading on its own: correctly priced homes in good condition are going pending in as few as <strong style={{ color: '#1C1A17' }}>7 days</strong>. What stretches the average is overpriced inventory sitting until sellers adjust.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            For the broader county picture, see the{' '}<Link href="/areas/kootenai-county" className={linkClass}>Kootenai County market guide</Link>, and for a five-city side-by-side, the{' '}<Link href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className={linkClass}>North Idaho city comparison</Link>.
          </p>
        </div>
      </section>

      {/* Price tiers */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">WHAT YOUR BUDGET BUYS</p>
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.2, color: '#1C1A17' }}>
            Hayden Homes by Price Band
          </h2>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '28px' }}>
            The median list price sits around $599,900 and the average home value runs $617,000–$627,000. Here is roughly what each band gets you in practice.
          </p>
          <div className="space-y-4">
            {priceTiers.map((t) => (
              <div key={t.band} style={{ borderLeft: '2px solid #C4842A', paddingLeft: '20px' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: '21px', color: '#1C1A17', marginBottom: '6px' }}>{t.band}</p>
                <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', lineHeight: 1.7 }}>{t.what}</p>
              </div>
            ))}
          </div>
          <p className="mt-8" style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', fontStyle: 'italic' }}>
            Bands are directional, not listings. For what is actually available in your range this week,{' '}<Link href="/contact" className={linkClass}>reach out</Link>{' '}— inventory at 2.1 months turns over faster than any page can keep up with.
          </p>
        </div>
      </section>

      {/* Hayden vs Hayden Lake */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">THE THING BUYERS GET WRONG</p>
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.2, color: '#1C1A17' }}>
            Hayden vs. Hayden Lake — Two Different Places
          </h2>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            This trips up nearly every out-of-state buyer, and it has real price consequences. <strong style={{ color: '#1C1A17' }}>Hayden</strong> is the larger city directly north of Coeur d&apos;Alene — residential subdivisions, larger lots, the Government Way and US-95 corridor, and the bulk of the inventory in this market.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            <strong style={{ color: '#1C1A17' }}>Hayden Lake</strong> is both the body of water and a separate, much smaller incorporated city on its shore. Property with lake frontage or deeded lake access trades in a different and generally higher band than the Hayden city median — it prices against waterfront demand, not against subdivision comps.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            The practical upshot: a search for &ldquo;Hayden&rdquo; and a search for &ldquo;Hayden Lake&rdquo; return meaningfully different homes at meaningfully different prices. When you tell me your budget, tell me which one you actually mean — it changes the whole search.
          </p>
        </div>
      </section>

      {/* Why Hayden */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">WHY HAYDEN</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.2, color: '#1C1A17' }}>
              What Makes Hayden Stand Out
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Space & Privacy', body: "Larger lots and lower traffic density than central Coeur d'Alene, at a median that runs below CdA's $601,000. More yard per dollar is the core Hayden trade." },
              { title: 'Lakeland Schools', body: 'The Lakeland School District serves the area and is well-regarded regionally — a consistent draw for families comparing north-end options.' },
              { title: 'Manageable Winters', body: "About 42 inches of snow a year, in line with the Rathdrum Prairie and roughly half what Sandpoint gets. A shovel and a snowblower cover most storms in town." },
              { title: 'Everything 15 Minutes Away', body: "Downtown Coeur d'Alene and Kootenai Health are 10–15 minutes south. Spokane is 40–50. Hayden Lake recreation is minutes north." },
            ].map((card) => (
              <div key={card.title} style={{ backgroundColor: '#2A2722', border: '1px solid #3A3530', borderRadius: '4px', padding: '32px' }}>
                <h3 className="mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: '22px', color: '#C4842A' }}>{card.title}</h3>
                <p style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px' }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">HOW IT COMPARES</p>
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.2, color: '#1C1A17' }}>
            Hayden vs. Coeur d&apos;Alene vs. Post Falls
          </h2>
          <div className="overflow-x-auto" style={{ marginBottom: '24px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #C4842A' }}>
                  {['', 'Hayden', "Coeur d'Alene", 'Post Falls'].map((h) => (
                    <th key={h} style={{ textAlign: 'left', padding: '10px 12px', color: '#1C1A17', fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Median sale price', '$553,000', '$601,000', '$521,000'],
                  ['Months of supply', '2.1', '2.6', '1.4'],
                  ['Character', 'Quiet residential', 'Walkable lake town', 'Newer, suburban'],
                  ['Spokane commute', '40–50 min', '35–45 min', '25–30 min'],
                  ['Best for', 'Space & schools', 'Walkability & lake', 'Value & new build'],
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
            Deeper reads:{' '}<Link href="/areas/coeur-dalene-idaho" className={linkClass}>the Coeur d&apos;Alene guide</Link>,{' '}<Link href="/areas/post-falls-idaho" className={linkClass}>the Post Falls guide</Link>, and{' '}<Link href="/articles/north-idaho-to-spokane-commute-times" className={linkClass}>real commute times to Spokane</Link>. On the tax side,{' '}<Link href="/articles/north-idaho-property-taxes-county-comparison" className={linkClass}>how Kootenai County compares</Link>.
          </p>
        </div>
      </section>

      {/* Working with a Hayden realtor */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">WORKING WITH A LOCAL AGENT</p>
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.2, color: '#1C1A17' }}>
            What a Hayden REALTOR&reg; Actually Does for You
          </h2>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            At 2.1 months of supply with showings up 70.8% year-over-year, the gap between hearing about a Hayden listing early and hearing about it late is the whole game. But speed is only part of it.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif", marginBottom: '16px' }}>
            The judgment that matters here is local and unglamorous: which streets sit closest to the US-95 noise corridor, which parcels north of town are on a well and septic rather than city services, which lots drain badly during spring melt, how a Hayden Lake address prices differently from a Hayden one, and whether a given roof was built for Hayden&apos;s snow load. None of that is on the listing sheet, and none of it shows up in photos.
          </p>
          <p style={{ color: '#5C5650', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            I&apos;m Shirin Abplanalp, a licensed Idaho REALTOR&reg; with Berkshire Hathaway HomeServices Jacklin Real Estate, and I work Hayden, Coeur d&apos;Alene, Post Falls, Rathdrum, and Sandpoint. If you&apos;re relocating from out of state, the{' '}<Link href="/articles/buying-north-idaho-home-from-out-of-state" className={linkClass}>step-by-step guide to buying here remotely</Link>{' '}covers the whole process, and{' '}<Link href="/relocating-to-north-idaho" className={linkClass}>the complete relocation guide</Link>{' '}covers everything upstream of it.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">COMMON QUESTIONS</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.2, color: '#1C1A17' }}>
              Hayden Idaho Real Estate FAQ
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
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>Shirin — Hayden REALTOR&reg;</p>
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.15, color: '#F5EFE6' }}>
            Looking at Hayden?
          </h2>
          <p className="mb-10" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Tell me your budget and what you&apos;re optimizing for, and I&apos;ll tell you honestly whether Hayden is the right fit — or whether Post Falls or Coeur d&apos;Alene serves you better.
          </p>
          <Link href="/contact" className="inline-block text-white text-xs uppercase font-semibold tracking-wider rounded-sm" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", backgroundColor: '#C4842A', padding: '14px 32px', letterSpacing: '0.08em' }}>
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
