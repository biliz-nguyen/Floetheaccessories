import { useEffect, useMemo, useRef, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import FilterPanel from "../components/shop/FilterPanel.jsx"
import ProductGrid from "../components/shop/ProductGrid.jsx"
import SortBar from "../components/shop/SortBar.jsx"
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
    <div className="pb-20">
      <section className="relative overflow-hidden border-b border-ink/10 bg-paperWarm">
        <div className="fleur-grid absolute inset-0 opacity-45" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
            Showroom
          </p>
          <h1 className="mt-3 max-w-4xl text-5xl font-display text-ink md:text-7xl">
            Chọn món phụ kiện nói đúng vibe của bạn.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-inkMuted">
            Xem mẫu và nhắn Floé để được tư vấn theo thiết kế bạn yêu thích.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-5 py-10 md:px-8">
        <FilterPanel activeCategory={activeCategory} onSelectCategory={handleSelectCategory} />
        <SortBar count={visibleProducts.length} />
        <ProductGrid products={visibleProducts} onQuickView={handleOpenQuickView} />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <div className="grid gap-6 rounded-[24px] border border-ink/10 bg-mint/60 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <h2 className="text-3xl font-display text-ink">Không thấy vibe bạn muốn?</h2>
            <p className="mt-2 text-sm leading-6 text-inkMuted">
              Gửi ý tưởng cho Floé để bắt đầu một mẫu phụ kiện riêng.
            </p>
          </div>
          <Link className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-paper" to="/custom">
            {ctaLabels.startCustom}
          </Link>
        </div>
      </section>

      {quickViewProduct && (
        <div className="fixed inset-0 z-[70] flex items-end bg-ink/35 p-0 md:items-center md:justify-center md:p-6" role="presentation">
          <div
            className="w-full rounded-t-[24px] bg-paper p-6 shadow-print md:max-w-xl md:rounded-[24px]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-quick-view-title"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
                  {quickViewProduct.categoryLabel}
                </p>
                <h2 id="product-quick-view-title" className="mt-2 text-3xl font-display text-ink">{quickViewProduct.name}</h2>
              </div>
              <button
                type="button"
                ref={closeButtonRef}
                className="min-h-11 rounded-full border border-ink/15 px-4 text-sm font-semibold text-ink"
                onClick={handleCloseQuickView}
              >
                Đóng
              </button>
            </div>
            <p className="mt-4 text-base leading-7 text-inkMuted">{quickViewProduct.materialNote}</p>
            <p className="mt-4 text-sm font-semibold text-ink">{quickViewProduct.code}</p>
            <a className="mt-6 inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-paper" href={quickViewProduct.socialUrl || contact.facebookUrl} {...externalLinkProps}>
              Nhắn để đặt
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
