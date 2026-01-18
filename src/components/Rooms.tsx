'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { ROOM_TYPES, EXTRA_BED_PRICING } from '@/lib/utils';

type RoomKey = 'nordic' | 'japanese' | 'aShape';

const roomIcons: Record<RoomKey, React.ReactNode> = {
  nordic: (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  ),
  japanese: (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  ),
  aShape: (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 21h18M12 3L3 21h18L12 3z"
      />
    </svg>
  ),
};

const roomColors: Record<RoomKey, string> = {
  nordic: 'bg-primary-100 text-primary-700',
  japanese: 'bg-accent-100 text-accent-700',
  aShape: 'bg-river-100 text-river-700',
};

function RoomCard({
  roomKey,
  image,
  capacity,
  price,
  extraBedAvailable,
  index,
  isReversed,
}: {
  roomKey: RoomKey;
  image: string;
  capacity: number;
  price: number;
  extraBedAvailable?: boolean;
  index: number;
  isReversed: boolean;
}) {
  const t = useTranslations('rooms');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = t.raw(`types.${roomKey}.features`) as string[];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className={cn(
        'grid gap-8 lg:grid-cols-2 lg:gap-12',
        isReversed && 'lg:grid-flow-dense'
      )}
    >
      {/* Image */}
      <div
        className={cn(
          'group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-luxury',
          isReversed && 'lg:col-start-2'
        )}
      >
        <Image
          src={image}
          alt={t(`types.${roomKey}.title`)}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={75}
        />
        {/* Price Badge */}
        <div className="absolute left-4 top-4 rounded-full bg-primary-700 px-4 py-2 shadow-lg">
          <span className="text-lg font-bold text-cream-50">
            ฿{price.toLocaleString()}
          </span>
          <span className="ml-1 text-sm text-cream-200">
            /{t('priceLabel')}
          </span>
        </div>
        {/* Capacity Badge */}
        <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 backdrop-blur-sm">
          <svg
            className="h-5 w-5 text-primary-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="text-sm font-medium text-primary-800">
            {t('capacity', { count: capacity })}
          </span>
        </div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div
        className={cn(
          'flex flex-col justify-center',
          isReversed && 'lg:col-start-1 lg:row-start-1'
        )}
      >
        <div className="mb-4 inline-flex items-center gap-2">
          {/* Room type icon */}
          <div
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full',
              roomColors[roomKey]
            )}
          >
            {roomIcons[roomKey]}
          </div>
        </div>

        <h3 className="mb-4 font-display text-2xl font-bold text-primary-800 sm:text-3xl">
          {t(`types.${roomKey}.title`)}
        </h3>

        <p className="mb-6 leading-relaxed text-primary-600">
          {t(`types.${roomKey}.description`)}
        </p>

        {/* Extra Bed Info - only for Japanese room */}
        {extraBedAvailable && (
          <div className="mb-6 rounded-xl border border-accent-200 bg-accent-50 p-4">
            <h4 className="mb-2 flex items-center gap-2 font-semibold text-accent-700">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              {t('extraBed.title')}
            </h4>
            <div className="space-y-1 text-sm text-accent-600">
              <p>{t('extraBed.priceKid')}</p>
              <p>{t('extraBed.priceAdult')}</p>
            </div>
          </div>
        )}

        {/* Features List */}
        <div className="grid grid-cols-2 gap-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-sm text-primary-700"
            >
              <svg
                className="h-4 w-4 flex-shrink-0 text-accent-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function PromotionBanner() {
  const t = useTranslations('rooms.promotion');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-12 max-w-3xl overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-1 shadow-xl"
    >
      <div className="rounded-xl bg-white/95 px-6 py-5 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          {/* Fire icon */}
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-2xl shadow-lg">
            🍖
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary-800">{t('title')}</h3>
            <p className="text-lg text-primary-600">{t('description')}</p>
            <p className="mt-1 text-sm font-medium text-orange-600">
              {t('validUntil')}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Rooms() {
  const t = useTranslations('rooms');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Mark EXTRA_BED_PRICING as used (for future expansion)
  void EXTRA_BED_PRICING;

  return (
    <section
      id="rooms"
      data-component="rooms"
      className="section-padding bg-cream-100/50"
    >
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
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

        {/* Promotion Banner */}
        <PromotionBanner />

        {/* Room Cards */}
        <div className="space-y-16 lg:space-y-24">
          {ROOM_TYPES.map((room, index) => (
            <RoomCard
              key={room.key}
              roomKey={room.key}
              image={room.image}
              capacity={room.capacity}
              price={room.price}
              extraBedAvailable={room.extraBedAvailable}
              index={index}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
