module.exports = function ({ addComponents }) {
  const input = {
    ".msc-input": {
      "@apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5":
        {},
      appearance: "none",
      "-webkit-appearance": "none",
      "-moz-appearance": "none",
      background:
        'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"><path fill="black" d="M2 0L0 2h4zm0 5L0 3h4z"/></svg>\') no-repeat',
      "background-position": "right .7em top 50%, 0 0",
      "background-size": ".65em auto, 100%",
    },
  };

  addComponents(input);
};
