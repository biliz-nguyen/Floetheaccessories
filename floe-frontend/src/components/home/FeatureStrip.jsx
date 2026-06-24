const features = [
  {
    title: "Studio craftsmanship",
    description: "Each piece is finished in small batches for a couture feel."
  },
  {
    title: "Wear-all-day comfort",
    description: "Lightweight construction with soft-touch finishes."
  },
  {
    title: "Fast styling sets",
    description: "Curated bundles ready for event looks and gifting."
  }
]

export default function FeatureStrip() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft animate-fade-up"
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <div className="mb-4 h-10 w-10 rounded-full border border-black/10 bg-black/5" />
            <h3 className="text-xl font-display text-black">{feature.title}</h3>
            <p className="mt-3 text-sm text-black/65">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
