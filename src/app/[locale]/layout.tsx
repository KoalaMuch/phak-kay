import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Playfair_Display, Sarabun } from 'next/font/google';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
});

const sarabun = Sarabun({
  subsets: ['thai', 'latin'],
  display: 'swap',
  variable: '--font-sarabun',
  weight: ['300', '400', '500', '600', '700'],
});

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://phakkaycamping.com';

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: locale === 'th' ? baseUrl : `${baseUrl}/${locale}`,
      languages: {
        th: baseUrl,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: locale === 'th' ? baseUrl : `${baseUrl}/${locale}`,
      siteName: 'Phakkay Camping',
      locale: locale === 'th' ? 'th_TH' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/resort_garden_evening.jpg`,
          width: 1200,
          height: 630,
          alt: 'Phakkay Camping Resort - Riverside Resort in Saraburi',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${baseUrl}/images/resort_garden_evening.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages();
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://phakkaycamping.com';

  // Enhanced JSON-LD with SEO keywords
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': `${baseUrl}/#organization`,
    name: 'Phakkay Camping',
    alternateName: [
      'พักกาย แคมป์ปิ้ง',
      'Pak-khay Camping',
      'ที่พักชะอม',
      'ที่พักสระบุรี',
    ],
    description:
      locale === 'th'
        ? 'ที่พักสระบุรีราคาถูก ที่พักชะอมติดแม่น้ำ รีสอร์ทติดลำธาร สไตล์นอร์ดิกและญี่ปุ่น ใกล้น้ำตกโกรกอีดก'
        : 'Affordable riverside resort in Saraburi, Thailand. Nordic & Japanese style accommodations near Cha Om and Krok Ee Dok Waterfall.',
    image: `${baseUrl}/images/resort_garden_evening.jpg`,
    url: baseUrl,
    telephone: '+66-XX-XXX-XXXX',
    priceRange: '฿฿',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '391 Cha Om',
      addressLocality: 'Kaeng Khoi',
      addressRegion: 'Saraburi',
      postalCode: '18110',
      addressCountry: 'TH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 14.5892,
      longitude: 101.0486,
    },
    starRating: {
      '@type': 'Rating',
      ratingValue: '4',
      bestRating: '5',
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Free Breakfast',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Free WiFi',
        value: true,
      },
      { '@type': 'LocationFeatureSpecification', name: 'Minibar', value: true },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'River View',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Air Conditioning',
        value: true,
      },
    ],
    numberOfRooms: 7,
    checkinTime: '14:00',
    checkoutTime: '12:00',
    petsAllowed: false,
    availableLanguage: ['Thai', 'English'],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 14.5892,
        longitude: 101.0486,
      },
      geoRadius: '50000',
    },
    sameAs: ['#FACEBOOK_PLACEHOLDER', '#LINE_PLACEHOLDER'],
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/#contact`,
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      result: {
        '@type': 'LodgingReservation',
        name: 'Reserve a Room',
      },
    },
  };

  return (
    <html
      lang={locale}
      className={cn(playfair.variable, sarabun.variable, 'scroll-smooth')}
    >
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Leaflet CSS */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-cream-50 font-sans antialiased',
          locale === 'th' && 'font-thai'
        )}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
