import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.realestatewithshirin.com'
  const currentDate = new Date().toISOString()

  const articlesDir = path.join(process.cwd(), 'app', 'articles')
  const articleEntries: MetadataRoute.Sitemap = fs
    .readdirSync(articlesDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && fs.existsSync(path.join(articlesDir, entry.name, 'page.tsx')))
    .map(entry => ({
      url: `${baseUrl}/articles/${entry.name}`,
      lastModified: fs.statSync(path.join(articlesDir, entry.name, 'page.tsx')).mtime.toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  return [
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/buyers`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/sellers`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/areas`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/areas/post-falls-idaho`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/areas/coeur-dalene-idaho`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/areas/hayden-idaho`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/relocating-to-north-idaho`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/articles`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    ...articleEntries,
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
