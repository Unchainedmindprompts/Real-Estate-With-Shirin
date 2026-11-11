import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'
const articleUrl = 'https://www.realestatewithshirin.com/articles/radon-north-idaho-testing-costs-mitigation'
const sources = [
  { label: 'Idaho Department of Health and Welfare, What is Radon? page (rechecked November 11, 2026): what radon is and how it enters a home, second leading cause of lung cancer and about 21,000 deaths a year, a reading of 4 pCi/L compared to smoking 8 cigarettes daily, test types and placement, free test for Idaho residents if in stock and one every two years, discounted kits and the library lending program, the action table, all cost ranges, buying and renting guidance, certified professionals through NRPP and NRSB, radon control methods not required by law in Idaho unless a city or county has adopted them, and program contacts 1-800-445-8647 and radon@dhw.idaho.gov', url: 'https://healthandwelfare.idaho.gov/health-wellness/environmental-health/what-radon' },
  { label: 'U.S. Environmental Protection Agency, Map of Radon Zones (checked November 11, 2026): Zone 1 is highest potential with average indoor radon levels that may be greater than 4 pCi/L, Zone 2 is moderate at 2 to 4 pCi/L, Zone 3 is low at less than 2 pCi/L, and the map should not be used to determine if a home in a given zone should be tested, because homes with elevated levels have been found in all three zones and all homes should be tested', url: 'https://www.epa.gov/sites/default/files/2018-12/documents/radon-zones-map.pdf' },
  { label: 'U.S. Environmental Protection Agency, EPA Map of Radon Zones for Idaho (checked November 11, 2026): the state map checked at build time for the Kootenai, Bonner, and Boundary County Zone 1 assignments stated in this article', url: 'https://19january2021snapshot.epa.gov/sites/static/files/2014-08/documents/idaho.pdf' },
  { label: 'U.S. Environmental Protection Agency, Consumer Guide to Radon Reduction, How to Fix Your Home (checked November 11, 2026): active subslab suction, also called subslab depressurization, is the most common and usually the most reliable radon reduction method, some radon reduction systems can reduce radon levels by up to 99 percent, and a post-mitigation test should be done within 30 days of installation but no sooner than 24 hours after the system is operating', url: 'https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=10004BO9.txt' },
  { label: 'Idaho Department of Health and Welfare news release, January 6, 2021, and the Idaho Radon Fact Sheet prepared with the Idaho DHW Radon Program, updated June 2, 2022: about 2 out of 5 homes tested in Idaho have radon levels above 4.0 pCi/L, and high levels of radon have been found in every county in Idaho', url: 'https://healthandwelfare.idaho.gov/health-wellness/environmental-health/what-radon' },
  { label: 'Real Estate With Shirin, homeowners insurance guide (published October 30, 2026): the companion guide to what a standard policy covers, for buyers building their full pre-purchase check list', url: 'https://www.realestatewithshirin.com/articles/homeowners-insurance-idaho-cost-wildfire-flood-coverage' },
]
export const metadata: Metadata = {
title: "Radon in North Idaho: What Buyers Should Test, What It Costs, and How Mitigation Works",
description:
    "Kootenai, Bonner, and Boundary Counties are EPA Zone 1, and about 2 in 5 tested Idaho homes came back above 4.0 pCi/L. A zone is not a result: testing can be free through Idaho DHW when kits are in stock, and professional mitigation runs $1,500 to $3,500 in DHW published ranges.",
alternates: {
canonical: articleUrl,
  },
openGraph: {
title: "Radon in North Idaho: What Buyers Should Test, What It Costs, and How Mitigation Works",
description: "Zone 1 ground, a 4.0 pCi/L action level, free or low cost testing through Idaho DHW, and a proven pipe and fan fix. What North Idaho buyers should test, what it costs, and how mitigation works.",
url: articleUrl,
type: 'article',
publishedTime: '2026-11-11',
authors: ['Shirin Abplanalp'],
  },
}
const faqs = [
  {
    q: 'Should I test for radon when buying a home in North Idaho?',
    a: 'Yes. Kootenai, Bonner, and Boundary Counties are EPA Zone 1, the highest potential category, and the Idaho Department of Health and Welfare gives buyers direct guidance: ask for a radon test during the home inspection, and if levels are high, negotiate to have a mitigation system installed. For a real estate transaction, EPA protocol is a minimum 48 hour test under closed house conditions, with windows and exterior doors closed, except for normal entry and exit, for 12 hours before and during the test, placed in the lowest level that could be used regularly, and ideally run by a certified third party tester rather than either party to the sale.',
  },
  {
    q: 'What radon level requires action?',
    a: 'The EPA recommends taking action at 4.0 pCi/L or higher, usually by installing a mitigation system. Even below that, the EPA suggests considering fixing a home between 2.0 and 4.0 pCi/L, especially if anyone in the home is at higher risk. In the Idaho Department of Health and Welfare action table, 0.4 to 1.3 pCi/L is the average indoor range, with retesting every 2 years; 2.0 to 3.9 means consider a long term test and consider fixing; and 4.0 and higher means fix the home.',
  },
  {
    q: 'How much does radon testing cost in Idaho?',
    a: 'Testing can cost nothing. The Idaho Department of Health and Welfare offers Idaho residents a free test, one test every two years, if in stock, checked November 11, 2026, plus a discounted kit through its Air Chek link, kits at hardware and home improvement stores, and free kit lending through the Idaho Radon Library Lending Program at participating public libraries. This guide publishes no professional testing fee, because no primary source checked for this article publishes one for Idaho. A certified tester fee is a quote question; certified testers are listed through the National Radon Proficiency Program and the National Radon Safety Board.',
  },
  {
    q: 'How much does radon mitigation cost?',
    a: 'The Idaho Department of Health and Welfare publishes the Idaho ranges, checked November 11, 2026: professional installation typically costs $1,500 to $3,500, do it yourself systems cost $300 to $600 in parts, and radon resistant features in a new home cost $300 to $500 and are easiest to install during construction. DHW notes that costs vary by home. This guide uses only those Idaho published ranges and no national aggregator figures.',
  },
  {
    q: 'How does a radon mitigation system work?',
    a: 'The standard system is sub-slab depressurization, also called soil suction: a sealed pipe and a continuously running fan pull soil gas from beneath the slab and vent it above the roof, so the gas never enters the living space. The EPA Consumer Guide to Radon Reduction calls active subslab suction the most common and usually the most reliable method, and says some radon reduction systems can reduce radon levels by up to 99 percent. After installation, retest no sooner than 24 hours after the system starts and within 30 days, then retest at least every two years, and the fan should never be turned off.',
  },
  {
    q: 'Is radon a problem in Kootenai County?',
    a: 'Kootenai County is EPA Zone 1, which means highest potential: a predicted average indoor radon screening level greater than 4 pCi/L. Statewide, the Idaho Department of Health and Welfare reports that about 2 out of 5 homes tested in Idaho have radon levels above 4.0 pCi/L, and high levels have been found in every Idaho county. That is a share of tested homes, not a prediction for any one house. EPA guidance is explicit that its zone map should not be used to decide whether a specific home should be tested, because levels vary house to house. The only way to know the level in a Kootenai County home is to test that home.',
  },
]
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: "Radon in North Idaho: What Buyers Should Test, What It Costs, and How Mitigation Works",
  description: "Kootenai, Bonner, and Boundary Counties are EPA Zone 1, and about 2 in 5 tested Idaho homes came back above the EPA action level of 4.0 pCi/L. A zone is not a result: testing through Idaho DHW can be free when kits are in stock, and the standard fix is sub-slab depressurization, at $1,500 to $3,500 professionally installed in DHW published ranges.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/shirin-headshot-professional.png',
    width: 1122,
    height: 1402,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-11-11T00:00:00-08:00',
  dateModified: '2026-11-11T00:00:00-08:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'radon North Idaho',
    'radon testing Kootenai County',
    'EPA Zone 1 Idaho radon',
    'radon mitigation cost Idaho',
    'free radon test kit Idaho DHW',
    'radon test home purchase Idaho',
  ],
  articleSection: 'Buyer Resources',
  wordCount: 2000,
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
    { '@type': 'Organization', name: 'Idaho Department of Health and Welfare' },
    { '@type': 'Organization', name: 'United States Environmental Protection Agency' },
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
    { '@type': 'ListItem', position: 3, name: 'Radon in North Idaho: What Buyers Should Test, What It Costs, and How Mitigation Works', item: articleUrl },
  ],
}
const actionRows = [
  { basis: '0.4 to 1.3 pCi/L', figure: 'Average indoor range: retest every 2 years' },
  { basis: '2.0 to 3.9 pCi/L', figure: 'Consider a long term test, and consider fixing the home' },
  { basis: '4.0 pCi/L and higher', figure: 'Fix the home, usually with a mitigation system' },
]
const costRows = [
  { basis: 'Professional mitigation installation', figure: '$1,500 to $3,500' },
  { basis: 'Do it yourself system, parts only', figure: '$300 to $600' },
  { basis: 'Radon resistant features in new construction', figure: '$300 to $500' },
]
const costBars = [
  { label: 'Professional installation, high end of DHW range', display: '$3,500', width: '100' },
  { label: 'Do it yourself system parts, high end of DHW range', display: '$600', width: '17' },
  { label: 'Radon resistant features, high end of DHW range', display: '$500', width: '14' },
]
export default function RadonNorthIdahoPage() {
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
<span className="text-[#5C5650]">Radon in North Idaho</span>
</nav>
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">Buyer Resources</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">10 min read</span>
<span className="text-[#9A9590] text-xs font-dm-sans">·</span>
<span className="text-xs text-[#9A9590] font-dm-sans">2026 Guide</span>
</div>
<h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Radon in North Idaho: What Buyers Should Test, What It Costs, and How Mitigation Works
</h1>
<p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            Kootenai, Bonner, and Boundary Counties sit in EPA Zone 1, the highest potential category, and about 2 in 5 tested Idaho homes came back above the action level of 4.0 pCi/L. A zone is not a result for any one house. Testing can be free, and the standard fix is a proven pipe and fan system.</p>
<div className="flex items-center gap-4">
<img
src="/images/shirin-headshot-studio.webp"
alt="Shirin Abplanalp, licensed realtor at Berkshire Hathaway HomeServices Jacklin Real Estate"
className="w-10 h-10 rounded-full object-cover"
/>
<div>
<p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
<p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · November 11, 2026</p>
</div>
</div>
</div>
</section>
<div className="border-t border-[#E8DDD0]" />
<section className="bg-[#1C1A17] py-8">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">Zone 1</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">EPA Zone, All Three North Idaho Counties</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Kootenai, Bonner, and Boundary, EPA map checked November 11, 2026</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">2 in 5</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Tested Idaho Homes Above 4.0 pCi/L</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Idaho DHW, a share of tested homes, not all homes</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">4.0 pCi/L</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">EPA Action Level</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Consider fixing between 2.0 and 4.0</p>
</div>
<div className="text-center">
<p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$1,500 to $3,500</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Professional Mitigation</p>
<p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Idaho DHW published range, checked November 11, 2026</p>
</div>
</div>
</div>
</section>
<section className="bg-[#FAFAF8] py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
<p className="mb-6">
                Short answer: test the home. North Idaho sits on Zone 1 ground, and the state test record backs the map up, but neither one can tell you the level inside a specific house. The Idaho Department of Health and Welfare (DHW) radon page, rechecked November 11, 2026, gives buyers one clear instruction: ask for a radon test during the home inspection, and if levels are high, negotiate to have a mitigation system installed. Testing through DHW can be free for Idaho residents when kits are in stock, and the standard mitigation system is a sealed pipe and fan that vents soil gas above the roof. High potential, cheap certainty, solvable problem. That is the whole shape of radon in North Idaho.
</p>
<p className="mb-10">Radon has not appeared on this site before, so this guide stands on its own. Buyers who are building their full pre-purchase check list can pair it with{' '}<a href="/articles/homeowners-insurance-idaho-cost-wildfire-flood-coverage" className="text-[#C4842A] hover:underline">the homeowners insurance guide</a>{' '}and{' '}<a href="/articles/earthquake-insurance-idaho-homeowners-policy" className="text-[#C4842A] hover:underline">the earthquake insurance guide</a>, which cover two other quiet line items that surprise people after closing.</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What Radon Is, and Why It Matters
</h2>
<p className="mb-6">
                Radon is a gas you cannot see, smell, or taste. It comes from the natural breakdown of uranium in soil and rocks, and it enters a home through small cracks in floors and walls and around pipes, per the DHW radon page. Breathing high levels over time increases lung cancer risk. Radon is the second leading cause of lung cancer in the United States, the number one cause among non-smokers, and is responsible for approximately 21,000 lung cancer deaths annually, per DHW.
</p>
<p className="mb-10">
                DHW puts one reading in terms people can picture: a radon reading of 4 pCi/L, the EPA action level, is equivalent to smoking 8 cigarettes daily. That comparison is a reason to test, not a reason to panic. Levels are measured, and measured levels can be lowered.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Zone 1 Ground, and What a Zone Cannot Tell You
</h2>
<p className="mb-6">
                The EPA Map of Radon Zones, checked November 11, 2026, defines the categories: Zone 1 is highest potential, with a predicted average indoor radon screening level greater than 4 pCi/L; Zone 2 is moderate, at 2 to 4 pCi/L; and Zone 3 is low, at less than 2 pCi/L. On the EPA map for Idaho, also checked November 11, 2026, Kootenai County, Bonner County, and Boundary County are each Zone 1.
</p>
<p className="mb-6">
                The state test record points the same way. DHW reports that about 2 out of 5 homes tested in Idaho have radon levels above 4.0 pCi/L, and that high levels of radon have been found in every county in Idaho (DHW news release, January 6, 2021, and the Idaho Radon Fact Sheet, updated June 2, 2022). Read that figure carefully: it is a share of tested homes, a group that chose to test, and it is not a claim that the same share of all Idaho homes test high.
</p>
<p className="mb-10">
                Now the other half, which matters just as much. EPA guidance on its own map says the map should not be used to determine if a home in a given zone should be tested for radon, and that homes with elevated levels of radon have been found in all three zones. A zone describes ground, averaged across a county. It does not describe your slab, your foundation cracks, or your ventilation. Two houses on the same street can test very differently, and the only way to know a home level is to test that home.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What the Numbers Mean: The Action Ladder
</h2>
<p className="mb-6">
                Radon is measured in picocuries per liter of air, written pCi/L. The EPA recommends taking action at 4.0 pCi/L or higher, usually by installing a mitigation system. Even below that, the EPA suggests considering fixing a home between 2.0 and 4.0 pCi/L, especially if anyone in the home is at higher risk. DHW publishes the same ladder as an action table.
</p>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-2 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Test result</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Action, per Idaho DHW</span>
</div>
{actionRows.map((row) => (
<div key={row.basis} className="grid grid-cols-2 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm text-[#5C5650] pr-3">{row.basis}</span>
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{row.figure}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">From the Idaho DHW radon page action table, rechecked November 11, 2026. To be sure of a level, DHW advises testing again to confirm, or using a long term test for a better yearly average.</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                How to Test, and How a Purchase Test Differs
</h2>
<p className="mb-6">
                Test the lowest level of the home where people spend time. A short term test runs 3 to 7 days and is best done in winter, in DHW published framing. A long term test runs up to 1 year and gives a better average of yearly levels. Outside a transaction, the EPA recommends testing every two years or after any remodeling, per DHW.
</p>
<p className="mb-10">
                A purchase runs on a shorter clock, and it has its own protocol. For a real estate transaction, the EPA protocol summarized in the sources for this article is a minimum 48 hour test under closed house conditions: windows and exterior doors stay closed, except for normal entry and exit, for 12 hours before and during the test. The test sits in the lowest level that could be used regularly, and it is ideally run by a certified third party tester rather than either party to the sale. That is the answer for a buyer inside an inspection window: do not wait for winter, run the transaction protocol. DHW advice for the negotiation itself is plain: ask for the test during the home inspection, and if levels are high, negotiate to have a mitigation system installed.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What Testing Costs in Idaho: Free First
</h2>
<p className="mb-6">
                Start with the free route. DHW offers Idaho residents a free test, one test every two years, if in stock, and that if in stock wording is on the DHW page as checked November 11, 2026, so treat a free kit as available when the program has them, not as guaranteed on any given day. DHW also links a discounted kit through Air Chek, and kits are sold at hardware and home improvement stores. The Idaho Radon Library Lending Program lends free kits through participating public libraries statewide.
</p>
<p className="mb-10">
                If you hire instead, certified testers and mitigators are listed through the National Radon Proficiency Program (nrpp.info) and the National Radon Safety Board (nrsb.org), per DHW. This guide publishes no professional testing fee, because no primary source checked for this article publishes one for Idaho. Ask a certified tester for a quote; that fee is a quote question, not a published statistic.
</p>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                How Mitigation Works, and What It Costs
</h2>
<p className="mb-6">
                The standard system is sub-slab depressurization, also called soil suction. A sealed pipe and a continuously running fan pull soil gas from beneath the slab and vent it above the roof, so the gas is drawn out before it can enter the living space. The EPA Consumer Guide to Radon Reduction, checked November 11, 2026, calls active subslab suction the most common and usually the most reliable radon reduction method, and says some radon reduction systems can reduce radon levels by up to 99 percent.
</p>
<p className="mb-6">
                After installation, retest no sooner than 24 hours after the system starts and within 30 days, then retest at least every two years. The fan should never be turned off; the system works because it runs continuously.
</p>
<div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
<div className="grid grid-cols-2 bg-[#1C1A17] px-6 py-4">
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Option</span>
<span className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Idaho DHW published cost</span>
</div>
{costRows.map((row) => (
<div key={row.basis} className="grid grid-cols-2 px-6 py-3 border-t border-[#E8DDD0] bg-[#F5EFE6]">
<span className="font-dm-sans text-sm text-[#5C5650] pr-3">{row.basis}</span>
<span className="font-dm-sans text-sm font-semibold text-[#1C1A17]">{row.figure}</span>
</div>
                  ))}
<p className="font-dm-sans text-xs text-[#9A9590] px-6 py-4 bg-[#F5EFE6] border-t border-[#E8DDD0]">All three figures are the Idaho DHW radon page published ranges, rechecked November 11, 2026, and DHW notes that costs vary by home. This guide publishes no national aggregator mitigation range; those figures are not Idaho figures and they conflict with the state published range.</p>
</div>
<div className="my-8 p-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  The Cost Ladder, High End of Each DHW Range
</h3>
<div className="space-y-4">
{costBars.map((bar) => (
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
<p className="font-dm-sans text-xs text-[#9A9590] mt-4">Put against a North Idaho home price, even the high end of the professional range is a small, bounded number. That is the practical reason radon should rarely be the issue that ends a purchase: it can be measured during inspection and fixed for a known range of cost.</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Building Codes, New Homes, and Renters
</h2>
<p className="mb-6">
                Radon resistant features in a new home cost $300 to $500 in DHW published figures and are easiest to install during construction, so a buyer building in North Idaho should ask the builder about radon resistant construction techniques early, while it is still the cheap version of the fix.
</p>
<p className="mb-10">
                Do not assume the code requires any of it. DHW states that radon control methods, described in International Residential Code Appendix F, are not required by law in Idaho unless a city or county has specifically adopted them into their local building codes. This article names no North Idaho county either way, because adoption status was not verified county by county for this guide; ask the building department for the specific property. For renters, DHW states that landlords are not required to test for or fix radon issues, but a renter can test the space and discuss the results with the landlord.
</p>
<div className="my-8 p-6 bg-[#1C1A17] rounded-sm">
<h3 className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-5">
                  The Buyer Sequence, in Order
</h3>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">During inspection:</span> ask for a radon test, run to the 48 hour closed house transaction protocol, in the lowest level that could be used regularly.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed mb-4">
                    <span className="text-[#F5EFE6] font-semibold">If the result is 4.0 or higher:</span> negotiate to have a mitigation system installed, priced against the DHW professional range of $1,500 to $3,500, and retest within 30 days of installation.
</p>
<p className="font-dm-sans text-sm text-[#9A9590] leading-relaxed">
                    <span className="text-[#F5EFE6] font-semibold">After you own it:</span> retest at least every two years and after remodeling, and keep the fan running. Questions go to the Idaho Radon Program at 1-800-445-8647 or radon@dhw.idaho.gov, per DHW.
</p>
</div>
<h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
</h2>
<div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6"><ul className="space-y-3">{sources.map((source) => <li key={source.label}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#96601A] hover:underline">{source.label}</a></li>)}</ul></div>
<p className="text-sm mb-10">
                Published November 11, 2026. Every statistic in this article is from the Idaho Department of Health and Welfare or the U.S. Environmental Protection Agency, as cited above and rechecked November 11, 2026. The 2 in 5 figure is a share of tested Idaho homes in DHW reporting, never a share of all homes, and no county average in this article is a prediction for an individual home. The Kootenai, Bonner, and Boundary Zone 1 assignments are stated from the EPA Map of Radon Zones for Idaho checked at build time; no aggregator is cited for them in the sources above. No professional testing fee is published, because none was verified from a primary source. No statement is made about whether a seller must disclose radon results; that question belongs to the disclosure rules, not to this testing guide. The standard test in a home purchase is an air test, and this guide covers radon in air only. This article is general information about radon testing and mitigation in Idaho, not medical, legal, or inspection advice. Your own test result, run to protocol on the specific home, is the number that matters.
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
                  Radon is one of the calmer items on a North Idaho inspection list, once you know the sequence. The ground here is Zone 1, so we test. The test can be free or low cost, the action level is a clear number, and if a home tests high, the fix is a standard system at a published range of cost that we can negotiate during the purchase. What I do not want for any buyer is the other path: skipping the test because the map felt abstract, then wondering about the basement for years. If you are weighing a North Idaho home and want help fitting a radon test into your inspection window, I am glad to help. No pressure, no pitch, just an honest conversation.
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
                Data sources: Idaho Department of Health and Welfare radon page and radon reporting; U.S. Environmental Protection Agency Map of Radon Zones, EPA map for Idaho, and Consumer Guide to Radon Reduction, each checked November 11, 2026, with basis stated in the article.
</p>
</article>
<aside className="lg:col-span-1 mt-12 lg:mt-0">
<div className="sticky top-28 space-y-6">
<div className="bg-[#1C1A17] rounded-sm p-6">
<p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Radon Guide</p>
<p className="font-dm-sans text-xs text-[#9A9590] mb-4">Sourced figures only · 2026</p>
<div className="space-y-3">
{[
                      { range: 'Ground', desc: 'Kootenai, Bonner, and Boundary Counties are EPA Zone 1' },
                      { range: 'Action level', desc: 'Fix at 4.0 pCi/L or higher; consider fixing at 2.0 to 4.0' },
                      { range: 'Testing', desc: 'Free DHW kit for residents when in stock; short term 3 to 7 days' },
                      { range: 'Mitigation', desc: 'Professional $1,500 to $3,500; DIY parts $300 to $600 (DHW)' },
                      { range: 'The rule', desc: 'A zone is not a result: only a test measures a home' }
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
<a href="/areas/coeur-dalene-idaho" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Coeur d&apos;Alene Real Estate</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The area guide for Coeur d&apos;Alene and Kootenai County buyers</p>
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
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">The area guide for Sandpoint and Bonner County buyers</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/homeowners-insurance-idaho-cost-wildfire-flood-coverage" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Homeowners Insurance in Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">What it costs and what it covers, including flood and wildfire</p>
</a>
</div>
<div className="border-t border-[#E8DDD0] pt-4">
<a href="/articles/earthquake-insurance-idaho-homeowners-policy" className="block group">
<p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Earthquake Insurance in Idaho</p>
<p className="font-dm-sans text-xs text-[#9A9590] mt-1">What a standard homeowners policy leaves out</p>
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
            Buying in North Idaho? Put a Radon Test in the Inspection Window.
</h2>
<p className="font-dm-sans text-[#9A9590] text-lg mb-10 leading-relaxed">
            Tell me the area and the kind of property you are looking at, and I will help you fit a radon test into your inspection plan while you still have time to act on the result.
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
