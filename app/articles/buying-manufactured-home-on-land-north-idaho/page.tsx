import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
const articleUrl = 'https://www.realestatewithshirin.com/articles/buying-manufactured-home-on-land-north-idaho'
const sources = [
  { label: 'Idaho Legislature, Idaho Code 63-304 (checked November 2, 2026): a manufactured home may constitute real property if the running gear is removed, it becomes permanently affixed to a foundation on land the owner owns or is purchasing (leased land only when the financing follows Freddie Mac, Fannie Mae, USDA, or similar guidelines), and the owner records a Statement of Intent to Declare the manufactured home as real property with the county recorder; assessors must then treat the home as any other site-built residence and lending institutions may treat it as real property; the Tax Commission form must have the certificate of origin or the original title attached', url: 'https://legislature.idaho.gov/statutesrules/idstat/title63/t63ch3/sect63-304/' },
  { label: 'Idaho Legislature, Idaho Code 63-305 (checked November 2, 2026): once converted, the home is deemed a fixture and an improvement to the real property; physical removal is prohibited without the consent of all persons or entities with an interest in the real property, established by a title report from a title insurance company; at least thirty days written notice to the county assessor and written approval from the county tax collector certifying taxes paid are required before removal; the homeowner must apply for a new certificate of title within five days of removal and the reversal declaration must be recorded first', url: 'https://legislature.idaho.gov/statutesrules/idstat/title63/t63ch3/sect63-305/' },
  { label: 'Idaho Administrative Code rule 35.01.03.304, effective July 1, 2024 (checked November 2, 2026): the assessor forwards the Statement of Intent and the title or Manufacturer Statement of Origin to the Idaho Transportation Department, which cancels the title; permanently affixed, in the year of the declaration, means complying with the Idaho Manufactured Home Installation Standard (IDAPA 07.03.12); for a new home the assessor verifies sales or use tax was collected or collects it', url: 'https://www.law.cornell.edu/regulations/idaho/IDAPA-35.01.03.304' },
  { label: 'Consumer Financial Protection Bureau, Manufactured Housing Finance report and news release, May 2021, on 2019 Home Mortgage Disclosure Act data (checked November 2, 2026): whether the homeowner owns the underlying land plays a key role in whether the home is titled as personal or real property; around 42 percent of manufactured home purchase loans are chattel loans, secured by the home but not the land; chattel loans in general have higher interest rates and fewer consumer protections than mortgages, most manufactured home loan applications are denied, less than 4 percent of chattel originations were for refinances, and the top five lenders account for nearly 75 percent of chattel lending', url: 'https://www.consumerfinance.gov/archive/newsroom/manufactured-housing-loan-borrowers-face-higher-interest-rates-risks-and-barriers-to-credit/' },
  { label: 'Fannie Mae Selling Guide B5-2-02, Manufactured Housing Loan Eligibility, version dated December 10, 2025 (checked November 2, 2026): the loan must be secured by both the manufactured home and the interest in the land on which it is situated, and both the manufactured home and the land must be legally classified as real property under applicable state law', url: 'https://selling-guide.fanniemae.com/sel/b5-2-02/manufactured-housing-loan-eligibility' },
  { label: 'U.S. Department of Housing and Urban Development, Financing Manufactured Homes (Title I) (checked November 2, 2026): under the Title I Manufactured Home Loan Program, FHA approved lenders make loans to finance a manufactured home, a manufactured home lot, or a combination; when the home is placed on a leased lot, HUD requires an initial lease term of three years and advance written notice of at least 180 days before the lease can be terminated', url: 'https://www.hud.gov/hud-partners/single-family-manuf14' },
  { label: 'U.S. Department of Housing and Urban Development, Title I Insured Programs (checked November 2, 2026): Title I insures loans made by private lending institutions to finance the purchase or refinance of a manufactured home unit, a manufactured home lot, or a combination of the home and lot, including homes classified as personal property; HUD publishes current Allowable Loan Parameters for the program and adjusts Title I loan limits, so this guide publishes no dollar limit', url: 'https://www.hud.gov/hud-partners/single-family-title' },
  { label: 'Panhandle Health District, Sewage System Permit Application and Installation Guidelines (checked November 1, 2026): any person who constructs, alters, or extends an individual sewage disposal system must hold a valid permit from the Panhandle Health District, and some building permit applications require a valid sewage permit first; installation of a septic system on the Rathdrum Prairie Aquifer requires a minimum parcel size of five acres, or a parcel created before December 20, 1977, or a parcel within an approved municipal sewage management area', url: 'https://panhandlehealthdistrict.org/wp-content/uploads/2022/06/Speculative-Site-Eval-Septic-Permit-Application-Fillable.pdf' },
  { label: 'Kootenai County Code section 8.7.302, Sewage Disposal on Parcels Located Over the Rathdrum Prairie Aquifer (checked November 2, 2026): a subsurface sewage disposal system for one dwelling may be installed on a single parcel of five acres or larger, with exceptions for parcels established before December 20, 1977, replacement systems with no increase in loading, and parcels served by a municipal or community sewer system', url: 'https://codelibrary.amlegal.com/codes/kootenaicountyid/latest/kootenaicounty_id/0-0-0-13459' },
  { label: 'Idaho State Tax Commission, Manufactured Housing: An Educational Guide to Property Tax (checked November 1, 2026): if a Statement of Intent to Declare the structure as real property has been completed, recorded, and filed, the home is taxed as real property; if not, it is taxed as personal property; manufactured homes are assessed at market value as of January 1 either way. The guide states the laws in effect on July 1, 2002, so this article uses it only where the current code and rule say the same thing, and directs readers to the county assessor on tax treatment questions', url: 'https://www.cariboucounty.us/document_center/Department/Assessor/279BR165manufho_00000000948.pdf?t=201806190949060' },
  { label: 'Real Estate With Shirin, Idaho homestead exemption guide: the homeowner exemption under Idaho Code 63-602G is separate from the 63-304 declaration; an owner who occupies a manufactured home as a primary residence may apply for the exemption on the home and up to one acre, for the lesser of 50 percent of assessed value or $125,000', url: 'https://www.realestatewithshirin.com/articles/idaho-homestead-exemption-two-exemptions-explained' },
  { label: 'Real Estate With Shirin, Buying Land in North Idaho: cost per acre, perc, power, and access checks that apply to any land purchase, manufactured home or site-built', url: 'https://www.realestatewithshirin.com/articles/buying-land-north-idaho-cost-per-acre-perc-power-access' },
  { label: 'Real Estate With Shirin, North Idaho city comparison: the flagship comparison of the five cities, used for consistency on where manufactured homes on land are most often found in the rural parts of Kootenai and Bonner Counties', url: 'https://www.realestatewithshirin.com/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint' },
]
export const metadata: Metadata = {
title: 'Buying a Manufactured Home on Land in North Idaho',
description:
    'With a manufactured home, the land decides almost everything. Whether you own the land drives the title, the loan, and the tax treatment. Idaho Code 63-304 is the switch: remove the running gear, affix the home permanently, and record a Statement of Intent. Chattel versus mortgage, FHA Title I versus Title II, the June 15, 1976 HUD line, and the Rathdrum Prairie Aquifer septic check.',
alternates: {
canonical: articleUrl,
  },
openGraph: {
title: 'Buying a Manufactured Home on Land in North Idaho',
description: 'Own the land and record the Idaho 63-304 Statement of Intent, and the home can be treated as real property. Skip that paper, and the loan is usually chattel: higher cost, fewer protections, per the CFPB. The checks to run before you write an offer.',
url: articleUrl,
type: 'article',
publishedTime: '2026-11-02',
authors: ['Shirin Abplanalp'],
  },
}
const faqs = [
  {
    q: 'Do you offer financing for manufactured homes in North Idaho?',
    a: 'No. Shirin Abplanalp is a licensed REALTOR, not a lender, and this site does not offer financing. What decides the financing is the structure of the purchase. A manufactured home on land you own or are buying, permanently affixed and declared as real property under Idaho Code 63-304, can be financed with a mortgage: conventional, FHA Title II, or another mortgage program, subject to lender approval. A home bought on its own, or on leased land, usually routes to a chattel loan or to FHA Title I. The useful step before an offer is to give a lender the build date, the HUD label information, the foundation facts, and the title status, and ask which loan type the home qualifies for.',
  },
  {
    q: 'What is the difference between a chattel loan and a mortgage?',
    a: 'A mortgage is secured by both the home and the land together, and the home is titled as real property. A chattel loan is secured by the home only, and the home is titled as personal property. The Consumer Financial Protection Bureau, in its May 2021 report on 2019 data, found that around 42 percent of manufactured home purchase loans are chattel loans, and that chattel loans in general carry higher interest rates, shorter terms, lower loan amounts, higher denial rates, and fewer consumer protections than mortgages, and are rarely refinanced: less than 4 percent of chattel originations were for refinances. The top five lenders account for nearly 75 percent of chattel lending.',
  },
  {
    q: 'Can I customize my mobile or modular home?',
    a: 'That question mixes three different kinds of factory-built housing, and the classification matters more than the customization. A manufactured home is built to the federal HUD Code on a permanent chassis, and every home built on or after June 15, 1976 must meet that code and carry a HUD certification label and a data plate. A modular home is built in sections to state and local building codes and is treated like site-built housing for most financing. A mobile home, in the strict sense, was built before June 15, 1976 to no uniform code, and is generally outside FHA, VA, Fannie Mae, and Freddie Mac mortgage programs. What customization a maker offers is a dealer and manufacturer question. Which loan and which title you can get depends on which of the three the home actually is.',
  },
  {
    q: 'How does a manufactured home become real property in Idaho?',
    a: 'Under Idaho Code 63-304, checked November 2, 2026, three things must line up. The running gear is removed. The home becomes permanently affixed to a foundation on land the owner owns or is purchasing; leased land qualifies only when the financing follows Freddie Mac, Fannie Mae, USDA, or similar guidelines. And the owner records a Statement of Intent to Declare the manufactured home as real property with the county recorder in the county where the home sits, on the State Tax Commission form, with the certificate of origin or the original title attached. The assessor forwards the form and the title or certificate of origin to the Idaho Transportation Department, which cancels the vehicle style title. County assessors must then treat the home as any other site-built residence, and lending institutions may treat it as real property.',
  },
  {
    q: 'The home is on a permanent foundation. Is it real property?',
    a: 'Not by itself. In Idaho the legal status comes from the recorded Statement of Intent under Idaho Code 63-304 and the cancelled title, not from concrete alone. A home can sit on a permanent foundation and still be titled as personal property if no Statement of Intent was ever recorded. That is the common used home trap. Before you assume mortgage financing will work, check the county records for a recorded Statement of Intent and ask the title company to confirm the status of the home in writing.',
  },
  {
    q: 'Can I get the homeowner exemption on a manufactured home?',
    a: 'Yes, if you own the home and occupy it as your primary residence. The homeowner exemption is separate from the 63-304 declaration. It applies to the home and up to one acre of land, and it exempts the lesser of 50 percent of the assessed value or $125,000, under Idaho Code 63-602G. You apply with your county assessor. The declaration decides whether the home is taxed as real or personal property, assessed at market value as of January 1 either way. The exemption is a separate application, and owning the land is not what creates it: occupying the home as your primary residence is.',
  },
  {
    q: 'What should I check about the land before I buy?',
    a: 'Check the paper before the offer, not after. Confirm the septic permit record with the Panhandle Health District, which issues subsurface sewage permits in the five northern counties. On the Rathdrum Prairie Aquifer, a new septic system generally requires a parcel of at least five acres, or a parcel created before December 20, 1977, or a parcel inside an approved municipal sewage management area. Confirm the well record and water rights where they apply, the recorded access and easements, the utility connections and what a new connection would require, and the county zoning and placement rules for that parcel, which are county specific. Also confirm the title status of the home itself, the HUD label and data plate, and whether a Statement of Intent has ever been recorded.',
  },
]
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: 'Buying a Manufactured Home on Land in North Idaho',
  description: 'Whether the buyer owns the land under a manufactured home drives how the home is titled, which loan the buyer can get, and how Idaho taxes it. Idaho Code 63-304 provides the switch: running gear removed, permanently affixed, and a recorded Statement of Intent. The CFPB found about 42 percent of manufactured home purchase loans are chattel loans, which cost more and protect less than mortgages.',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-11-02T00:00:00-08:00',
  dateModified: '2026-11-02T00:00:00-08:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'buying manufactured home on land North Idaho',
    'manufactured home real property Idaho 63-304',
    'Statement of Intent declare manufactured home real property',
    'chattel loan vs mortgage manufactured home',
    'FHA Title I vs Title II manufactured home',
    'Do you offer financing for manufactured homes',
  ],
  articleSection: 'Buyer Resources',
  wordCount: 2600,
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
    { '@type': 'Organization', name: 'Consumer Financial Protection Bureau', sameAs: 'https://en.wikipedia.org/wiki/Consumer_Financial_Protection_Bureau' },
    { '@type': 'Organization', name: 'United States Department of Housing and Urban Development', sameAs: 'https://en.wikipedia.org/wiki/United_States_Department_of_Housing_and_Urban_Development' },
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
    { '@type': 'ListItem', position: 3, name: 'Buying a Manufactured Home on Land in North Idaho', item: articleUrl },
  ],
}
const loanRows = [
  { point: 'What secures the loan', chattel: 'The home only', mortgage: 'The home and the land together' },
  { point: 'How the home is titled', chattel: 'Personal property, with a vehicle style title', mortgage: 'Real property, after the 63-304 declaration and title cancellation' },
  { point: 'Typical setting', chattel: 'Home only purchase, or a home on leased land in a park or community', mortgage: 'Home on land the buyer owns or is buying in the same purchase' },
  { point: 'Cost and protection, per the CFPB', chattel: 'Higher interest rates, shorter terms, lower loan amounts, higher denial rates, fewer consumer protections, rarely refinanced', mortgage: 'The comparison baseline in the CFPB report: lower cost and stronger protections than chattel' },
  { point: 'Share of purchase loans', chattel: 'About 42 percent of manufactured home purchase loans (CFPB, 2019 data)', mortgage: 'The remaining purchase loans, including mortgages on site-built and manufactured homes' },
]
const checkRows = [
  { step: 'Build date and HUD paper', desc: 'Was the home built on or after June 15, 1976? Find the HUD certification label on each section and the data plate inside the home. No label and no plate is a financing problem, not a detail.' },
  { step: 'Title status in the county record', desc: 'Has a Statement of Intent under 63-304 ever been recorded, and was the vehicle style title cancelled? Ask the title company to confirm the status in writing.' },
  { step: 'Foundation and running gear', desc: 'Is the running gear removed, and does the installation meet the Idaho Manufactured Home Installation Standard? A foundation alone does not create real property status.' },
  { step: 'Land paper', desc: 'Septic permit record with the Panhandle Health District, well record, recorded access and easements, utility connections, and the county zoning and placement rules for that parcel.' },
  { step: 'Loan type, asked early', desc: 'Give the lender the build date, title status, and foundation facts before the offer, and ask which loan the home qualifies for: mortgage, FHA Title II, FHA Title I, or chattel. Lender overlays can be stricter than the program floor.' },
]
export default function BuyingManufacturedHomeOnLandPage() {
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
<span className="text-[#5C5650]">Manufactured Home on Land</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Buyer Resources</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">13 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">2026 Guide</span>
</div>
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Buying a Manufactured Home on Land in North Idaho
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            With a manufactured home, the land question decides almost everything else. Whether you own the land under the home drives how the home is titled, which loan you can get, what that loan costs, and how Idaho taxes the home. Idaho gives the owner a specific legal switch, a recorded Statement of Intent under Idaho Code 63-304, and flipping that switch is what lets assessors and lenders treat the home like any other site-built residence.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · November 2, 2026</p>
</div>
</div>
</div>
</section>
<div className="border-t border-[#E8DDD0]" />
<section className="bg-[#1C1A17] py-8">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">June 15, 1976</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">The HUD Code Line</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Federal standards took effect; homes built before are mobile homes</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">About 42%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Of Purchase Loans Are Chattel</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">CFPB, May 2021 report on 2019 data</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">63-304</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Idaho Real Property Switch</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Recorded Statement of Intent, checked November 2, 2026</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">5 acres</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Aquifer Septic Rule</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Rathdrum Prairie Aquifer, Panhandle Health District</p>
</div>
</div>
</div>
</section>
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                Short answer: buy the land and the title paper together, or expect a different and more expensive loan. The Consumer Financial Protection Bureau put it plainly in its manufactured housing finance report, May 2021, on 2019 data, checked November 2, 2026: whether the homeowner owns the underlying land plays a key role in whether the manufactured home is titled as personal or real property. A home on owned land, permanently affixed, can often be titled as real property and financed with a mortgage. A home on leased land, a rented lot in a park or community, is usually personal property, and the loan is usually a chattel loan, secured by the home but not the land.
</p>
<p className="mb-10">This guide sits alongside{' '}<a href="/articles/buying-land-north-idaho-cost-per-acre-perc-power-access" className="text-[#C4842A] hover:underline">the guide to buying land in North Idaho</a>{' '}and{' '}<a href="/articles/idaho-homestead-exemption-two-exemptions-explained" className="text-[#C4842A] hover:underline">the homestead exemption guide</a>, because a manufactured home on land is both purchases at once. The land checks in that guide still apply. What is different here is the home itself: its build date, its title, and the one recorded form that changes how Idaho and lenders treat it.</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                First Check: The June 15, 1976 Line
</h2>
<p className="mb-6">
                The federal manufactured home construction and safety standards, the HUD Code, took effect June 15, 1976, and every manufactured home produced since then must meet them. Each section of the home carries a HUD certification label, and the data plate inside the home records its details, including the build date. Homes built before that date are mobile homes in the strict sense: built to no uniform code, and generally outside FHA, VA, Fannie Mae, and Freddie Mac mortgage programs.
</p>
<p className="mb-10">
                So the first check on any used home is not the kitchen. It is the build date, the HUD label on each section, and the data plate. A missing label or a pre-1976 date does not make a home unlivable. It makes the financing menu much shorter, and you want to know that before you write an offer, not after the lender finds it.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Chattel Versus Mortgage: Why the Loan Type Matters
</h2>
<p className="mb-6">
                About 42 percent of manufactured home purchase loans are chattel loans, per the CFPB report above. Compared with mortgages, the CFPB found, chattel loans carry higher interest rates, shorter terms, lower loan amounts, higher denial rates, and fewer consumer protections, and they are rarely refinanced: less than 4 percent of chattel originations were for refinances. The chattel market is also concentrated, with the top five lenders making nearly 75 percent of chattel loans.
</p>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-3 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Point to compare</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Chattel loan</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Mortgage</span>
</div>
{loanRows.map((row) => (
<div key={row.point} className="grid grid-cols-3 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17] pr-3">{row.point}</span>
<span className="font-dm-sans text-sm text-[#5C5650] pr-3">{row.chattel}</span>
<span className="font-dm-sans text-sm text-[#5C5650]">{row.mortgage}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">Comparison checked November 2, 2026 against the CFPB manufactured housing finance report, May 2021, on 2019 Home Mortgage Disclosure Act data. The CFPB figures are directional and dated by design: there is no live chattel rate index, so this guide publishes no chattel interest rate as a current figure.</p>
</div>
<p className="mb-10">
                One more CFPB finding deserves attention, because it is the quiet trap in dealer arranged financing. The Bureau found that some buyers who owned their land and were eligible for mortgages took chattel loans anyway, the more expensive route. The fact that a seller or dealer can arrange financing on the spot is not a reason to skip the mortgage question. Ask a lender, in writing, which loan this home and this land qualify for, before you accept the first arrangement offered.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Idaho&apos;s Switch: The Statement of Intent Under 63-304
</h2>
<p className="mb-6">
                Idaho Code 63-304, read on the Idaho Legislature site on November 2, 2026, sets the exact conditions. A manufactured home may constitute real property if the running gear is removed and the home becomes permanently affixed to a foundation on land the owner owns or is purchasing. Leased land qualifies only when the home is being financed in accordance with the guidelines of the Federal Home Loan Mortgage Corporation, the Federal National Mortgage Association, the United States Department of Agriculture, or a similar program with comparable restrictions. And the owner must record a Statement of Intent to Declare the manufactured home as real property with the county recorder in the county where the home will be situated.
</p>
<p className="mb-6">
                The declaration form is prescribed by the State Tax Commission, and the certificate of origin or the original title to the home must be attached to it. Under Idaho Administrative Code rule 35.01.03.304, effective July 1, 2024, the assessor forwards the Statement of Intent and the title or certificate of origin to the Idaho Transportation Department, which cancels the vehicle style title. Permanently affixed, in the year of the declaration, means complying with the Idaho Manufactured Home Installation Standard. For a new home, the assessor also verifies that sales or use tax was collected, or collects it.
</p>
<p className="mb-10">
                Once that option is exercised, the statute is direct about the result: all county assessors must treat the home as any other site-built residence, and lending institutions may treat it as real property. That is why Fannie Mae can be in this conversation at all. Its Selling Guide B5-2-02, version dated December 10, 2025, checked November 2, 2026, requires that the loan be secured by both the manufactured home and the interest in the land, and that both be legally classified as real property under state law. In Idaho, the 63-304 declaration is the mechanism that produces that classification. County level steps, fees, inspections, and sign-offs vary by county, so work through your own county assessor office for the packet that applies to your parcel, and do not rely on another county packet as North Idaho instructions.
</p>
<div className="my-8 p-6 bg-[#1C1A17] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  A Foundation Alone Does Not Make It Real Property
</h3>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">The trap:</span> a home can sit on a permanent foundation, with the running gear long gone, and still be titled as personal property, because no Statement of Intent was ever recorded. Sellers may describe such a home as real property in good faith. The county record is what counts.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed">
                    <span className="text-[#F5EFE6] font-semibold">The check:</span> search the county records for a recorded Statement of Intent for that home, and ask the title company to confirm the title status in writing before you and your lender build a mortgage plan on it.
</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Switch Is Sticky: Reversal Under 63-305
</h2>
<p className="mb-6">
                Treat a declared home as permanent, because Idaho law does. Under Idaho Code 63-305, checked November 2, 2026, once a manufactured home has been converted to real property it is deemed a fixture and an improvement to the real property. Physical removal is prohibited without the consent of all persons or entities who have an interest in the real property, and the homeowner must obtain a title report from a title insurance company to establish whose consent is required.
</p>
<p className="mb-10">
                The rest of the removal process is just as formal: at least thirty days written notice to the county assessor before removal, written approval from the county tax collector certifying that all property taxes due have been paid, a recorded Reversal of Declaration on the Tax Commission form, and an application for a new certificate of title within five days of removal. Only then does the home become personal property again. A plan that assumes you can declare the home now and simply move it to another lot later runs into both this consent rule and lender program rules that generally restrict homes previously installed at another site. Ask the lender about any moved home history early.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                How Idaho Taxes Follow the Same Paper
</h2>
<p className="mb-6">
                The Tax Commission manufactured housing guide states the rule in one sentence: if a Statement of Intent was completed, recorded, and filed, the home is taxed as real property; if not, it is taxed as personal property. Either way, the home is assessed at market value as of January 1. That guide states the laws in effect on July 1, 2002, so this article relies on it only where the current code and administrative rule say the same thing. On a specific tax treatment question, including the sales or use tax treatment of a used home purchase, ask your county assessor to confirm before closing rather than relying on a dated guide.
</p>
<p className="mb-10">
                The homeowner exemption is a separate step, and it is worth separating in your mind from the declaration. An owner who occupies a manufactured home as a primary residence may qualify for the exemption on the home and up to one acre, for the lesser of 50 percent of assessed value or $125,000, under Idaho Code 63-602G, applied for with the county assessor. The declaration decides the property type. The exemption application decides whether part of the value is exempt. One does not do the work of the other, and{' '}<a href="/articles/idaho-homestead-exemption-two-exemptions-explained" className="text-[#C4842A] hover:underline">the homestead exemption guide</a>{' '}walks through that application in full.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                FHA Has Two Doors, and They Are Not Interchangeable
</h2>
<p className="mb-6">
                Title II is the standard FHA mortgage route: the home is financed with its site as real property, on a permanent foundation, as a HUD Code home classified as real estate. Title I is the FHA manufactured home program, and it is different in kind. Per HUD, checked November 2, 2026, Title I insures loans made by private lenders for the purchase or refinance of a manufactured home unit, a manufactured home lot, or a combination of the two, including homes titled as personal property.
</p>
<p className="mb-10">
                On leased land under Title I, HUD requires an initial lease term of at least three years, and the lease must provide that the homeowner receives advance written notice of at least 180 days before the lease can be terminated. Those two lease terms are worth reading in any lot lease before you sign. This guide publishes no Title I dollar limits: HUD adjusts those limits and publishes current Allowable Loan Parameters for the program, and lender pages quoting older fixed figures conflict with each other. Ask an FHA approved lender for the current limit that applies to the loan type you are considering, and date the answer. The same discipline applies to USDA and other programs where a parcel may be eligible: name the category, verify the current terms with the lender, and expect lender overlays on age, single-wide homes, and moved homes that can be stricter than the program floor.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Land Checks, Including the Aquifer Trap
</h2>
<p className="mb-6">
                A manufactured home on land succeeds or fails on the land paper as much as on the home. In the five northern counties, subsurface sewage permits come from the Panhandle Health District: no one may construct, alter, or extend an individual sewage disposal system without a District permit, and some county building permits require a valid sewage permit first. If you are relying on an existing system, verify its permit record with the District before the offer.
</p>
<p className="mb-6">
                The Rathdrum Prairie Aquifer carries the sharpest local rule. Per the Panhandle Health District guidelines, checked November 1, 2026, and Kootenai County Code section 8.7.302, checked November 2, 2026, a new septic system over the aquifer generally requires a parcel of at least five acres, or a parcel created before December 20, 1977, or a parcel inside an approved municipal sewage management area. A small prairie parcel with no existing permitted system and no sewer access can be land you cannot place a home on as planned, however good the price looks.
</p>
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
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">Checklist built November 2, 2026 from Idaho Code 63-304 and 63-305, Idaho Administrative Code rule 35.01.03.304, Fannie Mae Selling Guide B5-2-02, HUD Title I guidance, and Panhandle Health District sewage guidelines. Zoning and placement rules are county specific, so confirm them with the county where the parcel sits.</p>
</div>
<p className="mb-10">
                Round out the land checks the same way you would for any North Idaho acreage, following{' '}<a href="/articles/buying-land-north-idaho-cost-per-acre-perc-power-access" className="text-[#C4842A] hover:underline">the land buying guide</a>: the well record and any water paperwork, recorded access and easements rather than a neighbor assurance, power and utility connection requirements, and the county zoning and placement rules for a manufactured home on that parcel. None of those checks is glamorous. Together they are the difference between a home you can finance, insure, and resell, and a file that stalls at the lender desk in the final week.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Manufactured, Modular, and Mobile Are Three Different Things
</h2>
<p className="mb-10">
                Keep the words straight, because lenders and assessors do. Manufactured means built to the federal HUD Code on a permanent chassis, on or after June 15, 1976. Modular means built in sections to state and local building codes, set on a permanent foundation, and treated like site-built housing for most financing. Mobile, used precisely, means built before June 15, 1976, to no uniform code. A listing that uses the three words interchangeably is telling you to verify the classification yourself, from the HUD label, the data plate, and the county record, before you price the home or promise a loan type around it.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
</h2>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
<p className="text-sm mb-10">
                Published November 2, 2026. The Idaho rules in this guide were checked November 2, 2026 against the Idaho Legislature published text of Idaho Code 63-304 and 63-305 and Idaho Administrative Code rule 35.01.03.304, and the financing figures against the Consumer Financial Protection Bureau May 2021 report, Fannie Mae Selling Guide B5-2-02, and HUD Title I guidance, all checked November 2, 2026. The septic rules were checked against the Panhandle Health District guidelines on November 1, 2026 and Kootenai County Code section 8.7.302 on November 2, 2026. Three deliberate omissions are worth naming. This guide publishes no chattel interest rate, because no live chattel rate index exists and the defensible claim is the CFPB directional one on 2019 data. It publishes no FHA Title I dollar limit, because HUD adjusts those limits and the older fixed figures still copied on lender pages conflict. And it states no county fee or county packet step as a North Idaho fact, because those vary by county. This guide is general information about buying a manufactured home on land in Idaho, not legal, tax, or lending advice. A title conversion, a reversal, or a loan decision belongs with your county assessor, a title company, an Idaho attorney, or a lender, as the question requires.
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
                  Manufactured homes on land are some of the most practical paths into North Idaho acreage, and the deals that go smoothly are the ones where the paper was checked first. If you are looking at a home and land package, send me the address before you write the offer. We will check the build date and HUD paper, the recorded title status, the septic record, and the loan type the home can actually support, so the offer you write is one the lender can close. No pressure, no pitch, just an honest conversation.
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
                Data sources: Idaho Code 63-304 and 63-305 and Idaho Administrative Code rule 35.01.03.304, checked November 2, 2026; Consumer Financial Protection Bureau manufactured housing finance report, May 2021, on 2019 data; Fannie Mae Selling Guide B5-2-02, checked November 2, 2026; HUD Financing Manufactured Homes (Title I) and Title I Insured Programs, checked November 2, 2026; Panhandle Health District sewage guidelines, checked November 1, 2026; and Kootenai County Code section 8.7.302, checked November 2, 2026. Statutes, program terms, and lender overlays change, so confirm current terms with your county assessor, a title company, or a lender before you buy.
</p>
</article>
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Manufactured Home Check</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">Before you write the offer · North Idaho</p>
<div className="space-y-3">
{[
                      { range: 'Build date', desc: 'On or after June 15, 1976, with HUD label and data plate present' },
                      { range: 'Title status', desc: 'Recorded Statement of Intent under 63-304, or still personal property' },
                      { range: 'Loan type', desc: 'Mortgage or FHA Title II if declared real property; chattel or FHA Title I if not' },
                      { range: 'Septic record', desc: 'Panhandle Health District permit; five acre rule over the Rathdrum Prairie Aquifer' },
                      { range: 'Reversal reality', desc: 'A declared home is a fixture under 63-305; removal needs every interest holder consent' }
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
                    Talk Through a Manufactured Home Purchase
</a>
</div>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Resources</p>
<div className="space-y-4">
<a href="/articles/buying-land-north-idaho-cost-per-acre-perc-power-access" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Buying Land in North Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">Cost per acre, perc, power, and access checks for any parcel</p>
</a>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/idaho-homestead-exemption-two-exemptions-explained" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Idaho Homestead Exemption, Explained</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The homeowner exemption on the home and up to one acre</p>
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
            Looking at a Manufactured Home on Land?
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            Send me the address before you write the offer, and we will check the HUD paper, the recorded title status, the septic record, and the loan type first.
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
