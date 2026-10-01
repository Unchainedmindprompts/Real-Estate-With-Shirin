import type { Metadata } from 'next'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB } from '@/lib/schema-ids'

export const metadata: Metadata = {
  title: "North Idaho to Spokane Commute Times (Town by Town)",
  description:
    "Compare North Idaho to Spokane routes, construction, winter travel, and exact-address commute checks before choosing a home.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/articles/north-idaho-to-spokane-commute-times',
  },
  openGraph: {
    title: 'Commute Times from North Idaho to Spokane: Town-by-Town Guide',
    description:
      "Town-by-town route considerations, the official I-90 construction schedule, and a practical home-to-work test-drive checklist for buyers.",
    url: 'https://www.realestatewithshirin.com/articles/north-idaho-to-spokane-commute-times',
    type: 'article',
    publishedTime: '2026-05-21',
    modifiedTime: '2026-10-01',
    authors: ['Shirin Abplanalp'],
    images: ['https://www.realestatewithshirin.com/images/north-idaho-city-comparison.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-to-spokane-commute-times#article',
  headline: 'Commute Times from North Idaho to Spokane: A Town-by-Town Route Planning Guide',
  description:
    "Town-by-town route considerations, the official I-90 construction schedule, and a practical home-to-work test-drive checklist for buyers.",
  image: {
    '@type': 'ImageObject',
    url: 'https://www.realestatewithshirin.com/images/north-idaho-city-comparison.png',
    width: 1672,
    height: 941,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  datePublished: '2026-05-21T00:00:00-07:00',
  dateModified: '2026-10-01T00:00:00-07:00',
  mainEntityOfPage: 'https://www.realestatewithshirin.com/articles/north-idaho-to-spokane-commute-times',
  url: 'https://www.realestatewithshirin.com/articles/north-idaho-to-spokane-commute-times',
  keywords: [
    'North Idaho to Spokane commute',
    'Post Falls to Spokane drive time',
    "Coeur d'Alene to Spokane commute",
    'Hayden Idaho commute',
    'Rathdrum to Spokane commute',
    'Sandpoint to Spokane drive',
    'I-90 traffic North Idaho',
    'Idaho road construction',
    'Idaho 511 road conditions',
    'Kootenai County commute',
  ],
  articleSection: 'North Idaho Buyer Guides',
  spatialCoverage: {
    '@type': 'Place',
    name: 'North Idaho',
    geo: { '@type': 'GeoShape', box: '45.5 -117.5 49.0 -114.5' },
  },
  about: [
    {
      '@type': 'City',
      name: 'Post Falls',
      sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County' },
    },
    {
      '@type': 'City',
      name: "Coeur d'Alene",
      sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County' },
    },
    {
      '@type': 'City',
      name: 'Hayden',
      sameAs: 'https://en.wikipedia.org/wiki/Hayden,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County' },
    },
    {
      '@type': 'City',
      name: 'Rathdrum',
      sameAs: 'https://en.wikipedia.org/wiki/Rathdrum,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Kootenai County' },
    },
    {
      '@type': 'City',
      name: 'Sandpoint',
      sameAs: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Bonner County' },
    },
    {
      '@type': 'City',
      name: 'Spokane',
      sameAs: 'https://en.wikipedia.org/wiki/Spokane,_Washington',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Spokane County' },
    },
    {
      '@type': 'Place',
      name: 'Interstate 90',
      sameAs: 'https://en.wikipedia.org/wiki/Interstate_90',
    },
    {
      '@type': 'Place',
      name: 'U.S. Route 95 in Idaho',
      sameAs: 'https://en.wikipedia.org/wiki/U.S._Route_95_in_Idaho',
    },
    {
      '@type': 'Place',
      name: 'Idaho State Highway 53',
      sameAs: 'https://en.wikipedia.org/wiki/Idaho_State_Highway_53',
    },
  ],
  mentions: [
    {
      '@type': 'GovernmentOrganization',
      name: 'Idaho Transportation Department',
      url: 'https://itd.idaho.gov',
      sameAs: 'https://en.wikipedia.org/wiki/Idaho_Transportation_Department',
    },
    {
      '@type': 'GovernmentOrganization',
      name: 'Washington State Department of Transportation',
      url: 'https://wsdot.wa.gov',
      sameAs: 'https://en.wikipedia.org/wiki/Washington_State_Department_of_Transportation',
    },
    {
      '@type': 'Organization',
      name: 'Spokane Transit Authority',
      url: 'https://www.spokanetransit.com',
      sameAs: 'https://en.wikipedia.org/wiki/Spokane_Transit_Authority',
    },
    {
      '@type': 'Organization',
      name: 'Citylink Transit',
      url: 'https://www.cdaid.org/citylink',
    },
  ],
  citation: [
    { '@type': 'WebPage', name: 'ITD I-90 widening from SH-41 to US-95', url: 'https://itd.idaho.gov/news/construction-begins-monday-to-widen-i-90-between-post-falls-and-coeur-dalene/' },
    { '@type': 'WebPage', name: 'Idaho 511 Live Road Conditions', url: 'https://511.idaho.gov' },
    { '@type': 'WebPage', name: 'WSDOT Real-Time Travel', url: 'https://wsdot.wa.gov/travel/real-time' },
  ],
}

