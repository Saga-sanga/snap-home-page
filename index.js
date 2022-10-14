const menu_btn = document.querySelector(".menu-icon");
const side_nav = document.querySelector(".side-menu");
const dark_menu_bg = document.querySelector(".transparent-bg");
const features_icon = document.querySelector("#features-icon");
const company_icon = document.querySelector("#company-icon");
const features = document.querySelector("#features-text");
const company = document.querySelector("#company-text");
const features_sub_menu = document.querySelector("#features-sub-menu");
const company_sub_menu = document.querySelector("#company-sub-menu");

menu_btn.addEventListener("click", () => {
  let menu_status = side_nav.getAttribute("data-visible");

  if (menu_status === "false") {
    side_nav.setAttribute("data-visible", true);
    menu_btn.setAttribute("aria-expanded", true);
    document.body.style.overflowY = "hidden";
    dark_menu_bg.style.visibility = "visible";
  } else {
    side_nav.setAttribute("data-visible", false);
    menu_btn.setAttribute("aria-expanded", false);
    document.body.style.overflowY = "scroll";
    dark_menu_bg.style.visibility = "hidden";
  }
  // console.log(document.body);
})

features.addEventListener("click", () => {
  let status = features.getAttribute("data-collapse");
  if (status === "false") {
    features.setAttribute("data-collapse", true);
    features_icon.src = './images/icon-arrow-up.svg';
    features_sub_menu.style.display = "block";
  } else {
    features.setAttribute("data-collapse", false);
    features_icon.src = './images/icon-arrow-down.svg';
    features_sub_menu.style.display = "none";
  }
})

company.addEventListener("click", () => {
  let status = company.getAttribute("data-collapse");
  if (status === "false") {
    company.setAttribute("data-collapse", true);
    company_icon.src = './images/icon-arrow-up.svg';
    company_sub_menu.style.display = "block";
  } else {
    company.setAttribute("data-collapse", false);
    company_icon.src = './images/icon-arrow-down.svg';
    company_sub_menu.style.display = "none";
  }
})
