function Button({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        px-8
        py-4
        rounded-full
        font-semibold
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_15px_40px_rgba(139,92,246,.35)]
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;