const faqs = [
  {
    "q": "How long is the commute from Post Falls to Spokane?",
    "a": "There is no single Post Falls-to-Spokane commute time. Enter the exact home and workplace addresses, compare the route at your usual departure times, and drive it in both directions on workdays. Downtown Spokane, Spokane Valley, Liberty Lake, and the airport are different destinations. Construction, incidents, weather, local streets, and parking can change the result."
  },
  {
    "q": "How long does it take to drive from Coeur d'Alene to Spokane?",
    "a": "The trip depends on your starting address, Spokane destination, and travel time. An I-90 route from Coeur d'Alene can pass through the widening project between US-95 and SH-41. Treat any routing-app estimate as a current planning aid, then test the whole door-to-door trip, including parking."
  },
  {
    "q": "Which construction project should North Idaho commuters check?",
    "a": "ITD began widening I-90 between SH-41 in Post Falls and US-95 in Coeur d'Alene in August 2025, with completion expected in 2029. The project is a freeway segment between two interchanges. Whether it affects your commute depends on your address and route; check current ITD notices and Idaho 511."
  },
  {
    "q": "Can you commute daily from Sandpoint to Spokane?",
    "a": "That is a personal schedule and travel-tolerance decision. Sandpoint is farther from Spokane than the Kootenai County towns in this guide. Test the full trip at your work hours, account for winter conditions, and discuss flexibility with your employer. Do not decide from a best-case map estimate or assume a hybrid schedule makes every property workable."
  },
  {
    "q": "Where can I check real-time North Idaho road conditions?",
    "a": "Use Idaho 511 for Idaho road conditions and the WSDOT real-time travel tools for the Washington portion of your trip. Check both states for incidents, closures, weather, and construction before departure. Those resources help assess current conditions; they do not guarantee a future commute time."
  },
  {
    "q": "Is the commute from Rathdrum to Spokane realistic?",
    "a": "Compare the exact addresses and work schedule. A route using SH-41 south to I-90 west and an alternate toward a north-Spokane destination can have different trade-offs. Do not assume that every Rathdrum route uses the I-90 segment east of SH-41 or that an alternate is always faster. Test the routes in both directions."
  },
  {
    "q": "Does winter significantly affect North Idaho commutes?",
    "a": "Snow, ice, visibility, incidents, and closures can change travel times substantially. Avoid adding one fixed number of winter minutes to a summer estimate. Include driveway access, local-road maintenance, and safe travel flexibility in the home search, and follow current official road advisories."
  },
  {
    "q": "Will the commute get worse over time?",
    "a": "A precise future home-to-work time cannot be promised. Regional growth, construction, road improvements, and work patterns can all change travel. Review current projects and choose an address and schedule with enough flexibility for delays rather than relying on a fixed percentage forecast."
  }
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-to-spokane-commute-times#faq',
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-to-spokane-commute-times#article' },
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.realestatewithshirin.com/articles/north-idaho-to-spokane-commute-times#breadcrumb',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.realestatewithshirin.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Articles',
      item: 'https://www.realestatewithshirin.com/articles',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Commute Times from North Idaho to Spokane',
      item: 'https://www.realestatewithshirin.com/articles/north-idaho-to-spokane-commute-times',
    },
  ],
}

