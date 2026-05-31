const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");


app.use(express.json());

app.use(cors());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Edwin's Library API is running.");
});

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected!!"))
  .catch((err) => console.log(err));


module.exports = app;