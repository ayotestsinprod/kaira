export function Product() {
  return (
    <section id="product" className="py-24 md:py-32 bg-stone-900">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[560px] mb-16">
          <p className="text-[13px] font-mono font-normal text-stone-500 mb-4">
            02
          </p>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-stone-100 mb-5">
            One view of everything you own
          </h2>
          <p className="text-[15px] leading-relaxed text-stone-400">
            Kaira builds a living map of your estate. Every account, asset, policy, and
            beneficiary — verified and kept current by AI agents that work in the background.
          </p>
        </div>

        {/* Product mockup */}
        <div className="rounded-xl border border-stone-700/50 bg-stone-800/50 overflow-hidden backdrop-blur-sm">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-stone-700/50">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-stone-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-stone-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-stone-600" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-3 py-1 bg-stone-700/50 rounded text-[11px] text-stone-400 font-mono">
                app.kaira.co / estate
              </div>
            </div>
            <div className="w-16" />
          </div>

          {/* Dashboard content */}
          <div className="p-6 md:p-8">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-stone-500 mb-1">Total estate value</p>
                <p className="font-display text-3xl md:text-4xl font-medium text-stone-100 tracking-tight">
                  £1,247,830
                </p>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[12px] font-medium">
                  All synced
                </div>
                <div className="px-3 py-1.5 rounded-md bg-stone-700/50 text-stone-400 text-[12px] font-medium">
                  Last scan: 2h ago
                </div>
              </div>
            </div>

            {/* Asset grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { type: "Pensions", value: "£482,100", count: "3 providers", status: "verified", icon: PensionIcon },
                { type: "Property", value: "£425,000", count: "1 property", status: "verified", icon: PropertyIcon },
                { type: "Crypto", value: "£127,430", count: "4 wallets", status: "syncing", icon: CryptoIcon },
                { type: "Insurance", value: "£213,300", count: "2 policies", status: "verified", icon: InsuranceIcon },
              ].map((asset) => (
                <div
                  key={asset.type}
                  className="p-4 rounded-lg bg-stone-800/80 border border-stone-700/40 hover:border-stone-600/60 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <asset.icon />
                    <span className={`inline-flex items-center gap-1 text-[10px] font-medium ${
                      asset.status === "verified" ? "text-emerald-400" : "text-amber-400"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        asset.status === "verified" ? "bg-emerald-400" : "bg-amber-400 animate-pulse"
                      }`} />
                      {asset.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-500 mb-0.5">{asset.type}</p>
                  <p className="text-lg font-medium text-stone-100 tracking-tight mb-0.5">{asset.value}</p>
                  <p className="text-[11px] text-stone-500">{asset.count}</p>
                </div>
              ))}
            </div>

            {/* Activity feed */}
            <div className="mt-6 pt-6 border-t border-stone-700/40">
              <p className="text-[11px] uppercase tracking-wider text-stone-500 mb-3">Recent activity</p>
              <div className="space-y-2">
                {[
                  { action: "Discovered dormant pension", detail: "Scottish Widows • £18,420", time: "12m ago", dot: "bg-emerald-400" },
                  { action: "Beneficiary updated", detail: "Aviva Life Insurance", time: "2h ago", dot: "bg-blue-400" },
                  { action: "Wallet balance synced", detail: "Ethereum • 3.2 ETH", time: "4h ago", dot: "bg-stone-500" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-2">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.dot}`} />
                    <span className="text-[13px] text-stone-300 font-medium">{item.action}</span>
                    <span className="text-[13px] text-stone-500">{item.detail}</span>
                    <span className="ml-auto text-[11px] text-stone-600 font-mono">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PensionIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a8a29e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
    </svg>
  )
}

function PropertyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a8a29e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  )
}

function CryptoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a8a29e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 8h4.5a2.5 2.5 0 010 5H9V8z" />
      <path d="M9 13h5a2.5 2.5 0 010 5H9v-5z" />
      <path d="M11 6v2M13 6v2M11 18v-2M13 18v-2" />
    </svg>
  )
}

function InsuranceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a8a29e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}
