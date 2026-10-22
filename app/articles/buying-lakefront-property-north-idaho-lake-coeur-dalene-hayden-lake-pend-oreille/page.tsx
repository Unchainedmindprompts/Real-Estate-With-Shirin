import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
const articleUrl = 'https://www.realestatewithshirin.com/articles/buying-lakefront-property-north-idaho-lake-coeur-dalene-hayden-lake-pend-oreille'
const sources = [
  { label: 'Idaho Department of Lands: navigable waterways, the Lake Protection Act, and dock and encroachment permits', url: 'https://www.idl.idaho.gov/lakes-rivers/' },
  { label: 'Idaho Department of Lands: review encroachment permits before closing; permits stay with the parcel and must be formally assigned to the new owner', url: 'https://content.govdelivery.com/accounts/IDLANDS/bulletins/426f346' },
  { label: 'Idaho Department of Lands: single-family dock permitting, including U.S. Army Corps of Engineers permits on portions of Lake Pend Oreille', url: 'https://www.idl.idaho.gov/wp-content/uploads/sites/2/2021/04/BrochureSingleFamilyDock.pdf' },
  { label: 'Panhandle Health District: sewage system permit application and installation guidelines for the five northern counties', url: 'https://panhandlehealthdistrict.org/wp-content/uploads/2026/07/2026-Septic-Application-Guidelines-3.pdf' },
  { label: 'U.S. Army Corps of Engineers, Seattle District: fall drawdown elevation targets for Lake Pend Oreille (September 3, 2025)', url: 'https://www.nws.usace.army.mil/Media/News-Releases/Article/4293001/army-corps-announces-fall-drawdown-elevation-targets-for-lake-pend-oreille/' },
  { label: 'National Academies of Sciences, Engineering, and Medicine: The Future of Water Quality in Coeur d\'Alene Lake (lake size, shoreline, and Post Falls Dam lake levels)', url: 'https://www.nationalacademies.org/read/26620/chapter/3' },
  { label: 'Northwest Power and Conservation Council: Lake Pend Oreille subbasin summary (largest and deepest natural lake in Idaho, shoreline and depth)', url: 'https://cfw.nwcouncil.org/Content/FWProgram/ReviewCycle/fy2002mc/workplan/PendOreille/PendOreille.htm' },
  { label: 'Lake Hayden (Wikipedia, citing the U.S. Geological Survey Geographic Names Information System): 3,800 acres and 40 miles of shoreline', url: 'https://en.wikipedia.org/wiki/Lake_Hayden' },
]
export const metadata: Metadata = {
title: "Lakefront Property in North Idaho: Prices, Docks & Permits",
description:
    "Lakefront trades in its own market: Sanders Beach lists at a $946,500 median, Hayden Lake at $1,372,500, and Sandpoint's average sale is $1,203,461. Frontage, docks, permits, septic, and lake levels, from a local REALTOR.",
alternates: {
canonical: articleUrl,
  },
openGraph: {
title: "Buying Lakefront Property in North Idaho (2026 Guide)",
description: "Lake Coeur d'Alene, Hayden Lake, and Lake Pend Oreille compared on frontage pricing, dock and encroachment permits, water and septic, and seasonal lake levels, using only figures already published on this site plus primary Idaho sources.",
url: articleUrl,
type: 'article',
publishedTime: '2026-10-22',
authors: ['Shirin Abplanalp'],
  },
}
const faqs = [
  {
    q: 'How much does lakefront property cost in North Idaho?',
    a: 'There is no single lakefront price, because waterfront is priced against its own comparable sales, not against a city median. The published anchors on this site keep list medians and sale medians labeled separately. Near Lake Coeur d\'Alene, Sanders Beach lists at a $946,500 median and the 83814 zip code at $894,900, against a Coeur d\'Alene citywide median sale price of $575,000 as of January 2026 (Redfin). Hayden Lake, the shoreline community, lists at a $1,372,500 median, against a $600,000 median sale price in the city of Hayden over the last 12 months (Homes.com). On Lake Pend Oreille, Sandpoint recorded a $619,080 median sale price and a $1,203,461 average sale price over the last 12 months (Homes.com), a gap the waterfront and Schweitzer sales explain. True waterfront sits in the $1,200,000 and above band this site publishes for waterfront and estates.',
  },
  {
    q: 'What is the difference between Hayden and Hayden Lake?',
    a: 'They are two different places. Hayden is the city of about 17,500 people directly north of Coeur d\'Alene, with a $600,000 median sale price over the last 12 months (Homes.com). Hayden Lake is the lake itself and the small community on its shore, where the median list price is $1,372,500. A search for Hayden and a search for Hayden Lake return very different homes at very different prices, so be specific about which one you mean.',
  },
  {
    q: 'Do I need a permit for a dock on a North Idaho lake?',
    a: 'Yes, in most cases. The Idaho Department of Lands administers the Idaho Lake Protection Act and regulates encroachments on, in, or above navigable lakes, and its published examples of permitted encroachments include docks, marinas, bridges, utility lines, mooring buoys, and float homes. Only a littoral owner, someone who owns waterfront property on a navigable waterbody, can apply for an encroachment permit. Portions of Lake Pend Oreille are also navigable waters for the U.S. Army Corps of Engineers, so a Corps permit can be required there as well. Verify the permit status of any existing dock with the Department of Lands before you buy, not after.',
  },
  {
    q: 'Does a dock permit transfer to the buyer when waterfront property sells in Idaho?',
    a: 'The permit stays with the parcel, but it must be formally assigned to the new owner, and the Idaho Department of Lands states that the property must be in compliance before a permit can be assigned. Compliance means every encroachment, including docks, boat lifts, buoys, riprap or bank stabilization, waterlines, and boat garages, is permitted and matches the permitted design. The Department urges buyers and sellers to review encroachment permits before closing, because noncompliance is resolved by bringing a structure back into its permitted design or removing an unpermitted encroachment, and both take time.',
  },
  {
    q: 'Why is Sandpoint\'s average sale price so much higher than its median?',
    a: 'Because waterfront and Schweitzer sales pull the average up. Sandpoint recorded a median sale price of $619,080 and an average (mean) sale price of $1,203,461 over the last 12 months (Homes.com), so the average is nearly double the median. The median describes the typical in-town purchase. The average describes a small market where a limited number of lakefront and ski sales at $1,000,000 and above move the math. Price your own slice: in-town homes against the median, and waterfront against waterfront comparable sales.',
  },
  {
    q: 'Are North Idaho lakefront homes on sewer or septic?',
    a: 'It depends on the parcel, and there is no lake-wide rule. Shoreline homes may be on a sewer district, a community water system, a well, or an individual septic system. The Panhandle Health District issues septic permits for the five northern counties, a permit is required for subsurface sewage disposal systems in Idaho, and anyone constructing, altering, or extending a system must hold a valid district permit. On any lakefront purchase, pull the septic permit record for the specific parcel, confirm the system size and the replacement area, and verify the water source and any sewer district connection in writing before closing.',
  },
]
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: "Buying Lakefront Property in North Idaho: Lake Coeur d'Alene, Hayden Lake, and Lake Pend Oreille",
  description: "Lakefront property on Lake Coeur d'Alene, Hayden Lake, and Lake Pend Oreille compared on frontage pricing, dock and encroachment permits, water and septic, and seasonal lake levels, using only figures already published on this site plus primary Idaho sources.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-10-22T00:00:00-07:00',
  dateModified: '2026-10-22T00:00:00-07:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'buying lakefront property North Idaho',
    'Lake Coeur d\'Alene waterfront homes',
    'Hayden Lake waterfront home prices',
    'Lake Pend Oreille lakefront property',
    'Sanders Beach homes for sale',
    'Idaho dock permit encroachment',
    'lakefront septic sewer North Idaho',
    'waterfront vs lake access homes Idaho',
    'North Idaho lake homes 2026',
    'Bonner County Kootenai County waterfront',
  ],
  articleSection: 'Buyer Resources',
  wordCount: 2100,
  about: [
    {
      '@type': 'LakeBodyOfWater',
      name: "Coeur d'Alene Lake",
      sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene_Lake',
    },
    {
      '@type': 'LakeBodyOfWater',
      name: 'Hayden Lake',
      sameAs: 'https://en.wikipedia.org/wiki/Hayden_Lake_(Idaho)',
    },
    {
      '@type': 'LakeBodyOfWater',
      name: 'Lake Pend Oreille',
      sameAs: 'https://en.wikipedia.org/wiki/Lake_Pend_Oreille',
    },
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
  spatialCoverage: [
    {
      '@type': 'AdministrativeArea',
      name: 'Kootenai County',
      containedInPlace: { '@type': 'State', name: 'Idaho' },
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Bonner County',
      containedInPlace: { '@type': 'State', name: 'Idaho' },
    },
  ],
  mentions: [
    {
      '@type': 'City',
      name: "Coeur d'Alene",
      sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho',
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
      name: 'Sandpoint',
      sameAs: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'City',
      name: 'Post Falls',
      sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'City',
      name: 'Rathdrum',
      sameAs: 'https://en.wikipedia.org/wiki/Rathdrum,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
    {
      '@type': 'LakeBodyOfWater',
      name: "Coeur d'Alene Lake",
      sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene_Lake',
    },
    {
      '@type': 'LakeBodyOfWater',
      name: 'Hayden Lake',
      sameAs: 'https://en.wikipedia.org/wiki/Hayden_Lake_(Idaho)',
    },
    {
      '@type': 'LakeBodyOfWater',
      name: 'Lake Pend Oreille',
      sameAs: 'https://en.wikipedia.org/wiki/Lake_Pend_Oreille',
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
    { '@type': 'ListItem', position: 3, name: 'Buying Lakefront Property in North Idaho', item: articleUrl },
  ],
}
const lakeBars = [
  { label: "Coeur d'Alene median sale price, citywide (Jan 2026)", value: 575000, width: '42' },
  { label: '83814 zip median list price, near the lake', value: 894900, width: '65' },
  { label: 'Sanders Beach median list price', value: 946500, width: '69' },
  { label: 'Hayden (city) median sale price (last 12 months)', value: 600000, width: '44' },
  { label: 'Hayden Lake median list price, shoreline community', value: 1372500, width: '100' },
  { label: 'Sandpoint median sale price (last 12 months)', value: 619080, width: '45' },
  { label: 'Sandpoint average sale price (last 12 months)', value: 1203461, width: '88' },
]
const comparisonRows = [
  { metric: 'Anchor city median sale price', cda: '$575,000 (Jan 2026, Redfin)', hayden: '$600,000 (last 12 months, Homes.com)', pend: '$619,080 (last 12 months, Homes.com)' },
  { metric: 'Typical home value (Zillow)', cda: '$604,956', hayden: '$645,199 (city of Hayden)', pend: '$634,657' },
  { metric: 'Lake anchor figure', cda: 'Sanders Beach median list $946,500', hayden: 'Hayden Lake median list $1,372,500', pend: 'Average sale $1,203,461, pulled up by waterfront' },
  { metric: 'Lake size', cda: '31,875 acres, about 135 miles of shoreline', hayden: '3,800 acres, 40 miles of shoreline', pend: 'Largest lake in Idaho, more than 175 miles of shoreline' },
  { metric: 'Seasonal level change', cda: 'Summer pool 2,128 ft, drawn to about 2,122.5 ft by late December', hayden: 'Verify dock and level practice for the specific parcel', pend: 'Summer pool 2,062 to 2,062.5 ft, winter 2,051 to 2,051.5 ft' },
  { metric: 'County', cda: 'Kootenai County', hayden: 'Kootenai County', pend: 'Bonner County (southern tip in Kootenai County)' },
]
export default function BuyingLakefrontNorthIdahoPage() {
return (
<>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
{/* Hero */}
<section className="bg-[#F5EFE6] pt-36 pb-16">
<div className="max-w-5xl mx-auto px-6">
<nav className="text-sm text-[#9A9590] mb-6 font-dm-sans" aria-label="Breadcrumb">
<Link href="/" className="hover:text-[#C4842A] transition-colors">Home</Link>
<span className="mx-2">·</span>
<a href="/articles" className="hover:text-[#C4842A] transition-colors">Articles</a>
<span className="mx-2">·</span>
<span className="text-[#5C5650]">Buying Lakefront Property in North Idaho</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Buyer Resources</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">12 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">2026 Guide</span>
</div>
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Buying Lakefront Property in North Idaho: Lake Coeur d&apos;Alene, Hayden Lake, and Lake Pend Oreille
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            City medians do not price waterfront. What the three big lakes actually cost at the shoreline, how frontage and dock rights drive the price, and the permits, septic, and lake level checks to finish before you close.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · October 22, 2026</p>
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
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$946,500</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Sanders Beach Median List Price</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">List median · Lake Coeur d&apos;Alene</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$1,372,500</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Hayden Lake Median List Price</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">List median · Shoreline community</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$1,203,461</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Sandpoint Average Sale Price</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Homes.com · Last 12 months · Waterfront tail</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$575,000</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Coeur d&apos;Alene Median Sale Price</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Jan 2026 · Redfin · Citywide, off water</p>
</div>
</div>
</div>
</section>
{/* Article + Sidebar */}
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                Lakefront property in North Idaho is not priced off the city medians. Near Lake Coeur d&apos;Alene, Sanders Beach lists at a $946,500 median and the 83814 zip code at $894,900, against a Coeur d&apos;Alene citywide median sale price of $575,000 as of January 2026 (Redfin). Hayden Lake, the shoreline community on the lake north of Hayden, lists at a $1,372,500 median, against a $600,000 median sale price in the city of Hayden over the last 12 months (Homes.com). On Lake Pend Oreille, Sandpoint recorded a $619,080 median sale price and a $1,203,461 average sale price over the last 12 months (Homes.com), and the distance between those two numbers is the waterfront market showing up in the math. On all three lakes, frontage, dock rights, water quality, and view drive pricing more than the house itself does, and true waterfront trades in the $1,200,000 and above band this site publishes for waterfront and estates. Every price figure in this guide is already published on this site, with list medians and sale medians kept labeled as what they are. The permit, septic, and lake level facts come from the Idaho Department of Lands, the Panhandle Health District, the U.S. Army Corps of Engineers, and the National Academies, checked October 2026.
</p>
<p className="mb-10">Home prices are one input into the relocation decision. For the full picture &mdash; taxes, cost of living, neighborhoods, and schools &mdash;{' '}<a href="/relocating-to-north-idaho" className="text-[#C4842A] hover:underline">the complete North Idaho relocation guide</a>{' '}is the starting point, and the{' '}<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="text-[#C4842A] hover:underline">North Idaho city comparison</a>{' '}puts the off-water city markets in one table.</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Why City Medians Do Not Price Waterfront
</h2>
<p className="mb-6">
                Start with the caution this site already publishes. For site-built homes on less than two acres, the Kootenai County median sale price was $565,000 year to date through July 2026, according to Coeur d&apos;Alene Regional REALTORS, and acreage, waterfront, and other property categories produce significantly different numbers. That sentence is the whole pricing problem in one line. A city median blends in-town homes on city lots with everything else that sold, so it describes the typical purchase in the city. It does not describe a shoreline parcel, where the land, the frontage, and the dock carry most of the value and the house is often the smaller part of the price.
</p>
<p className="mb-8">
                The Sandpoint figures make the point with published numbers. The median sale price is $619,080 and the average sale price is $1,203,461 over the same 12 months (Homes.com). Both are correct. They describe different slices of one small market: the median is the typical in-town buyer experience, and the average is what happens when lakefront and Schweitzer sales at $1,000,000 and above enter the same dataset. The practical rule from our Sandpoint cost guide applies on every lake in this article: price your own slice. An in-town home is priced against the city median. A waterfront home is priced against its own comparable waterfront sales.
</p>
<div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Lake Anchors: List Medians at the Shore vs Sale Medians in Town
</h3>
<div className="space-y-4">
{lakeBars.map((bar) => (
<div key={bar.label}>
<div className="flex justify-between mb-1">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{bar.label}</span>
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">${bar.value.toLocaleString()}</span>
</div>
<div className="w-full bg-[#E8DDD0] h-7 rounded-none overflow-hidden">
<div
className="h-7 rounded-none"
style={{ width: `${bar.width}%`, backgroundColor: '#C4842A' }}
/>
</div>
</div>
                  ))}
</div>
<p className="font-dm-sans text-xs text-[#9A9590] mt-4">List medians and sale medians are labeled separately and are not averaged. Near-water figures (83814, Sanders Beach, Hayden Lake) are median list prices as published in this site&apos;s Coeur d&apos;Alene and Hayden cost guides. Citywide figures are median sale prices: Coeur d&apos;Alene as of January 2026 (Redfin), Hayden and Sandpoint over the last 12 months (Homes.com), checked October 2026.</p>
</div>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-4 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Metric</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Coeur d&apos;Alene</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Hayden Lake</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Pend Oreille</span>
</div>
{comparisonRows.map((row) => (
<div key={row.metric} className="grid grid-cols-4 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17] pr-3">{row.metric}</span>
<span className="font-dm-sans text-sm text-[#5C5650] pr-3">{row.cda}</span>
<span className="font-dm-sans text-sm text-[#5C5650] pr-3">{row.hayden}</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{row.pend}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">Sources: this site&apos;s Coeur d&apos;Alene, Hayden, and Sandpoint cost guides for prices; National Academies for Lake Coeur d&apos;Alene size and levels; U.S. Geological Survey naming records via Wikipedia for Hayden Lake size; Northwest Power and Conservation Council and the U.S. Army Corps of Engineers for Lake Pend Oreille size and levels. Full source links are in Sources and Scope below.</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Lake Coeur d&apos;Alene: The Resort Shoreline
</h2>
<p className="mb-6">
                Coeur d&apos;Alene is two markets sharing one name, and the lakefront market is the expensive one. Away from the water, the citywide median sale price is $575,000 as of January 2026 (Redfin) and the typical home value is $604,956 (Zillow). Near the water, the numbers step up in stages: the 83814 zip code lists at a $894,900 median, downtown lists at a $938,000 median, and Sanders Beach lists at a $946,500 median. Above $1,200,000, the city is a luxury and waterfront market, and our Coeur d&apos;Alene cost guide states the pricing rule plainly: frontage, dock rights, water quality, and view drive pricing more than the house itself does.
</p>
<p className="mb-6">
                The lake itself is about 31,875 acres with roughly 135 miles of shoreline (National Academies, citing U.S. Geological Survey research). Its level is managed, and the management matters to a dock owner. Post Falls Dam, operated by Avista, holds the lake at a summer full pool elevation of 2,128 feet until the first Tuesday after Labor Day, then draws it down to about 2,122.5 feet by the end of December (National Academies). That is a swing of about five and a half feet between the summer boating season and winter. A fixed dock that works in July can sit high and dry in January, which is why floating docks and adjustable systems are the common answer on this lake, and why a buyer should look at the dock in the season they are buying, with the drawdown in mind.
</p>
<p className="mb-10">
                What to weigh on this shoreline: how much of the price is the Sanders Beach and downtown address against how much is usable frontage, whether the dock is private or shared, and how the parcel handles the winter level. Homes with water views, deeded beach access, or a short walk to the lake price in the bands below full waterfront in our cost guide, and that discount is real. If daily dock use is not the point of the purchase, a view or access home near the lake can deliver most of the lifestyle at a materially lower price.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Hayden Lake: The Quiet Shoreline
</h2>
<p className="mb-6">
                Keep the names straight, because it changes the search. Hayden is the city, with a $600,000 median sale price over the last 12 months (Homes.com) and a typical home value of $645,199 (Zillow), the highest of the five cities in our comparison. Hayden Lake is the lake itself and the small community on its shore, where the median list price is $1,372,500. Buyers who say Hayden Lake when they mean Hayden price themselves out of homes they would love, and buyers who say Hayden when they mean the lake wonder why the waterfront never appears. The 83835 zip code, which covers both Hayden and Hayden Lake, lists at a $864,000 median (Redfin, October 2026), and that blended figure is exactly why the two names have to be separated.
</p>
<p className="mb-10">
                Hayden Lake is the small, residential lake of the three: about 3,800 acres with 40 miles of shoreline (U.S. Geological Survey naming records), heavily lined with homes and with limited public access. Above $1,200,000, a buyer is in the Hayden Lake market, where frontage, dock rights, water quality, and view again drive the price. The useful middle option is published in our Hayden cost guide: lake-access homes without frontage trade at a clear discount to true waterfront. A home with deeded access to a community beach or dock area gives a buyer the lake without paying the full frontage premium, and on a lake this size, that trade is often the sensible one.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Lake Pend Oreille: The Big Water
</h2>
<p className="mb-6">
                Lake Pend Oreille is the largest and deepest natural lake in Idaho, with more than 282 kilometers (about 175 miles) of shoreline and a maximum depth of 351 meters, about 1,152 feet (Northwest Power and Conservation Council, citing U.S. Fish and Wildlife Service research). Sandpoint, on its northern shore in Bonner County, recorded a $619,080 median sale price, a $634,657 typical home value (Zillow), and a $730,000 median single-family sale price over the last 12 months (Homes.com). Lakefront and Schweitzer properties regularly exceed $1,000,000, and the townhouse median of $1,790,000 (Homes.com) shows how much of the listed product is lake or ski inventory rather than in-town housing.
</p>
<p className="mb-10">
                The level swing is the biggest of the three lakes, and it is a federal operating decision. The U.S. Army Corps of Engineers operates Albeni Falls Dam and publishes the targets: summer pool at 2,062 to 2,062.5 feet held through late September, then a fall drawdown to 2,051 to 2,051.5 feet by mid November (Corps announcement, September 3, 2025). That is roughly eleven feet between summer and winter pool. Docks, ramps, and water access on Pend Oreille have to be built for that range, and a shoreline that looks generous in August can be a long walk to the water in February. Tour Pend Oreille frontage with the drawdown in mind, ask how the dock is anchored and adjusted, and price the property against comparable Pend Oreille waterfront sales, not against the Sandpoint median.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Frontage, Access, and Views: Three Different Products
</h2>
<p className="mb-6">
                Listings use the word waterfront loosely, and the three products behind it price very differently. True frontage means the parcel itself touches the water, with the dock rights and the permit questions that come with it. Lake access means the home is off the water but carries deeded rights to a community beach, dock, or marina area, and it trades at a clear discount to true waterfront, as our Hayden guide publishes. A view home has the lake in the window and no water rights at all. None of the three is the wrong purchase. Paying frontage money for an access or view product is the mistake, and it happens when a buyer compares listings by headline instead of by the rights that convey.
</p>
<p className="mb-6">
                This site does not publish a price per front foot for any of the three lakes, and this guide does not invent one. Frontage value changes with water depth at the dock, exposure, slope, and the quality of the beach or shoreline, so a single per-foot figure would mislead more than it would help. What can be checked on any parcel is concrete: the surveyed frontage, the water depth at the end of the dock at summer pool and at winter pool, whether the dock is private, shared, or community, and which comparable waterfront sales the asking price rests on. A secondary water market worth knowing is Twin Lakes Village north of Rathdrum, a waterfront golf community with a private clubhouse and dock access, published in our Rathdrum cost guide in the band above $850,000.
</p>
<p className="mb-10">
                Season does the rest of the pricing work. Waterfront inventory is seasonal, listings that launch for the summer lake season can sit if the price assumes a buyer who has not arrived yet, and the same shoreline reads differently at summer pool and at winter drawdown. If you can, stand on the parcel in both conditions before you decide what the frontage is worth to you.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Docks and Encroachment Permits: The Paperwork That Comes With the Water
</h2>
<p className="mb-6">
                A dock in Idaho is a permitted structure, not just a feature of the house. The <a href="https://www.idl.idaho.gov/lakes-rivers/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Idaho Department of Lands</a> administers the Idaho Lake Protection Act and regulates encroachments on, in, or above the navigable lakes of the state. Its published examples of encroachments include docks, marinas, bridges, utility lines, mooring buoys, and float homes, and only a littoral owner, someone who owns waterfront property on a navigable waterbody, can apply for an encroachment permit. Portions of Lake Pend Oreille are also navigable waters for the U.S. Army Corps of Engineers under federal law, so a Corps permit can be required there in addition to the state permit, as the Department&apos;s dock guidance notes.
</p>
<p className="mb-10">
                The closing rule is the one buyers miss. When waterfront property is sold, existing encroachment permits stay with the parcel, but the permit must be formally assigned to the new owner, and the Department states that the property must be in compliance before a permit can be assigned. Compliance means all encroachments, including docks, boat lifts, buoys, riprap or bank stabilization, waterlines, and boat garages, are permitted and match the permitted design. The Department <a href="https://content.govdelivery.com/accounts/IDLANDS/bulletins/426f346" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">urges buyers and sellers to review encroachment permits before closing</a>, because noncompliance is fixed by bringing a structure back into its permitted design or removing an unpermitted encroachment, and neither belongs in the week after closing. Ask for the recorded permit and its drawings early, compare them against what is actually built, and confirm the assignment is part of the closing paperwork.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Water, Sewer, and Septic: Verify the Parcel, Not the Lake
</h2>
<p className="mb-6">
                There is no lake-wide answer for water and sewer. One shoreline parcel may be on a sewer district and community water, and the next may run on a well and an individual septic system. The governing facts are parcel facts. The <a href="https://panhandlehealthdistrict.org/wp-content/uploads/2026/07/2026-Septic-Application-Guidelines-3.pdf" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Panhandle Health District</a> issues septic permits for the five northern counties, permits are required for subsurface sewage disposal systems in Idaho, and any person who constructs, alters, or extends an individual sewage disposal system must hold a valid permit from the district, with the work done by a licensed installer. The district&apos;s permit for a parcel lists the site-specific conditions for that system, which is why the record for the specific parcel, not a general rule, is the document that matters.
</p>
<p className="mb-10">
                On a lakefront purchase, pull the septic permit record, confirm the permitted system size against the home&apos;s bedroom count, ask whether a replacement drainfield area is identified, and verify the drinking water source and any sewer district connection or fees in writing. Older shoreline parcels can be small, and setbacks from the water shape what can be built, repaired, or expanded, so treat the health district record and a septic inspection as part of the purchase, not an afterthought. Our{' '}<a href="/articles/buying-property-prairie-wells-septic-roads" className="text-[#C4842A] hover:underline">guide to buying property on wells, septic, and rural roads</a>{' '}covers the inspection pattern in detail, and it applies on the shoreline as much as on the prairie.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Lakefront Due Diligence Checklist
</h2>
<div className="my-8 grid md:grid-cols-2 gap-4">
<div className="p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">
                    Before you offer
</h3>
<ul className="space-y-2">
{[
'Confirm true frontage, deeded access, or view only',
'Get the surveyed frontage and parcel boundaries',
'Ask for the recorded dock encroachment permit',
'Compare the permit drawings to what is built',
'Price against comparable waterfront sales only',
'Check water depth at the dock at winter pool',
                    ].map((item) => (
<li key={item} className="flex items-start gap-2">
<span className="text-[#C4842A] font-semibold mt-0.5 flex-shrink-0">✓</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{item}</span>
</li>
                    ))}
</ul>
</div>
<div className="p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">
                    Before you close
</h3>
<ul className="space-y-2">
{[
'Confirm the permit assignment is in the closing papers',
'Pull the septic permit record for the parcel',
'Verify well or community water in writing',
'Confirm sewer district connection or fees, if any',
'Ask how the dock handles the seasonal drawdown',
'Walk the shoreline in the season you are buying',
                    ].map((item) => (
<li key={item} className="flex items-start gap-2">
<span className="text-[#C4842A] font-semibold mt-0.5 flex-shrink-0">✓</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{item}</span>
</li>
                    ))}
</ul>
</div>
</div>
<p className="mb-10">
                None of this is a reason to avoid lakefront. It is the normal homework of a shoreline purchase, and it is lighter when it starts before the offer instead of after it. The buyers who enjoy these lakes most are usually the ones who knew exactly which rights, permits, and systems came with the parcel on the day they closed.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
</h2>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
<p className="text-sm mb-10">
                Published October 22, 2026. Every price statistic in this guide is taken from an article already published on this site: the Coeur d&apos;Alene cost guide (median sale price $575,000 as of January 2026, Redfin; typical value $604,956, Zillow; 83814 median list $894,900; downtown median list $938,000; Sanders Beach median list $946,500), the Hayden cost guide (median sale price $600,000 over the last 12 months, Homes.com; typical value $645,199, Zillow; Hayden Lake median list $1,372,500; 83835 median list $864,000, Redfin, October 2026), the Sandpoint cost guide (median sale price $619,080, average sale price $1,203,461, median single-family sale $730,000, and townhouse median $1,790,000, all Homes.com over the last 12 months; typical value $634,657, Zillow), the Rathdrum cost guide (Twin Lakes Village above the $850,000 band), and the buy-now-or-wait guide (Coeur d&apos;Alene Regional REALTORS site-built median of $565,000 year to date through July 2026, with waterfront categories producing significantly different numbers). List medians and sale medians keep their own labels throughout and are never averaged. No price per front foot is stated, because no published source on this site verifies one. Permit, septic, lake size, and lake level facts are from the primary sources listed above, checked October 2026. This guide is general real estate information, not legal, tax, or engineering advice. Verify permit and septic status for a specific parcel with the Idaho Department of Lands and the Panhandle Health District.
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
                  Lakefront is the purchase where the details are the property: the frontage, the dock permit, the water at winter pool, and the septic record matter as much as the kitchen. If you are looking at a shoreline home on any of these three lakes, or trying to decide between true frontage and a lake-access home at a lower price, reach out. I will give you a straight read on what the rights and the numbers actually say. No pressure, no pitch, just an honest conversation.
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
                Data sources: this site&apos;s Coeur d&apos;Alene, Hayden, Sandpoint, and Rathdrum cost guides and buy-now-or-wait guide, as detailed in Sources and Scope above, with external corroboration from the Idaho Department of Lands, the Panhandle Health District, the U.S. Army Corps of Engineers, the National Academies, and the Northwest Power and Conservation Council. Market conditions change, so contact Shirin for the most current figures specific to your price range.
</p>
</article>
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Price Guide</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">North Idaho Lakefront · 2026</p>
<div className="space-y-3">
{[
                      { range: "Coeur d'Alene citywide", desc: '$575,000 median sale (Jan 2026) · $604,956 typical value' },
                      { range: 'Near the water, 83814', desc: '$894,900 median list · Sanders Beach $946,500 median list' },
                      { range: 'Hayden (city)', desc: '$600,000 median sale (last 12 months)' },
                      { range: 'Hayden Lake shoreline', desc: '$1,372,500 median list' },
                      { range: 'Sandpoint / Pend Oreille', desc: '$619,080 median sale · $1,203,461 average sale (last 12 months)' },
                      { range: 'True waterfront band', desc: '$1.2M+ on this site for waterfront and estates' }
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
                    Talk Through a Lakefront Purchase
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
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Coeur d&apos;Alene Idaho Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Neighborhoods and market overview</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/hayden-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Hayden Idaho Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Neighborhoods and market overview</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/sandpoint-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Sandpoint Idaho Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Neighborhoods and market overview</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/how-much-do-homes-cost-coeur-dalene-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Coeur d&apos;Alene Home Prices 2026</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">What each budget buys, including the waterfront band</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/how-much-do-homes-cost-hayden-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Hayden Home Prices 2026</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Hayden vs Hayden Lake, priced separately</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/how-much-do-homes-cost-sandpoint-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Sandpoint Home Prices 2026</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">In-town medians vs the Lake Pend Oreille average</p>
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
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Ready to Talk</p>
<h2 className="font-cormorant text-4xl md:text-5xl text-[#F5EFE6] mb-6 leading-tight font-semibold">
            Which Lake Fits Your Life?
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            Resort shoreline, quiet shoreline, or big water: the right lake depends on how you will actually use it, and the right parcel depends on its frontage, permits, and systems. Let&apos;s talk through both before you offer.
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
