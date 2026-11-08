import { Link, useLocation } from "react-router-dom"
import { externalLinkProps, mobileDock } from "../../data/siteContent.js"

export default function MobileDock() {
  const location = useLocation()

  return (
    <nav
      aria-label="Điều hướng nhanh mobile"
      className="fixed inset-x-2 bottom-2 z-50 rounded-3xl border border-line bg-paper/95 px-1.5 pb-[calc(0.4rem+env(safe-area-inset-bottom))] pt-1.5 shadow-print backdrop-blur md:hidden"
    >
      <div className="grid grid-cols-5 gap-1">
        {mobileDock.map((item) => {
          const external = item.to.startsWith("http")
          const active = !external && (item.to === "/" ? location.pathname === "/" : location.pathname.startsWith(item.to))
          const className = `flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-2xl text-[10px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
            active ? "bg-pinkDeep text-white shadow-xs" : "text-inkMuted hover:bg-petal hover:text-ink"
          }`
          const content = (
            <>
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full border text-[10px] ${
                  active ? "border-paper/40 font-bold" : "border-ink/15"
                }`}
                aria-hidden="true"
              >
                {item.mark}
              </span>
              <span className="truncate max-w-[4rem] text-center">{item.label}</span>
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
