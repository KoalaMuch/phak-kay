import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Remove trailing slash if present
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://phakkaycamping.com'
  ).replace(/\/$/, '');

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/th`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
