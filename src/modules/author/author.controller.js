import { authorModel } from "../../database/model/author.model.js";

const createAuthor = async (req, res) => {
  let author = await authorModel.insertMany(req.body)
  res.status(201).json({message:'Author created successfully', author});
};

const getAllAuthor = async (req, res) => {
  let search = req.query.search;
  let page = req.query.page*1 || 1;
  let limit = 5;
  let skip = (page - 1)*limit;
  let author = await authorModel.find({
    $or:[
      {name:{$regex:search, $options:'i'}},
      {bio:{$regex:search, $options:'i'}}
    ]
  },{__v:false}).populate('books',"-__v").limit(limit).skip(skip);
  res.status(200).json({message:"success",currentPage: page , author});
};

const getAuthorById = async (req, res)=>{
  let author = await authorModel.findById(req.params.id,{__v:false}).populate('books',"-__v").limit(limit).skip(skip);
  res.status(200).json({message:"success",author});
}

const updateAuthor = async (req, res) => {
  let data = await authorModel.findByIdAndUpdate(req.params.id, req.body , {new:true}).populate('books',"-__v");
  res.status(200).json({message:"success",data});
};

const deleteAuthor = async (req, res) => {
  let data = await authorModel.findByIdAndDelete(req.params.id);
  res.status(200).json({message:"Author deleted successfully",data});
};

export {createAuthor,getAllAuthor,getAuthorById,updateAuthor,deleteAuthor}

/*
• DELETE request to delete an author by its ID.
*/