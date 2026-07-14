import ProductCard from "./ProductCard.jsx"
import { productContentStatus } from "../../data/products.js"
import { contact, externalLinkProps } from "../../data/siteContent.js"

export default function ProductGrid({ products, onQuickView }) {
  if (products.length === 0) {
    return (
      <div className="rounded-[24px] border border-ink/10 bg-paperWarm p-8">
        <h2 className="text-3xl font-display text-ink">{productContentStatus.emptyTitle}</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-inkMuted">
          {productContentStatus.emptyDescription}
        </p>
        <a className="mt-6 inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-paper" href={contact.facebookUrl} {...externalLinkProps}>
          Nhắn Floé để xem mẫu mới nhất
        </a>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
      ))}
    </div>
  )
}
