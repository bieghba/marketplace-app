const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// Create order
router.post("/", async (req, res) => {
  const { listingId, buyerId, sellerId } = req.body;
  const order = new Order({ listingId, buyerId, sellerId });
  await order.save();
  res.json(order);
});

// Get buyer’s orders
router.get("/buyer/:id", async (req, res) => {
  const orders = await Order.find({ buyerId: req.params.id }).populate("listingId");
  res.json(orders);
});

module.exports = router;
