import { allCategoryFilter, categories } from "../../data/categories.js"

export default function CategoryTabs({ activeCategory, onSelectCategory }) {
  const tabs = [allCategoryFilter, ...categories]

  return (
    <nav
      id="shop-category-tabs"
      className="sticky top-[73px] z-40 border-b border-ink/10 bg-paper/95 backdrop-blur-md"
      aria-label="Dòng sản phẩm"
    >
      <div className="scrollbar-none mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-2 md:px-8">
        {tabs.map((category) => {
          const active = activeCategory === category.id

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelectCategory(category.id)}
              className={`min-h-10 shrink-0 rounded-xl border px-4 text-sm font-semibold transition active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                active
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/10 bg-paper text-ink hover:bg-petal"
              }`}
              aria-pressed={active}
            >
              {category.label}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
