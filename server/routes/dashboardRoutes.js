const express = require("express");

const router = express.Router();

const authenticate = require("../middleware/authMiddleware");

const {
  dashboard,
} = require("../controllers/dashboardController");

router.get(
  "/",
  authenticate,
  dashboard
);

module.exports = router;