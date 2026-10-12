import React from 'react';
import { Package, UserCheck, ArrowRight, Sparkles } from 'lucide-react';

interface DoubleObjectVisualizerProps {
  sentence: string;
  oDir: string;
  oInd: string;
  doubleObjectNote?: string;
  explanation?: string;
}

export const DoubleObjectVisualizer: React.FC<DoubleObjectVisualizerProps> = ({
  sentence,
  oDir,
  oInd,
  doubleObjectNote,
  explanation
}) => {
  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-6 overflow-hidden shadow-2xl">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.12),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-5 relative z-10">
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 font-mono">
            Ma Trận Tân Ngữ Kép (O_dir & O_ind)
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-xs text-slate-400">Vật Chạm Vào ⟷ Người Đón Nhận</span>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>V + O_ind + O_dir</span>
        </div>
      </div>

      {/* Sentence Highlight View */}
      <div className="relative z-10 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm md:text-base font-medium text-slate-200 mb-4 text-center">
        {sentence}
      </div>

      {/* Two Hands Interaction Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* TÂN NGỮ GIÁN TIẾP (O_IND) */}
        <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-700/50 shadow-lg shadow-indigo-950/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
              O_IND (GIÁN TIẾP)
            </span>
            <span className="text-xs text-indigo-400 flex items-center gap-1 font-medium">
              <UserCheck className="w-3.5 h-3.5" /> Chìa tay đón nhận
            </span>
          </div>
          <div className="text-lg font-bold text-white font-display mt-1">
            {oInd}
          </div>
          <p className="text-xs text-slate-300 mt-2">
            Đối tượng đứng đón nhận kết quả hoặc hưởng lợi từ hành động (Trả lời: <em>Cho ai? / Whom?</em>).
          </p>
        </div>

        {/* TÂN NGỮ TRỰC TIẾP (O_DIR) */}
        <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-700/50 shadow-lg shadow-teal-950/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300">
              O_DIR (TRỰC TIẾP)
            </span>
            <span className="text-xs text-teal-400 flex items-center gap-1 font-medium">
              <Package className="w-3.5 h-3.5" /> Đồ vật chạm vào
            </span>
          </div>
          <div className="text-lg font-bold text-white font-display mt-1">
            {oDir}
          </div>
          <p className="text-xs text-slate-300 mt-2">
            Đồ vật hoặc sự việc bị bàn tay/lực động từ chạm vào hoặc di chuyển (Trả lời: <em>Cái gì? / What?</em>).
          </p>
        </div>
      </div>

      {/* Footer Notes */}
      <div className="mt-4 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-300 leading-relaxed">
        {doubleObjectNote && (
          <div className="flex items-center gap-1.5 font-mono text-indigo-300 mb-1">
            <ArrowRight className="w-3.5 h-3.5" />
            <span>{doubleObjectNote}</span>
          </div>
        )}
        {explanation && (
          <div className="text-slate-400">{explanation}</div>
        )}
      </div>
    </div>
  );
};
