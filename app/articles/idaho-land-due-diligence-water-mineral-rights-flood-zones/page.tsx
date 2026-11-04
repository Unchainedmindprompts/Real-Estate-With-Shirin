import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
const articleUrl = 'https://www.realestatewithshirin.com/articles/idaho-land-due-diligence-water-mineral-rights-flood-zones'
const sources = [
  { label: 'Idaho Department of Water Resources, Water Rights Adjudication (checked November 4, 2026): Northern Idaho rights are being inventoried in the Coeur d’Alene Spokane River Basin Adjudication (CSRBA) and the Clark Fork Pend Oreille River Basin Adjudication (CFPRBA)', url: 'https://idwr.idaho.gov/water-rights/adjudication/' },
  { label: 'Idaho Department of Water Resources, Research Portal and Water Rights and Adjudication Search (checked November 4, 2026): search a parcel’s rights by place of use and confirm priority date, source, rate or volume, place of use, and owner of record', url: 'https://research.idwr.idaho.gov/' },
  { label: 'Idaho Department of Water Resources, Domestic Exemption (checked November 4, 2026): Senate Bill 1222, signed February 17, 2026 and effective that day, revised Idaho Code 42-111 and 42-227 for domestic wells', url: 'https://idwr.idaho.gov/water-rights/domestic-exemption/' },
  { label: 'Idaho Legislature, Idaho Code 42-111 as amended by 2025 chapter 129 and 2026 chapter 2 (checked November 4, 2026): domestic purposes means use for homes, camps, campgrounds, and livestock including irrigation of up to one half acre if total use does not exceed 13,000 gallons per day, or any other purpose if total use does not exceed 2.8 acre feet per year; multiple domestic rights may not be combined to serve a single use that would not itself qualify', url: 'https://legislature.idaho.gov/statutesrules/idstat/title42/t42ch1/sect42-111/' },
  { label: 'Idaho Legislature, Idaho Code 42-222(2) to (4) (checked November 4, 2026): a water right is lost and forfeited by five years of failure to apply the water to its beneficial use, forfeited water reverts to the state, the party asserting forfeiture must prove it by clear and convincing evidence, the exceptions in 42-223 apply, and the director may grant one extension of up to five additional years if the application is made before the five year period ends', url: 'https://legislature.idaho.gov/statutesrules/idstat/title42/t42ch2/sect42-222/' },
  { label: 'Idaho Department of Water Resources, Water Right Forms (checked November 4, 2026): the Notice of Change of Water Right Ownership is the form to notify IDWR of a change in ownership of a water right, statutory claim, or adjudication claim', url: 'https://idwr.idaho.gov/about-idwr/forms/water-rights-forms/' },
  { label: 'FEMA Flood Map Service Center (checked November 4, 2026): the official public source for the current Flood Insurance Rate Map panel for a parcel; parcels in a Special Flood Hazard Area, zones beginning A or V, trigger the federal mandatory flood insurance purchase requirement for a federally regulated or federally backed mortgage, and a designation can be challenged through the Letter of Map Amendment process', url: 'https://msc.fema.gov' },
  { label: 'Kootenai County Assessor, Agricultural Exemption, Idaho Code 63-604 (checked November 4, 2026): land must be actively devoted to agriculture as part of a bona fide for profit enterprise; parcels of five acres or less must show active devotion during the last three growing seasons and either 15 percent or more of the owner or lessee annual gross income or $1,000 or more in gross revenues in the immediately preceding year, with annual proof due April 15', url: 'https://www.kcgov.us/881/Agricultural-Exemption' },
  { label: 'Bonner County Assessor, Agricultural Exemption, Idaho Code 63-604 (checked November 4, 2026): the same more than five acres and five acres or less tests, with annual income proof for small parcels due April 15', url: 'https://www.bonnercountyid.gov/Agriculturaldivision' },
  { label: 'Panhandle Health District, Sewage System Permit Application and Installation Guidelines (checked November 4, 2026): a permit from the District is required to construct, alter, or extend an individual sewage disposal system, the installer must be licensed by the District, and installation on the Rathdrum Prairie Aquifer requires a minimum parcel size of five acres, or a parcel created before December 20, 1977, or a location within an approved municipal sewage management area; no fee from this document is published in this guide', url: 'https://panhandlehealthdistrict.org/wp-content/uploads/2022/06/Speculative-Site-Eval-Septic-Permit-Application-Fillable.pdf' },
  { label: 'Kootenai County Code 8.7.302, Sewage Disposal on Parcels Located Over the Rathdrum Prairie Aquifer (checked November 4, 2026): one dwelling equivalent per five acres, with exceptions for parcels established before December 20, 1977 and for parcels served by a municipal or community sewer system', url: 'https://codelibrary.amlegal.com/codes/kootenaicountyid/latest/kootenaicounty_id/0-0-0-13459' },
  { label: 'Real Estate With Shirin, Buying Land in North Idaho: the cost focused companion guide covering cost per acre, perc and site evaluation, well, power, and access, which this due diligence guide extends and does not duplicate', url: 'https://www.realestatewithshirin.com/articles/buying-land-north-idaho-cost-per-acre-perc-power-access' },
  { label: 'Real Estate With Shirin, North Idaho city comparison: the flagship comparison of the five cities, used for consistency on the Kootenai and Bonner County markets this guide covers', url: 'https://www.realestatewithshirin.com/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint' },
]
export const metadata: Metadata = {
title: 'Idaho Land Due Diligence: Water Rights, Mineral Rights, Flood Zones, and the Checks Beyond Cost',
description:
    'Buying Idaho land does not by itself settle the water, the minerals, or the right to build. The separate records to check before closing: the water right in IDWR records with its priority date and use history, the mineral estate in the deed chain and title commitment, the flood zone on the current FEMA map, the agricultural tax status at the county assessor, and the Panhandle Health District septic rules, including the five acre Rathdrum Prairie Aquifer rule.',
alternates: {
canonical: articleUrl,
  },
openGraph: {
title: 'Idaho Land Due Diligence: Water Rights, Mineral Rights, Flood Zones, and the Checks Beyond Cost',
description: 'The legal and records checks beyond cost: water rights and priority, claims versus decrees in North Idaho, the five year forfeiture question, the current domestic well exemption, mineral rights as a title question, FEMA flood maps, agricultural tax status, and septic eligibility over the Rathdrum Prairie Aquifer.',
url: articleUrl,
type: 'article',
publishedTime: '2026-11-04',
authors: ['Shirin Abplanalp'],
  },
}
const faqs = [
  {
    q: 'What should I check before buying land in Idaho?',
    a: 'Check the separate records, not just the price. Search the parcel in the Idaho Department of Water Resources Water Rights and Adjudication Search for any water right, its priority date, source, rate or volume, place of use, and owner of record, and in North Idaho whether it is decreed or still a claim in the Coeur d’Alene Spokane River Basin or Clark Fork Pend Oreille River Basin adjudication. Ask when any irrigation water was last used, because Idaho Code 42-222 sets a five year nonuse forfeiture question. Read the title commitment Schedule B and the deed for mineral reservations or leases and for easements crossing the building site, and confirm the access on the plat is the access the deed conveys. Check the current FEMA Flood Insurance Rate Map panel for the parcel at the Flood Map Service Center. Ask the county assessor about the parcel classification, including any agricultural valuation under Idaho Code 63-604 and 63-602K, and what your own use must do to keep it. And confirm septic eligibility with the Panhandle Health District, starting with the five acre rule for land over the Rathdrum Prairie Aquifer.',
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
  headline: 'Idaho Land Due Diligence: Water Rights, Mineral Rights, Flood Zones, and the Checks Beyond Cost',
  description: 'Buying Idaho land does not by itself settle the water, the minerals, or the right to build. The separate records to check before closing: the water right in IDWR records, the mineral estate in the deed chain and title commitment, the flood zone on the current FEMA map, the agricultural tax status at the county assessor, and Panhandle Health District septic eligibility including the Rathdrum Prairie Aquifer five acre rule.',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-11-04T00:00:00-08:00',
  dateModified: '2026-11-04T00:00:00-08:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'Idaho land due diligence water rights mineral rights flood zones',
    'Do water rights come with land in Idaho',
    'Can you lose a water right in Idaho five years 42-222',
    'Idaho domestic well exemption 42-111 13000 gallons 2.8 acre feet',
    'how to find out if land is in a flood zone in Idaho FEMA',
    'does buying land include mineral rights Idaho title',
    'Rathdrum Prairie Aquifer five acre septic rule Panhandle Health District',
    'Idaho agricultural exemption 63-604 five acres',
  ],
  articleSection: 'Buyer Resources',
  wordCount: 2400,
  about: [
    {
      '@type': 'State',
      name: 'Idaho',
      sameAs: 'https://en.wikipedia.org/wiki/Idaho',
    },
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
  ],
  spatialCoverage: {
    '@type': 'State',
    name: 'Idaho',
  },
  mentions: [
    { '@type': 'City', name: "Coeur d'Alene", sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Post Falls', sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Hayden', sameAs: 'https://en.wikipedia.org/wiki/Hayden,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Rathdrum', sameAs: 'https://en.wikipedia.org/wiki/Rathdrum,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Sandpoint', sameAs: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Priest River', sameAs: 'https://en.wikipedia.org/wiki/Priest_River,_Idaho', containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
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
    { '@type': 'ListItem', position: 3, name: 'Idaho Land Due Diligence', item: articleUrl },
  ],
}
const checkRows = [
  { step: 'IDWR water right search', desc: 'Right number, priority date, source, rate or volume, place of use, and owner of record. In North Idaho, note whether the right is decreed or still a claim in the CSRBA or CFPRBA adjudication.' },
  { step: 'Recent beneficial use', desc: 'The seller’s evidence of when irrigation water was last actually used, plus whether any forfeiture extension under 42-222 was ever filed. A long gap is a question for IDWR or counsel, not a conclusion.' },
  { step: 'Domestic well fit', desc: 'Whether the planned homesite use fits the current 42-111 domestic definition: 13,000 gallons per day with up to one half acre of irrigation, or 2.8 acre feet per year for other purposes.' },
  { step: 'Title commitment and deed', desc: 'Schedule B exceptions and the deed’s own reservation language: mineral reservations or leases, easements crossing the building site, and whether the access on the plat is the access conveyed.' },
  { step: 'Current FEMA map panel', desc: 'The parcel’s Flood Insurance Rate Map panel at msc.fema.gov: Special Flood Hazard Area or not, and an early lender flood determination if a loan is involved.' },
  { step: 'County assessor classification', desc: 'Current classification, whether the parcel holds agricultural valuation under 63-604 and 63-602K, and what your own use must do to keep it, including the small parcel tests at five acres or less and annual proof due April 15 in Kootenai and Bonner counties.' },
  { step: 'Panhandle Health District septic', desc: 'Septic permit eligibility for the parcel. First, for land over the Rathdrum Prairie Aquifer, the five acre, pre December 20, 1977, or municipal sewage management area test.' },
  { step: 'Irrigation district, if any', desc: 'Delivery entitlement for the parcel in the district’s own records, and whether district assessments are current. No rate or entitlement figure is assumed without the district’s record.' },
]
export default function IdahoLandDueDiligencePage() {
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
<span className="text-[#5C5650]">Idaho Land Due Diligence</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Buyer Resources</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">12 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">2026 Guide</span>
</div>
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Idaho Land Due Diligence: Water Rights, Mineral Rights, Flood Zones, and the Checks Beyond Cost
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            In Idaho, buying the land does not by itself settle the water, the minerals, or the right to build on it. Each is a separate record you can check before closing: the water right, if any, in the Idaho Department of Water Resources records, with its priority date and recent use history; the mineral estate in the deed chain and the title commitment exceptions; the flood zone on FEMA’s current map for the parcel; the agricultural tax status at the county assessor, which your own use must keep qualifying for; and the Panhandle Health District septic rules, including the Rathdrum Prairie Aquifer minimum lot size, that decide whether a homesite is permittable at all. The checklist itself, in that order, is the headline.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · November 4, 2026</p>
</div>
</div>
</div>
</section>
<div className="border-t border-[#E8DDD0]" />
<section className="bg-[#1C1A17] py-8">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">First in time</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Water Runs on Priority</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Prior appropriation, IDWR, checked November 4, 2026</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">5 years</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Nonuse Forfeiture Question</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Idaho Code 42-222, checked November 4, 2026</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">13,000 gal/day</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Domestic Use, With Up to 1/2 Acre</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Idaho Code 42-111, current text, checked November 4, 2026</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">5 acres</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Rathdrum Aquifer Septic Minimum</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Panhandle Health District and Kootenai County Code 8.7.302</p>
</div>
</div>
</div>
</section>
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                Short answer: price is only the first check on Idaho land. Our October 23 guide,{' '}<a href="/articles/buying-land-north-idaho-cost-per-acre-perc-power-access" className="text-[#C4842A] hover:underline">Buying Land in North Idaho</a>, covered cost per acre and the site checks at a summary level: the site evaluation for septic, wells, power, and access. This guide covers the other half, the legal and records checks that decide whether the land can be used the way you plan. It reuses none of that guide’s price figures, because due diligence is not a price question. It is a record question, and each record below lives in a different place.
</p>
<p className="mb-10">Keep the three water layers separate as you read. A decreed or claimed water right, an exempt domestic well, and irrigation district delivery are three different things, and a parcel can have any combination of them. A sentence that merges them, such as “the property comes with water,” is exactly what this guide exists to correct. This guide is general information, not legal advice. A question about a specific right, a forfeiture risk, or a mineral reservation belongs with IDWR, the title company, or an Idaho attorney.</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Water Rights Are Separate From the Land Sale, and They Run on Priority
</h2>
<p className="mb-6">
                Idaho water is administered under prior appropriation, stated by the Idaho Department of Water Resources as first in time is first in right: in a shortage, water is distributed first to the oldest priority dates. A right exists only where water was diverted and put to beneficial use. Undeveloped land with no history of use has no established right, and a new use requires an application for permit to IDWR.
</p>
<p className="mb-10">
                The buyer’s check is specific. Search the parcel’s rights by place of use in IDWR’s{' '}<a href="https://research.idwr.idaho.gov/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Water Rights and Adjudication Search</a>, checked November 4, 2026, and confirm the right’s elements rather than relying on a listing’s “water rights included” language: priority date, source, rate or volume, place of use, and owner of record. After closing, a change of ownership should be filed with IDWR so the record matches the new owner. IDWR’s Water Right Forms page, checked November 4, 2026, names the form for that step: the Notice of Change of Water Right Ownership, used to notify IDWR of a change in ownership of a water right, statutory claim, or adjudication claim.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                In North Idaho, a Right May Still Be a Claim, Not a Decree
</h2>
<p className="mb-6">
                Northern Idaho water rights are being inventoried in the Northern Idaho Adjudication. IDWR’s adjudication page, checked November 4, 2026, names the North Idaho phases as the Coeur d’Alene Spokane River Basin Adjudication, called the CSRBA, and the Clark Fork Pend Oreille River Basin Adjudication, called the CFPRBA.
</p>
<p className="mb-10">
                The practical consequence belongs in every North Idaho land conversation: what the seller holds may be a filed claim awaiting a decree rather than a decreed right. The buyer’s check is the claim’s status in IDWR’s records, stated that way. Never describe a claim as a confirmed or decreed right, in a listing conversation or in your own valuation of the parcel.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Five Years of Nonuse Raises the Forfeiture Question
</h2>
<p className="mb-6">
                Under Idaho Code 42-222(2), checked November 4, 2026 on the Idaho Legislature site, all water rights are lost and forfeited by failure for five years to apply the water to the beneficial use it was appropriated for, and forfeited water reverts to the state and is again subject to appropriation.
</p>
<p className="mb-10">
                Do not flatten that rule into an automatic conclusion. The same section places the burden on the party asserting forfeiture to prove it by clear and convincing evidence, the exceptions in Idaho Code 42-223 apply, and under 42-222(3) and (4) the director may grant one extension of up to five additional years if the application is made before the five year period ends. So the buyer wording the facts support is a question, not a verdict: ask when the parcel’s irrigation water was last actually used, ask whether any extension was ever filed, and treat a long gap as a question to resolve with IDWR or counsel before closing, not as proof the right is gone. Forfeiture is a legal determination, not a buyer’s conclusion.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Domestic Well Exemption: Use Only the Current Text
</h2>
<p className="mb-6">
                For a homesite on a well, the relevant definition is Idaho Code 42-111, as amended by 2025 chapter 129 and again by 2026 chapter 2, Senate Bill 1222, signed February 17, 2026 and effective that day, per IDWR’s Domestic Exemption page, checked November 4, 2026. In the current text, “domestic purposes” means use for homes, organization camps, public campgrounds, and livestock, including irrigation of up to one half acre, if total use does not exceed 13,000 gallons per day, or any other purpose if total use does not exceed a diversion volume of 2.8 acre feet per year. Under 42-227, drilling and using a well for domestic purposes so defined is excepted from the permit requirement, and the right is acquired by withdrawal and use. Multiple domestic rights may not be combined to serve a single use that would not itself qualify, under 42-111(2).
</p>
<p className="mb-10">
                A warning belongs here because older explainers are still circulating. Secondary sources written before 2026 may quote the old second prong, 0.04 cubic feet per second and 2,500 gallons per day. Senate Bill 1222 replaced that prong with the 2.8 acre feet per year limit. If you see the 2,500 gallon or 0.04 figure on an explainer page, it is stale. The Legislature’s current text of 42-111 and IDWR’s Domestic Exemption page govern.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Mineral Rights Are a Separate Estate, and the Check Is the Title Work
</h2>
<p className="mb-6">
                The mineral estate can be severed from the surface estate by a recorded deed or reservation, after which a surface deed conveys only what the grantor still owns. Mineral interests are transferred by their own recorded mineral deeds. There is no single Idaho statute that answers “do I own the minerals?” for a given parcel. It is a records question.
</p>
<p className="mb-10">
                So the checklist is the whole verified content on minerals, and this guide states no Idaho mineral rights rule beyond it. Read the title commitment’s Schedule B exceptions for mineral reservations and leases. Read the deed’s reservation language itself. And ask the title company in writing whether minerals are included, excepted, or unsearched. Do not assume a standard owner’s title policy covers minerals, because policies commonly except them, and the commitment language on your own parcel governs.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Flood Zone Is a Map Check With a Lender Consequence
</h2>
<p className="mb-6">
                FEMA’s Flood Map Service Center at msc.fema.gov, checked November 4, 2026, is the official public source for the current Flood Insurance Rate Map panel for a parcel. Check the map for the land and the building site, not just the address.
</p>
<p className="mb-10">
                Parcels inside a Special Flood Hazard Area, zones beginning A or V, the 1 percent annual chance floodplain, trigger the federal mandatory purchase requirement: a federally regulated or federally backed mortgage on a building in the Special Flood Hazard Area must carry flood insurance for the life of the loan. The lender makes its own determination on the Standard Flood Hazard Determination Form, and a designation can be challenged through FEMA’s Letter of Map Amendment process, called a LOMA. Ask the lender early. A flood determination that lands at closing is a cost surprise, not a formality. Zones B, C, and X sit outside the Special Flood Hazard Area, and this guide does not equate outside the Special Flood Hazard Area with no flood risk, because they are not the same statement.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Agricultural Tax Status Belongs to the Use, Not the Seller’s Habits
</h2>
<p className="mb-6">
                Land actively devoted to agriculture is taxed on its actual use value, with the speculative portion of value exempt, under Idaho Code 63-602K, and the definition and tests sit in Idaho Code 63-604, with valuation at 63-205C. The straightforward route under 63-604, as published by the Kootenai County and Bonner County assessors and checked November 4, 2026, is more than five contiguous acres, including the homesite, actively devoted to agriculture: producing field crops or nursery stock, grazing livestock to be sold as part of a for profit enterprise, by the owner or a bona fide lessee, or land in a cropland retirement or rotation program.
</p>
<p className="mb-6">
                Parcels of five acres or less are presumed nonagricultural unless the owner shows the statutory tests: active devotion during the last three growing seasons, and either production of 15 percent or more of the owner’s or lessee’s annual gross income, or $1,000 or more in gross revenues in the immediately preceding year. Both the Kootenai County and Bonner County assessor pages state that the landowner must provide proof of those minimum incomes annually to remain in qualifying status, due April 15. Ask the assessor in the county where the parcel sits about the initial application for the year sought, because that filing step is made at the county assessor’s office and the buyer should confirm its current wording there. Land in a platted subdivision whose restrictions prohibit agricultural use cannot be classified as agricultural.
</p>
<p className="mb-10">
                The buyer consequence is direct: the seller’s lower agricultural tax bill does not transfer as a promise. If your use stops qualifying, the land is valued at market. Ask the assessor what the parcel’s classification is and what it takes to keep it, before you price the land on the seller’s tax bill.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Septic in North Idaho, and the Rathdrum Prairie Aquifer Lot Size Rule
</h2>
<p className="mb-6">
                Any person who constructs, alters, or extends an individual sewage disposal system must hold a valid permit from the Panhandle Health District, and the installer must be licensed by the District, per the District’s Sewage System Permit Application and Installation Guidelines, checked November 4, 2026. The District covers Boundary, Bonner, Kootenai, Benewah, and Shoshone counties. This guide publishes no fee from that document, because fees change and the fee schedule on file is dated.
</p>
<p className="mb-10">
                The same guidelines state the threshold check for prairie land: installation of a septic system on the Rathdrum Prairie Aquifer requires a minimum parcel size of five acres, or the parcel must have been created before December 20, 1977, or lie within an approved municipal sewage management area. Kootenai County Code 8.7.302, checked November 4, 2026, carries the same five acre density rule for parcels over the aquifer, with its own exceptions. For a North Idaho land buyer this is a threshold check, not a detail: a small parcel over the aquifer without sewer access may have no lawful septic route, and that answer belongs before closing, not after.
</p>
<div className="my-8 p-6 bg-[#1C1A17] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Two More Layers, Kept Separate on Purpose
</h3>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Irrigation district delivery:</span> where a parcel sits inside an irrigation district or a pressurized irrigation system, delivery entitlement and district assessments follow the district’s own records and rolls, under Idaho Code Title 43. Confirm with the named district whether the parcel has delivery entitlement and whether assessments are current. This guide publishes no district rate or parcel entitlement figure, because none was verified for a specific parcel.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed">
                    <span className="text-[#F5EFE6] font-semibold">Access and easements:</span> legal access, recorded easements, and encroachments are shown by the recorded plat, the deed chain, and the title commitment. Confirm the access shown on the plat is the access the deed actually conveys, and surface any easement that crosses the building site before you price the parcel. The October 23 land guide covered access at a summary level; this guide adds only that records formulation.
</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Buyer Checklist the Facts Support
</h2>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-2 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Check, in order</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">What to confirm</span>
</div>
{checkRows.map((row) => (
<div key={row.step} className="grid grid-cols-2 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17] pr-3">{row.step}</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{row.desc}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">Checklist built November 4, 2026 from IDWR, Idaho Code 42-111, 42-222, and 63-604, FEMA, the Panhandle Health District, Kootenai County Code 8.7.302, and the Kootenai and Bonner County assessors. This guide carries no land price, water right value, or flood premium figure, because no primary source in this check publishes one.</p>
</div>
<p className="mb-10">
                None of these checks argues against buying land. They move questions that are expensive to answer after closing, about water, minerals, flood maps, tax classification, and septic eligibility, to before closing, where the answers can still shape the offer, the contingencies, or the decision to walk away.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
</h2>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
<p className="text-sm mb-10">
                Published November 4, 2026. Every rule in this guide was checked November 4, 2026 against the primary sources in Sources above: IDWR and the Idaho Legislature for water, FEMA for flood maps, the Kootenai and Bonner County assessors for agricultural status, and the Panhandle Health District and Kootenai County Code for septic over the Rathdrum Prairie Aquifer. Three deliberate choices are worth naming. This guide publishes no Panhandle Health District fee, because the fee schedule in the guidelines document on file is dated and fees change. It publishes no land price figure of its own, because the October 23 cost guide carries the site’s land prices, date stamped there. And it states no Idaho mineral rights rule beyond the title checklist, because mineral ownership on a given parcel is a records question, not a statute answer. This guide is general real estate information, not legal, tax, or engineering advice. Verify a specific parcel’s water status with IDWR, its title questions with the title company, and its septic eligibility with the Panhandle Health District.
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
                  Land rewards the buyer who checks the records, not just the view and the price per acre. If you are looking at a parcel in Kootenai or Bonner County, send me the listing early. We will line up the IDWR search, the title read, the FEMA map check, the assessor question, and the health district septic check while there is still time to use what they say. No pressure, no pitch, just an honest conversation.
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
                Data sources: IDWR, Idaho Code 42-111, 42-222, and 63-604, FEMA, the Panhandle Health District, Kootenai County Code 8.7.302, and the Kootenai and Bonner County assessors, as detailed in Sources and Scope above. Statutes, maps, and district records change, so confirm the current records for the specific parcel before you buy.
</p>
</article>
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Due Diligence Guide</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">The records checks · Before you close</p>
<div className="space-y-3">
{[
                      { range: 'Water right', desc: 'Priority date, source, place of use, and owner in IDWR records; decreed or still a claim in North Idaho' },
                      { range: 'Domestic well', desc: '13,000 gal/day with up to 1/2 acre, or 2.8 acre feet per year, current 42-111 text' },
                      { range: 'Minerals', desc: 'Schedule B and the deed itself; ask the title company in writing' },
                      { range: 'Flood zone', desc: 'Current FEMA map panel for the parcel; lender determination early if a loan is involved' },
                      { range: 'Septic over the aquifer', desc: 'Five acres, pre December 20, 1977, or approved municipal sewage management area' }
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
<a href="/articles/buying-land-north-idaho-cost-per-acre-perc-power-access" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Buying Land in North Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Cost per acre, perc, power, and access, the cost focused companion guide</p>
</a>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho City Comparison</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">All five cities, head to head, the flagship comparison</p>
</a>
</div>
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
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The detailed Kootenai infrastructure guide</p>
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
            Send the listing before the deadline pressure starts. The IDWR search, the title read, the flood map, the assessor question, and the septic check are quick to start early and expensive to rush late.
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
