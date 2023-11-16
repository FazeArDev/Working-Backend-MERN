const express = require('express');
const Bookstore = require('../models/bookModels')
const router = express.Router();
const {getBooks,getBook,createBook,deleteBook,updateBook} = require('../controller/bookController');
//get all books
router.get('/', getBooks);
//get a single book
router.get('/:id',getBook);
//post a book
router.post('/',createBook);
//delete a book
router.delete('/:id',deleteBook);
//update workout
router.patch('/:id',updateBook);


module.exports = router