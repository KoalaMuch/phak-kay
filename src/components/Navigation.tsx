'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#highlights', key: 'highlights' },
  { href: '#gallery', key: 'gallery' },
  { href: '#rooms', key: 'rooms' },
  { href: '#benefits', key: 'benefits' },
  { href: '#location', key: 'location' },
  { href: '#contact', key: 'contact' },
] as const;

export function Navigation() {
  const t = useTranslations('nav');
  const tLang = useTranslations('language');
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const targetLocale = locale === 'th' ? 'en' : 'th';

  return (
    <motion.header
      data-component="navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-cream-50/95 py-3 shadow-luxury backdrop-blur-md'
          : 'bg-transparent py-6'
      )}
    >
      <nav className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span
            className={cn(
              'font-display text-xl font-semibold transition-colors duration-300 sm:text-2xl',
              isScrolled ? 'text-primary-800' : 'text-cream-50'
            )}
          >
            {locale === 'th' ? 'พักกาย' : 'Phakkay'}
          </span>
          <span
            className={cn(
              'hidden text-sm font-light transition-colors duration-300 sm:inline',
              isScrolled ? 'text-primary-600' : 'text-cream-200'
            )}
          >
            Camping
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors duration-300 hover:opacity-80',
                isScrolled ? 'text-primary-700' : 'text-cream-100'
              )}
            >
              {t(item.key)}
            </a>
          ))}
          <Link
            href="/"
            locale={targetLocale}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300',
              isScrolled
                ? 'border-primary-300 text-primary-700 hover:bg-primary-100'
                : 'border-cream-300/50 text-cream-100 hover:bg-cream-50/10'
            )}
          >
            {tLang('switch')}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            'flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden',
            isScrolled ? 'text-primary-700' : 'text-cream-50'
          )}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 6 : 0,
            }}
            className="h-0.5 w-6 bg-current"
          />
          <motion.span
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            className="h-0.5 w-6 bg-current"
          />
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -6 : 0,
            }}
            className="h-0.5 w-6 bg-current"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-cream-50/98 overflow-hidden backdrop-blur-lg md:hidden"
          >
            <div className="section-container flex flex-col gap-4 py-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-primary-700"
                >
                  {t(item.key)}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <Link
                  href="/"
                  locale={targetLocale}
                  className="inline-block rounded-full border border-primary-300 px-4 py-2 text-sm font-medium text-primary-700"
                >
                  {tLang('switch')}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
