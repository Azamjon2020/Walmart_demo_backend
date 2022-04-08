const express = require("express");
const Products = require("../models/Products");
const furniture = express.Router();

furniture.get("/furniture", async (req, res) => {
  const allProducts = await Products.find({ productType: "furniture" });
  try {
    res.json(allProducts);
  } catch (err) {
    res.send("No results!");
  }
});

module.exports = furniture;
