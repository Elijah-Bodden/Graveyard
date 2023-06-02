window.addEventListener("click", (event) => {
    if (!document.querySelector(".header-mob").contains(event.target) && !document.querySelector(".nav-main_menu-mobile-button").contains(event.target)) {
      document.querySelector(".nav-main_menu-mobile-button").dataset.mobilevisible = "false"
      document.querySelector(".header-mob").classList.remove("header-mob-expanded")
    }
  });

document.querySelector(".nav-main_menu-mobile-button").onclick = (e) => {
    var nav = document.querySelector(".header-mob")
    console.log(document.querySelector(".nav-main_menu-mobile-button").dataset.mobilevisible)
    if (document.querySelector(".nav-main_menu-mobile-button").dataset.mobilevisible == "false") {
        nav.classList.add("header-mob-expanded")
    } else nav.classList.remove("header-mob-expanded")
    document.querySelector(".nav-main_menu-mobile-button").dataset.mobilevisible = (document.querySelector(".nav-main_menu-mobile-button").dataset.mobilevisible=="false").toString()
}
