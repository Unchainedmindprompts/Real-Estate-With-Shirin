export type CommunityCategory =
  | 'all'
  | 'single-family'
  | '55-single-level'
  | 'townhomes-twins'
  | 'rv-custom'

export interface PostFallsCommunity {
  id: string
  name: string
  corridorTag: string
  locationAnchor: string
  statusBadge: 'Actively Selling' | 'Coming Soon' | 'Active MLS Specs'
  builders: string
  status: string
  priceBand: string
  specs: string
  homeTypes: string
  summary: string
  incentiveNote: string
  /** Optional verified on-site Nikon Z8 photo path under /public/images/... */
  image?: string
  imageAlt?: string
  categories: Exclude<CommunityCategory, 'all'>[]
  builderLinks: { label: string; url: string }[]
}

export const POST_FALLS_COMMUNITIES: PostFallsCommunity[] = [
  {
    id: 'crown-reserve',
    name: 'Crown Reserve',
    corridorTag: 'Prairie & Central Corridor',
    locationAnchor: 'North-Central Post Falls · Off Poleline Ave',
    statusBadge: 'Actively Selling',
    builders: 'Hayden Homes & Lennar',
    status: 'Actively selling (17+ combined quick move-ins & plans)',
    priceBand: 'From $414,990 (Hayden) · $420,950–$492,950 (Lennar)',
    specs: '3–5 beds · 2–3 baths · 1,323–3,195 sq ft',
    homeTypes: '1- & 2-story single-family homes (2–3 car garages)',
    summary:
      'One of Post Falls’ deepest entry-to-mid single-family pockets because two volume builders compete side by side. Hayden Homes spans 1,323 to 3,195 sq ft starting at $414,990 with 14 quick move-in homes listed, while Lennar builds five cottage-style 2.5-bath plans from 1,526 to 2,196 sq ft.',
    incentiveNote:
      'Checked Nov 23, 2026: Hayden advertises its Unwrap Your Savings event (3.99% 1-yr temporary FHA buydown to 5.99% permanent, or up to $20,000 on select homes; holiday bonus noted through Nov 30). Confirm current Lennar Mortgage contract windows directly before touring.',
    categories: ['single-family', '55-single-level'],
    builderLinks: [
      { label: 'Hayden Crown Reserve', url: 'https://www.hayden-homes.com/new-homes/idaho/north-idaho/post-falls/crown-reserve' },
      { label: 'Lennar Crown Reserve', url: 'https://www.lennar.com/new-homes/idaho/inland-northwest/post-falls/crown-reserve' },
    ],
  },
  {
    id: 'trutina-north-place',
    name: 'Trutina at North Place (55+)',
    corridorTag: '55+ Resort Lifestyle · SRES® Focus',
    locationAnchor: 'South of Prairie Ave · Idaho Rd & Greensferry Corridor',
    statusBadge: 'Actively Selling',
    builders: 'Greenstone Homes',
    status: 'Actively selling (Quick move-in & presale)',
    priceBand: '$415,000 – $527,000',
    specs: '2–3 beds · 2 baths · 998–1,664 sq ft',
    homeTypes: 'Age-restricted 55+ single-level cottages & ranchers',
    summary:
      'Post Falls’ signature age-qualified 55+ neighborhood inside the North Place master plan south of Prairie Avenue. Built around single-level Blue Sky and Cottage Collection layouts, walkable trails, and resort-style community amenities for downsizers who want low winter maintenance without giving up homeownership.',
    incentiveNote:
      'Checked Nov 23, 2026: Greenstone lists a Cottage Home Promo ($5,000 on presale or $10,000 on completed quick move-in cottages toward closing costs or buydown) plus CMG Home Loans closing-cost or design-studio options.',
    categories: ['55-single-level'],
    builderLinks: [
      { label: 'Greenstone Trutina 55+', url: 'https://greenstonehomes.com/community/trutina-at-north-place' },
    ],
  },
  {
    id: 'north-place',
    name: 'North Place & North Place East',
    corridorTag: 'Prairie Avenue Master Plan',
    locationAnchor: 'South of Prairie Ave · Idaho Rd to Allenby Ave',
    statusBadge: 'Actively Selling',
    builders: 'Greenstone Homes, Viking Construction & Hayden Homes',
    status: 'Actively selling (Greenstone & Viking) · Hayden phase Coming Soon',
    priceBand: '$404,000–$517,000 (Greenstone) · $568,617 spec (Viking)',
    specs: '2–4 beds · 2–2.5 baths · 998–2,968 sq ft',
    homeTypes: 'Alley-entry cottages, front-entry ranchers & 2-story plans',
    summary:
      'Spanning south of Prairie Avenue between Idaho Road and Greensferry Road, North Place blends Greenstone’s alley-loaded cottages ($404K–$504K) and ranchers ($517K Springfield plan) with Viking’s Towne Series in North Place East (2,681 sq ft finished spec at $568,617) and Hayden’s upcoming 1,408–2,968 sq ft phase.',
    incentiveNote:
      'Checked Nov 23, 2026: Greenstone Cottage & CMG promos published; Hayden’s North Place interest list is open with pricing TBD.',
    categories: ['single-family', '55-single-level'],
    builderLinks: [
      { label: 'Greenstone North Place', url: 'https://greenstonehomes.com/community/north-place' },
      { label: 'Viking North Place East', url: 'https://vikinghomes.com/north-place-east-post-falls-id/' },
      { label: 'Hayden North Place', url: 'https://www.hayden-homes.com/new-homes/idaho/north-idaho/post-falls/north-place' },
    ],
  },
  {
    id: 'foxtail',
    name: 'Foxtail',
    corridorTag: 'Treaty Rock & Fast I-90 Access',
    locationAnchor: 'East Post Falls · N Darwin Fox St near Treaty Rock Elem',
    statusBadge: 'Actively Selling',
    builders: 'Architerra Homes',
    status: 'Actively selling (Move-in ready & to-be-built)',
    priceBand: '$468,900 – $611,600 (available homes)',
    specs: '3–5 beds · 2–3 baths · 1,336–3,000+ sq ft',
    homeTypes: 'Single-level ranch & two-story single-family homes',
    summary:
      'Positioned near Treaty Rock Elementary with fast I-90 access to both Spokane and Coeur d’Alene, Foxtail pairs connected greenbelts, pocket parks, and playgrounds with Architerra’s modern ranch and two-story elevations. Model home touring sits on N Darwin Fox Street.',
    incentiveNote:
      'Checked Nov 23, 2026: Architerra advertises Year-End Sales financing (4.99% FHA 30-yr fixed / 5.49% Conventional via Loan Peak Financial) plus price reductions on select move-in-ready homes through Dec 31, 2026.',
    categories: ['single-family', '55-single-level'],
    builderLinks: [
      { label: 'Architerra Foxtail', url: 'https://myarchiterra.com/communities/foxtail/' },
    ],
  },
  {
    id: 'the-parkllyn',
    name: 'The Parkllyn',
    corridorTag: 'Highway 41 Corridor',
    locationAnchor: 'North Hwy 41 Pocket · N Cassiopeia St',
    statusBadge: 'Actively Selling',
    builders: 'Architerra Homes',
    status: 'Actively selling (Mid-$400Ks to $1M+ estate specs)',
    priceBand: 'Mid-$400,000s start · Current specs $470,500–$1,002,880',
    specs: '3–7 beds · 2–4 baths · 1,300–3,870 sq ft',
    homeTypes: 'Single-level ranches, family 2-stories & estate-lot builds',
    summary:
      'Located for quick Highway 41 access, grocery/retail convenience, and mountain views across open green space. The Parkllyn stretches wider in price and footprint than almost any other Post Falls tract — from ~1,300 sq ft single-level plans in the mid-$400Ks up to 3,500–3,870 sq ft executive specs on N Cassiopeia Street.',
    incentiveNote:
      'Checked Nov 23, 2026: Eligible select move-in-ready homes participate in Architerra’s Year-End Sales financing event through Dec 31, 2026.',
    categories: ['single-family', '55-single-level', 'rv-custom'],
    builderLinks: [
      { label: 'Architerra The Parkllyn', url: 'https://myarchiterra.com/communities/the-parkllyn/' },
    ],
  },
  {
    id: 'montrose',
    name: 'Montrose',
    corridorTag: 'Established Master Plan · Parks & Trails',
    locationAnchor: 'Central Prairie · Satsop Ave & Poleline Corridor',
    statusBadge: 'Actively Selling',
    builders: 'Greenstone Homes & Viking Construction',
    status: 'Actively selling (New phases & quick move-ins)',
    priceBand: '$450,641 spec (Viking) · $497,000–$558,000 (Greenstone)',
    specs: '3–4 beds · 2–2.5 baths · 1,416–2,338 sq ft',
    homeTypes: 'Clearwater & Towne Series ranchers and 2-story homes',
    summary:
      'Unlike brand-new raw-dirt subdivisions where every tree is a sapling, Montrose is an established Post Falls master plan with mature neighborhood parks, walking trails, and finished streetscapes — while still releasing brand-new Greenstone Clearwater plans and Viking Towne Series specs.',
    incentiveNote:
      'Checked Nov 23, 2026: Greenstone CMG closing-cost or design-studio promo applies on eligible homes; ask for current per-lot incentives on Viking specs.',
    categories: ['single-family'],
    builderLinks: [
      { label: 'Greenstone Montrose', url: 'https://greenstonehomes.com/community/montrose' },
      { label: 'Viking Montrose', url: 'https://vikinghomes.com/montrose-post-falls/' },
    ],
  },
  {
    id: 'millworx',
    name: 'Millworx',
    corridorTag: 'Central Post Falls · 50+ Acre Live-Work District',
    locationAnchor: 'Central Post Falls · E Millworx Loop & E Railroad Ave',
    statusBadge: 'Actively Selling',
    builders: 'Millworx',
    status: 'Actively selling (4 available residences + model pending)',
    priceBand: 'Starting at $405,000 · Current listings $420,000–$799,000',
    specs: '2–4 beds · 2.5–4 baths · 1,364–2,347 sq ft',
    homeTypes: 'Modern architectural townhomes (optional detached garage + ADU)',
    summary:
      'Built on the historic 50+ acre Idaho Veneer site near central Post Falls, Millworx is completely different from prairie tract housing: 61 planned contemporary Garden and Vista townhomes designed for walkable, low-maintenance living, with Vista End units offering a detached 2-car garage plus bonus studio/ADU flexibility.',
    incentiveNote:
      'Checked Nov 23, 2026: Listing 1227 E Millworx Loop ($420,000 Garden Middle) advertises a $5,000 Limited Builder Incentive.',
    categories: ['townhomes-twins'],
    builderLinks: [
      { label: 'Millworx Residences', url: 'https://www.millworx.community/listings/residential' },
    ],
  },
  {
    id: 'wildflower-meadows',
    name: 'Wildflower Meadows',
    corridorTag: 'Sub-$400K Entry Ownership',
    locationAnchor: 'West-Central Post Falls · N Wilhelm Way',
    statusBadge: 'Actively Selling',
    builders: 'Viking Construction',
    status: 'Actively selling (Twin homes & duplexes)',
    priceBand: '$375,556–$376,220 (Twin Homes) · $818,409 (Full Duplex)',
    specs: '2 beds · 2 baths · 1,161 sq ft (Twin) | 3 bd · 1,626 sq ft/side (Duplex)',
    homeTypes: 'Individually owned zero-lot-line twin homes & multi-family duplexes',
    summary:
      'For first-time buyers, downsizers, or investors hunting below $400,000 in Post Falls, Viking’s Riverview Twin Homes on N Wilhelm Way represent the lowest-priced brand-new residential construction verified on the Post Falls MLS on November 23, 2026 — individually owned with zero-lot-line simplicity.',
    incentiveNote:
      'Checked Nov 23, 2026: Active MLS remarks invite buyers to ask about current builder incentives; verify HOA/party-wall covenants before offer.',
    categories: ['townhomes-twins', '55-single-level'],
    builderLinks: [
      { label: 'Viking Wildflower Meadows', url: 'https://vikinghomes.com/wildflower-meadows-post-falls-community-in-north-idaho/' },
    ],
  },
  {
    id: 'rv-custom-pockets',
    name: 'Millsap Landing & Estates at Waterstone',
    corridorTag: 'RV-Garage & Spokane River Custom Pockets',
    locationAnchor: 'Central Infill (N Neptune St) & Riverfront (E Ravine Dr)',
    statusBadge: 'Active MLS Specs',
    builders: 'Regional Semi-Custom & Waterfront Builders (MLS)',
    status: 'Active 2026–2027 builds on Post Falls MLS',
    priceBand: '$659,000 (RV-garage infill) to $2,589,000 (Riverfront custom)',
    specs: '3–5 beds · 1,815–4,024+ sq ft · ~0.20 ac & riverfront lots',
    homeTypes: 'Attached RV-bay single-family & custom Spokane River estates',
    summary:
      'Production subdivisions rarely allow tall RV bays or detached shops. Buyers needing indoor boat/camper storage target smaller infill pockets like Millsap Landing (N Neptune St, 2-car + large RV garage on 0.20 ac at $659,000), while Spokane River luxury buyers look to custom to-be-built waterfront parcels such as Estates at Waterstone ($2.589M).',
    incentiveNote:
      'Checked Nov 23, 2026 on Shirin’s kvCORE MLS feed: custom and boutique spec terms are negotiated directly on Idaho RE-21 or builder custom addenda — verify CC&Rs, RV door height, and dock permits upfront.',
    categories: ['rv-custom'],
    builderLinks: [],
  },
  {
    id: 'coming-soon-pipeline',
    name: 'The Post & Rosewater Place (Upcoming)',
    corridorTag: '2026–2027 Pre-Release Pipeline',
    locationAnchor: 'Central Post Falls (The Post) & West McGuire Rd (Rosewater)',
    statusBadge: 'Coming Soon',
    builders: 'Architerra Homes (The Post) & Hayden Homes (Rosewater Place)',
    status: 'Coming Soon — Interest lists open',
    priceBand: 'High $300Ks start (The Post) · Pricing TBD (Rosewater Place)',
    specs: '1,458–1,600 sq ft townhomes (The Post) · 1,024–2,250 sq ft (Rosewater)',
    homeTypes: '83 2-car garage townhomes & west-side single-family plans',
    summary:
      'Two upcoming releases worth tracking early if your move is 3 to 9 months out: Architerra’s The Post plans 83 townhomes with attached 2-car garages starting in the high $300Ks, while Hayden Homes’ Rosewater Place on the west side off McGuire Road brings 1,024–2,250 sq ft single- and two-story plans steps from the Washington border.',
    incentiveNote:
      'Checked Nov 23, 2026: Pre-release phases often price lowest in Lot Release 1 — ask Shirin to register you before public model-home opening.',
    categories: ['townhomes-twins', 'single-family'],
    builderLinks: [
      { label: 'Architerra The Post', url: 'https://myarchiterra.com/communities/the-post/' },
      { label: 'Hayden Rosewater Place', url: 'https://www.hayden-homes.com/new-homes/idaho/north-idaho/post-falls/rosewater-place' },
    ],
  },
]
