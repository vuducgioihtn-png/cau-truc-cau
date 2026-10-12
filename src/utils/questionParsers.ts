import { Question } from '../types';

export interface EnrichedTrainData {
  s: string;
  v: string;
  o: string;
  adv: string;
  isDerailed: boolean;
  statusText: string;
  correctedSentence: string;
  derailReason: string;
  logicExplanation: string;
}

export interface EnrichedOCData {
  subject: string;
  operator: '=' | '≠';
  target: string;
  type: 'O' | 'C';
  formula: string;
  ruleTitle: string;
  logicExplanation: string;
}

export interface EnrichedDoubleObjectData {
  verb: string;
  oDir: string;
  oDirMeaning: string;
  oInd: string;
  oIndMeaning: string;
  structureNote: string;
  logicExplanation: string;
}

export interface EnrichedPrefixData {
  prefix: string;
  baseWord: string;
  combinedWord: string;
  vietnameseMeaning: string;
  spellingRule: string;
  logicExplanation: string;
}

export interface EnrichedSuffixMaskData {
  category: 'ful_less' | 'ed_ing';
  baseWord: string;
  chosenAffix: '-ful' | '-less' | '-ed' | '-ing';
  fullWord: string;
  vietnameseMeaning: string;
  logicExplanation: string;
}

export interface EnrichedAlgorithmData {
  step1LookAround: string;
  step2MissingPos: string;
  step3SuffixCutting: string;
  correctAnswerText: string;
  optionsBreakdown: { label: string; text: string; pos: string; isCorrect: boolean }[];
  logicExplanation: string;
}

