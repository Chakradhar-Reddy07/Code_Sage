import { useRef, useState } from "react";

import CodeEditor from "./CodeEditor";
import AIResponse from "./AiResponse";

function ReviewLayout() {
  const [language, setLanguage] = useState("java");
  const [code, setCode] = useState("");
  const [review, setReview] = useState(null);
  const [submittedCode, setSubmittedCode] = useState("");
  const [loading, setLoading] = useState(false);
  const editorRef = useRef(null);

  const handleSetReview = (review) => {
    setSubmittedCode(code);
    setReview(review);
  };

  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1.08fr)_minmax(440px,0.92fr)]">
      <CodeEditor
        editorRef={editorRef}
        language={language}
        setLanguage={setLanguage}
        code={code}
        setCode={setCode}
        review={review}
        setReview={handleSetReview}
        loading={loading}
        setLoading={setLoading}
      />

      <AIResponse
        editorRef={editorRef}
        review={review}
        loading={loading}
        sourceCode={submittedCode}
      />
    </div>
  );
}

export default ReviewLayout;
