const mongoose = require('mongoose');

const bookstore = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  page:{
    type:Number,
    required:true
  }
},{ timestamp: true})
module.exports = mongoose.model('Bookstore',bookstore)