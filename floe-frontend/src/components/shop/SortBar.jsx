export default function SortBar({ count }) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 border-b border-black/10 pb-6 md:flex-row md:items-center">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-black/60">
          Showing
        </p>
        <p className="mt-2 text-2xl font-display text-black">{count} styles</p>
      </div>
      <div className="flex items-center gap-3 text-sm text-black/70">
        <span className="text-xs uppercase tracking-[0.3em] text-black/60">
          Sort
        </span>
        <select className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm focus:border-black/30 focus:outline-none">
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Best sellers</option>
        </select>
      </div>
    </div>
  )
}
