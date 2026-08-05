// Kodecite Verification Harness — Phase 1B-1
// Shared route inventory + URL utilities.
//
// The FILESYSTEM (app/**/page.tsx) is the declared source of truth for what
// routes exist. app/sitemap.ts is deliberately NOT consulted here — it is the
// artifact under test, so using it as the inventory would make the sitemap
// consistency check vacuous.
//
// Built HTML (.next/server/app/**/*.html) is used as a CROSS-CHECK, not as the
// inventory: comparing the two catches a page that silently failed to prerender.
//
// Node built-ins only. Reads files; never writes.

import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs'
import { join, relative, extname } from 'node:path'

export const BASE_URL = 'https://www.realestatewithshirin.com'

// The site runs with Next's default `trailingSlash: false` (next.config.ts sets
// no trailingSlash option). Every comparison in this harness normalizes to the
// no-trailing-slash form so `/buyers` and `/buyers/` resolve identically.
export const TRAILING_SLASH = false

// Built HTML files that are framework artifacts, not public pages.
export const FRAMEWORK_PAGES = new Set(['/_not-found', '/_global-error'])

// Non-page routes Next emits from app/robots.ts and app/sitemap.ts.
export const SPECIAL_ROUTES = new Set(['/robots.txt', '/sitemap.xml'])

/**
 * Segment shapes this module refuses to guess at. Phase 1B-1 was designed
 * against a codebase with 42 fully static routes and no dynamic segments; if
 * any appear later, the validators must fail loudly rather than silently
 * skipping or mis-resolving them.
 */
function classifySegment(name) {
  if (/^\[\[\.\.\..+\]\]$/.test(name)) return 'optional catch-all dynamic segment'
  if (/^\[\.\.\..+\]$/.test(name)) return 'catch-all dynamic segment'
  if (/^\[.+\]$/.test(name)) return 'dynamic segment'
  if (/^\(.+\)$/.test(name)) return 'route group'
  if (/^@.+$/.test(name)) return 'parallel route slot'
  if (/^\(\.\.?\)/.test(name) || /^\(\.\.\.\)/.test(name)) return 'intercepting route'
  return null
}

export class RouteInventoryError extends Error {}

/**
 * Walk app/ and collect one route per page.tsx.
 * Throws RouteInventoryError on any segment shape this harness cannot model.
 */
export function discoverRoutes(appDir) {
  if (!existsSync(appDir)) {
    throw new RouteInventoryError(`app directory not found at ${appDir}`)
  }
  const routes = []
  const unsupported = []

  const walk = dir => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.')) continue
      const full = join(dir, entry.name)
      if (entry.isDirectory()) {
        const kind = classifySegment(entry.name)
        if (kind) {
          unsupported.push({ segment: relative(appDir, full), kind })
          continue
        }
        walk(full)
      } else if (entry.name === 'page.tsx' || entry.name === 'page.jsx' || entry.name === 'page.js') {
        const rel = relative(appDir, dir).replace(/\\/g, '/')
        routes.push(rel === '' ? '/' : `/${rel}`)
      }
    }
  }
  walk(appDir)

  if (unsupported.length) {
    const list = unsupported.map(u => `  - app/${u.segment}  (${u.kind})`).join('\n')
    throw new RouteInventoryError(
      'Unsupported route shape(s) found. The Phase 1B-1 validators model only\n' +
        'fully static routes and must not guess at these:\n\n' + list + '\n\n' +
        'Extend scripts/lib/route-inventory.mjs to resolve them before this gate can pass.'
    )
  }

  return [...new Set(routes)].sort()
}

/** Collect built page HTML files, excluding framework artifacts. */
export function discoverBuiltPages(builtAppDir) {
  const out = []
  const walk = dir => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (extname(entry.name) === '.html') {
        const route = builtRouteOf(builtAppDir, full)
        if (FRAMEWORK_PAGES.has(route)) continue
        out.push({ route, file: full })
      }
    }
  }
  if (existsSync(builtAppDir)) walk(builtAppDir)
  return out.sort((a, b) => a.route.localeCompare(b.route))
}

function builtRouteOf(builtAppDir, file) {
  const rel = '/' + relative(builtAppDir, file).replace(/\.html$/, '').replace(/\\/g, '/')
  return rel === '/index' ? '/' : rel
}

/** Normalize a path for comparison: strip query, fragment, and trailing slash. */
export function normalizePath(input) {
  if (!input) return null
  let p = input.split('#')[0].split('?')[0]
  if (p === '') return null
  if (!TRAILING_SLASH && p !== '/' && p.endsWith('/')) p = p.replace(/\/+$/, '')
  return p === '' ? '/' : p
}

