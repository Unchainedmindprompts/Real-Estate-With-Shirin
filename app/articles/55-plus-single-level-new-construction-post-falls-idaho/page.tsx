import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'
import { AGENT_AUTHOR_STUB, BRAND_PUBLISHER_STUB, placeStub, jsonLdGraph } from '@/lib/schema-ids'
import { IDX_NEW_CONSTRUCTION_POST_FALLS } from '@/lib/idx-search'

const articleUrl = 'https://www.realestatewithshirin.com/articles/55-plus-single-level-new-construction-post-falls-idaho'
const ogImageUrl = 'https://www.realestatewithshirin.com/images/shirin-portrait-2026.png'

const sources = [
  {
    label:
      'Greenstone Homes, Trutina 55+ at North Place community page, Post Falls (checked November 23, 2026): age-restricted 55+ resort-style neighborhood within North Place; published home plans include Hamilton $415,000 (998 sq ft, 2 bed, 2 bath, 1-car alley garage), Victoria $430,000 (1,248 sq ft, 2 bed, 2 bath, 1-car alley garage), Oak Harbor $445,000 (1,194 sq ft, 3 bed, 2 bath, 2-car alley garage), Sonoma $445,000 (1,194 sq ft, 3 bed, 2 bath, 2-car alley garage), Astoria $455,000 (1,366 sq ft, 3 bed, 2 bath, 2-car alley garage), Seaside $455,000 (1,366 sq ft, 2 bed, 2 bath, 2-car alley garage), Monterey $470,000 (1,664 sq ft, 3 bed, 2 bath, 2-car alley garage), and Springfield $527,000 (1,586 sq ft, Rancher, 3 bed, 2 bath, 2-car front-entry garage); Cottage Collection notes main-floor living, zero-step entry options, lawn care, and partial snow removal; lists Haystack Park, Penrose Park, Future Lodge, townhomes, and elevator-served rental apartment options',
    url: 'https://greenstonehomes.com/community/trutina-at-north-place',
  },
  {
    label:
      'Greenstone Homes, North Place (all-ages) & Cottage Collection pages, Post Falls (checked November 23, 2026): Springfield Rancher listed at $517,000 (1,586 sq ft, 3 bed, 2 bath, 2-car front-entry garage); Cottage Collection page lists Hamilton $404,000–$449,000, Victoria $419,000–$464,000, Oak Harbor and Sonoma $434,000–$479,000, Astoria and Seaside $444,000–$489,000, and Monterey $459,000–$504,000; Cottage Home Promo offers $5,000 on Pre-Sale or $10,000 on completed Quick Move-In Cottage Collection homes toward closing costs or a rate buydown (no expiration date published)',
    url: 'https://greenstonehomes.com/community/north-place',
  },
  {
    label:
      'Greenstone Homes, Montrose community page, Post Falls (checked November 23, 2026): 5+ miles of paved trails connecting to the Centennial Trail via the Karen Streeter trail system and 60 acres of parks; published single-level Rancher plans include Springfield $497,000 (1,586 sq ft), Willow $511,000 (1,714 sq ft), Hampton $514,000 (1,875 sq ft), Cypress $516,000 (1,994 sq ft, 4 bed), Roslyn $530,000 (2,033 sq ft), Carson $546,000 (2,166 sq ft), and Kingston $558,000 (2,338 sq ft, 4 bed), all with 2-car front-entry garages',
    url: 'https://greenstonehomes.com/community/montrose',
  },
  {
    label:
      'Viking Construction, Montrose & Wildflower Meadows Post Falls pages and Coeur d’Alene MLS (checked November 23, 2026): Wildflower Meadows Riverview single-level zero-lot-line Twin Homes listed at $375,556–$376,220 (2 bed, 2 bath, 1,161 sq ft); Montrose Towne Series Cambridge 1416 single-level home listed at $450,641 (3 bed, 2 bath, 1,416 sq ft)',
    url: 'https://vikinghomes.com/north-idaho-communities/',
  },
  {
    label:
      'Hayden Homes & Lennar, Crown Reserve community pages, Post Falls (checked November 23, 2026): Hayden Homes offers 1- and 2-story single-family plans from $414,990 (1,323–3,195 sq ft, 2–3 car garages); Lennar’s five published Crown Reserve plans ($420,950–$492,950, 1,526–2,196 sq ft) are all 2.5-bath two-story cottage plans',
    url: 'https://www.hayden-homes.com/new-homes/idaho/north-idaho/post-falls/crown-reserve',
  },
  {
    label:
      'Architerra Homes, Foxtail & The Parkllyn community pages, Post Falls (checked November 23, 2026): Foxtail available homes $468,900–$611,600 (single-level ranch and two-story plans); The Parkllyn starting in the mid-$400,000s (available specs $470,500–$1,002,880, 1,300–3,870 sq ft)',
    url: 'https://myarchiterra.com/',
  },
  {
    label:
      'U.S. Department of Housing and Urban Development (HUD), Housing for Older Persons Act of 1995 (HOPA), 42 U.S.C. § 3607(b)(2)(C): federal 55-or-older exemption requires at least 80% of occupied units to be occupied by at least one person 55 years of age or older, plus published age-verification policies',
    url: 'https://www.hud.gov/program_offices/fair_housing_equal_opp/fair_housing_act_housing_older_persons',
  },
  {
    label:
      'Idaho State Tax Commission, Property Tax Reduction (Circuit Breaker) & Homeowner’s Exemption under Idaho Code § 63-602G (checked November 2026): Homeowner’s Exemption exempts 50% of assessed improvement + land value up to $125,000 on a primary residence; 2027 Circuit Breaker provides $250 to $1,500 on 2026 income of $40,030 or less for qualifying seniors 65+, widows/widowers, and disabled homeowners',
    url: 'https://tax.idaho.gov/taxes/property/homeowners/property-tax-reduction/',
  },
]

