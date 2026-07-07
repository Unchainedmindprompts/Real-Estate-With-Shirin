import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Property Taxes in North Idaho: County Comparison 2025 | Shirin Abplanalp',
  description:
    'Official 2025 Idaho State Tax Commission property tax rates for Kootenai, Bonner, Boundary, Shoshone, and Benewah counties — plus the homeowner\'s exemption, Circuit Breaker, and Disabled Veterans programs explained for buyers.',
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/articles/north-idaho-property-taxes-county-comparison',
  },
  openGraph: {
    title: 'Property Taxes in North Idaho: Kootenai vs Bonner vs Boundary vs Shoshone vs Benewah (2025)',
    description:
      'Bonner County: 0.398%. Kootenai: 0.452%. Shoshone: 0.673%. Official 2025 rates from the Idaho State Tax Commission, plus every exemption program buyers should know.',
    url: 'https://www.realestatewithshirin.com/articles/north-idaho-property-taxes-county-comparison',
    type: 'article',
    publishedTime: '2026-05-20',
    authors: ['Shirin Abplanalp'],
    images: ['https://www.realestatewithshirin.com/images/north-idaho-property-taxes.webp'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-property-taxes-county-comparison#article',
  headline: 'Property Taxes in North Idaho: Kootenai vs Bonner vs Boundary vs Shoshone vs Benewah Counties (2025 Data)',
  description:
    "Official 2025 Idaho State Tax Commission property tax rates for the five panhandle counties, plus the homeowner's exemption, Circuit Breaker, and Disabled Veterans programs explained for buyers.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/north-idaho-property-taxes.webp',
    width: 1536,
    height: 1024,
  },
  author: { '@id': 'https://www.realestatewithshirin.com/#agent' },
  publisher: { '@id': 'https://www.realestatewithshirin.com/#business' },
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  datePublished: '2026-05-20T00:00:00-07:00',
  dateModified: '2026-05-20T00:00:00-07:00',
  mainEntityOfPage: 'https://www.realestatewithshirin.com/articles/north-idaho-property-taxes-county-comparison',
  url: 'https://www.realestatewithshirin.com/articles/north-idaho-property-taxes-county-comparison',
  keywords: [
    'North Idaho property taxes',
    'Kootenai County property tax rate 2025',
    'Bonner County property tax',
    'Idaho homeowner exemption',
    'Idaho Circuit Breaker program',
    'North Idaho property tax comparison',
    'Shoshone County tax rate',
    'Benewah County taxes',
    'Idaho State Tax Commission',
    'North Idaho relocation',
    'property tax by county Idaho',
    'Idaho disabled veterans property tax',
  ],
  articleSection: 'North Idaho Buyer Guides',
  wordCount: 3200,
  spatialCoverage: {
    '@type': 'Place',
    name: 'North Idaho',
    geo: { '@type': 'GeoShape', box: '45.5 -117.5 49.0 -114.5' },
  },
  about: [
    { '@type': 'AdministrativeArea', name: 'Kootenai County', sameAs: 'https://en.wikipedia.org/wiki/Kootenai_County,_Idaho', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'AdministrativeArea', name: 'Bonner County', sameAs: 'https://en.wikipedia.org/wiki/Bonner_County,_Idaho', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'AdministrativeArea', name: 'Boundary County', sameAs: 'https://en.wikipedia.org/wiki/Boundary_County,_Idaho', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'AdministrativeArea', name: 'Shoshone County', sameAs: 'https://en.wikipedia.org/wiki/Shoshone_County,_Idaho', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'AdministrativeArea', name: 'Benewah County', sameAs: 'https://en.wikipedia.org/wiki/Benewah_County,_Idaho', containedInPlace: { '@type': 'State', name: 'Idaho' } },
  ],
  mentions: [
    {
      '@type': 'GovernmentOrganization',
      name: 'Idaho State Tax Commission',
      url: 'https://tax.idaho.gov',
      sameAs: 'https://en.wikipedia.org/wiki/Idaho_State_Tax_Commission',
    },
    { '@type': 'GovernmentOrganization', name: 'Kootenai County Assessor', url: 'https://kcgov.us/958/Kootenai-County-Property-Tax-Rates' },
    { '@type': 'GovernmentOrganization', name: 'Bonner County Government', url: 'https://www.bonnercountyid.gov/' },
    { '@type': 'GovernmentOrganization', name: 'Boundary County Treasurer', url: 'https://boundarycountyid.org/site-page/treasurer' },
    { '@type': 'GovernmentOrganization', name: 'Shoshone County Treasurer', url: 'https://shoshonecounty.id.gov/treasurer/' },
    { '@type': 'GovernmentOrganization', name: 'Benewah County Treasurer', url: 'https://www.benewahcountyid.gov/departments/treasurer' },
    {
      '@type': 'Legislation',
      name: 'Idaho Code Title 63 — Revenue and Taxation',
      url: 'https://legislature.idaho.gov/statutesrules/idstat/Title63/',
    },
  ],
  citation: [
    { '@type': 'WebPage', name: 'Idaho State Tax Commission 2025 Average Property Tax Rates (EPB00129)', url: 'https://tax.idaho.gov/document-mngr/reports_epb00129/' },
    { '@type': 'WebPage', name: 'Idaho Property Tax Reduction (Circuit Breaker) Program', url: 'https://tax.idaho.gov/taxes/property/homeowners/reduction/' },
    { '@type': 'WebPage', name: 'Idaho State Tax Commission Property Homeowners Overview', url: 'https://tax.idaho.gov/taxes/property/homeowners/' },
    { '@type': 'WebPage', name: 'Kootenai County Property Tax Rates', url: 'https://kcgov.us/958/Kootenai-County-Property-Tax-Rates' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-property-taxes-county-comparison#faq',
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-property-taxes-county-comparison#article' },
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which North Idaho county has the lowest property tax rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Bonner County has the lowest overall property tax rate in the five-county panhandle at 0.398%, per the Idaho State Tax Commission's 2025 published averages. Boundary County is second at 0.405%, followed by Kootenai at 0.452%, Benewah at 0.601%, and Shoshone at 0.673%. All five panhandle counties except Shoshone run below the Idaho statewide average of 0.605%, and all five run well below the national median effective rate of approximately 1.02%.",
      },
    },
    {
      '@type': 'Question',
      name: "What is the Idaho homeowner's exemption and how much does it save?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Idaho homeowner's exemption removes the lesser of 50% of the home and one-acre value or $125,000 from the taxable value of an owner-occupied primary residence. This $125,000 cap has been in effect since 2021 per Idaho statute. On a $600,000 home in Kootenai County at the 0.452% average rate, the exemption saves approximately $565 per year. The exemption is one-time application through the county assessor and renews automatically as long as you continue to own and occupy the home.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Idaho Property Tax Reduction Circuit Breaker work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Circuit Breaker reduces property taxes by $250 to $1,500 per year for qualifying Idaho homeowners. To qualify in 2026, total 2025 household income must be $39,130 or less after medical expense deductions, and the applicant must meet at least one qualifying status — age 65 or older, blind, widowed, disabled, former POW or hostage, or a motherless or fatherless child under 18. Applications run January 1 through April 15 each year through the county assessor\'s office, and the reduction appears on the December property tax bill.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do veterans get a property tax break in Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Veterans rated 100% service-connected disabled by the U.S. Department of Veterans Affairs qualify for the Idaho Disabled Veterans Property Tax Reduction, worth up to $1,500 annually with no income limit. The reduction applies to a primary residence and up to one acre of land. Application is through the county assessor and requires current VA disability documentation. This benefit stacks with the standard homeowner\'s exemption.',
      },
    },
    {
      '@type': 'Question',
      name: "How is my property's assessed value determined in Idaho?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Idaho county assessors are required by law (Idaho Code 63‑205) to assess property at 90 to 100 percent of fair market value as of January 1 each year. The assessor reviews recent comparable sales, building permits, and physical changes to the property. You receive a value notice in May, and if you disagree, you can meet with the assessor or file a formal appeal with the county Board of Equalization. If you purchase a home for significantly more than its current assessed value, expect the assessor to revalue the property at or near your purchase price the following year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are Shoshone and Benewah County rates higher than Kootenai or Bonner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Smaller populations spread a similar baseline of taxing-district costs across fewer taxpayers. Shoshone County, with roughly 13,000 residents, and Benewah County, with roughly 9,000, both support school districts, fire districts, EMS, hospital districts, and road levies that exist regardless of population. Kootenai County\'s much larger tax base (180,000+ residents) allows comparable services to be funded at a lower rate per parcel. This is a structural pattern across the rural Mountain West, not specific to North Idaho.',
      },
    },
    {
      '@type': 'Question',
      name: 'When are Idaho property taxes due?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Idaho property taxes are billed by the county treasurer in late November each year. Taxes can be paid in full by December 20, or in two installments — half by December 20 and the second half by June 20 of the following year. Late payments accrue interest at 1% per month plus a 2% late fee. Each of the five panhandle county treasurers — Kootenai, Bonner, Boundary, Shoshone, and Benewah — publishes payment portals and tax statement lookup tools online.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I rely on this article for my property tax planning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No — this article is informational and reflects 2025 published data from the Idaho State Tax Commission and county assessor sources. Tax rates change annually, levy district boundaries can shift, and the Idaho Legislature periodically modifies exemption amounts and program rules. Before making purchase, exemption, or tax-planning decisions, consult a licensed Idaho CPA or tax attorney, and verify current rates and program details directly with your county assessor. Shirin Abplanalp is a licensed REALTOR® and Seniors Real Estate Specialist®, not a tax professional.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-property-taxes-county-comparison#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Property Taxes in North Idaho: County Comparison 2025',
      item: 'https://www.realestatewithshirin.com/articles/north-idaho-property-taxes-county-comparison',
    },
  ],
}

