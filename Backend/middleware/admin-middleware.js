const isAdminUser = (req, res, next) => {
  if (req.userInfo !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Access denied!",
    });
  }
  next();
};

module.exports = isAdminUser;
