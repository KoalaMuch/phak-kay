'use client';

import { useState, useCallback, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  GALLERY_IMAGES,
  GALLERY_CATEGORIES,
  getImagesByCategory,
  type GalleryCategory,
  type GalleryImage,
} from '@/lib/utils';

function Lightbox({
  image,
  onClose,
  onPrev,
  onNext,
}: {
  image: GalleryImage;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const locale = useLocale();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary-950/95 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-cream-100 transition-colors hover:bg-white/20"
        aria-label="Close"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-cream-100 transition-colors hover:bg-white/20"
        aria-label="Previous"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-cream-100 transition-colors hover:bg-white/20"
        aria-label="Next"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt[locale as 'en' | 'th']}
          className="h-auto max-h-[85vh] w-auto object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-950/80 to-transparent p-4">
          <p className="text-center text-cream-100">
            {image.alt[locale as 'en' | 'th']}
          </p>
        </div>
      </div>
    </div>
  );
}

function CategorySection({
  categoryKey,
  images,
  onImageClick,
}: {
  categoryKey: GalleryCategory;
  images: GalleryImage[];
  onImageClick: (_image: GalleryImage) => void;
}) {
  const t = useTranslations('gallery.categories');
  const locale = useLocale();

  if (images.length === 0) return null;

  return (
    <div className="mb-12">
      {/* Category Header */}
      <div className="mb-6 text-center">
        <h3 className="mb-2 font-display text-2xl font-semibold text-primary-800">
          {t(`${categoryKey}.title`)}
        </h3>
        <p className="text-primary-600">{t(`${categoryKey}.description`)}</p>
      </div>

      {/* Category Images Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <div
            key={image.src}
            className="aspect-photo group relative cursor-pointer overflow-hidden rounded-2xl shadow-luxury transition-all duration-500 hover:shadow-xl"
            onClick={() => onImageClick(image)}
          >
            <Image
              src={image.src}
              alt={image.alt[locale as 'en' | 'th']}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="eager"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
              <p className="text-sm font-medium text-cream-100">
                {image.alt[locale as 'en' | 'th']}
              </p>
            </div>
            {/* Zoom icon */}
            <div className="absolute right-3 top-3 rounded-full bg-white/20 p-2 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <svg
                className="h-5 w-5 text-cream-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  const t = useTranslations('gallery');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Get all images in order for lightbox navigation
  const allImages = GALLERY_IMAGES;

  const openLightbox = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  }, []);

  const goToPrev = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = allImages.findIndex(
      (img) => img.src === selectedImage.src
    );
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setSelectedImage(allImages[prevIndex]);
  }, [selectedImage, allImages]);

  const goToNext = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = allImages.findIndex(
      (img) => img.src === selectedImage.src
    );
    const nextIndex = (currentIndex + 1) % allImages.length;
    setSelectedImage(allImages[nextIndex]);
  }, [selectedImage, allImages]);

  return (
    <section
      id="gallery"
      data-component="gallery"
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

        {/* Category Sections */}
        {GALLERY_CATEGORIES.map((category) => {
          const categoryImages = getImagesByCategory(category.key);
          return (
            <CategorySection
              key={category.key}
              categoryKey={category.key}
              images={categoryImages}
              onImageClick={openLightbox}
            />
          );
        })}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}
    </section>
  );
}
