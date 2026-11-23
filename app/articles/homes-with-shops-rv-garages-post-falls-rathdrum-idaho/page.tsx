import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB, placeStub, jsonLdGraph } from '@/lib/schema-ids'
import {
  IDX_SHOP_LOT_CANDIDATES_POST_FALLS,
  IDX_SHOP_LOT_CANDIDATES_RATHDRUM,
} from '@/lib/idx-search'

const articleUrl = 'https://www.realestatewithshirin.com/articles/homes-with-shops-rv-garages-post-falls-rathdrum-idaho'
const ogImageUrl = 'https://www.realestatewithshirin.com/images/shirin-mercedes-sportsmobile-3500.jpg'

const sources = [
  {
    label:
      'Coeur d’Alene MLS / BHHS Jacklin kvCORE IDX live filter audit (checked November 23, 2026): checking public General Options "3+ Garage" or structured "Parking Features=RV Access" in Post Falls returned "No Matching Results," while free-text "keywords=RV garage" and "keywords=shop" returned all 119 Post Falls single-family listings unfiltered — even though active RV-garage listings such as 2655 N Neptune St ($659,000, Millsap Landing, attached 2-car + large RV garage on 0.20 ac) were verified live inside the same MLS feed',
    url: IDX_SHOP_LOT_CANDIDATES_POST_FALLS,
  },
  {
    label:
      'Monogram Homes, Thayer Farms North community & builder site, Rathdrum (checked November 2026): plans start at $459,900 (Sheridan, 1,512 sq ft), with Thayer Farms North shop lots listed starting at $539,999 and published shop options featuring 24 ft × 32 ft × 12 ft structures with a 90-amp subpanel (sales office 13294 N International St, Rathdrum, ID 83858)',
    url: 'http://monogrambuilt.com/',
  },
  {
    label:
      'Atlas Building Group, builder site & Realtor.com Rathdrum new home communities (checked October–November 2026): Coeur d’Alene custom/semi-custom builder active in Rathdrum (Atlas @ Trossicks listed from $558,000) and surrounding Kootenai County pockets, offering specialized attached RV/shop garage floor plans (~16 ft wide × 46 ft deep with 14-ft tall doors and optional pull-through rear doors on select designs)',
    url: 'https://www.atlasbuildinggroup.com/',
  },
  {
    label:
      'Architerra Homes, The Parkllyn community page, Post Falls (checked November 23, 2026): active Highway 41 corridor community starting in the mid-$400,000s with current specs up to $1,002,880 (1,300–3,870 sq ft), including larger estate-tier homesites alongside standard single-family lots',
    url: 'https://myarchiterra.com/communities/the-parkllyn/',
  },
  {
    label:
      'Panhandle Health District, Sewage Disposal Rules & Subsurface Sewage Regulations over the Spokane Valley–Rathdrum Prairie Aquifer (checked 2026): rural parcels without municipal sewer require both a primary drainfield and a protected 100% replacement/reserve drainfield area where permanent slabs, shops, and driveways cannot be built',
    url: 'https://panhandlehealthdistrict.org/environmental-health/land-development-and-sewage/',
  },
  {
    label:
      'Homes.com, Post Falls & Rathdrum Local Market Guides (checked November 9, 2026): 12-month median sale prices of $539,900 in Post Falls and $551,000 in Rathdrum',
    url: 'https://www.homes.com/local-guide/post-falls-id/',
  },
]

export const metadata: Metadata = {
  title: 'Homes with Shops & RV Garages in Post Falls & Rathdrum, Idaho (2026 Buyer’s Guide)',
  description:
    'Why Zillow and public MLS filters miss half the shop and RV-bay homes in Post Falls and Rathdrum, what a high-roof Sprinter 3500 or fifth-wheel actually requires (12–14 ft doors, bay depth, CC&Rs), and verified shop-lot builders.',
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: 'Homes with Shops & RV Garages in Post Falls & Rathdrum, Idaho (2026 Buyer’s Guide)',
    description:
      'Public IDX checkboxes miss active RV-bay and shop homes in Kootenai County. Door height math (12 ft vs. 14 ft), verified Post Falls & Rathdrum shop pockets ($539,999+), septic reserve traps, and how to pull the real MLS list.',
    url: articleUrl,
    type: 'article',
    publishedTime: '2026-11-23T00:00:00-08:00',
    modifiedTime: '2026-11-23T00:00:00-08:00',
    authors: ['Shirin Abplanalp'],
    images: [ogImageUrl],
  },
}

