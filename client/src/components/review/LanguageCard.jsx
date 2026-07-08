import { motion } from "framer-motion";

function LanguageCard({
  label,
  value,
  selected,
  onSelect,
}) {
  return (
    <motion.button
      whileHover={{
        y: -2,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={() => onSelect(value)}
      className={`
        relative
        flex
        items-center
        justify-center
        rounded-lg
        border
        px-4
        py-1.5
        min-w-[85px]
        text-sm
        font-medium
        transition-all
        duration-300

        ${
          selected
            ? "border-violet-500 bg-violet-500/20 shadow-[0_0_12px_rgba(139,92,246,.25)]"
            : "border-white/10 bg-white/5 hover:border-violet-400"
        }
      `}
    >
      <span className="text-white">
        {label}
      </span>

      {selected && (
        <div className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-green-400" />
      )}
    </motion.button>
  );
}

export default LanguageCard;