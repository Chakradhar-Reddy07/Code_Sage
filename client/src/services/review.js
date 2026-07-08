import api from "./api";

export const createReview = async (language, code) => {
  const response = await api.post("/reviews", {
    language,
    code,
  });

  return response.data;
};

export const getReviews = async () => {
  const response = await api.get("/reviews");

  return response.data;
};

export const getReview = async (id) => {
  const response = await api.get(`/reviews/${id}`);

  return response.data;
};