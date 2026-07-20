import { useEffect } from "react";
import { createPortal } from "react-dom";

function ConfirmDialog({ isOpen, title, message, onConfirm, onCancel }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onCancel();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-sm rounded-2xl border border-white/10 bg-[#0B1120] p-8 shadow-2xl">
        <h3 className="text-xl font-bold text-white mb-2">
          {title}
        </h3>

        <p className="text-slate-400 mb-8">
          {message}
        </p>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 rounded-full border border-white/10 px-6 py-3 text-white transition hover:bg-white/5"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 rounded-full bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_10px_35px_rgba(220,38,38,.45)] active:scale-95"
          >
            Logout
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ConfirmDialog;
