import ReducedMotionVideo from "../media/ReducedMotionVideo.jsx"
import { packagingMedia } from "../../data/packaging.js"
import {
  brand,
  homeContent
} from "../../data/siteContent.js"

export default function PackagingExperience() {
  return (
    <section className="border-y border-ink/10 bg-mint/45">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-20">
        <div className="grid gap-4">
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-print">
            <ReducedMotionVideo
              className="aspect-video h-full w-full object-cover"
              poster={packagingMedia.video.poster}
              posterAlt="Khung hình video mở hộp Floé"
              sources={packagingMedia.video.sources}
              videoLabel={packagingMedia.video.label}
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-print">
            <img
              src={packagingMedia.mainImage.image}
              alt={packagingMedia.mainImage.imageAlt}
              className="aspect-video h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="self-center">
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

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {packagingMedia.supporting.map((item, index) => (
              <figure
                key={item.id}
                className={`overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-print ${
                  index === 0 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="aspect-[4/3] h-full w-full object-cover"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
