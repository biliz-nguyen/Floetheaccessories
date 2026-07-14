import { allCategoryFilter, categories } from "../../data/categories.js"

export default function FilterPanel({ activeCategory, onSelectCategory }) {
  const filters = [allCategoryFilter, ...categories]

  return (
    <div className="flex gap-2 overflow-x-auto pb-2" aria-label="Lọc theo dòng sản phẩm">
      {filters.map((category) => {
        const active = activeCategory === category.id
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelectCategory(category.id)}
            className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
              active
                ? "border-ink bg-ink text-paper"
                : "border-ink/15 bg-paper text-ink hover:bg-petal"
            }`}
            aria-pressed={active}
          >
            {category.label}
          </button>
        )
      })}
    </div>
  )
}
