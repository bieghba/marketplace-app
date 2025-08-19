const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//mongo
const authRoutes = require("./routes/auth");
const listingRoutes = require("./routes/listings");
const orderRoutes = require("./routes/orders");

app.use("/api/auth", authRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/orders", orderRoutes);
//mongo

//update
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);


const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Simple route
app.get("/", (req, res) => {
  res.send("Backend running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
