import { Link } from "react-router-dom"

export default function LookbookBanner() {
  return (
    <section id="lookbook" className="mx-auto max-w-6xl px-6">
      <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-white/70 p-8 shadow-lift md:p-12">
        <div className="pointer-events-none absolute -top-16 right-0 h-48 w-48 rounded-full bg-blush/40 blur-3xl" />
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">
              Lookbook
            </p>
            <h2 className="mt-3 text-3xl font-display text-black">
              Pair petals with slip dresses, linen sets, and evening tailoring.
            </h2>
            <p className="mt-4 text-sm text-black/65">
              Explore styling notes and color stories curated by the studio.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-black/60">
              <span className="rounded-full border border-black/10 px-4 py-2">
                Weekend edit
              </span>
              <span className="rounded-full border border-black/10 px-4 py-2">
                Event ready
              </span>
              <span className="rounded-full border border-black/10 px-4 py-2">
                Soft metallics
              </span>
            </div>
            <Link
              to="/shop"
              className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
            >
              Shop the look
            </Link>
          </div>
          <div
            className="h-72 rounded-[28px] border border-black/10"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(232, 194, 181, 0.9), rgba(201, 162, 39, 0.25))"
            }}
          />
        </div>
      </div>
    </section>
  )
}
