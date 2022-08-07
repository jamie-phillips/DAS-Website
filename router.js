const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

router.get("/plumbing", function (req, res) {
  res.sendFile(__dirname + "/public/plumbing.html");
});

router.get("/heating", function (req, res) {
  res.sendFile(__dirname + "/public/heating.html");
});

router.get("/reviews", function (req, res) {
  res.sendFile(__dirname + "/public/reviews.html");
});

router.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/public/contact.html");
});

router.get("*", function (req, res) {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

module.exports = router;
