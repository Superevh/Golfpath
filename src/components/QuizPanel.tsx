"use client";

import { KnowledgeCard } from "@/lib/types";
import { useApp } from "@/lib/context";
import { useState } from "react";

interface QuizPanelProps {
  card: KnowledgeCard;
  onComplete: () => void;
}

export default function QuizPanel({ card, onComplete }: QuizPanelProps) {
  const { markQuizPassed } = useApp();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const question = card.quiz[currentQuestion];

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers, optionIndex];
    setSelectedAnswers(newAnswers);

    if (currentQuestion < card.quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Check if all answers are correct (100% required)
      const allCorrect = newAnswers.every(
        (answer, idx) => answer === card.quiz[idx].correctIndex
      );
      setIsCorrect(allCorrect);
      setShowResult(true);

      if (allCorrect) {
        markQuizPassed(card.id);
      }
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setIsCorrect(false);
  };

  if (showResult) {
    return (
      <div className="rounded-xl border-2 border-gold-200 bg-white p-6 text-center">
        {isCorrect ? (
          <>
            <div className="mx-auto mb-4 badge-3d flex h-20 w-20 items-center justify-center rounded-full animate-badge-pop">
              <svg className="h-10 w-10 text-forest-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="mb-2 font-serif text-2xl font-bold text-forest-500">
              Perfect Score!
            </h3>
            <p className="mb-4 font-sans text-sm text-forest-300">
              You&apos;ve earned the {card.title} badge. Your knowledge is impeccable.
            </p>
            <button
              onClick={onComplete}
              className="rounded-full bg-forest-500 px-6 py-2 font-sans text-sm font-medium text-white transition-all hover:bg-forest-400"
            >
              Continue
            </button>
          </>
        ) : (
          <>
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <svg className="h-10 w-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="mb-2 font-serif text-2xl font-bold text-forest-500">
              Not Quite
            </h3>
            <p className="mb-4 font-sans text-sm text-forest-300">
              Badge unlocking requires 100% accuracy. Review the material and try again.
            </p>
            <button
              onClick={handleRetry}
              className="rounded-full bg-forest-500 px-6 py-2 font-sans text-sm font-medium text-white transition-all hover:bg-forest-400"
            >
              Try Again
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-xl border-2 border-gold-200 bg-white p-6">
      {/* Progress bar */}
      <div className="mb-6 flex items-center justify-between">
        <span className="font-sans text-xs font-semibold uppercase tracking-wider text-forest-300">
          Question {currentQuestion + 1} of {card.quiz.length}
        </span>
        <div className="flex gap-1.5">
          {card.quiz.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-8 rounded-full transition-all ${
                i < currentQuestion
                  ? "bg-gold-400"
                  : i === currentQuestion
                  ? "bg-forest-500"
                  : "bg-forest-50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <h4 className="mb-6 font-serif text-lg font-bold text-forest-500">
        {question.question}
      </h4>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            className="group w-full rounded-lg border-2 border-forest-100 bg-white p-4 text-left font-sans text-sm text-forest-400 transition-all hover:border-gold-400 hover:bg-gold-50 hover:shadow-md"
          >
            <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-forest-50 font-sans text-xs font-bold text-forest-400 transition-colors group-hover:bg-gold-400 group-hover:text-forest-700">
              {String.fromCharCode(65 + i)}
            </span>
            {option}
          </button>
        ))}
      </div>

      <p className="mt-4 text-center font-sans text-xs text-forest-200">
        100% accuracy required to earn the badge
      </p>
    </div>
  );
}
