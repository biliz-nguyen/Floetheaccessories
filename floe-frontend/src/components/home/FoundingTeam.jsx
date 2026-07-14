import { teamMembers } from "../../data/team.js"
import { homeContent } from "../../data/siteContent.js"

export default function FoundingTeam() {
  return (
    <section id="founding-team" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-3">
        <div className="col-span-2 rounded-[24px] border border-ink/10 bg-paperWarm p-6 shadow-print md:p-8 lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
            Founding project
          </p>
          <h2 className="mt-4 text-5xl font-display text-ink">
            {homeContent.foundingTeam.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-inkMuted">
            {homeContent.foundingTeam.body}
          </p>
        </div>

        {teamMembers.map((member) => (
          <article
            key={member.id}
            className={`overflow-hidden rounded-[24px] border border-ink/10 bg-paper shadow-print ${
              member.isPending
                ? "col-span-2 mx-auto w-full max-w-[14rem] border-dashed bg-petal/75 lg:col-span-1 lg:max-w-none"
                : ""
            }`}
          >
            <div className="aspect-[4/5] overflow-hidden bg-petal">
              <img
                src={member.image}
                alt={member.imageAlt}
                className={`h-full w-full object-cover ${member.isPending ? "object-center" : ""}`}
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
                {member.role}
              </p>
              <h3 className="mt-2 text-2xl font-display text-ink">{member.name}</h3>
              <p className="mt-2 text-sm leading-6 text-inkMuted">{member.shortBio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
