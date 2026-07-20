const { generateContent } = require("../providers/opencodeProvider");

const MAX_RETRIES = 3;
const BASE_DELAY_MS = 1000;
const REQUEST_TIMEOUT_MS = Number(process.env.AI_TIMEOUT_MS) || 30000;
const RETRYABLE_STATUSES = new Set([429, 500, 502, 503, 504]);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const cleanJsonText = (text) => {
  if (typeof text !== "string") {
    throw new Error("AI returned an empty response");
  }

  return text
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```\s*$/i, "")
    .replace(/,\s*([}\]])/g, "$1")
    .trim();
};

const extractJsonObject = (text) => {
  const cleanedText = cleanJsonText(text);
  const firstBrace = cleanedText.indexOf("{");
  const lastBrace = cleanedText.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
    return cleanedText;
  }

  return cleanedText.slice(firstBrace, lastBrace + 1);
};

const parseJsonResponse = (text) => {
  const cleanedText = extractJsonObject(text);

  try {
    return JSON.parse(cleanedText);
  } catch (error) {
    const parseError = new Error("AI returned malformed JSON");
    parseError.cause = error;
    parseError.rawResponse = cleanedText;
    throw parseError;
  }
};

const isRetryableError = (error) => {
  return (
    RETRYABLE_STATUSES.has(error.status) ||
    error.code === "ETIMEDOUT" ||
    error.code === "ECONNRESET" ||
    error.name === "AbortError" ||
    error.message === "AI request timed out" ||
    error.message === "AI returned malformed JSON"
  );
};

const withTimeout = (promise, timeoutMs) => {
  let timeoutId;

  const timeout = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error("AI request timed out"));
    }, timeoutMs);
  });

  return Promise.race([promise, timeout]).finally(() => clearTimeout(timeoutId));
};

const generateJSON = async (prompt, context = "AI JSON") => {
  let lastError;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const text = await withTimeout(
        generateContent(prompt),
        REQUEST_TIMEOUT_MS
      );

      return parseJsonResponse(text);
    } catch (error) {
      lastError = error;
      console.error(`AI Error [${context}] attempt ${attempt}:`, {
        message: error.message,
        status: error.status,
      });

      if (!isRetryableError(error) || attempt === MAX_RETRIES) {
        break;
      }

      await sleep(BASE_DELAY_MS * 2 ** (attempt - 1));
    }
  }

  throw lastError;
};

module.exports = {
  generateJSON,
  parseJsonResponse,
};
