toggleSideNav = () => {
  const body = document.querySelector("body");
  const sidebar = document.querySelector("#msc-sidebar");
  body.classList.toggle("overflow-hidden");
  sidebar.classList.toggle("-translate-x-full");
  sidebar.classList.toggle("transform-none");
};
