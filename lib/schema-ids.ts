// Single source of truth for JSON-LD @id references, public identity scalars,
// and the marketed geography. Import from this module in any file that builds
// schema. Avoids drift when URLs, brokerage identity, or the entity graph change.
//
// Three real-world entities — do not collapse them:
//   #business  RealEstateAgent "Real Estate With Shirin" (customer-facing practice)
//   #agent     Person "Shirin Abplanalp" (licensed REALTOR®)
//   #jacklin-real-estate  Organization "BHHS Jacklin" (locally controlled)
//
// Conceptual relationship: Practice ↔ Shirin ↔ Brokerage.
// Do not mint https://www.jacklinrealestate.com/#organization — we do not control that domain.

export const BASE_URL = 'https://www.realestatewithshirin.com'

// Core entity graph anchors. All schema on the site resolves to these.
export const BUSINESS_ID = `${BASE_URL}/#business`
export const AGENT_ID = `${BASE_URL}/#agent`
export const WEBSITE_ID = `${BASE_URL}/#website`

// Locally controlled Jacklin identity. Official website remains jacklinrealestate.com.
export const JACKLIN_ID = `${BASE_URL}/#jacklin-real-estate`
export const ORGANIZATION_ID = JACKLIN_ID

// BHHS brand relationship for the independently owned Jacklin franchisee.
// Model as Brand — never as Jacklin parentOrganization / subsidiary.
export const BHHS_BRAND_ID = `${BASE_URL}/#bhhs-brand`

// Public names. Rule 1: never re-type these as string literals in schema.
export const AGENT_NAME = 'Shirin Abplanalp'
export const BRAND_NAME = 'Real Estate With Shirin'
export const BROKERAGE_NAME = 'Berkshire Hathaway HomeServices Jacklin Real Estate'
export const BROKERAGE_URL = 'https://www.jacklinrealestate.com/'
export const BROKERAGE_SHORT_NAME = 'BHHS Jacklin Real Estate'

export const LICENSE_NUMBER = '1371861'
export const LICENSE_LABEL = `Idaho Real Estate License #${LICENSE_NUMBER}`

// Contact facts — same real-world values live on both #agent (Person) and
// #business (RealEstateAgent) for a solo practitioner. Sourcing both nodes from
// these constants prevents drift. Rule 3 governs sameAs (identity links);
// telephone/email are contact facts, not identity links — legitimate to share.
export const PHONE = '+1-208-660-7468'
export const PHONE_DISPLAY = '(208) 660-7468'
export const EMAIL = 'dreamlifeinidaho@gmail.com'
export const INSTAGRAM_HANDLE = '@thisisnorthidaho'
export const INSTAGRAM_URL = 'https://www.instagram.com/thisisnorthidaho/'
export const KVCORE_URL = 'https://shirinabplanalp.jacklinrealestate.com/'
export const AGENT_IMAGE = `${BASE_URL}/images/shirin-abplanalp.jpg`
export const BRAND_LOGO = {
  '@type': 'ImageObject',
  '@id': `${BASE_URL}/#brand-logo`,
  url: `${BASE_URL}/images/field-guide/monogram.png`,
  width: 180,
  height: 139,
} as const
export const JACKLIN_LOGO = {
  '@type': 'ImageObject',
  '@id': `${BASE_URL}/#jacklin-logo`,
  url: `${BASE_URL}/images/bhhs-jacklin-logo.png`,
  width: 2937,
  height: 558,
} as const

// Brokerage (BHHS Jacklin) canonical scalar values, when referenced via the
// worksFor edge from #agent. The listed office is the Jacklin CDA office
// used on the public site and GBP — not independently verified as a
// separately registered brand address.
export const BROKERAGE_PHONE = '+1-208-758-7474'
export const BROKERAGE_PHONE_DISPLAY = '(208) 758-7474'
export const BROKERAGE_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '1927 W. Riverstone Drive',
  addressLocality: "Coeur d'Alene",
  addressRegion: 'ID',
  postalCode: '83814',
  addressCountry: 'US',
} as const

// Homepage / hero portrait card — landscape framing (1448×1086) used for
// og:image, twitter card, and homepage primaryImageOfPage. Real file at
// public/images/shirin-portrait-2026.png.
export const PORTRAIT_2026 = `${BASE_URL}/images/shirin-portrait-2026.png`
export const PORTRAIT_2026_WIDTH = 1448
export const PORTRAIT_2026_HEIGHT = 1086

