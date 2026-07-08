import api from "./api";

export async function getHistory() {
  const response = await api.get("/reviews");
  return response.data;
}

export async function getReview(id) {
  const response = await api.get(`/reviews/${id}`);
  return response.data;
}