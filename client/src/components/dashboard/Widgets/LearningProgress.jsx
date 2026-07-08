const progressColors = [
  "bg-violet-500",
  "bg-blue-500",
  "bg-cyan-500",
  "bg-emerald-500",
];

function LearningProgress({ progress }) {
  const items = progress || [];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <h2 className="text-xl font-bold text-white">
        Learning Progress
      </h2>

      <div className="mt-6 space-y-5">

        {items.length ? (
          items.map((item, index) => (
            <div key={item.name}>
              <div className="flex justify-between gap-4">

                <span className="truncate text-slate-400">
                  {item.name}
                </span>

                <span className="text-white">
                  {item.progress}%
                </span>

              </div>

              <div className="mt-2 h-3 rounded-full bg-white/10">

                <div
                  className={`h-full rounded-full ${
                    progressColors[index % progressColors.length]
                  }`}
                  style={{ width: `${item.progress}%` }}
                />

              </div>

            </div>
          ))
        ) : (
          <p className="text-slate-400">
            Learning insights will appear after your reviews include detected concepts.
          </p>
        )}

      </div>

    </div>
  );
}

export default LearningProgress;
