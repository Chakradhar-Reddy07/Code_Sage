import { AlertTriangle } from "lucide-react";
import { highlightLine } from "../utils/highlightLine";

function BugsTab({
  review,
  editorRef,
}) {
  if (!review.bugs?.length) {
    return (
      <p className="text-green-400">
        🎉 No bugs detected.
      </p>
    );
  }

  return (
    <div className="space-y-6">

      {review.bugs.map((bug, index) => (

        <button
          key={index}
          onClick={() =>
            highlightLine(
              editorRef.current,
              bug.line
            )
          }
          className="
            w-full
            rounded-2xl
            border
            border-red-500/20
            bg-red-500/10
            p-5
            text-left
            transition
            hover:border-red-400
            hover:bg-red-500/20
          "
        >

          <div className="flex items-center gap-3">

            <AlertTriangle
              className="text-red-400"
            />

            <h3 className="font-bold text-red-300">

              Line {bug.line}

            </h3>

          </div>

          <p className="mt-4 text-white">

            {bug.issue}

          </p>

          <p className="mt-2 text-slate-300">

            {bug.explanation}

          </p>

          <div className="mt-5 rounded-xl bg-black/20 p-4">

            <p className="text-sm text-green-300">

              💡 Suggested Fix

            </p>

            <p className="mt-2 text-slate-300">

              {bug.fix}

            </p>

          </div>

        </button>

      ))}

    </div>
  );
}

export default BugsTab;