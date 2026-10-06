import { useEffect, useRef } from "react"

export function Hero() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
      el.style.setProperty("--my", `${e.clientY - rect.top}px`)
    }
    el.addEventListener("mousemove", handleMove)
    return () => el.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
      {/* Subtle grid background with radial mask */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1c1917 1px, transparent 1px),
            linear-gradient(to bottom, #1c1917 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at var(--mx, 50%) var(--my, 30%), black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at var(--mx, 50%) var(--my, 30%), black 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="max-w-[680px]">
          {/* Eyebrow — restrained, no badge styling */}
          <p className="text-[13px] font-medium tracking-wide uppercase text-stone-400 mb-6">
            Estate planning, reimagined
          </p>

          <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-stone-900 mb-6">
            Your life's work.{" "}
            <span className="italic text-stone-400">Protected.</span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-stone-500 max-w-[520px] mb-10">
            Kaira's AI agents find every asset you own, organise your estate,
            and make sure nothing is lost when it matters most.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-stone-900 text-stone-50 text-[15px] font-medium rounded-lg hover:bg-stone-800 transition-all hover:-translate-y-px"
            >
              Start your plan
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#product"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-stone-500 hover:text-stone-900 transition-colors"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Floating asset indicators */}
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2">
          <div className="relative w-[340px] h-[340px]">
            {/* Central node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-stone-900 flex items-center justify-center shadow-xl">
              <span className="text-stone-50 font-display text-xl font-semibold">K</span>
            </div>

            {/* Orbiting nodes */}
            {[
              { label: "Crypto", x: 0, y: -130, delay: "0s" },
              { label: "Pension", x: 120, y: -50, delay: "0.1s" },
              { label: "Property", x: 100, y: 80, delay: "0.2s" },
              { label: "Insurance", x: -30, y: 120, delay: "0.3s" },
              { label: "Will", x: -130, y: 30, delay: "0.4s" },
              { label: "Benefits", x: -100, y: -80, delay: "0.5s" },
            ].map((node) => (
              <div
                key={node.label}
                className="absolute top-1/2 left-1/2 animate-[fadeIn_0.6s_ease_forwards] opacity-0"
                style={{
                  transform: `translate(calc(-50% + ${node.x}px), calc(-50% + ${node.y}px))`,
                  animationDelay: node.delay,
                }}
              >
                {/* Connection line */}
                <svg
                  className="absolute top-1/2 left-1/2 -z-10 overflow-visible"
                  width="1" height="1"
                >
                  <line
                    x1="0" y1="0"
                    x2={-node.x} y2={-node.y}
                    stroke="#d6d3d1"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                </svg>
                <div className="px-3 py-1.5 bg-white border border-stone-200 rounded-lg shadow-sm text-[12px] font-medium text-stone-600 whitespace-nowrap">
                  {node.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(calc(-50%), calc(-50%)) scale(0.9); }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
