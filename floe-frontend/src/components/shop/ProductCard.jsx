import { formatVnd } from "../../utils/formatCurrency.js"

export default function ProductCard({ product, onQuickView }) {
  const coverImage = product.coverImage || product.image
  const priceLabel =
    typeof product.price === "number" ? formatVnd(product.price) : "Liên hệ để xác nhận giá"

  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-white shadow-print transition hover:-translate-y-0.5">
      <button
        type="button"
        className="flex h-full w-full flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        onClick={(event) => onQuickView(product, event.currentTarget)}
        aria-label={`Xem chi tiết ${product.name}, mã ${product.code}`}
      >
        <div className="relative aspect-square overflow-hidden bg-petal">
          {product.badgeLabel && (
            <span className="absolute left-2.5 top-2.5 z-10 rounded-full border border-pinkDeep/15 bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-pinkDeep shadow-sm">
              {product.badgeLabel}
            </span>
          )}

          {product.gallery?.length > 1 && (
            <span className="absolute right-2.5 top-2.5 z-10 flex items-center gap-1 rounded-full border border-line bg-white/90 px-2 py-0.5 text-[10px] font-medium text-ink shadow-sm backdrop-blur-xs">
              <svg className="h-3 w-3 text-pinkDeep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{product.gallery.length} ảnh</span>
            </span>
          )}

          {coverImage ? (
            <img
              src={coverImage}
              alt={product.imageAlt || product.name}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-end p-3">
              <p className="rounded-lg bg-paper/90 px-2 py-1.5 text-xs font-semibold text-ink">
                Ảnh đang cập nhật
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-3.5">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-inkMuted">
            {product.categoryLabel}
          </p>
          <h3 className="text-clamp-2 min-h-10 text-sm font-semibold leading-5 text-ink mt-0.5">
            {product.name}
          </h3>
          <p className="mt-2 text-sm font-semibold text-pinkDeep">
            {priceLabel}
          </p>
          <p className="mt-0.5 text-xs font-medium text-inkMuted">
            Mã: {product.code}
          </p>
          <span className="mt-3 inline-flex min-h-10 w-full items-center justify-center rounded-lg bg-ink px-3 text-xs font-semibold text-paper transition group-hover:bg-pinkDeep">
            Xem chi tiết & Đặt mẫu
          </span>
        </div>
      </button>
    </article>
  )
}
