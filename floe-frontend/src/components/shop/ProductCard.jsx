import { contact, externalLinkProps } from "../../data/siteContent.js"

export default function ProductCard({ product, onQuickView }) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-ink/10 bg-paper shadow-print transition hover:-translate-y-1">
      <div className="asset-placeholder aspect-[4/5] w-full overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.imageAlt || product.name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-end p-4">
            <p className="rounded-xl bg-paper/85 px-3 py-2 text-sm font-semibold text-ink">
              Ảnh sản phẩm đang được cập nhật
            </p>
          </div>
        )}
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
          {product.categoryLabel}
        </p>
        <h3 className="mt-2 text-2xl font-display text-ink">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-6 text-inkMuted">{product.materialNote}</p>
        <p className="mt-3 text-sm font-semibold text-ink">{product.code}</p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-ink/15 px-5 text-sm font-semibold text-ink transition hover:bg-petal"
            onClick={(event) => onQuickView(product, event.currentTarget)}
          >
            Xem chi tiết
          </button>
          <a
            href={product.socialUrl || contact.facebookUrl}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-paper"
            {...externalLinkProps}
          >
            Nhắn để đặt
          </a>
        </div>
      </div>
    </article>
  )
}
