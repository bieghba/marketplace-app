const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  location: String,
  images: [String],
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["available", "rented", "removed"], default: "available" }
}, { timestamps: true });

module.exports = mongoose.model("Listing", listingSchema);
