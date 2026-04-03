import { SITE } from "@/lib/constants";

const steps = [
  {
    num: "01",
    title: "CANDIDATURE",
    desc: "Tu remplis ton profil, tu envoies un lien vers ton son (SoundCloud, YouTube...). Pas de piston, pas de réseau. Juste toi et ton micro.",
  },
  {
    num: "02",
    title: "SÉLECTION",
    desc: "Un comité écoute chaque candidature. Si t'es retenu, tu intègres le classement général. Sinon, reviens plus fort au prochain cycle.",
  },
  {
    num: "03",
    title: "CLASSEMENT",
    desc: "La communauté vote. Chaque semaine, le classement évolue. Tu montes ou tu tombes. Pas de place pour le confort.",
  },
  {
    num: "04",
    title: "LIGUE DES CHAMPIONS",
    desc: "Le top 10 du classement accède à la Ligue des Champions. Une compétition dans la compétition. Seuls les meilleurs y restent.",
  },
  {
    num: "05",
    title: "LE TRÔNE",
    desc: "Un seul finaliste. Un gros lot à la clé. Le miroir récompense ceux qui ont tout donné.",
  },
];

export default function ConceptPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-16 px-6 text-center">
        <p className="font-mono text-[0.6rem] tracking-[5px] uppercase text-rouge mb-4">
          // Le concept
        </p>
        <h1 className="font-display text-[clamp(2.5rem,8vw,5rem)] font-bold uppercase tracking-tight leading-[0.9]">
          Pas de raccourci.
          <br />
          <span className="text-rouge">Pas de favoritisme.</span>
        </h1>
        <p className="text-blanc-muted mt-6 max-w-lg mx-auto leading-relaxed">
          {SITE.name} est une plateforme de compétition pour rappeurs amateurs.
          On cherche les prometteurs, pas les populaires. Réservé aux 18 ans et plus.
        </p>
      </section>

      {/* Steps */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`py-10 ${i < steps.length - 1 ? "border-b border-white/[0.04]" : ""}`}
          >
            <div className="flex items-start gap-6">
              <span className="font-display text-5xl font-bold text-rouge/20 leading-none shrink-0">
                {step.num}
              </span>
              <div>
                <h2 className="font-display text-xl tracking-[3px] uppercase mb-2">
                  {step.title}
                </h2>
                <p className="text-blanc-muted text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Slogan */}
      <section className="py-20 px-6 text-center border-t border-white/[0.03]">
        <blockquote className="font-display text-[clamp(1.2rem,4vw,2.5rem)] uppercase tracking-wide leading-tight">
          Ici, c&apos;est pas qui tu connais.
          <br />
          C&apos;est ce que tu <span className="text-rouge">vaux</span>.
        </blockquote>
      </section>
    </>
  );
}
