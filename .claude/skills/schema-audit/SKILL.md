---
description: The entity-graph standard for this repo. Read before editing any JSON-LD, adding a new page schema, or changing anything under lib/schema-ids.ts. Explains the 4 rules the automated gate enforces, the two accepted exceptions, and how to fix common audit failures.
---

# Schema audit — the standing rules

Every page on this site emits JSON-LD. Search engines and AI answer engines walk that graph by `@id`, resolve entities across pages, and rank on how coherent and non-conflicting the whole graph is. This repo self-gates the graph via `scripts/audit-schema-ids.mjs`, wired as a `postbuild` step and a pre-commit hook.

**If the audit fails, the build fails and the commit is blocked.** That's on purpose.

---

## The four rules

### Rule 1 — Scalars reference constants

If a value belongs to a shared identity (phone, email, portrait URL, brokerage address, canonical `@id`, Wikipedia sameAs), it lives in `lib/schema-ids.ts` and is imported everywhere it appears. Never hardcode a value a constant already owns.

**Why:** the drift problem. If `#business.telephone` and `#agent.telephone` are both literal strings, one can silently change without the other. Sourcing both from a single `PHONE` constant makes drift impossible.

**Concrete list (extend the constants file as the graph grows):**
- `BASE_URL`, `BUSINESS_ID`, `AGENT_ID`, `WEBSITE_ID`, `ORGANIZATION_ID`
- `AGENT_NAME`, `BRAND_NAME`, `BROKERAGE_NAME`, `LICENSE_NUMBER`
- `PHONE`, `EMAIL`, `AGENT_IMAGE`, `BROKERAGE_PHONE`, `BROKERAGE_ADDRESS`
- `AGENT_AUTHOR_STUB`, `BRAND_PUBLISHER_STUB`, `BROKERAGE_STUB`
- `PLACE_ID`, `PLACE`, `placeStub()`, `MARKET_AREA_SERVED`
- `CITY_SAMEAS`, `COUNTY_SAMEAS`, `REGION_SAMEAS`, `STATE_SAMEAS` (Wikipedia URIs)

**Anti-pattern:**
```ts
telephone: '+1-208-660-7468',        // ← drift risk
```

**Correct:**
```ts
import { PHONE } from '@/lib/schema-ids'
telephone: PHONE,
```

### Rule 2 — Each canonical `@id` is defined exactly once

Canonical entities (`#business`, `#agent`, `#website`, `/articles`) are declared in exactly one place. Everywhere else references them by `@id`:

```ts
author: { '@id': AGENT_ID },
publisher: { '@id': BUSINESS_ID },
isPartOf: { '@id': WEBSITE_ID },
```

Not this:

```ts
// ❌ full redeclaration on every article — drift + duplicate-@id corruption
author: {
  '@type': 'Person',
  '@id': AGENT_ID,
  name: 'Shirin Abplanalp',
  jobTitle: 'Licensed REALTOR®',
  hasCredential: [ /* long block */ ],
},
```

**Where each canonical entity lives:**
| `@id` | Defined in |
|---|---|
| `#business` (Organization — brand "Real Estate With Shirin") | `app/page.tsx` |
| `#agent` (Person — Shirin Abplanalp) | `app/page.tsx` |
| `#website` (WebSite) | `app/page.tsx` |
| `/articles` (CollectionPage) | `app/articles/page.tsx` |
| city/county Place IDs | matching `app/areas/*/page.tsx` |
| `#place-north-idaho`, `#place-idaho` | `app/page.tsx` |
| `#organization` (BHHS Jacklin brokerage) | External (jacklinrealestate.com) — allowed as unresolved cross-domain ref |

Do not collapse brand, person, and brokerage. Career facts belong on `#agent`. Brokerage affiliation is `worksFor` / `memberOf`, not "the brand is the brokerage."

The audit script treats a node as a "definition" if it has `@type` + `@id` + any substantive property beyond those. A bare `{@id}` reference does not count as a definition.

