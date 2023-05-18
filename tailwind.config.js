/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-character':
          'linear-gradient(0deg, rgba(0, 1, 14, 0.5), rgba(0, 1, 14, 0.5)), linear-gradient(148.95deg, rgba(14, 23, 101, 0.85) -7.05%, rgba(42, 17, 92, 0.85) 110.07%)',
        'abstract-card':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%)',
      },
      boxShadow: {
        character:
          '0px 294px 118px rgba(0, 0, 0, 0.03), 0px 165px 99px rgba(0, 0, 0, 0.1), 0px 73px 73px rgba(0, 0, 0, 0.17) 0px 18px 40px rgba(0, 0, 0, 0.2), 0px 0px 0px rgba(0,0,0,0.2)',
      },
      fontFamily: {
        inter: ['Inter'],
        roboto: ['Roboto'],
        lato: ['Lato'],
        'titillium-web': ['Titillium_Web'],
        'source-sans': ['Source_Sans_Pro'],
        'hepta-slab': ['Hepta_Slab'],
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
