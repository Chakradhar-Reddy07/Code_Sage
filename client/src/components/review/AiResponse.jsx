import { useState } from "react";

import OverviewTab from "./tabs/OverviewTab";
import BugsTab from "./tabs/BugsTab";
import OptimizationTab from "./tabs/OptimizationTab";
import LearningTab from "./tabs/LearningTab";
import AIChat from "./chat/AIChat";
const tabs = [
  "Overview",
  "Bugs",
  "Optimization",
  "Learning",
];

function AIResponse({ review, loading, editorRef }) {
  const [activeTab, setActiveTab] = useState("Overview");

  if (loading) {
    return (
      <div className="rounded-3xl border border-white/10 bg-[#0B1120] p-6">
        <h2 className="text-2xl font-bold text-white">
          AI Review
        </h2>

        <p className="mt-8 text-slate-400">
          Analyzing your code...
        </p>
      </div>
    );
  }

  if (!review) {
    return (
      <div className="rounded-3xl border border-white/10 bg-[#0B1120] p-6">
        <h2 className="text-2xl font-bold text-white">
          AI Review
        </h2>

        <p className="mt-8 text-slate-400">
          Submit your code to receive an AI review.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#0B1120] p-6">

      <h2 className="text-2xl font-bold text-white">
        AI Review
      </h2>

      <div className="mt-6 flex gap-3 flex-wrap">

        {tabs.map((tab) => (

          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full transition ${
              activeTab === tab
                ? "bg-violet-600 text-white"
                : "bg-white/5 text-slate-300"
            }`}
          >
            {tab}
          </button>

        ))}

      </div>

      <div className="mt-8">

        {activeTab === "Overview" && (
          <OverviewTab review={review} />
        )}

        {activeTab === "Bugs" && (
          <BugsTab
  review={review}
  editorRef={editorRef}
/>
        )}

        {activeTab === "Optimization" && (
          <OptimizationTab review={review} />
        )}

        {activeTab === "Learning" && (
          <LearningTab review={review} />
        )}

      </div>

      <div className="my-10 border-t border-white/10" />

      <AIChat review={review} />

    </div>
    
  );
}

export default AIResponse;
