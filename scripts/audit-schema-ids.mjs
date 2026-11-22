#!/usr/bin/env node
// Whole-graph @id audit + completeness checks. Runs after `npm run build` and
// scans the built HTML for JSON-LD blocks — this is what search engines see.
//
// Enforces:
//   - Single consolidated <script type="application/ld+json"> @graph per page
//   - Zero duplicate @id definitions within any page's @graph
//   - Zero duplicate route-scoped @id definitions across pages (shared core
//     entities #website, #business, #agent, #jacklin-real-estate, #bhhs-brand,
//     #brand-logo, #jacklin-logo, and canonical Place @ids must match canonically)
//   - Pure bare {"@id": "..."} pointers on all nested site-scoped references
//   - Zero slash-before-fragment @ids on subpaths (.../slug/#faq)
//   - Zero dangling @id references
//   - Every page has a page-container node, every FAQPage has isPartOf, and
//     every Article/BlogPosting/NewsArticle has mainEntityOfPage

import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const PAGE_CONTAINER_TYPES = new Set([
  'WebPage', 'ProfilePage', 'ContactPage', 'CollectionPage', 'ItemPage',
  'Article', 'BlogPosting', 'NewsArticle',
])
const ARTICLE_TYPES = new Set(['Article', 'BlogPosting', 'NewsArticle'])
const FAQ_TYPES = new Set(['FAQPage'])

const SHARED_CORE_IDS = new Set([
  'https://www.realestatewithshirin.com/#website',
  'https://www.realestatewithshirin.com/#business',
  'https://www.realestatewithshirin.com/#agent',
  'https://www.realestatewithshirin.com/#jacklin-real-estate',
  'https://www.realestatewithshirin.com/#bhhs-brand',
  'https://www.realestatewithshirin.com/#brand-logo',
  'https://www.realestatewithshirin.com/#jacklin-logo',
  'https://www.realestatewithshirin.com/#place-idaho',
  'https://www.realestatewithshirin.com/#place-north-idaho',
  'https://www.realestatewithshirin.com/areas/post-falls-idaho#place',
  'https://www.realestatewithshirin.com/areas/coeur-dalene-idaho#place',
  'https://www.realestatewithshirin.com/areas/hayden-idaho#place',
  'https://www.realestatewithshirin.com/areas/rathdrum-idaho#place',
  'https://www.realestatewithshirin.com/areas/sandpoint-idaho#place',
  'https://www.realestatewithshirin.com/areas/kootenai-county#place',
  'https://www.realestatewithshirin.com/areas/bonner-county#place',
])

function typeMatchesAny(nodeType, checkSet) {
  const types = Array.isArray(nodeType) ? nodeType : [nodeType]
  return types.some(t => checkSet.has(t))
}

const BUILT_ROOT = '.next/server/app'
const SOURCE_HOST_PREFIXES = [
  'https://www.realestatewithshirin.com/',
]

function isSiteScoped(id) {
  return SOURCE_HOST_PREFIXES.some(h => id.startsWith(h))
}

function classifyNode(obj) {
  if (!obj || typeof obj !== 'object' || !('@id' in obj)) return null
  const keys = Object.keys(obj)
  const substantiveKeys = keys.filter(k => k !== '@context' && k !== '@id' && k !== '@type')
  if ('@type' in obj && substantiveKeys.length > 0) return 'DEFINITION'
  return 'REFERENCE'
}

