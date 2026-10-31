import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
const articleUrl = 'https://www.realestatewithshirin.com/articles/idaho-homestead-exemption-two-exemptions-explained'
const sources = [
  { label: 'Idaho Legislature, Idaho Code 55-1003 (checked October 31, 2026): a homestead may consist of lands regardless of area, but the homestead exemption amount shall not exceed $175,000', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title55/T55CH10/SECT55-1003' },
  { label: 'Idaho Legislature, Idaho Code 55-1001 (checked October 31, 2026): homestead means the dwelling house or mobile home in which the owner resides or intends to reside, and net value means market value less all liens and encumbrances', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title55/T55CH10/SECT55-1001' },
  { label: 'Idaho Legislature, Idaho Code 55-1002, as amended in 2025 (chapter 235) (checked October 31, 2026): each spouse may separately claim a homestead exemption in the amount specified in section 55-1003, Idaho Code', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title55/T55CH10/SECT55-1002/' },
  { label: 'Idaho Legislature, Idaho Code 55-1004 (checked October 31, 2026): property is automatically protected from and after the time it is occupied as a principal residence; a declaration of homestead filed with the county recorder is required only for unimproved or not yet occupied land', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title55/T55CH10/SECT55-1004' },
  { label: 'Idaho Legislature, Idaho Code 55-1005 (checked October 31, 2026): the homestead is subject to execution or forced sale for the four judgment categories listed in that section, including mortgages, deeds of trust, and other consensual liens', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title55/T55CH10/SECT55-1005' },
  { label: 'Idaho Legislature, Idaho Code 55-1006 (checked October 31, 2026): a homestead is presumed abandoned if the owner vacates for a continuous period of at least six months, and a declaration of nonabandonment may be filed with the county recorder', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title55/T55CH10/SECT55-1006' },
  { label: 'Idaho Legislature, Idaho Code 55-1008 (checked October 31, 2026): proceeds of a voluntary sale made in good faith to acquire a new homestead, and insurance proceeds held to restore or replace homestead property, are exempt up to the 55-1003 amount for one year from receipt', url: 'https://legislature.idaho.gov/statutesrules/idstat/title55/t55ch10/sect55-1008/' },
  { label: 'Idaho Legislature, Idaho Code 63-602G, current text (checked October 31, 2026): the first $125,000 of the market value for assessment purposes of the homestead, or 50 percent of that market value, whichever is the lesser, shall be exempt from property taxation; an owner need make application only once if the conditions in subsection (4) are met; under subsection (5) the full amount is in effect as of January 1 of the tax year in which a complete application is submitted and approved, the exemption shall not be prorated, and to receive it for the current tax year the homeowner shall apply on or before the end of the county normal business hours on the last business day of the year', url: 'https://legislature.idaho.gov/statutesrules/idstat/title63/t63ch6/sect63-602g/' },
  { label: 'Idaho Legislature, House Bill 843 (2026) status page (checked October 31, 2026): signed by the Governor on March 31, 2026, Session Law Chapter 236, effective retroactive to January 1, 2026; described as amending existing law to eliminate proration of the homestead property tax exemption', url: 'https://legislature.idaho.gov/sessioninfo/2026/legislation/H0843/' },
  { label: 'Idaho State Tax Commission, Homeowner\'s Exemption page (checked October 31, 2026): if you own and occupy a home, including a manufactured home, as your primary residence, you could qualify for a homeowner\'s exemption for that home and up to one acre of land; you apply with your county assessor\'s office; once approved it lasts until ownership changes or you no longer use the home as your primary residence; it will exempt 50 percent of the value of your home and up to one acre of land, maximum $125,000', url: 'https://tax.idaho.gov/taxes/property/homeowners/exemption/' },
  { label: 'Kootenai County Assessor, Homeowner\'s Exemption handout: effective January 1, 2021, H.B. 562 removed the former annual April 15 application deadline; there is no deadline to file in that handout\'s terms, the office encourages applying as soon as possible, and the exemption is effective the year the application is received and approved', url: 'https://assets.fastexpert.com/images/marketing_material/58899_actual_61d3a5b542a39.pdf' },
  { label: 'Idaho State Tax Commission, March 5, 2026 press release on the Property Tax Reduction program: the separate program reduces property taxes on an eligible homeowner\'s primary Idaho residence and up to one acre of land by as much as $1,500, applications are due by Wednesday, April 15, and applicants must apply every year', url: 'https://tax.idaho.gov/pressrelease/want-your-property-taxes-reduced-see-if-you-qualify/' },
  { label: 'Real Estate With Shirin, North Idaho property taxes county comparison: the site\'s published explanation of the $125,000 homeowner\'s exemption cap in effect since 2021 and the separate Property Tax Reduction program at $250 to $1,500, used for consistency with this guide', url: 'https://www.realestatewithshirin.com/articles/north-idaho-property-taxes-county-comparison' },
]
export const metadata: Metadata = {
title: "Idaho's Homestead Exemption, Explained: Two Different Exemptions",
description:
    "Idaho uses one name for two unrelated protections. The creditor homestead under Idaho Code 55-1003 protects up to $175,000 of equity and does not lower property tax. The homeowner's exemption under 63-602G exempts 50 percent of assessed value, capped at $125,000, and does not protect against creditors.",
alternates: {
canonical: articleUrl,
  },
openGraph: {
title: "Idaho's Homestead Exemption, Explained: Two Different Exemptions",
description: "Two exemptions, one name: $175,000 of equity protected from most creditors under Title 55, and 50 percent of assessed value up to $125,000 exempt from property tax under 63-602G. Who qualifies, how to claim each, and which deadline is real.",
url: articleUrl,
type: 'article',
publishedTime: '2026-10-31',
authors: ['Shirin Abplanalp'],
  },
}
const faqs = [
  {
    q: 'How Does the Homestead Exemption Work in Idaho?',
    a: 'There are two different exemptions, and they do unrelated jobs. The creditor protection homestead, in Idaho Code Title 55, Chapter 10, protects up to $175,000 of equity in the home you live in, or intend to live in, from attachment, execution, or forced sale for most debts, under section 55-1003. It does not reduce your property tax bill. The homeowner\'s exemption, in Idaho Code 63-602G, exempts 50 percent of the assessed value of your home and up to one acre of land, capped at $125,000, from property taxation. It does not protect your home from any creditor. Always ask which exemption a source is describing before you use its dollar figure.',
  },
  {
    q: 'Do I have to file for the homestead exemption in Idaho?',
    a: 'It depends on which exemption you mean. For creditor protection, no. Under Idaho Code 55-1004, property is automatically protected from and after the time it is occupied as a principal residence by the owner. A declaration of homestead, filed for record with the county recorder, is required only for unimproved or not yet occupied land you intend to make your homestead. For the homeowner\'s property tax exemption, yes. You apply once with your county assessor\'s office, on the assessor\'s form, under Idaho Code 63-602G. A new owner must file a new application, because the exemption does not transfer from the seller.',
  },
  {
    q: 'How much is the homestead exemption in Idaho?',
    a: 'There are two amounts, because there are two exemptions. Against creditors, the cap in Idaho Code 55-1003 is $175,000, and that figure measures equity: market value less all liens and encumbrances, under the definition of net value in 55-1001. Section 55-1002, as amended in 2025, says each spouse may separately claim a homestead exemption in the amount specified in 55-1003. Against property tax, the homeowner\'s exemption in 63-602G is the lesser of 50 percent of the home\'s market value for assessment purposes or $125,000, covering the home and up to one acre of land. Never use one number for the other job.',
  },
  {
    q: 'What is the deadline for the homeowner\'s exemption in Idaho?',
    a: 'There is no April 15 deadline for the homeowner\'s exemption. Kootenai County\'s assessor handout states that H.B. 562, effective January 1, 2021, removed the former annual April 15 application deadline. Under the current text of Idaho Code 63-602G, subsection (5), checked October 31, 2026, the full exemption is in effect as of January 1 of the tax year in which a complete application is submitted and approved, it is not prorated, and to receive it for the current tax year you must apply on or before the end of the county\'s normal business hours on the last business day of the year. Approved applications received after the second Monday in July are granted as tax cancellations. April 15 is the annual application deadline for the separate Property Tax Reduction program, not for this exemption. Apply as soon as you occupy the home.',
  },
  {
    q: 'Does the homestead exemption protect my home from my mortgage lender?',
    a: 'No. The creditor protection homestead does not block a consensual lien. Idaho Code 55-1005 lists the judgments the homestead is still subject to, and item (3) is debts secured by mortgages, deeds of trust, or other consensual liens executed and acknowledged by both spouses, or by an unmarried claimant. The same section also leaves the homestead subject to liens that predate it, mechanic\'s, laborer\'s, or vendor\'s liens, and consensual liens executed and recorded before the homestead became effective. In plain terms, it stops most unsecured creditors. It never stops your mortgage lender.',
  },
]
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: "Idaho's Homestead Exemption, Explained: Two Different Exemptions",
  description: "Idaho has two unrelated homestead exemptions: creditor protection of up to $175,000 of equity under Idaho Code 55-1003, with no property tax benefit, and the homeowner's property tax exemption under 63-602G, 50 percent of assessed value capped at $125,000 on the home and up to one acre, with no creditor protection.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-10-31T00:00:00-07:00',
  dateModified: '2026-10-31T00:00:00-07:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'Idaho homestead exemption',
    'how does the homestead exemption work in Idaho',
    'homeowner exemption Idaho 125000',
    'Idaho Code 55-1003',
    'Idaho Code 63-602G',
    'homestead exemption deadline Idaho',
    'property tax exemption Coeur d\'Alene',
    'property tax exemption Post Falls Idaho',
  ],
  articleSection: 'Buyer Resources',
  wordCount: 2300,
  about: [
    {
      '@type': 'State',
      name: 'Idaho',
      sameAs: 'https://en.wikipedia.org/wiki/Idaho',
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
    { '@type': 'AdministrativeArea', name: 'Kootenai County', sameAs: 'https://en.wikipedia.org/wiki/Kootenai_County,_Idaho', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'AdministrativeArea', name: 'Bonner County', sameAs: 'https://en.wikipedia.org/wiki/Bonner_County,_Idaho', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'Organization', name: 'Idaho State Tax Commission', sameAs: 'https://en.wikipedia.org/wiki/Idaho_State_Tax_Commission' },
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
    { '@type': 'ListItem', position: 3, name: "Idaho's Homestead Exemption, Explained: Two Different Exemptions", item: articleUrl },
  ],
}
const compareRows = [
  { point: 'What it does', creditor: 'Protects equity in your home from most creditors and forced sale', tax: 'Removes part of your home value from property taxation' },
  { point: 'Where it lives in Idaho Code', creditor: 'Title 55, Chapter 10, cap in section 55-1003', tax: 'Section 63-602G, the homeowner\'s exemption' },
  { point: 'Amount, with its basis in the same sentence', creditor: '$175,000 of equity (market value less all liens, 55-1001)', tax: 'Lesser of 50 percent of assessed value or $125,000, on the home and up to one acre' },
  { point: 'Acreage limit', creditor: 'None. A homestead may consist of lands regardless of area, 55-1003', tax: 'Up to one acre of land. Land beyond one acre stays fully taxable' },
  { point: 'How you get it', creditor: 'Automatic once you occupy the property as your principal residence, 55-1004', tax: 'Apply once with your county assessor, 63-602G' },
  { point: 'What it never does', creditor: 'It does not reduce your property tax bill by one dollar, and it does not stop your mortgage lender', tax: 'It does not protect your home or equity from any creditor' },
]
const taxBars = [
  { label: 'Assessed at $200,000: 50 percent is $100,000', display: 'Exemption $100,000, tax on $100,000', width: '40' },
  { label: 'Assessed at $250,000: 50 percent is $125,000', display: 'Exemption $125,000, tax on $125,000', width: '50' },
  { label: 'Assessed at $500,000: cap applies', display: 'Exemption $125,000, tax on $375,000', width: '100' },
]
export default function IdahoHomesteadExemptionPage() {
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
<span className="text-[#5C5650]">Idaho Homestead Exemption</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Buyer Resources</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">12 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">2026 Guide</span>
</div>
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Idaho&apos;s Homestead Exemption, Explained: Two Different Exemptions
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            Idaho has two unrelated protections with the same name. One protects up to $175,000 of equity from most creditors and does not lower your property tax. The other exempts 50 percent of assessed value, capped at $125,000, from property tax and does not protect you from any creditor.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · October 31, 2026</p>
</div>
</div>
</div>
</section>
<div className="border-t border-[#E8DDD0]" />
<section className="bg-[#1C1A17] py-8">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$175,000 of equity</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Creditor Protection Cap</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Idaho Code 55-1003, no acreage limit</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">50% up to $125,000</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Homeowner&apos;s Tax Exemption</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Idaho Code 63-602G, home and up to one acre</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">Automatic</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Creditor Side, If You Live There</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">From occupancy as a principal residence, 55-1004</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">Apply once</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Tax Side, With the Assessor</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">No April 15 deadline for this exemption</p>
</div>
</div>
</div>
</section>
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                Short answer: Idaho&apos;s homestead exemption is two exemptions, not one, and mixing them up is the most common error in guides on this topic. The first is creditor protection under Idaho Code Title 55, Chapter 10: up to $175,000 of equity in the home you live in, or intend to live in, is exempt from attachment, execution, or forced sale for most debts, under section 55-1003, checked October 31, 2026 on the Idaho Legislature&apos;s site. It does not reduce your property tax bill by one dollar. The second is the homeowner&apos;s exemption under Idaho Code 63-602G: 50 percent of the assessed value of your home and up to one acre of land, capped at $125,000, is exempt from property taxation. It does not protect your home from any creditor. Every section of this guide names which exemption it is describing, in the same sentence as its dollar figure.
</p>
<p className="mb-10">This guide sits alongside{' '}<a href="/articles/north-idaho-property-taxes-county-comparison" className="text-[#C4842A] hover:underline">the North Idaho property taxes county comparison</a>{' '}and{' '}<a href="/articles/homeowners-insurance-idaho-cost-wildfire-flood-coverage" className="text-[#C4842A] hover:underline">the homeowners insurance guide</a>, because all three answer cost and protection questions buyers ask before closing. This one covers the two legal exemptions only: what each one does, who qualifies, how to claim it, and which deadline is real.</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Two Exemptions, Side by Side
</h2>
<p className="mb-6">
                Read the table by row, and notice that almost nothing carries across. The amounts measure different things, the acreage rules differ, and the way you get each one differs. A reader who takes the tax number into a creditor dispute, or the creditor number to the assessor&apos;s office, has been misled, so this guide never prints either figure without its job attached.
</p>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-3 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Point to compare</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Creditor protection homestead</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Homeowner&apos;s tax exemption</span>
</div>
{compareRows.map((row) => (
<div key={row.point} className="grid grid-cols-3 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17] pr-3">{row.point}</span>
<span className="font-dm-sans text-sm text-[#5C5650] pr-3">{row.creditor}</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{row.tax}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">Each rule checked October 31, 2026 against Idaho Code Title 55, Chapter 10, Idaho Code 63-602G, and the Idaho State Tax Commission homeowner&apos;s exemption page, as cited in the Sources section below.</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Exemption One: Creditor Protection, Up to $175,000 of Equity
</h2>
<p className="mb-6">
                Start with what the $175,000 figure measures, because it is not $175,000 of home price. Section 55-1003 says a homestead may consist of lands, as described in section 55-1001, regardless of area, but the homestead exemption amount shall not exceed $175,000. Section 55-1001 defines net value as market value less all liens and encumbrances, so the cap applies to your equity: what your home is worth minus what you owe against it. A home worth $600,000 with a $500,000 mortgage has $100,000 of equity on that definition, which sits inside the cap. The same home with a $300,000 mortgage has $300,000 of equity, and only the first $175,000 of it is protected by this exemption.
</p>
<p className="mb-6">
                What counts as a homestead is also defined in 55-1001: the dwelling house or mobile home in which the owner resides or intends to reside, with appurtenant buildings, and the land it sits on and is surrounded by, or unimproved land owned with the intention of placing a home there and residing there. A mobile home qualifies whether or not it is permanently affixed and whether or not you own the lot under it. The property must be actually intended or used as your principal home. Note the acreage point, because it is the opposite of the tax side: this creditor exemption has no acreage limit.
</p>
<p className="mb-6">
                One point in older summaries is now out of date, and it is worth stating plainly with its date. Section 55-1002, as amended in 2025 by chapter 235 and checked October 31, 2026 on the Legislature&apos;s site, now reads in part: each spouse may separately claim a homestead exemption in the amount specified in section 55-1003. Older copies of the statute, and secondary summaries built on them, carried a proviso that spouses could not claim separately in a way that increased the protected amount for the marital community. That proviso is not in the current text. How a separate claim by each spouse applies to a specific couple, property, and debt is a legal question for an Idaho attorney, and this guide states the current statute text rather than a predicted outcome.
</p>
<p className="mb-10">
                If you live in the home, you do not file anything to get this protection. Section 55-1004 says property is automatically protected from and after the time it is occupied as a principal residence by the owner. A declaration of homestead, filed for record with the county recorder where the land sits, is required only for unimproved or not yet occupied land. That declaration must state that you reside there or intend to reside there, give a legal description, and give an estimate of actual cash value, and it must be acknowledged like a grant of real property. If you already claim a homestead on another parcel where you presently reside, switching requires a declaration of abandonment of the old one as well.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What Creditor Protection Does Not Block
</h2>
<p className="mb-6">
                Section 55-1005 lists the judgments the homestead is still subject to, and this guide lists only those four categories, because generic national lists add exceptions that are not in this Idaho section. The homestead is subject to execution or forced sale for judgments obtained: first, before the homestead was in effect, where they constitute liens on the premises, or where an attachment was levied before it became effective; second, on debts secured by a mechanic&apos;s, laborer&apos;s, or vendor&apos;s lien; third, on debts secured by mortgages, deeds of trust, or other consensual liens executed and acknowledged by both spouses, or by an unmarried claimant; and fourth, on consensual liens executed and recorded before the homestead became effective.
</p>
<p className="mb-6">
                In plain terms: this exemption stops most unsecured creditors. It never stops your mortgage lender, it does not defeat a contractor&apos;s lien covered by the second category, and it does not erase a lien that was already in place. If a creditor question is live in your life, that is a reason to talk to an Idaho attorney before you rely on any summary, including this one.
</p>
<p className="mb-10">
                Two timing rules complete this side. Under section 55-1008, proceeds of a voluntary sale made in good faith to acquire a new homestead, and insurance proceeds held to restore or replace homestead property, are exempt up to the $175,000 amount in 55-1003 for one year from receipt, and so is the new homestead bought with them. Some secondary sources say six months; the statute says one year, and the statute is what this guide follows. Under section 55-1006, a homestead is presumed abandoned if you vacate for a continuous period of at least six months. If you will be absent longer, do not intend to abandon, and have no other principal residence, you may file a declaration of nonabandonment with the county recorder stating where you will be, the estimated duration, and the reason.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Exemption Two: The Homeowner&apos;s Property Tax Exemption, 50 Percent Up to $125,000
</h2>
<p className="mb-6">
                Now switch jobs entirely. Section 63-602G says that for each tax year, the first $125,000 of the market value for assessment purposes of the homestead, or 50 percent of that market value, whichever is the lesser, shall be exempt from property taxation. The <a href="https://tax.idaho.gov/taxes/property/homeowners/exemption/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Idaho State Tax Commission</a> summarizes the same rule on its homeowner&apos;s exemption page, checked October 31, 2026: it will exempt 50 percent of the value of your home and up to one acre of land, maximum $125,000. The $125,000 cap has held from 2021 through 2025 in the Commission&apos;s history table, and the current statute text keeps $125,000 and 50 percent.
</p>
<div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  How the Lesser Of 50 Percent Or $125,000 Works
</h3>
<div className="space-y-4">
{taxBars.map((bar) => (
<div key={bar.label}>
<div className="flex justify-between mb-1">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{bar.label}</span>
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{bar.display}</span>
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
<p className="font-dm-sans text-xs text-[#9A9590] mt-4">Arithmetic illustrations only, computed from the 63-602G formula. Assessed value here means the assessor&apos;s market value for assessment purposes, not a sale price and not a median from any market report. Because the formula takes the lesser figure, any home assessed above $250,000 receives the full $125,000 exemption, so on a home assessed at $500,000, tax is figured on $375,000 of value. No dollar tax saving is computed here, because the saving depends on the levy rate for your specific taxing district, which this guide does not state.</p>
</div>
<p className="mb-6">
                Who qualifies is narrow and specific. Under 63-602G, the homestead must be owner-occupied and used as the owner&apos;s primary dwelling place. The Tax Commission adds that manufactured homes are included. The exemption covers the home and up to one acre of land only, so land beyond one acre stays fully taxable, which is the opposite acreage rule from the creditor side. You may claim only one homestead, and the statute provides for investigation and recovery, with penalties, of improperly claimed or duplicate exemptions. Trust, LLC, and partnership owners should expect to prove their interest to the assessor under section 63-703(4), as the statute provides.
</p>
<p className="mb-10">
                How you claim it is the mirror image of the creditor side: this one is not automatic for a new owner. You apply with your county assessor&apos;s office, on the assessor&apos;s form, providing your full name, date of birth, current and most recent previous address, and, if applicable, your Idaho driver&apos;s license or state ID number. Section 63-602G says an owner need make application only once, so long as they received it the prior year, still occupy the same homestead, and it remains their primary dwelling. The Tax Commission states the same duration in plain terms: once approved, the exemption lasts until the home&apos;s ownership changes or you no longer use it as your primary residence. A buyer therefore files a fresh application after closing. The seller&apos;s exemption does not transfer.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Deadline Question, Answered Carefully
</h2>
<p className="mb-6">
                This is the point where most older articles go wrong, so here is the sequence with its dates. Before 2021, this exemption carried an annual April 15 application deadline. The Kootenai County Assessor&apos;s homeowner&apos;s exemption handout states that H.B. 562, effective January 1, 2021, removed that former April 15 deadline, that there is no deadline to file in the handout&apos;s terms, and that applicants are encouraged to apply as soon as possible, with the exemption effective for the year the application is received and approved. Any source that still tells you to apply by April 15 for the homeowner&apos;s exemption is repeating pre-2021 law. Some county FAQ pages still do exactly that, alongside the old $100,000 cap, which is another sign the page is stale.
</p>
<p className="mb-6">
                Current law adds a year end cutoff for the current tax year, and it comes from a 2026 change this guide verified at build time. House Bill 843 was signed by the Governor on March 31, 2026, as Session Law Chapter 236, effective retroactive to January 1, 2026, to eliminate proration of this exemption. The current text of 63-602G, subsection (5), checked October 31, 2026, now provides that the full amount of the exemption is in effect as of January 1 of the tax year in which a complete application is submitted and approved, that the exemption shall not be prorated, and that to receive it for the current tax year, the homeowner shall make application on or before the end of the county&apos;s normal business hours on the last business day of the year. Approved applications received after the second Monday in July are granted as tax cancellations. So the practical rule is simple: apply as soon as you occupy the home, and do not let the last business day of the year pass if you want the exemption for that tax year.
</p>
<p className="mb-10">
                April 15 is not meaningless. It is simply attached to a different program. The separate Property Tax Reduction program, often called the circuit breaker, reduces property taxes by $250 to $1,500 for income and category qualified homeowners, requires a current homeowner&apos;s exemption first, and requires applying every year between January 1 and April 15 with the county assessor. The Tax Commission confirmed that annual April 15 cycle in its March 5, 2026 release. Keep the two programs in separate mental folders: the homeowner&apos;s exemption is filed once, with a last business day of the year cutoff for the current tax year; Property Tax Reduction is filed every year, by April 15. This site&apos;s{' '}<a href="/articles/north-idaho-property-taxes-county-comparison" className="text-[#C4842A] hover:underline">property tax comparison</a>{' '}covers that second program in more detail.
</p>
<div className="my-8 p-6 bg-[#1C1A17] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Before You Use Either Number, Ask Three Questions
</h3>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Creditors or taxes:</span> is the $175,000 figure or the $125,000 figure in front of you, and does the sentence using it name the job it does?
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Equity or assessed value:</span> the creditor cap measures equity, market value minus liens. The tax cap measures assessed value, and only on the home plus up to one acre.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed">
                    <span className="text-[#F5EFE6] font-semibold">Filed or automatic:</span> creditor protection follows occupancy with no filing. The tax exemption needs one application with your county assessor after you buy, and a new owner always files a new one.
</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
</h2>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
<p className="text-sm mb-10">
                Published October 31, 2026. Every statute and program rule in this guide was checked October 31, 2026 against the Idaho Legislature&apos;s published text of Idaho Code Title 55, Chapter 10 and section 63-602G, the Legislature&apos;s House Bill 843 (2026) status page, the Idaho State Tax Commission homeowner&apos;s exemption page and its March 5, 2026 Property Tax Reduction release, and the Kootenai County Assessor homeowner&apos;s exemption handout. Two points in this guide update older secondary summaries on purpose, each from the primary text: section 55-1002 as amended in 2025 states that each spouse may separately claim the creditor exemption, and section 63-602G as amended in 2026 states that the tax exemption is not prorated and sets the last business day of the year as the cutoff to receive it for the current tax year. The assessed value examples are arithmetic illustrations of the statutory formula, not valuations of any home, and no dollar tax saving is claimed because no levy rate is stated. This guide is general information about Idaho&apos;s two homestead exemptions, not legal or tax advice. Creditor questions, bankruptcy questions, and title questions belong with an Idaho attorney, and tax filing questions belong with your county assessor or a tax professional.
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
                  The question I hear most from buyers is simple: did the seller&apos;s exemption transfer to me? On the tax side, it did not. Every North Idaho buyer I work with gets a reminder to file the homeowner&apos;s exemption application with the county assessor right after closing, in their own name, while the last business day of the year is still comfortably ahead. The creditor side needs no filing if you live in the home, but it also needs an attorney, not a real estate guide, if a real debt question is on the table. If you are buying in North Idaho and want the closing checklist that keeps these two apart, I am glad to walk through it with you. No pressure, no pitch, just an honest conversation.
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
                Data sources: Idaho Code Title 55, Chapter 10 (sections 55-1001, 55-1002 as amended in 2025, 55-1003, 55-1004, 55-1005, 55-1006, and 55-1008) and section 63-602G in its current text, plus House Bill 843 (2026) status, all on the Idaho Legislature&apos;s site and checked October 31, 2026; Idaho State Tax Commission homeowner&apos;s exemption page and March 5, 2026 Property Tax Reduction release; and the Kootenai County Assessor homeowner&apos;s exemption handout. Statutes and program terms change, so confirm current terms with your county assessor or an Idaho attorney before acting.
</p>
</article>
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Homestead Guide</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">Two exemptions, labeled · 2026</p>
<div className="space-y-3">
{[
                      { range: 'Creditor protection', desc: 'Up to $175,000 of equity, Idaho Code 55-1003, no acreage limit, no tax benefit' },
                      { range: 'Property tax relief', desc: '50 percent of assessed value up to $125,000, 63-602G, home and up to one acre, no creditor protection' },
                      { range: 'To claim the tax exemption', desc: 'Apply once with your county assessor after closing, in your own name' },
                      { range: 'Current year cutoff, tax side', desc: 'End of county business hours on the last business day of the year, 63-602G (5)' },
                      { range: 'April 15 belongs to', desc: 'The separate Property Tax Reduction program, applied for every year' }
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
                    Talk Through Your Purchase
</a>
</div>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Resources</p>
<div className="space-y-4">
<a href="/articles/north-idaho-property-taxes-county-comparison" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho Property Taxes, by County</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Rates, the homeowner&apos;s exemption, and relief programs by county</p>
</a>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/homeowners-insurance-idaho-cost-wildfire-flood-coverage" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Homeowners Insurance in Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">What it costs and what it covers, in a labeled range</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho City Comparison</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">All five cities, head to head, the flagship comparison</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/kootenai-county" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Kootenai County Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The area guide for Kootenai County buyers</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/bonner-county" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Bonner County Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The area guide for Bonner County buyers</p>
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
            Buying in North Idaho? File the Tax Exemption in Your Own Name.
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            Tell me where you are buying, and I will help you build the short list of post closing steps, starting with the homeowner&apos;s exemption application at your county assessor&apos;s office.
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
