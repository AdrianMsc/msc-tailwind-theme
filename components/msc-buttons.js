module.exports = function ({ addComponents, theme }) {
  const buttons = {
    ".btn":{
      "@apply py-2 px-5 rounded-full font-bold text-base cursor-pointer":
        {},
    },
    ".btn-blue-solid": {
      "@apply text-white cursor-pointer":
        {},
      backgroundColor: theme("colors.primary.blue"),
      "&:hover": {
        backgroundColor: "#186DF5",
      },
      "&:active":{
        backgroundColor: theme("colors.primary.blue_dark")
      },
      "&:focus-visible":{
        "@apply outline-dashed outline-1 outline-offset-4 outline-[#424242]":
        {}
      },
    },
    ".btn-blue-outline": {
      "@apply bg-transparent border":
        {},
      color: theme("colors.primary.blue"),
      borderColor: theme("colors.primary.blue"),
      "&:hover": {
        backgroundColor: theme("colors.primary.blue_xlight"),
      },
      "&:active":{
        backgroundColor: "#0d3aa933",
      },
      "&:focus-visible":{
        "@apply outline-dashed outline-1 outline-offset-4 outline-[#424242]":
        {}
      },
    },
    ".btn-transparent": {
      "@apply bg-transparent":
        {},
      color: theme("colors.primary.blue"),
      "&:hover": {
        backgroundColor: theme("colors.primary.blue_xlight"),
      },
      "&:active":{
        backgroundColor: "#0d3aa933",
      },
      "&:focus-visible":{
        "@apply outline-dashed outline-1 outline-offset-4 outline-[#424242]":
        {}
      },
    },
    ".btn-solid-disabled":{
      "@apply text-white cursor-not-allowed":
        {},
      backgroundColor: theme("colors.monochromes.grey_light"),
    },
    ".btn-outline-disabled":{
      "@apply bg-transparent cursor-not-allowed border":
        {},
      color: theme("colors.monochromes.grey_light"),
      borderColor: theme("colors.monochromes.grey_light")
    },
    ".btn-transparent-disabled":{
      "@apply bg-transparent cursor-not-allowed":
        {},
      color: theme("colors.monochromes.grey_light"),
    },
    ".btn-icon":{
      "@apply flex items-center":
        {},
    },
  };
  addComponents(buttons);
};
