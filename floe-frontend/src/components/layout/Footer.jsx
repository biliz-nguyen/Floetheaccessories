import { Link } from "react-router-dom"
import {
  brand,
  contact,
  externalLinkProps,
  footerContent
} from "../../data/siteContent.js"

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paperWarm">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.35fr_0.9fr_0.9fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/media/brand/floe-logo.png"
              alt="Floé"
              className="h-12 w-12 object-contain"
            />
            <p className="text-sm font-semibold text-ink">{brand.descriptor}</p>
          </div>
          <h2 className="mt-5 max-w-lg text-3xl font-display text-ink">
            {footerContent.invitation}
          </h2>
          <p className="mt-4 text-sm text-inkMuted">{footerContent.brandLine}</p>
          <p className="mt-3 text-sm text-inkMuted">{brand.hashtags}</p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
            Liên hệ & Đặt hàng
          </p>
          <a
            className="block min-h-9 text-ink transition hover:text-inkMuted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            href={`mailto:${contact.email}`}
          >
            Email: {contact.email}
          </a>
          <a
            className="block min-h-9 text-ink transition hover:text-inkMuted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            href={contact.phoneHref}
          >
            Hotline: {contact.phoneDisplay}
          </a>
          <a
            className="block min-h-9 text-ink transition hover:text-inkMuted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            href={contact.facebookUrl}
            {...externalLinkProps}
          >
            Facebook Fanpage / Messenger
          </a>
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
            Khám phá Floé
          </p>
          <Link
            to="/shop"
            className="block min-h-9 text-ink transition hover:text-inkMuted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Sản phẩm & Catalog
          </Link>
          <Link
            to="/custom"
            className="block min-h-9 text-ink transition hover:text-inkMuted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Thiết kế riêng (Custom)
          </Link>
          <Link
            to="/posts"
            className="block min-h-9 text-ink transition hover:text-inkMuted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Nhật ký & Bài viết
          </Link>
          <Link
            to="/#our-journey"
            className="block min-h-9 text-ink transition hover:text-inkMuted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Hành trình sáng tạo
          </Link>
          <Link
            to="/#faq"
            className="block min-h-9 text-ink transition hover:text-inkMuted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Chăm sóc khách hàng & FAQ
          </Link>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-6 text-sm text-inkMuted md:flex-row md:px-8">
          <span>2026 {brand.name} • Handmade Floral Accessories</span>
          <span>{brand.primaryLine} • {brand.supportingLine}</span>
        </div>
      </div>
    </footer>
  )
}
