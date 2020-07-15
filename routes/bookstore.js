const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const books = adminData.books;
  res.render("bookstore", { books: books, docTitle: "Bookstore" });
});

module.exports = router;
