/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'smokey-black': '#14110F',
        'jet': '#34312D',
        'gray': '#7E7F83',
        'dun': '#D9C5B2',
        'anti-flash': '#F3F3F4',
        'tetramino__i': '#D0CFEC',
        'tetramino__j': '#7D1538',
        'tetramino__l': '#7D1538',
        'tetramino__s': '#F9C22E',
        'tetramino__o': '#235789',
        'tetramino__z': '#D95D39',
      },
      gridTemplateRows: {
        '20': 'repeat(20, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}