export const getEnrichedTrainData = (q: Question): EnrichedTrainData => {
  if (q.trainCarriages) {
    return {
      s: q.trainCarriages.s,
      v: q.trainCarriages.v,
      o: q.trainCarriages.o,
      adv: q.trainCarriages.adv || '',
      isDerailed: Boolean(q.isDerailed),
      statusText: q.isDerailed ? 'CÂU TRẬT BÁNH' : 'ĐOÀN TÀU ĐÚNG CHUẨN',
      correctedSentence: q.correctSentence || q.sentence,
      derailReason: q.derailReason || '',
      logicExplanation: q.detailedExplanation
    };
  }

  const map: Record<number, EnrichedTrainData> = {
    1: {
      s: 'My sister',
      v: 'baked',
      o: 'a delicious cake',
      adv: 'yesterday',
      isDerailed: false,
      statusText: 'ĐOÀN TÀU ĐÚNG CHUẨN',
      correctedSentence: 'My sister baked a delicious cake yesterday.',
      derailReason: '',
      logicExplanation: '[S] = My sister (Chủ ngữ tạo lực), [V] = baked (Động cơ hành động), [O] = a delicious cake (Tân ngữ hứng lực), [Adv] = yesterday. Đầy đủ và chuẩn trật tự S-V-O-Adv.'
    },
    2: {
      s: 'A new laptop ⚠️',
      v: 'bought',
      o: 'my brother ⚠️',
      adv: 'last week',
      isDerailed: true,
      statusText: 'TRẬT BÁNH: ĐỒ VẬT MUA NGƯỜI',
      correctedSentence: 'My brother bought a new laptop last week.',
      derailReason: 'Đồ vật (laptop) không tự đi mua người được (vi phạm logic S tạo lực).',
      logicExplanation: 'Đồ vật (laptop) không tự đi mua người được (vi phạm logic S-V). Sửa đưa chủ ngữ người lên đầu: [S: My brother] [V: bought] [O: a new laptop] [Adv: last week].'
    },
    3: {
      s: 'The cat',
      v: '⚠️ [Mất động cơ V]',
      o: 'the mouse',
      adv: 'under the table',
      isDerailed: true,
      statusText: 'TRẬT BÁNH: MẤT ĐỘNG CƠ V',
      correctedSentence: 'The cat chased the mouse under the table.',
      derailReason: 'Mất động cơ Toa 2 (V) dẫn đến câu cụt, thiếu ngoại động từ liên kết.',
      logicExplanation: 'Mất động cơ Toa 2 (V) dẫn đến câu cụt. Cần bổ sung ngoại động từ hợp lý như "chased" hoặc "caught".'
    },
    4: {
      s: 'They',
      v: 'always play',
      o: 'badminton',
      adv: 'in the park',
      isDerailed: false,
      statusText: 'ĐOÀN TÀU ĐÚNG CHUẨN',
      correctedSentence: 'They always play badminton in the park.',
      derailReason: '',
      logicExplanation: 'Trật tự chuẩn: [S: They] + [Trạng từ tần suất: always] + [V: play] + [O: badminton] + [Cụm nơi chốn: in the park].'
    },
    5: {
      s: 'Quickly ⚠️',
      v: 'ran',
      o: 'the boy ⚠️',
      adv: 'to the school gate',
      isDerailed: true,
      statusText: 'TRẬT BÁNH: TRẠNG TỪ NHẢY CÓC',
      correctedSentence: 'The boy ran quickly to the school gate.',
      derailReason: 'Trạng từ chỉ cách thức "Quickly" nhảy lên đầu làm đảo lộn đầu tàu.',
      logicExplanation: 'Trạng từ chỉ cách thức "Quickly" nhảy lên đầu làm đảo trật tự. Đưa chủ ngữ [The boy] lên đầu rồi đến động từ và trạng từ.'
    },
    6: {
      s: 'The mechanic',
      v: 'fixed',
      o: 'my motorbike',
      adv: 'very carefully',
      isDerailed: false,
      statusText: 'ĐOÀN TÀU ĐÚNG CHUẨN',
      correctedSentence: 'The mechanic fixed my motorbike very carefully.',
      derailReason: '',
      logicExplanation: 'Trật tự chuẩn mực: [S: The mechanic] + [V: fixed] + [O: my motorbike] + [Adv: very carefully].'
    },
    7: {
      s: 'Delicious food ⚠️',
      v: 'cooks',
      o: 'my mother ⚠️',
      adv: 'every day',
      isDerailed: true,
      statusText: 'TRẬT BÁNH: MÓN ĂN NẤU MẸ',
      correctedSentence: 'My mother cooks delicious food every day.',
      derailReason: 'Đồ ăn (Delicious food) không thể nấu mẹ mình! Bị đảo vị trí S và O.',
      logicExplanation: 'Đồ ăn (Delicious food) không thể tự nấu mẹ mình. Đảo ngược vị trí S và O để lập lại logic đúng.'
    },
    8: {
      s: 'We',
      v: 'watched',
      o: 'an interesting documentary',
      adv: 'last night',
      isDerailed: false,
      statusText: 'ĐOÀN TÀU ĐÚNG CHUẨN',
      correctedSentence: 'We watched an interesting documentary last night.',
      derailReason: '',
      logicExplanation: 'Trật tự chuẩn mực: [S: We] + [V: watched] + [O: an interesting documentary] + [Adv thời gian: last night].'
    },
    9: {
      s: 'Football ⚠️',
      v: 'plays',
      o: 'the team ⚠️',
      adv: 'in the stadium',
      isDerailed: true,
      statusText: 'TRẬT BÁNH: MÔN BÓNG ĐÁ THI ĐẤU ĐỘI BÓNG',
      correctedSentence: 'The team plays football in the stadium.',
      derailReason: 'Bóng đá không thể tự thi đấu đội bóng. Đưa đội bóng lên làm chủ ngữ tạo lực.',
      logicExplanation: 'Bóng đá không thể tự thi đấu đội bóng. Đưa chủ ngữ hành động [The team] lên trước [plays football].'
    },
    10: {
      s: 'The teacher',
      v: 'explained',
      o: 'the grammar rule',
      adv: 'clearly',
      isDerailed: false,
      statusText: 'ĐOÀN TÀU ĐÚNG CHUẨN',
      correctedSentence: 'The teacher explained the grammar rule clearly.',
      derailReason: '',
      logicExplanation: 'Trật tự chuẩn: [S: The teacher] + [V: explained] + [O: the grammar rule] + [Adv cách thức: clearly].'
    },
    11: {
      s: 'The dog',
      v: '⚠️ [Mất động cơ V]',
      o: 'the mailman',
      adv: 'loudly',
      isDerailed: true,
      statusText: 'TRẬT BÁNH: MẤT ĐỘNG CƠ HÀNH ĐỘNG',
      correctedSentence: 'The dog barked at the mailman loudly.',
      derailReason: 'Thiếu động từ hành động ở Toa 2 khiến câu vô nghĩa.',
      logicExplanation: 'Thiếu động từ hành động ở Toa 2 khiến câu vô nghĩa. Bổ sung động từ "barked at" / "chased".'
    },
    12: {
      s: 'My friend',
      v: 'sent',
      o: 'a postcard',
      adv: 'from Paris',
      isDerailed: false,
      statusText: 'ĐOÀN TÀU ĐÚNG CHUẨN',
      correctedSentence: 'My friend sent a postcard from Paris.',
      derailReason: '',
      logicExplanation: 'Trật tự chuẩn: [S: My friend] + [V: sent] + [O: a postcard] + [Adv nơi chốn: from Paris].'
    },
    13: {
      s: 'A lot of books ⚠️',
      v: 'reads',
      o: 'Nam ⚠️',
      adv: 'in the library',
      isDerailed: true,
      statusText: 'TRẬT BÁNH: SÁCH TỰ ĐỌC NGƯỜI',
      correctedSentence: 'Nam reads a lot of books in the library.',
      derailReason: 'Tân ngữ "A lot of books" bị đảo lên trước chủ ngữ. Sách không có mắt để đọc Nam.',
      logicExplanation: 'Tân ngữ "A lot of books" bị đảo lên trước chủ ngữ. Sắp xếp lại theo công thức một chiều: [S: Nam] + [V: reads] + [O: a lot of books].'
    },
    14: {
      s: 'Heavy rain',
      v: 'destroyed',
      o: 'the wooden bridge',
      adv: '',
      isDerailed: false,
      statusText: 'ĐOÀN TÀU ĐÚNG CHUẨN',
      correctedSentence: 'Heavy rain destroyed the wooden bridge.',
      derailReason: '',
      logicExplanation: 'Trật tự chuẩn: [S: Heavy rain] + [V: destroyed] + [O: the wooden bridge].'
    },
    15: {
      s: 'Carefully ⚠️',
      v: 'drives',
      o: 'his truck',
      adv: 'the driver ⚠️',
      isDerailed: true,
      statusText: 'TRẬT BÁNH: TRẠNG TỪ CHEN LÊN TRƯỚC',
      correctedSentence: 'The driver drives his truck carefully.',
      derailReason: 'Trạng từ "Carefully" chen lên trước động từ và chủ ngữ.',
      logicExplanation: 'Trạng từ "Carefully" chen lên trước động từ và chủ ngữ. Đưa về chuẩn: [S: The driver] + [V: drives] + [O: his truck] + [Adv: carefully].'
    }
  };

  return map[q.id] || {
    s: q.sentence.split(' ')[0] || 'Subject',
    v: q.sentence.split(' ')[1] || 'Verb',
    o: q.sentence.split(' ')[2] || 'Object',
    adv: q.sentence.split(' ').slice(3).join(' ') || '',
    isDerailed: Boolean(q.isDerailed),
    statusText: q.isDerailed ? 'CÂU TRẬT BÁNH' : 'ĐOÀN TÀU ĐÚNG CHUẨN',
    correctedSentence: q.correctSentence || q.sentence,
    derailReason: q.derailReason || '',
    logicExplanation: q.detailedExplanation
  };
};

