import WelcomeCard from "./Widgets/WelcomeCard";
import StatsGrid from "./Widgets/StatsGrid";
import RecentReviews from "./Widgets/RecentReviews";
import DailyGoal from "./Widgets/DailyGoal";
import LearningProgress from "./Widgets/LearningProgress";
import QuickActions from "./Widgets/QuickActions";

import { useDashboard } from "../../hooks/useDashboard";
import { useAuth } from "../../hooks/useAuth";

const DashboardSkeleton = () => (
  <div className="space-y-8">
    <div className="h-52 animate-pulse rounded-3xl border border-white/10 bg-white/5" />

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="h-36 animate-pulse rounded-3xl border border-white/10 bg-white/5"
        />
      ))}
    </div>

    <div className="grid gap-8 lg:grid-cols-3">
      <div className="h-96 animate-pulse rounded-3xl border border-white/10 bg-white/5 lg:col-span-2" />
      <div className="space-y-8">
        <div className="h-44 animate-pulse rounded-3xl border border-white/10 bg-white/5" />
        <div className="h-64 animate-pulse rounded-3xl border border-white/10 bg-white/5" />
      </div>
    </div>
  </div>
);

function DashboardHome() {
  const { user } = useAuth();
  const { stats, loading, error, reload } = useDashboard();
  const dashboardStats = stats || {
    totalReviews: 0,
    averageScore: 0,
    languagesUsed: 0,
    recentReviews: [],
    dailyGoal: {
      completed: 0,
      target: 1,
      percentage: 0,
    },
    learningProgress: [],
  };

  if (loading) {
    return <DashboardSkeleton />;
  }

  if (error) {
    return (
      <div className="rounded-3xl border border-red-400/20 bg-red-500/10 p-8 text-center">
        <h1 className="text-2xl font-bold text-white">
          Dashboard unavailable
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-slate-300">
          {error}
        </p>

        <button
          type="button"
          onClick={reload}
          className="mt-6 rounded-xl border border-white/10 bg-white/10 px-5 py-3 font-semibold text-white transition hover:border-violet-400/60 hover:bg-white/15"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <WelcomeCard
        user={user}
        stats={dashboardStats}
      />

      <StatsGrid stats={dashboardStats} />

      <div className="grid lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2">
          <RecentReviews
            reviews={dashboardStats.recentReviews}
          />
        </div>

        <div className="space-y-8">
          <DailyGoal goal={dashboardStats.dailyGoal} />
          <LearningProgress
            progress={dashboardStats.learningProgress}
          />
        </div>

      </div>

      <QuickActions />

    </div>
  );
}

export default DashboardHome;