// Bare @id pointers for subpages and nested edges. Canonical #website,
// #business, #agent, and #jacklin-real-estate nodes are emitted once per
// consolidated route @graph via jsonLdGraph().
export const AGENT_REF = { '@id': AGENT_ID } as const
export const BUSINESS_REF = { '@id': BUSINESS_ID } as const
export const JACKLIN_REF = { '@id': JACKLIN_ID } as const
export const WEBSITE_REF = { '@id': WEBSITE_ID } as const

export const AGENT_AUTHOR_STUB = AGENT_REF
export const BRAND_PUBLISHER_STUB = BUSINESS_REF
export const BROKERAGE_STUB = JACKLIN_REF

// Wikipedia sameAs for the cities Shirin serves. Referenced from each area
// page's Place node so AI answer engines can resolve the entity.
export const CITY_SAMEAS = {
  postFalls: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho',
  coeurDalene: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho',
  hayden: 'https://en.wikipedia.org/wiki/Hayden,_Idaho',
  rathdrum: 'https://en.wikipedia.org/wiki/Rathdrum,_Idaho',
  sandpoint: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho',
} as const

// County-level sameAs for administrative-area service pages.
export const COUNTY_SAMEAS = {
  kootenai: 'https://en.wikipedia.org/wiki/Kootenai_County,_Idaho',
  bonner: 'https://en.wikipedia.org/wiki/Bonner_County,_Idaho',
} as const

// Region- and state-level sameAs.
export const REGION_SAMEAS = {
  idahoPanhandle: 'https://en.wikipedia.org/wiki/Idaho_Panhandle',
} as const

export const STATE_SAMEAS = {
  idaho: 'https://en.wikipedia.org/wiki/Idaho',
} as const

// Stable Place @ids. Full definitions live on the matching area page
// (cities/counties) or the homepage (North Idaho + Idaho). Everywhere else
// reuses the @id, preferably as an Exception B name stub.
export const PLACE_ID = {
  postFalls: `${BASE_URL}/areas/post-falls-idaho#place`,
  coeurDalene: `${BASE_URL}/areas/coeur-dalene-idaho#place`,
  hayden: `${BASE_URL}/areas/hayden-idaho#place`,
  rathdrum: `${BASE_URL}/areas/rathdrum-idaho#place`,
  sandpoint: `${BASE_URL}/areas/sandpoint-idaho#place`,
  kootenai: `${BASE_URL}/areas/kootenai-county#place`,
  bonner: `${BASE_URL}/areas/bonner-county#place`,
  northIdaho: `${BASE_URL}/#place-north-idaho`,
  idaho: `${BASE_URL}/#place-idaho`,
} as const

export const PLACE = {
  idaho: {
    '@type': 'State',
    '@id': PLACE_ID.idaho,
    name: 'Idaho',
    sameAs: STATE_SAMEAS.idaho,
  },
  northIdaho: {
    '@type': 'AdministrativeArea',
    '@id': PLACE_ID.northIdaho,
    name: 'North Idaho',
    alternateName: 'Northern Idaho',
    sameAs: REGION_SAMEAS.idahoPanhandle,
    containedInPlace: { '@id': PLACE_ID.idaho },
  },
  kootenai: {
    '@type': 'AdministrativeArea',
    '@id': PLACE_ID.kootenai,
    name: 'Kootenai County',
    sameAs: COUNTY_SAMEAS.kootenai,
    containedInPlace: { '@id': PLACE_ID.idaho },
  },
  bonner: {
    '@type': 'AdministrativeArea',
    '@id': PLACE_ID.bonner,
    name: 'Bonner County',
    sameAs: COUNTY_SAMEAS.bonner,
    containedInPlace: { '@id': PLACE_ID.idaho },
  },
  postFalls: {
    '@type': 'City',
    '@id': PLACE_ID.postFalls,
    name: 'Post Falls',
    sameAs: CITY_SAMEAS.postFalls,
    containedInPlace: { '@id': PLACE_ID.kootenai },
  },
  coeurDalene: {
    '@type': 'City',
    '@id': PLACE_ID.coeurDalene,
    name: "Coeur d'Alene",
    sameAs: CITY_SAMEAS.coeurDalene,
    containedInPlace: { '@id': PLACE_ID.kootenai },
  },
  hayden: {
    '@type': 'City',
    '@id': PLACE_ID.hayden,
    name: 'Hayden',
    sameAs: CITY_SAMEAS.hayden,
    containedInPlace: { '@id': PLACE_ID.kootenai },
  },
  rathdrum: {
    '@type': 'City',
    '@id': PLACE_ID.rathdrum,
    name: 'Rathdrum',
    sameAs: CITY_SAMEAS.rathdrum,
    containedInPlace: { '@id': PLACE_ID.kootenai },
  },
  sandpoint: {
    '@type': 'City',
    '@id': PLACE_ID.sandpoint,
    name: 'Sandpoint',
    sameAs: CITY_SAMEAS.sandpoint,
    containedInPlace: { '@id': PLACE_ID.bonner },
  },
} as const