### Rule 3 — sameAs: one URL, one entity

`sameAs` is an *identity-equivalence* link ("this URL is another representation of this entity"). Each profile URL lives on exactly ONE entity. Never on both.

**Business listings** (a business/brand page as the entity):
- Google Business Profile CID URL
- Yelp business listing
- BBB business record
- Facebook brand Page
- Instagram brand account

→ `#business` sameAs.

**Personal / agent profiles** (a person / individual agent as the entity):
- Zillow agent profile
- Realtor.com agent profile
- Homes.com, Realty.com agent listings
- Brokerage agent-of-record profile
- LinkedIn personal profile (`/in/…`)
- REALTOR association member directory

→ `#agent` sameAs.

**Decision test for a Facebook/Instagram/LinkedIn URL:** is the account a *Page* (business) or a *Profile* (personal)? URL structure often gives it away (`/company/…` vs `/in/…` on LinkedIn). If it's ambiguous, ask the owner — don't guess.

Rule 3 governs `sameAs` *only*. Contact facts (`telephone`, `email`, `address`) are not identity links — see Rule 1 for how those get de-duplicated (via constants).

### Rule 4 — Type an entity as what it IS

A human is `@type: 'Person'`. Profession is expressed via `jobTitle` and `hasCredential` (or `hasOccupation` for stricter modeling). **A person is never `@type: 'RealEstateAgent'` at the top level** — RealEstateAgent is a LocalBusiness subtype, and typing a human as a business is category confusion.

The `#agent` node has ONLY these kinds of properties: `name`, `jobTitle`, `telephone`, `email`, `url`, `image`, `address` (optional if not covered by `worksFor`), `worksFor`, `affiliation`, `memberOf`, `hasCredential`, `knowsAbout`, `sameAs`.

**Business-only properties that must never appear on a Person:**
- `areaServed`
- `aggregateRating`
- `priceRange`
- `openingHours`
- `hasMenu`, `paymentAccepted`, `currenciesAccepted`, etc.

If you find yourself wanting to attach one of these to `#agent`, the property belongs on `#business` — not the Person.

---

## Accepted exceptions

Both exceptions require ONE literal `@id`+`@type` source that everything else spreads/references. If either exception introduces a new hardcoded scalar or a new "second source of truth," it violates Rule 1 or Rule 2.

### Exception A — Business NAP-stub + enrichment via spread

Some contexts genuinely need a small NAP-carrying business declaration inside another schema (e.g., a `provider:` field on a Service that the schema.org spec expects to carry business details). Rather than redeclaring the full `#business` and inviting drift, keep ONE stub literal and spread it:

```ts
// lib/business-stub.ts (or extend lib/schema-ids.ts)
import { BUSINESS_ID, PHONE, EMAIL } from '@/lib/schema-ids'

export const BUSINESS_NAP_STUB = {
  '@type': 'Organization',
  '@id': BUSINESS_ID,
  name: BRAND_NAME,
  telephone: PHONE,
  email: EMAIL,
} as const
```

Then any context that needs it:

```ts
provider: { ...BUSINESS_NAP_STUB, areaServed: { '@type': 'City', name: 'Post Falls' } },
```

Rule: no page invents its own version of these properties. The stub is the single source; enrichment happens by spread + adding page-local properties on top.

Prefer a bare `{ '@id': BUSINESS_ID }` reference when the surrounding schema tolerates it. Reach for the stub only when the consumer or spec needs more than a bare ref.

### Exception B — Name-only Person stub for single-page AI consumers

Some AI crawlers read a single page in isolation and don't chase cross-page `@id` references. To keep author attribution legible in that scenario, allow a minimal stub:

```ts
import { AGENT_ID, AGENT_NAME } from '@/lib/schema-ids'

author: { '@type': 'Person', '@id': AGENT_ID, name: AGENT_NAME },
```

