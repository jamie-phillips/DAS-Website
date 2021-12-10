const menuBtn = document.querySelector(".hamburger");
const menuItems = document.querySelector(".nav-body");
const menuItem = document.querySelectorAll(".menu-item");
const body = document.body;

menuBtn.addEventListener("click", () => {
  body.classList.toggle("no-scroll");
  menuBtn.classList.toggle("active");
  menuItems.classList.toggle("open");
});
