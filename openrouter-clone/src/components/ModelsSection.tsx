"use client";

import { useState } from "react";

const models = [
  {
    id: "gpt-4o",
    name: "GPT-4o",
    provider: "OpenAI",
    providerColor: "#10A37F",
    description: "Most capable GPT-4 model with vision. Optimized for chat and complex reasoning tasks.",
    contextWindow: "128K",
    inputPrice: "$5",
    outputPrice: "$15",
    badge: "hot",
    tags: ["vision", "function-calling"],
  },
  {
    id: "claude-3-5-sonnet",
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    providerColor: "#D97706",
    description: "Most intelligent Claude model. Excels at coding, analysis, and nuanced content generation.",
    contextWindow: "200K",
    inputPrice: "$3",
    outputPrice: "$15",
    badge: "new",
    tags: ["vision", "coding"],
  },
  {
    id: "gemini-pro-1.5",
    name: "Gemini Pro 1.5",
    provider: "Google",
    providerColor: "#4285F4",
    description: "Google's most capable model with 1M token context and multimodal capabilities.",
    contextWindow: "1M",
    inputPrice: "$3.5",
    outputPrice: "$10.5",
    badge: null,
    tags: ["vision", "long-context"],
  },
  {
    id: "llama-3.1-405b",
    name: "Llama 3.1 405B",
    provider: "Meta",
    providerColor: "#0668E1",
    description: "Meta's most powerful open-source model. State-of-the-art performance across many tasks.",
    contextWindow: "128K",
    inputPrice: "$3",
    outputPrice: "$3",
    badge: null,
    tags: ["open-source"],
  },
  {
    id: "mistral-large",
    name: "Mistral Large",
    provider: "Mistral AI",
    providerColor: "#FF7000",
    description: "Mistral's flagship model. Excellent multilingual support and complex reasoning.",
    contextWindow: "128K",
    inputPrice: "$4",
    outputPrice: "$12",
    badge: null,
    tags: ["multilingual"],
  },
  {
    id: "deepseek-chat",
    name: "DeepSeek V3",
    provider: "DeepSeek",
    providerColor: "#4F6CF7",
    description: "Top-tier open model for coding and math. Competitive with frontier models.",
    contextWindow: "64K",
    inputPrice: "$0.27",
    outputPrice: "$1.1",
    badge: "new",
    tags: ["coding", "math"],
  },
  {
    id: "qwen-2.5-72b",
    name: "Qwen 2.5 72B",
    provider: "Alibaba",
    providerColor: "#FF6A00",
    description: "Alibaba's latest open model with strong multilingual and coding capabilities.",
    contextWindow: "128K",
    inputPrice: "$0.4",
    outputPrice: "$1.2",
    badge: null,
    tags: ["open-source", "multilingual"],
  },
  {
    id: "gemma-2-27b",
    name: "Gemma 2 27B",
    provider: "Google",
    providerColor: "#4285F4",
    description: "Lightweight yet capable open model from Google. Great performance for its size.",
    contextWindow: "8K",
    inputPrice: "Free",
    outputPrice: "Free",
    badge: "free",
    tags: ["free", "open-source"],
  },
  {
    id: "phi-3.5-mini",
    name: "Phi-3.5 Mini",
    provider: "Microsoft",
    providerColor: "#00A4EF",
    description: "Small but powerful model from Microsoft. Excellent for on-device deployment.",
    contextWindow: "128K",
    inputPrice: "Free",
    outputPrice: "Free",
    badge: "free",
    tags: ["free", "small"],
  },
];

const filters = ["All", "Free", "Vision", "Coding", "Open Source", "Long Context"];

export default function ModelsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredModels = models.filter((model) => {
    const matchesSearch =
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.provider.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeFilter === "All") return matchesSearch;
    if (activeFilter === "Free") return matchesSearch && model.badge === "free";
    if (activeFilter === "Vision") return matchesSearch && model.tags.includes("vision");
    if (activeFilter === "Coding") return matchesSearch && model.tags.includes("coding");
    if (activeFilter === "Open Source") return matchesSearch && model.tags.includes("open-source");
    if (activeFilter === "Long Context") return matchesSearch && model.tags.includes("long-context");
    return matchesSearch;
  });

  return (
    <section id="models" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full tag-badge text-sm mb-4">
            <span className="text-purple-300 font-medium">AI Models</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Every major model,{" "}
            <span className="gradient-text">one API</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Access the best AI models from OpenAI, Anthropic, Google, Meta, and more.
            Compare and switch in seconds.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-purple-600 text-white"
                    : "btn-secondary text-gray-400 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredModels.map((model) => (
            <div
              key={model.id}
              className="glass-card card-glow rounded-xl p-5 cursor-pointer group"
            >
              {/* Provider & Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: model.providerColor + "33", border: `1px solid ${model.providerColor}55` }}
                  >
                    <span style={{ color: model.providerColor }}>{model.provider[0]}</span>
                  </div>
                  <span className="text-xs text-gray-500">{model.provider}</span>
                </div>
                {model.badge && (
                  <span
                    className={`model-badge ${
                      model.badge === "free"
                        ? "model-badge-free"
                        : model.badge === "new"
                        ? "model-badge-new"
                        : "model-badge-hot"
                    }`}
                  >
                    {model.badge === "hot" ? "🔥 Hot" : model.badge === "new" ? "✨ New" : "Free"}
                  </span>
                )}
              </div>

              {/* Model name */}
              <h3 className="text-white font-semibold text-base mb-2 group-hover:text-purple-300 transition-colors">
                {model.name}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                {model.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {model.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/[0.04] border border-white/[0.07] text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                <div className="flex gap-4">
                  <div>
                    <div className="text-[10px] text-gray-600 mb-0.5">Input / 1M</div>
                    <div className="text-sm font-semibold text-white">{model.inputPrice}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-600 mb-0.5">Output / 1M</div>
                    <div className="text-sm font-semibold text-white">{model.outputPrice}</div>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-600 mb-0.5">Context</div>
                  <div className="text-sm font-semibold text-purple-400">{model.contextWindow}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 text-sm font-medium text-gray-400 rounded-xl btn-secondary hover:text-white inline-flex items-center gap-2">
            View all 300+ models
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
