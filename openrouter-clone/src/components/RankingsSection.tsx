"use client";

const rankings = [
  {
    rank: 1,
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    score: 92.4,
    change: "+2.1",
    positive: true,
  },
  {
    rank: 2,
    name: "GPT-4o",
    provider: "OpenAI",
    score: 91.8,
    change: "0.0",
    positive: null,
  },
  {
    rank: 3,
    name: "Gemini Pro 1.5",
    provider: "Google",
    score: 90.2,
    change: "+1.3",
    positive: true,
  },
  {
    rank: 4,
    name: "Llama 3.1 405B",
    provider: "Meta",
    score: 88.7,
    change: "+3.4",
    positive: true,
  },
  {
    rank: 5,
    name: "DeepSeek V3",
    provider: "DeepSeek",
    score: 87.9,
    change: "+5.2",
    positive: true,
  },
];

const providerColors: Record<string, string> = {
  Anthropic: "#D97706",
  OpenAI: "#10A37F",
  Google: "#4285F4",
  Meta: "#0668E1",
  DeepSeek: "#4F6CF7",
};

export default function RankingsSection() {
  return (
    <section id="rankings" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full tag-badge text-sm mb-6">
              <span className="text-purple-300 font-medium">Live Rankings</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Real-world{" "}
              <span className="gradient-text">model rankings</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Rankings powered by real user conversations and votes.
              Updated daily based on actual performance across millions of requests.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Daily evaluations", value: "2M+" },
                { label: "Active users", value: "50K+" },
                { label: "Model providers", value: "30+" },
                { label: "Benchmark tasks", value: "100+" },
              ].map((metric) => (
                <div key={metric.label} className="glass-card rounded-xl p-4">
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-500">{metric.label}</div>
                </div>
              ))}
            </div>

            <button className="mt-8 px-6 py-3 text-sm font-medium text-gray-300 rounded-xl btn-secondary inline-flex items-center gap-2">
              View full rankings
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Right: Rankings table */}
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
              <h3 className="text-white font-semibold text-sm">Top Models This Week</h3>
              <span className="text-xs text-gray-600">Updated 2h ago</span>
            </div>
            <div className="divide-y divide-white/[0.04]">
              {rankings.map((model) => (
                <div
                  key={model.rank}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                >
                  {/* Rank */}
                  <div className="w-8 text-center">
                    {model.rank <= 3 ? (
                      <span
                        className={`text-base font-bold ${
                          model.rank === 1
                            ? "text-yellow-400"
                            : model.rank === 2
                            ? "text-gray-400"
                            : "text-amber-600"
                        }`}
                      >
                        {model.rank === 1 ? "🥇" : model.rank === 2 ? "🥈" : "🥉"}
                      </span>
                    ) : (
                      <span className="text-sm font-medium text-gray-600">#{model.rank}</span>
                    )}
                  </div>

                  {/* Provider dot + info */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: providerColors[model.provider] || "#6B7280" }}
                    />
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-white truncate">{model.name}</div>
                      <div className="text-xs text-gray-500">{model.provider}</div>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="text-right">
                    <div className="text-sm font-semibold text-white">{model.score}</div>
                    <div
                      className={`text-xs font-medium ${
                        model.positive === true
                          ? "text-green-400"
                          : model.positive === false
                          ? "text-red-400"
                          : "text-gray-500"
                      }`}
                    >
                      {model.positive === true ? "↑ " : model.positive === false ? "↓ " : ""}
                      {model.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 border-t border-white/[0.04] text-center">
              <button className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
                See all rankings →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
