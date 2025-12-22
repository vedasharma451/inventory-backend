const router = require("express").Router();
const Product = require("../models/Product");


router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});


router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});


router.put("/:id", async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});


router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

module.exports = router;
