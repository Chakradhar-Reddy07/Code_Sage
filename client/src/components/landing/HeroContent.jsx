import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-20"
    >
      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 backdrop-blur-xl"
      >
        <Sparkles className="h-4 w-4 text-violet-400" />

        <span className="text-sm font-medium text-violet-300">
          AI Powered Coding Mentor
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="mt-8 text-[42px] font-black leading-[0.95] tracking-tight sm:text-[54px] lg:text-[68px]"
      >
        <span className="text-white">
          Code Better.
        </span>

        <br />

        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          Learn Faster.
        </span>

        <br />

        <span className="text-white">
          Ace Interviews.
        </span>
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8 max-w-[620px] text-lg leading-8 text-slate-300 sm:text-xl"
      >
        Master Data Structures, Algorithms and System Design with
        intelligent AI reviews, personalized roadmaps, interview
        preparation and real-time coding feedback.
      </motion.p>

      {/* CTA */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-12 flex items-center gap-5"
      >
        <Link to="/signup">
          <Button className="bg-gradient-to-r from-violet-600 to-blue-600">
            <span className="flex items-center gap-2">
              Get Started
              <ArrowRight size={18} />
            </span>
          </Button>
        </Link>

        <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white transition-all duration-300 hover:border-violet-500/40 hover:bg-white/10">
          Live Demo
        </button>
      </motion.div>

      {/* Stats */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-14 flex flex-wrap gap-10"
      >
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            10K+
          </h2>

          <p className="mt-2 text-slate-400">
            Code Reviews
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-white">
            96%
          </h2>

          <p className="mt-2 text-slate-400">
            Interview Success
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-white">
            24/7
          </h2>

          <p className="mt-2 text-slate-400">
            AI Mentor
          </p>
        </div>
      </motion.div>

      {/* Trust */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-14 flex items-center gap-3"
      >
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              fill="#FACC15"
              color="#FACC15"
            />
          ))}
        </div>

        <span className="text-slate-300">
          Trusted by thousands of aspiring software engineers
        </span>
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;