/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },colors: {
    'blue': '#1fb6ff',
    'pink': '#ff49db',
    'orange': '#ff7849',
    'green': '#13ce66',
    'gray-dark': '#273444',
    'gray': '#8492a6',
    'gray-light': '#d3dce6',
    'mi':'#ED254E',
    'white':'#FFFFFF',
    'inputgray':'#F1F3F6',
  },
  fontFamily: {
    sans: ['Poppins', ...defaultTheme.fontFamily.sans],
  },
  extend: {
    spacing: {
      '128': '32rem',
      '144': '36rem',
    },
    borderRadius: {
      '4xl': '2rem',
    }
  },
  },
  plugins: [],
}