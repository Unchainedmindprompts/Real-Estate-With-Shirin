import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Cost of Living in North Idaho: Comparison with Spokane, Seattle & National Average | Shirin Abplanalp",
  description:
    "Federal and industry 2024–2026 cost-of-living data for North Idaho — housing, utilities, insurance, groceries, gas, healthcare — compared to Spokane, Seattle, Boise, and the national average.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/articles/north-idaho-cost-of-living-comparison',
  },
  openGraph: {
    title: 'Cost of Living in North Idaho: A Data-Backed Comparison with Spokane, Seattle, and the National Average',
    description:
      "Coeur d'Alene RPP: 97.507. Seattle: ~113. A line-by-line cost breakdown using BEA, Zillow, Avista, and AAA data for buyers evaluating a North Idaho move.",
    url: 'https://www.realestatewithshirin.com/articles/north-idaho-cost-of-living-comparison',
    type: 'article',
    publishedTime: '2026-05-20',
    authors: ['Shirin Abplanalp'],
    images: ['https://www.realestatewithshirin.com/images/north-idaho-cost-of-living.webp'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-cost-of-living-comparison#article',
  headline: 'Cost of Living in North Idaho: A Data-Backed Comparison with Spokane, Seattle, and the National Average',
  description:
    'Federal and industry 2024–2026 cost-of-living data for North Idaho — housing, utilities, insurance, groceries, gas, healthcare — compared to Spokane, Seattle, Boise, and the national average.',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/north-idaho-cost-of-living.webp',
    width: 1536,
    height: 1024,
  },
  author: { '@id': 'https://www.realestatewithshirin.com/#agent' },
  publisher: { '@id': 'https://www.realestatewithshirin.com/#business' },
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  datePublished: '2026-05-20T00:00:00-07:00',
  dateModified: '2026-05-20T00:00:00-07:00',
  mainEntityOfPage: 'https://www.realestatewithshirin.com/articles/north-idaho-cost-of-living-comparison',
  url: 'https://www.realestatewithshirin.com/articles/north-idaho-cost-of-living-comparison',
  keywords: [
    'North Idaho cost of living',
    "Coeur d'Alene cost of living 2026",
    'Sandpoint cost of living',
    'Kootenai County home prices',
    'Idaho home insurance',
    'Avista utility rates',
    'Idaho gas prices',
    'North Idaho vs Seattle cost',
    'North Idaho vs Spokane cost',
    "BEA regional price parity Coeur d'Alene",
    'Idaho cost of living comparison',
    'North Idaho relocation budget',
  ],
  articleSection: 'North Idaho Buyer Guides',
  wordCount: 3400,
  spatialCoverage: {
    '@type': 'Place',
    name: 'North Idaho',
    geo: { '@type': 'GeoShape', box: '45.5 -117.5 49.0 -114.5' },
  },
  about: [
    { '@type': 'AdministrativeArea', name: 'Kootenai County', sameAs: 'https://en.wikipedia.org/wiki/Kootenai_County,_Idaho', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'AdministrativeArea', name: 'Bonner County', sameAs: 'https://en.wikipedia.org/wiki/Bonner_County,_Idaho', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'City', name: "Coeur d'Alene", sameAs: "https://en.wikipedia.org/wiki/Coeur_d'Alene,_Idaho", containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Sandpoint', sameAs: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Spokane', sameAs: 'https://en.wikipedia.org/wiki/Spokane,_Washington', containedInPlace: { '@type': 'State', name: 'Washington' } },
    { '@type': 'City', name: 'Seattle', sameAs: 'https://en.wikipedia.org/wiki/Seattle', containedInPlace: { '@type': 'State', name: 'Washington' } },
  ],
  mentions: [
    { '@type': 'GovernmentOrganization', name: 'Bureau of Economic Analysis', url: 'https://www.bea.gov', sameAs: 'https://en.wikipedia.org/wiki/Bureau_of_Economic_Analysis' },
    { '@type': 'GovernmentOrganization', name: 'Federal Reserve Bank of St. Louis', url: 'https://fred.stlouisfed.org', sameAs: 'https://en.wikipedia.org/wiki/Federal_Reserve_Bank_of_St._Louis' },
    { '@type': 'Organization', name: 'Council for Community and Economic Research', url: 'https://www.c2er.org' },
    { '@type': 'Organization', name: 'Avista Utilities', url: 'https://www.myavista.com', sameAs: 'https://en.wikipedia.org/wiki/Avista' },
    { '@type': 'Organization', name: 'American Automobile Association', url: 'https://gasprices.aaa.com', sameAs: 'https://en.wikipedia.org/wiki/American_Automobile_Association' },
    { '@type': 'GovernmentOrganization', name: 'Idaho State Tax Commission', url: 'https://tax.idaho.gov', sameAs: 'https://en.wikipedia.org/wiki/Idaho_State_Tax_Commission' },
    { '@type': 'GovernmentOrganization', name: 'Idaho Public Utilities Commission', url: 'https://puc.idaho.gov', sameAs: 'https://en.wikipedia.org/wiki/Idaho_Public_Utilities_Commission' },
  ],
  citation: [
    { '@type': 'WebPage', name: 'BEA Regional Price Parities by State and Metro Area', url: 'https://www.bea.gov/data/prices-inflation/regional-price-parities-state-and-metro-area' },
    { '@type': 'WebPage', name: 'FRED Regional Price Parities Tables', url: 'https://fred.stlouisfed.org/release/tables?rid=403' },
    { '@type': 'WebPage', name: 'Zillow Kootenai County Housing Market', url: 'https://www.zillow.com/home-values/2368/kootenai-county-id/' },
    { '@type': 'WebPage', name: 'Realtor.com Kootenai County Market Report', url: 'https://www.realtor.com/local/market/idaho/kootenai-county' },
    { '@type': 'WebPage', name: 'Avista Utilities Rates and Tariffs', url: 'https://www.myavista.com/about-us/our-rates-and-tariffs/about-rates' },
    { '@type': 'WebPage', name: 'AAA Idaho Gas Prices', url: 'https://gasprices.aaa.com/?state=ID' },
    { '@type': 'WebPage', name: 'MoneyGeek Idaho Home Insurance Cost', url: 'https://www.moneygeek.com/insurance/homeowners/average-cost-home-insurance-idaho/' },
    { '@type': 'WebPage', name: 'Bankrate Home Insurance Rates by State 2026', url: 'https://www.bankrate.com/insurance/homeowners-insurance/states/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-cost-of-living-comparison#faq',
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-cost-of-living-comparison#article' },
  mainEntity: [
    {
      '@type': 'Question',
      name: "Is Coeur d'Alene cheaper than Spokane?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, marginally — but the gap is smaller than most people assume. The Bureau of Economic Analysis 2024 Regional Price Parity puts Coeur d'Alene at 97.507 on all items versus Spokane at roughly 98, a difference of less than one percent. The most meaningful gap is property tax, where Kootenai County's 0.452% average rate is dramatically lower than Spokane County's effective rates. Groceries run about 3% higher in Spokane (index 106.0 vs Idaho's 100). Housing has historically been cheaper in Spokane, though the gap has narrowed as Spokane prices have risen.",
      },
    },
    {
      '@type': 'Question',
      name: "How much does it cost to live in Coeur d'Alene compared to Seattle?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Coeur d'Alene runs roughly 14–16% cheaper than Seattle overall on the Bureau of Economic Analysis Regional Price Parity scale (97.5 vs 113). The savings are most pronounced in housing (35% cheaper on median home value), property tax (40–50% cheaper), and home insurance (Idaho averages $1,673/yr vs Washington's $1,800–2,400 depending on zone). Gasoline is cheaper in Idaho than Washington — Washington's carbon pricing adds roughly $0.35–0.50/gallon. State income tax favors Idaho at the high end of the income scale (5.695% top rate vs Washington's no income tax but 9.5%+ sales tax and capital gains tax on high earners).",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average home price in Kootenai County in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Kootenai County average home value is $579,280 per Zillow's May 2026 data, with the Coeur d'Alene median home price specifically at $617,950 at $333 per square foot per Realtor.com. Median rent across the county is $2,262 per month. Sandpoint averages $601,235, similar to Coeur d'Alene. These values place North Idaho roughly 60–70% above the U.S. typical home value of $357,138 but 30–35% below Seattle median home prices.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are utility costs in North Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Avista Utilities — the dominant electric and natural gas provider in North Idaho — averages approximately $112 per month for residential electricity. Natural gas heating runs $80–140 per month during winter depending on home size and weather. Municipal water and sewer in Coeur d\'Alene, Post Falls, and Hayden runs $50–90 per month; well and septic owners outside city limits pay nothing monthly but absorb periodic service costs. Internet plans run $60–95 per month. Total utilities average around $299 per month statewide per BEA data, with Sandpoint and points north running 15–25% higher because of colder winters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is Idaho home insurance so much cheaper than the national average?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Idaho home insurance averages $1,673 per year for standard coverage, which is 52% below the $3,467 national average per MoneyGeek's 2026 analysis. The structural reasons are lower replacement-cost building inflation than coastal states, lower litigation costs, fewer catastrophic weather events, and a smaller share of high-value coastal or floodplain properties. The caveat is that Bankrate identifies Idaho as one of the highest-wildfire-risk states, and premiums on properties in wildland-urban interface zones — particularly Bonner, Boundary, and Shoshone counties — have risen faster than the state average. Buyers should get a quote in writing before going under contract.",
      },
    },
    {
      '@type': 'Question',
      name: "How much should I budget for a typical Coeur d'Alene household?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For a two-adult, two-child household in Coeur d'Alene with a $600,000 home and 20% down at current 6.5% mortgage rates, realistic 2026 annual fixed costs run approximately $66,300 — that covers mortgage principal and interest (~$36,400), property tax (~$2,150), home insurance (~$1,673), utilities (~$3,600), groceries for four (~$13,200), gasoline for two vehicles (~$3,264), and employer-shared healthcare premiums (~$6,000). Discretionary spending, childcare, savings, and vehicle replacement run on top of that base. The same household profile in Seattle would run approximately $115,000–125,000 on the same line items.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is North Idaho a good move financially for retirees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For most retirees on fixed incomes — particularly those leaving California, Washington, or Oregon — yes, financially. Idaho does not tax Social Security benefits, the Property Tax Reduction (Circuit Breaker) program reduces property taxes by $250–$1,500 annually for qualifying seniors with household income at or below $39,130, and the homeowner's exemption removes up to $125,000 from taxable value. Healthcare costs run comparable to the national average, and Medicare Advantage plan availability through Kootenai Health is solid. The lifestyle and climate are meaningfully different from coastal markets, which matters as much as the dollars.",
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I check current cost-of-living data myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most authoritative source is the Bureau of Economic Analysis Regional Price Parities, updated annually each April with the prior year\'s data. The Federal Reserve Bank of St. Louis (FRED) publishes the same BEA data in a more accessible table format. For state rankings, the Missouri Economic Research and Information Center (MERIC) compiles the C2ER survey into a quarterly cost-of-living index. For housing specifically, Zillow, Redfin, and Realtor.com publish updated metro and county data monthly, and the Idaho State Tax Commission publishes official property tax rates each November.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-cost-of-living-comparison#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Cost of Living in North Idaho: A Data-Backed Comparison',
      item: 'https://www.realestatewithshirin.com/articles/north-idaho-cost-of-living-comparison',
    },
  ],
}

