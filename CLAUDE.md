@AGENTS.md

# CRITICAL — READ BEFORE TOUCHING ANYTHING

## Hero Image
The hero image on EVERY page is `/images/hero-home.jpeg` — the real lake sunset photo.
DO NOT change it. DO NOT replace it with any other image. DO NOT use `northern-idaho-hero.webp` (that is an AI-generated abstract illustration and is WRONG).

## Deployment Workflow
- I can only push to `claude/` branches — I CANNOT push to Main directly (403 error)
- After every session the user merges the PR to Main and promotes to Production in Vercel
- DO NOT tell the user the site is live until they have done both steps

## Branch State
- Production branch in Vercel: Main
- All work goes on the current `claude/` branch, then PR to Main

## What the live site looks like
- Hero: full-screen lake sunset photo (hero-home.jpeg)
- Nav: "Real Estate With Shirin" in Great Vibes script font
- Colors: gold (#C4842A), dark brown (#1C1A17), cream (#FAFAF8)
