function DailyGoal({ goal }) {
  const dailyGoal = goal || {
    completed: 0,
    target: 1,
    percentage: 0,
  };
  const percentage = Math.min(dailyGoal.percentage || 0, 100);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <h2 className="text-xl font-bold text-white">
        Daily Goal
      </h2>

      <p className="mt-6 text-slate-400">
        Today&apos;s Progress
      </p>

      <div className="mt-4 h-4 rounded-full bg-white/10">

        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-600 to-blue-600 transition-all"
          style={{ width: `${percentage}%` }}
        />

      </div>

      <p className="mt-4 text-slate-300">
        {dailyGoal.completed} of {dailyGoal.target} reviews complete
      </p>

    </div>
  );
}

export default DailyGoal;
