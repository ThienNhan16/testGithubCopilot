"use client";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Unified API",
    description:
      "One API to access all major AI models. Compatible with OpenAI SDK. Switch models by changing a single parameter.",
    color: "#A855F7",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Model Rankings",
    description:
      "See which models perform best for your use case. Real-world benchmarks from thousands of daily conversations.",
    color: "#3B82F6",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Price Comparison",
    description:
      "Find the most cost-effective model for your needs. Compare input/output costs across all providers in real time.",
    color: "#10B981",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Reliable Fallbacks",
    description:
      "Automatic fallback routing ensures your app stays online. If one provider is down, traffic routes to the next best option.",
    color: "#F59E0B",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "OpenAI Compatible",
    description:
      "Drop-in replacement for OpenAI API. Just change the base URL and API key. No code refactoring needed.",
    color: "#EC4899",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Usage Monitoring",
    description:
      "Track your spending and usage across all models. Set budgets, get alerts, and optimize costs with detailed analytics.",
    color: "#6366F1",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-px divider" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full tag-badge text-sm mb-4">
            <span className="text-purple-300 font-medium">Features</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Built for{" "}
            <span className="gradient-text">developers</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Everything you need to build production-ready AI applications,
            without managing multiple provider integrations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card rounded-2xl p-6 group hover:border-white/[0.15] transition-all"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{
                  backgroundColor: feature.color + "15",
                  border: `1px solid ${feature.color}30`,
                  color: feature.color,
                }}
              >
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2.5 group-hover:text-purple-200 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Trusted by developers at top companies
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap opacity-40">
            {["Stripe", "Vercel", "Linear", "Notion", "Figma", "GitLab"].map((company) => (
              <span key={company} className="text-gray-300 font-semibold text-sm tracking-wide">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
