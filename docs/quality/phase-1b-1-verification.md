# Kodecite Verification Harness — Phase 1B-1

Route inventory, sitemap ↔ route consistency, and rendered internal-link validation.

Phase 1A validates **source** (missing images, forbidden placeholders) and the
existing postbuild audit validates the **entity graph**. Phase 1B-1 adds the
third substrate: whether the site's own **routes, sitemap, and internal links**
agree with each other.

These checks require built output, so they are deliberately **not** part of
`npm run check` — that gate must stay fast. They run through `verify:build`.

---

## Route inventory — the source of truth

`app/**/page.tsx` **is** the declared route inventory.

`app/sitemap.ts` is deliberately **not** consulted as the inventory. It is the
artifact under test; using it as the source of truth would make the sitemap
consistency check vacuous.

Built HTML (`.next/server/app/**/*.html`) is used as a **cross-check**, not as
the inventory. Comparing the two catches a page that silently failed to
prerender, in either direction.

### Hard failure on route shapes the harness cannot model

`scripts/lib/route-inventory.mjs` throws rather than guessing when it meets:

| Shape | Example |
|---|---|
| dynamic segment | `[slug]` |
| catch-all | `[...slug]` |
| optional catch-all | `[[...slug]]` |
| route group | `(marketing)` |
| parallel route slot | `@modal` |
| intercepting route | `(.)photo` |

The repository is currently 42 fully static routes with none of these. If one is
ever added, the gate fails loudly with instructions rather than silently
skipping the route — silent skipping is how a validator quietly stops covering
the thing it was written for.

### Normalization

`next.config.ts` sets no `trailingSlash`, so Next's default `false` applies.
Every path is normalized to the no-trailing-slash form before comparison, and
query strings and fragments are stripped.

---

## Sitemap validation rules

`scripts/validate-routes.mjs` reads the **prerendered** sitemap from
`.next/server/app/sitemap.xml.body`. No server, no HTTP request, no `next start`.

Fails on:

1. a filesystem page route with no built HTML output
2. built public HTML not represented in the filesystem route inventory
3. a sitemap URL with no real route
4. a sitemap URL on the wrong host
5. a sitemap URL with inconsistent trailing-slash formatting
6. a sitemap URL pointing at a `noindex` page
7. an indexable route missing from the sitemap and not allowlisted
8. a `noindex` route present in the sitemap
9. an allowlist entry with no `reason`
10. missing or stale build output
11. a duplicate sitemap entry
12. a stale allowlist entry naming a route that no longer exists

**Indexability is read, never inferred** — from `<meta name="robots">` in the
rendered HTML.

---

## Internal-link validation rules

`scripts/validate-links.mjs` scans **built HTML**, not source.

### Why rendered output is the primary substrate

`components/Footer.tsx` builds 16 links by mapping over a data array. A
source-level scanner either misses these or has to evaluate JavaScript. Rendered
HTML has them already resolved. This is not hypothetical — a source-level scan
of this repository previously produced three false positives for exactly this
reason.

Source is consulted **only after** a break is found, to locate the authoring
site, so the report says `components/Footer.tsx:103` rather than
"42 pages are broken".

### What is checked

- visible `href` values, after `<script>` blocks are stripped
- internal URLs in JSON-LD under `url`, `item`, `mainEntityOfPage`, `contentUrl`

Absolute URLs on `https://www.realestatewithshirin.com` are normalized to local
paths and checked identically to relative ones.

### What is allowed

External URLs · `mailto:` · `tel:` · `sms:` · any non-http(s) scheme ·
protocol-relative `//host` · hash-only links · `/_next/*` · `/robots.txt` ·
`/sitemap.xml` · public assets by extension (images, PDFs, video, fonts,
archives) · anything in the allowlist.

### Grouped reporting

A single shared-navigation defect appears on every page. Findings are grouped by
target so one broken Footer link prints **one** finding naming 42 affected pages
and the shared source line — not 42 identical errors.

---

## Allowlist structure

`config/verify-allowlist.mjs`. Every entry requires a non-empty `reason`; the
validators fail on entries that lack one, because an undocumented exemption is
indistinguishable from a defect someone quietly suppressed.

| Export | Purpose |
|---|---|
| `sitemapExclusions` | indexable routes deliberately absent from the sitemap |
| `allowedNonRoutePaths` | real link targets that are not `page.tsx` routes (`/sitemap.xml`, `/robots.txt`) |
| `allowedQueryParams` | permitted query parameters (currently empty) |
| `allowedAssetPaths` | extensionless files served from `public/` (currently empty) |

Current content is one entry: **`/videos`** — noindex because `lib/videos.ts`
exports an empty array. The reason string records how to reverse it.

---

## False-positive protections

Each of these was measured against this repository's actual build output.

| Risk | Protection | Noise suppressed |
|---|---|---|
| RSC flight data | `stripScripts()` before any visible-HTML scan | **1,434** `$undefined` sentinels |
| Framework assets | `/_next/*` excluded structurally | **84** `href="/_next/…"` |
| External schema refs | only this site's host is resolved | **669** external schema URLs |
| Framework pages | `_not-found`, `_global-error` excluded by name | 2 pages |
| Escaped entities | `decodeEntities()` before comparison | `&amp;` `&#x27;` `&quot;` |
| Hash fragments | stripped before resolution | in-page anchors |
| Query strings | stripped before resolution | — |
| Assets and PDFs | extension allowlist | — |
| noindex routes | read from rendered `<meta name="robots">` | `/videos` |
| Source-locator prefix matches | all locator needles are quote-terminated | `/blog` no longer matches `/blog/video-authority-…` |

