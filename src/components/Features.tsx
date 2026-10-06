const features = [
  {
    title: "Will creation",
    description: "AI-guided drafting that meets Wills Act 1837 requirements. Update anytime, no solicitor required.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
  {
    title: "Crypto reconciliation",
    description: "Multi-chain wallet tracking. Balances, keys, and recovery instructions documented for beneficiaries.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: "Pension finder",
    description: "AI agents trace every pot across your employment history. Forgotten pots from old jobs, found in minutes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: "Insurance audit",
    description: "All policies, one view. Coverage gaps flagged. Beneficiary details verified and kept current.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Tax optimisation",
    description: "IHT modelling across scenarios. Trusts, allowances, gifting strategies — so your family keeps more.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    title: "Digital vault",
    description: "Property deeds to domain names. Every asset catalogued, encrypted, and accessible to the right people.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="border-t border-stone-200 pt-16 md:pt-20">
          <div className="max-w-[560px] mb-16">
            <p className="text-[13px] font-mono font-normal text-stone-400 mb-4">
              03
            </p>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-stone-900 mb-5">
              Everything your estate needs
            </h2>
            <p className="text-[15px] leading-relaxed text-stone-500">
              Six core capabilities. Each one powered by AI agents that work continuously
              to keep your estate plan accurate and complete.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {features.map((feature, i) => (
              <div key={i} className="group">
                <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-500 mb-4 group-hover:bg-stone-900 group-hover:text-stone-100 transition-colors duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-stone-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-stone-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
