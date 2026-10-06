import { useState } from "react"

export function Cta() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="cta" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em] text-stone-900 mb-5">
            Your legacy deserves more than a filing cabinet
          </h2>
          <p className="text-[15px] leading-relaxed text-stone-500 mb-10">
            Join the waitlist. We'll let you know when Kaira is ready for you.
          </p>

          {submitted ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-stone-100 rounded-lg">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 8l3 3 5-5" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[14px] font-medium text-stone-700">You're on the list</span>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (email) setSubmitted(true)
              }}
              className="flex items-center gap-2 max-w-[400px] mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="flex-1 px-4 py-2.5 text-[14px] bg-white border border-stone-200 rounded-lg outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-200 transition-all placeholder:text-stone-400"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-stone-900 text-stone-50 text-[14px] font-medium rounded-lg hover:bg-stone-800 transition-colors flex-shrink-0"
              >
                Join waitlist
              </button>
            </form>
          )}

          <p className="text-[12px] text-stone-400 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
