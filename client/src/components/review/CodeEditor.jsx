import Editor from "@monaco-editor/react";

import LanguageSelector from "./LanguageSelector";
import EditorToolbar from "./EditorToolbar";
import EditorStatusBar from "./EditorStatusbar";
import ReviewControls from "./ReviewControls";

function CodeEditor({
  editorRef,
  language,
  setLanguage,
  code,
  setCode,
  review,
  setReview,
  loading,
  setLoading,
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0B1120] overflow-hidden">

      <div className="p-6">

        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
        />

      </div>

      <EditorToolbar
        language={language}
        code={code}
        setCode={setCode}
      />

      <Editor
  height="min(68vh, 720px)"
  language={language}
  value={code}
  onMount={(editor) => {
    editorRef.current = editor;
  }}
  onChange={(value) => setCode(value || "")}
  theme="vs-dark"
  options={{
    minimap: {
      enabled: false,
    },
    automaticLayout: true,
    fontSize: 15,
    scrollBeyondLastLine: false,
    wordWrap: "on",
  }}
/>

      <EditorStatusBar
        language={language}
        code={code}
      />

      <div className="p-6">

        <ReviewControls
          language={language}
          code={code}
          review={review}
          setReview={setReview}
          loading={loading}
          setLoading={setLoading}
        />

      </div>

    </div>
  );
}

export default CodeEditor;
