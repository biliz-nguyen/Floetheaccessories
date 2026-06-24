import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 right-0 h-80 w-80 rounded-full bg-blush/40 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-sage/30 blur-3xl animate-float delay-2" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-black/60 animate-fade-up">
            New season drop
          </p>
          <h1 className="mt-4 text-4xl font-display text-black sm:text-5xl lg:text-6xl animate-fade-up delay-1">
            Floral accessories designed to frame every silhouette.
          </h1>
          <p className="mt-6 max-w-xl text-base text-black/65 animate-fade-up delay-2">
            Sculpted petals, soft metallics, and curated sets for hair, waist, and
            neckline styling.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up delay-3">
            <Link
              to="/shop"
              className="rounded-full bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-black/90"
            >
              Shop collection
            </Link>
            <Link
              to="/#lookbook"
              className="rounded-full border border-black/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-black/70 transition hover:border-black/40"
            >
              View lookbook
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 animate-fade-up delay-3">
            {[
              "Hand-finished details",
              "Limited weekly drops",
              "Soft-touch finishes"
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-black/70 shadow-soft"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up delay-2">
          <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full border border-black/10 bg-white/70" />
          <div className="absolute -bottom-8 right-0 h-32 w-32 rounded-full border border-black/10 bg-white/70" />
          <div className="glass-card rounded-[32px] p-6">
            <div
                className="aspect-[4/5] w-full rounded-[26px] border border-black/10"
                style={{
                  backgroundImage:
                    "linear-gradient(140deg, rgba(246, 231, 215, 0.9), rgba(201, 162, 39, 0.2))"
                }}
            />
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-black/60">
                  Highlight
                </p>
                <h3 className="text-xl font-display text-black">
                  Gilded petal collar
                </h3>
              </div>
              <span className="rounded-full border border-black/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-black/60">
                $80
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
