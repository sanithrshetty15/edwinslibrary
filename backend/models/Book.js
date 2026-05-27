const mongoose =  require("mongoose");


const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    quantity: Number,
    barcode: {
        type: String,
        unique: true
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;