export type PlaceKey = keyof typeof PLACE

/** Bare @id Place pointer. Full Place definitions are auto-included once per @graph when referenced. */
export function placeStub(key: PlaceKey) {
  return {
    '@id': PLACE[key]['@id'],
  }
}

/** Markets the public site actually sells. Graph must match visible copy. */
export const MARKETED_PLACE_KEYS = [
  'postFalls',
  'coeurDalene',
  'hayden',
  'rathdrum',
  'sandpoint',
  'kootenai',
  'bonner',
  'northIdaho',
] as const satisfies readonly PlaceKey[]

export const MARKET_AREA_SERVED = MARKETED_PLACE_KEYS.map((key) => placeStub(key))

export const WEBSITE_NODE = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: BASE_URL,
  name: BRAND_NAME,
  description: `${BRAND_NAME} — ${AGENT_NAME}, licensed REALTOR® at ${BROKERAGE_NAME}, serving Post Falls, Coeur d'Alene, Hayden, Rathdrum, Sandpoint, and North Idaho.`,
  publisher: BUSINESS_REF,
  inLanguage: 'en-US',
} as const

export const BUSINESS_BASE_NODE = {
  '@type': 'RealEstateAgent',
  '@id': BUSINESS_ID,
  name: BRAND_NAME,
  description: `${BRAND_NAME} is the customer-facing practice of licensed REALTOR® ${AGENT_NAME}, helping buyers, sellers, and relocating families in Post Falls, Coeur d'Alene, Hayden, Rathdrum, Sandpoint, and the surrounding North Idaho market.`,
  url: BASE_URL,
  telephone: PHONE,
  email: EMAIL,
  image: AGENT_IMAGE,
  logo: BRAND_LOGO,
  address: BROKERAGE_ADDRESS,
  geo: { '@type': 'GeoCoordinates', latitude: 47.7028, longitude: -116.8093 },
  founder: AGENT_REF,
  memberOf: JACKLIN_REF,
  areaServed: MARKET_AREA_SERVED,
  knowsAbout: [
    'Post Falls real estate',
    "Coeur d'Alene real estate",
    'Northern Idaho relocation',
    'Kootenai County homes',
    'Buyer representation',
    'Seller representation',
    'Relocation',
    'Idaho real estate market',
    'Active family relocation to Northern Idaho',
  ],
  slogan: 'Your Northern Idaho Real Estate Advisor',
  sameAs: [
    'https://maps.google.com/?cid=2147151028860799721',
    'https://www.yelp.com/biz/real-estate-with-shirin-coeur-d-alene',
    'https://www.bbb.org/us/id/post-falls/profile/real-estate-agent/real-estate-with-shirin-1296-1000195359',
    'https://www.facebook.com/ShirinRealty',
    INSTAGRAM_URL,
  ],
} as const

