#!/usr/bin/env node
// Identity / geography / DOM-parity / metadata / capability invariants.
// Runs after `scripts/audit-schema-ids.mjs`.
//
// Exit 0 = clean, 1 = any invariant failure, 2 = missing build output.

import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const BASE_URL = 'https://www.realestatewithshirin.com'
const BUSINESS_ID = `${BASE_URL}/#business`
const AGENT_ID = `${BASE_URL}/#agent`
const JACKLIN_ID = `${BASE_URL}/#jacklin-real-estate`
const WEBSITE_ID = `${BASE_URL}/#website`
const BHHS_BRAND_ID = `${BASE_URL}/#bhhs-brand`
const EXTERNAL_JACKLIN_ID = 'https://www.jacklinrealestate.com/#organization'
const AGENT_NAME = 'Shirin Abplanalp'
const BRAND_NAME = 'Real Estate With Shirin'
const BROKERAGE_NAME = 'Berkshire Hathaway HomeServices Jacklin Real Estate'
const PHONE = '+1-208-660-7468'
const BROKERAGE_PHONE_DISPLAY = '(208) 758-7474'
const EMAIL = 'dreamlifeinidaho@gmail.com'

const PLACE_ID = {
  postFalls: `${BASE_URL}/areas/post-falls-idaho#place`,
  coeurDalene: `${BASE_URL}/areas/coeur-dalene-idaho#place`,
  hayden: `${BASE_URL}/areas/hayden-idaho#place`,
  rathdrum: `${BASE_URL}/areas/rathdrum-idaho#place`,
  sandpoint: `${BASE_URL}/areas/sandpoint-idaho#place`,
  kootenai: `${BASE_URL}/areas/kootenai-county#place`,
  bonner: `${BASE_URL}/areas/bonner-county#place`,
  northIdaho: `${BASE_URL}/#place-north-idaho`,
  idaho: `${BASE_URL}/#place-idaho`,
}

const MARKETED_PLACE_IDS = new Set(Object.values(PLACE_ID))
const INFLATED_GEO_NAMES = new Set([
  'Athol', 'Bayview', 'Harrison', 'Wallace', 'Kellogg',
  'Shoshone County', 'Inland Northwest',
])
const FORBIDDEN_ACTIONS = new Set([
  'OfferCatalog', 'ReserveAction', 'ScheduleAction', 'OrderAction',
  'BuyAction', 'PayAction', 'BorrowAction',
  'BookAction', 'SearchAction',
])
const ARTICLE_TYPES = new Set(['Article', 'BlogPosting', 'NewsArticle'])
const AREA_SERVED_OWNERS = new Set(['Organization', 'LocalBusiness', 'RealEstateAgent', 'Service'])
const ISO_DATETIME_TZ = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}([+-]\d{2}:\d{2}|Z)$/

const BUILT_ROOT = '.next/server/app'

function typesOf(node) {
  const t = node?.['@type']
  if (!t) return []
  return Array.isArray(t) ? t : [t]
}

function isFullDefinition(obj) {
  if (!obj || typeof obj !== 'object') return false
  if (!('@type' in obj) || !('@id' in obj)) return false
  return Object.keys(obj).some((k) => k !== '@context' && k !== '@id' && k !== '@type')
}

function walk(node, cb) {
  if (Array.isArray(node)) {
    node.forEach((n) => walk(n, cb))
    return
  }
  if (node && typeof node === 'object') {
    cb(node)
    for (const v of Object.values(node)) walk(v, cb)
  }
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&rsquo;|&#x27;|&#39;|&apos;/g, "'")
    .replace(/&ldquo;|&rdquo;|&quot;/g, '"')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function normalizeQuotes(str) {
  return str.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/\s+/g, ' ').trim().toLowerCase()
}

function findHtmlFiles(dir, acc = []) {
  if (!existsSync(dir)) return acc
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) findHtmlFiles(p, acc)
    else if (entry.name.endsWith('.html')) acc.push(p)
  }
  return acc
}

function extractJsonLd(html) {
  const blocks = []
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/g
  let m
  while ((m = re.exec(html)) !== null) {
    try {
      blocks.push(JSON.parse(m[1]))
    } catch {
      blocks.push({ __parseError: true })
    }
  }
  return blocks
}

const files = findHtmlFiles(BUILT_ROOT)
if (files.length === 0) {
  console.error(`No HTML found under ${BUILT_ROOT}. Run \`npm run build\` first.`)
  process.exit(2)
}

