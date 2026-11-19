import type { Metadata } from 'next'
import { BASE_URL, BRAND_NAME } from './schema-ids'

const previewHost = process.env.VERCEL_ENV === 'preview'
  ? process.env.VERCEL_BRANCH_URL || process.env.VERCEL_URL
  : undefined
const shareOrigin = previewHost ? `https://${previewHost}` : BASE_URL

export const riverfrontCard = {
  path: '/images/share/riverfront-63908f347f.jpg',
  alt: 'Riverfront homes and docks reflected in still water beneath pine-covered hills in North Idaho',
}

export const lakeHouseCard = {
  path: '/images/share/lake-house-1604c7e6df.jpg',
  alt: 'A contemporary lakeside home overlooking the water and pine-covered hills at sunset',
}

export function shareImage(card: typeof riverfrontCard) {
  return { url: shareOrigin + card.path, width: 1200, height: 630, type: 'image/jpeg', alt: card.alt }
}

export function heroMetadata(path: string, title: string, description: string, card: typeof riverfrontCard): Metadata {
  const image = shareImage(card)
  return {
    title,
    description,
    alternates: { canonical: BASE_URL + path },
    openGraph: {
      title, description, url: shareOrigin + path, siteName: BRAND_NAME,
      type: 'website', locale: 'en_US', images: [image],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  }
}
