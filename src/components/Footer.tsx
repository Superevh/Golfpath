"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gold-100 bg-forest-500">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-400 font-serif text-sm font-bold text-forest-700">
              G
            </div>
            <span className="font-serif text-base font-bold text-white">GolfPath Elite</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <Link href="/" className="font-sans text-sm text-forest-100 transition-colors hover:text-gold-400">
              Blueprint
            </Link>
            <Link href="/alphabet" className="font-sans text-sm text-forest-100 transition-colors hover:text-gold-400">
              Alphabet Challenge
            </Link>
            <Link href="/mentor" className="font-sans text-sm text-forest-100 transition-colors hover:text-gold-400">
              Study Hub
            </Link>
          </nav>

          {/* Tagline */}
          <p className="font-sans text-xs text-forest-200">
            Premium Golf Education
          </p>
        </div>
      </div>
    </footer>
  );
}
