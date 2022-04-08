const express = require("express");
const Products = require("../models/Products");
const bevarage = express.Router();

bevarage.get("/bevarage", async (req, res) => {
  const allProducts = await Products.find({ productType: "bevarage" });
  try {
    res.json(allProducts);
  } catch (err) {
    res.send("No results!  ");
  }
});

module.exports = bevarage;
