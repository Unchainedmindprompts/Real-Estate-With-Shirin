#!/usr/bin/env node
// Whole-graph @id audit. Runs after `npm run build` and scans the built HTML
// for JSON-LD blocks — this is what search engines actually see, not source.
//
// Reports:
//   - Duplicate @id DEFINITIONS across pages
//   - Dangling @id REFERENCES (referenced but never defined)
//   - Per-page node inventory
//
// Exit codes:
//   0 = clean, 1 = duplicate defs or dangling refs found

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs'
import { join } from 'node:path'

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

const files = findHtmlFiles(BUILT_ROOT)
if (files.length === 0) {
  console.error(`No HTML found under ${BUILT_ROOT}. Run \`npm run build\` first.`)
  process.exit(2)
}

for (const file of files) {
  const html = readFileSync(file, 'utf-8')
  const blocks = extractJsonLdBlocks(html)
  for (const raw of blocks) {
    let parsed
    try {
      parsed = JSON.parse(raw)
    } catch (e) {
      console.warn(`Skipped unparseable JSON-LD block in ${file}: ${e.message}`)
      continue
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

console.log('\n=== SUMMARY ===')
console.log(`  Site-scoped definitions: ${siteScoped.length}`)
console.log(`  References tracked:      ${references.size}`)
console.log(`  Issues:                  ${issues}`)

process.exit(issues > 0 ? 1 : 0)
