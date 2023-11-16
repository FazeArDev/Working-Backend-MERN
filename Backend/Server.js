require('dotenv').config()
const express = require('express');
const Bookstore = require('./routes/bookstore');
const app = express()
const mongoose = require('mongoose')
//listen 
app.listen(process.env.PORT,()=>{
  console.log('Listening port',process.env.PORT)
})
//middle ware 
app.use(express.json())

app.use((req,res,next)=>{
  console.log(req.path,req.method);
  next() 
})
//routes
app.use('/api/books',Bookstore)

app.get('/',(req,res)=>{
  res.json({msg:'website'})
})

mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    console.log('connected to database')
    app.listen(5000,()=>{
      console.log('listening request on port ',5000)
    })    
  })
  .catch((err)=>{
    console.log(err)
  })


