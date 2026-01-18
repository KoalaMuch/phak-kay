'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CONTACT_INFO } from '@/lib/utils';

export function Contact() {
  const t = useTranslations('contact');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      data-component="contact"
      className="section-padding bg-cream-50"
    >
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2
            className="mb-4 font-display text-3xl font-bold text-primary-800 sm:text-4xl md:text-5xl"
            style={{ fontSize: 'var(--font-size-heading)' }}
          >
            {t('title')}
          </h2>
          <div className="decorative-line mb-6" />
          <p className="text-lg text-primary-600">{t('subtitle')}</p>
        </motion.div>

        {/* Booking Methods - Equal Prominence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          <div className="luxury-card bg-gradient-to-br from-primary-50 to-cream-100 p-8">
            <h3 className="mb-8 text-center font-display text-xl font-semibold text-primary-700">
              {t('bookingMethods')}
            </h3>

            {/* Three Booking Options - Equal Size */}
            <div className="grid gap-4 sm:grid-cols-3">
              {/* Phone */}
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, '')}`}
                className="group flex flex-col items-center gap-3 rounded-2xl border-2 border-primary-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400 hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="font-display text-lg font-semibold text-primary-800">
                  {t('phone')}
                </span>
                <span className="text-sm text-primary-600">
                  {CONTACT_INFO.phone}
                </span>
              </a>

              {/* LINE */}
              <a
                href={CONTACT_INFO.line}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 rounded-2xl border-2 border-[#00B900]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00B900] hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00B900]/10 text-[#00B900] transition-colors group-hover:bg-[#00B900] group-hover:text-white">
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                </div>
                <span className="font-display text-lg font-semibold text-primary-800">
                  {t('social.line')}
                </span>
                <span className="text-sm text-primary-600">
                  @phakkaycamping
                </span>
              </a>

              {/* Facebook */}
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 rounded-2xl border-2 border-[#1877F2]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1877F2] hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1877F2]/10 text-[#1877F2] transition-colors group-hover:bg-[#1877F2] group-hover:text-white">
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span className="font-display text-lg font-semibold text-primary-800">
                  {t('social.facebook')}
                </span>
                <span className="text-sm text-primary-600">
                  พักกาย แคมป์ปิ้ง
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
