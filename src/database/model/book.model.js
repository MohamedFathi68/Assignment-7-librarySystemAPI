import { model, Schema } from "mongoose";
const bookSchema = new Schema({
  name: String,
  title: String,
  author: String,
  date: { type: Date, default: Date.now }
});
export const bookModel = model('Book', bookSchema);