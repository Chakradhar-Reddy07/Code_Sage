import {
  Copy,
  Trash2,
  FileCode,
} from "lucide-react";

import toast from "react-hot-toast";

function EditorToolbar({
  language,
  code,
  setCode,
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