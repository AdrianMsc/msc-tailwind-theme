module.exports = function ({ addComponents, theme }) {
  const buttons = {
    ".msc-btn": {
      "@apply py-2 px-5 rounded-full font-bold text-base cursor-pointer": {},
    },
    ".msc-btn-sm": {
      "@apply h-7 text-sm py-1": {},
    },
    ".msc-btn-blue-solid": {
      "@apply text-white cursor-pointer": {},
      backgroundColor: theme("colors.primary.blue"),
      "&:hover": {
        backgroundColor: "#186DF5",
      },
      "&:active": {
        backgroundColor: theme("colors.primary.blue_dark"),
      },
      "&:focus-visible": {
        "@apply outline-dashed outline-1 outline-offset-4 outline-[#424242]":
          {},
      },
    },
    ".msc-btn-blue-outline": {
      "@apply bg-transparent border": {},
      color: theme("colors.primary.blue"),
      borderColor: theme("colors.primary.blue"),
      "&:hover": {
        backgroundColor: theme("colors.primary.blue_xlight"),
      },
      "&:active": {
        backgroundColor: "#0d3aa933",
      },
      "&:focus-visible": {
        "@apply outline-dashed outline-1 outline-offset-4 outline-[#424242]":
          {},
      },
    },
    ".msc-btn-transparent": {
      "@apply bg-transparent": {},
      color: theme("colors.primary.blue"),
      "&:hover": {
        backgroundColor: theme("colors.primary.blue_xlight"),
      },
      "&:active": {
        backgroundColor: "#0d3aa933",
      },
      "&:focus-visible": {
        "@apply outline-dashed outline-1 outline-offset-4 outline-[#424242]":
          {},
      },
    },
    ".msc-btn-solid-disabled": {
      "@apply text-white cursor-not-allowed": {},
      backgroundColor: theme("colors.monochromes.grey_light"),
    },
    ".msc-btn-outline-disabled": {
      "@apply bg-transparent cursor-not-allowed border": {},
      color: theme("colors.monochromes.grey_light"),
      borderColor: theme("colors.monochromes.grey_light"),
    },
    ".msc-btn-transparent-disabled": {
      "@apply bg-transparent cursor-not-allowed": {},
      color: theme("colors.monochromes.grey_light"),
    },
    ".msc-btn-icon": {
      "@apply flex items-center ml-2": {},
    },
    ".msc-btn-dots-container": {
      "@apply w-10 h-6 flex place-content-between items-center": {},
    },
    ".msc-btn-dots-container-sm": {
      "@apply w-10 h-5 flex place-content-between items-center": {},
    },
    ".msc-btn-dot1": {
      "@apply relative top-0 w-2 h-2 bg-white rounded-full animate-dotFlashing1":
        {
          left: "3.75rem",
        },
    },
    ".msc-btn-dot2": {
      "@apply relative w-2 h-2 bg-white rounded-full animate-dotFlashing2 opacity-50":
        {},
    },
    ".msc-btn-dot3": {
      "@apply relative top-0 w-2 h-2 bg-white rounded-full animate-dotFlashing3 opacity-30":
        {
          left: "3.75rem",
        },
    },
    ".msc-btn-dot1-blue": {
      "@apply relative top-0 w-2 h-2 rounded-full animate-dotFlashing1": {
        left: "3.75rem",
      },
      backgroundColor: theme("colors.primary.blue"),
    },
    ".msc-btn-dot2-blue": {
      "@apply relative w-2 h-2 rounded-full animate-dotFlashing2 opacity-50":
        {},
      backgroundColor: theme("colors.primary.blue"),
    },
    ".msc-btn-dot3-blue": {
      "@apply relative top-0 w-2 h-2 rounded-full animate-dotFlashing3 opacity-30":
        {
          left: "3.75rem",
        },
      backgroundColor: theme("colors.primary.blue"),
    },
  };
  addComponents(buttons);
};