const RPP_MIN = 90
const RPP_MAX = 115

const rppData = [
  { name: "Coeur d'Alene MSA", rpp: 97.507, note: 'BEA 2024 (Kootenai County)', highlight: true },
  { name: 'Spokane, WA MSA', rpp: 98.0, note: 'BEA 2024, ~estimated' },
  { name: 'Boise City, ID MSA', rpp: 98.5, note: 'BEA 2024, ~estimated' },
  { name: 'National Average', rpp: 100.0, note: 'Baseline = 100' },
  { name: 'Bend-Redmond, OR MSA', rpp: 103.6, note: 'BEA 2024' },
  { name: 'Seattle-Tacoma, WA MSA', rpp: 113.0, note: 'BEA 2024, ~estimated' },
]

const housingData = [
  { market: 'Kootenai County (avg)', value: '$579,280', source: 'Zillow May 2026', highlight: false },
  { market: "Coeur d'Alene (median)", value: '$617,950', source: 'Realtor.com · $333/sqft', highlight: true },
  { market: 'Sandpoint (avg)', value: '$601,235', source: 'Zillow/SoFi', highlight: false },
  { market: 'Boise (avg)', value: '$492,024', source: 'Zillow', highlight: false },
  { market: 'Idaho statewide (typical)', value: '$456,464', source: 'Zillow Feb 2025', highlight: false },
  { market: 'Spokane, WA (median)', value: '~$400,000', source: 'Spokane MLS', highlight: false },
  { market: 'U.S. national (typical)', value: '$357,138', source: 'Zillow Feb 2025', highlight: false },
  { market: 'Seattle, WA (median)', value: '~$880,000', source: 'Zillow/Redfin', highlight: false },
]

