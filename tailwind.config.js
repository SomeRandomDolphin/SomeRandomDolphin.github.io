const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Exo', ...fontFamily.serif],
        secondary: ['Montserrat', fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#D8F0FF',
          200: '#B1E1FF',
          300: '#89D3FE',
          400: '#62C4FE',
          500: '#3BB5FE',
          600: '#2F91CB',
          700: '#236D98',
          800: '#184866',
          900: '#0C2433',
        },
        secondary: {
          100: '#F0EAF7',
          200: '#E1D5EF',
          300: '#D2C1E6',
          400: '#C3ACDE',
          500: '#B497D6',
          600: '#9079AB',
          700: '#6C5B80',
          800: '#483C56',
          900: '#241E2B',
        },
        typo: {
          white: '#ffffff',
          surface: '#F9FAFB',
          light: '#F0F2F5',
          outline: '#E4E7EB',
          inline: '#D1D5DC',
          icon: '#9AA2B1',
          secondary: '#687083',
          label: '#1a3650',
          primary: '#151515',
        },
      },
      boxShadow: {
        20: '0px 0.5px 2px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05)',
        40: '0px 2px 4px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05)',
        60: '0px 4px 8px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05);',
        80: '0px 8px 16px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05);',
        100: '0px 16px 24px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05);',
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
