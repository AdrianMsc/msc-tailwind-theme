module.exports = function ({ addComponents }) {
  const dropdown = {
    ".numeric-dropdown-container": {
      "@apply flex bg-white h-9 w-[88px] rounded cursor-pointer border border-[#21212161]":
      {},
      "&:hover":{
        "@apply border-[#212121a3]":
        {}
      },
      "&:active":{
          "@apply border-0":{}
        }
    },
    ".numeric-dropdown":{
      "@apply flex items-center w-full place-content-between my-2.5 mx-2":{}
    },
    ".numeric-dropdown-input":{
      "@apply w-12 font-normal text-sm text-black text-center":{}
    },
    ".numeric-dropdown-options-container":{
      "@apply w-[88px] min-h-min bg-white rounded absolute mt-8 shadow":{
        "&:active":{
          "@apply border-0":{}
        }
      }
    },
    ".numeric-dropdown-options":{
      "@apply flex max-h-10 w-full py-[13px] px-6 gap-1.5 items-center font-normal text-sm text-black":{},
        "&:hover":{
          "@apply bg-[#f2f2f280]":{}
        },
    },
    ".dropdown-label":{
      "@apply flex w-full items-center font-bold gap-6":{}
    },
    ".dropdown-container":{
      "@apply flex w-full bg-white h-10 rounded cursor-pointer border border-[#21212161] relative":{},
      "&:hover":{
        "@apply border-[#212121a3]":
        {}
      },
    },
    ".dropdown-button":{
      "@apply flex items-center w-full place-content-between m-2":{}
    },
    ".dropdown-placeholder":{
      "@apply font-normal text-sm text-gray-400":{}
    },
    ".dropdown-options-container":{
      "@apply w-full min-h-min bg-white rounded absolute mt-9 shadow":{}
    },
    ".dropdown-option":{
      "@apply flex max-h-10 w-full py-[13px] px-2.5 gap-1.5 items-center font-normal text-sm text-black":{},
      "&:hover":{
          "@apply bg-[#f2f2f280]":{}
        },
    },
    ".dropdown-disabled":{
      "@apply cursor-not-allowed text-[#21212129] border-[#21212129]":{}
    }
  };

  addComponents(dropdown);
};
