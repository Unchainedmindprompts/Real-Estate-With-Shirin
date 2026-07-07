// Single source of truth for JSON-LD @id references and Wikipedia sameAs URIs.
// Import from this module in any file that builds schema. Avoids drift when
// URLs, brokerage identity, or the entity graph shape change.

export const BASE_URL = 'https://www.realestatewithshirin.com'

// Core entity graph anchors. All schema on the site resolves to these.
export const BUSINESS_ID = `${BASE_URL}/#business`
export const AGENT_ID = `${BASE_URL}/#agent`
export const WEBSITE_ID = `${BASE_URL}/#website`

// The brokerage Organization — canonical @id is on jacklinrealestate.com.
export const ORGANIZATION_ID = 'https://www.jacklinrealestate.com/#organization'

// Wikipedia sameAs for the cities Shirin serves. Referenced from each area page's
// areaServed City node so AI answer engines can resolve the entity.
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

// Region-level sameAs.
export const REGION_SAMEAS = {
  idahoPanhandle: 'https://en.wikipedia.org/wiki/Idaho_Panhandle',
} as const