const NATIONAL_MEDIAN = 1.02

const countyRates = [
  { name: 'Bonner', overall: 0.398, urban: 0.616, rural: 0.350, est600k: 1900 },
  { name: 'Boundary', overall: 0.405, urban: 0.565, rural: 0.373, est600k: 1950 },
  { name: 'Kootenai', overall: 0.452, urban: 0.541, rural: 0.341, est600k: 2150 },
  { name: 'Benewah', overall: 0.601, urban: 0.846, rural: 0.545, est600k: 2850 },
  { name: 'Shoshone', overall: 0.673, urban: 0.842, rural: 0.544, est600k: 3200 },
]

const countyDetails = [
  {
    name: 'Kootenai County',
    rate: '0.452% overall',
    url: 'https://kcgov.us/958/Kootenai-County-Property-Tax-Rates',
    content: (
      <>
        <a href="https://kcgov.us/958/Kootenai-County-Property-Tax-Rates" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Kootenai County</a> covers Coeur d&apos;Alene, Post Falls, Hayden, Rathdrum, and the surrounding Rathdrum Prairie — the largest population center in North Idaho at 180,000+ residents. That broad tax base is the single biggest reason the overall rate sits 31% below the statewide average. The county itself levies roughly $126 per $100,000 of value; the larger share of your bill comes from school, city, fire, and library levies layered on top. School districts 271 (Coeur d&apos;Alene), 273 (Post Falls), and 272 (Lakeland) each carry their own voter-approved bond and supplemental levy — covered in the companion article on <a href="/articles/north-idaho-school-districts-open-enrollment-charters" className="text-[#C4842A] hover:underline">North Idaho school districts</a>.
      </>
    ),
  },
  {
    name: 'Bonner County',
    rate: '0.398% overall',
    url: 'https://www.bonnercountyid.gov/',
    content: (
      <>
        Bonner County — Sandpoint, Priest River, Ponderay, Hope, Clark Fork, and the Priest Lake area — has the <strong className="text-[#1C1A17]">lowest overall rate in the five-county panhandle</strong>. Its 0.350% rural average is the lowest rural rate in North Idaho. Buyers should request the specific taxing district levy list from the county assessor for any parcel, because rates vary considerably between the City of Sandpoint and unincorporated rural zones. For buyers considering Bonner County&apos;s lake-adjacent market alongside the snowfall data, the <a href="/articles/snowiest-cities-north-idaho-ranking" className="text-[#C4842A] hover:underline">snowiest cities ranking</a> covers what the property tax savings come with in terms of winter management.
      </>
    ),
  },
  {
    name: 'Boundary County',
    rate: '0.405% overall',
    url: 'https://boundarycountyid.org/site-page/treasurer',
    content: (
      <>
        Boundary County, with Bonners Ferry as the county seat, sits just behind Bonner at 0.405%. Its small but stable tax base supports fewer overlapping districts than Kootenai. For buyers evaluating the northernmost panhandle — where remaining inventory below $400,000 is still real — Boundary&apos;s combination of low rates and rural land availability is a meaningful affordability story. The 0.373% rural average makes unincorporated acreage in Boundary County among the most tax-efficient in Idaho.
      </>
    ),
  },
  {
    name: 'Benewah County',
    rate: '0.601% overall',
    url: 'https://www.benewahcountyid.gov/departments/treasurer',
    content: (
      <>
        Benewah County — St. Maries, Plummer, Tensed — runs higher than its northern neighbors, with the 0.846% urban rate inside St. Maries the second-highest urban rate in the panhandle. The math reflects roughly 9,000 residents supporting school, road, fire, hospital, and ambulance districts that need a baseline level of funding regardless of how many taxpayers split the bill. Rural Benewah at 0.545% is closer to the statewide average and may be competitive for buyers focused on St. Joe River corridor acreage.
      </>
    ),
  },
  {
    name: 'Shoshone County',
    rate: '0.673% overall',
    url: 'https://shoshonecounty.id.gov/treasurer/',
    content: (
      <>
        Shoshone County — Kellogg, Wallace, Pinehurst, Mullan, Smelterville — carries the <strong className="text-[#1C1A17]">highest overall rate in the panhandle</strong>, with the 0.842% urban average reflecting Silver Valley municipal levies for fire, EMS, and the hospital district. Rural Shoshone at 0.544% remains competitive with state averages. Buyers comparing in-town Kellogg or Wallace inventory against unincorporated parcels near <a href="/articles/snowiest-cities-north-idaho-ranking" className="text-[#C4842A] hover:underline">Silver Mountain and Lookout Pass</a> should specifically price in the urban-rural rate gap — on a $500,000 home it can be $1,000 or more per year.
      </>
    ),
  },
]

