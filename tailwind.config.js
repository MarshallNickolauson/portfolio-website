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
        mainGrayDark: '#1A1C23',
        darkGrayBackground: '#252830',
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

