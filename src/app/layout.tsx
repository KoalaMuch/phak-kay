import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://phakkaycamping.com'),
  title: {
    default: 'Phakkay Camping | พักกาย แคมป์ปิ้ง',
    template: '%s | Phakkay Camping',
  },
  description:
    'Peaceful riverside resort in Saraburi, Thailand. Nordic & Japanese style accommodations near Krok Ee Dok Waterfall.',
  keywords: [
    'Phakkay Camping',
    'พักกาย แคมป์ปิ้ง',
    'Saraburi resort',
    'รีสอร์ทสระบุรี',
    'riverside resort',
    'ที่พักริมน้ำ',
    'Nordic style',
    'Japanese style',
    'Krok Ee Dok Waterfall',
    'น้ำตกโกรกอีดก',
  ],
  authors: [{ name: 'Phakkay Camping' }],
  creator: 'Phakkay Camping',
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    alternateLocale: 'en_US',
    url: 'https://phakkaycamping.com',
    siteName: 'Phakkay Camping',
    title: 'Phakkay Camping | พักกาย แคมป์ปิ้ง',
    description:
      'Escape to tranquility at our peaceful riverside resort in Saraburi',
    images: [
      {
        url: '/images/resort_garden_evening.jpg',
        width: 1200,
        height: 630,
        alt: 'Phakkay Camping Resort',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phakkay Camping | พักกาย แคมป์ปิ้ง',
    description:
      'Escape to tranquility at our peaceful riverside resort in Saraburi',
    images: ['/images/resort_garden_evening.jpg'],
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
  verification: {
    // Add Google Search Console verification when available
    // google: 'verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
