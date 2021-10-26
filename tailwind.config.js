const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
  './src/**/*.html',
  './src/**/*.js',
],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fly: {
          '100%': { transform: 'translateX(50%) translateY(20%)' },
        }
      },
      animation: {
        flying: 'fly 80s linear alternate infinite',
      }
    },
    colors: {
      blue: colors.blue,
      black: colors.black,
      white: colors.white,
      sky: colors.sky,
      red: colors.red,
      amber: colors.amber,
      orange: colors.orange,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
