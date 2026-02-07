"use client";

import Timeline from "@/components/Timeline";
import { useApp } from "@/lib/context";

export default function Home() {
  const { getCompletionPercentage } = useApp();
  const completion = getCompletionPercentage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden forest-gradient px-6 py-16 text-center">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-gold-400 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full bg-gold-300 blur-2xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
            The Premier Golf Education Platform
          </p>
          <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
            Master the Game.
            <br />
            <span className="text-gold-400">Elevate Your Knowledge.</span>
          </h1>
          <p className="mx-auto max-w-md font-sans text-sm leading-relaxed text-forest-100">
            A structured journey through the mental, physical, strategic, and
            social dimensions of golf. Four stages. Eight modules. One
            transformative education.
          </p>

          {completion > 0 && (
            <div className="mx-auto mt-6 max-w-xs">
              <div className="flex items-center justify-between font-sans text-xs text-gold-300">
                <span>Your Progress</span>
                <span>{completion}% Complete</span>
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-forest-400">
                <div
                  className="h-full rounded-full bg-gold-400 transition-all duration-700"
                  style={{ width: `${completion}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Bottom gold accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />
      </section>

      {/* Learning Path Timeline */}
      <section className="bg-gradient-to-b from-white to-gold-50/30 pb-16">
        <div className="mx-auto max-w-4xl px-6 pt-12 text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
            Your Learning Path
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-forest-500">
            The Four Stages of Golf Mastery
          </h2>
          <p className="mx-auto mt-2 max-w-lg font-sans text-sm text-forest-300">
            Progress through each stage sequentially. Complete quizzes with 100%
            accuracy to earn badges and unlock your path to mastery.
          </p>
        </div>

        <Timeline />
      </section>
    </div>
  );
}
