"use client";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for exploration and prototyping.",
    features: [
      "Access to free models",
      "10 requests per minute",
      "Community support",
      "Basic usage analytics",
    ],
    cta: "Get started free",
    ctaStyle: "btn-secondary",
    highlight: false,
  },
  {
    name: "Developer",
    price: "$5",
    period: "/month",
    description: "For individual developers building real apps.",
    features: [
      "All free tier features",
      "Access to all models",
      "60 requests per minute",
      "Email support",
      "Advanced analytics",
      "$5 credits included",
    ],
    cta: "Start building",
    ctaStyle: "btn-primary",
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Team",
    price: "$49",
    period: "/month",
    description: "For teams shipping AI-powered products.",
    features: [
      "All developer features",
      "300 requests per minute",
      "Priority support",
      "Team management",
      "Custom rate limits",
      "$50 credits included",
    ],
    cta: "Contact sales",
    ctaStyle: "btn-secondary",
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 radial-overlay opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full tag-badge text-sm mb-4">
            <span className="text-purple-300 font-medium">Pricing</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Simple,{" "}
            <span className="gradient-text">transparent pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Pay only for what you use. No hidden fees.
            Model costs are passed through at provider rates.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? "bg-gradient-to-b from-purple-900/40 to-purple-950/20 border border-purple-500/40 purple-glow"
                  : "glass-card"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-600 text-white">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-semibold text-lg mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlight ? "bg-purple-500/30" : "bg-white/[0.07]"
                    }`}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                        className={plan.highlight ? "text-purple-300" : "text-gray-400"}>
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl text-sm font-semibold ${
                  plan.highlight ? "btn-primary text-white" : "btn-secondary text-gray-300"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Usage note */}
        <p className="text-center text-gray-600 text-sm mt-8">
          All plans include pay-as-you-go model usage. Credits roll over monthly.
        </p>
      </div>
    </section>
  );
}
