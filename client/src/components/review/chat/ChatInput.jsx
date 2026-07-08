import { Send } from "lucide-react";

function ChatInput({
  value,
  setValue,
  onSend,
  loading,
}) {
  return (
    <div className="flex gap-3">

      <input
        value={value}
        onChange={(e) =>
          setValue(e.target.value)
        }
        placeholder="Ask AI anything..."
        className="
          flex-1
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-4
          py-3
          text-white
          outline-none
        "
      />

      <button
        disabled={loading}
        onClick={onSend}
        className="
          rounded-xl
          bg-violet-600
          px-5
          text-white
        "
      >
        <Send size={18} />
      </button>

    </div>
  );
}

export default ChatInput;