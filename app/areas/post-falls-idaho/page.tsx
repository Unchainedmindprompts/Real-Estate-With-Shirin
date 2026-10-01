import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BASE_URL, BUSINESS_ID, EMAIL, PHONE, PHONE_DISPLAY, WEBSITE_ID, PLACE } from '@/lib/schema-ids'

const PAGE_URL = `${BASE_URL}/areas/post-falls-idaho`

export const metadata: Metadata = {
  title: 'Post Falls, Idaho Real Estate & Living Guide',
  description:
    "Compare Post Falls homes, Spokane commute tradeoffs, new construction, and ownership costs. A practical relocation and buying guide from Shirin Abplanalp.",
  alternates: {
    canonical: 'https://www.realestatewithshirin.com/areas/post-falls-idaho',
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Real Estate Services — Post Falls, Idaho',
  serviceType: 'Real estate representation',
  provider: { '@id': BUSINESS_ID },
  areaServed: PLACE.postFalls,
}

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Post Falls, Idaho Real Estate & Living Guide',
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': BUSINESS_ID },
  mainEntity: { '@id': `${PAGE_URL}#service` },
  breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
  inLanguage: 'en-US',
  dateModified: '2026-10-01T00:00:00-07:00',
}

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Areas', item: `${BASE_URL}/areas` },
    { '@type': 'ListItem', position: 3, name: 'Post Falls, Idaho', item: PAGE_URL },
  ],
}