export const AGENT_NODE = {
  '@type': 'Person',
  '@id': AGENT_ID,
  name: AGENT_NAME,
  jobTitle: 'Licensed REALTOR®',
  description: `${AGENT_NAME} is a licensed REALTOR® and SRES® at ${BROKERAGE_NAME}. 11 years in real estate, 100+ transactions closed, 5× Top Producer. She relocated from Bend, Oregon to Post Falls and helps buyers, sellers, and relocating families across North Idaho.`,
  telephone: PHONE,
  email: EMAIL,
  url: `${BASE_URL}/about`,
  image: AGENT_IMAGE,
  worksFor: JACKLIN_REF,
  memberOf: [
    { '@type': 'Organization', name: 'National Association of REALTORS®', url: 'https://www.nar.realtor', sameAs: 'https://en.wikipedia.org/wiki/National_Association_of_Realtors' },
    { '@type': 'Organization', name: "Coeur d'Alene Association of REALTORS®", url: 'https://cdarealtors.com' },
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Real Estate License', identifier: LICENSE_NUMBER, recognizedBy: { '@type': 'GovernmentOrganization', name: 'Idaho Real Estate Commission', url: 'https://irec.idaho.gov' } },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional Designation', name: 'Seniors Real Estate Specialist®', abbreviation: 'SRES®', recognizedBy: { '@type': 'Organization', name: 'SRES® Council', url: 'https://sres.realtor', parentOrganization: { '@type': 'Organization', name: 'National Association of REALTORS®', url: 'https://www.nar.realtor', sameAs: 'https://en.wikipedia.org/wiki/National_Association_of_Realtors' } } },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Award', name: '5× Top Producer', recognizedBy: { '@type': 'Organization', name: 'Bend Premier Real Estate' } },
  ],
  knowsAbout: [
    'Post Falls Idaho real estate',
    "Coeur d'Alene Idaho real estate",
    'Northern Idaho relocation',
    'Kootenai County homes for sale',
    'Buyer representation',
    'Seller representation',
    'Relocation',
    'North Idaho lifestyle',
    'Out-of-state relocation real estate',
    'Seniors Real Estate Specialist services',
    'First-time home buyers Idaho',
    'Kootenai County neighborhoods',
  ],
  affiliation: BUSINESS_REF,
  sameAs: [
    'https://www.jacklinrealestate.com/agents/2081255/Shirin+Abplanalp',
    KVCORE_URL,
    'https://www.zillow.com/profile/dreamlifeinidaho',
    'https://www.realtor.com/realestateagents/6852257644eab0a63cfd80af',
    'https://www.homes.com/real-estate-agents/shirin-abplanalp/j7j2jr7/',
    'https://www.realty.com/a/Shirin-Abplanalp-1777925821520',
    'https://www.linkedin.com/in/shirinrealty/',
    'https://members.cdarealtors.com/directory/Details/shirin-abplanalp-4150054',
  ],
} as const

export const JACKLIN_NODE = {
  '@type': 'Organization',
  '@id': JACKLIN_ID,
  name: BROKERAGE_NAME,
  url: BROKERAGE_URL,
  telephone: BROKERAGE_PHONE,
  address: BROKERAGE_ADDRESS,
  logo: JACKLIN_LOGO,
  sameAs: [
    BROKERAGE_URL,
    'https://www.bhhsjacklin.com/',
    'https://www.facebook.com/bhhsjacklin/',
    'https://business.cdachamber.com/list/member/berkshire-hathaway-homeservices-jacklin-real-estate-9147',
    'https://member.postfallschamber.org/list/member/berkshire-hathaway-homeservices-jacklin-real-estate-3040',
  ],
  brand: { '@id': BHHS_BRAND_ID },
} as const

export const BHHS_BRAND_NODE = {
  '@type': 'Brand',
  '@id': BHHS_BRAND_ID,
  name: 'Berkshire Hathaway HomeServices',
  sameAs: [
    'https://www.linkedin.com/company/berkshire-hathaway-homeservices',
    'https://en.wikipedia.org/wiki/HomeServices_of_America',
    'https://www.wikidata.org/wiki/Q5887960',
  ],
} as const

const PLACE_BY_ID: Record<string, (typeof PLACE)[PlaceKey]> = Object.fromEntries(
  Object.values(PLACE).map((p) => [p['@id'], p]),
)

const PLACE_ID_BY_NAME: Record<string, string> = {
  Idaho: PLACE_ID.idaho,
  'North Idaho': PLACE_ID.northIdaho,
  'Northern Idaho': PLACE_ID.northIdaho,
  'Idaho Panhandle': PLACE_ID.northIdaho,
  'Kootenai County': PLACE_ID.kootenai,
  'Bonner County': PLACE_ID.bonner,
  'Post Falls': PLACE_ID.postFalls,
  "Coeur d'Alene": PLACE_ID.coeurDalene,
  'Coeur d’Alene': PLACE_ID.coeurDalene,
  "Coeur d'Alene, Idaho": PLACE_ID.coeurDalene,
  'Coeur d’Alene, Idaho': PLACE_ID.coeurDalene,
  Hayden: PLACE_ID.hayden,
  Rathdrum: PLACE_ID.rathdrum,
  Sandpoint: PLACE_ID.sandpoint,
}

