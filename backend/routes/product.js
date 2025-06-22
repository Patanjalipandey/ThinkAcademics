const express = require('express');
const { getProducts, createProduct } = require('../controllers/productController');
const router = express.Router();
const Product = require("../models/Product");

router.get('/', getProducts);
router.post('/', createProduct); 

// (protect route if needed)
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product", details: err.message });
  }
});

module.exports = router;
