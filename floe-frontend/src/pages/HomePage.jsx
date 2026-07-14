import { Link } from "react-router-dom"
import { categories } from "../data/categories.js"
import { customProcess } from "../data/customProcess.js"
import { products } from "../data/products.js"
import {
  contact,
  ctaLabels,
  externalLinkProps,
  homeContent
} from "../data/siteContent.js"

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-ink/10 bg-petal">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-3 text-sm text-ink md:flex-row md:items-center md:justify-between md:px-8">
          <span>{homeContent.announcement.text}</span>
          <Link className="font-semibold underline-offset-4 hover:underline" to={homeContent.announcement.to}>
            {homeContent.announcement.linkLabel}
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
            {homeContent.hero.eyebrow}
          </p>
          <h1 className="mt-5 text-6xl font-display leading-[0.95] text-ink md:text-8xl">
            {homeContent.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-inkMuted">
            {homeContent.hero.body}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-ink/90" to="/shop">
              {ctaLabels.explore}
            </Link>
            <Link className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 px-6 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-petal" to="/custom">
              {ctaLabels.custom}
            </Link>
          </div>
          <a
            className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-ink underline-offset-4 hover:underline"
            href={contact.facebookUrl}
            {...externalLinkProps}
          >
            {ctaLabels.messageOnFacebook}
          </a>
        </div>

        <div className="relative">
          <div className="asset-placeholder aspect-[4/5] overflow-hidden rounded-[24px] p-5 shadow-print">
            <div className="flex h-full flex-col justify-between rounded-[18px] bg-paper/80 p-5">
              <img
                src="/FLOÉ.png"
                alt="Logo Floé với chi tiết hoa màu hồng"
                className="mx-auto h-52 w-52 object-contain md:h-72 md:w-72"
                loading="eager"
              />
              <div className="border-t border-ink/10 pt-4">
                <p className="text-sm font-semibold text-ink">Cần ảnh hero sản phẩm thật</p>
                <p className="mt-1 text-sm text-inkMuted">
                  Tạm dùng brand mark để tránh tạo hình sản phẩm giả.
                </p>
              </div>
            </div>
          </div>
          <div className="paper-edge absolute -bottom-6 left-5 max-w-xs rounded-2xl border border-ink/10 bg-paper p-5 shadow-print md:-left-8">
            <p className="text-sm font-semibold text-ink">Custom design</p>
            <p className="mt-1 text-sm leading-6 text-inkMuted">
              Floé nhận thiết kế phụ kiện dựa trên vibe, màu sắc và câu chuyện của bạn.
            </p>
          </div>
        </div>
      </section>

      <section id="about-floe" className="mx-auto max-w-5xl px-5 py-20 md:px-8">
        <div className="paper-edge rounded-[24px] border border-ink/10 bg-paper p-6 shadow-print md:p-10">
          <p className="text-sm font-semibold text-inkMuted">{homeContent.welcomeLetter.label}</p>
          <h2 className="mt-3 text-5xl font-display text-ink md:text-6xl">
            {homeContent.welcomeLetter.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-inkMuted">
            {homeContent.welcomeLetter.body}
          </p>
          <p className="mt-5 text-lg font-semibold text-ink">
            {homeContent.welcomeLetter.closing}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-display text-ink md:text-6xl">
            {homeContent.categoryIntro.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-inkMuted">
            {homeContent.categoryIntro.body}
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <article key={category.id} className="group overflow-hidden rounded-[24px] border border-ink/10 bg-paper shadow-print">
              <div className="asset-placeholder aspect-[4/3] p-5">
                <div className="flex h-full items-end rounded-[18px] bg-paper/70 p-4">
                  <p className="text-sm font-semibold text-inkMuted">{category.imageTodo}</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-3xl font-display text-ink">{category.label}</h3>
                <p className="mt-2 text-sm leading-6 text-inkMuted">{category.supportingIdea}</p>
                <Link className="mt-5 inline-flex min-h-11 items-center rounded-full border border-ink/15 px-5 text-sm font-semibold text-ink transition hover:bg-petal" to={`/shop?category=${category.id}`}>
                  {ctaLabels.viewSamples}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-8 rounded-[24px] border border-ink/10 bg-paperWarm p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <h2 className="text-5xl font-display text-ink md:text-6xl">
              {homeContent.featuredShowroom.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-inkMuted">
              {products.length === 0 ? homeContent.featuredShowroom.empty : "Các mẫu đang được Floé chọn lọc để bạn dễ nhắn hỏi theo mã."}
            </p>
            <a className="mt-6 inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-paper" href={contact.facebookUrl} {...externalLinkProps}>
              {ctaLabels.message}
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {categories.map((category) => (
              <div key={category.id} className="rounded-2xl border border-ink/10 bg-paper p-4">
                <p className="text-sm font-semibold text-ink">{category.label}</p>
                <p className="mt-2 text-sm leading-6 text-inkMuted">{category.supportingIdea}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
            {homeContent.customTeaser.eyebrow}
          </p>
          <h2 className="mt-4 text-5xl font-display text-ink md:text-6xl">
            {homeContent.customTeaser.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-inkMuted">
            {homeContent.customTeaser.opening}
          </p>
          <p className="mt-4 text-base leading-7 text-inkMuted">
            {homeContent.customTeaser.body}
          </p>
          <Link className="mt-7 inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-paper" to="/custom">
            {ctaLabels.startCustom}
          </Link>
        </div>
        <ol className="grid gap-3">
          {customProcess.map((step) => (
            <li key={step.id} className="grid grid-cols-[3.5rem_1fr] gap-4 rounded-2xl border border-ink/10 bg-paper p-4">
              <span className="font-display text-3xl text-inkMuted">{step.number}</span>
              <div>
                <h3 className="text-xl font-display text-ink">{step.action}</h3>
                <p className="mt-1 text-sm leading-6 text-inkMuted">{step.floeReturns}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-ink/10 bg-mint/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-[1fr_1.2fr] md:px-8">
          <div>
            <h2 className="text-5xl font-display text-ink">{homeContent.handmadeNote.title}</h2>
            <p className="mt-4 text-base leading-7 text-inkMuted">{homeContent.handmadeNote.body}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {homeContent.handmadeNote.claims.map((claim) => (
              <p key={claim} className="rounded-2xl border border-ink/10 bg-paper/80 p-5 text-sm font-semibold leading-6 text-ink">
                {claim}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-5xl font-display text-ink">{homeContent.socialShowroom.title}</h2>
            <p className="mt-4 text-base leading-7 text-inkMuted">{homeContent.socialShowroom.body}</p>
            <a className="mt-6 inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-paper" href={contact.facebookUrl} {...externalLinkProps}>
              {ctaLabels.follow}
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Styling", "Chất liệu", "Quy trình"].map((label) => (
              <a key={label} href={contact.facebookUrl} className="asset-placeholder flex aspect-[3/4] items-end rounded-[24px] p-4" {...externalLinkProps}>
                <span className="rounded-xl bg-paper/85 px-3 py-2 text-sm font-semibold text-ink">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-24 text-center md:px-8">
        <h2 className="text-4xl font-display text-ink">{homeContent.atelierNote.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-inkMuted">
          {homeContent.atelierNote.body}
        </p>
      </section>
    </div>
  )
}
