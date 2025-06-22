const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, // <-- ref added!
      quantity: { type: Number, default: 1 }
    }
  ]
});

module.exports = mongoose.model("Cart", CartSchema);