const budgetItems = [
  { label: 'Mortgage P&I (20% down, 6.5%)', annual: 36400, pct: 54 },
  { label: 'Groceries (4 people)', annual: 13200, pct: 20 },
  { label: 'Healthcare premiums (employer-shared)', annual: 6000, pct: 9 },
  { label: 'Gasoline (2 vehicles, 24K mi)', annual: 3264, pct: 5 },
  { label: 'Utilities (electric/gas/water/internet/garbage)', annual: 3600, pct: 5 },
  { label: 'Property tax (after homeowner\'s exemption)', annual: 2150, pct: 3 },
  { label: 'Home insurance', annual: 1673, pct: 2 },
]

const bpcData = [
  { category: 'Housing and Utilities', annual: 9309 },
  { category: 'Healthcare', annual: 7507 },
  { category: 'Food and Beverages (non-restaurant)', annual: 3813 },
  { category: 'Gasoline and Energy Goods', annual: 1732 },
  { category: 'All Other Personal Expenditures', annual: 23909 },
]

const faqs = [
  {
    q: "Is Coeur d'Alene cheaper than Spokane?",
    a: "Yes, marginally — but the gap is smaller than most people assume. The BEA 2024 Regional Price Parity puts Coeur d'Alene at 97.507 versus Spokane at roughly 98, a difference of less than one percent. The most meaningful gap is property tax, where Kootenai County's 0.452% average rate is dramatically lower than Spokane County's effective rates. Groceries run about 3% higher in Spokane. Housing has historically been cheaper in Spokane, though the gap has narrowed as Spokane prices have risen.",
  },
  {
    q: "How much does it cost to live in Coeur d'Alene compared to Seattle?",
    a: "Coeur d'Alene runs roughly 14–16% cheaper than Seattle overall on the BEA Regional Price Parity scale (97.5 vs 113). The savings are most pronounced in housing (35% cheaper on median value), property tax (40–50% cheaper), and home insurance ($1,673/yr vs Washington's $1,800–2,400). Gasoline is also cheaper in Idaho — Washington's carbon pricing adds roughly $0.35–0.50/gallon. State income tax favors Idaho at the high end of the income scale (5.695% top rate vs Washington's no income tax but 9.5%+ sales tax and capital gains tax on high earners).",
  },
  {
    q: 'What is the average home price in Kootenai County in 2026?',
    a: "The Kootenai County average home value is $579,280 per Zillow's May 2026 data, with the Coeur d'Alene median at $617,950 at $333/sqft per Realtor.com. Median rent is $2,262/month. Sandpoint averages $601,235. These values place North Idaho 60–70% above the U.S. typical home value of $357,138 but 30–35% below Seattle.",
  },
  {
    q: 'What are utility costs in North Idaho?',
    a: "Avista Utilities averages approximately $112/month for residential electricity. Natural gas heating runs $80–140/month in winter. Municipal water and sewer runs $50–90/month in Coeur d'Alene, Post Falls, and Hayden. Internet plans run $60–95/month. Total utilities average around $299/month statewide, with Sandpoint and points north running 15–25% higher because of colder winters.",
  },
  {
    q: 'Why is Idaho home insurance so much cheaper than the national average?',
    a: "Idaho home insurance averages $1,673/year — 52% below the $3,467 national average per MoneyGeek's 2026 analysis. Lower replacement costs, fewer catastrophic weather events, and lower litigation costs drive the discount. The caveat: Bankrate identifies Idaho as one of the highest-wildfire-risk states, and premiums in wildland-urban interface zones (Bonner, Boundary, Shoshone counties) have risen faster. Get a quote before going under contract.",
  },
  {
    q: "How much should I budget for a typical Coeur d'Alene household?",
    a: "For a two-adult, two-child household with a $600,000 home and 20% down at 6.5%, realistic 2026 annual fixed costs run approximately $66,300 — covering mortgage P&I (~$36,400), property tax (~$2,150), insurance (~$1,673), utilities (~$3,600), groceries for four (~$13,200), gasoline for two vehicles (~$3,264), and employer-shared healthcare (~$6,000). The same profile in Seattle runs approximately $115,000–125,000.",
  },
  {
    q: 'Is North Idaho a good move financially for retirees?',
    a: "For most retirees leaving California, Washington, or Oregon — yes. Idaho doesn't tax Social Security benefits. The Circuit Breaker reduces property taxes $250–$1,500 for qualifying seniors (income ≤ $39,130). The homeowner's exemption removes up to $125,000 from taxable value. Medicare Advantage availability through Kootenai Health is solid. The lifestyle differences matter as much as the dollars.",
  },
  {
    q: 'Where can I check current cost-of-living data myself?',
    a: "BEA Regional Price Parities (updated each April at bea.gov) is the gold standard. FRED at stlouisfed.org publishes the same data in a more accessible table format. MERIC compiles the C2ER survey into state rankings quarterly. For housing, Zillow, Redfin, and Realtor.com update monthly. The Idaho State Tax Commission publishes official property tax rates each November.",
  },
]

