import { model, Schema, Types } from "mongoose";

// Define the Book schema and model
const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Types.ObjectId,
    ref: 'Author',
  },
  date: { type: Date, default: Date.now },
},{versionKey: false});

// Create the Book model
export const bookModel = model("Book", bookSchema);
