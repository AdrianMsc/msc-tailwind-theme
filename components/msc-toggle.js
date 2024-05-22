module.exports = function ({ addComponents }) {
  const toggle = {
    ".toggle": {
      "relative w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600": {},
      "&:focus": {
        "outline-none ring-4 ring-blue-300": {},
      },
      "&:checked::after": {
        "content-[''] absolute top-[2px] start-[2px] bg-white border-gray-300 border rounded-full h-5 w-5 transition-all transform translate-x-full":
          {},
      },
      "&::after": {
        "content-[''] absolute top-[2px] start-[2px] bg-white border-gray-300 border rounded-full h-5 w-5 transition-all":
          {},
      },
    },
  };
  addComponents(toggle);
};