export const getEnrichedOCData = (q: Question): EnrichedOCData => {
  if (q.ocFormula) {
    return {
      subject: q.ocSubject || q.sentence.split('[')[0]?.trim() || 'Subject',
      operator: q.ocType === 'C' ? '=' : '≠',
      target: q.ocTarget || q.targetElement || '[ ? ]',
      type: q.ocType || 'O',
      formula: q.ocFormula,
      ruleTitle: q.ocType === 'C' ? 'Bổ ngữ (Complement)' : 'Tân ngữ (Object)',
      logicExplanation: q.detailedExplanation
    };
  }

  const map: Record<number, EnrichedOCData> = {
    16: {
      subject: 'She',
      operator: '=',
      target: 'a famous singer',
      type: 'C',
      formula: 'She = a famous singer (S = C)',
      ruleTitle: 'Bổ ngữ cho Chủ ngữ (Subject Complement - Cs)',
      logicExplanation: 'She = a famous singer. Thành phần này giải thích và đồng nhất với chủ ngữ (Subject Complement - Cs).'
    },
    17: {
      subject: 'She',
      operator: '≠',
      target: 'a famous singer',
      type: 'O',
      formula: 'She ≠ a famous singer (S ≠ O)',
      ruleTitle: 'Tân ngữ trực tiếp (Object - O)',
      logicExplanation: 'She ≠ a famous singer. Ca sĩ là một người khác, đóng vai trò là đối tượng chịu tác động của hành động gặp (met).'
    },
    18: {
      subject: 'him',
      operator: '=',
      target: 'the team leader',
      type: 'C',
      formula: 'him = the team leader (O = C)',
      ruleTitle: 'Bổ ngữ cho Tân ngữ (Object Complement - Co)',
      logicExplanation: 'him = the team leader. Bổ nghĩa cho tân ngữ "him" sau động từ bầu cử elected (Object Complement - Co).'
    },
    19: {
      subject: 'My father',
      operator: '≠',
      target: 'the ball',
      type: 'O',
      formula: 'My father ≠ the ball (S ≠ O)',
      ruleTitle: 'Tân ngữ trực tiếp (Object - O)',
      logicExplanation: 'My father ≠ the ball. Quả bóng là đồ vật chịu tác động cơ học trực tiếp từ cú đá (kicked).'
    },
    20: {
      subject: 'The soup',
      operator: '=',
      target: 'delicious',
      type: 'C',
      formula: 'The soup = delicious (S = C)',
      ruleTitle: 'Bổ ngữ tính từ sau Linking Verb (Cs)',
      logicExplanation: 'The soup = delicious. "Delicious" là tính từ bổ nghĩa cho chủ ngữ qua động từ liên kết (linking verb) "tastes".'
    },
    21: {
      subject: 'The students',
      operator: '≠',
      target: 'the teacher',
      type: 'O',
      formula: 'The students ≠ the teacher (S ≠ O)',
      ruleTitle: 'Tân ngữ sau giới từ (Prepositional Object)',
      logicExplanation: 'The students ≠ the teacher. Giáo viên là đối tượng tiếp nhận trực tiếp hành động lắng nghe (prepositional object).'
    },
    22: {
      subject: 'the wall',
      operator: '=',
      target: 'yellow',
      type: 'C',
      formula: 'the wall = yellow (O = C)',
      ruleTitle: 'Bổ ngữ tính từ cho Tân ngữ (Co)',
      logicExplanation: 'the wall = yellow. "Yellow" miêu tả trạng thái/màu sắc mới của bức tường sau khi sơn (Object Complement).'
    },
    23: {
      subject: 'The cake',
      operator: '=',
      target: 'sweet',
      type: 'C',
      formula: 'The cake = sweet (S = C)',
      ruleTitle: 'Bổ ngữ tính từ sau Linking Verb (Cs)',
      logicExplanation: 'The cake = sweet. "Sweet" là tính từ làm rõ đặc điểm cho chủ ngữ sau linking verb "looks".'
    },
    24: {
      subject: 'himself',
      operator: '=',
      target: 'a hero',
      type: 'C',
      formula: 'himself = a hero (O = C)',
      ruleTitle: 'Bổ ngữ định danh cho Tân ngữ (Co)',
      logicExplanation: 'himself = a hero. "A hero" là bổ ngữ định danh cho tân ngữ "himself" (Co) sau động từ consider.'
    },
    25: {
      subject: 'Lan',
      operator: '≠',
      target: 'the window',
      type: 'O',
      formula: 'Lan ≠ the window (S ≠ O)',
      ruleTitle: 'Tân ngữ chịu lực cơ học (O)',
      logicExplanation: 'Lan ≠ the window. Cửa sổ là vật thể chịu tác động lực phá vỡ của hành động "broke".'
    },
    26: {
      subject: 'He',
      operator: '=',
      target: 'tired',
      type: 'C',
      formula: 'He = tired (S = C)',
      ruleTitle: 'Bổ ngữ trạng thái cho Chủ ngữ (Cs)',
      logicExplanation: 'He = tired. "Tired" là tính từ bổ ngữ trạng thái cho chủ ngữ đứng sau linking verb "appears".'
    },
    27: {
      subject: 'The company',
      operator: '≠',
      target: 'five new engineers',
      type: 'O',
      formula: 'The company ≠ five new engineers (S ≠ O)',
      ruleTitle: 'Tân ngữ tiếp nhận tuyển dụng (O)',
      logicExplanation: 'The company ≠ five new engineers. Năm kỹ sư là đối tượng tiếp nhận hành động tuyển dụng (hired).'
    },
    28: {
      subject: 'Her voice',
      operator: '=',
      target: 'lovely',
      type: 'C',
      formula: 'Her voice = lovely (S = C)',
      ruleTitle: 'Bổ ngữ tính chất âm thanh (Cs)',
      logicExplanation: 'Her voice = lovely. "Lovely" bổ nghĩa chỉ tính chất âm thanh cho chủ ngữ sau linking verb "sounds".'
    },
    29: {
      subject: 'the exam',
      operator: '=',
      target: 'extremely difficult',
      type: 'C',
      formula: 'the exam = extremely difficult (O = C)',
      ruleTitle: 'Bổ ngữ trạng thái cho Tân ngữ (Co)',
      logicExplanation: 'The exam = extremely difficult. Bổ ngữ tính từ chỉ trạng thái cho tân ngữ "the exam" sau "found".'
    },
    30: {
      subject: 'The chef',
      operator: '≠',
      target: 'a special meal',
      type: 'O',
      formula: 'The chef ≠ a special meal (S ≠ O)',
      ruleTitle: 'Tân ngữ thành phẩm nấu nướng (O)',
      logicExplanation: 'The chef ≠ a special meal. Bữa ăn là thành phẩm chịu tác động của hành động nấu nướng (cooked).'
    }
  };

  return map[q.id] || {
    subject: q.sentence.split(' ')[0] || 'Subject',
    operator: q.ocType === 'C' ? '=' : '≠',
    target: q.targetElement || '[ ? ]',
    type: q.ocType || 'O',
    formula: q.ocFormula || 'S ? O/C',
    ruleTitle: q.ocType === 'C' ? 'Bổ ngữ (Complement)' : 'Tân ngữ (Object)',
    logicExplanation: q.detailedExplanation
  };
};

