module.exports = function ({ addComponents }) {
  const toggle = {
    ".msc-toggle": {
      "@apply flex items-center cursor-pointer select-none w-fit h-fit":{}
    },
    ".msc-toggle-container": {
      "@apply h-6 w-11 rounded-full bg-monochromes-grey_xlight peer-checked:bg-primary-blue":{}
    },
    ".msc-toggle-dot": {
      "@apply absolute flex items-center justify-center w-4 h-4 transition bg-white rounded-full left-1 top-1 peer-checked:translate-x-full pt-1 peer-checked:left-2 shadow":{}
    },
    ".msc-toggle-container-text": {
      "@apply h-6 w-[60px] rounded-full bg-monochromes-grey_xlight text-xs text-white peer-checked:bg-primary-blue peer-checked:before:content-[attr(before)] before:absolute before:top-[3px] before:left-2.5 before:font-bold after:content-[attr(after)] after:absolute after:top-[3px] after:right-1 after:pr-2.5 peer-checked:after:hidden after:text-black after:font-bold":{}
    },
    ".msc-toggle-dot-text": {
      "@apply absolute flex items-center justify-center w-4 h-4 transition bg-white rounded-full left-1 top-1 peer-checked:translate-x-full pt-1 peer-checked:left-6 shadow":{}
    },
    ".msc-toggle-container-disabled": {
      "@apply h-6 w-[60px] rounded-full  bg-[#dbdbdb66] text-xs text-white peer-checked:bg-[#1c58db66] peer-checked:before:content-[attr(before)] before:absolute before:top-[3px] before:left-2.5 before:font-bold after:content-[attr(after)] after:absolute after:top-[3px] after:right-1 after:pr-2.5 peer-checked:after:hidden after:text-[#00000066] after:font-bold cursor-not-allowed":{}
    },
    ".msc-toggle-dot-disabled": {
      "@apply absolute flex items-center justify-center w-4 h-4 transition bg-[#ffffff66] rounded-full left-1 top-1 peer-checked:translate-x-full pt-1 peer-checked:left-6 shadow cursor-not-allowed":{}
    },
    ".msc-toggle-container-text-lg": {
      "@apply h-8 w-[200px] rounded-full bg-[#21212129] text-xs text-[#00000066] peer-checked:before:content-[attr(before)] before:absolute before:top-2 before:left-5 before:font-bold after:content-[attr(after)] after:absolute after:right-5 after:top-2 peer-checked:after:hidden after:text-[#00000066] after:font-bold":{}
    },
    ".msc-toggle-dot-text-lg": {
      "@apply absolute place-content-center flex w-[96px] h-6 transition bg-white rounded-full left-1 top-1 peer-checked:translate-x-full peer-checked:left-1 text-black font-bold before:content-[attr(before)] before:absolute before:top-[3px] before:text-xs peer-checked:after:content-[attr(after)] after:absolute after:top-[3px] after:right-1 after:pr-2.5 after:text-xs after:text-black after:font-bold peer-checked:before:hidden shadow":{}
    },
  };
  addComponents(toggle);
};