import React from 'react';
import { Search, Scissors, Zap, ShieldCheck } from 'lucide-react';

interface AlgorithmScannerVisualizerProps {
  sentence: string;
  targetPosNeeded: string;
  suffixHint: string;
  stepBreakdown?: string;
  selectedOptionText?: string;
}

export const AlgorithmScannerVisualizer: React.FC<AlgorithmScannerVisualizerProps> = ({
  sentence,
  targetPosNeeded,
  suffixHint,
  stepBreakdown,
  selectedOptionText
}) => {
  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-6 overflow-hidden shadow-2xl">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.12),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-5 relative z-10">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 font-mono">
            Thuật Toán 3 Giây – Trắc Nghiệm Từ Loại
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-xs text-slate-400">3 Bước Khóa Chặt Đáp Án</span>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-medium font-mono">
          <span>⚡ TỐC ĐỘ PHẢN XẠ &lt; 3S</span>
        </div>
      </div>

      {/* 3 Steps Pipeline Visual */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* BƯỚC 1: SOI KÍNH LÚP */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center text-xs font-bold font-mono">
              1
            </div>
            <span className="text-xs font-bold text-slate-200">Soi Kính Lúp</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Nhìn từ đứng ngay trước và ngay sau chỗ trống để bắt tín hiệu ngữ pháp.
          </p>
          <div className="mt-3 p-2 rounded bg-slate-950 border border-slate-800/80 text-[11px] text-purple-300 font-mono truncate">
            {sentence.replace('_______________', '[ ? ]')}
          </div>
        </div>

        {/* BƯỚC 2: ĐOÁN TOA TÀU THIẾU */}
        <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-800/40 shadow-lg shadow-purple-950/20">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-purple-500/30 text-purple-200 flex items-center justify-center text-xs font-bold font-mono">
              2
            </div>
            <span className="text-xs font-bold text-purple-200">Đoán Toa Thiếu</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Cần Danh từ (N), Động từ (V), Tính từ (Adj) hay Trạng từ (Adv)?
          </p>
          <div className="mt-3 px-2.5 py-1.5 rounded bg-purple-900/40 border border-purple-700/50 text-xs text-purple-200 font-semibold flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5 text-purple-300" />
            <span>Cần: {targetPosNeeded}</span>
          </div>
        </div>

        {/* BƯỚC 3: DÙNG KÉO CHẶT ĐUÔI */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-bold font-mono">
              3
            </div>
            <span className="text-xs font-bold text-slate-200">Kéo Cắt Đuôi Vàng</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Nhận diện hậu tố đặc trưng để chốt chuẩn xác đáp án trong tích tắc.
          </p>
          <div className="mt-3 px-2.5 py-1.5 rounded bg-emerald-950/40 border border-emerald-800/50 text-xs text-emerald-300 font-semibold flex items-center gap-1.5">
            <Scissors className="w-3.5 h-3.5 text-emerald-400" />
            <span>{suffixHint}</span>
          </div>
        </div>
      </div>

      {/* Selected word result */}
      {selectedOptionText && (
        <div className="mt-4 p-3.5 rounded-xl bg-purple-950/30 border border-purple-900/50 text-xs text-purple-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Khóa mục tiêu: <strong className="text-white text-sm font-mono">{selectedOptionText}</strong></span>
          </div>
          <span className="text-[11px] text-purple-300 font-mono">Chính xác 100%</span>
        </div>
      )}

      {stepBreakdown && (
        <div className="mt-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-300 leading-relaxed">
          <span className="font-semibold text-purple-300">Tư duy giải phẫu: </span>
          {stepBreakdown}
        </div>
      )}
    </div>
  );
};
