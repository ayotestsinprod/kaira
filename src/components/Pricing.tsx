const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Get the basics sorted",
    features: [
      "Simple will creation",
      "Up to 5 asset entries",
      "Basic estate overview",
      "Email support",
    ],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Complete",
    price: "£19",
    period: "/mo",
    description: "Full estate intelligence",
    features: [
      "AI-powered asset discovery",
      "Unlimited assets & accounts",
      "Crypto wallet tracking",
      "IHT optimisation tools",
      "Beneficiary access portal",
      "Priority support",
    ],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Family",
    price: "£39",
    period: "/mo",
    description: "Protect the whole family",
    features: [
      "Up to 4 family members",
      "Everything in Complete",
      "Family estate dashboard",
      "Annual review with advisor",
      "Dedicated account manager",
    ],
    cta: "Start free trial",
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[13px] font-mono font-normal text-stone-400 mb-4">
            Pricing
          </p>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-stone-900 mb-4">
            Plans for every stage of life
          </h2>
          <p className="text-[15px] text-stone-500 max-w-[420px] mx-auto">
            Start free. Upgrade when your estate needs it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 relative ${
                plan.featured
                  ? "bg-stone-900 text-stone-100 ring-1 ring-stone-700"
                  : "bg-stone-50 ring-1 ring-stone-200"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-stone-100 text-stone-900 text-[11px] font-semibold rounded-full tracking-wide">
                  POPULAR
                </span>
              )}

              <p className={`text-[14px] font-semibold mb-1 ${
                plan.featured ? "text-stone-100" : "text-stone-900"
              }`}>
                {plan.name}
              </p>
              <p className={`text-[13px] mb-5 ${
                plan.featured ? "text-stone-400" : "text-stone-500"
              }`}>
                {plan.description}
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className={`font-display text-4xl font-medium tracking-tight ${
                  plan.featured ? "text-stone-100" : "text-stone-900"
                }`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-[14px] ${
                    plan.featured ? "text-stone-400" : "text-stone-500"
                  }`}>
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0">
                      <path
                        d="M4 8l3 3 5-5"
                        stroke={plan.featured ? "#a8a29e" : "#78716c"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={`text-[14px] ${
                      plan.featured ? "text-stone-300" : "text-stone-600"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`block w-full text-center py-2.5 rounded-lg text-[14px] font-medium transition-colors ${
                  plan.featured
                    ? "bg-stone-100 text-stone-900 hover:bg-white"
                    : "bg-stone-900 text-stone-100 hover:bg-stone-800"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
