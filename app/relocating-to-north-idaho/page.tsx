import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BASE_URL,
  WEBSITE_ID,
  AGENT_AUTHOR_STUB,
  BRAND_PUBLISHER_STUB,
  placeStub,
} from '@/lib/schema-ids'

export const metadata: Metadata = {
  title: 'Relocating to North Idaho: The Complete Local Guide for Out-of-State Buyers',
  description:
    "Everything out-of-state buyers need to know about relocating to North Idaho — cost of living, taxes, towns, schools, weather, commutes, and the buying process. Written by Shirin Abplanalp, a licensed Idaho REALTOR® who made the move herself.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/relocating-to-north-idaho',
  },
  openGraph: {
    title: 'Relocating to North Idaho: The Complete Local Guide for Out-of-State Buyers',
    description:
      "A complete relocation guide for out-of-state buyers moving to North Idaho — covering costs, taxes, neighborhoods, schools, weather, commutes, and the buying process. Written by licensed REALTOR® Shirin Abplanalp.",
    url: 'https://www.realestatewithshirin.com/relocating-to-north-idaho',
    type: 'article',
    publishedTime: '2026-05-31',
    authors: ['Shirin Abplanalp'],
    images: ['https://www.realestatewithshirin.com/images/north-idaho-relocation-guide.png'],
  },
}

