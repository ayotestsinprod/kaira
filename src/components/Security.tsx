export function Security() {
  return (
    <section id="security" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="border-t border-stone-200 pt-16 md:pt-20">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="text-[13px] font-mono font-normal text-stone-400 mb-4">
                Security
              </p>
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-stone-900 mb-5">
                Your most sensitive data, treated like it
              </h2>
              <p className="text-[15px] leading-relaxed text-stone-500 mb-8">
                Estate data is uniquely personal. We've built Kaira's security model around
                that reality — not as an afterthought.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-stone-900 border-b border-stone-300 pb-0.5 hover:border-stone-900 transition-colors"
              >
                Read our security whitepaper
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "AES-256 encryption",
                  desc: "All data encrypted at rest and in transit. Zero-knowledge architecture.",
                },
                {
                  title: "UK data residency",
                  desc: "Your data never leaves UK data centres. GDPR compliant by design.",
                },
                {
                  title: "SOC 2 Type II",
                  desc: "Independently audited security controls. Verified annually.",
                },
                {
                  title: "Continuity guarantee",
                  desc: "Partner trust company ensures beneficiary access, regardless of Kaira's future.",
                },
              ].map((item, i) => (
                <div key={i} className="py-4">
                  <div className="w-8 h-8 rounded-md bg-stone-100 flex items-center justify-center mb-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#78716c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      {i === 0 && <path d="M9 12l2 2 4-4" />}
                    </svg>
                  </div>
                  <h3 className="text-[14px] font-semibold text-stone-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-stone-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
