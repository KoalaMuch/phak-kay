import createMiddleware from 'next-intl/middleware';

// Define locales here as middleware runs outside bundler context
const locales = ['en', 'th'] as const;
const defaultLocale = 'th';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Don't add locale prefix for default locale (Thai)
  localePrefix: 'as-needed',
});

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Static files
  // - Internal Next.js paths
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
