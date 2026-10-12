import React from 'react';
import { Volume2, VolumeX, Flame } from 'lucide-react';
import { sound } from '../utils/soundEffects';

interface NavbarProps {
  currentTab: 'quiz' | 'daily' | 'breakdown' | 'anatomy' | 'sandbox' | 'handbook';
  onSelectTab: (tab: 'quiz' | 'daily' | 'breakdown' | 'anatomy' | 'sandbox' | 'handbook') => void;
  streakDays: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onQuickStart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  streakDays,
  soundEnabled,
  onToggleSound,
  onQuickStart
}) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        
        {/* Zone 1: Single Text Element Wordmark */}
        <div 
          onClick={() => {
            sound.playClick();
            onSelectTab('daily');
          }}
          className="cursor-pointer flex items-center gap-2 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-teal-500 to-emerald-400 flex items-center justify-center text-slate-950 font-black text-sm shadow-md shadow-indigo-950/50 group-hover:scale-105 transition-transform">
            GR
          </div>
          <span className="font-display tracking-tight text-slate-100">
            Grammar<span className="text-teal-400">Reflex</span>
          </span>
        </div>

        {/* Zone 2: 4-5 Concise Single-Line Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => {
              sound.playClick();
              onSelectTab('daily');
            }}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              currentTab === 'daily' 
                ? 'text-teal-400 font-semibold border-b-2 border-teal-400' 
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            Phản Xạ Hàng Ngày
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onSelectTab('quiz');
            }}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              currentTab === 'quiz' 
                ? 'text-teal-400 font-semibold border-b-2 border-teal-400' 
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            Luyện Bài Tập
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onSelectTab('anatomy');
            }}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer flex items-center gap-1.5 ${
              currentTab === 'anatomy' 
                ? 'text-teal-300 font-bold border-b-2 border-teal-400' 
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <span>🔬 Học Giải Phẫu (Bảng 9 Cột)</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-teal-500/25 text-teal-300 font-mono font-bold border border-teal-400/40">
              20 Câu Chuẩn
            </span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onSelectTab('breakdown');
            }}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer flex items-center gap-1.5 ${
              currentTab === 'breakdown' 
                ? 'text-teal-400 font-semibold border-b-2 border-teal-400' 
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            <span>Thẻ Duyệt 200 Câu</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono border border-slate-700">
              Tập 1 & 2
            </span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onSelectTab('sandbox');
            }}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              currentTab === 'sandbox' 
                ? 'text-teal-400 font-semibold border-b-2 border-teal-400' 
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            Phòng Thí Nghiệm
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onSelectTab('handbook');
            }}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              currentTab === 'handbook' 
                ? 'text-teal-400 font-semibold border-b-2 border-teal-400' 
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            Sổ Tay Cấu Trúc
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action + Indicators */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-teal-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* Streak indicator */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold font-mono">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400/20" />
            <span>{streakDays} ngày</span>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={() => {
              sound.playClick();
              onQuickStart();
            }}
            className="px-4 py-2 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-sm hover:shadow-teal-400/20 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Thử Thách 3 Giây
          </button>
        </div>
      </div>

      {/* Mobile nav bar row for small screens */}
      <div className="flex md:hidden items-center justify-around px-2 py-2 border-t border-slate-800 bg-slate-950/50 text-xs font-medium">
        <button
          onClick={() => onSelectTab('daily')}
          className={`px-1.5 py-1 ${currentTab === 'daily' ? 'text-teal-400 font-bold' : 'text-slate-400'}`}
        >
          Hàng Ngày
        </button>
        <button
          onClick={() => onSelectTab('quiz')}
          className={`px-1.5 py-1 ${currentTab === 'quiz' ? 'text-teal-400 font-bold' : 'text-slate-400'}`}
        >
          Luyện Tập
        </button>
        <button
          onClick={() => onSelectTab('anatomy')}
          className={`px-1.5 py-1 ${currentTab === 'anatomy' ? 'text-teal-300 font-extrabold' : 'text-slate-400'}`}
        >
          🔬 Bảng 9 Cột
        </button>
        <button
          onClick={() => onSelectTab('breakdown')}
          className={`px-1.5 py-1 ${currentTab === 'breakdown' ? 'text-teal-400 font-bold' : 'text-slate-400'}`}
        >
          200 Thẻ
        </button>
        <button
          onClick={() => onSelectTab('sandbox')}
          className={`px-1.5 py-1 ${currentTab === 'sandbox' ? 'text-teal-400 font-bold' : 'text-slate-400'}`}
        >
          Thí Nghiệm
        </button>
        <button
          onClick={() => onSelectTab('handbook')}
          className={`px-1.5 py-1 ${currentTab === 'handbook' ? 'text-teal-400 font-bold' : 'text-slate-400'}`}
        >
          Sổ Tay
        </button>
      </div>
    </header>
  );
};
