"use client";

import { useState } from "react";
import { useAuth } from "@/lib/AuthContext";
import { registerUser, loginUser } from "@/lib/auth";
import { submitCandidature } from "@/lib/firestore";

type Mode = "register" | "login" | "candidature";

export default function InscriptionPage() {
  const { user } = useAuth();
  const [mode, setMode] = useState<Mode>(user ? "candidature" : "register");

  // Auth fields
  const [authEmail, setAuthEmail] = useState("");
  const [authPass, setAuthPass] = useState("");
  const [authName, setAuthName] = useState("");
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  // Candidature fields
  const [artistName, setArtistName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");
  const [soundLink, setSoundLink] = useState("");
  const [candStatus, setCandStatus] = useState<"idle" | "loading" | "success" | "error" | "exists">("idle");

  async function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    setAuthError("");
    setAuthLoading(true);
    try {
      if (mode === "register") {
        await registerUser(authEmail, authPass, authName);
      } else {
        await loginUser(authEmail, authPass);
      }
      setMode("candidature");
    } catch (err: any) {
      const code = err.code || "";
      if (code.includes("email-already-in-use")) setAuthError("Email déjà utilisé.");
      else if (code.includes("wrong-password") || code.includes("user-not-found")) setAuthError("Email ou mot de passe incorrect.");
      else if (code.includes("weak-password")) setAuthError("Mot de passe trop faible (6 caractères min).");
      else setAuthError("Erreur, réessaie.");
    } finally {
      setAuthLoading(false);
    }
  }

  async function handleCandidature(e: React.FormEvent) {
    e.preventDefault();
    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 18) {
      setCandStatus("error");
      return;
    }

    setCandStatus("loading");
    try {
      await submitCandidature({
        artistName,
        email,
        age: ageNum,
        city,
        bio,
        soundLink,
      });
      setCandStatus("success");
    } catch (err: any) {
      if (err.message === "CANDIDATURE_EXISTS") {
        setCandStatus("exists");
      } else {
        setCandStatus("error");
      }
    }
  }

  const inputClass =
    "w-full px-4 py-3 bg-noir-card border border-white/[0.06] text-blanc text-sm outline-none focus:border-rouge/50 transition-colors placeholder:text-blanc-muted/40";

  return (
    <>
      <section className="pt-24 pb-8 px-6 text-center">
        <p className="font-mono text-[0.6rem] tracking-[5px] uppercase text-rouge mb-4">
          // Inscription
        </p>
        <h1 className="font-display text-[clamp(2rem,6vw,4rem)] font-bold uppercase tracking-tight">
          T&apos;as quelque chose à <span className="text-rouge">prouver</span> ?
        </h1>
      </section>

      <section className="max-w-md mx-auto px-6 pb-24">
        {/* Auth form */}
        {!user && mode !== "candidature" && (
          <>
            <div className="flex mb-6 border border-white/[0.04]">
              <button
                onClick={() => setMode("register")}
                className={`flex-1 py-3 text-xs font-display tracking-[3px] uppercase transition-colors ${
                  mode === "register" ? "bg-rouge text-blanc" : "text-blanc-muted"
                }`}
              >
                CRÉER UN COMPTE
              </button>
              <button
                onClick={() => setMode("login")}
                className={`flex-1 py-3 text-xs font-display tracking-[3px] uppercase transition-colors ${
                  mode === "login" ? "bg-rouge text-blanc" : "text-blanc-muted"
                }`}
              >
                CONNEXION
              </button>
            </div>

            <form onSubmit={handleAuth} className="space-y-4">
              {mode === "register" && (
                <input
                  type="text"
                  placeholder="Nom d'artiste"
                  value={authName}
                  onChange={(e) => setAuthName(e.target.value)}
                  required
                  className={inputClass}
                />
              )}
              <input
                type="email"
                placeholder="Email"
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
                required
                className={inputClass}
              />
              <input
                type="password"
                placeholder="Mot de passe"
                value={authPass}
                onChange={(e) => setAuthPass(e.target.value)}
                required
                className={inputClass}
              />

              {authError && (
                <p className="text-xs text-rouge font-mono">{authError}</p>
              )}

              <button
                type="submit"
                disabled={authLoading}
                className="w-full font-display text-sm font-semibold tracking-[3px] uppercase py-4 bg-rouge text-blanc hover:bg-rouge-hover transition-colors disabled:opacity-40"
              >
                {authLoading ? "..." : mode === "register" ? "CRÉER MON COMPTE" : "CONNEXION"}
              </button>
            </form>
          </>
        )}

        {/* Candidature form */}
        {(user || mode === "candidature") && candStatus !== "success" && (
          <>
            <p className="text-sm text-blanc-muted mb-6 text-center">
              Remplis ta candidature. Le comité examine chaque profil.
            </p>

            <form onSubmit={handleCandidature} className="space-y-4">
              <input
                type="text"
                placeholder="Nom d'artiste"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
                required
                className={inputClass}
              />
              <input
                type="email"
                placeholder="Email de contact"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={inputClass}
              />
              <input
                type="number"
                placeholder="Âge (18 ans minimum)"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min="18"
                required
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Ville"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className={inputClass}
              />
              <textarea
                placeholder="Parle-nous de toi en quelques lignes..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={4}
                required
                className={`${inputClass} resize-none`}
              />
              <input
                type="url"
                placeholder="Lien vers ton son (SoundCloud, YouTube...)"
                value={soundLink}
                onChange={(e) => setSoundLink(e.target.value)}
                required
                className={inputClass}
              />

              {candStatus === "error" && (
                <p className="text-xs text-rouge font-mono">Vérifie tes infos (18 ans min).</p>
              )}
              {candStatus === "exists" && (
                <p className="text-xs text-rouge font-mono">Tu as déjà candidaté.</p>
              )}

              <button
                type="submit"
                disabled={candStatus === "loading"}
                className="w-full font-display text-sm font-semibold tracking-[3px] uppercase py-4 bg-rouge text-blanc hover:bg-rouge-hover transition-colors disabled:opacity-40"
              >
                {candStatus === "loading" ? "..." : "ENVOYER MA CANDIDATURE"}
              </button>
            </form>

            <p className="mt-6 text-center text-[0.5rem] text-blanc-muted/30 leading-relaxed font-mono">
              En candidatant, tu confirmes avoir 18 ans ou plus et acceptes nos CGU.
              <br />
              Données traitées conformément au RGPD.
            </p>
          </>
        )}

        {/* Success */}
        {candStatus === "success" && (
          <div className="text-center py-16 border border-rouge/20 bg-rouge/[0.03]">
            <p className="font-display text-2xl uppercase tracking-wide mb-3">
              Candidature envoyée.
            </p>
            <p className="text-sm text-blanc-muted">
              Le comité examine ton profil. On te recontacte par email.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
