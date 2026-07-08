const express = require("express");
const cors = require("cors");

const app = express();
const authRoutes = require("./routes/authRoutes");
const authenticate = require("./middleware/authMiddleware");
const reviewRoutes = require("./routes/reviewRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/dashboard", dashboardRoutes);

// // Test Route
app.get("/profile", authenticate, (req, res) => {
  res.json({
    message: "Welcome to your profile!",
    user: req.user,
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to CodeSage API 🚀",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "CodeSage API",
  });
});
module.exports = app;

app.post("/test", (req, res) => {
  const { name, age } = req.body;

  res.json({
    message: `Welcome ${name}`,
    age,
  });
});