const Book = require('../models/bookModels');
const mongoose = require('mongoose');

//get all book
const getBooks = async (req,res)=>{
  const book = await Book.find({}).sort({createdAt: -1})
  res.status(200).json(book)
}
//get a book 
const getBook = async (req,res)=>{
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'id not found'})
  }
  const book = await Book.findById(id)

  if(!book){
    return res.status(400).json({error : 'no such a book'})
  }
  res.status(200).json(book);
}

const createBook = async (req,res)=>{
  const {title,author,page,description} = req.body;
  try{
    const Books = await Book.create({title,author,page,description})
    res.status(200).json(Books)
  }catch(err){
    res.status(400).json({err:'error'})
  }
 
}
const deleteBook = async(req,res)=>{
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({err:"no books available"})
  }

  const book = await Book.findOneAndDelete({_id: id});
  
  if(!book){
    return res.status(400).json({err:"no such books"})
  }
  res.status(200).json(book)
}

const updateBook = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such books'})
  }

  const book = await Book.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!book) {
    return res.status(400).json({error: 'No such books'})
  }

  res.status(200).json(book)
}
module.exports = {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook
}