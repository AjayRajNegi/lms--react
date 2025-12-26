const express = require("express");
const {
  createAutthor,
  createBook,
  getBookWithAuthor,
} = require("../controllers/book-controller");

const router = express.Router();

router.post("/author", createAutthor);
router.post("/book", createBook);
router.get("/book/:id", getBookWithAuthor);
module.exports = router;
