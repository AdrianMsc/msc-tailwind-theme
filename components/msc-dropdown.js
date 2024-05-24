module.exports = function ({ addComponents }) {
  const dropdown = {
    ".msc-dropdown": {
      "@apply border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5":
        {},
      appearance: "none",
      "-webkit-appearance": "none",
      "-moz-appearance": "none",
      background:
        'url(\'data:image/svg+xml;utf8,<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clip-rule="evenodd"/></svg>\') no-repeat',
      "background-position": "right .7em top 50%, 0 0",
      "background-size": ".95em auto, 100%",
      "background-color": "white",
    },
  };

  addComponents(dropdown);
};
