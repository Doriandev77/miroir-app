import { SITE } from "@/lib/constants";

export default function CguPage() {
  return (
    <section className="pt-24 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="font-mono text-[0.6rem] tracking-[5px] uppercase text-rouge mb-4">
          // Conditions générales
        </p>
        <h1 className="font-display text-3xl font-bold uppercase tracking-tight mb-4">
          Conditions Générales d&apos;Utilisation
        </h1>
        <p className="text-xs text-blanc-muted font-mono mb-12">
          Dernière mise à jour : avril 2026
        </p>

        <div className="space-y-10 text-sm text-blanc-muted leading-relaxed">
          {/* Article 1 */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Article 1 — Objet
            </h2>
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et l&apos;utilisation
              de la plateforme {SITE.name}, accessible à l&apos;adresse {SITE.url}, éditée par {SITE.company}.
              En utilisant le site, vous acceptez sans réserve les présentes CGU.
            </p>
          </div>

          {/* Article 2 */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Article 2 — Description du service
            </h2>
            <p>
              {SITE.name} est une plateforme de compétition destinée aux rappeurs amateurs.
              Elle permet aux utilisateurs de soumettre leur candidature, d&apos;accéder à un classement
              communautaire, de voter pour d&apos;autres artistes, et de participer à une compétition
              dont le format et les récompenses sont définis par l&apos;éditeur.
            </p>
          </div>

          {/* Article 3 */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Article 3 — Conditions d&apos;accès
            </h2>
            <p>
              L&apos;inscription est réservée aux personnes physiques âgées de 18 ans ou plus.
              En créant un compte, l&apos;utilisateur certifie sur l&apos;honneur avoir 18 ans révolus.
              Toute inscription frauduleuse pourra entraîner la suppression immédiate du compte.
            </p>
            <p className="mt-2">
              L&apos;inscription est gratuite. L&apos;éditeur se réserve le droit de modifier les conditions
              d&apos;accès à tout moment.
            </p>
          </div>

          {/* Article 4 */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Article 4 — Candidatures et sélection
            </h2>
            <p>
              Les candidatures sont soumises à un processus de sélection. L&apos;éditeur se réserve
              le droit discrétionnaire d&apos;accepter ou de refuser toute candidature, sans obligation
              de motivation. L&apos;envoi d&apos;une candidature ne garantit pas l&apos;intégration au classement.
            </p>
          </div>

          {/* Article 5 */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Article 5 — Contenu utilisateur
            </h2>
            <p>
              L&apos;utilisateur est seul responsable du contenu qu&apos;il publie ou soumet (textes, liens, sons).
              Il garantit disposer de tous les droits nécessaires sur ce contenu et s&apos;engage à ne diffuser
              aucun contenu illicite, diffamatoire, haineux, discriminatoire, violent ou portant atteinte
              aux droits de tiers.
            </p>
            <p className="mt-2">
              L&apos;éditeur se réserve le droit de supprimer tout contenu jugé inapproprié, sans préavis.
            </p>
          </div>

          {/* Article 6 */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Article 6 — Votes et classement
            </h2>
            <p>
              Le système de votes est communautaire. Chaque utilisateur authentifié peut voter
              pour les artistes de son choix. Toute tentative de manipulation des votes (comptes
              multiples, bots, achat de votes) entraînera la disqualification immédiate et la
              suppression du compte.
            </p>
          </div>

          {/* Article 7 */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Article 7 — Ligue des Champions et récompenses
            </h2>
            <p>
              Les 10 artistes les mieux classés accèdent à la Ligue des Champions.
              Le format de la finale et la nature de la récompense sont définis par l&apos;éditeur
              et communiqués en temps voulu. L&apos;éditeur se réserve le droit de modifier les
              modalités de la compétition.
            </p>
          </div>

          {/* Article 8 */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Article 8 — Propriété intellectuelle
            </h2>
            <p>
              La plateforme {SITE.name}, son code source, son design et sa marque sont la propriété
              exclusive de {SITE.company}. Les contenus soumis par les utilisateurs restent leur
              propriété. En soumettant du contenu, l&apos;utilisateur accorde à {SITE.company} une
              licence non exclusive, gratuite et mondiale pour diffuser ce contenu dans le cadre
              du fonctionnement de la plateforme.
            </p>
          </div>

          {/* Article 9 */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Article 9 — Données personnelles
            </h2>
            <p>
              Les données personnelles sont traitées conformément au RGPD. Pour plus de détails,
              consultez nos <a href="/mentions-legales" className="text-rouge hover:underline">mentions légales</a>.
            </p>
          </div>

          {/* Article 10 */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Article 10 — Responsabilité
            </h2>
            <p>
              {SITE.company} ne garantit pas la disponibilité permanente du service.
              La plateforme est fournie « en l&apos;état ». L&apos;éditeur décline toute responsabilité
              en cas de perte de données, d&apos;interruption de service ou de dommages liés à
              l&apos;utilisation de la plateforme.
            </p>
          </div>

          {/* Article 11 */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Article 11 — Modération et sanctions
            </h2>
            <p>
              L&apos;éditeur se réserve le droit de suspendre ou supprimer tout compte en cas de
              non-respect des présentes CGU, de comportement abusif, de fraude ou de tout acte
              contraire aux lois en vigueur.
            </p>
          </div>

          {/* Article 12 */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Article 12 — Modification des CGU
            </h2>
            <p>
              Les présentes CGU peuvent être modifiées à tout moment. Les utilisateurs seront
              informés de toute modification substantielle. La poursuite de l&apos;utilisation du
              service vaut acceptation des CGU modifiées.
            </p>
          </div>

          {/* Article 13 */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Article 13 — Droit applicable
            </h2>
            <p>
              Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux
              compétents du ressort du siège social de {SITE.company} seront seuls compétents,
              après tentative de résolution amiable.
            </p>
          </div>

          {/* Contact */}
          <div className="border-t border-white/[0.04] pt-8">
            <p>
              Pour toute question relative aux présentes CGU, contactez-nous à :{" "}
              <a href={`mailto:${SITE.email}`} className="text-rouge hover:underline">
                {SITE.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
