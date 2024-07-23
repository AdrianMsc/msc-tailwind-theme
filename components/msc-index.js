module.exports = function ({ addComponents, theme }) {
  const index = {
    ".msc-layout-container": {
      "@apply col-span-12 md:col-span-12 2xl:col-span-8 2xl:col-start-3 pt-10 px-6":
        {},
    },
  };
  addComponents(index);
};
