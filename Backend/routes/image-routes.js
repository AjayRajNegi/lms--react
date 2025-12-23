const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");
const uploadMiddleware = require("../middleware/upload-middleware");
const { uploadImage, fetchImages } = require("../controllers/image-controller");

const router = express.Router();

router.post(
  "/upload",
  authMiddleware,
  adminMiddleware,
  uploadMiddleware.single("image"),
  uploadImage
);

router.get("/get", authMiddleware, fetchImages);

module.exports = router;
