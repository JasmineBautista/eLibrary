const express = require("express");
const author = require("../models/author");
const router = express.Router();
const Author = require("../models/author");

// All authors route
router.get("/", (req, res) => {
  res.render("authors/index");
});

// New author route
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new author() });
});

// create author route
router.post("/", (req, res) => {
  // sends to database
  const author = new Author({ name: req.body.name });
  author
    .save()
    .then((author) => {
      res.redirect("/authors");
    })
    .catch((err) => {
      console.log(err);
      res.render("authors/new", {
        author: author,
        errorMessage: "Error creating Author",
      });
    });
});

module.exports = router;
