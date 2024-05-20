/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#03DAA9",
          variant_2: "#1C58EE",
          variant_3: "#B3C7F9",
          variant_4: "#F1F5FE",
          accent: "#186DF5",
        },
        success: {
          default: "#0E754A",
          variant_2: "#24E594",
          variant_3: "#B6F6DB",
          variant_4: "#F1FDF8",
          accent: "#44DE9E",
          available: "#0E754A",
        },
        warning: {
          default: "#EF8A00",
          variant_2: "#FF980A",
          variant_3: "#FFDDAD",
          variant_4: "#FFF9F0",
          variant_5: "#FFF9F0",
        },
      },
    },
  },
  plugins: [],
};
