import FilterPanel from "../components/shop/FilterPanel.jsx"
import ProductGrid from "../components/shop/ProductGrid.jsx"
import SortBar from "../components/shop/SortBar.jsx"
import { products } from "../data/products.js"

export default function ShopPage() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="fleur-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <p className="text-xs uppercase tracking-[0.35em] text-black/60">
            Shop
          </p>
          <h1 className="mt-3 text-4xl font-display text-black sm:text-5xl">
            Accessories for hair, waist, and neckline.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-black/65">
            Explore seasonal drops, curated sets, and styling staples for
            statement looks.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          <FilterPanel />
          <div className="space-y-8">
            <SortBar count={products.length} />
            <ProductGrid />
          </div>
        </div>
      </section>
    </div>
  )
}
