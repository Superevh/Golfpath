"use client";

import { useApp } from "@/lib/context";
import { knowledgeCards } from "@/lib/data";
import { useState } from "react";

function generateMentorAnalysis(
  quizzesPassed: string[],
  alphabetCompleted: string[],
  totalBadges: number
) {
  const completion = Math.round(
    ((quizzesPassed.length + alphabetCompleted.length) / 34) * 100
  );

  const passedCategories = {
    cognition: knowledgeCards.filter((c) => c.category === "cognition" && quizzesPassed.includes(c.id)).length,
    action: knowledgeCards.filter((c) => c.category === "action" && quizzesPassed.includes(c.id)).length,
    course: knowledgeCards.filter((c) => c.category === "course" && quizzesPassed.includes(c.id)).length,
    social: knowledgeCards.filter((c) => c.category === "social" && quizzesPassed.includes(c.id)).length,
  };

  const strengths: string[] = [];
  const growth: string[] = [];

  if (passedCategories.cognition === 2) strengths.push("Your mental game analysis is Tour-level. You clearly understand that golf begins between the ears.");
  else growth.push("The Cognition stage awaits your attention. Remember: every shot starts as a thought before it becomes a motion.");

  if (passedCategories.action === 2) strengths.push("Biomechanics and short game mastery are in your toolkit. Ben Hogan would approve of your technical dedication.");
  else growth.push("The Action stage needs work. Your swing may be poetry in motion, but the technical knowledge needs refining.");

  if (passedCategories.course === 2) strengths.push("Your course knowledge rivals that of a seasoned caddie. You could walk Augusta blindfolded (though I wouldn't recommend it).");
  else growth.push("Course knowledge is your growth area. Knowing the great courses is like knowing the great paintings: it elevates the entire experience.");

  if (passedCategories.social === 2) strengths.push("You've mastered the social fabric of golf. The 19th hole conversations will be all the richer for it.");
  else growth.push("The Social stage beckons. Golf without etiquette is merely an expensive walk in a park with occasional frustration.");

  if (alphabetCompleted.length >= 20) strengths.push(`${alphabetCompleted.length} letters conquered in the Alphabet Challenge. You're practically a cartographer of golf.`);
  else if (alphabetCompleted.length >= 10) strengths.push(`${alphabetCompleted.length} courses verified. You're building an impressive mental atlas of the golfing world.`);
  else growth.push(`Only ${alphabetCompleted.length} of 26 courses verified. The world's fairways are calling your name.`);

  const wittyRemarks = [
    "I've analyzed your progress with the precision of a laser rangefinder, though I must say, your journey is more interesting than most approach shots.",
    "After careful study of your educational trajectory, I'm reminded that golf mastery, like a fine single malt, simply cannot be rushed.",
    "Your progress report has arrived. I've prepared it with the same care a greenkeeper gives to Augusta's 12th green. You're welcome.",
    "Having reviewed your data with the thoroughness of a Rules Official at The Open, I present my findings below.",
  ];

  const recommendations = [
    completion >= 80
      ? "You're approaching mastery. Focus on perfecting the remaining modules and completing the Alphabet Challenge. The green jacket of knowledge is within reach."
      : completion >= 50
      ? "Solid progress. Prioritize the uncompleted knowledge modules, then tackle the Alphabet Challenge systematically. Rome wasn't built in a day, and neither was Pebble Beach."
      : completion >= 20
      ? "You've made a promising start. I'd recommend working through the knowledge stages sequentially, absorbing each lesson before the quiz. Quality over quantity, as they say at St Andrews."
      : "Every master was once a beginner. Start with the Cognition stage to build your mental foundation. Like your first lesson with a teaching pro, the fundamentals matter most.",
  ];

  let grade: string;
  if (completion >= 90) grade = "Tour Professional";
  else if (completion >= 70) grade = "Scratch Golfer";
  else if (completion >= 50) grade = "Single-Digit Handicap";
  else if (completion >= 25) grade = "Mid-Handicapper";
  else grade = "Promising Beginner";

  return {
    overallGrade: grade,
    strengths: strengths.length > 0 ? strengths : ["You've taken the first step by visiting the Study Hub. That alone shows commendable initiative."],
    areasForGrowth: growth,
    wittyRemark: wittyRemarks[Math.floor(Math.random() * wittyRemarks.length)],
    recommendation: recommendations[0],
    completion,
    totalBadges,
    passedCategories,
    alphabetCount: alphabetCompleted.length,
  };
}

