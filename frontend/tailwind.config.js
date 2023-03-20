/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        trans: 'transparent',
        current: 'currentColor',
        brandR: '#d05058',
        brandG: '#208080', //'#1c8e7d',
        brandB: '#5A50D0',//'#5550c0',//'#5A50D0', //'#5A5AB0',
        sh1: 'rgba(0, 0, 0, 0.5)',
        sh2: 'rgba(0, 0, 0, 0.2)',
        hi1: 'rgba(255, 255, 255, 0.5)',
        hi2: 'rgba(255, 255, 255, 0.2)',
        bright: '#fff',
        light: '#C0D0D0', // normal text
        dark: '#102020',  // better to use sh1 instead.
       // dark2: '#101010', // extra dark
        darkGray: '#203030',
        lightGray: '#506060',
      },
    }
  },
  plugins: [],
}