const faqs = [
  {
    q: 'Why do Zillow and public MLS search sites miss so many shop and RV-garage homes in Post Falls and Rathdrum?',
    a: 'Because Coeur d’Alene MLS listing agents do not enter shops and RV bays into one uniform checkbox. In our live IDX audit on November 23, 2026, shop and workshop data was splintered across more than 100 different comma-separated "Other Structures" and "Parking Features" field combinations, while many builders and listing agents only describe an "attached RV garage" or "30x40 heated shop" inside the written public remarks. Checking a public portal’s "3+ Garage" or "RV Access" filter routinely returns zero results — hiding active RV-garage homes sitting in the feed that same day. An agent-side MLS text-remarks and outbuilding-dimension search is the only way to catch every listing.',
  },
  {
    q: 'What garage door height do I actually need for a high-roof Sprinter van, wakeboat, or fifth-wheel?',
    a: 'Measure your rig at its highest roof-mounted accessory — never trust brochure roof height alone. A standard residential garage door is 7 or 8 feet tall. A high-roof Mercedes Sprinter 2500/3500, Winnebago Revel, or Sportsmobile with rooftop A/C, solar, or a Thule cargo box typically sits around 10.5 to 11.5 feet tall, which will NOT clear an 8-foot, 9-foot, or 10-foot "oversized" door — you need a true 12-foot (144-inch) door with high-lift tracks. Full-profile fifth-wheels, Class A motorhomes, and tall toy haulers (often 12.5 to 13.5 feet tall) require a 14-foot (168-inch) door.',
  },
  {
    q: 'Can you buy brand-new construction with a shop or RV garage in Post Falls or Rathdrum?',
    a: 'Yes, in specific pockets — though most high-density HOA subdivisions disallow them. Verified November 2026 options include Millsap Landing in central Post Falls (where a 2026 3-bed home with an attached 2-car plus large RV garage on 0.20 acres listed at $659,000), Monogram Homes’ Thayer Farms North in Rathdrum (shop lots starting at $539,999+ offering 24 ft × 32 ft × 12 ft shops with a 90-amp subpanel), Atlas Building Group in Rathdrum and Kootenai County (Atlas @ Trossicks from $558,000 and specialized 16 ft × 46 ft attached RV bays with 14-ft doors), and select upper-tier estate lots.',
  },
  {
    q: 'Is Post Falls or Rathdrum better if I want a detached 30×40 or 40×60 shop?',
    a: 'Post Falls wins if you want an attached super-bay/RV garage on city water and sewer with the fastest 22-to-28-minute I-90 commute into Spokane. Rathdrum usually wins if you want a detached 30×40 or 40×60 stick-frame or pole shop on 0.5 to 5 acres, where flat Rathdrum Prairie parcels give you wider side-yard setbacks, easier trailer turnaround radii, and fewer restrictive subdivision CC&Rs — adding roughly 7 to 10 minutes to the Spokane drive.',
  },
  {
    q: 'What is the #1 mistake buyers make when planning to add a shop after closing on Rathdrum Prairie land?',
    a: 'Forgetting the septic reserve drainfield. Outside municipal sewer boundaries, Panhandle Health District requires rural parcels over the Spokane Valley–Rathdrum Prairie Aquifer to maintain both an active septic drainfield and a designated 100% replacement ("reserve") drainfield area. You cannot pour a concrete shop slab or pave an RV driveway over either zone. Always pull the Panhandle Health septic site plan and recorded CC&Rs during your inspection contingency before assuming a flat side yard is buildable.',
  },
  {
    q: 'Do Post Falls and Rathdrum HOAs allow parking a Sprinter camper van or boat in your own driveway?',
    a: 'Most modern production-subdivision HOAs restrict outdoor RV, camper van, boat, and utility-trailer parking in driveways or streets to brief 24-to-72-hour loading/unloading windows unless the rig fits completely behind a closed garage door or an approved sight-obscuring side gate (which many CC&Rs still cap at 6 feet tall). If your Sprinter or boat stays at home year-round, either buy an enclosed 12-to-14-foot bay that swallows the entire rig or target non-HOA / shop-approved neighborhoods.',
  },
]