const failures = []
const fail = (kind, detail) => failures.push({ kind, detail })

const personDefs = []
const brandDefs = []
const jacklinDefs = []
const websiteDefs = []
const homepageBlocks = []
const placeDefs = new Set()
const areaServedEntries = []
let serviceCount = 0
let articleCount = 0
let parseErrors = 0
let sawExternalJacklinId = false
let pageCount = 0

for (const file of files) {
  const isSystemPage =
    file.endsWith('_not-found.html') ||
    file.endsWith('_global-error.html') ||
    file.endsWith('robots.txt')
  if (isSystemPage) continue

  pageCount++
  const html = readFileSync(file, 'utf-8')
  const visibleText = normalizeQuotes(stripHtml(html))
  const rel = file
  const isHomepage = /\/app\/index\.html$/.test(file.replaceAll('\\', '/'))

  // Verify brokerage office phone is visibly rendered in global footer
  if (!visibleText.includes(`brokerage office: ${BROKERAGE_PHONE_DISPLAY.toLowerCase()}`)) {
    fail('MISSING_VISIBLE_BROKERAGE_PHONE', `${rel} does not visibly display Brokerage Office: ${BROKERAGE_PHONE_DISPLAY}`)
  }

  // Canonical, og:url, and og:image checks
  const canonicalMatch = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)
  const ogUrlMatch = html.match(/<meta[^>]+property="og:url"[^>]+content="([^"]+)"/i)
  const ogImgMatch = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i)
  const canonical = canonicalMatch ? canonicalMatch[1] : null
  const ogUrl = ogUrlMatch ? ogUrlMatch[1] : null
  const ogImg = ogImgMatch ? ogImgMatch[1] : null

  if (!canonical) {
    fail('MISSING_CANONICAL', `${rel} has no <link rel="canonical">`)
  } else {
    if (!canonical.startsWith(BASE_URL)) {
      fail('CANONICAL_HOST', `${rel} canonical ${canonical} is not on ${BASE_URL}`)
    }
    if (canonical !== BASE_URL && canonical.endsWith('/')) {
      fail('CANONICAL_TRAILING_SLASH', `${rel} canonical ${canonical} has a trailing slash`)
    }
  }
  if (!ogUrl) {
    fail('MISSING_OG_URL', `${rel} emitted no <meta property="og:url">`)
  } else if (canonical && ogUrl !== canonical) {
    fail('OG_URL_MISMATCH', `${rel} og:url ${ogUrl} !== canonical ${canonical}`)
  }
  if (!ogImg) {
    fail('MISSING_OG_IMAGE', `${rel} emitted no <meta property="og:image">`)
  }

  const blocks = extractJsonLd(html)
  if (isHomepage) homepageBlocks.push(...blocks)
  if (blocks.length !== 1) {
    fail('MULTI_SCRIPT_ROUTE', `${rel} emitted ${blocks.length} JSON-LD scripts (expected 1)`)
  }

  let routeAgentCount = 0
  let routeWebsiteCount = 0
  let routeJacklinCount = 0

  for (const block of blocks) {
    if (block?.__parseError) {
      parseErrors++
      continue
    }
    walk(block, (node) => {
      const types = typesOf(node)

      if (types.includes('WebSite') && node['@id'] === WEBSITE_ID && isFullDefinition(node)) {
        websiteDefs.push({ file: rel, node })
        routeWebsiteCount++
      }

      if (types.includes('Person') && node['@id'] === AGENT_ID && isFullDefinition(node)) {
        personDefs.push({ file: rel, node })
        routeAgentCount++
      }
      if (types.includes('Person') && node.name === AGENT_NAME && isFullDefinition(node) && node['@id'] !== AGENT_ID) {
        fail('SECOND_SHIRIN', `${rel} defines another Person named ${AGENT_NAME} with @id ${node['@id']}`)
      }
      if (types.includes('Person') && types.includes('RealEstateAgent')) {
        fail('PERSON_TYPED_AS_BUSINESS', `${rel} types a Person as RealEstateAgent`)
      }

      if (node['@id'] === BUSINESS_ID && isFullDefinition(node)) {
        brandDefs.push({ file: rel, node, isHomepage })
      }
      if (node['@id'] === JACKLIN_ID && isFullDefinition(node)) {
        jacklinDefs.push({ file: rel, node })
        routeJacklinCount++
      }
      if (node['@id'] === EXTERNAL_JACKLIN_ID) {
        sawExternalJacklinId = true
      }

      if (typeof node['@id'] === 'string' && MARKETED_PLACE_IDS.has(node['@id']) && isFullDefinition(node)) {
        placeDefs.add(node['@id'])
      }

      // Check WebPage about + mainEntity overlap
      if (node.about && node.mainEntity) {
        const aboutIds = (Array.isArray(node.about) ? node.about : [node.about]).map((x) => x?.['@id']).filter(Boolean)
        const mainIds = (Array.isArray(node.mainEntity) ? node.mainEntity : [node.mainEntity]).map((x) => x?.['@id']).filter(Boolean)
        const overlap = aboutIds.filter((id) => mainIds.includes(id))
        if (overlap.length > 0) {
          fail('ABOUT_MAINENTITY_OVERLAP', `${rel} node ${node['@id']} lists ${overlap.join(', ')} in both about and mainEntity`)
        }
      }

      // Check Service grounding
      if (types.includes('Service')) {
        serviceCount++
        const providers = Array.isArray(node.provider) ? node.provider : [node.provider]
        const providerIds = providers.map((p) => p?.['@id']).filter(Boolean)
        if (!providerIds.includes(BUSINESS_ID) || !providerIds.includes(AGENT_ID)) {
          fail('SERVICE_PROVIDER_GROUNDING', `${rel} Service ${node['@id']} provider must reference both #business and #agent`)
        }
      }

      if (types.some((t) => AREA_SERVED_OWNERS.has(t)) && node.areaServed) {
        const areas = Array.isArray(node.areaServed) ? node.areaServed : [node.areaServed]
        for (const area of areas) {
          if (!area || typeof area !== 'object') continue
          areaServedEntries.push({ file: rel, name: area.name, id: area['@id'], ownerId: node['@id'] })
        }
      }

      if (types.some((t) => FORBIDDEN_ACTIONS.has(t))) {
        fail('FALSE_TRANSACTIONAL_TYPE', `${rel} emits ${JSON.stringify(node['@type'])}`)
      }
      if (node.potentialAction) {
        const actions = Array.isArray(node.potentialAction) ? node.potentialAction : [node.potentialAction]
        for (const action of actions) {
          if (typesOf(action).some((t) => FORBIDDEN_ACTIONS.has(t))) {
            fail('FALSE_TRANSACTIONAL_ACTION', `${rel} potentialAction ${JSON.stringify(action['@type'])}`)
          }
        }
      }

      // Check FAQPage visible DOM parity
      if (types.includes('FAQPage')) {
        if (isHomepage) {
          fail('HIDDEN_HOMEPAGE_FAQ', `${rel} must not emit hidden FAQPage schema on homepage`)
        }
        const questions = Array.isArray(node.mainEntity) ? node.mainEntity : []
        for (const q of questions) {
          const qNorm = normalizeQuotes(q?.name || '')
          if (qNorm && !visibleText.includes(qNorm)) {
            fail('FAQ_DOM_PARITY', `${rel} FAQ question not visibly rendered in DOM: "${q.name}"`)
          }
        }
      }

      // Check Article / BlogPosting bare @id pointers, ISO 8601 dates, and og:image parity
      if (types.some((t) => ARTICLE_TYPES.has(t))) {
        articleCount++
        const author = node.author
        const publisher = node.publisher
        if (!author || Object.keys(author).length !== 1 || author['@id'] !== AGENT_ID) {
          fail('ARTICLE_AUTHOR_POINTER', `${rel} article author must be bare {"@id": "${AGENT_ID}"}`)
        }
        if (!publisher || Object.keys(publisher).length !== 1 || publisher['@id'] !== BUSINESS_ID) {
          fail('ARTICLE_PUBLISHER_POINTER', `${rel} article publisher must be bare {"@id": "${BUSINESS_ID}"}`)
        }
        if (!node.datePublished || !ISO_DATETIME_TZ.test(node.datePublished)) {
          fail('INVALID_DATE_PUBLISHED', `${rel} datePublished "${node.datePublished}" lacks ISO 8601 timezone offset`)
        }
        if (node.dateModified && !ISO_DATETIME_TZ.test(node.dateModified)) {
          fail('INVALID_DATE_MODIFIED', `${rel} dateModified "${node.dateModified}" lacks ISO 8601 timezone offset`)
        }
        const aImg = typeof node.image === 'string' ? node.image : (Array.isArray(node.image) ? node.image[0] : node.image?.url)
        if (aImg && ogImg && aImg !== ogImg) {
          fail('ARTICLE_OG_IMAGE_MISMATCH', `${rel} Article.image (${aImg}) !== og:image (${ogImg})`)
        }
      }
    })
  }

  if (routeAgentCount !== 1 || routeWebsiteCount !== 1 || routeJacklinCount !== 1) {
    fail('CORE_GRAPH_PRESENCE', `${rel} expected 1x #website (${routeWebsiteCount}), 1x #agent (${routeAgentCount}), 1x #jacklin-real-estate (${routeJacklinCount})`)
  }
}

