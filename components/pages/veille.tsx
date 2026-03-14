"use client"

import { ExternalLink, Info } from "lucide-react"
import { Atom, Bot, Crosshair, Microscope, Radar, Sparkles } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

function DefinitionCardDialog({
  kind,
  term,
  summary,
  definition,
  examplesTitle,
  examples,
}: {
  kind: "nano" | "military"
  term: string
  summary: string
  definition: string
  examplesTitle: string
  examples: string[]
}) {
  const initial = term.trim().slice(0, 1).toUpperCase()
  const Glyph = kind === "nano" ? Atom : Crosshair
  const hook =
    kind === "nano"
      ? "Imagine des outils si petits qu'on ne les voit pas, mais assez puissants pour changer les materiaux."
      : "Imagine une protection plus legere, des capteurs plus malins et des systemes plus precis."
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`Lire la definition: ${term}`}
          className="card-shimmer card-tilt definition-glow group block w-full rounded-xl overflow-hidden bg-[var(--secondary)] border border-[var(--border)] hover:border-[var(--gold)]/50 transition-all text-left"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-[var(--content-bg)] flex items-center justify-center">
            <Glyph className="absolute inset-0 m-auto w-28 h-28 text-[var(--gold)] opacity-[0.18] drop-shadow-[0_0_24px_rgba(212,168,83,0.35)]" />
            <span
              className="relative z-10 text-6xl font-bold transition-all duration-300 group-hover:scale-110"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px var(--gold)",
                textShadow:
                  "0 0 20px rgba(212, 168, 83, 0.5), 0 0 40px rgba(212, 168, 83, 0.3)",
                filter: "drop-shadow(0 4px 8px rgba(212, 168, 83, 0.3))",
              }}
            >
              {initial}
            </span>
            <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Info className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
          <div className="p-4">
            <p className="text-base font-semibold text-[var(--gold)] mb-1">
              {term}
            </p>
            <p className="text-sm text-[var(--gold)]/90 leading-relaxed">
              {hook}
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
              {summary}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--gold)]">
              <span className="px-3 py-1 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25">
                Ouvrir la definition
              </span>
              <span className="text-[var(--text-muted)]">
                (clique sur la carte)
              </span>
            </div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="bg-[var(--secondary)] text-[var(--text-primary)] border-[var(--border)] rounded-2xl p-0 overflow-hidden">
        <div className="relative bg-[var(--content-bg)] border-b border-[var(--border)] p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <DialogTitle className="text-[var(--gold)] text-xl">
                {term}
              </DialogTitle>
              <DialogDescription className="text-[var(--text-secondary)] text-sm mt-1">
                {summary}
              </DialogDescription>
            </div>
            <div className="shrink-0 text-[var(--gold)]">
              <Glyph className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="p-6 space-y-5">
          <div className="text-sm text-[var(--text-muted)] leading-relaxed">
            {definition}
          </div>

          <div className="rounded-xl bg-[var(--content-bg)] border border-[var(--border)] p-4">
            <p className="text-sm font-medium text-[var(--text-secondary)] mb-3">
              {examplesTitle}
            </p>
            <ul className="flex flex-col gap-2">
              {examples.map((ex) => (
                <li
                  key={ex}
                  className="text-sm text-[var(--text-muted)] pl-3 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--gold)]/50"
                >
                  {ex}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className="m-6 mt-0 bg-[var(--content-bg)] border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--gold)]/40 hover:bg-[var(--content-bg)]"
            >
              Fermer
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const articles = [
  {
    title: "Article : Comment les nanotechnologies transforment les equipements militaires.",
    number: "1",
    link: "https://blog.nanochemigroup.cz/developing-nanotechnology-in-the-defence-industry/",
  },
  {
    title: "Wiki : Applications des nanotechnologies dans les armes modernes.",
    number: "2",
    link: "https://en.wikipedia.org/wiki/Nanotechnology_in_warfare",
  },
  {
    title: "Article : Le role cle des nanotechnologies dans les strategies de defense.",
    number: "3",
    link: "https://www.defensemagazine.com/search?search=nanotechno",
  },
  {
    title: "Article : Les implications et les dangers des nanotechnologies militaires.",
    number: "4",
    link: "https://greenwashingeconomy.com/nanotechnologies-applications-implications-et-risques-par-nicholas-winstead/",
  },
  {
    title: "Video : Comment la nanotechnologie revolutionne la guerre moderne.",
    number: "5",
    link: "https://www.youtube.com/watch?v=7irXfatBQrQ&list=PL35ZMzgG0gJCapRKIV0JK4OMl6bw9QIaU&pp=gAQB",
  },
  {
    title: "Article : Les applications militaires des nanotechnologies : une revolution strategique.",
    number: "6",
    link: "https://www.nanotech-insiders.com/blog/les-applications-militaires-des-nanotechnologies-une-revolution-strategique",
  },
  {
    title: "Video : Les avancees recentes des nanotechnologies dans le domaine militaire.",
    number: "7",
    link: "https://www.youtube.com/watch?v=kXQIJNW5CrQ",
  },
  {
    title: "Article : Polymeres nanostructures sur le champ de bataille moderne.",
    number: "8",
    link: "https://blog.polymernanocentrum.cz/nanostructured-polymers-on-the-modern-battlefield/",
  },
  {
    title: "Monographie : Nanotechnologie, le domaine emergent pour les applications militaires futures.",
    number: "9",
    link: "https://idsa.in/publisher/monograph/nanotechnology-the-emerging-field-for-future-military-applications",
  },
]

const nanoExamples = [
  "Medecine : Nanorobots pour la delivrance ciblee de medicaments.",
  "Electronique : Circuits plus rapides et plus petits.",
  "Materiaux : Textiles autonettoyants, verres antireflets.",
]

const militaryExamples = [
  "Exosquelettes renforces pour les soldats avec des materiaux ultra-legers et resistants.",
  "Armures intelligentes capables de s'adapter aux chocs et balles.",
  "Munitions auto-guidees dotees de capteurs nanometriques.",
  "Drones miniaturises pour la surveillance et la reconnaissance.",
]

const storySteps = [
  {
    title: "L'invisible qui change tout",
    icon: Microscope,
    text: "Les nanotechnologies, c'est comme une boite a outils mini-mini: on travaille si petit qu'on ne le voit pas, mais ca peut rendre les objets plus legers, plus solides et plus intelligents.",
  },
  {
    title: "Des capteurs ultra-sensibles",
    icon: Radar,
    text: "Imagine un nez super fin: des capteurs nanometriques peuvent detecter plus vite certaines menaces (chimique, biologique, nucleaire) et aider a mieux surveiller.",
  },
  {
    title: "Des machines plus agiles",
    icon: Bot,
    text: "Drones plus discrets, exosquelettes plus confortables: l'objectif est de gagner en autonomie et en endurance, sans ajouter du poids inutile.",
  },
  {
    title: "Un sujet qui evolue vite",
    icon: Sparkles,
    text: "Nouveaux materiaux, idees futuristes, defense numerique: la recherche avance chaque annee. Plus tu explores, plus tu decouvres de nouvelles possibilites.",
  },
]

export function VeillePage() {
  return (
    <div
      className="vt-stage"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        const x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width))
        const y = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height))
        e.currentTarget.style.setProperty("--mx", `${x}`)
        e.currentTarget.style.setProperty("--my", `${y}`)
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.setProperty("--mx", "0.5")
        e.currentTarget.style.setProperty("--my", "0.5")
      }}
    >
      <div className="vt-blob b1" />
      <div className="vt-blob b2" />
      <div className="vt-blob b3" />
      <div className="vt-noise" />

      <div className="vt-layer">
      <h2
        className="vt-reveal vt-title-underline text-2xl font-semibold text-[var(--text-primary)] pb-4 mb-6"
        style={{ animationDelay: "0ms" }}
      >
        Veille Technologique
      </h2>

      {/* Animated hero */}
      <div className="veille-hero mb-6 vt-reveal" style={{ animationDelay: "80ms" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="hero-scan" />
          <div className="hero-sparks">
            <span className="hero-spark" style={{ left: "12%", top: "64%", animationDelay: "0.2s" }} />
            <span className="hero-spark" style={{ left: "22%", top: "32%", animationDelay: "1.0s", animationDuration: "4.6s" }} />
            <span className="hero-spark" style={{ left: "38%", top: "72%", animationDelay: "0.6s", animationDuration: "4.2s" }} />
            <span className="hero-spark" style={{ left: "52%", top: "44%", animationDelay: "1.6s" }} />
            <span className="hero-spark" style={{ left: "64%", top: "68%", animationDelay: "0.9s", animationDuration: "4.9s" }} />
            <span className="hero-spark" style={{ left: "76%", top: "30%", animationDelay: "1.3s", animationDuration: "4.4s" }} />
            <span className="hero-spark" style={{ left: "86%", top: "58%", animationDelay: "0.4s", animationDuration: "5.1s" }} />
            <span className="hero-spark" style={{ left: "92%", top: "24%", animationDelay: "2.1s", animationDuration: "4.7s" }} />
          </div>
        </div>
        <div className="relative z-10 p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm font-medium text-[var(--gold)]">
                Exploration
              </p>
              <p className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] leading-tight">
                <span
                  className="vt-glitch"
                  data-text="Nanotechnologie et Armement Militaire"
                >
                  Nanotechnologie et Armement Militaire
                </span>
              </p>
              <p className="mt-2 text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-[62ch]">
                Un sujet ou la science du minuscule rencontre des enjeux tres concrets: protection, detection, precision et nouveaux materiaux.
              </p>
            </div>
            <div className="shrink-0 text-[var(--gold)] opacity-95 gold-pulse">
              <Atom className="w-8 h-8" />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="float-chip inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--content-bg)]/60 border border-[var(--border)] text-sm text-[var(--text-secondary)]">
              <Microscope className="w-4 h-4 text-[var(--gold)]" />
              Echelle nano
            </span>
            <span className="float-chip delay-1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--content-bg)]/60 border border-[var(--border)] text-sm text-[var(--text-secondary)]">
              <Radar className="w-4 h-4 text-[var(--gold)]" />
              Capteurs
            </span>
            <span className="float-chip delay-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--content-bg)]/60 border border-[var(--border)] text-sm text-[var(--text-secondary)]">
              <Bot className="w-4 h-4 text-[var(--gold)]" />
              Autonomie
            </span>
            <span className="float-chip delay-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--content-bg)]/60 border border-[var(--border)] text-sm text-[var(--text-secondary)]">
              <Crosshair className="w-4 h-4 text-[var(--gold)]" />
              Precision
            </span>
          </div>
        </div>
      </div>

      {/* Question problematique */}
      <div
        className="vt-reveal vt-breath card-tilt card-shimmer p-5 rounded-xl bg-[var(--secondary)] border border-[var(--gold)]/20 mb-6"
        style={{ animationDelay: "160ms" }}
      >
        <h4 className="text-base font-medium text-[var(--text-primary)] leading-relaxed">
          {"Comment les nanotechnologies contribuent-elles au developpement de nouvelles armes et systemes de defense ?"}
        </h4>
      </div>

      {/* Definitions */}
      <div
        className="vt-reveal definition-backdrop rounded-2xl border border-[var(--border)] bg-[var(--sidebar-bg)]/60 p-4 mb-6"
        style={{ animationDelay: "240ms" }}
      >
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="vt-reveal" style={{ animationDelay: "300ms" }}>
            <DefinitionCardDialog
              kind="nano"
              term="Nanotechnologie"
              summary="Manipuler la matiere a l'echelle du nanometre pour creer des materiaux et dispositifs aux proprietes nouvelles (plus solides, plus legers, plus performants)."
              definition="La nanotechnologie est la science et l'ingenierie des materiaux et des structures a l'echelle nanometrique (1 nanometre = 1 milliardieme de metre). Elle permet de manipuler la matiere au niveau atomique et moleculaire pour creer de nouveaux materiaux, dispositifs et systemes aux proprietes ameliorees."
              examplesTitle="Exemples d'applications :"
              examples={nanoExamples}
            />
          </div>

          <div className="vt-reveal" style={{ animationDelay: "360ms" }}>
            <DefinitionCardDialog
              kind="military"
              term="Arme militaire"
              summary="Tout equipement concu pour l'attaque ou la defense. Les technologies avancees (capteurs, nanomateriaux) visent surtout la precision, la protection et la furtivite."
              definition="Une arme militaire designe tout equipement concu pour la defense ou l'attaque en contexte militaire. Il peut s'agir d'armes conventionnelles (fusils, missiles, chars) ou avancees, comme les armes utilisant la nanotechnologie pour augmenter leur efficacite, leur furtivite ou leur puissance."
              examplesTitle="Exemples d'armes utilisant la nanotechnologie :"
              examples={militaryExamples}
            />
          </div>
        </div>
      </div>

      {/* Presentation */}
      <div
        className="vt-reveal relative overflow-hidden rounded-2xl bg-[var(--secondary)] border border-[var(--border)] mb-6"
        style={{ animationDelay: "420ms" }}
      >
        <div className="relative bg-[var(--content-bg)] border-b border-[var(--border)] p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[var(--gold)]">Mini histoire</p>
              <p className="text-base text-[var(--text-secondary)]">
                Les nanotechnologies expliquees simplement, pour donner envie de creuser.
              </p>
            </div>
            <div className="shrink-0 text-[var(--gold)] opacity-90">
              <Atom className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {storySteps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="card-shimmer card-tilt animate-in fade-in-0 slide-in-from-bottom-2 duration-500 rounded-xl bg-[var(--content-bg)] border border-[var(--border)] p-4 hover:border-[var(--gold)]/40 transition-colors"
                style={{ animationDelay: `${520 + idx * 90}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-9 h-9 rounded-lg bg-black/20 border border-[var(--border)] flex items-center justify-center text-[var(--gold)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-base font-semibold text-[var(--gold)]">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm text-[var(--text-muted)] leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* Articles grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, idx) => (
          <a
            key={article.title}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="vt-reveal card-shimmer card-tilt card-wobble definition-glow group block rounded-xl overflow-hidden bg-[var(--secondary)] border border-[var(--border)] hover:border-[var(--gold)]/50 transition-all"
            style={{ animationDelay: `${560 + idx * 70}ms` }}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--content-bg)] flex items-center justify-center">
              {/* 3D Number */}
              <span 
                className="vt-chromatic text-6xl font-bold transition-all duration-300 group-hover:scale-110"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '2px var(--gold)',
                  textShadow: '0 0 20px rgba(212, 168, 83, 0.5), 0 0 40px rgba(212, 168, 83, 0.3)',
                  filter: 'drop-shadow(0 4px 8px rgba(212, 168, 83, 0.3))',
                }}
              >
                {article.number}
              </span>
              <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
            <div className="p-3">
              <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-2">
                {article.title}
              </p>
            </div>
          </a>
        ))}
      </div>
      </div>
    </div>
  )
}
