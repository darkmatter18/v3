import type { MetadataRoute } from 'next'

// Replace with your actual website URL
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://arkadip.dev' 


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    '',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8, // Make homepage highest priority
  }))

  // 3. Combine and return both arrays
  return staticRoutes
}
