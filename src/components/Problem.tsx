const stats = [
  { value: "£37B", label: "in unclaimed UK assets", sub: "Pensions, bank accounts, investments lost to bad record-keeping" },
  { value: "68%", label: "of adults have no will", sub: "Intestacy rules decide what happens to your estate instead" },
  { value: "9.4", label: "financial accounts per person", sub: "Scattered across platforms your family doesn't know about" },
]

export function Problem() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="border-t border-stone-200 pt-16 md:pt-20">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 md:gap-24">
            <div>
              <p className="text-[13px] font-mono font-normal text-stone-400 mb-4">
                01
              </p>
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-stone-900 mb-5">
                The problem with dying in the digital age
              </h2>
              <p className="text-[15px] leading-relaxed text-stone-500">
                Your assets are scattered across dozens of platforms. Old workplace pensions,
                crypto on multiple exchanges, ISAs, death-in-service benefits, digital accounts.
                When you pass, your family faces months of detective work — and they'll still
                miss things.
              </p>
            </div>

            <div className="space-y-8">
              {stats.map((stat, i) => (
                <div key={i} className="group">
                  <div className="flex items-baseline gap-4 mb-1.5">
                    <span className="font-display text-4xl md:text-5xl font-medium tracking-tight text-stone-900">
                      {stat.value}
                    </span>
                    <span className="text-[15px] font-medium text-stone-600">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-[13px] text-stone-400 pl-0 md:pl-[calc(3rem+16px)]">
                    {stat.sub}
                  </p>
                  {i < stats.length - 1 && (
                    <div className="mt-8 border-b border-stone-100" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
