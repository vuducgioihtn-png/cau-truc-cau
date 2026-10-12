import React, { useState } from 'react';
import { 
  Train, 
  Search, 
  Scale, 
  Scissors, 
  Play, 
  RotateCcw,
  Sparkles,
  Info
} from 'lucide-react';
import { sound } from '../utils/soundEffects';
import { TrainVisualizer } from './visuals/TrainVisualizer';
import { MagnifierScaleVisualizer } from './visuals/MagnifierScaleVisualizer';
import { BalanceMaskVisualizer } from './visuals/BalanceMaskVisualizer';

export const VisualSandboxView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'train' | 'oc_scale' | 'balance_mask' | 'suffix_scissors'>('train');

  // Train Sandbox State
  const [trainPreset, setTrainPreset] = useState<'correct' | 'object_buys' | 'missing_verb' | 'adv_front'>('correct');
  
  // OC Scale Sandbox State
  const [ocScenario, setOcScenario] = useState<'become_singer' | 'meet_singer' | 'taste_delicious' | 'kick_ball'>('become_singer');

  // Balance Mask State
  const [balanceWeight, setBalanceWeight] = useState<'-ful' | '-less'>('-ful');
  const [maskType, setMaskType] = useState<'-ed' | '-ing'>('-ed');
  const [selectedWord, setSelectedWord] = useState<string>('CARE');

  // Suffix Scissors State
  const [selectedPos, setSelectedPos] = useState<'N' | 'V' | 'Adj' | 'Adv'>('N');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      
      {/* Title */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
          Phòng Thí Nghiệm Ngữ Pháp Trực Quan
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Tương tác trực tiếp với các mô hình tư duy, tự tay gây ra &amp; cứu hộ trật bánh để hiểu sâu bản chất.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none border-b border-slate-800">
        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('train');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 ${
            activeTab === 'train'
              ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
          }`}
        >
          <Train className="w-4 h-4 text-teal-400" />
          <span>1. Đoàn Tàu 3 Toa S-V-O</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('oc_scale');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 ${
            activeTab === 'oc_scale'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
          }`}
        >
          <Search className="w-4 h-4 text-amber-400" />
          <span>2. Cán Cân Logic O vs C</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('balance_mask');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 ${
            activeTab === 'balance_mask'
              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
          }`}
        >
          <Scale className="w-4 h-4 text-rose-400" />
          <span>3. Đĩa Cân & Mặt Nạ Cảm Xúc</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveTab('suffix_scissors');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 ${
            activeTab === 'suffix_scissors'
              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
          }`}
        >
          <Scissors className="w-4 h-4 text-purple-400" />
          <span>4. Kéo Cắt Đuôi Từ Loại</span>
        </button>
      </div>

      {/* ================= 1. TRAIN SANDBOX ================= */}
      {activeTab === 'train' && (
        <div className="space-y-6">
          {/* Controls Bar */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Tình huống giả định:</span>
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  onClick={() => {
                    sound.playTrainWhistle();
                    setTrainPreset('correct');
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                    trainPreset === 'correct'
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  Đúng Chuẩn S-V-O
                </button>
                <button
                  onClick={() => {
                    sound.playIncorrect();
                    setTrainPreset('object_buys');
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                    trainPreset === 'object_buys'
                      ? 'bg-rose-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  Trật Bánh: Đồ vật mua Người
                </button>
                <button
                  onClick={() => {
                    sound.playIncorrect();
                    setTrainPreset('missing_verb');
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                    trainPreset === 'missing_verb'
                      ? 'bg-rose-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  Trật Bánh: Mất Động Cơ V
                </button>
                <button
                  onClick={() => {
                    sound.playIncorrect();
                    setTrainPreset('adv_front');
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                    trainPreset === 'adv_front'
                      ? 'bg-rose-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  Trật Bánh: Trạng từ nhảy cóc
                </button>
              </div>
            </div>

            <button
              onClick={() => sound.playTrainWhistle()}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-teal-500/20 text-teal-300 hover:bg-teal-500/30 text-xs font-bold font-mono cursor-pointer transition-colors"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Thử Còi Tàu</span>
            </button>
          </div>

          {/* Active Train Visualizer */}
          {trainPreset === 'correct' && (
            <TrainVisualizer
              sText="My brother"
              vText="bought"
              oText="a new laptop"
              advText="last week"
              isDerailed={false}
            />
          )}

          {trainPreset === 'object_buys' && (
            <TrainVisualizer
              sText="A new laptop"
              vText="bought"
              oText="my brother"
              advText="last week"
              isDerailed={true}
              derailReason="Đồ vật (laptop) không có tri giác và tiền bạc để đi mua con người. Vi phạm quy luật Toa 1 tạo lực!"
            />
          )}

          {trainPreset === 'missing_verb' && (
            <TrainVisualizer
              sText="The cat"
              vText=""
              oText="the mouse"
              advText="under the table"
              isDerailed={true}
              derailReason="Mất động cơ hành động (V) khiến câu bị đứt đoạn, con mèo và con chuột không có sự tương tác!"
            />
          )}

          {trainPreset === 'adv_front' && (
            <TrainVisualizer
              sText="Quickly"
              vText="ran"
              oText="the boy"
              advText="to the school gate"
              isDerailed={true}
              derailReason="Trạng từ chỉ cách thức 'Quickly' chen lên đầu tàu làm đảo lộn cấu trúc. Đưa danh từ [The boy] về lại Toa 1!"
            />
          )}

          {/* Theory note card */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
            <Info className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 space-y-1">
              <strong className="text-white">Quy tắc vàng Đoàn Tàu: </strong>
              <span>Đoàn tàu tiếng Anh luôn chạy 1 chiều: Người/vật tạo lực [S] ➔ Hành động động cơ [V] ➔ Vật hứng trọn lực [O] ➔ Thời gian / nơi chốn [Adv] luôn đi cuối cùng!</span>
            </div>
          </div>
        </div>
      )}

      {/* ================= 2. OC SCALE SANDBOX ================= */}
      {activeTab === 'oc_scale' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Chọn mẫu câu kiểm tra:</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  sound.playClick();
                  setOcScenario('become_singer');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                  ocScenario === 'become_singer' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
                }`}
              >
                1. She became [ a famous singer ]
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  setOcScenario('meet_singer');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                  ocScenario === 'meet_singer' ? 'bg-indigo-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
                }`}
              >
                2. She met [ a famous singer ]
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  setOcScenario('taste_delicious');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                  ocScenario === 'taste_delicious' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
                }`}
              >
                3. The soup tastes [ delicious ]
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  setOcScenario('kick_ball');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                  ocScenario === 'kick_ball' ? 'bg-indigo-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
                }`}
              >
                4. My father kicked [ the ball ]
              </button>
            </div>
          </div>

          {ocScenario === 'become_singer' && (
            <MagnifierScaleVisualizer
              sentence="She became [ a famous singer ]."
              targetElement="[ a famous singer ]"
              type="C"
              formula="She = a famous singer (S = C)"
              explanation="Cô ấy chính là người ca sĩ đó. Thành phần này cầm kính lúp vẽ rõ chân dung danh tính cho chủ ngữ (Subject Complement - Cs)!"
            />
          )}

          {ocScenario === 'meet_singer' && (
            <MagnifierScaleVisualizer
              sentence="She met [ a famous singer ]."
              targetElement="[ a famous singer ]"
              type="O"
              formula="She ≠ a famous singer (S ≠ O)"
              explanation="Cô ấy gặp ca sĩ — ca sĩ là một người khác đứng trước mặt cô ấy. Hai đối tượng tách biệt, người ca sĩ đóng vai trò là tân ngữ hứng hành động gặp!"
            />
          )}

          {ocScenario === 'taste_delicious' && (
            <MagnifierScaleVisualizer
              sentence="The soup tastes [ delicious ]."
              targetElement="[ delicious ]"
              type="C"
              formula="The soup = delicious (S = C)"
              explanation="Món súp có tính chất ngon miệng. Tính từ đứng sau Linking verb miêu tả đặc tính của súp nên là Bổ ngữ (C)!"
            />
          )}

          {ocScenario === 'kick_ball' && (
            <MagnifierScaleVisualizer
              sentence="My father kicked [ the ball ]."
              targetElement="[ the ball ]"
              type="O"
              formula="My father ≠ the ball (S ≠ O)"
              explanation="Bố tôi không phải quả bóng! Quả bóng bị lực bàn chân tác động vật lý bay đi ➔ Tân ngữ O!"
            />
          )}
        </div>
      )}

      {/* ================= 3. BALANCE & MASK SANDBOX ================= */}
      {activeTab === 'balance_mask' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Chọn gốc từ:</span>
              <div className="flex gap-1.5">
                {['CARE', 'HELP', 'USE', 'HOME', 'PAIN'].map(word => (
                  <button
                    key={word}
                    onClick={() => {
                      sound.playClick();
                      setSelectedWord(word);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-bold cursor-pointer ${
                      selectedWord === word ? 'bg-rose-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {word}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  sound.playClick();
                  setBalanceWeight(w => w === '-ful' ? '-less' : '-ful');
                }}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-lg cursor-pointer"
              >
                Đổi Đĩa Cân: {balanceWeight}
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  setMaskType(m => m === '-ed' ? '-ing' : '-ed');
                }}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-lg cursor-pointer"
              >
                Đổi Mặt Nạ: {maskType}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BalanceMaskVisualizer
              baseWord={selectedWord}
              affixType="ful_less"
              chosenType={balanceWeight}
              note="Đĩa cân -ful thể hiện sự trù phú, đầy đặn, hữu ích ⟷ Đĩa cân -less thể hiện sự mất mát, thiếu thốn, trống rỗng."
            />

            <BalanceMaskVisualizer
              baseWord="FEELING"
              affixType="ed_ing"
              chosenType={maskType}
              note="Mặt nạ -ed là cảm xúc chủ quan bên trong của con người (I am bored) ⟷ Mặt nạ -ing là bản chất của sự vật tỏa ra tác động xung quanh (The movie is boring)."
            />
          </div>
        </div>
      )}

      {/* ================= 4. SUFFIX SCISSORS SANDBOX ================= */}
      {activeTab === 'suffix_scissors' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Chọn toa từ loại:</span>
              <div className="flex gap-2">
                {(['N', 'V', 'Adj', 'Adv'] as const).map(pos => (
                  <button
                    key={pos}
                    onClick={() => {
                      sound.playClick();
                      setSelectedPos(pos);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono cursor-pointer ${
                      selectedPos === pos ? 'bg-purple-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {pos === 'N' ? 'Danh từ (N)' : pos === 'V' ? 'Động từ (V)' : pos === 'Adj' ? 'Tính từ (Adj)' : 'Trạng từ (Adv)'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-3 font-display">
              Bộ Kéo Nhận Diện Đuôi Vàng: {selectedPos === 'N' ? 'Danh Từ (Noun)' : selectedPos === 'V' ? 'Động Từ (Verb)' : selectedPos === 'Adj' ? 'Tính Từ (Adjective)' : 'Trạng Từ (Adverb)'}
            </h3>

            {selectedPos === 'N' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { suffix: '-tion / -sion', eg: 'contribution, decision' },
                  { suffix: '-ment', eg: 'development, equipment' },
                  { suffix: '-ity', eg: 'ability, creativity' },
                  { suffix: '-al', eg: 'arrival, proposal' },
                  { suffix: '-ness', eg: 'happiness, brightness' },
                  { suffix: '-er / -or', eg: 'developer, decorator' },
                  { suffix: '-ship', eg: 'friendship, leadership' },
                  { suffix: '-y', eg: 'discovery, photography' }
                ].map(item => (
                  <div key={item.suffix} className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-purple-400 font-mono font-bold text-sm block">{item.suffix}</span>
                    <span className="text-xs text-slate-400">{item.eg}</span>
                  </div>
                ))}
              </div>
            )}

            {selectedPos === 'V' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { suffix: '-ize / -ise', eg: 'modernize, organize' },
                  { suffix: '-en', eg: 'shorten, strengthen' },
                  { suffix: '-ify', eg: 'beautify, simplify' },
                  { suffix: '-ate', eg: 'decorate, generate' }
                ].map(item => (
                  <div key={item.suffix} className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-purple-400 font-mono font-bold text-sm block">{item.suffix}</span>
                    <span className="text-xs text-slate-400">{item.eg}</span>
                  </div>
                ))}
              </div>
            )}

            {selectedPos === 'Adj' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { suffix: '-ive', eg: 'impressive, active' },
                  { suffix: '-able / -ible', eg: 'renewable, responsible' },
                  { suffix: '-ful', eg: 'helpful, beautiful' },
                  { suffix: '-less', eg: 'careless, painless' },
                  { suffix: '-ent / -ant', eg: 'intelligent, important' },
                  { suffix: '-al', eg: 'rural, technical' },
                  { suffix: '-ous', eg: 'famous, dangerous' },
                  { suffix: '-ic', eg: 'electric, heroic' }
                ].map(item => (
                  <div key={item.suffix} className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-purple-400 font-mono font-bold text-sm block">{item.suffix}</span>
                    <span className="text-xs text-slate-400">{item.eg}</span>
                  </div>
                ))}
              </div>
            )}

            {selectedPos === 'Adv' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { suffix: 'Adj + -ly', eg: 'carefully, beautifully, brightly' },
                  { suffix: 'Lưu ý ngoại lệ', eg: 'friendly, lovely là TÍNH TỪ' },
                  { suffix: 'Từ bất quy tắc', eg: 'well, fast, hard, late' }
                ].map(item => (
                  <div key={item.suffix} className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-purple-400 font-mono font-bold text-sm block">{item.suffix}</span>
                    <span className="text-xs text-slate-400">{item.eg}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