const faqs = [
  {
    q: 'Which North Idaho county has the lowest property tax rate?',
    a: "Bonner County has the lowest overall property tax rate in the five-county panhandle at 0.398%, per the Idaho State Tax Commission's 2025 published averages. Boundary County is second at 0.405%, followed by Kootenai at 0.452%, Benewah at 0.601%, and Shoshone at 0.673%. All five panhandle counties except Shoshone run below the Idaho statewide average of 0.605%, and all five run well below the national median effective rate of approximately 1.02%.",
  },
  {
    q: "What is the Idaho homeowner's exemption and how much does it save?",
    a: "The Idaho homeowner's exemption removes the lesser of 50% of the home and one-acre value or $125,000 from the taxable value of an owner-occupied primary residence. This $125,000 cap has been in effect since 2021 per Idaho statute. On a $600,000 home in Kootenai County at the 0.452% average rate, the exemption saves approximately $565 per year. The exemption is one-time application through the county assessor and renews automatically as long as you continue to own and occupy the home.",
  },
  {
    q: 'How does the Idaho Property Tax Reduction Circuit Breaker work?',
    a: "The Circuit Breaker reduces property taxes by $250 to $1,500 per year for qualifying Idaho homeowners. To qualify in 2026, total 2025 household income must be $39,130 or less after medical expense deductions, and the applicant must meet at least one qualifying status — age 65 or older, blind, widowed, disabled, former POW or hostage, or a motherless or fatherless child under 18. Applications run January 1 through April 15 each year through the county assessor's office, and the reduction appears on the December property tax bill.",
  },
  {
    q: 'Do veterans get a property tax break in Idaho?',
    a: "Yes. Veterans rated 100% service-connected disabled by the U.S. Department of Veterans Affairs qualify for the Idaho Disabled Veterans Property Tax Reduction, worth up to $1,500 annually with no income limit. The reduction applies to a primary residence and up to one acre of land. Application is through the county assessor and requires current VA disability documentation. This benefit stacks with the standard homeowner's exemption.",
  },
  {
    q: "How is my property's assessed value determined in Idaho?",
    a: 'Idaho county assessors are required by law (Idaho Code 63‑205) to assess property at 90 to 100 percent of fair market value as of January 1 each year. The assessor reviews recent comparable sales, building permits, and physical changes to the property. You receive a value notice in May, and if you disagree, you can meet with the assessor or file a formal appeal with the county Board of Equalization. If you purchase a home for significantly more than its current assessed value, expect the assessor to revalue the property at or near your purchase price the following year.',
  },
  {
    q: 'Why are Shoshone and Benewah County rates higher than Kootenai or Bonner?',
    a: "Smaller populations spread a similar baseline of taxing-district costs across fewer taxpayers. Shoshone County, with roughly 13,000 residents, and Benewah County, with roughly 9,000, both support school districts, fire districts, EMS, hospital districts, and road levies that exist regardless of population. Kootenai County's much larger tax base (180,000+ residents) allows comparable services to be funded at a lower rate per parcel. This is a structural pattern across the rural Mountain West, not specific to North Idaho.",
  },
  {
    q: 'When are Idaho property taxes due?',
    a: 'Idaho property taxes are billed by the county treasurer in late November each year. Taxes can be paid in full by December 20, or in two installments — half by December 20 and the second half by June 20 of the following year. Late payments accrue interest at 1% per month plus a 2% late fee. Each of the five panhandle county treasurers — Kootenai, Bonner, Boundary, Shoshone, and Benewah — publishes payment portals and tax statement lookup tools online.',
  },
  {
    q: 'Should I rely on this article for my property tax planning?',
    a: "No — this article is informational and reflects 2025 published data from the Idaho State Tax Commission and county assessor sources. Tax rates change annually, levy district boundaries can shift, and the Idaho Legislature periodically modifies exemption amounts and program rules. Before making purchase, exemption, or tax-planning decisions, consult a licensed Idaho CPA or tax attorney, and verify current rates and program details directly with your county assessor. Shirin Abplanalp is a licensed REALTOR® and Seniors Real Estate Specialist®, not a tax professional.",
  },
]

