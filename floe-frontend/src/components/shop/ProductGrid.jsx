import { Link } from "react-router-dom"
import ProductCard from "./ProductCard.jsx"
import { categories } from "../../data/categories.js"
import { productContentStatus } from "../../data/products.js"
import { contact, ctaLabels, externalLinkProps } from "../../data/siteContent.js"

export default function ProductGrid({ products, onQuickView }) {
  if (products.length === 0) {
    return (
      <div className="rounded-3xl border border-line bg-white p-6 md:p-8 shadow-print">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-display text-ink">{productContentStatus.emptyTitle}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-inkMuted">
              {productContentStatus.emptyDescription}
            </p>
          </div>
          <div className="flex flex-col gap-2.5 sm:flex-row">
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-ink px-5 text-sm font-semibold text-paper transition hover:bg-pinkDeep"
              href={contact.facebookUrl}
              {...externalLinkProps}
            >
              {ctaLabels.viewLatestSamples}
            </a>
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-line bg-paper px-5 text-sm font-semibold text-ink transition hover:bg-petal"
              to="/custom"
            >
              Đặt làm theo yêu cầu riêng
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:max-w-2xl">
          {categories.map((category) => (
            <article key={category.id} className="overflow-hidden rounded-2xl border border-line bg-paperWarm p-4">
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-petal">
                <img
                  src={category.image}
                  alt={category.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-3">
                <p className="text-base font-semibold text-ink">
                  {category.label}
                </p>
                <p className="mt-1 text-xs text-inkMuted">
                  {category.supportingIdea}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.designId || product.id}
          product={product}
          onQuickView={onQuickView}
        />
      ))}
    </div>
  )
}
