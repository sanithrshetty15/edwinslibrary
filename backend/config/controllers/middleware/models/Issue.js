const mongoose = require("mongoose");
const { ref } = require("node:process");


const issueSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    },
    
    issueDate: {
        type: Date,
        default: Date.now
    }
});

const Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;