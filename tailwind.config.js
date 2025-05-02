/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                mainBlue: '#3174F1',
                mainBlueDark: '#2564EB',
                mainBlueLight: '#EFF6FF',
                mainGray: '#6F7C98',
                mainGrayDark: '#676B74',
                mainBlack: '#303030',
                darkMainBlue: '#020817',
                darkMainBlueLight: '#0A1222',
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                ropa: ['Ropa Sans', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
