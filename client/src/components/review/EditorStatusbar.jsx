function EditorStatusBar({
  code,
  language,
}) {
  const lines =
    code.length === 0
      ? 0
      : code.split("\n").length;

  const characters = code.length;

  return (
    <div className="flex items-center justify-between border-t border-white/10 bg-[#111827] px-5 py-3 text-sm">

      <div className="flex gap-6 text-slate-400">

        <span>

          {lines} Lines

        </span>

        <span>

          {characters} Characters

        </span>

      </div>

      <span className="uppercase text-violet-400">

        {language}

      </span>

    </div>
  );
}

export default EditorStatusBar;