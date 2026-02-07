"use client";

import { KnowledgeCard } from "@/lib/types";
import { useApp } from "@/lib/context";

const categoryColors = {
  cognition: "from-blue-500/10 to-indigo-500/10",
  action: "from-emerald-500/10 to-green-500/10",
  course: "from-amber-500/10 to-orange-500/10",
  social: "from-purple-500/10 to-pink-500/10",
};

const categoryLabels = {
  cognition: "Mental Game",
  action: "Technique",
  course: "Course Knowledge",
  social: "Culture & Etiquette",
};

interface KnowledgeCardProps {
  card: KnowledgeCard;
  onClick: () => void;
}

export default function KnowledgeCardComponent({ card, onClick }: KnowledgeCardProps) {
  const { isQuizPassed } = useApp();
  const passed = isQuizPassed(card.id);

  return (
    <button
      onClick={onClick}
      className="magazine-card group w-full text-left"
    >
      {/* Premium magazine-style header stripe */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${categoryColors[card.category]}`} />

      <div className="p-5">
        {/* Category badge + completion */}
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-forest-50 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-forest-400">
            {categoryLabels[card.category]}
          </span>
          {passed && (
            <div className="badge-3d flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-forest-700 animate-badge-pop">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="mb-1 font-serif text-lg font-bold leading-tight text-forest-500 transition-colors group-hover:text-forest-400">
          {card.title}
        </h3>

        {/* Subtitle */}
        <p className="mb-3 font-sans text-sm italic text-forest-300">
          {card.subtitle}
        </p>

        {/* Preview text */}
        <p className="line-clamp-2 font-sans text-sm leading-relaxed text-forest-300/80">
          {card.content}
        </p>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-gold-100 pt-3">
          <span className="font-sans text-xs text-forest-200">
            {card.quiz.length} quiz questions
          </span>
          <span className="flex items-center gap-1 font-sans text-xs font-medium text-gold-500 transition-colors group-hover:text-gold-600">
            Read more
            <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </button>
  );
}
