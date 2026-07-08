import StatsCard from "./StatsCard";
import {
  Brain,
  Code2,
  Languages,
  Target,
} from "lucide-react";

function StatsGrid({ stats }) {
  const dailyGoal = stats.dailyGoal || {
    completed: 0,
    target: 1,
    percentage: 0,
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatsCard
        title="Reviews"
        value={stats.totalReviews}
        color="#A855F7"
        icon={Code2}
      />

      <StatsCard
        title="Average Score"
        value={`${stats.averageScore}%`}
        color="#22C55E"
        icon={Brain}
      />

      <StatsCard
        title="Languages Used"
        value={stats.languagesUsed}
        color="#3B82F6"
        icon={Languages}
      />

      <StatsCard
        title="Daily Goal"
        value={`${dailyGoal.completed}/${dailyGoal.target}`}
        color="#F59E0B"
        icon={Target}
      />

    </div>
  );
}

export default StatsGrid;
