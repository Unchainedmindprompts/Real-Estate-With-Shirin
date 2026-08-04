# Kodecite Verification Harness — Phase 1A

Fast **source-level** verification baseline. Runs in seconds, before any build.

Phase 1A deliberately covers only what can be checked by reading source files.
Everything requiring a build, a rendered page, or a browser is out of scope and
is listed under [What this phase does NOT check](#what-this-phase-does-not-check).

---

## What was added

### Scripts (`package.json`)

| Script | Runs | Purpose |
|---|---|---|
| `typecheck` | `tsc --noEmit` | Type errors. Was configured but never invoked by anything. |
| `validate:source` | `node scripts/validate-source-assets.mjs` | Missing local images + forbidden placeholders. |
| `check` | `typecheck && lint && validate:source` | The single fast gate. Fails on the first failing step. |

`lint` already existed but was never run by any hook, script, or pipeline.
`check` is the first thing that invokes it.

### `scripts/validate-source-assets.mjs`

Node built-ins only. Reads files; never writes.

Scans `app/`, `components/`, `lib/`, and `data/` or `content/` if they exist.
Ignores `node_modules`, `.next`, `.git`, `public`, `out`, `build`, `coverage`,
`.vercel`, dotfiles, and any non-text extension.

### Node version pin

- `package.json` → `"engines": { "node": "22.x" }`
- `.nvmrc` → `22`

Node was previously unpinned. Verified local runtime is v22.

---

## Which failures it catches

### 1. Missing local image references

Any `/images/...` path in source with no corresponding file under `public/`.

```
🔴 app/articles/example/page.tsx:243
     value: /images/missing-hero.png
     why:   Referenced image does not exist at public/images/missing-hero.png.
            It will 404 for visitors, in og:image previews, and in any schema image field.
```

This class matters disproportionately because one constant is often reused as
the visible hero, the `og:image`, **and** `Article.image`. A single missing file
breaks the page, the social card, and Rich Results eligibility at once — and
`next build` does **not** catch it, because Next never verifies `public/` paths.

**Comment handling:** references inside `//`, `/* */`, and JSX `{/* */}`
comments are ignored — an example path in a comment cannot 404. URL schemes
(`https://`) are explicitly not mistaken for comments. Placeholder checks below
still scan the raw line, because a stray `localhost` URL matters even commented out.

**Template literals:** a path built by interpolation (`` `/images/${SLUG}.png` ``)
cannot be resolved statically and is skipped rather than guessed at. Such a
reference is only caught once it appears literally in source or at build time.

### 2. Forbidden production placeholders

| Token | Why it fails |
|---|---|
| `PASTE_` | Unfilled paste-in placeholder |
| `REPLACE_ME` | Unfilled replacement placeholder |
| `YOUR_` | Unfilled template placeholder |
| `example.com` | Example domain shipping as a real link or identifier |
| `localhost` | Local-only host, breaks in production |
| `127.0.0.1` | Loopback address, breaks in production |
| `blob:` | Session-scoped URL; cannot resolve for another visitor or a crawler |

Each finding prints file path, line number, the offending value, and an explanation.

---

## Commands

```bash
npm run check           # typecheck + lint + validate:source   (the fast gate)

npm run typecheck       # tsc --noEmit
npm run lint            # eslint
npm run validate:source # missing images + forbidden placeholders

npm run build           # unchanged — still triggers the postbuild schema audit
```

---

## Node version requirement

**Node 22.x**, enforced by `engines` in `package.json` and declared in `.nvmrc`.

`engines` is advisory to npm by default (it warns rather than fails) but is read
by Vercel and other CI providers to select the runtime. Strict local enforcement
would require `engine-strict=true` in `.npmrc`, which Phase 1A does not add.

---

## Rendered schema validation is unchanged

`scripts/audit-schema-ids.mjs` was **not modified** in this phase.

It still runs as `postbuild`, so any `npm run build` triggers it, and the
`.githooks/pre-commit` hook still runs a full build. Its checks are untouched:

- duplicate `@id` definitions across pages
- dangling `@id` references
- every page has a page-container node
- every `FAQPage` has `isPartOf`
- every `Article` has `mainEntityOfPage`

Verified after this phase's changes: **134 site-scoped definitions, 67 references,
0 duplicates, 0 dangling, 0 completeness failures** — identical to before.

`validate:source` is intentionally separate and does **not** duplicate it.
Source-level checks run in milliseconds; the schema audit needs built HTML.

---

## What this phase does NOT check

Deliberately out of scope. Each is planned for a later phase.

| Not checked | Phase |
|---|---|
| Sitemap ↔ route consistency | 2 |
| Internal links resolving to real routes | 2 |
| Canonical correctness / self-reference | 2 |
| `lastModified` provenance in the sitemap | 2 |
| Redirect map validation | 2 |
| Orphan pages, crawl reachability, HTTP status | 3 |
| Duplicate titles/descriptions, title length | 3 |
| `og:image` returning HTTP 200 | 3 |
| Schema.org type/property validity | 4 |
| Google Rich Results eligibility | 4 |
| Pre-render schema validation | 4 |
| Accessibility (contrast, focus order, ARIA) | 5 |
| Lighthouse / performance budgets | 5 |
| Browser and end-to-end tests | 5 |
| GitHub Actions, branch protection, pre-push | 6 |

Also not added in this phase, by instruction: Prettier, HTML validation,
Playwright, axe, Lighthouse, CI, link crawling.

---

## Known open item

`app/articles/buying-north-idaho-home-from-out-of-state/page.tsx:243` references
`/images/buying-north-idaho-home-from-out-of-state.png`, which does not exist.
It is referenced as the visible hero, `og:image`, and `Article.image`.

`npm run check` **fails on this and only this** — which is the validator working
as designed. Resolving it requires either supplying the bespoke image or
choosing an existing one; that is a brand decision, not an engineering one, and
was deliberately not made automatically.
