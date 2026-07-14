import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import {
  brand,
  contact,
  ctaLabels,
  externalLinkProps,
  navigation
} from "../../data/siteContent.js"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link to="/" className="flex min-h-12 items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
          <img src="/lo.png" alt="" className="h-12 w-12 rounded-xl object-cover" />
          <div className="flex flex-col">
            <span className="text-2xl font-display font-semibold leading-none text-ink">
              {brand.name}
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-inkMuted">
              {brand.supportingLine}
            </span>
          </div>
        </Link>

        <nav aria-label="Điều hướng chính" className="hidden items-center gap-2 text-sm md:flex">
          {navigation.map((item) => {
            const isHashLink = item.to.includes("#")
            const className =
              "rounded-xl px-3 py-2 text-inkMuted transition hover:bg-petal hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"

            return isHashLink ? (
              <Link key={item.label} to={item.to} className={className}>
                {item.label}
              </Link>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `${className} ${isActive ? "bg-petal text-ink shadow-print" : ""}`
                }
              >
                {item.label}
              </NavLink>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={contact.facebookUrl}
            className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            {...externalLinkProps}
          >
            {ctaLabels.message}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="min-h-11 rounded-xl border border-ink/15 px-4 text-sm font-semibold text-ink transition hover:bg-petal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Điều hướng mobile"
          className="border-t border-ink/10 bg-paper px-5 py-4 md:hidden"
        >
          <div className="grid gap-2">
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-ink transition hover:bg-petal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={contact.facebookUrl}
              className="mt-2 rounded-2xl bg-ink px-4 py-3 text-center text-base font-semibold text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              onClick={() => setMenuOpen(false)}
              {...externalLinkProps}
            >
              {ctaLabels.messageOnFacebook}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
