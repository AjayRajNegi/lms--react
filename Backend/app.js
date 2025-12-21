const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ajayrajnegi111:ajayrajnegi111@cluster0.iiatka6.mongodb.net/"
  )
  .then(() => console.log("Database successfully connected."))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
  try {
    // const newUser = await User.create({
    //   name: "Travis",
    //   email: "Travis@gmail.com",
    //   age: 59,
    //   isActive: false,
    //   tags: ["developer", "designer", "manager"],
    // });
    // console.log("Created new user.", newUser);
    // const allUsers = await User.find({});
    // console.log(allUsers);

    // const getDeactiveUsers = await User.find({
    //   isActive: false,
    // });
    // console.log(getDeactiveUsers);

    // const userById = await User.findById(newUser._id);
    // console.log(userById);

    // const selectedFields = await User.find().select("name email -_id");
    // console.log(selectedFields);

    // const limitedUser = await User.find().limit(5).skip(3);
    // console.log(limitedUser);

    // const sortedUser = await User.find().sort({ age: -1 });
    // console.log(sortedUser);

    const countActive = await User.countDocuments({ isActive: false });
    console.log(countActive);
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();
