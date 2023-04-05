/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [`'fattern'`, ...defaultTheme.fontFamily.sans],
      },

      backgroundImage: {
        "horse-bg": "url('/src/images/horsebg.png')",
        "horse-bg-girl": "url('/src/images/horsebg-girl-pantom2.png')",
        "horse-bg-girl-pantom": "url('/src/images/horsebg-girl-pantom3.png')",
        "horse-torl": "url('/src/images/torlbg.png')",
        "horse-onlytorl": "url('/src/images/torlonlybg.png')",
        "new-bg": "url('/src/images/newbg.png')",
        // "roadmap-bg": "url('/src/images/desert1.gif')",
        "roadmap-bg": "url('/src/images/mountain.gif')",
        "roadmapmobile-bg": "url('/src/images/desertmobile.gif')",
      },
    },
  },
  plugins: [],
};
