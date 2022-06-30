const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BooksSchema = new Schema({
  name: String,
  image_url : String,
  author : String,
  pages : String,
  price : String,
})

const Books = mongoose.model('Users', BooksSchema)
module.exports = Books

