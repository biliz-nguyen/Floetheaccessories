import { Link, NavLink } from "react-router-dom"

const navItems = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About Us", to: "/#about" },
  { label: "Our Team", to: "/#team" },
  { label: "Collection", to: "/#home" }
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-sand/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/FLOÉ.png" alt="FLOÉ Icon" className="h-20 w-auto object-contain drop-shadow-sm"/>
          <div className="flex flex-col">
            <span className="text-3xl font-display tracking-tight font-semibold uppercase leading-none">FLOÉ</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-black/50 mt-0.5">
              Your Style Your Vibe
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.25em] md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-black"
                    : "text-black/60 hover:text-black"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden rounded-full border border-black/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-black/70 transition hover:border-black/30 md:inline-flex"
          >
            Wishlist
          </button>
          <button
            type="button"
            className="rounded-full bg-black px-5 py-2 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-black/90"
          >
            Bag (0)
          </button>
        </div>
      </div>
    </header>
  )
}
