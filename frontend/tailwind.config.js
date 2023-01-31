/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        trans: 'transparent',
        current: 'currentColor',
        brandR: '#d05058',
        brandG: '#1c8e7d',
        brandB: '#5a50d0',//'#5A5AB0',
        sh1: 'rgba(0, 0, 0, 0.5)',
        sh2: 'rgba(0, 0, 0, 0.2)',
        hi1: 'rgba(255, 255, 255, 0.5)',
        hi2: 'rgba(255, 255, 255, 0.2)',
        bright: '#fff',
        light: '#D0D0D0', // normal text
        dark: '#202020',  // better to use sh1 instead.
       // dark2: '#101010', // extra dark
        darkGray: '#303030',
        lightGray: '#606060',
      },
    }
  },
  plugins: [],
}
