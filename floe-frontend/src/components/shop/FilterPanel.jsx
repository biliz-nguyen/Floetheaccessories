import { categories, colorFilters, priceFilters } from "../../data/filters.js"

export default function FilterPanel() {
  return (
    <aside className="space-y-6 rounded-[28px] border border-black/10 bg-white/70 p-6 shadow-soft">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-black/60">
          Category
        </p>
        <div className="mt-4 space-y-3 text-sm text-black/70">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2">
              <input type="checkbox" className="accent-black" />
              {category}
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-black/60">Price</p>
        <div className="mt-4 space-y-3 text-sm text-black/70">
          {priceFilters.map((price) => (
            <label key={price} className="flex items-center gap-2">
              <input type="checkbox" className="accent-black" />
              {price}
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-black/60">Tone</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {colorFilters.map((color) => (
            <button
              key={color.label}
              type="button"
              className="flex items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-xs uppercase tracking-[0.2em] text-black/60 transition hover:border-black/30"
            >
              <span
                className="h-3 w-3 rounded-full border border-black/20"
                style={{ backgroundColor: color.value }}
              />
              {color.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
