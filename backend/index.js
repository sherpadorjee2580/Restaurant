const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
dotenv.config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database Successfully Connected");
  })
  .catch((err) => {
    console.log("Database Not Connected");
  });

app.get("/", (req, res) => {
  res.send("Hello GUYS");
});

app.listen(PORT, () => {
  console.log(`The backend is running on the PORT : ${PORT}`);
});
