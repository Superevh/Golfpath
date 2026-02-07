"use client";

import { KnowledgeCard } from "@/lib/types";
import { useApp } from "@/lib/context";
import { useState, useEffect } from "react";
import QuizPanel from "./QuizPanel";

interface KnowledgeModalProps {
  card: KnowledgeCard;
  onClose: () => void;
}

export default function KnowledgeModal({ card, onClose }: KnowledgeModalProps) {
  const { isQuizPassed, markKnowledgeCompleted } = useApp();
  const [showQuiz, setShowQuiz] = useState(false);
  const passed = isQuizPassed(card.id);

  useEffect(() => {
    markKnowledgeCompleted(card.id);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [card.id, markKnowledgeCompleted]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-forest-500/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative max-h-[90vh] w-full max-w-2xl animate-slide-up overflow-y-auto rounded-2xl border border-gold-200 bg-white shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-forest-400 shadow-sm transition-all hover:bg-white hover:text-forest-500 hover:shadow-md"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header image area */}
        <div className="relative h-48 forest-gradient">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="mb-2 inline-block rounded-full bg-gold-400/20 px-4 py-1 font-sans text-xs font-semibold uppercase tracking-widest text-gold-300">
                {card.category}
              </div>
              <h2 className="font-serif text-3xl font-bold text-white">
                {card.title}
              </h2>
              <p className="mt-1 font-sans text-sm italic text-gold-300">
                {card.subtitle}
              </p>
            </div>
          </div>
          {/* Decorative gold line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />
        </div>

        <div className="p-8">
          {/* Article content - magazine style */}
          <div className="mb-8">
            <p className="font-serif text-lg leading-relaxed text-forest-500 first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:text-gold-400">
              {card.content}
            </p>
          </div>

          {/* Key Points */}
          <div className="mb-8 rounded-xl border border-gold-200 bg-gold-50/50 p-6">
            <h3 className="mb-4 flex items-center gap-2 font-serif text-lg font-bold text-forest-500">
              <svg className="h-5 w-5 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Key Insights
            </h3>
            <ul className="space-y-3">
              {card.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-sm text-forest-400">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-500 font-sans text-xs font-bold text-gold-400">
                    {i + 1}
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Quiz Section */}
          {passed ? (
            <div className="flex items-center justify-center gap-3 rounded-xl bg-forest-500 p-6 text-white">
              <div className="badge-3d flex h-12 w-12 items-center justify-center rounded-full">
                <svg className="h-6 w-6 text-forest-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <div>
                <p className="font-serif text-lg font-bold">Badge Earned</p>
                <p className="font-sans text-sm text-gold-300">
                  You&apos;ve mastered this topic with 100% quiz accuracy
                </p>
              </div>
            </div>
          ) : showQuiz ? (
            <QuizPanel card={card} onComplete={() => setShowQuiz(false)} />
          ) : (
            <button
              onClick={() => setShowQuiz(true)}
              className="w-full rounded-xl forest-gradient px-6 py-4 font-sans text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
            >
              Take the Quiz to Earn Your Badge
              <span className="mt-1 block text-xs font-normal text-gold-300">
                100% correct answers required
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
