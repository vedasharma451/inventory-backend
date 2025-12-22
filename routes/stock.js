const router = require("express").Router();
const Product = require("../models/Product");


router.post("/in", async (req, res) => {
  const product = await Product.findById(req.body.productId);
  product.quantity += req.body.qty;
  await product.save();
  res.json(product);
});


router.post("/out", async (req, res) => {
  const product = await Product.findById(req.body.productId);
  if (product.quantity < req.body.qty) {
    return res.status(400).json({ message: "Not enough stock" });
  }
  product.quantity -= req.body.qty;
  await product.save();
  res.json(product);
});

module.exports = router;
