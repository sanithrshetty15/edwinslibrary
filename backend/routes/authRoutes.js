const express = require("express");
const router = express.Router();
const { registerUser, loginUser, sendOtp, verifyOtp, addBook, getBooks, issueBook, returnBook, getIssuedBooks, requestBook, approveStudent, getPendingStudents, rejectStudent , changePassword } = require("../controllers/authController");
const { model } = require("mongoose");
const { protect, admin } = require("../middleware/authMiddleware");
const User = require("../models/User");


router.get("/profile", protect, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password -__v");

  res.json({
    message: "Protected route accessed",
    user
  });
});
router .post("/register", registerUser);
router.post("/login", loginUser);

router.get("/admin", protect, admin, (req, res) => {
  res.json({ message: "Welcome Admin" });
});

router.post("/admin/send-otp", sendOtp);

router.post("/admin/verify-otp", verifyOtp);

router.post("/book/add", protect, admin, addBook);

router.get("/books", protect, getBooks);

router.post("/book/issue", protect, issueBook);

router.post("/book/return", protect, returnBook);

router.get("/issued", protect, getIssuedBooks);

router.post("/book/request", protect, requestBook);

router.post("/admin/approve-student", protect, admin, approveStudent);

router.get("/admin/pending-students", protect, admin, getPendingStudents);

router.delete("/admin/reject-student", protect, admin, rejectStudent);

router.put("/change-password", protect, changePassword);

module.exports = router;