import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#FFC0CB', // Light pink for backgrounds or accents
          DEFAULT: '#FF69B4', // Main pink for primary elements
          dark: '#FF1493', // Darker pink for hover states
        },
        white: '#FFFFFF', // Pure white for text and backgrounds
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  variants: {},
  plugins: [],
});