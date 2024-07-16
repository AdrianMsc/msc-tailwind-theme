module.exports = function ({ addComponents, theme }) {
  const tabs = {
    ".msc-tabs": {
      "@apply flex w-full": {},
    },
    ".msc-tabs li": {
      "@apply text-[16px] p-3 grow text-center cursor-pointer transition-all after:transition-all after:duration-500  relative after:w-0 text-monochromes-grey border-gray-700 border-opacity-[16%] border-b hover:font-bold hover:text-black border-b hover:border-black font-bold":
        {},
    },
    ".msc-tabs .active": {
      "@apply text-black p-3 grow text-center font-bold after:bg-primary-blue  after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0 hover:border-transparent":
        {},
    },
    ".msc-tabs .middle": {
      "@apply relative before:absolute before:left-0 before:bottom-0 before:h-full before:w-[1px] before:bg-slate-500 before:opacity-[16%]  after:absolute after:right-0 after:bottom-0 after:h-full after:w-[1px] after:bg-slate-500 after:opacity-[16%]":
        {},
    },
  };
  addComponents(tabs);
};
