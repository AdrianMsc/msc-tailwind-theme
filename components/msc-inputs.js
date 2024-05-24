module.exports = function ({ addComponents }) {
  const input = {
    ".msc-input": {
      "@apply  h-10 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded placeholder-transparent focus:outline-none focus:border-black":
        {},
      background: "@apply bg-white",
    },
  };

  addComponents(input);
};