export const metadata: Metadata = {
  title: '55+ & Single-Level New Construction in Post Falls, Idaho: Trutina vs. All-Ages Ranchers (2026 SRES® Guide)',
  description:
    'Comparing Trutina 55+ at North Place ($415,000–$527,000) against all-ages single-level new builds in North Place, Montrose, Crown Reserve, Foxtail, The Parkllyn, and Wildflower Meadows ($375,556+). A practical SRES® downsizing guide.',
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: '55+ & Single-Level New Construction in Post Falls, Idaho: Trutina vs. All-Ages Ranchers',
    description:
      'Checked November 23, 2026: every published Trutina 55+ floor plan ($415K–$527K), how all-ages single-level ranchers next door compare by $10K–$11K per plan, zero-step and snow-removal fine print, and Post Falls medical access.',
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
    q: 'What is the only dedicated 55+ new construction community in Post Falls right now?',
    a: 'Checked November 23, 2026, Trutina at North Place by Greenstone Homes is Post Falls’ dedicated age-qualified 55+ resort-style new construction community. Located south of Prairie Avenue inside the North Place master plan near Prairie Falls Golf Club, Trutina publishes eight single-level Cottage and Rancher floor plans ranging from $415,000 (the 998 sq ft, 2-bed/2-bath Hamilton cottage) up to $527,000 (the 1,586 sq ft, 3-bed/2-bath Springfield front-entry rancher), alongside townhome and elevator-served apartment rental options.',
  },
  {
    q: 'How much more does Trutina 55+ cost than the same floor plan in all-ages North Place?',
    a: 'On Greenstone’s own community pages checked November 23, 2026, the exact same floor plans carry a $10,000 to $11,000 higher base starting price inside Trutina 55+ than in the adjacent all-ages North Place neighborhood or Greenstone’s base Cottage schedule. For example, the 1,586 sq ft Springfield Rancher lists at $527,000 in Trutina 55+ versus $517,000 in all-ages North Place (and $497,000 in Montrose), while the 998 sq ft Hamilton Cottage starts at $415,000 in Trutina 55+ versus $404,000 on Greenstone’s base Cottage schedule. That price and HOA difference reflects Trutina’s dedicated 55+ resort programming and planned Future Lodge amenities.',
  },
  {
    q: 'Does a single-level floor plan automatically mean zero-step entry?',
    a: 'No — and that distinction catches many relocating retirees off guard. "Single-level" or "rancher" only means the bedrooms, kitchen, and laundry sit on one main floor; the home can still have two or three concrete steps from the garage into the mudroom, a stepped front porch, a 4-inch shower curb, and narrower 30-inch bathroom doors. Greenstone explicitly notes "zero-step entry options" on its Cottage Collection, meaning zero-step grading or framing must be confirmed per lot and plan before construction or contract signing rather than assumed.',
  },
  {
    q: 'What does "partial snow removal" in a Post Falls 55+ or cottage HOA actually mean?',
    a: 'Greenstone’s Cottage Collection description lists lawn care and partial snow removal among its carefree-living features, but every HOA defines snow triggers and boundaries differently in its recorded CC&Rs and annual maintenance contract. Before your inspection or document-review window closes, confirm in writing: (1) the snow-depth trigger (for example, 2 inches vs. 4 inches before plows dispatch), (2) whether private alleys, driveway aprons, and front walkways up to the porch are cleared or only the main street, and (3) whether ice melt is included or excluded.',
  },
  {
    q: 'Where can I find non-age-restricted single-level new construction in Post Falls?',
    a: 'Buyers who want single-level living without 55+ age rules (so adult children can live at home indefinitely and future resale stays open to all age groups) have six active Post Falls options checked November 23, 2026: Viking’s Wildflower Meadows single-level twin homes ($375,556–$376,220, 1,161 sq ft), Greenstone’s all-ages North Place cottages and ranchers ($404,000–$517,000), Hayden Homes’ single-story plans at Crown Reserve (community starts at $414,990 — note that Lennar’s five Crown Reserve plans are all two-story), Viking’s Cambridge 1416 at Montrose ($450,641), Architerra’s single-level ranches at The Parkllyn (mid-$400Ks+) and Foxtail ($468,900+), and Greenstone’s seven Clearwater rancher plans at Montrose ($497,000–$558,000, 1,586–2,338 sq ft).',
  },
  {
    q: 'How close are Post Falls new construction neighborhoods to hospitals and medical specialists?',
    a: 'Post Falls sits in arguably the strongest medical corridor in North Idaho. Physician-owned Northwest Specialty Hospital (1593 E Polston Ave — orthopedic joint replacement, spine, ophthalmology, ENT, 3D mammography, and North Idaho’s only open MRI) is right inside Post Falls, 5 to 10 minutes from Prairie and Hwy 41 subdivisions. Kootenai Health’s main campus in Coeur d’Alene (the region’s ACS-verified Level II Trauma Center) is roughly 15 minutes east via I-90, and Spokane’s major tertiary medical centers sit 25 to 30 minutes west on flat Interstate 90.',
  },
]

