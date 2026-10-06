export function Footer() {
  return (
    <footer className="border-t border-stone-200">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid md:grid-cols-[1fr_auto_auto_auto] gap-12 md:gap-16 mb-12">
          <div>
            <p className="font-display text-lg font-semibold text-stone-900 mb-3 tracking-tight">
              kaira
            </p>
            <p className="text-[13px] leading-relaxed text-stone-500 max-w-[260px]">
              AI-powered estate planning. Every asset found, organised, and protected.
            </p>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-stone-400 mb-4">Product</p>
            <ul className="space-y-2.5">
              {["Features", "Pricing", "Security", "Changelog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-stone-500 hover:text-stone-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-stone-400 mb-4">Company</p>
            <ul className="space-y-2.5">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-stone-500 hover:text-stone-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-stone-400 mb-4">Legal</p>
            <ul className="space-y-2.5">
              {["Privacy", "Terms", "Cookies", "Licences"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-stone-500 hover:text-stone-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-stone-100">
          <p className="text-[12px] text-stone-400">
            &copy; {new Date().getFullYear()} Kaira. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-stone-400 hover:text-stone-600 transition-colors" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-stone-400 hover:text-stone-600 transition-colors" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
