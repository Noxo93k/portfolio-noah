"use client"

import {
  User,
} from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-full lg:w-[300px] lg:min-w-[300px] shrink-0">
      <div className="card-shimmer card-tilt definition-glow bg-[var(--sidebar-bg)] rounded-2xl p-6 border border-[var(--border)] shadow-lg">
        {/* Profile header */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-[120px] h-[120px] rounded-2xl bg-[var(--content-bg)] mb-4 flex items-center justify-center overflow-hidden border border-[var(--border)]">
            <div className="absolute inset-0 opacity-60">
              <div className="hero-scan" />
            </div>
            <User 
              className="w-28 h-28 gold-pulse relative z-10"
              style={{
                color: 'transparent',
                stroke: 'var(--gold)',
                strokeWidth: 0.5,
                filter: 'drop-shadow(0 0 15px rgba(212, 168, 83, 0.5)) drop-shadow(0 0 30px rgba(212, 168, 83, 0.3))',
              }}
            />
          </div>

          <h1 className="text-xl font-semibold text-[var(--text-primary)] mb-1">
            Noah Cayol
          </h1>
          <p className="card-tilt inline-flex text-sm font-light bg-[var(--secondary)] text-[var(--text-muted)] px-4 py-1 rounded-lg border border-[var(--border)]">
            {"Etudiant en BTS SIO"}
          </p>
        </div>
      </div>
    </aside>
  )
}

function ContactItem({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode
  title: string
  value: string
  href?: string
}) {
  return (
    <li className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-[var(--secondary)] border border-[var(--border)] flex items-center justify-center text-[var(--gold)] shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[11px] uppercase text-[var(--text-muted)]">{title}</p>
        {href ? (
          <a
            href={href}
            className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors truncate block"
          >
            {value}
          </a>
        ) : (
          <span className="text-sm text-[var(--text-secondary)] truncate block">
            {value}
          </span>
        )}
      </div>
    </li>
  )
}
