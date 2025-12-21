require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db.js");
const bookRoutes = require("./routes/book-routes.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connectToDB();

// Middleware -> express.json();
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log("Server is now running.");
});
