"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 radial-overlay" />
      
      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-900/20 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-purple-800/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full tag-badge text-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-purple-300 font-medium">300+ models available</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          <span className="gradient-text">The Unified Interface</span>
          <br />
          <span className="text-white">for LLMs</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          OpenRouter routes your requests to the best AI models available. 
          Compare prices, test quality, and build with a single unified API.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white rounded-xl btn-primary">
            Start building for free
          </button>
          <button className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium text-gray-300 rounded-xl btn-secondary flex items-center justify-center gap-2">
            View models
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.05]">
          {[
            { value: "300+", label: "AI Models" },
            { value: "100K+", label: "Developers" },
            { value: "$0.001", label: "Min Price / 1K tokens" },
            { value: "99.9%", label: "Uptime SLA" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center py-8 px-4 bg-[#0a0a0f] hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-3xl font-bold text-white stat-number mb-1">
                {stat.value}
              </span>
              <span className="text-sm text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* API teaser */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-xs text-gray-500 ml-2">chat_completion.js</span>
            </div>
            <pre className="p-5 text-left text-sm overflow-x-auto">
              <code>
                <span className="text-purple-400">const</span>
                <span className="text-white"> response </span>
                <span className="text-gray-400">= </span>
                <span className="text-blue-400">await </span>
                <span className="text-white">fetch</span>
                <span className="text-gray-300">(</span>
                {"\n"}
                <span className="text-green-400">{"  "}&quot;https://openrouter.ai/api/v1/chat/completions&quot;</span>
                <span className="text-gray-300">, {"{"}</span>
                {"\n"}
                <span className="text-gray-400">{"  method: "}</span>
                <span className="text-green-400">&quot;POST&quot;</span>
                <span className="text-gray-300">,</span>
                {"\n"}
                <span className="text-gray-400">{"  headers: {"}</span>
                {"\n"}
                <span className="text-gray-400">{"    "}</span>
                <span className="text-green-400">&quot;Authorization&quot;</span>
                <span className="text-gray-400">{": "}</span>
                <span className="text-green-400">`Bearer ${"{"}OPENROUTER_API_KEY{"}"}`</span>
                {"\n"}
                <span className="text-gray-400">{"  },"}</span>
                {"\n"}
                <span className="text-gray-400">{"  body: JSON.stringify({"}</span>
                {"\n"}
                <span className="text-gray-400">{"    model: "}</span>
                <span className="text-green-400">&quot;openai/gpt-4o&quot;</span>
                <span className="text-gray-300">,</span>
                {"\n"}
                <span className="text-gray-400">{"    messages: [{ role: "}</span>
                <span className="text-green-400">&quot;user&quot;</span>
                <span className="text-gray-400">{", content: "}</span>
                <span className="text-green-400">&quot;Hello!&quot;</span>
                <span className="text-gray-400">{" }]"}</span>
                {"\n"}
                <span className="text-gray-400">{"  })"}</span>
                {"\n"}
                <span className="text-gray-300">{"});"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-600">
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
