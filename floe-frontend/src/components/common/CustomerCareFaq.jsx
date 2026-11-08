import { useState } from "react"
import { faqData } from "../../data/faqData.js"
import { contact, externalLinkProps } from "../../data/siteContent.js"

export default function CustomerCareFaq({ className = "" }) {
  const [openId, setOpenId] = useState(faqData[0]?.id || null)

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" className={`scroll-mt-24 ${className}`}>
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pinkDeep">
            Customer Care & FAQ
          </p>
          <h2 className="mt-3 text-4xl font-display text-ink md:text-5xl">
            Chăm sóc khách hàng & Hỏi đáp
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-inkMuted">
            Tất cả những thông tin bạn cần biết về quy trình đặt hàng, bảo quản sản phẩm thủ công và hỗ trợ sau bán tại Floé.
          </p>
        </div>

        <div className="mt-10 divide-y divide-line rounded-3xl border border-line bg-white shadow-print">
          {faqData.map((item, index) => {
            const isOpen = openId === item.id
            const headingId = `faq-heading-${item.id}`
            const panelId = `faq-panel-${item.id}`

            return (
              <div key={item.id} className="transition-colors hover:bg-paperWarm/50">
                <h3>
                  <button
                    type="button"
                    id={headingId}
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    onClick={() => toggleItem(item.id)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-semibold text-ink transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink md:p-6 md:text-lg"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-medium text-pinkDeep">
                        0{index + 1}
                      </span>
                      <span>{item.question}</span>
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-sm font-semibold transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-petal text-pinkDeep" : "text-inkMuted"
                      }`}
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-5 pb-6 pt-1 md:px-6 md:pb-7"
                  >
                    <div className="whitespace-pre-line text-sm leading-7 text-inkMuted md:text-base">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Subtle assistance card */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-petal p-6 sm:flex-row md:p-8">
          <div>
            <h3 className="text-xl font-display text-ink">
              Bạn cần Floé tư vấn riêng?
            </h3>
            <p className="mt-1 text-sm text-inkMuted">
              Nhắn tin trực tiếp qua fanpage Facebook để được giải đáp mọi thắc mắc về kích thước và mẫu mã.
            </p>
          </div>
          <a
            href={contact.facebookUrl}
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-paper transition hover:bg-pinkDeep"
            {...externalLinkProps}
          >
            Nhắn tin qua Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
