import {
  Code2,
  Brain,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  {
    icon: Code2,
    title: "Review Code",
    to: "/review",
  },
  {
    icon: Brain,
    title: "Practice DSA",
    to: "/interview",
  },
  {
    icon: BookOpen,
    title: "Open Roadmap",
    to: "/roadmap",
  },
];

function QuickActions() {
  return (
    <div>

      <h2 className="mb-6 text-2xl font-bold text-white">
        Quick Actions
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.to}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-left transition-all hover:-translate-y-2 hover:border-violet-500/40"
            >
              <Icon
                size={40}
                className="text-violet-400"
              />

              <h3 className="mt-6 text-xl font-bold text-white">
                {action.title}
              </h3>

              <div className="mt-6 flex items-center gap-2 text-violet-400">

                Open

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />

              </div>

            </Link>
          );
        })}

      </div>

    </div>
  );
}

export default QuickActions;
