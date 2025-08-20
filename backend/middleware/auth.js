const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = auth;

const auth = require("../middleware/auth");

app.post("/api/listings", auth, async (req, res) => {
  if (req.user.role !== "seller") return res.status(403).json({ error: "Not allowed" });
  const listing = new Listing(req.body);
  await listing.save();
  res.json(listing);
});

