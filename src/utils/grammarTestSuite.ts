/**
 * Grammar Analysis Test Suite
 * Covers Groups A, B, C, D, E and benchmark sentence as requested.
 */
import { tokenizeSentence, WordToken } from './wordTokenizer';

interface WordExpectation {
  cleanWord: string;
  posCode?: string;
  syntacticRole?: string;
  posNameIncludes?: string;
  roleIncludes?: string;
  morphologyIncludes?: string;
  prohibitRoleIncludes?: string;
  prohibitPos?: string[];
}

interface GrammarTestCase {
  id: string;
  group: 'BENCHMARK' | 'GROUP_A' | 'GROUP_B' | 'GROUP_C' | 'GROUP_D' | 'GROUP_E';
  groupName: string;
  sentence: string;
  expectations: WordExpectation[];
}

export const TEST_SUITE: GrammarTestCase[] = [
  // ================= BENCHMARK SENTENCE =================
  {
    id: 'BENCHMARK-01',
    group: 'BENCHMARK',
    groupName: 'Câu kiểm thử hồi quy bắt buộc',
    sentence: 'The teacher asked him to rewrite his essay to fix the grammar errors.',
    expectations: [
      {
        cleanWord: 'the',
        posCode: 'DET',
        posNameIncludes: 'Mạo từ xác định',
        roleIncludes: 'Determiner'
      },
      {
        cleanWord: 'teacher',
        posCode: 'NOUN',
        syntacticRole: 'Subject (S)',
        roleIncludes: 'Chủ ngữ'
      },
      {
        cleanWord: 'asked',
        posCode: 'VERB',
        syntacticRole: 'Predicator (P) / Verb (V)',
        morphologyIncludes: 'Quá khứ',
        roleIncludes: 'Vị ngữ chính'
      },
      {
        cleanWord: 'him',
        posCode: 'PRON',
        syntacticRole: 'Direct Object (DO)',
        roleIncludes: 'asked'
      },
      {
        cleanWord: 'to',
        posCode: 'INF',
        syntacticRole: 'Infinitival Complement',
        roleIncludes: 'asked him'
      },
      {
        cleanWord: 'rewrite',
        posCode: 'VERB',
        syntacticRole: 'Infinitival Complement',
        morphologyIncludes: 'nguyên mẫu'
      },
      {
        cleanWord: 'his',
        posCode: 'DET',
        syntacticRole: 'Determiner',
        posNameIncludes: 'Từ hạn định sở hữu'
      },
      {
        cleanWord: 'essay',
        posCode: 'NOUN',
        syntacticRole: 'Direct Object (DO)',
        roleIncludes: 'rewrite'
      },
      {
        cleanWord: 'to',
        posCode: 'INF',
        syntacticRole: 'Purpose Adverbial',
        roleIncludes: 'mục đích'
      },
      {
        cleanWord: 'fix',
        posCode: 'VERB',
        syntacticRole: 'Purpose Adverbial',
        morphologyIncludes: 'nguyên mẫu',
        prohibitRoleIncludes: 'could'
      },
      {
        cleanWord: 'grammar',
        posCode: 'NOUN',
        syntacticRole: 'Modifier',
        posNameIncludes: 'Danh từ',
        prohibitPos: ['ADJ']
      },
      {
        cleanWord: 'errors',
        posCode: 'NOUN',
        syntacticRole: 'Direct Object (DO)',
        morphologyIncludes: 'số nhiều',
        roleIncludes: 'fix',
        prohibitRoleIncludes: 'had'
      }
    ]
  },

  // ================= GROUP A: TO INFINITIVE VS PREPOSITION =================
  {
    id: 'GROUP_A-01',
    group: 'GROUP_A',
    groupName: 'Nhóm A: "To" nguyên mẫu vs Giới từ',
    sentence: 'I want to learn English.',
    expectations: [
      { cleanWord: 'to', posCode: 'INF', syntacticRole: 'Infinitival Complement' },
      { cleanWord: 'learn', posCode: 'VERB', syntacticRole: 'Infinitival Complement' }
    ]
  },
  {
    id: 'GROUP_A-02',
    group: 'GROUP_A',
    groupName: 'Nhóm A: "To" nguyên mẫu vs Giới từ',
    sentence: 'She went to school.',
    expectations: [
      { cleanWord: 'to', posCode: 'PREP', syntacticRole: 'Modifier' },
      { cleanWord: 'school', posCode: 'NOUN', syntacticRole: 'Prepositional Complement' }
    ]
  },
  {
    id: 'GROUP_A-03',
    group: 'GROUP_A',
    groupName: 'Nhóm A: "To" nguyên mẫu vs Giới từ',
    sentence: 'He decided to leave.',
    expectations: [
      { cleanWord: 'to', posCode: 'INF', syntacticRole: 'Infinitival Complement' },
      { cleanWord: 'leave', posCode: 'VERB', syntacticRole: 'Infinitival Complement' }
    ]
  },
  {
    id: 'GROUP_A-04',
    group: 'GROUP_A',
    groupName: 'Nhóm A: "To" nguyên mẫu vs Giới từ',
    sentence: 'We travelled to London.',
    expectations: [
      { cleanWord: 'to', posCode: 'PREP', syntacticRole: 'Modifier' },
      { cleanWord: 'london', posCode: 'NOUN', syntacticRole: 'Prepositional Complement' }
    ]
  },
  {
    id: 'GROUP_A-05',
    group: 'GROUP_A',
    groupName: 'Nhóm A: "To" nguyên mẫu vs Giới từ',
    sentence: 'They asked me to help.',
    expectations: [
      { cleanWord: 'to', posCode: 'INF', syntacticRole: 'Infinitival Complement' },
      { cleanWord: 'help', posCode: 'VERB', syntacticRole: 'Infinitival Complement' }
    ]
  },
  {
    id: 'GROUP_A-06',
    group: 'GROUP_A',
    groupName: 'Nhóm A: "To" nguyên mẫu vs Giới từ',
    sentence: 'This tool is easy to use.',
    expectations: [
      { cleanWord: 'to', posCode: 'INF', syntacticRole: 'Infinitival Complement' },
      { cleanWord: 'use', posCode: 'VERB', syntacticRole: 'Infinitival Complement' }
    ]
  },

  // ================= GROUP B: WORDS WITH MULTIPLE POS =================
  {
    id: 'GROUP_B-01',
    group: 'GROUP_B',
    groupName: 'Nhóm B: Từ có nhiều từ loại',
    sentence: 'I work every day.',
    expectations: [
      { cleanWord: 'work', posCode: 'VERB', syntacticRole: 'Predicator (P) / Verb (V)' }
    ]
  },
  {
    id: 'GROUP_B-02',
    group: 'GROUP_B',
    groupName: 'Nhóm B: Từ có nhiều từ loại',
    sentence: 'My work is difficult.',
    expectations: [
      { cleanWord: 'work', posCode: 'NOUN', syntacticRole: 'Subject (S)' }
    ]
  },
  {
    id: 'GROUP_B-03',
    group: 'GROUP_B',
    groupName: 'Nhóm B: Từ có nhiều từ loại',
    sentence: 'They study English.',
    expectations: [
      { cleanWord: 'study', posCode: 'VERB', syntacticRole: 'Predicator (P) / Verb (V)' },
      { cleanWord: 'english', posCode: 'NOUN', syntacticRole: 'Direct Object (DO)' }
    ]
  },
  {
    id: 'GROUP_B-04',
    group: 'GROUP_B',
    groupName: 'Nhóm B: Từ có nhiều từ loại',
    sentence: 'English is an interesting subject.',
    expectations: [
      { cleanWord: 'english', posCode: 'NOUN', syntacticRole: 'Subject (S)' }
    ]
  },
  {
    id: 'GROUP_B-05',
    group: 'GROUP_B',
    groupName: 'Nhóm B: Từ có nhiều từ loại',
    sentence: 'I love this book.',
    expectations: [
      { cleanWord: 'love', posCode: 'VERB', syntacticRole: 'Predicator (P) / Verb (V)' }
    ]
  },
  {
    id: 'GROUP_B-06',
    group: 'GROUP_B',
    groupName: 'Nhóm B: Từ có nhiều từ loại',
    sentence: 'Love is important.',
    expectations: [
      { cleanWord: 'love', posCode: 'NOUN', syntacticRole: 'Subject (S)' }
    ]
  },

  // ================= GROUP C: DETERMINERS & PRONOUNS =================
  {
    id: 'GROUP_C-01',
    group: 'GROUP_C',
    groupName: 'Nhóm C: Từ hạn định và Đại từ',
    sentence: 'His book is new.',
    expectations: [
      { cleanWord: 'his', posCode: 'DET', syntacticRole: 'Determiner', posNameIncludes: 'Từ hạn định' },
      { cleanWord: 'book', posCode: 'NOUN', syntacticRole: 'Subject (S)' }
    ]
  },
  {
    id: 'GROUP_C-02',
    group: 'GROUP_C',
    groupName: 'Nhóm C: Từ hạn định và Đại từ',
    sentence: 'This book is his.',
    expectations: [
      { cleanWord: 'this', posCode: 'DET', syntacticRole: 'Determiner' },
      { cleanWord: 'book', posCode: 'NOUN', syntacticRole: 'Subject (S)' },
      { cleanWord: 'his', posCode: 'PRON', syntacticRole: 'Subject Complement (SC)', posNameIncludes: 'Đại từ sở hữu' }
    ]
  },
  {
    id: 'GROUP_C-03',
    group: 'GROUP_C',
    groupName: 'Nhóm C: Từ hạn định và Đại từ',
    sentence: 'She gave him a pen.',
    expectations: [
      { cleanWord: 'she', posCode: 'PRON', syntacticRole: 'Subject (S)' },
      { cleanWord: 'him', posCode: 'PRON', syntacticRole: 'Indirect Object (IO)' },
      { cleanWord: 'a', posCode: 'DET', syntacticRole: 'Determiner' },
      { cleanWord: 'pen', posCode: 'NOUN', syntacticRole: 'Direct Object (DO)' }
    ]
  },
  {
    id: 'GROUP_C-04',
    group: 'GROUP_C',
    groupName: 'Nhóm C: Từ hạn định và Đại từ',
    sentence: 'They helped themselves.',
    expectations: [
      { cleanWord: 'they', posCode: 'PRON', syntacticRole: 'Subject (S)' },
      { cleanWord: 'themselves', posCode: 'PRON', syntacticRole: 'Direct Object (DO)', posNameIncludes: 'phản thân' }
    ]
  },
  {
    id: 'GROUP_C-05',
    group: 'GROUP_C',
    groupName: 'Nhóm C: Từ hạn định và Đại từ',
    sentence: 'The students finished their work.',
    expectations: [
      { cleanWord: 'the', posCode: 'DET', syntacticRole: 'Determiner' },
      { cleanWord: 'students', posCode: 'NOUN', syntacticRole: 'Subject (S)', morphologyIncludes: 'số nhiều' },
      { cleanWord: 'their', posCode: 'DET', syntacticRole: 'Determiner', posNameIncludes: 'Từ hạn định' },
      { cleanWord: 'work', posCode: 'NOUN', syntacticRole: 'Direct Object (DO)' }
    ]
  },

  // ================= GROUP D: NOUN ADJUNCTS =================
  {
    id: 'GROUP_D-01',
    group: 'GROUP_D',
    groupName: 'Nhóm D: Danh từ bổ nghĩa cho danh từ',
    sentence: 'grammar errors',
    expectations: [
      { cleanWord: 'grammar', posCode: 'NOUN', syntacticRole: 'Modifier', posNameIncludes: 'Danh từ', prohibitPos: ['ADJ'] },
      { cleanWord: 'errors', posCode: 'NOUN', syntacticRole: 'Other', posNameIncludes: 'Danh từ' }
    ]
  },
  {
    id: 'GROUP_D-02',
    group: 'GROUP_D',
    groupName: 'Nhóm D: Danh từ bổ nghĩa cho danh từ',
    sentence: 'school bus',
    expectations: [
      { cleanWord: 'school', posCode: 'NOUN', syntacticRole: 'Modifier', posNameIncludes: 'Danh từ', prohibitPos: ['ADJ'] },
      { cleanWord: 'bus', posCode: 'NOUN', syntacticRole: 'Other', posNameIncludes: 'Danh từ' }
    ]
  },
  {
    id: 'GROUP_D-03',
    group: 'GROUP_D',
    groupName: 'Nhóm D: Danh từ bổ nghĩa cho danh từ',
    sentence: 'language teacher',
    expectations: [
      { cleanWord: 'language', posCode: 'NOUN', syntacticRole: 'Modifier', posNameIncludes: 'Danh từ', prohibitPos: ['ADJ'] },
      { cleanWord: 'teacher', posCode: 'NOUN', syntacticRole: 'Other', posNameIncludes: 'Danh từ' }
    ]
  },
  {
    id: 'GROUP_D-04',
    group: 'GROUP_D',
    groupName: 'Nhóm D: Danh từ bổ nghĩa cho danh từ',
    sentence: 'computer science',
    expectations: [
      { cleanWord: 'computer', posCode: 'NOUN', syntacticRole: 'Modifier', posNameIncludes: 'Danh từ', prohibitPos: ['ADJ'] },
      { cleanWord: 'science', posCode: 'NOUN', syntacticRole: 'Other', posNameIncludes: 'Danh từ' }
    ]
  },
  {
    id: 'GROUP_D-05',
    group: 'GROUP_D',
    groupName: 'Nhóm D: Danh từ bổ nghĩa cho danh từ',
    sentence: 'English grammar',
    expectations: [
      { cleanWord: 'english', posCode: 'NOUN', syntacticRole: 'Modifier', posNameIncludes: 'Danh từ', prohibitPos: ['ADJ'] },
      { cleanWord: 'grammar', posCode: 'NOUN', syntacticRole: 'Other', posNameIncludes: 'Danh từ' }
    ]
  },

  // ================= GROUP E: SENTENCE STRUCTURES =================
  {
    id: 'GROUP_E-01',
    group: 'GROUP_E',
    groupName: 'Nhóm E: Cấu trúc câu',
    sentence: 'The teacher asked him to rewrite his essay to fix the grammar errors.',
    expectations: [
      { cleanWord: 'teacher', posCode: 'NOUN', syntacticRole: 'Subject (S)' },
      { cleanWord: 'asked', posCode: 'VERB', syntacticRole: 'Predicator (P) / Verb (V)' },
      { cleanWord: 'him', posCode: 'PRON', syntacticRole: 'Direct Object (DO)' },
      { cleanWord: 'rewrite', posCode: 'VERB', syntacticRole: 'Infinitival Complement' },
      { cleanWord: 'fix', posCode: 'VERB', syntacticRole: 'Purpose Adverbial' }
    ]
  },
  {
    id: 'GROUP_E-02',
    group: 'GROUP_E',
    groupName: 'Nhóm E: Cấu trúc câu',
    sentence: 'She gave me a book.',
    expectations: [
      { cleanWord: 'she', posCode: 'PRON', syntacticRole: 'Subject (S)' },
      { cleanWord: 'gave', posCode: 'VERB', syntacticRole: 'Predicator (P) / Verb (V)' },
      { cleanWord: 'me', posCode: 'PRON', syntacticRole: 'Indirect Object (IO)' },
      { cleanWord: 'book', posCode: 'NOUN', syntacticRole: 'Direct Object (DO)' }
    ]
  },
  {
    id: 'GROUP_E-03',
    group: 'GROUP_E',
    groupName: 'Nhóm E: Cấu trúc câu',
    sentence: 'They made him angry.',
    expectations: [
      { cleanWord: 'they', posCode: 'PRON', syntacticRole: 'Subject (S)' },
      { cleanWord: 'made', posCode: 'VERB', syntacticRole: 'Predicator (P) / Verb (V)' },
      { cleanWord: 'him', posCode: 'PRON', syntacticRole: 'Direct Object (DO)' },
      { cleanWord: 'angry', posCode: 'ADJ', syntacticRole: 'Object Complement (OC)' }
    ]
  },
  {
    id: 'GROUP_E-04',
    group: 'GROUP_E',
    groupName: 'Nhóm E: Cấu trúc câu',
    sentence: 'He is a teacher.',
    expectations: [
      { cleanWord: 'he', posCode: 'PRON', syntacticRole: 'Subject (S)' },
      { cleanWord: 'is', posCode: 'VERB', syntacticRole: 'Predicator (P) / Verb (V)' },
      { cleanWord: 'teacher', posCode: 'NOUN', syntacticRole: 'Subject Complement (SC)' }
    ]
  },
  {
    id: 'GROUP_E-05',
    group: 'GROUP_E',
    groupName: 'Nhóm E: Cấu trúc câu',
    sentence: 'I saw the boy running.',
    expectations: [
      { cleanWord: 'saw', posCode: 'VERB', syntacticRole: 'Predicator (P) / Verb (V)' },
      { cleanWord: 'boy', posCode: 'NOUN', syntacticRole: 'Direct Object (DO)' },
      { cleanWord: 'running', posCode: 'VERB', syntacticRole: 'Object Complement (OC)' }
    ]
  },
  {
    id: 'GROUP_E-06',
    group: 'GROUP_E',
    groupName: 'Nhóm E: Cấu trúc câu',
    sentence: 'I have finished my homework.',
    expectations: [
      { cleanWord: 'have', posCode: 'AUX' },
      { cleanWord: 'finished', posCode: 'VERB', syntacticRole: 'Predicator (P) / Verb (V)' },
      { cleanWord: 'homework', posCode: 'NOUN', syntacticRole: 'Direct Object (DO)' }
    ]
  },
  {
    id: 'GROUP_E-07',
    group: 'GROUP_E',
    groupName: 'Nhóm E: Cấu trúc câu',
    sentence: 'She can swim.',
    expectations: [
      { cleanWord: 'can', posCode: 'MODAL' },
      { cleanWord: 'swim', posCode: 'VERB', syntacticRole: 'Predicator (P) / Verb (V)' }
    ]
  }
];