if (parseErrors) fail('JSONLD_PARSE', `${parseErrors} unparseable JSON-LD block(s)`)

if (personDefs.length !== pageCount) {
  fail('PERSON_PER_GRAPH', `expected #agent in all ${pageCount} page graphs, found ${personDefs.length}`)
} else {
  const person = personDefs[0].node
  if (person.name !== AGENT_NAME) fail('AGENT_NAME', `Person name is ${person.name}`)
  if (person.worksFor?.['@id'] !== JACKLIN_ID) fail('BROKERAGE_WORKSFOR', `Person.worksFor @id is ${person.worksFor?.['@id']}`)
  if (person.affiliation?.['@id'] !== BUSINESS_ID) fail('PERSON_AFFILIATION', `Person.affiliation must point at ${BUSINESS_ID}`)
  if (!Array.isArray(person.sameAs) || !person.sameAs.includes('https://shirinabplanalp.jacklinrealestate.com/')) {
    fail('PERSON_SAMEAS_KVCORE', 'Person.sameAs is missing https://shirinabplanalp.jacklinrealestate.com/')
  }
}

if (brandDefs.length !== pageCount) {
  fail('BRAND_PER_GRAPH', `expected #business in all ${pageCount} page graphs, found ${brandDefs.length}`)
} else {
  for (const { file, node: brand, isHomepage } of brandDefs) {
    if (brand.name !== BRAND_NAME) fail('BRAND_NAME', `${file} brand name is ${brand.name}`)
    const brandTypes = typesOf(brand)
    if (brandTypes.length !== 1 || brandTypes[0] !== 'RealEstateAgent') {
      fail('BRAND_TYPE', `${file} brand @type is ${JSON.stringify(brand['@type'])}; expected RealEstateAgent only`)
    }
    if (brand.founder?.['@id'] !== AGENT_ID) fail('BRAND_FOUNDER', `${file} brand.founder must point at ${AGENT_ID}`)
    if (brand.memberOf?.['@id'] !== JACKLIN_ID) fail('BRAND_BROKERAGE_EDGE', `${file} brand.memberOf @id is ${brand.memberOf?.['@id']}`)
    if (!brand.logo || brand.logo.width < 112 || brand.logo.height < 112) {
      fail('BRAND_LOGO', `${file} #business.logo must be a raster ImageObject >= 112x112px`)
    }
    if (!isHomepage && (brand.review || brand.aggregateRating)) {
      fail('SUBPAGE_HIDDEN_REVIEWS', `${file} #business must not emit review/aggregateRating where reviews are not visibly rendered`)
    }
  }
}

