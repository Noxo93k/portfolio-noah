"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const weeks = [
  {
    title: "Semaine 1 : Audit et Infrastructure Physique",
    entries: [
      {
        task: "Audit de l'existant",
        content:
          "Reperage des baies informatiques chez le client et inventaire des equipements actifs (switchs, routeurs).",
      },
      {
        task: "Deploiement physique",
        content:
          "Installation et fixation d'une baie 19 pouces en salle serveur.",
      },
      {
        task: "Cablage structure",
        content:
          "Tirage de cables Cat 6a, pose de goulottes et raccordement sur bandeaux de brassage.",
      },
    ],
  },
  {
    title: "Semaine 2 : Connectivite et Recettage Reseau",
    entries: [
      {
        task: "Raccordement terminal",
        content:
          "Sertissage de prises RJ45 et montage de plastrons muraux.",
      },
      {
        task: "Tests de conformite",
        content:
          "Utilisation d'un certificateur de cablage pour valider les debits et la continuite des liens.",
      },
      {
        task: "Brassage",
        content:
          "Organisation des cordons de brassage avec etiquetage rigoureux pour faciliter la maintenance future.",
      },
    ],
  },
  {
    title: "Semaine 3 : Stockage Reseau et Sauvegarde (NAS)",
    entries: [
      {
        task: "Mise en service",
        content:
          "Installation physique d'un NAS en rack.",
      },
      {
        task: "Configuration RAID",
        content:
          "Mise en place d'une grappe RAID pour assurer la redondance des donnees et la tolerance aux pannes.",
      },
      {
        task: "Gestion des acces",
        content:
          "Creation de volumes, de dossiers partages et configuration des droits (ACL) pour les utilisateurs du domaine.",
      },
    ],
  },
  {
    title: "Semaine 4 : Commutation et Segmentation",
    entries: [
      {
        task: "Configuration de switchs",
        content:
          "Parametrage de switchs administrables via interface Web et ligne de commande (CLI).",
      },
      {
        task: "Segmentation reseau",
        content:
          "Creation et deploiement de VLANs pour isoler les differents flux (Data, Voix, IoT).",
      },
    ],
  },
  {
    title: "Semaine 5 : Immersion Administration & Virtualisation",
    entries: [
      {
        task: "Gestion des Services",
        content:
          "Observation et assistance a la creation de comptes dans l'Active Directory et modification des etendues DHCP.",
      },
      {
        task: "Virtualisation avec VMware vCenter",
        content:
          "Observation active d'un administrateur gerant un parc important et efficace. Analyse de l'allocation des ressources (vCPU, RAM, Stockage) pour les serveurs virtuels. Comprehension de l'utilite des Snapshots avant toute intervention critique sur l'OS.",
      },
    ],
  },
  {
    title: "Semaine 6 : Surete IP et Videoprotection",
    entries: [
      {
        task: "Deploiement IP",
        content:
          "Installation et adressage de cameras IP sur le reseau dedie.",
      },
      {
        task: "Configuration NVR",
        content:
          "Parametrage de l'enregistreur reseau (gestion du stockage cyclique, detection de mouvement).",
      },
      {
        task: "Securisation",
        content:
          "Mise en place d'un acces distant securise pour la consultation des flux videos.",
      },
    ],
  },
  {
    title: "Semaine 7 : Supervision et Monitoring",
    entries: [
      {
        task: "Mise en place du Monitoring",
        content:
          "Ajout des equipements critiques dans un outil de supervision (type Zabbix ou PRTG).",
      },
      {
        task: "Configuration SNMP",
        content:
          "Activation des agents SNMP pour remonter les alertes materielles en temps reel.",
      },
      {
        task: "Tableau de bord",
        content:
          "Creation d'un dashboard de sante pour visualiser la charge CPU et l'etat des liens reseau.",
      },
    ],
  },
  {
    title: "Semaine 8 : Recette Finale et Documentation",
    entries: [
      {
        task: "Tests de charge",
        content:
          "Verification de la stabilite de l'infrastructure globale sous contrainte.",
      },
      {
        task: "Documentation technique",
        content:
          "Realisation des schemas reseaux finaux sur logiciel de dessin technique.",
      },
      {
        task: "Dossier d'Ouvrage Execute (DOE)",
        content:
          "Redaction du rapport technique final destine au client.",
      },
    ],
  },
]

export default function RapportStageSBBATPage() {
  return (
    <main className="min-h-screen bg-[var(--content-bg)] text-[var(--text-primary)] p-4 lg:p-10">
      <div className="max-w-[900px] mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au portfolio
        </Link>

        <div className="bg-[var(--sidebar-bg)] rounded-2xl border border-[var(--border)] p-6 lg:p-10">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-2">
            Journal de Bord
          </h1>
          <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-4">
            {"Ce journal de bord presente mon stage chez SB BAT, axe sur l'infrastructure reseau et systeme: audit, installation de baie, cablage Cat 6a, recettage, et organisation du brassage. J'y decris aussi la mise en service d'un NAS (RAID, droits d'acces), la segmentation (VLAN) et des taches d'administration/virtualisation. L'objectif est de montrer, semaine apres semaine, mes realisations, les outils utilises et ce que j'ai appris."}
          </p>
          <p className="text-[var(--gold)] font-medium mb-1">
            SB BAT
          </p>
          <p className="text-[var(--text-muted)] text-sm mb-8">
            Stage de 8 semaines - Technicien Reseaux & Systemes
          </p>

          <div className="space-y-8">
            {weeks.map((week) => (
              <section key={week.title}>
                <h2 className="text-lg font-semibold text-[var(--gold)] mb-4 pb-2 border-b border-[var(--border)]">
                  {week.title}
                </h2>
                <div className="space-y-4">
                  {week.entries.map((entry) => (
                    <div
                      key={entry.task}
                      className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[var(--gold)]"
                    >
                      <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                        {entry.task}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {entry.content}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
