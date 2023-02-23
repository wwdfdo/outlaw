/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [`'oldwestern'`, ...defaultTheme.fontFamily.sans],
      },

      backgroundImage: {
        "horse-bg": "url('/src/images/horsebg.png')",
        "horse-bg-girl": "url('/src/images/horsebg-girl-pantom2.png')",
        "horse-bg-girl-pantom": "url('/src/images/horsebg-girl-pantom.png')",
        "new-bg": "url('/src/images/newbg.png')",
      },
    },
  },
  plugins: [],
};
