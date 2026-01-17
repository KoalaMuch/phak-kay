'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      data-component="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/background.jpg"
          alt="Phakkay Camping Resort"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          unoptimized
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-hero-overlay" />
        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-4xl"
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cream-200 sm:text-base"
          >
            {t('tagline')}
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-4 font-display text-5xl font-bold text-cream-50 sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ fontSize: 'var(--font-size-hero)' }}
          >
            {t('title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-6 font-display text-xl text-cream-100 sm:text-2xl md:text-3xl"
          >
            {t('subtitle')}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mx-auto mb-10 max-w-2xl text-base text-cream-200 sm:text-lg"
          >
            {t('description')}
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#highlights"
              className="btn-primary group bg-cream-50 text-primary-800 hover:bg-cream-100"
            >
              {t('cta')}
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
            <a
              href="#gallery"
              className="btn-secondary border-cream-200 text-cream-100 hover:bg-cream-50 hover:text-primary-800"
            >
              {t('ctaSecondary')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
