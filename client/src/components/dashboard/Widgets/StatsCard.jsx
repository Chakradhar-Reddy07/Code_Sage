function StatsCard({ title, value, color, icon: Icon }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <div className="flex items-center justify-between gap-4">
        <p className="text-slate-400">
          {title}
        </p>

        {Icon ? (
          <div className="rounded-xl border border-white/10 bg-white/5 p-2">
            <Icon
              size={18}
              style={{ color }}
            />
          </div>
        ) : null}
      </div>

      <h2
        className="mt-4 text-4xl font-bold"
        style={{ color }}
      >
        {value}
      </h2>

    </div>
  );
}

export default StatsCard;