if (jacklinDefs.length > 0) {
  const jacklin = jacklinDefs[0].node
  if (jacklin.parentOrganization) fail('JACKLIN_PARENT_ORG', 'Jacklin must not claim BHHS as parentOrganization')
  if (jacklin.brand?.['@id'] !== BHHS_BRAND_ID) fail('JACKLIN_BRAND', `Jacklin.brand @id is ${jacklin.brand?.['@id']}`)
  if (!jacklin.logo || jacklin.logo.width < 112 || jacklin.logo.height < 112) {
    fail('JACKLIN_LOGO', '#jacklin-real-estate.logo must be a raster ImageObject >= 112x112px')
  }
}

if (sawExternalJacklinId) {
  fail('EXTERNAL_JACKLIN_ID', `graph still mints or references ${EXTERNAL_JACKLIN_ID}`)
}

if (homepageBlocks.length !== 1) {
  fail('HOMEPAGE_JSONLD', `expected one homepage JSON-LD script, found ${homepageBlocks.length}`)
} else {
  const home = homepageBlocks[0]
  const webpage = home['@graph']?.find((n) => n?.['@id'] === `${BASE_URL}/#webpage`)
  if (!webpage) {
    fail('HOMEPAGE_WEBPAGE', 'homepage @graph is missing #webpage')
  } else {
    if (webpage.mainEntity?.['@id'] !== AGENT_ID) {
      fail('WEBPAGE_MAIN_ENTITY', `homepage mainEntity is ${webpage.mainEntity?.['@id']}`)
    }
    const aboutIds = (Array.isArray(webpage.about) ? webpage.about : [webpage.about]).map((n) => n?.['@id']).filter(Boolean)
    if (!aboutIds.includes(BUSINESS_ID) || !aboutIds.includes(PLACE_ID.northIdaho) || aboutIds.includes(AGENT_ID)) {
      fail('WEBPAGE_ABOUT', `homepage about is ${JSON.stringify(aboutIds)}`)
    }
  }
}

