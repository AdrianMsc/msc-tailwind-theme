/** @type {import('tailwindcss').Config} */
const colors = require("./utilities/colors");

module.exports = {
  content: ["./src/**/*.{html,js}", "./pages/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors,
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
  ],
};
