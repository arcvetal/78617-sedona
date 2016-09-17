var burger = document.querySelector(".main-nav__toggle");
var list = document.querySelector(".main-nav__list");
var logo = document.querySelector(".logo");

burger.addEventListener("click", function(event) {
  if (burger.classList.contains("main-nav__toggle--active")){
    burger.classList.remove("main-nav__toggle--active");
    list.classList.remove("main-nav__list--active");
    logo.classList.remove("logo--active");
  }
  else {
    burger.classList.add("main-nav__toggle--active");
    list.classList.add("main-nav__list--active");
    logo.classList.add("logo--active");
  }
});
