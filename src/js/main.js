import "../scss/styles.scss";

const burger = document.querySelector(".header__burger");
const mobileNav = document.querySelector(".header__mobile-nav");

burger.addEventListener("click", () => {
  mobileNav.classList.toggle("header__mobile-nav_active");
});
