"use client";

import { useState } from "react";
import Link from "next/link";
import { addToWaitlist } from "@/lib/firestore";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "exists">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      await addToWaitlist(email.trim());
      setStatus("success");
      setEmail("");
    } catch (err: any) {
      if (err.message === "EMAIL_EXISTS") {
        setStatus("exists");
      } else {
        setStatus("error");
      }
    }
  }

  return (
    <>
      {/* === HERO === */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        {/* Red glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-rouge/[0.08] blur-[120px] pointer-events-none" />

        <div className="relative z-10">
          <p className="font-mono text-xs tracking-[5px] uppercase text-rouge mb-8 animate-fade-in animate-delay-1">
            Plateforme de compétition rap amateur
          </p>

          <h1 className="font-display text-[clamp(4rem,16vw,12rem)] font-bold leading-[0.85] tracking-tight uppercase animate-fade-in animate-delay-2">
            MIROIR
          </h1>

          <p className="text-lg md:text-xl text-blanc-muted/50 mt-6 tracking-wide animate-fade-in animate-delay-3">
            Montre ce que tu vaux.
          </p>

          <div className="w-10 h-0.5 bg-rouge mx-auto mt-10 animate-fade-in animate-delay-4" />

          <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in animate-delay-5">
            <Link
              href="/inscription"
              className="font-display text-sm font-semibold tracking-[4px] uppercase px-10 py-4 bg-rouge text-blanc hover:bg-rouge-hover transition-colors"
            >
              CANDIDATER
            </Link>
            <Link
              href="/concept"
              className="font-display text-sm font-semibold tracking-[4px] uppercase px-10 py-4 border border-white/10 text-blanc hover:border-rouge/50 transition-colors"
            >
              DÉCOUVRIR
            </Link>
          </div>
        </div>
      </section>

      {/* === PUNCHLINES === */}
      <section className="py-20 px-6 border-t border-white/[0.03]">
        <div className="mx-auto max-w-4xl grid md:grid-cols-3 gap-12 text-center">
          <div>
            <p className="font-display text-4xl font-bold text-rouge">3</p>
            <p className="font-mono text-[0.6rem] tracking-[4px] uppercase text-blanc-muted mt-2">Rappeurs</p>
          </div>
          <div>
            <p className="font-display text-4xl font-bold text-rouge">3</p>
            <p className="font-mono text-[0.6rem] tracking-[4px] uppercase text-blanc-muted mt-2">Décisions</p>
          </div>
          <div>
            <p className="font-display text-4xl font-bold text-rouge">1</p>
            <p className="font-mono text-[0.6rem] tracking-[4px] uppercase text-blanc-muted mt-2">Séance studio</p>
          </div>
        </div>
      </section>

      {/* === SLOGAN === */}
      <section className="py-24 px-6 text-center border-t border-white/[0.03]">
        <blockquote className="font-display text-[clamp(1.5rem,5vw,3.5rem)] uppercase tracking-wide leading-tight">
          Le miroir ne <span className="text-rouge">ment</span> pas.
          <br />
          Ton public non plus.
        </blockquote>
      </section>

      {/* === WAITLIST === */}
      <section className="py-20 px-6 border-t border-white/[0.03]">
        <div className="mx-auto max-w-md text-center">
          <p className="font-mono text-[0.6rem] tracking-[5px] uppercase text-rouge mb-4">
            Accès anticipé
          </p>
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-wide mb-3">
            Sois parmi les premiers.
          </h2>
          <p className="text-sm text-blanc-muted mb-8">
            Laisse ton email pour être prévenu à l&apos;ouverture.
          </p>

          <form onSubmit={handleSubmit} className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ton@email.fr"
              required
              disabled={status === "success"}
              className="flex-1 px-4 py-4 bg-noir-card border border-white/[0.06] text-blanc text-sm outline-none focus:border-rouge/50 transition-colors disabled:opacity-40"
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="font-display text-sm font-semibold tracking-[3px] uppercase px-6 py-4 bg-rouge border border-rouge text-blanc hover:bg-rouge-hover transition-colors disabled:opacity-40"
            >
              {status === "loading" ? "..." : status === "success" ? "FAIT" : "ENTRER"}
            </button>
          </form>

          <div className="mt-4 text-xs font-mono min-h-[20px]">
            {status === "success" && <span className="text-blanc">✓ On te tient au courant.</span>}
            {status === "exists" && <span className="text-rouge">Déjà inscrit.</span>}
            {status === "error" && <span className="text-rouge">Erreur, réessaie.</span>}
          </div>

          <p className="mt-6 text-[0.5rem] text-blanc-muted/30 leading-relaxed font-mono">
            En t&apos;inscrivant, tu confirmes avoir 18 ans ou plus.
            <br />
            Données traitées conformément au RGPD.
          </p>
        </div>
      </section>
    </>
  );
}
