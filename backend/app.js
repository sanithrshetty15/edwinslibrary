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

mongoose.connect("mongodb+srv://sanith:Sanith26@cluster0.vkv8gx2.mongodb.net/edwins_library")
  .then(() => console.log("MongoDB Connected!!"))
  .catch((err) => console.log(err));


module.exports = app;