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
        <div className="aspect-square overflow-hidden bg-petal">
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

        <div className="flex flex-1 flex-col p-3">
          <h3 className="text-clamp-2 min-h-10 text-sm font-semibold leading-5 text-ink">
            {product.name}
          </h3>
          <p className="mt-2 text-sm font-semibold text-pinkDeep">
            {priceLabel}
          </p>
          <p className="mt-1 text-xs font-semibold text-inkMuted">
            {product.code}
          </p>
          <span className="mt-3 inline-flex min-h-10 w-full items-center justify-center rounded-lg bg-ink px-3 text-xs font-semibold text-paper transition group-hover:bg-pinkDeep">
            Xem chi tiết
          </span>
        </div>
      </button>
    </article>
  )
}
