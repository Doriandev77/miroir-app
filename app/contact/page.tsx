"use client";

import { useState } from "react";
import { sendContactMessage } from "@/lib/firestore";
import { SITE } from "@/lib/constants";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await sendContactMessage({ name, email, message });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 bg-noir-card border border-white/[0.06] text-blanc text-sm outline-none focus:border-rouge/50 transition-colors placeholder:text-blanc-muted/40";

  return (
    <>
      <section className="pt-24 pb-8 px-6 text-center">
        <p className="font-mono text-[0.6rem] tracking-[5px] uppercase text-rouge mb-4">
          // Contact
        </p>
        <h1 className="font-display text-[clamp(2rem,6vw,4rem)] font-bold uppercase tracking-tight">
          Une question ?
        </h1>
        <p className="text-blanc-muted text-sm mt-4 max-w-md mx-auto">
          Partenariat, presse, bug, suggestion — on lit tout.
        </p>
      </section>

      <section className="max-w-md mx-auto px-6 pb-24">
        {status !== "success" ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Ton nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Ton email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={inputClass}
            />
            <textarea
              placeholder="Ton message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
              className={`${inputClass} resize-none`}
            />

            {status === "error" && (
              <p className="text-xs text-rouge font-mono">Erreur, réessaie.</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full font-display text-sm font-semibold tracking-[3px] uppercase py-4 bg-rouge text-blanc hover:bg-rouge-hover transition-colors disabled:opacity-40"
            >
              {status === "loading" ? "..." : "ENVOYER"}
            </button>
          </form>
        ) : (
          <div className="text-center py-16 border border-rouge/20 bg-rouge/[0.03]">
            <p className="font-display text-2xl uppercase tracking-wide mb-3">
              Message envoyé.
            </p>
            <p className="text-sm text-blanc-muted">
              On te répond dès que possible.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="font-mono text-[0.6rem] tracking-[3px] uppercase text-blanc-muted/40 mb-2">
            Ou directement par email
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="text-sm text-blanc hover:text-rouge transition-colors"
          >
            {SITE.email}
          </a>
        </div>
      </section>
    </>
  );
}
