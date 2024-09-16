import { authorModel } from "../../database/model/author.model.js";
import { bookModel } from "../../database/model/book.model.js";

const createBook = async (req, res) => {
  let data = await bookModel.insertMany(req.body)
    res.status(201).json({message:'Book created successfully' , data});
};

const getAllBook = async (req, res) => {
  let search = String(req.query.search);
  let page = req.query.page*1 || 1;
  let limit = 5;
  let skip = (page - 1)*limit;
  if(req.query.search){
  let data = await bookModel.find({
    $or:[
      {title:{$regex:search, $options:'i'}},
      {author: await authorModel.find({name:{$regex:search,$options:'i'}}).select('_id').populate('books',"-__v")}
    ]
  }).populate('author','-_id -books -__v').limit(limit).skip(skip);
  res.status(200).json({message:"success",data});
  }else{
let data = await bookModel.find().populate('author','-_id -books -__v').limit(limit).skip(skip);
  res.status(200).json({message:"success",data});
  }
};

const getBookById = async (req, res)=>{
  let data = await bookModel.findById(req.params.id,{__v:false}).populate('author','-_id -books -__v');
  res.status(200).json({message:"success",data});
}

const updateBook = async (req, res) => {
  let data = await bookModel.findByIdAndUpdate(req.params.id, req.body).populate('author','-_id -books -__v');
  res.status(200).json({message:"success",data});
};

const deleteBook = async (req, res) => {
  let data = await bookModel.findByIdAndDelete(req.params.id).populate('author','-_id -books -__v');
  res.status(200).json({message:"success",data});
};

export {createBook,getAllBook, getBookById,updateBook,deleteBook}
