#!/usr/bin/env node
// Identity / geography / capability invariants. Runs after the @id integrity
// audit. Prefers small assertions over JSON snapshots.
//
// Exit 0 = clean, 1 = any invariant failure, 2 = missing build output.

import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const BASE_URL = 'https://www.realestatewithshirin.com'
const BUSINESS_ID = `${BASE_URL}/#business`
const AGENT_ID = `${BASE_URL}/#agent`
const JACKLIN_ID = `${BASE_URL}/#jacklin-real-estate`
const BHHS_BRAND_ID = `${BASE_URL}/#bhhs-brand`
const EXTERNAL_JACKLIN_ID = 'https://www.jacklinrealestate.com/#organization'
const AGENT_NAME = 'Shirin Abplanalp'
const BRAND_NAME = 'Real Estate With Shirin'
const BROKERAGE_NAME = 'Berkshire Hathaway HomeServices Jacklin Real Estate'
const PHONE = '+1-208-660-7468'
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

const BUILT_ROOT = '.next/server/app'
const STUB_KEYS = new Set(['@context', '@id', '@type', 'name', 'url'])

function typesOf(node) {
  const t = node?.['@type']
  if (!t) return []
  return Array.isArray(t) ? t : [t]
}

function isNameStub(obj) {
  if (!obj || typeof obj !== 'object') return false
  if (!('@type' in obj) || !('@id' in obj) || !('name' in obj)) return false
  return Object.keys(obj).every((k) => STUB_KEYS.has(k))
}

