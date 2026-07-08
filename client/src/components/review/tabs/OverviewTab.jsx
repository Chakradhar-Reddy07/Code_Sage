function OverviewTab({ review }) {
  return (
    <div className="space-y-6">

      <div>

        <h3 className="text-violet-400 font-semibold">
          Overall Score
        </h3>

        <p className="mt-2 text-5xl font-bold text-white">
          {review.overall_score}/100
        </p>

      </div>

      <div>

        <h3 className="text-violet-400 font-semibold">
          Summary
        </h3>

        <p className="mt-3 text-slate-300">
          {review.summary}
        </p>

      </div>

      <div>

        <h3 className="text-violet-400 font-semibold">
          Time Complexity
        </h3>

        <p className="mt-2 text-white">
          {review.time_complexity}
        </p>

      </div>

      <div>

        <h3 className="text-violet-400 font-semibold">
          Space Complexity
        </h3>

        <p className="mt-2 text-white">
          {review.space_complexity}
        </p>

      </div>

    </div>
  );
}

export default OverviewTab;