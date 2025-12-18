import express from "express";
import bookController from "../controllers/bookController.js";

const router = express.Router();

// Book CRUD routes
router.get("/books", bookController.getAllBooks);
router.get("/books/:id", bookController.getBookById);
router.post("/books", bookController.addBook);
router.put("/books/:id", bookController.updateBook);
router.delete("/books/:id", bookController.deleteBook);

// Book request routes
router.get("/book-requests", bookController.getAllBookRequests);
router.get("/book-requests/:id", bookController.getBookRequestById);
router.post("/book-requests", bookController.requestBook);
router.patch("/book-requests/:id/status", bookController.updateRequestStatus);

export default router;