const PLACE_TYPES = new Set(['Place', 'City', 'AdministrativeArea', 'State'])
const CANONICAL_ENTITY_IDS = new Set<string>([
  WEBSITE_ID,
  BUSINESS_ID,
  AGENT_ID,
  JACKLIN_ID,
  BHHS_BRAND_ID,
  ...Object.values(PLACE_ID),
])

function normalizeNestedValue(value: unknown): unknown {
  if (Array.isArray(value)) {
    const items = value.map(normalizeNestedValue)
    // Deduplicate identical bare @id pointers inside arrays
    const seenIds = new Set<string>()
    return items.filter((item) => {
      if (item && typeof item === 'object' && !Array.isArray(item)) {
        const keys = Object.keys(item as Record<string, unknown>)
        const id = (item as Record<string, unknown>)['@id']
        if (keys.length === 1 && typeof id === 'string') {
          if (seenIds.has(id)) return false
          seenIds.add(id)
        }
      }
      return true
    })
  }
  if (value && typeof value === 'object') {
    const rec = value as Record<string, unknown>
    if (typeof rec['@id'] === 'string' && CANONICAL_ENTITY_IDS.has(rec['@id'])) {
      return { '@id': rec['@id'] }
    }
    const rawType = rec['@type']
    const types = Array.isArray(rawType) ? rawType : typeof rawType === 'string' ? [rawType] : []
    if (!rec['@id'] && types.some((t) => PLACE_TYPES.has(t)) && typeof rec.name === 'string') {
      const mappedId = PLACE_ID_BY_NAME[rec.name.trim()]
      if (mappedId && !rec.geo) {
        return { '@id': mappedId }
      }
    }
    const out: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(rec)) {
      if (k === '@context') continue
      out[k] = normalizeNestedValue(v)
    }
    return out
  }
  return value
}

function stripContext(node: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(node)) {
    if (k === '@context') continue
    out[k] = k === '@id' || k === '@type' ? v : normalizeNestedValue(v)
  }
  return out
}

function collectIds(value: unknown, acc: Set<string>) {
  if (Array.isArray(value)) {
    for (const item of value) collectIds(item, acc)
    return
  }
  if (value && typeof value === 'object') {
    const rec = value as Record<string, unknown>
    if (typeof rec['@id'] === 'string') acc.add(rec['@id'])
    for (const v of Object.values(rec)) collectIds(v, acc)
  }
}

/**
 * Builds a single consolidated Schema.org @graph for a route:
 * - Defines #website, #business, #agent, #jacklin-real-estate, #bhhs-brand,
 *   and all referenced canonical Place nodes once per @graph (zero duplicates).
 * - Preserves route-specific overrides (e.g. homepage #business with visible reviews).
 */
export function jsonLdGraph(pageNodes: Record<string, unknown>[]) {
  const cleaned = pageNodes.map(stripContext)
  const definedIds = new Set<string>()
  for (const n of cleaned) {
    if (typeof n['@id'] === 'string' && '@type' in n) definedIds.add(n['@id'])
  }

  const coreDefaults: Record<string, unknown>[] = [
    WEBSITE_NODE,
    BUSINESS_BASE_NODE,
    AGENT_NODE,
    JACKLIN_NODE,
    BHHS_BRAND_NODE,
  ]

  const graph: Record<string, unknown>[] = []
  for (const core of coreDefaults) {
    const id = core['@id'] as string
    if (!definedIds.has(id)) {
      graph.push(core)
      definedIds.add(id)
    }
  }
  for (const node of cleaned) {
    graph.push(node)
  }

  // Resolve any referenced canonical PLACE @ids (including parent counties/state) once
  const referenced = new Set<string>()
  collectIds(graph, referenced)
  let addedPlace = true
  while (addedPlace) {
    addedPlace = false
    for (const id of Array.from(referenced)) {
      if (!definedIds.has(id) && id in PLACE_BY_ID) {
        const placeNode = PLACE_BY_ID[id] as unknown as Record<string, unknown>
        graph.push(placeNode)
        definedIds.add(id)
        collectIds(placeNode, referenced)
        addedPlace = true
      }
    }
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

export const INFLATED_GEO_NAMES = [
  'Athol',
  'Bayview',
  'Harrison',
  'Wallace',
  'Kellogg',
  'Shoshone County',
  'Inland Northwest',
] as const
