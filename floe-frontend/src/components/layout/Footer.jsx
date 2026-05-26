export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-sand/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-black/60">
            Floe Studio
          </p>
          <h3 className="mt-3 text-2xl font-display text-black">
            Floral accessories for the modern wardrobe.
          </h3>
          <p className="mt-4 text-sm text-black/60">
            Small-batch pieces inspired by fresh petals, soft metals, and
            couture silhouettes.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-black/60">
            Customer
          </p>
          <p className="text-black/70">Shipping and returns</p>
          <p className="text-black/70">Size and fit guide</p>
          <p className="text-black/70">Care instructions</p>
          <p className="text-black/70">Contact studio</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-black/60">
            Keep in touch
          </p>
          <p className="mt-3 text-sm text-black/70">
            Monthly drops, styling notes, and early access.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border border-black/10 bg-white px-4 py-2 text-sm focus:border-black/30 focus:outline-none"
            />
            <button
              type="button"
              className="rounded-full bg-black px-6 py-2 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-black/90"
            >
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs uppercase tracking-[0.3em] text-black/50 sm:flex-row">
          <span>2026 Floe Studio</span>
          <span>Instagram · Pinterest · TikTok</span>
        </div>
      </div>
    </footer>
  )
}
