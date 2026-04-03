"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { useAuth } from "@/lib/AuthContext";
import { logoutUser } from "@/lib/auth";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.03] bg-noir/85 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="font-display text-2xl font-bold tracking-[6px] uppercase text-blanc">
          MIRO<span className="text-rouge">I</span>R
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-rouge"
                  : "text-blanc-muted hover:text-blanc"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {user ? (
            <button
              onClick={() => logoutUser()}
              className="text-xs font-mono tracking-wider text-blanc-muted hover:text-rouge transition-colors"
            >
              DÉCONNEXION
            </button>
          ) : (
            <span className="text-xs font-mono tracking-[3px] text-rouge border border-rouge/30 px-3 py-1">
              18+
            </span>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-blanc"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/[0.03] bg-noir/95 backdrop-blur-xl px-6 pb-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm tracking-wide border-b border-white/[0.03] ${
                pathname === link.href
                  ? "text-rouge"
                  : "text-blanc-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {user && (
            <button
              onClick={() => { logoutUser(); setOpen(false); }}
              className="block py-3 text-sm text-blanc-muted"
            >
              Déconnexion
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
