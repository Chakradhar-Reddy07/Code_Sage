import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

const stories = [
  {
    name: "Aarav Sharma",
    role: "Frontend Developer",
    company: "Placed at Google",
    before: "Solved 80 DSA problems",
    after: "Solved 450+ problems",
    improvement: "+320%",
  },
  {
    name: "Priya Verma",
    role: "Software Engineer",
    company: "Placed at Microsoft",
    before: "Weak in System Design",
    after: "Cleared SDE Interview",
    improvement: "+280%",
  },
  {
    name: "Rahul Patel",
    role: "Backend Developer",
    company: "Placed at Amazon",
    before: "Average Coding Skills",
    after: "5⭐ Problem Solver",
    improvement: "+350%",
  },
];

function SuccessStories() {
  return (
    <section className="py-36 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-violet-400 font-semibold tracking-widest">
            SUCCESS STORIES
          </span>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            From Learning to Landing Dream Jobs
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
            Thousands of learners improved their coding skills and achieved
            their career goals with AI-powered guidance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
            >
              <div className="flex justify-between items-center">

                <div>

                  <h3 className="text-2xl font-bold text-white">
                    {story.name}
                  </h3>

                  <p className="text-slate-400 mt-1">
                    {story.role}
                  </p>

                </div>

                <ArrowUpRight className="text-violet-400" />

              </div>

              <div className="flex gap-1 mt-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#FACC15"
                    color="#FACC15"
                  />
                ))}
              </div>

              <div className="mt-8 space-y-4">

                <div>
                  <p className="text-slate-500 text-sm">Before</p>
                  <p className="text-white">{story.before}</p>
                </div>

                <div>
                  <p className="text-slate-500 text-sm">After</p>
                  <p className="text-white">{story.after}</p>
                </div>

              </div>

              <div className="mt-8 flex justify-between items-center">

                <span className="text-green-400 font-bold">
                  {story.improvement}
                </span>

                <span className="text-violet-400 font-semibold">
                  {story.company}
                </span>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default SuccessStories;