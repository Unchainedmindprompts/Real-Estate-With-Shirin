#!/usr/bin/env node
// Kodecite Verification Harness — Phase 1B-1
// Rendered internal-link validation.
//
// Primary input is BUILT HTML, not source. Two reasons:
//   1. components/Footer.tsx and components/Navigation.tsx build links by
//      mapping over data arrays. A source scanner either misses those or has to
//      evaluate JavaScript; rendered HTML has them already resolved.
//   2. Rendered output is what crawlers actually receive.
//
// Source is consulted only AFTER a break is found, to locate the authoring
// site so the report says "fix Footer.tsx:101" rather than "42 pages broken".
//
// FAILS (exit 1) when an internal link or internal schema URL points at a route
// that does not exist.
//
// Node built-ins only. Reads files; never writes.

import { join, relative } from 'node:path'
import { readdirSync, existsSync } from 'node:fs'
import {
  BASE_URL,
  discoverRoutes,
  discoverBuiltPages,
  normalizePath,
  toLocalPath,
  isAssetPath,
  isFrameworkAsset,
  stripScripts,
  decodeEntities,
  extractJsonLd,
  buildFreshness,
  readFile,
  RouteInventoryError,
} from './lib/route-inventory.mjs'
import {
  allowedNonRoutePaths,
  allowedAssetPaths,
  validateAllowlistShape,
} from '../config/verify-allowlist.mjs'

const ROOT = process.cwd()
const APP_DIR = join(ROOT, 'app')
const BUILT_APP_DIR = join(ROOT, '.next', 'server', 'app')

// Schema properties whose string values are URLs worth resolving.
const SCHEMA_URL_KEYS = new Set(['url', 'item', 'mainEntityOfPage', 'contentUrl'])

console.log('')
console.log('=== validate:links — Phase 1B-1 rendered internal-link validation ===')

const shapeProblems = validateAllowlistShape()
if (shapeProblems.length) {
  console.log('')
  for (const p of shapeProblems) console.log(`  🔴 allowlist: ${p}`)
  console.log('')
  process.exit(1)
}

const freshness = buildFreshness({
  appDir: APP_DIR,
  builtAppDir: BUILT_APP_DIR,
  extraSourceDirs: [join(ROOT, 'components'), join(ROOT, 'lib')],
  artifacts: [BUILT_APP_DIR],
})
if (!freshness.ok) {
  console.log('')
  console.log(`  🔴 ${freshness.reason}`)
  console.log('')
  process.exit(1)
}

let routes
try {
  routes = discoverRoutes(APP_DIR)
} catch (e) {
  if (e instanceof RouteInventoryError) {
    console.log('')
    console.log(`  🔴 ${e.message}`)
    console.log('')
    process.exit(1)
  }
  throw e
}
const routeSet = new Set(routes)
const allowedPaths = new Set([
  ...allowedNonRoutePaths.map(a => a.path),
  ...allowedAssetPaths.map(a => a.path),
])

const builtPages = discoverBuiltPages(BUILT_APP_DIR)

/** Decide whether a resolved local path needs to resolve to a route. */
function skipReason(path) {
  if (path === null) return 'not-internal'
  if (isFrameworkAsset(path)) return 'framework-asset'   // /_next/* — never a route
  if (allowedPaths.has(path)) return 'allowlisted'
  if (isAssetPath(path)) return 'public-asset'
  return null
}

const broken = new Map() // target -> { target, sourceType, pages:Set, samples:Set }
let visibleChecked = 0
let schemaChecked = 0
let schemaParseErrors = 0

function record(target, sourceType, page, sampleHref) {
  const key = `${sourceType}::${target}`
  if (!broken.has(key)) {
    broken.set(key, { target, sourceType, pages: new Set(), samples: new Set() })
  }
  const e = broken.get(key)
  e.pages.add(page)
  if (sampleHref) e.samples.add(sampleHref)
}

