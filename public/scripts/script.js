const menuBtn = document.querySelector(".hamburger");
const menuItems = document.querySelector(".nav-body");
const menuItem = document.querySelectorAll(".menu-item");
const jsonData = document.getElementById("json");
const reviewScroller = document.getElementById("review-scroller");
const body = document.body;

menuBtn.addEventListener("click", () => {
  body.classList.toggle("no-scroll");
  menuBtn.classList.toggle("active");
  menuItems.classList.toggle("open");
});
