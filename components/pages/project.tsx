"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Eye, FolderKanban, GraduationCap } from "lucide-react"

const categories = ["Tous", "Stage", "Projet"] as const
type Category = (typeof categories)[number]

const projects = [
  {
    title: "Rapport de stage chez Globale Home",
    category: "Stage" as Category,
    number: "1",
    link: "/rapport-stage",
    subtitle:
      "Pendant ce stage chez Globale Home, j'ai participe a des interventions reseaux concretes: remise a niveau de baie informatique, installation et configuration de switchs, cablage RJ45 et mise en service d'equipements (NAS). J'ai aussi realise des tests de connectivite avec du materiel professionnel et contribue a la documentation technique.",
    visual: "network" as const,
  },
  {
    title: "Rapport de stage chez SB BAT",
    category: "Stage" as Category,
    number: "2",
    link: "/rapport-stage-sbbat",
    subtitle:
      "Ce rapport presente mon stage chez SB BAT, axe sur l'infrastructure reseau et systeme: audit, installation de baie, cablage Cat 6a, recettage et organisation du brassage. J'y decris aussi la mise en service d'un NAS (RAID, droits d'acces) et la segmentation reseau (VLAN).",
    visual: "infrastructure" as const,
  },
]

function ProjectVisual({ kind }: { kind: "network" | "infrastructure" }) {
  return (
    <div className={`project-visual project-visual--${kind}`} aria-hidden="true">
      <svg
        className="project-visual__svg"
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {kind === "network" ? (
          <>
            {/* Nodes */}
            <circle cx="145" cy="160" r="10" className="pv-node" />
            <circle cx="310" cy="120" r="8" className="pv-node pv-node--2" />
            <circle cx="470" cy="180" r="10" className="pv-node pv-node--3" />
            <circle cx="620" cy="135" r="8" className="pv-node pv-node--4" />
            <circle cx="260" cy="290" r="10" className="pv-node pv-node--5" />
            <circle cx="520" cy="320" r="10" className="pv-node pv-node--6" />
            <circle cx="690" cy="285" r="8" className="pv-node pv-node--7" />

            {/* Links */}
            <path d="M145 160 C 210 110, 250 105, 310 120" className="pv-line" />
            <path d="M310 120 C 380 135, 420 155, 470 180" className="pv-line pv-line--2" />
            <path d="M470 180 C 540 155, 575 145, 620 135" className="pv-line pv-line--3" />
            <path d="M310 120 C 300 200, 285 245, 260 290" className="pv-line pv-line--4" />
            <path d="M470 180 C 430 255, 485 300, 520 320" className="pv-line pv-line--5" />
            <path d="M520 320 C 595 315, 640 300, 690 285" className="pv-line pv-line--6" />
            <path d="M260 290 C 365 345, 440 355, 520 320" className="pv-line pv-line--7" />

            {/* Rack silhouette */}
            <rect x="70" y="310" width="120" height="140" rx="18" className="pv-panel" />
            <rect x="95" y="332" width="70" height="10" rx="5" className="pv-slot" />
            <rect x="95" y="356" width="86" height="10" rx="5" className="pv-slot" />
            <rect x="95" y="380" width="76" height="10" rx="5" className="pv-slot" />
            <rect x="95" y="404" width="92" height="10" rx="5" className="pv-slot" />
          </>
        ) : (
          <>
            {/* Building blocks */}
            <rect x="90" y="150" width="140" height="270" rx="22" className="pv-panel" />
            <rect x="260" y="110" width="160" height="310" rx="22" className="pv-panel pv-panel--2" />
            <rect x="450" y="170" width="120" height="250" rx="22" className="pv-panel pv-panel--3" />

            {/* Windows */}
            {Array.from({ length: 6 }).map((_, i) => (
              <rect
                key={i}
                x={118}
                y={190 + i * 34}
                width={84}
                height={14}
                rx={7}
                className="pv-slot"
              />
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <rect
                key={i}
                x={290}
                y={145 + i * 32}
                width={108}
                height={14}
                rx={7}
                className="pv-slot pv-slot--2"
              />
            ))}

            {/* Cable routes */}
            <path d="M190 420 C 270 380, 300 350, 340 310" className="pv-line" />
            <path d="M340 310 C 410 240, 470 240, 510 240" className="pv-line pv-line--2" />
            <path d="M510 240 C 560 240, 610 200, 650 170" className="pv-line pv-line--3" />
            <path d="M340 310 C 350 360, 410 395, 450 420" className="pv-line pv-line--4" />

            {/* Endpoints */}
            <circle cx="190" cy="420" r="10" className="pv-node" />
            <circle cx="340" cy="310" r="8" className="pv-node pv-node--2" />
            <circle cx="510" cy="240" r="10" className="pv-node pv-node--3" />
            <circle cx="650" cy="170" r="8" className="pv-node pv-node--4" />
          </>
        )}
      </svg>
      <div className="project-visual__scan" />
    </div>
  )
}

