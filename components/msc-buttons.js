module.exports = function ({ addComponents }) {
  const buttons = {
    ".btn-blue-solid": {
      "@apply py-2 px-5 bg-primary-variant_2 rounded-full font-bold text-base text-white cursor-pointer":
        {},
      "&:hover": {
        "@apply bg-primary-variant_3": {},
      },
    },
  };
  addComponents(buttons);
};
