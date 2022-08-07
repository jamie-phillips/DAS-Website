const menuBtn = document.querySelector(".hamburger");
const menuItems = document.querySelector(".nav-body");
const menuItem = document.querySelectorAll(".menu-item");
const reviewScroller = document.getElementById("review-scroller");
const body = document.body;

menuBtn.addEventListener("click", () => {
  body.classList.toggle("no-scroll");
  menuBtn.classList.toggle("active");
  menuItems.classList.toggle("open");
});

onPageLoad();

async function onPageLoad() {
  let url = "/api";
  let response = await fetch(url);
  let jsonRes = await response.json();
  let reviews = jsonRes.data;
  for (review of reviews) {
    let reviewDiv = document.createElement("div");
    reviewDiv.innerText = JSON.stringify(review);
    reviewScroller.appendChild(reviewDiv);
    console.log(review);
  }
}
