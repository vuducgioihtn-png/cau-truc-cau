import React, { useState } from 'react';
import { 
  Volume2, 
  Bookmark, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Lightbulb,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Question, TopicId, UserStats } from '../types';
import { TOPIC_METADATA } from '../data/grammarQuestions';
import { sound } from '../utils/soundEffects';
import { TrainVisualizer } from './visuals/TrainVisualizer';
import { MagnifierScaleVisualizer } from './visuals/MagnifierScaleVisualizer';
import { DoubleObjectVisualizer } from './visuals/DoubleObjectVisualizer';
import { PrefixCompassVisualizer } from './visuals/PrefixCompassVisualizer';
import { BalanceMaskVisualizer } from './visuals/BalanceMaskVisualizer';
import { AlgorithmScannerVisualizer } from './visuals/AlgorithmScannerVisualizer';
import { WordByWordInspector } from './WordByWordInspector';
import { getCompletedSentence } from '../utils/questionParsers';
import { VOCAB_DICTIONARY } from '../utils/wordTokenizer';
import confetti from 'canvas-confetti';

interface QuizExerciseViewProps {
  questions: Question[];
  userStats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  initialTopicFilter?: TopicId | 'all';
}

export const QuizExerciseView: React.FC<QuizExerciseViewProps> = ({
  questions,
  userStats,
  onUpdateStats,
  initialTopicFilter = 'all'
}) => {
  const [selectedVolume, setSelectedVolume] = useState<1 | 2 | 'all'>('all');
  const [selectedTopic, setSelectedTopic] = useState<TopicId | 'all'>(initialTopicFilter);
  const [filterMode, setFilterMode] = useState<'all' | 'uncompleted' | 'saved'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  // State for current question interaction
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  
  // Filter questions
  const filteredQuestions = questions.filter(q => {
    if (selectedVolume !== 'all' && (q.volume || 1) !== selectedVolume) return false;
    if (selectedTopic !== 'all' && q.topicId !== selectedTopic) return false;
    if (filterMode === 'saved' && !userStats.bookmarkedQuestionIds.includes(q.id)) return false;
    if (filterMode === 'uncompleted' && userStats.completedQuestionIds.includes(q.id)) return false;
    return true;
  });

  const currentQ: Question | undefined = filteredQuestions[currentIndex] || filteredQuestions[0];

  const handleResetForNext = () => {
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setIsCorrect(false);
    setShowExplanation(false);
  };

  const handleNext = () => {
    sound.playClick();
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      handleResetForNext();
    }
  };

  const handlePrev = () => {
    sound.playClick();
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      handleResetForNext();
    }
  };

  const toggleBookmark = (id: number) => {
    sound.playClick();
    const isBookmarked = userStats.bookmarkedQuestionIds.includes(id);
    const updated = isBookmarked
      ? userStats.bookmarkedQuestionIds.filter(qId => qId !== id)
      : [...userStats.bookmarkedQuestionIds, id];
    
    onUpdateStats({
      ...userStats,
      bookmarkedQuestionIds: updated
    });
  };

  const checkAnswer = (answer: string) => {
    if (!currentQ || isSubmitted) return;
    setSelectedAnswer(answer);
    setIsSubmitted(true);

    let correct = false;

    if (currentQ.type === 'train_derail') {
      const userThinksDerailed = answer === 'derailed';
      correct = userThinksDerailed === currentQ.isDerailed;
    } else if (currentQ.type === 'object_vs_complement') {
      correct = answer === currentQ.ocType;
    } else if (currentQ.type === 'double_object') {
      correct = true; // Confirmation of the breakdown
    } else if (currentQ.type === 'fill_prefix') {
      correct = answer.toLowerCase().trim() === currentQ.correctWord?.toLowerCase().trim() ||
                currentQ.correctWord?.toLowerCase().includes(answer.toLowerCase().trim()) || false;
    } else if (currentQ.type === 'fill_suffix') {
      const cleanAns = answer.toLowerCase().trim();
      const cleanCorrect = currentQ.correctWord?.toLowerCase().trim() || '';
      correct = cleanAns === cleanCorrect || cleanCorrect.includes(cleanAns);
    } else if (currentQ.type === 'mcq_parts_of_speech') {
      correct = answer === currentQ.correctOption;
    }

    setIsCorrect(correct);
    setShowExplanation(true);

    if (correct) {
      sound.playCorrect();
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 }
      });
    } else {
      sound.playIncorrect();
    }

    // Save progress
    const alreadyCompleted = userStats.completedQuestionIds.includes(currentQ.id);
    const updatedCompleted = correct && !alreadyCompleted 
      ? [...userStats.completedQuestionIds, currentQ.id]
      : userStats.completedQuestionIds;

    onUpdateStats({
      ...userStats,
      totalAnswered: userStats.totalAnswered + 1,
      totalCorrect: correct ? userStats.totalCorrect + 1 : userStats.totalCorrect,
      completedQuestionIds: updatedCompleted,
      history: [
        ...userStats.history,
        {
          questionId: currentQ.id,
          answeredAt: new Date().toISOString(),
          isCorrect: correct,
          userSelection: answer,
          timeTakenSec: 3
        }
      ]
    });
  };

  if (!currentQ) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
          <CheckCircle2 className="w-12 h-12 text-teal-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Không tìm thấy bài tập phù hợp</h3>
          <p className="text-sm text-slate-400 mb-6">Bạn đã hoàn thành tất cả câu hỏi trong bộ lọc này hoặc chưa lưu câu hỏi nào.</p>
          <button
            onClick={() => {
              setSelectedTopic('all');
              setFilterMode('all');
              setCurrentIndex(0);
              handleResetForNext();
            }}
            className="px-4 py-2 bg-teal-400 text-slate-950 font-bold rounded-lg text-sm"
          >
            Xem Tất Cả 100 Câu
          </button>
        </div>
      </div>
    );
  }

  const isBookmarked = userStats.bookmarkedQuestionIds.includes(currentQ.id);
  const isMastered = userStats.completedQuestionIds.includes(currentQ.id);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      
      {/* Top Filter and Topic Selector Tabs */}
      <div className="mb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              Hệ Thống 100 Bài Tập Đặc Vụ Ngữ Pháp
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
              <span>Tiến độ hoàn thành:</span>
              <span className="font-mono font-bold text-teal-400">
                {userStats.completedQuestionIds.length} / {questions.length} câu
              </span>
              <span aria-hidden="true">·</span>
              <span>Độ chính xác:</span>
              <span className="font-mono text-slate-200">
                {userStats.totalAnswered > 0 ? Math.round((userStats.totalCorrect / userStats.totalAnswered) * 100) : 0}%
              </span>
            </div>
          </div>

          {/* Volume Filter Buttons */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => {
                setSelectedVolume('all');
                setCurrentIndex(0);
                handleResetForNext();
              }}
              className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                selectedVolume === 'all' ? 'bg-teal-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Cả 2 Tập
            </button>
            <button
              onClick={() => {
                setSelectedVolume(1);
                setCurrentIndex(0);
                handleResetForNext();
              }}
              className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                selectedVolume === 1 ? 'bg-indigo-500 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Tập 1
            </button>
            <button
              onClick={() => {
                setSelectedVolume(2);
                setCurrentIndex(0);
                handleResetForNext();
              }}
              className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                selectedVolume === 2 ? 'bg-teal-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              🔥 Tập 2 Phần 2
            </button>
          </div>

          {/* Filter mode segmented control */}
          <div className="flex items-center gap-1 p-1 bg-slate-800/80 rounded-lg border border-slate-700/60 text-xs">
            <button
              onClick={() => {
                setFilterMode('all');
                setCurrentIndex(0);
                handleResetForNext();
              }}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                filterMode === 'all' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Tất cả ({filteredQuestions.length})
            </button>
            <button
              onClick={() => {
                setFilterMode('uncompleted');
                setCurrentIndex(0);
                handleResetForNext();
              }}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                filterMode === 'uncompleted' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Chưa làm
            </button>
            <button
              onClick={() => {
                setFilterMode('saved');
                setCurrentIndex(0);
                handleResetForNext();
              }}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                filterMode === 'saved' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Đã lưu ({userStats.bookmarkedQuestionIds.length})
            </button>
          </div>
        </div>

        {/* Topic Pills / Selector Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => {
              setSelectedTopic('all');
              setCurrentIndex(0);
              handleResetForNext();
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 border transition-all cursor-pointer ${
              selectedTopic === 'all'
                ? 'bg-slate-700 text-white border-slate-600'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            Tất cả chủ đề
          </button>
          {TOPIC_METADATA.map((topic) => (
            <button
              key={topic.id}
              onClick={() => {
                setSelectedTopic(topic.id);
                setCurrentIndex(0);
                handleResetForNext();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 border transition-all cursor-pointer ${
                selectedTopic === topic.id
                  ? 'bg-teal-500/20 text-teal-300 border-teal-500/40 font-bold'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              Chủ đề {topic.number}: {topic.title.split('(')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Question Card Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Interactive Exercise Card (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl relative">
            
            {/* Top Bar inside card: Meta info, speech, bookmark */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${
                  (currentQ.volume || 1) === 2 ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                }`}>
                  {(currentQ.volume || 1) === 2 ? 'TẬP 2' : 'TẬP 1'}
                </span>
                <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded bg-slate-800 text-teal-400 border border-slate-700">
                  CÂU {currentQ.id}
                </span>
                <span className="text-xs text-slate-400">
                  {currentQ.topicTitle}
                </span>
                {isMastered && (
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Đã đạt chuẩn
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => sound.speakEnglish(currentQ.sentence)}
                  title="Nghe phát âm chuẩn"
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-teal-300 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => toggleBookmark(currentQ.id)}
                  title={isBookmarked ? 'Bỏ lưu câu này' : 'Lưu câu vào sổ tay'}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    isBookmarked
                      ? 'bg-amber-500/20 text-amber-300'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Prompt Instruction */}
            <p className="text-sm font-medium text-teal-200 mb-3">
              {currentQ.prompt}
            </p>

            {/* Target Sentence Display */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 mb-6 space-y-2">
              <div className="text-lg sm:text-xl font-semibold text-slate-100 font-display leading-relaxed">
                {currentQ.sentence}
              </div>
              {currentQ.ipa && (
                <div className="text-xs font-mono text-teal-400">
                  IPA: {currentQ.ipa}
                </div>
              )}
              {currentQ.translation && (
                <div className="text-xs text-amber-300/90 bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
                  🇻🇳 Dịch nghĩa: {currentQ.translation}
                </div>
              )}
            </div>

            {/* Specialized Interactive Controls based on Question Type */}
            <div className="space-y-4">

              {/* 1. TOPIC 1: TRAIN DERAIL RESCUE (Câu 1 - 15) */}
              {currentQ.type === 'train_derail' && (
                <div>
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Chọn chuẩn đoán trạng thái đoàn tàu:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      disabled={isSubmitted}
                      onClick={() => checkAnswer('nominal')}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedAnswer === 'nominal'
                          ? isCorrect 
                            ? 'bg-emerald-950/40 border-emerald-500 text-white' 
                            : 'bg-rose-950/40 border-rose-500 text-white'
                          : 'bg-slate-800/50 hover:bg-slate-800 border-slate-700 text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="font-bold text-sm">TÀU CHẠY ĐÚNG CHUẨN</span>
                      </div>
                      <p className="text-xs text-slate-400">Trật tự S - V - O - Adv một chiều chuẩn mực.</p>
                    </button>

                    <button
                      disabled={isSubmitted}
                      onClick={() => checkAnswer('derailed')}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedAnswer === 'derailed'
                          ? isCorrect 
                            ? 'bg-emerald-950/40 border-emerald-500 text-white' 
                            : 'bg-rose-950/40 border-rose-500 text-white'
                          : 'bg-slate-800/50 hover:bg-slate-800 border-slate-700 text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <XCircle className="w-4 h-4 text-rose-400" />
                        <span className="font-bold text-sm">CÂU TRẬT BÁNH!</span>
                      </div>
                      <p className="text-xs text-slate-400">Ngược thứ tự, mất động cơ V hoặc trạng từ xáo trộn.</p>
                    </button>
                  </div>
                </div>
              )}

              {/* 2. TOPIC 2: OBJECT VS COMPLEMENT (Câu 16 - 30) */}
              {currentQ.type === 'object_vs_complement' && (
                <div>
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Xác định thành phần trong ngoặc <strong className="text-amber-300">{currentQ.targetElement}</strong>:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      disabled={isSubmitted}
                      onClick={() => checkAnswer('O')}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedAnswer === 'O'
                          ? isCorrect 
                            ? 'bg-indigo-950/50 border-indigo-400 text-white' 
                            : 'bg-rose-950/40 border-rose-500 text-white'
                          : 'bg-slate-800/50 hover:bg-slate-800 border-slate-700 text-slate-200'
                      }`}
                    >
                      <span className="font-bold text-sm text-indigo-300 block mb-1">
                        TÂN NGỮ (O) · OBJECT
                      </span>
                      <p className="text-xs text-slate-400">
                        Chịu lực từ động từ, không đồng nhất với chủ ngữ (S ≠ O).
                      </p>
                    </button>

                    <button
                      disabled={isSubmitted}
                      onClick={() => checkAnswer('C')}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedAnswer === 'C'
                          ? isCorrect 
                            ? 'bg-amber-950/50 border-amber-400 text-white' 
                            : 'bg-rose-950/40 border-rose-500 text-white'
                          : 'bg-slate-800/50 hover:bg-slate-800 border-slate-700 text-slate-200'
                      }`}
                    >
                      <span className="font-bold text-sm text-amber-300 block mb-1">
                        BỔ NGỮ (C) · COMPLEMENT
                      </span>
                      <p className="text-xs text-slate-400">
                        Vẽ rõ chân dung đồng nhất danh tính/tính chất (S = C hoặc O = C).
                      </p>
                    </button>
                  </div>
                </div>
              )}

              {/* 3. TOPIC 3: DOUBLE OBJECT (Câu 31 - 45) */}
              {currentQ.type === 'double_object' && (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="text-xs font-mono text-indigo-300 uppercase">
                    Nhận diện phân tách hai dòng tân ngữ:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-800/50">
                      <span className="text-[11px] text-slate-400 block">Tân ngữ gián tiếp (O_ind):</span>
                      <span className="font-bold text-sm text-indigo-200">{currentQ.oInd}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-teal-950/30 border border-teal-800/50">
                      <span className="text-[11px] text-slate-400 block">Tân ngữ trực tiếp (O_dir):</span>
                      <span className="font-bold text-sm text-teal-200">{currentQ.oDir}</span>
                    </div>
                  </div>
                  {!isSubmitted && (
                    <button
                      onClick={() => checkAnswer('confirmed')}
                      className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg text-xs cursor-pointer"
                    >
                      Xác Nhận & Xem Giải Phẫu Logic
                    </button>
                  )}
                </div>
              )}

              {/* 4. TOPIC 4: PREFIXES (Câu 46 - 60) */}
              {currentQ.type === 'fill_prefix' && (
                <div>
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Chọn tiền tố để ghép với gốc từ <strong className="text-cyan-300">({currentQ.baseWord})</strong>:
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
                    {['il-', 'ir-', 'im-', 'in-', 'un-', 'dis-', 'pre-', 're-', 'sub-', 'ex-'].map(prefix => {
                      const cleanPrefix = prefix.replace('-', '');
                      const isTargetCorrectPrefix = currentQ.correctWord?.toLowerCase().startsWith(cleanPrefix);
                      return (
                        <button
                          key={prefix}
                          disabled={isSubmitted}
                          onClick={() => {
                            if (currentQ.correctWord) {
                              checkAnswer(currentQ.correctWord);
                            }
                          }}
                          className={`py-2 px-2 rounded-lg text-xs font-bold font-mono border transition-all cursor-pointer ${
                            isSubmitted
                              ? isTargetCorrectPrefix
                                ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                                : 'bg-slate-800/40 text-slate-500 border-slate-800'
                              : 'bg-slate-800 hover:bg-cyan-900/40 hover:border-cyan-500/50 text-cyan-200 border-slate-700'
                          }`}
                        >
                          {prefix}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 5. TOPIC 5: SUFFIXES & MASKS (Câu 61 - 75) */}
              {currentQ.type === 'fill_suffix' && (
                <div>
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Chọn phương án hoàn thiện từ <strong className="text-rose-300">({currentQ.baseWord})</strong>:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentQ.id <= 68 ? (
                      <>
                        <button
                          disabled={isSubmitted}
                          onClick={() => {
                            const word = currentQ.baseWord?.toLowerCase() + 'ful';
                            checkAnswer(word);
                          }}
                          className="p-3.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-left cursor-pointer"
                        >
                          <span className="font-bold text-emerald-300 text-sm block">Đuôi -FUL (Đĩa cân đầy đặn)</span>
                          <span className="text-xs text-slate-400">Có, dồi dào, nhiều giá trị tích cực</span>
                        </button>

                        <button
                          disabled={isSubmitted}
                          onClick={() => {
                            const word = currentQ.baseWord?.toLowerCase() + 'less';
                            checkAnswer(word);
                          }}
                          className="p-3.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-left cursor-pointer"
                        >
                          <span className="font-bold text-rose-300 text-sm block">Đuôi -LESS (Đĩa cân rỗng không)</span>
                          <span className="text-xs text-slate-400">Không có, mất mát, thiếu hụt</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          disabled={isSubmitted}
                          onClick={() => checkAnswer(currentQ.correctWord || '')}
                          className="p-3.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-left cursor-pointer"
                        >
                          <span className="font-bold text-indigo-300 text-sm block">Mặt Nạ [-ED] (Cảm xúc Người)</span>
                          <span className="text-xs text-slate-400">Tâm trạng chủ quan bị tác động</span>
                        </button>

                        <button
                          disabled={isSubmitted}
                          onClick={() => checkAnswer(currentQ.correctWord || '')}
                          className="p-3.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-left cursor-pointer"
                        >
                          <span className="font-bold text-amber-300 text-sm block">Mặt Nạ [-ING] (Bản chất Sự vật)</span>
                          <span className="text-xs text-slate-400">Phát ra sức hút, truyền tác động</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* 6. TOPIC 6: 3-SECOND MCQ (Câu 76 - 100) */}
              {currentQ.type === 'mcq_parts_of_speech' && currentQ.options && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-purple-300 uppercase tracking-wider">
                      Chọn đáp án theo thuật toán 3 giây:
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {currentQ.targetPosNeeded}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentQ.options.map(opt => {
                      const isSelected = selectedAnswer === opt.label;
                      const isRightOption = opt.label === currentQ.correctOption;

                      let btnStyle = 'bg-slate-800/60 hover:bg-slate-800 border-slate-700 text-slate-200';
                      if (isSubmitted) {
                        if (isRightOption) {
                          btnStyle = 'bg-emerald-950/50 border-emerald-500 text-emerald-200 font-bold';
                        } else if (isSelected && !isRightOption) {
                          btnStyle = 'bg-rose-950/50 border-rose-500 text-rose-200';
                        } else {
                          btnStyle = 'bg-slate-900/40 border-slate-800 text-slate-500';
                        }
                      }

                      return (
                        <button
                          key={opt.label}
                          disabled={isSubmitted}
                          onClick={() => checkAnswer(opt.label)}
                          className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${btnStyle}`}
                        >
                          <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono shrink-0 ${
                            isSubmitted && isRightOption
                              ? 'bg-emerald-500 text-slate-950'
                              : 'bg-slate-700 text-slate-300'
                          }`}>
                            {opt.label}
                          </span>
                          <span className="text-sm font-semibold">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Answer Result Banner */}
            {isSubmitted && (
              <div className={`mt-5 p-4 rounded-xl border flex items-start gap-3 ${
                isCorrect 
                  ? 'bg-emerald-950/30 border-emerald-800/60 text-emerald-200' 
                  : 'bg-rose-950/30 border-rose-800/60 text-rose-200'
              }`}>
                {isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <div className="font-bold text-sm">
                    {isCorrect ? 'CHÍNH XÁC TUYỆT ĐỐI!' : 'CHƯA CHÍNH XÁC - CÙNG XEM GIẢI PHẪU:'}
                  </div>
                  {currentQ.correctSentence && (
                    <div className="text-xs text-slate-300 mt-1 space-y-0.5">
                      <div>
                        <span className="text-slate-400">Câu chuẩn: </span>
                        <strong className="text-white font-mono">{currentQ.correctSentence}</strong>
                      </div>
                      {currentQ.correctIpa && (
                        <div className="text-[11px] font-mono text-teal-300">
                          IPA: {currentQ.correctIpa}
                        </div>
                      )}
                      {currentQ.correctTranslation && (
                        <div className="text-[11px] text-amber-200">
                          🇻🇳 Dịch nghĩa: {currentQ.correctTranslation}
                        </div>
                      )}
                    </div>
                  )}
                  {currentQ.correctWord && (
                    <div className="text-xs text-slate-300 mt-1">
                      <span className="text-slate-400">Đáp án đúng: </span>
                      <strong className="text-white font-mono">{currentQ.correctWord}</strong>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navigation buttons: Prev / Next / Retry */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800">
              <button
                disabled={currentIndex === 0}
                onClick={handlePrev}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Câu Trước</span>
              </button>

              <div className="flex items-center gap-2">
                {isSubmitted && (
                  <button
                    onClick={handleResetForNext}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Làm lại</span>
                  </button>
                )}

                <button
                  disabled={currentIndex === filteredQuestions.length - 1}
                  onClick={handleNext}
                  className="flex items-center gap-1.5 px-4 py-2 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold rounded-lg text-xs transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <span>Câu Kế Tiếp</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Explanation Accordion Card */}
          {showExplanation && (
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-4 animate-in fade-in">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                <Lightbulb className="w-4 h-4" />
                <span>Giải Phẫu Chi Tiết & Logic Ngữ Pháp</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentQ.detailedExplanation}
              </p>

              {/* Memory hook tip */}
              <div className="p-3.5 rounded-xl bg-teal-950/20 border border-teal-800/40 text-xs text-teal-200 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-teal-300">Mẹo ghi nhớ siêu tốc: </span>
                  <span>{currentQ.memoryHook}</span>
                </div>
              </div>

              {/* Word-by-Word Granular Inspection */}
              <WordByWordInspector
                sentence={getCompletedSentence(currentQ)}
                originalSentence={currentQ.sentence}
                title={`Soi Từng Từ Một (Câu ${currentQ.id})`}
                question={currentQ}
              />
            </div>
          )}
        </div>

        {/* Right Column: Visual Diagram for this Question (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>Mô Hình Trực Quan Trợ Lực</span>
          </div>

          {/* Topic 1 Visualizer */}
          {currentQ.topicId === 'topic-1-svo-train' && (
            <TrainVisualizer
              sText={currentQ.sentence.split(' ')[0] + ' ' + (currentQ.sentence.split(' ')[1] || '')}
              vText={currentQ.isDerailed && currentQ.sentence.includes('the mouse') ? '' : currentQ.sentence.split(' ')[2] || 'fixed'}
              oText={currentQ.sentence.split(' ').slice(3, 6).join(' ')}
              advText={currentQ.sentence.split(' ').slice(6).join(' ')}
              isDerailed={currentQ.isDerailed}
              derailReason={currentQ.derailReason}
            />
          )}

          {/* Topic 2 Visualizer */}
          {currentQ.topicId === 'topic-2-object-complement' && (
            <MagnifierScaleVisualizer
              sentence={currentQ.sentence}
              targetElement={currentQ.targetElement || ''}
              type={currentQ.ocType || 'O'}
              formula={currentQ.ocFormula || ''}
              explanation={currentQ.detailedExplanation}
            />
          )}

          {/* Topic 3 Visualizer */}
          {currentQ.topicId === 'topic-3-double-object' && (
            <DoubleObjectVisualizer
              sentence={currentQ.sentence}
              oDir={currentQ.oDir || ''}
              oInd={currentQ.oInd || ''}
              doubleObjectNote={currentQ.doubleObjectNote}
              explanation={currentQ.detailedExplanation}
            />
          )}

          {/* Topic 4 Visualizer */}
          {currentQ.topicId === 'topic-4-prefixes' && (
            <PrefixCompassVisualizer
              baseWord={currentQ.baseWord}
              prefix={currentQ.affixBreakdown?.split('+')[0]?.trim()}
              combinedWord={currentQ.correctWord}
              meaning={currentQ.meaning || (currentQ.correctWord ? VOCAB_DICTIONARY[currentQ.correctWord.toLowerCase()]?.meaning : undefined)}
              ruleExplanation={currentQ.detailedExplanation}
            />
          )}

          {/* Topic 5 Visualizer */}
          {currentQ.topicId === 'topic-5-suffixes-masks' && (
            <BalanceMaskVisualizer
              baseWord={currentQ.baseWord}
              affixType={currentQ.id <= 68 ? 'ful_less' : 'ed_ing'}
              chosenType={currentQ.id <= 68 ? (currentQ.correctWord?.endsWith('ful') ? '-ful' : '-less') : (currentQ.correctWord?.includes('ed') ? '-ed' : '-ing')}
              note={currentQ.detailedExplanation}
            />
          )}

          {/* Topic 6 Visualizer */}
          {currentQ.topicId === 'topic-6-three-sec-parts-of-speech' && (
            <AlgorithmScannerVisualizer
              sentence={currentQ.sentence}
              targetPosNeeded={currentQ.targetPosNeeded || ''}
              suffixHint={currentQ.suffixHint || ''}
              stepBreakdown={currentQ.threeSecAlgorithm}
              selectedOptionText={currentQ.options?.find(o => o.label === currentQ.correctOption)?.text}
            />
          )}

          {/* Quick Playbook reference card */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs space-y-2">
            <span className="font-semibold text-slate-200 block">Quy tắc vàng của chủ đề:</span>
            <p className="text-slate-400 leading-relaxed">
              {TOPIC_METADATA.find(t => t.id === currentQ.topicId)?.formula}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
