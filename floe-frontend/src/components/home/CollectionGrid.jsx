import { Link } from "react-router-dom"
import { collections } from "../../data/collections.js"

export default function CollectionGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-black/60">
            Curated edits
          </p>
          <h2 className="mt-2 text-3xl font-display text-black">
            Shop by styling mood
          </h2>
        </div>
        <Link
          to="/shop"
          className="hidden text-xs uppercase tracking-[0.3em] text-black/60 transition hover:text-black md:inline-flex"
        >
          View all
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {collections.map((collection, index) => (
          <div
            key={collection.id}
            className="group relative overflow-hidden rounded-[28px] border border-black/10 p-6 shadow-soft animate-fade-up"
            style={{
              backgroundImage: collection.gradient,
              animationDelay: `${index * 0.12}s`
            }}
          >
            <div className="absolute -top-10 right-6 h-24 w-24 rounded-full border border-black/10 bg-white/60" />
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">
              Collection
            </p>
            <h3 className="mt-3 text-2xl font-display text-black">
              {collection.title}
            </h3>
            <p className="mt-2 text-sm text-black/65">
              {collection.description}
            </p>
            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-black/70 transition group-hover:text-black"
            >
              Shop now
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
