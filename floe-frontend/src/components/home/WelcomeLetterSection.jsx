import { homeContent } from "../../data/siteContent.js"

export default function WelcomeLetterSection() {
  return (
    <section id="about-floe" className="border-y border-ink/10 bg-paperWarm/70">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[0.92fr_1.08fr] md:px-8 md:py-20">
        <div className="overflow-hidden rounded-[24px] border border-ink/10 bg-paper shadow-print">
          <img
            src="/media/brand/welcome-letter.webp"
            alt="Artwork Welcome to Floé với thông điệp Bloom In Your Own Way"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
            {homeContent.welcomeLetter.label}
          </p>
          <h2 className="mt-4 text-5xl font-display text-ink md:text-6xl">
            {homeContent.welcomeLetter.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-inkMuted">
            {homeContent.welcomeLetter.body}
          </p>
          <p className="mt-5 text-lg font-semibold text-ink">
            {homeContent.welcomeLetter.closing}
          </p>
        </div>
      </div>
    </section>
  )
}
