const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const listingRoutes = require("./routes/listings");
const orderRoutes = require("./routes/orders");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/orders", orderRoutes);

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/marketplace")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


