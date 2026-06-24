import { products } from "../../data/products.js"
import ProductCard from "../shop/ProductCard.jsx"

export default function BestSellers() {
  const featured = products.slice(0, 6)

  return (
    <section className="mx-auto max-w-6xl px-6" id="story">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-black/60">
            Best sellers
          </p>
          <h2 className="mt-2 text-3xl font-display text-black">
            Styling favorites in soft metallics
          </h2>
        </div>
        <span className="hidden text-xs uppercase tracking-[0.3em] text-black/50 md:inline-flex">
          6 pieces
        </span>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