function walkNested(value, cb) {
  if (Array.isArray(value)) {
    value.forEach(item => walkNested(item, cb))
    return
  }
  if (value && typeof value === 'object') {
    cb(value)
    for (const v of Object.values(value)) walkNested(v, cb)
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

function extractJsonLdBlocks(html) {
  const blocks = []
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/g
  let m
  while ((m = re.exec(html)) !== null) blocks.push(m[1])
  return blocks
}

const definitions = new Map() // @id -> [{ file, type, serialized }]
const references = new Map()  // @id -> [{ file }]
const perFileTopNodes = new Map()
const structuralErrors = []

const files = findHtmlFiles(BUILT_ROOT)
if (files.length === 0) {
  console.error(`No HTML found under ${BUILT_ROOT}. Run \`npm run build\` first.`)
  process.exit(2)
}

for (const file of files) {
  const isSystemPage =
    file.endsWith('_not-found.html') ||
    file.endsWith('_global-error.html') ||
    file.endsWith('robots.txt')

  const html = readFileSync(file, 'utf-8')
  const blocks = extractJsonLdBlocks(html)

  if (!isSystemPage && blocks.length !== 1) {
    structuralErrors.push(`MULTI_SCRIPT: ${file} emitted ${blocks.length} JSON-LD <script> tags (expected 1 consolidated @graph)`)
  }

  const topNodes = []
  const perPageDefs = new Set()

  for (const raw of blocks) {
    let parsed
    try {
      parsed = JSON.parse(raw)
    } catch (e) {
      structuralErrors.push(`PARSE_ERROR: ${file}: ${e.message}`)
      continue
    }

    if (!isSystemPage && (!parsed || !Array.isArray(parsed['@graph']))) {
      structuralErrors.push(`MISSING_GRAPH_ROOT: ${file} root JSON-LD is not a {"@context","@graph"} object`)
    }

    const graphNodes = Array.isArray(parsed?.['@graph']) ? parsed['@graph'] : (Array.isArray(parsed) ? parsed : [parsed])
    for (const root of graphNodes) {
      if (!root || typeof root !== 'object') continue
      if ('@type' in root) topNodes.push(root)

      const rootId = root['@id']
      if (typeof rootId === 'string') {
        if (/https:\/\/www\.realestatewithshirin\.com\/[^#]+\/#/.test(rootId)) {
          structuralErrors.push(`SLASH_BEFORE_HASH_ID: ${file} uses trailing slash before # in ${rootId}`)
        }
        const kind = classifyNode(root)
        if (kind === 'DEFINITION') {
          if (perPageDefs.has(rootId)) {
            structuralErrors.push(`PER_PAGE_DUPLICATE_ID: ${file} defines ${rootId} more than once in its @graph`)
          }
          perPageDefs.add(rootId)
          // Strip homepage-only review/aggregateRating when comparing #business consistency across routes
          const normalized = rootId === 'https://www.realestatewithshirin.com/#business'
            ? JSON.stringify({ ...root, review: undefined, aggregateRating: undefined })
            : JSON.stringify(root)
          if (!definitions.has(rootId)) definitions.set(rootId, [])
          definitions.get(rootId).push({ file, type: root['@type'], serialized: normalized })
        }
      }

      // Inspect nested values inside each graph root node
      for (const [propKey, propVal] of Object.entries(root)) {
        if (propKey === '@context' || propKey === '@id' || propKey === '@type') continue
        walkNested(propVal, (nested) => {
          const nid = nested['@id']
          if (typeof nid !== 'string') return
          if (/https:\/\/www\.realestatewithshirin\.com\/[^#]+\/#/.test(nid)) {
            structuralErrors.push(`SLASH_BEFORE_HASH_ID: ${file} uses trailing slash before # in ${nid}`)
          }
          // Nested ImageObject logos (#brand-logo, #jacklin-logo) are canonical definitions on their owner;
          // all references to top-level entities (#agent, #business, #website, #jacklin-real-estate, #place, #webpage, etc.)
          // must be bare {"@id": "..."} pointers.
          if (isSiteScoped(nid) && nid !== 'https://www.realestatewithshirin.com/#brand-logo' && nid !== 'https://www.realestatewithshirin.com/#jacklin-logo') {
            const keys = Object.keys(nested)
            if (keys.length > 1) {
              structuralErrors.push(`INLINE_REDECLARATION: ${file} nested reference to ${nid} carries extra keys [${keys.join(', ')}] instead of bare {"@id"}`)
            }
          }
          const kind = classifyNode(nested)
          if (kind === 'DEFINITION') {
            if (!definitions.has(nid)) definitions.set(nid, [])
            definitions.get(nid).push({ file, type: nested['@type'], serialized: JSON.stringify(nested) })
          } else {
            if (!references.has(nid)) references.set(nid, [])
            references.get(nid).push({ file })
          }
        })
      }
    }
  }
  perFileTopNodes.set(file, topNodes)
}

let issues = structuralErrors.length

if (structuralErrors.length > 0) {
  console.log('\n=== STRUCTURAL GRAPH ERRORS ===')
  for (const err of structuralErrors) console.log(`  🔴 ${err}`)
}

console.log('\n=== DEFINITION COUNT (route-scoped & shared @ids) ===')
const siteScoped = [...definitions.keys()].filter(isSiteScoped).sort()
for (const id of siteScoped) {
  const defs = definitions.get(id)
  if (SHARED_CORE_IDS.has(id)) {
    const uniqueShapes = new Set(defs.map(d => d.serialized))
    if (uniqueShapes.size > 1) {
      issues++
      console.log(`  🔴 DRIFTED SHARED ENTITY (${uniqueShapes.size} variants): ${id}`)
    } else {
      console.log(`  ✅ shared (${defs.length} graphs, 0 drift)  ${id}`)
    }
  } else {
    const marker = defs.length > 1 ? '  🔴 DUPLICATE' : ''
    console.log(`  ${defs.length}x  ${id}${marker}`)
    if (defs.length > 1) {
      issues++
      defs.forEach(d => console.log(`         ${d.file}  (@type: ${JSON.stringify(d.type)})`))
    }
  }
}

console.log('\n=== DANGLING REFERENCES ===')
const dangling = []
for (const [id, refs] of references) {
  if (!definitions.has(id)) dangling.push({ id, refs })
}
if (dangling.length === 0) {
  console.log('  ✅ none')
} else {
  for (const { id, refs } of dangling) {
    if (!isSiteScoped(id)) {
      console.log(`  🟡 external (expected): ${id}  (${refs.length} refs)`)
      continue
    }
    issues++
    console.log(`  🔴 DANGLING: ${id}`)
    refs.forEach(r => console.log(`         referenced from ${r.file}`))
  }
}

console.log('\n=== COMPLETENESS CHECKS ===')
const completenessFailures = []

for (const [file, topNodes] of perFileTopNodes) {
  if (
    file.endsWith('_not-found.html') ||
    file.endsWith('_global-error.html') ||
    file.endsWith('robots.txt')
  ) continue

  const hasContainer = topNodes.some(n => typeMatchesAny(n['@type'], PAGE_CONTAINER_TYPES))
  if (!hasContainer) {
    completenessFailures.push({
      kind: 'MISSING_PAGE_CONTAINER',
      file,
      detail: `emitted types: ${topNodes.map(n => JSON.stringify(n['@type'])).join(', ') || '(none)'}`,
    })
  }

  for (const node of topNodes) {
    if (typeMatchesAny(node['@type'], FAQ_TYPES)) {
      if (!node.isPartOf) {
        completenessFailures.push({
          kind: 'FAQPAGE_MISSING_ISPARTOF',
          file,
          detail: `@id ${node['@id'] || '(none)'}`,
        })
      }
    }
    if (typeMatchesAny(node['@type'], ARTICLE_TYPES)) {
      if (!node.mainEntityOfPage) {
        completenessFailures.push({
          kind: 'ARTICLE_MISSING_MAINENTITYOFPAGE',
          file,
          detail: `@id ${node['@id'] || '(none)'}, @type ${JSON.stringify(node['@type'])}`,
        })
      }
    }
  }
}

if (completenessFailures.length === 0) {
  console.log('  ✅ every page has a container; every FAQPage has isPartOf; every Article has mainEntityOfPage')
} else {
  for (const f of completenessFailures) {
    console.log(`  🔴 ${f.kind}: ${f.file}`)
    console.log(`         ${f.detail}`)
    issues++
  }
}

console.log('\n=== SUMMARY ===')
console.log(`  Site-scoped @ids:        ${siteScoped.length}`)
console.log(`  References tracked:      ${references.size}`)
console.log(`  Completeness failures:   ${completenessFailures.length}`)
console.log(`  Issues:                  ${issues}`)

process.exit(issues > 0 ? 1 : 0)