const PAGE_URL = `${BASE_URL}/relocating-to-north-idaho`

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  name: 'Relocating to North Idaho: The Complete Local Guide for Out-of-State Buyers',
  url: PAGE_URL,
  description:
    "A complete relocation guide for out-of-state buyers moving to North Idaho — covering costs, taxes, neighborhoods, schools, weather, commutes, and the buying process. Written by licensed REALTOR® Shirin Abplanalp of Post Falls, Idaho.",
  inLanguage: 'en-US',
  isPartOf: { '@id': WEBSITE_ID },
  about: placeStub('northIdaho'),
  breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/images/north-idaho-relocation-guide.png`,
  },
  datePublished: '2026-05-31T00:00:00-07:00',
  dateModified: '2026-07-07T00:00:00-07:00',
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${PAGE_URL}#article`,
  headline: 'Relocating to North Idaho: The Complete Local Guide for Out-of-State Buyers',
  alternativeHeadline:
    "A licensed Idaho REALTOR's complete relocation guide for out-of-state buyers — covering cost of living, property and income taxes, the five main towns, schools, healthcare, weather, commutes, remote work viability, and the out-of-state buying process.",
  description:
    "Everything out-of-state buyers need to know about relocating to North Idaho — cost of living, property taxes, neighborhoods, schools, weather, commutes, and how the buying process works from a distance.",
  url: PAGE_URL,
  image: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/images/north-idaho-relocation-guide.png`,
    width: 1536,
    height: 1024,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-05-31T00:00:00-07:00',
  dateModified: '2026-07-07T00:00:00-07:00',
  mainEntityOfPage: { '@id': `${PAGE_URL}#webpage` },
  inLanguage: 'en-US',
  articleSection: 'Relocation Guide',
  isPartOf: { '@id': WEBSITE_ID },
  keywords: [
    'relocating to North Idaho',
    'moving to Coeur d’Alene',
    'North Idaho relocation guide',
    'Coeur d’Alene real estate',
    'Post Falls Idaho',
    'Idaho cost of living',
    'North Idaho property taxes',
    'out of state home buyer Idaho',
    'moving from California to Idaho',
    'moving from Washington to Idaho',
  ],
  about: [
    { '@type': 'Thing', name: 'North Idaho Relocation' },
    { '@type': 'Thing', name: 'Idaho Cost of Living' },
    { '@type': 'Thing', name: 'Idaho Property Taxes' },
    { '@type': 'Thing', name: 'Out-of-State Home Buying' },
    { '@type': 'Place', name: 'North Idaho' },
  ],
  spatialCoverage: {
    '@type': 'Place',
    name: 'North Idaho',
    geo: { '@type': 'GeoShape', box: '47.4090 -117.0357 48.9990 -116.0500' },
    containedInPlace: [
      { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
      { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    ],
  },
  citation: [
    {
      '@type': 'WebPage',
      name: 'U.S. Census Bureau QuickFacts: Kootenai County, Idaho',
      url: 'https://www.census.gov/quickfacts/fact/table/kootenaicountyidaho/PST045224',
      publisher: { '@type': 'GovernmentOrganization', name: 'U.S. Census Bureau', url: 'https://www.census.gov' },
      description:
        'Kootenai County population estimates: 191,864 (July 2025), 138,494 (2010 Census). Broadband subscription: 92.2% of households.',
    },
    {
      '@type': 'WebPage',
      name: 'U.S. Census Bureau — Population Estimates Program',
      url: 'https://www.census.gov/programs-surveys/popest.html',
      publisher: { '@type': 'GovernmentOrganization', name: 'U.S. Census Bureau', url: 'https://www.census.gov' },
      description:
        'Kootenai County domestic migration 2023–2024: +2,900 net domestic migrants, primary driver of +3,100 total population growth.',
    },
    {
      '@type': 'WebPage',
      name: 'Idaho Individual Income Tax Online Guide',
      url: 'https://tax.idaho.gov/taxes/income-tax/individual-income/online-guide/',
      publisher: { '@type': 'GovernmentOrganization', name: 'Idaho State Tax Commission', url: 'https://tax.idaho.gov' },
      description: 'Idaho individual income tax rate: 5.3% flat rate effective January 1, 2025.',
    },
    {
      '@type': 'WebPage',
      name: 'Property Taxes by State and County, 2026',
      url: 'https://taxfoundation.org/data/all/state/property-taxes-by-state-county/',
      publisher: { '@type': 'Organization', name: 'Tax Foundation', url: 'https://taxfoundation.org' },
      description: 'Idaho effective property tax rate: approximately 0.53% of assessed value (2026 data).',
    },
    {
      '@type': 'WebPage',
      name: 'Regional Price Parities by State and Metro Area',
      url: 'https://www.bea.gov/data/prices-inflation/regional-price-parities-state-and-metro-area',
      publisher: {
        '@type': 'GovernmentOrganization',
        name: 'Bureau of Economic Analysis — U.S. Department of Commerce',
        url: 'https://www.bea.gov',
      },
      description:
        "Regional Price Parity index: Coeur d'Alene MSA at 97.5, approximately 15.5 points below the Seattle metro.",
    },
    {
      '@type': 'WebPage',
      name: "Coeur d'Alene, ID Housing Market",
      url: 'https://www.redfin.com/city/4370/ID/Coeur-d-Alene/housing-market',
      publisher: { '@type': 'Organization', name: 'Redfin', url: 'https://www.redfin.com' },
      description:
        "Coeur d'Alene median sale price $596,392 (April 2026, +1.9% YoY); 229 homes sold (+28.8% YoY); median 37 days on market. Inbound migration: LA (+420), Portland (+163), San Francisco (+105).",
    },
    {
      '@type': 'WebPage',
      name: 'Idaho Transportation Department',
      url: 'https://itd.idaho.gov',
      publisher: { '@type': 'GovernmentOrganization', name: 'Idaho Transportation Department', url: 'https://itd.idaho.gov' },
      description:
        'SH-41 to US-95 interchange identified as most congested segment in Idaho Panhandle; construction through 2029.',
    },
    {
      '@type': 'WebPage',
      name: 'First Street Foundation — Climate Risk Data',
      url: 'https://firststreet.org',
      publisher: { '@type': 'Organization', name: 'First Street Foundation', url: 'https://firststreet.org' },
      description:
        "Wildfire risk assessment: less than 1% of Coeur d'Alene area properties face meaningful wildfire risk over a 30-year horizon.",
    },
    {
      '@type': 'WebPage',
      name: 'NWS Spokane Forecast Office',
      url: 'https://www.weather.gov/otx/',
      publisher: {
        '@type': 'GovernmentOrganization',
        name: 'National Weather Service — NOAA',
        url: 'https://www.weather.gov',
      },
      description:
        'Snowfall climatology for North Idaho: Post Falls ~40 in/yr, Sandpoint town ~60–65 in/yr, Schweitzer summit ~300 in/yr, Priest Lake ~120 in/yr.',
    },
    {
      '@type': 'WebPage',
      name: "Coeur d'Alene Regional REALTORS® — Market Data",
      url: 'https://www.cdarealtors.com/market-data/',
      publisher: { '@type': 'Organization', name: "Coeur d'Alene Regional REALTORS®", url: 'https://www.cdarealtors.com' },
      description: 'Official monthly market snapshots for Kootenai County residential real estate.',
    },
  ],
  mentions: [
    { '@type': 'Place', name: "Coeur d'Alene", sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho' },
    { '@type': 'Place', name: 'Post Falls', sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho' },
    { '@type': 'Place', name: 'Hayden', sameAs: 'https://en.wikipedia.org/wiki/Hayden,_Idaho' },
    { '@type': 'Place', name: 'Rathdrum', sameAs: 'https://en.wikipedia.org/wiki/Rathdrum,_Idaho' },
    { '@type': 'Place', name: 'Sandpoint', sameAs: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho' },
    { '@type': 'AdministrativeArea', name: 'Kootenai County', sameAs: 'https://en.wikipedia.org/wiki/Kootenai_County,_Idaho' },
    { '@type': 'Organization', name: 'Kootenai Health', url: 'https://www.kh.org' },
    { '@type': 'Organization', name: 'Idaho State Tax Commission', url: 'https://tax.idaho.gov' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${PAGE_URL}#faq`,
  isPartOf: { '@id': `${PAGE_URL}#article` },
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is North Idaho expensive to live in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "North Idaho is below the national average cost of living. The Coeur d'Alene metro area scores 97.5 on the Bureau of Economic Analysis Regional Price Parity index, compared to approximately 113 for the Seattle metro — a difference of 15.5 points. Daily living costs including groceries, utilities, and services run lower than the major Pacific Northwest metros. Median home prices in Coeur d'Alene were $596,392 as of April 2026 (Redfin), but Post Falls and Rathdrum offer significantly lower entry points.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Idaho have a state income tax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Idaho's individual income tax rate is 5.3% flat as of January 1, 2025, reduced from 5.695% in 2024. This flat rate applies to all Idaho taxable income. Idaho has no estate tax and no inheritance tax. Source: Idaho State Tax Commission (tax.idaho.gov).",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the property tax rate in North Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Idaho's effective property tax rate is approximately 0.53% of assessed value — one of the lowest in the western United States, according to the Tax Foundation's 2026 data. Primary residence owners qualify for Idaho's $125,000 homeowner's exemption, which reduces the assessed value used for tax calculation. Seniors and disabled residents may qualify for the Circuit Breaker program for additional reductions.",
      },
    },
    {
      '@type': 'Question',
      name: "What is the best town to live in near Coeur d'Alene?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends on your priorities. Coeur d'Alene offers the lake and highest amenity density at a price premium. Post Falls is the most affordable major entry point and fastest-growing community in Kootenai County. Hayden is the family-friendly middle ground. Rathdrum is the most affordable and most rural option. Sandpoint, 45 minutes north, is a mountain resort town with its own distinct market.",
      },
    },
    {
      '@type': 'Question',
      name: 'How bad are North Idaho winters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Winter severity varies significantly by location. Post Falls averages approximately 40 inches of snow per year. The town of Sandpoint runs closer to 60–65 inches, while Schweitzer Mountain Resort above town averages around 300 inches at the summit. Priest Lake, further north, averages roughly 120 inches at lake level. The Rathdrum Prairie receives less snow than lakeside Coeur d’Alene due to terrain effects. Winters are real — four-wheel drive is advisable — but are considerably milder than the northern Midwest or mountain regions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does buying a home in North Idaho work if I live out of state?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Out-of-state buyers can and do purchase successfully in North Idaho, but the process requires a local agent who will do video walkthroughs, flag neighborhood details that photos miss, manage inspections remotely, and advise on offer strategy from a distance. Key practical steps include scheduling a dedicated visit before making offers when possible, understanding earnest money wire procedures, and having a plan for inspection contingencies you may not be physically present to evaluate.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Relocating to North Idaho', item: PAGE_URL },
  ],
}

const stats = [
  { value: '+53K', label: 'Kootenai County growth', sub: 'Residents added since 2010' },
  { value: '97.5', label: 'BEA cost-of-living index', sub: "Coeur d'Alene MSA (vs. 100 U.S.)" },
  { value: '5.3%', label: 'Idaho flat income tax', sub: 'Effective January 1, 2025' },
  { value: '0.53%', label: 'Effective property tax', sub: 'Idaho — Tax Foundation 2026' },
]

const faqs = faqSchema.mainEntity.map((q) => ({ q: q.name, a: q.acceptedAnswer.text }))

const linkClass = 'text-[#C4842A] hover:underline'

export default function RelocatingToNorthIdahoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#F5EFE6] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm text-[#9A9590] mb-6 font-dm-sans" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#C4842A] transition-colors">Home</Link>
            <span className="mx-2">·</span>
            <span className="text-[#5C5650]">Relocating to North Idaho</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Relocation Guide</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">18 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">May 2026</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Relocating to North Idaho: The Complete Local Guide for Out-of-State Buyers
          </h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            Costs, taxes, towns, schools, weather, commutes, and the buying process &mdash; everything out-of-state buyers need in one place, from a licensed Idaho REALTOR&reg; who made the move herself.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/shirin-headshot-studio.webp"
              alt="Shirin Abplanalp, Licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR&reg; · SRES&reg; · Berkshire Hathaway HomeServices Jacklin Real Estate · May 31, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1C1A17] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">{s.value}</p>
                <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">{s.label}</p>
                <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <img
        src="/images/north-idaho-relocation-guide.png"
        alt="North Idaho lakes, mountains, and towns &mdash; a complete relocation guide for out-of-state buyers"
        className="w-full h-auto block"
      />

      {/* Article Body */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">

            <article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">

              <p className="mb-6 text-xl text-[#1C1A17] font-semibold">I made this move myself.</p>
              <p className="mb-6">
                A few years ago I was in Bend, Oregon &mdash; a place that was once everything North Idaho is now. Small enough to feel like a community, beautiful enough to make you not care about the trade-offs, and then suddenly expensive and crowded in a way that changed what it felt like to live there. I looked at the map, looked at the numbers, and landed in Post Falls. I haven&rsquo;t looked back.
              </p>
              <p className="mb-6">
                Every week I work with buyers doing the same math I did. They&rsquo;re coming from Los Angeles, from Seattle, from Portland, from the Bay Area. Some are chasing lower taxes. Some are chasing a lower home price. Most are chasing something harder to name &mdash; a pace, a kind of community, an outdoor life that doesn&rsquo;t require being rich to access.
              </p>
              <p className="mb-6">
                This guide covers what they actually need to know: what things cost, where to live, what the schools and healthcare are really like, what the winters actually feel like, and how the buying process works when you&rsquo;re doing it from 1,200 miles away.
              </p>
              <p className="mb-10">It&rsquo;s long because the decision is big. Start with whatever matters most to you.</p>

              {/* ==================== H2 1: WHY ==================== */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Why people are moving to North Idaho right now</h2>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">The migration numbers are real</h3>
              <p className="mb-6">
                Kootenai County &mdash; the county that contains Coeur d&rsquo;Alene, Post Falls, Hayden, and Rathdrum &mdash; has added more than 53,000 residents since 2010, growing from 138,494 to 191,864 people as of July 2025, according to the{' '}
                <a href="https://www.census.gov/quickfacts/fact/table/kootenaicountyidaho/PST045224" target="_blank" rel="noopener noreferrer" className={linkClass}>U.S. Census Bureau</a>. The growth has been nearly uninterrupted for 25 years.
              </p>
              <p className="mb-6">
                The driver isn&rsquo;t natural population increase. It&rsquo;s people choosing to move here from somewhere else. In 2023&ndash;2024 alone, the county gained 2,900 net domestic migrants &mdash; people who packed up from another U.S. state and arrived in Kootenai County. That same year, total population grew by 3,100, meaning domestic migration accounted for almost all of it.
              </p>
              <p className="mb-6">
                Where are they coming from? Redfin&rsquo;s migration data through late 2025 shows the top inbound source markets for Coeur d&rsquo;Alene as Los Angeles (net +420 households), Portland (+163), and San Francisco (+105). California as a whole is the single largest origin state.
              </p>
              <p className="mb-10">
                For a deeper breakdown of which towns are growing fastest and why, read:{' '}
                <a href="/articles/moving-to-north-idaho-cheapest-places-migration-best-small-towns" className={linkClass}>The Honest Answer About Moving to North Idaho</a>.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">What&rsquo;s actually driving the move</h3>
              <p className="mb-6">A few overlapping forces are pushing people toward North Idaho right now.</p>
              <p className="mb-6">
                <strong className="text-[#1C1A17]">Remote work changed the geography of the decision.</strong>{' '}When your job comes with you, the question shifts from &ldquo;where can I afford to work?&rdquo; to &ldquo;where do I actually want to live?&rdquo; North Idaho answers that question well for a specific kind of person.
              </p>
              <p className="mb-6">
                <strong className="text-[#1C1A17]">The California equity trade.</strong>{' '}Buyers selling a California home &mdash; even a modest one &mdash; frequently have enough equity to buy here outright or with a very small mortgage. A $750,000 house in the Bay Area often funds a $550,000 home in Coeur d&rsquo;Alene with cash left over. The lifestyle math changes dramatically when you remove the mortgage payment.
              </p>
              <p className="mb-6">
                <strong className="text-[#1C1A17]">Washington&rsquo;s proposed millionaires tax.</strong>{' '}Washington&rsquo;s 2026 legislative session is advancing SB 6346 &mdash; a 9.9% income tax on household income above $1 million, which would take effect in 2028 with first payments due in 2029. It passed the state Senate in February 2026 and is still moving through the House. For business owners and very high earners in the Seattle area, the prospect alone has sharpened the financial conversation, and North Idaho &mdash; which sits 30 miles east of Spokane &mdash; is increasingly part of it.
              </p>
              <p className="mb-6">
                <strong className="text-[#1C1A17]">Outdoor access without the price premium.</strong>{' '}Lake Coeur d&rsquo;Alene, the ski runs at Silver Mountain and Schweitzer, the mountain biking trails, the fishing &mdash; all of it is here. And unlike resort towns that have priced out everyone who isn&rsquo;t a second-home buyer, North Idaho is still a place where working families live year-round.
              </p>
              <p className="mb-10">
                For California-specific relocation context, see:{' '}
                <a href="/articles/best-places-to-live-north-idaho-leaving-california" className={linkClass}>Best Places to Live in North Idaho for People Leaving California</a>.
                For the full cost comparison against Seattle, Boise, and California metros, see:{' '}
                <a href="/articles/north-idaho-cost-of-living-comparison" className={linkClass}>North Idaho Cost of Living: BEA Data Comparison</a>.
              </p>

              {/* ==================== H2 2: COSTS ==================== */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">What North Idaho actually costs</h2>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">The honest cost-of-living picture</h3>
              <p className="mb-6">
                The Coeur d&rsquo;Alene metro area sits at 97.5 on the Bureau of Economic Analysis&rsquo;s Regional Price Parity index &mdash; meaning it&rsquo;s about 2.5% below the national average. Seattle scores approximately 113 on the same index. That&rsquo;s a 15.5-point difference in everyday purchasing power.
              </p>
              <p className="mb-6">
                That gap shows up in groceries, utilities, restaurants, and services &mdash; not just housing. North Idaho is genuinely less expensive than the major Pacific Northwest metros on nearly every daily-life line item.
              </p>
              <p className="mb-10">
                The full category-by-category breakdown using BEA, USDA, and EIA data is here:{' '}
                <a href="/articles/north-idaho-cost-of-living-comparison" className={linkClass}>North Idaho Cost of Living: BEA Data Comparison vs. Seattle, Boise, and California</a>.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">Home prices across the region</h3>
              <p className="mb-6">
                Coeur d&rsquo;Alene&rsquo;s median sale price was $596,392 as of April 2026, according to{' '}
                <a href="https://www.redfin.com/city/4370/ID/Coeur-d-Alene/housing-market" target="_blank" rel="noopener noreferrer" className={linkClass}>Redfin</a>{' '}
                &mdash; up 1.9% year over year. That&rsquo;s a real number. It&rsquo;s not cheap compared to the national median, but it&rsquo;s dramatically lower than the California and Seattle markets most buyers are leaving.
              </p>
              <p className="mb-10">
                Post Falls runs meaningfully lower than CDA, which is part of why it&rsquo;s become the region&rsquo;s fastest-growing community. For a town-by-town price breakdown, see:{' '}
                <a href="/articles/how-much-do-homes-cost-post-falls-idaho" className={linkClass}>How Much Do Homes Cost in Post Falls, Idaho?</a>{' '}
                For a side-by-side comparison across all five main towns, see:{' '}
                <a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className={linkClass}>Coeur d&rsquo;Alene vs Post Falls vs Hayden vs Rathdrum vs Sandpoint</a>.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">Property taxes &mdash; lower than you expect</h3>
              <p className="mb-6">
                Idaho&rsquo;s effective property tax rate is approximately 0.53% of assessed value, according to the{' '}
                <a href="https://taxfoundation.org/data/all/state/property-taxes-by-state-county/" target="_blank" rel="noopener noreferrer" className={linkClass}>Tax Foundation&rsquo;s 2026 data</a>{' '}
                &mdash; one of the lowest in the western United States. On a $500,000 home, that&rsquo;s roughly $2,650 per year before exemptions.
              </p>
              {/* VERIFY: $125,000 homeowner's exemption — confirm exact figure and URL at tax.idaho.gov/taxes/property/homeowners-exemption/ */}
              <p className="mb-6">
                Primary residence owners qualify for Idaho&rsquo;s $125,000 homeowner&rsquo;s exemption, which reduces the assessed value used for tax calculation. There&rsquo;s also a Circuit Breaker program for seniors and disabled residents that can reduce the bill further.
              </p>
              <p className="mb-10">
                For the full county-by-county breakdown across all five panhandle counties, with official 2025 Idaho State Tax Commission rates:{' '}
                <a href="/articles/north-idaho-property-taxes-county-comparison" className={linkClass}>Property Taxes in North Idaho</a>.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">Idaho&rsquo;s income tax explained</h3>
              <p className="mb-6">
                Idaho&rsquo;s individual income tax rate is 5.3% as of January 1, 2025 &mdash; a flat rate that applies to all Idaho taxable income. That&rsquo;s down from 5.695% in 2024.{' '}
                {/* VERIFY: Idaho has no estate tax / no inheritance tax — confirm current statement on tax.idaho.gov */}
                Idaho has no estate tax and no inheritance tax.
              </p>
              <p className="mb-10">
                For buyers coming from Washington or California, the tax comparison gets interesting quickly. Washington still has no broad state income tax &mdash; but the millionaires-tax bill advancing in the 2026 legislature would change that calculus for households over $1 million starting in 2028. California&rsquo;s top statutory income tax bracket is 13.3%, and as of 2024 the effective top rate on wage income above $1 million is 14.4% once the uncapped 1.1% state disability payroll tax is included. Idaho&rsquo;s flat 5.3% sits well below either of those, and when you factor in property tax differences and the cost of daily life, the full picture often looks different than the headline numbers suggest.
              </p>

              {/* ==================== H2 3: FIVE TOWNS ==================== */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">The five towns: where to actually live</h2>
              <p className="mb-8">
                North Idaho is not just Coeur d&rsquo;Alene. Most out-of-state buyers come in thinking CDA is the only option, then discover that Post Falls, Hayden, Rathdrum, and Sandpoint each offer something different &mdash; and that the choice between them matters more than people expect.
              </p>

              <div className="my-6 space-y-4 mb-8">
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Coeur d&rsquo;Alene &mdash; the lake and the lifestyle premium</p>
                  <p>CDA is the anchor of the region. It has the lake, a walkable downtown (by North Idaho standards), the best-known name, and the highest prices. If you want to walk to a waterfront restaurant or have your kids grow up swimming in Lake Coeur d&rsquo;Alene, CDA commands a premium that most buyers I work with find worth it.</p>
                </div>
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Post Falls &mdash; the practical choice</p>
                  <p>Post Falls is where the growth is. It&rsquo;s the most affordable major entry point in the region, it has excellent freeway access to Spokane for anyone commuting, and it&rsquo;s added more new construction in the last five years than anywhere else in Kootenai County. If your budget is under $500,000 or you want newer construction, Post Falls is almost always the answer.</p>
                </div>
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Hayden &mdash; the middle ground</p>
                  <p>Hayden sits between CDA and Post Falls in both geography and price. It attracts families who want good schools and quiet streets but don&rsquo;t need to be on the lake. Several of the most in-demand family neighborhoods in the region are in Hayden.</p>
                </div>
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Rathdrum &mdash; the most affordable option</p>
                  <p>Rathdrum is on the Rathdrum Prairie, which means less snow, more wind, and significantly lower home prices than anywhere in CDA or Hayden. If budget is the primary driver and you don&rsquo;t need to be close to the water, Rathdrum gives you the most square footage per dollar in the immediate region.</p>
                </div>
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Sandpoint &mdash; a different kind of move</p>
                  <p>Sandpoint is 45 minutes north on Highway 95 and operates like a different market entirely. It&rsquo;s a ski town on Lake Pend Oreille, with Schweitzer Mountain Resort as the anchor. Prices have risen significantly with demand. If you&rsquo;re buying in Sandpoint, expect a smaller job market, longer drives to Spokane, more winter, and a town that heavily rewards those who came for exactly that.</p>
                </div>
              </div>
              <p className="mb-10">
                For the full side-by-side comparison with data:{' '}
                <a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className={linkClass}>Coeur d&rsquo;Alene vs Post Falls vs Hayden vs Rathdrum vs Sandpoint</a>.{' '}
                For the specific Spokane vs. CDA decision:{' '}
                <a href="/articles/spokane-vs-coeur-dalene-which-is-right-for-you" className={linkClass}>Spokane vs. Coeur d&rsquo;Alene</a>.
              </p>

              {/* ==================== H2 4: FAMILIES ==================== */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Schools, healthcare, and what families need to know</h2>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">School districts and how open enrollment works</h3>
              <p className="mb-6">
                Three school districts serve most of Kootenai County: Coeur d&rsquo;Alene District 271, Post Falls District 273, and Lakeland District 272 (serving Rathdrum and Hayden areas). Idaho&rsquo;s 2023 open enrollment law changed how families can access schools across district boundaries &mdash; you&rsquo;re no longer necessarily locked into the district where your house sits.
              </p>
              <p className="mb-6">
                This matters for buyers because the district boundary lines sometimes cut through neighborhoods in ways that aren&rsquo;t obvious, and because some of the most sought-after schools in the region are accessible via open enrollment if you apply in the right window.
              </p>
              <p className="mb-10">
                The full guide for relocating families &mdash; including charter options, private schools, and what the open enrollment process actually looks like in practice:{' '}
                <a href="/articles/north-idaho-school-districts-open-enrollment-charters" className={linkClass}>A Parent&rsquo;s Guide to North Idaho Education</a>.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">Healthcare in Kootenai County</h3>
              <p className="mb-6">
                Kootenai Health in Coeur d&rsquo;Alene holds the only ACS-verified Level II Trauma designation in the region &mdash; meaning it&rsquo;s equipped to handle serious trauma cases without a transfer to Spokane. For day-to-day healthcare, most residents find what they need locally.
              </p>
              <p className="mb-6">
                There are specialties &mdash; certain cardiac procedures, major oncology &mdash; where Spokane&rsquo;s larger hospital systems (Providence, MultiCare) are the practical destination. But the &ldquo;you have to drive to Spokane for everything&rdquo; concern I hear from buyers who haven&rsquo;t visited yet is generally not how it plays out once they&rsquo;re here.
              </p>
              <p className="mb-10">
                The full breakdown by specialty and what actually requires a Spokane drive:{' '}
                <a href="/articles/north-idaho-healthcare-kootenai-spokane" className={linkClass}>Navigating Healthcare in Kootenai County</a>.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">For buyers 55 and older</h3>
              <p className="mb-6">
                I hold the SRES&reg; (Seniors Real Estate Specialist) designation because real estate after 55 is genuinely different. The financial instruments are different, the timeline pressures are different, and the community considerations matter in ways they simply don&rsquo;t for a 35-year-old first-time buyer.
              </p>
              <p className="mb-6">
                Greenstone recently opened Trutina at North Place &mdash; a 55+ community in Post Falls that&rsquo;s one of the more thoughtfully located senior developments I&rsquo;ve seen in North Idaho. Post Falls has the region&rsquo;s lowest average snowfall, a new hospital being built nearby, and freeway access. For buyers in that stage of life, it&rsquo;s worth a close look.
              </p>
              <p className="mb-10">
                Details on Trutina and what to know about buying in a new construction senior community:{' '}
                <a href="/articles/trutina-at-north-place-senior-community-post-falls-buyer-guide" className={linkClass}>Trutina at North Place</a>.{' '}
                What the SRES&reg; designation actually means and why it matters:{' '}
                <a href="/articles/sres-designation-real-estate-after-55-north-idaho" className={linkClass}>Why I Chose SRES&reg;</a>.
              </p>

              {/* ==================== H2 5: WEATHER ==================== */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">North Idaho winters &mdash; and everything else about the weather</h2>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">Snow varies more than people realize</h3>
              <p className="mb-6">The most common misconception from buyers who haven&rsquo;t visited: that North Idaho winter is uniform. It isn&rsquo;t.</p>
              {/* VERIFY: NOAA/NWS snowfall figures — confirm Post Falls 40", Sandpoint 90", Priest Lake 120" via NWS Spokane (weather.gov/otx) */}
              <p className="mb-6">
                Post Falls averages about 40 inches of snow per year. The town of Sandpoint runs closer to 60&ndash;65 inches, while Schweitzer Mountain Resort above town averages around 300 inches at the summit &mdash; so the &ldquo;Sandpoint winter&rdquo; depends heavily on whether you&rsquo;re buying in town or in the higher-elevation neighborhoods. Priest Lake, 60 miles north, averages roughly 120 inches at lake level. The Rathdrum Prairie, due to the rain shadow effect of the surrounding terrain, gets significantly less than lakeside Coeur d&rsquo;Alene. This is not a trivial difference &mdash; it affects what equipment you need, what your driveway looks like in January, and which communities are genuinely livable through February for people who didn&rsquo;t grow up with real winter.
              </p>
              <p className="mb-10">
                For a town-by-town snow ranking with real data:{' '}
                <a href="/articles/snowiest-cities-north-idaho-ranking" className={linkClass}>Snowiest Cities in North Idaho</a>.{' '}
                For the micro-climate breakdown that matters most for buyers choosing between areas:{' '}
                <a href="/articles/north-idaho-microclimates-rathdrum-prairie-sandpoint-snow" className={linkClass}>North Idaho Micro-Climates</a>.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">What summers are actually like</h3>
              <p className="mb-6">
                Hot, dry, and genuinely spectacular. Coeur d&rsquo;Alene in July and August is what people in California and Seattle imagine when they picture the Pacific Northwest at its best &mdash; except it actually exists. Lake temperatures get swimmable. The sun sets at 9:30 pm. The mountains are accessible without crowds.
              </p>
              {/* VERIFY: First Street Foundation wildfire risk — confirm <1% CDA figure via firststreet.org directly */}
              <p className="mb-10">
                Wildfire risk in the immediate CDA/Post Falls/Hayden area is low &mdash; First Street Foundation data shows less than 1% of properties in the CDA area face meaningful wildfire risk over a 30-year horizon. Smoke from regional fires can be an issue in late summer, but it&rsquo;s different from direct structural fire risk.
              </p>

              {/* ==================== H2 6: COMMUTES ==================== */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Commutes, infrastructure, and remote work</h2>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">How far is everything really?</h3>
              <p className="mb-6">&ldquo;60 minutes from everything&rdquo; is the phrase I use because it&rsquo;s accurate. From Post Falls or CDA, you are:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>25&ndash;30 minutes from Spokane (off-peak on I-90, Post Falls)</li>
                <li>33 minutes from Spokane (CDA, off-peak); closer to 40 minutes at AM peak</li>
                <li>50 minutes from Silver Mountain ski resort</li>
                <li>About 45 minutes from Sandpoint</li>
                <li>90+ minutes from Sandpoint to Spokane (for buyers considering that commute)</li>
              </ul>
              {/* VERIFY: ITD SH-41/US-95 construction through 2029 — confirm via itd.idaho.gov */}
              <p className="mb-6">
                The caveat: the SH-41 to US-95 interchange in Post Falls is the most congested segment in the Idaho Panhandle, per Idaho Transportation Department data, with construction continuing through 2029. If your morning commute runs through that stretch, understand the current timeline.
              </p>
              <p className="mb-10">
                For the full town-by-town commute guide with real traffic data:{' '}
                <a href="/articles/north-idaho-to-spokane-commute-times" className={linkClass}>Commute Times from North Idaho to Spokane</a>.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">Remote work viability</h3>
              <p className="mb-6">
                North Idaho is a strong remote work market. According to U.S. Census Bureau data, 92.2% of Kootenai County households have a broadband subscription &mdash; above the national average. In the main towns (CDA, Post Falls, Hayden, Rathdrum), reliable fiber or cable internet is generally available.
              </p>
              <p className="mb-6">
                The exception is rural acreage. If you&rsquo;re buying outside a developed neighborhood &mdash; 10+ acres on the Rathdrum Prairie or a property off a county road &mdash; verify internet service before closing, not after. Starlink has improved rural connectivity significantly, but it&rsquo;s not identical to cable broadband for video-heavy workloads.
              </p>
              <p className="mb-10">
                If you&rsquo;re considering a rural property specifically, read this first:{' '}
                <a href="/articles/buying-property-prairie-wells-septic-roads" className={linkClass}>Buying Property on the Prairie</a>.
              </p>

              {/* ==================== H2 7: FROM CA / WA ==================== */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">The relocation move &mdash; if you&rsquo;re coming from California or Washington</h2>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">Moving from California</h3>
              <p className="mb-6">
                The California-to-Idaho move involves three things that other relocations don&rsquo;t: a large equity event, a significant cost-of-living reset, and a genuine culture shift.
              </p>
              <p className="mb-6">
                The equity event is real. A $900,000 home in Sacramento or a $1.1M condo in the South Bay can fund a beautiful $600,000 home in North Idaho with cash left over &mdash; sometimes well over. I&rsquo;ve worked with California buyers who haven&rsquo;t had a mortgage in 20 years of Idaho homeownership because their equity from one California sale covered it.
              </p>
              <p className="mb-6">
                The culture shift is also real. North Idaho is politically conservative, outdoors-oriented, and community-focused in ways that feel different from the major California metros. Most California buyers who&rsquo;ve made the move and stayed will tell you they expected to miss more than they do.
              </p>
              <p className="mb-10">
                For a location-by-location breakdown of what California equity buys across the five towns:{' '}
                <a href="/articles/best-places-to-live-north-idaho-leaving-california" className={linkClass}>Best Places to Live in North Idaho for People Leaving California</a>.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">Moving from Washington (Seattle area)</h3>
              <p className="mb-6">
                The Seattle-to-North-Idaho move is geographically closer and financially interesting in a different way. You&rsquo;re essentially 30 miles east of Spokane, which means the lifestyle difference is significant but the distance isn&rsquo;t enormous.
              </p>
              <p className="mb-6">
                The tax argument got sharper with Washington&rsquo;s 2026 millionaires-tax bill (SB 6346) advancing through the legislature &mdash; a proposed 9.9% income tax on household income over $1 million, effective 2028 if it becomes law. For business owners and very high earners who were already considering the move, the prospect alone has pushed the financial math from &ldquo;interesting&rdquo; to &ldquo;urgent.&rdquo;
              </p>
              <p className="mb-10">
                For the Spokane vs. CDA comparison that almost every Washington buyer eventually asks:{' '}
                <a href="/articles/spokane-vs-coeur-dalene-which-is-right-for-you" className={linkClass}>Spokane vs. Coeur d&rsquo;Alene</a>.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">Should you rent before buying?</h3>
              <p className="mb-10">
                Most out-of-state buyers I work with who&rsquo;ve been here for 3+ years say the same thing: they wish they&rsquo;d rented for a season before buying. Not everyone &mdash; some people know exactly where they want to be and make the right call on the first purchase. But for buyers who&rsquo;ve never spent a winter here, renting first buys you something that research can&rsquo;t: lived knowledge of which neighborhood you actually want to be in, which commute route you actually hate, and whether the snow bothers you or becomes one of your favorite things.
              </p>

              {/* ==================== H2 8: BUYING ==================== */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Buying a home in North Idaho as an out-of-state buyer</h2>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">What the market looks like right now</h3>
              <p className="mb-6">
                In April 2026, 229 homes sold in Coeur d&rsquo;Alene &mdash; up 28.8% from the same period a year earlier. Median days on market was 37, down from 45 a year ago. Hot properties still go in around 5 days. The market is &ldquo;Somewhat Competitive&rdquo; overall (Redfin score: 49/100), but Post Falls runs &ldquo;Very Competitive&rdquo; (85/100) and Hayden is &ldquo;Very Competitive&rdquo; at 75/100.
              </p>
              <p className="mb-6">
                What that means in practice: you are not in a frenzy market where every offer turns into a bidding war. But in Post Falls and Hayden specifically, well-priced homes in good condition move fast, and out-of-state buyers who are slow to respond lose deals they would have won.
              </p>
              <p className="mb-10">
                For the Post Falls market specifically:{' '}
                <a href="/articles/post-falls-idaho-housing-market-2026" className={linkClass}>Post Falls Idaho Housing Market 2026</a>.{' '}
                For the broader timing question:{' '}
                <a href="/articles/is-it-a-good-time-to-buy-home-northern-idaho" className={linkClass}>Is It a Good Time to Buy a Home in Northern Idaho?</a>
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">The out-of-state buying process</h3>
              <p className="mb-6">
                Buying from a distance has specific practical challenges that local buyers don&rsquo;t face: scheduling tours when you can only visit for a long weekend, making offers without your agent being physically present when you are, handling inspections remotely, and making appraisal gap decisions from 1,000 miles away without a feel for the neighborhood.
              </p>
              <p className="mb-10">
                A great buyer&rsquo;s agent makes this workable. A mediocre one makes it a nightmare. What that difference looks like in practice:{' '}
                <a href="/articles/why-home-buyers-feel-like-theyre-doing-their-realtors-job" className={linkClass}>Why Do Home Buyers Feel Like They&rsquo;re Doing Their Realtor&rsquo;s Job?</a>{' '}
                On representing yourself without an agent in the current environment:{' '}
                <a href="/articles/buying-home-without-agent-nar-settlement-north-idaho" className={linkClass}>Buying a Home Without a Buyer&rsquo;s Agent in 2026</a>.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">If you still have a house to sell</h3>
              <p className="mb-10">
                This is the most common structural problem I see: buyer finds the right house in North Idaho but can&rsquo;t close until they sell their home in California or Washington. There are seven real ways to bridge that gap &mdash; bridge loans, HELOCs, 60-day IRA rollovers, 401(k) loans, sale-leasebacks, recasts, and contingent offers &mdash; and each comes with different cost structures and timelines. The full breakdown of what works, what doesn&rsquo;t, and what the IRS actually says:{' '}
                <a href="/articles/buying-north-idaho-home-before-selling-current-bridge-financing-options" className={linkClass}>You Found Your North Idaho Dream Home &mdash; But You Still Have a House to Sell</a>.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">Rural and acreage properties</h3>
              <p className="mb-10">
                If you&rsquo;re drawn to North Idaho for the land as much as the community, rural properties come with infrastructure considerations that subdivision buyers don&rsquo;t face: well depths and water rights, septic permitting and setback requirements, county road maintenance agreements, and utility easements. These aren&rsquo;t dealbreakers &mdash; they&rsquo;re knowable &mdash; but they&rsquo;re not visible in a listing photo. Everything you need to understand before writing an offer on rural property:{' '}
                <a href="/articles/buying-property-prairie-wells-septic-roads" className={linkClass}>Buying Property on the Prairie</a>.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-3 font-semibold">How to find the right agent</h3>
              <p className="mb-10">
                The criteria that matter when you&rsquo;re buying from out of state are different from what matters in a local transaction. What to look for &mdash; and what to ask before you hire anyone:{' '}
                <a href="/articles/how-to-find-realtor-post-falls-idaho" className={linkClass}>How to Find the Right Realtor in Post Falls, Idaho</a>.
              </p>

              {/* Disclaimers */}
              <div className="mb-10 p-5 rounded-sm bg-[#F0EBE3] border border-[#E0D5C8]">
                <p className="font-semibold text-[#1C1A17] mb-2">Important disclaimers</p>
                <p className="text-[15px] mb-3">
                  <strong className="text-[#1C1A17]">I&rsquo;m a REALTOR&reg;, not a tax advisor, financial planner, or attorney.</strong>{' '}
                  This guide presents data and my professional observations as an active North Idaho agent. Tax savings and financial outcomes vary significantly by individual situation; any decision to relocate or finance a purchase should be made with the appropriate professionals.
                </p>
                <p className="text-[15px] mb-3">
                  <strong className="text-[#1C1A17]">Market conditions and data change.</strong>{' '}
                  Home values, growth rates, and migration figures are based on publicly available data as of April&ndash;May 2026. Always verify current conditions before making decisions.
                </p>
                <p className="text-[15px]">
                  <strong className="text-[#1C1A17]">Idaho real estate transactions are governed by Idaho law and the{' '}
                    <a href="https://irec.idaho.gov" target="_blank" rel="noopener noreferrer" className={linkClass}>Idaho Real Estate Commission</a>.</strong>{' '}
                  As a licensed Idaho REALTOR&reg;, I represent buyers and sellers within the scope of my licensure.
                </p>
              </div>

              {/* FAQ */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-6 font-semibold">Frequently asked questions about relocating to North Idaho</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
                    <h3 className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-3">{faq.q}</h3>
                    <p className="font-dm-sans text-[15px] text-[#5C5650] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

              {/* Closing */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-5 font-semibold">A note from Shirin</h2>
              <p className="mb-6">
                I came to Post Falls from Bend, Oregon, where I&rsquo;d watched the same pattern play out: a place people discovered for all the right reasons, then loved to the point of changing it. North Idaho is earlier in that curve. That doesn&rsquo;t mean it&rsquo;s undiscovered &mdash; the numbers are clear on that. But it&rsquo;s still a place where you can afford to put down roots and feel them hold.
              </p>
              <p className="mb-6">
                The questions in this guide are the questions I get every week from buyers who are serious about this move. If yours isn&rsquo;t answered here, it&rsquo;s answered in one of the articles linked throughout &mdash; or you can ask me directly.
              </p>
              <p className="mb-2 text-[15px] text-[#9A9590]">
                Shirin Abplanalp is a licensed Idaho REALTOR&reg; and SRES&reg; (Seniors Real Estate Specialist) at Berkshire Hathaway HomeServices Jacklin Real Estate, serving Coeur d&rsquo;Alene, Post Falls, Hayden, Rathdrum, and Sandpoint.
              </p>
              <p className="mt-8 text-[13px] text-[#9A9590] italic">
                Guide last updated: May 2026. Market statistics reflect April 2026 data from Redfin and U.S. Census Bureau. Tax rates reflect 2025 Idaho State Tax Commission schedules. All data subject to change; verify current figures with relevant sources before making real estate or financial decisions.
              </p>

            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="lg:sticky lg:top-8 space-y-6">

                {/* CTA */}
                <div className="bg-[#C4842A] rounded-sm p-6">
                  <p className="font-cormorant text-2xl text-white font-semibold mb-2">Have a specific situation?</p>
                  <p className="font-dm-sans text-sm text-white/90 mb-4 leading-relaxed">Most relocation decisions come down to a handful of specifics this guide can&rsquo;t cover for everyone. If you want to walk through yours, I&rsquo;m available for a real conversation.</p>
                  <a href="/contact" className="block text-center bg-[#1C1A17] hover:bg-[#2C2A27] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    Schedule a call &rarr;
                  </a>
                </div>

                {/* In this guide */}
                <div className="bg-[#F5EFE6] rounded-sm p-6 border border-[#E8DDD0]">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-3">In this guide</p>
                  <ul className="font-dm-sans text-sm text-[#5C5650] space-y-2">
                    <li>Why people are moving here</li>
                    <li>What North Idaho actually costs</li>
                    <li>The five towns: where to live</li>
                    <li>Schools, healthcare, families</li>
                    <li>Winters and the weather</li>
                    <li>Commutes and remote work</li>
                    <li>From California or Washington</li>
                    <li>The out-of-state buying process</li>
                    <li>Frequently asked questions</li>
                  </ul>
                </div>

                {/* All articles */}
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <p className="font-cormorant text-xl text-[#C4842A] font-semibold mb-3">All North Idaho articles</p>
                  <p className="font-dm-sans text-sm text-white/80 mb-4 leading-relaxed">Every guide referenced here lives in the full article index.</p>
                  <a href="/articles" className="inline-block font-dm-sans text-sm text-[#C4842A] hover:underline">Browse all articles &rarr;</a>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  )
}
