import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboard";

export function useDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      setError("");
      setLoading(true);
      const data = await getDashboard();
      setStats(data.stats);
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.message ||
          "Unable to load dashboard data."
      );
    } finally {
      setLoading(false);
    }
  }

  return {
    stats,
    loading,
    error,
    reload: loadDashboard,
  };
}
