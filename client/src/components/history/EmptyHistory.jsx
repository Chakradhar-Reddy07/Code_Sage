import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";

function EmptyHistory() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-violet-300">
        <Code2 size={26} />
      </div>

      <h1 className="mt-6 text-3xl font-bold text-white">
        No reviews yet
      </h1>

      <p className="mx-auto mt-3 max-w-lg text-slate-400">
        Run your first AI review and your saved review history will appear here.
      </p>

      <Link
        to="/review"
        className="mt-7 inline-flex rounded-xl border border-violet-400/30 bg-violet-500/10 px-5 py-3 font-semibold text-violet-200 transition hover:border-violet-300/70 hover:bg-violet-500/20"
      >
        Review Code
      </Link>
    </div>
  );
}

export default EmptyHistory;
