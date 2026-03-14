"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

const stageImages = [
  {
    src: "/images/stage-baie-1.jpeg",
    alt: "Baie informatique avec switches reseau et cablage",
  },
  {
    src: "/images/stage-baie-2.jpeg",
    alt: "Infrastructure reseau et gestion des cables",
  },
  {
    src: "/images/stage-equipement.jpeg",
    alt: "Equipements reseau avant installation - switches et serveur",
  },
  {
    src: "/images/stage-baie-complete.jpeg",
    alt: "Vue complete des baies serveur avec equipements reseau",
  },
]

const weeks = [
  {
    title: "Semaine 1 : du 30 decembre au 5 janvier",
    entries: [
      {
        date: "30 decembre",
        content:
          "J'ai ete accueilli chaleureusement par mon tuteur Ahmet Demir. Nous avons fait ensemble une visite complete des installations reseau existantes chez Globale Home afin de me familiariser avec les equipements utilises et les procedures internes. Nous avons ensuite defini les objectifs precis du stage.",
      },
      {
        date: "2 janvier",
        content:
          "Realisation d'une mise a niveau physique complete d'une baie informatique (Baie Essential 42U ES64288). J'ai soigneusement reorganise l'integralite du cablage, securise chaque cable a l'aide de serre-cables et optimise l'espace interne pour faciliter les futures interventions.",
      },
      {
        date: "3 janvier",
        content:
          "Installation et configuration initiale d'un switch Netgear JGS524PE. Tests approfondis de connectivite avec les cordons de brassage Excel Cat 6, en assurant une parfaite fiabilite reseau.",
      },
    ],
  },
  {
    title: "Semaine 2 : du 6 au 12 janvier",
    entries: [
      {
        date: "7 janvier",
        content:
          "Intervention complete de cablage RJ45 dans une maison neuve. J'ai procede au passage precis des cables RJ45 Cat6a, aux raccordements aux prises murales et effectue des tests rigoureux de continuite et de connectivite avec l'appareil professionnel Fluke Networks.",
      },
      {
        date: "9 janvier",
        content:
          "Installation detaillee d'une baie serveur, integrant notamment un NAS Synology DS1517+. Configuration initiale du NAS, assignation des adresses IP fixes pour garantir un acces stable et efficace.",
      },
    ],
  },
  {
    title: "Semaine 3 : du 13 au 19 janvier",
    entries: [
      {
        date: "14 janvier",
        content:
          "Mise en place et cablage complet de dispositifs reseau et securite, incluant un routeur ASUS RT-AX82U, un modem 4G Huawei relie a une antenne externe pour ameliorer la reception, ainsi qu'une Freebox Mini 4K.",
      },
      {
        date: "16 janvier",
        content:
          "Diagnostic avance et reparation suite a une panne detectee sur l'onduleur Eaton Ellipse Eco 650 VA. J'ai effectue un remplacement temporaire efficace avec un modele Eaton 650 ECO USB, assurant ainsi la continuite des services reseau critiques.",
      },
    ],
  },
  {
    title: "Semaine 4 : du 20 au 26 janvier",
    entries: [
      {
        date: "21 janvier",
        content:
          "Deuxieme installation complete d'une baie reseau, comprenant les panneaux de brassage Excel, un amplificateur Home-Cinema Denon AVR-X2700H DAB pour une distribution audio optimale, et etageres specifiques accueillant un enregistreur video Bascom.",
      },
      {
        date: "23 janvier",
        content:
          "Redaction minutieuse d'une documentation technique complete detaillant les installations effectuees, incluant les procedures de maintenance et les consignes strictes de securite a respecter.",
      },
    ],
  },
  {
    title: "Semaine 5 : du 27 janvier au 2 fevrier",
    entries: [
      {
        date: "28 janvier",
        content:
          "Nouvelle intervention reussie de cablage RJ45 dans une maison individuelle, suivie de tests finaux rigoureux pour valider la parfaite performance reseau devant le client satisfait.",
      },
      {
        date: "30 janvier",
        content:
          "Intervention technique de routine sur une baie serveur : reorganisation minutieuse des cables et verification des temperatures internes, assurant un fonctionnement optimal et securise.",
      },
    ],
  },
  {
    title: "Semaine 6 : du 3 au 9 fevrier",
    entries: [
      {
        date: "4 fevrier",
        content:
          "Configuration approfondie d'un NAS Synology DS1517+, incluant la mise en place securisee d'acces distant et la creation structuree de plusieurs comptes utilisateurs selon leurs besoins specifiques.",
      },
      {
        date: "6 fevrier",
        content:
          "Realisation d'un audit technique detaille de l'ensemble du reseau cable mis en place durant mon stage, identification proactive de points d'amelioration potentiels pour optimiser la fiabilite et les performances globales.",
      },
    ],
  },
  {
    title: "Semaine 7 : du 10 au 16 fevrier",
    entries: [
      {
        date: "11 fevrier",
        content:
          "Installation de jarretieres fibre optique Excel OM4 LC-LC pour realiser l'interconnexion optimale des switches Alcatel-Lucent OS6360-P24 situes dans differentes salles techniques de l'entreprise.",
      },
      {
        date: "13 fevrier",
        content:
          "Assistance technique approfondie a la mise en service d'un nouveau routeur ASUS RT-AX82U avec securisation renforcee par WPA3, offrant ainsi une protection optimale des connexions WiFi.",
      },
    ],
  },
  {
    title: "Semaine 8 : du 17 au 23 fevrier",
    entries: [
      {
        date: "18 fevrier",
        content:
          "Realisation d'une maintenance preventive complete des baies informatiques installees : verification minutieuse des connexions, nettoyage des equipements et verification des composants sensibles.",
      },
      {
        date: "20 fevrier",
        content:
          "Mise a jour complete et detaillee de la documentation technique existante en y integrant tous les derniers ajustements et installations effectues.",
      },
    ],
  },
  {
    title: "Semaine 9 : du 24 fevrier au 2 mars",
    entries: [
      {
        date: "25 fevrier",
        content:
          "Derniere intervention de cablage RJ45 domestique du stage, accompagnee de verifications et tests approfondis des performances reseau avec l'outil professionnel Fluke Networks, confirmant la qualite du travail realise.",
      },
      {
        date: "28 fevrier",
        content:
          "Entretien bilan avec Ahmet Demir, durant lequel nous avons echange sur les competences que j'ai acquises, evalue mes realisations, et discute de mes perspectives futures dans le domaine du cablage reseau et informatique.",
      },
    ],
  },
]

export default function RapportStagePage() {
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
            Journal de stage
          </h1>
          <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-4">
            {"Pendant ce stage chez Globale Home, j'ai participe a des interventions reseaux concretes: remise a niveau de baie informatique, installation et configuration de switchs, cablage RJ45 et mise en service d'equipements (NAS). J'ai egalement realise des tests de connectivite avec du materiel professionnel et contribue a la documentation technique. Ce journal retrace semaine par semaine les missions, les methodes et les competences acquises sur le terrain."}
          </p>
          <p className="text-[var(--gold)] font-medium mb-1">
            Globale Home
          </p>
          <p className="text-[var(--text-muted)] text-sm mb-8">
            Stage de 9 semaines - Tuteur : Ahmet Demir
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
                      key={entry.date}
                      className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[var(--gold)]"
                    >
                      <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                        {entry.date}
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

          {/* Galerie photos */}
          <section className="mt-12 pt-8 border-t border-[var(--border)]">
            <h2 className="text-xl font-semibold mb-6 relative pb-2">
              Photos du stage
              <span className="absolute bottom-0 left-0 w-10 h-1 rounded-full bg-[var(--gold)]" />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stageImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[var(--border)] group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="absolute bottom-3 left-3 right-3 text-sm text-white">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