/**
 * Turn an href/URL into a local route path, or null when it is not an internal
 * page link (external host, mailto:, tel:, hash-only, protocol-relative, …).
 * Returns { path, wasAbsolute } so callers can report host problems.
 */
export function toLocalPath(href) {
  if (!href) return null
  const raw = href.trim()
  if (raw === '') return null
  if (raw.startsWith('#')) return null
  if (/^[a-z][a-z0-9+.-]*:/i.test(raw)) {
    // Any URI scheme: mailto:, tel:, sms:, data:, javascript:, http(s):, …
    if (!/^https?:\/\//i.test(raw)) return null
    if (!raw.startsWith(BASE_URL)) return null // external host
    const rest = raw.slice(BASE_URL.length)
    return { path: normalizePath(rest === '' ? '/' : rest), wasAbsolute: true }
  }
  if (raw.startsWith('//')) return null // protocol-relative → external
  if (!raw.startsWith('/')) return null // relative/in-page reference
  return { path: normalizePath(raw), wasAbsolute: false }
}

/** Public asset extensions that are files under public/, not routes. */
const ASSET_EXT = /\.(png|jpe?g|webp|avif|gif|svg|ico|pdf|txt|xml|json|mp4|webm|mov|mp3|wav|woff2?|ttf|otf|zip|csv)$/i
export const isAssetPath = p => !!p && ASSET_EXT.test(p)

/** Next build assets — never routes. */
export const isFrameworkAsset = p => !!p && (p.startsWith('/_next/') || p === '/_next')

/**
 * Strip <script> blocks. MANDATORY before scanning "visible" HTML: Next embeds
 * the React Server Component flight payload in inline scripts, where `$undefined`
 * sentinels and escaped href-like strings appear on every page. Scanning raw
 * HTML produces large volumes of phantom findings.
 */
export function stripScripts(html) {
  return html.replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
}

/** Decode the HTML entities Next emits in attribute and text content. */
export function decodeEntities(s) {
  if (!s) return s
  return s
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&quot;|&#34;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#x2F;|&#47;/g, '/')
    .replace(/&amp;/g, '&')
}

/** Extract JSON-LD blocks, parsed. Malformed blocks are returned as errors. */
export function extractJsonLd(html) {
  const blocks = []
  const re = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi
  for (const m of html.matchAll(re)) {
    const text = decodeEntities(m[1])
    try {
      blocks.push({ data: JSON.parse(text), error: null })
    } catch (e) {
      blocks.push({ data: null, error: e.message })
    }
  }
  return blocks
}

/** Read <meta name="robots"> from built HTML. Indexability is never inferred. */
export function readRobotsMeta(html) {
  const m = html.match(/<meta\s+name="robots"\s+content="([^"]*)"/i)
  return m ? m[1] : null
}

export function isNoindex(html) {
  const robots = readRobotsMeta(html)
  return !!robots && /\bnoindex\b/i.test(robots)
}

/**
 * Stale-build detection. Compares the newest mtime under the watched source
 * directories against the oldest build artifact we depend on.
 */
export function buildFreshness({ appDir, builtAppDir, extraSourceDirs = [], artifacts = [] }) {
  if (!existsSync(builtAppDir)) {
    return { ok: false, reason: `Build output not found at ${builtAppDir}.` }
  }
  for (const a of artifacts) {
    if (!existsSync(a)) return { ok: false, reason: `Required build artifact missing: ${a}` }
  }

  let newestSource = { mtime: 0, file: null }
  const scan = dir => {
    if (!existsSync(dir)) return
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
      const full = join(dir, entry.name)
      if (entry.isDirectory()) scan(full)
      else {
        const m = statSync(full).mtimeMs
        if (m > newestSource.mtime) newestSource = { mtime: m, file: full }
      }
    }
  }
  scan(appDir)
  for (const d of extraSourceDirs) scan(d)

  let oldestArtifact = { mtime: Infinity, file: null }
  for (const a of artifacts) {
    const m = statSync(a).mtimeMs
    if (m < oldestArtifact.mtime) oldestArtifact = { mtime: m, file: a }
  }

  if (newestSource.mtime > oldestArtifact.mtime) {
    return {
      ok: false,
      reason:
        'Built output may be stale. Run npm run build first.\n' +
        `       newest source : ${newestSource.file}\n` +
        `       build artifact: ${oldestArtifact.file}`,
    }
  }
  return { ok: true }
}

/** Parse <loc> values out of the prerendered sitemap XML. */
export function parseSitemapLocs(xml) {
  return [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(m => decodeEntities(m[1].trim()))
}

/** Shared console formatting. */
export function banner(name) {
  console.log('')
  console.log(`=== ${name} ===`)
}

export function readFile(p) {
  return readFileSync(p, 'utf8')
}
