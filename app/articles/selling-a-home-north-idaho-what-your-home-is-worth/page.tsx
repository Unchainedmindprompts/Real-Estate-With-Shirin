import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
const articleUrl = 'https://www.realestatewithshirin.com/articles/selling-a-home-north-idaho-what-your-home-is-worth'
const sources = [
  { label: 'Homes.com: Coeur d\'Alene, ID city guide and housing trends (median sale price $575,000 over the last 12 months, down 2%; median list price $649,000; median single-family sale price $649,000; $407 average price per square foot; 1,010 sales; 4.6 months of supply; 46 days on market on average; median change from first list price 3%; checked October 28, 2026)', url: 'https://www.homes.com/local-guide/coeur-dalene-id/' },
  { label: 'Homes.com: Post Falls, ID city guide and housing trends (median sale price $525,000 over the last 12 months, up 4%; median list price $539,500; median single-family sale price $540,000; $302 average price per square foot; 734 sales; 2.3 months of supply; 34 days on market on average; median change from first list price 0%; checked October 28, 2026)', url: 'https://www.homes.com/local-guide/post-falls-id/' },
  { label: 'Homes.com: Hayden, ID city guide and housing trends (median sale price $600,000 over the last 12 months, up 4%; median list price $649,950; median single-family sale price $665,000; $331 average price per square foot; 129 sales; 2.7 months of supply; 32 days on market on average; median change from first list price 3%; checked October 28, 2026)', url: 'https://www.homes.com/local-guide/hayden-id/' },
  { label: 'Homes.com: Rathdrum, ID city guide and housing trends (median sale price $520,000 over the last 12 months, up 11%; median list price $532,282; median single-family sale price $547,435; $310 average price per square foot; 370 sales; 3.2 months of supply; 36 days on market on average; median change from first list price 0%; checked October 28, 2026)', url: 'https://www.homes.com/local-guide/rathdrum-id/' },
  { label: 'Homes.com: Sandpoint, ID city guide and housing trends (median sale price $616,050 over the last 12 months, down 9%; median list price $759,000; median single-family sale price $707,000; $541 average price per square foot; 331 sales; 9.0 months of supply; 62 days on market on average; median change from first list price 4%; checked October 28, 2026)', url: 'https://www.homes.com/local-guide/sandpoint-id/' },
  { label: 'Real Estate With Shirin: North Idaho city comparison, flagship five-city comparison (Zillow ZHVI typical home values: Coeur d\'Alene $604,956; Post Falls $530,937; Hayden $645,199; Rathdrum $578,248; Sandpoint $634,657; a typical value describes the middle of all homes in a city and is a different metric from a median sale price or a median list price)', url: 'https://www.realestatewithshirin.com/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint' },
]
export const metadata: Metadata = {
title: "Selling a Home in North Idaho: What Your Home Is Worth in 2026",
description:
    "What is your North Idaho home worth in 2026? Median sale prices checked October 28, 2026 run from $520,000 in Rathdrum to $616,050 in Sandpoint, while median list prices run higher in every city. How to read the list to sale gap, price from closed sales, and set a list price that sells.",
alternates: {
canonical: articleUrl,
  },
openGraph: {
title: "Selling a Home in North Idaho: What Your Home Is Worth in 2026",
description: "Selling in Coeur d'Alene, Post Falls, Hayden, Rathdrum, or Sandpoint? The closed median sale prices, the asking median list prices, why the gap between them is not a discount rate, and how a comparative market analysis prices your specific home.",
url: articleUrl,
type: 'article',
publishedTime: '2026-10-28',
authors: ['Shirin Abplanalp'],
  },
}
const faqs = [
  {
    q: 'What is my home worth in North Idaho in 2026?',
    a: 'Start with the closed prices in your city, not the asking prices. Over the last 12 months, checked October 28, 2026, Homes.com records median sale prices of $616,050 in Sandpoint, $600,000 in Hayden, $575,000 in Coeur d\'Alene, $525,000 in Post Falls, and $520,000 in Rathdrum. For a single-family home, use the single-family medians from the same source: $707,000 in Sandpoint, $665,000 in Hayden, $649,000 in Coeur d\'Alene, $547,435 in Rathdrum, and $540,000 in Post Falls. Your home is then priced against recent sales of comparable homes in your neighborhood, adjusted for size, condition, lot, and location. That comparative market analysis, not a city median, is what sets a list price.',
  },
  {
    q: 'Why is the median list price higher than the median sale price, and does that mean sellers accept that much less?',
    a: 'No. The median list price and the median sale price are medians of two different sets of homes. The list median describes homes currently for sale, and the sale median describes homes that closed over the last 12 months (Homes.com, checked October 28, 2026). In Sandpoint that is $759,000 list against $616,050 sale, a $142,950 difference between the two medians. In Post Falls it is $539,500 list against $525,000 sale, a $14,500 difference. Neither difference is a discount rate on an individual home, and neither should be used to price yours. What the gap does show is where asking prices sit relative to where sales have actually closed, which is widest in Sandpoint and Coeur d\'Alene in this data.',
  },
  {
    q: 'How long will it take to sell my home in North Idaho?',
    a: 'Homes.com reports average days on market over the last 12 months, checked October 28, 2026: 32 days in Hayden, 34 days in Post Falls, 36 days in Rathdrum, 46 days in Coeur d\'Alene, and 62 days in Sandpoint. Those are averages across every home that sold, including homes that were overpriced at first and homes that needed price changes. Supply matters alongside pace: Post Falls has 2.3 months of supply and Sandpoint has 9.0 months in the same data, so the same list price strategy does not carry the same risk in both markets. Your agent should give you an expectation for your price range and neighborhood, not just the city average.',
  },
  {
    q: 'Should I price my home at, above, or below the median sale price for my city?',
    a: 'Price against comparable closed sales for your home, not against the city median itself. The median is the middle sale in the whole city over 12 months: half the homes sold for more and half for less (Homes.com, checked October 28, 2026). A smaller or older home priced at the city median can still be overpriced, and a larger or updated home priced above the median can still be priced correctly. The useful test is narrower: what did the most similar homes, in the most similar location, close for most recently, and how does your condition compare to theirs?',
  },
  {
    q: 'What is a comparative market analysis, and how is it different from an online estimate?',
    a: 'A comparative market analysis, or CMA, is a pricing review built from recent closed sales of comparable homes near yours, with adjustments for square footage, beds and baths, lot, condition, and features, prepared for your specific home. An online estimate and a typical home value are different tools. This site\'s flagship comparison publishes Zillow ZHVI typical values of $604,956 for Coeur d\'Alene, $530,937 for Post Falls, $645,199 for Hayden, $578,248 for Rathdrum, and $634,657 for Sandpoint. A typical value describes the middle of all homes in a city, including homes that are not for sale. It is useful context, but it has not seen your kitchen, your lot, or your condition, so it is not a list price.',
  },
  {
    q: 'What should I fix or update before I list my home?',
    a: 'Start with the basics that buyers and appraisers both notice: a deep clean, decluttering, obvious deferred maintenance, and a strong first impression from the street. Beyond that, the right list depends on your city and price range. In a market with 2.3 months of supply, like Post Falls in the Homes.com data checked October 28, 2026, a well prepared home at a closed-sale price can move in the faster part of the 34 day average. In a market with 9.0 months of supply, like Sandpoint, preparation and pricing matter more, because buyers have more alternatives. Ask your agent for a prioritized list of what is worth doing and what is not before you spend money, because not every improvement returns its cost at sale.',
  },
]
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: "Selling a Home in North Idaho: What Your Home Is Worth in 2026",
  description: "Selling in Coeur d'Alene, Post Falls, Hayden, Rathdrum, or Sandpoint? The closed median sale prices, the asking median list prices, why the gap between them is not a discount rate, and how a comparative market analysis prices your specific home.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-10-28T00:00:00-07:00',
  dateModified: '2026-10-28T00:00:00-07:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'selling a home North Idaho',
    'what is my home worth North Idaho 2026',
    'North Idaho median sale price sellers',
    'list price vs sale price North Idaho',
    'how to price a home Coeur d\'Alene',
    'selling a home Post Falls Idaho',
    'selling a home Sandpoint Idaho',
    'comparative market analysis North Idaho',
    'how long to sell a home North Idaho',
  ],
  articleSection: 'Seller Resources',
  wordCount: 1950,
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
    { '@type': 'ListItem', position: 3, name: 'Selling a Home in North Idaho: What Your Home Is Worth in 2026', item: articleUrl },
  ],
}
const saleComparisons = [
  { city: 'Rathdrum, ID', median: 520000, bar: 84, highlight: false },
  { city: 'Post Falls, ID', median: 525000, bar: 85, highlight: false },
  { city: "Coeur d'Alene, ID", median: 575000, bar: 93, highlight: false },
  { city: 'Hayden, ID', median: 600000, bar: 97, highlight: false },
  { city: 'Sandpoint, ID', median: 616050, bar: 100, highlight: true },
]
const gapData = [
  { city: 'Rathdrum', list: 532282, sale: 520000, gap: 12282, width: '9' },
  { city: 'Post Falls', list: 539500, sale: 525000, gap: 14500, width: '10' },
  { city: 'Hayden', list: 649950, sale: 600000, gap: 49950, width: '35' },
  { city: "Coeur d'Alene", list: 649000, sale: 575000, gap: 74000, width: '52' },
  { city: 'Sandpoint', list: 759000, sale: 616050, gap: 142950, width: '100' },
]
export default function SellingHomeNorthIdahoPage() {
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
<span className="text-[#5C5650]">Selling a Home in North Idaho</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Seller Resources</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">12 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">October 2026</span>
</div>
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Selling a Home in North Idaho: What Your Home Is Worth in 2026
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            The closed sale prices in all five cities, the asking prices sitting above them, why the gap between the two medians is not a discount on your home, and how to price from the sales that actually closed.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · October 28, 2026</p>
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
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Homes.com · Last 12 months, checked Oct 28, 2026</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$520,000</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Lowest Median Sale: Rathdrum</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Homes.com · Last 12 months, checked Oct 28, 2026</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$142,950</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Widest List to Sale Median Gap: Sandpoint</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">$759,000 list median vs $616,050 sale median</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$12,282</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Narrowest List to Sale Median Gap: Rathdrum</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">$532,282 list median vs $520,000 sale median</p>
</div>
</div>
</div>
</section>
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                Your home is worth what a comparable home actually closed for, not what a comparable home is asking. Over the last 12 months, checked October 28, 2026, Homes.com records a median sale price of $616,050 in Sandpoint, $600,000 in Hayden, $575,000 in Coeur d&apos;Alene, $525,000 in Post Falls, and $520,000 in Rathdrum. In every one of those cities the median list price for homes currently for sale sits higher: $759,000 in Sandpoint, $649,950 in Hayden, $649,000 in Coeur d&apos;Alene, $539,500 in Post Falls, and $532,282 in Rathdrum, from the same source and the same check. The difference between those two medians is the pricing gap this article is about, and reading it correctly is the difference between a list price that sells and a list price that sits.
</p>
<p className="mb-10">For the full market picture behind these figures, start with{' '}<a href="/articles/north-idaho-housing-market-update" className="text-[#C4842A] hover:underline">the October 2026 North Idaho housing market update</a>{' '}and{' '}<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="text-[#C4842A] hover:underline">the flagship North Idaho city comparison</a>{' '}, then use this guide for the seller side: how worth is determined, how the list to sale gap works city by city, and how to set a price. The seller hub is{' '}<a href="/sellers" className="text-[#C4842A] hover:underline">Selling a Home in Northern Idaho</a>.</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Start With Closed Sales, Not Asking Prices
</h2>
<p className="mb-6">
                A median sale price describes the middle of the homes that sold. A median list price describes the middle of the homes that are for sale now. They are different sets of homes, measured at different moments, so the list median will usually sit above the sale median when sellers are testing higher prices, when higher priced homes take longer to sell and stay in the listing pool, or when the current listing mix is larger and newer than the mix that closed. None of that makes the gap a negotiation discount.
</p>
<div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Median Sale Price by City: North Idaho, Last 12 Months (Homes.com, October 2026)
</h3>
<div className="space-y-3">
{saleComparisons.map((market) => (
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
<div className="h-6 rounded-none" style={{ width: `${market.bar}%`, backgroundColor: market.highlight ? '#C4842A' : '#6B7A8D' }} />
</div>
</div>
                  ))}
</div>
<p className="font-dm-sans text-xs text-[#9A9590] mt-4">Source: Homes.com city guides, median sale price over the last 12 months, checked October 28, 2026. Sale prices only. List prices are shown separately in the next chart.</p>
</div>
<div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  The List to Sale Median Gap by City (Homes.com, Checked October 28, 2026)
</h3>
<div className="space-y-4">
{gapData.map((row) => (
<div key={row.city}>
<div className="flex justify-between mb-1">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{row.city}</span>
<span className="font-dm-sans text-xs text-[#5C5650]">List ${row.list.toLocaleString()} · Sale ${row.sale.toLocaleString()} · Gap ${row.gap.toLocaleString()}</span>
</div>
<div className="w-full bg-[#E8DDD0] h-7 rounded-none overflow-hidden">
<div className="h-7 rounded-none" style={{ width: `${row.width}%`, backgroundColor: '#C4842A' }} />
</div>
</div>
                  ))}
</div>
<p className="font-dm-sans text-xs text-[#9A9590] mt-4">The gap is the arithmetic difference between two medians of different home sets. It is not a sale-to-list ratio and it is not the discount an individual seller should expect. Homes.com does not publish a sale-to-list ratio for these cities in this data, so this article does not present one.</p>
</div>
<p className="mb-10">
                One more Homes.com figure helps, used carefully. The median change from first list price is 0% in Post Falls and Rathdrum, 3% in Coeur d&apos;Alene and Hayden, and 4% in Sandpoint in the same check. That measures price changes on listings, not the final sale price against list. Read together with the gap, it points the same way: the wider the gap in a city, the more the asking pool has had to adjust.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                How Your Home Is Actually Priced: The Comparative Market Analysis
</h2>
<p className="mb-6">
                A comparative market analysis, or CMA, narrows the city picture to your street. It starts with recent closed sales of the most comparable homes available: similar size, age, beds and baths, lot, and location, sold as recently as possible. It then adjusts for the differences that matter: a finished basement, an updated kitchen, a larger lot, a shop, a view, or deferred maintenance. Active listings matter in a CMA as competition, not as value evidence, because an asking price has not been tested by a closing yet.
</p>
<p className="mb-6">
                Put the three numbers you will see online in their places. The city median sale price is the frame: $520,000 to $616,050 across the five cities in this data. The single-family median sale price is the closer frame for most sellers: $540,000 in Post Falls, $547,435 in Rathdrum, $649,000 in Coeur d&apos;Alene, $665,000 in Hayden, and $707,000 in Sandpoint (Homes.com, last 12 months, checked October 28, 2026). The Zillow ZHVI typical value in our flagship comparison is context for the middle of all homes in a city, owned and listed alike. Your CMA is the only one of the three built from your home and its closest sales, and it is the one a list price should come from.
</p>
<p className="mb-10">
                Price per square foot works the same way: as a check, not as a price. Homes.com reports average sale prices of $302 per square foot in Post Falls, $310 in Rathdrum, $331 in Hayden, $407 in Coeur d&apos;Alene, and $541 in Sandpoint over the last 12 months, checked October 28, 2026. Multiplying your square footage by a city average ignores condition, lot, and location, which is why two homes of the same size on the same street can close at different prices. Use the per foot figure to sanity check a CMA range, never to replace it.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Rathdrum and Post Falls: Narrow Gaps, Faster Pace, Less Room to Test the Market
</h2>
<p className="mb-6">
                Rathdrum records a $520,000 median sale price, up 11% year-over-year, against a $532,282 median list price, a gap of $12,282, with 370 sales, 36 average days on market, and 3.2 months of supply (Homes.com, last 12 months, checked October 28, 2026). The single-family median sale price is $547,435. Post Falls records a $525,000 median sale price, up 4%, against a $539,500 median list price, a gap of $14,500, with 734 sales, 34 average days on market, and 2.3 months of supply, the tightest of the five. Its single-family median is $540,000.
</p>
<p className="mb-10">
                For sellers in these two cities, the data argues for precision, not padding. Asking prices and closed prices are already close at the median, supply is low, and well priced homes are inside the faster part of those day counts. There is less evidence here that pricing well above the comparable closed sales gets rewarded, and the rising Rathdrum median, up 11%, is a reason to price from the most recent sales, not from sales a year old.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Coeur d&apos;Alene and Hayden: Mid-Range Gaps, and Why the Single-Family Median Matters
</h2>
<p className="mb-6">
                Coeur d&apos;Alene records a $575,000 median sale price, down 2% year-over-year, against a $649,000 median list price, a gap of $74,000, with 1,010 sales, 46 average days on market, and 4.6 months of supply (Homes.com, last 12 months, checked October 28, 2026). Its median single-family sale price is also $649,000, well above the all-homes median, because the all-homes figure includes condos, townhouses, and smaller homes. A detached home priced off the $575,000 all-homes median alone would be priced off the wrong set.
</p>
<p className="mb-10">
                Hayden records a $600,000 median sale price, up 4%, against a $649,950 median list price, a gap of $49,950, with only 129 sales, 32 average days on market, and 2.7 months of supply in the same data. Its single-family median is $665,000. The caution from our market update still applies: 129 sales is a small count, because Homes.com tracks the city of Hayden on its own boundary, so a handful of closings can move the median. Hayden sellers should lean on the single-family median and on the closest comparable sales, and treat any one city figure as a range, not a point.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sandpoint: The Widest Gap and the Most Supply
</h2>
<p className="mb-6">
                Sandpoint records a $616,050 median sale price, down 9% year-over-year, still the highest of the five, against a $759,000 median list price, a gap of $142,950, with 331 sales, 62 average days on market, and 9.0 months of supply (Homes.com, last 12 months, checked October 28, 2026). The single-family median sale price is $707,000, and the average price is $541 per square foot, well above the other four cities.
</p>
<p className="mb-10">
                That combination is the clearest seller lesson in this data. At 9.0 months of supply, Sandpoint buyers have alternatives, including the Lake Pend Oreille and Schweitzer premium homes covered in our Sandpoint and lakefront guides. A Sandpoint list price set from the $759,000 asking median, rather than from comparable closed sales near the $616,050 sale median and the $707,000 single-family median, risks joining the supply count instead of leaving it. In this market, pricing to closed sales and preparing the home well is not a concession. It is the strategy the data supports.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Setting the List Price, Preparing the Home, and Reading the First Weeks
</h2>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Price from the CMA, then check it against the city frame.</strong> If your CMA range sits far from your city median and single-family median, there should be a reason in the comparables: size, condition, lot, or location. If there is no such reason, the range deserves a second look before you list, not after the first price change.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Prepare what buyers see first.</strong> Clean, declutter, address obvious deferred maintenance, and make the exterior make a strong first impression. Get a prioritized list from your agent before spending, because not every improvement adds value, and the improvements that matter differ between a $520,000 Rathdrum median market and a $707,000 Sandpoint single-family market.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Watch the pace for your city, not a national average.</strong> The averages in this data run from 32 days in Hayden to 62 days in Sandpoint. If your home passes your city average with showings but no offers, the market is usually giving price or condition feedback. If it passes with few showings, the feedback is about exposure, presentation, or the price buyers see in search results.
</p>
<p className="mb-10">
                <strong className="text-[#1C1A17]">Keep seller costs separate from price.</strong> What you net depends on your payoff, your contract terms, and the closing costs allocated in your purchase agreement, in addition to the sale price. Our{' '}<a href="/articles/closing-costs-idaho-what-buyers-pay" className="text-[#C4842A] hover:underline">Idaho closing costs guide</a>{' '}explains how Idaho custom allocates title, escrow, and tax items between buyer and seller. Read your own agreement for your allocation, and ask for a net estimate at the list price, and at a lower price, before you list, so a later offer is not the first time you see the math.
</p>
<div className="my-8 p-6 bg-[#1C1A17] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  What This Means in Practice, October 2026
</h3>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Price to closed sales:</span> in every city here the asking median sits above the closed median. The homes inside the faster day counts are the ones priced against comparable closings, not against what neighbors are asking.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed">
                    <span className="text-[#F5EFE6] font-semibold">Match the strategy to the supply:</span> at 2.3 months in Post Falls and 2.7 months in Hayden, a correct price has scarcity behind it. At 9.0 months in Sandpoint, the same home needs preparation and a closed-sale price to stand out from the alternatives.
</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
</h2>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
<p className="text-sm mb-10">
                Published October 28, 2026. All market figures are Homes.com city guide figures for the last 12 months, checked October 28, 2026, and they match the baseline published in this site&apos;s October 2026 market update, checked October 25, 2026: median sale prices of $575,000 in Coeur d&apos;Alene (down 2%), $525,000 in Post Falls (up 4%), $600,000 in Hayden (up 4%), $520,000 in Rathdrum (up 11%), and $616,050 in Sandpoint (down 9%); median list prices of $649,000, $539,500, $649,950, $532,282, and $759,000 in the same city order; median single-family sale prices of $649,000, $540,000, $665,000, $547,435, and $707,000; average days on market of 46, 34, 32, 36, and 62; months of supply of 4.6, 2.3, 2.7, 3.2, and 9.0; and sales counts of 1,010, 734, 129, 370, and 331. The list to sale gap in this article is the arithmetic difference between the median list price and the median sale price for a city. Those medians describe different sets of homes, so the gap is not a sale-to-list ratio, not a discount rate, and not a pricing formula for an individual home. No sale-to-list ratio is published here because Homes.com does not publish that ratio for these cities in this data. Zillow ZHVI typical values are cited only from this site&apos;s flagship comparison as a separate, labeled metric. This article is general real estate information, not financial or legal advice. For a value specific to your home, request a comparative market analysis.
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
                  I will not give you an inflated number to win your listing. I will show you the comparable closed sales, explain where your home fits against them, and give you a list price range and a net estimate you can check. If the data says your home is worth less than you hoped, you will hear that from me before you list, not after weeks on the market. If it says more, the same comparables will show why. Either way, the conversation is honest, with no pressure and no pitch.
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
                Data sources: Homes.com city guides for Coeur d&apos;Alene, Post Falls, Hayden, Rathdrum, and Sandpoint (last 12 months, checked October 28, 2026), and this site&apos;s flagship North Idaho city comparison for Zillow ZHVI typical values, as detailed in Sources and Scope above. Market conditions change, so contact Shirin for a comparative market analysis specific to your home.
</p>
</article>
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Seller Snapshot</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">North Idaho · October 2026 · Homes.com, last 12 months</p>
<div className="space-y-3">
{[
                      { range: 'Sandpoint $616,050 sale', desc: 'List median $759,000 · Gap $142,950 · 62 days avg · 9.0 months supply' },
                      { range: 'Hayden $600,000 sale', desc: 'List median $649,950 · Gap $49,950 · 32 days avg · 2.7 months supply' },
                      { range: "Coeur d'Alene $575,000 sale", desc: 'List median $649,000 · Gap $74,000 · 46 days avg · 4.6 months supply' },
                      { range: 'Post Falls $525,000 sale', desc: 'List median $539,500 · Gap $14,500 · 34 days avg · 2.3 months supply' },
                      { range: 'Rathdrum $520,000 sale', desc: 'List median $532,282 · Gap $12,282 · 36 days avg · 3.2 months supply' }
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
                    What Is My Home Worth?
</a>
</div>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Resources</p>
<div className="space-y-4">
<a href="/sellers" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Selling a Home in Northern Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The seller hub: pricing, presentation, and exposure</p>
</a>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/north-idaho-housing-market-update" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho Housing Market Update: October 2026</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">One source, one window, all five cities</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho City Comparison</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">All five cities, head to head, the flagship comparison</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/coeur-dalene-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Coeur d&apos;Alene Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The area guide for the largest of the five markets</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/post-falls-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Post Falls Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The area guide for the tightest supply market</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/closing-costs-idaho-what-buyers-pay" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Closing Costs in Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">How Idaho custom allocates closing costs at sale</p>
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
            Thinking of Selling? Start With the Closed Sales.
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            Let&apos;s look at the comparable homes that actually closed near yours, and build an honest price and net estimate from them, before you decide anything.
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