export function ProjectPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("Tous")

  const counts = {
    Tous: projects.length,
    Stage: projects.filter((p) => p.category === "Stage").length,
    Projet: projects.filter((p) => p.category === "Projet").length,
  } satisfies Record<Category, number>

  const filteredProjects =
    activeFilter === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <div>
      <h2 className="fx-reveal fx-title-underline text-2xl font-semibold text-[var(--text-primary)] pb-4 mb-6">
        Projet
      </h2>

      {/* Hero */}
      <div
        className="fx-reveal card-shimmer card-tilt definition-glow relative overflow-hidden rounded-2xl bg-[var(--secondary)] border border-[var(--border)] p-5 mb-6"
        style={{ animationDelay: "60ms" }}
      >
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <div className="hero-scan" />
        </div>
        <div className="relative z-10 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm font-medium text-[var(--gold)]">Vitrine</p>
            <p className="text-xl font-semibold text-[var(--text-primary)] leading-tight">
              Rapports, stages et projets
            </p>
            <p className="mt-2 text-base text-[var(--text-secondary)] leading-relaxed max-w-[70ch]">
              Clique sur une carte pour ouvrir le rapport. Les filtres te permettent de trier rapidement.
            </p>
          </div>
          <div className="shrink-0 text-[var(--gold)] gold-pulse">
            <FolderKanban className="w-7 h-7" />
          </div>
        </div>
      </div>

      {/* Filter buttons */}
      <div className="fx-reveal flex flex-wrap gap-2 mb-6" style={{ animationDelay: "80ms" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`card-tilt card-wobble px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
              activeFilter === cat
                ? "bg-[var(--gold)] text-[var(--primary-foreground)]"
                : "bg-[var(--secondary)] text-[var(--text-muted)] border border-[var(--border)] hover:text-[var(--text-primary)]"
            }`}
          >
            <span className="inline-flex items-center gap-2">
              {cat}
              <span
                className={`px-2 py-0.5 rounded-full text-xs border ${
                  activeFilter === cat
                    ? "bg-black/15 border-black/15"
                    : "bg-[var(--content-bg)] border-[var(--border)]"
                }`}
              >
                {counts[cat]}
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div
        key={activeFilter}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in-0 slide-in-from-bottom-2 duration-500"
      >
        {filteredProjects.map((project, idx) => (
          <Link
            key={project.title}
            href={project.link}
            aria-label={`Ouvrir: ${project.title}`}
            className="fx-reveal card-shimmer card-tilt card-wobble definition-glow group block rounded-xl overflow-hidden bg-[var(--secondary)] border border-[var(--border)] hover:border-[var(--gold)]/50 transition-all"
            style={{ animationDelay: `${120 + idx * 70}ms` }}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--content-bg)] flex items-center justify-center">
              <ProjectVisual kind={project.visual} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* 3D Number */}
              <span 
                className="vt-chromatic text-8xl font-bold transition-all duration-300 group-hover:scale-110"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '2px var(--gold)',
                  textShadow: '0 0 20px rgba(212, 168, 83, 0.5), 0 0 40px rgba(212, 168, 83, 0.3)',
                  filter: 'drop-shadow(0 4px 8px rgba(212, 168, 83, 0.3))',
                }}
              >
                {project.number}
              </span>

              {/* Badge category */}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/45 border border-white/10 text-sm text-white backdrop-blur-sm">
                  {project.category === "Stage" ? (
                    <GraduationCap className="w-4 h-4 text-[var(--gold)]" />
                  ) : (
                    <FolderKanban className="w-4 h-4 text-[var(--gold)]" />
                  )}
                  {project.category}
                </span>
              </div>

              {/* Hover overlay with eye */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity scale-50 group-hover:scale-100">
                  <Eye className="w-5 h-5 text-[var(--primary-foreground)]" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">
                {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-[var(--gold)] opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-4">
                {project.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[var(--text-muted)] text-base">
            Aucun projet dans cette categorie.
          </p>
        </div>
      )}
    </div>
  )
}
