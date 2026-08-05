#!/usr/bin/env node
// Kodecite Verification Harness — Phase 1B-1
// Route inventory ↔ built output ↔ sitemap consistency.
//
// Source of truth: app/**/page.tsx (see scripts/lib/route-inventory.mjs).
// app/sitemap.ts is the artifact under test and is never used as the inventory.
//
// FAILS (exit 1) on:
//   1.  a filesystem page route with no built HTML output
//   2.  built public HTML not represented in the filesystem route inventory
//   3.  a sitemap URL with no real route
//   4.  a sitemap URL on the wrong host
//   5.  a sitemap URL with inconsistent trailing-slash formatting
//   6.  a sitemap URL pointing at a noindex page
//   7.  an indexable route missing from the sitemap and not allowlisted
//   8.  a noindex route present in the sitemap
//   9.  an allowlist entry with no reason
//   10. missing or stale build output
//
// Node built-ins only. Reads files; never writes.

import { join } from 'node:path'
import { existsSync } from 'node:fs'
import {
  BASE_URL,
  TRAILING_SLASH,
  discoverRoutes,
  discoverBuiltPages,
  normalizePath,
  isNoindex,
  buildFreshness,
  parseSitemapLocs,
  readFile,
  RouteInventoryError,
} from './lib/route-inventory.mjs'
import {
  sitemapExclusions,
  validateAllowlistShape,
} from '../config/verify-allowlist.mjs'

const ROOT = process.cwd()
const APP_DIR = join(ROOT, 'app')
const BUILT_APP_DIR = join(ROOT, '.next', 'server', 'app')
const SITEMAP_BODY = join(BUILT_APP_DIR, 'sitemap.xml.body')

const failures = []
const notes = []
const fail = (check, detail) => failures.push({ check, ...detail })

console.log('')
console.log('=== validate:routes — Phase 1B-1 route & sitemap consistency ===')

// ---------------------------------------------------------------- check 9
const shapeProblems = validateAllowlistShape()
for (const p of shapeProblems) {
  fail('allowlist shape', { reason: p, expected: 'every allowlist entry carries a non-empty reason' })
}

// --------------------------------------------------------------- check 10
const freshness = buildFreshness({
  appDir: APP_DIR,
  builtAppDir: BUILT_APP_DIR,
  extraSourceDirs: [join(ROOT, 'components'), join(ROOT, 'lib')],
  artifacts: [SITEMAP_BODY],
})
if (!freshness.ok) {
  console.log('')
  console.log(`  🔴 ${freshness.reason}`)
  console.log('')
  process.exit(1)
}

// ------------------------------------------------------------ inventories
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

const builtPages = discoverBuiltPages(BUILT_APP_DIR)
const builtByRoute = new Map(builtPages.map(p => [p.route, p]))
const routeSet = new Set(routes)

// -------------------------------------------------------------- checks 1,2
for (const r of routes) {
  if (!builtByRoute.has(r)) {
    fail('route not built', {
      route: r,
      reason: 'app/**/page.tsx declares this route but no HTML was prerendered for it.',
      expected: `.next/server/app${r === '/' ? '/index' : r}.html to exist`,
    })
  }
}
for (const p of builtPages) {
  if (!routeSet.has(p.route)) {
    fail('built page not in inventory', {
      route: p.route,
      reason: 'Built HTML exists for a public page with no matching app/**/page.tsx.',
      expected: 'every built public page to originate from a page.tsx in the inventory',
    })
  }
}

// ------------------------------------------------------------ indexability
const indexable = new Set()
const noindexRoutes = new Set()
for (const p of builtPages) {
  const html = readFile(p.file)
  if (isNoindex(html)) noindexRoutes.add(p.route)
  else indexable.add(p.route)
}

// ----------------------------------------------------------------- sitemap
if (!existsSync(SITEMAP_BODY)) {
  console.log('')
  console.log(`  🔴 Sitemap artifact missing: ${SITEMAP_BODY}`)
  console.log('     Built output may be stale. Run npm run build first.')
  console.log('')
  process.exit(1)
}
const locs = parseSitemapLocs(readFile(SITEMAP_BODY))
const sitemapRoutes = new Set()

