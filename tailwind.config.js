const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        fly: {
          '100%': { transform: 'translate(40%)' },
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
      teal: colors.teal,
      emerald: colors.emerald,
      gray: colors.gray,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
