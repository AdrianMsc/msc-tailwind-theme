module.exports = function ({ addComponents }) {
  const spinner = {
    ".msc-spinner-wrapper": {
      "@apply flex flex-col items-center w-[200px]": {},
    },
    ".msc-spinner": {
      "@apply mb-3 animate-spin": {},
    },
    ".msc-spinner-label": {
      "@apply text-base": {},
    },
    ".msc-spinner-overlay": {
      "@apply fixed bg-white w-full h-full top-0 left-0 flex justify-center items-center z-40":
        {},
    },
  };
  addComponents(spinner);
};
