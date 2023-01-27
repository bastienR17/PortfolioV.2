/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        beige:'#CEC4B2',
        brun:'#4A4032 ',
        noir:'#1E1E1E ',
      },
      keyframes: {
        spin: {
          '0%': {transform: 'rotate(0)'},
          '100%': {transform: 'rotate(360deg)'},
        },
        reverse_spin: {
          '0%': {transform: 'rotate(0)'},
          '100%': {transform: 'rotate(-360deg)'},
        },
      },
      animation: {
        'spin': 'spin 20s linear infinite',
        'reverse-spin': 'reverse-spin 20s linear infinite'
      }
    },

    fontFamily: {
      caxo: ['caxo','sans-serif'],
      changa: ['changa','sans-serif'],
    },
  },
  plugins: [],
}
