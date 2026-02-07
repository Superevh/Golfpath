export interface KnowledgeCard {
  id: string;
  title: string;
  subtitle: string;
  category: "cognition" | "action" | "course" | "social";
  content: string;
  keyPoints: string[];
  quiz: QuizQuestion[];
  imageAlt: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface AlphabetEntry {
  letter: string;
  courseName: string;
  location: string;
  completed: boolean;
  badgeEarned: boolean;
}

export interface UserProgress {
  knowledgeCompleted: string[];
  quizzesPassed: string[];
  alphabetCompleted: string[];
  totalBadges: number;
}

export interface MentorAnalysis {
  overallGrade: string;
  strengths: string[];
  areasForGrowth: string[];
  wittyRemark: string;
  recommendation: string;
}
