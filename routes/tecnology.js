const express = require("express");
const Products = require("../models/Products");
const tecnology = express.Router();

tecnology.get("/tecnology", async (req, res) => {
  const allProducts = await Products.find({ productType: "tecnology" });
  try {
    res.json(allProducts);
  } catch (err) {
    res.send("No results!");
  }
});

module.exports = tecnology;
