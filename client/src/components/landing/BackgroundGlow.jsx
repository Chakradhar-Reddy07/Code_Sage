import { motion } from "framer-motion";

function BackgroundGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Base Background */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [-40, 30, -40],
          y: [-20, 20, -20],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-52 -left-52 h-[750px] w-[750px] rounded-full bg-violet-600/20 blur-[180px]"
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [30, -30, 30],
          y: [20, -20, 20],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-56 -right-56 h-[850px] w-[850px] rounded-full bg-blue-600/20 blur-[220px]"
      />

      {/* Center Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),transparent_65%)]" />

      {/* Noise Layer */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
    {/* Light Beam */}

<div
  className="
  absolute
  left-1/2
  top-0
  h-full
  w-[600px]
  -translate-x-1/2
  bg-gradient-to-b
  from-violet-500/5
  via-transparent
  to-transparent
  blur-[120px]
"
/>
    </div>
  );
}

export default BackgroundGlow;