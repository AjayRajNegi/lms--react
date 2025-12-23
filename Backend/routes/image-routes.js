const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");
const uploadMiddleware = require("../middleware/upload-middleware");
const { uploadImage } = require("../controllers/image-controller");

const router = express.Router();

console.log(
  typeof authMiddleware,
  typeof adminMiddleware,
  typeof uploadMiddleware,
  typeof uploadImage
);

router.post(
  "/upload",
  authMiddleware,
  adminMiddleware,
  uploadMiddleware.single("image"),
  uploadImage
);

module.exports = router;
