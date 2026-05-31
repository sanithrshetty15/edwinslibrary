const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");
const Book = require("../models/Book");
const Issue = require("../models/Issue");
const BorrowRequest = require("../models/BorrowRequest");
let otpStore = {};

const registerUser = async (req, res) => {
  try {

    const {
      name,
      department,
      section,
      usn,
      email,
      phone
    } = req.body;

    //  Check duplicate USN
    const existingUsn = await User.findOne({ usn });

    if (existingUsn) {
      return res.status(400).json({
        message: "USN already registered"
      });
    }

    //  Check duplicate email
    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
      return res.status(400).json({
        message: "Email already registered"
      });
    }

    //  Check duplicate phone
    const existingPhone = await User.findOne({ phone });

    if (existingPhone) {
      return res.status(400).json({
        message: "Phone number already registered"
      });
    }

    //  Validate USN format
    const usnPattern = /^4AL\d{2}(CS|IS|CG|DS|AI|ME|CV|IOT|EC)\d{3}$/;

    if (!usnPattern.test(usn)) {
      return res.status(400).json({
        message: "Invalid USN format"
      });
    }

    //  Default password = USN
    const hashedPassword = await bcrypt.hash(usn, 10);

    //  Create student account
    const user = new User({
      name,
      department,
      section,
      usn,
      email,
      phone,
      password: hashedPassword,
      barcode: usn,
      isApproved: false
    });

    await user.save();

    res.status(201).json({
      message:
        "Registration request submitted successfully. Wait for librarian approval."
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });
  }
};


const loginUser = async (req,res) => {
    const { usn, password } = req.body;

    const user = await User.findOne({ usn });
    
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }  
    
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
  }
    const token = jwt.sign(
      { id: user._id },
       process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.status(200).json({ 
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        usn: user.usn,
        role: user.role,
        isApproved: user.isApproved
      }
    });
};
 
const sendOtp = async (req, res) => {
  const { email } = req.body;

  const adminEmails = [
    "libraryedwins@gmail.com",
    "sanithrshetty15@gmail.com"
  ];

  if (!adminEmails.includes(email)) {
    return res.status(403).json({ message: "Not authorized admin"});
  }

  const otp = Math.floor(100000 + Math.random() * 900000);

  otpStore[email] = otp;


  await sendEmail(
    email,
    "Welcome Back to Edwins library",
    // "Your Admin Login OTP",
    // "Do not shre Otp with anyone !!",
    `Your OTP is: ${otp}`
  );

  res.status(200).json({ message: "OTP sent to email" });
};


