import { teamMembers } from "../../data/team.js"
import { homeContent } from "../../data/siteContent.js"

export default function FoundingTeam() {
  const orderedMembers = [...teamMembers].sort((a, b) => a.order - b.order)

  return (
    <section id="founding-team" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
          Founding project
        </p>
        <h2 className="mt-4 text-5xl font-display text-ink md:text-6xl">
          {homeContent.foundingTeam.title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-inkMuted">
          {homeContent.foundingTeam.body}
        </p>
      </div>

      <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-5">
        {orderedMembers.map((member, index) => (
          <article
            key={member.id}
            className={`overflow-hidden rounded-2xl border border-line bg-white shadow-print ${
              index === orderedMembers.length - 1
                ? "col-span-2 mx-auto w-full max-w-[15rem] md:col-span-1 md:max-w-none"
                : ""
            }`}
          >
            <div className="aspect-[4/5] overflow-hidden bg-petal">
              <img
                src={member.image}
                alt={member.imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
                {member.role}
              </p>
              <h3 className="mt-2 text-2xl font-display text-ink">{member.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