for (const page of builtPages) {
  const html = readFile(page.file)

  // ---------- visible HTML ----------
  // Scripts stripped first: Next embeds the RSC flight payload inline, where
  // `$undefined` sentinels and escaped href-like strings live. Scanning raw
  // HTML yields large volumes of phantom findings.
  const visible = stripScripts(html)
  for (const m of visible.matchAll(/\shref="([^"]*)"/gi)) {
    const href = decodeEntities(m[1])
    const local = toLocalPath(href)
    if (local === null) continue // external, mailto:, tel:, sms:, hash-only, …
    const path = local.path
    if (skipReason(path)) continue
    visibleChecked++
    if (!routeSet.has(path)) record(path, 'visible-html', page.route, href)
  }

  // ---------- JSON-LD ----------
  for (const block of extractJsonLd(html)) {
    if (block.error) {
      schemaParseErrors++
      continue
    }
    const walk = node => {
      if (Array.isArray(node)) return node.forEach(walk)
      if (!node || typeof node !== 'object') return
      for (const [key, value] of Object.entries(node)) {
        if (typeof value === 'string' && SCHEMA_URL_KEYS.has(key)) {
          // Only this site's own host. External entity references (e.g. the
          // brokerage Organization on jacklinrealestate.com, sameAs targets)
          // are NOT local routes and must never be resolved as such.
          if (value.startsWith(BASE_URL)) {
            const rest = value.slice(BASE_URL.length)
            const path = normalizePath(rest === '' ? '/' : rest)
            if (path !== null && !skipReason(path)) {
              schemaChecked++
              if (!routeSet.has(path)) record(path, 'schema', page.route, `${key}: ${value}`)
            }
          }
        }
        walk(value)
      }
    }
    walk(block.data)
  }
}

// ---------- locate authoring sites for the targets that actually broke ----------
const SOURCE_DIRS = ['app', 'components', 'lib', 'config']
const TEXT_EXT = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json', '.md', '.mdx'])

function sourceFiles() {
  const out = []
  const walk = dir => {
    if (!existsSync(dir)) return
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.name.startsWith('.') || e.name === 'node_modules') continue
      const full = join(dir, e.name)
      if (e.isDirectory()) walk(full)
      else if ([...TEXT_EXT].some(x => e.name.endsWith(x))) out.push(full)
    }
  }
  for (const d of SOURCE_DIRS) walk(join(ROOT, d))
  return out
}

function locate(target) {
  const hits = []
  // Every needle is quote-terminated. A bare `${BASE_URL}${target}` needle would
  // match by prefix — "/blog" would hit every line containing
  // "/blog/video-authority-layer-ai-discovery-2026" and bury the real location.
  const needles = [
    `"${target}"`, `'${target}'`, `\`${target}\``,
    `"${BASE_URL}${target}"`, `'${BASE_URL}${target}'`, `\`${BASE_URL}${target}\``,
  ]
  for (const file of sourceFiles()) {
    let text
    try { text = readFile(file) } catch { continue }
    if (!needles.some(n => text.includes(n))) continue
    text.split('\n').forEach((line, i) => {
      if (needles.some(n => line.includes(n))) {
        hits.push(`${relative(ROOT, file)}:${i + 1}`)
      }
    })
  }
  return hits
}

// ------------------------------------------------------------------ report
console.log('')
console.log(`  built public pages scanned : ${builtPages.length}`)
console.log(`  internal links checked     : ${visibleChecked}`)
console.log(`  internal schema URLs checked: ${schemaChecked}`)
if (schemaParseErrors) console.log(`  ⚠️  unparseable JSON-LD blocks: ${schemaParseErrors}`)

if (broken.size === 0 && schemaParseErrors === 0) {
  console.log('')
  console.log('  ✅ every internal link and schema URL resolves to a real route')
  console.log('')
  process.exit(0)
}

console.log('')
for (const entry of [...broken.values()].sort((a, b) => a.target.localeCompare(b.target))) {
  const pages = [...entry.pages].sort()
  const where = pages.length > 3
    ? `${pages.slice(0, 3).join(', ')}  … and ${pages.length - 3} more (${pages.length} pages total)`
    : pages.join(', ')
  console.log(`  🔴 BROKEN INTERNAL LINK`)
  console.log(`       target      : ${entry.target}`)
  console.log(`       source type : ${entry.sourceType}`)
  console.log(`       on page(s)  : ${where}`)
  console.log(`       reason      : no route declared at app${entry.target === '/' ? '' : entry.target}/page.tsx, and not allowlisted`)
  const samples = [...entry.samples].slice(0, 2)
  if (samples.length) console.log(`       as written  : ${samples.join(' | ')}`)
  const hits = locate(entry.target)
  if (hits.length) {
    const shown = hits.slice(0, 5)
    console.log(`       source      : ${shown.join(', ')}${hits.length > shown.length ? `  (+${hits.length - shown.length} more)` : ''}`)
    if (pages.length > 3 && hits.length <= 2) {
      console.log(`       note        : appears on ${pages.length} pages from ${hits.length === 1 ? 'a single shared source' : 'shared sources'} — fix once`)
    }
  } else {
    console.log(`       source      : no literal match found (likely built from a template literal or computed value)`)
  }
  console.log('')
}
if (schemaParseErrors) {
  console.log(`  🔴 ${schemaParseErrors} JSON-LD block(s) failed to parse.`)
  console.log('')
}
const total = broken.size + (schemaParseErrors ? 1 : 0)
console.log(`  ${total} problem${total === 1 ? '' : 's'} found.`)
console.log('')
process.exit(1)
