import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'th'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'th';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
