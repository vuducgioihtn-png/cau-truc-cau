/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { DailyReflexView } from './components/DailyReflexView';
import { QuizExerciseView } from './components/QuizExerciseView';
import { DetailedBreakdownView } from './components/DetailedBreakdownView';
import { VisualSandboxView } from './components/VisualSandboxView';
import { PlaybookHandbookView } from './components/PlaybookHandbookView';
import { SentenceAnatomyView } from './components/SentenceAnatomyView';
import { GRAMMAR_QUESTIONS, TOPIC_METADATA } from './data/grammarQuestions';
import { GRAMMAR_QUESTIONS_VOL2 } from './data/grammarQuestionsVol2';
import { UserStats, TopicId, Question } from './types';
import { sound } from './utils/soundEffects';

const STORAGE_KEY = 'grammar_reflex_user_stats_v1';

const VOL1_QUESTIONS: Question[] = GRAMMAR_QUESTIONS.map(q => ({ ...q, volume: (1 as const) }));
const VOL2_QUESTIONS: Question[] = GRAMMAR_QUESTIONS_VOL2.map(q => ({ ...q, volume: (2 as const) }));
const ALL_QUESTIONS: Question[] = [...VOL1_QUESTIONS, ...VOL2_QUESTIONS];

const defaultStats: UserStats = {
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  totalAnswered: 0,
  totalCorrect: 0,
  completedQuestionIds: [],
  bookmarkedQuestionIds: [],
  history: []
};

export default function App() {
  const [currentTab, setCurrentTab] = useState<'daily' | 'quiz' | 'breakdown' | 'anatomy' | 'sandbox' | 'handbook'>('anatomy');
  const [selectedAnatomyId, setSelectedAnatomyId] = useState<number>(1);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [userStats, setUserStats] = useState<UserStats>(defaultStats);
  const [quizTopicFilter, setQuizTopicFilter] = useState<TopicId | 'all'>('all');

  // Load stats from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setUserStats(JSON.parse(saved));
      }
    } catch {
      // Fallback
    }
  }, []);

  const handleUpdateStats = (newStats: UserStats) => {
    setUserStats(newStats);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newStats));
    } catch {
      // Fallback
    }
  };

  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    sound.enabled = nextState;
  };

  const handleJumpToTopic = (topicId: TopicId) => {
    sound.playClick();
    setQuizTopicFilter(topicId);
    setCurrentTab('quiz');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* Top Bar Contract Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        streakDays={userStats.streakDays}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onQuickStart={() => {
          setCurrentTab('daily');
        }}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentTab === 'daily' && (
          <div>
            {/* Hero Banner for Daily View */}
            <div className="border-b border-slate-900 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 py-8 px-4 sm:px-6">
              <div className="max-w-4xl mx-auto text-center space-y-2">
                <span className="text-xs font-mono font-bold tracking-wider text-teal-400 uppercase">
                  Tư Duy Cấu Trúc Bằng Trực Giác
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                  Luyện Phản Xạ Cấu Trúc Câu &amp; Từ Loại
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
                  Ghi nhớ ngữ pháp vĩnh viễn nhờ <strong>Sơ đồ đoàn tàu 3 toa</strong>, <strong>Cán cân logic S=C</strong> và <strong>Thuật toán 3 giây</strong> từ bộ tài liệu <strong>200 câu Đặc Vụ Ngữ Pháp</strong> (Tập 1: 100 câu nền tảng + Tập 2: 100 câu phần 2 mở rộng).
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setCurrentTab('anatomy');
                    }}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white font-extrabold text-xs transition-all shadow-md shadow-indigo-950 cursor-pointer flex items-center gap-2"
                  >
                    <span>🔬 Học Giải Phẫu Câu (Bảng 9 Cột Mới)</span>
                  </button>

                  <button
                    onClick={() => {
                      sound.playClick();
                      setCurrentTab('breakdown');
                    }}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950 font-extrabold text-xs transition-all shadow-md shadow-teal-950 cursor-pointer flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-slate-950 animate-pulse" />
                    <span>🔥 Khám Phá 100 Câu Tập 2 Mở Rộng</span>
                  </button>

                  <button
                    onClick={() => {
                      sound.playClick();
                      setCurrentTab('breakdown');
                    }}
                    className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>📘 Xem 100 Câu Tập 1 (Bộ Gốc)</span>
                  </button>
                </div>

                {/* 6 Quick Topic Jump Badges */}
                <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
                  {TOPIC_METADATA.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => handleJumpToTopic(topic.id)}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900 border border-slate-800 text-slate-300 hover:text-teal-300 hover:border-slate-700 transition-colors cursor-pointer"
                    >
                      {topic.title.split('(')[0].trim()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <DailyReflexView
              questions={ALL_QUESTIONS}
              userStats={userStats}
              onUpdateStats={handleUpdateStats}
              onGoToFullPractice={() => {
                setQuizTopicFilter('all');
                setCurrentTab('quiz');
              }}
            />
          </div>
        )}

        {currentTab === 'quiz' && (
          <QuizExerciseView
            questions={ALL_QUESTIONS}
            userStats={userStats}
            onUpdateStats={handleUpdateStats}
            initialTopicFilter={quizTopicFilter}
          />
        )}

        {currentTab === 'breakdown' && (
          <DetailedBreakdownView
            questions={ALL_QUESTIONS}
            questionsVol1={VOL1_QUESTIONS}
            questionsVol2={VOL2_QUESTIONS}
            onJumpToAnatomy={(sentenceId) => {
              setSelectedAnatomyId(sentenceId);
              setCurrentTab('anatomy');
            }}
          />
        )}

        {currentTab === 'anatomy' && (
          <SentenceAnatomyView 
            initialSelectedId={selectedAnatomyId}
          />
        )}

        {currentTab === 'sandbox' && (
          <VisualSandboxView />
        )}

        {currentTab === 'handbook' && (
          <PlaybookHandbookView />
        )}
      </main>

      {/* Clean Footer adhering to Anti-Slop Guidelines */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 px-4 sm:px-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-400 font-display">Grammar Reflex</span>
            <span aria-hidden="true">·</span>
            <span>Bộ Tài Liệu 100 Câu: Đặc Vụ Ngữ Pháp Tiếng Anh</span>
          </div>
          <div>
            <span>Phương pháp trực quan hóa tư duy logic S-V-O &amp; Thuật toán từ loại 3 giây</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