/**
 * Generates the full completed grammatical sentence for any question,
 * resolving fill-in-the-blanks, MCQs, and prefix/suffix targets.
 */
export function getCompletedSentence(q: Question): string {
  if (q.correctSentence) {
    return q.correctSentence.replace(/\[\s*(.*?)\s*\]/g, '$1').trim();
  }

  let s = q.sentence || '';
  // Remove bracket highlights
  s = s.replace(/\[\s*(.*?)\s*\]/g, '$1');

  // Handle double blank in Q69
  if (q.id === 69 && (q.correctWord === 'bored / boring' || s.includes('(BORE)'))) {
    return 'I was totally bored because the lecture was extremely boring.';
  }

  // Remove trailing prompt in parentheses like " (TEST)" or " (LEGIBLE)"
  s = s.replace(/\s*\([A-Z0-9\s/+-]+\)\s*$/, '');

  if (q.correctWord) {
    if (s.includes('_')) {
      const base = q.baseWord ? q.baseWord.trim() : '';
      if (base && new RegExp(`_{2,}-\\s*${base}`, 'i').test(s)) {
        s = s.replace(new RegExp(`_{2,}-\\s*${base}`, 'i'), q.correctWord);
      } else if (base && new RegExp(`_{2,}\\s+${base}`, 'i').test(s)) {
        s = s.replace(new RegExp(`_{2,}\\s+${base}`, 'i'), q.correctWord);
      } else {
        s = s.replace(/_{2,}/g, q.correctWord);
      }
    }
  } else if (q.options) {
    const correctOpt = q.options.find(o => o.label === (q as any).correctOption || (o as any).isCorrect);
    if (correctOpt && s.includes('_')) {
      s = s.replace(/_{2,}/g, correctOpt.text);
    }
  }

  // Remove any remaining internal prompts like " (BORE)"
  s = s.replace(/\s*\([A-Z0-9\s/+-]+\)/g, '');

  return s.trim();
}
