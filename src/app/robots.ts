import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Remove trailing slash if present
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://phakkaycamping.com'
  ).replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
