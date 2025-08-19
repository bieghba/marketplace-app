const express = require("express");
const Listing = require("../models/Listing");
const router = express.Router();

// Create listing
router.post("/", async (req, res) => {
  const { title, description, price, location, ownerId } = req.body;
  const listing = new Listing({ title, description, price, location, ownerId });
  await listing.save();
  res.json(listing);
});

// Get all listings
router.get("/", async (req, res) => {
  const listings = await Listing.find().populate("ownerId", "name email");
  res.json(listings);
});

module.exports = router;
