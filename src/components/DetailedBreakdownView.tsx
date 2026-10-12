import React, { useState } from 'react';
import { 
  Volume2, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  LayoutGrid, 
  Table as TableIcon,
  Lightbulb,
  ArrowRight,
  BookOpen,
  Layers,
  Zap
} from 'lucide-react';
import { Question, TopicId } from '../types';
import { TOPIC_METADATA } from '../data/grammarQuestions';
import { sound } from '../utils/soundEffects';
import { TrainVisualizer } from './visuals/TrainVisualizer';
import { MagnifierScaleVisualizer } from './visuals/MagnifierScaleVisualizer';
import { DoubleObjectVisualizer } from './visuals/DoubleObjectVisualizer';
import { PrefixCompassVisualizer } from './visuals/PrefixCompassVisualizer';
import { BalanceMaskVisualizer } from './visuals/BalanceMaskVisualizer';
import { AlgorithmScannerVisualizer } from './visuals/AlgorithmScannerVisualizer';
import { WordByWordInspector } from './WordByWordInspector';
import { getEnrichedTrainData, getEnrichedOCData, getCompletedSentence } from '../utils/questionParsers';
import { VOCAB_DICTIONARY } from '../utils/wordTokenizer';
import { CURATED_ANATOMY_SENTENCES } from '../data/curatedAnatomySentences';

interface DetailedBreakdownViewProps {
  questions?: Question[];
  questionsVol1?: Question[];
  questionsVol2?: Question[];
  onJumpToAnatomy?: (sentenceId: number) => void;
}

