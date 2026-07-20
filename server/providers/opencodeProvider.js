const API_URL = "https://opencode.ai/zen/go/v1/chat/completions";

const generateContent = async (prompt, config = {}) => {
  const apiKey = process.env.OPENCODE_API_KEY;
  const model = process.env.OPENCODE_MODEL || "deepseek-v4-flash";

  if (!apiKey) {
    throw new Error("OPENCODE_API_KEY is not set");
  }

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
      temperature: config.temperature ?? 0.2,
    }),
  });

  if (!response.ok) {
    const error = new Error("OpenCode API request failed");
    error.status = response.status;
    const body = await response.text().catch(() => "");
    error.body = body;
    throw error;
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "";
};

module.exports = { generateContent };