for (const loc of locs) {
  // ---- check 4: host
  if (!loc.startsWith(`${BASE_URL}/`) && loc !== BASE_URL) {
    fail('sitemap wrong host', {
      sitemapUrl: loc,
      reason: `Sitemap URL is not on the production host ${BASE_URL}.`,
      expected: `every <loc> to start with ${BASE_URL}`,
    })
    continue
  }

  const rest = loc.slice(BASE_URL.length)
  const rawPath = rest === '' ? '/' : rest

  // ---- check 5: trailing-slash formatting
  if (!TRAILING_SLASH && rawPath !== '/' && rawPath.endsWith('/')) {
    fail('sitemap trailing slash', {
      sitemapUrl: loc,
      reason: 'Sitemap URL has a trailing slash but the site runs trailingSlash: false.',
      expected: `${BASE_URL}${normalizePath(rawPath)}`,
    })
  }
  if (rawPath !== '/' && !rawPath.startsWith('/')) {
    fail('sitemap malformed path', {
      sitemapUrl: loc,
      reason: 'Sitemap URL path is malformed.',
      expected: 'an absolute path after the origin',
    })
    continue
  }

  const path = normalizePath(rawPath)
  if (sitemapRoutes.has(path)) {
    fail('sitemap duplicate', {
      sitemapUrl: loc,
      route: path,
      reason: 'This route appears more than once in the sitemap.',
      expected: 'each route listed exactly once',
    })
  }
  sitemapRoutes.add(path)

  // ---- check 3: route exists
  if (!routeSet.has(path)) {
    fail('sitemap url has no route', {
      sitemapUrl: loc,
      route: path,
      reason: 'No app/**/page.tsx declares this route, so the URL would 404.',
      expected: `app${path === '/' ? '' : path}/page.tsx to exist`,
    })
    continue
  }

  // ---- checks 6 & 8: noindex must not be listed
  if (noindexRoutes.has(path)) {
    fail('sitemap lists noindex page', {
      sitemapUrl: loc,
      route: path,
      reason: 'Page emits <meta name="robots" content="…noindex…"> but is listed in the sitemap.',
      expected: 'noindex pages omitted from the sitemap (or the noindex directive removed)',
    })
  }
}

// ----------------------------------------------------------------- check 7
const excludedByAllowlist = new Map(sitemapExclusions.map(e => [e.route, e.reason]))
for (const route of routes) {
  if (sitemapRoutes.has(route)) continue
  if (noindexRoutes.has(route)) {
    // Negative control: a noindex route absent from the sitemap is correct.
    if (excludedByAllowlist.has(route)) {
      notes.push(`${route} — noindex, allowlisted: ${excludedByAllowlist.get(route)}`)
    } else {
      notes.push(`${route} — noindex, correctly absent from the sitemap`)
    }
    continue
  }
  if (excludedByAllowlist.has(route)) {
    notes.push(`${route} — indexable but allowlisted: ${excludedByAllowlist.get(route)}`)
    continue
  }
  fail('indexable route missing from sitemap', {
    route,
    reason: 'Route is indexable (no noindex directive) but absent from the sitemap.',
    expected: `app/sitemap.ts to list ${BASE_URL}${route === '/' ? '' : route}, ` +
      'or config/verify-allowlist.mjs to exclude it with a reason',
  })
}

// Allowlist entries that no longer correspond to a real route are stale.
for (const e of sitemapExclusions) {
  if (!routeSet.has(e.route)) {
    fail('stale allowlist entry', {
      route: e.route,
      reason: 'config/verify-allowlist.mjs excludes a route that no longer exists.',
      expected: 'remove the stale exclusion',
    })
  }
}

// ------------------------------------------------------------------ report
console.log('')
console.log(`  routes declared (app/**/page.tsx) : ${routes.length}`)
console.log(`  built public pages               : ${builtPages.length}`)
console.log(`  indexable routes                 : ${indexable.size}`)
console.log(`  noindex routes                   : ${noindexRoutes.size}${noindexRoutes.size ? ` (${[...noindexRoutes].join(', ')})` : ''}`)
console.log(`  sitemap <loc> entries            : ${locs.length}`)

if (notes.length) {
  console.log('')
  console.log('  Intentional exclusions:')
  for (const n of notes) console.log(`    · ${n}`)
}

if (failures.length === 0) {
  console.log('')
  console.log('  ✅ route inventory, built output, and sitemap are consistent')
  console.log('')
  process.exit(0)
}

console.log('')
for (const f of failures) {
  console.log(`  🔴 ${f.check}`)
  if (f.route) console.log(`       route      : ${f.route}`)
  if (f.sitemapUrl) console.log(`       sitemap URL: ${f.sitemapUrl}`)
  console.log(`       reason     : ${f.reason}`)
  console.log(`       expected   : ${f.expected}`)
  console.log('')
}
console.log(`  ${failures.length} problem${failures.length === 1 ? '' : 's'} found.`)
console.log('')
process.exit(1)
