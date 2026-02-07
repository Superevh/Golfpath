"use client";

import Timeline from "@/components/Timeline";
import Link from "next/link";
import { useApp } from "@/lib/context";

export default function Home() {
  const { getCompletionPercentage } = useApp();
  const completion = getCompletionPercentage();

  return (
    <div>
      {/* Hero Section — split layout */}
      <section className="relative overflow-hidden bg-[#faf9f4]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
          {/* Left: Text content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold-200 bg-white px-4 py-2 shadow-sm">
              <svg className="h-4 w-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span className="font-sans text-sm font-medium text-forest-500">Premium Golf Education</span>
            </div>

            <h1 className="mb-5 font-serif text-4xl font-bold leading-[1.1] text-forest-500 sm:text-5xl lg:text-6xl">
              Master the Art of{" "}
              <span className="text-gold-400">Excellence</span>
            </h1>

            <p className="mb-8 max-w-lg font-sans text-base leading-relaxed text-forest-300">
              A curated learning pathway designed for those who appreciate the
              finer details of golf. From mental mastery to social grace.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#blueprint"
                className="inline-flex items-center gap-2 rounded-full bg-forest-500 px-6 py-3 font-sans text-sm font-semibold text-white shadow-md transition-all hover:bg-forest-400 hover:shadow-lg"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
                Begin Your Journey
              </Link>
              <Link
                href="#courses"
                className="inline-flex items-center gap-2 rounded-full border-2 border-forest-200 bg-white px-6 py-3 font-sans text-sm font-semibold text-forest-500 transition-all hover:border-gold-400 hover:bg-gold-50"
              >
                <svg className="h-4 w-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
                  <circle cx="12" cy="12" r="3" strokeWidth={1.8} />
                </svg>
                Course Mastery
              </Link>
            </div>

            {completion > 0 && (
              <div className="mt-8 max-w-xs">
                <div className="flex items-center justify-between font-sans text-xs text-forest-300">
                  <span>Your Progress</span>
                  <span className="font-medium text-forest-500">{completion}%</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-forest-100">
                  <div
                    className="h-full rounded-full bg-gold-400 transition-all duration-700"
                    style={{ width: `${completion}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right: Visual card with golf imagery */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
              {/* Golf course gradient placeholder */}
              <div className="relative h-64 overflow-hidden sm:h-72">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-500 to-emerald-400" />
                {/* Decorative golf elements */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-800/40 to-transparent" />
                  <div className="absolute right-12 top-16 h-20 w-20 rounded-full border-4 border-white/40" />
                  <div className="absolute right-16 top-20 h-12 w-12 rounded-full border-4 border-white/30" />
                  <div className="absolute right-[4.5rem] top-[5.5rem] h-3 w-3 rounded-full bg-white/80" />
                </div>
                {/* Flag */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                  <div className="h-32 w-0.5 bg-white/70" />
                  <div className="absolute left-0.5 top-0 h-6 w-10 bg-red-500/80" style={{ clipPath: "polygon(0 0, 100% 25%, 0 50%)" }} />
                </div>
                {/* Subtle overlay text */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-serif text-sm font-semibold text-white/80">The journey to mastery begins here</p>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 divide-x divide-gold-100 border-t border-gold-100">
                <div className="px-4 py-5 text-center">
                  <p className="font-serif text-2xl font-bold text-forest-500">4</p>
                  <p className="font-sans text-[11px] font-medium text-forest-300">Learning Stages</p>
                </div>
                <div className="px-4 py-5 text-center">
                  <p className="font-serif text-2xl font-bold text-gold-500">26</p>
                  <p className="font-sans text-[11px] font-medium text-forest-300">Badges to Earn</p>
                </div>
                <div className="px-4 py-5 text-center">
                  <p className="font-serif text-2xl font-bold text-forest-500">&infin;</p>
                  <p className="font-sans text-[11px] font-medium text-forest-300">Growth Potential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Timeline */}
      <section id="blueprint" className="bg-gradient-to-b from-white to-[#faf9f4] pb-16">
        <div className="mx-auto max-w-4xl px-6 pt-16 text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
            Your Learning Path
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-forest-500">
            The Four Stages of Golf Mastery
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-sans text-sm leading-relaxed text-forest-300">
            Progress through each stage sequentially. Complete quizzes with 100%
            accuracy to earn badges and unlock your path to mastery.
          </p>
        </div>

        <Timeline />
      </section>
    </div>
  );
}
