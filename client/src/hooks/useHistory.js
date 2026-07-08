import { useEffect, useState } from "react";
import { getHistory } from "../services/history";

export function useHistory() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  async function loadHistory() {
    try {
      const data = await getHistory();
      setReviews(data.reviews);
    } finally {
      setLoading(false);
    }
  }

  return {
    reviews,
    loading,
    reload: loadHistory,
  };
}