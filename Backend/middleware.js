const express = require("express");
const app = express();

const myFIrstMiddleware = (req, res, next) => {
  console.log("Middleware");

  next();
};
