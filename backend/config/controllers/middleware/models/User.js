const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  department: {
    type: String,
    required: true
  },

  section: {
    type: String,
    required: true
  },

  usn: {
    type: String,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  phone: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  barcode: {
    type: String
  },

  role: {
    type: String,
    default: "student"
  },

  isApproved: {
    type: Boolean,
    default: false
  }

}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;