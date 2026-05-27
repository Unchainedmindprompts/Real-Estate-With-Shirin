import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Coeur d'Alene vs Post Falls vs Hayden vs Rathdrum vs Sandpoint | Shirin Abplanalp",
  description:
    'Five North Idaho cities, one honest comparison. Home prices, schools, commutes, snow, taxes, and the things people only tell you after closing. Updated May 2026.',
  alternates: {
    canonical:
      'https://www.realestatewithshirin.com/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint',
  },
  openGraph: {
    title: "Coeur d'Alene vs Post Falls vs Hayden vs Rathdrum vs Sandpoint: The Honest Comparison",
    description:
      'Home prices, schools, commutes, snow, taxes, and the things people only tell you after closing. A working Realtor’s honest comparison of five North Idaho cities.',
    url: 'https://www.realestatewithshirin.com/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint',
    type: 'article',
    publishedTime: '2026-05-23',
    authors: ['Shirin Abplanalp'],
    images: ['https://www.realestatewithshirin.com/images/north-idaho-city-comparison.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint#article',
  headline: "Coeur d'Alene vs Post Falls vs Hayden vs Rathdrum vs Sandpoint: The Honest Comparison",
  description:
    'Five North Idaho cities, one honest comparison. Home prices, schools, commutes, snow, taxes, and what people only tell you after closing. Updated May 2026.',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/north-idaho-city-comparison.png',
    width: 1672,
    height: 941,
  },
  author: {
    '@type': 'Person',
    '@id': 'https://www.realestatewithshirin.com/#agent',
    name: 'Shirin Abplanalp',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.realestatewithshirin.com/#business',
    name: 'Shirin Abplanalp — Real Estate With Shirin',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.realestatewithshirin.com/images/shirin-logo.png',
      width: 1254,
      height: 1254,
    },
  },
  isPartOf: {
    '@type': 'CollectionPage',
    '@id': 'https://www.realestatewithshirin.com/articles',
    name: 'Northern Idaho Real Estate Articles',
    url: 'https://www.realestatewithshirin.com/articles',
  },
  datePublished: '2026-05-23T00:00:00-07:00',
  dateModified: '2026-05-23T00:00:00-07:00',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint',
  },
  url: 'https://www.realestatewithshirin.com/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint',
  keywords: [
    "Coeur d'Alene vs Post Falls",
    "Coeur d'Alene vs Hayden",
    'Post Falls vs Rathdrum',
    'Hayden vs Rathdrum',
    'best city North Idaho',
    'where to buy North Idaho',
    'North Idaho city comparison',
    "Sandpoint vs Coeur d'Alene",
    'Rathdrum growth Idaho',
    'Post Falls home prices',
    'Hayden Idaho real estate',
    "Coeur d'Alene home values 2026",
  ],
  articleSection: 'North Idaho Buyer Guides',
  wordCount: 3700,
  spatialCoverage: {
    '@type': 'Place',
    name: 'North Idaho',
    geo: { '@type': 'GeoShape', box: '45.5 -117.5 49.0 -114.5' },
  },
  about: [
    { '@type': 'City', name: "Coeur d'Alene", sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Post Falls', sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Hayden', sameAs: 'https://en.wikipedia.org/wiki/Hayden,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Rathdrum', sameAs: 'https://en.wikipedia.org/wiki/Rathdrum,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Sandpoint', sameAs: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
  ],
  mentions: [
    { '@type': 'Place', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'Place', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'Organization', name: "Coeur d'Alene School District 271", url: 'https://www.cdaschools.org' },
    { '@type': 'Organization', name: 'Post Falls School District 273', url: 'https://www.sd273.com' },
    { '@type': 'Organization', name: 'Lakeland Joint School District 272', url: 'https://www.sd272.com' },
    { '@type': 'Organization', name: 'Lake Pend Oreille School District 84', url: 'https://www.lposd.org' },
    { '@type': 'Organization', name: 'Kootenai Health', url: 'https://www.kh.org' },
  ],
  citation: [
    { '@type': 'WebPage', name: 'World Population Review — Idaho Cities', url: 'https://worldpopulationreview.com/us-cities/idaho' },
    { '@type': 'WebPage', name: "Zillow — Coeur d'Alene Housing Market", url: 'https://www.zillow.com/home-values/136166/coeur-dalene-id/' },
    { '@type': 'WebPage', name: 'Zillow — Post Falls Housing Market', url: 'https://www.zillow.com/home-values/40420/post-falls-id/' },
    { '@type': 'WebPage', name: 'Zillow — Hayden Housing Market', url: 'https://www.zillow.com/home-values/18510/hayden-id/' },
    { '@type': 'WebPage', name: 'Zillow — Rathdrum Housing Market', url: 'https://www.zillow.com/home-values/42632/rathdrum-id/' },
    { '@type': 'WebPage', name: 'Zillow — Sandpoint Housing Market', url: 'https://www.zillow.com/home-values/6929/sandpoint-id/' },
    { '@type': 'WebPage', name: 'U.S. Census Bureau QuickFacts — Hayden city, Idaho', url: 'https://www.census.gov/quickfacts/fact/table/haydencityidaho/PST045224' },
    { '@type': 'WebPage', name: 'Niche — Lakeland School District', url: 'https://www.niche.com/k12/d/lakeland-school-district-id/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Which is cheaper, Post Falls or Coeur d'Alene?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Post Falls is cheaper across the board. The typical Post Falls home value is $530,937 versus $604,956 in Coeur d'Alene — a $74,019 difference at the median, or about 14% less for an equivalent home. The gap is even wider in the lower-priced segments: under $500K, Post Falls has meaningfully more inventory and faster transactions (10 days to pending vs 25 in Coeur d'Alene). For buyers prioritizing value over walkability or lake access, Post Falls is the answer. Both cities sit at roughly the same effective property tax rate (about 0.55% of assessed value in Kootenai County), so the difference is purely the purchase price, not the carry cost.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which North Idaho city has the fastest population growth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Rathdrum is growing the fastest by a significant margin, at 6.2% annualized growth in 2026 and 6.6% in 2025. For comparison, Coeur d'Alene grew 1.0%, Hayden 1.9%, Post Falls 3.6%, and Sandpoint 4.1%. Rathdrum's growth is being driven by a combination of out-of-state relocation (primarily from California and Washington), spillover from Coeur d'Alene as that city's prices have stretched buyer budgets, and new construction inventory that's actually available to purchase. Buyers betting on appreciation often look to Rathdrum first because growth at this rate typically pulls home values upward over a 5-7 year window.",
      },
    },
    {
      '@type': 'Question',
      name: 'Where do most California transplants buy in North Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Coeur d'Alene and Hayden capture the higher-budget California buyer (typically $700K-$1.5M, often looking for a primary residence with lake access or a vacation home). Rathdrum and Post Falls capture the middle-budget California buyer ($500K-$750K, typically families or remote workers who did the value calculation). Sandpoint captures a smaller but distinct cohort — California buyers who specifically want a mountain-town lifestyle and are willing to trade urban convenience for it. The common thread across all five cities is that California buyers tend to do significantly more research before visiting than buyers from other states.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which North Idaho city has the best schools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "All four main school districts (Coeur d'Alene 271, Post Falls 273, Lakeland 272 in Rathdrum, and Lake Pend Oreille 84 in Sandpoint) are functional and serve students well. Coeur d'Alene 271 has the most options (Lake City High, Coeur d'Alene High, and Venture High plus charter alternatives). Post Falls 273 is quietly strong on graduation rates and elementary instruction. Lakeland 272 has a strong community feel and improving college-prep outcomes. Lake Pend Oreille 84 in Sandpoint has small class sizes but limited course catalog at the high school level. For families with specific needs, Idaho's open enrollment law means you may have more flexibility than your address suggests.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Hayden or Rathdrum better for families?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Both are family-friendly, but for different profiles. Hayden tends to attract families who want established residential neighborhoods, quieter streets, proximity to Hayden Lake, and access to Coeur d'Alene School District 271. The trade-off is higher home prices ($645,199 typical value) and less new construction inventory. Rathdrum attracts families who want larger lots, more room to spread out, newer construction options, and faster price appreciation. The trade-off is a longer drive to most services and the Lakeland 272 school district instead of CdA 271. Families who prioritize the Coeur d'Alene school zone tend toward Hayden; families who prioritize space and value tend toward Rathdrum.",
      },
    },
    {
      '@type': 'Question',
      name: 'Where do retirees buy in North Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Retirees typically choose between Coeur d'Alene (walkable downtown, immediate access to Kootenai Health, no need to drive for groceries or restaurants) and Sandpoint (small-town quiet, dramatic scenery, slower pace of life). Hayden is a secondary option for retirees who want low-maintenance residential without the urban density of Coeur d'Alene. Post Falls and Rathdrum see fewer retirees — Post Falls because it's commuter-oriented, and Rathdrum because the rural lifestyle requires more physical upkeep than many retirees want. As a Seniors Real Estate Specialist® (SRES®), Shirin Abplanalp works with retirees on factors specific to this life stage including single-level living, proximity to medical care, and downsizing strategies.",
      },
    },
    {
      '@type': 'Question',
      name: "What's the best North Idaho city for someone commuting to Spokane?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Post Falls, by a clear margin. The drive from central Post Falls to downtown Spokane runs 25-35 minutes in peak traffic, the shortest of the five cities. Coeur d'Alene adds 10-15 minutes (35-45 minutes peak). Hayden and Rathdrum sit in the 40-55 minute range depending on which side of each town you're starting from. Sandpoint is 90+ minutes and is not realistically a daily commute. For commuters who specifically want to minimize drive time without sacrificing quality of life, the Post Falls neighborhoods west of Spokane Street (closer to the Washington border) cut another 5-10 minutes off the commute.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which North Idaho city has the lowest property taxes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "All five cities sit at nearly identical effective property tax rates because they all benefit from Idaho's relatively low statewide property tax burden and the Homeowner's Exemption. Kootenai County (where Coeur d'Alene, Post Falls, Hayden, and Rathdrum sit) and Bonner County (Sandpoint) have effective rates of approximately 0.55-0.58% of assessed value for primary residences. The actual tax bill varies more by home value than by city. A $600,000 home in any of the four Kootenai County cities will carry a roughly similar tax bill.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    {
      '@type': 'ListItem',
      position: 3,
      name: "Coeur d'Alene vs Post Falls vs Hayden vs Rathdrum vs Sandpoint",
      item: 'https://www.realestatewithshirin.com/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint',
    },
  ],
}