export default function CommuteTimesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '60vh', backgroundColor: '#F5EFE6' }}>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-4xl mx-auto">
          <p className="mb-4" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4842A' }}>
            North Idaho Buyer Guides
          </p>
          <h1 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1, color: '#1C1A17' }}>
            Commute Times from North Idaho to Spokane
          </h1>
          <p className="mb-8" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(18px, 2.5vw, 24px)', fontStyle: 'italic', color: '#5C5650', lineHeight: 1.4 }}>
            A Town-by-Town Route Planning Guide
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#5C5650' }}>By Shirin Abplanalp, REALTOR®</span>
            <span style={{ color: '#C4842A' }}>·</span>
            <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#5C5650' }}>Updated October 1, 2026</span>
            <span style={{ color: '#C4842A' }}>·</span>
            <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', color: '#5C5650' }}>6 min read</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="w-full">
        <img
          src="/images/north-idaho-city-comparison.png"
          alt="Illustration of communities across North Idaho"
          className="w-full h-auto block"
        />
      </div>

      {/* Article Body */}
      <section style={{ backgroundColor: '#FAFAF8', paddingTop: '64px', paddingBottom: '80px' }}>
        <div className="max-w-5xl mx-auto px-6" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '64px', alignItems: 'start' }}>

          {/* Main Column */}
          <article style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '16px', lineHeight: 1.8, color: '#3A3530' }}>

            {/* Byline */}
            <div className="flex items-center gap-4 mb-10 pb-8" style={{ borderBottom: '1px solid #E8DDD0' }}>
              <img src="/images/shirin-headshot-studio.webp" alt="Shirin Abplanalp" style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '14px', fontWeight: 600, color: '#1C1A17' }}>Shirin Abplanalp</p>
                <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', color: '#9A9590' }}>Licensed REALTOR® · SRES® · Berkshire Hathaway HomeServices Jacklin Real Estate, North Idaho</p>
              </div>
            </div>

            <p className="mb-6 text-lg">
              If your job is on the Spokane side of the border, the useful number is your own door-to-door travel time. A home in central Post Falls to an office near Sprague and Browne in downtown Spokane is a different trip from a Hayden address to Liberty Lake, or a Sandpoint address to the airport. Start with the two exact addresses and your actual work schedule.
            </p>
            <div className="mb-10 rounded-sm border border-[#C4842A] bg-[#F5EFE6] p-6">
              <h2 className="font-cormorant text-2xl font-semibold text-[#1C1A17] mb-3">Treat an estimate as a starting point</h2>
              <p>Routing apps can help compare a departure time or route, but a city-wide number does not predict an individual commute. This guide does not present fixed peak-hour travel times as ITD measurements. Test the route on workdays in both directions, including local streets, the final approach to work, and parking.</p>
            </div>
            <p className="mb-8">
              For the broader decision, see the <a href="/relocating-to-north-idaho" className="text-[#C4842A] hover:underline">complete North Idaho relocation guide</a> and the <a href="/articles/north-idaho-city-comparison-coeur-dalene-post-falls-hayden-rathdrum-sandpoint" className="text-[#C4842A] hover:underline">five-town comparison</a>.
            </p>

            <h2 className="font-cormorant text-3xl font-semibold text-[#1C1A17] mt-10 mb-5">Town-by-town routes to compare</h2>
            <div className="space-y-5 mb-10">
              {[
                { town: 'Post Falls', route: 'Compare local access to I-90 west and the full trip to your actual Spokane-side workplace. A starting point west of SH-41 may avoid the widening segment east of that interchange, but it does not avoid every Washington-side delay.' },
                { town: "Coeur d'Alene", route: 'Check the I-90 west route, including the segment between US-95 and SH-41. Neighborhood access, the freeway entrance, and the final streets in Spokane are part of the trip. Test the return journey separately.' },
                { town: 'Hayden', route: 'Local streets and the approach to I-90 can be a significant part of the journey. Compare the route from the specific property; an address near US-95 and one farther east need separate tests.' },
                { town: 'Rathdrum', route: 'Compare SH-41 south to I-90 west with any alternate suggested for your particular destination. A north-Spokane workplace may produce a different route choice from a downtown workplace. Check current routing rather than assuming an alternate always saves time.' },
                { town: 'Sandpoint', route: 'This is a longer regional trip. Compare the whole route, office frequency, winter conditions, and employer flexibility before choosing a home. A good-day estimate alone is not enough to establish that the schedule will work.' },
              ].map((row) => (
                <div key={row.town} className="bg-[#F5EFE6] border-l-4 border-[#C4842A] p-5">
                  <h3 className="font-cormorant text-2xl font-semibold text-[#1C1A17] mb-2">{row.town}</h3>
                  <p>{row.route}</p>
                </div>
              ))}
            </div>
            <p className="mb-10">
              Considering Bayview, St. Maries, the Silver Valley, or Bonners Ferry? Build a separate route test for that property. Rural-road access, seasonal conditions, and the destination can matter as much as the nearest town name. A route that works for occasional trips may not fit a fixed daily arrival time.
            </p>

            <h2 className="font-cormorant text-3xl font-semibold text-[#1C1A17] mt-10 mb-5">The I-90 project between SH-41 and US-95</h2>
            <p className="mb-6">
              <a href="https://itd.idaho.gov/news/construction-begins-monday-to-widen-i-90-between-post-falls-and-coeur-dalene/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">ITD announced construction in August 2025</a> on the widening of I-90 between SH-41 in Post Falls and US-95 in Coeur d&rsquo;Alene. The stated completion target is 2029. The project includes additional lanes, bridge work, and ramp improvements. Construction schedules and traffic management can change, so use current notices when planning a trip.
            </p>
            <p className="mb-10">
              This corridor lies east of SH-41. Do not assume every Post Falls or Rathdrum trip to Spokane passes through it. Trace the actual route and check both <a href="https://511.idaho.gov" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Idaho 511</a> and <a href="https://wsdot.wa.gov/travel/real-time" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">WSDOT real-time travel</a> for the rest of the journey.
            </p>

            <h2 className="font-cormorant text-3xl font-semibold text-[#1C1A17] mt-10 mb-5">Winter changes the property question too</h2>
            <p className="mb-6">
              Avoid a fixed winter delay allowance. Snow, ice, visibility, incidents, and closures vary by route and day. Evaluate the driveway grade, who clears snow, how the local road is maintained, and whether your schedule has room for a safe delay. Check official conditions before travel; a favorable summer test is only one part of the decision.
            </p>
            <p className="mb-10">
              For a rural property, ask for the actual access and road-maintenance documents. The <a href="/articles/buying-property-prairie-wells-septic-roads" className="text-[#C4842A] hover:underline">wells, septic, and roads guide</a> covers the related due-diligence questions.
            </p>

            <h2 className="font-cormorant text-3xl font-semibold text-[#1C1A17] mt-10 mb-5">Transit, carpool, and remote-work alternatives</h2>
            <p className="mb-10">
              Check current <a href="https://www.spokanetransit.com/routes-schedules/" target="_blank" rel="noopener noreferrer" className="text-[#C4842A] hover:underline">Spokane Transit routes and schedules</a> for the Washington portion of a trip, including the drive to a stop, parking, transfers, and the last service home. Ask your employer about carpool or hybrid options. Confirm internet service at the exact property address if remote days are part of the plan; neighborhood availability is not a guarantee for every home.
            </p>

            {/* Pre-closing checklist */}
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 600, color: '#1C1A17', marginTop: '48px', marginBottom: '20px' }}>
              What buyers need to verify before closing
            </h2>
            <p className="mb-6">If you are choosing an address based on a specific commute target, do these five things before going under contract:</p>
            <div className="space-y-3 mb-10">
              {[
                { n: 1, step: 'Drive the exact home-to-work route at your actual departure times in both directions on more than one ordinary workday. Include parking and the walk into work.' },
                { n: 2, step: 'Drive it in winter conditions if you can, or talk to neighbors who do. Commute behavior is a separate question from driveway and snow load (covered in the infrastructure article).' },
                { n: 3, step: 'Check current ITD and WSDOT project notices for construction on the route, including the I-90 widening between SH-41 and US-95 if your trip uses it.' },
                { n: 4, step: 'Check Idaho 511 and WSDOT at the hours you expect to travel. Record the date, weather, route, and observed door-to-door time; distinguish a usual day from an incident or storm.' },
                { n: 5, step: 'Ask current residents about local access and snow clearing, then verify the route yourself. Treat personal anecdotes as useful context rather than a guaranteed travel time.' },
              ].map((item) => (
                <div key={item.n} className="flex gap-4 p-4 rounded-sm" style={{ backgroundColor: '#F5EFE6' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '22px', fontWeight: 700, color: '#C4842A', lineHeight: 1, flexShrink: 0, paddingTop: '2px', minWidth: '24px' }}>{item.n}</span>
                  <p style={{ margin: 0, fontSize: '14px', color: '#3A3530' }}>{item.step}</p>
                </div>
              ))}
            </div>

            {/* Sources */}
            <div className="mb-10 p-5 rounded-sm" style={{ backgroundColor: '#F5EFE6', border: '1px solid #E8DDD0' }}>
              <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9A9590', marginBottom: '12px' }}>Primary Sources</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="space-y-2">
                {[
                  { label: 'ITD I-90 widening: SH-41 to US-95 (August 2025 announcement)', url: 'https://itd.idaho.gov/news/construction-begins-monday-to-widen-i-90-between-post-falls-and-coeur-dalene/' },
                  { label: 'Idaho 511 — Real-time road conditions', url: 'https://511.idaho.gov' },
                  { label: 'WSDOT real-time travel', url: 'https://wsdot.wa.gov/travel/real-time' },
                ].map((src) => (
                  <li key={src.url}>
                    <a href={src.url} target="_blank" rel="noopener noreferrer" style={{ color: '#C4842A', fontSize: '13px' }}>{src.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="mb-10 p-5 rounded-sm" style={{ backgroundColor: '#F0EBE3', border: '1px solid #E0D5C8' }}>
              <p style={{ fontSize: '12px', color: '#7A7470', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: '#5C5650' }}>Planning note:</strong> Reviewed October 1, 2026. This guide explains route considerations and cites the official construction announcement; it does not promise travel times. Project schedules and road conditions change. Confirm current information and test your actual commute before making a purchase decision.
              </p>
            </div>

            {/* Shirin's note */}
            <div className="p-6 rounded-sm" style={{ border: '1px solid #C4842A', backgroundColor: '#FAFAF8' }}>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '18px', fontWeight: 600, color: '#1C1A17', marginBottom: '12px' }}>A note from Shirin</p>
              <p style={{ fontSize: '15px', color: '#5C5650', lineHeight: 1.8, marginBottom: '16px' }}>
                The commute question is rarely about averages — it is about your specific departure time, destination, and tolerance for variability. I have helped Spokane-side commuters land in every corner of Kootenai County, and the right answer almost always comes from driving the route at your actual times, not from a map estimate.
              </p>
              <p style={{ fontSize: '15px', color: '#5C5650', lineHeight: 1.8, marginBottom: '20px' }}>
                If you want help thinking through which North Idaho address minimizes your daily drive given your specific job location and schedule, I am happy to walk through the options with you.
              </p>
              <a
                href="/contact"
                style={{ display: 'inline-block', backgroundColor: '#C4842A', color: '#FAFAF8', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '12px 24px', borderRadius: '2px', textDecoration: 'none' }}
              >
                Talk through your commute →
              </a>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6" style={{ position: 'sticky', top: '32px' }}>

            <div className="rounded-sm border border-[#E8DDD0] bg-[#1C1A17] p-5">
              <p className="font-dm-sans text-xs uppercase tracking-widest text-[#C4842A] mb-3">Your route test</p>
              <ul className="text-sm text-[#C8B99A] space-y-3">
                <li>Exact home and workplace addresses</li>
                <li>Actual departure times, both directions</li>
                <li>Local streets, parking, and walking time</li>
                <li>Current construction and winter conditions</li>
                <li>Enough schedule flexibility for delays</li>
              </ul>
            </div>

            {/* Idaho 511 CTA */}
            <div className="p-5 rounded-sm" style={{ backgroundColor: '#1C1A17' }}>
              <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C4842A', marginBottom: '8px' }}>Real-Time Conditions</p>
              <p style={{ fontSize: '13px', color: '#C8B99A', lineHeight: 1.6, marginBottom: '12px' }}>Check current traffic, chain restrictions, and incidents on your North Idaho commute route.</p>
              <a href="https://511.idaho.gov" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', backgroundColor: '#C4842A', color: '#FAFAF8', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '10px 16px', borderRadius: '2px', textDecoration: 'none' }}>
                Open Idaho 511 →
              </a>
            </div>

            {/* Related articles */}
            <div className="p-5 rounded-sm" style={{ border: '1px solid #3A3530', backgroundColor: '#2A2722' }}>
              <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C4842A', marginBottom: '14px' }}>Related Articles</p>
              <div className="space-y-3">
                {[
                  { href: '/articles/north-idaho-microclimates-rathdrum-prairie-sandpoint-snow', label: 'North Idaho Micro-Climates by Town' },
                  { href: '/articles/snowiest-cities-north-idaho-ranking', label: 'Snowiest Cities in North Idaho' },
                  { href: '/articles/north-idaho-cost-of-living-comparison', label: 'North Idaho Cost of Living (BEA Data)' },
                  { href: '/articles/north-idaho-property-taxes-county-comparison', label: 'Property Taxes by County' },
                  { href: '/articles/buying-property-prairie-wells-septic-roads', label: 'Wells, Septic & County Roads' },
                ].map((link) => (
                  <a key={link.href} href={link.href} style={{ display: 'block', fontSize: '13px', color: '#C4842A', textDecoration: 'none', paddingBottom: '10px', borderBottom: '1px solid #3A3530' }}>
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#2A2722', paddingTop: '64px', paddingBottom: '80px' }}>
        <div className="max-w-3xl mx-auto px-6">
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C4842A', marginBottom: '12px', textAlign: 'center' }}>FAQ</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(28px, 4vw, 40px)', color: '#FAFAF8', textAlign: 'center', marginBottom: '48px', lineHeight: 1.15 }}>
            Common questions about North Idaho commutes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group" style={{ borderBottom: '1px solid #3A3530', paddingBottom: '4px' }}>
                <summary style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', fontWeight: 600, color: '#FAFAF8', cursor: 'pointer', padding: '16px 0', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  <span>{faq.q}</span>
                  <span style={{ color: '#C4842A', flexShrink: 0, fontSize: '20px' }}>+</span>
                </summary>
                <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '14px', color: '#C8B99A', lineHeight: 1.8, padding: '0 0 16px 0', margin: 0 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
