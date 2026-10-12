export type TopicId = 
  | 'topic-1-svo-train'
  | 'topic-2-object-complement'
  | 'topic-3-double-object'
  | 'topic-4-prefixes'
  | 'topic-5-suffixes-masks'
  | 'topic-6-three-sec-parts-of-speech';

export interface Question {
  id: number;
  topicId: TopicId;
  topicTitle: string;
  topicNumber: number;
  questionNumber: number;
  volume?: 1 | 2;
  ipa?: string;
  translation?: string;
  correctIpa?: string;
  correctTranslation?: string;
  prompt: string;
  sentence: string; // The original or highlighted sentence
  targetElement?: string; // e.g. "[ a famous singer ]" or word in parens like "(LEGAL)"
  type: 'train_derail' | 'object_vs_complement' | 'double_object' | 'fill_prefix' | 'fill_suffix' | 'mcq_parts_of_speech';
  
  // Topic 1 specifics
  isDerailed?: boolean;
  correctSentence?: string;
  derailReason?: string;
  trainCarriages?: {
    s: string;
    v: string;
    o: string;
    adv?: string;
    correctedS?: string;
    correctedV?: string;
    correctedO?: string;
    correctedAdv?: string;
  };
  
  // Topic 2 specifics (O vs C)
  ocType?: 'O' | 'C';
  ocFormula?: string; // e.g. "She = a famous singer (S = C)" or "She ≠ a famous singer (S ≠ O)"
  ocSubject?: string;
  ocTarget?: string;
  
  // Topic 3 specifics (Double Object)
  oDir?: string;
  oInd?: string;
  doubleObjectNote?: string;

  // Topic 4 & 5 specifics
  baseWord?: string;
  prefix?: string;
  correctWord?: string;
  affixBreakdown?: string; // e.g. "il- + legal" or "-ful / -less"
  meaning?: string;
  spellingRule?: string;

  // Topic 6 specifics (MCQ)
  options?: {
    label: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctOption?: 'A' | 'B' | 'C' | 'D';
  targetPosNeeded?: string; // e.g. "Danh từ (N)"
  suffixHint?: string; // e.g. "đuôi -tion"
  threeSecAlgorithm?: string; // Step 1, 2, 3 breakdown

  // Explanation
  detailedExplanation: string;
  memoryHook: string; // Quick memorable mental model trick
}

export interface UserAnswerRecord {
  questionId: number;
  answeredAt: string;
  isCorrect: boolean;
  userSelection: string;
  timeTakenSec: number;
}

export interface UserStats {
  streakDays: number;
  lastActiveDate: string;
  totalAnswered: number;
  totalCorrect: number;
  completedQuestionIds: number[];
  bookmarkedQuestionIds: number[];
  history: UserAnswerRecord[];
}
