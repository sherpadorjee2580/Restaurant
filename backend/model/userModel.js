const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  password: {
    type: String,
    required: [true, "Please enter you password"],
  },
});

module.exports = mongoose.model("User", userSchema);