const cityHeaders = ["Coeur d'Alene", 'Post Falls', 'Hayden', 'Rathdrum', 'Sandpoint']

const comparisonRows = [
  { metric: 'Population (2026)', values: ['58,555', '47,424+', '17,561', '14,293', '10,872+'], hi: -1 },
  { metric: 'Annual growth', values: ['1.0%', '3.6%', '1.9%', '6.2%', '4.1%'], hi: 3 },
  { metric: 'Typical home value', values: ['$604,956', '$530,937', '$645,199', '$578,248', '$634,657'], hi: 1 },
  { metric: '1-yr value change', values: ['+3.0%', '+1.5%', '+2.8%', '+2.7%', '+1.8%'], hi: -1 },
  { metric: 'Median days to pending', values: ['25', '10', '14', '31', '39'], hi: 1 },
  { metric: 'Commute to Spokane (peak)', values: ['35–45 min', '25–35 min', '40–50 min', '40–55 min', '90+ min'], hi: 1 },
  { metric: 'Effective property tax rate', values: ['~0.55%', '~0.55%', '~0.55%', '~0.55%', '~0.58%'], hi: -1 },
  { metric: 'Annual snowfall', values: ['50–60 in', '45–55 in', '55–65 in', '50–60 in', '80–100+ in'], hi: 4 },
  { metric: 'Distance to Kootenai Health', values: ['5 min', '15 min', '8 min', '25 min', '75 min'], hi: -1 },
  { metric: 'Best for', values: ['Walkable urban + lake', 'Value + commuter', 'Lake-side prestige', 'Growth + room', 'Mountain town life'], hi: -1 },
]

