const mongoose = require("mongoose");

const Products = new mongoose.Schema({
  productImg: {
    type: String,
    required: true,
    max: 1024,
    min: 3,
  },
  productCost: {
    type: String,
    required: true,
  },
  productSale: {
    type: String,
    required: true,
  },
  productTitle: {
    type: String,
    required: true,
    max: 1024,
    min: 3,
  },
  productType: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },

  // productStar: {
  //   type: String,
  //   required: true,
  // },
  // productStarCount: {
  //   type: String,
  //   required: true,
  // },
});

const model = mongoose.model("Products", Products);
module.exports = model;
