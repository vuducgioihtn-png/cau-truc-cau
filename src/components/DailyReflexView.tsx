import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  Flame, 
  RotateCcw, 
  CheckCircle2, 
  Trophy, 
  Target,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Question, UserStats } from '../types';
import { sound } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

interface DailyReflexViewProps {
  questions: Question[];
  userStats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  onGoToFullPractice: () => void;
}

export const DailyReflexView: React.FC<DailyReflexViewProps> = ({
  questions,
  userStats,
  onUpdateStats,
  onGoToFullPractice
}) => {
  // 10 random or structured reflex questions for the day
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(5.0); // 5 seconds per question for reflex
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const [combo, setCombo] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [sessionFinished, setSessionFinished] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize daily session
  const startNewSession = () => {
    // Pick 10 diverse questions across all 6 topics
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    setSessionQuestions(selected);
    setCurrentIdx(0);
    setCombo(0);
    setCorrectCount(0);
    setSessionFinished(false);
    setSelectedAnswer(null);
    setIsAnswerRevealed(false);
    setTimeLeft(5.0);
    setIsTimerActive(true);
    sound.playClick();
  };

  useEffect(() => {
    startNewSession();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Timer tick
  useEffect(() => {
    if (!isTimerActive || isAnswerRevealed || sessionFinished) return;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0.1) {
          handleTimeOut();
          return 0;
        }
        return Number((prev - 0.1).toFixed(1));
      });
    }, 100);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerActive, isAnswerRevealed, sessionFinished, currentIdx]);

  const handleTimeOut = () => {
    if (isAnswerRevealed) return;
    setIsTimerActive(false);
    setIsAnswerRevealed(true);
    setIsCorrect(false);
    setCombo(0);
    sound.playIncorrect();
  };

  const currentQ = sessionQuestions[currentIdx];

  const handleAnswer = (ans: string) => {
    if (isAnswerRevealed || !currentQ) return;
    setIsTimerActive(false);
    setSelectedAnswer(ans);
    setIsAnswerRevealed(true);

    let right = false;
    if (currentQ.type === 'train_derail') {
      right = (ans === 'derailed') === currentQ.isDerailed;
    } else if (currentQ.type === 'object_vs_complement') {
      right = ans === currentQ.ocType;
    } else if (currentQ.type === 'mcq_parts_of_speech') {
      right = ans === currentQ.correctOption;
    } else if (currentQ.type === 'fill_prefix' || currentQ.type === 'fill_suffix') {
      right = ans.toLowerCase().trim() === currentQ.correctWord?.toLowerCase().trim();
    } else {
      right = true;
    }

    setIsCorrect(right);

    if (right) {
      sound.playCorrect();
      setCorrectCount(c => c + 1);
      setCombo(c => c + 1);
      confetti({
        particleCount: 25,
        spread: 50,
        origin: { y: 0.7 }
      });
    } else {
      sound.playIncorrect();
      setCombo(0);
    }
  };

  const handleNextQuestion = () => {
    sound.playClick();
    if (currentIdx < sessionQuestions.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerRevealed(false);
      setTimeLeft(5.0);
      setIsTimerActive(true);
    } else {
      finishSession();
    }
  };

  const finishSession = () => {
    setSessionFinished(true);
    sound.playCorrect();
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.5 }
    });

    // Update streak if today is a new active day
    const todayStr = new Date().toISOString().split('T')[0];
    const isConsecutive = userStats.lastActiveDate !== todayStr;
    const newStreak = isConsecutive ? userStats.streakDays + 1 : userStats.streakDays;

    onUpdateStats({
      ...userStats,
      streakDays: newStreak,
      lastActiveDate: todayStr,
      totalAnswered: userStats.totalAnswered + sessionQuestions.length,
      totalCorrect: userStats.totalCorrect + correctCount
    });
  };

  // Render Session Finished Screen
  if (sessionFinished) {
    const accuracy = Math.round((correctCount / sessionQuestions.length) * 100);

    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.15),transparent_70%)] pointer-events-none" />
          
          <div className="w-16 h-16 rounded-2xl bg-teal-400/20 border border-teal-400/40 text-teal-300 flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8" />
          </div>

          <h2 className="text-2xl font-bold text-white font-display mb-1">
            Hoàn Thành Bài Phản Xạ Hôm Nay!
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            Não bộ của bạn đã được kích hoạt phản xạ ngữ pháp tự nhiên.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-xs text-slate-400 font-mono block mb-1">Điểm đúng</span>
              <div className="text-2xl font-black text-teal-400 font-display">
                {correctCount} / 10
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-xs text-slate-400 font-mono block mb-1">Độ chuẩn xác</span>
              <div className="text-2xl font-black text-indigo-400 font-display">
                {accuracy}%
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-xs text-slate-400 font-mono block mb-1">Chuỗi ngày 🔥</span>
              <div className="text-2xl font-black text-amber-400 font-display">
                {userStats.streakDays}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={startNewSession}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Luyện Thêm 1 Vòng Nữa</span>
            </button>
            <button
              onClick={onGoToFullPractice}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all cursor-pointer"
            >
              Xem Chi Tiết 100 Câu Hỏi
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQ) return null;

  const timerPercentage = Math.max(0, (timeLeft / 5.0) * 100);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Session Top HUD */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-teal-400 block font-semibold">
            Chế độ phản xạ siêu tốc · 5 Giây / Câu
          </span>
          <h2 className="text-xl font-bold text-white font-display mt-0.5">
            Câu {currentIdx + 1} / {sessionQuestions.length}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          {combo > 1 && (
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold animate-pulse font-mono">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>COMBO x{combo}</span>
            </div>
          )}

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono font-semibold">
            <Target className="w-3.5 h-3.5 text-teal-400" />
            <span>ĐÚNG: {correctCount}</span>
          </div>
        </div>
      </div>

      {/* Shrinking Timer Bar */}
      <div className="w-full h-2 rounded-full bg-slate-800 mb-6 overflow-hidden relative">
        <div 
          className={`h-full transition-all duration-100 ease-linear rounded-full ${
            timeLeft > 2.5 
              ? 'bg-teal-400' 
              : timeLeft > 1.2 
                ? 'bg-amber-400' 
                : 'bg-rose-500'
          }`}
          style={{ width: `${timerPercentage}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
        
        {/* Timer floating badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono">
            {currentQ.topicTitle}
          </span>
          <div className={`text-base font-black font-mono flex items-center gap-1 ${
            timeLeft > 2.5 ? 'text-teal-400' : 'text-rose-400'
          }`}>
            <Zap className="w-4 h-4" />
            <span>{timeLeft.toFixed(1)}s</span>
          </div>
        </div>

        {/* Prompt */}
        <p className="text-sm text-slate-300 mb-4">
          {currentQ.prompt}
        </p>

        {/* English Sentence */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 mb-6">
          <div className="text-xl sm:text-2xl font-bold text-white font-display leading-relaxed">
            {currentQ.sentence}
          </div>
        </div>

        {/* Fast Action Buttons */}
        <div className="space-y-3">
          {/* Topic 1: Train nominal vs derail */}
          {currentQ.type === 'train_derail' && (
            <div className="grid grid-cols-2 gap-3">
              <button
                disabled={isAnswerRevealed}
                onClick={() => handleAnswer('nominal')}
                className="py-4 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-emerald-500 text-emerald-300 font-bold text-sm cursor-pointer transition-all"
              >
                TÀU CHUẨN S-V-O
              </button>
              <button
                disabled={isAnswerRevealed}
                onClick={() => handleAnswer('derailed')}
                className="py-4 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-rose-500 text-rose-300 font-bold text-sm cursor-pointer transition-all"
              >
                CÂU TRẬT BÁNH!
              </button>
            </div>
          )}

          {/* Topic 2: Object vs Complement */}
          {currentQ.type === 'object_vs_complement' && (
            <div className="grid grid-cols-2 gap-3">
              <button
                disabled={isAnswerRevealed}
                onClick={() => handleAnswer('O')}
                className="py-4 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-indigo-500 text-indigo-300 font-bold text-sm cursor-pointer transition-all"
              >
                TÂN NGỮ (O) · S ≠ O
              </button>
              <button
                disabled={isAnswerRevealed}
                onClick={() => handleAnswer('C')}
                className="py-4 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-amber-500 text-amber-300 font-bold text-sm cursor-pointer transition-all"
              >
                BỔ NGỮ (C) · S = C
              </button>
            </div>
          )}

          {/* Topic 6: MCQ Parts of speech */}
          {currentQ.type === 'mcq_parts_of_speech' && currentQ.options && (
            <div className="grid grid-cols-2 gap-2.5">
              {currentQ.options.map(opt => (
                <button
                  key={opt.label}
                  disabled={isAnswerRevealed}
                  onClick={() => handleAnswer(opt.label)}
                  className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-purple-500 text-slate-100 font-semibold text-sm flex items-center gap-2 cursor-pointer transition-all"
                >
                  <span className="w-6 h-6 rounded bg-slate-700 text-purple-300 font-mono text-xs flex items-center justify-center font-bold">
                    {opt.label}
                  </span>
                  <span>{opt.text}</span>
                </button>
              ))}
            </div>
          )}

          {/* Suffix / Prefix fallback options */}
          {(currentQ.type === 'fill_prefix' || currentQ.type === 'fill_suffix' || currentQ.type === 'double_object') && (
            <div className="grid grid-cols-2 gap-3">
              <button
                disabled={isAnswerRevealed}
                onClick={() => handleAnswer(currentQ.correctWord || 'confirmed')}
                className="py-4 px-4 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-500/40 text-teal-300 font-bold text-sm cursor-pointer"
              >
                {currentQ.correctWord || 'Khóa Phương Án Chuẩn'}
              </button>
              <button
                disabled={isAnswerRevealed}
                onClick={() => handleAnswer('wrong_distractor')}
                className="py-4 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-400 font-bold text-sm cursor-pointer"
              >
                Phương án khác
              </button>
            </div>
          )}
        </div>

        {/* Revealed feedback banner */}
        {isAnswerRevealed && (
          <div className={`mt-6 p-4 rounded-2xl border ${
            isCorrect ? 'bg-emerald-950/40 border-emerald-800/80 text-emerald-200' : 'bg-rose-950/40 border-rose-800/80 text-rose-200'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-sm">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>Phản xạ chính xác! (+1 combo)</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 text-rose-400" />
                    <span>Hết giờ / Chưa đúng! Cần chú ý mẹo sau:</span>
                  </>
                )}
              </div>

              <button
                onClick={handleNextQuestion}
                className="px-4 py-2 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold rounded-lg text-xs flex items-center gap-1 cursor-pointer transition-all shadow-md"
              >
                <span>Tiếp tục</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              {currentQ.detailedExplanation}
            </p>
          </div>
        )}
      </div>

      {/* Memory hook pill card */}
      <div className="mt-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
        <span>Mẹo: Luyện 5-10 phút mỗi ngày vào cùng một thời điểm giúp các kết nối nơ-ron ngữ pháp cố định lâu dài!</span>
      </div>
    </div>
  );
};
