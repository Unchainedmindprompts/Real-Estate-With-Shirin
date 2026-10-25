import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
const articleUrl = 'https://www.realestatewithshirin.com/articles/north-idaho-housing-market-update'
const sources = [
  { label: 'Homes.com: Coeur d\'Alene, ID city guide and housing trends (median sale price $575,000 over the last 12 months, down 2%; median list price $649,000; median single-family sale price $649,000; $407 average price per square foot; 1,010 sales; 4.6 months of supply; 46 days on market on average; checked October 25, 2026)', url: 'https://www.homes.com/local-guide/coeur-dalene-id/' },
  { label: 'Homes.com: Post Falls, ID city guide and housing trends (median sale price $525,000 over the last 12 months, up 4%; median list price $539,500; median single-family sale price $540,000; $302 average price per square foot; 734 sales; 2.3 months of supply; 34 days on market on average; checked October 25, 2026)', url: 'https://www.homes.com/local-guide/post-falls-id/' },
  { label: 'Homes.com: Hayden, ID city guide and housing trends (median sale price $600,000 over the last 12 months, up 4%; median list price $649,950; median single-family sale price $665,000; $331 average price per square foot; 129 sales; 2.7 months of supply; 32 days on market on average; checked October 25, 2026)', url: 'https://www.homes.com/local-guide/hayden-id/' },
  { label: 'Homes.com: Rathdrum, ID city guide and housing trends (median sale price $520,000 over the last 12 months, up 11%; median list price $532,282; median single-family sale price $547,435; $310 average price per square foot; 370 sales; 3.2 months of supply; 36 days on market on average; checked October 25, 2026)', url: 'https://www.homes.com/local-guide/rathdrum-id/' },
  { label: 'Homes.com: Sandpoint, ID city guide and housing trends (median sale price $616,050 over the last 12 months, down 9%; median list price $759,000; median single-family sale price $707,000; $541 average price per square foot; 331 sales; 9.0 months of supply; 62 days on market on average; checked October 25, 2026)', url: 'https://www.homes.com/local-guide/sandpoint-id/' },
  { label: 'Real Estate With Shirin: North Idaho city comparison, flagship five-city comparison (Zillow ZHVI typical home values: Coeur d\'Alene $604,956; Post Falls $530,937; Hayden $645,199; Rathdrum $578,248; Sandpoint $634,657; a different metric from median sale price, cited only as the prior baseline)', url: 'https://www.realestatewithshirin.com/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint' },
]
export const metadata: Metadata = {
title: "North Idaho Housing Market Update: October 2026",
description:
    "Median sale prices across all five North Idaho cities from one source and one window (Homes.com, last 12 months, checked October 25, 2026): Sandpoint $616,050 down 9%, Rathdrum $520,000 up 11%, and what the split means for buyers and sellers.",
alternates: {
canonical: articleUrl,
  },
openGraph: {
title: "North Idaho Housing Market Update (October 2026)",
description: "What are North Idaho home prices doing right now, city by city? One source, one window, all five cities: median sale prices, average days on market, and months of supply, from a local REALTOR.",
url: articleUrl,
type: 'article',
publishedTime: '2026-10-25',
authors: ['Shirin Abplanalp'],
  },
}
const faqs = [
  {
    q: 'What is the median home price in North Idaho in October 2026?',
    a: 'It depends on the city. From one source and one window, Homes.com over the last 12 months, checked October 25, 2026, the median sale prices are: Sandpoint $616,050, down 9% year-over-year; Hayden $600,000, up 4%; Coeur d\'Alene $575,000, down 2%; Post Falls $525,000, up 4%; and Rathdrum $520,000, up 11%. The five cities span a range of about $96,000 from the lowest median to the highest.',
  },
  {
    q: 'Which North Idaho city has the lowest median sale price in October 2026?',
    a: 'Rathdrum, at a $520,000 median sale price over the last 12 months (Homes.com, checked October 25, 2026), just below Post Falls at $525,000. Rathdrum is also the fastest rising of the five, up 11% year-over-year in the same Homes.com data, so the gap at the affordable end of the market is narrowing.',
  },
  {
    q: 'How long do homes take to sell in North Idaho right now?',
    a: 'Homes.com reports average days on market, not median days to pending, and the two metrics are not interchangeable. Over the last 12 months, checked October 25, 2026, homes sold after 32 days on market on average in Hayden, 34 days in Post Falls, 36 days in Rathdrum, 46 days in Coeur d\'Alene, and 62 days in Sandpoint. Sandpoint is moving at roughly half the pace of Hayden in this data.',
  },
  {
    q: 'Is the Sandpoint housing market cooling in 2026?',
    a: 'In this data, yes, relative to the other four cities. Sandpoint has the highest median sale price of the five at $616,050, but that figure is down 9% year-over-year (Homes.com, last 12 months, checked October 25, 2026). It also has the slowest pace at 62 days on market on average and the highest supply at 9.0 months, against 2.3 to 4.6 months in the other four cities. That combination gives Sandpoint buyers more time and more choice than buyers in the Kootenai County cities.',
  },
  {
    q: 'Why do these market numbers differ from the earlier price articles on this site?',
    a: 'Because the earlier articles used different sources and different windows, and this update does not mix them. Earlier city articles published Redfin single-month figures for Coeur d\'Alene and Post Falls and Homes.com 12-month figures for Hayden, Rathdrum, and Sandpoint. This update uses Homes.com, last 12 months, for all five cities, checked on the same day, October 25, 2026, so the five medians can be compared directly. The earlier figures remain the prior baseline this series will compare against in the next issue, labeled by their own source and window.',
  },
  {
    q: 'Will there be another North Idaho housing market update?',
    a: 'Yes. This article is the first issue of a monthly series and it is the template for the issues that follow: one source, one window, all five cities, every figure date-stamped, with list prices and sale prices labeled separately. The next issue will compare its fresh pull against the October 2026 baseline published here. A sale-to-list ratio will be added only when the source publishes that ratio for all five cities; this issue does not derive one from list and sale medians, because those are medians of different sets of homes.',
  },
]
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: "North Idaho Housing Market Update: October 2026",
  description: "What are North Idaho home prices doing right now, city by city? One source, one window, all five cities: median sale prices, average days on market, and months of supply, from a local REALTOR.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-10-25T00:00:00-07:00',
  dateModified: '2026-10-25T00:00:00-07:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'North Idaho housing market update',
    'North Idaho home prices October 2026',
    'Coeur d\'Alene median sale price 2026',
    'Post Falls median sale price 2026',
    'Hayden Idaho median sale price 2026',
    'Rathdrum median sale price 2026',
    'Sandpoint median sale price 2026',
    'North Idaho days on market',
    'North Idaho months of supply',
    'is Sandpoint housing market cooling',
  ],
  articleSection: 'Market Updates',
  wordCount: 1800,
  about: [
    {
      '@type': 'City',
      name: "Coeur d'Alene",
      sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'City',
      name: 'Sandpoint',
      sameAs: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
  ],
  spatialCoverage: {
    '@type': 'AdministrativeArea',
    name: 'North Idaho',
    sameAs: 'https://en.wikipedia.org/wiki/Idaho_Panhandle',
    containedInPlace: { '@type': 'State', name: 'Idaho' },
  },
  mentions: [
    {
      '@type': 'City',
      name: "Coeur d'Alene",
      sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'City',
      name: 'Post Falls',
      sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'City',
      name: 'Hayden',
      sameAs: 'https://en.wikipedia.org/wiki/Hayden,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'City',
      name: 'Rathdrum',
      sameAs: 'https://en.wikipedia.org/wiki/Rathdrum,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'City',
      name: 'Sandpoint',
      sameAs: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
  ],
  citation: sources.map((source) => ({ '@type': 'WebPage', name: source.label, url: source.url })),
}
const faqSchema = {
'@context': 'https://schema.org',
'@type': 'FAQPage',
'@id': `${articleUrl}#faq`,
isPartOf: { '@id': `${articleUrl}#article` },
mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
}
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${articleUrl}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    { '@type': 'ListItem', position: 3, name: 'North Idaho Housing Market Update: October 2026', item: articleUrl },
  ],
}
const marketComparisons = [
  { city: 'Rathdrum, ID', median: 520000, bar: 84, highlight: false },
  { city: 'Post Falls, ID', median: 525000, bar: 85, highlight: false },
  { city: "Coeur d'Alene, ID", median: 575000, bar: 93, highlight: false },
  { city: 'Hayden, ID', median: 600000, bar: 97, highlight: false },
  { city: 'Sandpoint, ID', median: 616050, bar: 100, highlight: true },
]
const daysData = [
  { city: 'Hayden', days: 32, supply: '2.7 months', sales: 129, width: '52' },
  { city: 'Post Falls', days: 34, supply: '2.3 months', sales: 734, width: '55' },
  { city: 'Rathdrum', days: 36, supply: '3.2 months', sales: 370, width: '58' },
  { city: "Coeur d'Alene", days: 46, supply: '4.6 months', sales: 1010, width: '74' },
  { city: 'Sandpoint', days: 62, supply: '9.0 months', sales: 331, width: '100' },
]
export default function NorthIdahoHousingMarketUpdatePage() {
return (
<>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
<section className="bg-[#F5EFE6] pt-36 pb-16">
<div className="max-w-5xl mx-auto px-6">
<nav className="text-sm text-[#9A9590] mb-6 font-dm-sans" aria-label="Breadcrumb">
<Link href="/" className="hover:text-[#C4842A] transition-colors">Home</Link>
<span className="mx-2">·</span>
<a href="/articles" className="hover:text-[#C4842A] transition-colors">Articles</a>
<span className="mx-2">·</span>
<span className="text-[#5C5650]">North Idaho Housing Market Update</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Market Updates</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">10 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">October 2026 · Issue 1</span>
</div>
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            North Idaho Housing Market Update: October 2026
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            All five cities from one source and one window: median sale prices, average days on market, and months of supply, and what the split between a rising Rathdrum and a cooling Sandpoint means if you are buying or selling this fall.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · October 25, 2026</p>
</div>
</div>
</div>
</section>
<div className="border-t border-[#E8DDD0]" />
<section className="bg-[#1C1A17] py-8">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$616,050</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Highest Median Sale: Sandpoint</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Last 12 months · Down 9%</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$520,000</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Lowest Median Sale: Rathdrum</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Last 12 months · Up 11%</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">32 days</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Fastest Average Pace: Hayden</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Average days on market</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">2,574</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Total Sales, Five Cities</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Last 12 months · Homes.com</p>
</div>
</div>
</div>
</section>
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                The median sale price across North Idaho&apos;s five cities runs from $520,000 in Rathdrum to $616,050 in Sandpoint over the last 12 months (Homes.com, checked October 25, 2026). In between sit Post Falls at $525,000, up 4% year-over-year, Coeur d&apos;Alene at $575,000, down 2%, and Hayden at $600,000, up 4%, all from the same Homes.com 12-month window. The headline is the split: the two most affordable cities and Hayden are still rising, Rathdrum fastest at up 11%, while the two highest priced readings include the only declines, Sandpoint down 9% and Coeur d&apos;Alene down 2%. Every figure in this update comes from that one source and one window, pulled on the same day, so the five cities can be compared directly.
</p>
<p className="mb-10">For the deeper picture behind any one city, start with{' '}<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="text-[#C4842A] hover:underline">the flagship North Idaho city comparison</a>{' '}and the individual price guides linked in the sidebar, then use this update for the current, comparable snapshot across all five. This is the first issue of a monthly series, and its closing section explains exactly how the next issue will be measured against it.</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Five Cities at a Glance
</h2>
<p className="mb-6">
                Read the table as three stories. First, affordability is concentrated in two cities: Rathdrum at $520,000 and Post Falls at $525,000 sit about $50,000 below the next city. Second, the top of the market is no longer rising in this window: Sandpoint holds the highest median at $616,050 and the steepest decline at down 9%. Third, pace follows price in reverse. The affordable Kootenai County cities sell in 32 to 36 days on average, Coeur d&apos;Alene takes 46 days, and Sandpoint takes 62 days, with 9.0 months of supply against 2.3 to 4.6 months everywhere else.
</p>
<div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Median Sale Price by City: North Idaho, Last 12 Months (Homes.com, October 2026)
</h3>
<div className="space-y-3">
{marketComparisons.map((market) => (
<div key={market.city}>
<div className="flex justify-between mb-1">
<span className={`font-dm-sans text-sm ${market.highlight ? 'font-semibold text-[#C4842A]' : 'text-[#1C1A17]'}`}>
{market.city} {market.highlight && '← Highest median'}
</span>
<span className={`font-dm-sans text-sm font-semibold ${market.highlight ? 'text-[#C4842A]' : 'text-[#1C1A17]'}`}>
                          ${market.median.toLocaleString()}
</span>
</div>
<div className="w-full bg-[#E8DDD0] h-6 rounded-none overflow-hidden">
<div
className="h-6 rounded-none"
style={{
width: `${market.bar}%`,
backgroundColor: market.highlight ? '#C4842A' : '#6B7A8D',
                          }}
/>
</div>
</div>
                  ))}
</div>
<p className="font-dm-sans text-xs text-[#9A9590] mt-4">Source: Homes.com city guides, median sale price over the last 12 months, checked October 25, 2026. Sale prices only; list prices are labeled separately in the city sections below.</p>
</div>
<div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Average Days on Market and Months of Supply by City (Homes.com, Last 12 Months)
</h3>
<div className="space-y-4">
{daysData.map((row) => (
<div key={row.city}>
<div className="flex justify-between mb-1">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{row.city}</span>
<span className="font-dm-sans text-xs text-[#5C5650]">{row.days} days avg · {row.supply} supply · {row.sales.toLocaleString()} sales</span>
</div>
<div className="w-full bg-[#E8DDD0] h-7 rounded-none overflow-hidden">
<div
className="h-7 rounded-none"
style={{ width: `${row.width}%`, backgroundColor: '#6B7A8D' }}
/>
</div>
</div>
                  ))}
</div>
<p className="font-dm-sans text-xs text-[#9A9590] mt-4">Metric note: Homes.com reports average days on market. That is a different metric from median days to pending, which this site&apos;s flagship comparison published, and the two are never mixed in one column here.</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Rathdrum: $520,000, Up 11%, the Fastest Rise at the Lowest Price
</h2>
<p className="mb-6">
                Rathdrum records a $520,000 median sale price over the last 12 months, up 11% year-over-year, the strongest rise of the five cities (Homes.com, checked October 25, 2026). The median list price is $532,282, the median single-family sale price is $547,435, and homes sold at an average of $310 per square foot. There were 370 sales in the window, homes sold after 36 days on market on average, and supply sits at 3.2 months.
</p>
<p className="mb-10">
                For buyers, the reading is simple: the most affordable city in this update is also appreciating fastest, driven in part by the Rathdrum Prairie new construction our Rathdrum price guide covers. Waiting for Rathdrum to get cheaper has not been the pattern in this data. For sellers, 36 average days and 3.2 months of supply describe a market that still rewards a well prepared listing without guaranteeing an instant sale.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Post Falls: $525,000, Up 4%, and the Tightest Supply of the Five
</h2>
<p className="mb-6">
                Post Falls records a $525,000 median sale price over the last 12 months, up 4% year-over-year (Homes.com, checked October 25, 2026). The median list price is $539,500, the median single-family sale price is $540,000, the median townhouse sale price is $414,950, and homes sold at an average of $302 per square foot, the lowest per-foot figure of the five. There were 734 sales, homes sold after 34 days on market on average, and supply is 2.3 months, the tightest of the five cities.
</p>
<p className="mb-10">
                That supply figure is the practical one for Post Falls buyers. At 2.3 months, well priced homes in the median range do not sit long, and the 34 day average includes the homes that were overpriced at first. Sellers hold a modest edge here, but it is an edge built on scarcity, not on rapid price growth.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Coeur d&apos;Alene: $575,000, Down 2%, the Largest Market Pauses
</h2>
<p className="mb-6">
                Coeur d&apos;Alene records a $575,000 median sale price over the last 12 months, down 2% year-over-year (Homes.com, checked October 25, 2026). The median list price is $649,000, the median single-family sale price is $649,000, and homes sold at an average of $407 per square foot. With 1,010 sales, it is by far the largest market of the five. Homes sold after 46 days on market on average, and supply sits at 4.6 months, the highest of the four Kootenai County cities in this update.
</p>
<p className="mb-10">
                A down 2% median on more than a thousand sales is a pause, not a slide, and the gap between the $649,000 median list price and the $575,000 median sale price needs care: those are medians of two different sets of homes, current listings versus completed sales, not a discount rate on a single home. What it does tell a seller is that the list prices being asked in Coeur d&apos;Alene today sit well above where the last year of sales actually closed, which is exactly why the 46 day average matters when you price.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Hayden: $600,000, Up 4%, Small Numbers and the Fastest Pace
</h2>
<p className="mb-6">
                Hayden records a $600,000 median sale price over the last 12 months, up 4% year-over-year (Homes.com, checked October 25, 2026). The median list price is $649,950, the median single-family sale price is $665,000, and homes sold at an average of $331 per square foot. Homes sold after 32 days on market on average, the fastest pace of the five, and supply sits at 2.7 months.
</p>
<p className="mb-10">
                One caution belongs on the Hayden reading: only 129 sales sit behind that median, the smallest count of the five by a wide margin, because Homes.com tracks the city of Hayden on its own boundary and not the wider Hayden and Hayden Lake area. A small sales count means a handful of higher or lower closings can move the median more than they would in Coeur d&apos;Alene. Read Hayden as a city figure with a wider error band, and lean on the single-family median at $665,000 if you are pricing a detached home.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sandpoint: $616,050, Down 9%, the Premium Market Is Cooling
</h2>
<p className="mb-6">
                Sandpoint records a $616,050 median sale price over the last 12 months, down 9% year-over-year, still the highest median of the five (Homes.com, checked October 25, 2026). The median list price is $759,000, the median single-family sale price is $707,000, and homes sold at an average of $541 per square foot, well above every other city here. There were 331 sales, homes sold after 62 days on market on average, and supply sits at 9.0 months.
</p>
<p className="mb-10">
                Nine months of supply is a different market from the rest of North Idaho. It reflects the Lake Pend Oreille and Schweitzer premium inventory that our Sandpoint and lakefront guides describe, where waterfront and resort homes take longer to match with a buyer. For Sandpoint buyers, this is the most negotiable of the five markets in this data. For Sandpoint sellers, pricing to the $616,050 closed median rather than the $759,000 asking median is the difference between selling this season and joining the supply count.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                How This Update Is Built, and What It Does Not Claim
</h2>
<p className="mb-6">
                This series follows four rules, and this first issue sets them. One source: Homes.com city guides for all five cities. One window: the last 12 months, checked on one day, October 25, 2026. Every figure date-stamped and labeled as a sale price or a list price. And no derived ratios: Homes.com publishes a median change from first list price for each city, which measures price cuts on listings, not a sale-to-list ratio, so this update does not present a sale-to-list figure. A sale-to-list ratio will appear only when a single source publishes that ratio for all five cities.
</p>
<p className="mb-6">
                Readers who know this site will notice that some figures here differ from our earlier city price articles. That is expected, and it is not hidden. The earlier articles used Redfin single-month figures for Coeur d&apos;Alene at $575,000 in January 2026 and Post Falls at $521,138 in February 2026, alongside Homes.com 12-month figures for the other cities. Those remain published as the prior baseline, labeled by their own source and window. This update does not average them with the new pull or present them in the same table as if they were the same measurement.
</p>
<p className="mb-8">
                The same care applies to typical home values. Our flagship comparison publishes Zillow ZHVI typical values of $604,956 for Coeur d&apos;Alene, $530,937 for Post Falls, $645,199 for Hayden, $578,248 for Rathdrum, and $634,657 for Sandpoint. A typical value describes the middle of all homes in a city, owned and listed alike. A median sale price describes only the homes that sold. They answer different questions, they will always differ, and this series keeps them in separate places.
</p>
<div className="my-8 p-6 bg-[#1C1A17] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  What This Means in Practice, October 2026
</h3>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Buyers:</span> the affordable end is rising fastest, so Rathdrum and Post Falls reward readiness over waiting. Sandpoint rewards patience: 62 average days and 9.0 months of supply mean time to inspect, compare, and negotiate.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed">
                    <span className="text-[#F5EFE6] font-semibold">Sellers:</span> price against the closed median for your city, not the asking median. The gap between the two is widest in Sandpoint and Coeur d&apos;Alene in this data, and homes priced to closed sales are the ones inside the faster day counts.
</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
</h2>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
<p className="text-sm mb-10">
                Published October 25, 2026. All market figures are Homes.com city guide figures for the last 12 months, checked October 25, 2026: median sale prices of $575,000 in Coeur d&apos;Alene (down 2%), $525,000 in Post Falls (up 4%), $600,000 in Hayden (up 4%), $520,000 in Rathdrum (up 11%), and $616,050 in Sandpoint (down 9%); average days on market of 46, 34, 32, 36, and 62 in the same city order; months of supply of 4.6, 2.3, 2.7, 3.2, and 9.0; and sales counts of 1,010, 734, 129, 370, and 331, for a five-city total of 2,574. No sale-to-list ratio is published in this issue because Homes.com does not publish that ratio for these cities, and none has been derived from list and sale medians. Zillow ZHVI typical values are cited only from this site&apos;s flagship comparison as a separate, labeled metric. This update is general real estate information, not financial advice. For figures specific to your home or your search, contact Shirin directly.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Frequently Asked Questions
</h2>
<div className="space-y-4 mb-12">
{faqs.map((faq) => (
<div key={faq.q} className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
<h3 className="font-dm-sans font-semibold text-[#1C1A17] text-base mb-3">
                    {faq.q}
</h3>
<p className="font-dm-sans text-[17px] text-[#5C5650] leading-relaxed">
                      {faq.a}
</p>
</div>
                  ))}
</div>
<div className="bg-[#1C1A17] rounded-sm p-8 mt-4">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">From Shirin</p>
<div className="flex items-start gap-5 mb-6">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp"
className="w-14 h-14 rounded-full object-cover flex-shrink-0"
/>
<div>
<p className="font-cormorant text-2xl text-[#F5EFE6] font-semibold mb-1">Shirin Abplanalp</p>
<p className="font-dm-sans text-sm text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · Idaho License #1371861</p>
</div>
</div>
<p className="font-dm-sans text-[#9A9590] leading-relaxed mb-6">
                  This is the first issue of a monthly market update, and it is the template the series will follow: one source, one window, all five cities, with the method stated in the open. Next month&apos;s issue will measure its fresh pull against the baseline set here, so you can see what actually moved instead of comparing numbers that were never measured the same way. If you want this read applied to your street, your price range, or a home you are thinking of selling, reach out. No pressure, no pitch, just an honest conversation.
</p>
<div className="flex flex-col sm:flex-row gap-4">
<a
href="/contact"
className="inline-block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold text-sm py-3 px-6 transition-colors"
>
                    Start a Conversation
</a>
<div className="flex flex-col gap-1 justify-center">
<a href="tel:+12086607468" className="font-dm-sans text-sm text-[#9A9590] hover:text-[#C4842A] transition-colors">(208) 660-7468</a>
<a href="mailto:dreamlifeinidaho@gmail.com" className="font-dm-sans text-sm text-[#9A9590] hover:text-[#C4842A] transition-colors">dreamlifeinidaho@gmail.com</a>
</div>
</div>
</div>
<p className="font-dm-sans text-xs text-[#9A9590] mt-6 leading-relaxed">
                Data sources: Homes.com city guides for Coeur d&apos;Alene, Post Falls, Hayden, Rathdrum, and Sandpoint (last 12 months, checked October 25, 2026), and this site&apos;s flagship North Idaho city comparison for Zillow ZHVI typical values, as detailed in Sources and Scope above. Market conditions change, so contact Shirin for the most current figures specific to your price range.
</p>
</article>
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Market Snapshot</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">North Idaho · October 2026 · Homes.com, last 12 months</p>
<div className="space-y-3">
{[
                      { range: 'Sandpoint $616,050', desc: 'Down 9% · 62 days avg · 9.0 months supply' },
                      { range: 'Hayden $600,000', desc: 'Up 4% · 32 days avg · 2.7 months supply' },
                      { range: "Coeur d'Alene $575,000", desc: 'Down 2% · 46 days avg · 4.6 months supply' },
                      { range: 'Post Falls $525,000', desc: 'Up 4% · 34 days avg · 2.3 months supply' },
                      { range: 'Rathdrum $520,000', desc: 'Up 11% · 36 days avg · 3.2 months supply' }
                    ].map((item) => (
<div key={item.range} className="border-b border-[#2C2A27] pb-3 last:border-0 last:pb-0">
<p className="font-dm-sans text-sm font-semibold text-[#C4842A]">{item.range}</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-0.5">{item.desc}</p>
</div>
                    ))}
</div>
</div>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Your Local Advisor</p>
<img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp" className="w-16 h-16 rounded-full object-cover mb-3" />
<p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · #1371861</p>
<a href="/contact" className="block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    What Do These Numbers Mean for Me?
</a>
</div>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Resources</p>
<div className="space-y-4">
<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho City Comparison</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">All five cities, head to head, the flagship comparison</p>
</a>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/coeur-dalene-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Coeur d&apos;Alene Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The area guide for the largest of the five markets</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/sandpoint-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Sandpoint Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The area guide for the Bonner County premium market</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/how-much-do-homes-cost-rathdrum-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Rathdrum Home Prices 2026</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The fastest rising city in this update, in depth</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/priest-river-idaho-real-estate-guide" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Priest River Real Estate Guide</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">$409,000 median sale, the affordable Bonner County option outside the five</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/sellers" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Selling a Home in Northern Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">What your home is worth and how pricing works here</p>
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
<section className="bg-[#1C1A17] py-20">
<div className="max-w-3xl mx-auto px-6 text-center">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Ready to Explore</p>
<h2 className="font-cormorant text-4xl md:text-5xl text-[#F5EFE6] mb-6 leading-tight font-semibold">
            What Do These Numbers Mean for Your Move?
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            City medians set the frame. Let&apos;s talk about what is actually happening in your price range, in the city you are watching, this month.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a href="/contact" className="bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold py-4 px-8 transition-colors">
              Start the Conversation
</a>
<a href="/articles" className="border border-[#5C5650] hover:border-[#9A9590] text-[#9A9590] hover:text-[#F5EFE6] font-dm-sans font-semibold py-4 px-8 transition-colors">
              More Articles
</a>
</div>
</div>
</section>
</>
  )
}
