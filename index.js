const menu_btn = document.querySelector(".menu-icon");
const side_nav = document.querySelector(".side-menu");
const dark_menu_bg = document.querySelector(".transparent-bg");

menu_btn.addEventListener("click", () => {
  let menu_status = side_nav.getAttribute("data-visible");

  if (menu_status === "false") {
    side_nav.setAttribute("data-visible", true);
    menu_btn.setAttribute("aria-expanded", true);
    dark_menu_bg.style.visibility = "visible";
  } else {
    side_nav.setAttribute("data-visible", false);
    menu_btn.setAttribute("aria-expanded", false);
    dark_menu_bg.style.visibility = "hidden";
  }
  console.log(menu_status);
})