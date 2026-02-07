"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/lib/context";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const { progress } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#blueprint", label: "Blueprint" },
    { href: "/alphabet", label: "Alphabet Challenge" },
    { href: "/#courses", label: "Course Mastery" },
    { href: "/mentor", label: "Study Hub" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gold-100 bg-white/98 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-500 font-serif text-base font-bold text-gold-400">
            G
          </div>
          <div className="leading-none">
            <span className="block font-serif text-base font-bold text-forest-500">GolfPath</span>
            <span className="block font-serif text-xs font-semibold text-gold-500">Elite</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href.replace("/#", "/"));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-3.5 py-2 font-sans text-[13px] font-medium transition-all ${
                  isActive
                    ? "bg-forest-500 text-white shadow-sm"
                    : "text-forest-400 hover:bg-forest-50 hover:text-forest-500"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2.5">
          {progress.totalBadges > 0 && (
            <div className="hidden items-center gap-1 rounded-full bg-gold-50 px-2.5 py-1.5 font-sans text-xs sm:flex">
              <svg className="h-3.5 w-3.5 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z" />
              </svg>
              <span className="font-semibold text-gold-600">{progress.totalBadges}</span>
            </div>
          )}

          <Link
            href="/mentor"
            className="flex items-center gap-1.5 rounded-full border border-gold-200 bg-gold-50 px-3.5 py-2 font-sans text-[13px] font-medium text-forest-500 transition-all hover:bg-gold-100 hover:shadow-sm"
          >
            <svg className="h-3.5 w-3.5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Study Hub
            <svg className="h-3 w-3 text-forest-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-forest-400 hover:bg-forest-50 lg:hidden"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <nav className="border-t border-gold-100 bg-white px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-2.5 font-sans text-sm font-medium transition-all ${
                    isActive
                      ? "bg-forest-500 text-white"
                      : "text-forest-400 hover:bg-forest-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
