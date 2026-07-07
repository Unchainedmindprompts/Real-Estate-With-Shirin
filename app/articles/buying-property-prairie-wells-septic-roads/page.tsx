import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buying Property on the Prairie: Wells, Septic, and Road Rights-of-Way | Shirin Abplanalp',
  description:
    "A working Realtor's guide to the real infrastructure costs of buying raw land or rural homes in Kootenai County: well drilling depths, Panhandle Health District septic requirements, and private road maintenance realities.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/articles/buying-property-prairie-wells-septic-roads',
  },
  openGraph: {
    title: 'Buying Property on the Prairie: Well Depths, Septic Systems, and County Road Rights-of-Way',
    description:
      'The infrastructure costs most relocation buyers never see coming — wells, septic permits, and who actually plows the road in February.',
    url: 'https://www.realestatewithshirin.com/articles/buying-property-prairie-wells-septic-roads',
    type: 'article',
    publishedTime: '2026-05-19',
    authors: ['Shirin Abplanalp'],
    images: ['https://www.realestatewithshirin.com/images/north-idaho-prairie-acreage.webp'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.realestatewithshirin.com/articles/buying-property-prairie-wells-septic-roads#article',
  headline: 'Buying Property on the Prairie: Well Depths, Septic Systems, and County Road Rights-of-Way',
  description:
    "A working Realtor's guide to the real infrastructure costs of buying raw land or rural homes in Kootenai County: well drilling depths, Panhandle Health District septic requirements, and private road maintenance realities.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/north-idaho-prairie-acreage.webp',
    width: 1672,
    height: 941,
  },
  author: { '@id': 'https://www.realestatewithshirin.com/#agent' },
  publisher: { '@id': 'https://www.realestatewithshirin.com/#business' },
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  datePublished: '2026-05-19T00:00:00-07:00',
  dateModified: '2026-05-19T00:00:00-07:00',
  mainEntityOfPage: 'https://www.realestatewithshirin.com/articles/buying-property-prairie-wells-septic-roads',
  url: 'https://www.realestatewithshirin.com/articles/buying-property-prairie-wells-septic-roads',
  keywords: [
    'raw land Kootenai County',
    'well drilling North Idaho',
    'Panhandle Health District septic',
    'Rathdrum Prairie Aquifer',
    'private road easement Idaho',
    'IDWR well permit',
    'rural acreage Athol',
    'Harrison Idaho land',
    'no HOA acreage',
    'Kootenai County road maintenance',
  ],
  articleSection: 'North Idaho Buyer Guides',
  wordCount: 3200,
  spatialCoverage: {
    '@type': 'Place',
    name: 'Kootenai County',
    geo: { '@type': 'GeoShape', box: '47.2 -117.0 48.0 -116.2' },
  },
  about: [
    { '@type': 'Place', name: 'Rathdrum Prairie', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Athol', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
    { '@type': 'City', name: 'Harrison', containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County', containedInPlace: { '@type': 'State', name: 'Idaho' } } },
  ],
  mentions: [
    {
      '@type': 'GovernmentOrganization',
      name: 'Idaho Department of Water Resources',
      url: 'https://idwr.idaho.gov/',
      sameAs: 'https://en.wikipedia.org/wiki/Idaho_Department_of_Water_Resources',
    },
    {
      '@type': 'GovernmentOrganization',
      name: 'Panhandle Health District',
      url: 'https://panhandlehealthdistrict.org/',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '8500 N. Atlas Road',
        addressLocality: 'Hayden',
        addressRegion: 'ID',
        postalCode: '83835',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'GovernmentOrganization',
      name: 'Idaho Department of Environmental Quality',
      url: 'https://www.deq.idaho.gov/',
    },
    {
      '@type': 'GovernmentOrganization',
      name: 'Kootenai County',
      url: 'https://www.kcgov.us/',
    },
    {
      '@type': 'Place',
      name: 'Spokane Valley-Rathdrum Prairie Aquifer',
      description: 'EPA-designated Sole Source Aquifer (1978) and Idaho-designated Sensitive Resource Aquifer (1997) covering approximately 250 square miles in Kootenai County, Idaho.',
    },
  ],
  citation: [
    { '@type': 'CreativeWork', name: 'IDWR — Wells', url: 'https://idwr.idaho.gov/wells/' },
    { '@type': 'CreativeWork', name: 'Panhandle Health District — Septic Permits and Records', url: 'https://panhandlehealthdistrict.org/licensing-and-permitting/septic-permits-and-records/' },
    { '@type': 'CreativeWork', name: 'Panhandle Health District — Sewage System Permit Application Guidelines', url: 'https://panhandlehealthdistrict.org/wp-content/uploads/2019/05/Septic-Application-Guidelines.pdf' },
    { '@type': 'CreativeWork', name: 'Idaho DEQ — Rathdrum Prairie Aquifer', url: 'https://www.deq.idaho.gov/water-quality/groundwater/rathdrum-prairie-aquifer/' },
    { '@type': 'CreativeWork', name: 'Kootenai County Code 8.6.705 — Easements and Rights of Way', url: 'https://codelibrary.amlegal.com/codes/kootenaicountyid/latest/kootenaicounty_id/0-0-0-5876' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/articles/buying-property-prairie-wells-septic-roads#faq',
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles/buying-property-prairie-wells-septic-roads#article' },
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How deep does a well need to be on the Rathdrum Prairie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most residential wells on the Rathdrum Prairie hit good water between 150 and 400 feet, drawing from the Spokane Valley-Rathdrum Prairie Aquifer. Properties on the prairie floor near Post Falls, Rathdrum, and Hayden tend toward the shallower end of that range. As you move into the foothills around Athol, Spirit Lake, and Twin Lakes, depths increase to 300–600 feet and yields can be less predictable. The Idaho Department of Water Resources maintains a public well log database, and pulling logs from neighboring parcels is the best pre-purchase predictor of what your specific lot will require.',
      },
    },
    {
      '@type': 'Question',
      name: 'What permits do I need to drill a well in Kootenai County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An Idaho Department of Water Resources drilling permit is required for any well deeper than 18 feet, including domestic wells on private acreage. The permit is typically filed by the licensed driller you hire — all wells must be constructed by an IDWR-licensed driller. Domestic wells serving a single-family home and using under 13,000 gallons per day do not require a separate water right approval. Multi-family, irrigation, commercial, and municipal wells do require approved water rights before IDWR will issue a drilling permit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a septic system cost to install in North Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A conventional gravity-fed septic system runs roughly $5,000 to $12,000 installed in Kootenai County. Pressure-distribution or aerobic systems run $7,000 to $18,000, and mound systems for difficult soils run $10,000 to $20,000. Add the Panhandle Health District subsurface sewage permit fee of $950 and any cost for testhole excavation. Soil type — determined by the required 8-foot-deep testhole — dictates which system you\'re allowed to install, so the final number isn\'t fully knowable until the EHS site visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I put a standard septic system on a 2-acre lot on the Rathdrum Prairie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally no, unless the parcel was created before December 20, 1977, or sits inside an approved municipal sewage management area. The Panhandle Health District requires a minimum parcel size of 5 acres for septic installations on the Spokane Valley-Rathdrum Prairie Aquifer because of its Sole Source Aquifer status. Smaller parcels on the aquifer typically require connection to municipal sewer, a grandfathered pre-1977 lot certification, or a community sewage arrangement. This is the first thing to verify before writing an offer on small-acreage prairie land.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who plows and maintains private roads in rural Kootenai County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The maintenance entity — usually the property owners along the road or a formal road association — handles everything: grading, gravel, snow plowing, dust abatement, and culvert maintenance. Kootenai County does not maintain private roads or common driveways. A recorded road maintenance agreement (RMA) is essential and should be in place before closing. Without one, disputes over cost-sharing for plowing or grading can become a recurring problem with neighbors.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between a public road right-of-way and a private road easement?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A public road right-of-way is dedicated to and maintained by a public highway agency — Kootenai County, the Idaho Transportation Department, or one of the local highway districts. Maintenance, plowing, and improvements are publicly funded. A private road easement gives you legal access across someone else\'s property, but maintenance is entirely the responsibility of the owners or the road association. Kootenai County Code requires a minimum 60-foot private road easement and 40 feet for common driveways on new parcels.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the septic permit process take in Kootenai County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Panhandle Health District states that permits may take up to 10 working days after testhole completion or scheduled appointment. The full timeline from application to issued permit usually runs 3 to 6 weeks once you factor in testhole excavation scheduling, site evaluation, plan review, and any required revisions. If your soils are unsuitable in the first proposed location, the process restarts in a second testhole location, which can add weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What questions should I ask before writing an offer on raw land in Kootenai or Bonner County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At minimum: Is the parcel on the Rathdrum Prairie Aquifer and is it large enough for septic if it is? What do neighboring well logs from IDWR show for depth and yield? Is there a recorded road maintenance agreement on the access road, and who is responsible for snow plowing in winter? Are there any recorded easements, water rights, or mineral rights to know about? Are there setbacks or wetland buffers that would constrain where you can build the house, well, or drainfield?',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.realestatewithshirin.com/articles/buying-property-prairie-wells-septic-roads#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Buying Property on the Prairie: Well Depths, Septic Systems, and County Road Rights-of-Way',
      item: 'https://www.realestatewithshirin.com/articles/buying-property-prairie-wells-septic-roads',
    },
  ],
}

const wellCosts = [
  { line: 'Drilling (150–400 ft typical)', cost: '$4,200 – $26,000' },
  { line: 'Pump and pressure tank', cost: '$2,500 – $5,000' },
  { line: 'Well house, electrical, trenching', cost: '$1,500 – $4,000' },
  { line: 'Total typical turnkey', cost: '$8,000 – $15,000' },
]

const septicCosts = [
  { system: 'Conventional gravity drainfield', cost: '$5,000 – $12,000', highlight: true },
  { system: 'Pressure-distribution / aerobic', cost: '$7,000 – $18,000', highlight: false },
  { system: 'Mound system', cost: '$10,000 – $20,000', highlight: false },
  { system: 'Drip distribution', cost: '$8,000 – $18,000', highlight: false },
  { system: 'PHD permit fee (non-refundable)', cost: '$950', highlight: false },
]

const septicSteps = [
  { num: '01', title: 'Site evaluation and testhole excavation', desc: 'Applicant excavates an 8-foot-deep testhole (at least 3 ft wide) at the proposed drainfield center, plus a second hole 75 ft away. The Environmental Health Specialist reviews soil type.' },
  { num: '02', title: 'Application submission and fee', desc: 'Standard subsurface sewage permit fee is $950. Repair permits are $300, expansions $400, renewals $100.' },
  { num: '03', title: 'Plan review', desc: 'A scaled site plan showing all buildings and minimum horizontal setbacks is required.' },
  { num: '04', title: 'Permit issuance', desc: 'Permits may take up to 10 working days after testhole completion or appointment scheduling.' },
  { num: '05', title: 'Installation by licensed installer', desc: 'All contractors performing septic work must hold a Panhandle Health District license.' },
  { num: '06', title: 'Inspection before backfill', desc: 'Green tag = approved. Red tag = rework required. The system cannot be buried until the green tag is on.' },
]

const roadEasements = [
  { type: 'General utility easement', width: '10 ft minimum' },
  { type: 'Common driveway easement', width: '40 ft minimum' },
  { type: 'Private road easement', width: '60 ft minimum' },
  { type: 'Public road right-of-way', width: 'Per governing highway agency' },
]

const faqs = [
  {
    q: 'How deep does a well need to be on the Rathdrum Prairie?',
    a: 'Most residential wells on the Rathdrum Prairie hit good water between 150 and 400 feet, drawing from the Spokane Valley-Rathdrum Prairie Aquifer. Properties on the prairie floor near Post Falls, Rathdrum, and Hayden tend toward the shallower end of that range. As you move into the foothills around Athol, Spirit Lake, and Twin Lakes, depths increase to 300–600 feet and yields can be less predictable. The Idaho Department of Water Resources maintains a public well log database, and pulling logs from neighboring parcels is the best pre-purchase predictor of what your specific lot will require.',
  },
  {
    q: 'What permits do I need to drill a well in Kootenai County?',
    a: 'An Idaho Department of Water Resources drilling permit is required for any well deeper than 18 feet, including domestic wells on private acreage. The permit is typically filed by the licensed driller you hire — all wells must be constructed by an IDWR-licensed driller. Domestic wells serving a single-family home and using under 13,000 gallons per day do not require a separate water right approval. Multi-family, irrigation, commercial, and municipal wells do require approved water rights before IDWR will issue a drilling permit.',
  },
  {
    q: 'How much does a septic system cost to install in North Idaho?',
    a: "A conventional gravity-fed septic system runs roughly $5,000 to $12,000 installed in Kootenai County. Pressure-distribution or aerobic systems run $7,000 to $18,000, and mound systems for difficult soils run $10,000 to $20,000. Add the Panhandle Health District subsurface sewage permit fee of $950 and any cost for testhole excavation. Soil type — determined by the required 8-foot-deep testhole — dictates which system you're allowed to install, so the final number isn't fully knowable until the EHS site visit.",
  },
  {
    q: 'Can I put a standard septic system on a 2-acre lot on the Rathdrum Prairie?',
    a: "Generally no, unless the parcel was created before December 20, 1977, or sits inside an approved municipal sewage management area. The Panhandle Health District requires a minimum parcel size of 5 acres for septic installations on the Spokane Valley-Rathdrum Prairie Aquifer because of its Sole Source Aquifer status. Smaller parcels on the aquifer typically require connection to municipal sewer, a grandfathered pre-1977 lot certification, or a community sewage arrangement. This is the first thing to verify before writing an offer on small-acreage prairie land.",
  },
  {
    q: 'Who plows and maintains private roads in rural Kootenai County?',
    a: "The maintenance entity — usually the property owners along the road or a formal road association — handles everything: grading, gravel, snow plowing, dust abatement, and culvert maintenance. Kootenai County does not maintain private roads or common driveways. A recorded road maintenance agreement (RMA) is essential and should be in place before closing. Without one, disputes over cost-sharing for plowing or grading can become a recurring problem with neighbors.",
  },
  {
    q: "What's the difference between a public road right-of-way and a private road easement?",
    a: "A public road right-of-way is dedicated to and maintained by a public highway agency — Kootenai County, the Idaho Transportation Department, or one of the local highway districts. Maintenance, plowing, and improvements are publicly funded. A private road easement gives you legal access across someone else's property, but maintenance is entirely the responsibility of the owners or the road association. Kootenai County Code requires a minimum 60-foot private road easement and 40 feet for common driveways on new parcels.",
  },
  {
    q: 'How long does the septic permit process take in Kootenai County?',
    a: "The Panhandle Health District states that permits may take up to 10 working days after testhole completion or scheduled appointment. The full timeline from application to issued permit usually runs 3 to 6 weeks once you factor in testhole excavation scheduling, site evaluation, plan review, and any required revisions. If your soils are unsuitable in the first proposed location, the process restarts in a second testhole location, which can add weeks.",
  },
  {
    q: 'What questions should I ask before writing an offer on raw land in Kootenai or Bonner County?',
    a: "At minimum: Is the parcel on the Rathdrum Prairie Aquifer and is it large enough for septic if it is? What do neighboring well logs from IDWR show for depth and yield? Is there a recorded road maintenance agreement on the access road, and who is responsible for snow plowing in winter? Are there any recorded easements, water rights, or mineral rights to know about? Are there setbacks or wetland buffers that would constrain where you can build the house, well, or drainfield?",
  },
]

export default function PrairiePropertyArticlePage() {
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
            <span className="text-[#5C5650]">Buying Property on the Prairie</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">North Idaho Buyer Guides</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">13 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">May 2026</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            Buying Property on the Prairie: Well Depths, Septic Systems, and County Road Rights-of-Way
          </h1>
          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            The &ldquo;no HOA&rdquo; dream is real. The infrastructure math just needs to be on the table before you write an offer.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="/images/shirin-headshot-studio.webp"
              alt="Shirin Abplanalp, Licensed REALTOR® at Berkshire Hathaway HomeServices Jacklin Real Estate"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · May 19, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1C1A17] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$8–15K</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Typical Well Cost</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Drilled, permitted, pumped</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$8–18K</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Typical Septic Cost</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Installed + $950 permit fee</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">5 acres</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Min. for Aquifer Septic</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Panhandle Health District rule</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">250 mi²</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Aquifer Coverage</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">EPA Sole Source designation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="w-full overflow-hidden" style={{ maxHeight: '520px' }}>
        <img
          src="/images/north-idaho-prairie-acreage.webp"
          alt="Rural acreage on the Rathdrum Prairie, North Idaho"
          className="w-full object-cover object-center"
          style={{ maxHeight: '520px' }}
        />
      </div>

      {/* Article Body */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">

            {/* Article */}
            <article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">

              <p className="mb-6">
                If you&apos;re shopping rural acreage in Athol, Harrison, Worley, or the unincorporated stretches outside Post Falls because you want to escape HOA restrictions, the freedom is real — but so are the line items most relocation buyers don&apos;t see coming. A typical residential well in North Idaho&apos;s rural communities runs <strong className="text-[#1C1A17]">$8,000 to $15,000</strong> drilled, permitted, and pumped, with depths usually between 150 and 400 feet depending on where you sit relative to the{' '}
                <a href="https://www.deq.idaho.gov/water-quality/groundwater/rathdrum-prairie-aquifer/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Spokane Valley-Rathdrum Prairie Aquifer</a>.
                A standard septic system permitted through the{' '}
                <a href="https://panhandlehealthdistrict.org/licensing-and-permitting/septic-permits-and-records/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Panhandle Health District</a>{' '}
                adds another <strong className="text-[#1C1A17]">$8,000 to $18,000</strong> installed, plus a non-refundable <strong className="text-[#1C1A17]">$950 subsurface sewage permit fee</strong>. And if the parcel is on a private road or unimproved county right-of-way, you may be responsible for grading, gravel, snow plowing, and dust abatement — none of which the county does for you.
              </p>

              <p className="mb-10">Rural properties have unique infrastructure considerations. If you&rsquo;re still deciding between rural and neighborhood living, the{' '}<a href="/relocating-to-north-idaho" className="text-[#C4842A] hover:underline">full North Idaho relocation guide</a>{' '}covers what each area of the region actually looks like on the ground.</p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                The First Thing to Verify: Is This Parcel on the Aquifer?
              </h2>
              <p className="mb-6">
                The single biggest variable in well cost and septic permitting on the Rathdrum Prairie is whether your parcel sits over the <strong className="text-[#1C1A17]">Spokane Valley-Rathdrum Prairie Aquifer</strong> — a 250-square-mile groundwater body that the EPA designated a <strong className="text-[#1C1A17]">Sole Source Aquifer in 1978</strong>, and that Idaho separately designated a <strong className="text-[#1C1A17]">Sensitive Resource Aquifer in 1997</strong> — the only one in the state. The aquifer stretches from Lake Pend Oreille south through Coeur d&apos;Alene, Post Falls, Hayden, Rathdrum, and Athol — and west to the Washington state line. It&apos;s the drinking water source for nearly everyone in Kootenai County.
              </p>
              <p className="mb-4">That designation triggers stricter rules for new development:</p>
              <div className="my-6 space-y-3 mb-8">
                {[
                  { point: 'Septic installations on the aquifer require a minimum parcel size of five acres', detail: 'unless the lot was created before December 20, 1977, or sits inside an approved municipal sewage management area.' },
                  { point: 'Water quality standards are elevated', detail: "because the aquifer's coarse gravel and cobble composition lets surface contaminants reach groundwater quickly." },
                  { point: 'Permitting scrutiny is higher', detail: 'than it would be for the same project off-aquifer.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#C4842A] font-semibold mt-1 flex-shrink-0">→</span>
                    <span><strong className="text-[#1C1A17]">{item.point}</strong> — {item.detail}</span>
                  </div>
                ))}
              </div>
              <p className="mb-10">
                This is one of the first questions I ask the listing agent on any raw land showing. If a buyer is looking at a 2-acre parcel sitting on the aquifer and assumes they can put in a conventional septic, the answer is no — and the workaround materially changes the math.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Wells: What You&apos;re Actually Paying For
              </h2>
              <p className="mb-6">
                The{' '}
                <a href="https://idwr.idaho.gov/wells/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Idaho Department of Water Resources (IDWR)</a>{' '}
                regulates well construction statewide. Before any well is drilled — including a domestic well on private acreage — the well owner or licensed driller must obtain a drilling permit from IDWR. All wells deeper than <strong className="text-[#1C1A17]">18 vertical feet below land surface</strong>{' '}require a permit, and every well must be drilled by a contractor holding a valid IDWR driller&apos;s license.
              </p>

              <div className="my-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#E8DDD0]">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Typical Kootenai County Well — Cost Stack</p>
                </div>
                <div className="divide-y divide-[#E8DDD0]">
                  {wellCosts.map((row) => (
                    <div key={row.line} className="px-6 py-4 flex justify-between items-center gap-4">
                      <span className={`font-dm-sans text-sm ${row.line.includes('Total') ? 'font-semibold text-[#1C1A17]' : 'text-[#5C5650]'}`}>{row.line}</span>
                      <span className={`font-dm-sans text-sm font-semibold flex-shrink-0 ${row.line.includes('Total') ? 'text-[#C4842A]' : 'text-[#1C1A17]'}`}>{row.cost}</span>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-3 bg-[#EDE6DA]">
                  <p className="font-dm-sans text-xs text-[#9A9590]">Deeper or lower-yield wells run higher. Source: WellDrillingCosts.com Idaho 2026; IDWR.</p>
                </div>
              </div>

              <p className="mb-6">
                What out-of-state buyers usually don&apos;t anticipate is the <strong className="text-[#1C1A17]">yield variability</strong>. The Rathdrum Prairie Aquifer is exceptionally productive — many wells produce 20+ gallons per minute with excellent water quality. But the geology changes fast as you move off the prairie into the foothills around Athol, Spirit Lake, Twin Lakes, and Harrison. Properties in those areas can hit fractured bedrock, lower-yielding zones, or perched water tables that require deeper drilling and sometimes a second attempt.
              </p>
              <p className="mb-10">
                The well log database maintained by IDWR is publicly searchable, and I always pull logs from neighboring parcels before a client makes an offer on raw land. It&apos;s the closest thing to a guarantee you can get before the drill bit actually goes in the ground.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">
                Water rights and the domestic well exception
              </h3>
              <p className="mb-10">
                Domestic wells in Idaho — defined as wells serving a single-family home and using less than 13,000 gallons per day — don&apos;t require a separate water right approval before drilling. The IDWR drilling permit is sufficient. But the moment you move into multi-family, irrigation, commercial, or municipal use, you&apos;re into water rights territory and a substantially longer permitting timeline. If you&apos;re buying land with plans to run a hobby farm, a vineyard, or a short-term rental compound with shared water service, this distinction matters.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Septic Systems: The Panhandle Health District Process
              </h2>
              <p className="mb-6">
                The{' '}
                <a href="https://panhandlehealthdistrict.org/licensing-and-permitting/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Panhandle Health District</a>{' '}
                handles all onsite sewage permits for Kootenai, Bonner, Boundary, Benewah, and Shoshone counties. Their Kootenai County office at 8500 N. Atlas Road in Hayden is where every septic permit for prairie acreage flows through.
              </p>
              <p className="mb-4">Here&apos;s the actual process, in order:</p>

              <div className="my-6 bg-[#1C1A17] rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#2C2A27]">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Panhandle Health District — Septic Permit Process</p>
                </div>
                <div className="divide-y divide-[#2C2A27]">
                  {septicSteps.map((step) => (
                    <div key={step.num} className="px-6 py-4 flex gap-4">
                      <span className="font-cormorant text-2xl text-[#C4842A] font-semibold flex-shrink-0 w-10">{step.num}</span>
                      <div>
                        <p className="font-dm-sans text-sm font-semibold text-[#FAFAF8] mb-1">{step.title}</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">
                What the setbacks actually mean
              </h3>
              <p className="mb-4">
                The Panhandle Health District publishes minimum horizontal setbacks that constrain where on your parcel a septic system can physically go:
              </p>
              <div className="my-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm overflow-hidden mb-6">
                {[
                  { rule: 'Drainfield to a private well', min: '100 ft minimum' },
                  { rule: 'Drainfield to a body of water or stream', min: '100–300 ft (soil-dependent)' },
                  { rule: 'Septic tank to property line', min: '5 ft minimum' },
                  { rule: 'Drainfield slope', min: 'Not to exceed 20%' },
                ].map((row) => (
                  <div key={row.rule} className="px-6 py-3 border-b border-[#E8DDD0] last:border-0 flex justify-between gap-4">
                    <span className="font-dm-sans text-sm text-[#5C5650]">{row.rule}</span>
                    <span className="font-dm-sans text-sm font-semibold text-[#1C1A17] flex-shrink-0">{row.min}</span>
                  </div>
                ))}
              </div>
              <p className="mb-10">
                On a wooded 5-acre parcel with a stream running along the back boundary, those setbacks can eat up usable area surprisingly fast. I&apos;ve walked properties where the only viable drainfield location was 200 feet from where the buyer wanted the house — which then drives up trenching and pumping costs. This is exactly the kind of constraint that doesn&apos;t show up in an MLS photo.
              </p>

              <h3 className="font-cormorant text-2xl text-[#1C1A17] mt-10 mb-4 font-semibold">
                Standard versus alternative systems
              </h3>
              <p className="mb-4">
                A conventional gravity drainfield is the cheapest option. But if your soils are tight clay, your slope exceeds 20 percent, or your water table is shallow, you&apos;re into alternative system territory:
              </p>
              <div className="my-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm overflow-hidden mb-8">
                {septicCosts.map((row) => (
                  <div key={row.system} className={`px-6 py-3 border-b border-[#E8DDD0] last:border-0 flex justify-between gap-4 ${row.highlight ? 'bg-[#EDE6DA]' : ''}`}>
                    <span className={`font-dm-sans text-sm ${row.highlight ? 'font-semibold text-[#1C1A17]' : 'text-[#5C5650]'}`}>{row.system}</span>
                    <span className={`font-dm-sans text-sm font-semibold flex-shrink-0 ${row.highlight ? 'text-[#C4842A]' : 'text-[#1C1A17]'}`}>{row.cost}</span>
                  </div>
                ))}
              </div>
              <p className="mb-10">
                Most rural Kootenai County parcels can support a conventional or pressure-distribution system. But &ldquo;most&rdquo; isn&apos;t &ldquo;all,&rdquo; and the testhole result is the single piece of information that tells you which category you&apos;re in.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                County Roads, Private Roads, and the Right-of-Way Question
              </h2>
              <p className="mb-6">
                The third infrastructure reality buyers underestimate is <strong className="text-[#1C1A17]">road access</strong>.{' '}
                <a href="https://codelibrary.amlegal.com/codes/kootenaicountyid/latest/kootenaicounty_id/0-0-0-5876" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Kootenai County Code 8.6.705</a>{' '}
                establishes minimum easement widths for new parcels:
              </p>

              <div className="my-6 bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm overflow-hidden mb-6">
                <div className="px-6 py-3 border-b border-[#E8DDD0]">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">Kootenai County Code 8.6.705 — Minimum Easement Widths</p>
                </div>
                {roadEasements.map((row) => (
                  <div key={row.type} className="px-6 py-3 border-b border-[#E8DDD0] last:border-0 flex justify-between gap-4">
                    <span className="font-dm-sans text-sm text-[#5C5650]">{row.type}</span>
                    <span className="font-dm-sans text-sm font-semibold text-[#1C1A17] flex-shrink-0">{row.width}</span>
                  </div>
                ))}
              </div>

              <p className="mb-6">
                A parcel with legal access via a 60-foot private road easement isn&apos;t getting county plowing, county grading, or county dust control. The maintenance entity — usually the property owners along the road, sometimes a formal road association — is responsible for everything. A parcel may technically front a county-named road that the county itself doesn&apos;t actually maintain past a certain point. The &ldquo;where does the maintenance stop&rdquo; question is the one that catches the most buyers off guard.
              </p>
              <p className="mb-4">When I&apos;m walking acreage with a client, I ask three road questions in this order:</p>
              <div className="my-6 space-y-3 mb-10">
                {[
                  'Is the access road public, private, or unimproved county right-of-way?',
                  'If private, is there a recorded road maintenance agreement (RMA)?',
                  'Who actually plows it in February, and what does that cost per year?',
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="font-cormorant text-xl text-[#C4842A] font-semibold flex-shrink-0">{i + 1}.</span>
                    <span>{q}</span>
                  </div>
                ))}
              </div>
              <p className="mb-10">
                Without an RMA, a private road can become a serious legal headache the first time a neighbor refuses to chip in on grading or snow plowing. With an RMA, you know the rules going in.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Why North Idaho Buyers Get This Wrong (and How to Get It Right)
              </h2>
              <p className="mb-6">
                The pattern I see most often is an out-of-state buyer falling in love with a wooded acreage listing and writing an offer based on the lot size and the view. They skip three verifications that would take a competent local Realtor an afternoon to run:
              </p>
              <div className="my-6 space-y-4 mb-10">
                {[
                  { num: '01', check: 'Is the parcel on the aquifer, and is it over five acres if it is?' },
                  { num: '02', check: 'What are the well logs on neighboring properties telling us about likely depth and yield?' },
                  { num: '03', check: 'Who maintains the access road, and is there a recorded road maintenance agreement?' },
                ].map((item) => (
                  <div key={item.num} className="border-l-2 border-[#C4842A] pl-5 flex gap-4 items-start">
                    <span className="font-cormorant text-xl text-[#C4842A] font-semibold flex-shrink-0">{item.num}</span>
                    <span>{item.check}</span>
                  </div>
                ))}
              </div>
              <p className="mb-10">
                Get those three right and you&apos;re set up for a clean transaction. Skip them and you&apos;re looking at $30,000+ in surprise infrastructure costs, a septic permit that won&apos;t issue, or a winter where you can&apos;t get to your own house.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Working With a Realtor Who Actually Walks the Land
              </h2>
              <p className="mb-6">
                There are plenty of Realtors who can show you raw land in Kootenai and Bonner County. What I bring to acreage buyers is a habit of pulling well logs from IDWR, calling Panhandle Health to ask about the parcel&apos;s septic history, and reading the recorded easements before we get out of the truck. That isn&apos;t extra service — it&apos;s the minimum work the transaction deserves when you&apos;re spending six figures on dirt.
              </p>
              <p className="mb-10">
                If you&apos;re considering raw land or a rural home in Kootenai or Bonner County and want to know the real infrastructure picture before you write an offer, reach out. I&apos;ll pull the public records, walk the road, and tell you what you&apos;re actually buying.
              </p>

              {/* FAQ */}
              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-14 mb-6 font-semibold">
                Common Questions
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

                {/* Infrastructure Quick Reference */}
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Infrastructure at a Glance</p>
                  <div className="space-y-3">
                    {[
                      { label: 'Typical well (turnkey)', value: '$8,000 – $15,000' },
                      { label: 'Well depth — prairie floor', value: '150–400 ft' },
                      { label: 'Well depth — foothills', value: '300–600 ft' },
                      { label: 'Conventional septic', value: '$5,000 – $12,000' },
                      { label: 'Mound / alternative septic', value: '$10,000 – $20,000' },
                      { label: 'PHD permit fee', value: '$950 (non-refundable)' },
                      { label: 'Permit timeline', value: '3–6 weeks typical' },
                      { label: 'Min. parcel (aquifer septic)', value: '5 acres' },
                      { label: 'Private road easement min.', value: '60 ft' },
                    ].map((item) => (
                      <div key={item.label} className="border-t border-[#2C2A27] pt-3 first:border-0 first:pt-0">
                        <p className="font-dm-sans text-xs text-[#6B7A8D] uppercase tracking-wide mb-0.5">{item.label}</p>
                        <p className="font-dm-sans text-xs text-[#C4842A] font-semibold">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Agencies */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Key Agencies</p>
                  <div className="space-y-4">
                    {[
                      { name: 'IDWR — Well Permits', url: 'https://idwr.idaho.gov/wells/', desc: 'Drilling permits, well log database' },
                      { name: 'Panhandle Health District', url: 'https://panhandlehealthdistrict.org/', desc: 'Septic permits, Hayden office' },
                      { name: 'Idaho DEQ — Aquifer', url: 'https://www.deq.idaho.gov/water-quality/groundwater/rathdrum-prairie-aquifer/', desc: 'Aquifer designation and rules' },
                      { name: 'Kootenai County Code', url: 'https://codelibrary.amlegal.com/codes/kootenaicountyid/latest/kootenaicounty_id/0-0-0-5876', desc: 'Easement width requirements' },
                    ].map((agency) => (
                      <div key={agency.name} className="border-t border-[#E8DDD0] pt-3 first:border-0 first:pt-0">
                        <a href={agency.url} target="_blank" rel="noopener noreferrer" className="font-dm-sans text-sm font-semibold text-[#C4842A] hover:underline">{agency.name}</a>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-0.5">{agency.desc}</p>
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
                    Shirin pulls IDWR well logs and Panhandle Health records before showing rural acreage. She reads the recorded easements before getting out of the truck.
                  </p>
                  <a href="/contact" className="block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold text-sm py-3 px-4 transition-colors">
                    Ask Shirin
                  </a>
                </div>

                {/* Related Articles */}
                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Related Articles</p>
                  <div className="space-y-4">
                    <a href="/articles/north-idaho-microclimates-rathdrum-prairie-sandpoint-snow" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">North Idaho Micro-Climates: Rathdrum Prairie vs. Sandpoint Snowfall</p>
                      <p className="font-dm-sans text-xs text-[#9A9590] mt-1">What winter actually looks like at each address</p>
                    </a>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/areas/rathdrum-idaho" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Rathdrum Idaho Real Estate</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">Market overview and area guide</p>
                      </a>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/how-much-do-homes-cost-post-falls-idaho" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">How Much Do Homes Cost in Post Falls?</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">Price breakdown by budget, 2026</p>
                      </a>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <a href="/articles/best-places-to-live-north-idaho-leaving-california" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">Best Places to Live in North Idaho</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">For people leaving California</p>
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
          <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">Rural Land in Kootenai County</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-[#FAFAF8] mb-6 leading-tight font-semibold">
            Want to Know the Real Infrastructure Picture Before You Write an Offer?
          </h2>
          <p className="font-dm-sans text-[#C4BDB4] text-lg mb-10 leading-relaxed">
            I&apos;ll pull the IDWR well logs, check the septic history with Panhandle Health, read the recorded easements, and tell you who plows the road in February.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold py-4 px-8 transition-colors">
              Get in Touch
            </a>
            <a href="/areas/rathdrum-idaho" className="border border-[#5C5650] hover:border-[#9A9590] text-[#C4BDB4] hover:text-[#FAFAF8] font-dm-sans font-semibold py-4 px-8 transition-colors">
              Explore Rathdrum
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