Rule: the `name` value MUST come from a constant (`AGENT_NAME`), not a hardcoded string. Otherwise you've just recreated the drift problem this doc exists to prevent.

Articles and other single-page consumers **must** use this stub for `author` and the matching `BRAND_PUBLISHER_STUB` for `publisher`. A bare `{ '@id' }` is not enough — Google and AI crawlers read one URL at a time. The name value MUST come from `AGENT_NAME` / `BRAND_NAME`. The auditor treats these stubs as references, not competing definitions.

---

## The `mainEntityOfPage` rule

`Article` / `BlogPosting` schemas commonly use `mainEntityOfPage`. **It is a plain URL string, or a `@id` reference to a real `WebPage` node defined on that page.** It is never a `{@type: WebPage, @id: URL}` inline stub with no corresponding definition — that's the exact dangling-ref pattern the audit catches.

**Correct — plain URL string** (best for Article/BlogPosting where the article *is* the page's main content):

```ts
mainEntityOfPage: 'https://www.realestatewithshirin.com/articles/foo',
```

**Correct — real WebPage node** (best for pages where the Service or WebPage is distinct from the article content, like the area pages):

```ts
const jsonLdWebPage = {
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': BUSINESS_ID },
  mainEntity: { '@id': `${PAGE_URL}#service` },
  breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
  // …other substantive props
}
```

**Anti-pattern — dangling ref**:

```ts
// ❌ audit will fail: no substantive definition backs this URL as a WebPage
mainEntityOfPage: {
  '@type': 'WebPage',
  '@id': 'https://www.realestatewithshirin.com/articles/foo',
},
```

### Never tune the auditor to hide a dangling ref

If the audit flags a dangling `@id`, the fix is in the schema — either provide a real definition or use a plain URL string. Do not "normalize" URL `@id`s in the auditor to make the warning disappear. That inverts the whole point of the gate: it stops catching real defects.

---

## How the gate is wired

- `scripts/audit-schema-ids.mjs` — parses every `<script type="application/ld+json">` block in `.next/server/app/**/*.html`, indexes `@id` definitions vs. references, exits 1 on any duplicate definition or dangling reference.
- `package.json` `postbuild` — runs the audit automatically after `next build`. If it fails, `npm run build` fails.
- `.githooks/pre-commit` — runs `npm run build` (which includes `postbuild` audit). Blocks the commit on failure.
- `package.json` `prepare` — on `npm install`, points git at `.githooks/`. Fresh clones activate the hook automatically.
- `npm run audit:schema` — run the audit standalone (assumes `.next/server/app/` is up to date).

Emergency bypass: `git commit --no-verify`. Use only when you've verified another gate covered the schema (e.g., a CI check downstream). Do not push to production with `--no-verify` if the audit was skipped.

---

## Fixing common audit failures

### Duplicate `@id` definition

Audit reports:
```
Nx  https://www.realestatewithshirin.com/#business  🔴 DUPLICATE
     app/page.tsx (@type: [...])
     app/some/other-page.tsx (@type: Organization)
```

Fix: on the other page, collapse the block to a bare `{ '@id': BUSINESS_ID }` reference. Do not delete the canonical on `app/page.tsx`.

### Dangling `@id` reference

Audit reports:
```
🔴 DANGLING: https://.../some-url
     referenced from .next/server/app/…
```

Fix: either
1. Make the reference a plain URL string (if it's `url:`, `mainEntityOfPage:`, etc. and a string is valid there), or
2. Define a substantive node with that `@id` somewhere (`@type` + substantive properties beyond `@id`).

Do not modify the audit script to accept the dangling ref.

### External domain "dangling" (expected)

Audit reports:
```
🟡 external (expected): https://www.jacklinrealestate.com/#organization
```

This is fine. The brokerage `@id` is defined on their site, not ours. The auditor recognizes off-site anchors and reports them as expected rather than failing.
