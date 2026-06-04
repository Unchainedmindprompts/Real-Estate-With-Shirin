// Single source of truth for Shirin's videos.
//
// To add a video:
//   1. Add an object to the `videos` array below
//   2. Drop the thumbnail image at /public/images/videos/<filename>.jpg
//
// Each entry produces a VideoObject JSON-LD block on /videos with @id keyed to
// the page URL + #slug — that makes realestatewithshirin.com the canonical
// source for the video (not YouTube/Vimeo/etc).
//
// The schema wires into the existing entity graph by reference:
//   creator/author → #agent (Shirin Person)
//   publisher     → #business (Real Estate With Shirin)
//   isPartOf      → /videos#collection (the page itself)

export type Video = {
  slug: string                  // url anchor, e.g. "welcome-to-north-idaho"
  title: string
  description: string
  contentUrl: string            // canonical hosted URL (e.g. https://www.youtube.com/watch?v=xxxxx)
  embedUrl: string              // iframe URL (e.g. https://www.youtube-nocookie.com/embed/xxxxx)
  thumbnail: string             // path under /public (e.g. /images/videos/welcome.jpg)
  publishedAt: string           // ISO 8601 date — YYYY-MM-DD
  duration: string              // ISO 8601 duration — PT<H>H<M>M<S>S, e.g. PT2M30S
  transcript: string            // visible transcript or detailed summary — required
}

export const videos: Video[] = [
  // No videos yet. Add entries here when ready.
]

export function getVideoBySlug(slug: string): Video | undefined {
  return videos.find((v) => v.slug === slug)
}
