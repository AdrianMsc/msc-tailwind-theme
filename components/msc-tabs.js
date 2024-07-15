module.exports = function ({ addComponents, theme }) {
  const tabs = {
    ".msc-tabs": {
      "@apply flex w-full": {},
    },
    ".msc-tabs li": {
      "@apply text-[16px] p-3 grow text-center cursor-pointer transition-all after:transition-all after:duration-500  relative after:w-0 text-monochromes-grey border-gray-700 border-opacity-[16%] border-b hover:font-bold hover:text-black":
        {},
    },
    ".msc-tabs .active": {
      "@apply text-black p-3 grow text-center font-bold after:bg-primary-blue  after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0":
        {},
    },
    ".msc-tabs .middle": {
      "@apply border-gray-700 border-opacity-[16%] border-b border-x": {},
    },
  };
  addComponents(tabs);
};
