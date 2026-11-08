import { contact, externalLinkProps } from "../../data/siteContent.js"

export default function CustomerFeedbackInvitation() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
      <div className="relative overflow-hidden rounded-[32px] border border-line bg-gradient-to-br from-petal via-paper to-blush/30 p-8 shadow-print md:p-14">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-pinkDeep/20 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-pinkDeep backdrop-blur-sm">
            Community & Moments
          </span>
          <h2 className="mt-5 text-4xl font-display text-ink md:text-5xl lg:text-6xl">
            Chia sẻ khoảnh khắc cùng đóa hoa Floé
          </h2>
          <p className="mt-5 text-base leading-8 text-inkMuted md:text-lg">
            Mỗi món phụ kiện Floé khi theo chân bạn đều mở ra một câu chuyện phong cách rất riêng.
            Nếu bạn vừa đón nhận món đồ ưng ý hoặc có bức ảnh styling thật xinh, đừng ngần ngại gửi về cho Floé nhé!
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={contact.facebookUrl}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-pinkDeep shadow-sm"
              {...externalLinkProps}
            >
              Gửi feedback qua Facebook
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white/80 px-7 text-sm font-semibold text-ink transition hover:bg-petal"
            >
              Gửi qua Email
            </a>
          </div>

          <p className="mt-6 text-xs text-inkMuted/80">
            🌸 Những lời góp ý và hình ảnh thực tế từ bạn là động lực to lớn nhất để đội ngũ hoàn thiện từng chi tiết thủ công.
          </p>
        </div>
      </div>
    </section>
  )
}
