import { motion } from "framer-motion";
import {
  Brain,
  Bug,
  GraduationCap,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Code Review",
    description:
      "Receive instant AI-powered feedback on code quality, complexity, performance, and best practices.",
  },
  {
    icon: GraduationCap,
    title: "Personalized Learning",
    description:
      "Follow AI-generated roadmaps tailored to your current skill level and career goals.",
  },
  {
    icon: Bug,
    title: "Smart Debugging",
    description:
      "Understand bugs instead of simply fixing them with detailed AI explanations.",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description:
      "Track your coding consistency, strengths, weaknesses, and interview readiness.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="relative py-36"
    >
      <div className="max-w-[1400px] mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-violet-400 font-semibold tracking-wider">
            FEATURES
          </span>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Everything You Need
          </h2>

          <p className="mt-6 mx-auto max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
            CodeSage combines AI code reviews,
            learning roadmaps, debugging,
            interview preparation and analytics
            into one intelligent platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  relative
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  overflow-hidden
                  group
                "
              >
                <div className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  bg-gradient-to-br
                  from-violet-500/10
                  to-blue-500/10
                "/>

                <div className="
                  relative
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-br
                  from-violet-600
                  to-blue-600
                  flex
                  items-center
                  justify-center
                ">

                  <Icon
                    size={30}
                    className="text-white"
                  />

                </div>

                <h3 className="relative mt-8 text-2xl font-bold text-white">

                  {feature.title}

                </h3>

                <p className="relative mt-5 text-slate-400 leading-8">

                  {feature.description}

                </p>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;