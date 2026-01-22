import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bearstreettavern.ca';
  const now = new Date();

  const routes: string[] = [
    '/',
    '/menu',
    '/about',
    '/reservations',
    '/gallery',
    '/contact',
    '/gift-cards',
    '/order-online',
    '/privacy',
    '/terms',
    '/specials',
    '/accessibility',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
