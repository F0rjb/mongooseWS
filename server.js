const express = require("express");
const app = express();

require("dotenv").config({ path: "./config/.env" });
const port = process.env.PORT || 4000;

//Connect to DB
const mongoose = require("mongoose");

const connectDB = require("./config/connect");
connectDB();
// Schema creation

//Model Creation
const {
  addOneProduct,
  addMultipleProducts,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
} = require("./controllers/productControllers");
// addOneProduct();
// addMultipleProducts();
// getAllProducts();
// getOneProduct();
// updateProduct();
// deleteProduct();
app.listen(port, (e) =>
  e ? console.log(e) : console.log(`the server runs on ${port}`)
);
