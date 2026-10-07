const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token, access denied" });
    }
    
    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "No token, access denied" });
    }

      try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

const admin = async (req, res, next) => {
  try {
    //  If token has role directly (OTP admin)
    if (req.user.role === "admin") {
      return next();
    }

    //  Otherwise check DB (student admin)
    const user = await User.findById(req.user.id);

    if (user && user.role === "admin") {
      next();
    } else {
      res.status(403).json({ message: "Admin access denied" });
    }

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { protect, admin };