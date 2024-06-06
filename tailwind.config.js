/** @type {import('tailwindcss').Config} */
const colors = require("./utilities/colors");

module.exports = {
  content: ["./src/**/*.{html,js}", "./pages/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors,
      keyframes: {
        dotFlashing1: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        dotFlashing2: {
          "0%": { opacity: "0.6" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        dotFlashing3: {
          "0%": { opacity: "0.3" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        dotFlashing1: "dotFlashing1 2s infinite linear alternate",
        dotFlashing2: "dotFlashing2 2s infinite linear alternate 0.4s",
        dotFlashing3: "dotFlashing3 2s infinite linear alternate 0.6s",
      },
    },
  },
  plugins: [
    require("./components/msc-buttons"),
    require("./components/msc-checkbox"),
    require("./components/msc-dropdown"),
    require("./components/msc-inputs"),
    require("./components/msc-modals"),
    require("./components/msc-radio"),
    require("./components/msc-toggle"),
    require("./components/msc-icons"),
    require("./components/msc-dividers"),
  ],
};
