import CopyButton from "../components/common/CopyButton.jsx"
import { customProcess, ideaBriefFields, ideaBriefText } from "../data/customProcess.js"
import {
  contact,
  ctaLabels,
  externalLinkProps,
  homeContent
} from "../data/siteContent.js"

export default function CustomPage() {
  return (
    <div>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1fr_0.85fr] md:px-8 md:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-inkMuted">
            Custom design
          </p>
          <h1 className="mt-4 text-5xl font-display text-ink md:text-7xl">
            Your Idea, Our Hands.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-inkMuted">
            Từ điều bạn tưởng tượng đến một món phụ kiện được làm riêng bằng tay.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={contact.facebookUrl}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-paper"
              {...externalLinkProps}
            >
              {ctaLabels.startCustom}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 px-6 text-sm font-semibold text-ink"
            >
              {ctaLabels.email}
            </a>
          </div>
        </div>
        <div className="asset-placeholder rounded-[24px] p-5">
          <div className="flex min-h-80 flex-col justify-end rounded-[18px] bg-paper/80 p-5">
            <p className="text-sm font-semibold text-ink">Cần ảnh quy trình custom thật</p>
            <p className="mt-2 text-sm leading-6 text-inkMuted">
              Dùng ảnh phác thảo, chọn chất liệu hoặc hoàn thiện thủ công khi Floé cung cấp.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
            {homeContent.customTeaser.eyebrow}
          </p>
          <h2 className="mt-4 text-5xl font-display text-ink">
            Từ ý tưởng đến phụ kiện riêng
          </h2>
        </div>
        <ol className="mt-10 grid gap-4">
          {customProcess.map((step) => (
            <li key={step.id} className="grid gap-4 rounded-[24px] border border-ink/10 bg-paper p-5 shadow-print md:grid-cols-[5rem_1fr_1fr] md:p-6">
              <span className="font-display text-4xl text-inkMuted">{step.number}</span>
              <div>
                <h3 className="text-2xl font-display text-ink">{step.action}</h3>
                <p className="mt-2 text-sm font-semibold text-ink">Bạn chuẩn bị</p>
                <p className="mt-1 text-sm leading-6 text-inkMuted">{step.customerPrepares}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">Floé phản hồi</p>
                <p className="mt-1 text-sm leading-6 text-inkMuted">{step.floeReturns}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-[0.85fr_1.15fr] md:px-8">
        <div>
          <h2 className="text-5xl font-display text-ink">Idea brief để gửi Floé</h2>
          <p className="mt-4 text-base leading-7 text-inkMuted">
            Website không dùng form giả. Bạn có thể sao chép checklist này rồi gửi trực tiếp cho Floé qua fanpage hoặc email.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CopyButton text={ideaBriefText}>{ctaLabels.copyBrief}</CopyButton>
            <a className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 px-6 text-sm font-semibold text-ink" href={contact.facebookUrl} {...externalLinkProps}>
              Mở Facebook để gửi ý tưởng
            </a>
          </div>
        </div>
        <div className="rounded-[24px] border border-ink/10 bg-paperWarm p-6 shadow-print">
          <ul className="grid gap-3">
            {ideaBriefFields.map((field) => (
              <li key={field} className="rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-sm font-semibold text-ink">
                {field}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-paper" href={`mailto:${contact.email}`}>
              {ctaLabels.email}
            </a>
            <a className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 px-6 text-sm font-semibold text-ink" href={contact.phoneHref}>
              {ctaLabels.call}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
