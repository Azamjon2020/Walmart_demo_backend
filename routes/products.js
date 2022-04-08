const express = require("express");
const Products = require("../models/Products");
const products = express.Router();

products.post("/products", async (req, res) => {
  try {
    const product = await Products.create({
      productImg: req.body.productImg,
      productCost: req.body.productCost,
      productSale: req.body.productSale,
      productTitle: req.body.productTitle,
      productType: req.body.productType,
      productName: req.body.productName,
    });
    const newProduct = await product.save();
    res.json(newProduct);
  } catch (err) {
    res.send(err);
  }
});

products.get("/products/all", async (req, res) => {
  const allProducts = await Files.find();
  try {
    res.json(allProducts);
  } catch (err) {
    res.send("No results!", err);
  }
});

products.get("/products/:id", async (req, res) => {
  if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    const allProducts = await Products.findById(req.params.id);
    try {
      res.json(allProducts);
    } catch (err) {
      res.send("No results!");
    }
  }
});

products.post("/search", async (req, res) => {
  try {
    await Products.aggregate([
      {
        $search: {
          index: "default",
          text: {
            query: req.body.productName,
            path: {
              wildcard: "*",
            },
          },
        },
      },
    ])
      .limit(10)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.send(err));
  } catch (err) {
    res.send(404).json("product topilmadi");
  }
});

module.exports = products;
/*
{
"productImg":"asd",
"productCost": 123,
"productSale":56,
"productTitle":"title",
"productStar":3,
"productStarCount":5,
"productType":"das"

}

*/
