import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import CustomerCareFaq from "../components/common/CustomerCareFaq.jsx"
import CategoryTabs from "../components/shop/CategoryTabs.jsx"
import ProductGrid from "../components/shop/ProductGrid.jsx"
import { categories } from "../data/categories.js"
import { packagingCopy, products } from "../data/products.js"
import { contact, ctaLabels, externalLinkProps } from "../data/siteContent.js"
import { formatVnd } from "../utils/formatCurrency.js"

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [orderNote, setOrderNote] = useState("")
  const [copiedState, setCopiedState] = useState("idle")
  const [statusFilter, setStatusFilter] = useState("all") // "all" | "current" | "trial"

  const quickViewTriggerRef = useRef(null)
  const closeButtonRef = useRef(null)
  const dialogRef = useRef(null)
  const copiedTimeoutRef = useRef(null)

  const activeCategory = searchParams.get("category") || "all"

  const visibleProducts = useMemo(() => {
    let list = products
    if (activeCategory !== "all") {
      list = list.filter((product) => product.category === activeCategory)
    }
    if (statusFilter !== "all") {
      list = list.filter((product) => product.catalogStatus === statusFilter)
    }
    return list
  }, [activeCategory, statusFilter])

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
    setIsLightboxOpen(false)
    setQuantity(1)
    setOrderNote("")
    setCopiedState("idle")
    setQuickViewProduct(product)
  }

  const handleCloseQuickView = useCallback(() => {
    setIsLightboxOpen(false)
    setQuickViewProduct(null)
    window.clearTimeout(copiedTimeoutRef.current)
    window.setTimeout(() => quickViewTriggerRef.current?.focus(), 0)
  }, [])

  const quickViewGallery = useMemo(() => {
    if (!quickViewProduct) return []
    if (quickViewProduct.gallery?.length) return quickViewProduct.gallery
    return [quickViewProduct.coverImage || quickViewProduct.image].filter(Boolean)
  }, [quickViewProduct])

  const handlePrevImage = useCallback(() => {
    if (quickViewGallery.length <= 1) return
    setActiveGalleryIndex((prev) => (prev === 0 ? quickViewGallery.length - 1 : prev - 1))
  }, [quickViewGallery.length])

  const handleNextImage = useCallback(() => {
    if (quickViewGallery.length <= 1) return
    setActiveGalleryIndex((prev) => (prev === quickViewGallery.length - 1 ? 0 : prev + 1))
  }, [quickViewGallery.length])

  useEffect(() => {
    if (!quickViewProduct) return undefined

    if (!isLightboxOpen) {
      closeButtonRef.current?.focus()
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (isLightboxOpen) {
          setIsLightboxOpen(false)
        } else {
          handleCloseQuickView()
        }
        return
      }

      if (isLightboxOpen) {
        if (event.key === "ArrowLeft") {
          handlePrevImage()
        } else if (event.key === "ArrowRight") {
          handleNextImage()
        }
        return
      }

      if (event.key !== "Tab") return

      const focusableElements = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
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
  }, [handleCloseQuickView, handleNextImage, handlePrevImage, isLightboxOpen, quickViewProduct])

  const handleCopyOrderInfo = async () => {
    if (!quickViewProduct) return
    const totalPrice = (quickViewProduct.price || 0) * quantity
    const formattedTotal = formatVnd(totalPrice)
    const formattedPrice = formatVnd(quickViewProduct.price || 0)
    const noteText = orderNote.trim() ? orderNote.trim() : "Không có"

    const orderText = `🌸 ĐƠN ĐẶT HÀNG FLOÉ
• Sản phẩm: ${quickViewProduct.name}
• Mã SKU: ${quickViewProduct.code}
• Dòng sản phẩm: ${quickViewProduct.categoryLabel}
• Số lượng: ${quantity}
• Đơn giá: ${formattedPrice}
• Tạm tính: ${formattedTotal}
• Bao bì: Standard (Kèm hộp Floé, card cảm ơn & tem niêm phong)
• Ghi chú thêm: ${noteText}
---
Floé kiểm tra và hỗ trợ tư vấn giúp mình qua Messenger nhé!`

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(orderText)
      } else {
        const textarea = document.createElement("textarea")
        textarea.value = orderText
        textarea.style.position = "fixed"
        textarea.style.opacity = "0"
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand("copy")
        document.body.removeChild(textarea)
      }
      setCopiedState("copied")
    } catch {
      setCopiedState("error")
    }

    window.clearTimeout(copiedTimeoutRef.current)
    copiedTimeoutRef.current = window.setTimeout(() => setCopiedState("idle"), 2500)
  }

  const activeImage = quickViewGallery[activeGalleryIndex] || quickViewGallery[0]

  return (
    <div className="pb-14">
      {/* Catalog Header */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 md:flex-row md:items-end md:justify-between md:px-8 md:py-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
              FLOÉ CATALOG
            </p>
            <h1 className="mt-2 text-4xl font-display text-ink md:text-5xl">
              Sản phẩm
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-inkMuted md:text-base md:leading-7">
              Khám phá các mẫu phụ kiện hoa thủ công của Floé và chọn thiết kế phù hợp với phong cách của bạn.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="w-fit rounded-xl border border-line bg-white px-3.5 py-2 text-sm font-semibold text-ink shadow-sm">
              {countLabel}
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <CategoryTabs activeCategory={activeCategory} onSelectCategory={handleSelectCategory} />

      {/* Catalog Status Filter: All / Current / Trial */}
      <section className="mx-auto max-w-7xl px-5 pt-4 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/60 pb-3">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold text-inkMuted">Bộ sưu tập:</span>
            <button
              type="button"
              onClick={() => setStatusFilter("all")}
              className={`rounded-lg px-2.5 py-1 font-semibold transition ${
                statusFilter === "all"
                  ? "bg-ink text-paper"
                  : "bg-paper text-inkMuted hover:bg-petal hover:text-ink"
              }`}
            >
              Tất cả ({products.length})
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter("current")}
              className={`rounded-lg px-2.5 py-1 font-semibold transition ${
                statusFilter === "current"
                  ? "bg-ink text-paper"
                  : "bg-paper text-inkMuted hover:bg-petal hover:text-ink"
              }`}
            >
              BST Hiện tại ({products.filter((p) => p.catalogStatus === "current").length})
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter("trial")}
              className={`rounded-lg px-2.5 py-1 font-semibold transition ${
                statusFilter === "trial"
                  ? "bg-ink text-paper"
                  : "bg-paper text-inkMuted hover:bg-petal hover:text-ink"
              }`}
            >
              Mẫu thử nghiệm EXE201 ({products.filter((p) => p.catalogStatus === "trial").length})
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="mx-auto max-w-7xl px-5 py-6 md:px-8">
        <ProductGrid products={visibleProducts} onQuickView={handleOpenQuickView} />
      </section>

      {/* Custom Design Callout */}
      <section className="mx-auto max-w-7xl px-5 pb-12 md:px-8 md:pb-16">
        <div className="flex flex-col gap-3 rounded-2xl border border-line bg-paperWarm p-6 sm:flex-row sm:items-center sm:justify-between shadow-print">
          <div>
            <p className="text-base font-semibold text-ink">
              Chưa tìm thấy mẫu phụ kiện đúng vibe của bạn?
            </p>
            <p className="mt-1 text-sm text-inkMuted">
              Floé nhận thiết kế riêng (Custom Design) theo ý tưởng, màu sắc và số đo mong muốn.
            </p>
          </div>
          <Link
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl bg-ink px-6 text-sm font-semibold text-paper transition hover:bg-pinkDeep"
            to="/custom"
          >
            {ctaLabels.designCustomShort} →
          </Link>
        </div>
      </section>

      {/* Customer Care & FAQ */}
      <section className="border-t border-line bg-paper px-5 py-16 md:px-8 md:py-20">
        <CustomerCareFaq />
      </section>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div
          className="fixed inset-0 z-[70] flex items-end bg-ink/40 p-0 md:items-center md:justify-center md:p-6 backdrop-blur-xs"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) handleCloseQuickView()
          }}
        >
          <div
            ref={dialogRef}
            className="grid max-h-[92vh] w-full gap-6 overflow-y-auto rounded-t-3xl bg-white p-5 shadow-2xl md:max-w-4xl md:grid-cols-[minmax(0,1fr)_minmax(20rem,1.15fr)] md:rounded-3xl md:p-7"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-quick-view-title"
          >
            {/* Gallery Column */}
            <div>
              <div className="group relative overflow-hidden rounded-2xl border border-line bg-petal">
                {quickViewProduct.badgeLabel && (
                  <span className="absolute left-3 top-3 z-10 rounded-full border border-pinkDeep/15 bg-white/95 px-3 py-1 text-xs font-semibold text-pinkDeep shadow-sm">
                    {quickViewProduct.badgeLabel}
                  </span>
                )}

                {/* Fullscreen Zoom Button */}
                {activeImage && (
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full border border-line bg-white/90 px-3 py-1 text-xs font-semibold text-ink shadow-sm backdrop-blur-xs transition hover:bg-white hover:text-pinkDeep focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
                    aria-label="Phóng to ảnh toàn màn hình"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                    <span>Phóng to</span>
                  </button>
                )}

                {activeImage ? (
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="block w-full cursor-zoom-in text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
                    aria-label="Nhấn để phóng to ảnh xem chi tiết lookbook"
                  >
                    <img
                      src={activeImage}
                      alt={quickViewProduct.imageAlt || quickViewProduct.name}
                      className="max-h-[46vh] w-full object-contain transition duration-300 group-hover:scale-[1.02] md:max-h-[58vh]"
                    />
                  </button>
                ) : (
                  <div className="flex aspect-square max-h-[46vh] items-end p-4 md:max-h-[58vh]">
                    <p className="rounded-xl bg-white/90 px-3 py-2 text-sm font-semibold text-ink">
                      Ảnh sản phẩm đang được cập nhật
                    </p>
                  </div>
                )}

                {/* Prev / Next controls over active image if multiple images */}
                {quickViewGallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevImage}
                      className="absolute left-2.5 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-lg font-bold text-ink shadow-md transition hover:bg-white hover:text-pinkDeep focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
                      aria-label="Xem ảnh trước"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={handleNextImage}
                      className="absolute right-2.5 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-lg font-bold text-ink shadow-md transition hover:bg-white hover:text-pinkDeep focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
                      aria-label="Xem ảnh kế tiếp"
                    >
                      ›
                    </button>
                    <span className="absolute bottom-2.5 right-2.5 z-10 rounded-full bg-ink/75 px-2.5 py-0.5 text-[11px] font-medium text-white backdrop-blur-xs">
                      {activeGalleryIndex + 1} / {quickViewGallery.length}
                    </span>
                  </>
                )}
              </div>

              {quickViewGallery.length > 1 && (
                <div
                  className="scrollbar-none mt-3 flex gap-2 overflow-x-auto pb-1"
                  aria-label="Gallery ảnh sản phẩm"
                >
                  {quickViewGallery.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                        index === activeGalleryIndex
                          ? "border-pinkDeep ring-2 ring-pinkDeep/30"
                          : "border-line hover:border-pinkDeep/50"
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

              {/* Verified Product Info Accordion / Specs */}
              <div className="mt-5 space-y-3 rounded-2xl border border-line bg-paperWarm p-4 text-xs">
                <div>
                  <p className="font-semibold text-ink">🌸 Chất liệu & Màu sắc:</p>
                  <p className="mt-0.5 text-inkMuted">
                    {quickViewProduct.materials || quickViewProduct.materialNote}
                  </p>
                  {quickViewProduct.colors && (
                    <p className="mt-0.5 text-inkMuted">
                      Tone màu: <span className="font-medium text-ink">{quickViewProduct.colors}</span>
                    </p>
                  )}
                </div>

                {quickViewProduct.dimensions && (
                  <div>
                    <p className="font-semibold text-ink">📏 Kích thước:</p>
                    <p className="mt-0.5 text-inkMuted">{quickViewProduct.dimensions}</p>
                  </div>
                )}

                {quickViewProduct.styleOptions && (
                  <div>
                    <p className="font-semibold text-ink">✨ Tùy chọn kiểu dáng:</p>
                    <p className="mt-0.5 text-inkMuted">{quickViewProduct.styleOptions}</p>
                  </div>
                )}

                <div>
                  <p className="font-semibold text-ink">📦 Bao bì đóng gói:</p>
                  <p className="mt-0.5 text-inkMuted">
                    {packagingCopy.included} {packagingCopy.premiumNote}
                  </p>
                </div>

                {quickViewProduct.careInstructions && (
                  <div>
                    <p className="font-semibold text-ink">🧼 Hướng dẫn bảo quản:</p>
                    <p className="mt-0.5 text-inkMuted">{quickViewProduct.careInstructions}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Details & Ordering Experience Column */}
            <div className="flex min-h-0 flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-pinkDeep">
                        {quickViewProduct.categoryLabel}
                      </span>
                      <span className="rounded-md border border-line bg-paper px-2 py-0.5 text-[11px] font-medium text-inkMuted">
                        Mã: {quickViewProduct.code}
                      </span>
                    </div>
                    <h2 id="product-quick-view-title" className="mt-2 text-3xl font-display text-ink md:text-4xl">
                      {quickViewProduct.name}
                    </h2>
                    <p className="mt-2 text-2xl font-semibold text-pinkDeep">
                      {typeof quickViewProduct.price === "number"
                        ? formatVnd(quickViewProduct.price)
                        : "Liên hệ để xác nhận giá"}
                    </p>
                  </div>
                  <button
                    type="button"
                    ref={closeButtonRef}
                    className="min-h-10 shrink-0 rounded-xl border border-line px-3 text-sm font-semibold text-ink transition hover:bg-petal"
                    onClick={handleCloseQuickView}
                    aria-label="Đóng cửa sổ chi tiết"
                  >
                    ✕ Đóng
                  </button>
                </div>

                {quickViewProduct.materialNote && (
                  <p className="mt-4 text-sm leading-6 text-inkMuted">
                    {quickViewProduct.materialNote}
                  </p>
                )}

                {/* Priority 0.B - Improved Ordering Experience Section */}
                <div className="mt-6 rounded-2xl border border-line bg-paper p-4">
                  <h3 className="text-sm font-semibold text-ink">
                    Đặt hàng qua Facebook Messenger
                  </h3>

                  {/* Quantity selector */}
                  <div className="mt-4 flex items-center justify-between border-b border-line pb-4">
                    <span className="text-xs font-semibold text-ink">Số lượng:</span>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        disabled={quantity <= 1}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-white text-base font-semibold text-ink transition hover:bg-petal disabled:opacity-40"
                        aria-label="Giảm số lượng"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-sm font-semibold text-ink">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.min(20, q + 1))}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-white text-base font-semibold text-ink transition hover:bg-petal"
                        aria-label="Tăng số lượng"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-inkMuted">Tạm tính:</span>
                    <span className="text-base font-semibold text-ink">
                      {typeof quickViewProduct.price === "number"
                        ? formatVnd(quickViewProduct.price * quantity)
                        : "Liên hệ"}
                    </span>
                  </div>

                  {/* Customization notes */}
                  <div className="mt-4">
                    <label
                      htmlFor="quickview-order-note"
                      className="block text-xs font-semibold text-ink"
                    >
                      Ghi chú yêu cầu riêng (tùy chọn):
                    </label>
                    <textarea
                      id="quickview-order-note"
                      rows="2"
                      value={orderNote}
                      onChange={(e) => setOrderNote(e.target.value)}
                      placeholder="Ví dụ: nới thêm xích nối, màu charm mong muốn, thiệp viết tay..."
                      className="mt-1.5 w-full rounded-xl border border-line bg-white p-2.5 text-xs text-ink placeholder:text-inkMuted/60 focus:border-pinkDeep focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-2.5 border-t border-line pt-4">
                {/* 1. Copy Order Information */}
                <button
                  type="button"
                  onClick={handleCopyOrderInfo}
                  className={`inline-flex min-h-11 w-full items-center justify-center rounded-xl border px-5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                    copiedState === "copied"
                      ? "border-pinkDeep bg-petal text-pinkDeep"
                      : "border-line bg-paperWarm text-ink hover:bg-petal"
                  }`}
                  aria-live="polite"
                >
                  {copiedState === "copied"
                    ? "✓ Đã sao chép! Dán trực tiếp vào Messenger"
                    : copiedState === "error"
                    ? "Không sao chép được"
                    : ctaLabels.copyOrderInfo}
                </button>

                {/* 2. Message Floé on Facebook */}
                <a
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-ink px-5 text-sm font-semibold text-paper transition hover:bg-pinkDeep shadow-sm"
                  href={quickViewProduct.socialUrl || contact.facebookUrl}
                  {...externalLinkProps}
                >
                  {ctaLabels.messageOnFacebook}
                </a>

                <p className="text-center text-[11px] leading-relaxed text-inkMuted">
                  💡 Nhấn <strong>Sao chép thông tin đặt hàng</strong> rồi dán vào Messenger để Floé tư vấn và chốt đơn ngay nhé!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full-Screen Image Lightbox Viewer */}
      {isLightboxOpen && quickViewProduct && activeImage && (
        <div
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink/95 p-4 text-white backdrop-blur-md select-none md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Ảnh phóng to của ${quickViewProduct.name}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsLightboxOpen(false)
          }}
        >
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-pinkSoft">
                Floé Lookbook Viewer • {quickViewProduct.code}
              </p>
              <h3 className="text-base font-semibold text-white sm:text-lg">
                {quickViewProduct.name}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white">
                {activeGalleryIndex + 1} / {quickViewGallery.length}
              </span>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                aria-label="Đóng ảnh phóng to (Phím Escape)"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Lightbox Center Image View */}
          <div
            className="relative flex flex-1 items-center justify-center py-4"
            onClick={(event) => {
              if (event.target === event.currentTarget) setIsLightboxOpen(false)
            }}
          >
            {quickViewGallery.length > 1 && (
              <button
                type="button"
                onClick={handlePrevImage}
                className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl text-white shadow-lg backdrop-blur-xs transition hover:bg-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:left-6"
                aria-label="Ảnh trước (Phím mũi tên trái)"
              >
                ‹
              </button>
            )}

            <img
              src={activeImage}
              alt={quickViewProduct.imageAlt || quickViewProduct.name}
              className="max-h-[72vh] max-w-full rounded-2xl object-contain shadow-2xl transition duration-300"
            />

            {quickViewGallery.length > 1 && (
              <button
                type="button"
                onClick={handleNextImage}
                className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl text-white shadow-lg backdrop-blur-xs transition hover:bg-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:right-6"
                aria-label="Ảnh kế tiếp (Phím mũi tên phải)"
              >
                ›
              </button>
            )}
          </div>

          {/* Lightbox Bottom Thumbnail Bar */}
          {quickViewGallery.length > 1 && (
            <div className="flex justify-center border-t border-white/10 pt-3">
              <div className="scrollbar-none flex max-w-2xl gap-2 overflow-x-auto px-2 py-1">
                {quickViewGallery.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveGalleryIndex(index)}
                    className={`h-14 w-14 shrink-0 overflow-hidden rounded-xl border transition ${
                      index === activeGalleryIndex
                        ? "border-pinkSoft ring-2 ring-pinkSoft/60"
                        : "border-white/20 opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`Xem ảnh ${index + 1}`}
                  >
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
