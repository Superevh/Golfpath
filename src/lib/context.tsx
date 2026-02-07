"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { UserProgress, AlphabetEntry } from "./types";
import { defaultAlphabetEntries } from "./data";

interface AppContextType {
  progress: UserProgress;
  alphabetEntries: AlphabetEntry[];
  markKnowledgeCompleted: (cardId: string) => void;
  markQuizPassed: (cardId: string) => void;
  markAlphabetCompleted: (letter: string, courseName: string, location: string) => void;
  isQuizPassed: (cardId: string) => boolean;
  getCompletionPercentage: () => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>({
    knowledgeCompleted: [],
    quizzesPassed: [],
    alphabetCompleted: [],
    totalBadges: 0,
  });

  const [alphabetEntries, setAlphabetEntries] = useState<AlphabetEntry[]>(defaultAlphabetEntries);

  const markKnowledgeCompleted = useCallback((cardId: string) => {
    setProgress((prev) => {
      if (prev.knowledgeCompleted.includes(cardId)) return prev;
      return {
        ...prev,
        knowledgeCompleted: [...prev.knowledgeCompleted, cardId],
      };
    });
  }, []);

  const markQuizPassed = useCallback((cardId: string) => {
    setProgress((prev) => {
      if (prev.quizzesPassed.includes(cardId)) return prev;
      return {
        ...prev,
        quizzesPassed: [...prev.quizzesPassed, cardId],
        totalBadges: prev.totalBadges + 1,
      };
    });
  }, []);

  const markAlphabetCompleted = useCallback((letter: string, courseName: string, location: string) => {
    setAlphabetEntries((prev) =>
      prev.map((entry) =>
        entry.letter === letter
          ? { ...entry, courseName, location, completed: true, badgeEarned: true }
          : entry
      )
    );
    setProgress((prev) => {
      if (prev.alphabetCompleted.includes(letter)) return prev;
      return {
        ...prev,
        alphabetCompleted: [...prev.alphabetCompleted, letter],
        totalBadges: prev.totalBadges + 1,
      };
    });
  }, []);

  const isQuizPassed = useCallback(
    (cardId: string) => progress.quizzesPassed.includes(cardId),
    [progress.quizzesPassed]
  );

  const getCompletionPercentage = useCallback(() => {
    const totalItems = 8 + 26; // 8 knowledge cards + 26 alphabet entries
    const completed = progress.quizzesPassed.length + progress.alphabetCompleted.length;
    return Math.round((completed / totalItems) * 100);
  }, [progress.quizzesPassed.length, progress.alphabetCompleted.length]);

  return (
    <AppContext.Provider
      value={{
        progress,
        alphabetEntries,
        markKnowledgeCompleted,
        markQuizPassed,
        markAlphabetCompleted,
        isQuizPassed,
        getCompletionPercentage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
