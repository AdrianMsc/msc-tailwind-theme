module.exports = function ({ addComponents, theme }) {
  const buttons = {
    ".btn-blue-solid": {
      "@apply py-2 px-5 rounded-full font-bold text-base text-white cursor-pointer":
        {},
      backgroundColor: theme("colors.primary.blue"),
      "&:hover": {
        backgroundColor: "#186DF5",
      },
    },
    ".btn-blue-outline": {
      "@apply py-2 px-5 bg-transparent rounded-full font-bold text-base cursor-pointer border":
        {},
      color: theme("colors.primary.blue"),
      borderColor: theme("colors.primary.blue"),
      "&:hover": {
        backgroundColor: theme("colors.primary.blue_light"),
      },
    },
    ".btn-transparent": {
      "@apply py-2 px-5 bg-transparent rounded-full font-bold text-base cursor-pointer":
        {},
      color: theme("colors.primary.blue"),
      "&:hover": {
        backgroundColor: theme("colors.primary.blue_light"),
      },
    },
  };
  addComponents(buttons);
};
