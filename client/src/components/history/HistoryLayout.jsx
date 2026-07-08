import { useHistory } from "../../hooks/useHistory";

import HistoryTable from "./HistoryTable";
import EmptyHistory from "./EmptyHistory";

function HistoryLayout() {
  const { reviews, loading } = useHistory();

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  if (!reviews.length) {
    return <EmptyHistory />;
  }

  return (
    <div className="space-y-8">

      <h1 className="text-4xl font-bold text-white">
        Review History
      </h1>

      <HistoryTable reviews={reviews} />

    </div>
  );
}

export default HistoryLayout;