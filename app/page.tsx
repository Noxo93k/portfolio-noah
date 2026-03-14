"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Navigation, type PageName } from "@/components/navigation"
import { AboutPage } from "@/components/pages/about"
import { ProfilePage } from "@/components/pages/profile"
import { ProjectPage } from "@/components/pages/project"
import { VeillePage } from "@/components/pages/veille"
import { ContactPage } from "@/components/pages/contact"

export default function Home() {
  const [activePage, setActivePage] = useState<PageName>("a-propos")

  return (
    <main className="min-h-screen p-4 lg:p-10 flex flex-col lg:flex-row gap-6 max-w-[1200px] mx-auto">
      <Sidebar />

      <div className="flex-1 min-w-0">
        <Navigation activePage={activePage} onPageChange={setActivePage} />

        <article
          key={activePage}
          className="card-shimmer card-tilt definition-glow bg-[var(--sidebar-bg)] rounded-2xl p-6 lg:p-8 border border-[var(--border)] shadow-lg min-h-[400px] animate-in fade-in-0 slide-in-from-bottom-2 duration-500"
        >
          {activePage === "a-propos" && <AboutPage />}
          {activePage === "profil" && <ProfilePage />}
          {activePage === "projet" && <ProjectPage />}
          {activePage === "veille-techno" && <VeillePage />}
          {activePage === "contact" && <ContactPage />}
        </article>
      </div>
    </main>
  )
}
