'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { ROOM_TYPES } from '@/lib/utils';

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
  index,
  isReversed,
}: {
  roomKey: RoomKey;
  image: string;
  capacity: number;
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
          unoptimized
        />
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

export function Rooms() {
  const t = useTranslations('rooms');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

        {/* Room Cards */}
        <div className="space-y-16 lg:space-y-24">
          {ROOM_TYPES.map((room, index) => (
            <RoomCard
              key={room.key}
              roomKey={room.key}
              image={room.image}
              capacity={room.capacity}
              index={index}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
