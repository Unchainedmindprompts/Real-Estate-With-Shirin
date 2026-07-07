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

// Contact facts — same real-world values live on both #agent (Person) and
// #business (LocalBusiness) for a solo practitioner. Sourcing both nodes from
// these constants prevents drift. Rule 3 governs sameAs (identity links);
// telephone/email are contact facts, not identity links — legitimate to share.
export const PHONE = '+1-208-660-7468'
export const EMAIL = 'dreamlifeinidaho@gmail.com'
export const AGENT_IMAGE = `${BASE_URL}/images/shirin-abplanalp.jpg`

// Brokerage (BHHS Jacklin) canonical scalar values, when referenced via the
// worksFor edge from #agent.
export const BROKERAGE_PHONE = '+1-208-758-7474'

// Homepage / hero portrait card — landscape framing (1448×1086) used for
// og:image, twitter card, and homepage primaryImageOfPage. Real file at
// public/images/shirin-portrait-2026.png.
export const PORTRAIT_2026 = `${BASE_URL}/images/shirin-portrait-2026.png`
export const PORTRAIT_2026_WIDTH = 1448
export const PORTRAIT_2026_HEIGHT = 1086

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
