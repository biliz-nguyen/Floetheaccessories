import { useEffect, useState } from "react"

export default function ReducedMotionVideo({
  className = "",
  poster,
  posterAlt,
  sources,
  videoLabel
}) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener("change", updatePreference)

    return () => mediaQuery.removeEventListener("change", updatePreference)
  }, [])

  if (prefersReducedMotion) {
    return (
      <img
        src={poster}
        alt={posterAlt}
        className={className}
        loading="lazy"
      />
    )
  }

  return (
    <video
      aria-label={videoLabel}
      autoPlay
      className={className}
      controls
      loop
      muted
      playsInline
      poster={poster}
      preload="metadata"
    >
      {sources.map((source) => (
        <source key={source.src} src={source.src} type={source.type} />
      ))}
    </video>
  )
}
