'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tLang = useTranslations('language');
  const locale = useLocale();

  const navItems = [
    { href: '#highlights', key: 'highlights' },
    { href: '#gallery', key: 'gallery' },
    { href: '#rooms', key: 'rooms' },
    { href: '#benefits', key: 'benefits' },
    { href: '#location', key: 'location' },
    { href: '#contact', key: 'contact' },
  ];

  const localePath = locale === 'th' ? '/en' : '/';

  return (
    <footer data-component="footer" className="bg-primary-950 py-12">
      <div className="section-container">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-2 font-display text-2xl font-bold text-cream-50">
              {locale === 'th' ? 'พักกาย แคมป์ปิ้ง' : 'Phakkay Camping'}
            </h3>
            <p className="text-sm text-cream-300">{t('tagline')}</p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-4 md:justify-center">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm text-cream-300 transition-colors hover:text-cream-100"
              >
                {tNav(item.key)}
              </a>
            ))}
          </div>

          {/* Language */}
          <div className="md:text-right">
            <Link
              href={localePath}
              className="border-cream-700 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-cream-300 transition-colors hover:border-cream-500 hover:text-cream-100"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              {tLang('switch')}
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-cream-800 border-t pt-8 text-center">
          <p className="text-sm text-cream-500">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
