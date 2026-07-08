function LearningTab({ review }) {
  return (
    <div className="space-y-8">

      {/* Concepts Used */}

      <div>

        <h3 className="text-xl font-bold text-violet-400">
          Concepts Used
        </h3>

        {review.concepts_used?.length ? (
          <div className="mt-4 flex flex-wrap gap-3">

            {review.concepts_used.map(
              (concept, index) => (
                <span
                  key={index}
                  className="
                    rounded-full
                    bg-violet-500/20
                    px-4
                    py-2
                    text-violet-300
                  "
                >
                  {concept}
                </span>
              )
            )}

          </div>
        ) : (
          <p className="mt-4 text-slate-400">
            No concepts detected.
          </p>
        )}

      </div>

      {/* Concepts To Learn */}

      <div>

        <h3 className="text-xl font-bold text-violet-400">
          Recommended Concepts
        </h3>

        {review.concepts_to_learn?.length ? (
          <ul className="mt-4 space-y-3">

            {review.concepts_to_learn.map(
              (concept, index) => (
                <li
                  key={index}
                  className="rounded-xl bg-white/5 p-4 text-slate-300"
                >
                  • {concept}
                </li>
              )
            )}

          </ul>
        ) : (
          <p className="mt-4 text-green-400">
            Great! Nothing specific to learn.
          </p>
        )}

      </div>

      {/* Similar Problems */}

      <div>

        <h3 className="text-xl font-bold text-violet-400">
          Similar LeetCode Problems
        </h3>

        {review.similar_leetcode_problems?.length ? (
          <div className="mt-4 space-y-4">

            {review.similar_leetcode_problems.map(
              (problem, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white/5 p-5"
                >
                  <h4 className="font-bold text-white">
                    {problem.title}
                  </h4>

                  <p className="mt-2 text-slate-400">
                    Difficulty: {problem.difficulty}
                  </p>

                  <a
                    href={problem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-violet-400 hover:text-violet-300"
                  >
                    Open Problem →
                  </a>

                </div>
              )
            )}

          </div>
        ) : (
          <p className="mt-4 text-slate-400">
            No related problems found.
          </p>
        )}

      </div>

      {/* AI Explanation */}

      {review.explanation && (

        <div>

          <h3 className="text-xl font-bold text-violet-400">
            AI Explanation
          </h3>

          <p className="mt-4 rounded-2xl bg-white/5 p-5 leading-8 text-slate-300">
            {review.explanation}
          </p>

        </div>

      )}

    </div>
  );
}

export default LearningTab;