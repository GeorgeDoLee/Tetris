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
        'tetramino__i': '#31c7ef',
        'tetramino__j': '#5a65ad',
        'tetramino__l': '#ef7921',
        'tetramino__s': '#42b642',
        'tetramino__t': '#ad4d9c',
        'tetramino__o': '#f7d308',
        'tetramino__z': '#ef2029',
      },
      gridTemplateRows: {
        '20': 'repeat(20, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}