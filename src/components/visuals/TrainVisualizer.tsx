import React from 'react';
import { AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

interface TrainVisualizerProps {
  sText?: string;
  vText?: string;
  oText?: string;
  advText?: string;
  isDerailed?: boolean;
  derailReason?: string;
  sentence?: string;
  interactive?: boolean;
  onSwap?: (fromIdx: number, toIdx: number) => void;
}

export const TrainVisualizer: React.FC<TrainVisualizerProps> = ({
  sText = 'My sister',
  vText = 'baked',
  oText = 'a delicious cake',
  advText = 'yesterday',
  isDerailed = false,
  derailReason
}) => {
  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-6 overflow-hidden shadow-2xl">
      {/* Background ambient railway glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.12),transparent_70%)] pointer-events-none" />

      {/* Header status */}
      <div className="flex items-center justify-between mb-5 relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 font-mono">
            S-V-O Locomotive Diagnostic
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-xs text-slate-400">Quy tắc 1 chiều từ Trái sang Phải</span>
        </div>

        <div>
          {isDerailed ? (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-medium">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>CẢNH BÁO: TÀU TRẬT BÁNH</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>ĐOÀN TÀU ĐÚNG CHUẨN</span>
            </div>
          )}
        </div>
      </div>

      {/* The Train Railway Stage */}
      <div className="relative py-4 px-2">
        {/* Carriages container */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-3 items-stretch transition-all duration-300 relative z-10 ${isDerailed ? 'shake-mild' : ''}`}>
          
          {/* TOA 1: CHỦ NGỮ S */}
          <div className={`relative rounded-xl p-4 transition-all duration-200 border ${
            isDerailed 
              ? 'bg-rose-950/20 border-rose-800/40' 
              : 'bg-emerald-950/30 border-emerald-700/50 shadow-lg shadow-emerald-950/40'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold font-mono tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                TOA 1: [S]
              </span>
              <span className="text-[11px] text-slate-400">Đầu kéo tạo lực</span>
            </div>
            <div className="text-base font-semibold text-slate-100 min-h-[1.75rem] flex items-center">
              {sText || '...'}
            </div>
            <p className="text-[11px] text-slate-400 mt-2">Người / vật chủ thể hành động</p>
            {/* Coupling link */}
            <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 text-slate-600 z-20">
              <ArrowRight className="w-4 h-4 text-emerald-500/60" />
            </div>
          </div>

          {/* TOA 2: ĐỘNG TỪ V */}
          <div className={`relative rounded-xl p-4 transition-all duration-200 border ${
            !vText || isDerailed 
              ? 'bg-amber-950/20 border-amber-800/40' 
              : 'bg-teal-950/30 border-teal-700/50 shadow-lg shadow-teal-950/40'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold font-mono tracking-wider px-2 py-0.5 rounded bg-teal-500/20 text-teal-300">
                TOA 2: [V]
              </span>
              <span className="text-[11px] text-slate-400">Động cơ máy</span>
            </div>
            <div className="text-base font-semibold text-slate-100 min-h-[1.75rem] flex items-center">
              {vText ? vText : <span className="text-rose-400 italic">Mất động cơ (Cụt câu)</span>}
            </div>
            <p className="text-[11px] text-slate-400 mt-2">Động từ truyền động năng lực</p>
            {/* Coupling link */}
            <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 text-slate-600 z-20">
              <ArrowRight className="w-4 h-4 text-teal-500/60" />
            </div>
          </div>

          {/* TOA 3: TÂN NGỮ O */}
          <div className={`relative rounded-xl p-4 transition-all duration-200 border ${
            isDerailed 
              ? 'bg-rose-950/20 border-rose-800/40' 
              : 'bg-indigo-950/30 border-indigo-700/50 shadow-lg shadow-indigo-950/40'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold font-mono tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                TOA 3: [O]
              </span>
              <span className="text-[11px] text-slate-400">Thùng hứng lực</span>
            </div>
            <div className="text-base font-semibold text-slate-100 min-h-[1.75rem] flex items-center">
              {oText || '...'}
            </div>
            <p className="text-[11px] text-slate-400 mt-2">Người / vật đón nhận tác động</p>
            {/* Coupling link */}
            {advText && (
              <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 text-slate-600 z-20">
                <ArrowRight className="w-4 h-4 text-indigo-500/60" />
              </div>
            )}
          </div>

          {/* TOA 4: PHỤ TRỢ (ADV / TIME / PLACE) */}
          <div className="relative rounded-xl p-4 bg-slate-800/40 border border-slate-700/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold font-mono tracking-wider px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                TOA PHỤ: [ADV]
              </span>
              <span className="text-[11px] text-slate-400">Hậu cần</span>
            </div>
            <div className="text-base font-semibold text-slate-300 min-h-[1.75rem] flex items-center">
              {advText || '(Không bắt buộc)'}
            </div>
            <p className="text-[11px] text-slate-400 mt-2">Thời gian, nơi chốn, cách thức</p>
          </div>
        </div>

        {/* Railway Tracks Graphic */}
        <div className="mt-4 pt-3 border-t-2 border-slate-700 relative">
          <div className="flex justify-between items-center px-4">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-1.5 h-3 bg-slate-700 rounded-sm" />
            ))}
          </div>
          <div className="w-full h-1 bg-slate-800 mt-1" />
        </div>
      </div>

      {/* Derail Reason Note if derailed */}
      {isDerailed && derailReason && (
        <div className="mt-3 p-3.5 rounded-xl bg-rose-950/30 border border-rose-900/50 text-rose-200 text-xs flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-rose-300">Nguyên nhân trật bánh: </span>
            <span>{derailReason}</span>
          </div>
        </div>
      )}
    </div>
  );
};
