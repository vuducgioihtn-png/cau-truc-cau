import React from 'react';
import { Compass, ArrowRight, CornerDownRight, Navigation } from 'lucide-react';
import { VOCAB_DICTIONARY } from '../../utils/wordTokenizer';

interface PrefixCompassVisualizerProps {
  baseWord?: string;
  prefix?: string;
  combinedWord?: string;
  meaning?: string;
  ruleExplanation?: string;
}

export const PrefixCompassVisualizer: React.FC<PrefixCompassVisualizerProps> = ({
  baseWord = 'LEGAL',
  prefix = 'il-',
  combinedWord = 'illegal',
  meaning,
  ruleExplanation
}) => {
  const normalizedKey = combinedWord?.toLowerCase().trim() || '';
  const dictMeaning = VOCAB_DICTIONARY[normalizedKey]?.meaning;
  const rawMeaning = meaning || dictMeaning || (combinedWord ? `Nghĩa mới sau khi ghép tiền tố ${prefix || ''}` : 'Ý nghĩa của từ');
  const displayMeaning = rawMeaning.charAt(0).toUpperCase() + rawMeaning.slice(1);

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-6 overflow-hidden shadow-2xl">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.1),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-5 relative z-10">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
            Xi-Nhan Tiền Tố (Prefix Steering)
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-xs text-slate-400">Bẻ lái hướng nghĩa</span>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium font-mono">
          <Navigation className="w-3.5 h-3.5 rotate-45 text-cyan-400" />
          <span>BẺ LÁI CHIỀU NGHĨA</span>
        </div>
      </div>

      {/* Visual Word Synthesis Lane */}
      <div className="relative z-10 py-3">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          {/* 1. Xi-nhan Tiền tố */}
          <div className="w-full md:w-auto p-4 rounded-xl bg-cyan-950/30 border border-cyan-700/50 text-center min-w-[140px] shadow-lg shadow-cyan-950/30">
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
              Xi-nhan (Prefix)
            </span>
            <div className="text-xl font-bold font-mono text-cyan-300">
              {prefix}
            </div>
          </div>

          <div className="text-slate-600 font-bold text-lg hidden md:block">+</div>

          {/* 2. Gốc từ */}
          <div className="w-full md:w-auto p-4 rounded-xl bg-slate-900/80 border border-slate-700 text-center min-w-[150px]">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
              Gốc từ nguyên bản
            </span>
            <div className="text-xl font-bold text-slate-200">
              {baseWord}
            </div>
          </div>

          <div className="text-slate-500 hidden md:block">
            <ArrowRight className="w-5 h-5 text-cyan-400" />
          </div>

          {/* 3. Từ mới sau khi bẻ lái */}
          <div className="w-full md:w-auto p-4 rounded-xl bg-gradient-to-r from-cyan-900/40 to-indigo-900/40 border border-cyan-500/50 text-center min-w-[170px] shadow-xl">
            <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest block mb-1">
              Từ mới hoàn chỉnh
            </span>
            <div className="text-xl font-bold text-white tracking-wide font-display">
              {combinedWord}
            </div>
          </div>
        </div>

        {/* Translation tag */}
        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-300">
          <CornerDownRight className="w-4 h-4 text-cyan-400" />
          <span>Ý nghĩa: <strong className="text-cyan-300">{displayMeaning}</strong></span>
        </div>
      </div>

      {/* Rule explanation footer */}
      {ruleExplanation && (
        <div className="mt-4 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-300 leading-relaxed">
          <span className="font-semibold text-cyan-300">Mẹo ghép tiền tố: </span>
          {ruleExplanation}
        </div>
      )}
    </div>
  );
};
