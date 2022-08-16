let reviews = JSON.parse(jsonData.innerText).data;
for (review of reviews) {
  if (review["review_text"]) {
    let reviewDiv = document.createElement("div");
    let dateTime = document.createElement("p");
    let reviewP = document.createElement("p");
    dateTime.innerText = new Date(review["created_time"]).toDateString();
    reviewP.innerText = review["review_text"];
    reviewDiv.appendChild(dateTime);
    reviewDiv.appendChild(reviewP);
    reviewScroller.appendChild(reviewDiv);
    console.log(review);
  }
}
