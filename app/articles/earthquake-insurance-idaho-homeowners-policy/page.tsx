import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
const articleUrl = 'https://www.realestatewithshirin.com/articles/earthquake-insurance-idaho-homeowners-policy'
const sources = [
  { label: 'Idaho Earthquake Guide for Insurance Agents, CREW.org, February 2026, prepared in consultation with the Idaho Office of Emergency Management and the Idaho Geological Survey, funded by a FEMA National Earthquake Hazards Reduction Program grant, pages 1 to 4, 13 and 14 (rechecked November 10, 2026): principal hazard areas in south-central and southeastern Idaho, Borah Peak and Stanley accounts, standard policies do not cover earthquake damage, endorsement or separate policy routes, out-of-pocket warning, coverage and secondary effects, and Idaho deductibles typically 10 to 20 percent of the insured amount', url: 'https://www.piawest.com/wp-content/uploads/2026/02/Idaho-Earthquake-Guide-for-Insurance-Agents_CREW-IOEM-IGS.pdf' },
  { label: 'Idaho Department of Insurance, Disasters page (checked November 10, 2026): not all homeowner and renter policies provide coverage for earthquake damage, and carriers that offer it typically require a separate, higher deductible', url: 'https://doi.idaho.gov/consumers/home-renters-insurance/disasters/' },
  { label: 'Idaho Office of Emergency Management, Earthquakes page (checked November 10, 2026): Borah Peak, October 28, 1983, magnitude 6.9, two deaths, about $12.5 million in property damage in 1983 dollars, major disaster declaration November 18, 1983', url: 'https://ioem.idaho.gov/news/a-history-of-idaho-disasters/earthquakes/' },
  { label: 'Real Estate With Shirin, homeowners insurance guide (published October 30, 2026): the standard policy framework this article extends, including fire as a covered peril and flood as a separate policy', url: 'https://www.realestatewithshirin.com/articles/homeowners-insurance-idaho-cost-wildfire-flood-coverage' },
]
export const metadata: Metadata = {
title: "Earthquake Insurance in Idaho: What a Standard Homeowners Policy Leaves Out",
description:
    "A standard Idaho homeowners policy pays nothing for earthquake damage. Coverage comes only by endorsement or a separate policy, with a deductible typically 10 to 20 percent of the insured amount. North Idaho probability is low, not zero.",
alternates: {
canonical: articleUrl,
  },
openGraph: {
title: "Earthquake Insurance in Idaho: What a Standard Homeowners Policy Leaves Out",
description: "The exclusion is total and North Idaho risk is low, not zero. How the percentage deductible works, what earthquake coverage covers, and the secondary effects it splits apart.",
url: articleUrl,
type: 'article',
publishedTime: '2026-11-10',
authors: ['Shirin Abplanalp'],
  },
}
const faqs = [
  {
    q: 'Does a standard homeowners policy cover earthquakes in Idaho?',
    a: 'No. The February 2026 Idaho Earthquake Guide for Insurance Agents, prepared by CREW in consultation with the Idaho Office of Emergency Management and the Idaho Geological Survey, states that standard homeowners, renters, condo, and business insurance policies do not cover earthquake damage. The Idaho Department of Insurance consumer alert says the same in plain words: flood and earthquake damage are not covered in a typical homeowners or renters policy. Earthquake damage is covered only if the policyholder buys earthquake insurance, either as an endorsement or as a separate policy. Without it, all repairs and any additional living expenses resulting from earthquake damage must be paid out of pocket.',
  },
  {
    q: 'How does an earthquake deductible work?',
    a: 'In Idaho, the deductible is usually a percentage, typically 10 to 20 percent, of the insured amount, which may be the replacement value of the property. It is a percentage of the insured amount, not of the damage. On a home insured for $500,000, a 10 percent deductible is $50,000 and a 20 percent deductible is $100,000 out of pocket before the policy pays anything, as a labeled example, not a quote. Separate deductibles may apply per coverage, for the dwelling, contents, and detached structures such as a garage. Lower deductibles can be chosen and change the premium. That is why earthquake coverage is best understood as catastrophic loss protection, not repair coverage.',
  },
  {
    q: 'Does North Idaho get earthquakes?',
    a: 'Yes, but smaller and rarer ones than the parts of Idaho the hazard maps flag most strongly. The CREW guide locates Idaho principal earthquake hazard areas in the south-central and southeastern parts of the state. For the Panhandle, earthquakes in the Sandpoint area are rare, but not unheard of, in the words of Idaho Geological Survey research geologist Bill Phillips quoted in 2015: an intensity VI shock was centered near Sandpoint in 1942 and was felt over about 25,000 square miles with minor damage, and in April 2015 a sequence near Sandpoint topped out at about magnitude 4, with no injuries or damage reported. Low probability is not zero probability, and it is not the same hazard picture as central Idaho.',
  },
  {
    q: 'What does earthquake insurance actually cover?',
    a: 'Earthquake insurance covers physical damage and loss caused by ground shaking, and it typically covers additional living expenses, such as rent for temporary housing while repairs are made, though not all policies include that coverage, so check whether yours does. Secondary effects are split, not covered as a bundle. Earthquake insurance typically does not cover damage from secondary effects such as landslide or water damage. Damage and loss caused by fire may be covered by a standard homeowners or renters policy, even if the fire was caused by an earthquake, and flood or water damage belongs to a flood policy, through the National Flood Insurance Program or a private flood insurer.',
  },
]
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: "Earthquake Insurance in Idaho: What a Standard Homeowners Policy Leaves Out",
  description: "A standard Idaho homeowners policy pays nothing for earthquake damage. Coverage comes only by endorsement or a separate policy, with a deductible typically 10 to 20 percent of the insured amount. North Idaho probability is low, not zero, and the principal hazard areas are south-central and southeastern Idaho.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-11-10T00:00:00-08:00',
  dateModified: '2026-11-10T00:00:00-08:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'earthquake insurance Idaho',
    'does homeowners insurance cover earthquakes Idaho',
    'earthquake deductible percentage',
    'North Idaho earthquakes',
    'Sandpoint earthquake 1942 2015',
    'Borah Peak earthquake insurance',
  ],
  articleSection: 'Buyer Resources',
  wordCount: 1900,
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
    { '@type': 'Organization', name: 'Idaho Department of Insurance' },
    { '@type': 'Organization', name: 'Idaho Office of Emergency Management' },
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
    { '@type': 'ListItem', position: 3, name: 'Earthquake Insurance in Idaho: What a Standard Homeowners Policy Leaves Out', item: articleUrl },
  ],
}
const deductibleRows = [
  { basis: 'Home insured for $500,000, 10 percent deductible', figure: '$50,000 out of pocket first' },
  { basis: 'Home insured for $500,000, 20 percent deductible', figure: '$100,000 out of pocket first' },
  { basis: 'Home insured for $500,000, smaller repair, for example $20,000 of shaking damage', figure: 'Below either deductible: the owner pays it all' },
]
const deductibleBars = [
  { label: '10 percent of $500,000 insured value', display: '$50,000', width: '50' },
  { label: '20 percent of $500,000 insured value', display: '$100,000', width: '100' },
]
export default function EarthquakeInsuranceIdahoPage() {
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
<span className="text-[#5C5650]">Earthquake Insurance in Idaho</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Buyer Resources</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">10 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">2026 Guide</span>
</div>
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Earthquake Insurance in Idaho: What a Standard Homeowners Policy Leaves Out
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            A standard homeowners policy pays nothing for earthquake damage, no matter how small the quake or the claim. The only routes to coverage are an endorsement or a separate policy, and in Idaho the deductible is typically 10 to 20 percent of the insured amount. North Idaho probability is low, not zero.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · November 10, 2026</p>
</div>
</div>
</div>
</section>
<div className="border-t border-[#E8DDD0]" />
<section className="bg-[#1C1A17] py-8">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">Excluded</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Earthquake in a Standard Policy</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">CREW Idaho guide, February 2026</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">10 to 20%</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Typical Idaho Deductible</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Of the insured amount, not of the damage</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$50,000 to $100,000</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Example Out of Pocket First</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">On a home insured for $500,000</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">Low, not zero</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">North Idaho Probability</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Principal hazard is south-central and southeast Idaho</p>
</div>
</div>
</div>
</section>
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                Short answer: a standard Idaho homeowners policy pays nothing for earthquake damage. The February 2026 Idaho Earthquake Guide for Insurance Agents, prepared by CREW in consultation with the Idaho Office of Emergency Management and the Idaho Geological Survey and rechecked November 10, 2026, states it flatly: standard homeowners, renters, condo, and business policies do not cover earthquake damage, and damage is covered only if the policyholder chooses to buy earthquake insurance, either as an endorsement or as a separate policy. North Idaho is not Idaho&apos;s high hazard zone, and this guide will not pretend otherwise. The honest decision is math, not fear: the probability here is low, the exclusion is total, and because the deductible runs 10 to 20 percent of the insured value, earthquake coverage is really catastrophic loss protection, not repair coverage.
</p>
<p className="mb-10">This article extends{' '}<a href="/articles/homeowners-insurance-idaho-cost-wildfire-flood-coverage" className="text-[#C4842A] hover:underline">the homeowners insurance guide</a>{' '}on this site, which covers cost, fire and wildfire, and flood. Here the focus is the one gap that guide flagged and set aside: earthquake.</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Exclusion Is Total
</h2>
<p className="mb-6">
                The guide puts the consequence in one sentence: without earthquake insurance, all repairs and any additional living expenses resulting from earthquake damage must be paid for out of pocket. There is no small claim exception and no partial payment for a minor quake. If shaking cracks a foundation, drops a chimney, or makes the home uninhabitable, a standard policy without an endorsement responds to none of it.
</p>
<p className="mb-10">
                The <a href="https://doi.idaho.gov/consumers/home-renters-insurance/disasters/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Idaho Department of Insurance Disasters page</a>, checked November 10, 2026, phrases its public guidance more softly, noting that not all policies provide coverage and that carriers that offer earthquake coverage typically require a separate deductible. Read the two together: check your own policy, because the standard form excludes earthquake, and any coverage you do have will carry its own, higher deductible.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What Earthquake Coverage Does Cover, and What It Splits Apart
</h2>
<p className="mb-6">
                Earthquake insurance covers physical damage and loss caused by ground shaking. It also typically covers additional living expenses, for example rent for temporary housing while repairs are made, though not all policies include that coverage, so check whether yours does rather than assuming it. The guide also advises that the earthquake coverage limit be at least as much as the standard property policy limit, and notes some insurers offer premium discounts for properties meeting seismic building codes.
</p>
<p className="mb-10">
                Secondary effects are split, not covered as a bundle, and this is where buyers most often misread a policy. Earthquake insurance typically does not cover damage from secondary effects such as landslide or water damage. Fire is the exception in the other bucket: damage and loss caused by fire may be covered by a standard homeowners or renters policy, even if the fire was caused by an earthquake. Flood and rising water belong to a flood policy, through the National Flood Insurance Program or a private flood insurer. Keep the three buckets separate in your head: shaking under an earthquake policy, fire following a quake potentially under the standard policy, and water under a flood policy.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Deductible Is the Decision
</h2>
<p className="mb-6">
                In Idaho, the deductible is usually a percentage, typically 10 to 20 percent, of the insured amount, which may be the replacement value of the property, per the CREW guide, page 14. It is a percentage of the insured amount, not of the damage. Separate deductibles may apply per coverage, for the dwelling, contents, and detached structures such as a garage, and the policyholder pays repair costs up to the deductible before the policy pays anything. Lower deductibles can be chosen and change the premium.
</p>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-2 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Example basis</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">What the owner pays first</span>
</div>
{deductibleRows.map((row) => (
<div key={row.basis} className="grid grid-cols-2 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm text-[#5C5650] pr-3">{row.basis}</span>
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{row.figure}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">Labeled arithmetic on the guide&apos;s 10 to 20 percent range, checked November 10, 2026. This is an example, not a quote, and it is not a premium. This guide publishes no average premium for earthquake insurance in Idaho, because no primary source checked for this article publishes one. The premium is a quote question for your agent, priced by construction, location, and the deductible you choose.</p>
</div>
<div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  The Deductible on a $500,000 Insured Value
</h3>
<div className="space-y-4">
{deductibleBars.map((bar) => (
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
<p className="font-dm-sans text-xs text-[#9A9590] mt-4">Once you see the deductible at this scale, the product makes sense on its own terms. It is not there for a cracked tile or a shifted fence. It is there for the rare loss large enough that paying it yourself would change your finances.</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Idaho&apos;s Hazard Map, Honestly
</h2>
<p className="mb-6">
                Large, potentially damaging earthquakes are possible in Idaho, and geological evidence indicates earthquakes greater than magnitude 7.0 are possible in the state, per the CREW guide, pages 1 to 3. But the guide locates the principal hazard in specific places: the state&apos;s principal earthquake hazard areas are in the south-central and southeastern parts of the state, where the Central Idaho (Centennial) Seismic Zone crosses the state east to west, roughly south of the Salmon River, and the Intermountain Seismic Belt runs north-south along Idaho&apos;s east and southeast borders. Hazard modeling in the guide is the 2023 update of the US National Seismic Hazard Model, measuring the chance of damaging shaking, Modified Mercalli Intensity VI or above, over the next 100 years. Earthquakes cannot be predicted; probability estimates rest on long-run average rates.
</p>
<p className="mb-10">
                Do not borrow central Idaho&apos;s hazard language to describe Kootenai or Bonner County. The Panhandle sits outside those two principal zones as the guide maps them, and the next sections keep the statewide teaching examples and North Idaho&apos;s own record in separate places, because they are different stories.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Two Teaching Earthquakes: Borah Peak and Stanley
</h2>
<p className="mb-6">
                Borah Peak, October 28, 1983: magnitude 6.9, Idaho&apos;s largest and most damaging recorded earthquake. Two people were killed in Challis, and property damage was about $12.5 million in 1983 dollars in and around Challis and Mackay, per the CREW guide and the <a href="https://ioem.idaho.gov/news/a-history-of-idaho-disasters/earthquakes/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Idaho Office of Emergency Management</a>, checked November 10, 2026. Unreinforced masonry suffered worst, and 90 percent of the masonry chimneys on houses in Mackay were cracked, displaced, or collapsed.
</p>
<p className="mb-6">
                Stanley, March 31, 2020: magnitude 6.5, about 79 miles northeast of Boise. It was widely felt across Idaho and bordering states and did little damage because the source was far from population centers, with some public building damage in Challis and avalanches and rockslides along Highway 21, per the CREW guide.
</p>
<p className="mb-10">
                The chimney detail is the North Idaho relevant one. Older homes with masonry chimneys are the vulnerable stock in any Idaho quake, and that is a property fact a buyer can see on a walkthrough, in the Panhandle as well as in central Idaho. Age, masonry, and how a home was built matter more to the decision than a statewide slogan does.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                North Idaho&apos;s Own Record: Smaller and Rarer
</h2>
<p className="mb-6">
                Earthquakes in the Sandpoint area are rare, but not unheard of, per Bill Phillips, University of Idaho research geologist with the Idaho Geological Survey, quoted in the Hagadone News Network&apos;s May 1, 2015 report. Events of roughly the April 2015 size occurred in 1918 and 1942. The 1942 shock was intensity VI, centered near Sandpoint, felt over about 25,000 square miles, with minor damage. The Hope Fault runs through the area.
</p>
<p className="mb-10">
                The April 23, 2015 sequence began with a quake reported by USGS at about magnitude 4, about 14 miles southeast of Sandpoint, with lesser shocks the same night and no injuries or damage reported. Later summaries revised some magnitudes in that swarm downward, so this guide says about magnitude 4 rather than a precise figure. That record supports a measured conclusion: a damaging Panhandle quake is a low probability event with a real, documented history, not an impossible one and not a weekly risk.
</p>
<div className="my-8 p-6 bg-[#1C1A17] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  Questions to Ask Your Agent Before You Decide
</h3>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Form and limit:</span> is earthquake coverage available here as an endorsement or only as a separate policy, and is the limit at least as much as the standard property policy limit?
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">Deductible and living expenses:</span> what percentage deductible applies to the dwelling, contents, and detached structures, and does the policy include additional living expenses?
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed">
                    <span className="text-[#F5EFE6] font-semibold">Timing and lender:</span> ask whether any waiting period applies before you count on coverage, and ask your own lender whether it asks for anything beyond the standard policy. This guide makes no flat claim either way on a lender or legal requirement, because the primary sources checked did not establish one.
</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
</h2>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
<p className="text-sm mb-10">
                Published November 10, 2026. Coverage, deductible, hazard, and teaching earthquake facts are from the February 2026 CREW Idaho Earthquake Guide for Insurance Agents and the Idaho Office of Emergency Management, rechecked November 10, 2026, as cited above. The 2015 and 1942 Sandpoint record is as documented in the fact check for this article, from the Hagadone News Network May 1, 2015 report quoting the Idaho Geological Survey and Associated Press reporting from April 24, 2015. The $12.5 million Borah Peak figure is in 1983 dollars; no adjusted figure is used. No premium or average cost for earthquake insurance is published here, because no primary source checked publishes one for Idaho. No statement is made about vehicle coverage, waiting period length, or a lender or legal requirement, for the reasons stated in the article. This guide is general information about Idaho earthquake insurance, not insurance or legal advice. Your own policy, its declarations, and its exclusions control your coverage, and an Idaho licensed insurance agent can price a specific home.
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
                  Earthquake coverage is a decision most North Idaho buyers can make calmly, because the local probability is low. Calm is not the same as uninformed. Know that the standard policy excludes it completely, know what the deductible would actually be on your home, and look at the chimney and masonry when you walk through an older house. If you are weighing a North Idaho home and want help building the list of insurance questions to take to an agent, I am glad to help. No pressure, no pitch, just an honest conversation.
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
                Data sources: CREW Idaho Earthquake Guide for Insurance Agents, February 2026, prepared in consultation with the Idaho Office of Emergency Management and the Idaho Geological Survey; Idaho Department of Insurance Disasters page; and Idaho Office of Emergency Management Earthquakes page, each checked November 10, 2026, with page and basis stated in the article.
</p>
</article>
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Earthquake Guide</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">Sourced figures only · 2026</p>
<div className="space-y-3">
{[
                      { range: 'Standard policy', desc: 'Earthquake excluded: endorsement or separate policy only' },
                      { range: 'Deductible', desc: 'Typically 10 to 20 percent of the insured amount in Idaho' },
                      { range: 'Example', desc: '$50,000 to $100,000 first on a $500,000 insured value' },
                      { range: 'North Idaho', desc: 'Low probability, not zero: Sandpoint 1942 and about magnitude 4 in 2015' },
                      { range: 'Premium', desc: 'No primary source average published: a quote question for your agent' }
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
<a href="/articles/homeowners-insurance-idaho-cost-wildfire-flood-coverage" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Homeowners Insurance in Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">What it costs and what it covers, including flood and wildfire</p>
</a>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho City Comparison</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">All five cities, head to head, the flagship comparison</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/sandpoint-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Sandpoint Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The area guide for Sandpoint buyers</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/areas/post-falls-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Post Falls Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The area guide for Post Falls buyers</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/closing-costs-idaho-what-buyers-pay" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Closing Costs in Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">What buyers actually pay, and who pays what</p>
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
            Buying in North Idaho? Ask the Earthquake Question Before You Bind.
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            Tell me the area and the kind of property you are looking at, and I will help you build the list of coverage questions to take to an agent while you still have time to act on the answers.
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
