export const SITE = {
  name: "MIROIR",
  tagline: "Montre ce que tu vaux.",
  description: "Plateforme de compétition rap amateur. Candidature, sélection, classement. Réservé aux 18+.",
  url: "https://miroir.fstudios.fr",
  company: "FStudios",
  companyUrl: "https://fstudios.fr",
  partner: "I2S",
  siren: "952303832",
  ape: "6201Z",
  email: "doriangosselin6@gmail.com",
  location: "Nord (59), France",
  year: 2026,
} as const;

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Concept", href: "/concept" },
  { label: "Classement", href: "/classement" },
  { label: "Inscription", href: "/inscription" },
  { label: "Contact", href: "/contact" },
] as const;

export const LEGAL_LINKS = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGU", href: "/cgu" },
] as const;
