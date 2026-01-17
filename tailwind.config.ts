import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Luxury earth tones inspired by nature
        primary: {
          50: '#faf8f5',
          100: '#f2ede4',
          200: '#e4d9c7',
          300: '#d3c0a3',
          400: '#bfa37d',
          500: '#a98b60',
          600: '#967653',
          700: '#7c5f45',
          800: '#674e3c',
          900: '#564234',
          950: '#2e221a',
        },
        // Deep forest green accents
        accent: {
          50: '#f4f9f4',
          100: '#e5f2e7',
          200: '#cce5d0',
          300: '#a3d0ac',
          400: '#72b380',
          500: '#4d965d',
          600: '#3a7a49',
          700: '#31613c',
          800: '#2a4e33',
          900: '#24402c',
          950: '#102316',
        },
        // Warm cream for backgrounds
        cream: {
          50: '#fdfcfa',
          100: '#faf7f2',
          200: '#f5efe4',
          300: '#ede3d1',
          400: '#e2d2b8',
          500: '#d4bc96',
        },
        // Subtle river blue
        river: {
          50: '#f5f9fa',
          100: '#e9f2f5',
          200: '#d0e3ea',
          300: '#a9ccd9',
          400: '#7bafc2',
          500: '#5993ab',
          600: '#467890',
          700: '#3b6276',
          800: '#355262',
          900: '#304654',
        },
      },
      fontFamily: {
        sans: ['var(--font-sarabun)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        thai: ['var(--font-sarabun)', 'Tahoma', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-overlay':
          'linear-gradient(to bottom, rgba(46, 34, 26, 0.3), rgba(46, 34, 26, 0.7))',
        'card-gradient':
          'linear-gradient(135deg, rgba(250, 248, 245, 0.9), rgba(237, 227, 209, 0.9))',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        luxury:
          '0 4px 20px -2px rgba(46, 34, 26, 0.1), 0 2px 8px -2px rgba(46, 34, 26, 0.06)',
        'luxury-lg':
          '0 10px 40px -4px rgba(46, 34, 26, 0.15), 0 4px 16px -4px rgba(46, 34, 26, 0.1)',
        glow: '0 0 40px rgba(169, 139, 96, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
