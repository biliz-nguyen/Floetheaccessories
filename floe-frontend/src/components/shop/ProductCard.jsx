export default function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-[26px] border border-black/10 bg-white/80 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
      <div className="relative h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: product.gradient }}
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 transition group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-black/70">
          {product.tag}
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.3em] text-black/50">
          {product.category}
        </p>
        <h3 className="mt-2 text-xl font-display text-black">
          {product.name}
        </h3>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-black">
            ${product.price}
          </span>
          <button
            type="button"
            className="rounded-full border border-black/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-black/70 transition hover:border-black/30"
          >
            Add
          </button>
        </div>
        <div className="mt-4 flex items-center gap-2">
          {product.colors?.map((color, index) => (
            <span
              key={`${product.id}-${index}`}
              className="h-3 w-3 rounded-full border border-black/20"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </article>
  )
}
