# Phase 1: Local Development

**Duration**: 5-6 days  
**Goal**: Complete landing page running locally with all features and tests

---

## Day 1: Project Setup

### Morning (4 hours)

- [x] **Initialize Next.js 14 project with TypeScript**
  - Run `npx create-next-app@14` with TypeScript template
  - Configure App Router structure
  - Verify development server starts correctly

- [x] **Configure Tailwind CSS with custom luxury color palette**
  - Install Tailwind CSS and dependencies
  - Create `tailwind.config.ts` with custom colors:
    - Primary: Earth tones (#a98b60)
    - Accent: Forest green (#4d965d)
    - Cream: Warm backgrounds (#faf7f2)
    - River: Subtle blue (#5993ab)
  - Define custom animations (fade-in, scale-in, float)

### Afternoon (4 hours)

- [x] **Setup ESLint and Prettier configuration**
  - Install eslint-config-prettier, eslint-plugin-prettier
  - Install prettier-plugin-tailwindcss
  - Create `.eslintrc.js` with Next.js and Prettier rules
  - Create `.prettierrc` with project standards
  - Verify linting works: `npm run lint`

- [x] **Configure path aliases and project structure**
  - Update `tsconfig.json` with @ aliases
  - Create folder structure:
    ```
    src/
    ├── app/
    ├── components/
    ├── i18n/
    └── lib/
    ```

- [x] **Move existing images to public/images folder**
  - Copy all images from `/img` to `/public/images`
  - Verify image paths work in browser
  - Optimize images if needed (compress, resize)

---

## Day 2: Internationalization and Layout

### Morning (4 hours)

- [x] **Install and configure next-intl for Thai/English**
  - Install `next-intl` package
  - Create `src/i18n/request.ts` with locale configuration
  - Set Thai as default locale
  - Create `middleware.ts` for locale routing

- [x] **Create translation files (en.json, th.json) with all content**
  - Create `src/i18n/en.json` with:
    - Metadata (title, description)
    - Navigation labels
    - Hero content
    - Highlights descriptions
    - Gallery labels
    - Benefits content
    - Location info
    - Contact form labels
    - Footer text
  - Create `src/i18n/th.json` with Thai translations
  - Ensure all text is translatable

### Afternoon (4 hours)

- [x] **Build root layout with locale routing**
  - Create `src/app/layout.tsx` (root metadata)
  - Create `src/app/[locale]/layout.tsx` with:
    - NextIntlClientProvider
    - Font configuration
    - JSON-LD structured data
  - Create `src/app/[locale]/page.tsx`

- [x] **Create LanguageToggle component with smooth animation**
  - Build toggle button with flag/text indicator
  - Add Framer Motion transition
  - Test switching between locales

- [x] **Setup custom fonts (luxury typography)**
  - Install Playfair Display (display font)
  - Install Sarabun (Thai-friendly body font)
  - Configure in layout with CSS variables
  - Test font rendering in both languages

---

## Day 3: Hero and Highlights Sections

### Morning (4 hours)

- [x] **Build Hero component with parallax background**
  - Create full-screen hero section
  - Add background image with overlay gradient
  - Implement parallax scroll effect
  - Add responsive sizing

- [x] **Add animated text reveal on scroll**
  - Use Framer Motion for staggered animations
  - Animate: tagline -> title -> subtitle -> description -> CTAs
  - Add scroll indicator at bottom
  - Test animation timing

### Afternoon (4 hours)

- [x] **Create Highlights section with icon cards**
  - Create 7 highlight cards:
    - River view
    - Accommodation types
    - Peaceful atmosphere
    - Waterfall proximity
    - Easy transport
    - Stunning views
    - Nearby dining
  - Design custom SVG icons
  - Add hover effects

- [x] **Implement scroll-triggered animations with Framer Motion**
  - Use `useInView` hook for trigger
  - Stagger card animations
  - Add smooth transitions

- [x] **Optimize images with next/image**
  - Use priority loading for hero
  - Configure sizes prop for responsive
  - Add blur placeholders
  - Verify lazy loading works

---

## Day 4: Gallery Component (Unique Mechanism)

### Morning (4 hours)

- [x] **Build interactive photo gallery grid**
  - Create responsive grid layout (1/2/3 columns)
  - Add image cards with hover effects
  - Implement consistent aspect ratios
  - Add image captions on hover

- [x] **Implement time-of-day filter (Morning/Evening/Night)**
  - Create filter buttons with counts
  - Categorize images by time:
    - Morning: river views
    - Evening: garden sunset, chilling corner
    - Night: garden at night
    - Rooms: all room photos
  - Add "All" filter option
  - Animate filter transitions

### Afternoon (4 hours)

- [x] **Create lightbox modal with swipe gestures**
  - Build fullscreen modal overlay
  - Add close button
  - Implement prev/next navigation
  - Add keyboard navigation (ESC, arrows)
  - Show image caption in lightbox

- [x] **Add smooth transitions between gallery states**
  - Use AnimatePresence for exit animations
  - Add layout animations for reordering
  - Implement cross-fade between images

- [x] **Implement lazy loading for gallery images**
  - Configure loading="lazy" for non-priority images
  - Add placeholder shimmer effect
  - Test scroll performance

---

## Day 5: Benefits, Location, and Contact

### Morning (4 hours)

- [x] **Build Benefits section with animated icons**
  - Create 4 benefit cards:
    - Free breakfast
    - Free WiFi
    - Minibar
    - Smoking area
  - Design custom animated icons
  - Add dark gradient background

- [x] **Create Restrictions notice (tasteful design)**
  - Show check-in time (2 PM)
  - Show no pets policy
  - Show 2 guests max
  - Style as subtle info badges

- [x] **Integrate Leaflet map with resort marker**
  - Install leaflet and react-leaflet
  - Create MapComponent (client-side only)
  - Add custom marker at resort location
  - Add popup with resort info
  - Link to Google Maps directions

### Afternoon (4 hours)

- [x] **Build Contact section with phone CTA**
  - Create prominent phone call button
  - Add explanation about phone booking
  - Style for high visibility

- [x] **Create contact inquiry form with API route**
  - Build form with fields:
    - Name (required)
    - Email (required)
    - Phone (required)
    - Check-in date (optional)
    - Number of guests (optional)
    - Message (optional)
  - Add form validation
  - Show loading/success/error states

- [x] **Setup email sending (Resend free tier)**
  - Create Resend account
  - Get API key
  - Create `/api/contact` route
  - Implement email sending
  - Test form submission

---

## Day 6: Testing and Polish

### Morning (4 hours)

- [x] **Setup Jest and React Testing Library**
  - Install jest, @testing-library/react, jest-environment-jsdom
  - Create jest.config.js
  - Create jest.setup.js with mocks
  - Configure path aliases for tests

- [x] **Write unit tests for components**
  - Test Navigation component
  - Test Hero component
  - Test Gallery filters
  - Test Contact form validation
  - Test utility functions
  - Aim for 70%+ coverage

### Afternoon (4 hours)

- [x] **Setup Playwright for E2E testing**
  - Install @playwright/test
  - Create playwright.config.ts
  - Configure multi-browser testing

- [x] **Write E2E tests for critical user flows**
  - Test page loads correctly
  - Test navigation between sections
  - Test language switching
  - Test gallery filtering
  - Test lightbox functionality
  - Test contact form submission
  - Test responsive layout

- [x] **Performance optimization (Lighthouse 90+)**
  - Run Lighthouse audit
  - Fix any accessibility issues
  - Optimize images further if needed
  - Ensure proper heading hierarchy
  - Add missing alt text

- [x] **Add SEO metadata and structured data**
  - Add Open Graph tags
  - Add Twitter cards
  - Verify JSON-LD is correct
  - Create favicon
  - Test with social preview tools

---

## Deliverables Checklist

- [x] Landing page runs locally at localhost:3000
- [x] All sections render correctly
- [x] Thai/English switching works
- [x] Gallery filter works with animations
- [x] Lightbox opens and navigates
- [x] Map displays correctly
- [x] Contact form submits (logs in dev)
- [x] All unit tests pass
- [x] All E2E tests pass
- [x] Lighthouse Performance: 90+
- [x] Lighthouse SEO: 95+
- [x] No console errors
- [x] Responsive on all screen sizes

---

## Commands Reference

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server

# Testing
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:e2e     # Run E2E tests

# Linting
npm run lint         # Check for lint errors
npm run lint:fix     # Fix lint errors
npm run format       # Format with Prettier
```
