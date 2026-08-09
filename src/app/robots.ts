import { MetadataRoute } from 'next'
import { BUSINESS } from '@/lib/constants'

// Required for Next.js static export (output: 'export')
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${BUSINESS.domain}/sitemap.xml`,
  }
}
