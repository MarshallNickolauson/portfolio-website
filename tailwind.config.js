/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainGray: '#31343E',
        mainGrayDark: '#232630',
        darkGrayBackground: '#1b1e26',
        mainOrange: '#F95353',
        mainOrangeDark: '#DE4A4A',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        ropa: ['Ropa Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

