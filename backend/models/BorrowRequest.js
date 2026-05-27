const mongoose = require("mongoose");

const borrowRequestSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
  },
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book"
  },
    status: {
      type: String,
      enum: ["pending", "approved", "return_requested", "returned"],
      default: "pending"
  },
    requestDate: {
      type: Date,
      default: Date.now
  }

});

const BorrowRequest = mongoose.model("BorrowRequest", borrowRequestSchema);

module.exports = BorrowRequest;