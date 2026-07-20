import {
  Copy,
  Trash2,
  FileCode,
  Play,
  Loader2,
} from "lucide-react";

import toast from "react-hot-toast";
import { createReview } from "../../services/review";

function EditorToolbar({
  language,
  code,
  setCode,
  setReview,
  loading,
  setLoading,
}) {
  const fileNames = {
    java: "Main.java",
    python: "main.py",
    javascript: "index.js",
    typescript: "index.ts",
    cpp: "main.cpp",
    go: "main.go",
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);

    toast.success("Code copied.");
  };

  const clearCode = () => {
    setCode("");

    toast.success("Editor cleared.");
  };

  const handleReview = async () => {
    if (!code.trim()) {
      toast.error("Please enter some code.");
      return;
    }

    try {
      setLoading(true);

      const response = await createReview(
        language,
        code
      );

      setReview(response.review);

      toast.success("Review completed!");

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Review failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-between border-b border-white/10 bg-[#111827] px-5 py-3">

      <div className="flex items-center gap-3">

        <FileCode
          size={18}
          className="text-violet-400"
        />

        <span className="text-slate-300">

          {fileNames[language]}

        </span>

      </div>

      <div className="flex gap-3">

      <button
        onClick={handleReview}
        disabled={loading}
        className="flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 p-2"
        style={{ width: 40, height: 40 }}
        aria-label="Review Code"
      >
        {loading ? (
          <Loader2 size={18} className="animate-spin text-white" />
        ) : (
          <Play size={18} className="text-white ml-0.5" />
        )}
      </button>

        <button
          onClick={copyCode}
          className="rounded-lg p-2 hover:bg-white/10"
        >
          <Copy
            size={18}
            className="text-slate-300"
          />
        </button>

        <button
          onClick={clearCode}
          className="rounded-lg p-2 hover:bg-white/10"
        >
          <Trash2
            size={18}
            className="text-red-400"
          />
        </button>

      </div>

    </div>
  );
}

export default EditorToolbar;