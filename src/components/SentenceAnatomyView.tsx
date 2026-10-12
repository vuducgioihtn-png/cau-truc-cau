import React, { useState, useMemo, useEffect } from 'react';
import { 
  Volume2, 
  Copy, 
  Check, 
  Search, 
  FileSpreadsheet, 
  CheckCircle2, 
  AlertTriangle,
  Download,
  Info,
  Layers,
  ArrowRight,
  FileText
} from 'lucide-react';
import { CURATED_ANATOMY_SENTENCES, CuratedAnatomySentence, CuratedAnatomyToken } from '../data/curatedAnatomySentences';
import { sound } from '../utils/soundEffects';

interface SentenceAnatomyViewProps {
  onJumpToPractice?: (questionId: number) => void;
  initialSelectedId?: number;
}

export const SentenceAnatomyView: React.FC<SentenceAnatomyViewProps> = ({
  initialSelectedId = 1
}) => {
  // Selected sentence ID
  const [selectedId, setSelectedId] = useState<number>(initialSelectedId);

  useEffect(() => {
    if (initialSelectedId) {
      setSelectedId(initialSelectedId);
    }
  }, [initialSelectedId]);
  // Toggle between corrected vs derailed view if the sentence has a derailed version
  const [viewDerailedMode, setViewDerailedMode] = useState<boolean>(false);
  // Dialect toggle
  const [dialect, setDialect] = useState<'BrE' | 'AmE'>('BrE');
  // Search query & copy feedback
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedState, setCopiedState] = useState<'none' | 'markdown' | 'text' | 'json' | 'word' | 'word_doc'>('none');
  const [mobileViewMode, setMobileViewMode] = useState<'table' | 'cards'>('table');
  const [pendingNotice, setPendingNotice] = useState<string | null>(null);

  // Active sentence from the curated list
  const activeSentenceData: CuratedAnatomySentence = useMemo(() => {
    return CURATED_ANATOMY_SENTENCES.find(s => s.id === selectedId) || CURATED_ANATOMY_SENTENCES[0];
  }, [selectedId]);

  // Handle selecting a button from the 100-cell grid
  const handleSelectSlot = (num: number) => {
    sound.playClick();
    const found = CURATED_ANATOMY_SENTENCES.find(s => s.id === num);
    if (found) {
      setSelectedId(num);
      setViewDerailedMode(false);
      setPendingNotice(null);
    } else {
      const updatedList = CURATED_ANATOMY_SENTENCES.map(s => `Câu ${s.id}`).join(', ');
      setPendingNotice(`Câu ${num} chưa được cập nhật. Tab này chỉ hiển thị những câu bạn yêu cầu đưa vào (hiện tại có ${updatedList}). Hãy gửi nội dung Câu ${num} để được đưa vào bảng!`);
      setTimeout(() => setPendingNotice(null), 4000);
    }
  };

  // Filter tokens if search query is entered
  const filteredTokens = useMemo(() => {
    if (!searchQuery.trim()) return activeSentenceData.tokens;
    const q = searchQuery.toLowerCase().trim();
    return activeSentenceData.tokens.filter(token => {
      return (
        token.word.toLowerCase().includes(q) ||
        token.lemma.toLowerCase().includes(q) ||
        token.pos.toLowerCase().includes(q) ||
        token.meaning.toLowerCase().includes(q) ||
        token.syntacticRole.toLowerCase().includes(q) ||
        token.parentPhrase.toLowerCase().includes(q) ||
        token.morphology.toLowerCase().includes(q) ||
        token.grammarExplanation.toLowerCase().includes(q)
      );
    });
  }, [activeSentenceData.tokens, searchQuery]);

  // Audio Speech TTS
  const handleSpeakWord = (word: string) => {
    const lang = dialect === 'AmE' ? 'en-US' : 'en-GB';
    sound.speakEnglish(word, lang);
  };

  const handleSpeakSentence = () => {
    const lang = dialect === 'AmE' ? 'en-US' : 'en-GB';
    const textToSpeak = (viewDerailedMode && activeSentenceData.originalDerailedSentence)
      ? activeSentenceData.originalDerailedSentence
      : activeSentenceData.sentence;
    sound.speakEnglish(textToSpeak, lang);
  };

  // Copy table as Markdown
  const handleCopyMarkdown = () => {
    sound.playClick();
    const headers = '| STT | TỪ & LEMMA | PHIÊN ÂM | TỪ LOẠI (POS) | HÌNH THÁI | NGHĨA | VAI TRÒ CÚ PHÁP | CỤM / MỆNH ĐỀ | GIẢI THÍCH NGỮ PHÁP |';
    const separator = '|:---|:---|:---|:---|:---|:---|:---|:---|:---|';
    const rows = activeSentenceData.tokens.map(t => {
      const lemmaStr = `${t.word} (lemma: ${t.lemma})`;
      const posStr = `${t.pos} (${t.pos_vi})`;
      return `| ${t.index} | ${lemmaStr} | ${t.ipa} | ${posStr} | ${t.morphology} | ${t.meaning} | ${t.syntacticRole} | ${t.parentPhrase} | ${t.grammarExplanation} |`;
    });
    
    const advancedMarkdown = activeSentenceData.advancedAnalysis ? [
      '',
      `### ${activeSentenceData.advancedAnalysis.sectionTitle}`,
      '',
      `#### ${activeSentenceData.advancedAnalysis.tree?.title || '1. Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)'}`,
      activeSentenceData.advancedAnalysis.tree?.subTitle ? `*${activeSentenceData.advancedAnalysis.tree.subTitle}*` : '',
      '```plaintext',
      activeSentenceData.advancedAnalysis.tree?.asciiTree || '',
      '```',
      '',
      '#### 2. Phân tích vai trò ngữ nghĩa (Semantic Roles / Thematic Roles)',
      'Sự liên thông giữa cấu trúc ngữ pháp hình thức và tầng ý nghĩa:',
      ...(activeSentenceData.advancedAnalysis.semanticRoles?.map(sr => `- **${sr.element}**: Nhận vai trò ${sr.role} – ${sr.explanation}`) || [])
    ] : [];

    const textToCopy = [
      `### Bảng Giải Phẫu Cú Pháp: "${activeSentenceData.sentence}"`,
      `**Dịch nghĩa**: ${activeSentenceData.translation}`,
      `**Phiên âm**: ${activeSentenceData.ipa}`,
      `**Mô hình**: ${activeSentenceData.structurePattern}`,
      '',
      headers,
      separator,
      ...rows,
      ...advancedMarkdown
    ].join('\n');

    navigator.clipboard.writeText(textToCopy);
    setCopiedState('markdown');
    setTimeout(() => setCopiedState('none'), 2500);
  };

  // Copy TSV for Sheets/Excel
  const handleCopyTsv = () => {
    sound.playClick();
    const headers = ['STT', 'TỪ & LEMMA', 'PHIÊN ÂM', 'TỪ LOẠI (POS)', 'HÌNH THÁI', 'NGHĨA', 'VAI TRÒ CÚ PHÁP', 'CỤM / MỆNH ĐỀ', 'GIẢI THÍCH NGỮ PHÁP'].join('\t');
    const rows = activeSentenceData.tokens.map(t => [
      t.index,
      `${t.word} (lemma: ${t.lemma})`,
      t.ipa,
      `${t.pos} (${t.pos_vi})`,
      t.morphology,
      t.meaning,
      t.syntacticRole,
      t.parentPhrase,
      t.grammarExplanation
    ].join('\t'));

    const textToCopy = [headers, ...rows].join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopiedState('text');
    setTimeout(() => setCopiedState('none'), 2500);
  };

  // Export JSON
  const handleExportJson = () => {
    sound.playClick();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(activeSentenceData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `sentence_anatomy_cau_${activeSentenceData.id}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setCopiedState('json');
    setTimeout(() => setCopiedState('none'), 2500);
  };

  // Copy rich formatted HTML for direct Paste into MS Word
  const handleCopyForWord = () => {
    sound.playClick();
    const rowsHtml = activeSentenceData.tokens.map(t => `
      <tr>
        <td style="border: 1px solid #cbd5e1; padding: 6px 8px; text-align: center; font-weight: bold;">${t.index}</td>
        <td style="border: 1px solid #cbd5e1; padding: 6px 8px;"><strong>${t.word}</strong><br><span style="font-size: 9pt; color: #475569;">(lemma: ${t.lemma})</span></td>
        <td style="border: 1px solid #cbd5e1; padding: 6px 8px; font-family: Consolas, monospace; color: #0284c7;">${t.ipa}</td>
        <td style="border: 1px solid #cbd5e1; padding: 6px 8px; font-weight: bold; color: #0f766e;">${t.pos} (${t.pos_vi})</td>
        <td style="border: 1px solid #cbd5e1; padding: 6px 8px; color: #b45309;">${t.morphology}</td>
        <td style="border: 1px solid #cbd5e1; padding: 6px 8px; font-weight: bold; color: #059669;">${t.meaning}</td>
        <td style="border: 1px solid #cbd5e1; padding: 6px 8px; font-weight: bold; color: #7c3aed;">${t.syntacticRole}</td>
        <td style="border: 1px solid #cbd5e1; padding: 6px 8px; color: #0284c7;">${t.parentPhrase}</td>
        <td style="border: 1px solid #cbd5e1; padding: 6px 8px; font-size: 10pt; color: #334155;">${t.grammarExplanation}</td>
      </tr>
    `).join('');

    const advancedHtml = activeSentenceData.advancedAnalysis ? `
      <div style="margin-top: 20px;">
        <h3 style="color: #0f766e; font-size: 13pt; margin-bottom: 6px;">${activeSentenceData.advancedAnalysis.sectionTitle}</h3>
        ${activeSentenceData.advancedAnalysis.tree ? `
          <h4 style="font-size: 11pt; color: #1e293b; margin-bottom: 4px;">${activeSentenceData.advancedAnalysis.tree.title}</h4>
          ${activeSentenceData.advancedAnalysis.tree.subTitle ? `<p style="font-size: 10pt; font-style: italic; color: #475569; margin-bottom: 6px;">${activeSentenceData.advancedAnalysis.tree.subTitle}</p>` : ''}
          <pre style="background: #f1f5f9; padding: 12px; border: 1px solid #cbd5e1; font-family: Consolas, 'Courier New', monospace; font-size: 10pt; line-height: 1.4; color: #0f766e;">${activeSentenceData.advancedAnalysis.tree.asciiTree}</pre>
        ` : ''}
        ${activeSentenceData.advancedAnalysis.semanticRoles ? `
          <h4 style="font-size: 11pt; color: #1e293b; margin-top: 14px; margin-bottom: 6px;">Phân tích vai trò ngữ nghĩa (Semantic Roles):</h4>
          <ul style="font-size: 10pt; color: #334155; line-height: 1.6;">
            ${activeSentenceData.advancedAnalysis.semanticRoles.map(sr => `
              <li><strong>${sr.element}</strong>: <span style="color: #0f766e; font-weight: bold;">${sr.role}</span> – ${sr.explanation}</li>
            `).join('')}
          </ul>
        ` : ''}
      </div>
    ` : '';

    const htmlContent = `
      <div style="font-family: Calibri, Arial, sans-serif; font-size: 11pt; color: #1e293b; line-height: 1.5;">
        <h2 style="color: #0f766e; font-size: 14pt; margin-bottom: 4px;">${activeSentenceData.title}</h2>
        <p style="margin: 4px 0;"><strong>Câu chuẩn:</strong> ${activeSentenceData.sentence}</p>
        <p style="margin: 4px 0;"><strong>Dịch nghĩa:</strong> ${activeSentenceData.translation}</p>
        <p style="margin: 4px 0 12px 0;"><strong>Phiên âm IPA:</strong> ${activeSentenceData.ipa}</p>
        <table style="border-collapse: collapse; width: 100%; border: 1px solid #94a3b8; font-size: 10.5pt;">
          <thead>
            <tr style="background-color: #0f766e; color: #ffffff; text-align: left;">
              <th style="border: 1px solid #94a3b8; padding: 8px; text-align: center;">STT</th>
              <th style="border: 1px solid #94a3b8; padding: 8px;">TỪ & LEMMA</th>
              <th style="border: 1px solid #94a3b8; padding: 8px;">PHIÊN ÂM</th>
              <th style="border: 1px solid #94a3b8; padding: 8px;">TỪ LOẠI (POS)</th>
              <th style="border: 1px solid #94a3b8; padding: 8px;">HÌNH THÁI</th>
              <th style="border: 1px solid #94a3b8; padding: 8px;">NGHĨA</th>
              <th style="border: 1px solid #94a3b8; padding: 8px;">VAI TRÒ CÚ PHÁP</th>
              <th style="border: 1px solid #94a3b8; padding: 8px;">CỤM / MỆNH ĐỀ</th>
              <th style="border: 1px solid #94a3b8; padding: 8px;">GIẢI THÍCH NGỮ PHÁP</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
        ${advancedHtml}
      </div>
    `;

    const blobHtml = new Blob([htmlContent], { type: 'text/html' });
    const plainText = `${activeSentenceData.title}\n${activeSentenceData.sentence}\n${activeSentenceData.translation}`;
    const blobText = new Blob([plainText], { type: 'text/plain' });

    if (navigator.clipboard && window.ClipboardItem) {
      navigator.clipboard.write([
        new ClipboardItem({
          'text/html': blobHtml,
          'text/plain': blobText
        })
      ]).then(() => {
        setCopiedState('word');
        setTimeout(() => setCopiedState('none'), 2500);
      }).catch(() => {
        navigator.clipboard.writeText(htmlContent);
        setCopiedState('word');
        setTimeout(() => setCopiedState('none'), 2500);
      });
    } else {
      navigator.clipboard.writeText(htmlContent);
      setCopiedState('word');
      setTimeout(() => setCopiedState('none'), 2500);
    }
  };

  // Download formatted Word (.doc)
  const handleDownloadWordDoc = () => {
    sound.playClick();
    const rowsHtml = activeSentenceData.tokens.map(t => `
      <tr>
        <td style="border: 1px solid #94a3b8; padding: 6px 8px; text-align: center; font-weight: bold;">${t.index}</td>
        <td style="border: 1px solid #94a3b8; padding: 6px 8px;"><b>${t.word}</b><br><span style="font-size: 9pt; color: #475569;">(lemma: ${t.lemma})</span></td>
        <td style="border: 1px solid #94a3b8; padding: 6px 8px; font-family: Consolas, monospace; color: #0284c7;">${t.ipa}</td>
        <td style="border: 1px solid #94a3b8; padding: 6px 8px; font-weight: bold; color: #0f766e;">${t.pos} (${t.pos_vi})</td>
        <td style="border: 1px solid #94a3b8; padding: 6px 8px; color: #b45309;">${t.morphology}</td>
        <td style="border: 1px solid #94a3b8; padding: 6px 8px; font-weight: bold; color: #059669;">${t.meaning}</td>
        <td style="border: 1px solid #94a3b8; padding: 6px 8px; font-weight: bold; color: #7c3aed;">${t.syntacticRole}</td>
        <td style="border: 1px solid #94a3b8; padding: 6px 8px; color: #0284c7;">${t.parentPhrase}</td>
        <td style="border: 1px solid #94a3b8; padding: 6px 8px; font-size: 10pt; color: #334155;">${t.grammarExplanation}</td>
      </tr>
    `).join('');

    const advancedHtml = activeSentenceData.advancedAnalysis ? `
      <div style="margin-top: 24px;">
        <h3 style="color: #0f766e; font-size: 13pt; margin-bottom: 6px;">${activeSentenceData.advancedAnalysis.sectionTitle}</h3>
        ${activeSentenceData.advancedAnalysis.tree ? `
          <h4 style="font-size: 11pt; color: #1e293b; margin-bottom: 4px;">${activeSentenceData.advancedAnalysis.tree.title}</h4>
          ${activeSentenceData.advancedAnalysis.tree.subTitle ? `<p style="font-size: 10pt; font-style: italic; color: #475569; margin-bottom: 6px;">${activeSentenceData.advancedAnalysis.tree.subTitle}</p>` : ''}
          <pre style="background: #f1f5f9; padding: 12px; border: 1px solid #cbd5e1; font-family: Consolas, 'Courier New', monospace; font-size: 10pt; line-height: 1.4; color: #0f766e;">${activeSentenceData.advancedAnalysis.tree.asciiTree}</pre>
        ` : ''}
        ${activeSentenceData.advancedAnalysis.semanticRoles ? `
          <h4 style="font-size: 11pt; color: #1e293b; margin-top: 14px; margin-bottom: 6px;">Phân tích vai trò ngữ nghĩa (Semantic Roles):</h4>
          <ul style="font-size: 10pt; color: #334155; line-height: 1.6;">
            ${activeSentenceData.advancedAnalysis.semanticRoles.map(sr => `
              <li><b>${sr.element}</b>: <span style="color: #0f766e; font-weight: bold;">${sr.role}</span> – ${sr.explanation}</li>
            `).join('')}
          </ul>
        ` : ''}
      </div>
    ` : '';

    const wordHtml = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>${activeSentenceData.title}</title>
        <style>
          body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; line-height: 1.5; color: #1e293b; margin: 20px; }
          table { border-collapse: collapse; width: 100%; margin-top: 12px; }
          th { background-color: #0f766e; color: #ffffff; padding: 8px; border: 1px solid #94a3b8; font-weight: bold; }
          td { padding: 6px 8px; border: 1px solid #cbd5e1; vertical-align: top; }
          tr:nth-child(even) { background-color: #f8fafc; }
        </style>
      </head>
      <body>
        <h2 style="color: #0f766e; font-size: 15pt; margin-bottom: 4px;">${activeSentenceData.title}</h2>
        <p style="margin: 4px 0;"><b>Câu chuẩn:</b> ${activeSentenceData.sentence}</p>
        <p style="margin: 4px 0;"><b>Dịch nghĩa:</b> ${activeSentenceData.translation}</p>
        <p style="margin: 4px 0 12px 0;"><b>Phiên âm IPA:</b> ${activeSentenceData.ipa}</p>
        <table border="1">
          <thead>
            <tr>
              <th align="center">STT</th>
              <th>TỪ & LEMMA</th>
              <th>PHIÊN ÂM</th>
              <th>TỪ LOẠI (POS)</th>
              <th>HÌNH THÁI</th>
              <th>NGHĨA</th>
              <th>VAI TRÒ CÚ PHÁP</th>
              <th>CỤM / MỆNH ĐỀ</th>
              <th>GIẢI THÍCH NGỮ PHÁP</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
        ${advancedHtml}
      </body>
      </html>
    `;

    const blob = new Blob(['\ufeff' + wordHtml], { type: 'application/msword;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Giai_Phau_Cau_${activeSentenceData.id}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setCopiedState('word_doc');
    setTimeout(() => setCopiedState('none'), 2500);
  };

  // Helper for POS badge colors
  const getPosBadgeColor = (pos: string) => {
    switch (pos) {
      case 'NOUN':
        return 'bg-blue-500/15 text-blue-300 border-blue-500/30';
      case 'VERB':
        return 'bg-rose-500/15 text-rose-300 border-rose-500/30';
      case 'ADJ':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
      case 'ADV':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
      case 'DET':
        return 'bg-teal-500/15 text-teal-300 border-teal-500/30';
      case 'PRON':
        return 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30';
      case 'PREP':
        return 'bg-purple-500/15 text-purple-300 border-purple-500/30';
      default:
        return 'bg-slate-700/30 text-slate-300 border-slate-600/30';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8 space-y-6">
      
      {/* 1. Exact Selection Header & 100-Button Grid as in uploaded screenshot */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl space-y-3.5">
        
        {/* Top bar with active tag and count */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono font-bold text-slate-200 uppercase tracking-wider text-[11px] sm:text-xs">
              BẤM CHỌN CÂU ĐỂ XEM GIẢI PHẪU CHI TIẾT NGAY:
            </span>
            <div className="px-3 py-1 rounded-lg bg-teal-950/60 border border-teal-500/40 text-teal-300 font-mono font-bold text-xs shadow-inner">
              Đang xem: Câu {activeSentenceData.id}
            </div>
          </div>

          <div className="text-slate-400 font-mono text-xs text-right">
            Hiển thị: <strong className="text-teal-400">{CURATED_ANATOMY_SENTENCES.length} câu đã cập nhật</strong> / 100 vị trí
          </div>
        </div>

        {/* Section Title */}
        <div className="flex items-center gap-2 pt-0.5">
          <span className="text-amber-400 text-sm">🔥</span>
          <span className="font-mono font-black text-teal-400 text-xs sm:text-sm tracking-wide uppercase">
            DANH SÁCH CÂU GIẢI PHẪU ĐÃ CẬP NHẬT CHUẨN:
          </span>
        </div>

        {/* Quick pill selector for curated sentences */}
        <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
          <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="text-teal-300 font-semibold">⚡ Bấm chọn trực tiếp các câu đã có bảng phân tích ({CURATED_ANATOMY_SENTENCES.length} câu):</span>
            <span className="text-slate-500 hidden sm:inline">Nhấp để mở ngay bảng 9 cột & cây cú pháp</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {CURATED_ANATOMY_SENTENCES.map((s) => {
              const isSelected = selectedId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => handleSelectSlot(s.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-teal-400 text-slate-950 font-black shadow-md shadow-teal-500/30 scale-105 ring-2 ring-teal-300'
                      : 'bg-slate-900 border border-teal-500/40 text-teal-300 hover:bg-slate-800 hover:text-white hover:border-teal-300'
                  }`}
                >
                  <span className="font-mono font-bold">Câu {s.id}</span>
                  <span className={`text-[11px] truncate max-w-[140px] sm:max-w-[180px] ${isSelected ? 'text-slate-900 font-medium' : 'text-slate-400'}`}>
                    {s.sentence}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid of 100 numbered buttons arranged exactly like the user's screenshot */}
        <div className="grid grid-cols-10 sm:grid-cols-20 xl:grid-cols-[repeat(25,minmax(0,1fr))] gap-1.5 pt-1">
          {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => {
            const isUpdated = CURATED_ANATOMY_SENTENCES.some(s => s.id === num);
            const isSelected = selectedId === num;

            return (
              <button
                key={num}
                onClick={() => handleSelectSlot(num)}
                title={
                  isUpdated 
                    ? `Câu ${num}: Đã cập nhật chuẩn - Nhấp để xem` 
                    : `Câu ${num}: Chưa cập nhật - Hãy gửi nội dung để thêm vào`
                }
                className={`h-8 sm:h-9 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer flex items-center justify-center relative ${
                  isSelected
                    ? 'bg-teal-400 text-slate-950 font-black shadow-lg shadow-teal-500/30 scale-105 z-10 ring-2 ring-teal-300'
                    : isUpdated
                    ? 'bg-slate-800/90 text-teal-300 border border-teal-500/50 hover:bg-slate-700 hover:border-teal-400 hover:text-white'
                    : 'bg-slate-950/60 text-slate-600 border border-slate-800/60 hover:border-slate-700 hover:text-slate-400'
                }`}
              >
                {num}
                {isUpdated && !isSelected && (
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-teal-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Pending Notice toast if user clicks an empty slot */}
        {pendingNotice && (
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-center gap-2 animate-fadeIn">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{pendingNotice}</span>
          </div>
        )}
      </div>

      {/* 2. Active Sentence Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-lg">
        
        {/* Sentence Header Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-mono text-teal-400 uppercase tracking-wider font-bold">
                Câu {activeSentenceData.id} Đang Xem
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                · {activeSentenceData.structurePattern}
              </span>
            </div>
            
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-xl sm:text-2xl font-black text-white font-display">
                "{viewDerailedMode && activeSentenceData.originalDerailedSentence ? activeSentenceData.originalDerailedSentence : activeSentenceData.sentence}"
              </h2>
              
              <button
                onClick={handleSpeakSentence}
                title="Nghe phát âm câu"
                className="p-2 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
              >
                <Volume2 className="w-4 h-4" />
                <span>Nghe câu ({dialect})</span>
              </button>
            </div>
          </div>

          {/* Action buttons: Copy / Export */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleCopyForWord}
              title="Sao chép bảng biểu có màu & định dạng đầy đủ để dán ngay vào Microsoft Word (Ctrl + V)"
              className="px-3 py-1.5 rounded-xl bg-teal-900/40 hover:bg-teal-850 text-teal-200 text-xs font-semibold border border-teal-500/50 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
            >
              {copiedState === 'word' ? <Check className="w-3.5 h-3.5 text-teal-300" /> : <FileText className="w-3.5 h-3.5 text-teal-300" />}
              <span>{copiedState === 'word' ? 'Đã chép cho Word!' : 'Chép bảng cho Word'}</span>
            </button>

            <button
              onClick={handleDownloadWordDoc}
              title="Tải tệp tài liệu Word (.doc) giữ nguyên bảng biểu đẹp mắt"
              className="px-3 py-1.5 rounded-xl bg-blue-900/40 hover:bg-blue-850 text-blue-200 text-xs font-semibold border border-blue-500/50 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
            >
              {copiedState === 'word_doc' ? <Check className="w-3.5 h-3.5 text-blue-300" /> : <Download className="w-3.5 h-3.5 text-blue-300" />}
              <span>{copiedState === 'word_doc' ? 'Đã tải .doc!' : 'Tải file Word (.doc)'}</span>
            </button>

            <button
              onClick={handleCopyMarkdown}
              title="Sao chép bảng 9 cột dạng Markdown"
              className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700/80 transition-all cursor-pointer flex items-center gap-1.5"
            >
              {copiedState === 'markdown' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedState === 'markdown' ? 'Đã chép Markdown!' : 'Chép bảng Markdown'}</span>
            </button>

            <button
              onClick={handleCopyTsv}
              title="Sao chép dạng bảng dán vào Excel / Sheets"
              className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700/80 transition-all cursor-pointer flex items-center gap-1.5"
            >
              {copiedState === 'text' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <FileSpreadsheet className="w-3.5 h-3.5" />}
              <span>{copiedState === 'text' ? 'Đã chép Sheets!' : 'Chép vào Sheets/Excel'}</span>
            </button>

            <button
              onClick={handleExportJson}
              title="Tải về JSON dữ liệu học thuật"
              className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700/80 transition-all cursor-pointer flex items-center gap-1.5"
            >
              {copiedState === 'json' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5" />}
              <span>{copiedState === 'json' ? 'Đã tải JSON!' : 'Tải JSON'}</span>
            </button>
          </div>
        </div>

        {/* Derailed Sentence Warning Box if applicable (e.g. Câu 2) */}
        {activeSentenceData.originalDerailedSentence && (
          <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-950/20 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[11px] font-bold border border-amber-500/30 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 text-amber-400" />
                    Trạng Thái Câu
                  </span>
                  <span className="text-xs text-rose-300 font-bold">
                    {activeSentenceData.derailStatus}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    sound.playClick();
                    setViewDerailedMode(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    !viewDerailedMode
                      ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                      : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-700'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Câu sửa chuẩn (S-V-O)</span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    setViewDerailedMode(true);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewDerailedMode
                      ? 'bg-rose-500 text-white shadow-md font-black'
                      : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-700'
                  }`}
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Xem câu trật bánh gốc</span>
                </button>
              </div>
            </div>

            {activeSentenceData.derailReason && (
              <div className="text-xs text-slate-300 leading-relaxed bg-slate-950/70 p-3 rounded-lg border border-amber-900/30">
                <strong className="text-amber-300">Giải thích nguyên lý Toa 1:</strong> {activeSentenceData.derailReason}
              </div>
            )}
          </div>
        )}

        {/* Translation & Phonetics meta strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
            <span className="text-slate-400 font-mono text-[11px] block">
              Dịch nghĩa tiếng Việt tự nhiên:
            </span>
            <p className="text-emerald-300 font-medium text-sm">
              {activeSentenceData.translation}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
            <span className="text-slate-400 font-mono text-[11px] block">
              Phiên âm chuẩn toàn câu ({dialect}):
            </span>
            <p className="font-mono text-cyan-300 text-sm tracking-wide">
              {activeSentenceData.ipa}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Filter & View Mode Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo từ, lemma, vai trò cú pháp, nghĩa..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500 font-medium"
          />
        </div>

        <div className="flex items-center gap-2">
          {/* Dialect Switcher */}
          <div className="inline-flex rounded-lg border border-slate-800 p-0.5 bg-slate-900 text-xs font-mono">
            <button
              onClick={() => {
                sound.playClick();
                setDialect('BrE');
              }}
              className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer ${
                dialect === 'BrE' ? 'bg-teal-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
              }`}
            >
              BrE
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setDialect('AmE');
              }}
              className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer ${
                dialect === 'AmE' ? 'bg-teal-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
              }`}
            >
              AmE
            </button>
          </div>

          {/* Table vs Card view switcher for mobile */}
          <div className="inline-flex rounded-lg border border-slate-800 p-0.5 bg-slate-900">
            <button
              onClick={() => setMobileViewMode('table')}
              className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                mobileViewMode === 'table' ? 'bg-teal-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              Bảng Ngang
            </button>
            <button
              onClick={() => setMobileViewMode('cards')}
              className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                mobileViewMode === 'cards' ? 'bg-teal-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              Dạng Thẻ
            </button>
          </div>
        </div>
      </div>

      {/* 4. Master 9-Column Linguistic Anatomy Table */}
      {mobileViewMode === 'table' ? (
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-950 text-slate-300 font-mono uppercase tracking-wider text-[11px] border-b border-slate-800">
                <th className="py-3.5 px-3 font-bold text-center w-12 text-teal-400">STT</th>
                <th className="py-3.5 px-3 font-bold min-w-[130px] text-teal-300">TỪ &amp; LEMMA</th>
                <th className="py-3.5 px-3 font-bold min-w-[110px] text-cyan-300">PHIÊN ÂM</th>
                <th className="py-3.5 px-3 font-bold min-w-[130px] text-indigo-300">TỪ LOẠI (POS)</th>
                <th className="py-3.5 px-3 font-bold min-w-[150px] text-amber-300">HÌNH THÁI</th>
                <th className="py-3.5 px-3 font-bold min-w-[120px] text-emerald-300">NGHĨA</th>
                <th className="py-3.5 px-3 font-bold min-w-[170px] text-violet-300">VAI TRÒ CÚ PHÁP</th>
                <th className="py-3.5 px-3 font-bold min-w-[160px] text-sky-300">CỤM / MỆNH ĐỀ</th>
                <th className="py-3.5 px-3 font-bold min-w-[260px] text-slate-200">GIẢI THÍCH NGỮ PHÁP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {filteredTokens.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-slate-500 italic">
                    Không tìm thấy từ nào phù hợp với bộ lọc tìm kiếm.
                  </td>
                </tr>
              ) : (
                filteredTokens.map((token: CuratedAnatomyToken) => {
                  return (
                    <tr 
                      key={token.index}
                      className="hover:bg-slate-800/40 transition-colors group"
                    >
                      {/* 1. STT */}
                      <td className="py-3.5 px-3 text-center font-mono font-bold text-slate-400">
                        <span className="inline-block w-6 h-6 rounded-full bg-slate-950 border border-slate-800 text-teal-400 leading-6 text-center text-[11px]">
                          {token.index}
                        </span>
                      </td>

                      {/* 2. TỪ & LEMMA */}
                      <td className="py-3.5 px-3 font-medium">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-bold text-white text-sm">
                            {token.word}
                          </span>
                          <button
                            onClick={() => handleSpeakWord(token.word)}
                            title={`Nghe phát âm từ "${token.word}"`}
                            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-teal-300 transition-colors cursor-pointer"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-[11px] font-mono text-slate-400">
                          (lemma: <span className="text-teal-300">{token.lemma}</span>)
                        </div>
                      </td>

                      {/* 3. PHIÊN ÂM */}
                      <td className="py-3.5 px-3 font-mono text-cyan-300">
                        <span className="px-2 py-1 rounded bg-cyan-950/40 border border-cyan-800/30 inline-block font-semibold">
                          {token.ipa}
                        </span>
                      </td>

                      {/* 4. TỪ LOẠI (POS) */}
                      <td className="py-3.5 px-3">
                        <span className={`inline-block px-2 py-0.5 rounded border text-[11px] font-mono font-bold ${getPosBadgeColor(token.pos)}`}>
                          {token.pos}
                        </span>
                        <div className="text-[11px] text-slate-300 mt-1">
                          {token.pos_vi}
                        </div>
                      </td>

                      {/* 5. HÌNH THÁI */}
                      <td className="py-3.5 px-3 text-amber-200/90 font-medium leading-relaxed">
                        {token.morphology}
                      </td>

                      {/* 6. NGHĨA */}
                      <td className="py-3.5 px-3 text-emerald-300 font-medium">
                        {token.meaning}
                      </td>

                      {/* 7. VAI TRÒ CÚ PHÁP */}
                      <td className="py-3.5 px-3">
                        <span className="font-semibold text-violet-300 block">
                          {token.syntacticRole}
                        </span>
                      </td>

                      {/* 8. CỤM / MỆNH ĐỀ */}
                      <td className="py-3.5 px-3">
                        <span className="px-2 py-1 rounded bg-sky-950/40 border border-sky-800/30 text-sky-200 inline-block text-[11px] font-medium">
                          {token.parentPhrase}
                        </span>
                      </td>

                      {/* 9. GIẢI THÍCH NGỮ PHÁP */}
                      <td className="py-3.5 px-3 text-slate-300 leading-relaxed text-[11px]">
                        {token.grammarExplanation}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      ) : (
        /* Mobile Card View */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTokens.map((token: CuratedAnatomyToken) => {
            return (
              <div 
                key={token.index}
                className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-950 border border-slate-700 text-teal-400 font-mono text-xs flex items-center justify-center font-bold">
                      {token.index}
                    </span>
                    <span className="font-black text-white text-base">
                      {token.word}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      (lemma: <span className="text-teal-300">{token.lemma}</span>)
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/30">
                      {token.ipa}
                    </span>
                    <button
                      onClick={() => handleSpeakWord(token.word)}
                      className="p-1 rounded text-slate-400 hover:text-teal-300 cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Từ loại (POS):</span>
                    <span className={`inline-block px-1.5 py-0.5 rounded border text-[11px] font-mono font-bold mt-0.5 ${getPosBadgeColor(token.pos)}`}>
                      {token.pos} ({token.pos_vi})
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Nghĩa tiếng Việt:</span>
                    <span className="text-emerald-300 font-medium block mt-0.5">
                      {token.meaning}
                    </span>
                  </div>
                </div>

                <div className="text-xs space-y-1">
                  <span className="text-[10px] uppercase font-mono text-slate-500 block">Hình thái học:</span>
                  <p className="text-amber-200/90 font-medium">
                    {token.morphology}
                  </p>
                </div>

                <div className="text-xs space-y-1">
                  <span className="text-[10px] uppercase font-mono text-slate-500 block">Vai trò cú pháp:</span>
                  <p className="text-violet-300 font-semibold">
                    {token.syntacticRole}
                  </p>
                </div>

                <div className="text-xs space-y-1">
                  <span className="text-[10px] uppercase font-mono text-slate-500 block">Cụm / Mệnh đề:</span>
                  <span className="px-2 py-0.5 rounded bg-sky-950/40 border border-sky-800/30 text-sky-200 inline-block text-[11px] font-medium">
                    {token.parentPhrase}
                  </span>
                </div>

                <div className="text-xs space-y-1 pt-2 border-t border-slate-800/60">
                  <span className="text-[10px] uppercase font-mono text-slate-500 block">Giải thích ngữ pháp:</span>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    {token.grammarExplanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 4.5. Section 2: PHẦN BỔ SUNG NÂNG CAO (DÀNH CHO GIÁO ÁN / TÀI LIỆU CHUYÊN SÂU) */}
      {activeSentenceData.advancedAnalysis && (
        <div className="bg-slate-900/95 border border-teal-500/40 rounded-2xl p-5 sm:p-6 space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
            <span className="text-xl">🎓</span>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-teal-300 font-mono tracking-wide uppercase">
                {activeSentenceData.advancedAnalysis.sectionTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Cung cấp mô hình phân tích phân tầng và ngữ nghĩa học chuyên sâu
              </p>
            </div>
          </div>

          {/* 1. Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree) */}
          {activeSentenceData.advancedAnalysis.tree && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                  Mục 1
                </span>
                <h4 className="text-sm font-bold text-slate-100">
                  {activeSentenceData.advancedAnalysis.tree.title}
                </h4>
              </div>

              {activeSentenceData.advancedAnalysis.tree.subTitle && (
                <p className="text-xs text-slate-300 italic">
                  {activeSentenceData.advancedAnalysis.tree.subTitle}
                </p>
              )}

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 sm:p-5 overflow-x-auto shadow-inner">
                <pre className="font-mono text-xs sm:text-sm text-teal-300 leading-relaxed whitespace-pre font-semibold">
                  {activeSentenceData.advancedAnalysis.tree.asciiTree}
                </pre>
              </div>
            </div>
          )}

          {/* 2. Phân tích vai trò ngữ nghĩa (Semantic Roles / Thematic Roles) */}
          {activeSentenceData.advancedAnalysis.semanticRoles && (
            <div className="space-y-3 pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-mono text-xs font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
                  Mục 2
                </span>
                <h4 className="text-sm font-bold text-slate-100">
                  2. Phân tích vai trò ngữ nghĩa (Semantic Roles / Thematic Roles)
                </h4>
              </div>

              <p className="text-xs text-slate-400">
                Sự liên thông giữa cấu trúc ngữ pháp hình thức và tầng ý nghĩa:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {activeSentenceData.advancedAnalysis.semanticRoles.map((role, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-colors space-y-1.5"
                  >
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="font-bold text-sm text-white font-mono">
                        {role.element}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-teal-500/15 text-teal-300 border border-teal-500/30">
                        {role.role}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {role.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 5. Rule footnote adhering to user's instruction */}
      <div className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-4 flex items-start gap-3 text-xs text-slate-400">
        <Info className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
        <div className="space-y-1 leading-relaxed">
          <p>
            <strong className="text-white">Quy tắc quản lý nội dung:</strong> Bảng giải phẫu trong tab này được kiểm soát nghiêm ngặt theo danh sách từng câu bạn yêu cầu cập nhật (hiện tại: <strong>{CURATED_ANATOMY_SENTENCES.map(s => `Câu ${s.id}`).join(', ')}</strong>). Các vị trí khác từ {CURATED_ANATOMY_SENTENCES.length + 1} đến 100 sẵn sàng nhận dữ liệu khi bạn cung cấp nội dung tiếp theo.
          </p>
        </div>
      </div>
    </div>
  );
};
