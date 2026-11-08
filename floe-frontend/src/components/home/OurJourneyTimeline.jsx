import { journeyMilestones } from "../../data/journeyData.js"

export default function OurJourneyTimeline() {
  return (
    <section id="our-journey" className="border-t border-line bg-paperWarm py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pinkDeep">
            Our Journey
          </p>
          <h2 className="mt-3 text-5xl font-display text-ink md:text-6xl">
            Behind the Bloom
          </h2>
          <p className="mt-4 text-base leading-7 text-inkMuted md:text-lg">
            Hành trình từ niềm say mê với những cánh hoa cho đến từng món phụ kiện thủ công chỉn chu trên tay bạn.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {journeyMilestones.map((item) => (
            <div
              key={item.step}
              className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-5 shadow-print transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-petal">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink text-xs font-semibold text-paper">
                  {item.step}
                </span>
              </div>

              <div className="mt-5 flex flex-1 flex-col">
                <p className="text-xs font-semibold uppercase tracking-wider text-pinkDeep">
                  {item.phase}
                </p>
                <h3 className="mt-2 text-2xl font-display text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-inkMuted">
                  {item.description}
                </p>
                <div className="mt-4 rounded-xl border border-line bg-paperWarm p-3">
                  <p className="text-xs font-medium text-ink">
                    🌸 {item.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
