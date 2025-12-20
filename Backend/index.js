const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

const products = [
  { id: 1, title: "Product 1" },
  { id: 2, title: "Product 2" },
];

app.get("/", (req, res) => {
  res.render("home", { title: "Home", products: products });
});

app.get("about", (req, res) => {
  app.render("about", { title: "About" });
});

const port = 3000;
app.listen(port, () => {
  console.log("Running at port 3000");
});
