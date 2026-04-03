import { SITE } from "@/lib/constants";

export default function MentionsLegalesPage() {
  return (
    <section className="pt-24 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="font-mono text-[0.6rem] tracking-[5px] uppercase text-rouge mb-4">
          // Informations légales
        </p>
        <h1 className="font-display text-3xl font-bold uppercase tracking-tight mb-12">
          Mentions légales
        </h1>

        <div className="space-y-10 text-sm text-blanc-muted leading-relaxed">
          {/* Éditeur */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Éditeur du site
            </h2>
            <p>
              Le site {SITE.name} ({SITE.url}) est édité par :
            </p>
            <ul className="mt-2 space-y-1">
              <li><strong className="text-blanc">Raison sociale :</strong> {SITE.company} — Micro-entreprise (EI)</li>
              <li><strong className="text-blanc">SIREN :</strong> {SITE.siren}</li>
              <li><strong className="text-blanc">Code APE :</strong> {SITE.ape} — Programmation informatique</li>
              <li><strong className="text-blanc">Siège social :</strong> {SITE.location}</li>
              <li><strong className="text-blanc">Responsable de publication :</strong> Dorian Gosselin</li>
              <li><strong className="text-blanc">Email :</strong> {SITE.email}</li>
            </ul>
          </div>

          {/* Hébergeur */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Hébergement
            </h2>
            <p>
              Le site est hébergé par Vercel Inc., 440 N Bayard St #201, Wilmington, DE 19801, États-Unis.
              Les données sont stockées sur Google Firebase (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, États-Unis),
              avec des serveurs situés dans la région europe-west1 (Belgique).
            </p>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu du site {SITE.name} (textes, graphismes, logo, code source, structure)
              est la propriété exclusive de {SITE.company}, sauf mention contraire.
              Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable,
              est interdite et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>
          </div>

          {/* Données personnelles */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Données personnelles & RGPD
            </h2>
            <p>
              Les données collectées sur le site (email, nom, âge, ville) sont traitées par {SITE.company}
              en qualité de responsable de traitement, aux fins de gestion de la plateforme {SITE.name}.
            </p>
            <p className="mt-2">
              Base légale : consentement de l&apos;utilisateur (article 6.1.a du RGPD).
            </p>
            <p className="mt-2">
              Durée de conservation : les données sont conservées pendant toute la durée d&apos;utilisation du service,
              puis supprimées dans un délai de 12 mois après la dernière activité.
            </p>
            <p className="mt-2">
              Conformément au Règlement (UE) 2016/679, vous disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement, de limitation, de portabilité et d&apos;opposition au traitement de vos données.
              Pour exercer ces droits, contactez-nous à : <strong className="text-blanc">{SITE.email}</strong>.
            </p>
            <p className="mt-2">
              Vous avez également le droit d&apos;introduire une réclamation auprès de la CNIL (www.cnil.fr).
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Cookies
            </h2>
            <p>
              Le site utilise uniquement des cookies techniques strictement nécessaires au fonctionnement
              de l&apos;authentification et de la session utilisateur. Aucun cookie publicitaire ou de traçage n&apos;est déposé.
            </p>
          </div>

          {/* Limitation de responsabilité */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Limitation de responsabilité
            </h2>
            <p>
              {SITE.company} s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur le site,
              mais ne saurait être tenue responsable des erreurs, omissions ou résultats découlant de l&apos;utilisation
              de ces informations. L&apos;accès au site peut être interrompu à tout moment pour maintenance.
            </p>
          </div>

          {/* Âge minimum */}
          <div>
            <h2 className="font-display text-lg uppercase tracking-wider text-blanc mb-3">
              Condition d&apos;âge
            </h2>
            <p>
              L&apos;inscription et l&apos;utilisation de la plateforme {SITE.name} sont réservées aux personnes
              âgées de 18 ans et plus. En s&apos;inscrivant, l&apos;utilisateur déclare sur l&apos;honneur avoir
              atteint cet âge minimum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
