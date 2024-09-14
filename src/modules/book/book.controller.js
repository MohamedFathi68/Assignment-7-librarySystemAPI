import { bookModel } from "../../database/model/book.model.js";

const createBook = async (req, res) => {
  let data = await bookModel.insertMany(req.body)
    res.status(201).json({message:'Book created successfully' , data});
};

export {createBook}