import { formatVnd } from "../../utils/formatCurrency.js"

export default function ProductCard({ product, onQuickView }) {
  const coverImage = product.coverImage || product.image
  const priceLabel =
    product.isArchived
      ? "Lưu trữ thiết kế"
      : typeof product.price === "number"
      ? formatVnd(product.price)
      : "Liên hệ tư vấn"

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-white shadow-print transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <button
        type="button"
        className="flex h-full w-full flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        onClick={(event) => onQuickView(product, event.currentTarget)}
        aria-label={`Xem chi tiết ${product.productName || product.name}, mã ${product.code}`}
      >
        {/* Product Image Frame */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-petal sm:aspect-square">
          {product.badgeLabel && (
            <span
              className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-xs font-semibold shadow-xs backdrop-blur-xs ${
                product.isArchived
                  ? "border border-ink/20 bg-ink/80 text-white"
                  : "border border-pinkDeep/15 bg-white/95 text-pinkDeep"
              }`}
            >
              {product.badgeLabel}
            </span>
          )}

          {product.gallery?.length > 1 && (
            <span className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full border border-line bg-white/90 px-2.5 py-1 text-[11px] font-medium text-ink shadow-xs backdrop-blur-xs">
              <svg className="h-3 w-3 text-pinkDeep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{product.gallery.length} ảnh</span>
            </span>
          )}

          {coverImage ? (
            <img
              src={coverImage}
              alt={product.imageAlt || product.productName || product.name}
              className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-end p-4">
              <p className="rounded-lg bg-paper/90 px-2 py-1.5 text-xs font-semibold text-ink">
                Ảnh đang cập nhật
              </p>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-inkMuted">
              <span>{product.categoryLabel}</span>
              <span>Mã {product.code}</span>
            </div>

            <h3 className="mt-1 text-xl font-display font-semibold text-ink">
              {product.productName || product.name}
            </h3>

            {product.subtitle && (
              <p className="mt-1 text-xs text-inkMuted line-clamp-1">
                {product.subtitle}
              </p>
            )}

            {/* Color variants preview dots */}
            {product.variants?.length > 1 && (
              <div className="mt-3 flex items-center gap-2">
                <div className="flex -space-x-1">
                  {product.variants.map((v) => (
                    <span
                      key={v.id}
                      title={v.name}
                      className="inline-block h-3.5 w-3.5 rounded-full border border-white shadow-xs"
                      style={{ backgroundColor: v.colorCode }}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-medium text-inkMuted">
                  {product.variants.length} phiên bản màu
                </span>
              </div>
            )}
          </div>

          <div className="mt-5 border-t border-line/60 pt-4">
            <div className="flex items-baseline justify-between">
              <span className="text-lg font-bold text-pinkDeep font-display">
                {priceLabel}
              </span>
              <span className="text-[11px] text-inkMuted">
                {product.isArchived ? "Mẫu thử nghiệm" : "Bao bì Standard"}
              </span>
            </div>

            <span
              className={`mt-3 inline-flex min-h-10 w-full items-center justify-center rounded-xl px-4 text-xs font-semibold transition ${
                product.isArchived
                  ? "border border-line bg-paperWarm text-ink hover:bg-petal"
                  : "bg-ink text-paper group-hover:bg-pinkDeep"
              }`}
            >
              {product.isArchived ? "Xem tư liệu lưu trữ →" : "Xem chi tiết & Chọn màu →"}
            </span>
          </div>
        </div>
      </button>
    </article>
  )
}
