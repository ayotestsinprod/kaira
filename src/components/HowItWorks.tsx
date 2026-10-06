const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Link your accounts, upload documents, or just tell Kaira where to look. Our agents handle the rest — tracing pensions from old employers, finding dormant accounts, syncing crypto wallets.",
    detail: "Supports 200+ UK financial institutions",
  },
  {
    number: "02",
    title: "Organise",
    description: "AI builds a verified map of your complete estate. Assets, liabilities, beneficiaries, policies. Everything cross-referenced and continuously monitored for changes.",
    detail: "Updates automatically as your life changes",
  },
  {
    number: "03",
    title: "Protect",
    description: "Create your will, optimise for inheritance tax, set up secure beneficiary access. When the time comes, your family has a clear, complete picture and a step-by-step guide.",
    detail: "Legally compliant under English & Welsh law",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[560px] mb-16">
          <p className="text-[13px] font-mono font-normal text-stone-400 mb-4">
            How it works
          </p>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-stone-900">
            Three steps to peace of mind
          </h2>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid md:grid-cols-[80px_1fr] gap-6 md:gap-12 py-12 ${
                i < steps.length - 1 ? "border-b border-stone-100" : ""
              }`}
            >
              <p className="font-mono text-[13px] text-stone-300 pt-1">
                {step.number}
              </p>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-medium text-stone-900 mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-stone-500 max-w-[520px] mb-3">
                  {step.description}
                </p>
                <p className="text-[13px] font-mono text-stone-400">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