for (const { file, name, id, ownerId } of areaServedEntries) {
  if (name && INFLATED_GEO_NAMES.has(name)) {
    fail('INFLATED_GEO', `${file} areaServed includes "${name}" on ${ownerId || 'unnamed node'}`)
  }
  if (!id || !MARKETED_PLACE_IDS.has(id)) {
    fail('UNKNOWN_PLACE_ID', `${file} areaServed uses unexpected @id ${id}`)
  }
}

for (const [key, id] of Object.entries(PLACE_ID)) {
  if (!placeDefs.has(id)) fail('PLACE_ID_UNDEFINED', `${key} (${id}) has no full definition`)
}

if (serviceCount < 10) {
  fail('SERVICE_COUNT', `expected >= 10 Service nodes (buyers, sellers, relocation, 7 areas), found ${serviceCount}`)
}

if (articleCount < 10) {
  fail('ARTICLE_SCAN', `expected to scan many articles, found ${articleCount}`)
}

const agentJsonPath = 'public/agent.json'
const llmsPath = 'public/llms.txt'
if (!existsSync(agentJsonPath) || !existsSync(llmsPath)) {
  fail('AGENT_FILES_MISSING', 'public/agent.json or public/llms.txt is missing')
} else {
  const agentJson = JSON.parse(readFileSync(agentJsonPath, 'utf-8'))
  const llms = readFileSync(llmsPath, 'utf-8')
  if (agentJson.name !== BRAND_NAME) fail('AGENT_JSON_BRAND', `agent.json name is ${agentJson.name}`)
  if (agentJson.agent?.name !== AGENT_NAME) fail('AGENT_JSON_PERSON', `agent.json agent.name is ${agentJson.agent?.name}`)
  if (agentJson.agent?.brokerage !== BROKERAGE_NAME) fail('AGENT_JSON_BROKERAGE', `agent.json brokerage is ${agentJson.agent?.brokerage}`)
  if (agentJson.contact?.phone !== PHONE) fail('AGENT_JSON_PHONE', 'agent.json phone drifted')
  if (agentJson.contact?.email !== EMAIL) fail('AGENT_JSON_EMAIL', 'agent.json email drifted')
  const regional = agentJson.service_area?.regional || []
  const primary = agentJson.service_area?.primary || []
  for (const name of [...regional, ...primary]) {
    if ([...INFLATED_GEO_NAMES].some((geo) => name.includes(geo))) {
      fail('AGENT_JSON_GEO', `agent.json service_area still lists inflated geo: ${name}`)
    }
  }
  if (!llms.includes(BRAND_NAME) || !llms.includes(AGENT_NAME) || !llms.includes(BROKERAGE_NAME)) {
    fail('LLMS_IDENTITY', 'llms.txt is missing brand, person, or brokerage')
  }
  if (llms.includes('Shoshone') || llms.includes('Inland Northwest')) {
    fail('LLMS_GEO', 'llms.txt still lists inflated geography')
  }
}

console.log('\n=== GRAPH INVARIANTS ===')
console.log(`  pages scanned          : ${pageCount}`)
console.log(`  consolidated @graphs   : ${websiteDefs.length}`)
console.log(`  service nodes checked  : ${serviceCount}`)
console.log(`  article nodes checked  : ${articleCount}`)
console.log(`  marketed Place defs    : ${placeDefs.size}`)

if (failures.length === 0) {
  console.log('  ✅ single-script @graph, bare @id pointers, DOM parity, OG parity, logo, and ISO-date invariants hold')
  console.log('')
  process.exit(0)
}

console.log('')
for (const f of failures) {
  console.log(`  🔴 ${f.kind}`)
  console.log(`       ${f.detail}`)
}
console.log(`\n  ${failures.length} invariant${failures.length === 1 ? '' : 's'} failed.\n`)
process.exit(1)
