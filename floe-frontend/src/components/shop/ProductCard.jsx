import { contact, externalLinkProps } from "../../data/siteContent.js"

export default function ProductCard({ product, onQuickView }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-print transition hover:-translate-y-0.5">
      <button
        type="button"
        className="block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        onClick={(event) => onQuickView(product, event.currentTarget)}
        aria-label={`Xem nhanh ${product.name}`}
      >
        <div className="aspect-square overflow-hidden bg-petal">
          {product.image ? (
            <img
              src={product.image}
              alt={product.imageAlt || product.name}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-end p-3">
              <p className="rounded-lg bg-paper/85 px-2 py-1.5 text-xs font-semibold text-ink">
                Ảnh đang cập nhật
              </p>
            </div>
          )}
        </div>

        <div className="p-3">
          <h3 className="text-clamp-2 min-h-10 text-sm font-semibold leading-5 text-ink">
            {product.name}
          </h3>
          <p className="mt-1 text-xs font-semibold text-inkMuted">
            {product.code || product.categoryLabel}
          </p>
          {product.materialNote && (
            <p className="text-clamp-2 mt-1 text-xs leading-5 text-inkMuted">
              {product.materialNote}
            </p>
          )}
        </div>
      </button>

      <div className="px-3 pb-3">
        <a
          href={product.socialUrl || contact.facebookUrl}
          className="inline-flex min-h-10 w-full items-center justify-center rounded-xl bg-ink px-3 text-xs font-semibold text-paper transition hover:bg-ink/90"
          {...externalLinkProps}
        >
          Nhắn hỏi mẫu
        </a>
      </div>
    </article>
  )
}
