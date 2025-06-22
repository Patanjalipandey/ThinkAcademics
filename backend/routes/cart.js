const express = require('express');
const { getCart, addToCart } = require('../controllers/cartController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();
const Cart = require("../models/Cart");
const verifyToken = require("../middleware/authMiddleware");

router.get("/", verifyToken, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.id }).populate("products.productId");
        res.json(cart || { products: [] });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Unable to get cart" });
    }
});

router.post("/add", verifyToken, async (req, res) => {
    const { productId, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ userId: req.user.id });

        if (!cart) {
            cart = new Cart({
                userId: req.user.id,
                products: [{ productId, quantity }],
            });
        } else {
            if (!Array.isArray(cart.products)) {
                cart.products = [];
            }
            const existingProduct = cart.products.find(
                (p) => p.productId.toString() === productId
            );

            if (existingProduct) {
                existingProduct.quantity += quantity;
            } else {
                cart.products.push({ productId, quantity });
            }
        }

        await cart.save();
        res.json(cart);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong" });
    }
})

module.exports = router;
