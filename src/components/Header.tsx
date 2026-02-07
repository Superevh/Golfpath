"use client";

import Link from "next/link";
import { useApp } from "@/lib/context";

export default function Header() {
  const { progress, getCompletionPercentage } = useApp();
  const completion = getCompletionPercentage();

  return (
    <header className="sticky top-0 z-50 border-b border-gold-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full forest-gradient">
            <svg
              className="h-5 w-5 text-gold-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-xl font-bold tracking-tight text-forest-500 transition-colors group-hover:text-forest-400">
              GolfPath Elite
            </h1>
            <div className="flex items-center gap-2">
              <div className="h-1 w-16 overflow-hidden rounded-full bg-forest-50">
                <div
                  className="h-full rounded-full bg-gold-400 transition-all duration-500"
                  style={{ width: `${completion}%` }}
                />
              </div>
              <span className="font-sans text-xs text-forest-300">
                {completion}%
              </span>
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          <div className="hidden items-center gap-1 rounded-full bg-forest-50 px-3 py-1.5 font-sans text-xs text-forest-500 sm:flex">
            <svg className="h-3.5 w-3.5 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z" />
            </svg>
            <span className="font-semibold">{progress.totalBadges}</span>
            <span className="text-forest-300">badges</span>
          </div>

          <Link
            href="/mentor"
            className="group flex items-center gap-2 rounded-full border border-gold-300 bg-gold-50 px-4 py-2 font-sans text-sm font-medium text-forest-500 transition-all hover:border-gold-400 hover:bg-gold-100 hover:shadow-md"
          >
            <svg
              className="h-4 w-4 text-gold-500 transition-transform group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            Study Hub
          </Link>
        </nav>
      </div>
    </header>
  );
}
