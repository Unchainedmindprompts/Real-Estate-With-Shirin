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
export const AGENT_IMAGE = `${BASE_URL}/images/shirin-abplanalp.jpg`

// Brokerage (BHHS Jacklin) canonical scalar values, when referenced via the
// worksFor edge from #agent. The listed office is the Jacklin CDA office
// used on the public site and GBP — not independently verified as a
// separately registered brand address.
export const BROKERAGE_PHONE = '+1-208-758-7474'
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

// Exception B — name-bearing stubs so a single page is self-describing
// without redeclaring the canonical Person / brand / brokerage. The audit
// treats these as stubs, not competing definitions, when they carry only
// @type + @id + name (and optionally url).
export const AGENT_AUTHOR_STUB = {
  '@type': 'Person',
  '@id': AGENT_ID,
  name: AGENT_NAME,
} as const

export const BRAND_PUBLISHER_STUB = {
  '@type': 'RealEstateAgent',
  '@id': BUSINESS_ID,
  name: BRAND_NAME,
} as const

export const BROKERAGE_STUB = {
  '@type': 'Organization',
  '@id': JACKLIN_ID,
  name: BROKERAGE_NAME,
  url: BROKERAGE_URL,
} as const

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

/** Exception B Place stub — @type + @id + name only. */
export function placeStub(key: PlaceKey) {
  const place = PLACE[key]
  return {
    '@type': place['@type'],
    '@id': place['@id'],
    name: place.name,
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

export const INFLATED_GEO_NAMES = [
  'Athol',
  'Bayview',
  'Harrison',
  'Wallace',
  'Kellogg',
  'Shoshone County',
  'Inland Northwest',
] as const
