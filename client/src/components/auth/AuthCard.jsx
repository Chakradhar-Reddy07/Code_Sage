function AuthCard({ children }) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        p-8
        shadow-[0_20px_60px_rgba(0,0,0,.35)]
      "
    >
      {children}
    </div>
  );
}

export default AuthCard;