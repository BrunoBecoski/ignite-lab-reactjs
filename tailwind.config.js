/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur-background.png)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        lightBlue: {
          500: '#75BEFF',
        },
        darkBlue: {
          500: '#0366D6',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        darkGray: {
          100: '#DADAE6', // HSV 240°, 5%, 90%
          200: '#C2C2CC', // HSV 240°, 5%, 80%
          300: '#919199', // HSV 240°, 5%, 60%
          500: '#353538', // HSV 240°, 5%, 22%
          600: '#2C2C2E', // HSV 240°, 5%, 18%
          700: '#131314', // HSV 240°, 5%, 8%
          900: '#0A0A0A', // HSV 240°, 5%, 4%
        },
        lightGray: {
          100: '#18181A', // HSV 240°, 5%, 10%
          200: '#303033', // HSV 240°, 5%, 20%
          300: '#616166', // HSV 240°, 5%, 40%
          500: '#BDBDC7', // HSV 240°, 5%, 78%
          600: '#C7C7D1', // HSV 240°, 5%, 82%
          700: '#DFDFEB', // HSV 240°, 5%, 92%
          900: '#E9E9F5', // HSV 240°, 5%, 96%
        }
      },
    },
  },
  plugins: [],
}
