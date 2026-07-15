import { Link } from "react-router-dom"
import CustomDesignSection from "../components/home/CustomDesignSection.jsx"
import FoundingTeam from "../components/home/FoundingTeam.jsx"
import PackagingExperience from "../components/home/PackagingExperience.jsx"
import ProductLineTeaser from "../components/home/ProductLineTeaser.jsx"
import WelcomeLetterSection from "../components/home/WelcomeLetterSection.jsx"
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

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[1.03fr_0.97fr] md:px-8 md:py-20">
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

        <div className="relative grid grid-cols-[0.9fr_1.1fr] gap-3">
          <div className="overflow-hidden rounded-[24px] border border-ink/10 bg-paper shadow-print">
            <img
              src="/media/products/waist/waist-01-detail-03.webp"
              alt="Mẫu vòng eo Floé được phối cùng trang phục hồng"
              className="h-full min-h-[25rem] w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="grid gap-3">
            <div className="overflow-hidden rounded-[24px] border border-ink/10 bg-petal shadow-print">
              <img
                src="/media/products/necklace/necklace-01-cover.webp"
                alt="Mẫu dây chuyền Floé với hoa xanh"
                className="aspect-square h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="overflow-hidden rounded-[24px] border border-ink/10 bg-paperWarm shadow-print">
              <img
                src="/media/packaging/packaging-main.webp"
                alt="Hộp Floé mở với lớp gói và card bên trong"
                className="aspect-square h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="paper-edge absolute -bottom-6 left-5 max-w-xs rounded-2xl border border-ink/10 bg-paper p-5 shadow-print md:-left-8">
            <p className="text-sm font-semibold text-ink">Your vibe. Your style.</p>
            <p className="mt-1 text-sm leading-6 text-inkMuted">
              Floé nhận thiết kế phụ kiện dựa trên vibe, màu sắc và câu chuyện của bạn.
            </p>
          </div>
        </div>
      </section>

      <ProductLineTeaser />
      <WelcomeLetterSection />
      <CustomDesignSection />
      <PackagingExperience />
      <FoundingTeam />

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
            {homeContent.socialShowroom.tiles.map((tile) => (
              <a key={tile.label} href={contact.facebookUrl} className="group relative overflow-hidden rounded-[24px] border border-ink/10 bg-paper shadow-print" {...externalLinkProps}>
                <img
                  src={tile.image}
                  alt={tile.imageAlt}
                  className="aspect-[3/4] h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <span className="absolute bottom-4 left-4 rounded-xl bg-paper/88 px-3 py-2 text-sm font-semibold text-ink shadow-print">
                  {tile.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
