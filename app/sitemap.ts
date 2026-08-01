import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const baseUrl = 'https://www.realestatewithshirin.com'

function gitLastModified(relPath: string): string {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${relPath}"`, {
      encoding: 'utf-8',
      cwd: process.cwd(),
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
    if (out) return new Date(out).toISOString()
  } catch {
    // fall through to mtime fallback
  }
  try {
    return fs.statSync(path.join(process.cwd(), relPath)).mtime.toISOString()
  } catch {
    return new Date().toISOString()
  }
}

function pageLastModified(relPath: string): string {
  try {
    const content = fs.readFileSync(path.join(process.cwd(), relPath), 'utf-8')
    const modMatch = content.match(/dateModified:\s*['"]([^'"]+)['"]/)
    if (modMatch) return new Date(modMatch[1]).toISOString()
    const pubMatch = content.match(/datePublished:\s*['"]([^'"]+)['"]/)
    if (pubMatch) return new Date(pubMatch[1]).toISOString()
  } catch {
    // fall through to git fallback
  }
  return gitLastModified(relPath)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const articlesDir = path.join(process.cwd(), 'app', 'articles')
  const articleEntries: MetadataRoute.Sitemap = fs
    .readdirSync(articlesDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && fs.existsSync(path.join(articlesDir, entry.name, 'page.tsx')))
    .map(entry => ({
      url: `${baseUrl}/articles/${entry.name}`,
      lastModified: pageLastModified(`app/articles/${entry.name}/page.tsx`),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  return [
    { url: baseUrl, lastModified: gitLastModified('app/page.tsx'), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: gitLastModified('app/about/page.tsx'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/buyers`, lastModified: gitLastModified('app/buyers/page.tsx'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/sellers`, lastModified: gitLastModified('app/sellers/page.tsx'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/areas`, lastModified: gitLastModified('app/areas/page.tsx'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/areas/post-falls-idaho`, lastModified: gitLastModified('app/areas/post-falls-idaho/page.tsx'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/areas/coeur-dalene-idaho`, lastModified: gitLastModified('app/areas/coeur-dalene-idaho/page.tsx'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/areas/hayden-idaho`, lastModified: gitLastModified('app/areas/hayden-idaho/page.tsx'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/areas/rathdrum-idaho`, lastModified: gitLastModified('app/areas/rathdrum-idaho/page.tsx'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/areas/sandpoint-idaho`, lastModified: gitLastModified('app/areas/sandpoint-idaho/page.tsx'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/areas/kootenai-county`, lastModified: gitLastModified('app/areas/kootenai-county/page.tsx'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/areas/bonner-county`, lastModified: gitLastModified('app/areas/bonner-county/page.tsx'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/relocating-to-north-idaho`, lastModified: pageLastModified('app/relocating-to-north-idaho/page.tsx'), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/articles`, lastModified: gitLastModified('app/articles/page.tsx'), changeFrequency: 'weekly', priority: 0.7 },
    ...articleEntries,
    // /videos is intentionally omitted while lib/videos.ts is empty — the page is
    // noindex'd until it has real content. Restore this entry (and drop the
    // `robots` block in app/videos/page.tsx) once videos are published.
    { url: `${baseUrl}/contact`, lastModified: gitLastModified('app/contact/page.tsx'), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
