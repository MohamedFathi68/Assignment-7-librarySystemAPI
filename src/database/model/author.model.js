import { model, Schema, Types } from "mongoose";

// Define the author schema and model
const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bio:  String,
  birthDate: Date,
  books: [{
    type: Types.ObjectId,
    ref: 'Book'
  }],
},{versionKey: false});

// Create the Author model
export const authorModel = model("Author", authorSchema);