const clearanceRows = [
  {
    rig: 'Full-Size Crew Cab Pickup / Roof-Tent SUV',
    typicalHeight: '~6.5 – 7.5 ft',
    minDoor: '8 ft (96") minimum · 9–10 ft preferred',
    minDepth: '24 – 26 ft bay depth (standard 20 ft bays clip bumpers)',
  },
  {
    rig: 'High-Roof Sprinter 3500 / Sportsmobile / Revel (w/ Roof A/C + Cargo Box)',
    typicalHeight: '~10.5 – 11.5 ft',
    minDoor: '12 ft (144") clear height + side-mount opener',
    minDepth: '30 – 36 ft bay depth (allows rear hitch bike rack + workbench)',
  },
  {
    rig: 'Wake / Surf Boat on Tandem Trailer (Tower Folded vs. Up)',
    typicalHeight: '~8.5 – 11.5 ft',
    minDoor: '10 ft folded · 12 ft (144") tower-up convenience',
    minDepth: '32 – 38 ft bay depth (swing-tongue vs. fixed tongue + swim deck)',
  },
  {
    rig: 'Class A Coach / Fifth-Wheel / Toy Hauler',
    typicalHeight: '~12.5 – 13.6 ft',
    minDoor: '14 ft (168") commercial-height overhead door',
    minDepth: '45 – 50+ ft bay depth (or dual-door pull-through bay)',
  },
]

const shopPockets = [
  {
    name: 'Millsap Landing & Central Post Falls Infill (Post Falls)',
    priceBand: 'Verified $659,000 active 2026 spec (Nov 23, 2026)',
    setup: 'Attached 2-car + tall RV bay on ~0.20 ac city-sewer lots',
    notes:
      'Ideal when you want zero-acreage yard upkeep and municipal water/sewer right in central Post Falls, while still parking a Sprinter, boat, or travel trailer indoors behind an attached RV door.',
  },
  {
    name: 'Thayer Farms North by Monogram Homes (Rathdrum)',
    priceBand: 'Shop lots starting at $539,999+ (base plans from $459,900)',
    setup: 'Dedicated shop-ready lots · 24’ × 32’ × 12’ shop w/ 90-amp subpanel',
    notes:
      'One of the clearest production-builder answers on the Prairie: HOA rules are written around approved matching shops from day one instead of fighting architectural committees after closing.',
  },
  {
    name: 'Atlas @ Trossicks & Semi-Custom RV-Bay Plans (Rathdrum & Kootenai)',
    priceBand: 'Rathdrum community plans from $558,000+',
    setup: 'Attached ~16’ × 46’ super-bays w/ 14-ft doors & pull-through options',
    notes:
      'Built specifically for Class A / fifth-wheel clearances where a 12-foot eave height falls two feet short. Confirm exact bay width, door clear opening, and 50A hookup per lot.',
  },
  {
    name: 'The Parkllyn Estate Tier & North Post Falls Custom Pockets (Post Falls)',
    priceBand: '$650,000 – $1,000,000+',
    setup: 'Oversized 3–4+ car / RV-bay elevations on larger suburban lots',
    notes:
      'Strong fit for Spokane commuters who want Highway 41 / I-90 convenience alongside extra garage depth. Always check sub-phase CC&Rs before assuming a detached outbuilding is permitted.',
  },
  {
    name: 'Rathdrum Prairie, Radiant Lake Perimeter & 0.5–5 Acre Resale/Custom',
    priceBand: '$675,000 – $1,250,000+',
    setup: 'Detached 30’×40’ to 40’×60’ heated shops, car lifts, lean-tos & shouses',
    notes:
      'Where true hobbyist, car-collector, and multi-trailer properties live. Verify Panhandle Health septic maps, well GPM logs, private road plowing agreements, and shop power amperage.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: 'Homes with Shops & RV Garages in Post Falls & Rathdrum, Idaho (2026 Buyer’s Guide)',
  description:
    'Why Zillow and public MLS filters miss half the shop and RV-bay homes in Post Falls and Rathdrum, what a high-roof Sprinter 3500 or fifth-wheel actually requires (12–14 ft doors, bay depth, CC&Rs), and verified shop-lot builders.',
  image: {
    '@type': 'ImageObject',
    url: ogImageUrl,
    width: 962,
    height: 534,
    caption: 'Shirin Abplanalp relaxing beside her high-roof Mercedes-Benz Sprinter 3500 Sportsmobile with rooftop A/C, Thule cargo box, and hitch bike rack.',
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-11-23T00:00:00-08:00',
  dateModified: '2026-11-23T00:00:00-08:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    'homes with shops Post Falls Idaho',
    'homes with RV garage Post Falls ID',
    'homes with shops Rathdrum Idaho',
    'RV garage new construction North Idaho',
    'Thayer Farms North shop lots Rathdrum',
    'Sprinter van garage door height 12 ft 14 ft Idaho',
  ],
  articleSection: 'Buyer Resources',
  wordCount: 2350,
  about: [placeStub('postFalls'), placeStub('rathdrum')],
  spatialCoverage: placeStub('kootenai'),
  mentions: [
    placeStub('postFalls'),
    placeStub('rathdrum'),
    placeStub('coeurDalene'),
    placeStub('hayden'),
    placeStub('kootenai'),
  ],
  citation: sources.map((source) => ({ '@type': 'WebPage', name: source.label, url: source.url })),
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${articleUrl}#faq`,
  isPartOf: { '@id': `${articleUrl}#article` },
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${articleUrl}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatewithshirin.com' },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.realestatewithshirin.com/articles' },
    { '@type': 'ListItem', position: 3, name: 'Homes with Shops & RV Garages in Post Falls & Rathdrum', item: articleUrl },
  ],
}

