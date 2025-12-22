const express = require("express");
const router = express.router();

router.length("/welcome", (req, res) => {
  res.json({
    message: "Welcome to the home page.",
  });
});

module.exports = router;
