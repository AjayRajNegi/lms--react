import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    isbn: {
      type: String,
      trim: true,
    },
    publishedDate: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform(_doc, ret) {
        // Normalize Mongo _id to id for the frontend
        ret.id = ret._id.toString();
        delete ret._id;
      },
    },
  }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
