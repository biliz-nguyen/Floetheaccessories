import { Link } from "react-router-dom"
import ProductCard from "./ProductCard.jsx"
import { categories } from "../../data/categories.js"
import { productContentStatus } from "../../data/products.js"
import { contact, externalLinkProps } from "../../data/siteContent.js"

export default function ProductGrid({ products, onQuickView }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-ink/10 bg-paperWarm p-4 md:p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-display text-ink">{productContentStatus.emptyTitle}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-inkMuted">
              {productContentStatus.emptyDescription}
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              className="inline-flex min-h-10 items-center justify-center rounded-xl bg-ink px-4 text-sm font-semibold text-paper transition hover:bg-ink/90"
              href={contact.facebookUrl}
              {...externalLinkProps}
            >
              Nhắn Floé
            </a>
            <Link
              className="inline-flex min-h-10 items-center justify-center rounded-xl border border-ink/15 px-4 text-sm font-semibold text-ink transition hover:bg-petal"
              to="#shop-category-tabs"
            >
              Xem các dòng sản phẩm
            </Link>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 md:max-w-3xl md:gap-3">
          {categories.map((category) => (
            <article key={category.id} className="overflow-hidden rounded-xl border border-ink/10 bg-paper">
              <div className="aspect-[4/3] bg-petal">
                <img
                  src={category.image}
                  alt={category.imageAlt}
                  className="h-full w-full object-contain p-1.5"
                  loading="lazy"
                />
              </div>
              <div className="p-2 md:p-3">
                <p className="text-clamp-1 text-xs font-semibold text-ink md:text-sm">
                  {category.label}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 2xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
      ))}
    </div>
  )
}
