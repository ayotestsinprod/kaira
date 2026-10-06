import { useState, useEffect } from "react"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fafaf9]/90 backdrop-blur-xl border-b border-stone-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-semibold tracking-tight text-stone-900">
          kaira
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#product" className="text-[13px] font-medium text-stone-500 hover:text-stone-900 transition-colors">
            Product
          </a>
          <a href="#features" className="text-[13px] font-medium text-stone-500 hover:text-stone-900 transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-[13px] font-medium text-stone-500 hover:text-stone-900 transition-colors">
            Pricing
          </a>
          <a href="#security" className="text-[13px] font-medium text-stone-500 hover:text-stone-900 transition-colors">
            Security
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden sm:inline-flex text-[13px] font-medium text-stone-600 hover:text-stone-900 transition-colors"
          >
            Log in
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium bg-stone-900 text-stone-50 rounded-lg hover:bg-stone-800 transition-colors"
          >
            Get started
          </a>
        </div>
      </div>
    </nav>
  )
}
