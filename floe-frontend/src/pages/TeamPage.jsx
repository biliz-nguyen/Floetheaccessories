const ceo = {
  id: 1,
  name: "Nguyen Le Minh",
  role: "CEO",
  bio: "Strategic direction and company development. General management and operations. Make important decisions.",
  color: "from-rose-100 to-amber-50",
  initial: "LM"
}

const others = [
  {
    id: 2,
    name: "Nguyen Minh Thu",
    role: "COO",
    bio: "Manage and optimize operational processes. Track work progress. Ensure efficient operations.",
    color: "from-sage/30 to-blush/20",
    initial: "MT"
  },
  {
    id: 3,
    name: "Ta Thi Hong Phuc",
    role: "CPO",
    bio: "Product research and development. Propose product ideas. Manage product quality.",
    color: "from-amber-50 to-orange-50",
    initial: "HP"
  },
  {
    id: 4,
    name: "Nguyen Huynh Thuy Vy",
    role: "CMO",
    bio: "Develop marketing strategies. Brand management. Implement communication campaigns.",
    color: "from-blue-50 to-indigo-50",
    initial: "TV"
  },
  {
    id: 5,
    name: "Dang Nguyen Nhat Quang",
    role: "CCO",
    bio: "Manage customer care. Communicate and support customers. Use language to process information and communicate.",
    color: "from-purple-50 to-pink-50",
    initial: "NQ"
  }
]

export default function TeamPage() {
  return (
    <section className="relative overflow-hidden pt-10">
      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-blush/30 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-20 left-0 h-80 w-80 rounded-full bg-sage/20 blur-3xl animate-float delay-2" />

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Header */}
        <div className="mb-16 text-center animate-fade-up">
          <p className="text-xs uppercase tracking-[0.4em] text-black/50">Đội ngũ sáng lập</p>
          <h1 className="mt-4 text-5xl font-display text-black lg:text-6xl">
            Những người đứng sau FLOÉ
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-black/60">
            Năm thành viên — năm chuyên môn khác nhau — cùng chung một định hướng phát triển công ty và tạo ra những giá trị đích thực.
          </p>
          <div className="mx-auto mt-6 h-[1px] w-16 bg-black/20" />
        </div>

        {/* CEO */}
        <div className="mb-12 flex justify-center animate-fade-up delay-1">
          <div className="group w-full max-w-md rounded-3xl border border-black/8 bg-white/60 p-8 shadow-soft backdrop-blur-sm transition hover:shadow-md hover:-translate-y-1 duration-300">
            {/* Avatar */}
            <div className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${ceo.color} text-3xl font-display text-black/70 border border-black/10`}>
              {ceo.initial}
            </div>

            {/* Info */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-display text-black">{ceo.name}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-black/50 font-semibold">{ceo.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-black/60">{ceo.bio}</p>
            </div>
          </div>
        </div>

        {/* Others Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 animate-fade-up delay-2">
          {others.map((m) => (
            <div
              key={m.id}
              className="group rounded-3xl border border-black/8 bg-white/60 p-6 shadow-soft backdrop-blur-sm transition hover:shadow-md hover:-translate-y-1 duration-300"
            >
              {/* Avatar */}
              <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${m.color} text-2xl font-display text-black/70 border border-black/10`}>
                {m.initial}
              </div>

              {/* Info */}
              <div className="mt-5 text-center">
                <h3 className="text-xl font-display text-black">{m.name}</h3>
                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-black/50 font-semibold">{m.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-black/60">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