export default function CostOfLivingArticlePage() {
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
            <span className="text-[#5C5650]">Cost of Living in North Idaho</span>
          </nav>
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">North Idaho Buyer Guides</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">14 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">May 2026</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Cost of Living in North Idaho: A Data-Backed Comparison with Spokane, Seattle, and the National Average
          </h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            North Idaho is close to the national average on most categories, meaningfully cheaper than Seattle on every category, and roughly even with Spokane — except property taxes, where Kootenai County is dramatically lower. Here&apos;s the line-by-line data.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/shirin-headshot-studio.webp"
              alt="Shirin Abplanalp, Licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · SRES® · Berkshire Hathaway HomeServices Jacklin Real Estate · May 20, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1C1A17] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">97.507</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">CdA RPP — BEA 2024</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">vs 100 national baseline</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">~113</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Seattle RPP</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">~16% more than CdA</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$1,673</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Idaho home insurance</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">52% below national avg</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">~$67.5K</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Annual household base</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">$600K home, family of 4</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="w-full">
        <img
          src="/images/north-idaho-cost-of-living.webp"
          alt="North Idaho cost of living comparison — Coeur d'Alene, Spokane, Seattle, and national average data visualization"
          className="w-full h-auto block"
        />
      </div>

      {/* Article Body */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">

            {/* Article */}
            <article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">

              <p className="mb-6">
                Most relocation calculators will tell you Coeur d&apos;Alene is &ldquo;8% cheaper than Seattle&rdquo; without telling you which dataset they pulled, what year it&apos;s from, or whether the number applies to housing, groceries, or everything combined. The federal data tells a more specific story — and the differences between categories matter more than the headline number when you&apos;re actually budgeting a move.
              </p>
              <p className="mb-10">
                The numbers below come from primary sources: the{' '}
                <a href="https://www.bea.gov/data/prices-inflation/regional-price-parities-state-and-metro-area" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Bureau of Economic Analysis 2024 Regional Price Parities</a>,{' '}
                <a href="https://www.zillow.com/home-values/2368/kootenai-county-id/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Zillow May 2026</a>,{' '}
                <a href="https://www.myavista.com/about-us/our-rates-and-tariffs/about-rates" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Avista Utilities</a>, and{' '}
                <a href="https://gasprices.aaa.com/?state=ID" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">AAA Fuel Prices</a>.
                Where estimates or calculated examples are used, they&apos;re labeled as such.
              </p>

              <p className="mb-10">Cost of living is the foundation, but it&rsquo;s one piece. For the full relocation picture &mdash; neighborhoods, schools, commutes, and the buying process &mdash;{' '}<a href="/relocating-to-north-idaho" className="text-[#C4842A] hover:underline">start with the complete North Idaho relocation guide</a>. For the out-of-state{' '}<a href="/buyers" className="text-[#C4842A] hover:underline">buying process</a>{' '}specifically, that&rsquo;s the deeper read.</p>

              {/* How to read COL numbers */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                How to read cost-of-living numbers
              </h2>
              <p className="mb-6">Three federal and industry datasets are worth knowing before you compare anything:</p>
              <div className="my-6 space-y-4">
                {[
                  {
                    num: '1',
                    label: 'Bureau of Economic Analysis Regional Price Parities (RPPs)',
                    desc: 'The gold standard. BEA publishes annual price indices for every U.S. metro area, expressed against a national average of 100. Numbers above 100 mean more expensive than average; below 100 means cheaper. The 2024 release (published April 2026) is the most current available.',
                  },
                  {
                    num: '2',
                    label: 'Council for Community and Economic Research (C2ER) Cost of Living Index',
                    desc: 'A private survey of 60+ goods and services across hundreds of cities. MERIC aggregates this into state rankings. Useful for grocery and service-cost comparisons between cities.',
                  },
                  {
                    num: '3',
                    label: 'BEA Personal Consumption Expenditures',
                    desc: 'Tracks what people actually spend by state and category — useful for budgeting because it reflects actual behavior rather than theoretical baskets.',
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4 border-l-2 border-[#C4842A] pl-5">
                    <span className="font-cormorant text-2xl text-[#C4842A] font-semibold flex-shrink-0 leading-none mt-0.5">{item.num}</span>
                    <div>
                      <p className="font-dm-sans text-base font-semibold text-[#1C1A17] mb-1">{item.label}</p>
                      <p className="font-dm-sans text-sm text-[#5C5650] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mb-10">
                When a relocation calculator says Coeur d&apos;Alene is &ldquo;8% cheaper than Seattle,&rdquo; it is usually pulling from one of these sources. Knowing which one — and what year — matters, because the BEA 2024 data was released in April 2026, while many web aggregators still cite 2022 numbers.
              </p>

              {/* RPP Chart */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                North Idaho in context — the federal data
              </h2>
              <p className="mb-4">
                The BEA&apos;s 2024 Regional Price Parity for the Coeur d&apos;Alene MSA (Kootenai County) breaks down as follows:
              </p>
              <div className="my-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#E8DDD0]">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">CdA MSA — RPP by Category (BEA 2024)</p>
                </div>
                <div className="divide-y divide-[#E8DDD0]">
                  {[
                    { label: 'All items', cda: '97.507', national: '100.0' },
                    { label: 'Goods', cda: '96.372', national: '100.0' },
                    { label: 'Services: Rents', cda: '95.899', national: '100.0' },
                    { label: 'Services: Other', cda: '98.774', national: '100.0' },
                  ].map((row) => (
                    <div key={row.label} className="px-6 py-3 flex items-center justify-between">
                      <span className="font-dm-sans text-sm text-[#5C5650]">{row.label}</span>
                      <div className="flex gap-8 text-right">
                        <div>
                          <p className="font-dm-sans text-xs text-[#9A9590] uppercase tracking-wide">CdA MSA</p>
                          <p className="font-dm-sans text-sm font-semibold text-[#C4842A]">{row.cda}</p>
                        </div>
                        <div>
                          <p className="font-dm-sans text-xs text-[#9A9590] uppercase tracking-wide">National</p>
                          <p className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{row.national}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-3 border-t border-[#E8DDD0]">
                  <p className="font-dm-sans text-xs text-[#9A9590]">Source: <a href="https://www.bea.gov/data/prices-inflation/regional-price-parities-state-and-metro-area" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">BEA Regional Price Parities</a> via <a href="https://fred.stlouisfed.org/release/tables?rid=403" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">FRED</a>.</p>
                </div>
              </div>

              <p className="mb-4">Compared to neighboring metros from the same 2024 dataset — bars scaled 90–115, national baseline shown:</p>
              <div className="my-6 bg-[#1C1A17] rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#2C2A27] flex items-center justify-between flex-wrap gap-2">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Regional Price Parity — All Items (BEA 2024)</p>
                  <p className="font-dm-sans text-xs text-[#6B7A8D]">100 = national average</p>
                </div>
                <div className="px-6 py-5 space-y-5">
                  {rppData.map((row) => {
                    const pct = Math.round(((row.rpp - RPP_MIN) / (RPP_MAX - RPP_MIN)) * 100)
                    const isBaseline = row.rpp === 100.0
                    return (
                      <div key={row.name}>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`font-dm-sans text-sm ${row.highlight ? 'font-semibold text-[#C4842A]' : 'text-[#FAFAF8]'}`}>{row.name}</span>
                          <span className={`font-dm-sans text-sm font-semibold ${row.highlight ? 'text-[#C4842A]' : isBaseline ? 'text-[#9A9590]' : 'text-[#FAFAF8]'}`}>{row.rpp.toFixed(1)}</span>
                        </div>
                        <div className="h-2.5 bg-[#2C2A27] rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${pct}%`, backgroundColor: row.highlight ? '#C4842A' : isBaseline ? '#6B7A8D' : '#5C5650' }}
                          />
                        </div>
                        <p className="font-dm-sans text-xs text-[#6B7A8D] mt-1">{row.note}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
              <p className="mb-10">
                The five-county panhandle outside Kootenai is not its own MSA, so BEA does not publish a separate parity for Bonner, Boundary, Shoshone, or Benewah. Industry aggregators put <a href="/articles/moving-to-north-idaho-cheapest-places-migration-best-small-towns" className="text-[#C4842A] hover:underline">Sandpoint and Bonners Ferry slightly below Coeur d&apos;Alene on overall cost</a> — mainly through lower housing and rents — with Shoshone and Benewah running closer because lower housing is partly offset by higher utility and grocery delivery costs in rural counties.
              </p>

              {/* Housing */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-5 font-semibold">
                Housing — the biggest single variable
              </h2>
              <p className="mb-6">
                Housing is where North Idaho&apos;s cost story is most nuanced, because the panhandle covers everything from $300K starter homes in St. Maries to multi-million-dollar Lake Pend Oreille waterfront. The most relevant comparison points for buyers arriving from West Coast metros:
              </p>
              <div className="my-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#E8DDD0]">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Home Values by Market — 2025–2026 Data</p>
                </div>
                <div className="divide-y divide-[#E8DDD0]">
                  {housingData.map((row) => (
                    <div key={row.market} className={`px-6 py-3.5 flex items-center justify-between ${row.highlight ? 'bg-white' : ''}`}>
                      <div>
                        <span className={`font-dm-sans text-sm ${row.highlight ? 'font-semibold text-[#1C1A17]' : 'text-[#5C5650]'}`}>{row.market}</span>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-0.5">{row.source}</p>
                      </div>
                      <span className={`font-cormorant text-xl font-semibold ${row.highlight ? 'text-[#C4842A]' : 'text-[#1C1A17]'}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mb-6">
                <strong className="text-[#1C1A17]">Rent in Coeur d&apos;Alene:</strong> $2,125/month median. Kootenai County overall: $2,262/month per Realtor.com. Comparable Spokane median rent runs $1,500–1,800. Seattle median rent runs $2,400–2,800.
              </p>
              <p className="mb-10">
                <strong className="text-[#1C1A17]">Property taxes — the offsetting good news.</strong> Even with higher home prices, the five-county panhandle&apos;s property tax rates (0.398%–0.673% per the{' '}
                <a href="/articles/north-idaho-property-taxes-county-comparison" className="text-[#C4842A] hover:underline">Idaho State Tax Commission 2025 data</a>) run dramatically below most West Coast jurisdictions. A $600,000 Coeur d&apos;Alene home at 0.452% pays roughly $2,150/year after the homeowner&apos;s exemption. The same home in Seattle would pay $5,500–7,000.
              </p>

              {/* Utilities */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Utilities — Avista is the dominant provider
              </h2>
              <p className="mb-6">
                Most of North Idaho is served by{' '}
                <a href="https://www.myavista.com/about-us/our-rates-and-tariffs/about-rates" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Avista Utilities</a>{' '}
                for electricity and natural gas. Avista filed a multi-year rate plan with the Idaho Public Utilities Commission in January 2025, so customers should expect modest annual adjustments through 2028.
              </p>
              <div className="my-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#E8DDD0]">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Monthly Utility Averages — North Idaho 2026</p>
                </div>
                <div className="divide-y divide-[#E8DDD0]">
                  {[
                    { label: 'Electricity (Avista residential)', value: '~$112/month', note: '$3.70/day average' },
                    { label: 'Natural gas (Avista, winter heating)', value: '$80–140/month', note: 'Depends on home size and weather' },
                    { label: 'Water/sewer (municipal)', value: '$50–90/month', note: "CdA, Post Falls, Hayden; well/septic owners pay $0 monthly" },
                    { label: 'Internet (Ziply, TDS, Spectrum, fiber)', value: '$60–95/month', note: 'Typical residential plans' },
                    { label: 'Garbage', value: '$20–35/month', note: 'City or contracted hauler' },
                    { label: 'Idaho statewide total (BEA/SoFi)', value: '~$299/month', note: 'Electric + gas + water + basic services' },
                  ].map((row) => (
                    <div key={row.label} className="px-6 py-3.5 flex items-start justify-between gap-4">
                      <div>
                        <p className="font-dm-sans text-sm text-[#1C1A17] font-medium">{row.label}</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-0.5">{row.note}</p>
                      </div>
                      <span className="font-dm-sans text-sm font-semibold text-[#C4842A] flex-shrink-0">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mb-10">
                Heating costs in Sandpoint and points north run 15–25% higher than on the Rathdrum Prairie because of colder winters — a factor that traces directly to the snowfall patterns documented in the{' '}
                <a href="/articles/north-idaho-microclimates-rathdrum-prairie-sandpoint-snow" className="text-[#C4842A] hover:underline">North Idaho microclimates article</a>.
              </p>

              {/* Insurance */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Home insurance — one of the best deals in America
              </h2>
              <p className="mb-6">
                <a href="https://www.moneygeek.com/insurance/homeowners/average-cost-home-insurance-idaho/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">MoneyGeek&apos;s 2026 analysis</a>{' '}
                puts the average annual Idaho home insurance premium at <strong className="text-[#1C1A17]">$1,673 — 52% below the national average of $3,467</strong>. Lower replacement-cost inflation than coastal states, lower litigation costs, and fewer catastrophic weather events drive the discount.
              </p>
              <p className="mb-10">
                The caveat:{' '}
                <a href="https://www.bankrate.com/insurance/homeowners-insurance/states/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Bankrate&apos;s 2026 report</a>{' '}
                identifies Idaho as one of the highest-wildfire-risk states. Premiums on homes in wildland-urban interface zones — particularly in Bonner, Boundary, and Shoshone counties — have risen faster than the state average, and some carriers now decline new policies in high-risk zones without defensible space documentation. <strong className="text-[#1C1A17]">Get an insurance quote before going under contract, not after.</strong>
              </p>

              {/* Groceries */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Groceries — slightly cheaper than Spokane
              </h2>
              <p className="mb-6">
                Idaho aggregate grocery prices index at about 100 on the C2ER scale, with Boise at 103.7 and Spokane at 106.0. Coeur d&apos;Alene typically runs between the two — slightly cheaper than crossing the state line into Spokane, slightly more expensive than statewide Idaho averages. Idaho average grocery spend per BEA PCE: <strong className="text-[#1C1A17]">$318 per person per month</strong>.
              </p>
              <p className="mb-10">
                <strong className="text-[#1C1A17]">One practical note on sales tax:</strong> Idaho charges 6% sales tax on groceries (partially offset by an annual grocery tax credit). Washington exempts most groceries. For a household spending $1,200/month on groceries, that is roughly $72/month or $864/year in tax that Spokane shoppers do not pay. Buyers commuting-distance to Spokane Valley should factor this in. Rural county buyers in Boundary, Shoshone, and Benewah also face reduced big-box selection — Costco and Trader Joe&apos;s require a drive to Coeur d&apos;Alene or Spokane Valley, which affects the real total cost of a grocery trip.
              </p>

              {/* Gas */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Gasoline and transportation
              </h2>
              <p className="mb-6">
                <a href="https://gasprices.aaa.com/?state=ID" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">AAA Fuel Prices</a>{' '}
                shows Idaho&apos;s average at <strong className="text-[#1C1A17]">$3.20–3.50 per gallon</strong> (2025–2026 range), meaningfully cheaper than Washington (~$4.00–4.50) and California (~$4.50–5.00+). Washington&apos;s Climate Commitment Act carbon pricing adds roughly $0.35–0.50/gallon on top of its already-higher base fuel taxes. California adds its own carbon program and excise taxes that push pump prices to among the highest in the country. For a two-car household driving 24,000 miles per year at 25 MPG combined, Idaho fuel costs run roughly <strong className="text-[#1C1A17]">$3,100–3,400/year</strong> — versus $3,800–4,300 in Washington and $4,300–4,800 in California at comparable usage.
              </p>
              <p className="mb-10">
                Vehicle registration is modest — passenger car registration runs $45–110 depending on vehicle age — and there is no annual emissions inspection in any of the five panhandle counties. Public transit in North Idaho is limited: Citylink operates a free fixed-route system across Kootenai County, but outside Kootenai, buyers should plan on car ownership.
              </p>

              {/* Healthcare */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Healthcare costs
              </h2>
              <p className="mb-10">
                Idaho&apos;s average annual healthcare spend per person is <strong className="text-[#1C1A17]">$7,507</strong> per BEA Personal Consumption Expenditures. North Idaho&apos;s healthcare ecosystem — covered in detail in the{' '}
                <a href="/articles/north-idaho-healthcare-kootenai-spokane" className="text-[#C4842A] hover:underline">healthcare article</a> — combines Kootenai Health&apos;s regional system with the Spokane Valley network for specialized care. Insurance premiums on the Idaho exchange run roughly comparable to Washington&apos;s Cascade Care for similar plan tiers. For Medicare-eligible buyers, North Idaho offers strong Medicare Advantage availability through Kootenai Health partnerships and broad regional acceptance for traditional Medicare.
              </p>

              {/* Childcare */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Childcare and education
              </h2>
              <p className="mb-10">
                Idaho childcare runs <strong className="text-[#1C1A17]">$728–$1,002 per child per month</strong> depending on age and provider type. Center-based infant care in Coeur d&apos;Alene runs at the higher end; home-based care and care in the rural counties typically runs lower. Public K–12 is fully funded — North Idaho&apos;s open enrollment process between CdA 271, Post Falls 273, and Lakeland 272 is covered in the{' '}
                <a href="/articles/north-idaho-school-districts-open-enrollment-charters" className="text-[#C4842A] hover:underline">schools article</a>. Private school options in Kootenai County range from $6,000 to $14,000 per year depending on grade level.
              </p>

              {/* Total Budget */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-5 font-semibold">
                Total budget — what households actually spend
              </h2>
              <p className="mb-4">
                The Idaho per-capita personal consumption average from BEA is <strong className="text-[#1C1A17]">$46,270 per year</strong>. The breakdown by category:
              </p>
              <div className="my-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#E8DDD0]">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Idaho Per-Capita Personal Consumption — BEA (Annual)</p>
                </div>
                <div className="divide-y divide-[#E8DDD0]">
                  {bpcData.map((row) => (
                    <div key={row.category} className="px-6 py-3.5 flex items-center justify-between">
                      <span className="font-dm-sans text-sm text-[#5C5650]">{row.category}</span>
                      <span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">${row.annual.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="px-6 py-3.5 flex items-center justify-between bg-white">
                    <span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">Total</span>
                    <span className="font-cormorant text-xl text-[#C4842A] font-semibold">$46,270</span>
                  </div>
                </div>
                <div className="px-6 py-3 border-t border-[#E8DDD0]">
                  <p className="font-dm-sans text-xs text-[#9A9590]">Source: <a href="https://www.bea.gov/data/consumer-spending/state" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">BEA Personal Consumption Expenditures by State</a>.</p>
                </div>
              </div>

              <p className="mb-4">
                For a <strong className="text-[#1C1A17]">two-adult, two-child household</strong> with a $600,000 home and 6.5% mortgage (20% down), realistic 2026 annual fixed costs — <em>calculated example, not sourced</em>:
              </p>
              <div className="my-6 bg-[#1C1A17] rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#2C2A27]">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Illustrative Annual Household Budget — CdA, $600K Home</p>
                </div>
                <div className="divide-y divide-[#2C2A27]">
                  {budgetItems.map((item) => (
                    <div key={item.label} className="px-6 py-3.5">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-dm-sans text-sm text-[#FAFAF8]">{item.label}</span>
                        <span className="font-dm-sans text-sm font-semibold text-[#C4842A] ml-4 flex-shrink-0">~${item.annual.toLocaleString()}</span>
                      </div>
                      <div className="h-1.5 bg-[#2C2A27] rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-[#C4842A]" style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))}
                  <div className="px-6 py-4 flex items-center justify-between">
                    <span className="font-dm-sans text-sm font-semibold text-[#9A9590] uppercase tracking-wide">Subtotal fixed costs</span>
                    <span className="font-cormorant text-2xl text-[#C4842A] font-semibold">~$66,300</span>
                  </div>
                </div>
                <div className="px-6 py-3 border-t border-[#2C2A27]">
                  <p className="font-dm-sans text-xs text-[#6B7A8D]">Discretionary spending, childcare, savings, and vehicle replacement run on top of this base.</p>
                </div>
              </div>
              <p className="mb-10">
                The same household in Seattle — with a $1.2M home and otherwise comparable inputs — runs roughly <strong className="text-[#1C1A17]">$115,000–125,000 on the same line items</strong>, primarily driven by housing and property tax.
              </p>

              {/* Markets comparison */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-5 font-semibold">
                Comparing North Idaho to the markets buyers leave
              </h2>
              <div className="my-6 space-y-4">
                {[
                  {
                    market: 'Seattle metro',
                    summary: "North Idaho saves roughly 30–40% on housing, 40–50% on property tax, 5–10% on most other categories. Gasoline is cheaper in Idaho than Washington — Washington's carbon pricing adds $0.35–0.50/gallon at the pump.",
                  },
                  {
                    market: 'California (statewide)',
                    summary: "California's overall RPP runs about 113–115. North Idaho saves 15–18% on overall cost of living, with the biggest savings in housing, state income tax (Idaho top rate 5.695% vs California's 13.3%), and property tax.",
                  },
                  {
                    market: 'Boise area',
                    summary: 'Roughly even on overall cost of living. Boise has slightly cheaper housing on average; North Idaho has cheaper property taxes in Bonner and Boundary counties. Lifestyle differences — lakes, mountains, climate — matter more than dollars in this comparison.',
                  },
                ].map((item) => (
                  <div key={item.market} className="border-l-2 border-[#C4842A] pl-5">
                    <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">{item.market}</p>
                    <p className="font-dm-sans text-sm text-[#5C5650] leading-relaxed">{item.summary}</p>
                  </div>
                ))}
              </div>

              {/* Sources / Disclaimer */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-5 font-semibold">
                Sources and data verification
              </h2>
              <div className="my-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                <ul className="space-y-2">
                  {[
                    { label: 'BEA Regional Price Parities by State and Metro Area', url: 'https://www.bea.gov/data/prices-inflation/regional-price-parities-state-and-metro-area' },
                    { label: 'BEA Personal Consumption Expenditures by State', url: 'https://www.bea.gov/data/consumer-spending/state' },
                    { label: 'FRED Regional Price Parity Tables', url: 'https://fred.stlouisfed.org/release/tables?rid=403' },
                    { label: 'Idaho State Tax Commission — 2025 Property Tax Rates', url: 'https://tax.idaho.gov/document-mngr/reports_epb00129/' },
                    { label: 'Avista Utilities Rates and Tariffs', url: 'https://www.myavista.com/about-us/our-rates-and-tariffs/about-rates' },
                    { label: 'AAA Idaho Fuel Prices', url: 'https://gasprices.aaa.com/?state=ID' },
                    { label: 'MoneyGeek Idaho Home Insurance Cost 2026', url: 'https://www.moneygeek.com/insurance/homeowners/average-cost-home-insurance-idaho/' },
                    { label: 'Bankrate Home Insurance Rates by State 2026', url: 'https://www.bankrate.com/insurance/homeowners-insurance/states/' },
                    { label: 'Zillow Kootenai County Housing Market', url: 'https://www.zillow.com/home-values/2368/kootenai-county-id/' },
                    { label: 'Realtor.com Kootenai County Market Report', url: 'https://www.realtor.com/local/market/idaho/kootenai-county' },
                  ].map((source) => (
                    <li key={source.label} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C4842A] flex-shrink-0 mt-2" />
                      <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-dm-sans text-sm text-[#C4842A] hover:underline leading-relaxed">{source.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="my-6 border border-[#E8DDD0] rounded-sm p-6 bg-white">
                <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] mb-2">Important disclaimer</p>
                <p className="font-dm-sans text-sm text-[#5C5650] leading-relaxed">
                  This article is for informational and educational purposes only and does not constitute financial, tax, legal, or insurance advice. Cost-of-living data changes year to year, regional price parities are released with a 12–18 month lag, utility rates are subject to IPUC adjustment, gasoline prices fluctuate daily, and home insurance premiums depend on individual underwriting factors this article cannot account for. Before making a relocation, purchase, or financial decision based on this information, consult a licensed CPA, licensed insurance agent, mortgage professional, and your county assessor. Shirin Abplanalp is a licensed REALTOR® and SRES®, not a financial planner, tax professional, or insurance advisor.
                </p>
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

            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="lg:sticky lg:top-8 space-y-6">

                {/* Quick comparison */}
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Quick Comparison</p>
                  <div className="space-y-4">
                    {[
                      { label: 'CdA RPP (BEA 2024)', cda: '97.5', spok: '~98', sea: '~113' },
                      { label: 'Median home', cda: '$618K', spok: '~$400K', sea: '~$880K' },
                      { label: 'Property tax (avg)', cda: '0.452%', spok: '~1.0%', sea: '~0.9%' },
                      { label: 'Home insurance/yr', cda: '$1,673', spok: '~$1,400', sea: '~$1,800+' },
                      { label: 'Median rent/mo', cda: '$2,262', spok: '$1,600', sea: '$2,600' },
                    ].map((row) => (
                      <div key={row.label} className="border-b border-[#2C2A27] pb-3 last:border-0 last:pb-0">
                        <p className="font-dm-sans text-xs text-[#9A9590] uppercase tracking-wide mb-2">{row.label}</p>
                        <div className="grid grid-cols-3 gap-1 text-center">
                          <div>
                            <p className="font-dm-sans text-xs text-[#6B7A8D] mb-0.5">CdA</p>
                            <p className="font-dm-sans text-xs font-semibold text-[#C4842A]">{row.cda}</p>
                          </div>
                          <div>
                            <p className="font-dm-sans text-xs text-[#6B7A8D] mb-0.5">Spokane</p>
                            <p className="font-dm-sans text-xs font-semibold text-[#FAFAF8]">{row.spok}</p>
                          </div>
                          <div>
                            <p className="font-dm-sans text-xs text-[#6B7A8D] mb-0.5">Seattle</p>
                            <p className="font-dm-sans text-xs font-semibold text-[#FAFAF8]">{row.sea}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key cost facts */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Key Cost Facts</p>
                  <div className="space-y-3">
                    {[
                      { label: 'Avista electricity', value: '~$112/mo' },
                      { label: 'Idaho gas vs Washington', value: '$0.35–0.50/gal cheaper' },
                      { label: 'Groceries per person (BEA)', value: '$318/mo' },
                      { label: 'Home insurance (statewide avg)', value: '$1,673/yr' },
                      { label: 'Childcare (center-based)', value: '$728–1,002/mo' },
                      { label: 'Per-capita spend (BEA)', value: '$46,270/yr' },
                    ].map((item) => (
                      <div key={item.label} className="border-t border-[#E8DDD0] pt-3 first:border-0 first:pt-0 flex items-center justify-between">
                        <p className="font-dm-sans text-xs text-[#9A9590]">{item.label}</p>
                        <p className="font-dm-sans text-xs font-semibold text-[#C4842A]">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* About Shirin */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Your Local Agent</p>
                  <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp, Licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate" className="w-16 h-16 rounded-full object-cover mb-3" />
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
                  <p className="font-dm-sans text-xs text-[#9A9590] mb-3">Licensed REALTOR® · SRES® · Berkshire Hathaway HomeServices Jacklin Real Estate · #1371861</p>
                  <p className="font-dm-sans text-xs text-[#5C5650] leading-relaxed mb-4">
                    Want a parcel-specific budget walkthrough — taxes, insurance quote, utility estimate, and total cost of ownership at current rates? I&apos;m happy to put that together for any North Idaho property you&apos;re evaluating.
                  </p>
                  <a href="/contact" className="block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    Ask Shirin
                  </a>
                </div>

                {/* Related Articles */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Articles</p>
                  <div className="space-y-4">
                    <a href="/articles/north-idaho-property-taxes-county-comparison" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Property Taxes in North Idaho: County Comparison 2025</p>
                      <p className="font-dm-sans text-xs text-[#9A9590] mt-1">Official rates for all 5 panhandle counties</p>
                    </a>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/north-idaho-healthcare-kootenai-spokane" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Healthcare in Kootenai County: Regional Care vs. Spokane</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">What's local and what requires a drive</p>
                      </a>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/buying-property-prairie-wells-septic-roads" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Buying on the Prairie: Wells, Septic, and Roads</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">Rural infrastructure costs buyers miss</p>
                      </a>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/snowiest-cities-north-idaho-ranking" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Snowiest Cities in North Idaho: A Data-Backed Ranking</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">How winter affects each county's cost picture</p>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      <div className="border-t border-[#E8DDD0]" />

      {/* Bottom CTA */}
      <section className="bg-[#1C1A17] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">North Idaho Relocation</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-[#FAFAF8] mb-6 leading-tight font-semibold">
            Want a Budget Breakdown for a Specific Property?
          </h2>
          <p className="font-dm-sans text-[#C4BDB4] text-lg mb-10 leading-relaxed">
            I&apos;ll pull the parcel-level taxes, get you an insurance ballpark, estimate utilities by zone, and put together a total cost of ownership picture — before you make an offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold py-4 px-8 transition-colors">
              Get in Touch
            </a>
            <a href="/articles/north-idaho-property-taxes-county-comparison" className="border border-[#5C5650] hover:border-[#9A9590] text-[#C4BDB4] hover:text-[#FAFAF8] font-dm-sans font-semibold py-4 px-8 transition-colors">
              See the Property Tax Breakdown
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
