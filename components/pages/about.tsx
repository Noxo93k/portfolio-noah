import { Code, Server, FolderKanban, Headset } from "lucide-react"

const services = [
  {
    title: "Developpement web",
    description:
      "Creation de sites web modernes et responsifs avec les dernieres technologies.",
    icon: Code,
  },
  {
    title: "Administration systeme",
    description:
      "Gestion et maintenance des systemes informatiques et des reseaux.",
    icon: Server,
  },
  {
    title: "Gestion de projet",
    description:
      "Organisation et suivi de projets informatiques avec methodologie.",
    icon: FolderKanban,
  },
  {
    title: "Support technique",
    description:
      "Assistance et resolution de problemes informatiques pour les utilisateurs.",
    icon: Headset,
  },
]

export function AboutPage() {
  return (
    <div>
      <h2 className="fx-reveal fx-title-underline text-2xl font-semibold text-[var(--text-primary)] pb-4 mb-6">
        {"A propos de moi"}
      </h2>

      <section className="fx-reveal mb-8" style={{ animationDelay: "80ms" }}>
        <div className="card-shimmer card-tilt definition-glow rounded-2xl bg-[var(--secondary)] border border-[var(--border)] p-5">
          <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-4">
          {"Etudiant en 2eme annee de BTS SIO, je souhaite mettre en pratique mes competences au sein d'un environnement stimulant. Rigoureux, je me distingue par mon esprit de synthese et de solides competences redactionnelles."}
          </p>
          <p className="text-[var(--text-secondary)] text-base leading-relaxed">
          {"Curieux et ouvert d'esprit, j'aime travailler sur des problematiques variees et relever de nouveaux defis dans le domaine des systemes d'information et des reseaux."}
          </p>
        </div>
      </section>

      <section className="fx-reveal" style={{ animationDelay: "160ms" }}>
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-5">
          Ce que je fais
        </h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <li
              key={service.title}
              className="card-shimmer card-tilt card-wobble definition-glow flex items-start gap-4 p-5 rounded-xl bg-[var(--secondary)] border border-[var(--border)] hover:border-[var(--gold)]/30 transition-all hover:shadow-lg hover:shadow-[var(--gold)]/5 group"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl border-2 border-[var(--gold)] bg-[var(--gold)]/10 p-3 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                <service.icon className="w-full h-full text-[var(--gold)]" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h4 className="text-base font-semibold text-[var(--text-primary)] mb-1">
                  {service.title}
                </h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
