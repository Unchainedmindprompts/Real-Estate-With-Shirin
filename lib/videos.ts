// Single source of truth for Shirin's videos.
// Each entry produces:
//   - a watch page at /videos/<slug>
//   - a card on /videos
//   - a VideoObject JSON-LD block that makes realestatewithshirin.com the canonical source
// To add a new video: add an object to this array. That's it.

export type Video = {
  slug: string
  title: string
  description: string
  // Where the video is actually hosted (YouTube share URL, Vimeo URL, etc.) — this becomes contentUrl in schema
  contentUrl: string
  // The embeddable iframe URL (YouTube /embed/, Vimeo /video/, etc.) — used by the on-page player
  embedUrl: string
  // Thumbnail path. Default: /public/images/videos/<slug>.jpg (drop file there and it Just Works)
  thumbnail: string
  // ISO 8601 date the video was published
  publishedAt: string
  // ISO 8601 duration, e.g. "PT2M30S" for 2 min 30 sec
  duration: string
  // Plain-text transcript or detailed summary. Required — this is what makes the page meaningful to AI engines + accessible.
  transcript: string
}

export const videos: Video[] = [
  {
    slug: 'welcome-to-north-idaho',
    title: 'Welcome to North Idaho — A Quick Introduction',
    description:
      "A short introduction from Shirin Abplanalp on what makes North Idaho a place worth considering, who she helps, and what to expect from working with her.",
    contentUrl: 'https://www.youtube.com/watch?v=PLACEHOLDER',
    embedUrl: 'https://www.youtube-nocookie.com/embed/PLACEHOLDER',
    thumbnail: '/images/videos/welcome-to-north-idaho.jpg',
    publishedAt: '2026-06-01',
    duration: 'PT1M30S',
    transcript:
      "Hi, I'm Shirin Abplanalp. I'm a licensed REALTOR with Berkshire Hathaway HomeServices Jacklin Real Estate in Coeur d'Alene, Idaho. I made the move to North Idaho from Bend, Oregon a few years ago, and I help buyers, sellers, and relocating families navigate this region. If you're considering a move, or just want a real conversation about whether North Idaho is right for you, I'd love to talk. (Placeholder transcript — replace with the real transcript when this video is recorded.)",
  },
]

export function getVideoBySlug(slug: string): Video | undefined {
  return videos.find((v) => v.slug === slug)
}
