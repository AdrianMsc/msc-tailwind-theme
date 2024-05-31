module.exports = function ({ addComponents, theme }) {
  const input = {
    ".msc-input": {
      "@apply w-full bg-white border border-monochromes-grey_light hover:border-monochromes-main px-4 py-3.5 rounded text-sm placeholder-transparent focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 h-10":
        {},
    },
    ".msc-input-label": {
      "@apply bg-white absolute left-3 -top-1.5 px-[0.2rem] text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-monochromes-grey_light peer-placeholder-shown:top-2 peer-focus:-top-[0.4rem] peer-focus:text-[#212121]":
        {},
    },
    ".msc-input-wrapper": {
      "@apply  relative w-full flex-col": {},
    },
    ".msc-input-disabled": {
      "@apply w-full border border-gray-300 px-4 py-3.5 rounded text-sm focus:outline-none focus:border-black cursor-not-allowed h-10":
        {},
    },
    ".input-error": {
      "@apply  border-error-red hover:border-error-red text-error-red focus:border-error-red":
        {},
    },
    ".error-message": {
      "@apply  text-error-red font-semibold !important": {},
    },
    ".msc-input-unit": {
      "@apply w-[68px] text-center border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 md:pl-4 md:pr-0 py-3.5 rounded text-sm focus:border-monochromes-main focus:outline-dashed focus:outline-1 focus:outline-offset-4 h-10":
        {},
    },
    ".msc-input-unit-label": {
      "@apply text-monochromes-grey_light text-sm mb-1": {},
    },
  };

  addComponents(input);
};
