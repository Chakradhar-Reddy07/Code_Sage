function OptimizationTab({ review }) {
  return (
    <div className="space-y-8">

      {/* Optimization Suggestions */}

      <div>

        <h3 className="text-xl font-bold text-violet-400">
          Optimization Suggestions
        </h3>

        {review.optimization_suggestions?.length ? (
          <div className="mt-4 space-y-4">

            {review.optimization_suggestions.map(
              (suggestion, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white/5 p-5"
                >
                  <p className="text-slate-300">
                    {suggestion}
                  </p>
                </div>
              )
            )}

          </div>
        ) : (
          <p className="mt-4 text-green-400">
            No optimization suggestions.
          </p>
        )}

      </div>

      {/* Best Practices */}

      <div>

        <h3 className="text-xl font-bold text-violet-400">
          Best Practices
        </h3>

        {review.best_practices?.length ? (
          <ul className="mt-4 space-y-3">

            {review.best_practices.map(
              (practice, index) => (
                <li
                  key={index}
                  className="rounded-xl bg-white/5 p-4 text-slate-300"
                >
                  • {practice}
                </li>
              )
            )}

          </ul>
        ) : (
          <p className="mt-4 text-green-400">
            Excellent! No best practice issues found.
          </p>
        )}

      </div>

      {/* Security Issues */}

      <div>

        <h3 className="text-xl font-bold text-violet-400">
          Security Issues
        </h3>

        {review.security_issues?.length ? (
          <div className="mt-4 space-y-4">

            {review.security_issues.map(
              (issue, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-red-500/20 bg-red-500/10 p-5"
                >
                  <p className="text-red-300">
                    {issue}
                  </p>
                </div>
              )
            )}

          </div>
        ) : (
          <p className="mt-4 text-green-400">
            No security issues detected.
          </p>
        )}

      </div>

      {/* Optimized Code */}

      {review.optimized_code && (

        <div>

          <h3 className="text-xl font-bold text-violet-400">
            Optimized Code
          </h3>

          <pre
            className="
              mt-4
              overflow-x-auto
              rounded-2xl
              bg-[#050816]
              p-5
              text-sm
              text-green-300
            "
          >
            <code>
              {review.optimized_code}
            </code>
          </pre>

        </div>

      )}

    </div>
  );
}

export default OptimizationTab;