function isFullDefinition(obj) {
  if (!obj || typeof obj !== 'object') return false
  if (!('@type' in obj) || !('@id' in obj)) return false
  if (isNameStub(obj)) return false
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
const homepageBlocks = []
const placeDefs = new Map()
const areaServedNames = []
let articleCount = 0
let parseErrors = 0
let sawExternalJacklinId = false

for (const file of files) {
  const html = readFileSync(file, 'utf-8')
  const rel = file
  const isHomepage = /\/app\/index\.html$/.test(file.replaceAll('\\', '/'))
  if (isHomepage) homepageBlocks.push(...extractJsonLd(html))
  for (const block of extractJsonLd(html)) {
    if (block?.__parseError) {
      parseErrors++
      continue
    }
    walk(block, (node) => {
      const types = typesOf(node)

      if (types.includes('Person') && node['@id'] === AGENT_ID && isFullDefinition(node)) {
        personDefs.push({ file: rel, node })
      }
      if (types.includes('Person') && node.name === AGENT_NAME && isFullDefinition(node) && node['@id'] !== AGENT_ID) {
        fail('SECOND_SHIRIN', `${rel} defines another Person named ${AGENT_NAME} with @id ${node['@id']}`)
      }
      if (types.includes('Person') && types.includes('RealEstateAgent')) {
        fail('PERSON_TYPED_AS_BUSINESS', `${rel} types a Person as RealEstateAgent`)
      }

      if (node['@id'] === BUSINESS_ID && isFullDefinition(node)) {
        brandDefs.push({ file: rel, node })
      }
      if (node['@id'] === JACKLIN_ID && isFullDefinition(node)) {
        jacklinDefs.push({ file: rel, node })
      }
      if (node['@id'] === EXTERNAL_JACKLIN_ID) {
        sawExternalJacklinId = true
      }

      if (typeof node['@id'] === 'string' && MARKETED_PLACE_IDS.has(node['@id']) && isFullDefinition(node)) {
        if (!placeDefs.has(node['@id'])) placeDefs.set(node['@id'], [])
        placeDefs.get(node['@id']).push(rel)
      }

      if (types.some((t) => AREA_SERVED_OWNERS.has(t)) && node.areaServed) {
        const areas = Array.isArray(node.areaServed) ? node.areaServed : [node.areaServed]
        for (const area of areas) {
          if (!area || typeof area !== 'object') continue
          areaServedNames.push({ file: rel, name: area.name, id: area['@id'], ownerId: node['@id'] })
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

      if (types.some((t) => ARTICLE_TYPES.has(t))) {
        articleCount++
        const author = node.author
        const publisher = node.publisher
        if (!author || author['@type'] !== 'Person' || author['@id'] !== AGENT_ID || author.name !== AGENT_NAME) {
          fail('ARTICLE_AUTHOR_STUB', `${rel} article author must be Person + name + ${AGENT_ID}`)
        }
        if (!publisher || publisher['@type'] !== 'RealEstateAgent' || publisher['@id'] !== BUSINESS_ID || publisher.name !== BRAND_NAME) {
          fail('ARTICLE_PUBLISHER_STUB', `${rel} article publisher must be RealEstateAgent + name + ${BUSINESS_ID}`)
        }
      }
    })
  }

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)
  if (canonical && !canonical[1].startsWith(`${BASE_URL}`) && canonical[1] !== BASE_URL) {
    fail('CANONICAL_HOST', `${rel} canonical ${canonical[1]} is not on ${BASE_URL}`)
  }
}

if (parseErrors) fail('JSONLD_PARSE', `${parseErrors} unparseable JSON-LD block(s)`)

if (personDefs.length !== 1) {
  fail('ONE_SHIRIN_PERSON', `expected exactly one full #agent Person, found ${personDefs.length}`)
} else {
  const person = personDefs[0].node
  if (person.name !== AGENT_NAME) fail('AGENT_NAME', `Person name is ${person.name}`)
  const worksForId = person.worksFor?.['@id']
  if (worksForId !== JACKLIN_ID) {
    fail('BROKERAGE_WORKSFOR', `Person.worksFor @id is ${worksForId}`)
  }
  if (person.worksFor?.name && person.worksFor.name !== BROKERAGE_NAME) {
    fail('BROKERAGE_NAME', `Person.worksFor name is ${person.worksFor.name}`)
  }
  if (person.affiliation?.['@id'] !== BUSINESS_ID) {
    fail('PERSON_AFFILIATION', `Person.affiliation must point at ${BUSINESS_ID}`)
  }
  if (typesOf(person).includes('RealEstateAgent') || typesOf(person).includes('Organization')) {
    fail('PERSON_TYPED_AS_BUSINESS', 'canonical #agent is not only Person')
  }
}

if (brandDefs.length !== 1) {
  fail('ONE_BRAND_ORG', `expected exactly one full #business definition, found ${brandDefs.length}`)
} else {
  const brand = brandDefs[0].node
  if (brand.name !== BRAND_NAME) fail('BRAND_NAME', `brand name is ${brand.name}`)
  const brandTypes = typesOf(brand)
  if (brandTypes.length !== 1 || brandTypes[0] !== 'RealEstateAgent') {
    fail('BRAND_TYPE', `brand @type is ${JSON.stringify(brand['@type'])}; expected RealEstateAgent only`)
  }
  if (brand.founder?.['@id'] !== AGENT_ID) {
    fail('BRAND_FOUNDER', `brand.founder must point at ${AGENT_ID}`)
  }
  const memberId = brand.memberOf?.['@id']
  if (memberId !== JACKLIN_ID) {
    fail('BRAND_BROKERAGE_EDGE', `brand.memberOf @id is ${memberId}`)
  }
}

if (jacklinDefs.length !== 1) {
  fail('ONE_JACKLIN', `expected exactly one full #jacklin-real-estate definition, found ${jacklinDefs.length}`)
} else {
  const jacklin = jacklinDefs[0].node
  if (jacklin.parentOrganization) {
    fail('JACKLIN_PARENT_ORG', 'Jacklin must not claim Berkshire Hathaway HomeServices as parentOrganization')
  }
  if (jacklin.brand?.['@id'] && jacklin.brand['@id'] !== BHHS_BRAND_ID) {
    fail('JACKLIN_BRAND', `Jacklin.brand @id is ${jacklin.brand['@id']}`)
  }
}

if (sawExternalJacklinId) {
  fail('EXTERNAL_JACKLIN_ID', `graph still mints or references ${EXTERNAL_JACKLIN_ID}`)
}

if (homepageBlocks.length === 0) {
  fail('HOMEPAGE_JSONLD', 'homepage HTML had no JSON-LD blocks')
} else if (homepageBlocks.length !== 1) {
  fail('HOMEPAGE_JSONLD', `expected one homepage JSON-LD script, found ${homepageBlocks.length}`)
} else {
  const home = homepageBlocks[0]
  if (home?.__parseError) {
    fail('HOMEPAGE_JSONLD', 'homepage JSON-LD did not parse')
  } else {
    if (home['@context'] !== 'https://schema.org') {
      fail('HOMEPAGE_CONTEXT', `homepage @context is ${JSON.stringify(home['@context'])}`)
    }
    if (!Array.isArray(home['@graph'])) {
      fail('HOMEPAGE_GRAPH', 'homepage JSON-LD must be a single Schema.org @graph')
    } else {
      const webpage = home['@graph'].find((n) => n?.['@id'] === `${BASE_URL}/#webpage`)
      if (!webpage) {
        fail('HOMEPAGE_WEBPAGE', 'homepage @graph is missing #webpage')
      } else {
        if (webpage.mainEntity?.['@id'] !== AGENT_ID) {
          fail('WEBPAGE_MAIN_ENTITY', `homepage mainEntity is ${webpage.mainEntity?.['@id']}`)
        }
        const aboutIds = (Array.isArray(webpage.about) ? webpage.about : [webpage.about])
          .map((n) => n?.['@id'])
          .filter(Boolean)
        if (!aboutIds.includes(AGENT_ID) || !aboutIds.includes(BUSINESS_ID)) {
          fail('WEBPAGE_ABOUT', `homepage about is ${JSON.stringify(aboutIds)}`)
        }
      }
      const idaho = home['@graph'].find((n) => n?.['@id'] === PLACE_ID.idaho)
      const northIdaho = home['@graph'].find((n) => n?.['@id'] === PLACE_ID.northIdaho)
      if (!idaho) fail('HOMEPAGE_IDAHO', '#place-idaho is not inside the homepage @graph')
      if (!northIdaho) fail('HOMEPAGE_NORTH_IDAHO', '#place-north-idaho is not inside the homepage @graph')
      if (northIdaho && northIdaho.containedInPlace?.['@id'] !== PLACE_ID.idaho) {
        fail('NORTH_IDAHO_CONTAINED', 'North Idaho must be containedInPlace Idaho')
      }
    }
  }
}

for (const { file, name, id, ownerId } of areaServedNames) {
  if (name && INFLATED_GEO_NAMES.has(name)) {
    fail('INFLATED_GEO', `${file} areaServed includes "${name}" on ${ownerId || 'unnamed node'}`)
  }
  if (ownerId === BUSINESS_ID && name && !id) {
    fail('PLACE_ID_MISSING', `${file} brand areaServed "${name}" has no @id`)
  }
  if (ownerId === BUSINESS_ID && id && !MARKETED_PLACE_IDS.has(id)) {
    fail('UNKNOWN_PLACE_ID', `${file} brand areaServed uses unexpected @id ${id}`)
  }
}

for (const [id, filesForId] of placeDefs) {
  if (filesForId.length !== 1) {
    fail('PLACE_ID_DUPLICATE', `${id} fully defined ${filesForId.length} times: ${filesForId.join(', ')}`)
  }
}
for (const [key, id] of Object.entries(PLACE_ID)) {
  if (!placeDefs.has(id)) fail('PLACE_ID_UNDEFINED', `${key} (${id}) has no full definition`)
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
console.log(`  pages scanned          : ${files.length}`)
console.log(`  full #agent Person     : ${personDefs.length}`)
console.log(`  full #business brand   : ${brandDefs.length}`)
console.log(`  article nodes checked  : ${articleCount}`)
console.log(`  marketed Place defs    : ${placeDefs.size}`)

if (failures.length === 0) {
  console.log('  ✅ identity, geography, article stubs, and capability invariants hold')
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
