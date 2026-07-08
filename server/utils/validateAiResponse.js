const validateAIResponse = (responseText) => {
  try {
    // Remove markdown if Gemini returns ```json ... ```
    const cleanedResponse = responseText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Convert string to JavaScript object
    const review = JSON.parse(cleanedResponse);

    // Default structure
    const validatedReview = {
      overall_score: review.overall_score ?? 0,
      summary: review.summary ?? "",

      strengths: review.strengths ?? [],

      bugs: review.bugs ?? [],

      time_complexity: review.time_complexity ?? "Unknown",

      space_complexity: review.space_complexity ?? "Unknown",

      best_practices: review.best_practices ?? [],

      security_issues: review.security_issues ?? [],

      optimization_suggestions:
        review.optimization_suggestions ?? [],

      optimized_code: review.optimized_code ?? "",

      changes_made: review.changes_made ?? [],

      concepts_used: review.concepts_used ?? [],

      concepts_to_learn:
        review.concepts_to_learn ?? [],

      explanation: review.explanation ?? "",

      similar_leetcode_problems:
        review.similar_leetcode_problems ?? [],
    };

    return validatedReview;

  } catch (error) {

    console.error("AI Validation Error:", error);

    throw new Error("Invalid AI Response");
  }
};

module.exports = validateAIResponse;