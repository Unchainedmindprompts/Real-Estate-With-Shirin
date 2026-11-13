import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
const articleUrl = 'https://www.realestatewithshirin.com/articles/buying-land-north-idaho-cost-per-acre-perc-power-access'
const sources = [
  { label: 'Land.com: land market insights for Kootenai County, Idaho (median price per acre, median list price, and median lot size for current listings, checked October 2026)', url: 'https://www.land.com/Kootenai-County-ID/all-land/sort-price-low/' },
  { label: 'Land.com: land market insights for Bonner County, Idaho (median price per acre, median list price, and median lot size for current listings, checked October 2026)', url: 'https://www.land.com/Bonner-County-ID/' },
  { label: 'Kootenai Electric Cooperative: new construction process, $750 engineering fee for low-density service, $840 high density fee, and construction proposals about 2 to 4 weeks after the on-site meeting', url: 'https://www.kec.com/account-services/start-stop-transfer-service/new-construction/' },
  { label: 'Panhandle Health District: sewage system permit application and test hole guidelines for the five northern counties (8-foot test hole, second hole about 75 feet away)', url: 'https://panhandlehealthdistrict.org/wp-content/uploads/2026/07/2026-Septic-Application-Guidelines-3.pdf' },
  { label: 'Idaho Department of Water Resources: well drilling permits, licensed drillers, and the well log database', url: 'https://idwr.idaho.gov/wells/' },
  { label: 'Kootenai County Code 8.6.705: minimum 60-foot private road easement and 40-foot common driveway easement on new parcels', url: 'https://codelibrary.amlegal.com/codes/kootenaicountyid/latest/kootenaicounty_id/0-0-0-5876' },
  { label: 'Bonner County: frequently asked questions on Building Location Permits (required for structures over 400 square feet) and Floodplain Development Permits', url: 'https://www.bonnercountyid.gov/frequently-asked-questions-1' },
  { label: 'Idaho Department of Environmental Quality: Spokane Valley-Rathdrum Prairie Aquifer background', url: 'https://www.deq.idaho.gov/water-quality/groundwater/rathdrum-prairie-aquifer/' },
  { label: 'Idaho Department of Water Resources, Water Rights Adjudication (checked November 4, 2026): Northern Idaho rights are being inventoried in the Coeur d’Alene Spokane River Basin Adjudication (CSRBA) and the Clark Fork Pend Oreille River Basin Adjudication (CFPRBA)', url: 'https://idwr.idaho.gov/water-rights/adjudication/' },
  { label: 'Idaho Department of Water Resources, Research Portal and Water Rights and Adjudication Search (checked November 4, 2026): search a parcel’s rights by place of use and confirm priority date, source, rate or volume, place of use, and owner of record', url: 'https://research.idwr.idaho.gov/' },
  { label: 'Idaho Department of Water Resources, Domestic Exemption (checked November 4, 2026): Senate Bill 1222, signed February 17, 2026 and effective that day, revised Idaho Code 42-111 and 42-227 for domestic wells', url: 'https://idwr.idaho.gov/water-rights/domestic-exemption/' },
  { label: 'Idaho Legislature, Idaho Code 42-111 as amended by 2025 chapter 129 and 2026 chapter 2 (checked November 4, 2026): domestic purposes means use for homes, camps, campgrounds, and livestock including irrigation of up to one half acre if total use does not exceed 13,000 gallons per day, or any other purpose if total use does not exceed 2.8 acre feet per year; multiple domestic rights may not be combined to serve a single use that would not itself qualify', url: 'https://legislature.idaho.gov/statutesrules/idstat/title42/t42ch1/sect42-111/' },
  { label: 'Idaho Legislature, Idaho Code 42-222(2) to (4) (checked November 4, 2026): a water right is lost and forfeited by five years of failure to apply the water to its beneficial use, forfeited water reverts to the state, the party asserting forfeiture must prove it by clear and convincing evidence, the exceptions in 42-223 apply, and the director may grant one extension of up to five additional years if the application is made before the five year period ends', url: 'https://legislature.idaho.gov/statutesrules/idstat/title42/t42ch2/sect42-222/' },
  { label: 'Idaho Department of Water Resources, Water Right Forms (checked November 4, 2026): the Notice of Change of Water Right Ownership is the form to notify IDWR of a change in ownership of a water right, statutory claim, or adjudication claim', url: 'https://idwr.idaho.gov/about-idwr/forms/water-rights-forms/' },
  { label: 'FEMA Flood Map Service Center (checked November 4, 2026): the official public source for the current Flood Insurance Rate Map panel for a parcel; parcels in a Special Flood Hazard Area, zones beginning A or V, trigger the federal mandatory flood insurance purchase requirement for a federally regulated or federally backed mortgage, and a designation can be challenged through the Letter of Map Amendment process', url: 'https://msc.fema.gov' },
  { label: 'Kootenai County Assessor, Agricultural Exemption, Idaho Code 63-604 (checked November 4, 2026): land must be actively devoted to agriculture as part of a bona fide for profit enterprise; parcels of five acres or less must show active devotion during the last three growing seasons and either 15 percent or more of the owner or lessee annual gross income or $1,000 or more in gross revenues in the immediately preceding year, with annual proof due April 15', url: 'https://www.kcgov.us/881/Agricultural-Exemption' },
  { label: 'Bonner County Assessor, Agricultural Exemption, Idaho Code 63-604 (checked November 4, 2026): the same more than five acres and five acres or less tests, with annual income proof for small parcels due April 15', url: 'https://www.bonnercountyid.gov/Agriculturaldivision' },
]
export const metadata: Metadata = {
title: "Buying Land in North Idaho: Cost Per Acre, Perc, Power & Access",
description:
    "Land lists at a $57,500 median price per acre in Kootenai County and $37,063 in Bonner County (Land.com, October 2026). The perc, well, power, easement, and zoning checks to finish before you close.",
alternates: {
canonical: articleUrl,
  },
openGraph: {
title: "Buying Land in North Idaho (2026 Guide)",
description: "Kootenai County and Bonner County land compared on cost per acre, plus the site evaluation, well, power extension, legal access, and buildability checks that decide what a parcel is really worth.",
url: articleUrl,
type: 'article',
publishedTime: '2026-10-23',
authors: ['Shirin Abplanalp'],
  },
}
const faqs = [
  {
    q: 'How much does land cost per acre in North Idaho?',
    a: 'It depends on the county, and the figures here are listing medians, not sale prices. Land.com put the median price per acre for current land listings at $57,500 in Kootenai County and $37,063 in Bonner County, checked October 2026. The same source put the median list price at $879,000 in Kootenai County, on a 15 acre median lot size, and $745,000 in Bonner County, on a 17.8 acre median lot size. Per acre medians blend lake, timber, prairie, and in-town parcels, so price a specific parcel against comparable land sales in its own area, not against a county median alone.',
  },
  {
    q: 'What is a perc test, and do I need one before buying land in North Idaho?',
    a: 'In North Idaho the practical equivalent is the Panhandle Health District site evaluation. Soil type is determined by an eight-foot-deep test hole at the center of the proposed drainfield area, with a second test hole about 75 feet away, and the soil result determines which septic system is allowed and how large it must be. Make the purchase contingent on that evaluation where you can. A parcel that cannot support an approved system, or that needs a mound or other alternative system, carries a very different cost than the listing price suggests.',
  },
  {
    q: 'How much does it cost to bring power to raw land in North Idaho?',
    a: 'There is no standard per foot price, because the utility prices the distance and the work for the specific parcel. Kootenai Electric Cooperative, which serves much of Kootenai County, charges a $750 engineering fee, applied towards the project, for low-density new construction where transformers have not been installed, and an $840 high density fee that includes extending service from an existing transformer to a meter base, checked October 2026. The cooperative provides a construction proposal about 2 to 4 weeks after the on-site meeting, and it must be paid before construction. Get that written proposal for your parcel before you close, and confirm which utility actually serves the parcel, because service territory varies.',
  },
  {
    q: 'How deep are wells and how much do septic systems cost on North Idaho land?',
    a: 'On the Rathdrum Prairie, most residential wells hit water at 150 to 400 feet, and in the foothills around Athol, Spirit Lake, and Twin Lakes depths rise to 300 to 600 feet with less predictable yields, as published in this site\'s prairie guide. A typical turnkey well runs $8,000 to $15,000. For septic in Kootenai County, a standard system runs $5,000 to $12,000, pressure-distribution or aerobic systems $7,000 to $18,000, and mound systems $10,000 to $20,000, plus the Panhandle Health District subsurface sewage permit fee of $950. The test hole result decides which system a parcel is allowed.',
  },
  {
    q: 'What legal access and easement checks matter when buying land?',
    a: 'Confirm recorded legal access from a public road to the parcel, not just a track that looks usable. In Kootenai County, the county does not maintain private roads, a recorded road maintenance agreement is essential before closing, and county code requires a minimum 60-foot private road easement and 40 feet for a common driveway on new parcels (Kootenai County Code 8.6.705). Read every recorded easement on the title report, including utility, access, and any easement that crosses the likely building site, and check for easements the parcel itself depends on to reach power or a road.',
  },
  {
    q: 'What is different about buying land in Bonner County versus Kootenai County?',
    a: 'Three things. First, price: land lists at a lower median price per acre in Bonner County, $37,063 against $57,500 in Kootenai County (Land.com, October 2026). Second, septic still runs through the Panhandle Health District, which covers the five northern counties, but county land use rules differ. Bonner County requires a Building Location Permit for structures over 400 square feet and a Floodplain Development Permit for any man-made change in a designated flood hazard area or floodway, per the county\'s own published guidance. Third, wells, roads, and snow load conditions are parcel specific in both counties, so never carry a Kootenai figure north as if it were a Bonner fact.',
  },
  {
    q: 'Do water rights come with land in Idaho?',
    a: 'Not automatically as a verified fact you can rely on from a listing. Idaho water is administered under prior appropriation, first in time is first in right, and a right exists only where water was diverted and put to beneficial use. Undeveloped land with no history of use has no established right, and a new use requires an application for permit to the Idaho Department of Water Resources. Search the parcel by place of use in IDWR’s Water Rights and Adjudication Search and confirm the right’s priority date, source, rate or volume, place of use, and owner of record. In North Idaho, what the seller holds may be a filed claim awaiting a decree in the Northern Idaho Adjudication, not a decreed right, so state it that way. After a sale, a change of ownership should be filed with IDWR on its Notice of Change of Water Right Ownership form so the record matches the new owner.',
  },
  {
    q: 'Can you lose a water right in Idaho if you don’t use it?',
    a: 'Yes, that risk is real, but it is not automatic on a buyer’s say so. Under Idaho Code 42-222(2), checked November 4, 2026, all water rights are lost and forfeited by failure for five years to apply the water to the beneficial use it was appropriated for, and forfeited water reverts to the state. The party asserting forfeiture bears the burden of proving it by clear and convincing evidence, the exceptions in Idaho Code 42-223 apply, and the director may grant one extension of up to five additional years if it is applied for before the five year period ends, under 42-222(3) and (4). Ask when the parcel’s irrigation water was last actually used, and treat a long gap as a question to resolve with IDWR or counsel before closing, not as proof the right is gone.',
  },
  {
    q: 'How do I find out if land is in a flood zone in Idaho?',
    a: 'Check the current Flood Insurance Rate Map panel for the parcel at FEMA’s Flood Map Service Center, msc.fema.gov, which is the official public source, checked November 4, 2026. Check the land and the building site, not just the address. Parcels inside a Special Flood Hazard Area, zones beginning A or V, the 1 percent annual chance floodplain, trigger the federal mandatory purchase requirement: a federally regulated or federally backed mortgage on a building in the Special Flood Hazard Area must carry flood insurance for the life of the loan. The lender makes its own determination on the Standard Flood Hazard Determination Form, and a designation can be challenged through FEMA’s Letter of Map Amendment process. Zones B, C, and X sit outside the Special Flood Hazard Area, and outside the Special Flood Hazard Area is not the same as no flood risk.',
  },
  {
    q: 'Does buying land include the mineral rights?',
    a: 'That is a records question for the specific parcel, not a rule a listing can answer. The mineral estate can be severed from the surface estate by a recorded deed or reservation, after which a surface deed conveys only what the grantor still owns, and mineral interests are transferred by their own recorded mineral deeds. No single Idaho statute answers whether you own the minerals on a given parcel. Read the title commitment’s Schedule B exceptions for mineral reservations and leases, read the deed’s reservation language itself, and ask the title company in writing whether minerals are included, excepted, or unsearched. Do not assume a standard owner’s title policy covers minerals, because policies commonly except them and the commitment language on your own parcel governs.',
  },
]
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: "Buying Land in North Idaho: Cost Per Acre, Perc, Power, and Access",
  description: "Land in Kootenai County and Bonner County compared on cost per acre, with the site evaluation, well, power extension, legal access, and zoning checks to complete before closing.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-10-23T00:00:00-07:00',
  dateModified: '2026-11-13T00:00:00-08:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'buying land North Idaho',
    'cost per acre Kootenai County',
    'cost per acre Bonner County',
    'perc test North Idaho land',
    'Panhandle Health District site evaluation',
    'power extension raw land Idaho',
    'land easement access Idaho',
    'well septic raw land North Idaho',
    'Bonner County building location permit',
    'raw land checklist Idaho 2026',
    'Idaho water rights land purchase',
    'mineral rights Idaho land title',
    'agricultural exemption Idaho land 63-604',
  ],
  articleSection: 'Buyer Resources',
  wordCount: 2900,
  about: [
    {
      '@type': 'AdministrativeArea',
      name: 'Kootenai County',
      sameAs: 'https://en.wikipedia.org/wiki/Kootenai_County,_Idaho',
      containedInPlace: { '@type': 'State', name: 'Idaho' },
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Bonner County',
      sameAs: 'https://en.wikipedia.org/wiki/Bonner_County,_Idaho',
      containedInPlace: { '@type': 'State', name: 'Idaho' },
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
      name: 'Post Falls',
      sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    },
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
    { '@type': 'ListItem', position: 3, name: 'Buying Land in North Idaho', item: articleUrl },
  ],
}
const priceBars = [
  { label: 'Bonner County median price per acre (listings)', value: 37063, width: '64' },
  { label: 'Kootenai County median price per acre (listings)', value: 57500, width: '100' },
  { label: 'Bonner County median list price', value: 745000, width: '85' },
  { label: 'Kootenai County median list price', value: 879000, width: '100' },
]
const comparisonRows = [
  { metric: 'Median price per acre, listings', kootenai: '$57,500 per acre', bonner: '$37,063 per acre' },
  { metric: 'Median list price, listings', kootenai: '$879,000', bonner: '$745,000' },
  { metric: 'Median lot size, listings', kootenai: '15 acres', bonner: '17.8 acres' },
  { metric: 'Septic authority', kootenai: 'Panhandle Health District', bonner: 'Panhandle Health District' },
  { metric: 'County building check', kootenai: 'County code easements 60 ft road / 40 ft driveway', bonner: 'Building Location Permit over 400 sq ft; floodplain permit in hazard areas' },
  { metric: 'Power starting point', kootenai: 'Kootenai Electric Cooperative: $750 engineering fee, proposal in about 2 to 4 weeks', bonner: 'Confirm serving utility for the parcel; get a written proposal before closing' },
]
export default function BuyingLandNorthIdahoPage() {
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
<span className="text-[#5C5650]">Buying Land in North Idaho</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Buyer Resources</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">12 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">2026 Guide</span>
</div>
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Buying Land in North Idaho: Cost Per Acre, Perc, Power, and Access
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            What an acre actually lists for in Kootenai and Bonner counties, and the site, well, power, easement, and zoning checks that decide whether a parcel can become a home.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · October 23, 2026</p>
</div>
</div>
</div>
</section>
<div className="border-t border-[#E8DDD0]" />
<section className="bg-[#1C1A17] py-8">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$57,500</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Kootenai Median Price Per Acre</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Land.com listings · Oct 2026</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$37,063</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Bonner Median Price Per Acre</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Land.com listings · Oct 2026</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$879,000</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Kootenai Median List Price</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">15 acre median lot · Land.com</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$745,000</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Bonner Median List Price</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">17.8 acre median lot · Land.com</p>
</div>
</div>
</div>
</section>
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                Land in North Idaho lists at a $57,500 median price per acre in Kootenai County and a $37,063 median price per acre in Bonner County, according to Land.com listing data checked October 2026. The same source puts the median list price at $879,000 in Kootenai County, on a 15 acre median lot size, and $745,000 in Bonner County, on a 17.8 acre median lot size. Those are listing medians, not sale prices, and they blend prairie, timber, lake, and in-town parcels into one county number. They are a starting point for comparison, not a price for any single parcel. What decides whether a specific parcel is worth its asking price is the work this guide covers: whether the soils pass a site evaluation for septic, what a well will cost at that location, what the serving utility will charge in writing to bring in power, whether recorded legal access actually exists, and whether the zoning and setbacks leave a buildable site where you want to live.
</p>
<p className="mb-10">This guide extends, and does not repeat, our detailed prairie infrastructure guide. For well depths, septic system costs, and private road rules in Kootenai County, read{' '}<a href="/articles/buying-property-prairie-wells-septic-roads" className="text-[#C4842A] hover:underline">buying property on wells, septic, and rural roads</a>{' '}alongside this one, and use the{' '}<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="text-[#C4842A] hover:underline">North Idaho city comparison</a>{' '}for the improved home markets in the same counties.</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Cost Per Acre: Kootenai vs Bonner, With the Labels Kept Honest
</h2>
<p className="mb-6">
                The county gap is real in the listing data. Kootenai County land lists at about one and a half times the Bonner County median price per acre, $57,500 against $37,063 (Land.com, checked October 2026). That gap fits what buyers see on the ground: Kootenai parcels sit closer to Coeur d&apos;Alene, Post Falls, and Hayden jobs and services, while Bonner offers larger median lots, 17.8 acres against 15 acres, at a lower median list price. Neither median describes a buildable, power-adjacent, septic-approved parcel. Waterfront, view, timber value, road frontage, and distance to power move a single parcel far above or below its county median, in both directions.
</p>
<p className="mb-8">
                Two cautions belong with these numbers. First, they are list figures. A parcel that sits for months at a high per acre ask is inside the median until it sells or is repriced, so use closed land sales in the same area for an offer, not this chart alone. Second, do not compare these land figures with the home medians elsewhere on this site. A $619,080 median sale price in Sandpoint or a $600,000 median in Hayden describes improved homes on lots, not raw land, and mixing the two produces a number that means nothing.
</p>
<div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Land Listing Medians by County, October 2026
</h3>
<div className="space-y-4">
{priceBars.map((bar) => (
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
<p className="font-dm-sans text-xs text-[#9A9590] mt-4">Source: Land.com market insights for Kootenai County and Bonner County, checked October 2026. All figures are medians of current listings, not closed sales. Bonner County metrics on that page are calculated from listings over 10 acres, excluding commercial properties, per the source&apos;s own methodology note.</p>
</div>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-3 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Metric</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Kootenai County</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Bonner County</span>
</div>
{comparisonRows.map((row) => (
<div key={row.metric} className="grid grid-cols-3 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17] pr-3">{row.metric}</span>
<span className="font-dm-sans text-sm text-[#5C5650] pr-3">{row.kootenai}</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{row.bonner}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">Sources: Land.com for prices, lot sizes, and days context, checked October 2026; Panhandle Health District, Kootenai County Code, Bonner County, and Kootenai Electric Cooperative for the permit and power rows. Full source links are in Sources and Scope below.</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Perc, in North Idaho Terms: The Site Evaluation Is the Contingency
</h2>
<p className="mb-6">
                Buyers from other states ask for a perc test. In North Idaho, the document that matters is the Panhandle Health District site evaluation, and it works from soil, not just drainage speed. Under the district&apos;s published guidelines, system size is determined by soil type, soil type is determined by an eight-foot-deep test hole dug at the center of the proposed drainfield area, and a second test hole is dug about 75 feet away. Slope in the drainfield area cannot exceed 20 percent in the standard guidance, a drainfield must sit 100 to 300 feet from streams, lakes, and ponds depending on soil, and a replacement area meeting the same standards is required. The district covers the five northern counties, so this same authority applies in Bonner County as well as Kootenai County.
</p>
<p className="mb-10">
                Write the purchase so this evaluation happens before your money is at risk. If the seller already has a district evaluation or a septic permit for the parcel, get the actual document, check its date and the system type it allows, and confirm it matches the home you plan to build. If there is no evaluation, make it a named contingency with enough time to dig, inspect, and price the allowed system. Our prairie guide publishes the resulting cost stack: a standard system at $5,000 to $12,000, pressure-distribution or aerobic at $7,000 to $18,000, and mound at $10,000 to $20,000, plus the $950 district permit fee. The difference between the first system and the third is larger than many buyers&apos; entire contingency budget, and only the test hole tells you which one the parcel allows. On the Rathdrum Prairie aquifer, also confirm parcel size eligibility for septic before you assume a small parcel can take a standard system.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Wells: Use the Neighbor Logs Before You Price the Parcel
</h2>
<p className="mb-6">
                The well facts from our prairie guide carry across a land purchase, and they are location facts, not county averages you can bank on. Most residential wells on the Rathdrum Prairie hit water at 150 to 400 feet from the Spokane Valley-Rathdrum Prairie Aquifer. In the foothills around Athol, Spirit Lake, and Twin Lakes, depths rise to 300 to 600 feet and yields are less predictable. A typical turnkey well runs $8,000 to $15,000. The <a href="https://idwr.idaho.gov/wells/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Idaho Department of Water Resources</a> requires a drilling permit for any well deeper than 18 feet, requires a licensed driller, and treats a domestic single-family well under 13,000 gallons per day as needing no separate water-right approval.
</p>
<p className="mb-10">
                Before you offer, pull the IDWR well logs for neighboring parcels. Depth and yield next door are the best public predictor for your parcel, and a pattern of deep or low-yield wells is a pricing fact, not a detail to discover after closing. In Bonner County, do not carry prairie depths north. The aquifer framing is a Kootenai prairie fact, Bonner geology and well depths are their own local question, and the neighbor-log method, not a borrowed depth range, is how you answer it there.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Power: Distance Is Priced by the Utility, in Writing, Per Parcel
</h2>
<p className="mb-6">
                Power is the land cost buyers most often guess at, and it is the one with no honest generic range. The serving utility prices the actual distance, terrain, and equipment for the specific parcel. What can be verified is the process and the entry fees for the main Kootenai County cooperative. <a href="https://www.kec.com/account-services/start-stop-transfer-service/new-construction/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Kootenai Electric Cooperative</a> charges a $750 engineering fee, applied towards the project, for low-density new construction where transformers have not been installed, and an $840 high density fee that includes extending service from an existing transformer to a meter base, checked October 2026. Its assigned technician provides a construction proposal approximately 2 to 4 weeks after the on-site meeting, the proposal must be paid before construction, and any required easements must be obtained before construction.
</p>
<p className="mb-10">
                The practical steps are the same in both counties. First, confirm which utility serves the parcel, because territory lines do not follow the listing description and Bonner County parcels are not automatically on the Kootenai cooperative. Second, ask how far the building site is from the nearest transformer, in the utility&apos;s terms, not the seller&apos;s. Third, get the utility&apos;s written construction proposal, or at least a written estimate with its conditions, inside your contingency period. A parcel that looks $20,000 cheaper than its neighbor stops looking cheaper if its power proposal is $25,000 higher, and that comparison is only possible with both proposals in hand.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Access and Easements: Legal Access Is a Recorded Fact
</h2>
<p className="mb-6">
                A road you can drive is not the same as legal access you own. Before closing, confirm a recorded easement or public road frontage that runs with the parcel, read its width and maintenance terms, and check whether it crosses the land of one owner or several. In Kootenai County, the county does not maintain private roads, a recorded road maintenance agreement is essential before closing, and <a href="https://codelibrary.amlegal.com/codes/kootenaicountyid/latest/kootenaicounty_id/0-0-0-5876" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Kootenai County Code 8.6.705</a> sets a minimum 60-foot private road easement and 40 feet for a common driveway on new parcels. Those widths matter when a lender, a future buyer, or a fire truck needs the access to be more than a handshake.
</p>
<p className="mb-10">
                Then read the title report for the easements that burden the parcel, not just the one that benefits it. Utility easements, access easements for neighbors, and irrigation or ditch easements can cross the exact flat spot you pictured for the house. Map every recorded easement against your intended building site, well, and drainfield before you remove contingencies. If an easement is described but not clearly located, a survey is cheaper than moving a foundation plan after closing.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Zoning and Buildability: Bonner Is Not Kootenai With a Different Sign
</h2>
<p className="mb-6">
                Septic authority is shared, through the Panhandle Health District, but land use permission is county by county. Bonner County regulates development through Building Location Permits, and its own published guidance states that Building Location Permits are required for all structures over 400 square feet, and that Floodplain Development Permits are required for any man-made change in designated Special Flood Hazard Areas or floodways. A Bonner parcel near a creek, a lake outlet, or low ground therefore carries a second permit question that has nothing to do with septic, and it should be asked of <a href="https://www.bonnercountyid.gov/frequently-asked-questions-1" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Bonner County</a> before closing, not after design work starts.
</p>
<p className="mb-10">
                In both counties, finish the same buildability pass: confirm the zoning district and that a single-family home is an allowed use, get the setbacks for that district and apply them to the actual lot shape, check floodplain and wetland mapping, confirm any shoreline or stream setbacks, and verify there is a legal building site that fits the house, the well separation, the drainfield, and its replacement area at the same time. A five acre parcel can be buildable on paper and tight in practice once setbacks, slope, water, and septic separations are drawn on the same map. Draw them on the same map.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Due Diligence Beyond the Site: Water Rights, Minerals, Flood Zone, and Tax Status
</h2>
<p className="mb-6">
                The sections above decide what a parcel costs to build on. A second set of records decides what you actually own and what it will cost to keep. None of it lives in the listing, and each part lives in a different office: water in the Idaho Department of Water Resources records, minerals in the deed chain and title commitment, flood status on FEMA&apos;s current map, and tax classification at the county assessor. Run these checks in the same contingency window as the site evaluation, not after closing. The facts below were checked November 4, 2026 against IDWR, the Idaho Code, FEMA, and the two county assessors.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Water rights.</strong> Idaho allocates water under prior appropriation, first in time is first in right, and a right exists only where water was diverted and put to beneficial use. A parcel with no history of use has no established right attached to it, and a new use requires an application for a permit to IDWR. If the listing mentions water rights, search the parcel by place of use in IDWR&apos;s Water Rights and Adjudication Search and confirm the right&apos;s priority date, source, rate or volume, place of use, and owner of record. In North Idaho, what the seller holds may still be an un-decreed claim in the Northern Idaho adjudications, in the Coeur d&apos;Alene Spokane River Basin or the Clark Fork Pend Oreille River Basin, rather than a decreed right, so describe it that way. After closing, notify IDWR of the change using its Notice of Change of Water Right Ownership form. For a homesite well, know the current domestic figures, because widely linked secondary sources still quote the old ones. Under Idaho Code 42-111 as amended by Senate Bill 1222, signed February 17, 2026 and effective that day, domestic use includes irrigation of up to one half acre where total use does not exceed 13,000 gallons per day, or any other purpose up to 2.8 acre feet per year, and Idaho Code 42-227 excepts domestic wells from the water right permit requirement. Beyond those limits, a use needs a water right and possibly a permit.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Forfeiture.</strong> Ask when irrigation water on the parcel was last actually used. Under Idaho Code 42-222(2), a right is lost and forfeited after five years of failure to apply the water to its beneficial use, and forfeited water reverts to the state. Two limits keep this from being a scare tactic: the party asserting forfeiture must prove it by clear and convincing evidence, and the exceptions in Idaho Code 42-223 apply, with one extension of up to five additional years available under 42-222(3) and (4) if it is applied for before the period ends. A long gap in use is a question to resolve with IDWR or counsel before closing, not proof that a right is gone.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Mineral rights.</strong> The mineral estate is separate from the surface estate and can be severed by a recorded deed or reservation, after which a surface deed conveys only what the grantor still owns. No single Idaho statute answers whether you hold the minerals on a given parcel. Read the title commitment&apos;s Schedule B exceptions for mineral reservations and leases, read the deed&apos;s reservation language itself, and ask the title company in writing whether minerals are included, excepted, or unsearched, because standard owner&apos;s policies commonly except minerals. For a homesite, the practical question is whether an existing lease or reservation could ever be exercised, and that answer comes from the records, not the listing.
</p>
<p className="mb-6">
                <strong className="text-[#1C1A17]">Flood zone and insurability.</strong> Check the current Flood Insurance Rate Map panel for the parcel and for the building site at FEMA&apos;s Flood Map Service Center, msc.fema.gov, the official public source. If the building site falls inside a Special Flood Hazard Area, zones beginning A or V, the federal mandatory purchase requirement applies: a federally regulated or federally backed mortgage on a building in the Special Flood Hazard Area must carry flood insurance for the life of the loan, based on the lender&apos;s determination on the Standard Flood Hazard Determination Form. A designation can be challenged through FEMA&apos;s Letter of Map Amendment process. Zones B, C, and X sit outside the Special Flood Hazard Area, and outside the Special Flood Hazard Area is not the same as no flood risk, so treat the map as an insurance question as much as a water question. The county floodplain permits in the zoning section above apply on top of the federal map, not instead of it.
</p>
<p className="mb-10">
                <strong className="text-[#1C1A17]">Agricultural tax status.</strong> A parcel taxed at a low agricultural rate is taxed that way because of what happens on it now, under Idaho Code 63-602K use value taxation with the tests in 63-604. More than five contiguous acres actively devoted to agriculture as part of a bona fide for profit enterprise can qualify. Five acres or less qualifies only with three growing seasons of active devotion plus either 15 percent or more of gross income or $1,000 or more in gross revenue in the immediately preceding year, and annual proof is due April 15 in both Kootenai and Bonner counties for those small parcels, per the county assessors. A seller&apos;s lower tax bill does not transfer to you as a promise, and platted subdivisions that prohibit agricultural use cannot classify. If you are budgeting on the seller&apos;s number, ask the assessor before closing what classification your use will support.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Land Purchase Checklist
</h2>
<div className="my-8 grid md:grid-cols-2 gap-4">
<div className="p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">
                    Before you offer
</h3>
<ul className="space-y-2">
{[
'Price against closed land sales nearby, not the county median alone',
'Pull IDWR well logs for neighboring parcels',
'Ask for any existing site evaluation or septic permit document',
'Confirm which utility serves the parcel',
'Check zoning, setbacks, and floodplain for the district',
'Walk the access road and note who maintains it',
'Search IDWR records for any water right on the parcel',
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
'Complete the health district site evaluation contingency',
'Get the utility construction proposal in writing',
'Read every recorded easement against the building site',
'Confirm a recorded road maintenance agreement, if private road',
'Verify a buildable site fits house, well, drainfield, and replacement area',
'In Bonner County, confirm Building Location and floodplain permit needs',
'Read the title commitment for mineral reservations and confirm the assessor classification for your use',
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
                None of these checks argues against buying land. North Idaho land is often bought exactly for the space and freedom the in-town market cannot offer. The checks simply move the real costs, power, septic, well, access, and permits, from after closing, where they are surprises, to before closing, where they are part of the price negotiation.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
</h2>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
<p className="text-sm mb-10">
                Published October 23, 2026. Land prices are Land.com listing medians checked October 2026: Kootenai County median price per acre $57,500, median list price $879,000, median lot size 15 acres; Bonner County median price per acre $37,063, median list price $745,000, median lot size 17.8 acres. Listing medians are not sale prices and are never averaged with the improved home medians published elsewhere on this site. Well depths, well cost, septic system costs, the $950 Panhandle Health District permit fee, and Kootenai County private road facts are as published in this site&apos;s prairie wells and septic guide, which cites the Idaho Department of Water Resources, the Panhandle Health District, and Kootenai County Code 8.6.705. Power fees and timing are Kootenai Electric Cooperative&apos;s published new construction terms, checked October 2026; no per foot power extension price is stated, because the serving utility prices each parcel in a written proposal. Bonner County permit facts are from Bonner County&apos;s own published guidance, checked October 2026. The due diligence section on water rights, minerals, flood zone, and tax status was added on November 13, 2026, from facts checked November 4, 2026 against IDWR, the Idaho Code, FEMA, and the Kootenai and Bonner county assessors. This guide is general real estate information, not legal, tax, or engineering advice. Verify access, easements, and permit status for a specific parcel with the county, the health district, and the serving utility.
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
                  Land rewards the buyer who checks the parcel, not just the view. If you are looking at acreage in Kootenai or Bonner County, send me the parcel and I will help you line up the site evaluation, the well logs, the power proposal, and the easement read before you are committed. No pressure, no pitch, just an honest conversation.
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
                Data sources: Land.com county land listing insights, Kootenai Electric Cooperative, the Panhandle Health District, the Idaho Department of Water Resources, Kootenai County Code, and Bonner County, as detailed in Sources and Scope above. Market conditions change, so contact Shirin for the most current figures specific to your search.
</p>
</article>
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Price Guide</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">North Idaho Land Listings · Oct 2026</p>
<div className="space-y-3">
{[
                      { range: 'Kootenai County', desc: '$57,500 median per acre · $879,000 median list · 15 acre median lot' },
                      { range: 'Bonner County', desc: '$37,063 median per acre · $745,000 median list · 17.8 acre median lot' },
                      { range: 'Well, prairie', desc: '150 to 400 ft · $8,000 to $15,000 turnkey (site guide)' },
                      { range: 'Septic, standard', desc: '$5,000 to $12,000 plus $950 PHD permit fee (site guide)' },
                      { range: 'Power, KEC entry fees', desc: '$750 engineering (low density) · $840 high density, proposal per parcel' }
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
                    Talk Through a Land Purchase
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
<a href="/areas/kootenai-county" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Kootenai County Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">County overview and market context</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/bonner-county" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Bonner County Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">County overview and market context</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/buying-property-prairie-wells-septic-roads" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Wells, Septic, and Rural Roads</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The detailed Kootenai infrastructure cost guide this article extends</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/how-much-do-homes-cost-rathdrum-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Rathdrum Home Prices 2026</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Prairie growth and new construction context</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/how-much-do-homes-cost-sandpoint-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Sandpoint Home Prices 2026</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Bonner County improved home medians, kept separate from land</p>
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
            Found a Parcel You Like?
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            Send the listing before the deadline pressure starts. The site evaluation, well logs, power proposal, and easement read are quick to start early and expensive to rush late.
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
