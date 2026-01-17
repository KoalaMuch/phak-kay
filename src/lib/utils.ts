import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Resort coordinates for map
 */
export const RESORT_LOCATION = {
  lat: 14.5892,
  lng: 101.0486,
  address: {
    en: '391 Cha Om, Kaeng Khoi District, Saraburi 18110, Thailand',
    th: '391 ชะอม อำเภอแก่งคอย จังหวัดสระบุรี 18110',
  },
  googleMapsUrl:
    'https://www.google.com/maps/dir//391+%E0%B8%8A%E0%B8%B0%E0%B8%AD%E0%B8%A1+Tambon+Cha+Om,+Kaeng+Khoi+District,+Saraburi+18110',
};

/**
 * Contact information
 */
export const CONTACT_INFO = {
  phone: '+66-XX-XXX-XXXX', // Replace with actual phone number
  email: 'contact@phakkaycamping.com', // Replace with actual email
  line: '#LINE_PLACEHOLDER', // Replace with actual LINE ID or URL
  facebook: '#FACEBOOK_PLACEHOLDER', // Replace with actual Facebook URL
};

/**
 * Gallery categories - content-based structure
 */
export type GalleryCategory =
  | 'all'
  | 'overview'
  | 'japanRoom'
  | 'nordicRoom'
  | 'aShapeRoom'
  | 'river'
  | 'food';

export interface GalleryImage {
  src: string;
  alt: {
    en: string;
    th: string;
  };
  category: GalleryCategory[];
  priority?: boolean;
  blurDataURL?: string;
}

/**
 * Category metadata for gallery sections
 */
export interface CategoryInfo {
  key: GalleryCategory;
  icon: string;
}

export const GALLERY_CATEGORIES: CategoryInfo[] = [
  { key: 'overview', icon: 'overview' },
  { key: 'nordicRoom', icon: 'nordic' },
  { key: 'japanRoom', icon: 'japan' },
  { key: 'aShapeRoom', icon: 'aShape' },
  { key: 'river', icon: 'river' },
  { key: 'food', icon: 'food' },
];

// Blur placeholder - a simple gray blur for all images
const BLUR_PLACEHOLDER =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFERIGITFBUWFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAbEQACAgMBAAAAAAAAAAAAAAABAgARAyExQf/aAAwDAQACEQMRAD8AnaXdLhcLNDmy5ClvyWEuuKA0glSQScDsZNX6KKiKnJuYmHg2bP/Z';

