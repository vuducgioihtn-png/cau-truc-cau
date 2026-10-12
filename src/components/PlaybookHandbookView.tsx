import React, { useState } from 'react';
import { BookOpen, Search, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { PLAYBOOK_CHAPTERS } from '../data/cheatsheets';
import { sound } from '../utils/soundEffects';

export const PlaybookHandbookView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedChapterId, setExpandedChapterId] = useState<string>('ch-1');

  const filteredChapters = PLAYBOOK_CHAPTERS.filter(ch => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      ch.title.toLowerCase().includes(query) ||
      ch.mentalModelName.toLowerCase().includes(query) ||
      ch.rules.some(r => r.ruleName.toLowerCase().includes(query) || r.description.toLowerCase().includes(query))
    );
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
      
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-display flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-teal-400" />
            <span>Sổ Tay Đặc Vụ: The Grammar Playbook</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Tổng hợp toàn bộ công thức logic, mô hình tư duy trực quan và thuật toán 3 giây.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm kiếm công thức, quy tắc..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
          />
        </div>
      </div>

      {/* Chapters Accordion List */}
      <div className="space-y-4">
        {filteredChapters.map(chapter => {
          const isExpanded = expandedChapterId === chapter.id;

          return (
            <div 
              key={chapter.id}
              className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-lg transition-all"
            >
              {/* Chapter Header Button */}
              <button
                onClick={() => {
                  sound.playClick();
                  setExpandedChapterId(isExpanded ? '' : chapter.id);
                }}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-850/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 font-bold font-mono text-sm flex items-center justify-center shrink-0">
                    0{chapter.chapterNumber}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100 font-display">
                      {chapter.title}
                    </h3>
                    <div className="text-xs text-teal-300/80 font-mono mt-0.5">
                      {chapter.mentalModelName}
                    </div>
                  </div>
                </div>

                <div className="text-slate-400">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-2 border-t border-slate-800/80 space-y-5 animate-in fade-in">
                  
                  {/* Quote / Hook */}
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 italic text-xs text-slate-300">
                    &ldquo;{chapter.quote}&rdquo;
                  </div>

                  {/* Rules list */}
                  <div className="space-y-4">
                    {chapter.rules.map((rule, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/60 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-teal-300">
                            {rule.ruleName}
                          </span>
                          {rule.formula && (
                            <span className="text-xs font-mono text-amber-300 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                              {rule.formula}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {rule.description}
                        </p>

                        {/* Examples */}
                        {rule.examples.map((ex, exIdx) => (
                          <div key={exIdx} className="mt-2 p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1">
                            {ex.wrong && (
                              <div className="text-rose-400 font-mono line-through">
                                ❌ {ex.wrong}
                              </div>
                            )}
                            <div className="text-emerald-300 font-mono font-medium">
                              ✅ {ex.correct}
                            </div>
                            <div className="text-slate-400 text-[11px]">
                              💡 {ex.note}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Quick check guide */}
                  <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-800/30">
                    <span className="text-xs font-bold text-teal-300 block mb-2 font-mono flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> CHECKLIST PHẢN XẠ NHANH:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {chapter.quickCheckGuide.map((guide, gIdx) => (
                        <li key={gIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                          <span>{guide}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
