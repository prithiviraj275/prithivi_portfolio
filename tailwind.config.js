/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'alegra': ['"alegreya-sans-sc"'],
        'ubuntu': ['"Ubuntu"', ...defaultTheme.fontFamily.sans],
        'cairo': ['"Cairo"', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        'purple-text':"#6b21a8"
      }

    },
  },
  plugins: [],
};
