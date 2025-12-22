const router = require("express").Router();
const Product = require("../models/Product");

router.get("/inventory", async (req, res) => {
  const products = await Product.find();
  let totalValue = 0;

  products.forEach((p) => {
    totalValue += p.price * p.quantity;
  });

  res.json({
    totalProducts: products.length,
    totalInventoryValue: totalValue,
  });
});

module.exports = router;
