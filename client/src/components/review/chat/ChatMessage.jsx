function ChatMessage({
  role,
  content,
}) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-5 py-4 ${
          isUser
            ? "bg-violet-600 text-white"
            : "bg-white/5 text-slate-300"
        }`}
      >
        {content}
      </div>
    </div>
  );
}

export default ChatMessage;