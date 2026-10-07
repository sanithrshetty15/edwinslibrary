const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  },

  quantity: {
    type: Number,
    required: true
  },

  barcode: {
    type: String,
    unique: true,
    required: true
  },

  coverImage: {
    type: String,
    default: ""
  }
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book