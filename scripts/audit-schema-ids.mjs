#!/usr/bin/env node
// Whole-graph @id audit + completeness checks. Runs after `npm run build` and
// scans the built HTML for JSON-LD blocks — this is what search engines see.
//
// Integrity checks (catches CORRUPTION):
//   - Duplicate @id DEFINITIONS across pages
//   - Dangling @id REFERENCES (referenced but never defined)
//
// Completeness checks (catches MISSING NODES that pass integrity but are wrong):
//   - Every emitted page has at least one page-container node
//     (WebPage / ProfilePage / ContactPage / CollectionPage / ItemPage /
//      Article / BlogPosting / NewsArticle)
//   - Every FAQPage has isPartOf (so it doesn't float loose off the site root)
//   - Every Article/BlogPosting/NewsArticle has mainEntityOfPage set
//
// Exit codes:
//   0 = clean, 1 = any integrity OR completeness failure

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const PAGE_CONTAINER_TYPES = new Set([
  'WebPage', 'ProfilePage', 'ContactPage', 'CollectionPage', 'ItemPage',
  'Article', 'BlogPosting', 'NewsArticle',
])
const ARTICLE_TYPES = new Set(['Article', 'BlogPosting', 'NewsArticle'])
const FAQ_TYPES = new Set(['FAQPage'])

function typeMatchesAny(nodeType, checkSet) {
  const types = Array.isArray(nodeType) ? nodeType : [nodeType]
  return types.some(t => checkSet.has(t))
}

const BUILT_ROOT = '.next/server/app'
const SOURCE_HOST_PREFIXES = [
  'https://www.realestatewithshirin.com/',
]

// A node counts as a DEFINITION when it has @type AND at least one property beyond
// @context/@id/@type. A bare { @id: ... } is a REFERENCE.
function classifyNode(obj) {
  const keys = Object.keys(obj)
  const hasType = '@type' in obj
  const hasId = '@id' in obj
  if (!hasId) return null
  const substantiveKeys = keys.filter(k => k !== '@context' && k !== '@id' && k !== '@type')
  if (hasType && substantiveKeys.length > 0) return 'DEFINITION'
  return 'REFERENCE'
}

function walkNodes(node, cb) {
  if (Array.isArray(node)) {
    node.forEach(n => walkNodes(n, cb))
    return
  }
  if (node && typeof node === 'object') {
    cb(node)
    for (const v of Object.values(node)) walkNodes(v, cb)
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

function isSiteScoped(id) {
  return SOURCE_HOST_PREFIXES.some(h => id.startsWith(h))
}

const definitions = new Map() // @id -> [{ file, type, node }]
const references = new Map()  // @id -> [{ file, node }]
const externalDefs = new Set() // brokerage #organization, City sameAs, etc. — allowed cross-domain defs
const perFileTopNodes = new Map() // file -> [{ topLevelType, node }] — top-level JSON-LD nodes for completeness checks

const files = findHtmlFiles(BUILT_ROOT)
if (files.length === 0) {
  console.error(`No HTML found under ${BUILT_ROOT}. Run \`npm run build\` first.`)
  process.exit(2)
}

for (const file of files) {
  const html = readFileSync(file, 'utf-8')
  const blocks = extractJsonLdBlocks(html)
  const topNodes = []
  for (const raw of blocks) {
    let parsed
    try {
      parsed = JSON.parse(raw)
    } catch (e) {
      console.warn(`Skipped unparseable JSON-LD block in ${file}: ${e.message}`)
      continue
    }
    // A JSON-LD block's ROOT is what search engines treat as the top-level entity.
    // Track those separately from nested nodes for completeness checks.
    const roots = Array.isArray(parsed) ? parsed : [parsed]
    for (const root of roots) {
      if (root && typeof root === 'object' && '@type' in root) topNodes.push(root)
    }
    walkNodes(parsed, (node) => {
      const kind = classifyNode(node)
      if (!kind) return
      const id = node['@id']
      if (typeof id !== 'string') return
      if (kind === 'DEFINITION') {
        if (!definitions.has(id)) definitions.set(id, [])
        definitions.get(id).push({ file, type: node['@type'] })
      } else {
        if (!references.has(id)) references.set(id, [])
        references.get(id).push({ file })
      }
    })
  }
  perFileTopNodes.set(file, topNodes)
}

// Report
let issues = 0

console.log('\n=== DEFINITION COUNT (site-scoped @ids) ===')
const siteScoped = [...definitions.keys()].filter(isSiteScoped).sort()
for (const id of siteScoped) {
  const defs = definitions.get(id)
  const marker = defs.length > 1 ? '  🔴 DUPLICATE' : ''
  console.log(`  ${defs.length}x  ${id}${marker}`)
  if (defs.length > 1) {
    issues++
    defs.forEach(d => console.log(`         ${d.file}  (@type: ${JSON.stringify(d.type)})`))
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
    // External brokerage @id (jacklinrealestate.com) is expected to be undefined here
    // (it's defined on the brokerage's own domain, we reference it).
    if (!isSiteScoped(id)) {
      console.log(`  🟡 external (expected): ${id}  (${refs.length} refs)`)
      continue
    }
    issues++
    console.log(`  🔴 DANGLING: ${id}`)
    refs.forEach(r => console.log(`         referenced from ${r.file}`))
  }
}

// ============================================================================
// Completeness checks — catch MISSING nodes, not just corrupt ones.
// ============================================================================

console.log('\n=== COMPLETENESS CHECKS ===')
const completenessFailures = []

for (const [file, topNodes] of perFileTopNodes) {
  // Skip non-page HTML (Next.js system pages, favicon, robots, sitemap)
  if (
    file.endsWith('_not-found.html') ||
    file.endsWith('_global-error.html') ||
    file.endsWith('robots.txt')
  ) continue

  // Check 1 — every page has at least one page-container node
  const hasContainer = topNodes.some(n => typeMatchesAny(n['@type'], PAGE_CONTAINER_TYPES))
  if (!hasContainer) {
    completenessFailures.push({
      kind: 'MISSING_PAGE_CONTAINER',
      file,
      detail: `emitted types: ${topNodes.map(n => JSON.stringify(n['@type'])).join(', ') || '(none)'}`,
    })
  }

  // Check 2 — every FAQPage has isPartOf (must not float)
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
  }

  // Check 3 — every Article/BlogPosting/NewsArticle has mainEntityOfPage
  for (const node of topNodes) {
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
console.log(`  Site-scoped definitions: ${siteScoped.length}`)
console.log(`  References tracked:      ${references.size}`)
console.log(`  Completeness failures:   ${completenessFailures.length}`)
console.log(`  Issues:                  ${issues}`)

process.exit(issues > 0 ? 1 : 0)
