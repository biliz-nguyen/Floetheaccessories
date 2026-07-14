import { Link } from "react-router-dom"
import { contact, externalLinkProps } from "../data/siteContent.js"

export default function NotFoundPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-inkMuted">
        Không tìm thấy trang
      </p>
      <h1 className="mt-4 text-5xl font-display text-ink md:text-7xl">
        Lối này chưa có trong atelier.
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-inkMuted">
        Trang bạn đang tìm có thể đã đổi địa chỉ. Quay lại Floé hoặc nhắn chúng mình để được hỗ trợ.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-paper" to="/">
          Về trang chủ
        </Link>
        <Link className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 px-6 text-sm font-semibold text-ink" to="/shop">
          Xem sản phẩm
        </Link>
        <a className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 px-6 text-sm font-semibold text-ink" href={contact.facebookUrl} {...externalLinkProps}>
          Nhắn Floé
        </a>
      </div>
    </section>
  )
}
