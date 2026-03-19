"use client";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-purple-700/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full tag-badge text-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          <span className="text-purple-300 font-medium">Start in minutes</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
          Build something{" "}
          <span className="gradient-text">extraordinary</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Join thousands of developers who are already building the next generation
          of AI applications with OpenRouter.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white rounded-xl btn-primary">
            Get your API key
          </button>
          <button className="w-full sm:w-auto px-8 py-4 text-base font-medium text-gray-300 rounded-xl btn-secondary">
            Read the docs
          </button>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
          {[
            { icon: "🔒", text: "SOC 2 compliant" },
            { icon: "⚡", text: "99.9% uptime SLA" },
            { icon: "🌍", text: "Global edge network" },
            { icon: "💳", text: "No credit card needed" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-gray-600">
              <span className="text-base">{item.icon}</span>
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