export default function MentorPage() {
  const { progress } = useApp();
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<ReturnType<typeof generateMentorAnalysis> | null>(null);

  const handleAnalyze = () => {
    setAnalyzing(true);
    // Simulate AI processing delay
    setTimeout(() => {
      const result = generateMentorAnalysis(
        progress.quizzesPassed,
        progress.alphabetCompleted,
        progress.totalBadges
      );
      setAnalysis(result);
      setAnalyzing(false);
    }, 2500);
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full forest-gradient shadow-lg">
          <svg className="h-10 w-10 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h1 className="font-serif text-3xl font-bold text-forest-500">
          Study Hub
        </h1>
        <p className="mt-1 font-sans text-sm italic text-forest-300">
          Senior Mentor AI Analysis
        </p>
        <p className="mx-auto mt-3 max-w-md font-sans text-sm leading-relaxed text-forest-300">
          Your personal mentor aggregates all progress data and delivers a
          comprehensive analysis with the sophistication of a Ryder Cup captain
          and the wit of a seasoned club professional.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Badges", value: progress.totalBadges, icon: "trophy" },
          { label: "Quizzes", value: `${progress.quizzesPassed.length}/8`, icon: "quiz" },
          { label: "Courses", value: `${progress.alphabetCompleted.length}/26`, icon: "course" },
          { label: "Topics", value: `${progress.knowledgeCompleted.length}/8`, icon: "book" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-gold-200 bg-white p-4 text-center shadow-sm"
          >
            <p className="font-serif text-2xl font-bold text-forest-500">
              {stat.value}
            </p>
            <p className="font-sans text-xs font-medium uppercase tracking-wider text-forest-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Analyze Button */}
      {!analysis && (
        <button
          onClick={handleAnalyze}
          disabled={analyzing}
          className="mx-auto block w-full max-w-md rounded-xl forest-gradient px-8 py-5 font-sans text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110 disabled:opacity-70"
        >
          {analyzing ? (
            <span className="flex items-center justify-center gap-3">
              <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              The Senior Mentor is reviewing your dossier...
            </span>
          ) : (
            <>
              Request Mentor Analysis
              <span className="mt-1 block text-xs font-normal text-gold-300">
                AI-powered progress evaluation
              </span>
            </>
          )}
        </button>
      )}

      {/* Analysis Results */}
      {analysis && (
        <div className="animate-slide-up space-y-6">
          {/* Mentor quote */}
          <div className="rounded-2xl border-2 border-gold-300 bg-gold-50 p-6 shadow-md">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full forest-gradient">
                <svg className="h-4 w-4 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-2.667l7 6.667-7 6.667v-2.667s-7.981-.891-11 3.667z" />
                </svg>
              </div>
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-forest-400">
                Senior Mentor
              </span>
            </div>
            <p className="font-serif text-base italic leading-relaxed text-forest-500">
              &ldquo;{analysis.wittyRemark}&rdquo;
            </p>
          </div>

          {/* Grade Card */}
          <div className="overflow-hidden rounded-2xl border-2 border-gold-200 bg-white shadow-lg">
            <div className="forest-gradient p-6 text-center">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-300">
                Current Standing
              </p>
              <p className="mt-2 font-serif text-3xl font-bold text-white">
                {analysis.overallGrade}
              </p>
              <div className="mx-auto mt-3 flex items-center justify-center gap-2">
                <div className="h-2 w-32 overflow-hidden rounded-full bg-forest-400">
                  <div
                    className="h-full rounded-full bg-gold-400 transition-all duration-1000"
                    style={{ width: `${analysis.completion}%` }}
                  />
                </div>
                <span className="font-sans text-sm font-medium text-gold-300">
                  {analysis.completion}%
                </span>
              </div>
            </div>

            <div className="p-6">
              {/* Category Breakdown */}
              <h3 className="mb-4 font-serif text-lg font-bold text-forest-500">
                Category Breakdown
              </h3>
              <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {(["cognition", "action", "course", "social"] as const).map((cat) => (
                  <div key={cat} className="text-center">
                    <div
                      className={`mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full ${
                        analysis.passedCategories[cat] === 2
                          ? "bg-gold-400 text-forest-700"
                          : analysis.passedCategories[cat] === 1
                          ? "bg-gold-100 text-gold-600"
                          : "bg-forest-50 text-forest-300"
                      }`}
                    >
                      <span className="font-serif text-lg font-bold">
                        {analysis.passedCategories[cat]}/2
                      </span>
                    </div>
                    <p className="font-sans text-xs font-medium capitalize text-forest-400">
                      {cat}
                    </p>
                  </div>
                ))}
              </div>

              {/* Strengths */}
              {analysis.strengths.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 flex items-center gap-2 font-serif text-base font-bold text-forest-500">
                    <svg className="h-5 w-5 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    Strengths
                  </h3>
                  <ul className="space-y-2">
                    {analysis.strengths.map((s, i) => (
                      <li key={i} className="rounded-lg bg-green-50 p-3 font-sans text-sm text-green-800">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Areas for Growth */}
              {analysis.areasForGrowth.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 flex items-center gap-2 font-serif text-base font-bold text-forest-500">
                    <svg className="h-5 w-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Areas for Growth
                  </h3>
                  <ul className="space-y-2">
                    {analysis.areasForGrowth.map((g, i) => (
                      <li key={i} className="rounded-lg bg-amber-50 p-3 font-sans text-sm text-amber-800">
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Recommendation */}
              <div className="rounded-xl border-2 border-forest-100 bg-forest-50 p-5">
                <h3 className="mb-2 font-serif text-base font-bold text-forest-500">
                  Mentor&apos;s Recommendation
                </h3>
                <p className="font-sans text-sm leading-relaxed text-forest-400">
                  {analysis.recommendation}
                </p>
              </div>
            </div>
          </div>

          {/* Re-analyze */}
          <button
            onClick={() => {
              setAnalysis(null);
              handleAnalyze();
            }}
            className="mx-auto block rounded-full border-2 border-forest-200 bg-white px-6 py-3 font-sans text-sm font-medium text-forest-400 transition-all hover:border-gold-400 hover:bg-gold-50 hover:text-forest-500"
          >
            Refresh Analysis
          </button>
        </div>
      )}
    </div>
  );
}
