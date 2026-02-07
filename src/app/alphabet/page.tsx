"use client";

import { useState } from "react";
import { useApp } from "@/lib/context";
import { alphabetCourseHints } from "@/lib/data";

export default function AlphabetChallenge() {
  const { alphabetEntries, markAlphabetCompleted } = useApp();
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [formData, setFormData] = useState({ location: "", imageFile: "" });
  const [verifying, setVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<"success" | "fail" | null>(null);
  const [showBadgeAnimation, setShowBadgeAnimation] = useState(false);

  const completedCount = alphabetEntries.filter((e) => e.completed).length;

  const handleVerify = () => {
    if (!selectedLetter) return;

    setVerifying(true);
    setVerificationResult(null);

    // Mock verification: check if location matches the hint
    const hint = alphabetCourseHints[selectedLetter];
    const locationLower = formData.location.toLowerCase().trim();
    const hintLocationLower = hint.location.toLowerCase();

    setTimeout(() => {
      setVerifying(false);

      // Flexible match: check if user's input contains key parts of the expected location
      const locationParts = hintLocationLower.split(",").map((p) => p.trim());
      const matches = locationParts.some((part) => locationLower.includes(part));

      if (matches || locationLower === hintLocationLower) {
        setVerificationResult("success");
        markAlphabetCompleted(selectedLetter, hint.name, hint.location);
        setShowBadgeAnimation(true);
        setTimeout(() => setShowBadgeAnimation(false), 2000);
      } else {
        setVerificationResult("fail");
      }
    }, 1500);
  };

  const selectedEntry = selectedLetter
    ? alphabetEntries.find((e) => e.letter === selectedLetter)
    : null;

  return (
    <div className="mx-auto max-w-4xl px-6 py-8">
      {/* Page header */}
      <div className="mb-8 text-center">
        <h1 className="font-serif text-3xl font-bold text-forest-500">
          The Alphabet Challenge
        </h1>
        <p className="mt-2 font-sans text-sm text-forest-300">
          Complete your A-Z journey through the world&apos;s greatest golf courses.
          Verify each course to earn its badge.
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <div className="h-2 w-48 overflow-hidden rounded-full bg-forest-50">
            <div
              className="h-full rounded-full bg-gold-400 transition-all duration-700"
              style={{ width: `${(completedCount / 26) * 100}%` }}
            />
          </div>
          <span className="font-sans text-sm font-semibold text-forest-400">
            {completedCount}/26
          </span>
        </div>
      </div>

      {/* Alphabet Grid */}
      <div className="grid grid-cols-6 gap-3 sm:grid-cols-9 md:grid-cols-13">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => {
          const entry = alphabetEntries.find((e) => e.letter === letter);
          const isCompleted = entry?.completed;
          const isSelected = selectedLetter === letter;

          return (
            <button
              key={letter}
              onClick={() => {
                setSelectedLetter(letter);
                setVerificationResult(null);
                setFormData({ location: "", imageFile: "" });
              }}
              className={`relative flex h-14 w-14 items-center justify-center rounded-xl font-serif text-xl font-bold transition-all ${
                isCompleted
                  ? "badge-3d text-forest-700 shadow-lg"
                  : isSelected
                  ? "border-2 border-gold-400 bg-gold-50 text-forest-500 shadow-md"
                  : "border-2 border-forest-100 bg-white text-forest-300 hover:border-gold-300 hover:bg-gold-50 hover:text-forest-500 hover:shadow-sm"
              }`}
            >
              {letter}
              {isCompleted && (
                <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-forest-500">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Verification Panel */}
      {selectedLetter && (
        <div className="mt-8 animate-slide-up rounded-2xl border-2 border-gold-200 bg-white p-8 shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-500">
                Course Verification
              </span>
              <h2 className="mt-1 font-serif text-2xl font-bold text-forest-500">
                Letter {selectedLetter}: {alphabetCourseHints[selectedLetter].name}
              </h2>
              <p className="mt-1 font-sans text-sm text-forest-300">
                Hint: This famous course is located in{" "}
                <span className="font-medium text-forest-400">
                  {alphabetCourseHints[selectedLetter].location}
                </span>
              </p>
            </div>
            <button
              onClick={() => setSelectedLetter(null)}
              className="rounded-full p-2 text-forest-300 transition-colors hover:bg-forest-50 hover:text-forest-500"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {selectedEntry?.completed ? (
            <div className="mt-6 flex items-center gap-4 rounded-xl bg-forest-500 p-6">
              <div className={`badge-3d flex h-16 w-16 items-center justify-center rounded-full ${showBadgeAnimation ? "animate-badge-pop" : ""}`}>
                <span className="font-serif text-2xl font-bold text-forest-700">{selectedLetter}</span>
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-white">Verified & Completed</p>
                <p className="font-sans text-sm text-gold-300">
                  {selectedEntry.courseName} - {selectedEntry.location}
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {/* Location input */}
              <div>
                <label className="mb-1.5 block font-sans text-sm font-medium text-forest-400">
                  Enter Course Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g., Augusta, Georgia"
                  className="w-full rounded-lg border-2 border-forest-100 bg-white px-4 py-3 font-sans text-sm text-forest-500 placeholder:text-forest-200 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-100"
                />
              </div>

              {/* Image upload (mock) */}
              <div>
                <label className="mb-1.5 block font-sans text-sm font-medium text-forest-400">
                  Upload Course Photo (Optional)
                </label>
                <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-forest-100 bg-forest-50/50 p-8 transition-colors hover:border-gold-300">
                  <div className="text-center">
                    <svg className="mx-auto h-8 w-8 text-forest-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="mt-2 font-sans text-xs text-forest-300">
                      Drag & drop or click to upload
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) setFormData({ ...formData, imageFile: file.name });
                      }}
                    />
                    <button
                      onClick={() => setFormData({ ...formData, imageFile: "course_photo.jpg" })}
                      className="mt-2 rounded-full bg-forest-100 px-4 py-1.5 font-sans text-xs font-medium text-forest-400 transition-colors hover:bg-forest-200"
                    >
                      Select File
                    </button>
                    {formData.imageFile && (
                      <p className="mt-2 font-sans text-xs text-gold-500">
                        Selected: {formData.imageFile}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Verify button */}
              <button
                onClick={handleVerify}
                disabled={!formData.location || verifying}
                className="w-full rounded-xl forest-gradient px-6 py-4 font-sans text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {verifying ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Verifying Location...
                  </span>
                ) : (
                  "Verify & Complete"
                )}
              </button>

              {/* Verification result */}
              {verificationResult === "fail" && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center">
                  <p className="font-sans text-sm font-medium text-red-600">
                    Location doesn&apos;t match. Check the hint and try again.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
