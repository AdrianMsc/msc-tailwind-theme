module.exports = function ({ addComponents }) {
  const pageDown = {
    ".msc-pd-header": {
      "@apply bg-white overflow-hidden shadow px-10 py-[14px] flex w-full fixed border-b h-[68px] items-center place-content-between border-monochromes-grey_xlight":
        {},
    },
    ".msc-pd-container": {
      "@apply flex flex-col w-screen h-screen overflow-hidden justify-center":
        {},
    },
    ".msc-pd-text-container": {
      "@apply flex flex-col text-center text-balance w-full gap-8 pb-8 items-center justify-center":
        {},
    },
    ".msc-pd-img-container": {
      "@apply flex z-10 w-full justify-center h-auto": {},
    },
    ".msc-pd-left-plug": {
      "@apply relative flex left-[10px] sm:left-7 -z-10 w-full place-items-end items-center":
        {},
    },
    ".msc-pd-right-plug": {
      "@apply flex w-full items-center place-items-start": {},
    },
    ".msc-pd-timestamp": {
      "@apply text-monochromes-grey text-center pt-8 sm:pt-16": {},
    },
    ".msc-pd-bg-container": {
      "@apply absolute w-screen h-screen flex items-center justify-center": {},
    },
    ".msc-pd-bg": {
      "@apply absolute -z-50  bg-primary-blue_xlight rounded-full size-[400px] sm:size-[500px]":
        {},
    },
  };
  addComponents(pageDown);
};