const stats = [
  { value: '5', label: 'Cities compared', sub: 'Head-to-head, honestly' },
  { value: '$530K', label: 'Lowest typical value', sub: 'Post Falls' },
  { value: '6.2%', label: 'Fastest growth', sub: 'Rathdrum' },
  { value: '10 days', label: 'Fastest to pending', sub: 'Post Falls' },
]

const faqs = faqSchema.mainEntity.map((q) => ({ q: q.name, a: q.acceptedAnswer.text }))

const linkClass = 'text-[#C4842A] hover:underline'

export default function CityComparisonArticlePage() {
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
            <span className="text-[#5C5650]">North Idaho City Comparison</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">North Idaho Buyer Guides</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">15 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">May 2026</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Coeur d&apos;Alene vs Post Falls vs Hayden vs Rathdrum vs Sandpoint: The Honest Comparison
          </h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            Five North Idaho cities, one honest comparison — home prices, schools, commutes, snow, taxes, and the things people only tell you after closing.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/shirin-headshot-studio.webp"
              alt="Shirin Abplanalp, Licensed REALTOR® at eXp Realty"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · eXp Realty · May 23, 2026</p>
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
        src="/images/north-idaho-city-comparison.png"
        alt="Aerial comparison of five North Idaho cities — Coeur d'Alene, Post Falls, Hayden, Rathdrum, and Sandpoint"
        className="w-full h-auto block"
      />

      {/* Article Body */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">

            {/* Article */}
            <article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">

              <p className="mb-6">
                Here&apos;s the short version, because most people scrolling this article already know what they want to know.
              </p>

              <div className="my-6 space-y-3 mb-8">
                <p><strong className="text-[#1C1A17]">Walkability, restaurants, and lake views</strong> — Coeur d&apos;Alene. $604,956 typical home value, 25 days to pending, and you&apos;ll pay for the privilege.</p>
                <p><strong className="text-[#1C1A17]">Best price-to-square-footage in the region</strong> — Post Falls. $530,937 typical home value, 10 days to pending, and the schools are quietly better than people give them credit for.</p>
                <p><strong className="text-[#1C1A17]">The prestige address with country-club energy</strong> — Hayden. $645,199 typical home value, lake access if you can afford the right side of the highway, and tax bills that match.</p>
                <p><strong className="text-[#1C1A17]">Growth, value, and room to breathe</strong> — Rathdrum. $578,248 typical home value, 6.2% population growth (the fastest of the five), and the smart money has been flowing here for two years.</p>
                <p><strong className="text-[#1C1A17]">Scenery so dramatic it stops feeling real</strong> — Sandpoint. $634,657 typical home value, the slowest market of the bunch at 39 days to pending, and you&apos;ll need to make peace with a 90-minute drive to most things.</p>
              </div>

              <p className="mb-6">
                That&apos;s the summary. The rest of the article is why those numbers actually mean what they mean, and which one is right for <em>you</em>.
              </p>
              <p className="mb-10">
                I&apos;m Shirin Abplanalp. I&apos;m a licensed REALTOR® who relocated here from Bend, Oregon two years ago. I&apos;ve shown homes in all five of these cities. I&apos;ll tell you what I tell my own family members when they ask — including the parts most agents won&apos;t.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The comparison at a glance
              </h2>
              <div className="overflow-x-auto my-6 mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: '#2A2722' }}>
                      <th className="text-left px-3 py-3 font-dm-sans font-semibold text-xs uppercase tracking-wide text-[#C4842A]">Metric</th>
                      {cityHeaders.map((c) => (
                        <th key={c} className="text-left px-3 py-3 font-dm-sans font-semibold text-xs uppercase tracking-wide text-[#C4842A]">{c}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, ri) => (
                      <tr key={row.metric} style={{ backgroundColor: ri % 2 === 0 ? '#F5EFE6' : '#EDE6DA' }}>
                        <td className="px-3 py-3 font-semibold text-[#1C1A17] font-dm-sans">{row.metric}</td>
                        {row.values.map((v, ci) => (
                          <td
                            key={ci}
                            className={`px-3 py-3 font-dm-sans ${ci === row.hi ? 'font-semibold text-[#C4842A]' : 'text-[#5C5650]'}`}
                          >
                            {v}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mb-10 text-[14px] text-[#9A9590]">
                Population data from{' '}
                <a href="https://worldpopulationreview.com/us-cities/idaho" target="_blank" rel="noopener noreferrer" className={linkClass}>World Population Review</a>{' '}
                (May 2026). Home values from{' '}
                <a href="https://www.zillow.com/home-values/" target="_blank" rel="noopener noreferrer" className={linkClass}>Zillow</a>{' '}
                (data through April 30, 2026). Other metrics from my prior articles on{' '}
                <a href="/articles/north-idaho-property-taxes-county-comparison" className={linkClass}>property taxes</a>,{' '}
                <a href="/articles/north-idaho-to-spokane-commute-times" className={linkClass}>commute times</a>,{' '}
                <a href="/articles/snowiest-cities-north-idaho-ranking" className={linkClass}>snowfall</a>, and{' '}
                <a href="/articles/north-idaho-healthcare-kootenai-spokane" className={linkClass}>healthcare</a>.
              </p>

              {/* Coeur d'Alene */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Coeur d&apos;Alene — the postcard city
              </h2>
              <p className="mb-6">
                Coeur d&apos;Alene is what your in-laws picture when you tell them you&apos;re moving to North Idaho. The lake is in town. Sherman Avenue has good restaurants. The Coeur d&apos;Alene Resort dock has a Christmas lights display every December that draws traffic from Spokane. The Centennial Trail runs right through downtown. There&apos;s a real estate flyer aesthetic to the entire city, and it earns it.
              </p>
              <p className="mb-6">
                It&apos;s also $604,956 for the typical home, with a{' '}
                <a href="https://www.zillow.com/home-values/136166/coeur-dalene-id/" target="_blank" rel="noopener noreferrer" className={linkClass}>median sale price of $581,838</a>, and 70.5% of homes are selling under list — meaning sellers are still pricing aggressively and buyers are pushing back. Two years ago you&apos;d have seen 30% of homes selling over list. Now it&apos;s 11%. The frenzy is over. The premium is not.
              </p>
              <p className="mb-3 font-semibold text-[#1C1A17]">Who Coeur d&apos;Alene is right for:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>You want to walk to a restaurant</li>
                <li>You want lake access without owning waterfront</li>
                <li>You want a downtown that has actual hours</li>
                <li>You don&apos;t mind summer tourist traffic on Sherman from June through August</li>
                <li>You&apos;re paying cash or putting 25%+ down — entry-level pricing here is brutal</li>
              </ul>
              <p className="mb-3 font-semibold text-[#1C1A17]">Who it&apos;s not right for:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>You want acreage. CdA proper doesn&apos;t really have that — you&apos;ll be looking at compact lots or paying $1M+ for the exceptions.</li>
                <li>You&apos;re commuting to Spokane every day. 35–45 minutes in peak traffic is fine; it&apos;s also 50+ when there&apos;s an accident on I-90, which happens more than anyone wants to admit.</li>
                <li>You&apos;re price-sensitive. The Foothills neighborhood is $604K typical. Riverton is $390K. There&apos;s variance, but there isn&apos;t a &ldquo;cheap&rdquo; Coeur d&apos;Alene.</li>
              </ul>
              <div className="my-6 p-5 rounded-sm border-l-2 border-[#C4842A] bg-[#F5EFE6] mb-10">
                <p><strong className="text-[#1C1A17]">The thing nobody tells you:</strong> the summer tourist traffic is real, and it changes the city for three months a year. Coeur d&apos;Alene from June to early September is a different place than from October to May. If you&apos;re a homebody who wants quiet, you&apos;ll love October. If you came here for the lake, you&apos;ll love June. If you wanted both — that&apos;s the trade.</p>
              </div>

              {/* Post Falls */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Post Falls — the quiet bargain
              </h2>
              <p className="mb-6">
                Post Falls is the city most relocating buyers underestimate, and it&apos;s the one I find myself recommending the most. The numbers tell the story. $530,937 typical home value — the lowest of the five cities. 10 days to pending — the fastest, by a wide margin. 1.5% appreciation over the last year — the slowest, which sounds bad until you realize it means the market is <em>stabilizing</em>, not stagnating, while inventory turns over fast.
              </p>
              <p className="mb-6">
                Translation: homes in Post Falls are priced right, they sell fast, and they&apos;re not getting bid up into absurd territory. For a buyer who wants to actually <em>close</em>{' '}on a house this quarter without an emotional bidding war, that&apos;s the profile you want.
              </p>
              <p className="mb-3 font-semibold text-[#1C1A17]">Who Post Falls is right for:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>You commute to Spokane (25–35 minutes, the closest of the five)</li>
                <li>You want new construction at reasonable prices — there&apos;s more inventory being built here than anywhere else in Kootenai County</li>
                <li>You want city water and sewer (not all of Post Falls has it, but most does — unlike Rathdrum and parts of Hayden)</li>
                <li>You want a family-friendly community with city services</li>
                <li>You&apos;re shopping under $600K and want options</li>
              </ul>
              <p className="mb-3 font-semibold text-[#1C1A17]">Who it&apos;s not right for:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>You want a walkable downtown. Post Falls has one, but it&apos;s smaller than Coeur d&apos;Alene&apos;s and doesn&apos;t have the same restaurant density.</li>
                <li>You want lake views as a default. Post Falls is on the Spokane River, which is beautiful, but it&apos;s not Lake Coeur d&apos;Alene.</li>
                <li>You want prestige. Post Falls isn&apos;t trying to be that. If &ldquo;address matters&rdquo; is on your list, you&apos;ll feel it.</li>
              </ul>
              <div className="my-6 p-5 rounded-sm border-l-2 border-[#C4842A] bg-[#F5EFE6] mb-10">
                <p><strong className="text-[#1C1A17]">The thing nobody tells you:</strong> Post Falls schools are genuinely good, and most people don&apos;t know it. Post Falls School District 273 has been quietly outperforming for years on graduation rates and college matriculation, and the elementary schools (especially Mullan Trail and West Ridge) have strong reputations. If you have school-aged kids and you&apos;ve been talked into thinking you have to live in Coeur d&apos;Alene proper to get good schools, this is worth a closer look. (More in my{' '}
                <a href="/articles/north-idaho-school-districts-open-enrollment-charters" className={linkClass}>North Idaho school districts article</a>.)</p>
              </div>

              {/* Hayden */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Hayden — the lake-adjacent prestige play
              </h2>
              <p className="mb-6">
                Hayden is what people mean when they say &ldquo;I want a nice house in North Idaho.&rdquo; It&apos;s smaller than Coeur d&apos;Alene (17,561 people) and quieter, with Hayden Lake on one side and rolling forested terrain on the other. The community feel is more residential than urban — fewer restaurants, fewer events, more houses with three-car garages and well-kept lawns. The neighborhoods around the lake (especially the east side) carry serious price tags. The neighborhoods on the highway side are more accessible.
              </p>
              <p className="mb-6">
                $645,199 typical home value puts it as the most expensive of the five cities on average — and the{' '}
                <a href="https://www.zillow.com/home-values/18510/hayden-id/" target="_blank" rel="noopener noreferrer" className={linkClass}>median list price of $786,150</a>{' '}
                tells you where the inventory is concentrated. This is a city where the cheap houses got bought a decade ago, and what&apos;s left is the upper tier.
              </p>
              <p className="mb-3 font-semibold text-[#1C1A17]">Who Hayden is right for:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>You want a house that looks like the magazine cover</li>
                <li>You want quiet residential streets without through-traffic</li>
                <li>You want lake access (with a boat slip if you can find one — they&apos;re harder to come by than the houses)</li>
                <li>Your kids are in the Coeur d&apos;Alene School District 271 area (Hayden Lake Elementary, Canfield Middle, Lake City High)</li>
                <li>You don&apos;t need walkable amenities; you&apos;ll drive everywhere</li>
              </ul>
              <p className="mb-3 font-semibold text-[#1C1A17]">Who it&apos;s not right for:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>First-time buyers under $500K. You&apos;ll struggle here — the starter inventory is thin.</li>
                <li>You want urban energy. Hayden does not have it. It is residential by design.</li>
                <li>You commute to Spokane. 40–50 minutes is real here, especially from the east side near the lake.</li>
              </ul>
              <div className="my-6 p-5 rounded-sm border-l-2 border-[#C4842A] bg-[#F5EFE6] mb-10">
                <p><strong className="text-[#1C1A17]">The thing nobody tells you:</strong> there&apos;s a meaningful difference between <em>Hayden</em> and <em>Hayden Lake</em> (the much smaller unincorporated community of 680 people on the lake&apos;s east shore). When buyers say &ldquo;I want Hayden Lake,&rdquo; they often mean &ldquo;I want a house with a view of Hayden Lake.&rdquo; Those are different properties at different price points. Be specific with your agent about which one you actually mean.</p>
              </div>

              {/* Rathdrum */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Rathdrum — the growth play
              </h2>
              <p className="mb-6">
                Rathdrum grew 6.6% in 2025 and is on pace for 6.2% in 2026. That&apos;s the fastest in this group, and it&apos;s not close. I&apos;ll be direct: Rathdrum is where the smart money has been quietly going for the last 24 months, and the buyers I&apos;m seeing there are not the buyers who used to be there. They&apos;re younger families relocating from Spokane, Boise transplants priced out of Treasure Valley, and California buyers who did the homework and figured out that you can get a four-bedroom on a half-acre in Rathdrum for what a two-bedroom condo costs in Coeur d&apos;Alene.
              </p>
              <p className="mb-6">
                $578,248 typical home value with 2.7% appreciation. $642,099 median list price. The market is <em>active</em>{' '}but not frothy — 31 days to pending, which suggests buyers have time to think, and sellers aren&apos;t dictating terms.
              </p>
              <p className="mb-3 font-semibold text-[#1C1A17]">Who Rathdrum is right for:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>You want acreage or larger lots. Rathdrum Prairie has them; Coeur d&apos;Alene doesn&apos;t.</li>
                <li>You&apos;re a value-conscious buyer who wants to be near the action without paying for the address</li>
                <li>You&apos;re betting on appreciation. Population growth that fast in a small city tends to pull home values upward over a 5–7 year window.</li>
                <li>You don&apos;t mind a 15–20 minute drive to Coeur d&apos;Alene for restaurants and services</li>
                <li>
                  You want strong school options through Lakeland School District 272 —{' '}
                  <a href="https://www.niche.com/k12/d/lakeland-school-district-id/" target="_blank" rel="noopener noreferrer" className={linkClass}>Niche rates Lakeland with solid college-prep marks</a>{' '}
                  and the high school has a strong sports culture
                </li>
              </ul>
              <p className="mb-3 font-semibold text-[#1C1A17]">Who it&apos;s not right for:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>
                  You want city services as a default. Rathdrum has them in the urban core, but the prairie areas are well/septic — which means{' '}
                  <a href="/articles/buying-property-prairie-wells-septic-roads" className={linkClass}>understanding the infrastructure tradeoffs matters</a>.
                </li>
                <li>You want walkable urbanism. Downtown Rathdrum has a few restaurants and a coffee shop, but it&apos;s small.</li>
                <li>You&apos;re commuting to Spokane every day. 40–55 minutes is the realistic range, and the route via Highway 53 has its own bottlenecks.</li>
              </ul>
              <div className="my-6 p-5 rounded-sm border-l-2 border-[#C4842A] bg-[#F5EFE6] mb-10">
                <p><strong className="text-[#1C1A17]">The thing nobody tells you:</strong> Rathdrum Prairie has a microclimate of its own. It tends to be colder than Coeur d&apos;Alene in winter, hotter in summer, and the wind comes off the prairie in ways that surprise transplants. I{' '}
                <a href="/articles/north-idaho-microclimates-rathdrum-prairie-sandpoint-snow" className={linkClass}>wrote about this in detail in the microclimates article</a>. Worth reading before you decide.</p>
              </div>

              {/* Sandpoint */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sandpoint — the mountain town
              </h2>
              <p className="mb-6">
                Sandpoint is in a different conversation than the other four. It&apos;s an hour and a half north of Coeur d&apos;Alene. It&apos;s on Lake Pend Oreille (1,158 feet deep, the fifth-deepest lake in the country). It has Schweitzer Mountain Resort 11 miles up the road — which averages roughly 300 inches of snow a year at the summit. The town of Sandpoint itself gets 80–100+ inches a year. And it has the highest &ldquo;I came here for vacation and never left&rdquo; rate of any town in North Idaho.
              </p>
              <p className="mb-6">
                $634,657 typical home value, 1.8% appreciation, 39 days to pending — the slowest market of the five cities, which means buyers who do their homework can find genuine value here. The{' '}
                <a href="https://www.zillow.com/home-values/6929/sandpoint-id/" target="_blank" rel="noopener noreferrer" className={linkClass}>median list price of $791,417</a>{' '}
                reflects how many lake-adjacent and view properties sit in inventory.
              </p>
              <p className="mb-3 font-semibold text-[#1C1A17]">Who Sandpoint is right for:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>You ski, board, hike, kayak, or fish — and you want all of those things within 30 minutes of your house</li>
                <li>You want a small-town downtown that genuinely works (First Avenue is one of the best small downtowns in the Pacific Northwest)</li>
                <li>You can work remotely or you&apos;ve already exited the commute economy</li>
                <li>You want dramatic scenery as a daily backdrop</li>
                <li>You&apos;re okay with winter being a long event, not a season</li>
              </ul>
              <p className="mb-3 font-semibold text-[#1C1A17]">Who it&apos;s not right for:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>You need to be near Spokane. 90+ minutes. Don&apos;t kid yourself.</li>
                <li>You rely on Kootenai Health or you have ongoing medical care. Bonner General Health is in Sandpoint, but the major medical center is 75 minutes south.</li>
                <li>
                  You hate snow. 80–100 inches a year is not a typo — it&apos;s the everyday reality. (More in my{' '}
                  <a href="/articles/snowiest-cities-north-idaho-ranking" className={linkClass}>snowfall ranking article</a>.)
                </li>
                <li>You want a faster transaction. Sandpoint inventory sits longer because the buyer pool is smaller — good for you as a buyer, less good if you&apos;ll eventually be a seller.</li>
              </ul>
              <div className="my-6 p-5 rounded-sm border-l-2 border-[#C4842A] bg-[#F5EFE6] mb-10">
                <p><strong className="text-[#1C1A17]">The thing nobody tells you:</strong> the Sandpoint visitors see is First Avenue in July. The Sandpoint you&apos;d actually live in is the quieter stuff off the main drag — the neighborhood restaurants, the small shops, and the lake-access spots locals use and tourists drive right past. That&apos;s the version that makes people stay. And the winter is <em>real</em>. Plan for it. Buy the snowblower. Order winter tires before October.</p>
              </div>

              {/* How to decide */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                How to decide
              </h2>
              <p className="mb-6">I get asked this question every week. Here&apos;s how I actually walk people through it:</p>
              <p className="mb-4"><strong className="text-[#1C1A17]">Start with the commute.</strong> If you&apos;re working in Spokane five days a week, the calculation is already half-made. Post Falls or Coeur d&apos;Alene. Rathdrum at the outside. Hayden if you&apos;re on the west side of town. Sandpoint is out.</p>
              <p className="mb-4"><strong className="text-[#1C1A17]">Then layer the budget.</strong> Under $500K, Post Falls is your friend. $500–700K, all five are in play but with tradeoffs. Over $700K, you have real options in every city — but the <em>value</em> per dollar is best in Rathdrum and Post Falls, and the <em>prestige</em> per dollar is best in Hayden.</p>
              <p className="mb-4"><strong className="text-[#1C1A17]">Then the lifestyle.</strong> Lake person? Coeur d&apos;Alene or Hayden for in-town access; Sandpoint for the dramatic version. Walkability? Coeur d&apos;Alene by a wide margin, with Sandpoint as the quieter second choice. Room to spread out? Rathdrum or rural Hayden. Quiet residential? Post Falls or Hayden.</p>
              <p className="mb-4"><strong className="text-[#1C1A17]">Then the schools.</strong> Coeur d&apos;Alene 271 covers Coeur d&apos;Alene and Hayden. Post Falls 273 covers Post Falls. Lakeland 272 covers Rathdrum, Spirit Lake, and Athol. Lake Pend Oreille 84 covers Sandpoint. All four are functional. The differences are real but smaller than the marketing implies. (See{' '}
                <a href="/articles/north-idaho-school-districts-open-enrollment-charters" className={linkClass}>my schools article</a>{' '}
                for the open-enrollment details that change what&apos;s possible.)</p>
              <p className="mb-10"><strong className="text-[#1C1A17]">Then visit.</strong> Spend three days here. Drive each city. Eat in each downtown (yes, Post Falls has one). Stand in a grocery store parking lot and watch who comes in and out. The right city <em>feels</em> right within an hour of being in it. The wrong city feels off even when the numbers say it should work.</p>

              {/* What I'd buy */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What I&apos;d buy if I were starting over today
              </h2>
              <p className="mb-6">
                Honest answer: a Rathdrum Prairie home on a half-acre, in the Lakeland district, with a $550–650K budget. Here&apos;s why. The growth rate is doing the work for you. The value-per-dollar is the strongest in the region. The schools are quietly good and improving. You have city services if you stay in town, well/septic if you want acreage, and you&apos;re 15 minutes from Coeur d&apos;Alene when you need restaurants or the lake. You&apos;re 40 minutes from Spokane when you need it. You&apos;re getting in before the price catches up to the trajectory.
              </p>
              <p className="mb-10">
                That&apos;s not the answer for every buyer. But if you don&apos;t have a strong reason to choose a different city — a specific job location, a specific school, a specific lifestyle anchor — Rathdrum is where the math points.
              </p>

              {/* Disclaimer */}
              <div className="mb-10 p-5 rounded-sm bg-[#F0EBE3] border border-[#E0D5C8]">
                <p className="font-semibold text-[#1C1A17] mb-2">Verify with professionals before deciding</p>
                <p className="text-[15px] mb-3">This article reflects current market data and my professional experience as a licensed REALTOR® in North Idaho. Property values, school district boundaries, and local conditions change. Before making a relocation or purchase decision, verify current details with the appropriate professionals:</p>
                <ul className="list-disc pl-6 space-y-1 text-[15px]">
                  <li><strong className="text-[#1C1A17]">Home values and market conditions:</strong> work with a licensed REALTOR® who can pull current MLS comps</li>
                  <li><strong className="text-[#1C1A17]">School district boundaries and open enrollment:</strong> verify directly with the school district office</li>
                  <li>
                    <strong className="text-[#1C1A17]">Property tax estimates:</strong> contact the county assessor in{' '}
                    <a href="https://www.kcgov.us/197/Assessor" target="_blank" rel="noopener noreferrer" className={linkClass}>Kootenai County</a>{' '}
                    or{' '}
                    <a href="https://bonnercountyid.gov/Departments/Assessor" target="_blank" rel="noopener noreferrer" className={linkClass}>Bonner County</a>
                  </li>
                  <li><strong className="text-[#1C1A17]">Infrastructure (well, septic, sewer, water):</strong> hire a qualified inspector and verify with the relevant city or county utility</li>
                  <li><strong className="text-[#1C1A17]">Insurance, mortgage rates, and closing costs:</strong> consult with your lender and an insurance broker</li>
                </ul>
              </div>

              {/* FAQ */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-6 font-semibold">
                Frequently asked questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
                    <h3 className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-3">{faq.q}</h3>
                    <p className="font-dm-sans text-[15px] text-[#5C5650] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

              {/* A note from Shirin */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-5 font-semibold">
                A note from Shirin
              </h2>
              <p className="mb-6">
                Here&apos;s the thing about comparison articles like this: they make the decision sound more mathematical than it actually is. The truth is that the right city for you is partly about the data — commute, budget, schools, taxes — and partly about a feeling you&apos;ll have when you stand on a particular street at a particular time of day and think <em>this could be home</em>. I&apos;ve watched buyers do all the research, build the spreadsheet, narrow it to the &ldquo;correct&rdquo; answer, and then change their mind in 15 minutes after walking through downtown Sandpoint on a Saturday morning.
              </p>
              <p className="mb-6">
                That&apos;s not a failure of analysis. That&apos;s the analysis working. The numbers tell you what you can afford and what you should consider. The visit tells you which one is yours. If you&apos;re seriously comparing these five cities, plan three days here, stay in two different towns, drive the others, and pay attention to which one your shoulders relax in. The shoulders know.
              </p>
              <p className="mb-10">
                When you&apos;re ready to look at actual homes — or when you want a local opinion on a property you&apos;re already considering — I&apos;m happy to walk through it with you. As a licensed REALTOR® serving all five of these cities, my goal is to make sure you end up in the right home in the right place, not to talk you into whichever city has the most inventory I happen to be listing this week. The right answer is whichever one fits <em>your</em> life. The data just helps you see the tradeoffs clearly.
              </p>

            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="lg:sticky lg:top-8 space-y-6">

                {/* Quick Reference */}
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Typical Home Value</p>
                  <div className="space-y-4">
                    {comparisonRows[2].values.map((v, i) => (
                      <div key={cityHeaders[i]}>
                        <div className="flex justify-between mb-1.5">
                          <span className={`font-dm-sans text-sm ${i === 1 ? 'font-semibold text-[#C4842A]' : 'text-[#FAFAF8]'}`}>{cityHeaders[i]}</span>
                          <span className={`font-dm-sans text-sm font-semibold ${i === 1 ? 'text-[#C4842A]' : 'text-[#FAFAF8]'}`}>{v}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="font-dm-sans text-xs text-[#6B7A8D] mt-5 pt-4 border-t border-[#2C2A27]">Source: Zillow, data through April 30, 2026.</p>
                </div>

                {/* CTA */}
                <div className="bg-[#C4842A] rounded-sm p-6">
                  <p className="font-cormorant text-2xl text-white font-semibold mb-2">Not sure which city is yours?</p>
                  <p className="font-dm-sans text-sm text-white/90 mb-4 leading-relaxed">I serve all five. Let&apos;s talk through your commute, budget, and lifestyle and narrow it down to the right fit.</p>
                  <a href="/contact" className="block text-center bg-[#1C1A17] hover:bg-[#2C2A27] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    Talk with Shirin →
                  </a>
                </div>

                {/* Related */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Reading</p>
                  <div className="space-y-4">
                    <a href="/articles/north-idaho-to-spokane-commute-times" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho to Spokane Commute Times</p>
                    </a>
                    <a href="/articles/north-idaho-property-taxes-county-comparison" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Property Taxes: County Comparison</p>
                    </a>
                    <a href="/articles/north-idaho-school-districts-open-enrollment-charters" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho School Districts</p>
                    </a>
                    <a href="/articles/snowiest-cities-north-idaho-ranking" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Snowiest Cities in North Idaho</p>
                    </a>
                  </div>
                </div>

                {/* About Shirin */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Your Local Agent</p>
                  <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp, Licensed REALTOR® at eXp Realty" className="w-16 h-16 rounded-full object-cover mb-3" />
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
                  <p className="font-dm-sans text-xs text-[#9A9590] mb-3">Licensed REALTOR® · SRES® · eXp Realty · #1371861</p>
                  <p className="font-dm-sans text-xs text-[#5C5650] leading-relaxed">
                    Shirin relocated from Bend, Oregon and works buyers across Coeur d&apos;Alene, Post Falls, Hayden, Rathdrum, and Sandpoint every week.
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
