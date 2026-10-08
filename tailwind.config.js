/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#f97316', light: '#fdba74', dark: '#c2410c' },
        secondary: { DEFAULT: '#a3e635', light: '#d9f99d', dark: '#65a30d' },
        surface: {
          DEFAULT: '#1c1410',
          50: '#1c1410',
          100: '#2a211c',
          200: '#3a2e26',
          300: '#4a3b30',
        },
        ink: { DEFAULT: '#fff7ed', soft: '#e7d5c4', muted: '#a89080' },
      },
      fontFamily: {
        display: ['Instrument Serif', 'system-ui', 'sans-serif'],
        sans: ['Instrument Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 28px rgba(0,0,0,0.12)',
        'card-hover': '0 12px 36px rgba(0,0,0,0.16)',
        glow: '0 0 24px #f9731655',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-page': 'slidePage 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slidePage: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
