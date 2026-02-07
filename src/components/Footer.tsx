"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/",
      label: "Blueprint",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      href: "/alphabet",
      label: "Alphabet Challenge",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 2l3 4 3-4" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="sticky bottom-0 z-50 border-t border-gold-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6">
        <nav className="flex items-center justify-around py-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 rounded-lg px-4 py-2 font-sans text-xs font-medium transition-all ${
                  isActive
                    ? "text-forest-500"
                    : "text-forest-200 hover:text-forest-400"
                }`}
              >
                <div
                  className={`rounded-full p-2 transition-all ${
                    isActive
                      ? "bg-gold-100 text-gold-600"
                      : "text-current"
                  }`}
                >
                  {item.icon}
                </div>
                <span>{item.label}</span>
                {isActive && (
                  <div className="h-0.5 w-6 rounded-full bg-gold-400" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
