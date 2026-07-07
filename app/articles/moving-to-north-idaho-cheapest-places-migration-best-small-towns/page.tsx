import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "The Honest Answer About Moving to North Idaho | Shirin Abplanalp",
  description:
    "What's cheap, what's not, and why people keep coming. A data-backed local REALTOR's guide to the cheapest places to live in North Idaho, the 2025 migration numbers, and the best small towns — with the honest parts most relocation sites skip.",
  alternates: {
    canonical:
      'https://www.realestatewithshirin.com/articles/moving-to-north-idaho-cheapest-places-migration-best-small-towns',
  },
  openGraph: {
    title: "The Honest Answer About Moving to North Idaho: What's Cheap, What's Not, and Why People Keep Coming",
    description:
      'Where to find affordable homes, why North Idaho isn’t on cheapest-in-Idaho lists, the 2025 Census migration data, and the best small towns ranked by lifestyle — from an active local REALTOR.',
    url: 'https://www.realestatewithshirin.com/articles/moving-to-north-idaho-cheapest-places-migration-best-small-towns',
    type: 'article',
    publishedTime: '2026-05-27',
    authors: ['Shirin Abplanalp'],
    images: ['https://www.realestatewithshirin.com/images/moving-to-north-idaho-honest-guide.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.realestatewithshirin.com/articles/moving-to-north-idaho-cheapest-places-migration-best-small-towns#article',
  headline: "The Honest Answer About Moving to North Idaho: What's Cheap, What's Not, and Why People Keep Coming",
  alternativeHeadline:
    "A Local REALTOR's Data-Driven Guide to the Four Most-Asked Questions About Relocating to North Idaho — Where to Find Affordable Homes, Why North Idaho Isn't on Cheapest-in-Idaho Lists, the 2025 Census Migration Data, and the Best Small Towns Ranked by Lifestyle Priority",
  description:
    "A comprehensive, data-backed answer to the four most common questions about moving to North Idaho: where's the cheapest place to live, where to buy the cheapest home in Idaho, why people are migrating to the region, and the best small towns ranked by lifestyle. Includes 2026 Zillow ZHVI data, U-Haul Growth Index rankings, U.S. Census migration data showing 93% of North Idaho growth from in-migration, and honest market analysis from an active local REALTOR.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/moving-to-north-idaho-honest-guide.png',
    width: 1536,
    height: 1024,
  },
  author: { '@id': 'https://www.realestatewithshirin.com/#agent' },
  publisher: { '@id': 'https://www.realestatewithshirin.com/#business' },
  datePublished: '2026-05-27T00:00:00-07:00',
  dateModified: '2026-05-27T00:00:00-07:00',
  mainEntityOfPage: 'https://www.realestatewithshirin.com/articles/moving-to-north-idaho-cheapest-places-migration-best-small-towns',
  url: 'https://www.realestatewithshirin.com/articles/moving-to-north-idaho-cheapest-places-migration-best-small-towns',
  articleSection: 'North Idaho Buyer Guides',
  keywords: [
    'moving to North Idaho',
    'cheapest place to live in North Idaho',
    'cheapest place to buy a home in Idaho',
    'why are people moving to North Idaho',
    'best small town to live in Idaho',
    'North Idaho relocation guide',
    "Coeur d'Alene migration",
    'Sandpoint real estate',
    'Post Falls affordable homes',
    'Rathdrum population growth',
    'Idaho U-Haul Growth Index',
    'Idaho Census migration data',
  ],
  wordCount: 3200,
  spatialCoverage: {
    '@type': 'Place',
    name: 'North Idaho',
    geo: { '@type': 'GeoShape', box: '47.4090 -117.0357 48.9990 -116.0500' },
    containedInPlace: [
      { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
      { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    ],
  },
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  about: [
    { '@type': 'Thing', name: 'North Idaho Relocation' },
    { '@type': 'Thing', name: 'Idaho Cost of Living' },
    { '@type': 'Thing', name: 'Idaho Migration' },
    { '@type': 'Place', name: 'North Idaho' },
  ],
  mentions: [
    { '@type': 'GovernmentOrganization', name: 'U.S. Census Bureau', url: 'https://www.census.gov', sameAs: 'https://en.wikipedia.org/wiki/United_States_Census_Bureau' },
    { '@type': 'GovernmentOrganization', name: 'Idaho Department of Labor', url: 'https://www.labor.idaho.gov' },
    { '@type': 'GovernmentOrganization', name: 'Idaho Real Estate Commission', url: 'https://irec.idaho.gov' },
    { '@type': 'Organization', name: 'National Association of REALTORS®', sameAs: 'https://en.wikipedia.org/wiki/National_Association_of_Realtors' },
  ],
  citation: [
    { '@type': 'WebPage', name: 'Houzeo — 10 Cheapest Places to Live in Idaho in 2026', url: 'https://www.houzeo.com/blog/cheapest-places-to-live-in-idaho/', publisher: { '@type': 'Organization', name: 'Houzeo' } },
    { '@type': 'WebPage', name: 'U-Haul — Top U.S. Growth Metros and Cities of 2025 Announced', url: 'https://www.uhaul.com/Articles/About/U-Haul-Growth-Index-Top-US-Growth-Metros-And-Cities-Of-2025-Announced-36558/', publisher: { '@type': 'Organization', name: 'U-Haul International', url: 'https://www.uhaul.com' } },
    { '@type': 'WebPage', name: "Idaho Department of Labor — Census release shows most of Idaho's counties grew in population in 2025", url: 'https://idahoatwork.com/2026/03/31/census-release-shows-most-of-idahos-counties-grew-in-population-in-2025/', publisher: { '@type': 'GovernmentOrganization', name: 'Idaho Department of Labor', url: 'https://www.labor.idaho.gov' } },
    { '@type': 'WebPage', name: "Coeur d'Alene Press — North Idaho cities continue to grow as state population slows", url: 'https://cdapress.com/news/2025/mar/19/north-idaho-cities-continue-to-grow-as-state-population-growth-slows/', publisher: { '@type': 'Organization', name: "Coeur d'Alene Press", url: 'https://cdapress.com' } },
    { '@type': 'WebPage', name: 'Zillow — Idaho Housing Market: 2026 Home Prices & Trends', url: 'https://www.zillow.com/home-values/20/id/', publisher: { '@type': 'Organization', name: 'Zillow Group', url: 'https://www.zillow.com' } },
    { '@type': 'WebPage', name: 'U.S. Census Bureau — Population Estimates', url: 'https://www.census.gov/programs-surveys/popest.html', publisher: { '@type': 'GovernmentOrganization', name: 'U.S. Census Bureau', url: 'https://www.census.gov' } },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/articles/moving-to-north-idaho-cheapest-places-migration-best-small-towns#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Where's the cheapest place to live in North Idaho?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In Kootenai County, Post Falls is the most affordable major city, with a 2026 median home value around $531,000. Smaller surrounding communities like Spirit Lake, Athol, Bayview, and Hauser Lake offer single-family homes in the $350K-$450K range. In Bonner County, Ponderay, Priest River, and Clark Fork offer the lake-and-mountains lifestyle at materially lower prices than Sandpoint itself. None of North Idaho's panhandle cities crack the top 10 cheapest in Idaho overall — that list is dominated by southern Idaho cities like Blackfoot and Pocatello.",
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the cheapest place to buy a home in Idaho overall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Blackfoot ($305,000 median home value), Pocatello ($310,000), Jerome ($315,000), and Burley ($318,500) are the four cheapest cities in Idaho per Houzeo's 2026 ranking. All four are in southern or southeastern Idaho — none are in the North Idaho panhandle. If pure affordability is your top criterion, southern Idaho is the answer. If you want North Idaho specifically, Post Falls is your best value, followed by Rathdrum and the smaller outlying communities.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why are people moving to North Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "According to 2025 U.S. Census data, 93% of population growth in northern Idaho came from in-migration — not births — the highest in-migration share of any region in Idaho. Main drivers include lower property and income taxes, political and cultural alignment with newcomers' values, remote work enabling relocation, outdoor lifestyle access (lakes, mountains, four ski areas within an hour), low crime rates, strong community feel, and a temperate four-season climate. The Coeur d'Alene metro ranked in the top 50 nationally for one-year population growth in 2025, and Boise was ranked the 12th fastest-growing metro in America by U-Haul's 2025 Growth Index.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best small town to live in Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends what you're optimizing for. Sandpoint (population ~10,886) consistently ranks as one of the most appealing small towns in Idaho for lifestyle, lake access, and authentic small-town character. Coeur d'Alene (~58,555) is technically a city but feels like a small town outside summer tourist season. Post Falls (~47,424) is the most practical pick for relocators wanting affordability and convenience. Rathdrum (~14,293) is the fastest-growing small town in Kootenai County, ideal for buyers wanting space and quiet within 25 minutes of Coeur d'Alene. Ponderay is the fastest-growing town in Bonner County (+10% since 2020), offering Sandpoint-area lifestyle at lower prices.",
      },
    },
    {
      '@type': 'Question',
      name: "Is Coeur d'Alene cheaper than Boise?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Coeur d'Alene's median home value ($604,956 in May 2026) is currently higher than the Boise metro median in most submarkets. North Idaho's panhandle (Kootenai and Bonner counties) commands a lake-and-recreation premium that doesn't exist in most of the Boise metro. If pure affordability within Idaho is the goal, southern Idaho cities like Boise's smaller suburbs, Pocatello, or Twin Falls are cheaper than the North Idaho panhandle.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much money do I save moving from California to North Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It varies enormously by individual situation, but most California relocators report total annual savings in the $15,000-$40,000 range when factoring in property tax differences, income tax differences, lower housing costs, lower utility costs, and lower sales tax. The single biggest line item is usually property tax — California's effective property tax rates and Mello-Roos assessments often run several times higher than Idaho's. Always run the full math with a tax professional before making decisions.",
      },
    },
    {
      '@type': 'Question',
      name: 'How fast is North Idaho growing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Very fast. Kootenai County grew 1.7% in 2025, Bonner County grew 2.4%, and Rathdrum's population is up 6.19% since 2020. The Coeur d'Alene metro area ranked in the top 50 nationally for population growth in 2025. Idaho as a whole had 80% of its counties grow in population in 2025, well above the national rate of 60%.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is North Idaho a good place to retire?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For many seniors, yes. Key factors include lower taxes (no estate tax, Social Security not taxed), proximity to expanding healthcare (Kootenai Health, the new Prairie Medical Campus in Post Falls, and the Spokane hospital system), outdoor lifestyle, and lower-snow microclimate in Post Falls specifically. Shirin holds the SRES (Seniors Real Estate Specialist) designation and works with senior buyers regularly.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.realestatewithshirin.com/articles/moving-to-north-idaho-cheapest-places-migration-best-small-towns#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Moving to North Idaho: The Honest Answer',
      item: 'https://www.realestatewithshirin.com/articles/moving-to-north-idaho-cheapest-places-migration-best-small-towns',
    },
  ],
}

