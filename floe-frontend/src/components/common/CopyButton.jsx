import { useEffect, useRef, useState } from "react"

export default function CopyButton({ text, children }) {
  const [status, setStatus] = useState("idle")
  const timeoutRef = useRef(null)

  useEffect(() => {
    return () => {
      window.clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleCopy = async () => {
    if (!navigator.clipboard?.writeText) {
      setStatus("error")
      return
    }

    try {
      await navigator.clipboard.writeText(text)
      setStatus("copied")
    } catch {
      setStatus("error")
    }

    window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => setStatus("idle"), 1800)
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      aria-live="polite"
    >
      {status === "copied" ? "Đã sao chép" : status === "error" ? "Không sao chép được" : children}
    </button>
  )
}
