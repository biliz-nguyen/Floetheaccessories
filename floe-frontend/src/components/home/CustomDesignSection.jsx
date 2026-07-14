import { Link } from "react-router-dom"
import { customProcess } from "../../data/customProcess.js"
import {
  contact,
  ctaLabels,
  externalLinkProps,
  homeContent
} from "../../data/siteContent.js"

export default function CustomDesignSection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[1.04fr_0.96fr] md:px-8 md:py-20">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
          {homeContent.customTeaser.eyebrow}
        </p>
        <h2 className="mt-4 text-5xl font-display text-ink md:text-6xl">
          {homeContent.customTeaser.title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-inkMuted">
          {homeContent.customTeaser.body}
        </p>

        <ol className="mt-8 grid gap-3">
          {customProcess.map((step) => (
            <li
              key={step.id}
              className="grid grid-cols-[3.25rem_1fr] gap-4 rounded-2xl border border-ink/10 bg-paper p-4"
            >
              <span className="font-display text-3xl text-inkMuted">{step.number}</span>
              <div>
                <h3 className="text-xl font-display text-ink">{step.action}</h3>
                <p className="mt-1 text-sm leading-6 text-inkMuted">{step.floeReturns}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-ink/90"
            to="/custom"
          >
            {ctaLabels.startCustom}
          </Link>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 px-6 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-petal"
            href={contact.facebookUrl}
            {...externalLinkProps}
          >
            {ctaLabels.messageIdea}
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-[24px] border border-ink/10 bg-petal shadow-print">
        <img
          src="/media/brand/custom-design.webp"
          alt="Artwork Floé giới thiệu dịch vụ thiết kế phụ kiện theo ý tưởng riêng"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  )
}
