import { Link } from "react-router-dom";

function RecentReviews({ reviews }) {
  if (!reviews.length) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-bold text-white">
          Recent Reviews
        </h2>

        <p className="mt-8 text-slate-400">
          Your latest code reviews will appear here after you run an AI review.
        </p>

        <Link
          to="/review"
          className="mt-6 inline-flex rounded-xl border border-violet-400/30 bg-violet-500/10 px-5 py-3 font-semibold text-violet-200 transition hover:border-violet-300/70 hover:bg-violet-500/20"
        >
          Review Code
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="text-2xl font-bold text-white">
        Recent Reviews
      </h2>

      <div className="mt-8 space-y-5">

        {reviews.map((review) => (

          <Link
            key={review.id}
            to="/review/history"
            className="block rounded-2xl bg-white/5 p-5 transition hover:bg-white/10"
          >

            <div className="flex flex-wrap items-center justify-between gap-3">

              <span className="font-semibold text-white">
                {review.language}
              </span>

              <span className="text-violet-400">
                {review.score}/100
              </span>

            </div>

            {review.summary ? (
              <p className="mt-3 line-clamp-2 text-sm text-slate-300">
                {review.summary}
              </p>
            ) : null}

            <p className="mt-3 text-slate-400">
              {new Date(review.created_at).toLocaleDateString()}
            </p>

          </Link>

        ))}

      </div>

    </div>
  );
}

export default RecentReviews;
