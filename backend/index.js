require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./model/UserModel");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas Connected!"))
  .catch((err) => console.error("❌ Connection error:", err));

app.get("/", (req, res) => {
  // Only use ONE of these. res.json is best for APIs.
  return res.json({
    message: "App is running successfully",
    status: "open",
  });
});

app.post("/register", async (req, res) => {
  // Changed path to /register for clarity
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();

    res.status(201).json({
      message: "User registered successfully!",
      user: savedUser,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Changed to 5001 to avoid common system conflicts
const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}`),
);