const stats = [
  { value: '93%', label: 'Growth from in-migration', sub: '2025 Census, North Idaho' },
  { value: '$531K', label: 'Post Falls median', sub: 'The value play in Kootenai' },
  { value: '+6.2%', label: 'Rathdrum growth', sub: 'Since 2020 — fastest in county' },
  { value: '$15–40K', label: 'Typical CA savings/yr', sub: 'Per relocating clients' },
]

const cheapestIdaho = [
  { rank: '1', city: 'Blackfoot', value: '$305,000' },
  { rank: '2', city: 'Pocatello', value: '$310,000' },
  { rank: '3', city: 'Chubbuck', value: '$385,000' },
  { rank: '4', city: 'Burley', value: '$318,500' },
  { rank: '5', city: 'Payette', value: '$330,000' },
  { rank: '6', city: 'Twin Falls', value: '$335,000' },
  { rank: '7', city: 'Jerome', value: '$315,000' },
  { rank: '8', city: 'Preston', value: '$564,950' },
  { rank: '9', city: 'Lewiston', value: '$378,500' },
  { rank: '10', city: 'Ammon', value: '$459,000' },
]

const panhandlePrices = [
  { city: "Coeur d'Alene", value: '$604,956' },
  { city: 'Hayden', value: '$645,199' },
  { city: 'Sandpoint', value: '$634,657' },
  { city: 'Rathdrum', value: '$578,248' },
  { city: 'Post Falls', value: '$530,937' },
]

