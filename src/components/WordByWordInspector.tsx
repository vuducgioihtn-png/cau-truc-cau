import React, { useState } from 'react';
import { 
  Volume2, 
  Sparkles, 
  BookOpen, 
  Layers, 
  Info, 
  HelpCircle, 
  Code2, 
  Copy, 
  Check, 
  Edit3, 
  RotateCcw,
  ListTree
} from 'lucide-react';
import { 
  tokenizeSentence, 
  analyzeSentenceToLinguisticJson,
  WordToken, 
  PosCode, 
  SyntacticRoleCode,
  SentenceAnalysisOutput
} from '../utils/wordTokenizer';
import { sound } from '../utils/soundEffects';

interface WordByWordInspectorProps {
  sentence: string;
  originalSentence?: string;
  title?: string;
  question?: any;
}

export const WordByWordInspector: React.FC<WordByWordInspectorProps> = ({
  sentence: propSentence,
  originalSentence,
  title = 'Giải Phẫu Chi Tiết Từng Từ 1 (Word-by-Word Linguistic Inspector)',
  question
}) => {
  // Allow user to test any custom sentence or use current question sentence
  const [customSentence, setCustomSentence] = useState<string>('');
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);
  const [dialect, setDialect] = useState<'BrE' | 'AmE'>('BrE'); // Section VI: British English by default, optional American English
  const [showJsonModal, setShowJsonModal] = useState<boolean>(false);
  const [copiedJson, setCopiedJson] = useState<boolean>(false);

  const activeSentence = isCustomMode && customSentence.trim() ? customSentence.trim() : propSentence;

  const tokens = tokenizeSentence(activeSentence, isCustomMode ? undefined : question, dialect);
  const [selectedWordIdx, setSelectedWordIdx] = useState<number>(0);
  const [showPosGuide, setShowPosGuide] = useState<boolean>(false);
  const [showPhrases, setShowPhrases] = useState<boolean>(true);

  const linguisticAnalysis: SentenceAnalysisOutput = analyzeSentenceToLinguisticJson(
    activeSentence, 
    isCustomMode ? undefined : question,
    dialect
  );

  const selectedToken: WordToken | undefined = tokens[selectedWordIdx] || tokens[0];

  const handleCopyJson = () => {
    sound.playClick();
    const jsonStr = JSON.stringify(linguisticAnalysis, null, 2);
    navigator.clipboard.writeText(jsonStr);
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2500);
  };

  const benchmarkSentence = "The teacher asked him to rewrite his essay to fix the grammar errors";

  const getPosBadgeColor = (posCode: PosCode) => {
    switch (posCode) {
      case 'DET':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      case 'NOUN':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'VERB':
        return 'bg-teal-500/20 text-teal-300 border-teal-500/40';
      case 'PRON':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case 'ADJ':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'ADV':
        return 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40';
      case 'PREP':
        return 'bg-sky-500/20 text-sky-300 border-sky-500/40';
      case 'INF':
        return 'bg-yellow-500/25 text-yellow-300 border-yellow-500/50 font-bold';
      case 'AUX':
        return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40';
      case 'MODAL':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      case 'CONJ':
        return 'bg-pink-500/20 text-pink-300 border-pink-500/40';
      case 'PART':
        return 'bg-lime-500/20 text-lime-300 border-lime-500/40';
      case 'NUM':
        return 'bg-orange-500/20 text-orange-300 border-orange-500/40';
      case 'INTJ':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      default:
        return 'bg-slate-700/40 text-slate-300 border-slate-600/40';
    }
  };

  const getPosDotColor = (posCode: PosCode) => {
    switch (posCode) {
      case 'DET': return 'bg-blue-400';
      case 'NOUN': return 'bg-emerald-400';
      case 'VERB': return 'bg-teal-400';
      case 'PRON': return 'bg-purple-400';
      case 'ADJ': return 'bg-amber-400';
      case 'ADV': return 'bg-fuchsia-400';
      case 'PREP': return 'bg-sky-400';
      case 'INF': return 'bg-yellow-400';
      case 'AUX': return 'bg-indigo-400';
      case 'MODAL': return 'bg-cyan-400';
      case 'CONJ': return 'bg-pink-400';
      case 'PART': return 'bg-lime-400';
      case 'NUM': return 'bg-orange-400';
      case 'INTJ': return 'bg-rose-400';
      default: return 'bg-slate-400';
    }
  };

  const getSyntacticRoleBadge = (role: SyntacticRoleCode) => {
    switch (role) {
      case 'Subject (S)':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Direct Object (DO)':
        return 'bg-violet-500/20 text-violet-300 border-violet-500/30';
      case 'Indirect Object (IO)':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Subject Complement (SC)':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'Object Complement (OC)':
        return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'Adjunct (A) / Adverbial':
        return 'bg-teal-500/20 text-teal-300 border-teal-500/30';
      case 'Modifier':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'Determiner':
        return 'bg-sky-500/20 text-sky-300 border-sky-500/30';
      case 'Infinitival Complement':
        return 'bg-yellow-500/25 text-yellow-300 border-yellow-500/40';
      case 'Purpose Adverbial':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
      case 'Prepositional Complement':
        return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30';
      case 'Predicator (P) / Verb (V)':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 sm:p-6 space-y-5 shadow-xl">
      
      {/* Header with Title and Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2.5">
          <Layers className="w-5 h-5 text-teal-400" />
          <h3 className="text-base font-bold text-white font-display">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {/* Dialect Switcher: BrE vs AmE */}
          <div className="flex items-center p-0.5 rounded-lg bg-slate-950 border border-slate-800">
            <button
              onClick={() => {
                sound.playClick();
                setDialect('BrE');
              }}
              className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold transition-all cursor-pointer ${
                dialect === 'BrE'
                  ? 'bg-teal-500 text-slate-950 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Phiên âm chuẩn Anh - Anh (BrE)"
            >
              🇬🇧 BrE (Anh-Anh)
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setDialect('AmE');
              }}
              className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold transition-all cursor-pointer ${
                dialect === 'AmE'
                  ? 'bg-teal-500 text-slate-950 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Phiên âm chuẩn Anh - Mỹ (AmE)"
            >
              🇺🇸 AmE (Anh-Mỹ)
            </button>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              setShowJsonModal(!showJsonModal);
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 cursor-pointer transition-colors"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>{showJsonModal ? 'Ẩn JSON Chuẩn (Mục VII)' : 'Xuất JSON Chuẩn (Mục VII)'}</span>
          </button>

          <button
            onClick={() => setShowPosGuide(!showPosGuide)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800 hover:bg-slate-700 text-teal-300 border border-slate-700 cursor-pointer transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{showPosGuide ? 'Ẩn bộ nhãn POS & Cú pháp' : 'Xem bộ nhãn POS & Cú pháp'}</span>
          </button>
        </div>
      </div>

      {/* Custom Sentence Testing Bar */}
      <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2.5">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-300">
            <Edit3 className="w-3.5 h-3.5 text-teal-400" />
            <span>Kiểm thử câu bất kỳ (Custom Sentence Linguistic Tester):</span>
          </div>
          {isCustomMode && (
            <button
              onClick={() => {
                sound.playClick();
                setIsCustomMode(false);
                setCustomSentence('');
                setSelectedWordIdx(0);
              }}
              className="flex items-center gap-1 text-[11px] font-mono text-amber-300 hover:text-amber-200 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Quay lại câu gốc của bài</span>
            </button>
          )}
        </div>

        {/* Input box */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={customSentence}
            onChange={(e) => setCustomSentence(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && customSentence.trim()) {
                sound.playClick();
                setIsCustomMode(true);
                setSelectedWordIdx(0);
              }
            }}
            placeholder="Nhập hoặc dán câu tiếng Anh để phân tích từng từ theo ngữ cảnh..."
            className="flex-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 font-sans"
          />
          <button
            onClick={() => {
              if (customSentence.trim()) {
                sound.playClick();
                setIsCustomMode(true);
                setSelectedWordIdx(0);
              }
            }}
            disabled={!customSentence.trim()}
            className="px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 disabled:opacity-40 text-slate-950 font-bold text-xs cursor-pointer transition-colors shrink-0"
          >
            Phân Tích
          </button>
        </div>

        {/* Quick Benchmark Presets */}
        <div className="flex items-center gap-2 flex-wrap pt-1 text-[11px] font-mono">
          <span className="text-slate-500">Mẫu kiểm thử nhanh:</span>
          <button
            onClick={() => {
              sound.playClick();
              setCustomSentence(benchmarkSentence);
              setIsCustomMode(true);
              setSelectedWordIdx(0);
            }}
            className="px-2 py-0.5 rounded bg-teal-950/60 hover:bg-teal-900/60 text-teal-300 border border-teal-800/60 cursor-pointer transition-colors truncate max-w-xs sm:max-w-md"
            title={benchmarkSentence}
          >
            ✨ The teacher asked him to rewrite his essay to fix the grammar errors
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setCustomSentence("She went to school.");
              setIsCustomMode(true);
              setSelectedWordIdx(0);
            }}
            className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 cursor-pointer transition-colors"
          >
            A: to school (PREP)
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setCustomSentence("This tool is easy to use.");
              setIsCustomMode(true);
              setSelectedWordIdx(0);
            }}
            className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 cursor-pointer transition-colors"
          >
            A: easy to use (INF)
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setCustomSentence("Love is important.");
              setIsCustomMode(true);
              setSelectedWordIdx(0);
            }}
            className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 cursor-pointer transition-colors"
          >
            B: Love (Noun)
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setCustomSentence("This book is his.");
              setIsCustomMode(true);
              setSelectedWordIdx(0);
            }}
            className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 cursor-pointer transition-colors"
          >
            C: is his (PRON/SC)
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setCustomSentence("They helped themselves.");
              setIsCustomMode(true);
              setSelectedWordIdx(0);
            }}
            className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 cursor-pointer transition-colors"
          >
            C: themselves (PRON/Reflexive)
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setCustomSentence("grammar errors");
              setIsCustomMode(true);
              setSelectedWordIdx(0);
            }}
            className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 cursor-pointer transition-colors"
          >
            D: grammar errors (Noun Adjunct)
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setCustomSentence("They made him angry.");
              setIsCustomMode(true);
              setSelectedWordIdx(0);
            }}
            className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 cursor-pointer transition-colors"
          >
            E: made him angry (SVOC)
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setCustomSentence("She can swim.");
              setIsCustomMode(true);
              setSelectedWordIdx(0);
            }}
            className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 cursor-pointer transition-colors"
          >
            E: can swim (Modal + Bare Inf)
          </button>
        </div>
      </div>

      {/* JSON Viewer Modal / Section (Strict Section VII Output Schema) */}
      {showJsonModal && (
        <div className="p-4 rounded-xl bg-slate-950 border border-teal-500/40 space-y-3 animate-in fade-in duration-200">
          <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-teal-400" />
              <span className="text-xs font-mono font-bold text-teal-300 uppercase">
                DỮ LIỆU ĐẦU RA JSON HỢP LỆ (CHUẨN MỤC VII CỦA HỆ THỐNG)
              </span>
            </div>
            <button
              onClick={handleCopyJson}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/40 text-xs font-mono font-semibold cursor-pointer transition-colors"
            >
              {copiedJson ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Đã sao chép!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Sao chép JSON</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-slate-400">
            Dữ liệu xuất ra tuân thủ đầy đủ schema Mục VII: bao gồm bản dịch, tóm tắt ngữ pháp, danh sách token từng từ (đầy đủ số lượng và thứ tự, phân định riêng POS / Meaning / Role / Explanation), các cụm từ (phrases), và cảnh báo.
          </p>

          <pre className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-teal-200 overflow-x-auto max-h-80 scrollbar-thin">
            {JSON.stringify(linguisticAnalysis, null, 2)}
          </pre>
        </div>
      )}

      {/* POS & Syntactic Role Reference Guide Panel */}
      {showPosGuide && (
        <div className="p-4 rounded-xl bg-slate-950 border border-teal-500/30 space-y-3 text-xs animate-in fade-in duration-200">
          <div className="flex items-center gap-2 font-bold text-teal-300 font-mono">
            <Info className="w-4 h-4 text-teal-400" />
            <span>QUY ƯỚC BỘ NHÃN POS NỘI BỘ &amp; CHỨC NĂNG CÚ PHÁP CỦA ỨNG DỤNG</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            {/* POS Tags List */}
            <div className="space-y-1.5 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
              <span className="font-mono font-bold text-amber-300 block mb-1">
                14 NHÃN TỪ LOẠI (POS TAGS):
              </span>
              <ul className="space-y-1 font-mono text-[11px] text-slate-300">
                <li><strong className="text-blue-300">DET:</strong> Determiner (từ hạn định: the, a, an, my, your, this...)</li>
                <li><strong className="text-emerald-300">NOUN:</strong> Danh từ (kể cả Noun Adjunct đứng bổ nghĩa)</li>
                <li><strong className="text-teal-300">VERB:</strong> Động từ (chia thì, nguyên mẫu, to-infinitive)</li>
                <li><strong className="text-purple-300">PRON:</strong> Đại từ nhân xưng (he, him, they, them, we...)</li>
                <li><strong className="text-amber-300">ADJ:</strong> Tính từ miêu tả hoặc phẩm chất</li>
                <li><strong className="text-fuchsia-300">ADV:</strong> Trạng từ cách thức, thời gian, tần suất</li>
                <li><strong className="text-sky-300">PREP:</strong> Giới từ chỉ quan hệ/hướng (go to school, in, on)</li>
                <li><strong className="text-yellow-300 font-bold">INF:</strong> Dấu hiệu nguyên mẫu “to” (to go, to fix, to strengthen)</li>
                <li><strong className="text-indigo-300">AUX:</strong> Trợ động từ (have/be/do hỗ trợ động từ chính)</li>
                <li><strong className="text-cyan-300">MODAL:</strong> Động từ khuyết thiếu (can, could, will, should...)</li>
                <li><strong className="text-pink-300">CONJ:</strong> Liên từ (and, but, so, because...)</li>
                <li><strong className="text-lime-300">PART:</strong> Tiểu từ ngữ pháp khác</li>
                <li><strong className="text-orange-300">NUM:</strong> Từ chỉ số lượng / số đếm</li>
                <li><strong className="text-slate-400">OTHER:</strong> Chỗ trống khảo sát hoặc thành phần đặc biệt</li>
              </ul>
            </div>

            {/* Syntactic Roles List */}
            <div className="space-y-1.5 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
              <span className="font-mono font-bold text-teal-300 block mb-1">
                CHỨC NĂNG CÚ PHÁP CHUẨN (SYNTACTIC ROLES):
              </span>
              <ul className="space-y-1 font-mono text-[11px] text-slate-300">
                <li><strong className="text-blue-300">Subject (S):</strong> Chủ ngữ tạo lực hành động</li>
                <li><strong className="text-violet-300">Direct Object (DO):</strong> Tân ngữ trực tiếp hứng chịu hành động</li>
                <li><strong className="text-purple-300">Indirect Object (IO):</strong> Tân ngữ gián tiếp đón nhận</li>
                <li><strong className="text-amber-300">Subject Complement (SC):</strong> Bổ ngữ chủ ngữ (S = SC sau hệ từ)</li>
                <li><strong className="text-orange-300">Object Complement (OC):</strong> Bổ ngữ tân ngữ (O = OC sau make/elect)</li>
                <li><strong className="text-emerald-300">Modifier:</strong> Thành phần bổ nghĩa (tính từ, trạng từ, noun adjunct)</li>
                <li><strong className="text-sky-300">Determiner:</strong> Thành phần hạn định trong cụm danh từ</li>
                <li><strong className="text-yellow-300">Infinitival Complement:</strong> Cụm nguyên mẫu làm bổ ngữ</li>
                <li><strong className="text-cyan-300">Purpose Adverbial:</strong> Thành phần chỉ mục đích</li>
                <li><strong className="text-indigo-300">Prepositional Complement:</strong> Bổ ngữ trong cấu trúc giới từ</li>
                <li><strong className="text-rose-300">Predicator (P) / Verb (V):</strong> Vị ngữ hoặc động từ chính làm vị từ</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 0. Completed Sentence Audio Header & Global Grammar Summary */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 font-bold uppercase">
              {isCustomMode ? 'Câu khảo sát tùy chọn' : 'Câu chuẩn hoàn chỉnh'}
            </span>
            <span className="text-base font-semibold text-white tracking-wide">
              {activeSentence}
            </span>
          </div>
          <button
            onClick={() => sound.speakEnglish(activeSentence)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-400 hover:text-white transition-colors cursor-pointer shrink-0"
            title="Đọc toàn bộ câu tiếng Anh"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        {/* Sentence IPA Phonetic Transcription */}
        {linguisticAnalysis.sentence_ipa && (
          <div className="text-xs font-mono text-teal-300/90 flex items-center gap-2 pt-1 border-t border-slate-800/40">
            <span className="text-teal-400 font-bold text-[11px] shrink-0 uppercase tracking-wider">
              PHIÊN ÂM IPA ({dialect}):
            </span>
            <span className="font-semibold">{linguisticAnalysis.sentence_ipa}</span>
          </div>
        )}

        {/* Translation and grammar summary */}
        {linguisticAnalysis.sentence_translation && (
          <div className="text-xs text-amber-300/90 font-medium pt-1.5 border-t border-slate-800/60 flex items-start gap-2">
            <span className="text-slate-400 font-mono text-[11px] shrink-0 font-bold">BẢN DỊCH:</span>
            <span>{linguisticAnalysis.sentence_translation}</span>
          </div>
        )}

        {linguisticAnalysis.grammar_summary && (
          <div className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
            <span className="text-teal-400 font-mono text-[11px] shrink-0 font-bold">TỔNG QUAN NGỮ PHÁP:</span>
            <span>{linguisticAnalysis.grammar_summary}</span>
          </div>
        )}

        {originalSentence && originalSentence !== activeSentence && !isCustomMode && (
          <div className="text-xs text-slate-400 font-mono flex items-center gap-2 pt-1 border-t border-slate-800/40">
            <span className="text-slate-500 shrink-0">Đề bài gốc:</span>
            <span className="text-slate-300 italic truncate">{originalSentence}</span>
          </div>
        )}
      </div>

      {/* Phrase-level Syntactic Dissection (Section III & VII) */}
      {linguisticAnalysis.phrases.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowPhrases(!showPhrases)}
              className="flex items-center gap-2 text-xs font-mono text-teal-300 uppercase font-bold hover:text-teal-200 cursor-pointer"
            >
              <ListTree className="w-4 h-4 text-teal-400" />
              <span>Phân tích cấu trúc cụm từ &amp; mệnh đề (Phrases &amp; Clauses):</span>
              <span className="text-[10px] text-slate-500 font-normal">
                ({showPhrases ? 'Thu gọn' : 'Mở rộng'})
              </span>
            </button>
          </div>

          {showPhrases && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {linguisticAnalysis.phrases.map((phrase, pIdx) => (
                <div key={pIdx} className="p-3 rounded-xl bg-slate-950/70 border border-teal-500/20 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-white font-mono">
                      "{phrase.text}"
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-teal-500/15 text-teal-300 border border-teal-500/30">
                      {phrase.phrase_type}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-amber-300">
                    {phrase.function_vi}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-snug">
                    {phrase.explanation_vi}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 1. Interactive Word Ribbon (Clickable words in sentence order) */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
            Chuỗi từ vựng &amp; nhãn POS theo ngữ cảnh:
          </span>
          <span className="text-[11px] font-mono text-slate-500">
            {tokens.length} từ trong câu
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
          {tokens.map((token, idx) => {
            const isSelected = idx === selectedWordIdx;
            const badgeColor = getPosBadgeColor(token.posCode);

            return (
              <button
                key={idx}
                onClick={() => {
                  sound.playClick();
                  setSelectedWordIdx(idx);
                }}
                className={`group flex flex-col items-center px-3 py-2 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-800 border-teal-400 shadow-md shadow-teal-950/50 scale-105 ring-1 ring-teal-400/50'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                <span className="text-base font-bold text-white group-hover:text-teal-300 font-display">
                  {token.word}
                </span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border mt-1 font-bold ${badgeColor}`}>
                  {token.posCode}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Active Word Passport (Hộ Chiếu Cú Pháp Toàn Diện Các Trường Độc Lập) */}
      {selectedToken && (
        <div className="p-4 sm:p-5 rounded-xl bg-slate-950/90 border border-teal-500/30 space-y-4 relative overflow-hidden">
          
          {/* Header of Active Word: Surface form, Lemma, Dual Phonetics & Badges */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight">
                {selectedToken.word}
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                <span className="text-slate-500">Lemma:</span>
                <span className="text-teal-300 font-bold">{selectedToken.lemma}</span>
              </div>
              
              {/* Dual dialect phonetic badges */}
              <div className="flex items-center gap-1.5 text-xs font-mono">
                <span className={`px-2 py-0.5 rounded border transition-colors ${
                  dialect === 'BrE' 
                    ? 'bg-teal-500/15 text-teal-300 border-teal-500/40 font-bold' 
                    : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}>
                  🇬🇧 BrE: {selectedToken.ipaBrE}
                </span>
                <span className={`px-2 py-0.5 rounded border transition-colors ${
                  dialect === 'AmE' 
                    ? 'bg-teal-500/15 text-teal-300 border-teal-500/40 font-bold' 
                    : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}>
                  🇺🇸 AmE: {selectedToken.ipaAmE}
                </span>
              </div>

              <button
                onClick={() => sound.speakEnglish(selectedToken.cleanWord)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-400 hover:text-white transition-colors cursor-pointer"
                title={`Phát âm từ "${selectedToken.cleanWord}"`}
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className={`px-2.5 py-1 rounded-md text-xs font-bold font-mono border ${getPosBadgeColor(selectedToken.posCode)}`}>
                POS: {selectedToken.posCode}
              </span>
              <span className={`px-2.5 py-1 rounded-md text-xs font-bold font-mono border ${getSyntacticRoleBadge(selectedToken.syntacticRole)}`}>
                {selectedToken.syntacticRole}
              </span>
            </div>
          </div>

          {/* Independent Linguistic Dimensions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
            
            {/* 1. POS Card */}
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-mono text-[11px] font-semibold uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  1. Từ loại trong ngữ cảnh (POS)
                </span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold border ${getPosBadgeColor(selectedToken.posCode)}`}>
                  {selectedToken.posCode}
                </span>
              </div>
              <div className="text-sm font-bold text-white">
                {selectedToken.posName}
              </div>
            </div>

            {/* 2. Morphology Card */}
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-mono text-[11px] font-semibold uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  2. Hình thái ngữ pháp (Morphology)
                </span>
              </div>
              <div className="text-xs font-semibold text-cyan-200">
                {selectedToken.morphology}
              </div>
            </div>

            {/* 3. Meaning Card */}
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-mono text-[11px] font-semibold uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  3. Nghĩa trong ngữ cảnh
                </span>
              </div>
              <div className="text-sm font-bold text-amber-300">
                {selectedToken.meaning}
              </div>
            </div>

            {/* 4. Syntactic Role Card */}
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-mono text-[11px] font-semibold uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  4. Chức năng cú pháp (Syntactic Role)
                </span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold border ${getSyntacticRoleBadge(selectedToken.syntacticRole)}`}>
                  {selectedToken.syntacticRole}
                </span>
              </div>
              <div className="text-xs font-medium text-teal-200 leading-relaxed">
                {selectedToken.role}
              </div>
            </div>

            {/* 5. Parent Phrase / Clause Card */}
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-mono text-[11px] font-semibold uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  5. Cụm từ / Mệnh đề chứa từ
                </span>
              </div>
              <div className="text-xs font-semibold text-violet-200">
                {selectedToken.parentPhrase || 'Mệnh đề câu'}
              </div>
            </div>

            {/* 6. Grammar Explanation Card */}
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-mono text-[11px] font-semibold uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  6. Giải thích ngữ pháp
                </span>
              </div>
              <div className="text-xs text-slate-300 leading-relaxed">
                {selectedToken.grammarExplanation}
              </div>
            </div>

          </div>

          {/* Semantic Description Box (tách riêng biệt với nhãn POS) */}
          {selectedToken.semanticDescription && (
            <div className="p-2.5 rounded-lg bg-teal-950/40 border border-teal-800/40 text-xs text-teal-300 flex items-center gap-2">
              <Info className="w-4 h-4 text-teal-400 shrink-0" />
              <span><strong>Mô tả ngữ nghĩa (Lưu trường riêng, không gộp POS):</strong> {selectedToken.semanticDescription}</span>
            </div>
          )}

          {/* Clue / Tip if present */}
          {selectedToken.note && (
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-amber-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong>Dấu hiệu nhận diện:</strong> {selectedToken.note}</span>
            </div>
          )}

        </div>
      )}

      {/* 3. Bảng Phân Tích Toàn Bộ Từng Từ Một (Full Sequential Word Table) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase font-semibold">
          <div className="flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-teal-400" />
            <span>Bảng giải phẫu từng từ theo thứ tự câu (Tách biệt độc lập các trường dữ liệu):</span>
          </div>
          <span className="text-slate-500 font-normal">
            Bấm dòng để chọn từ • Đang hiển thị: {dialect === 'BrE' ? '🇬🇧 Anh-Anh (BrE)' : '🇺🇸 Anh-Mỹ (AmE)'}
          </span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-950 text-slate-400 font-mono border-b border-slate-800">
                <th className="py-2.5 px-3 w-10 text-center">STT</th>
                <th className="py-2.5 px-3 w-32">TỪ &amp; LEMMA</th>
                <th className="py-2.5 px-3 w-28">PHIÊN ÂM</th>
                <th className="py-2.5 px-3 w-36">TỪ LOẠI (POS)</th>
                <th className="py-2.5 px-3 w-36">HÌNH THÁI</th>
                <th className="py-2.5 px-3 w-36">NGHĨA</th>
                <th className="py-2.5 px-3 w-40">VAI TRÒ CÚ PHÁP</th>
                <th className="py-2.5 px-3 w-36">CỤM / MỆNH ĐỀ</th>
                <th className="py-2.5 px-4">GIẢI THÍCH NGỮ PHÁP</th>
                <th className="py-2.5 px-2.5 w-12 text-center">LOA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-slate-900/50">
              {tokens.map((tok, idx) => {
                const isSelected = idx === selectedWordIdx;
                const dotColor = getPosDotColor(tok.posCode);
                const posBadge = getPosBadgeColor(tok.posCode);
                const roleBadge = getSyntacticRoleBadge(tok.syntacticRole);

                return (
                  <tr
                    key={idx}
                    onClick={() => {
                      sound.playClick();
                      setSelectedWordIdx(idx);
                    }}
                    className={`transition-colors cursor-pointer ${
                      isSelected ? 'bg-teal-950/40 font-semibold' : 'hover:bg-slate-800/40'
                    }`}
                  >
                    <td className="py-2.5 px-3 text-center font-mono text-slate-500">
                      {idx + 1}
                    </td>
                    <td className="py-2.5 px-3">
                      <div className="font-bold text-white font-mono text-sm">
                        {tok.word}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        lemma: <span className="text-teal-300 font-semibold">{tok.lemma}</span>
                      </div>
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[11px] text-teal-400">
                      {tok.ipa}
                    </td>
                    <td className="py-2.5 px-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`w-2 h-2 rounded-full ${dotColor} shrink-0`} />
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border font-bold ${posBadge}`}>
                          {tok.posCode}
                        </span>
                        <div className="text-[11px] text-slate-300 w-full mt-0.5 truncate">
                          {tok.posName}
                        </div>
                      </div>
                    </td>
                    <td className="py-2.5 px-3 text-cyan-200 text-[11px] leading-snug">
                      {tok.morphology}
                    </td>
                    <td className="py-2.5 px-3 text-amber-300 font-medium leading-snug">
                      {tok.meaning}
                    </td>
                    <td className="py-2.5 px-3">
                      <span className={`inline-block text-[10px] font-mono px-1.5 py-0.5 rounded border font-semibold mb-1 ${roleBadge}`}>
                        {tok.syntacticRole}
                      </span>
                      <div className="text-[11px] text-slate-300 leading-tight">
                        {tok.role}
                      </div>
                    </td>
                    <td className="py-2.5 px-3 text-violet-200 text-[11px] leading-snug font-mono">
                      {tok.parentPhrase}
                    </td>
                    <td className="py-2.5 px-4 text-slate-300 leading-relaxed text-[11px]">
                      <div>{tok.grammarExplanation}</div>
                      {tok.semanticDescription && (
                        <div className="text-teal-300 font-mono text-[10px] mt-1 bg-teal-950/40 px-1.5 py-0.5 rounded border border-teal-800/40 inline-block">
                          ℹ️ Ngữ nghĩa: {tok.semanticDescription}
                        </div>
                      )}
                      {tok.note && (
                        <div className="text-amber-400 font-mono text-[10px] mt-0.5">
                          💡 {tok.note}
                        </div>
                      )}
                    </td>
                    <td className="py-2.5 px-2.5 text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          sound.speakEnglish(tok.cleanWord);
                        }}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-400 hover:text-white transition-colors cursor-pointer"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