export default function ShopsAndRvGaragesPostFallsRathdrumPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdGraph([articleSchema, faqSchema, breadcrumbSchema])),
        }}
      />

      {/* True 100vw Edge-to-Edge Unobstructed Hero + Above-the-Fold Title Band */}
      <section
        className="w-full bg-[#14231B] pt-[84px]"
        aria-labelledby="shops-rv-hero-title"
      >
        <div className="relative w-full aspect-[962/534] max-h-[700px] overflow-hidden bg-[#14231B]">
          <Image
            src="/images/shirin-mercedes-sportsmobile-3500.webp"
            alt="Shirin Abplanalp relaxing in a camp chair beside her high-roof Mercedes-Benz Sprinter 3500 Sportsmobile with rooftop A/C, Thule cargo box, and rear hitch mountain bike rack at Laguna Seca"
            fill
            unoptimized
            sizes="100vw"
            className="object-cover object-[center_44%]"
            priority
          />
        </div>

        {/* Full-Width Dark-Pine Title & Caption Band Visible Above the Fold */}
        <div className="bg-[#14231B] border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-7 md:py-9">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <nav
                className="text-[11px] uppercase tracking-[0.16em] font-dm-sans flex flex-wrap items-center gap-2"
                style={{ color: 'rgba(250, 247, 241, 0.76)' }}
                aria-label="Breadcrumb"
              >
                <Link href="/" className="hover:text-[#E2B872] transition-colors">Home</Link>
                <span aria-hidden="true">·</span>
                <Link href="/articles" className="hover:text-[#E2B872] transition-colors">Articles</Link>
                <span aria-hidden="true">·</span>
                <Link href="/areas/post-falls-idaho/new-construction" className="hover:text-[#E2B872] transition-colors">
                  Post Falls New Construction
                </Link>
                <span aria-hidden="true">·</span>
                <span style={{ color: '#FAF7F1' }}>Shops &amp; RV Garages</span>
              </nav>
              <span className="text-[11px] uppercase tracking-[0.16em] font-dm-sans" style={{ color: '#E2B872' }}>
                Verified Nov 23, 2026 · 12 min read
              </span>
            </div>

            <h1
              id="shops-rv-hero-title"
              className="font-cormorant text-3xl sm:text-4xl lg:text-[46px] leading-[1.08] font-medium mb-3"
              style={{ color: '#FAF7F1' }}
            >
              Homes with Shops &amp;{' '}
              <em style={{ fontStyle: 'italic', color: '#E2B872', paddingRight: '0.08em' }}>
                RV Garages
              </em>{' '}
              in Post Falls &amp; Rathdrum: Door Heights, Builders &amp; Why Zillow Misses Half of Them
            </h1>

            <p className="text-xs md:text-sm font-dm-sans leading-relaxed" style={{ color: 'rgba(250, 247, 241, 0.8)' }}>
              <strong style={{ color: '#FAF7F1' }}>Pictured above:</strong> Shirin chilling at Laguna Seca Raceway with our Mercedes-Benz Sprinter 3500 Sportsmobile (rooftop A/C, Thule cargo box &amp; rear hitch bikes) — why we measure North Idaho garage doors with a tape measure.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Lead & Author Band */}
      <section className="bg-[#F5EFE6] py-10 border-b border-[#E8DDD0]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-dm-sans text-lg text-[#3E3934] max-w-4xl mb-6 leading-relaxed">
            If you have tried filtering Zillow or a public MLS website for an <strong>RV garage</strong> or <strong>detached shop</strong> in Post Falls or Rathdrum — and stared at a screen saying <em>“No Matching Results”</em> — you didn’t imagine it. Public real estate portals break on Coeur d’Alene MLS shop fields every single day. Here is why those listings disappear online, what door height and bay depth your rig actually requires, and where shop-approved homes are being built and sold across the Prairie right now.
          </p>

          <div className="flex items-center gap-4">
            <Image
              src="/images/shirin-headshot-studio.webp"
              alt="Shirin Abplanalp, licensed REALTOR in Post Falls and Rathdrum, Idaho"
              className="w-10 h-10 rounded-full object-cover"
              width={40}
              height={40}
              sizes="40px"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp</p>
              <p className="font-dm-sans text-xs text-[#736D66]">
                Licensed REALTOR® · BHHS Jacklin Real Estate · Post Falls Resident &amp; Sprinter 3500 Owner · November 23, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Metric Bar */}
      <section className="bg-[#1C1A17] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">12–14 ft</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">True Sprinter &amp; RV Doors</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Vs. 7–8 ft standard residential</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$539,999+</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Rathdrum Shop-Lot Start</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Thayer Farms North · 24×32×12 opt.</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$659,000</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Post Falls RV-Bay Spec</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Millsap Landing · Checked Nov 23</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">100+ Tags</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Fractured MLS Shop Strings</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Why public portal checkboxes fail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article + Sticky Sidebar */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            <article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
              <p className="mb-6">
                Half the buyers relocating to Post Falls and Rathdrum from Washington, California, Oregon, and Arizona bring toys that do not fit inside a standard suburban two-car garage: a high-roof Sprinter camper van, a 24-foot wake boat, an enclosed car hauler, a fifth-wheel, or woodworking and fabrication gear.
              </p>
              <p className="mb-10">
                Yet finding a home that actually fits your rig online is maddening. Either you get buried in standard tract subdivisions with strict HOA driveway bans, or you tick an “RV Garage” filter and watch the map drop to zero pins. Here is what is actually happening inside our local MLS database — and how to find the real inventory across{' '}
                <Link href="/areas/post-falls-idaho" className="text-[#C4842A] hover:underline font-medium">
                  Post Falls
                </Link>{' '}
                and{' '}
                <Link href="/areas/rathdrum-idaho" className="text-[#C4842A] hover:underline font-medium">
                  Rathdrum
                </Link>.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                1. Why Public Home Search Portals Show “No Matching Results” for Shops &amp; RV Bays
              </h2>
              <p className="mb-6">
                On November 23, 2026, we ran a live audit directly against public IDX filters connected to the Coeur d’Alene MLS to test what a buyer sees when searching for a shop or RV garage in Post Falls:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li>
                  <strong className="text-[#1C1A17]">Free-text keywords failed completely:</strong> Typing <code>shop</code> or <code>RV garage</code> into the public keyword box ignored listing descriptions and returned all 119 active Post Falls single-family homes unfiltered.
                </li>
                <li>
                  <strong className="text-[#1C1A17]">Public checkboxes returned zero homes:</strong> Checking <code>3+ Garage</code> or selecting structured parking tags like <code>Parking Features=RV Access</code> returned <em>“No Matching Results”</em> — even though an active 2026 new build at <strong>2655 N Neptune Street in Post Falls ($659,000, Millsap Landing)</strong> was sitting live in that exact MLS feed with an <em>“attached two car garage and large RV garage”</em> written plain as day in the remarks!
                </li>
              </ul>
              <p className="mb-10">
                Why does that happen? Because Coeur d’Alene MLS stores outbuildings across <strong>more than 100 fractured string combinations</strong> (for example, <code>Other Structures=Shed(s),Shop Size,Workshop,Storage,See Remarks</code> — plus a separate architectural style tag called <code>Shouse/Shome</code>), and busy listing agents frequently skip the sub-fields altogether and type <em>“30x40 heated shop w/ 12’ lean-to”</em> only inside the narrative paragraph. Inside our agent-side MLS terminal, we search raw public and private remarks, outbuilding square-footage fields, and parcel acreage simultaneously so nothing slips through.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                2. The Sprinter &amp; Fifth-Wheel Dimensional Reality Check
              </h2>
              <p className="mb-6">
                My husband Mark and I own the high-roof <strong>Mercedes Sprinter 3500 Sportsmobile</strong> pictured above. On paper, a bare factory high-roof Sprinter stands just over 9 feet tall. In real life — once you bolt on all-terrain tires, a rooftop A/C unit, and a Thule cargo box on roof racks, plus a two-bike hitch carrier off the rear bumper — your real-world clearance demand jumps past <strong>10.5 to 11+ feet high</strong> and <strong>26+ feet long</strong>.
              </p>
              <p className="mb-6">
                That creates three expensive traps we check for out-of-state buyers before they ever book a flight to Spokane International Airport (GEG):
              </p>
              <ol className="list-decimal pl-6 space-y-3 mb-8">
                <li>
                  <strong className="text-[#1C1A17]">The 9- or 10-foot “oversized” door illusion:</strong> Listing descriptions routinely brag about “oversized 8-ft or 10-ft garage doors.” Those are great for a lifted pickup — and 18 inches too short for a kitted Sprinter, wake-tower boat, or fifth-wheel.
                </li>
                <li>
                  <strong className="text-[#1C1A17]">Low-hanging opener rails &amp; header trim:</strong> Even a nominal 12-foot rough opening can lose 4 to 8 inches if the builder installs a standard center-hung trolley opener instead of <strong>high-lift tracks that hug the ceiling with a side-mounted jackshaft opener</strong>. Always measure from the concrete threshold to the lowest hanging bracket with the door open.
                </li>
                <li>
                  <strong className="text-[#1C1A17]">Driveway apron slope (departure angle):</strong> Steep curb-to-garage aprons can drag rear trailer jacks, fifth-wheel tails, or hitch-mounted bike racks even when the door itself is tall enough. Flat Rathdrum Prairie lots have a natural advantage here over sloped hillside driveways.
                </li>
              </ol>

              {/* Rig Clearance Table */}
              <div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
                <div className="bg-[#1C1A17] px-5 py-4">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">
                    Real-World Door Height &amp; Bay Depth Guide by Rig
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[620px]">
                    <thead>
                      <tr className="bg-[#EDE6DA] border-b border-[#E8DDD0] text-xs uppercase tracking-wider text-[#1C1A17]">
                        <th className="py-3 px-4 font-semibold">Rig / Toy Profile</th>
                        <th className="py-3 px-4 font-semibold">Real Roof Height</th>
                        <th className="py-3 px-4 font-semibold">Target Door Height</th>
                        <th className="py-3 px-4 font-semibold">Target Bay Depth</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clearanceRows.map((r) => (
                        <tr key={r.rig} className="border-b border-[#E8DDD0] last:border-0 bg-[#F5EFE6] text-sm align-top">
                          <td className="py-3 px-4 font-semibold text-[#1C1A17]">{r.rig}</td>
                          <td className="py-3 px-4 text-[#5C5650]">{r.typicalHeight}</td>
                          <td className="py-3 px-4 font-semibold text-[#96601A]">{r.minDoor}</td>
                          <td className="py-3 px-4 text-[#5C5650]">{r.minDepth}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="font-dm-sans text-xs text-[#9A9590] px-5 py-3.5 bg-[#F5EFE6] border-t border-[#E8DDD0]">
                  Planning guidelines only — measure your exact rig on level pavement from ground to highest roof fixture (A/C shroud, Starlink dish, cargo box, or wake tower) and tongue-to-tail before writing an offer.
                </p>
              </div>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                3. Where to Find Shop &amp; RV-Garage Homes: Post Falls vs. Rathdrum
              </h2>
              <p className="mb-6">
                Median all-home prices in Post Falls ($539,900) and Rathdrum ($551,000, Homes.com 12-month window checked November 9, 2026) sit barely $11,000 apart — yet the two neighboring cities solve the shop problem in very different ways:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li>
                  <strong className="text-[#1C1A17]">Choose Post Falls</strong> when you want an <strong>attached RV super-bay</strong> on municipal water and sewer, minimal yard mowing, and the quickest 22-to-28-minute I-90 commute into Spokane. (See all 10 active Post Falls subdivisions on our{' '}
                  <Link href="/areas/post-falls-idaho/new-construction" className="text-[#C4842A] hover:underline">
                    Post Falls New Construction Hub
                  </Link>.)
                </li>
                <li>
                  <strong className="text-[#1C1A17]">Choose Rathdrum</strong> when you want a <strong>detached 24×32, 30×40, or 40×60 shop</strong>, wider side-yard trailer access, or 0.5 to 5 acres on the Prairie — trading roughly 7 to 10 extra commute minutes for far more shop-friendly zoning and CC&amp;Rs. (Compare daily life head-to-head in{' '}
                  <Link href="/articles/post-falls-vs-rathdrum-which-is-right-for-you" className="text-[#C4842A] hover:underline">
                    Post Falls vs. Rathdrum
                  </Link>.)
                </li>
              </ul>

              {/* Verified Shop Pockets Cards */}
              <div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
                <div className="bg-[#1C1A17] px-5 py-4">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">
                    5 Verified Shop &amp; RV-Bay Paths in Post Falls &amp; Rathdrum (Checked Nov 23, 2026)
                  </p>
                </div>
                <div className="divide-y divide-[#E8DDD0] bg-[#F5EFE6]">
                  {shopPockets.map((p) => (
                    <div key={p.name} className="p-5">
                      <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1.5">
                        <h3 className="font-dm-sans font-semibold text-[#1C1A17] text-base">{p.name}</h3>
                        <span className="font-dm-sans text-sm font-semibold text-[#96601A]">{p.priceBand}</span>
                      </div>
                      <p className="font-dm-sans text-xs uppercase tracking-wider text-[#6B7A8D] mb-2">{p.setup}</p>
                      <p className="font-dm-sans text-sm text-[#5C5650] leading-relaxed">{p.notes}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                4. Five Due-Diligence Checks Before You Buy a Shop Property (or Lot to Build One)
              </h2>
              <p className="mb-6">
                Whether you are buying an existing home with a 36×48 pole building or buying a half-acre lot planning to add a shop next summer, run these five checks <em>before</em> your inspection contingency expires:
              </p>

              <div className="my-8 p-6 bg-[#1C1A17] rounded-sm space-y-4">
                <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">
                  The North Idaho Shop &amp; RV-Bay Inspection Checklist
                </p>
                <p className="font-dm-sans text-sm text-[#C4BDB4] leading-relaxed">
                  <strong className="text-[#F5EFE6]">1. Pull the Panhandle Health septic &amp; reserve-drainfield map:</strong> On rural Rathdrum and Post Falls acreage over the Spokane Valley–Rathdrum Prairie Aquifer, every septic permit designates both a primary drainfield and a 100% replacement reserve area. You cannot pour a shop slab or pave an RV pad over that reserve zone — read our{' '}
                  <Link href="/articles/buying-property-prairie-wells-septic-roads" className="text-[#C4842A] hover:underline">
                    Prairie wells &amp; septic guide
                  </Link>.
                </p>
                <p className="font-dm-sans text-sm text-[#C4BDB4] leading-relaxed">
                  <strong className="text-[#F5EFE6]">2. Verify building permits &amp; snow-load engineering on existing shops:</strong> Unpermitted outbuildings are common on older Kootenai County acreage. Confirm Kootenai County or city building/electrical final sign-offs so appraisers and insurers count the structure properly.
                </p>
                <p className="font-dm-sans text-sm text-[#C4BDB4] leading-relaxed">
                  <strong className="text-[#F5EFE6]">3. Check subpanel amperage, not just “power in shop”:</strong> An extension-cord trench or 30-amp lighting feed won’t run a 50-amp RV shore plug, 220V welder, two-post car lift, and Level 2 EV charger simultaneously. Note how Monogram’s Thayer Farms North shop spec explicitly builds in a <strong>90-amp subpanel</strong>; many acreage buyers target 100A–200A shop service.
                </p>
                <p className="font-dm-sans text-sm text-[#C4BDB4] leading-relaxed">
                  <strong className="text-[#F5EFE6]">4. Read HOA CC&amp;Rs on exterior materials, eave height &amp; driveway clocks:</strong> Some subdivisions allow detached shops only if roof pitch, siding, and paint match the primary residence and stay below a strict ridge-height cap — and most ban outdoor RV parking beyond 24–72 hours (see our{' '}
                  <Link href="/articles/hoa-north-idaho-subdivisions-fees-rules-what-to-check" className="text-[#C4842A] hover:underline">
                    North Idaho HOA guide
                  </Link>).
                </p>
                <p className="font-dm-sans text-sm text-[#C4BDB4] leading-relaxed">
                  <strong className="text-[#F5EFE6]">5. Confirm heat source, slab vapor barrier &amp; frost-free water:</strong> If you store a winterized lithium-battery Sprinter or boat through January freezes, check wall/ceiling insulation R-values, natural-gas unit heater vs. heat-pump mini-split sizing, and whether any shop half-bath pipes are freeze-protected.
                </p>
              </div>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Sources and Scope
              </h2>
              <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6 mb-6">
                <ul className="space-y-3">
                  {sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#96601A] hover:underline"
                      >
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm mb-10">
                Published November 23, 2026. Live MLS filter behavior and active Post Falls / Rathdrum examples were verified on November 23, 2026. Builder prices, shop-lot availability, garage door dimensions, HOA CC&amp;Rs, and municipal/county setback or septic rules vary by parcel and change without notice; confirm exact clear door height, bay depth, permits, and recorded covenants in writing for any specific property before signing. General real estate information only, not engineering or legal advice.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 mb-12">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border border-[#E8DDD0] rounded-sm p-6 bg-[#F5EFE6]">
                    <h3 className="font-dm-sans font-semibold text-[#1C1A17] text-base mb-3">{faq.q}</h3>
                    <p className="font-dm-sans text-[17px] text-[#5C5650] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

              {/* Shirin Custom MLS Rig-Search CTA */}
              <div className="bg-[#1C1A17] rounded-sm p-8 mt-4">
                <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">
                  Skip the Broken Checkboxes · Send Me Your Rig Dimensions
                </p>
                <div className="flex items-start gap-5 mb-6">
                  <Image
                    src="/images/shirin-headshot-studio.webp"
                    alt="Shirin Abplanalp, Post Falls and Rathdrum REALTOR"
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                    width={56}
                    height={56}
                    sizes="56px"
                  />
                  <div>
                    <p className="font-cormorant text-2xl text-[#F5EFE6] font-semibold mb-1">Shirin Abplanalp</p>
                    <p className="font-dm-sans text-sm text-[#9A9590]">
                      Licensed REALTOR® · Berkshire Hathaway HomeServices Jacklin Real Estate · Idaho License #1371861
                    </p>
                  </div>
                </div>
                <p className="font-dm-sans text-[#9A9590] leading-relaxed mb-6">
                  Tell me what you’re parking — Sprinter height with roof gear, boat length on trailer, fifth-wheel clearance, or the shop size and amperage you want — plus your budget. I’ll run an agent-side Coeur d’Alene MLS remarks and outbuilding search across Post Falls and Rathdrum (and walk any promising bay on video with a tape measure before you fly out).
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold text-sm py-3 px-6 transition-colors"
                  >
                    Send Shirin Your Rig &amp; Shop Specs
                  </Link>
                  <a
                    href={IDX_SHOP_LOT_CANDIDATES_POST_FALLS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center border border-[#5C5650] hover:border-[#C4842A] text-[#F5EFE6] font-dm-sans font-semibold text-sm py-3 px-5 transition-colors"
                  >
                    Post Falls 0.25+ Ac Homes ↗
                  </a>
                  <a
                    href={IDX_SHOP_LOT_CANDIDATES_RATHDRUM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center border border-[#5C5650] hover:border-[#C4842A] text-[#F5EFE6] font-dm-sans font-semibold text-sm py-3 px-5 transition-colors"
                  >
                    Rathdrum 0.25+ Ac Homes ↗
                  </a>
                </div>
              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="sticky top-28 space-y-6">
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">
                    Quick Clearance Cheat Sheet
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: '7 ft – 8 ft Door', val: 'Standard cars & stock pickups only' },
                      { label: '10 ft Door', val: 'Lifted trucks & folded wake towers' },
                      { label: '12 ft Door (144")', val: 'Sprinter 3500 w/ A/C + roof box, wakeboats' },
                      { label: '14 ft Door (168")', val: 'Fifth-wheels, Class A coaches & toy haulers' },
                      { label: 'Thayer Farms Shop Lots', val: 'From $539,999 · 24×32×12 w/ 90A panel' },
                      { label: 'Millsap Landing Spec', val: '$659,000 · Attached 2-car + RV bay (PF)' },
                    ].map((item) => (
                      <div key={item.label} className="border-b border-[#2C2A27] last:border-0 pb-3 last:pb-0">
                        <p className="font-dm-sans text-sm font-semibold text-[#F5EFE6]">{item.label}</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-0.5">{item.val}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">
                    Related Prairie &amp; Build Guides
                  </p>
                  <div className="space-y-4">
                    <Link href="/areas/post-falls-idaho/new-construction" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">
                        Post Falls New Construction Hub
                      </p>
                      <p className="font-dm-sans text-xs text-[#9A9590] mt-1">
                        All 10 active Post Falls subdivisions, builders &amp; 2026 prices
                      </p>
                    </Link>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <Link href="/articles/post-falls-vs-rathdrum-which-is-right-for-you" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">
                          Post Falls vs. Rathdrum (2026 Guide)
                        </p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">
                          Lot sizes, commutes, snow &amp; school districts compared
                        </p>
                      </Link>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <Link href="/articles/buying-property-prairie-wells-septic-roads" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">
                          Prairie Wells, Septic &amp; Road Rules
                        </p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">
                          Essential checks before building a shop on 1–5 acres
                        </p>
                      </Link>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <Link href="/articles/hoa-north-idaho-subdivisions-fees-rules-what-to-check" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">
                          HOAs in North Idaho Subdivisions
                        </p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">
                          RV driveway rules, outbuilding caps &amp; disclosure rights
                        </p>
                      </Link>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <Link href="/areas/rathdrum-idaho" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">
                          Rathdrum Real Estate &amp; Living Guide
                        </p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">
                          Thayer Farms, Radiant Lake, Twin Lakes &amp; Prairie acreage
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
