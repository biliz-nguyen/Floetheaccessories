import { Link, useLocation } from "react-router-dom"
import { externalLinkProps, mobileDock } from "../../data/siteContent.js"

export default function MobileDock() {
  const location = useLocation()

  return (
    <nav
      aria-label="Điều hướng nhanh mobile"
      className="fixed inset-x-3 bottom-3 z-50 rounded-3xl border border-ink/10 bg-paper/95 px-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 shadow-print backdrop-blur md:hidden"
    >
      <div className="grid grid-cols-4 gap-1">
        {mobileDock.map((item) => {
          const external = item.to.startsWith("http")
          const active = !external && location.pathname === item.to
          const className = `flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl text-[11px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
            active ? "bg-ink text-paper" : "text-inkMuted hover:bg-petal hover:text-ink"
          }`
          const content = (
            <>
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full border text-[11px] ${
                  active ? "border-paper/40" : "border-ink/15"
                }`}
                aria-hidden="true"
              >
                {item.mark}
              </span>
              <span>{item.label}</span>
            </>
          )

          return external ? (
            <a key={item.label} href={item.to} className={className} {...externalLinkProps}>
              {content}
            </a>
          ) : (
            <Link key={item.label} to={item.to} className={className}>
              {content}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
