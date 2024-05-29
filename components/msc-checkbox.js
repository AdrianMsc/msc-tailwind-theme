module.exports = function ({ addComponents, theme }) {
  const checkbox = {
    ".msc-checkbox": {
      "@apply py-2 px-5 rounded-full font-bold text-base text-white cursor-pointer":
        {},
      backgroundColor: theme("colors.primary.blue"),
      "&:hover": {
        backgroundColor: "#186DF5",
      },
    },
  };
  addComponents(checkbox);
};
