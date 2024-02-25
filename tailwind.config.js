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
        'tetromino__i': '#31c7ef',
        'tetromino__j': '#5a65ad',
        'tetromino__l': '#ef7921',
        'tetromino__s': '#42b642',
        'tetromino__t': '#ad4d9c',
        'tetromino__o': '#f7d308',
        'tetromino__z': '#ef2029',
      },
      gridTemplateRows: {
        '20': 'repeat(20, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}