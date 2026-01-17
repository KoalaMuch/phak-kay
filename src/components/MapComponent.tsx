'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import L from 'leaflet';
import { RESORT_LOCATION } from '@/lib/utils';

// Fix for default marker icon in Leaflet with webpack
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapComponent() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const locale = useLocale();

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current, {
      center: [RESORT_LOCATION.lat, RESORT_LOCATION.lng],
      zoom: 14,
      scrollWheelZoom: false,
    });

    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Add marker
    const marker = L.marker([RESORT_LOCATION.lat, RESORT_LOCATION.lng], {
      icon,
    }).addTo(map);

    // Add popup
    const popupContent = `
      <div style="text-align: center; padding: 8px;">
        <strong style="font-size: 14px; color: #2e221a;">
          ${locale === 'th' ? 'พักกาย แคมป์ปิ้ง' : 'Phakkay Camping'}
        </strong>
        <br/>
        <span style="font-size: 12px; color: #674e3c;">
          ${RESORT_LOCATION.address[locale as 'en' | 'th']}
        </span>
        <br/><br/>
        <a 
          href="${RESORT_LOCATION.googleMapsUrl}" 
          target="_blank" 
          rel="noopener noreferrer"
          style="color: #4d965d; font-size: 12px; text-decoration: none;"
        >
          ${locale === 'th' ? 'ดูเส้นทาง →' : 'Get Directions →'}
        </a>
      </div>
    `;

    marker.bindPopup(popupContent).openPopup();

    mapInstanceRef.current = map;

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [locale]);

  return (
    <div ref={mapRef} className="h-[400px] w-full" style={{ zIndex: 0 }} />
  );
}
