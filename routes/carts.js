const express = require("express");
const Products = require("../models/Products");
const carts = express.Router();

carts.get("/carts", async (req, res) => {
  const allProducts = await Products.find({ productType: "carts" });
  try {
    res.json(allProducts);
  } catch (err) {
    res.send("No results!");
  }
});

module.exports = carts;
