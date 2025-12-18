import Book from "../models/Book.js";
import BookRequest from "../models/BookRequest.js";

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (err) {
    next(err);
  }
};

const getBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (err) {
    next(err);
  }
};

const addBook = async (req, res, next) => {
  try {
    const { title, author, isbn, publishedDate } = req.body;

    if (!title || !author) {
      return res.status(400).json({
        success: false,
        message: "Title and author are required",
      });
    }

    const newBook = await Book.create({
      title,
      author,
      isbn,
      publishedDate,
    });

    res.status(201).json({
      success: true,
      message: "Book added successfully",
      data: newBook,
    });
  } catch (err) {
    next(err);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (err) {
    next(err);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

const getAllBookRequests = async (req, res, next) => {
  try {
    const requests = await BookRequest.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "Book requests retrieved successfully",
      data: requests,
    });
  } catch (err) {
    next(err);
  }
};

const getBookRequestById = async (req, res, next) => {
  try {
    const request = await BookRequest.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Book request not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book request retrieved successfully",
      data: request,
    });
  } catch (err) {
    next(err);
  }
};

const requestBook = async (req, res, next) => {
  try {
    const { bookTitle, author, requesterName, requesterEmail } = req.body;

    if (!bookTitle || !author || !requesterName || !requesterEmail) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newRequest = await BookRequest.create({
      bookTitle,
      author,
      requesterName,
      requesterEmail,
    });

    res.status(201).json({
      success: true,
      message: "Book request created successfully",
      data: newRequest,
    });
  } catch (err) {
    next(err);
  }
};

const updateRequestStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    if (!["pending", "approved", "rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status. Must be pending, approved, or rejected",
      });
    }

    const updatedRequest = await BookRequest.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({
        success: false,
        message: "Book request not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Request status updated successfully",
      data: updatedRequest,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  getAllBookRequests,
  getBookRequestById,
  requestBook,
  updateRequestStatus,
};
