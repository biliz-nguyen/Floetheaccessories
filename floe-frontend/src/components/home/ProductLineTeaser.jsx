import { Link } from "react-router-dom"
import { productLines } from "../../data/productLines.js"
import { ctaLabels } from "../../data/siteContent.js"

export default function ProductLineTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
          First collection lines
        </p>
        <h2 className="mt-4 text-5xl font-display text-ink md:text-6xl">
          Ba dòng phụ kiện đầu tiên của Floé.
        </h2>
        <p className="mt-5 text-lg leading-8 text-inkMuted">
          Các artwork release mở ra những hướng thiết kế đầu tiên. Đây là teaser dòng sản phẩm, không phải SKU đang bán sẵn.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {productLines.map((line) => (
          <article
            key={line.id}
            className="group overflow-hidden rounded-[24px] border border-ink/10 bg-paper shadow-print transition hover:-translate-y-1"
          >
            <div className="aspect-[4/5] overflow-hidden bg-petal">
              <img
                src={line.image}
                alt={line.imageAlt}
                className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-3xl font-display text-ink">{line.label}</h3>
                <span className="rounded-full border border-ink/10 bg-petal px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-inkMuted">
                  {line.status}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-inkMuted">{line.description}</p>
              <Link
                className="mt-5 inline-flex min-h-11 items-center rounded-full border border-ink/15 px-5 text-sm font-semibold text-ink transition hover:bg-petal"
                to={line.shopTo}
              >
                {ctaLabels.viewSamples}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
