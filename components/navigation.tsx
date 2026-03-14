"use client"

type PageName = "a-propos" | "profil" | "projet" | "veille-techno" | "contact"

const navItems: { label: string; page: PageName }[] = [
  { label: "A propos", page: "a-propos" },
  { label: "Profil", page: "profil" },
  { label: "Projet", page: "projet" },
  { label: "Veille Techno", page: "veille-techno" },
  { label: "Contact", page: "contact" },
]

export function Navigation({
  activePage,
  onPageChange,
}: {
  activePage: PageName
  onPageChange: (page: PageName) => void
}) {
  return (
    <nav className="card-shimmer bg-[var(--nav-bg)] rounded-2xl p-1 mb-6 border border-[var(--border)]">
      <ul className="flex flex-wrap items-center gap-1">
        {navItems.map((item) => (
          <li key={item.page} className="flex-1 min-w-fit">
            <button
              onClick={() => onPageChange(item.page)}
              className={`card-tilt card-wobble relative overflow-hidden w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                activePage === item.page
                  ? "bg-[var(--gold)] text-[var(--primary-foreground)] shadow-lg shadow-[var(--gold)]/10"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-black/10"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export type { PageName }
