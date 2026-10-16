"use client";

import { useState } from "react";

const navLinks = [
  { href: "#story", label: "Story" },
  { href: "#now", label: "Now" },
  { href: "#speaking", label: "Speaking" },
  { href: "#experience", label: "Experience" },
  { href: "#family", label: "Family" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/85 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-black tracking-tight text-white">
          Daniela Kinsella
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:hello@danielakinsella.com"
              className="text-sm font-bold px-4 py-2 rounded-full bg-accent text-ink hover:bg-white transition-colors"
            >
              Book me
            </a>
          </li>
        </ul>

        <button
          className="md:hidden p-2 text-muted hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-ink border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-lg font-bold text-white hover:text-accent transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:hello@danielakinsella.com"
                className="inline-block font-bold px-5 py-2.5 rounded-full bg-accent text-ink"
                onClick={() => setMenuOpen(false)}
              >
                Book me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
