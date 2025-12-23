const isAdminUser = (req, res, next) => {
  console.log(req.userInfo);
  if (req.userInfo.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Access denied!",
    });
  }
  next();
};

module.exports = isAdminUser;