const trutinaPlans = [
  { plan: 'Hamilton', type: 'Cottage · Alley 1-Car', sqft: '998 sq ft', beds: '2 bd / 2 ba', trutinaPrice: '$415,000', allAgesBase: '$404,000–$449,000' },
  { plan: 'Victoria', type: 'Cottage · Alley 1-Car', sqft: '1,248 sq ft', beds: '2 bd / 2 ba', trutinaPrice: '$430,000', allAgesBase: '$419,000–$464,000' },
  { plan: 'Oak Harbor', type: 'Cottage · Alley 2-Car', sqft: '1,194 sq ft', beds: '3 bd / 2 ba', trutinaPrice: '$445,000', allAgesBase: '$434,000–$479,000' },
  { plan: 'Sonoma', type: 'Cottage · Alley 2-Car', sqft: '1,194 sq ft', beds: '3 bd / 2 ba', trutinaPrice: '$445,000', allAgesBase: '$434,000–$479,000' },
  { plan: 'Astoria', type: 'Cottage · Alley 2-Car', sqft: '1,366 sq ft', beds: '3 bd / 2 ba', trutinaPrice: '$455,000', allAgesBase: '$444,000–$489,000' },
  { plan: 'Seaside', type: 'Cottage · Alley 2-Car', sqft: '1,366 sq ft', beds: '2 bd / 2 ba', trutinaPrice: '$455,000', allAgesBase: '$444,000–$489,000' },
  { plan: 'Monterey', type: 'Cottage · Alley 2-Car', sqft: '1,664 sq ft', beds: '3 bd / 2 ba', trutinaPrice: '$470,000', allAgesBase: '$459,000–$504,000' },
  { plan: 'Springfield', type: 'Rancher · Front 2-Car', sqft: '1,586 sq ft', beds: '3 bd / 2 ba', trutinaPrice: '$527,000', allAgesBase: '$517,000 (North Place) · $497,000 (Montrose)' },
]

