const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("Connection error.");
    process.exit(1);
  }
};

module.exports = connectToDB;
