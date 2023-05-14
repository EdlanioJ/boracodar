/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
        custom: ['Inter', 'Titillium_Web', 'Roboto', 'Lato', 'Source_Sans_Pro'],
      },
      keyframes: {
        apear: {
          '0%': {
            opacity: 0,
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0px)',
          },
        },

        'card-disabled': {
          to: {
            transform: 'rotateY(180deg) scale(0.9)',
          },
        },
        'character-slide-left': {
          from: {
            transform: 'translateX(33.33%) scale(0.8)',
            'z-index': 0,
          },
          '50%': {
            transform: 'translateX(-10%) scale(1.05)',
            'z-index': 0,
          },
          '75%': {
            'z-index': 40,
          },
          to: {
            transform: 'translateX(20%) scale(1)',
            'z-index': 40,
          },
        },
        'character-slide-right': {
          from: {
            transform: 'translateX(-33.33%) scale(0.8)',
            'z-index': 0,
          },
          '50%': {
            transform: 'translateX(10%) scale(1.05)',
            'z-index': 0,
          },
          '75%': {
            'z-index': 40,
          },
          to: {
            transform: 'translateX(-20%) scale(1)',
            'z-index': 40,
          },
        },
      },
      animation: {
        apear: 'apear 400ms backwards var(--delay, 0)',
        'character-slide-left': 'character-slide-left 1000ms ease-in-out',
        'character-slide-right': 'character-slide-right 1000ms ease-in-out',
        'card-disabled': 'card-disabled 500ms',
      },
    },
  },
  plugins: [],
};
