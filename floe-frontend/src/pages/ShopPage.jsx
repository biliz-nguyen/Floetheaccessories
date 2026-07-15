import { useEffect, useMemo, useRef, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import CategoryTabs from "../components/shop/CategoryTabs.jsx"
import ProductGrid from "../components/shop/ProductGrid.jsx"
import { categories } from "../data/categories.js"
import { products } from "../data/products.js"
import { contact, ctaLabels, externalLinkProps } from "../data/siteContent.js"

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  const quickViewTriggerRef = useRef(null)
  const closeButtonRef = useRef(null)
  const dialogRef = useRef(null)
  const activeCategory = searchParams.get("category") || "all"

  const visibleProducts = useMemo(() => {
    if (activeCategory === "all") return products
    return products.filter((product) => product.category === activeCategory)
  }, [activeCategory])
  const countLabel =
    products.length > 0 ? `${visibleProducts.length} mẫu` : `${categories.length} dòng sản phẩm`

  const handleSelectCategory = (categoryId) => {
    if (categoryId === "all") {
      setSearchParams({})
      return
    }
    setSearchParams({ category: categoryId })
  }

  const handleOpenQuickView = (product, trigger) => {
    quickViewTriggerRef.current = trigger
    setActiveGalleryIndex(0)
    setQuickViewProduct(product)
  }

  const handleCloseQuickView = () => {
    setQuickViewProduct(null)
    window.setTimeout(() => quickViewTriggerRef.current?.focus(), 0)
  }

  useEffect(() => {
    if (!quickViewProduct) return undefined

    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseQuickView()
        return
      }

      if (event.key !== "Tab") return

      const focusableElements = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      if (!focusableElements?.length) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [quickViewProduct])

  const quickViewGallery = quickViewProduct
    ? quickViewProduct.gallery?.length
      ? quickViewProduct.gallery
      : [quickViewProduct.coverImage || quickViewProduct.image].filter(Boolean)
    : []
  const activeImage = quickViewGallery[activeGalleryIndex] || quickViewGallery[0]

  return (
    <div className="pb-14">
      <section className="border-b border-ink/10 bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 md:flex-row md:items-end md:justify-between md:px-8 md:py-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
              FLOÉ SHOWROOM
            </p>
            <h1 className="mt-2 text-4xl font-display text-ink md:text-5xl">
              Sản phẩm
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-inkMuted md:text-base md:leading-7">
              Xem các mẫu Floé đã chọn lọc và mở chi tiết mẫu bạn thích.
            </p>
          </div>
          <p className="w-fit rounded-xl border border-ink/10 bg-petal px-3 py-2 text-sm font-semibold text-ink">
            {countLabel}
          </p>
        </div>
      </section>

      <CategoryTabs activeCategory={activeCategory} onSelectCategory={handleSelectCategory} />

      <section className="mx-auto max-w-7xl px-5 py-5 md:px-8 md:py-6">
        <ProductGrid products={visibleProducts} onQuickView={handleOpenQuickView} />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 md:px-8 md:pb-16">
        <div className="flex flex-col gap-3 border-t border-ink/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-inkMuted">
            <span className="font-semibold text-ink">Không thấy mẫu đúng vibe?</span>{" "}
            Thiết kế riêng cùng Floé.
          </p>
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-ink px-5 text-sm font-semibold text-paper transition hover:bg-ink/90"
            to="/custom"
          >
            {ctaLabels.designCustomShort} →
          </Link>
        </div>
      </section>

      {quickViewProduct && (
        <div
          className="fixed inset-0 z-[70] flex items-end bg-ink/35 p-0 md:items-center md:justify-center md:p-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) handleCloseQuickView()
          }}
        >
          <div
            ref={dialogRef}
            className="grid max-h-[90vh] w-full gap-4 overflow-y-auto rounded-t-2xl bg-paper p-4 shadow-print md:max-w-4xl md:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] md:rounded-2xl md:p-5"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-quick-view-title"
          >
            <div>
              <div className="overflow-hidden rounded-2xl border border-ink/10 bg-petal">
                {activeImage ? (
                  <img
                    src={activeImage}
                    alt={quickViewProduct.imageAlt || quickViewProduct.name}
                    className="max-h-[48vh] w-full object-contain md:max-h-[62vh]"
                  />
                ) : (
                  <div className="flex aspect-square max-h-[48vh] items-end p-4 md:max-h-[62vh]">
                    <p className="rounded-xl bg-paper/85 px-3 py-2 text-sm font-semibold text-ink">
                      Ảnh sản phẩm đang được cập nhật
                    </p>
                  </div>
                )}
              </div>

              {quickViewGallery.length > 1 && (
                <div
                  className="scrollbar-none mt-3 flex gap-2 overflow-x-auto pb-1"
                  aria-label="Gallery sản phẩm"
                >
                  {quickViewGallery.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                        index === activeGalleryIndex
                          ? "border-ink"
                          : "border-ink/10 hover:border-ink/40"
                      }`}
                      onClick={() => setActiveGalleryIndex(index)}
                      aria-label={`Xem ảnh ${index + 1} của ${quickViewProduct.name}`}
                      aria-pressed={index === activeGalleryIndex}
                    >
                      <img
                        src={image}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex min-h-0 flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
                    {quickViewProduct.categoryLabel}
                  </p>
                  <h2 id="product-quick-view-title" className="mt-2 text-3xl font-display text-ink">
                    {quickViewProduct.name}
                  </h2>
                </div>
                <button
                  type="button"
                  ref={closeButtonRef}
                  className="min-h-10 shrink-0 rounded-xl border border-ink/15 px-3 text-sm font-semibold text-ink transition hover:bg-petal"
                  onClick={handleCloseQuickView}
                >
                  Đóng
                </button>
              </div>

              <dl className="mt-5 grid gap-3 rounded-2xl border border-ink/10 bg-paperWarm p-4 text-sm">
                <div>
                  <dt className="font-semibold text-ink">Mã mẫu</dt>
                  <dd className="mt-1 text-inkMuted">{quickViewProduct.code}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Dòng sản phẩm</dt>
                  <dd className="mt-1 text-inkMuted">{quickViewProduct.categoryLabel}</dd>
                </div>
              </dl>

              {quickViewProduct.materialNote && (
                <p className="mt-4 text-sm leading-6 text-inkMuted">
                  {quickViewProduct.materialNote}
                </p>
              )}

              <div className="mt-5 border-t border-ink/10 pt-4 md:mt-auto">
                <p className="text-sm font-semibold text-ink">{ctaLabels.orderSample}</p>
                <a
                  className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-ink px-5 text-sm font-semibold text-paper transition hover:bg-ink/90"
                  href={quickViewProduct.socialUrl || contact.facebookUrl}
                  {...externalLinkProps}
                >
                  {ctaLabels.orderViaFacebook}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
