module.exports = function ({ addComponents, theme }) {
  const input = {
    ".msc-input": {
      "@apply w-full bg-white border border-monochromes-grey_light hover:border-monochromes-main px-4 py-3.5 rounded text-sm placeholder-transparent focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black h-10":
        {},
    },
    ".msc-input-label": {
      "@apply bg-white absolute left-3.5 -top-[0.6rem] pt-[1px] px-[0.2rem] text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-monochromes-grey_light peer-placeholder-shown:top-2 peer-focus:-top-[0.6rem] peer-focus:text-monochromes-main peer-focus:text-xs":
        {},
    },
    ".msc-input-wrapper": {
      "@apply  relative w-full flex-col": {},
    },
    ".msc-input-disabled": {
      "@apply w-full border text-monochromes-grey_light px-4 py-3.5 rounded text-sm focus:outline-none focus:border-monochromes-grey_light  cursor-not-allowed h-10":
        {},
    },
    ".msc-label-disabled": {
      "@apply text-monochromes-grey_xlight !important": {},
    },
    ".msc-input-unit": {
      "@apply  text-center border border-monochromes-grey_light hover:border-monochromes-main  md:pr-0 py-3.5 rounded text-sm focus:border-monochromes-main focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black h-10 no-arrows":
        {},
    },
    ".msc-input-unit-label": {
      "@apply text-monochromes-main text-sm mb-1 text-xs text-center": {},
    },
    ".msc-input-unit-disabled": {
      "@apply w-full border text-center text-monochromes-grey_light py-3.5 rounded text-sm focus:outline-none focus:border-monochromes-grey_light  cursor-not-allowed h-10 no-arrows":
        {},
    },
    ".msc-input-unit-wrapper": {
      "@apply relative flex flex-col w-[68px]": {},
    },
    ".input-error": {
      "@apply border-error-red hover:border-error-red text-error-red focus:border-error-red":
        {},
    },
    ".label-error": {
      "@apply peer-placeholder-shown:text-error-red peer-focus:text-black": {},
    },
    ".error-message": {
      "@apply  text-error-red font-semibold !important": {},
    },
  };

  addComponents(input);
};
