import { motion } from "framer-motion";
import {
  Upload,
  BrainCircuit,
  BookOpen,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Code",
    description:
      "Paste your code or upload files for an instant AI analysis.",
  },
  {
    icon: BrainCircuit,
    title: "AI Reviews Everything",
    description:
      "Receive explanations, bug detection, optimization suggestions and best practices.",
  },
  {
    icon: BookOpen,
    title: "Learn Every Concept",
    description:
      "Every mistake becomes a learning opportunity with personalized explanations.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Growth",
    description:
      "Monitor progress, interview readiness and skill improvements over time.",
  },
];

function Workflow() {
  return (
    <section
      id="workflow"
      className="relative py-36"
    >
      <div className="max-w-[1200px] mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-violet-400 font-semibold tracking-widest">
            HOW IT WORKS
          </span>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Learn Smarter Every Day
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
            Four simple steps to transform your coding journey with AI.
          </p>
        </motion.div>

        <div className="relative mt-24">

          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-blue-500 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-16">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`flex ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  } items-center gap-10`}
                >

                  <div className="flex-1">

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">

                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">

                        <Icon className="text-white" size={30} />

                      </div>

                      <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-slate-400 leading-8">
                        {step.description}
                      </p>

                    </div>

                  </div>

                  <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 items-center justify-center font-bold text-white text-xl shadow-[0_0_40px_rgba(139,92,246,.5)]">
                    {index + 1}
                  </div>

                  <div className="flex-1" />

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Workflow;