const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ajayrajnegi111:ajayrajnegi111@cluster0.utgpsqx.mongodb.net/"
    );
    console.log("mongodb is connected.");
  } catch (error) {
    console.log("Mongodb connection failed.", error);
    process.exit(1);
  }
};

module.exports = connectToDB;
