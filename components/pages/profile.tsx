"use client"

import { BookOpen, FileText, ExternalLink } from "lucide-react"

/* ---------- DATA ---------- */

const education = [
  {
    title: "BTS Services Informatiques aux Organisations",
    subtitle: "Option Solutions d'Infrastructure, Systemes et Reseaux",
    period: "2023 -- 2026",
    place: "Louis Armand - Paris",
    points: [
      "Administration des systemes et reseaux",
      "Maintenance et securisation des infrastructures",
      "Gestion de projets informatiques",
    ],
  },
  {
    title: "Baccalaureat Sciences et Technologies du Management et de la Gestion",
    subtitle: "Option Systemes d'Information de Gestion",
    period: "2020 -- 2023",
    place: "Louise Michel - Bobigny",
    points: [
      "Programmation et developpement d'applications",
      "Gestion des bases de donnees",
      "Analyse et conception de systemes d'information",
    ],
  },
]

const experience = [
  {
    title: "Stagiaire Technicien Reseaux et Systemes",
    period: "SB BAT - 2026",
    description:
      "Installation et brassage de baies informatiques (serveurs, industrielles, outdoor) et deploiement de videoprotection IP. Configuration de switchs (VLAN), gestion de NAS (RAID) et supervision reseau via le protocole SNMP. Assistance sur l'Active Directory et observation de la gestion de parc virtualise sous VMware vCenter.",
  },
  {
    title: "Stage Technicien Reseaux et Systemes",
    period: "Globale Home, La Courneuve - 2025",
    description:
      "Mise a niveau physique d'une baie informatique. Installation complete d'une baie reseau, d'une baie serveur et d'un NAS. Cablage RJ45 d'une maison. Redaction de la documentation technique.",
  },
  {
    title: "Stage - Technicien informatique",
    period: "Technova - 2025",
    description:
      "Deplacements pour depannage informatique. Installation du systeme d'exploitation Windows 10 sur des postes neufs. Organisation et structuration des dossiers de l'entreprise via Excel.",
  },
  {
    title: "Stagiaire",
    period: "Mairie de Bobigny - 2019",
    description:
      "Echanges avec les salaries pour decouvrir leur metier. Accompagnement d'un salarie dans son travail, realisation de taches simples sous sa supervision.",
  },
  {
    title: "Benevole",
    period: "Experience continue",
    description:
      "Realisation de diverses taches manuelles selon les besoins operationnels. Participation au nettoyage et a l'entretien des espaces verts. Collecte de fonds en organisant des evenements. Soutien aux personnes agees.",
  },
]

const skills = [
  {
    category: "Systemes d'exploitation",
    items: ["Windows 7, 10, 11", "Linux Ubuntu", "Windows Server 2019"],
  },
  {
    category: "Logiciels & Outils",
    items: ["Pack Office", "VirtualBox", "VMware vCenter", "Packet Tracer", "Putty", "Active Directory"],
  },
  {
    category: "Langages",
    items: ["HTML", "CSS"],
  },
  {
    category: "Reseaux & Protocoles",
    items: ["TCP/IP", "SSL/TLS", "VPN", "SSH/HTTPS", "NTP", "Routing", "VLAN", "RAID"],
  },
  {
    category: "Competences transversales",
    items: ["Gestion de projet", "Travail en equipe", "Adaptabilite", "Documentation technique"],
  },
]

const languages = [
  { name: "Francais", level: "C2" },
  { name: "Anglais", level: "B1" },
  { name: "Espagnol", level: "A2" },
]

/* ---------- COMPONENTS ---------- */

function SkillTag({ name }: { name: string }) {
  return (
    <span className="px-3 py-1.5 text-sm font-medium rounded-md bg-[var(--gold)]/20 text-[var(--gold)] border border-[var(--gold)]/30">
      {name}
    </span>
  )
}

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-8 rounded-lg bg-[var(--secondary)] border border-[var(--border)] flex items-center justify-center text-[var(--gold)]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[var(--text-primary)]">{title}</h3>
    </div>
  )
}

