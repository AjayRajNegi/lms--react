require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const authRoutes = require("./routes/auth-routes");

connectToDB();
const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running.");
});
