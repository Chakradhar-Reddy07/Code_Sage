const db = require("../config/db");

// Save a new review
const saveReview = async (
  userId,
  language,
  code,
  codeHash,
  review
) => {
  const query = `
    INSERT INTO reviews
    (user_id, language, code, code_hash, review_json)
    VALUES (?, ?, ?, ?, ?)
  `;

  const values = [
    userId,
    language,
    code,
    codeHash,
    JSON.stringify(review),
  ];

  const [result] = await db.query(query, values);

  return result.insertId;
};

// Get all reviews of a user
const getUserReviews = async (userId) => {
  const query = `
    SELECT
      id,
      language,
      review_json,
      created_at
    FROM reviews
    WHERE user_id = ?
    ORDER BY created_at DESC
  `;

  const [reviews] = await db.query(query, [userId]);

  return reviews;
};
const getReviewById = async (reviewId, userId) => {

    const query = `
        SELECT *
        FROM reviews
        WHERE id = ?
        AND user_id = ?
    `;

    const [reviews] = await db.query(query, [
        reviewId,
        userId
    ]);

    return reviews[0];

};

module.exports = {
  saveReview,
  getUserReviews,
  getReviewById,
};