Without the first three guards this validator would report over 2,000 phantom
findings on a clean tree.

---

## Stale-build behavior

Every Phase 1B-1 check reads built output, so running against a stale `.next`
gives confidently wrong answers. Both validators fail before doing any work if:

- `.next/server/app` is absent
- `.next/server/app/sitemap.xml.body` is absent (routes validator)
- the newest file under `app/`, `components/`, or `lib/` is newer than the
  build artifact

The failure message is explicit:

```
🔴 Built output may be stale. Run npm run build first.
     newest source : app/page.tsx
     build artifact: .next/server/app/sitemap.xml.body
```

---

## Commands

```bash
npm run validate:routes   # route inventory ↔ built output ↔ sitemap
npm run validate:links    # rendered internal links + schema URLs

npm run verify:build      # both of the above (requires a build first)
npm run verify            # check → build → verify:build   (full gate)

npm run check             # UNCHANGED — fast source gate
npm run build             # UNCHANGED — still triggers the postbuild schema audit
```

### What Phase 1B-1 deliberately does not change

- **`npm run check`** stays as it is. Every 1B-1 check needs built HTML; folding
  them in would force a full build into the fast source gate and destroy its
  purpose.
- **`postbuild`** is unchanged. Wiring `verify:build` into it is a Phase 1B-3
  decision, made only once these checks have been observed quiet.
- **`.githooks/pre-commit`** is unchanged. It runs `npm run build`, so it will
  inherit these checks automatically the moment `postbuild` is extended — no
  hook edit will be needed then either.

Runtimes: `validate:routes` ~0.2 s, `validate:links` ~0.7 s.

---

## Controlled failure tests

Every validator was proven to fail on a deliberate defect, which was then
reverted and confirmed absent from `git diff`.

| Test | Defect | Result |
|---|---|---|
| A | sitemap URL `/does-not-exist-kodecite-test` | ✅ failed, named the URL and missing route |
| B | indexable page `app/kodecite-route-test/page.tsx` absent from sitemap | ✅ failed, named the route |
| C | **negative control** — noindex page absent from sitemap | ✅ correctly *not* reported; listed as intentional |
| D | `<Link href="/blog">` in an article | ✅ failed: target, page, `visible-html`, exact source line |
| E | Footer data-array href → `/areas/nonexistent-kodecite-test` | ✅ failed, grouped 42 pages, named `Footer.tsx:103` |
| F | BreadcrumbList `item` → `/articles-old-kodecite-test` | ✅ failed, classified `schema`, exact source line |
| G | **negative control** — clean tree | ✅ 0 findings despite 1,434 + 84 + 669 suppressed candidates |
| — | stale build (`touch app/page.tsx`) | ✅ both validators failed with the stale message |
| — | missing `sitemap.xml.body` | ✅ failed with the missing-artifact message |

Test D also exposed a real defect in the validator's own source locator: an
unterminated needle matched `/blog` inside `/blog/video-authority-layer-…`,
burying the true location. All locator needles are now quote-terminated.

---

## Known coverage limitation

**Links rendered only behind client state are invisible to this validator.**

`components/Navigation.tsx` is a `'use client'` component whose `areas` array
renders inside `{areasOpen && (…)}`. Because the dropdown is closed in the
server-rendered HTML, those five area links appear in **zero** built HTML files.
Breaking one is not detected.

This was found by running Test E against `Navigation.tsx` first: the injected
break produced no finding, and the href appeared in 0 of 42 built pages. The
test was then run against `components/Footer.tsx`, whose links render
unconditionally, where it was detected correctly.

Footer already links all five area pages unconditionally, so every area route is
covered in practice today. But the gap is real and belongs to a later phase —
detecting it properly needs either a source-level companion check for
client-component link arrays or a browser-driven crawl, and browser tooling is
explicitly out of scope until Phase 5.

---

## What this phase does not yet check

Phase 1B-1 does **not** enforce any of the following:

| Not checked | Planned |
|---|---|
| Canonical correctness, uniqueness, host | 1B-2 |
| Title and description presence or uniqueness | 1B-2 |
| Open Graph image coverage | 1B-2 |
| `ImageObject` dimensions vs the real file | 1B-2 |
| Redirect registry, loops, chains, targets | 1B-3 |
| `lastModified` provenance in the sitemap | later |
| HTTP status of any URL, `og:image` returning 200 | Phase 3 |
| Schema.org type/property validity, Rich Results | Phase 4 |
| Accessibility | Phase 5 |
| Lighthouse / performance budgets | Phase 5 |
| Browser and end-to-end tests | Phase 5 |
| CI, branch protection, pre-push | Phase 6 |

Also not added in this phase, by instruction: Playwright, Lighthouse, axe, HTML
validation, CI, external link crawling, and any new npm dependency. Both
validators and the shared module use Node built-ins only.
