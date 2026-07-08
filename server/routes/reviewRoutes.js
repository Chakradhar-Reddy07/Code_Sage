const express = require("express");

const router = express.Router();

const authenticate = require("../middleware/authMiddleware");


const {
  createReview,
  getReviews,
  getReview
} = require("../controllers/reviewController");

router.post("/", authenticate, createReview);

router.get("/", authenticate, getReviews);
router.get(
    "/:id",
    authenticate,
    getReview
);

module.exports = router;