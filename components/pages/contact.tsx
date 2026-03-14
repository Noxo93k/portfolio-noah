"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  })

  const isValid =
    formData.fullname.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== ""

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isValid) return
    
    // Intentionally no direct email/phone embedded.
    // You can later plug this into a backend (API route) or a form provider.
  }

  return (
    <div>
      <h2 className="fx-reveal fx-title-underline text-2xl font-semibold text-[var(--text-primary)] pb-4 mb-6">
        Contact
      </h2>

      <section className="fx-reveal" style={{ animationDelay: "80ms" }}>
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-5">
          Formulaire de contact
        </h3>

        <form onSubmit={handleSubmit} className="card-shimmer card-tilt definition-glow flex flex-col gap-4 rounded-2xl bg-[var(--sidebar-bg)] border border-[var(--border)] p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullname"
              placeholder="Nom complet"
              value={formData.fullname}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-[var(--secondary)] border border-[var(--border)] text-base text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--gold)] focus:outline-none transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Adresse email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-[var(--secondary)] border border-[var(--border)] text-base text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--gold)] focus:outline-none transition-colors"
            />
          </div>

          <textarea
            name="message"
            placeholder="Votre message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-[var(--secondary)] border border-[var(--border)] text-base text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--gold)] focus:outline-none transition-colors resize-none"
          />

          <button
            type="submit"
            disabled={!isValid}
            className="card-tilt card-wobble self-end flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--gold)] text-[var(--primary-foreground)] text-base font-medium hover:bg-[var(--gold-light)] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Envoyer</span>
          </button>
        </form>
      </section>
    </div>
  )
}