function TimelineItem({
  title,
  subtitle,
  period,
  description,
  points,
}: {
  title: string
  subtitle?: string
  period: string
  description?: string
  points?: string[]
}) {
  return (
    <li className="relative pl-6 pb-6 last:pb-0 border-l border-[var(--border)]">
      <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-[var(--gold)]" />
      <h4 className="text-base font-medium text-[var(--text-primary)] mb-1">{title}</h4>
      {subtitle && (
        <p className="text-sm text-[var(--text-secondary)] mb-1">{subtitle}</p>
      )}
      <span className="text-sm text-[var(--gold)] block mb-2">{period}</span>
      {description && (
        <p className="text-sm text-[var(--text-muted)] leading-relaxed">{description}</p>
      )}
      {points && points.length > 0 && (
        <ul className="mt-2 space-y-1">
          {points.map((point, idx) => (
            <li key={idx} className="text-sm text-[var(--text-muted)] flex items-start gap-2">
              <span className="text-[var(--gold)] mt-0.5">-</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

/* ---------- MAIN PAGE ---------- */

export function ProfilePage() {
  return (
    <div>
      <h2 className="fx-reveal fx-title-underline text-2xl font-semibold text-[var(--text-primary)] pb-4 mb-6">
        Profil
      </h2>

      {/* Formation */}
      <section className="mb-8">
        <SectionTitle icon={<BookOpen className="w-4 h-4" />} title="Formation" />
        <ol className="list-none">
          {education.map((item) => (
            <TimelineItem
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              period={item.period}
              description={item.place}
              points={item.points}
            />
          ))}
        </ol>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <SectionTitle icon={<BookOpen className="w-4 h-4" />} title="Experience" />
        <ol className="list-none">
          {experience.map((item) => (
            <TimelineItem
              key={item.title}
              title={item.title}
              period={item.period}
              description={item.description}
            />
          ))}
        </ol>
      </section>

      {/* Competences */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
          Competences
        </h3>
        <div className="p-5 rounded-xl bg-[var(--secondary)] border border-[var(--border)] space-y-5">
          {skills.map((category) => (
            <div key={category.category}>
              <h4 className="text-base font-medium text-[var(--gold)] mb-3">
                {category.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Langues */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Langues</h3>
        <div className="p-5 rounded-xl bg-[var(--secondary)] border border-[var(--border)]">
          <div className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2">
                <span className="text-base font-medium text-[var(--text-primary)]">{lang.name}</span>
                <span className="px-2 py-1 text-sm rounded-md bg-[var(--gold)]/20 text-[var(--gold)] border border-[var(--gold)]/30">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grille de competences */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
          Grille de Competences
        </h3>
        <div className="p-5 rounded-xl bg-[var(--secondary)] border border-[var(--border)]">
          <p className="text-base text-[var(--text-muted)] mb-4">
            {"Consultez ma grille de competences complete pour le BTS SIO option SISR, detaillant mes realisations professionnelles et les competences acquises."}
          </p>
          <a
            href="https://docs.google.com/spreadsheets/d/1UG38x4Tq3DQzLI8kRW_M3OXXXei7zwOQoaL45IzJk7M/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--content-bg)] border border-[var(--border)] text-base text-[var(--gold)] hover:border-[var(--gold)]/50 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Voir ma grille de competences</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
          Certifications
        </h3>
        <div className="p-5 rounded-xl bg-[var(--secondary)] border border-[var(--border)]">
          <p className="text-base text-[var(--text-muted)]">
            Mes certifications et badges professionnels :
          </p>
          <div className="mt-3 rounded-lg overflow-hidden bg-[var(--content-bg)] p-4">
            <p className="text-sm text-[var(--text-muted)] italic">
              Image de certification a ajouter
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
