import ReducedMotionVideo from "../media/ReducedMotionVideo.jsx"
import { packagingMedia } from "../../data/packaging.js"
import {
  brand,
  contact,
  externalLinkProps,
  homeContent
} from "../../data/siteContent.js"

export default function PackagingExperience() {
  return (
    <section className="border-y border-ink/10 bg-mint/45">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.82fr_1.18fr] md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-[420px]">
          <div className="overflow-hidden rounded-[24px] border border-ink/10 bg-paper shadow-print">
            <ReducedMotionVideo
              className="aspect-[3/4] h-full w-full object-cover"
              poster={packagingMedia.video.poster}
              posterAlt="Khung hình video mở hộp Floé"
              sources={packagingMedia.video.sources}
              videoLabel={packagingMedia.video.label}
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
            {homeContent.packaging.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-5xl font-display text-ink md:text-6xl">
            {homeContent.packaging.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-inkMuted">
            {homeContent.packaging.body}
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink">
            {brand.descriptor}
          </p>

          <div className="mt-9 grid gap-5 lg:grid-cols-[1fr_0.42fr]">
            <div className="relative min-h-[330px] overflow-hidden rounded-[24px] border border-ink/10 bg-paperWarm shadow-print">
              {packagingMedia.collage.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.imageAlt}
                  className={`absolute drop-shadow-md ${item.className}`}
                  loading="lazy"
                />
              ))}
            </div>
            <a
              className="group overflow-hidden rounded-[24px] border border-ink/10 bg-paper shadow-print"
              href={contact.facebookUrl}
              {...externalLinkProps}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={packagingMedia.giftTile.image}
                  alt={packagingMedia.giftTile.imageAlt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-ink">{packagingMedia.giftTile.label}</p>
                <p className="mt-1 text-sm leading-6 text-inkMuted">
                  Xem thêm cảm hứng gói quà trên fanpage Floé.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
