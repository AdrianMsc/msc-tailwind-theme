const sideNav = `
<ul class="space-y-2 font-medium">
          <li>
            <a
              href="../index.html"
              class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-5 group hover:bg-gray-100"
              >Home</a
            >
          </li>
          <!-- GETTING STARTED -->
          <li>
            <button
              type="button"
              class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <!-- <img
                class="flex-shrink-0 w-5 h-5"
                width="24"
                height="24"
                src="../assets/icons/home.svg"
              /> -->
              <span
                class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
                >Getting Started</span
              >
              <img
                class="flex-shrink-0 w-3 h-3"
                width="24"
                height="24"
                src="../assets/icons/chevron-down.svg"
              />
            </button>
            <ul id="dropdown-example" class="hidden py-2 space-y-2">
              <li>
                <a
                  href="#"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                  >Component Status</a
                >
              </li>
            </ul>
          </li>
          <!-- FOUNDATIONS  -->
          <li>
            <button
              type="button"
              class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
              aria-controls="dropdown-foundations"
              data-collapse-toggle="dropdown-foundations"
            >
              <!-- <img
                class="flex-shrink-0 w-5 h-5"
                width="24"
                height="24"
                src="../assets/icons/home.svg"
              /> -->
              <span
                class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
                >Foundations</span
              >
              <img
                class="flex-shrink-0 w-3 h-3"
                width="24"
                height="24"
                src="../assets/icons/chevron-down.svg"
              />
            </button>
            <ul id="dropdown-foundations" class="hidden py-2 space-y-2">
              <li>
                <a
                  href="colors.html"
                  class="flex items-center p-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
                >
                  <img
                    class="flex-shrink-0 w-5 h-5"
                    width="24"
                    height="24"
                    src="../assets/icons/colors.svg"
                  />

                  <span class="flex-1 ms-3 whitespace-nowrap">Colors</span>
                </a>
              </li>
            </ul>
          </li>
          <!-- AcTION  -->
          <li>
            <button
              type="button"
              class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
              aria-controls="dropdown-action"
              data-collapse-toggle="dropdown-action"
            >
              <!-- <img
                class="flex-shrink-0 w-5 h-5"
                width="24"
                height="24"
                src="../assets/icons/home.svg"
              /> -->
              <span
                class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
                >Action</span
              >
              <img
                class="flex-shrink-0 w-3 h-3"
                width="24"
                height="24"
                src="../assets/icons/chevron-down.svg"
              />
            </button>
            <ul id="dropdown-action" class="hidden py-2 space-y-2">
              <li>
                <a
                  href="buttons.html"
                  class="flex items-center p-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
                >
                  <img
                    class="flex-shrink-0 w-5 h-5"
                    width="24"
                    height="24"
                    src="../assets/icons/buttons.svg"
                  />

                  <span class="flex-1 ms-3 whitespace-nowrap">Buttons</span>
                </a>
              </li>
              <li>
                <a
                  href="drop-down.html"
                  class="flex items-center p-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
                >
                  <img
                    class="flex-shrink-0 w-5 h-5"
                    width="24"
                    height="24"
                    src="../assets/icons/drop-down.svg"
                  />

                  <span class="flex-1 ms-3 whitespace-nowrap">Drop Down</span>
                </a>
              </li>
            </ul>
          </li>
          <!-- COLECTION 
          <li>
            <button
              type="button"
              class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
              aria-controls="dropdown-colection"
              data-collapse-toggle="dropdown-colection"
            >
              <img
                class="flex-shrink-0 w-5 h-5"
                width="24"
                height="24"
                src="../assets/icons/home.svg"
              /> 
              <span
                class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
                >Colection</span
              >
              <img
                class="flex-shrink-0 w-3 h-3"
                width="24"
                height="24"
                src="../assets/icons/chevron-down.svg"
              />
            </button>
            <ul id="dropdown-colection" class="hidden py-2 space-y-2">
              <li>
                <a
                  href="buttons.html"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                  >Button</a
                >
              </li>
            </ul>
          </li>-->
          <!-- FORM -->
          <li>
            <button
              type="button"
              class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
              aria-controls="dropdown-form"
              data-collapse-toggle="dropdown-form"
            >
              <!-- <img
                class="flex-shrink-0 w-5 h-5"
                width="24"
                height="24"
                src="../assets/icons/home.svg"
              /> -->
              <span
                class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
                >Form</span
              >
              <img
                class="flex-shrink-0 w-3 h-3"
                width="24"
                height="24"
                src="../assets/icons/chevron-down.svg"
              />
            </button>
            <ul id="dropdown-form" class="hidden py-2 space-y-2">
              <li>
                <a
                  href="inputs.html"
                  class="flex items-center p-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
                >
                  <img
                    class="flex-shrink-0 w-5 h-5"
                    width="24"
                    height="24"
                    src="../assets/icons/inputs.svg"
                  />

                  <span class="flex-1 ms-3 whitespace-nowrap">Inputs</span>
                </a>
              </li>
              <li>
                <a
                  href="toggle.html"
                  class="flex items-center p-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
                >
                  <img
                    class="flex-shrink-0 w-5 h-5"
                    width="24"
                    height="24"
                    src="../assets/icons/toggle.svg"
                  />

                  <span class="flex-1 ms-3 whitespace-nowrap">Toggle</span>
                </a>
              </li>
              <li>
                <a
                  href="checkbox.html"
                  class="flex items-center p-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
                >
                  <img
                    class="flex-shrink-0 w-5 h-5"
                    width="24"
                    height="24"
                    src="../assets/icons/drop-down.svg"
                  />

                  <span class="flex-1 ms-3 whitespace-nowrap">Checkbox</span>
                </a>
              </li>

              <li>
                <a
                  href="radio.html"
                  class="flex items-center p-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
                >
                  <img
                    class="flex-shrink-0 w-5 h-5"
                    width="24"
                    height="24"
                    src="../assets/icons/cog.svg"
                  />

                  <span class="flex-1 ms-3 whitespace-nowrap">Radio</span>
                </a>
              </li>
            </ul>
          </li>

          <!-- LAYOUT  -->
          <li>
            <button
              type="button"
              class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
              aria-controls="dropdown-layout"
              data-collapse-toggle="dropdown-layout"
            >
              <!-- <img
                    class="flex-shrink-0 w-5 h-5"
                    width="24"
                    height="24"
                    src="../assets/icons/home.svg"
                  /> -->
              <span
                class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
                >Layout</span
              >
              <img
                class="flex-shrink-0 w-3 h-3"
                width="24"
                height="24"
                src="../assets/icons/chevron-down.svg"
              />
            </button>
            <ul id="dropdown-layout" class="hidden py-2 space-y-2">
              <li>
                <a
                  href="dividers.html"
                  class="flex items-center p-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
                >
                  <img
                    class="flex-shrink-0 w-5 h-5"
                    width="24"
                    height="24"
                    src="../assets/icons/colors.svg"
                  />

                  <span class="flex-1 ms-3 whitespace-nowrap">Dividers</span>
                </a>
              </li>
            </ul>
          </li>

          <!-- OVERLAY  -->
          <li>
            <button
              type="button"
              class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
              aria-controls="dropdown-overlay"
              data-collapse-toggle="dropdown-overlay"
            >
              <!-- <img
                class="flex-shrink-0 w-5 h-5"
                width="24"
                height="24"
                src="../assets/icons/home.svg"
              /> -->
              <span
                class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
                >Overlay</span
              >
              <img
                class="flex-shrink-0 w-3 h-3"
                width="24"
                height="24"
                src="../assets/icons/chevron-down.svg"
              />
            </button>
            <ul id="dropdown-overlay" class="hidden py-2 space-y-2">
              <li>
                <a
                  href="modal.html"
                  class="flex items-center p-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
                >
                  <img
                    class="flex-shrink-0 w-5 h-5"
                    width="24"
                    height="24"
                    src="../assets/icons/modal.svg"
                  />

                  <span class="flex-1 ms-3 whitespace-nowrap">Modal</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>

`;

createPagesSidenav = () => {
  document.getElementById("sidenav-menu").innerHTML = sideNav;
};

createPagesSidenav();

toggleSideNav = () => {
  const body = document.querySelector("body");
  const sidebar = document.querySelector("#msc-sidebar");
  body.classList.toggle("overflow-hidden");
  sidebar.classList.toggle("-translate-x-full");
  sidebar.classList.toggle("transform-none");
};
