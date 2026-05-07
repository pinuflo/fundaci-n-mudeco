/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        mudeco: {
          clay: {
            50:  '#FDF8F3',
            100: '#F8EDDC',
            200: '#EFD4B0',
            300: '#E2B47D',
            400: '#D08E50',
            500: '#B8702E',
            600: '#9A5520',
            700: '#7C3E18',
            800: '#5E2D14',
            900: '#3D1D0D',
          },
          sage: {
            50:  '#F2F6EF',
            100: '#E2EBDA',
            200: '#C4D6B5',
            300: '#9AB989',
            400: '#739B60',
            500: '#537B40',
            600: '#406030',
            700: '#304824',
            800: '#203019',
            900: '#121D0F',
          },
          cream: {
            50:  '#FFFEF9',
            100: '#FEFCF0',
            200: '#FCF5DC',
            300: '#F7E9BB',
            400: '#EFD892',
            500: '#E4C368',
          },
          earth: {
            50:  '#FAF6F2',
            100: '#F3EAE0',
            200: '#E5D1BC',
            300: '#D2B295',
            400: '#BA9070',
            500: '#A07155',
            600: '#835643',
            700: '#653F33',
            800: '#472B24',
            900: '#2A1A16',
          },
          warm: {
            50:  '#FFFFFE',
            100: '#FDFBF5',
            200: '#FAF4E5',
            300: '#F3E8CA',
          }
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-gradient':    'linear-gradient(135deg, #FFFEF9 0%, #F8EDDC 45%, #F2F6EF 100%)',
        'section-gradient': 'linear-gradient(180deg, #FFFEF9 0%, #F8EDDC 100%)',
        'earth-gradient':   'linear-gradient(135deg, #9A5520 0%, #B8702E 50%, #537B40 100%)',
        'clay-gradient':    'linear-gradient(135deg, #7C3E18 0%, #B8702E 100%)',
        'sage-gradient':    'linear-gradient(135deg, #406030 0%, #739B60 100%)',
        'warm-gradient':    'linear-gradient(135deg, #FFFEF9 0%, #F2F6EF 100%)',
      },
      animation: {
        'float':    'float 5s ease-in-out infinite',
        'shimmer':  'shimmer 3s ease-in-out infinite',
        'fade-up':  'fadeUp 0.8s ease-out forwards',
        'fade-in':  'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.35' },
          '50%':      { opacity: '0.75' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'craft': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}

