import React from 'react';
import { Scale, Smile, Sparkles, Flame } from 'lucide-react';

interface BalanceMaskVisualizerProps {
  baseWord?: string;
  affixType?: 'ful_less' | 'ed_ing';
  chosenType?: '-ful' | '-less' | '-ed' | '-ing';
  exampleText?: string;
  note?: string;
}

export const BalanceMaskVisualizer: React.FC<BalanceMaskVisualizerProps> = ({
  baseWord = 'HOME',
  affixType = 'ful_less',
  chosenType,
  note
}) => {
  const isFulSelected = chosenType === '-ful';
  const isLessSelected = chosenType === '-less';
  const isEdSelected = chosenType === '-ed';
  const isIngSelected = chosenType === '-ing';

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-6 overflow-hidden shadow-2xl">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(244,63,94,0.1),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-5 relative z-10">
        <div className="flex items-center gap-2">
          {affixType === 'ful_less' ? (
            <Scale className="w-4 h-4 text-rose-400" />
          ) : (
            <Smile className="w-4 h-4 text-amber-400" />
          )}
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono">
            {affixType === 'ful_less' ? 'Cân Đối Trọng Hậu Tố' : 'Mặt Nạ Cảm Xúc (-ED / -ING)'}
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-xs text-slate-400">
            {affixType === 'ful_less' ? 'Quy luật Đầy ⟷ Rỗng' : 'Tâm trạng Người ⟷ Bản chất Vật'}
          </span>
        </div>

        <div className="text-xs font-mono text-slate-400">
          Gốc từ: <span className="font-bold text-slate-200">{baseWord}</span>
        </div>
      </div>

      {affixType === 'ful_less' ? (
        /* BALANCING SCALE VISUAL */
        <div className="relative z-10 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* -FUL SIDE: ĐĨA CÂN ĐẦY ĐẶN */}
            <div className={`p-4 rounded-xl border transition-all duration-300 relative ${
              isFulSelected 
                ? 'bg-emerald-950/30 border-emerald-500/50 shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-500/30' 
                : 'bg-slate-900/60 border-slate-800 opacity-90'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                  HẬU TỐ -FUL
                </span>
                <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Đĩa cân đầy
                </span>
              </div>
              <div className="text-lg font-bold text-slate-100 font-display">
                {baseWord.toLowerCase()}ful
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Có, dồi dào, tràn đầy, hữu ích (Full of...)
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Ví dụ: useful, helpful, careful, hopeful</span>
              </div>
            </div>

            {/* -LESS SIDE: ĐĨA CÂN RỖNG TUẾCH */}
            <div className={`p-4 rounded-xl border transition-all duration-300 relative ${
              isLessSelected 
                ? 'bg-rose-950/30 border-rose-500/50 shadow-lg shadow-rose-950/40 ring-1 ring-rose-500/30' 
                : 'bg-slate-900/60 border-slate-800 opacity-90'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                  HẬU TỐ -LESS
                </span>
                <span className="text-xs text-rose-400 font-medium">
                  Đĩa cân rỗng (Không có)
                </span>
              </div>
              <div className="text-lg font-bold text-slate-100 font-display">
                {baseWord.toLowerCase()}less
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Không có, thiếu hụt, mất mát, vô dụng (Without...)
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-400">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>Ví dụ: homeless, useless, helpless, careless</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* THE TWO EMOTION MASKS VISUAL */
        <div className="relative z-10 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* MASK -ED: HUMAN FEELING */}
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              isEdSelected 
                ? 'bg-indigo-950/30 border-indigo-500/50 shadow-lg shadow-indigo-950/40 ring-1 ring-indigo-500/30' 
                : 'bg-slate-900/60 border-slate-800'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                  MẶT NẠ [-ED]
                </span>
                <span className="text-xs text-indigo-400 font-medium">
                  🎭 Con người cảm nhận
                </span>
              </div>
              <div className="text-lg font-bold text-slate-100 font-display">
                Tâm trạng bên trong (Inner feeling)
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Chỉ cảm xúc chủ quan, trạng thái con người bị/được tác động vào.
              </p>
              <div className="mt-3 p-2 rounded bg-indigo-950/40 border border-indigo-800/40 text-[11px] text-indigo-200">
                &ldquo;I was <strong className="text-indigo-300">bored</strong> / She felt <strong className="text-indigo-300">tired</strong> / He was <strong className="text-indigo-300">interested</strong>&rdquo;
              </div>
            </div>

            {/* MASK -ING: EMITTING STIMULUS */}
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              isIngSelected 
                ? 'bg-amber-950/30 border-amber-500/50 shadow-lg shadow-amber-950/40 ring-1 ring-amber-500/30' 
                : 'bg-slate-900/60 border-slate-800'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                  MẶT NẠ [-ING]
                </span>
                <span className="text-xs text-amber-400 font-medium flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5" /> Bản chất sự vật phát ra
                </span>
              </div>
              <div className="text-lg font-bold text-slate-100 font-display">
                Tác động ngoại lực (Emitting vibe)
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Bản chất nội tại của sự vật, sự việc phát sóng tác động lên người khác.
              </p>
              <div className="mt-3 p-2 rounded bg-amber-950/40 border border-amber-800/40 text-[11px] text-amber-200">
                &ldquo;The lecture was <strong className="text-amber-300">boring</strong> / The game was <strong className="text-amber-300">exciting</strong> / An <strong className="text-amber-300">amazing</strong> plot&rdquo;
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Explanatory note */}
      {note && (
        <div className="mt-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-300 leading-relaxed">
          <span className="font-semibold text-rose-300">Giải phẫu chuyên sâu: </span>
          {note}
        </div>
      )}
    </div>
  );
};