export const DetailedBreakdownView: React.FC<DetailedBreakdownViewProps> = ({ 
  questions = [],
  questionsVol1 = [],
  questionsVol2 = [],
  onJumpToAnatomy
}) => {
  // If questionsVol1 or questionsVol2 not passed directly, split from questions
  const vol1 = questionsVol1.length > 0 
    ? questionsVol1 
    : questions.filter(q => (q.volume || 1) === 1);
  const vol2 = questionsVol2.length > 0 
    ? questionsVol2 
    : questions.filter(q => q.volume === 2);

  // Volume tab state: 1 (Tập 1), 2 (Tập 2), or 'all'
  const [selectedVolume, setSelectedVolume] = useState<1 | 2 | 'all'>(2); // Default to Tập 2 so user immediately sees Volume 2!
  const [activeVolume, setActiveVolume] = useState<1 | 2>(2);
  const [selectedTopic, setSelectedTopic] = useState<TopicId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuestionId, setSelectedQuestionId] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'card' | 'table'>('card');

  // Determine current active question pool based on selected volume
  const volumePool = selectedVolume === 1 
    ? vol1 
    : selectedVolume === 2 
      ? vol2 
      : [...vol1, ...vol2];

  // Filter questions by topic and search query
  const filteredQuestions = volumePool.filter(q => {
    if (selectedTopic !== 'all' && q.topicId !== selectedTopic) return false;
    if (searchQuery.trim()) {
      const qNum = searchQuery.replace(/\D/g, '');
      if (qNum && q.id === parseInt(qNum)) return true;
      const lowerQuery = searchQuery.toLowerCase();
      return (
        q.sentence.toLowerCase().includes(lowerQuery) ||
        (q.translation && q.translation.toLowerCase().includes(lowerQuery)) ||
        q.detailedExplanation.toLowerCase().includes(lowerQuery) ||
        (q.correctSentence && q.correctSentence.toLowerCase().includes(lowerQuery)) ||
        (q.correctWord && q.correctWord.toLowerCase().includes(lowerQuery))
      );
    }
    return true;
  });

  // Find currently selected question
  const currentQ = volumePool.find(q => (q.volume || 1) === activeVolume && q.id === selectedQuestionId) 
    || filteredQuestions[0] 
    || volumePool[0] 
    || vol2[0] 
    || vol1[0];

  const trainData = currentQ ? getEnrichedTrainData(currentQ) : null;
  const ocData = currentQ ? getEnrichedOCData(currentQ) : null;

  const handleNext = () => {
    sound.playClick();
    const currentList = activeVolume === 2 ? vol2 : vol1;
    const currentIndex = currentList.findIndex(q => q.id === selectedQuestionId);
    if (currentIndex >= 0 && currentIndex < currentList.length - 1) {
      setSelectedQuestionId(currentList[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    sound.playClick();
    const currentList = activeVolume === 2 ? vol2 : vol1;
    const currentIndex = currentList.findIndex(q => q.id === selectedQuestionId);
    if (currentIndex > 0) {
      setSelectedQuestionId(currentList[currentIndex - 1].id);
    }
  };

  const handleSelectQuestion = (vol: 1 | 2, id: number) => {
    sound.playClick();
    setActiveVolume(vol);
    setSelectedQuestionId(id);
    if (selectedVolume !== 'all' && selectedVolume !== vol) {
      setSelectedVolume(vol);
    }
    if (viewMode === 'table') setViewMode('card');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* 1. Header Banner & View Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded-full border border-teal-500/30">
              Phần II: Hệ Thống Đáp Án &amp; Hướng Dẫn Giải Chi Tiết
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs font-semibold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30">
              Tổng Cộng 200 Câu (Tập 1 &amp; Tập 2)
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
            Giải Phẫu Chi Tiết 200 Câu Ngữ Pháp &amp; Từng Từ Một
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Khám phá trực quan cấu trúc câu, phiên âm IPA, bản dịch nghĩa tiếng Việt, nguyên nhân trật bánh và thuật toán xử lý nhanh.
          </p>
        </div>

        {/* View Mode Switcher & Search */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative w-48 sm:w-60">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm câu (VD: 25, laptop, pizza...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
            />
          </div>

          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs">
            <button
              onClick={() => {
                sound.playClick();
                setViewMode('card');
              }}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                viewMode === 'card' ? 'bg-teal-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Thẻ Trực Quan</span>
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setViewMode('table');
              }}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                viewMode === 'table' ? 'bg-teal-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Bảng Tổng Hợp</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. PROMINENT CALLOUT BANNER TO 9-COLUMN ANATOMY & TREE VIEW */}
      {onJumpToAnatomy && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-950/80 via-slate-900 to-indigo-950/80 border-2 border-teal-500/50 shadow-xl shadow-teal-950/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2.5 rounded-xl bg-teal-400 text-slate-950 font-black shrink-0 shadow-lg shadow-teal-400/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono font-black text-white text-sm sm:text-base tracking-wide">
                  🔬 BẢNG GIẢI PHẪU 9 CỘT & SƠ ĐỒ CÂY CÚ PHÁP (CÂU 1 - {CURATED_ANATOMY_SENTENCES.length})
                </span>
                <span className="px-2 py-0.5 rounded-full bg-teal-400/20 border border-teal-400/40 text-teal-300 font-mono text-[11px] font-bold">
                  {CURATED_ANATOMY_SENTENCES.length} CÂU ĐÃ HOÀN TẤT
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Đầy đủ bảng 9 cột chuẩn (Từ & Lemma, IPA, POS, Hình thái, Nghĩa, Vai trò cú pháp, Cụm/Mệnh đề, Giải thích) + Sơ đồ cây cú pháp học thuật & Vai trò ngữ nghĩa (Thematic Roles).
              </p>
            </div>
          </div>

          <button
            onClick={() => onJumpToAnatomy(selectedQuestionId <= CURATED_ANATOMY_SENTENCES.length ? selectedQuestionId : 1)}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950 font-black text-xs font-mono tracking-wider uppercase transition-all shadow-lg shadow-teal-400/20 hover:scale-105 cursor-pointer shrink-0 flex items-center justify-center gap-2"
          >
            <span>Mở Học Giải Phẫu (Câu {selectedQuestionId <= CURATED_ANATOMY_SENTENCES.length ? selectedQuestionId : 1})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 3. PROMINENT VOLUME SELECTOR TABS (TẬP 1 vs TẬP 2 PHẦN 2 vs TẤT CẢ) */}
      <div className="p-2 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-teal-400 ml-2" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            Chọn Bộ Câu Hỏi:
          </span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* TAB TẬP 2 (100 CÂU PHẦN 2) */}
          <button
            onClick={() => {
              sound.playClick();
              setSelectedVolume(2);
              setActiveVolume(2);
              setSelectedQuestionId(1);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedVolume === 2
                ? 'bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 shadow-md shadow-teal-950 ring-2 ring-teal-400/50 scale-105'
                : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Tập 2: 100 Câu Phần 2 (Mới)</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
              selectedVolume === 2 ? 'bg-slate-950/30 text-slate-950' : 'bg-teal-500/20 text-teal-300'
            }`}>
              {vol2.length} câu
            </span>
          </button>

          {/* TAB TẬP 1 (100 CÂU NỀN TẢNG GỐC) */}
          <button
            onClick={() => {
              sound.playClick();
              setSelectedVolume(1);
              setActiveVolume(1);
              setSelectedQuestionId(1);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedVolume === 1
                ? 'bg-gradient-to-r from-indigo-500 to-teal-500 text-white shadow-md shadow-indigo-950 ring-2 ring-indigo-400/50 scale-105'
                : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Tập 1: 100 Câu Cơ Bản (Bộ Gốc)</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
              selectedVolume === 1 ? 'bg-white/20 text-white' : 'bg-indigo-500/20 text-indigo-300'
            }`}>
              {vol1.length} câu
            </span>
          </button>

          {/* TAB TẤT CẢ 200 CÂU */}
          <button
            onClick={() => {
              sound.playClick();
              setSelectedVolume('all');
            }}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedVolume === 'all'
                ? 'bg-slate-700 text-white font-bold border border-slate-500'
                : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Tất cả 200 câu</span>
          </button>
        </div>
      </div>

      {/* 3. Topic Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => {
            sound.playClick();
            setSelectedTopic('all');
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
              sound.playClick();
              setSelectedTopic(topic.id);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 border transition-all cursor-pointer ${
              selectedTopic === topic.id
                ? 'bg-teal-500/20 text-teal-300 border-teal-500/40 font-bold'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            Chủ đề {topic.number}: {topic.title.split('(')[0]} ({topic.range})
          </button>
        ))}
      </div>

      {/* 4. Number Grid Navigator (1 to 100) */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 uppercase font-semibold">
              Bấm chọn câu để xem giải phẫu chi tiết ngay:
            </span>
            <span className="text-xs font-bold px-2 py-0.5 rounded font-mono bg-teal-500/20 text-teal-300 border border-teal-500/30">
              Đang xem: {activeVolume === 2 ? 'Tập 2 (Phần 2)' : 'Tập 1'} · Câu {currentQ?.id}
            </span>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            Hiển thị: {filteredQuestions.length} câu
          </div>
        </div>

        {/* When selectedVolume is 2: Show Volume 2 (1-100) */}
        {selectedVolume === 2 && (
          <div className="space-y-1">
            <div className="text-[11px] font-mono text-teal-400 font-bold flex items-center gap-1.5">
              <span>🔥 100 CÂU TẬP 2 (PHẦN 2 MỚI):</span>
            </div>
            <div className="grid grid-cols-10 sm:grid-cols-20 md:grid-cols-25 gap-1.5 max-h-36 overflow-y-auto p-1 scrollbar-thin">
              {vol2.map((q) => {
                const isSelected = activeVolume === 2 && q.id === selectedQuestionId;
                return (
                  <button
                    key={`vol2-${q.id}`}
                    onClick={() => handleSelectQuestion(2, q.id)}
                    className={`h-7 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-teal-400 text-slate-950 shadow-md ring-2 ring-teal-400/50 scale-105'
                        : 'bg-slate-800/80 hover:bg-slate-700 text-teal-200'
                    }`}
                  >
                    {q.id}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* When selectedVolume is 1: Show Volume 1 (1-100) */}
        {selectedVolume === 1 && (
          <div className="space-y-1">
            <div className="text-[11px] font-mono text-indigo-400 font-bold flex items-center gap-1.5">
              <span>📘 100 CÂU TẬP 1 (BỘ GỐC NỀN TẢNG):</span>
            </div>
            <div className="grid grid-cols-10 sm:grid-cols-20 md:grid-cols-25 gap-1.5 max-h-36 overflow-y-auto p-1 scrollbar-thin">
              {vol1.map((q) => {
                const isSelected = activeVolume === 1 && q.id === selectedQuestionId;
                return (
                  <button
                    key={`vol1-${q.id}`}
                    onClick={() => handleSelectQuestion(1, q.id)}
                    className={`h-7 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-400 text-slate-950 shadow-md ring-2 ring-indigo-400/50 scale-105'
                        : 'bg-slate-800/80 hover:bg-slate-700 text-indigo-200'
                    }`}
                  >
                    {q.id}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* When selectedVolume is 'all': Show both sections */}
        {selectedVolume === 'all' && (
          <div className="space-y-3">
            <div className="space-y-1 border-b border-slate-800 pb-2">
              <div className="text-[11px] font-mono text-teal-400 font-bold flex items-center gap-1.5">
                <span>🔥 TẬP 2: 100 CÂU PHẦN 2 (MỚI):</span>
              </div>
              <div className="grid grid-cols-10 sm:grid-cols-20 md:grid-cols-25 gap-1.5 max-h-28 overflow-y-auto p-1 scrollbar-thin">
                {vol2.map((q) => {
                  const isSelected = activeVolume === 2 && q.id === selectedQuestionId;
                  return (
                    <button
                      key={`all-vol2-${q.id}`}
                      onClick={() => handleSelectQuestion(2, q.id)}
                      className={`h-6 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-teal-400 text-slate-950 shadow-md ring-2 ring-teal-400/50 scale-105'
                          : 'bg-slate-800/80 hover:bg-slate-700 text-teal-300'
                      }`}
                    >
                      {q.id}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-[11px] font-mono text-indigo-400 font-bold flex items-center gap-1.5">
                <span>📘 TẬP 1: 100 CÂU CƠ BẢN:</span>
              </div>
              <div className="grid grid-cols-10 sm:grid-cols-20 md:grid-cols-25 gap-1.5 max-h-28 overflow-y-auto p-1 scrollbar-thin">
                {vol1.map((q) => {
                  const isSelected = activeVolume === 1 && q.id === selectedQuestionId;
                  return (
                    <button
                      key={`all-vol1-${q.id}`}
                      onClick={() => handleSelectQuestion(1, q.id)}
                      className={`h-6 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-400 text-slate-950 shadow-md ring-2 ring-indigo-400/50 scale-105'
                          : 'bg-slate-800/80 hover:bg-slate-700 text-indigo-300'
                      }`}
                    >
                      {q.id}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ================= VIEW MODE 1: VISUAL CARD VIEW ================= */}
      {viewMode === 'card' && currentQ && (
        <div className="space-y-6">
          
          {/* Top Bar for Current Question */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <button
                disabled={selectedQuestionId <= 1}
                onClick={handlePrev}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                title="Câu trước"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`px-2 py-0.5 rounded text-xs font-bold font-mono ${
                    activeVolume === 2 ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                  }`}>
                    {activeVolume === 2 ? 'TẬP 2: PHẦN 2' : 'TẬP 1: BỘ GỐC'}
                  </span>
                  <span className="text-sm font-bold font-mono text-white">
                    CÂU {currentQ.id}
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="text-xs font-semibold text-slate-300">
                    {currentQ.topicTitle}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {currentQ.prompt}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => sound.speakEnglish(currentQ.correctSentence || currentQ.sentence)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 cursor-pointer transition-colors"
                title="Nghe phát âm chuẩn câu này"
              >
                <Volume2 className="w-4 h-4 text-teal-400" />
                <span>Phát âm câu</span>
              </button>

              <button
                disabled={selectedQuestionId >= 100}
                onClick={handleNext}
                className="p-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                title="Câu kế tiếp"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* SENTENCE HERO BANNER WITH IPA PHONETICS & VIETNAMESE TRANSLATION */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-slate-800 space-y-3 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                Nội Dung Câu Tiếng Anh:
              </span>
              <button
                onClick={() => sound.speakEnglish(currentQ.correctSentence || currentQ.sentence)}
                className="flex items-center gap-1 text-xs text-teal-400 hover:text-teal-300 font-semibold cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Nghe đọc mẫu</span>
              </button>
            </div>

            <div className="text-lg sm:text-xl font-bold text-white font-display tracking-tight leading-snug">
              {currentQ.sentence}
            </div>

            {/* IPA Phonetic Transcription */}
            {currentQ.ipa && (
              <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-teal-300 bg-teal-950/30 px-3 py-1.5 rounded-xl border border-teal-800/40">
                <span className="text-teal-400 font-bold uppercase text-[10px]">IPA:</span>
                <span>{currentQ.ipa}</span>
              </div>
            )}

            {/* Vietnamese Meaning Translation */}
            {currentQ.translation && (
              <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-500/20 text-xs sm:text-sm text-amber-200/90 leading-relaxed">
                <span className="font-bold text-amber-400">🇻🇳 Dịch nghĩa: </span>
                <span>{currentQ.translation}</span>
              </div>
            )}
          </div>

          {/* S-V-O LOCOMOTIVE DIAGNOSTIC / VISUAL STAGE */}
          <div className="space-y-4">

            {/* CHỦ ĐỀ 1: GIẢI PHẪU ĐOÀN TÀU 3 TOA (Câu 1 - 15) */}
            {currentQ.topicId === 'topic-1-svo-train' && trainData && (
              <div className="space-y-4">
                <TrainVisualizer
                  sText={trainData.s}
                  vText={trainData.v}
                  oText={trainData.o}
                  advText={trainData.adv}
                  isDerailed={trainData.isDerailed}
                  derailReason={trainData.derailReason}
                />

                {/* Compare: Original vs Correct Standard */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl border ${
                    trainData.isDerailed 
                      ? 'bg-rose-950/20 border-rose-800/40 text-rose-200' 
                      : 'bg-emerald-950/20 border-emerald-800/40 text-emerald-200'
                  }`}>
                    <div className="flex items-center gap-2 mb-2 font-bold text-xs uppercase font-mono">
                      {trainData.isDerailed ? (
                        <>
                          <AlertTriangle className="w-4 h-4 text-rose-400" />
                          <span>Câu Đề Bài (Bị Trật Bánh)</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>Câu Đề Bài (Đúng Chuẩn S-V-O)</span>
                        </>
                      )}
                    </div>
                    <div className="text-base font-semibold text-white">
                      {currentQ.sentence}
                    </div>
                    {currentQ.ipa && (
                      <div className="text-xs font-mono text-teal-300 mt-2">
                        IPA: {currentQ.ipa}
                      </div>
                    )}
                    {currentQ.translation && (
                      <div className="text-xs text-amber-300/90 mt-1">
                        🇻🇳 {currentQ.translation}
                      </div>
                    )}
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-700/50 text-emerald-200">
                    <div className="flex items-center gap-2 mb-2 font-bold text-xs uppercase font-mono text-emerald-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Câu Sửa Đúng Chuẩn</span>
                    </div>
                    <div className="text-base font-semibold text-white">
                      {currentQ.correctSentence || currentQ.sentence}
                    </div>
                    {(currentQ.correctIpa || (!trainData.isDerailed && currentQ.ipa)) && (
                      <div className="text-xs font-mono text-emerald-300 mt-2">
                        IPA: {currentQ.correctIpa || currentQ.ipa}
                      </div>
                    )}
                    {(currentQ.correctTranslation || (!trainData.isDerailed && currentQ.translation)) && (
                      <div className="text-xs text-amber-200/95 mt-1 font-medium">
                        🇻🇳 {currentQ.correctTranslation || currentQ.translation}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* CHỦ ĐỀ 2: PHÂN BIỆT TÂN NGỮ (O) VÀ BỔ NGỮ (C) (Câu 16 - 30) */}
            {currentQ.topicId === 'topic-2-object-complement' && ocData && (
              <div className="space-y-4">
                <MagnifierScaleVisualizer
                  sentence={currentQ.sentence}
                  targetElement={currentQ.targetElement || ''}
                  type={ocData.type}
                  formula={ocData.formula}
                  explanation={ocData.logicExplanation}
                />

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">Quy chuẩn ngữ pháp:</span>
                  <span className="text-xs font-bold font-mono text-amber-300">
                    {ocData.ruleTitle}
                  </span>
                </div>
              </div>
            )}

            {/* CHỦ ĐỀ 3: MA TRẬN TÂN NGỮ KÉP (Câu 31 - 45) */}
            {currentQ.topicId === 'topic-3-double-object' && (
              <div className="space-y-4">
                <DoubleObjectVisualizer
                  sentence={currentQ.sentence}
                  oDir={currentQ.oDir || ''}
                  oInd={currentQ.oInd || ''}
                  doubleObjectNote={currentQ.doubleObjectNote}
                  explanation={currentQ.detailedExplanation}
                />
              </div>
            )}

            {/* CHỦ ĐỀ 4: XI-NHAN TIỀN TỐ (Câu 46 - 60) */}
            {currentQ.topicId === 'topic-4-prefixes' && (
              <div className="space-y-4">
                <PrefixCompassVisualizer
                  baseWord={currentQ.baseWord}
                  prefix={currentQ.affixBreakdown?.split('+')[0]?.trim()}
                  combinedWord={currentQ.correctWord}
                  meaning={currentQ.meaning || (currentQ.correctWord ? VOCAB_DICTIONARY[currentQ.correctWord.toLowerCase()]?.meaning : undefined)}
                  ruleExplanation={currentQ.detailedExplanation}
                />
              </div>
            )}

            {/* CHỦ ĐỀ 5: CÂN ĐỐI TRỌNG & MẶT NẠ CẢM XÚC (Câu 61 - 75) */}
            {currentQ.topicId === 'topic-5-suffixes-masks' && (
              <div className="space-y-4">
                <BalanceMaskVisualizer
                  baseWord={currentQ.baseWord}
                  affixType={currentQ.id <= 68 ? 'ful_less' : 'ed_ing'}
                  chosenType={currentQ.id <= 68 ? (currentQ.correctWord?.endsWith('ful') ? '-ful' : '-less') : (currentQ.correctWord?.includes('ed') ? '-ed' : '-ing')}
                  note={currentQ.detailedExplanation}
                />
              </div>
            )}

            {/* CHỦ ĐỀ 6: THUẬT TOÁN 3 GIÂY (Câu 76 - 100) */}
            {currentQ.topicId === 'topic-6-three-sec-parts-of-speech' && (
              <div className="space-y-4">
                <AlgorithmScannerVisualizer
                  sentence={currentQ.sentence}
                  targetPosNeeded={currentQ.targetPosNeeded || ''}
                  suffixHint={currentQ.suffixHint || ''}
                  stepBreakdown={currentQ.threeSecAlgorithm}
                  selectedOptionText={currentQ.options?.find(o => o.label === currentQ.correctOption)?.text}
                />

                {/* 4 Options Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {currentQ.options?.map(opt => {
                    const isRight = opt.label === currentQ.correctOption;
                    return (
                      <div
                        key={opt.label}
                        className={`p-3.5 rounded-xl border text-center ${
                          isRight 
                            ? 'bg-emerald-950/30 border-emerald-500 text-emerald-200 shadow-md ring-1 ring-emerald-500/30' 
                            : 'bg-slate-900 border-slate-800 text-slate-400'
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-md inline-flex items-center justify-center text-xs font-bold font-mono mb-1 ${
                          isRight ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {opt.label}
                        </span>
                        <div className="text-sm font-bold block text-white font-mono">{opt.text}</div>
                        {isRight && (
                          <span className="text-[10px] text-emerald-400 font-bold block mt-1">ĐÁP ÁN ĐÚNG</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Deep Breakdown Card matching Part II of PDF */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
                <Lightbulb className="w-5 h-5" />
                <span>Giải Phẫu Chi Tiết &amp; Logic Ngữ Pháp (Phần II)</span>
              </div>

              <div className="text-sm text-slate-200 leading-relaxed font-normal">
                {currentQ.detailedExplanation}
              </div>

              {/* Memory hook container */}
              <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-800/40 text-xs text-teal-200 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-teal-300">Mẹo ghi nhớ siêu tốc: </span>
                  <span>{currentQ.memoryHook}</span>
                </div>
              </div>
            </div>

            {/* Word-by-Word Granular Grammatical Dissection */}
            <WordByWordInspector
              sentence={getCompletedSentence(currentQ)}
              originalSentence={currentQ.sentence}
              title={`Giải Phẫu Chi Tiết Từng Từ 1 (${activeVolume === 2 ? 'Tập 2' : 'Tập 1'} - Câu ${currentQ.id})`}
              question={currentQ}
            />

          </div>
        </div>
      )}

      {/* ================= VIEW MODE 2: FULL TABLE VIEW ================= */}
      {viewMode === 'table' && (
        <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
          <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-mono text-slate-400 uppercase font-semibold">
              Bảng Phân Tích Chuyên Sâu Từng Câu Theo Chuẩn Tư Duy Logic ({filteredQuestions.length} câu)
            </span>
            <span className="text-xs font-mono text-teal-400">
              Đang lọc: {selectedVolume === 2 ? 'Tập 2 (Phần 2)' : selectedVolume === 1 ? 'Tập 1 (Bộ gốc)' : 'Tất cả 200 câu'}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/70 text-slate-400 font-mono">
                  <th className="py-3 px-3 w-16 text-center">TẬP</th>
                  <th className="py-3 px-3 w-14 text-center">CÂU</th>
                  <th className="py-3 px-4 w-44">TRẠNG THÁI / PHÂN LOẠI</th>
                  <th className="py-3 px-4 w-84">CÂU TIẾNG ANH &amp; DỊCH NGHĨA</th>
                  <th className="py-3 px-4">GIẢI PHẪU CHI TIẾT &amp; LOGIC NGỮ PHÁP</th>
                  <th className="py-3 px-3 w-20 text-center">THAO TÁC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredQuestions.map((q) => {
                  const isCurrent = (q.volume || 1) === activeVolume && q.id === selectedQuestionId;

                  return (
                    <tr 
                      key={`${q.volume || 1}-${q.id}`} 
                      className={`hover:bg-slate-800/40 transition-colors ${
                        isCurrent ? 'bg-teal-950/20' : ''
                      }`}
                    >
                      {/* Tập */}
                      <td className="py-3.5 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                          (q.volume || 1) === 2 ? 'bg-teal-500/20 text-teal-300' : 'bg-indigo-500/20 text-indigo-300'
                        }`}>
                          {(q.volume || 1) === 2 ? 'Tập 2' : 'Tập 1'}
                        </span>
                      </td>

                      {/* Câu # */}
                      <td className="py-3.5 px-3 text-center font-mono font-bold text-teal-400">
                        {q.id}
                      </td>

                      {/* Trạng thái / Phân loại */}
                      <td className="py-3.5 px-4 font-semibold">
                        {q.type === 'train_derail' ? (
                          q.isDerailed ? (
                            <span className="text-rose-400 flex items-center gap-1 font-mono">
                              <AlertTriangle className="w-3.5 h-3.5" /> TRẬT BÁNH
                            </span>
                          ) : (
                            <span className="text-emerald-400 flex items-center gap-1 font-mono">
                              <CheckCircle2 className="w-3.5 h-3.5" /> ĐÚNG CHUẨN
                            </span>
                          )
                        ) : q.type === 'object_vs_complement' ? (
                          <span className={`font-mono px-2 py-0.5 rounded text-[11px] ${
                            q.ocType === 'C' ? 'bg-amber-500/20 text-amber-300' : 'bg-indigo-500/20 text-indigo-300'
                          }`}>
                            {q.ocType === 'C' ? 'C (Bổ ngữ)' : 'O (Tân ngữ)'}
                          </span>
                        ) : q.type === 'double_object' ? (
                          <span className="text-indigo-300 font-mono">
                            O_dir &amp; O_ind
                          </span>
                        ) : q.type === 'fill_prefix' ? (
                          <span className="text-cyan-300 font-mono">
                            Tiền tố: {q.affixBreakdown?.split('+')[0]?.trim()}
                          </span>
                        ) : q.type === 'fill_suffix' ? (
                          <span className="text-rose-300 font-mono">
                            {q.id <= 68 ? 'Đĩa cân -ful / -less' : 'Mặt nạ -ed / -ing'}
                          </span>
                        ) : (
                          <span className="text-purple-300 font-mono font-bold">
                            Đáp án: {q.correctOption} ({q.options?.find(o => o.label === q.correctOption)?.text})
                          </span>
                        )}
                      </td>

                      {/* Câu đề bài / Đáp án & Bản dịch */}
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-slate-200">
                          {q.sentence}
                        </div>
                        {q.ipa && (
                          <div className="text-[11px] text-teal-400 font-mono mt-0.5">
                            {q.ipa}
                          </div>
                        )}
                        {q.translation && (
                          <div className="text-[11px] text-amber-300/90 mt-1">
                            🇻🇳 {q.translation}
                          </div>
                        )}
                        {q.correctSentence && q.isDerailed && (
                          <div className="text-[11px] text-emerald-400 font-mono mt-1 flex items-center gap-1">
                            <ArrowRight className="w-3 h-3" />
                            <span>{q.correctSentence}</span>
                          </div>
                        )}
                      </td>

                      {/* Giải phẫu chi tiết */}
                      <td className="py-3.5 px-4 text-slate-300 leading-relaxed">
                        <div className="line-clamp-2">
                          {q.detailedExplanation}
                        </div>
                        <div className="text-[11px] text-teal-400 font-mono mt-1 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>{q.memoryHook}</span>
                        </div>
                      </td>

                      {/* Thao tác */}
                      <td className="py-3.5 px-3 text-center">
                        <button
                          onClick={() => handleSelectQuestion((q.volume || 1) as (1 | 2), q.id)}
                          className="px-2.5 py-1 rounded-lg bg-teal-400/20 hover:bg-teal-400/30 text-teal-300 font-mono font-semibold text-[11px] border border-teal-400/40 cursor-pointer"
                        >
                          Soi Kính Lúp
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
