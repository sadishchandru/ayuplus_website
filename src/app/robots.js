export default function robots() {
  return {
    rules: [
      // General crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // OpenAI — ChatGPT search and citation
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      // Perplexity AI
      { userAgent: "PerplexityBot", allow: "/" },
      // Anthropic — Claude AI
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      // Google — Gemini, AI Overviews, AI Mode
      { userAgent: "Google-Extended", allow: "/" },
      // Microsoft — Copilot (via Bing)
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: "https://www.ayuplus.in/sitemap.xml",
  };
}