const faqs = faqSchema.mainEntity.map((q) => ({ q: q.name, a: q.acceptedAnswer.text }))

const linkClass = 'text-[#C4842A] hover:underline'

export default function MovingToNorthIdahoArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#F5EFE6] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm text-[#9A9590] mb-6 font-dm-sans" aria-label="Breadcrumb">
            <a href="/" className="hover:text-[#C4842A] transition-colors">Home</a>
            <span className="mx-2">·</span>
            <a href="/articles" className="hover:text-[#C4842A] transition-colors">Articles</a>
            <span className="mx-2">·</span>
            <span className="text-[#5C5650]">Moving to North Idaho</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">North Idaho Buyer Guides</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">14 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">May 2026</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            The Honest Answer About Moving to North Idaho: What&apos;s Cheap, What&apos;s Not, and Why People Keep Coming
          </h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            The real version — backed by Census data, U-Haul migration numbers, and Zillow values — of the four questions I get every week about relocating here.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/shirin-headshot-studio.webp"
              alt="Shirin Abplanalp, Licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · SRES® · Berkshire Hathaway HomeServices Jacklin Real Estate · May 27, 2026</p>
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

      {/* Hero Image (placeholder — upload to /public/images/moving-to-north-idaho-honest-guide.png) */}
      <img
        src="/images/moving-to-north-idaho-honest-guide.png"
        alt="North Idaho lakes, mountains, and small towns — an honest look at moving to the region"
        className="w-full h-auto block"
      />

      {/* Article Body */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">

            {/* Article */}
            <article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">

              <p className="mb-6">I get four versions of the same question every week:</p>
              <ul className="list-none pl-0 mb-6 space-y-1 italic text-[#1C1A17]">
                <li>&ldquo;Where&apos;s the cheapest place to live in North Idaho?&rdquo;</li>
                <li>&ldquo;Where&apos;s the cheapest place to buy a home in Idaho?&rdquo;</li>
                <li>&ldquo;Why are people moving to North Idaho?&rdquo;</li>
                <li>&ldquo;What&apos;s the best small town to live in Idaho?&rdquo;</li>
              </ul>
              <p className="mb-10">
                The honest answers are not what most relocation websites tell you. So let me give you the real version — backed by Census data, U-Haul migration numbers, Zillow values, and my own daily on-the-ground reality as someone who works this market. Some of this is going to surprise you. Some of it might disappoint you. All of it is true.
              </p>

              <p className="mb-10">If you&rsquo;re still in the research phase, the full relocation guide covers costs, taxes, neighborhoods, schools, and the buying process in one place:{' '}<a href="/relocating-to-north-idaho" className="text-[#C4842A] hover:underline">Relocating to North Idaho: The Complete Local Guide for Out-of-State Buyers</a>.</p>
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">First: North Idaho is not the cheapest part of Idaho</h2>
              <p className="mb-6">
                Almost every &ldquo;cheapest places in Idaho&rdquo; article quietly pretends North Idaho doesn&apos;t exist — and there&apos;s a reason. When{' '}
                <a href="https://www.houzeo.com/blog/cheapest-places-to-live-in-idaho/" target="_blank" rel="noopener noreferrer" className={linkClass}>Houzeo published its 2026 ranking of the 10 cheapest places to live in Idaho</a>, the entire list was southern and eastern Idaho:
              </p>
              <div className="overflow-x-auto my-6 mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: '#2A2722' }}>
                      <th className="text-left px-4 py-3 font-dm-sans font-semibold text-xs uppercase tracking-wide text-[#C4842A]">Rank</th>
                      <th className="text-left px-4 py-3 font-dm-sans font-semibold text-xs uppercase tracking-wide text-[#C4842A]">City</th>
                      <th className="text-left px-4 py-3 font-dm-sans font-semibold text-xs uppercase tracking-wide text-[#C4842A]">Median Home Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cheapestIdaho.map((r, i) => (
                      <tr key={r.rank} style={{ backgroundColor: i % 2 === 0 ? '#F5EFE6' : '#EDE6DA' }}>
                        <td className="px-4 py-3 text-[#C4842A] font-semibold font-dm-sans">{r.rank}</td>
                        <td className="px-4 py-3 font-semibold text-[#1C1A17] font-dm-sans">{r.city}</td>
                        <td className="px-4 py-3 text-[#5C5650] font-dm-sans">{r.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mb-6">
                Notice anything? <strong className="text-[#1C1A17]">Not a single Kootenai or Bonner County city</strong> — the heart of the North Idaho panhandle — is on that list. Lewiston (#9) sits in north-central Idaho on the Snake River; that&apos;s the closest thing to &ldquo;cheap North Idaho&rdquo; you&apos;ll find on most lists. Here&apos;s what the panhandle actually costs in May 2026 (Zillow ZHVI):
              </p>
              <div className="my-6 bg-[#1C1A17] rounded-sm p-6 mb-8">
                <div className="space-y-3">
                  {panhandlePrices.map((p) => (
                    <div key={p.city} className="flex justify-between border-t border-[#2C2A27] pt-3 first:border-0 first:pt-0">
                      <span className="font-dm-sans text-sm text-[#FAFAF8]">{p.city}</span>
                      <span className="font-dm-sans text-sm font-semibold text-[#C4842A]">{p.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mb-10">
                These are <em>premium</em> prices — roughly <strong className="text-[#1C1A17]">double</strong> the cheapest southern Idaho cities, and they&apos;re not coming down. So if &ldquo;cheapest&rdquo; is your only criterion and you have a $300K–$350K budget, you should be looking at Pocatello, Burley, or Blackfoot. I&apos;d be doing you a disservice to pretend otherwise. <strong className="text-[#1C1A17]">But that&apos;s almost never what people actually want.</strong> They want to know what&apos;s affordable <em>for what they&apos;re trying to get</em> — and on that question, North Idaho still wins for most of the people I talk to.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">What&apos;s actually &ldquo;cheap&rdquo; in North Idaho</h2>
              <p className="mb-6">
                If your budget is in the $400K–$550K range and you want to be in the panhandle, you have real options. Here&apos;s where to look:
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-2 font-semibold">Post Falls — the value play in Kootenai County</h3>
              <p className="text-sm text-[#9A9590] mb-3">ZHVI $530,937 · +1.5% YoY · 10 days to pending</p>
              <p className="mb-6">
                Post Falls is hands-down the most affordable major city in Kootenai County and the smartest entry point for most first-time North Idaho buyers I work with. You&apos;re still close to everything — minutes to I-90, 30 minutes to Spokane International Airport, 15 minutes to downtown Coeur d&apos;Alene — but the lake-adjacent premium isn&apos;t there yet. It&apos;s also growing fast, with new construction everywhere and the brand-new{' '}
                <a href="/articles/trutina-at-north-place-senior-community-post-falls-buyer-guide" className={linkClass}>Prairie Medical Campus being built right now</a> — the biggest infrastructure announcement Kootenai County has seen in a decade.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-2 font-semibold">Rathdrum — the smart-money play, if you can stomach the commute</h3>
              <p className="text-sm text-[#9A9590] mb-3">ZHVI $578,248 · +2.7% YoY · +6.19% population since 2020</p>
              <p className="mb-6">
                Rathdrum is the <strong className="text-[#1C1A17]">fastest-growing city in Kootenai County</strong>, and most relocation buyers haven&apos;t heard of it. It sits on the Rathdrum Prairie about 20–25 minutes northwest of CdA. You get a true small-town feel, real space, and prices still ~10% below CdA. The catch is the commute — if you drive to downtown Spokane or CdA daily, Rathdrum adds time. If you&apos;re remote or hybrid, that&apos;s irrelevant, and it becomes one of the smartest moves in the region.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-2 font-semibold">Spirit Lake, Athol, Bayview &amp; the smaller communities</h3>
              <p className="mb-6">
                Willing to go further out? <strong className="text-[#1C1A17]">Spirit Lake</strong>, <strong className="text-[#1C1A17]">Athol</strong>, <strong className="text-[#1C1A17]">Bayview</strong>, and <strong className="text-[#1C1A17]">Hauser Lake</strong> can put single-family homes in the $350K–$450K range. You trade convenience and amenities for affordability and quiet — and for some buyers (especially retirees and remote workers), that trade is exactly right.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-2 font-semibold">Bonner County beyond Sandpoint</h3>
              <p className="mb-10">
                Sandpoint itself is expensive ($634K), but smaller Bonner County towns like <strong className="text-[#1C1A17]">Ponderay</strong>, <strong className="text-[#1C1A17]">Priest River</strong>, and <strong className="text-[#1C1A17]">Clark Fork</strong> offer materially lower prices with the same lake-and-mountains lifestyle. Ponderay&apos;s population is up <strong className="text-[#1C1A17]">10.03% since 2020</strong> — the fastest in Bonner County. People are figuring this out.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">Why are people moving to North Idaho? (The data, not the vibes)</h2>
              <p className="mb-6">
                Every January, U-Haul publishes its Growth Index — net one-way moves drawn from over 2.5 million annual rentals ({' '}
                <a href="https://www.uhaul.com/Articles/About/U-Haul-Growth-Index-Top-US-Growth-Metros-And-Cities-Of-2025-Announced-36558/" target="_blank" rel="noopener noreferrer" className={linkClass}>U-Haul 2025 Growth Index</a>). For 2025, <strong className="text-[#1C1A17]">Boise ranked #12 fastest-growing metro in America</strong> and <strong className="text-[#1C1A17]">Spokane ranked #15</strong> — and Spokane&apos;s growth feeds heavily into North Idaho via Post Falls, CdA, and Hayden. Idaho put two cities in the national top 25. That&apos;s a sustained pattern, not noise.
              </p>
              <p className="mb-6">
                The Census data is even more precise: <strong className="text-[#1C1A17]">93% of population growth in northern Idaho in 2025 came from in-migration</strong>, not births — the highest in-migration share of any region in the state ({' '}
                <a href="https://idahoatwork.com/2026/03/31/census-release-shows-most-of-idahos-counties-grew-in-population-in-2025/" target="_blank" rel="noopener noreferrer" className={linkClass}>Idaho Department of Labor</a>). By county ({' '}
                <a href="https://cdapress.com/news/2025/mar/19/north-idaho-cities-continue-to-grow-as-state-population-growth-slows/" target="_blank" rel="noopener noreferrer" className={linkClass}>CDA Press</a>): Kootenai +1.7% (~188,323, third-largest in Idaho), Bonner +2.4% (~53,955), and the CdA metro landed in the top 50 nationally for one-year growth. The small cities lead in percentage terms: Ponderay +10.03%, Rathdrum +6.19%, Sandpoint +4.12% since 2020.
              </p>
              <p className="mb-4 font-semibold text-[#1C1A17]">So why are they actually coming? In rough order of how often I hear it:</p>
              <ul className="list-decimal pl-6 mb-10 space-y-2">
                <li><strong className="text-[#1C1A17]">Taxes.</strong> Idaho&apos;s effective property tax rates are among the lowest in the country, and income tax compares favorably to CA/OR/WA. Most California transplants tell me the math saves them $15K–$40K a year — see my{' '}
                  <a href="/articles/north-idaho-property-taxes-county-comparison" className={linkClass}>property tax county comparison</a>.</li>
                <li><strong className="text-[#1C1A17]">Politics and culture.</strong> Many buyers want a community whose values reflect their own; North Idaho is genuinely culturally distinct from the metros people are leaving. (Some come for the opposite reasons — mountain-town liberalism in Sandpoint is real, too.)</li>
                <li><strong className="text-[#1C1A17]">Remote work made it possible.</strong> Half my buyers now work for a Bay Area or Seattle company from a home office in Hayden. The shift permanently expanded who can live here.</li>
                <li><strong className="text-[#1C1A17]">Outdoor lifestyle.</strong> Two big lakes, two mountain ranges, four ski areas within an hour, world-class fishing and hunting. People move for the weekends they want.</li>
                <li><strong className="text-[#1C1A17]">Safety and community feel.</strong> Low crime, functional schools, neighbors who know each other — for families especially, this comes up a lot.</li>
                <li><strong className="text-[#1C1A17]">Climate.</strong> A real four-season climate without brutal extremes — and Post Falls specifically gets the{' '}
                  <a href="/articles/snowiest-cities-north-idaho-ranking" className={linkClass}>least snow of any major North Idaho city</a>.</li>
                <li><strong className="text-[#1C1A17]">They visited and couldn&apos;t stop thinking about it.</strong> Roughly 30% of my serious buyers came once on vacation, stewed on it for a year, then started looking.</li>
              </ul>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">What&apos;s the best small town to live in Idaho? (My honest opinion)</h2>
              <p className="mb-6">&ldquo;Best&rdquo; depends entirely on what you&apos;re optimizing for. The honest matrix:</p>
              <div className="my-6 space-y-4 mb-8">
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Lake life, don&apos;t mind tourist season → Coeur d&apos;Alene</p>
                  <p>A city now (~58,555) but still small-town most of the year — walkable downtown, lake centerpiece, tight community. Tradeoff: summer crowds and prices that reflect the desirability.</p>
                </div>
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">True small town with all the benefits → Sandpoint</p>
                  <p>~10,886 people — Lake Pend Oreille, a downtown with real character, Schweitzer 15 minutes up the hill, an arts scene. Also the <em>real</em> North Idaho winter. The people who love it really love it.</p>
                </div>
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Affordability + growth + convenience → Post Falls</p>
                  <p>~47,424, growing 3.6%/yr. Not the prettiest or most quintessentially &ldquo;Idaho,&rdquo; but affordable, well-located, and growing in all the right ways. The practical answer for most relocators.</p>
                </div>
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Quiet and space → Rathdrum</p>
                  <p>~14,293, growing 6.2%/yr (fastest in Kootenai). Real space, real quiet, good schools, strong community — if you don&apos;t mind a 20–25 minute commute. Ideal for remote or retired buyers.</p>
                </div>
                <div className="border-l-2 border-[#C4842A] pl-5">
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Small-town-near-the-lake at a lower entry point → Ponderay or Priest River</p>
                  <p>The lake-and-mountains lifestyle at materially lower prices than Sandpoint. You trade amenities for affordability — excellent value if you don&apos;t need a downtown to walk to.</p>
                </div>
              </div>
              <p className="mb-10">
                If I had to pick one for the typical relocating buyer — mid-career, family or empty-nester, leaving California or Washington — I&apos;d say <strong className="text-[#1C1A17]">Post Falls</strong> for affordability and convenience, <strong className="text-[#1C1A17]">Sandpoint</strong> for lifestyle and authenticity, and <strong className="text-[#1C1A17]">Coeur d&apos;Alene</strong> if you can afford the full experience without compromise. My{' '}
                <a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className={linkClass}>full town-by-town comparison</a> has the apples-to-apples breakdown.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">The cost of living reality (beyond home prices)</h2>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li><strong className="text-[#1C1A17]">Property taxes:</strong> among the lower rates in the country ({' '}
                  <a href="/articles/north-idaho-property-taxes-county-comparison" className={linkClass}>detail here</a>)</li>
                <li><strong className="text-[#1C1A17]">Income tax:</strong> Idaho&apos;s 5.695% flat rate — meaningfully lower than California&apos;s progressive structure</li>
                <li><strong className="text-[#1C1A17]">Sales tax:</strong> 6% statewide</li>
                <li><strong className="text-[#1C1A17]">Electricity:</strong> ~27% below national average (Avista serves most of the area)</li>
                <li><strong className="text-[#1C1A17]">Gas:</strong> cheaper than Washington (no Cap-and-Trade premium)</li>
                <li><strong className="text-[#1C1A17]">Groceries:</strong> roughly in line with national averages</li>
                <li><strong className="text-[#1C1A17]">Healthcare:</strong> Kootenai Health is excellent and growing; Spokane&apos;s full system is 30 minutes west ({' '}
                  <a href="/articles/north-idaho-healthcare-kootenai-spokane" className={linkClass}>healthcare guide</a>)</li>
              </ul>
              <p className="mb-10">
                For most relocating buyers, total cost of living lands roughly <strong className="text-[#1C1A17]">8–15% below</strong> what they paid in California or coastal Washington/Oregon, with property tax the biggest single saving. I broke this down in my{' '}
                <a href="/articles/north-idaho-cost-of-living-comparison" className={linkClass}>cost of living comparison</a>.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">So should you move to North Idaho?</h2>
              <p className="mb-3 font-semibold text-[#1C1A17]">You probably should if:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>You can afford $500K–$700K in Kootenai County (or $350K–$500K in surrounding towns)</li>
                <li>You&apos;ll trade some big-city amenities for outdoor access, lower taxes, and community feel</li>
                <li>You&apos;re remote or your career is portable</li>
                <li>Your kids are young enough to integrate or grown enough to visit</li>
                <li>You&apos;ve actually visited — not just looked at photos</li>
              </ul>
              <p className="mb-3 font-semibold text-[#1C1A17]">You probably should not if:</p>
              <ul className="list-disc pl-6 mb-10 space-y-1">
                <li>You need an extremely diverse food and cultural scene week-to-week</li>
                <li>You require a major medical specialty only found in big cities (though Spokane covers most)</li>
                <li>You hate cold or snow (look at Boise — same state, very different climate)</li>
                <li>Your career absolutely requires a specific metro</li>
                <li>You&apos;re moving primarily to make a political statement (it wears off; you&apos;ll still need to like the day-to-day)</li>
              </ul>

              {/* Disclaimers */}
              <div className="mb-10 p-5 rounded-sm bg-[#F0EBE3] border border-[#E0D5C8]">
                <p className="font-semibold text-[#1C1A17] mb-2">Important disclaimers</p>
                <p className="text-[15px] mb-3"><strong className="text-[#1C1A17]">I&apos;m a REALTOR®, not a tax advisor, financial planner, or attorney.</strong> This article presents data and my professional observations as an active North Idaho agent. Tax savings vary significantly by individual situation, and any decision to relocate should be made with the appropriate professionals.</p>
                <p className="text-[15px] mb-3"><strong className="text-[#1C1A17]">Market conditions and data change.</strong> All home values, growth rates, and migration figures are based on publicly available data as of May 2026. Always verify current conditions before making decisions.</p>
                <p className="text-[15px]"><strong className="text-[#1C1A17]">Idaho real estate transactions are governed by Idaho law and the{' '}
                  <a href="https://irec.idaho.gov" target="_blank" rel="noopener noreferrer" className={linkClass}>Idaho Real Estate Commission</a>.</strong> As a licensed Idaho REALTOR®, I represent buyers and sellers within the scope of my licensure.</p>
              </div>

              {/* FAQ */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-6 font-semibold">Frequently asked questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
                    <h3 className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-3">{faq.q}</h3>
                    <p className="font-dm-sans text-[15px] text-[#5C5650] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

              {/* Closing */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-5 font-semibold">Thinking about North Idaho? Let&apos;s have an honest conversation.</h2>
              <p className="mb-6">
                I&apos;ll tell you what&apos;s affordable. I&apos;ll tell you what&apos;s not. I&apos;ll tell you whether what you&apos;re picturing actually exists at your budget — and if it doesn&apos;t, I&apos;ll tell you that too. The buyers who succeed in this market are the ones who came in with realistic expectations and made informed decisions, not the ones who got sold a fantasy. You don&apos;t need a sales pitch. You need someone who knows the market and will tell you the truth.
              </p>
              <p className="mb-2 text-[15px] text-[#9A9590]">
                Shirin Abplanalp is a licensed Idaho REALTOR® and SRES® (Seniors Real Estate Specialist) at Berkshire Hathaway HomeServices Jacklin Real Estate, serving Coeur d&apos;Alene, Post Falls, Hayden, Rathdrum, and Sandpoint.
              </p>

            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="lg:sticky lg:top-8 space-y-6">

                {/* CTA */}
                <div className="bg-[#C4842A] rounded-sm p-6">
                  <p className="font-cormorant text-2xl text-white font-semibold mb-2">Is it affordable at your budget?</p>
                  <p className="font-dm-sans text-sm text-white/90 mb-4 leading-relaxed">I&apos;ll tell you what&apos;s realistic in North Idaho for what you want — and where to look if it isn&apos;t.</p>
                  <a href="/contact" className="block text-center bg-[#1C1A17] hover:bg-[#2C2A27] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    Schedule a call →
                  </a>
                </div>

                {/* Quick facts */}
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">North Idaho at a Glance</p>
                  <div className="space-y-3">
                    {[
                      { label: 'Most affordable major city', value: 'Post Falls ($531K)' },
                      { label: 'Fastest-growing (Kootenai)', value: 'Rathdrum (+6.2%)' },
                      { label: 'Fastest-growing (Bonner)', value: 'Ponderay (+10%)' },
                      { label: 'Growth from in-migration', value: '93% (2025)' },
                      { label: 'Cheapest in Idaho overall', value: 'Blackfoot, Pocatello (south)' },
                    ].map((item) => (
                      <div key={item.label} className="border-t border-[#2C2A27] pt-3 first:border-0 first:pt-0">
                        <p className="font-dm-sans text-xs text-[#9A9590] uppercase tracking-wide mb-0.5">{item.label}</p>
                        <p className="font-dm-sans text-sm text-[#FAFAF8] font-semibold">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Reading</p>
                  <div className="space-y-4">
                    <a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">CdA vs Post Falls vs Hayden vs Rathdrum vs Sandpoint</p>
                    </a>
                    <a href="/articles/north-idaho-cost-of-living-comparison" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho Cost of Living Comparison</p>
                    </a>
                    <a href="/articles/north-idaho-property-taxes-county-comparison" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Property Taxes: County Comparison</p>
                    </a>
                    <a href="/articles/trutina-at-north-place-senior-community-post-falls-buyer-guide" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Trutina at North Place (55+ in Post Falls)</p>
                    </a>
                  </div>
                </div>

                {/* About Shirin */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Your Local Agent</p>
                  <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp, Licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate" className="w-16 h-16 rounded-full object-cover mb-3" />
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
                  <p className="font-dm-sans text-xs text-[#9A9590] mb-3">Licensed REALTOR® · SRES® · Berkshire Hathaway HomeServices Jacklin Real Estate</p>
                  <p className="font-dm-sans text-xs text-[#5C5650] leading-relaxed">
                    Relocated from Bend, Oregon — she gives buyers the honest picture of what&apos;s affordable across North Idaho, not a sales pitch.
                  </p>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  )
}