const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  
  if (otpStore[email] != otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  const token = jwt.sign(
    { email, role: "admin" },
     process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.status(200).json({
    message: "Admin login successful",
    token
  });
}

const addBook = async (req, res) => {
  const { title, author, quantity, barcode } = req.body;

  const existingBook = await Book.findOne({ barcode });

  if (existingBook) {
  return res.status(400).json({ message: "Book already exists" });
  }
  const book = new Book({
    title,
    author,
    quantity,
    barcode
  });

  await book.save();

  res.status(201).json({ message: "Book added successfully" });
};

const getBooks = async (req, res) => {
  const books =await Book.find();

  res.status(200).json(books);
};


const issueBook = async (req, res) => {
  try {
    const { barcode } = req.body;

    // Only students can issue (must have id)
    if (!req.user.id) {
      return res.status(403).json({ message: "Only students can issue books" });
    }

    const book = await Book.findOne({ barcode });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    if (book.quantity <= 0) {
      return res.status(400).json({ message: "Book not available" });
    }

    const alreadyIssued = await Issue.findOne({
      user: req.user.id,
      book: book._id
    });

    if (alreadyIssued) {
  return res.status(400).json({ message: "Book already issued" });
    }

    // Reduce quantity
    book.quantity -= 1;
    await book.save(); // ❗ FIX: () was missing

    // Save issue record
    const issue = new Issue({
      user: req.user.id,
      book: book._id
    });

    await issue.save();

    res.status(200).json({ message: "Book issued successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

const returnBook = async (req, res) => {
  try {
    const { barcode } = req.body;

    //Only students can return books
    if (!req.user.id) {
      return res.status(403).json({ message: "Only students can return books" });
    }

    const book = await Book.findOne({ barcode });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    //  Check issued record
    const issuedBook = await Issue.findOne({
      user: req.user.id,
      book: book._id
    });

    if (!issuedBook) {
      return res.status(400).json({ message: "This book was not issued by you" });
    }

    // Increase quantity
    book.quantity += 1;

    await book.save();

    // 🗑 Remove issue record
    await Issue.findOneAndDelete({
      user: req.user.id,
      book: book._id
    });

    res.status(200).json({
      message: "Book returned successfully"
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error"
    });
  }
};

const getIssuedBooks = async (req, res) => {
  const issues = await Issue.find()
    .populate("user", "usn name")
    .populate("book", "title");

  res.status(200).json(issues);
};


const requestBook = async (req, res) => {
  try {
    const { barcode } = req.body;

    // Only students can request books
    if (!req.user.id) {
      return res.status(403).json({
        message: "Only students can request books"
      });
    }

  const student = await User.findById(req.user.id);

  if (!student.isApproved) {
  return res.status(403).json({
    message: "Wait for librarian approval"
  });
  }

    // Find book
    const book = await Book.findOne({ barcode });

    if (!book) {
      return res.status(404).json({
        message: "Book not found"
      });
    }

    //  Check availability
    if (book.quantity <= 0) {
      return res.status(400).json({
        message: "Book not available"
      });
    }

    // Prevent duplicate active requests
    const existingRequest = await BorrowRequest.findOne({
      user: req.user.id,
      book: book._id,
      status: { 
        $in: ["pending", "approved", "return_requested"] 
      }
    });

    if (existingRequest) {
      return res.status(400).json({
        message: "You already have an active request for this book"
      });
    }

    // Create borrow request
    const request = new BorrowRequest({
      user: req.user.id,
      book: book._id
    });

    await request.save();

    res.status(201).json({
      message: "Book request sent to admin successfully"
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error"
    });
  }
};

const approveStudent = async (req, res) => {
  try {

    const { userId } = req.body;

    // Find student
    const student = await User.findById(userId);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    // Check already approved
    if (student.isApproved) {
      return res.status(400).json({
        message: "Student already approved"
      });
    }

    // Approve student
    student.isApproved = true;

    await student.save();

    // Send approval email
    await sendEmail(
      student.email,
      
      "Welcome to Edwin's Library",

      `
      <div style="
        font-family: Arial, sans-serif;
        background: #000000;
        padding: 40px;
        color: #9be931;
      ">

        <div style="
          max-width: 600px;
          background: #111111;
          margin: auto;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #9be931;
          box-shadow: 0 0 20px rgba(155, 233, 49, 0.3);
        ">

          <div style="
            background: #9be931;
            color: #000000;
            padding: 25px;
            text-align: center;
          ">
            <h1>Edwin's Library</h1>
          </div>

          <div style="padding: 30px;">

            <h2>Hello ${student.name},</h2>

            <p>
              Your registration has been approved successfully.
            </p>

            <div style="
              background: #0a0a0a;
              border: 1px solid #9be931;
              padding: 20px;
              border-radius: 10px;
              margin-top: 20px;
            ">

              <p>
                <strong>USN:</strong> ${student.usn}
              </p>

              <p>
                <strong>Default Password:</strong> ${student.usn}
              </p>

            </div>

            <p style="
              margin-top: 20px;
              color: #9ca3af;
            ">
              Please change your password after first login.
            </p>

            <div style="
              text-align:center;
              margin-top:30px;
            ">
              <a href="#"
                 style="
                   background:#00ff88;
                   color:#000000;
                   padding:12px 24px;
                   border-radius:8px;
                   text-decoration:none;
                   display:inline-block;
                   font-weight:bold;
                 ">
                 Login to Edwin's Library
              </a>
            </div>

          </div>

          <div style="
            background:#0a0a0a;
            text-align:center;
            padding:15px;
            font-size:14px;
            color:#9ca3af;
            border-top:1px solid #9be931;
          ">
            Edwin's Library Management System
          </div>

        </div>
      </div>
      `
    );

    res.status(200).json({
      message: "Student approved successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });
  }
};


const getPendingStudents = async (req, res) => {
  try {

    // Find all unapproved students
    const students = await User.find({
      isApproved: false,
      role: "student"
    }).select("-password");

    res.status(200).json(students);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });
  }
};  


const changePassword = async (req, res) => {
  try {

    const {
      oldPassword,
      newPassword
    } = req.body;

    // Find logged in user
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Check old password
    const isMatch = await bcrypt.compare(
      oldPassword,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Old password is incorrect"
      });
    }

    // Validate new password length
    if (newPassword.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters"
      });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(
      newPassword,
      10
    );

    // Update password
    user.password = hashedPassword;

    await user.save();

    // Send password changed email
    await sendEmail(
      user.email,
      "Edwin's Library Password Changed",

      `
      <div style="
        font-family: Arial, sans-serif;
        background: #000000;
        padding: 40px;
        color: #9be931;
      ">

        <div style="
          max-width: 600px;
          background: #111111;
          margin: auto;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #9be931;
          box-shadow: 0 0 20px rgba(155, 233, 49, 0.3);
        ">

          <div style="
            background: #9be931;
            color: #000000;
            padding: 25px;
            text-align: center;
          ">
            <h1>Edwin's Library</h1>
          </div>

          <div style="padding: 30px;">

            <h2>Hello ${user.name},</h2>

            <p>
              Your password has been changed successfully.
            </p>

            <div style="
              background: #0a0a0a;
              border: 1px solid #9be931;
              padding: 20px;
              border-radius: 10px;
              margin-top: 20px;
            ">

              <p>
                If you did not perform this action,
                please contact the library immediately.
              </p>

            </div>

          </div>

          <div style="
            background:#0a0a0a;
            text-align:center;
            padding:15px;
            font-size:14px;
            color:#9ca3af;
            border-top:1px solid #9be931;
          ">
            Edwin's Library Management System
          </div>

        </div>
      </div>
      `
    );

    res.status(200).json({
      message: "Password changed successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });
  }
};


const rejectStudent = async (req, res) => {
  try {

    const { userId } = req.body;

    // Find student
    const student = await User.findById(userId);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    // Delete student account
    await User.findByIdAndDelete(userId);

    // Send rejection email
    await sendEmail(
      student.email,
      "Edwin's Library Registration Update",

      `
      <div style="
        font-family: Arial, sans-serif;
        background: #000000;
        padding: 40px;
        color: #9be931;
      ">

        <div style="
          max-width: 600px;
          background: #111111;
          margin: auto;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #9be931;
          box-shadow: 0 0 20px rgba(155, 233, 49, 0.3);
        ">

          <div style="
            background: #9be931;
            color: #000000;
            padding: 25px;
            text-align: center;
          ">
            <h1>Edwin's Library</h1>
          </div>

          <div style="padding: 30px;">

            <h2>Hello ${student.name},</h2>

            <p>
              Your registration request has been rejected by the librarian.
            </p>

            <div style="
              background: #0a0a0a;
              border: 1px solid #9be931;
              padding: 20px;
              border-radius: 10px;
              margin-top: 20px;
            ">

              <p>
                Possible reasons:
              </p>

              <ul>
                <li>Invalid details</li>
                <li>Incorrect USN</li>
                <li>Duplicate registration</li>
              </ul>

            </div>

          </div>

          <div style="
            background:#0a0a0a;
            text-align:center;
            padding:15px;
            font-size:14px;
            color:#9ca3af;
            border-top:1px solid #9be931;
          ">
            Edwin's Library Management System
          </div>

        </div>
      </div>
      `
    );

    res.status(200).json({
      message: "Student rejected successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });
  }
};


module.exports = { 
  registerUser, 
  loginUser, 
  sendOtp, 
  verifyOtp, 
  addBook, 
  getBooks, 
  issueBook, 
  returnBook, 
  getIssuedBooks, 
  requestBook,
  approveStudent,
  getPendingStudents,
  changePassword,
  rejectStudent
};