export function runGrammarTestSuite() {
  let totalTests = 0;
  let passedTests = 0;
  let failedTests = 0;
  const failures: { id: string; sentence: string; error: string }[] = [];

  console.log('================================================================');
  console.log('       RUNNING COMPREHENSIVE GRAMMAR ANALYSIS TEST SUITE        ');
  console.log('================================================================\n');

  let currentGroup = '';

  for (const testCase of TEST_SUITE) {
    if (testCase.group !== currentGroup) {
      currentGroup = testCase.group;
      console.log(`\n▶ [${testCase.group}] ${testCase.groupName}`);
      console.log('----------------------------------------------------------------');
    }

    const tokens = tokenizeSentence(testCase.sentence);
    let casePassed = true;
    const errors: string[] = [];

    // Map tokens by cleanWord (keep list for multiple occurrences like 'to')
    const tokenMap = new Map<string, WordToken[]>();
    for (const tok of tokens) {
      const list = tokenMap.get(tok.cleanWord) || [];
      list.push(tok);
      tokenMap.set(tok.cleanWord, list);
    }

    // Used count per cleanWord to verify sequential occurrences
    const usedCount = new Map<string, number>();

    for (const exp of testCase.expectations) {
      totalTests++;
      const list = tokenMap.get(exp.cleanWord);
      const currIdx = usedCount.get(exp.cleanWord) || 0;
      usedCount.set(exp.cleanWord, currIdx + 1);

      const actualTok = list && list[currIdx] ? list[currIdx] : undefined;

      if (!actualTok) {
        casePassed = false;
        errors.push(`Word "${exp.cleanWord}" (#${currIdx + 1}) not found in tokens.`);
        continue;
      }

      // Check posCode
      if (exp.posCode && actualTok.posCode !== exp.posCode) {
        casePassed = false;
        errors.push(`[${exp.cleanWord}] Expected POS '${exp.posCode}', got '${actualTok.posCode}'`);
      }

      // Check prohibited POS
      if (exp.prohibitPos && exp.prohibitPos.includes(actualTok.posCode)) {
        casePassed = false;
        errors.push(`[${exp.cleanWord}] Prohibited POS '${actualTok.posCode}' assigned!`);
      }

      // Check syntacticRole
      if (exp.syntacticRole && actualTok.syntacticRole !== exp.syntacticRole) {
        casePassed = false;
        errors.push(`[${exp.cleanWord}] Expected syntacticRole '${exp.syntacticRole}', got '${actualTok.syntacticRole}'`);
      }

      // Check posNameIncludes
      if (exp.posNameIncludes && !actualTok.posName.toLowerCase().includes(exp.posNameIncludes.toLowerCase())) {
        casePassed = false;
        errors.push(`[${exp.cleanWord}] Expected posName containing '${exp.posNameIncludes}', got '${actualTok.posName}'`);
      }

      // Check roleIncludes
      if (exp.roleIncludes && !actualTok.role.toLowerCase().includes(exp.roleIncludes.toLowerCase())) {
        casePassed = false;
        errors.push(`[${exp.cleanWord}] Expected role containing '${exp.roleIncludes}', got '${actualTok.role}'`);
      }

      // Check prohibitRoleIncludes
      if (exp.prohibitRoleIncludes && actualTok.role.toLowerCase().includes(exp.prohibitRoleIncludes.toLowerCase())) {
        casePassed = false;
        errors.push(`[${exp.cleanWord}] Prohibited text '${exp.prohibitRoleIncludes}' found in role: "${actualTok.role}"`);
      }

      // Check morphologyIncludes
      if (exp.morphologyIncludes && !actualTok.morphology.toLowerCase().includes(exp.morphologyIncludes.toLowerCase())) {
        casePassed = false;
        errors.push(`[${exp.cleanWord}] Expected morphology containing '${exp.morphologyIncludes}', got '${actualTok.morphology}'`);
      }
    }

    if (casePassed) {
      passedTests++;
      console.log(`  ✓ [PASS] ${testCase.id}: "${testCase.sentence}"`);
    } else {
      failedTests++;
      console.log(`  ✗ [FAIL] ${testCase.id}: "${testCase.sentence}"`);
      errors.forEach(e => {
        console.log(`      ↳ ${e}`);
        failures.push({ id: testCase.id, sentence: testCase.sentence, error: e });
      });
    }
  }

  console.log('\n================================================================');
  console.log(`TEST SUMMARY: ${passedTests} PASSED, ${failedTests} FAILED (TOTAL CHECKS: ${totalTests})`);
  console.log('================================================================\n');

  return { totalTests, passedTests, failedTests, failures };
}

// Auto-run if executed directly
if (typeof require !== 'undefined' && require.main === module) {
  const result = runGrammarTestSuite();
  if (result.failedTests > 0) {
    process.exit(1);
  }
}