const allAgesSingleLevelRows = [
  {
    community: 'Wildflower Meadows (Viking)',
    price: '$375,556 – $376,220',
    plans: 'Riverview Twin Home · 1,161 sq ft · 2 bd / 2 ba',
    fit: 'Lowest-cost brand-new single-level ownership in Post Falls; zero-lot-line shared wall.',
  },
  {
    community: 'North Place All-Ages (Greenstone)',
    price: '$404,000 – $517,000',
    plans: 'Cottages (998–1,664 sq ft) & Springfield Rancher (1,586 sq ft)',
    fit: 'Same Greenstone plans as Trutina for ~$10K–$11K less, with no 55+ age restriction.',
  },
  {
    community: 'Crown Reserve (Hayden Homes)',
    price: 'Community from $414,990',
    plans: 'Select 1-story plans within 1,323–3,195 sq ft lineup (2–3 car)',
    fit: 'Traditional yard + optional 3-car garage. (Skip Lennar here if you need 1-story: all 5 Lennar plans are 2-story.)',
  },
  {
    community: 'Montrose (Viking & Greenstone)',
    price: '$450,641 (Viking) · $497K–$558K (Greenstone)',
    plans: 'Cambridge 1416 (1,416 sq ft) + 7 Clearwater Ranchers (1,586–2,338 sq ft)',
    fit: '60 acres of parks & 5+ miles of paved trails linking to the Centennial Trail.',
  },
  {
    community: 'The Parkllyn & Foxtail (Architerra)',
    price: 'Mid-$400Ks+ (Parkllyn) · $468,900+ (Foxtail)',
    plans: 'Modern single-level ranch layouts from ~1,300 to 2,400+ sq ft',
    fit: 'Architectural curb appeal, Hwy 41 retail proximity, and fast I-90 medical/airport access.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${articleUrl}#article`,
  headline: '55+ & Single-Level New Construction in Post Falls, Idaho: Trutina vs. All-Ages Ranchers (2026 SRES® Guide)',
  description:
    'Checked November 23, 2026: every published Trutina 55+ floor plan ($415,000–$527,000) compared side by side with all-ages single-level new builds in North Place, Montrose, Crown Reserve, Foxtail, The Parkllyn, and Wildflower Meadows ($375,556+).',
  image: {
    '@type': 'ImageObject',
    url: ogImageUrl,
    width: 1448,
    height: 1086,
  },
  author: AGENT_AUTHOR_STUB,
  publisher: BRAND_PUBLISHER_STUB,
  datePublished: '2026-11-23T00:00:00-08:00',
  dateModified: '2026-11-23T00:00:00-08:00',
  mainEntityOfPage: articleUrl,
  isPartOf: { '@id': 'https://www.realestatewithshirin.com/articles' },
  url: articleUrl,
  keywords: [
    '55+ new construction Post Falls Idaho',
    'Trutina at North Place Post Falls prices floor plans',
    'single level new construction Post Falls ID',
    'active adult communities North Idaho 2026',
    'patio homes cottages Post Falls Idaho',
    'SRES realtor Post Falls Coeur dAlene downsizing',
  ],
  articleSection: 'Senior Real Estate & Downsizing',
  wordCount: 2250,
  about: [placeStub('postFalls')],
  spatialCoverage: placeStub('kootenai'),
  mentions: [
    placeStub('postFalls'),
    placeStub('coeurDalene'),
    placeStub('rathdrum'),
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
    { '@type': 'ListItem', position: 3, name: '55+ & Single-Level New Construction in Post Falls', item: articleUrl },
  ],
}

export default function FiftyFivePlusPostFallsNewConstructionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdGraph([articleSchema, faqSchema, breadcrumbSchema])),
        }}
      />

      {/* Editorial Article Header */}
      <section className="bg-[#F5EFE6] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm text-[#9A9590] mb-6 font-dm-sans" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#C4842A] transition-colors">Home</Link>
            <span className="mx-2">·</span>
            <Link href="/articles" className="hover:text-[#C4842A] transition-colors">Articles</Link>
            <span className="mx-2">·</span>
            <Link href="/areas/post-falls-idaho/new-construction" className="hover:text-[#C4842A] transition-colors">
              Post Falls New Construction
            </Link>
            <span className="mx-2">·</span>
            <span className="text-[#5C5650]">55+ &amp; Single-Level Guide</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C4842A] font-dm-sans">
              55+ &amp; Downsizing · SRES® Guide
            </span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">12 min read</span>
            <span className="text-[#9A9590] text-xs font-dm-sans">·</span>
            <span className="text-xs text-[#9A9590] font-dm-sans">Verified November 23, 2026</span>
          </div>

          <h1 className="font-cormorant text-5xl md:text-6xl text-[#1C1A17] leading-tight mb-6 font-semibold">
            55+ &amp; Single-Level New Construction in Post Falls, Idaho: Trutina vs. All-Ages Ranchers
          </h1>

          <p className="font-dm-sans text-lg text-[#5C5650] max-w-3xl mb-8 leading-relaxed">
            Most retirees and downsizers searching for a brand-new single-level home in Kootenai County end up focusing on Post Falls for three practical reasons: flat prairie streets averaging ~40 inches of snow, 5-to-15-minute access to Northwest Specialty Hospital and Kootenai Health, and the widest single-level builder lineup in North Idaho. Here is how dedicated 55+ living at <strong>Trutina at North Place ($415,000–$527,000)</strong> compares plan-for-plan against <strong>six non-age-restricted single-level communities ($375,556–$558,000+)</strong> right across town.
          </p>

          <div className="flex items-center gap-4">
            <Image
              src="/images/shirin-headshot-studio.webp"
              alt="Shirin Abplanalp, licensed REALTOR and Seniors Real Estate Specialist (SRES) in Post Falls, Idaho"
              className="w-10 h-10 rounded-full object-cover"
              width={40}
              height={40}
              sizes="40px"
            />
            <div>
              <p className="font-dm-sans font-semibold text-sm text-[#1C1A17]">Shirin Abplanalp, SRES®</p>
              <p className="font-dm-sans text-xs text-[#9A9590]">
                Licensed REALTOR® &amp; Seniors Real Estate Specialist® · BHHS Jacklin Real Estate · November 23, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E8DDD0]" />

      {/* 4-Metric Bar */}
      <section className="bg-[#1C1A17] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$415K–$527K</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Trutina 55+ Published Plans</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">8 single-level plans · Nov 23, 2026</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$10K–$11K</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">55+ Base Price Premium</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Vs. identical Greenstone all-ages plans</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">$375,556</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Lowest Single-Level Build</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">Wildflower Meadows 1,161 sq ft twin</p>
            </div>
            <div className="text-center">
              <p className="font-cormorant text-3xl text-[#C4842A] font-semibold">5–15 min</p>
              <p className="font-dm-sans text-xs text-[#9A9590] mt-1 uppercase tracking-wide">Hospital Proximity</p>
              <p className="font-dm-sans text-xs text-[#6B7A8D] mt-0.5">NW Specialty &amp; Kootenai Health</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="bg-[#FAFAF8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            <article className="lg:col-span-2 font-dm-sans text-[#5C5650] text-[17px] leading-[1.75]">
              <p className="mb-6">
                When buyers 55 and better call me about downsizing or relocating to North Idaho, nine out of ten ask the same opening question: <em>“Does North Idaho have actual 55+ active-adult communities like Arizona, California, or Western Washington — or should we buy a regular single-level rancher in an all-ages neighborhood?”</em>
              </p>
              <p className="mb-10">
                In Post Falls, you no longer have to guess because both options sit minutes apart on the same flat Rathdrum Prairie — and in one case, the <strong>exact same builder builds the exact same floor plans</strong> on both sides of the 55+ boundary line. This guide extends our{' '}
                <Link href="/areas/post-falls-idaho/new-construction" className="text-[#C4842A] hover:underline font-medium">
                  Post Falls New Construction Communities &amp; Builders Hub
                </Link>{' '}
                with every single-level number verified directly on the builders’ sites and the Coeur d’Alene MLS on <strong>November 23, 2026</strong>.
              </p>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                1. Inside Trutina at North Place: Post Falls’ Dedicated 55+ Community
              </h2>
              <p className="mb-6">
                Built by Greenstone Homes south of Prairie Avenue between Idaho Road and Greensferry Road (near Prairie Falls Golf Club), <strong>Trutina 55+ at North Place</strong> is Post Falls’ flagship age-restricted neighborhood. Unlike massive 5,000-home Sun Belt retirement cities, Trutina is scaled as an intimate enclave inside the broader North Place master plan — surrounded by Haystack Park, Penrose Park, paved prairie walking paths, a planned <strong>Future Lodge</strong> social hub, and both ownership and elevator-served apartment rental options.
              </p>
              <p className="mb-6">
                On Greenstone’s Trutina page checked November 23, 2026, eight ownership floor plans are published — seven <strong>Cottage Collection</strong> homes with rear alley-entry garages (which keep garage doors off the front streetscape and create front-porch walkways) plus one <strong>Springfield Rancher</strong> with a traditional 2-car front-entry garage:
              </p>

              {/* Trutina Plan-by-Plan Table */}
              <div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
                <div className="bg-[#1C1A17] px-5 py-4">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">
                    Trutina 55+ Published Plans vs. Greenstone All-Ages Base Schedule (Checked Nov 23, 2026)
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[640px]">
                    <thead>
                      <tr className="bg-[#EDE6DA] border-b border-[#E8DDD0] text-xs uppercase tracking-wider text-[#1C1A17]">
                        <th className="py-3 px-4 font-semibold">Plan</th>
                        <th className="py-3 px-4 font-semibold">Style &amp; Garage</th>
                        <th className="py-3 px-4 font-semibold">Sq Ft &amp; Beds</th>
                        <th className="py-3 px-4 font-semibold">Trutina 55+</th>
                        <th className="py-3 px-4 font-semibold">All-Ages Base</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trutinaPlans.map((row) => (
                        <tr key={row.plan} className="border-b border-[#E8DDD0] last:border-0 bg-[#F5EFE6] text-sm">
                          <td className="py-3 px-4 font-semibold text-[#1C1A17]">{row.plan}</td>
                          <td className="py-3 px-4 text-[#5C5650]">{row.type}</td>
                          <td className="py-3 px-4 text-[#5C5650]">{row.sqft} · {row.beds}</td>
                          <td className="py-3 px-4 font-semibold text-[#1C1A17]">{row.trutinaPrice}</td>
                          <td className="py-3 px-4 text-[#5C5650]">{row.allAgesBase}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="font-dm-sans text-xs text-[#9A9590] px-5 py-3.5 bg-[#F5EFE6] border-t border-[#E8DDD0]">
                  Source: Greenstone Homes official Trutina 55+, North Place, Montrose, and Cottage Collection pages, checked November 23, 2026. Published base prices exclude lot premiums and Design Studio selections. Greenstone’s Cottage Home Promo offers $5,000 on Pre-Sale or $10,000 on completed Quick Move-In Cottage Collection homes toward closing costs or rate buydown (confirm current eligibility in writing before signing).
                </p>
              </div>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                2. The $10,000–$11,000 Question: What Age-Restricted 55+ Actually Trades Off
              </h2>
              <p className="mb-6">
                Look closely at the rightmost two columns in the table above. Every Cottage plan in Trutina 55+ starts <strong>$11,000 above</strong> the bottom of Greenstone’s all-ages Cottage price schedule ($415,000 vs. $404,000 on the Hamilton; $470,000 vs. $459,000 on the Monterey), and the 1,586 sq ft Springfield Rancher starts <strong>$10,000 higher</strong> in Trutina 55+ ($527,000) than in all-ages North Place right next door ($517,000) — and $30,000 above Montrose’s $497,000 Springfield base.
              </p>
              <p className="mb-6">
                Neither side is “overpriced” — you are paying for a specific legal and lifestyle structure under the federal <strong>Housing for Older Persons Act (HOPA)</strong>, which requires at least 80% of occupied homes to have at least one resident aged 55 or older:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-10">
                <li>
                  <strong className="text-[#1C1A17]">When Trutina 55+ wins:</strong> You want neighbors in a similar stage of life, quieter daytime streets, built-in social connection around the planned Future Lodge, and Greenstone’s Cottage Collection maintenance setup (lawn care and partial snow removal baked into neighborhood operations).
                </li>
                <li>
                  <strong className="text-[#1C1A17]">When an all-ages single-level rancher wins:</strong> You want a 3-car or RV garage (Trutina’s published plans max out at 1- or 2-car garages), you have a younger adult child or caregiver under age thresholds who may live with you long-term (55+ CC&amp;Rs typically cap minimum household member ages and guest-stay lengths), or you want your future estate/resale open to 100% of Post Falls buyers rather than only 55+ households.
                </li>
              </ul>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                3. Six All-Ages Single-Level New Construction Alternatives in Post Falls
              </h2>
              <p className="mb-6">
                If you decide against age-restricted rules — or want more garage capacity, a larger yard, or a lower entry price — Post Falls has six verified all-ages new-build pockets offering single-level living right now. One critical local filter saves buyers wasted Saturdays: at <strong>Crown Reserve</strong>, Hayden Homes builds true 1-story plans starting from $414,990, whereas <strong>all five of Lennar’s published Crown Reserve plans (1,526–2,196 sq ft, 2.5 baths) are two-story homes</strong>.
              </p>

              <div className="my-8 border border-[#E8DDD0] rounded-sm overflow-hidden">
                <div className="bg-[#1C1A17] px-5 py-4">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">
                    All-Ages Single-Level New Builds in Post Falls (Checked Nov 23, 2026)
                  </p>
                </div>
                <div className="divide-y divide-[#E8DDD0] bg-[#F5EFE6]">
                  {allAgesSingleLevelRows.map((row) => (
                    <div key={row.community} className="p-5">
                      <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1.5">
                        <h3 className="font-dm-sans font-semibold text-[#1C1A17] text-base">{row.community}</h3>
                        <span className="font-dm-sans text-sm font-semibold text-[#96601A]">{row.price}</span>
                      </div>
                      <p className="font-dm-sans text-xs uppercase tracking-wider text-[#6B7A8D] mb-2">{row.plans}</p>
                      <p className="font-dm-sans text-sm text-[#5C5650] leading-relaxed">{row.fit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                4. The SRES® Physical Walk-Through Checklist: “Single-Level” ≠ “Zero-Step”
              </h2>
              <p className="mb-6">
                Floor-plan flyers flatten everything into a 2D drawing, hiding the three-inch and seven-inch elevation steps that matter most ten years into retirement. Whenever I preview a Post Falls spec home or pre-sale lot for an SRES® client — whether in person or on a live video tour for an out-of-state buyer — we verify five physical and HOA items before writing an offer:
              </p>

              <div className="my-8 p-6 bg-[#1C1A17] rounded-sm space-y-4">
                <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A]">
                  5 Checks Before Signing on a Post Falls Rancher or 55+ Cottage
                </p>
                <p className="font-dm-sans text-sm text-[#C4BDB4] leading-relaxed">
                  <strong className="text-[#F5EFE6]">1. Garage-to-house &amp; front-porch step count:</strong> Ask whether the specific lot grade produces a true zero-step threshold from the garage into the kitchen/mudroom, or whether stem-wall height requires 2–3 stairs.
                </p>
                <p className="font-dm-sans text-sm text-[#C4BDB4] leading-relaxed">
                  <strong className="text-[#F5EFE6]">2. Door widths &amp; primary shower pan:</strong> Standard production interior bathroom and closet doors are often 28 to 30 inches clear, and standard fiberglass showers have a 3-to-4-inch step-over curb. Confirm 36-inch primary doorway options, blocking for future grab bars during pre-drywall, and low-threshold or curbless shower upgrades.
                </p>
                <p className="font-dm-sans text-sm text-[#C4BDB4] leading-relaxed">
                  <strong className="text-[#F5EFE6]">3. Alley vs. front-entry winter ice orientation:</strong> North-facing garages hold winter shade and ice longer than south-facing driveways. On alley-loaded cottages, verify who plows the rear alley and where snow windrows are stacked.
                </p>
                <p className="font-dm-sans text-sm text-[#C4BDB4] leading-relaxed">
                  <strong className="text-[#F5EFE6]">4. Exact HOA snow &amp; lawn boundaries in writing:</strong> Never rely on “low-maintenance” brochure phrasing. Read the HOA maintenance matrix for snow trigger depth (2&quot; vs. 4&quot;), sidewalk/porch clearing, front vs. rear mowing, irrigation winterization, and exterior paint reserves — see our{' '}
                  <Link href="/articles/hoa-north-idaho-subdivisions-fees-rules-what-to-check" className="text-[#C4842A] hover:underline">
                    North Idaho HOA checklist
                  </Link>.
                </p>
                <p className="font-dm-sans text-sm text-[#C4BDB4] leading-relaxed">
                  <strong className="text-[#F5EFE6]">5. Radon testing &amp; occupancy tax timing:</strong> Kootenai County sits in EPA Radon Zone 1 (test every new slab/crawlspace — see our{' '}
                  <Link href="/articles/radon-north-idaho-testing-costs-mitigation" className="text-[#C4842A] hover:underline">
                    radon guide
                  </Link>
                  ), and file your{' '}
                  <Link href="/articles/idaho-homestead-exemption-two-exemptions-explained" className="text-[#C4842A] hover:underline">
                    $125,000 Idaho Homeowner’s Exemption
                  </Link>{' '}
                  promptly upon moving in (plus check{' '}
                  <Link href="/articles/idaho-property-tax-relief-circuit-breaker-exemptions" className="text-[#C4842A] hover:underline">
                    Idaho Circuit Breaker &amp; Veterans property tax relief
                  </Link>{' '}
                  if eligible).
                </p>
              </div>

              <h2 className="font-cormorant text-3xl text-[#1C1A17] mt-12 mb-5 font-semibold">
                5. Healthcare, Snow &amp; Airport Access: Why Retirees Pick Post Falls Over Mountain Towns
              </h2>
              <p className="mb-6">
                Many retirees start their North Idaho daydream looking at acreage north of Sandpoint or wooded hills around Hayden Lake, then pivot to Post Falls once they test winter driving and medical logistics. Post Falls averages roughly <strong>40 inches of annual snowfall</strong> on flat prairie roads — less than half of Sandpoint’s mountain-influenced snow zones (see our{' '}
                <Link href="/articles/snowiest-cities-north-idaho-ranking" className="text-[#C4842A] hover:underline">
                  North Idaho snowfall ranking
                </Link>).
              </p>
              <p className="mb-10">
                Just as important, physician-owned <strong>Northwest Specialty Hospital</strong> (orthopedic joint replacements, spine, ophthalmology, ENT, and North Idaho’s only open MRI) sits right on Polston Avenue in Post Falls, <strong>Kootenai Health’s Level II Trauma Center</strong> in Coeur d’Alene is 15 minutes east, Spokane’s tertiary subspecialists sit 25–30 minutes west on I-90, and Spokane International Airport (GEG) is 30–35 minutes door-to-terminal when family flies in. Read our full{' '}
                <Link href="/articles/north-idaho-healthcare-kootenai-spokane" className="text-[#C4842A] hover:underline">
                  Kootenai County &amp; Spokane healthcare breakdown
                </Link>{' '}
                for hospital-by-hospital details.
              </p>

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
                Published November 23, 2026. All community prices, floor plan square footages, garage configurations, and promotional notes were verified directly on the builders’ official websites and Coeur d’Alene MLS listings on November 23, 2026. Builder prices, HOA dues, maintenance inclusions, incentives, and age-qualification rules under federal HOPA and recorded CC&amp;Rs are subject to change without notice; verify all terms in writing for the specific lot and contract before signing. Remember that most Post Falls builders require buyer’s-agent registration on your first model-home visit or inquiry. General real estate information only, not legal or tax advice.
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

              {/* Shirin Author / SRES CTA Card */}
              <div className="bg-[#1C1A17] rounded-sm p-8 mt-4">
                <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">
                  From Shirin · Certified SRES®
                </p>
                <div className="flex items-start gap-5 mb-6">
                  <Image
                    src="/images/shirin-headshot-studio.webp"
                    alt="Shirin Abplanalp, SRES REALTOR in Post Falls, Idaho"
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                    width={56}
                    height={56}
                    sizes="56px"
                  />
                  <div>
                    <p className="font-cormorant text-2xl text-[#F5EFE6] font-semibold mb-1">Shirin Abplanalp</p>
                    <p className="font-dm-sans text-sm text-[#9A9590]">
                      Licensed REALTOR® &amp; SRES® · Berkshire Hathaway HomeServices Jacklin Real Estate · Idaho License #1371861
                    </p>
                  </div>
                </div>
                <p className="font-dm-sans text-[#9A9590] leading-relaxed mb-6">
                  Whether you are comparing Trutina 55+ against an all-ages rancher in Montrose or Foxtail — or shopping from out of state and need me to walk a specific quick-move-in home on video to check step counts, door widths, and sun exposure — reach out before your first model-home visit so I can register and advocate for you from day one.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-block text-center bg-[#C4842A] hover:bg-[#8B4F2A] text-white font-dm-sans font-semibold text-sm py-3 px-6 transition-colors"
                  >
                    Start a Conversation
                  </Link>
                  <a
                    href={IDX_NEW_CONSTRUCTION_POST_FALLS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center border border-[#5C5650] hover:border-[#C4842A] text-[#F5EFE6] font-dm-sans font-semibold text-sm py-3 px-6 transition-colors"
                  >
                    Browse 37 Live Post Falls New Builds ↗
                  </a>
                </div>
              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="sticky top-28 space-y-6">
                <div className="bg-[#1C1A17] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">
                    Quick Price Reference
                  </p>
                  <p className="font-dm-sans text-xs text-[#9A9590] mb-4">
                    Single-level starting points checked Nov 23, 2026
                  </p>
                  <div className="space-y-3">
                    {[
                      { range: 'Wildflower Twins: $375,556+', desc: 'Viking · 1,161 sq ft · All-ages zero-lot-line' },
                      { range: 'North Place Cottages: $404K+', desc: 'Greenstone · 998–1,664 sq ft · All-ages' },
                      { range: 'Crown Reserve 1-Story: $414,990+', desc: 'Hayden Homes · All-ages single-family' },
                      { range: 'Trutina 55+ Cottages: $415K–$470K', desc: 'Greenstone · Age 55+ · Alley 1–2 car' },
                      { range: 'Trutina 55+ Rancher: $527,000', desc: 'Springfield 1,586 sq ft · Front 2-car' },
                      { range: 'Montrose Ranchers: $450.6K–$558K', desc: 'Viking & Greenstone · 60 ac parks/trails' },
                    ].map((b) => (
                      <div key={b.range} className="border-b border-[#2C2A27] last:border-0 pb-3 last:pb-0">
                        <p className="font-dm-sans text-sm font-semibold text-[#F5EFE6]">{b.range}</p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-0.5">{b.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#F5EFE6] border border-[#E8DDD0] rounded-sm p-6">
                  <p className="font-dm-sans text-xs font-semibold uppercase tracking-widest text-[#C4842A] mb-4">
                    Related Post Falls &amp; SRES® Guides
                  </p>
                  <div className="space-y-4">
                    <Link href="/areas/post-falls-idaho/new-construction" className="block group">
                      <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">
                        Post Falls New Construction Hub (All 10 Communities)
                      </p>
                      <p className="font-dm-sans text-xs text-[#9A9590] mt-1">
                        Full builder matrix, townhomes, RV bays &amp; live MLS filter
                      </p>
                    </Link>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <Link href="/articles/north-idaho-healthcare-kootenai-spokane" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">
                          Healthcare in Kootenai County vs. Spokane
                        </p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">
                          NW Specialty, Kootenai Health Trauma II &amp; specialist drives
                        </p>
                      </Link>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <Link href="/articles/idaho-property-tax-relief-circuit-breaker-exemptions" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">
                          Idaho Property Tax Relief &amp; Circuit Breaker
                        </p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">
                          Senior 65+, veterans &amp; $125K homeowner’s exemption rules
                        </p>
                      </Link>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <Link href="/articles/hoa-north-idaho-subdivisions-fees-rules-what-to-check" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">
                          HOAs in North Idaho Subdivisions
                        </p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">
                          Fees, snow-removal rules &amp; statutory disclosure rights
                        </p>
                      </Link>
                    </div>
                    <div className="border-t border-[#E8DDD0] pt-4">
                      <Link href="/areas/post-falls-idaho" className="block group">
                        <p className="font-dm-sans text-sm font-semibold text-[#1C1A17] group-hover:text-[#C4842A] transition-colors leading-snug">
                          Post Falls City &amp; Living Guide
                        </p>
                        <p className="font-dm-sans text-xs text-[#9A9590] mt-1">
                          Commutes, snow zones &amp; all-home price bands
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
