import Link from "next/link";
import { SITE, LEGAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.03] mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <div className="font-display text-xl tracking-[6px] text-blanc mb-1">
              MIRO<span className="text-rouge">I</span>R
            </div>
            <p className="text-xs text-blanc-muted">{SITE.description}</p>
          </div>

          <div className="flex gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-blanc-muted hover:text-blanc transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/[0.03] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.65rem] font-mono tracking-wider text-blanc-muted/50">
            <a href={SITE.companyUrl} target="_blank" className="hover:text-blanc transition-colors">
              {SITE.company}
            </a>
            {" "}× {SITE.partner} — {SITE.location}
          </p>
          <p className="text-[0.65rem] font-mono tracking-wider text-blanc-muted/50">
            © {SITE.year} {SITE.name}. Tous droits réservés. SIREN {SITE.siren}
          </p>
        </div>
      </div>
    </footer>
  );
}