const faqs = [
  {
    q: 'Where should I start when looking at Post Falls homes for sale?',
    a: 'Start with your total monthly budget, work destination, property type, and the features you cannot change later: lot, access, layout, and location. Then compare current listings and recent closed sales for similar homes. A citywide median cannot tell you whether a particular home is fairly priced.',
  },
  {
    q: 'Is Post Falls a practical place to live if I work in Spokane?',
    a: 'Post Falls is west of Coeur d’Alene along I-90, so it is worth comparing if your work is in the Spokane area. Test the route from each candidate address to your actual workplace at your normal start and finish times. Spokane Valley, downtown Spokane, and the airport are different trips; weather, incidents, construction, and the local drive to the interchange can change the result.',
  },
  {
    q: 'Is Post Falls always cheaper than Coeur d’Alene?',
    a: 'No. Compare homes with similar size, age, condition, lot, and amenities rather than assuming a city name guarantees a lower price. A newer Post Falls home with an HOA can have different ownership costs from an older Coeur d’Alene home needing repairs. Include insurance, parcel-specific taxes, utilities, and maintenance in the comparison.',
  },
  {
    q: 'What should I check before buying new construction in Post Falls?',
    a: 'Ask for the full price including lot premiums and selected finishes, what landscaping and fencing are included, the completion and possession terms, HOA documents, warranty details, and your inspection options. Compare a builder’s financing incentive with an independent lender’s written loan estimate, including costs after any temporary rate reduction ends.',
  },
  {
    q: 'Can I buy a Post Falls home while living out of state?',
    a: 'Yes. Begin with financing and a home-sale plan, narrow the location before arranging tours, and set aside time for inspections and a final walkthrough. Video tours are useful for screening homes, but independent inspections and a visit when feasible help you evaluate condition, noise, access, and the surrounding area.',
  },
]

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.realestatewithshirin.com/areas/post-falls-idaho/#faq',
  isPartOf: { '@id': `${PAGE_URL}#webpage` },
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question', name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function PostFallsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Hero */}
      <section className="relative flex items-center justify-center" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/north-idaho-lake-hero.webp"
            alt="Illustrative lake-view home and wooded North Idaho landscape"
            fill
            priority
            className="object-cover"
            
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,26,23,0.35), rgba(28,26,23,0.6))' }} />
        </div>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 max-w-4xl mx-auto">
          <p className="eyebrow mb-4" style={{ color: '#C4842A' }}>POST FALLS, IDAHO</p>
          <h1
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
              fontSize: 'clamp(36px, 6vw, 56px)',
              lineHeight: 1.1,
              color: '#FAFAF8',
            }}
          >
            Post Falls Idaho Real Estate
          </h1>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '18px', lineHeight: 1.7, color: '#F5EFE6', maxWidth: '600px', margin: '0 auto' }}>
            Compare homes, daily routes, and the real cost of owning in Post Falls before you plan your move.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4" style={{ color: '#96601A' }}>PLAN YOUR MOVE</p>
          <p className="text-sm text-[#5C5650] mb-4">Updated <time dateTime="2026-10-01">October 1, 2026</time></p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 500,
              fontSize: 'clamp(28px, 4vw, 40px)',
              lineHeight: 1.2,
              color: '#1C1A17',
            }}
          >
            Post Falls at a Glance
          </h2>
          <div className="font-dm-sans text-[#5C5650] text-[17px] leading-relaxed space-y-5">
            <p>Post Falls is a useful place to begin a North Idaho home search when access toward Spokane, a choice of established homes and newer construction, or proximity to the Spokane River matters to you. It sits west of Coeur d&apos;Alene along I-90. The right fit depends on the particular home and the routes you will use every day.</p>
            <p>Before comparing asking prices, decide on your comfortable monthly payment, work destination, move date, and must-have property features. Those four choices make it much easier to decide which Post Falls homes deserve a tour and whether to include Coeur d&apos;Alene, Hayden, or Rathdrum in the same search.</p>
            <p>This guide helps you narrow the search. For current homes that match your needs and comparable closed sales, <a href={`mailto:${EMAIL}`} className="text-[#96601A] underline underline-offset-4">email Shirin about your Post Falls shortlist</a>. Market articles are dated snapshots; availability and negotiation room need a fresh check.</p>
          </div>
        </div>
      </section>

      {/* Why Post Falls */}
      <section className="section-padding" style={{ backgroundColor: '#F5EFE6' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4" style={{ color: '#96601A' }}>WHY POST FALLS</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#1C1A17',
              }}
            >
              Four Ways to Compare Post Falls Homes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'River & Trail Access',
                body: 'If time outside is a priority, check the actual walk or drive to a public trailhead or river access. A nearby water view does not establish public access or waterfront rights.',
              },
              {
                title: 'Established Homes',
                body: 'Compare lot size, layout, roof and heating-system condition, parking, and the work you would need to do after closing. A lower purchase price can come with a larger repair budget.',
              },
              {
                title: 'Newer Construction',
                body: 'Look beyond the model home. Ask what the base price includes, whether there are HOA costs, how nearby phases may affect you, and when the home will be ready to occupy.',
              },
              {
                title: 'Daily Routes',
                body: 'Drive to work, groceries, appointments, and the activities you use most. Interchange access and the last few local streets matter as much as the distance shown on a map.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: '#2A2722',
                  border: '1px solid #3A3530',
                  borderRadius: '4px',
                  padding: '32px',
                }}
              >
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '22px',
                    color: '#C4842A',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px' }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 font-dm-sans text-[#5C5650] text-[17px] leading-relaxed space-y-6">
          <p className="eyebrow" style={{ color: '#96601A' }}>PLAN YOUR SEARCH</p>
          <h2 className="font-cormorant text-4xl text-[#1C1A17] font-semibold">Moving from Washington? Start with the workday</h2>
          <p>If you will keep a Spokane-area job, test homes against the exact work address and schedule. A Spokane Valley trip, downtown trip, and airport trip should not share one assumed commute time. Include parking, the drive to I-90, and the return journey. Check <a className="text-[#96601A] underline" href="https://511.idaho.gov/">Idaho 511</a> and <a className="text-[#96601A] underline" href="https://wsdot.com/Travel/Real-time/Map/">WSDOT real-time travel information</a> for conditions before a scouting visit.</p>
          <p>If you are moving from western Washington or will work remotely, verify your employer&apos;s Idaho work-location approval and internet service at the exact address before relying on either. Cross-border tax and payroll questions belong with your employer and tax professional. Our <Link className="text-[#96601A] underline" href="/articles/moving-from-washington-to-north-idaho">Washington-to-North-Idaho guide</Link> separates those decisions from the home search.</p>

          <h2 className="font-cormorant text-4xl text-[#1C1A17] font-semibold pt-6">What will this home cost after closing?</h2>
          <p>Use a property-by-property worksheet. Keep your down payment separate from closing costs, moving costs, and the cash you want left for repairs. For each finalist, collect:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong className="text-[#1C1A17]">Financing:</strong> a written lender estimate using your loan, down payment, mortgage insurance if applicable, and rate assumptions. Separate permanent pricing from temporary incentives.</li>
            <li><strong className="text-[#1C1A17]">Property taxes:</strong> the parcel record and current bill, then ask the county about assessed value and exemption eligibility. The seller&apos;s tax bill is useful background, not a promise of your future bill.</li>
            <li><strong className="text-[#1C1A17]">Insurance:</strong> an address-specific quote early enough to evaluate coverage, deductibles, and any conditions before your contract deadlines.</li>
            <li><strong className="text-[#1C1A17]">Recurring and seasonal costs:</strong> HOA dues and assessments, utilities, internet, snow removal, yard care, and a repair reserve based on the home&apos;s condition.</li>
          </ul>
          <p>The <Link className="text-[#96601A] underline" href="/articles/north-idaho-cost-of-living-comparison">North Idaho ownership-cost comparison</Link> explains how to build that budget. Use the <a className="text-[#96601A] underline" href="https://tax.idaho.gov/search-category/property-tax/homeowners/">Idaho State Tax Commission&apos;s homeowner guidance</a> for property-tax rules, and confirm the application process with the county assessor.</p>

          <h2 className="font-cormorant text-4xl text-[#1C1A17] font-semibold pt-6">Post Falls or Coeur d&apos;Alene?</h2>
          <p>Put two or three comparable homes from each city on the same list. Hold size, condition, lot, and must-have features as steady as possible. Then compare the total payment, necessary repairs, daily drive, and how you would use the location. Avoid paying for a feature you will rarely enjoy just because it photographs well.</p>
          <p>For a closer look at each setting, see the <Link className="text-[#96601A] underline" href="/areas/coeur-dalene-idaho">Coeur d&apos;Alene area guide</Link>. If your decision crosses the state line, use <Link className="text-[#96601A] underline" href="/articles/spokane-vs-coeur-dalene-which-is-right-for-you">Spokane versus Coeur d&apos;Alene</Link> to compare work, ownership costs, and property tradeoffs.</p>

          <h2 className="font-cormorant text-4xl text-[#1C1A17] font-semibold pt-6">Make your scouting trip count</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Share your budget, financing status, sale contingency, work destination, and property requirements before scheduling tours.</li>
            <li>Visit a few different property types. Compare an established resale with a newer home rather than filling the day with nearly identical listings.</li>
            <li>Leave time to drive ordinary routes and revisit a finalist at a different time of day. Check road noise, driveway access, parking, and surrounding activity.</li>
            <li>Before an offer, identify the inspections, document review, insurance quote, and financing deadlines needed for that property. If schools matter to your decision, confirm the address&apos;s assigned school and enrollment requirements directly with the district.</li>
          </ol>
          <p>Buying from a distance? The <Link className="text-[#96601A] underline" href="/articles/buying-north-idaho-home-from-out-of-state">out-of-state buying guide</Link> covers the transaction steps. If you are coming from Arizona, our <Link className="text-[#96601A] underline" href="/articles/moving-from-arizona-to-north-idaho">Arizona relocation guide</Link> focuses on winter access, home systems, and planning a useful visit.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4" style={{ color: '#96601A' }}>COMMON QUESTIONS</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 1.2,
                color: '#1C1A17',
              }}
            >
              Post Falls FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#2A2722',
                  border: '1px solid #3A3530',
                  borderRadius: '4px',
                  padding: '28px 32px',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '20px',
                    color: '#C4842A',
                    marginBottom: '12px',
                  }}
                >
                  {faq.q}
                </h3>
                <div>
                  <p style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: '15px', lineHeight: 1.7 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding" style={{ backgroundColor: '#1C1A17' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="eyebrow mb-6" style={{ color: '#C4842A' }}>Shirin — Post Falls Realtor</p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 500,
              fontSize: 'clamp(32px, 5vw, 48px)',
              lineHeight: 1.15,
              color: '#F5EFE6',
            }}
          >
            Talk to Shirin About Post Falls
          </h2>
          <p className="mb-10" style={{ color: '#9A9590', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            Tell Shirin your move date, comfortable budget, work destination, and property must-haves so the conversation can start with homes and locations that fit.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-block text-[#1C1A17] text-xs uppercase font-semibold tracking-wider rounded-sm"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              backgroundColor: '#C4842A',
              padding: '14px 32px',
              letterSpacing: '0.08em',
            }}
          >
            Call Shirin: {PHONE_DISPLAY}
          </a>
          <p className="mt-5"><a href={`mailto:${EMAIL}`} className="text-[#E8DDD0] underline underline-offset-4">Email Shirin</a></p>
        </div>
      </section>
    </>
  )
}
