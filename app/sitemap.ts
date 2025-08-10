import { MetadataRoute } from 'next'
import { getServicesPrisma } from '@/data/prismaServicios'
import { getNewsPrisma } from '@/data/prismaNoticias'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://grupomstransporte.com'
  
  // Get dynamic services
  const services = await getServicesPrisma()
  
  // Get published news
  const news = await getNewsPrisma()
  const publishedNews = news.filter(article => article.published)

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/noticias`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
  ]

  // Dynamic service pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/servicios/${service.slug}`,
    lastModified: new Date(service.updateAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Dynamic news pages
  const newsPages = publishedNews.map((article) => ({
    url: `${baseUrl}/noticias/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...servicePages, ...newsPages]
}