export const ROBOTS_RULES = [
  { userAgent: "*", allow: "/", disallow: ["/api/"] },

  { userAgent: "OAI-SearchBot", allow: "/" },
  { userAgent: "ChatGPT-User", allow: "/" },
  { userAgent: "PerplexityBot", allow: "/" },
  { userAgent: "Claude-SearchBot", allow: "/" },
  { userAgent: "Applebot-Extended", allow: "/" },

  { userAgent: "GPTBot", allow: "/" },
  { userAgent: "ClaudeBot", allow: "/" },
  { userAgent: "Google-Extended", allow: "/" },
  { userAgent: "CCBot", disallow: "/" },
];
