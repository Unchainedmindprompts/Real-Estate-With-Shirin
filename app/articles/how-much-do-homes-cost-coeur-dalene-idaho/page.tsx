import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
export const metadata: Metadata = {
title: "Coeur d'Alene Home Prices 2026: What Buyers Actually Pay",
description:
    "The median Coeur d'Alene home sold for $575,000. What that buys, what $500K vs $850K gets you, and how it compares to Post Falls, from a local REALTOR.",
alternates: {
canonical: 'https://www.realestatewithshirin.com/articles/how-much-do-homes-cost-coeur-dalene-idaho',
  },
openGraph: {
title: "Coeur d'Alene, Idaho Home Prices in 2026 (What Buyers Pay)",
description: "What does a home actually cost in Coeur d'Alene right now? A local REALTOR breaks down 2026 prices by neighborhood and budget, from the under-$500K pockets to the lakefront.",
url: 'https://www.realestatewithshirin.com/articles/how-much-do-homes-cost-coeur-dalene-idaho',
type: 'article',
publishedTime: '2026-10-15',
authors: ['Shirin Abplanalp'],
  },
}
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.realestatewithshirin.com/articles/how-much-do-homes-cost-coeur-dalene-idaho#article',
  headline: "What Homes Actually Cost in Coeur d'Alene, Idaho (2026)",
  description: "What does a home actually cost in Coeur d'Alene right now? A local REALTOR breaks down 2026 prices by neighborhood and budget, from the under-$500K pockets to the lakefront.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-10-15T00:00:00-07:00',
  dateModified: '2026-10-15T00:00:00-07:00',
  mainEntityOfPage: 'https://www.realestatewithshirin.com/articles/how-much-do-homes-cost-coeur-dalene-idaho',
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: 'https://www.realestatewithshirin.com/articles/how-much-do-homes-cost-coeur-dalene-idaho',
  keywords: [
    'how much do homes cost in Coeur d\'Alene Idaho',
    'Coeur d\'Alene Idaho home prices 2026',
    'average home price Coeur d\'Alene Idaho',
    'homes under $500000 Coeur d\'Alene Idaho',
    'what can I get for $650000 Coeur d\'Alene Idaho',
    'Coeur d\'Alene Idaho real estate prices',
    'Coeur d\'Alene vs Post Falls home prices',
    'Lake Coeur d\'Alene waterfront home prices',
    'relocating to Coeur d\'Alene Idaho',
    'Kootenai County home prices 2026',
  ],
  articleSection: 'Buyer Resources',
  wordCount: 1350,
  about: [
    {
      '@type': 'City',
      name: "Coeur d'Alene",
      sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Kootenai County',
      containedInPlace: { '@type': 'State', name: 'Idaho' },
    },
  ],
  spatialCoverage: {
    '@type': 'City',
    name: "Coeur d'Alene",
    sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
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
    { '@type': 'City', name: 'Los Angeles', sameAs: 'https://en.wikipedia.org/wiki/Los_Angeles', containedInPlace: { '@type': 'State', name: 'California' } },
    { '@type': 'City', name: 'Seattle', sameAs: 'https://en.wikipedia.org/wiki/Seattle', containedInPlace: { '@type': 'State', name: 'Washington' } },
    { '@type': 'City', name: 'Portland', sameAs: 'https://en.wikipedia.org/wiki/Portland,_Oregon', containedInPlace: { '@type': 'State', name: 'Oregon' } },
    { '@type': 'City', name: 'Spokane', sameAs: 'https://en.wikipedia.org/wiki/Spokane,_Washington', containedInPlace: { '@type': 'State', name: 'Washington' } },
  ],
}
const faqSchema = {
'@context': 'https://schema.org',
'@type': 'FAQPage',
'@id': 'https://www.realestatewithshirin.com/articles/how-much-do-homes-cost-coeur-dalene-idaho#faq',
isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles/how-much-do-homes-cost-coeur-dalene-idaho#article' },
mainEntity: [
    {
'@type': 'Question',
name: 'What is the average home price in Coeur d\'Alene Idaho in 2026?',
acceptedAnswer: {
'@type': 'Answer',
text: 'The median sale price in Coeur d\'Alene Idaho is $575,000 as of January 2026, up 4.7% year-over-year (Redfin). The typical home value is $604,956 (Zillow). Entry-level detached homes start in the low $400,000s away from the lake, the core family market runs $500,000 to $850,000, and downtown and waterfront properties regularly exceed $1,000,000.',
      },
    },
    {
'@type': 'Question',
name: 'What can I get for $650,000 in Coeur d\'Alene Idaho?',
acceptedAnswer: {
'@type': 'Answer',
text: 'At $650,000 in Coeur d\'Alene, buyers are in the heart of the market: a 3 to 4 bedroom single-family home, typically 1,700 to 2,300 square feet, in neighborhoods like Riverstone or the Garden District, or a newer home in the Atlas area. It is the most competitive price point in the city.',
      },
    },
    {
'@type': 'Question',
name: 'Are there homes under $500,000 in Coeur d\'Alene Idaho?',
acceptedAnswer: {
'@type': 'Answer',
text: 'Yes, but they are a minority of the market. Sub-$500,000 options concentrate in Coeur d\'Alene Place, where the median list price is $491,000, and in the 83815 zip code in north Coeur d\'Alene, plus condos and townhomes. Detached homes under $500,000 tend to be smaller or older, and the well-priced ones move quickly.',
      },
    },
    {
'@type': 'Question',
name: 'How does Coeur d\'Alene compare to Post Falls for home prices?',
acceptedAnswer: {
'@type': 'Answer',
text: 'Coeur d\'Alene costs more. The typical home value in Coeur d\'Alene is $604,956 versus $530,937 in Post Falls — about 14% more for an equivalent home — and Post Falls homes go pending faster, in about 10 days versus 25 in Coeur d\'Alene. The premium buys the lake, the downtown, and the address. The two cities are about 10 minutes apart.',
      },
    },
    {
'@type': 'Question',
name: 'Is Coeur d\'Alene Idaho affordable compared to California?',
acceptedAnswer: {
'@type': 'Answer',
text: 'Compared to California metros, yes. Coeur d\'Alene\'s $575,000 median sale price compares to medians of $975,000 in Los Angeles County, $1,200,000 in Orange County, and $830,370 statewide in California. A $575,000 budget in Los Angeles buys a condo or small starter home. In Coeur d\'Alene, it buys a single-family home with a yard. Idaho also has a flat 5.3% state income tax, well below California\'s top rate of 13.3%.',
      },
    },
  ],
}
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.realestatewithshirin.com/articles/how-much-do-homes-cost-coeur-dalene-idaho#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    { '@type': 'ListItem', position: 3, name: 'How Much Do Homes Cost in Coeur d\'Alene Idaho?', item: 'https://www.realestatewithshirin.com/articles/how-much-do-homes-cost-coeur-dalene-idaho' },
  ],
}
const priceTiers = [
  { range: '$400K–$500K', sqft: '1,100–1,600', beds: '3bd/2ba', color: '#9A9590', width: '40' },
  { range: '$500K–$650K', sqft: '1,500–2,200', beds: '3-4bd/2-3ba', color: '#C4842A', width: '56' },
  { range: '$650K–$850K', sqft: '1,900–2,800', beds: '3-4bd/2-3ba', color: '#C4842A', width: '72' },
  { range: '$850K–$1.2M', sqft: '2,400–3,500', beds: '4bd/3ba+', color: '#6B7A8D', width: '88' },
  { range: '$1.2M+', sqft: '3,000+', beds: '4bd+/3ba+', color: '#6B7A8D', width: '100' },
]
const marketComparisons = [
  { city: "Coeur d'Alene, ID", median: 575000, bar: 48, highlight: true },
  { city: 'Post Falls, ID', median: 521138, bar: 43, highlight: false },
  { city: 'Spokane, WA', median: 385151, bar: 32, highlight: false },
  { city: 'Portland, OR', median: 507333, bar: 42, highlight: false },
  { city: 'Sacramento, CA', median: 483502, bar: 40, highlight: false },
  { city: 'Seattle, WA', median: 850000, bar: 70, highlight: false },
  { city: 'San Diego, CA', median: 931500, bar: 77, highlight: false },
  { city: 'Los Angeles, CA', median: 975000, bar: 80, highlight: false },
  { city: 'Orange County, CA', median: 1200000, bar: 100, highlight: false },
]
export default function HomesPricesCoeurDalenePage() {
return (
<>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
{/* Hero */}
<section className="bg-[#F5EFE6] pt-36 pb-16">
<div className="max-w-5xl mx-auto px-6">
{/* Breadcrumbs */}
<nav className="text-sm text-[#9A9590] mb-6 font-dm-sans" aria-label="Breadcrumb">
<Link href="/" className="hover:text-[#C4842A] transition-colors">Home</Link>
<span className="mx-2">·</span>
<a href="/articles" className="hover:text-[#C4842A] transition-colors">Articles</a>
<span className="mx-2">·</span>
<span className="text-[#5C5650]">How Much Do Homes Cost in Coeur d&apos;Alene Idaho?</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Buyer Resources</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">9 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">2026 Guide</span>
</div>
{/* H1 */}
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            What Homes Actually Cost in Coeur d&apos;Alene, Idaho (2026)
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            A complete price breakdown by budget — from the under-$500K pockets to the lakefront — plus how Coeur d&apos;Alene compares to Post Falls and to the western metros buyers relocate from.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · October 15, 2026</p>
</div>
</div>
</div>
</section>
<div className="border-t border-[#E8DDD0]" />
{/* Key Stats Bar */}
<section className="bg-[#1C1A17] py-8">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$575K</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Median Sale Price</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">January 2026</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$605K</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Typical Home Value</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Zillow ZHVI</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">25 days</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Median Time to Pending</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">vs 10 days in Post Falls</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">5.3%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Idaho State Income Tax</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">vs 13.3% CA / 9.9% OR</p>
</div>
</div>
</div>
</section>
{/* Article + Sidebar */}
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
{/* Article Body */}
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
{/* Opening direct answer */}
<p className="mb-6">
                The median sale price for a home in Coeur d&apos;Alene, Idaho is $575,000 as of January 2026 — up 4.7% year-over-year (Redfin). The typical home value is $604,956 (Zillow). What that buys depends almost entirely on distance from the lake: a comfortable family home in the north of the city, or merely a starting point for the downtown and waterfront market. Coeur d&apos;Alene is the premium address in North Idaho, and it prices like one.
</p>
<p className="mb-10">Home prices are one input into the relocation decision. For the full picture &mdash; taxes, cost of living, neighborhoods, and schools &mdash;{' '}<a href="/relocating-to-north-idaho" className="text-[#C4842A] hover:underline">the complete North Idaho relocation guide</a>{' '}is the starting point.</p>
{/* H2: Price Landscape at a Glance */}
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Coeur d&apos;Alene Price Landscape at a Glance
</h2>
<p className="mb-6">
                Coeur d&apos;Alene is two markets sharing one name. Away from the water, it is a mid-sized Idaho city with a median sale price of $575,000. Near the lake and downtown, it is a resort market: the 83814 zip code lists at a median of $894,900, downtown at $938,000, and waterfront trades in the millions. At $604,956, the typical home value runs about 14% above Post Falls ($530,937) — the premium is the lake, the downtown, and the name.
</p>
<p className="mb-8">
                The median list price of $619,000 sits notably above the $575,000 median sale price, and homes typically close for about 2% under list. Sellers anchor to the resort market; closings happen in the real one. Knowing which of the two markets a specific home belongs to is the entire pricing game in this city.
</p>
{/* Chart 1: Price Tier Overview */}
<div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  What Each Price Range Typically Gets You — Coeur d&apos;Alene (2026)
</h3>
<div className="space-y-4">
{priceTiers.map((tier) => (
<div key={tier.range}>
<div className="flex justify-between mb-1">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{tier.range}</span>
<span className="font-dm-sans text-xs text-[#5C5650]">{tier.beds} · {tier.sqft} sqft</span>
</div>
<div className="w-full bg-[#E8DDD0] h-7 rounded-none overflow-hidden">
<div
className="h-7 rounded-none"
style={{ width: `${tier.width}%`, backgroundColor: tier.color }}
/>
</div>
</div>
                  ))}
</div>
<p className="font-dm-sans text-xs text-[#9A9590] mt-4">Based on active listing data — Coeur d&apos;Alene, Idaho — October 2026</p>
</div>
{/* H2: $300K-$350K */}
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What Does $400,000–$500,000 Get You in Coeur d&apos;Alene?
</h2>
<p className="mb-6">
                This is the entry point for detached homes in Coeur d&apos;Alene, and the inventory is thin. Sub-$500,000 listings concentrate in Coeur d&apos;Alene Place in the north of the city, where the median list price is $491,000, and across the 83815 zip code, where the median list is $512,500. What you are generally looking at is a 3-bedroom, 2-bath home between 1,100 and 1,600 square feet, usually built in the 1990s or 2000s, on a standard city lot.
</p>
<p className="mb-10">
                Condos and townhomes widen the options at this level, with townhomes listing from the high $300,000s. What this band does not buy is the lake: anything with frontage or a genuine water view sits far above it. Buyers who need to stay under $500,000 in a detached home should also price the same budget in Post Falls, where it reaches a newer, larger house.
</p>
{/* H2: $350K-$450K */}
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What Does $500,000–$650,000 Get You in Coeur d&apos;Alene?
</h2>
<p className="mb-6">
                This is the core of the Coeur d&apos;Alene market, where most local family buyers land. The Garden District lists at a median of $599,999, and established neighborhoods across midtown and the north side trade throughout this range. Expect 3 to 4 bedrooms, 2 to 3 baths, and roughly 1,500 to 2,200 square feet — a mix of well-kept older homes and newer infill construction, almost always with a garage.
</p>
<p className="mb-10">
                At the $575,000 city median, a buyer gets the standard Coeur d&apos;Alene package: a real single-family home on a city lot, in Coeur d&apos;Alene School District 271, minutes from the lake and downtown. Homes in this band go pending in about 25 days at the median, so the well-priced ones still reward decisiveness.
</p>
{/* H2: $450K-$550K */}
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What Does $650,000–$850,000 Get You in Coeur d&apos;Alene?
</h2>
<p className="mb-6">
                Above $650,000, the neighborhoods change character. Riverstone, the master-planned community on the Spokane River, lists at medians of $615,000 to $625,000, with its larger homes reaching into this band. The Atlas-Prairie area lists at a $715,000 median and the Spokane River District at $752,998. Homes run 1,900 to 2,800 square feet with 3 to 4 bedrooms, newer construction, and in the river districts, water access built into the community.
</p>
<p className="mb-10">
                This is also where lake influence starts pricing in short of full waterfront: homes with water views, deeded beach access, or a short walk to the lake. For buyers relocating from Seattle or California, this band is usually the one that recalibrates expectations — it buys a genuinely premium home here.
</p>
{/* H2: $550K-$650K */}
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What Does $850,000–$1,200,000 Get You in Coeur d&apos;Alene?
</h2>
<p className="mb-6">
                Downtown Coeur d&apos;Alene lists at a $938,000 median and Sanders Beach at $946,500. This band buys walkability: the resort, the marina, the restaurants, and the lake as part of daily life. The housing is a mix of renovated classics at the upper end of the Garden District, residences in the downtown tower buildings, and custom homes on the hillsides above the water.
</p>
<p className="mb-10">
                Inventory here is limited and idiosyncratic. No two properties are alike, condition varies enormously, and pricing turns on the specific street and view corridor as much as on square footage. Two homes a block apart can be $200,000 apart for reasons that only make sense standing in them.
</p>
{/* H2: $650K+ */}
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What Does $1,200,000 and Above Get You in Coeur d&apos;Alene?
</h2>
<p className="mb-6">
                Above $1,200,000, Coeur d&apos;Alene is a luxury and waterfront market. Lakefront homes on Lake Coeur d&apos;Alene, estates in Dalton Gardens (median list price $1,372,000), and properties around Hayden Lake (median list $1,372,500) define the segment. Frontage, dock rights, water quality, and view drive pricing more than the house itself does.
</p>
<p className="mb-10">
                This segment moves on its own clock. The right buyer matters more than days on market, and a meaningful share of the most desirable properties change hands with limited public exposure. Local relationships and timing count here in a way they simply do not at the median.
</p>
{/* H2: Condos and Townhomes */}
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Condos and Townhomes in Coeur d&apos;Alene — What to Expect
</h2>
<p className="mb-6">
                Attached housing is a larger segment in Coeur d&apos;Alene than anywhere else in North Idaho, anchored by Riverstone&apos;s condos and townhomes and the downtown tower buildings such as One Lakeside. Townhomes list from the high $300,000s, Riverstone attached homes cluster around the community&apos;s $615,000 median list price, and downtown tower residences with lake views run from the $600,000s upward.
</p>
<p className="mb-10">
                HOA fees are the trade-off to underwrite carefully. Downtown and Riverstone buildings carry meaningful monthly dues that buy amenities, exterior maintenance, and in some communities marina or beach access. Run the full monthly number, not just the purchase price, when comparing an attached home against a detached one.
</p>
{/* H2: Comparison to Other Markets */}
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                How Coeur d&apos;Alene Compares to Where You&apos;re Coming From
</h2>
<p className="mb-6">
                Start with the neighbor. Post Falls, about 10 minutes west, has a median sale price of $521,138 and a typical home value of $530,937 — roughly 14% below Coeur d&apos;Alene. The two cities share a county, an effective property tax rate, and an outdoor lifestyle. What the Coeur d&apos;Alene premium buys is specific: the lake, the downtown, and the address.
</p>
<p className="mb-6">
                Against the metros buyers relocate from, the gap widens. The median sale price in Los Angeles County is $975,000, in Orange County approximately $1,200,000, and statewide across California $830,370. Seattle runs approximately $850,000. Coeur d&apos;Alene&apos;s $575,000 median buys a single-family home with a yard here; in those markets, it buys a condo or a small starter home, if it buys in at all.
</p>
<p className="mb-8">
                Portland sits closer at $507,333, below Coeur d&apos;Alene on price — but Oregon has a progressive income tax with a top rate of 9.9%, while Idaho has a flat 5.3%. Sacramento is the closest California comparison at $483,502, but California&apos;s 13.3% top income tax rate and higher cost of living across the board change the full ownership math. Buyers who run price, income tax, and property tax together usually find Coeur d&apos;Alene cheaper to own than the sticker gap suggests.
</p>
{/* Chart 2: Market Comparison */}
<div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Median Home Price Comparison — Coeur d&apos;Alene vs Western Markets (2026)
</h3>
<div className="space-y-3">
{marketComparisons.map((market) => (
<div key={market.city}>
<div className="flex justify-between mb-1">
<span className={`font-dm-sans text-sm ${market.highlight ? 'font-semibold text-[#C4842A]' : 'text-[#1C1A17]'}`}>
{market.city} {market.highlight && '← You are here'}
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
<p className="font-dm-sans text-xs text-[#9A9590] mt-4">Sources: Redfin, Zillow — January 2026 medians</p>
</div>
{/* Chart 3: Tax Savings Callout */}
<div className="my-8 p-6 bg-[#1C1A17] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  The Idaho Tax Advantage — What It Actually Saves You
</h3>
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="text-center p-4 bg-[#2C2A27] rounded-sm">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">5.3%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Idaho</p>
<p className="font-dm-sans text-xs text-[#6B7A8D]">Flat Rate</p>
</div>
<div className="text-center p-4 bg-[#2C2A27] rounded-sm">
<p className="font-cormorant text-3xl text-[#9A9590] font-semibold">9.9%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Oregon</p>
<p className="font-dm-sans text-xs text-[#6B7A8D]">Top Rate</p>
</div>
<div className="text-center p-4 bg-[#2C2A27] rounded-sm">
<p className="font-cormorant text-3xl text-[#9A9590] font-semibold">13.3%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">California</p>
<p className="font-dm-sans text-xs text-[#6B7A8D]">Top Rate</p>
</div>
</div>
<div className="border-t border-[#2C2A27] pt-4">
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed">
                    Idaho&apos;s <span className="text-[#F5EFE6] font-semibold">flat 5.3% rate</span> is meaningfully lower than Oregon&apos;s progressive system (effective rate around 7–8% at $100K income) and well below California&apos;s top rate of 13.3% — adding real annual savings on top of the housing cost difference.
</p>
</div>
</div>
{/* Chart 4: $650K Comparison */}
<div className="my-8 grid grid-cols-2 gap-4">
<div className="p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">
                    $650K in Coeur d&apos;Alene
</h3>
<ul className="space-y-2">
{[
'3-4 bedroom single family home',
'1,700–2,300 sq ft',
'Garage included',
'Established neighborhood or Riverstone',
'Newer construction available',
'5.3% flat state income tax',
'Lake Coeur d\'Alene minutes away',
                    ].map((item) => (
<li key={item} className="flex items-start gap-2">
<span className="text-[#C4842A] font-semibold mt-0.5 flex-shrink-0">✓</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{item}</span>
</li>
                    ))}
</ul>
</div>
<div className="p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#9A9590] mb-4">
                    $650K in Los Angeles
</h3>
<ul className="space-y-2">
{[
'Condo or small starter home',
'Under 1,100 sq ft typical',
'Parking may be extra',
'No yard or shared courtyard',
'Mostly older inventory',
'13.3% top state income tax',
'Ocean 30+ min in traffic',
                    ].map((item) => (
<li key={item} className="flex items-start gap-2">
<span className="text-[#9A9590] font-semibold mt-0.5 flex-shrink-0">—</span>
<span className="font-dm-sans text-sm text-[#9A9590]">{item}</span>
</li>
                    ))}
</ul>
</div>
</div>
{/* H2: FAQ */}
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Frequently Asked Questions
</h2>
<div className="space-y-4 mb-12">
<div className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
<h3 className="font-dm-sans font-semibold text-[#1C1A17] text-base mb-3">
                    What is the average home price in Coeur d&apos;Alene Idaho in 2026?
</h3>
<p className="font-dm-sans text-[17px] text-[#5C5650] leading-relaxed">
                      The median sale price in Coeur d&apos;Alene Idaho is $575,000 as of January 2026, up 4.7% year-over-year (Redfin). The typical home value is $604,956 (Zillow). Entry-level detached homes start in the low $400,000s away from the lake, the core family market runs $500,000 to $850,000, and downtown and waterfront properties regularly exceed $1,000,000.
</p>
</div>
<div className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
<h3 className="font-dm-sans font-semibold text-[#1C1A17] text-base mb-3">
                    What can I get for $650,000 in Coeur d&apos;Alene Idaho?
</h3>
<p className="font-dm-sans text-[17px] text-[#5C5650] leading-relaxed">
                      At $650,000 in Coeur d&apos;Alene, buyers are in the heart of the market: a 3 to 4 bedroom single-family home, typically 1,700 to 2,300 square feet, in neighborhoods like Riverstone or the Garden District, or a newer home in the Atlas area. It is the most competitive price point in the city.
</p>
</div>
<div className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
<h3 className="font-dm-sans font-semibold text-[#1C1A17] text-base mb-3">
                    Are there homes under $500,000 in Coeur d&apos;Alene Idaho?
</h3>
<p className="font-dm-sans text-[17px] text-[#5C5650] leading-relaxed">
                      Yes, but they are a minority of the market. Sub-$500,000 options concentrate in Coeur d&apos;Alene Place, where the median list price is $491,000, and in the 83815 zip code in north Coeur d&apos;Alene, plus condos and townhomes. Detached homes under $500,000 tend to be smaller or older, and the well-priced ones move quickly.
</p>
</div>
<div className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
<h3 className="font-dm-sans font-semibold text-[#1C1A17] text-base mb-3">
                    How does Coeur d&apos;Alene compare to Post Falls for home prices?
</h3>
<p className="font-dm-sans text-[17px] text-[#5C5650] leading-relaxed">
                      Coeur d&apos;Alene costs more. The typical home value in Coeur d&apos;Alene is $604,956 versus $530,937 in Post Falls — about 14% more for an equivalent home — and Post Falls homes go pending faster, in about 10 days versus 25 in Coeur d&apos;Alene. The premium buys the lake, the downtown, and the address. The two cities are about 10 minutes apart.
</p>
</div>
<div className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
<h3 className="font-dm-sans font-semibold text-[#1C1A17] text-base mb-3">
                    Is Coeur d&apos;Alene Idaho affordable compared to California?
</h3>
<p className="font-dm-sans text-[17px] text-[#5C5650] leading-relaxed">
                      Compared to California metros, yes. Coeur d&apos;Alene&apos;s $575,000 median sale price compares to medians of $975,000 in Los Angeles County, $1,200,000 in Orange County, and $830,370 statewide in California. A $575,000 budget in Los Angeles buys a condo or small starter home. In Coeur d&apos;Alene, it buys a single-family home with a yard. Idaho also has a flat 5.3% state income tax, well below California&apos;s top rate of 13.3%.
</p>
</div>
</div>
{/* Closing CTA */}
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
                  I made this move myself — from Bend, Oregon to Northern Idaho — and I know how overwhelming it can feel to try to understand a new market from a distance. The numbers in this article give you the framework, but what your budget actually gets you in Coeur d&apos;Alene depends on your specific priorities: distance to the lake, neighborhood, school district, lot size, commute. If you want a straight answer about what&apos;s realistic for your situation in Coeur d&apos;Alene right now, reach out. No pressure, no pitch — just an honest conversation.
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
                Data sources: Redfin Coeur d&apos;Alene market data (median sale price, January 2026), Zillow home values, Redfin active listing medians, October 2026. Market conditions change — contact Shirin for the most current figures specific to your price range.
</p>
</article>
{/* Sidebar */}
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
{/* Price Range Quick Guide */}
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Price Range Guide</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">Coeur d&apos;Alene · 2026</p>
<div className="space-y-3">
{[
                      { range: '$400K–$500K', desc: '3bd/2ba · 1,100–1,600 sqft · Entry level' },
                      { range: '$500K–$650K', desc: '3-4bd · 1,500–2,200 sqft · Core market' },
                      { range: '$650K–$850K', desc: '3-4bd · 1,900–2,800 sqft · Riverstone &amp; river districts' },
                      { range: '$850K–$1.2M', desc: '4bd · Downtown · Sanders Beach · Lake proximity' },
                      { range: '$1.2M+', desc: 'Waterfront · Estates · Luxury' }
                    ].map((item) => (
<div key={item.range} className="border-b border-[#2C2A27] pb-3 last:border-0 last:pb-0">
<p className="font-dm-sans text-sm font-semibold text-[#C4842A]">{item.range}</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-0.5">{item.desc}</p>
</div>
                    ))}
</div>
</div>
{/* Agent Card */}
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Your Local Advisor</p>
<img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp" className="w-16 h-16 rounded-full object-cover mb-3" />
<p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · #1371861</p>
<a href="/contact" className="block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    What Does My Budget Get Me?
</a>
</div>
{/* Related */}
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Resources</p>
<div className="space-y-4">
<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho City Comparison</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">All five cities, head to head</p>
</a>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/how-much-do-homes-cost-post-falls-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Post Falls Home Prices 2026</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">What the same budget buys 10 minutes west</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/coeur-dalene-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Coeur d&apos;Alene Idaho Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Neighborhoods and market overview</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/buyers" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Buying a Home in Northern Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">What to expect from search to close</p>
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
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Ready to Explore</p>
<h2 className="font-cormorant text-4xl md:text-5xl text-[#F5EFE6] mb-6 leading-tight font-semibold">
            What Does Your Budget Get You in Coeur d&apos;Alene?
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            The numbers above give you the framework. Let&apos;s talk about what&apos;s actually available right now in your price range, in the neighborhoods that match how you want to live.
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