export default function PropertyTaxesArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#F5EFE6] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm text-[#9A9590] mb-6 font-dm-sans" aria-label="Breadcrumb">
            <a href="/" className="hover:text-[#C4842A] transition-colors">Home</a>
            <span className="mx-2">·</span>
            <a href="/articles" className="hover:text-[#C4842A] transition-colors">Articles</a>
            <span className="mx-2">·</span>
            <span className="text-[#5C5650]">Property Taxes in North Idaho</span>
          </nav>
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">North Idaho Buyer Guides</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">13 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">May 2026</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Property Taxes in North Idaho: Kootenai vs Bonner vs Boundary vs Shoshone vs Benewah (2025 Data)
          </h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            Every North Idaho county except Shoshone runs below the Idaho statewide average — and all five run well below the national median. Here are the official 2025 rates, how Idaho calculates your bill, and every exemption program worth knowing before you close.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/shirin-headshot-studio.webp"
              alt="Shirin Abplanalp, Licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · SRES® · Berkshire Hathaway HomeServices Jacklin Real Estate · May 20, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1C1A17] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">0.398%</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Bonner Co. — lowest</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">2025 overall avg rate</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">0.452%</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Kootenai Co.</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">31% below state avg</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$125K</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Homeowner&apos;s exemption</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Removed from taxable value</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">1.02%</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">National median</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">All 5 counties far below</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="w-full">
        <img
          src="/images/north-idaho-property-taxes.webp"
          alt="North Idaho property tax rates across 5 counties — infographic showing Bonner 0.398%, Boundary 0.405%, Kootenai 0.452%, Benewah 0.601%, Shoshone 0.673%"
          className="w-full h-auto block"
        />
      </div>

      {/* Article Body */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">

            {/* Article */}
            <article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">

              <p className="mb-6">
                Property tax is one of the few hard numbers in a real estate decision that you can actually look up before closing — and one of the most consistently under-researched by out-of-state buyers. Comparing North Idaho&apos;s five panhandle counties shows meaningful differences: Bonner County&apos;s 0.398% overall rate and Shoshone County&apos;s 0.673% are separated by nearly 70%, and the urban-vs-rural gap within every county creates a second layer of variation that county averages alone don&apos;t capture.
              </p>
              <p className="mb-10">
                The rates below come from the{' '}
                <a href="https://tax.idaho.gov/document-mngr/reports_epb00129/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Idaho State Tax Commission&apos;s 2025 Average Property Tax Rates report (EPB00129)</a>, published November 25, 2025, based on actual levied amounts. These are official figures — not estimates or third-party data aggregations.
              </p>

              <p className="mb-10">Property taxes are one part of the cost picture. For the full breakdown &mdash; income taxes, cost of living, home prices, and how North Idaho compares to California and Washington &mdash; see:{' '}<a href="/relocating-to-north-idaho" className="text-[#C4842A] hover:underline">Relocating to North Idaho: The Complete Local Guide for Out-of-State Buyers</a>.</p>

              {/* How it works */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                How Idaho property tax actually works
              </h2>
              <p className="mb-6">
                Idaho property tax is calculated at the county level but governed by state law (Idaho Code Title 63). Three numbers determine your bill:
              </p>
              <div className="my-6 space-y-4">
                {[
                  {
                    num: '1',
                    label: 'Assessed value',
                    desc: "The county assessor sets market value for every property as of January 1 each year. By law (Idaho Code 63‑205), assessed value must be 90–100% of fair market value. You receive a value notice in May and can appeal to the county Board of Equalization.",
                  },
                  {
                    num: '2',
                    label: 'Taxable value',
                    desc: "This is assessed value minus exemptions. For an owner-occupied primary residence, the homeowner's exemption removes the lesser of 50% of the home and one-acre value or $125,000 — the cap that has been in effect since 2021.",
                  },
                  {
                    num: '3',
                    label: 'Levy rate',
                    desc: "Each taxing district inside your county — school district, city, fire, library, ambulance, county itself, sometimes 30 or more districts overlapping — sets its own levy. Your total levy is the sum of every district that taxes your specific parcel. Kootenai County alone collects for approximately 45 taxing districts.",
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4 border-l-2 border-[#C4842A] pl-5">
                    <span className="font-cormorant text-2xl text-[#C4842A] font-semibold flex-shrink-0 leading-none mt-0.5">{item.num}</span>
                    <div>
                      <p className="font-dm-sans text-base font-semibold text-[#1C1A17] mb-1">{item.label}</p>
                      <p className="font-dm-sans text-sm text-[#5C5650] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mb-10">
                The formula is simple: <strong className="text-[#1C1A17]">(Assessed Value − Exemptions) × Levy Rate = Annual Tax</strong>. The complexity hides in the levy, because two homes on opposite sides of the same street can sit in different fire or school districts and pay meaningfully different bills.
              </p>

              {/* Rate Comparison Chart */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The 2025 ranking — five counties, official rates
              </h2>
              <p className="mb-6">
                These are the 2025 average property tax rates published by the Idaho State Tax Commission. Urban rates apply inside incorporated city limits; rural rates apply in unincorporated areas; the overall average blends both. Bars below are scaled to the national median (1.02%) as the 100% benchmark.
              </p>

              <div className="my-8 bg-[#1C1A17] rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#2C2A27] flex items-center justify-between flex-wrap gap-2">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Overall Average Rate — Scaled to National Median</p>
                  <p className="font-dm-sans text-xs text-[#6B7A8D]">Source: Idaho STC Report EPB00129 (2025)</p>
                </div>
                <div className="px-6 py-5 space-y-5">
                  {countyRates.map((row) => {
                    const pct = Math.round((row.overall / NATIONAL_MEDIAN) * 100)
                    return (
                      <div key={row.name}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-dm-sans text-sm font-semibold text-[#FAFAF8]">{row.name} County</span>
                          <span className="font-dm-sans text-sm font-semibold text-[#C4842A]">{row.overall.toFixed(3)}%</span>
                        </div>
                        <div className="h-2.5 bg-[#2C2A27] rounded-full overflow-hidden">
                          <div className="h-full rounded-full bg-[#C4842A]" style={{ width: `${pct}%` }} />
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="font-dm-sans text-xs text-[#6B7A8D]">Urban: {row.urban.toFixed(3)}% · Rural: {row.rural.toFixed(3)}%</span>
                          <span className="font-dm-sans text-xs text-[#6B7A8D]">{pct}% of national median</span>
                        </div>
                      </div>
                    )
                  })}
                  {/* Reference rows */}
                  <div className="pt-4 border-t border-[#2C2A27] space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-dm-sans text-xs text-[#9A9590] italic">Idaho statewide avg</span>
                        <span className="font-dm-sans text-xs text-[#9A9590]">0.605%</span>
                      </div>
                      <div className="h-1.5 bg-[#2C2A27] rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-[#5C5650]" style={{ width: `${Math.round((0.605 / NATIONAL_MEDIAN) * 100)}%` }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-dm-sans text-xs text-[#9A9590] italic">National median</span>
                        <span className="font-dm-sans text-xs text-[#9A9590]">~1.02%</span>
                      </div>
                      <div className="h-1.5 bg-[#2C2A27] rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-[#3A3530]" style={{ width: '100%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimated taxes table */}
              <p className="mb-4">
                On a <strong className="text-[#1C1A17]">$600,000 home with the homeowner&apos;s exemption applied</strong>, estimated annual property taxes by county:
              </p>
              <div className="my-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#E8DDD0]">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Estimated Annual Tax — $600K Home, Homeowner&apos;s Exemption Applied</p>
                </div>
                <div className="divide-y divide-[#E8DDD0]">
                  {countyRates.map((row) => (
                    <div key={row.name} className="px-6 py-3.5 flex items-center justify-between">
                      <span className="font-dm-sans text-sm text-[#1C1A17] font-semibold">{row.name} County</span>
                      <div className="text-right">
                        <span className="font-cormorant text-xl text-[#C4842A] font-semibold">~${row.est600k.toLocaleString()}</span>
                        <span className="font-dm-sans text-xs text-[#9A9590] ml-2">/ yr</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-3 border-t border-[#E8DDD0]">
                  <p className="font-dm-sans text-xs text-[#9A9590]">Before senior or veteran reductions. Estimates based on overall average rates; actual bills vary by taxing district.</p>
                </div>
              </div>

              <p className="mb-10">
                Three observations worth noting: Bonner County&apos;s low overall rate, combined with the homeowner&apos;s exemption, produces some of the most tax-efficient lake-adjacent ownership in the Mountain West. Kootenai&apos;s broad tax base keeps the most populous county well below the statewide average — unusual for any county above 150,000 residents. And Shoshone and Benewah&apos;s higher rates aren&apos;t dysfunction — they&apos;re a structural reality of smaller populations funding fixed-cost public services.
              </p>

              {/* County-by-county */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-5 font-semibold">
                County-by-county detail
              </h2>
              <div className="space-y-6 mb-10">
                {countyDetails.map((county) => (
                  <div key={county.name} className="border-l-2 border-[#C4842A] pl-5">
                    <div className="flex items-baseline gap-3 mb-2">
                      <p className="font-cormorant text-2xl text-[#1C1A17] font-semibold">{county.name}</p>
                      <span className="font-dm-sans text-sm text-[#C4842A] font-semibold">{county.rate}</span>
                    </div>
                    <p className="font-dm-sans text-[16px] text-[#5C5650] leading-relaxed">{county.content}</p>
                  </div>
                ))}
              </div>

              {/* Homeowner's Exemption */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-5 font-semibold">
                The homeowner&apos;s exemption — apply the day you close
              </h2>
              <p className="mb-6">
                The homeowner&apos;s exemption is the single largest property tax break available to Idaho residents. From the{' '}
                <a href="https://tax.idaho.gov/taxes/property/homeowners/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Idaho State Tax Commission</a>:
              </p>
              <div className="my-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#E8DDD0]">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Homeowner&apos;s Exemption — Key Terms</p>
                </div>
                <div className="divide-y divide-[#E8DDD0]">
                  {[
                    { label: 'Amount', value: 'The lesser of 50% of home + up to one acre value, or $125,000 (cap since 2021)' },
                    { label: 'Eligibility', value: 'Owner-occupied primary residence, including manufactured homes on owned land' },
                    { label: 'Application', value: 'One-time filing through your county assessor — renews automatically each year you continue to own and occupy' },
                    { label: 'Deadline', value: 'December 31 for that year\'s bill; apply by April 15 for full benefit. Late applications pro-rated quarterly' },
                    { label: 'Annual savings at Kootenai 0.452%', value: '~$565 on a $600K home' },
                    { label: 'Annual savings at Shoshone 0.673%', value: '~$840 on a $600K home' },
                  ].map((item) => (
                    <div key={item.label} className="px-6 py-3.5 flex gap-4">
                      <span className="font-dm-sans text-xs font-semibold text-[#9A9590] uppercase tracking-wide w-48 flex-shrink-0 pt-0.5">{item.label}</span>
                      <span className="font-dm-sans text-sm text-[#5C5650]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mb-10">
                Apply the moment you close. Re-confirm the exemption is on your annual tax bill — assessor offices occasionally drop it after a deed change, and catching the omission in December is too late to recover that year&apos;s savings.
              </p>

              {/* Circuit Breaker */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The Circuit Breaker — Idaho&apos;s Property Tax Reduction program
              </h2>
              <p className="mb-6">
                Idaho&apos;s{' '}
                <a href="https://tax.idaho.gov/taxes/property/homeowners/reduction/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Property Tax Reduction program</a>{' '}
                — colloquially the &ldquo;Circuit Breaker&rdquo; — reduces taxes for qualifying homeowners by <strong className="text-[#1C1A17]">$250 to $1,500 per year</strong> on a primary residence and up to one acre. Eligibility is income-tested and requires the applicant to meet at least one qualifying status:
              </p>
              <div className="my-6 bg-[#1C1A17] rounded-sm p-6">
                <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Circuit Breaker — Who Qualifies</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {['Age 65 or older', 'Blind', 'Widowed', 'Disabled', 'Former POW or hostage', 'Motherless or fatherless child under 18'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C4842A] flex-shrink-0" />
                      <span className="font-dm-sans text-sm text-[#FAFAF8]">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-[#2C2A27] space-y-2">
                  <div className="flex gap-3">
                    <span className="font-dm-sans text-xs text-[#9A9590] uppercase tracking-wide w-36 flex-shrink-0">Income limit (2026)</span>
                    <span className="font-dm-sans text-sm text-[#FAFAF8]">$39,130 or less in 2025 household income after medical deductions</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-dm-sans text-xs text-[#9A9590] uppercase tracking-wide w-36 flex-shrink-0">Application window</span>
                    <span className="font-dm-sans text-sm text-[#FAFAF8]">January 1 through April 15 each year, through your county assessor</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-dm-sans text-xs text-[#9A9590] uppercase tracking-wide w-36 flex-shrink-0">When it appears</span>
                    <span className="font-dm-sans text-sm text-[#FAFAF8]">On your December property tax bill</span>
                  </div>
                </div>
              </div>
              <p className="mb-10">
                For senior buyers — a meaningful share of the North Idaho relocation market — this program plus the homeowner&apos;s exemption can drop an effective property tax bill by $2,500 or more annually on a typical $500,000 home. As a{' '}
                <a href="/about" className="text-[#C4842A] hover:underline">Seniors Real Estate Specialist® (SRES®)</a>,
                I walk every qualifying client through the Circuit Breaker math before they close, because the deadlines are tight and the program is not automatic.
              </p>

              {/* Veterans */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The 100% Service-Connected Disabled Veterans benefit
              </h2>
              <p className="mb-10">
                Veterans rated 100% service-connected disabled by the U.S. Department of Veterans Affairs qualify for a separate property tax reduction of up to <strong className="text-[#1C1A17]">$1,500 annually — with no income limit</strong>. Application is through the county assessor and requires VA disability documentation. This benefit stacks with the homeowner&apos;s exemption, making it the most powerful combination of property tax relief available to Idaho homeowners.
              </p>

              {/* What to verify */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                What to verify before closing
              </h2>
              <p className="mb-6">
                Statewide averages are useful for ranking counties, but your specific parcel&apos;s tax bill depends on which taxing districts cover that exact lot. Before you finalize an offer:
              </p>
              <div className="my-6 space-y-4">
                {[
                  { num: '1', label: 'Pull the current tax statement', desc: 'Kootenai, Bonner, Boundary, Shoshone, and Benewah all publish parcel-level tax history online through their county treasurer portals.' },
                  { num: '2', label: "Confirm the homeowner's exemption status", desc: "If the seller is a primary-residence owner, the exemption should be on the parcel. If they're a second-home or investment owner, you'll need to apply yourself after closing." },
                  { num: '3', label: 'Request the taxing district list', desc: 'Ask the assessor for the specific districts that levy on the parcel. Two homes 500 feet apart can sit in different fire or school zones — and pay meaningfully different bills.' },
                  { num: '4', label: 'Model the new assessed value', desc: "If you're paying significantly above the current assessment, expect the assessor to revalue at or near your purchase price the following year. Budget accordingly." },
                  { num: '5', label: 'Check for pending levy elections', desc: 'School bonds and supplemental levies appear on May and November ballots and can shift your rate by 10–20 basis points. Ask the assessor about any upcoming measures.' },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4 border border-[#E8DDD0] rounded-sm p-5 bg-white">
                    <span className="font-cormorant text-2xl text-[#C4842A] font-semibold flex-shrink-0 leading-none mt-0.5">{item.num}</span>
                    <div>
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] mb-1">{item.label}</p>
                      <p className="font-dm-sans text-sm text-[#5C5650] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sources / Disclaimer */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-5 font-semibold">
                Sources and data verification
              </h2>
              <p className="mb-4">The data in this article comes from the following primary sources:</p>
              <div className="my-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                <ul className="space-y-2">
                  {[
                    { label: 'Idaho STC — 2025 Average Property Tax Rates (EPB00129)', url: 'https://tax.idaho.gov/document-mngr/reports_epb00129/' },
                    { label: 'Idaho STC — Property Tax Reduction (Circuit Breaker)', url: 'https://tax.idaho.gov/taxes/property/homeowners/reduction/' },
                    { label: 'Idaho STC — Property Homeowners Overview', url: 'https://tax.idaho.gov/taxes/property/homeowners/' },
                    { label: 'Kootenai County Assessor — Property Tax Rates', url: 'https://kcgov.us/958/Kootenai-County-Property-Tax-Rates' },
                    { label: 'Bonner County Government', url: 'https://www.bonnercountyid.gov/' },
                    { label: 'Boundary County Treasurer', url: 'https://boundarycountyid.org/site-page/treasurer' },
                    { label: 'Shoshone County Treasurer', url: 'https://shoshonecounty.id.gov/treasurer/' },
                    { label: 'Benewah County Treasurer', url: 'https://www.benewahcountyid.gov/departments/treasurer' },
                    { label: 'Idaho Code Title 63 — Revenue and Taxation', url: 'https://legislature.idaho.gov/statutesrules/idstat/Title63/' },
                  ].map((source) => (
                    <li key={source.label} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C4842A] flex-shrink-0 mt-2" />
                      <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-dm-sans text-sm text-[#C4842A] hover:underline leading-relaxed">{source.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="my-6 border border-[#E8DDD0] rounded-sm p-6 bg-white">
                <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] mb-2">Important disclaimer</p>
                <p className="font-dm-sans text-sm text-[#5C5650] leading-relaxed">
                  This article is for informational and educational purposes only and does not constitute tax, legal, or financial advice. Tax rates change annually, taxing district boundaries change, and exemption rules can be modified by the Idaho Legislature. Levy rates published here reflect 2025 data and will be updated when 2026 numbers are released. Before making any purchase, exemption claim, or tax-planning decision based on this information, consult with a licensed Idaho CPA, a tax attorney, or your county assessor&apos;s office directly. Shirin Abplanalp is a licensed REALTOR® and SRES®, not a tax professional.
                </p>
              </div>

              {/* FAQ */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-6 font-semibold">
                Frequently asked questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
                    <h3 className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-3">{faq.q}</h3>
                    <p className="font-dm-sans text-[15px] text-[#5C5650] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="lg:sticky lg:top-8 space-y-6">

                {/* County Rates Quick Reference */}
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">2025 County Rates — Quick Reference</p>
                  <div className="space-y-3">
                    {[
                      { county: 'Bonner', overall: '0.398%', urban: '0.616%', rural: '0.350%' },
                      { county: 'Boundary', overall: '0.405%', urban: '0.565%', rural: '0.373%' },
                      { county: 'Kootenai', overall: '0.452%', urban: '0.541%', rural: '0.341%' },
                      { county: 'Benewah', overall: '0.601%', urban: '0.846%', rural: '0.545%' },
                      { county: 'Shoshone', overall: '0.673%', urban: '0.842%', rural: '0.544%' },
                    ].map((row) => (
                      <div key={row.county} className="border-b border-[#2C2A27] pb-3 last:border-0 last:pb-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-dm-sans text-sm font-semibold text-[#FAFAF8]">{row.county} County</span>
                          <span className="font-cormorant text-lg text-[#C4842A] font-semibold">{row.overall}</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="font-dm-sans text-xs text-[#6B7A8D]">Urban: {row.urban}</span>
                          <span className="font-dm-sans text-xs text-[#6B7A8D]">Rural: {row.rural}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="font-dm-sans text-xs text-[#6B7A8D] mt-4 pt-4 border-t border-[#2C2A27]">
                    Source: Idaho STC EPB00129, Nov 25, 2025.
                  </p>
                </div>

                {/* Relief Programs */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Tax Relief Programs</p>
                  <div className="space-y-4">
                    {[
                      { name: "Homeowner's Exemption", key: 'Up to $125K off taxable value', sub: 'Apply once at county assessor. Auto-renews.' },
                      { name: 'Circuit Breaker', key: '$250–$1,500 reduction/yr', sub: 'Income ≤ $39,130. Apply Jan 1–Apr 15.' },
                      { name: 'Disabled Veterans', key: 'Up to $1,500/yr', sub: '100% VA rating. No income limit. Stacks with exemption.' },
                    ].map((prog) => (
                      <div key={prog.name} className="border-t border-[#E8DDD0] pt-4 first:border-0 first:pt-0">
                        <p className="font-dm-sans text-xs font-semibold text-[#1C1A17] mb-0.5">{prog.name}</p>
                        <p className="font-dm-sans text-sm font-semibold text-[#C4842A]">{prog.key}</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-0.5">{prog.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* About Shirin */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Your Local Agent</p>
                  <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp, Licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate" className="w-16 h-16 rounded-full object-cover mb-3" />
                  <p className="font-cormorant text-xl text-[#1C1A17] font-semibold mb-1">Shirin Abplanalp</p>
                  <p className="font-dm-sans text-xs text-[#9A9590] mb-3">Licensed REALTOR® · SRES® · Berkshire Hathaway HomeServices Jacklin Real Estate · #1371861</p>
                  <p className="font-dm-sans text-xs text-[#5C5650] leading-relaxed mb-4">
                    Every buyer I work with gets the parcel-level tax history pulled, the homeowner&apos;s exemption status confirmed, and a Circuit Breaker walkthrough if they qualify — before they close.
                  </p>
                  <a href="/contact" className="block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    Ask Shirin
                  </a>
                </div>

                {/* Related Articles */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Articles</p>
                  <div className="space-y-4">
                    <a href="/articles/north-idaho-school-districts-open-enrollment-charters" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho School Districts: Open Enrollment, Charters, and District Boundaries</p>
                      <p className="font-dm-sans text-xs text-[#9A9590] mt-1">CdA 271, Post Falls 273, and Lakeland 272 compared</p>
                    </a>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/snowiest-cities-north-idaho-ranking" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Snowiest Cities in North Idaho: A Data-Backed Ranking</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">What the winter means for each county</p>
                      </a>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/how-much-do-homes-cost-post-falls-idaho" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">How Much Do Homes Cost in Post Falls?</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">Price breakdown by budget, 2026</p>
                      </a>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/sres-designation-real-estate-after-55-north-idaho" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Real Estate After 55 in North Idaho: The SRES® Guide</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">Senior programs and why the designation matters</p>
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
          <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">North Idaho Relocation</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-[#FAFAF8] mb-6 leading-tight font-semibold">
            Want the Specific Tax Numbers for a Property You&apos;re Considering?
          </h2>
          <p className="font-dm-sans text-[#C4BDB4] text-lg mb-10 leading-relaxed">
            I&apos;ll pull the parcel-level tax history, confirm the homeowner&apos;s exemption status, and walk through the Circuit Breaker math if you qualify — before you make an offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold py-4 px-8 transition-colors">
              Get in Touch
            </a>
            <a href="/articles/how-much-do-homes-cost-post-falls-idaho" className="border border-[#5C5650] hover:border-[#9A9590] text-[#C4BDB4] hover:text-[#FAFAF8] font-dm-sans font-semibold py-4 px-8 transition-colors">
              See Post Falls Home Prices
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