export const GALLERY_IMAGES: GalleryImage[] = [
  // Overview category
  {
    src: '/images/background.jpg',
    alt: {
      en: 'Resort panoramic view',
      th: 'วิวพาโนรามารีสอร์ท',
    },
    category: ['overview'],
    priority: true,
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    src: '/images/resort_garden_evening.jpg',
    alt: {
      en: 'Resort garden at sunset',
      th: 'สวนรีสอร์ทยามพระอาทิตย์ตก',
    },
    category: ['overview'],
    priority: true,
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    src: '/images/resort_garden_night.jpg',
    alt: {
      en: 'Magical night atmosphere',
      th: 'บรรยากาศยามค่ำสุดโรแมนติก',
    },
    category: ['overview'],
    blurDataURL: BLUR_PLACEHOLDER,
  },
  // Nordic Room category
  {
    src: '/images/room-type-nordic-overview.jpg',
    alt: {
      en: 'Nordic-style room overview',
      th: 'ห้องพักสไตล์นอร์ดิก ภาพรวม',
    },
    category: ['nordicRoom'],
    priority: true,
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    src: '/images/room-type-nordic-bedroom-1.jpg',
    alt: {
      en: 'Nordic room - bedroom view 1',
      th: 'ห้องนอนสไตล์นอร์ดิก มุม 1',
    },
    category: ['nordicRoom'],
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    src: '/images/room-type-nordic-bedroom-2.jpg',
    alt: {
      en: 'Nordic room - bedroom view 2',
      th: 'ห้องนอนสไตล์นอร์ดิก มุม 2',
    },
    category: ['nordicRoom'],
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    src: '/images/room-type-nordic-bathroom.jpg',
    alt: {
      en: 'Nordic room - modern bathroom',
      th: 'ห้องน้ำสไตล์นอร์ดิก',
    },
    category: ['nordicRoom'],
    blurDataURL: BLUR_PLACEHOLDER,
  },
  // Japanese Room category
  {
    src: '/images/room-type-japan-bedroom-1.jpg',
    alt: {
      en: 'Japanese room - bedroom view 1',
      th: 'ห้องนอนสไตล์ญี่ปุ่น มุม 1',
    },
    category: ['japanRoom'],
    priority: true,
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    src: '/images/room-type-japan-bedroom-2.jpg',
    alt: {
      en: 'Japanese room - bedroom view 2',
      th: 'ห้องนอนสไตล์ญี่ปุ่น มุม 2',
    },
    category: ['japanRoom'],
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    src: '/images/room-type-japan-bathroom.jpg',
    alt: {
      en: 'Japanese room - bathroom',
      th: 'ห้องน้ำสไตล์ญี่ปุ่น',
    },
    category: ['japanRoom'],
    blurDataURL: BLUR_PLACEHOLDER,
  },
  // A-Shape Room category
  {
    src: '/images/room-type-A-shape-overview.jpg',
    alt: {
      en: 'A-Shape room - exterior view',
      th: 'ห้องพักทรง A - ภายนอก',
    },
    category: ['aShapeRoom'],
    priority: true,
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    src: '/images/room-type-A-shape-full-room.jpg',
    alt: {
      en: 'A-Shape room - full interior',
      th: 'ห้องพักทรง A - ภายในทั้งหมด',
    },
    category: ['aShapeRoom'],
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    src: '/images/room-type-A-shape-bedroom-1st-floor.jpg',
    alt: {
      en: 'A-Shape room - 1st floor bedroom',
      th: 'ห้องนอนชั้น 1 ห้องทรง A',
    },
    category: ['aShapeRoom'],
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    src: '/images/room-type-A-shape-bedroom-2nd-floor.jpg',
    alt: {
      en: 'A-Shape room - 2nd floor loft',
      th: 'ห้องนอนชั้นลอย ห้องทรง A',
    },
    category: ['aShapeRoom'],
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    src: '/images/room-type-A-shape-bathroom.jpg',
    alt: {
      en: 'A-Shape room - bathroom',
      th: 'ห้องน้ำ ห้องทรง A',
    },
    category: ['aShapeRoom'],
    blurDataURL: BLUR_PLACEHOLDER,
  },
  // River category
  {
    src: '/images/river-day.jpg',
    alt: {
      en: 'River view during daytime',
      th: 'วิวลำธารยามกลางวัน',
    },
    category: ['river'],
    priority: true,
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    src: '/images/river-night.jpg',
    alt: {
      en: 'River view at night',
      th: 'วิวลำธารยามค่ำคืน',
    },
    category: ['river'],
    blurDataURL: BLUR_PLACEHOLDER,
  },
  // Food category
  {
    src: '/images/breakfast.jpg',
    alt: {
      en: 'Complimentary breakfast',
      th: 'อาหารเช้าฟรี',
    },
    category: ['food'],
    priority: true,
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    src: '/images/mookata.jpg',
    alt: {
      en: 'Thai BBQ (Mookata)',
      th: 'หมูกระทะ',
    },
    category: ['food'],
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    src: '/images/dinner-grill-fish.jpg',
    alt: {
      en: 'Grilled fish dinner',
      th: 'ปลาย่าง',
    },
    category: ['food'],
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    src: '/images/dinner-grill-prawn.jpg',
    alt: {
      en: 'Grilled prawns',
      th: 'กุ้งเผา',
    },
    category: ['food'],
    blurDataURL: BLUR_PLACEHOLDER,
  },
  {
    src: '/images/dinner-grill-squid.jpg',
    alt: {
      en: 'Grilled squid',
      th: 'ปลาหมึกย่าง',
    },
    category: ['food'],
    blurDataURL: BLUR_PLACEHOLDER,
  },
];

/**
 * Get images filtered by category
 */
export function getFilteredImages(filter: GalleryCategory): GalleryImage[] {
  if (filter === 'all') {
    return GALLERY_IMAGES;
  }
  return GALLERY_IMAGES.filter((img) => img.category.includes(filter));
}

/**
 * Get images by specific category for section display
 */
export function getImagesByCategory(category: GalleryCategory): GalleryImage[] {
  return GALLERY_IMAGES.filter((img) => img.category.includes(category));
}

/**
 * Format phone number for display
 */
export function formatPhoneDisplay(phone: string): string {
  return phone.replace(/(\+66)(\d{2})(\d{3})(\d{4})/, '$1 $2-$3-$4');
}

/**
 * Format phone number for tel: link
 */
export function formatPhoneLink(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, '')}`;
}

/**
 * Room types configuration
 */
export interface RoomType {
  key: 'nordic' | 'japanese' | 'aShape';
  capacity: number;
  image: string;
  galleryImages: string[];
}

export const ROOM_TYPES: RoomType[] = [
  {
    key: 'nordic',
    capacity: 2,
    image: '/images/room-type-nordic-overview.jpg',
    galleryImages: [
      '/images/room-type-nordic-overview.jpg',
      '/images/room-type-nordic-bedroom-1.jpg',
      '/images/room-type-nordic-bedroom-2.jpg',
      '/images/room-type-nordic-bathroom.jpg',
    ],
  },
  {
    key: 'japanese',
    capacity: 2,
    image: '/images/room-type-japan-bedroom-1.jpg',
    galleryImages: [
      '/images/room-type-japan-bedroom-1.jpg',
      '/images/room-type-japan-bedroom-2.jpg',
      '/images/room-type-japan-bathroom.jpg',
    ],
  },
  {
    key: 'aShape',
    capacity: 4,
    image: '/images/room-type-A-shape-overview.jpg',
    galleryImages: [
      '/images/room-type-A-shape-overview.jpg',
      '/images/room-type-A-shape-full-room.jpg',
      '/images/room-type-A-shape-bedroom-1st-floor.jpg',
      '/images/room-type-A-shape-bedroom-2nd-floor.jpg',
      '/images/room-type-A-shape-bathroom.jpg',
    ],
  },
];
