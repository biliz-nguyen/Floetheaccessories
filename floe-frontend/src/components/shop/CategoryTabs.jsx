import { activeProducts, archivedDesigns } from "../../data/products.js"

export default function CategoryTabs({ activeCategory, activeView, onSelectTab }) {
  const keychainCount = activeProducts.filter((p) => p.category === "keychain").length
  const waistCount = activeProducts.filter((p) => p.category === "waist").length
  const archiveCount = archivedDesigns.length

  const tabs = [
    {
      id: "all",
      view: "catalog",
      label: "Tất cả mở bán",
      count: activeProducts.length
    },
    {
      id: "keychain",
      view: "catalog",
      label: "Móc khóa",
      count: keychainCount
    },
    {
      id: "waist",
      view: "catalog",
      label: "Vòng eo",
      count: waistCount
    },
    {
      id: "archive",
      view: "archive",
      label: "Lưu trữ thiết kế EXE201",
      count: archiveCount
    }
  ]

  return (
    <nav
      id="shop-category-tabs"
      className="sticky top-[73px] z-40 border-b border-line bg-paper/95 backdrop-blur-md md:top-[81px]"
      aria-label="Danh mục và lưu trữ thiết kế"
    >
      <div className="scrollbar-none mx-auto flex max-w-7xl gap-2.5 overflow-x-auto px-5 py-2.5 md:px-8">
        {tabs.map((tab) => {
          const isActive =
            tab.view === "archive"
              ? activeView === "archive"
              : activeView !== "archive" && activeCategory === tab.id

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectTab(tab)}
              className={`inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-xl border px-4 text-xs sm:text-sm font-semibold transition active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                isActive
                  ? "border-pinkDeep bg-pinkDeep text-white shadow-sm"
                  : "border-line bg-white text-ink hover:bg-petal"
              }`}
              aria-pressed={isActive}
            >
              <span>{tab.label}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] sm:text-xs font-bold ${
                  isActive ? "bg-white/20 text-white" : "bg-paper text-inkMuted"
                }`}
              >
                {tab.count}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
