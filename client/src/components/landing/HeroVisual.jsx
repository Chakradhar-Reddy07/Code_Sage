import { motion } from "framer-motion";
import KnowledgeGraph from "./KnowledgeGraph";

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative flex items-center justify-center h-[820px]"
    >
      {/* Background Glow */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Graph */}
      <KnowledgeGraph />

      {/* Floating Ring */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[520px] h-[520px] rounded-full border border-violet-500/10"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[680px] h-[680px] rounded-full border border-blue-500/10"
      />
    </motion.div>
  );
}

export default HeroVisual;