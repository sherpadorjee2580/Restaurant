const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./model/productModel");
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
app.post("/product", async (req, res) => {
  try {
    const newProduct = new Product({
      productName: req.body.productName,
      price: req.body.price,
    });
    const saveProduct = await newProduct.save();

    res.status(201).json(saveProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`The backend is running on the PORT : ${PORT}`);
});
