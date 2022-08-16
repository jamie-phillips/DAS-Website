const express = require("express");
const fetch = require("node-fetch");
const schedule = require("node-schedule");
require("dotenv").config();

const pageAccessToken = process.env.PAGE_ACCESS_TOKEN;
let reviews;

const app = express();
const port = 3000;
app.set("view engine", "ejs");

app.get("/api", async (req, res) => {
  res.json(reviews);
});

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render(__dirname + "/public/index.ejs", {
    json: JSON.stringify(reviews),
  });
});

app.get("/plumbing", function (req, res) {
  res.sendFile(__dirname + "/public/plumbing.html");
});

app.get("/heating", function (req, res) {
  res.sendFile(__dirname + "/public/heating.html");
});

app.get("/reviews", function (req, res) {
  res.sendFile(__dirname + "/public/reviews.html");
});

app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/public/contact.html");
});

app.get("*", function (req, res) {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(port, async () => {
  console.log(`Listening on port ${port}`);
  reviews = await getReviews();
});

schedule.scheduleJob("0 0 * * 0", async function () {
  reviews = await getReviews();
});

async function getReviews() {
  console.log("Getting Facebook reviews...");
  const url = `https://graph.facebook.com/v14.0/115953465619471/ratings?access_token=${pageAccessToken}`;
  const response = await fetch(url);
  console.log("Facebook reviews recieved");
  return await response.json();
}
