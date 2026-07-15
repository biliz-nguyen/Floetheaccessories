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
  const quickViewTriggerRef = useRef(null)
  const closeButtonRef = useRef(null)
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
        setQuickViewProduct(null)
        window.setTimeout(() => quickViewTriggerRef.current?.focus(), 0)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [quickViewProduct])

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
              Xem các mẫu Floé và nhắn chúng mình để được tư vấn theo thiết kế bạn thích.
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
            {ctaLabels.startCustom} →
          </Link>
        </div>
      </section>

      {quickViewProduct && (
        <div
          className="fixed inset-0 z-[70] flex items-end bg-ink/35 p-0 md:items-center md:justify-center md:p-6"
          role="presentation"
        >
          <div
            className="max-h-[90vh] w-full overflow-y-auto rounded-t-2xl bg-paper p-4 shadow-print md:max-w-md md:rounded-2xl md:p-5"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-quick-view-title"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
                  {quickViewProduct.code || quickViewProduct.categoryLabel}
                </p>
                <h2 id="product-quick-view-title" className="mt-1 text-2xl font-display text-ink">
                  {quickViewProduct.name}
                </h2>
              </div>
              <button
                type="button"
                ref={closeButtonRef}
                className="min-h-10 rounded-xl border border-ink/15 px-3 text-sm font-semibold text-ink transition hover:bg-petal"
                onClick={handleCloseQuickView}
              >
                Đóng
              </button>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-ink/10 bg-petal">
              {quickViewProduct.image ? (
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.imageAlt || quickViewProduct.name}
                  className="max-h-[42vh] w-full object-cover md:max-h-72"
                />
              ) : (
                <div className="flex aspect-[4/5] max-h-[42vh] items-end p-4 md:max-h-72">
                  <p className="rounded-xl bg-paper/85 px-3 py-2 text-sm font-semibold text-ink">
                    Ảnh sản phẩm đang được cập nhật
                  </p>
                </div>
              )}
            </div>

            <p className="mt-4 text-sm leading-6 text-inkMuted">{quickViewProduct.materialNote}</p>
            <a
              className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-ink px-5 text-sm font-semibold text-paper transition hover:bg-ink/90"
              href={quickViewProduct.socialUrl || contact.facebookUrl}
              {...externalLinkProps}
            >
              Nhắn Floé về mẫu này
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
