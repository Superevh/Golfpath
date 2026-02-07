"use client";

import { stageInfo, knowledgeCards } from "@/lib/data";
import { useApp } from "@/lib/context";
import { useState } from "react";
import KnowledgeCardComponent from "./KnowledgeCard";
import KnowledgeModal from "./KnowledgeModal";
import { KnowledgeCard } from "@/lib/types";

const stageIcons: Record<string, React.ReactNode> = {
  brain: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  target: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
      <circle cx="12" cy="12" r="6" strokeWidth={1.5} />
      <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
    </svg>
  ),
  map: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  users: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

const stages = ["cognition", "action", "course", "social"] as const;

export default function Timeline() {
  const { isQuizPassed } = useApp();
  const [selectedCard, setSelectedCard] = useState<KnowledgeCard | null>(null);

  return (
    <section className="relative mx-auto max-w-4xl px-6 py-12">
      {/* Vertical timeline line */}
      <div className="timeline-line top-0 h-full" />

      {stages.map((stage, stageIndex) => {
        const info = stageInfo[stage];
        const cards = knowledgeCards.filter((c) => c.category === stage);
        const completedCount = cards.filter((c) => isQuizPassed(c.id)).length;

        return (
          <div
            key={stage}
            className="relative mb-16 last:mb-0"
            style={{ animationDelay: `${stageIndex * 150}ms` }}
          >
            {/* Stage marker */}
            <div className="flex items-center justify-center">
              <div
                className={`relative z-10 flex items-center gap-4 rounded-2xl border-2 px-6 py-4 shadow-lg transition-all ${
                  completedCount === cards.length
                    ? "border-gold-400 bg-gold-50"
                    : "border-forest-200 bg-white"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    completedCount === cards.length
                      ? "bg-gold-400 text-forest-500"
                      : "bg-forest-500 text-gold-400"
                  }`}
                >
                  {stageIcons[info.icon]}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-500">
                      Stage {stageIndex + 1}
                    </span>
                    <span className="font-sans text-xs text-forest-300">
                      {completedCount}/{cards.length}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl font-bold text-forest-500">
                    {info.title}
                  </h2>
                  <p className="font-sans text-sm text-forest-300">
                    {info.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-lg text-center font-sans text-sm leading-relaxed text-forest-300">
              {info.description}
            </p>

            {/* Knowledge Cards */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {cards.map((card, cardIndex) => (
                <div
                  key={card.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${(stageIndex * 2 + cardIndex) * 100}ms` }}
                >
                  <KnowledgeCardComponent
                    card={card}
                    onClick={() => setSelectedCard(card)}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Knowledge Modal */}
      {selectedCard && (
        <KnowledgeModal
          card={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </section>
  );
}
