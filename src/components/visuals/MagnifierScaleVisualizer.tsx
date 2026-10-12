import React from 'react';
import { Search, Equal, EqualNot, Sparkles, Zap } from 'lucide-react';

interface MagnifierScaleProps {
  sentence: string;
  targetElement: string;
  type: 'O' | 'C';
  formula: string;
  subject?: string;
  explanation?: string;
}

export const MagnifierScaleVisualizer: React.FC<MagnifierScaleProps> = ({
  sentence,
  targetElement,
  type,
  formula,
  explanation
}) => {
  const isComplement = type === 'C';

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-6 overflow-hidden shadow-2xl">
      {/* Background glow */}
      <div className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${
        isComplement 
          ? 'bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.12),transparent_70%)]' 
          : 'bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.12),transparent_70%)]'
      }`} />

      {/* Header */}
      <div className="flex items-center justify-between mb-5 relative z-10">
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 font-mono">
            Kính Lúp Phân Biệt O & C
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-xs text-slate-400">Phép thử Dấu Bằng (=)</span>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-mono border"
          style={{
            borderColor: isComplement ? 'rgba(245,158,11,0.4)' : 'rgba(99,102,241,0.4)',
            backgroundColor: isComplement ? 'rgba(245,158,11,0.1)' : 'rgba(99,102,241,0.1)',
            color: isComplement ? '#fcd34d' : '#a5b4fc'
          }}
        >
          {isComplement ? (
            <>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>BỔ NGỮ (C) · CHÂN DUNG ĐỒNG NHẤT</span>
            </>
          ) : (
            <>
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              <span>TÂN NGỮ (O) · NẠN NHÂN CHỊU TÁC ĐỘNG</span>
            </>
          )}
        </div>
      </div>

      {/* Central Interactive Comparison Card */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Left Side: Subject or Target Receiver */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/60 text-center">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
            Đối tượng khởi điểm
          </span>
          <div className="text-sm md:text-base font-semibold text-slate-100">
            {sentence.split('[')[0]?.trim() || 'Chủ ngữ (S)'}
          </div>
        </div>

        {/* Center: The Operator (Equal vs Not Equal) */}
        <div className="flex flex-col items-center justify-center p-3">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-lg transition-transform duration-300 ${
            isComplement 
              ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-amber-950/50 scale-105' 
              : 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300 shadow-indigo-950/50 scale-105'
          }`}>
            {isComplement ? (
              <Equal className="w-8 h-8 stroke-[2.5]" />
            ) : (
              <EqualNot className="w-8 h-8 stroke-[2.5]" />
            )}
          </div>
          <span className={`text-xs font-mono font-bold mt-2 ${isComplement ? 'text-amber-400' : 'text-indigo-400'}`}>
            {isComplement ? 'S = C (Đồng nhất)' : 'S ≠ O (Tách biệt)'}
          </span>
        </div>

        {/* Right Side: The Analyzed Chunk */}
        <div className={`p-4 rounded-xl border text-center transition-all ${
          isComplement 
            ? 'bg-amber-950/20 border-amber-700/40 text-amber-100' 
            : 'bg-indigo-950/20 border-indigo-700/40 text-indigo-100'
        }`}>
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
            Thành phần trong ngoặc
          </span>
          <div className="text-sm md:text-base font-semibold">
            {targetElement || '[ ... ]'}
          </div>
        </div>
      </div>

      {/* Logic Breakdown banner */}
      <div className="mt-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
        <div className="w-5 h-5 rounded-md bg-slate-800 flex items-center justify-center shrink-0 mt-0.5 text-slate-400 font-mono font-bold">
          💡
        </div>
        <div>
          <span className="font-semibold text-slate-200">Công thức giải phẫu: </span>
          <span className="font-mono text-amber-300">{formula}</span>
          {explanation && (
            <p className="text-slate-400 mt-1 leading-relaxed">{explanation}</p>
          )}
        </div>
      </div>
    </div>
  );
};
