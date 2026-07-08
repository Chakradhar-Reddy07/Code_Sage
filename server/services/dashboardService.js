const db = require("../config/db");

const parseReviewJson = (value) => {
  if (!value) {
    return {};
  }

  if (typeof value === "object") {
    return value;
  }

  try {
    return JSON.parse(value);
  } catch {
    return {};
  }
};

const normalizeText = (value) => {
  if (!value) {
    return "";
  }

  return String(value).trim();
};

const getStartOfToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

const getDashboardStats = async (userId) => {

  const [reviews] = await db.query(
    `
    SELECT
      id,
      language,
      review_json,
      created_at
    FROM reviews
    WHERE user_id = ?
    ORDER BY created_at DESC
    `,
    [userId]
  );

  const totalReviews = reviews.length;

  let totalScore = 0;
  let scoredReviews = 0;

  const languageSet = new Set();
  const languageCounts = new Map();
  const conceptStats = new Map();
  const startOfToday = getStartOfToday();
  let reviewsToday = 0;

  reviews.forEach((review) => {
    const reviewData = parseReviewJson(review.review_json);
    const language = normalizeText(review.language) || "Unknown";
    const createdAt = new Date(review.created_at);

    languageSet.add(language);
    languageCounts.set(
      language,
      (languageCounts.get(language) || 0) + 1
    );

    if (!Number.isNaN(createdAt.getTime()) && createdAt >= startOfToday) {
      reviewsToday += 1;
    }

    const score = Number(reviewData.overall_score);

    if (Number.isFinite(score)) {
      totalScore += score;
      scoredReviews += 1;
    }

    (reviewData.concepts_used || []).forEach((concept) => {
      const name = normalizeText(concept);

      if (!name) {
        return;
      }

      const current = conceptStats.get(name) || {
        name,
        used: 0,
        toLearn: 0,
      };

      current.used += 1;
      conceptStats.set(name, current);
    });

    (reviewData.concepts_to_learn || []).forEach((concept) => {
      const name = normalizeText(concept);

      if (!name) {
        return;
      }

      const current = conceptStats.get(name) || {
        name,
        used: 0,
        toLearn: 0,
      };

      current.toLearn += 1;
      conceptStats.set(name, current);
    });
  });

  const averageScore =
    scoredReviews === 0
      ? 0
      : Math.round(totalScore / scoredReviews);

  const languageBreakdown = Array.from(languageCounts.entries())
    .map(([language, count]) => ({
      language,
      count,
      percentage: totalReviews
        ? Math.round((count / totalReviews) * 100)
        : 0,
    }))
    .sort((a, b) => b.count - a.count);

  const learningProgress = Array.from(conceptStats.values())
    .map((concept) => {
      const totalMentions = concept.used + concept.toLearn;
      const progress = totalMentions
        ? Math.round((concept.used / totalMentions) * 100)
        : 0;

      return {
        name: concept.name,
        progress,
        used: concept.used,
        toLearn: concept.toLearn,
      };
    })
    .sort((a, b) => {
      const activityDifference =
        b.used + b.toLearn - (a.used + a.toLearn);

      if (activityDifference !== 0) {
        return activityDifference;
      }

      return b.progress - a.progress;
    })
    .slice(0, 4);

  const dailyTarget = 1;
  const dailyProgress = Math.min(reviewsToday, dailyTarget);

  return {
    totalReviews,
    averageScore,
    languagesUsed: languageSet.size,
    languageBreakdown,
    learningProgress,
    dailyGoal: {
      completed: dailyProgress,
      target: dailyTarget,
      percentage: Math.round((dailyProgress / dailyTarget) * 100),
      reviewsToday,
    },
    recentReviews: reviews.slice(0, 5).map((review) => {
      const reviewData = parseReviewJson(review.review_json);

      return {
        id: review.id,
        language: normalizeText(review.language) || "Unknown",
        score: Number(reviewData.overall_score) || 0,
        summary: reviewData.summary || "",
        created_at: review.created_at,
      };
    })
  };
};

module.exports = {
  getDashboardStats,
};
