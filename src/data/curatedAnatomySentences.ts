export interface CuratedAnatomyToken {
  index: number;
  word: string;
  lemma: string;
  ipa: string;
  pos: string;
  pos_vi: string;
  morphology: string;
  meaning: string;
  syntacticRole: string;
  parentPhrase: string;
  grammarExplanation: string;
}

export interface AdvancedSyntacticTree {
  title: string;
  subTitle?: string;
  asciiTree: string;
}

export interface SemanticRoleItem {
  element: string;
  role: string;
  explanation: string;
}

export interface AdvancedAnalysis {
  sectionTitle: string;
  tree?: AdvancedSyntacticTree;
  semanticRoles?: SemanticRoleItem[];
}

export interface CuratedAnatomySentence {
  id: number;
  title: string;
  sentence: string;
  originalDerailedSentence?: string;
  derailStatus?: string;
  derailReason?: string;
  translation: string;
  ipa: string;
  structurePattern: string;
  tokens: CuratedAnatomyToken[];
  advancedAnalysis?: AdvancedAnalysis;
}

export const CURATED_ANATOMY_SENTENCES: CuratedAnatomySentence[] = [
  // ================= CÂU 1 =================
  {
    id: 1,
    title: 'Câu 1: The chef cooked a delicious meal. (Câu đúng chuẩn S - V - O)',
    sentence: 'The chef cooked a delicious meal.',
    translation: 'Đầu bếp đã nấu một bữa ăn ngon miệng.',
    ipa: '/ðə ʃef kʊkt ə dɪˈlɪʃəs miːl/',
    structurePattern: 'Câu đúng chuẩn S - V - O',
    tokens: [
      {
        index: 1,
        word: 'The',
        lemma: 'the',
        ipa: '/ðə/',
        pos: 'DET',
        pos_vi: 'Từ hạn định',
        morphology: 'Mạo từ xác định (Definite Article)',
        meaning: '[từ hạn định xác định đối tượng cụ thể]',
        syntacticRole: 'Determiner (Thành phần hạn định trong cụm danh từ chủ ngữ)',
        parentPhrase: 'Cụm danh từ chủ ngữ (Subject NP)',
        grammarExplanation: 'Mạo từ xác định "the" làm từ hạn định chỉ đối tượng cụ thể mà cả người nói và người nghe đều xác định được.'
      },
      {
        index: 2,
        word: 'chef',
        lemma: 'chef',
        ipa: '/ʃef/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ số ít / đếm được (Singular / Count noun)',
        meaning: 'đầu bếp',
        syntacticRole: 'Subject (S) (Chủ ngữ chính của mệnh đề)',
        parentPhrase: 'Cụm danh từ chủ ngữ (Subject NP)',
        grammarExplanation: 'Danh từ trung tâm của cụm danh từ chủ ngữ, trực tiếp thực hiện hành động nấu ăn.'
      },
      {
        index: 3,
        word: 'cooked',
        lemma: 'cook',
        ipa: '/kʊkt/',
        pos: 'VERB',
        pos_vi: 'Động từ',
        morphology: 'Quá khứ đơn (Past tense - V2)',
        meaning: 'đã nấu',
        syntacticRole: 'Predicator (P) / Verb (V) (Vị ngữ chính của mệnh đề)',
        parentPhrase: 'Mệnh đề chính (Main Clause)',
        grammarExplanation: 'Động từ chính biểu thị hành động trung tâm đã xảy ra trong quá khứ.'
      },
      {
        index: 4,
        word: 'a',
        lemma: 'a',
        ipa: '/ə/',
        pos: 'DET',
        pos_vi: 'Từ hạn định',
        morphology: 'Mạo từ bất định (Indefinite Article)',
        meaning: 'một',
        syntacticRole: 'Determiner (Thành phần hạn định trong cụm tân ngữ)',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Mạo từ bất định "a" đứng trước danh từ đếm được số ít.'
      },
      {
        index: 5,
        word: 'delicious',
        lemma: 'delicious',
        ipa: '/dɪˈlɪʃəs/',
        pos: 'ADJ',
        pos_vi: 'Tính từ',
        morphology: 'Tính từ miêu tả (Descriptive Adjective)',
        meaning: 'ngon miệng',
        syntacticRole: 'Modifier (Bổ nghĩa cho danh từ meal)',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Tính từ đứng trước làm thành phần bổ nghĩa (Modifier) phẩm chất cho danh từ "meal".'
      },
      {
        index: 6,
        word: 'meal.',
        lemma: 'meal',
        ipa: '/miːl/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ số ít / đếm được (Singular / Count noun)',
        meaning: 'bữa ăn',
        syntacticRole: 'Direct Object (DO) (Tân ngữ trực tiếp)',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Danh từ trung tâm làm tân ngữ trực tiếp chịu tác động của hành động do ngoại động từ "cooked" gây ra.'
      }
    ],
    advancedAnalysis: {
      sectionTitle: 'PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA',
      tree: {
        title: '1. Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)',
        subTitle: 'Mô hình cấu trúc phân tầng của câu đơn chuẩn (S - P - DO):',
        asciiTree: `                  S (Sentence / Mệnh đề)
                 /                   \\
        Subject NP                     Predicate VP
       /          \\                   /            \\
     DET         NOUN             VERB            DO NP
      |           |                |             /  |   \\
     The         chef            cooked        DET ADJ  NOUN
                                                |   |     |
                                                a delicious meal`
      },
      semanticRoles: [
        {
          element: 'The chef',
          role: 'Agent (Chủ thể thực hiện)',
          explanation: 'Thực thể sống (người đầu bếp), chủ động thực hiện hành vi nấu nướng.'
        },
        {
          element: 'cooked',
          role: 'Action / Process (Hành động / Quá trình)',
          explanation: 'Ngoại động từ biểu thị quá trình chế biến món ăn đã hoàn tất trong quá khứ.'
        },
        {
          element: 'a delicious meal',
          role: 'Result / Theme (Kết quả tạo thành / Đối tượng chịu tác động)',
          explanation: 'Thực thể được tạo sinh từ hành động nấu ăn của người đầu bếp (Created Object / Result NP).'
        }
      ]
    }
  },

  // ================= CÂU 2 =================
  {
    id: 2,
    title: 'Câu 2: A tasty soup ate the hungry boy. (Câu trật bánh) → Câu sửa chuẩn: The hungry boy ate a tasty soup.',
    sentence: 'The hungry boy ate a tasty soup.',
    originalDerailedSentence: 'A tasty soup ate the hungry boy.',
    derailStatus: 'Trật bánh ngữ nghĩa (Chủ ngữ "A tasty soup" không thể tự đi ăn người/đứa bé).',
    derailReason: 'Chủ ngữ "A tasty soup" không thể tự đi ăn người/đứa bé.',
    translation: 'Đứa bé đói đã ăn một bát súp ngon.',
    ipa: '/ðə ˈhʌŋɡri bɔɪ eɪt ə dɪˈlɪʃəs miːl/',
    structurePattern: 'Câu trật bánh ngữ nghĩa → Câu sửa chuẩn S - V - O',
    tokens: [
      {
        index: 1,
        word: 'The',
        lemma: 'the',
        ipa: '/ðə/',
        pos: 'DET',
        pos_vi: 'Từ hạn định',
        morphology: 'Mạo từ xác định (Definite Article)',
        meaning: '[chỉ định]',
        syntacticRole: 'Determiner (Thành phần hạn định)',
        parentPhrase: 'Cụm danh từ chủ ngữ (Subject NP)',
        grammarExplanation: 'Mạo từ xác định đứng trước danh từ để chỉ đối tượng cụ thể.'
      },
      {
        index: 2,
        word: 'hungry',
        lemma: 'hungry',
        ipa: '/ˈhʌŋɡri/',
        pos: 'ADJ',
        pos_vi: 'Tính từ',
        morphology: 'Tính từ miêu tả (Descriptive Adjective)',
        meaning: 'đói',
        syntacticRole: 'Modifier (Bổ nghĩa cho danh từ)',
        parentPhrase: 'Cụm danh từ chủ ngữ (Subject NP)',
        grammarExplanation: 'Tính từ đứng trước bổ nghĩa, chỉ trạng thái cho danh từ "boy".'
      },
      {
        index: 3,
        word: 'boy',
        lemma: 'boy',
        ipa: '/bɔɪ/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ số ít / đếm được (Singular / Count noun)',
        meaning: 'cậu bé',
        syntacticRole: 'Subject (S) (Chủ ngữ chính)',
        parentPhrase: 'Cụm danh từ chủ ngữ (Subject NP)',
        grammarExplanation: 'Danh từ trung tâm của chủ ngữ, trực tiếp thực hiện hành động ăn.'
      },
      {
        index: 4,
        word: 'ate',
        lemma: 'eat',
        ipa: '/eɪt/',
        pos: 'VERB',
        pos_vi: 'Động từ',
        morphology: 'Quá khứ đơn (Past tense - V2)',
        meaning: 'đã ăn',
        syntacticRole: 'Predicator (P) / Verb (V) (Vị ngữ chính)',
        parentPhrase: 'Mệnh đề chính (Main Clause)',
        grammarExplanation: 'Động từ chính biểu thị hành động ăn đã xảy ra trong quá khứ.'
      },
      {
        index: 5,
        word: 'a',
        lemma: 'a',
        ipa: '/ə/',
        pos: 'DET',
        pos_vi: 'Từ hạn định',
        morphology: 'Mạo từ bất định (Indefinite Article)',
        meaning: 'một',
        syntacticRole: 'Determiner (Thành phần hạn định)',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Mạo từ bất định đứng trước danh từ đếm được số ít.'
      },
      {
        index: 6,
        word: 'delicious',
        lemma: 'delicious',
        ipa: '/dɪˈlɪʃəs/',
        pos: 'ADJ',
        pos_vi: 'Tính từ',
        morphology: 'Tính từ miêu tả (Descriptive Adjective)',
        meaning: 'ngon miệng',
        syntacticRole: 'Modifier (Bổ nghĩa cho danh từ)',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Tính từ đứng trước bổ nghĩa, làm rõ phẩm chất cho danh từ "meal".'
      },
      {
        index: 7,
        word: 'meal.',
        lemma: 'meal',
        ipa: '/miːl/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ số ít / đếm được (Singular / Count noun)',
        meaning: 'bữa ăn',
        syntacticRole: 'Direct Object (DO) (Tân ngữ trực tiếp)',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Danh từ trung tâm làm tân ngữ trực tiếp, chịu tác động của ngoại động từ "ate".'
      }
    ],
    advancedAnalysis: {
      sectionTitle: 'PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA',
      tree: {
        title: '1. Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)',
        subTitle: 'Mô hình cấu trúc phân tầng của câu sửa chuẩn (S - P - DO):',
        asciiTree: `                     S (Sentence / Mệnh đề)
                    /                      \\
          Subject NP                        Predicate VP
         /    |     \\                      /            \\
       DET   ADJ   NOUN                 VERB            DO NP
        |     |      |                   |             /  |   \\
       The  hungry  boy                 ate          DET ADJ  NOUN
                                                      |   |     |
                                                      a tasty  soup
                                                     (delicious meal)`
      },
      semanticRoles: [
        {
          element: 'The hungry boy',
          role: 'Agent (Chủ thể hành động)',
          explanation: 'Thực thể sống, có tri giác và khả năng chủ động thực hiện hành động ăn.'
        },
        {
          element: 'ate',
          role: 'Action / Process (Hành động / Quá trình)',
          explanation: 'Ngoại động từ thể hiện quá trình tiêu thụ thức ăn trong quá khứ.'
        },
        {
          element: 'a tasty soup',
          role: 'Theme / Patient (Đối tượng chịu tác động)',
          explanation: 'Thực thể vô tri giác, là món ăn bị tiêu thụ bởi chủ thể.'
        },
        {
          element: 'Nguyên nhân trật bánh',
          role: 'Lỗi gán vai trò ngữ nghĩa (Thematic Role Reversal)',
          explanation: 'Câu gốc "A tasty soup ate the hungry boy" đảo ngược trật tự: đặt món súp vào vị trí Agent và người vào Theme, tạo nên xung đột ngữ nghĩa phi lý.'
        }
      ]
    }
  },
  // ================= CÂU 3 =================
  {
    id: 3,
    title: 'Câu 3: The gardener waters the flowers every morning. (Câu đúng chuẩn S - V - O - Adv)',
    sentence: 'The gardener waters the flowers every morning.',
    translation: 'Người làm vườn tưới những bông hoa mỗi buổi sáng.',
    ipa: '/ðə ˈɡɑːrdnər ˈwɔːtərz ðə ˈflaʊərz ˈevri ˈmɔːrnɪŋ/',
    structurePattern: 'Câu đúng chuẩn S - V - O - Adv',
    tokens: [
      {
        index: 1,
        word: 'The',
        lemma: 'the',
        ipa: '/ðə/',
        pos: 'DET',
        pos_vi: 'Từ hạn định',
        morphology: 'Mạo từ xác định(Definite Article)',
        meaning: '[chỉ định]',
        syntacticRole: 'Determiner(Thành phần hạn định)',
        parentPhrase: 'Cụm danh từ chủ ngữ(Subject NP)',
        grammarExplanation: 'Mạo từ xác định đứng trước danh từ để chỉ đối tượng cụ thể.'
      },
      {
        index: 2,
        word: 'gardener',
        lemma: 'gardener',
        ipa: '/ˈɡɑːrdnər/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ số ít / đếm được(Singular / Count noun)',
        meaning: 'người làm vườn',
        syntacticRole: 'Subject (S)(Chủ ngữ chính)',
        parentPhrase: 'Cụm danh từ chủ ngữ(Subject NP)',
        grammarExplanation: 'Danh từ trung tâm của chủ ngữ, trực tiếp thực hiện hành động tưới cây.'
      },
      {
        index: 3,
        word: 'waters',
        lemma: 'water',
        ipa: '/ˈwɔːtər/ (phiên âm lemma)',
        pos: 'VERB',
        pos_vi: 'Động từ',
        morphology: 'Hiện tại đơn - Ngôi 3 số ít(Present Simple - 3rd person)',
        meaning: 'tưới nước',
        syntacticRole: 'Predicator (P) / Verb (V)(Vị ngữ chính)',
        parentPhrase: 'Mệnh đề chính(Main Clause)',
        grammarExplanation: 'Động từ chính chia ở thì hiện tại đơn (thêm -s do chủ ngữ ngôi 3 số ít), diễn tả hành động lặp lại theo thói quen.'
      },
      {
        index: 4,
        word: 'the',
        lemma: 'the',
        ipa: '/ðə/',
        pos: 'DET',
        pos_vi: 'Từ hạn định',
        morphology: 'Mạo từ xác định(Definite Article)',
        meaning: 'những',
        syntacticRole: 'Determiner(Thành phần hạn định)',
        parentPhrase: 'Cụm tân ngữ(Object Phrase / NP)',
        grammarExplanation: 'Mạo từ xác định đứng trước cụm danh từ số nhiều chỉ đối tượng xác định.'
      },
      {
        index: 5,
        word: 'flowers',
        lemma: 'flower',
        ipa: '/ˈflaʊərz/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ số nhiều / đếm được(Plural / Count noun)',
        meaning: 'những bông hoa',
        syntacticRole: 'Direct Object (DO)(Tân ngữ trực tiếp)',
        parentPhrase: 'Cụm tân ngữ(Object Phrase / NP)',
        grammarExplanation: 'Danh từ trung tâm làm tân ngữ trực tiếp, chịu tác động của ngoại động từ "waters".'
      },
      {
        index: 6,
        word: 'every',
        lemma: 'every',
        ipa: '/ˈevri/',
        pos: 'DET',
        pos_vi: 'Từ hạn định',
        morphology: 'Từ hạn định chỉ lượng(Quantifier)',
        meaning: 'mỗi',
        syntacticRole: 'Adjunct (A) / Adverbial(Thành phần trạng ngữ)',
        parentPhrase: 'Cụm trạng ngữ chỉ thời gian(Adverbial Phrase)',
        grammarExplanation: 'Từ hạn định đi kèm với danh từ tạo thành cụm trạng ngữ chỉ thời gian.'
      },
      {
        index: 7,
        word: 'morning.',
        lemma: 'morning',
        ipa: '/ˈmɔːrnɪŋ/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ chỉ thời gian(Noun of time)',
        meaning: 'buổi sáng',
        syntacticRole: 'Adjunct (A) / Adverbial(Thành phần trạng ngữ)',
        parentPhrase: 'Cụm trạng ngữ chỉ thời gian(Adverbial Phrase)',
        grammarExplanation: 'Danh từ trung tâm của cụm trạng ngữ chỉ thời gian, bổ nghĩa cho toàn bộ câu.'
      }
    ],
    advancedAnalysis: {
      sectionTitle: 'PHẦN 2: PHẦN BỔ SUNG NÂNG CAO (DÀNH CHO GIÁO ÁN / TÀI LIỆU CHUYÊN SÂU)',
      tree: {
        title: '1. Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)',
        subTitle: 'Mô hình cấu trúc phân tầng của câu đơn (S - P - O - A):',
        asciiTree: `                  S (Sentence / Mệnh đề)
                 /                   \\
        Subject NP                     Predicate VP
       /          \\                   /     |     \\       \\
     DET         NOUN             VERB     DO NP   Adjunct (AdvP)
      |           |                |      /    \\    /          \\
     The       gardener         waters  DET  NOUN  every      morning
                                        the  flowers`
      },
      semanticRoles: [
        {
          element: 'The gardener',
          role: 'Agent (Chủ thể thực hiện)',
          explanation: 'Thực thể chủ động thực hiện hành động tưới cây.'
        },
        {
          element: 'waters',
          role: 'Action / Process (Hành động / Quá trình)',
          explanation: 'Biểu thị hành động tác động ngoại vi.'
        },
        {
          element: 'the flowers',
          role: 'Theme / Patient (Đối tượng chịu tác động)',
          explanation: 'Thực thể bị tác động trực tiếp bởi hành động của chủ thể.'
        },
        {
          element: 'every morning',
          role: 'Time / Temporal Adjunct (Thời gian)',
          explanation: 'Cung cấp bối cảnh thời gian diễn ra sự việc.'
        }
      ]
    }
  },
  // ================= CÂU 4 =================
  {
    id: 4,
    title: 'Câu 4: English teaches the professor at the university. (Câu trật bánh) → Câu sửa chuẩn: The professor teaches English at the university.',
    sentence: 'The professor teaches English at the university.',
    originalDerailedSentence: 'English teaches the professor at the university.',
    derailStatus: 'Trật bánh cấu trúc (Tân ngữ "English" bị đẩy lên đầu làm chủ ngữ một cách vô lý).',
    derailReason: 'Tân ngữ "English" bị đẩy lên đầu làm chủ ngữ một cách vô lý.',
    translation: 'Giáo sư dạy tiếng Anh ở trường đại học.',
    ipa: '/ðə prəˈfɛsər ˈtiːtʃɪz ˈɪŋɡlɪʃ æt ðə ˌjuːnɪˈvɜːrsɪti/',
    structurePattern: 'Câu trật bánh cấu trúc → Câu sửa chuẩn S - P - O - A_pp',
    tokens: [
      {
        index: 1,
        word: 'The',
        lemma: 'the',
        ipa: '/ðə/',
        pos: 'DET',
        pos_vi: 'Từ hạn định',
        morphology: 'Mạo từ xác định(Definite Article)',
        meaning: '[chỉ định]',
        syntacticRole: 'Determiner(Thành phần hạn định)',
        parentPhrase: 'Cụm danh từ chủ ngữ(Subject NP)',
        grammarExplanation: 'Mạo từ xác định đứng trước danh từ để chỉ đối tượng cụ thể.'
      },
      {
        index: 2,
        word: 'professor',
        lemma: 'professor',
        ipa: '/prəˈfɛsər/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ số ít / đếm được(Singular / Count noun)',
        meaning: 'giáo sư',
        syntacticRole: 'Subject (S)(Chủ ngữ chính)',
        parentPhrase: 'Cụm danh từ chủ ngữ(Subject NP)',
        grammarExplanation: 'Danh từ trung tâm của chủ ngữ, trực tiếp thực hiện hành động dạy học.'
      },
      {
        index: 3,
        word: 'teaches',
        lemma: 'teach',
        ipa: '/ˈtiːtʃɪz/(phiên âm lemma: /ˈtiːtʃ/)',
        pos: 'VERB',
        pos_vi: 'Động từ',
        morphology: 'Hiện tại đơn - Ngôi 3 số ít(Present Simple - 3rd person)',
        meaning: 'dạy học',
        syntacticRole: 'Predicator (P) / Verb (V)(Vị ngữ chính)',
        parentPhrase: 'Mệnh đề chính(Main Clause)',
        grammarExplanation: 'Động từ chính chia ở thì hiện tại đơn (thêm -es do chủ ngữ ngôi 3 số ít), diễn tả hành động nghề nghiệp/thói quen.'
      },
      {
        index: 4,
        word: 'English',
        lemma: 'English',
        ipa: '/ˈɪŋɡlɪʃ/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ riêng / Danh từ không đếm được',
        meaning: 'tiếng Anh',
        syntacticRole: 'Direct Object (DO)(Tân ngữ trực tiếp)',
        parentPhrase: 'Cụm tân ngữ(Object Phrase / NP)',
        grammarExplanation: 'Danh từ trung tâm làm tân ngữ trực tiếp, chỉ môn học chịu tác động của ngoại động từ "teaches".'
      },
      {
        index: 5,
        word: 'at',
        lemma: 'at',
        ipa: '/æt/',
        pos: 'PREP',
        pos_vi: 'Giới từ',
        morphology: 'Giới từ chỉ vị trí(Preposition)',
        meaning: 'tại',
        syntacticRole: 'Preposition(Hạt nhân cụm giới từ)',
        parentPhrase: 'Cụm trạng ngữ chỉ nơi chốn(Prepositional Phrase)',
        grammarExplanation: 'Giới từ định vị không gian, mở đầu cho cụm trạng ngữ chỉ địa điểm.'
      },
      {
        index: 6,
        word: 'the',
        lemma: 'the',
        ipa: '/ðə/',
        pos: 'DET',
        pos_vi: 'Từ hạn định',
        morphology: 'Mạo từ xác định(Definite Article)',
        meaning: 'trường',
        syntacticRole: 'Determiner(Thành phần hạn định)',
        parentPhrase: 'Cụm trạng ngữ chỉ nơi chốn(Prepositional Phrase)',
        grammarExplanation: 'Mạo từ xác định đi kèm danh từ chỉ địa điểm phía sau.'
      },
      {
        index: 7,
        word: 'university.',
        lemma: 'university',
        ipa: '/ˌjuːnɪˈvɜːrsɪti/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ số ít / đếm được(Singular / Count noun)',
        meaning: 'trường đại học',
        syntacticRole: 'Object of Preposition (O_prep)(Tân ngữ của giới từ)',
        parentPhrase: 'Cụm trạng ngữ chỉ nơi chốn(Prepositional Phrase)',
        grammarExplanation: 'Danh từ trung tâm đóng vai trò tân ngữ của giới từ "at", hoàn thiện cụm trạng ngữ chỉ nơi chốn.'
      }
    ],
    advancedAnalysis: {
      sectionTitle: '3. PHẦN BỔ SUNG NÂNG CAO',
      tree: {
        title: 'Sơ đồ cấu trúc câu phân tầng (Syntactic Phrase Structure Tree)',
        subTitle: 'Mô hình cấu trúc mở rộng của câu có chứa cụm giới từ chỉ địa điểm (S - P - O - A_pp):',
        asciiTree: `                      S (Sentence / Mệnh đề)
                     /                      \\
            Subject NP                        Predicate VP
           /          \\                      /     |      \\
         DET         NOUN                VERB    DO NP  Adjunct (PP)
          |           |                   |        |    /          \\
         The      professor            teaches  English PREP        NP
                                                         |         /  \\
                                                        at        DET NOUN
                                                                   |    |
                                                                  the university`
      },
      semanticRoles: [
        {
          element: 'The professor',
          role: 'Agent (Chủ thể thực hiện)',
          explanation: 'Thực thể có tri giác (người giáo sư), chủ động thực hiện hành vi giảng dạy.'
        },
        {
          element: 'teaches',
          role: 'Action / Process (Hành động / Quá trình)',
          explanation: 'Ngoại động từ biểu thị hành động truyền đạt kiến thức nghề nghiệp.'
        },
        {
          element: 'English',
          role: 'Theme / Patient (Nội dung / Đối tượng chịu tác động)',
          explanation: 'Môn học/ngôn ngữ được truyền thụ (Direct Object NP).'
        },
        {
          element: 'at the university',
          role: 'Location / Locative Adjunct (Địa điểm nơi chốn)',
          explanation: 'Cụm giới từ xác định không gian thể chế nơi hành vi giảng dạy diễn ra.'
        },
        {
          element: 'Nguyên nhân trật bánh',
          role: 'Trật bánh cấu trúc (Structural Derailment)',
          explanation: 'Tân ngữ "English" bị đảo lên vị trí chủ ngữ hình thức, biến đối tượng môn học thành chủ thể hành động một cách vô lý.'
        }
      ]
    }
  },

  // ================= CÂU 5 =================
  {
    id: 5,
    title: 'Câu 5: The artist painted a beautiful picture. (Câu đúng chuẩn S - V - O)',
    sentence: 'The artist painted a beautiful picture.',
    translation: 'Người họa sĩ đã vẽ một bức tranh đẹp.',
    ipa: '/ðə ˈɑːrtɪst ˈpeɪntɪd ə ˈbjuːtɪfl ˈpɪktʃər/',
    structurePattern: 'Câu đúng chuẩn S - V - O',
    tokens: [
      {
        index: 1,
        word: 'The',
        lemma: 'the',
        ipa: '/ðə/',
        pos: 'DET',
        pos_vi: 'Từ hạn định',
        morphology: 'Mạo từ xác định',
        meaning: 'xác định',
        syntacticRole: 'Determiner',
        parentPhrase: 'Cụm danh từ chủ ngữ (Subject NP)',
        grammarExplanation: 'Mạo từ xác định đứng trước danh từ chỉ người họa sĩ.'
      },
      {
        index: 2,
        word: 'artist',
        lemma: 'artist',
        ipa: '/ˈɑːrtɪst/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ số ít / đếm được',
        meaning: 'họa sĩ',
        syntacticRole: 'Subject (S)',
        parentPhrase: 'Cụm danh từ chủ ngữ (Subject NP)',
        grammarExplanation: 'Danh từ trung tâm của chủ ngữ, thực hiện hành động vẽ.'
      },
      {
        index: 3,
        word: 'painted',
        lemma: 'paint',
        ipa: '/ˈpeɪntɪd/',
        pos: 'VERB',
        pos_vi: 'Động từ',
        morphology: 'Quá khứ đơn (V2)',
        meaning: 'đã vẽ',
        syntacticRole: 'Predicator (P) / Verb (V)',
        parentPhrase: 'Mệnh đề chính (Main Clause)',
        grammarExplanation: 'Động từ chính diễn tả hành động vẽ trong quá khứ.'
      },
      {
        index: 4,
        word: 'a',
        lemma: 'a',
        ipa: '/ə/',
        pos: 'DET',
        pos_vi: 'Từ hạn định',
        morphology: 'Mạo từ bất định',
        meaning: 'một',
        syntacticRole: 'Determiner',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Mạo từ bất định đứng trước danh từ đếm được số ít.'
      },
      {
        index: 5,
        word: 'beautiful',
        lemma: 'beautiful',
        ipa: '/ˈbjuːtɪfl/',
        pos: 'ADJ',
        pos_vi: 'Tính từ',
        morphology: 'Tính từ miêu tả',
        meaning: 'đẹp',
        syntacticRole: 'Modifier',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Tính từ đứng trước bổ nghĩa cho danh từ picture.'
      },
      {
        index: 6,
        word: 'picture.',
        lemma: 'picture',
        ipa: '/ˈpɪktʃər/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ số ít / đếm được',
        meaning: 'bức tranh',
        syntacticRole: 'Direct Object (DO)',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Danh từ trung tâm của tân ngữ, đối tượng chịu tác động.'
      }
    ],
    advancedAnalysis: {
      sectionTitle: 'PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA',
      tree: {
        title: 'Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)',
        subTitle: 'Mô hình cấu trúc phân tầng của câu đơn chuẩn (S - P - DO):',
        asciiTree: `                  S (Sentence / Mệnh đề)
                 /                   \\
        Subject NP                     Predicate VP
       /          \\                   /            \\
     DET         NOUN             VERB            DO NP
      |           |                |             /  |   \\
     The        artist          painted        DET ADJ  NOUN
                                                |   |     |
                                                a beautiful picture`
      },
      semanticRoles: [
        {
          element: 'The artist',
          role: 'Agent (Chủ thể thực hiện)',
          explanation: 'Người họa sĩ, thực thể có tri giác chủ động sáng tác hội họa.'
        },
        {
          element: 'painted',
          role: 'Action / Process (Hành động / Quá trình)',
          explanation: 'Ngoại động từ diễn tả hành động vẽ tranh đã hoàn thành trong quá khứ.'
        },
        {
          element: 'a beautiful picture',
          role: 'Result / Theme (Kết quả tạo thành)',
          explanation: 'Bức tranh nghệ thuật được tạo sinh từ hành động vẽ của người họa sĩ.'
        }
      ]
    }
  },

  // ================= CÂU 6 =================
  {
    id: 6,
    title: 'Câu 6: The manager answered customer questions patiently. (Câu đúng chuẩn S - V - O - Adv)',
    sentence: 'The manager answered customer questions patiently.',
    translation: 'Người quản lý đã kiên nhẫn trả lời các câu hỏi của khách hàng.',
    ipa: '/ðə ˈmænɪdʒər ˈænsərd ˈkʌstəmər ˈkwɛstʃənz ˈpeɪʃntli/',
    structurePattern: 'Câu đúng chuẩn S - V - O - Adv',
    tokens: [
      {
        index: 1,
        word: 'The',
        lemma: 'the',
        ipa: '/ðə/',
        pos: 'DET',
        pos_vi: 'Từ hạn định',
        morphology: 'Mạo từ xác định',
        meaning: 'xác định',
        syntacticRole: 'Determiner',
        parentPhrase: 'Cụm danh từ chủ ngữ (Subject NP)',
        grammarExplanation: 'Mạo từ xác định đứng trước danh từ quản lý.'
      },
      {
        index: 2,
        word: 'manager',
        lemma: 'manager',
        ipa: '/ˈmænɪdʒər/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ số ít / đếm được',
        meaning: 'người quản lý',
        syntacticRole: 'Subject (S)',
        parentPhrase: 'Cụm danh từ chủ ngữ (Subject NP)',
        grammarExplanation: 'Danh từ trung tâm của chủ ngữ, thực hiện hành động trả lời.'
      },
      {
        index: 3,
        word: 'answered',
        lemma: 'answer',
        ipa: '/ˈænsərd/',
        pos: 'VERB',
        pos_vi: 'Động từ',
        morphology: 'Quá khứ đơn (V2)',
        meaning: 'đã trả lời',
        syntacticRole: 'Predicator (P) / Verb (V)',
        parentPhrase: 'Mệnh đề chính (Main Clause)',
        grammarExplanation: 'Động từ chính chỉ hành động trả lời trong quá khứ.'
      },
      {
        index: 4,
        word: 'customer',
        lemma: 'customer',
        ipa: '/ˈkʌstəmər/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ dùng làm định ngữ',
        meaning: 'khách hàng',
        syntacticRole: 'Modifier',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Danh từ đứng trước làm định ngữ bổ nghĩa cho danh từ questions.'
      },
      {
        index: 5,
        word: 'questions',
        lemma: 'question',
        ipa: '/ˈkwɛstʃənz/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ số nhiều / đếm được',
        meaning: 'các câu hỏi',
        syntacticRole: 'Direct Object (DO)',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Danh từ trung tâm của tân ngữ, đối tượng bị giải đáp.'
      },
      {
        index: 6,
        word: 'patiently.',
        lemma: 'patiently',
        ipa: '/ˈpeɪʃntli/',
        pos: 'ADV',
        pos_vi: 'Trạng từ',
        morphology: 'Trạng từ cách thức',
        meaning: 'một cách kiên nhẫn',
        syntacticRole: 'Adjunct (A) / Adverbial',
        parentPhrase: 'Cụm trạng ngữ (Adverbial Phrase)',
        grammarExplanation: 'Trạng từ chỉ cách thức đứng cuối câu bổ nghĩa cho động từ.'
      }
    ],
    advancedAnalysis: {
      sectionTitle: 'PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA',
      tree: {
        title: 'Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)',
        subTitle: 'Mô hình cấu trúc phân tầng của câu (S - P - DO - Adv):',
        asciiTree: `                     S (Sentence / Mệnh đề)
                    /                      \\
          Subject NP                        Predicate VP
         /          \\                      /     |      \\
       DET         NOUN                VERB    DO NP   Adjunct (AdvP)
        |           |                   |      /    \\        |
       The       manager             answered NOUN  NOUN  patiently
                                               |     |
                                           customer questions`
      },
      semanticRoles: [
        {
          element: 'The manager',
          role: 'Agent (Chủ thể thực hiện)',
          explanation: 'Người quản lý giải đáp các thắc mắc của khách hàng.'
        },
        {
          element: 'answered',
          role: 'Action / Process (Hành động / Quá trình)',
          explanation: 'Động từ vị ngữ thể hiện hành động trả lời thấu đáo.'
        },
        {
          element: 'customer questions',
          role: 'Theme / Patient (Nội dung giải đáp)',
          explanation: 'Những câu hỏi thắc mắc được giải quyết (Direct Object NP).'
        },
        {
          element: 'patiently',
          role: 'Manner (Cách thức thái độ)',
          explanation: 'Thái độ kiên nhẫn, nhẫn nại khi phục vụ khách hàng.'
        }
      ]
    }
  },

  // ================= CÂU 7 =================
  {
    id: 7,
    title: 'Câu 7: The strong wind blew down the old tree. (Câu đúng chuẩn S - V - Part - O)',
    sentence: 'The strong wind blew down the old tree.',
    translation: 'Cơn gió mạnh đã thổi đổ cây cổ thụ.',
    ipa: '/ðə strɔːŋ wɪnd bluː daʊn ðə oʊld triː/',
    structurePattern: 'Câu đúng chuẩn S - V - Particle - O',
    tokens: [
      {
        index: 1,
        word: 'The',
        lemma: 'the',
        ipa: '/ðə/',
        pos: 'DET',
        pos_vi: 'Từ hạn định',
        morphology: 'Mạo từ xác định',
        meaning: 'xác định',
        syntacticRole: 'Determiner',
        parentPhrase: 'Cụm danh từ chủ ngữ (Subject NP)',
        grammarExplanation: 'Mạo từ xác định đứng trước danh từ chỉ gió.'
      },
      {
        index: 2,
        word: 'strong',
        lemma: 'strong',
        ipa: '/strɔːŋ/',
        pos: 'ADJ',
        pos_vi: 'Tính từ',
        morphology: 'Tính từ miêu tả',
        meaning: 'mạnh',
        syntacticRole: 'Modifier',
        parentPhrase: 'Cụm danh từ chủ ngữ (Subject NP)',
        grammarExplanation: 'Tính từ đứng trước bổ nghĩa cho danh từ wind.'
      },
      {
        index: 3,
        word: 'wind',
        lemma: 'wind',
        ipa: '/wɪnd/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ số ít / đếm được',
        meaning: 'cơn gió',
        syntacticRole: 'Subject (S)',
        parentPhrase: 'Cụm danh từ chủ ngữ (Subject NP)',
        grammarExplanation: 'Danh từ trung tâm của chủ ngữ, gây ra tác động.'
      },
      {
        index: 4,
        word: 'blew',
        lemma: 'blow',
        ipa: '/bluː/',
        pos: 'VERB',
        pos_vi: 'Động từ',
        morphology: 'Quá khứ đơn (V2)',
        meaning: 'đã thổi',
        syntacticRole: 'Predicator (P) / Verb (V)',
        parentPhrase: 'Mệnh đề chính (Main Clause)',
        grammarExplanation: 'Động từ chính diễn tả hành động thổi mạnh.'
      },
      {
        index: 5,
        word: 'down',
        lemma: 'down',
        ipa: '/daʊn/',
        pos: 'PARTICLE',
        pos_vi: 'Phó từ',
        morphology: 'Phó từ đi kèm động từ',
        meaning: 'xuống',
        syntacticRole: 'Particle / Modifier',
        parentPhrase: 'Cụm động từ (Phrasal Verb)',
        grammarExplanation: 'Phó từ cấu thành cụm động từ blow down (làm đổ gục).'
      },
      {
        index: 6,
        word: 'the',
        lemma: 'the',
        ipa: '/ðə/',
        pos: 'DET',
        pos_vi: 'Từ hạn định',
        morphology: 'Mạo từ xác định',
        meaning: 'cái',
        syntacticRole: 'Determiner',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Mạo từ xác định đứng trước danh từ cây cổ thụ.'
      },
      {
        index: 7,
        word: 'old',
        lemma: 'old',
        ipa: '/oʊld/',
        pos: 'ADJ',
        pos_vi: 'Tính từ',
        morphology: 'Tính từ miêu tả',
        meaning: 'lâu năm, già',
        syntacticRole: 'Modifier',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Tính từ bổ nghĩa cho danh từ tree.'
      },
      {
        index: 8,
        word: 'tree.',
        lemma: 'tree',
        ipa: '/triː/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ số ít / đếm được',
        meaning: 'cây',
        syntacticRole: 'Direct Object (DO)',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Danh từ trung tâm của tân ngữ, đối tượng chịu lực đổ xuống.'
      }
    ],
    advancedAnalysis: {
      sectionTitle: 'PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA',
      tree: {
        title: 'Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)',
        subTitle: 'Mô hình phân tầng của câu có cụm động từ (Phrasal Verb S - V_part - O):',
        asciiTree: `                     S (Sentence / Mệnh đề)
                    /                      \\
          Subject NP                        Predicate VP
         /    |     \\                      /    \\        \\
       DET   ADJ   NOUN                 VERB  Particle  DO NP
        |     |      |                   |       |      /  |   \\
       The  strong  wind                blew    down  DET ADJ  NOUN
                                                       |   |     |
                                                      the old   tree`
      },
      semanticRoles: [
        {
          element: 'The strong wind',
          role: 'Cause / Natural Force (Lực tác động tự nhiên)',
          explanation: 'Hiện tượng thiên nhiên (cơn gió mạnh) phát động lực quật ngã.'
        },
        {
          element: 'blew down',
          role: 'Action / Phrasal Verb (Hành động quật ngã)',
          explanation: 'Cụm động từ chỉ sự làm gãy đổ do gió thổi.'
        },
        {
          element: 'the old tree',
          role: 'Theme / Patient (Đối tượng chịu tác động)',
          explanation: 'Cây cổ thụ bị quật ngã xuống đất (Direct Object NP).'
        }
      ]
    }
  },

  // ================= CÂU 8 =================
  {
    id: 8,
    title: 'Câu 8: My mother baked a delicious cake yesterday. (Câu đúng chuẩn S - V - O - Adv)',
    sentence: 'My mother baked a delicious cake yesterday.',
    translation: 'Mẹ tôi đã nướng một chiếc bánh ngon vào ngày hôm qua.',
    ipa: '/maɪ ˈmʌðər beɪkt ə dɪˈlɪʃəs keɪk ˈjɛstərdeɪ/',
    structurePattern: 'Câu đúng chuẩn S - V - O - Adv',
    tokens: [
      {
        index: 1,
        word: 'My',
        lemma: 'my',
        ipa: '/maɪ/',
        pos: 'DET',
        pos_vi: 'Từ hạn định',
        morphology: 'Từ hạn định sở hữu',
        meaning: 'của tôi',
        syntacticRole: 'Determiner',
        parentPhrase: 'Cụm danh từ chủ ngữ (Subject NP)',
        grammarExplanation: 'Từ hạn định sở hữu đứng trước danh từ chỉ người thân.'
      },
      {
        index: 2,
        word: 'mother',
        lemma: 'mother',
        ipa: '/ˈmʌðər/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ số ít / đếm được',
        meaning: 'mẹ',
        syntacticRole: 'Subject (S)',
        parentPhrase: 'Cụm danh từ chủ ngữ (Subject NP)',
        grammarExplanation: 'Danh từ trung tâm của chủ ngữ, chủ thể thực hiện việc nướng bánh.'
      },
      {
        index: 3,
        word: 'baked',
        lemma: 'bake',
        ipa: '/beɪkt/',
        pos: 'VERB',
        pos_vi: 'Động từ',
        morphology: 'Quá khứ đơn (V2)',
        meaning: 'đã nướng',
        syntacticRole: 'Predicator (P) / Verb (V)',
        parentPhrase: 'Mệnh đề chính (Main Clause)',
        grammarExplanation: 'Động từ chính chỉ hành động nướng trong quá khứ.'
      },
      {
        index: 4,
        word: 'a',
        lemma: 'a',
        ipa: '/ə/',
        pos: 'DET',
        pos_vi: 'Từ hạn định',
        morphology: 'Mạo từ bất định',
        meaning: 'một',
        syntacticRole: 'Determiner',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Mạo từ bất định đứng trước danh từ đếm được số ít.'
      },
      {
        index: 5,
        word: 'delicious',
        lemma: 'delicious',
        ipa: '/dɪˈlɪʃəs/',
        pos: 'ADJ',
        pos_vi: 'Tính từ',
        morphology: 'Tính từ miêu tả',
        meaning: 'ngon',
        syntacticRole: 'Modifier',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Tính từ đứng trước bổ nghĩa cho danh từ cake.'
      },
      {
        index: 6,
        word: 'cake',
        lemma: 'cake',
        ipa: '/keɪk/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ số ít / đếm được',
        meaning: 'bánh ngọt',
        syntacticRole: 'Direct Object (DO)',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Danh từ trung tâm của cụm tân ngữ, đối tượng chịu tác động.'
      },
      {
        index: 7,
        word: 'yesterday.',
        lemma: 'yesterday',
        ipa: '/ˈjɛstərdeɪ/',
        pos: 'ADV',
        pos_vi: 'Trạng từ',
        morphology: 'Trạng từ chỉ thời gian',
        meaning: 'ngày hôm qua',
        syntacticRole: 'Adjunct (A) / Adverbial',
        parentPhrase: 'Cụm trạng ngữ thời gian',
        grammarExplanation: 'Trạng từ chỉ thời gian đứng cuối câu bổ nghĩa cho toàn bộ mệnh đề.'
      }
    ],
    advancedAnalysis: {
      sectionTitle: 'PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA',
      tree: {
        title: 'Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)',
        subTitle: 'Mô hình cấu trúc phân tầng của câu (S - P - DO - Adv):',
        asciiTree: `                     S (Sentence / Mệnh đề)
                    /                      \\
          Subject NP                        Predicate VP
         /          \\                      /     |      \\
       DET         NOUN                VERB    DO NP   Adjunct (AdvP)
        |           |                   |     /  |   \\       |
       My         mother              baked DET ADJ NOUN yesterday
                                             |   |    |
                                             a delicious cake`
      },
      semanticRoles: [
        {
          element: 'My mother',
          role: 'Agent (Chủ thể thực hiện)',
          explanation: 'Người mẹ, chủ thể chủ động nướng bánh.'
        },
        {
          element: 'baked',
          role: 'Action / Process (Hành động nướng bánh)',
          explanation: 'Ngoại động từ quá khứ chỉ hành động chế biến.'
        },
        {
          element: 'a delicious cake',
          role: 'Result / Theme (Kết quả tạo thành)',
          explanation: 'Chiếc bánh thơm ngon được làm ra từ việc nướng bánh.'
        },
        {
          element: 'yesterday',
          role: 'Temporal Adjunct (Thời gian)',
          explanation: 'Mốc thời gian ngày hôm qua.'
        }
      ]
    }
  },

  // ================= CÂU 9 =================
  {
    id: 9,
    title: 'Câu 9: The students wrote interesting essays. (Câu đúng chuẩn S - V - O)',
    sentence: 'The students wrote interesting essays.',
    translation: 'Các học sinh đã viết những bài luận thú vị.',
    ipa: '/ðə ˈstjuːdənts roʊt ˈɪntrəstɪŋ ˈɛseɪz/',
    structurePattern: 'Câu đúng chuẩn S - V - O',
    tokens: [
      {
        index: 1,
        word: 'The',
        lemma: 'the',
        ipa: '/ðə/',
        pos: 'DET',
        pos_vi: 'Từ hạn định',
        morphology: 'Mạo từ xác định',
        meaning: 'những',
        syntacticRole: 'Determiner',
        parentPhrase: 'Cụm danh từ chủ ngữ (Subject NP)',
        grammarExplanation: 'Mạo từ xác định đứng trước danh từ số nhiều học sinh.'
      },
      {
        index: 2,
        word: 'students',
        lemma: 'student',
        ipa: '/ˈstjuːdənts/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ số nhiều / đếm được',
        meaning: 'học sinh',
        syntacticRole: 'Subject (S)',
        parentPhrase: 'Cụm danh từ chủ ngữ (Subject NP)',
        grammarExplanation: 'Danh từ trung tâm của chủ ngữ, thực hiện hành động viết.'
      },
      {
        index: 3,
        word: 'wrote',
        lemma: 'write',
        ipa: '/roʊt/',
        pos: 'VERB',
        pos_vi: 'Động từ',
        morphology: 'Quá khứ đơn (V2)',
        meaning: 'đã viết',
        syntacticRole: 'Predicator (P) / Verb (V)',
        parentPhrase: 'Mệnh đề chính (Main Clause)',
        grammarExplanation: 'Động từ chính chỉ hành động viết trong quá khứ.'
      },
      {
        index: 4,
        word: 'interesting',
        lemma: 'interesting',
        ipa: '/ˈɪntrəstɪŋ/',
        pos: 'ADJ',
        pos_vi: 'Tính từ',
        morphology: 'Tính từ miêu tả',
        meaning: 'thú vị',
        syntacticRole: 'Modifier',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Tính từ đứng trước bổ nghĩa cho danh từ essays.'
      },
      {
        index: 5,
        word: 'essays.',
        lemma: 'essay',
        ipa: '/ˈɛseɪz/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ số nhiều / đếm được',
        meaning: 'các bài luận',
        syntacticRole: 'Direct Object (DO)',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Danh từ trung tâm của cụm tân ngữ, là đối tượng được viết ra.'
      }
    ],
    advancedAnalysis: {
      sectionTitle: 'PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA',
      tree: {
        title: 'Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)',
        subTitle: 'Mô hình phân tầng của câu (S - P - DO):',
        asciiTree: `                  S (Sentence / Mệnh đề)
                 /                   \\
        Subject NP                     Predicate VP
       /          \\                   /            \\
     DET         NOUN             VERB            DO NP
      |           |                |             /      \\
     The       students          wrote         ADJ     NOUN
                                                |        |
                                            interesting essays`
      },
      semanticRoles: [
        {
          element: 'The students',
          role: 'Agent (Chủ thể thực hiện)',
          explanation: 'Nhóm học sinh chủ động viết bài luận.'
        },
        {
          element: 'wrote',
          role: 'Action / Process (Hành động viết)',
          explanation: 'Động từ vị ngữ thể hiện hành vi sáng tạo nội dung văn bản.'
        },
        {
          element: 'interesting essays',
          role: 'Result / Theme (Tác phẩm được viết)',
          explanation: 'Các bài viết luận văn học thuật được tạo ra.'
        }
      ]
    }
  },

  // ================= CÂU 10 =================
  {
    id: 10,
    title: 'Câu 10: The thief opened the backdoor quickly. (Câu đúng chuẩn S - V - O - Adv)',
    sentence: 'The thief opened the backdoor quickly.',
    translation: 'Tên trộm đã mở cửa sau một cách nhanh chóng.',
    ipa: '/ðə θiːf ˈoʊpənd ðə ˈbækˌdɔːr ˈkwɪkli/',
    structurePattern: 'Câu đúng chuẩn S - V - O - Adv',
    tokens: [
      {
        index: 1,
        word: 'The',
        lemma: 'the',
        ipa: '/ðə/',
        pos: 'DET',
        pos_vi: 'Từ hạn định',
        morphology: 'Mạo từ xác định',
        meaning: 'tên',
        syntacticRole: 'Determiner',
        parentPhrase: 'Cụm danh từ chủ ngữ (Subject NP)',
        grammarExplanation: 'Mạo từ xác định đứng trước danh từ chỉ người.'
      },
      {
        index: 2,
        word: 'thief',
        lemma: 'thief',
        ipa: '/θiːf/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ số ít / đếm được',
        meaning: 'tên trộm',
        syntacticRole: 'Subject (S)',
        parentPhrase: 'Cụm danh từ chủ ngữ (Subject NP)',
        grammarExplanation: 'Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động mở cửa.'
      },
      {
        index: 3,
        word: 'opened',
        lemma: 'open',
        ipa: '/ˈoʊpənd/',
        pos: 'VERB',
        pos_vi: 'Động từ',
        morphology: 'Quá khứ đơn (V2)',
        meaning: 'đã mở',
        syntacticRole: 'Predicator (P) / Verb (V)',
        parentPhrase: 'Mệnh đề chính (Main Clause)',
        grammarExplanation: 'Động từ chính biểu thị hành động mở trong quá khứ.'
      },
      {
        index: 4,
        word: 'the',
        lemma: 'the',
        ipa: '/ðə/',
        pos: 'DET',
        pos_vi: 'Từ hạn định',
        morphology: 'Mạo từ xác định',
        meaning: 'cánh',
        syntacticRole: 'Determiner',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Mạo từ xác định đứng trước danh từ chỉ vật.'
      },
      {
        index: 5,
        word: 'backdoor',
        lemma: 'backdoor',
        ipa: '/ˈbækˌdɔːr/',
        pos: 'NOUN',
        pos_vi: 'Danh từ',
        morphology: 'Danh từ ghép / số ít',
        meaning: 'cửa sau',
        syntacticRole: 'Direct Object (DO)',
        parentPhrase: 'Cụm tân ngữ (Object Phrase / NP)',
        grammarExplanation: 'Danh từ ghép trung tâm làm tân ngữ trực tiếp chịu tác động.'
      },
      {
        index: 6,
        word: 'quickly.',
        lemma: 'quickly',
        ipa: '/ˈkwɪkli/',
        pos: 'ADV',
        pos_vi: 'Trạng từ',
        morphology: 'Trạng từ cách thức',
        meaning: 'một cách nhanh chóng',
        syntacticRole: 'Adjunct (A) / Adverbial',
        parentPhrase: 'Cụm trạng ngữ',
        grammarExplanation: 'Trạng từ chỉ cách thức đứng cuối câu bổ nghĩa cho động từ.'
      }
    ],
    advancedAnalysis: {
      sectionTitle: 'PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA',
      tree: {
        title: 'Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)',
        subTitle: 'Mô hình phân tầng của câu (S - P - DO - Adv):',
        asciiTree: `                     S (Sentence / Mệnh đề)
                    /                      \\
          Subject NP                        Predicate VP
         /          \\                      /     |      \\
       DET         NOUN                VERB    DO NP   Adjunct (AdvP)
        |           |                   |     /     \\        |
       The        thief               opened DET   NOUN   quickly
                                              |      |
                                             the  backdoor`
      },
      semanticRoles: [
        {
          element: 'The thief',
          role: 'Agent (Chủ thể thực hiện)',
          explanation: 'Tên trộm, chủ thể thực hiện hành động mở cửa.'
        },
        {
          element: 'opened',
          role: 'Action / Process (Hành động mở)',
          explanation: 'Ngoại động từ quá khứ chỉ hành vi mở cửa.'
        },
        {
          element: 'the backdoor',
          role: 'Theme / Patient (Đối tượng chịu tác động)',
          explanation: 'Cánh cửa sau nhà bị mở ra (Direct Object NP).'
        },
        {
          element: 'quickly',
          role: 'Manner (Cách thức thực hiện)',
          explanation: 'Tốc độ thao tác nhanh chóng nhằm tránh bị phát hiện.'
        }
      ]
    }
  },
  // ================= CÂU 11 =================
  {
    "id": 11,
    "title": "Câu 11: The dog the mailman loudly. (Câu trật bánh) → Câu sửa chuẩn: The dog barked at the mailman loudly.",
    "sentence": "The dog barked at the mailman loudly.",
    "originalDerailedSentence": "The dog the mailman loudly.",
    "derailStatus": "Trật bánh cấu trúc",
    "derailReason": "Thiếu động cơ hành động ở Toa 2 (V) khiến câu mất liên kết và vô nghĩa.",
    "translation": "Con chó đã sủa ầm ĩ vào người đưa thư.",
    "ipa": "/ðə dɒɡ bɑːkt æt ðə ˈmeɪlmən ˈlaʊdli/",
    "structurePattern": "Câu trật bánh thiếu V → Đã sửa chuẩn: S - V - Prep - O - Adv",
    "tokens": [
      {
        "index": 1,
        "word": "The",
        "lemma": "the",
        "ipa": "/ðə/",
        "pos": "DET",
        "pos_vi": "Từ hạn định",
        "morphology": "Mạo từ xác định (Definite Article)",
        "meaning": "chỉ định",
        "syntacticRole": "Determiner",
        "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
        "grammarExplanation": "Mạo từ xác định đứng trước danh từ để chỉ đối tượng con chó cụ thể."
      },
      {
        "index": 2,
        "word": "dog",
        "lemma": "dog",
        "ipa": "/dɒɡ/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ số ít / đếm được (Singular / Count noun)",
        "meaning": "con chó",
        "syntacticRole": "Subject (S)",
        "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
        "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành vi sủa."
      },
      {
        "index": 3,
        "word": "barked",
        "lemma": "bark",
        "ipa": "/bɑːkt/",
        "pos": "VERB",
        "pos_vi": "Động từ",
        "morphology": "Quá khứ đơn (V2) (Intransitive Verb)",
        "meaning": "đã sủa",
        "syntacticRole": "Predicator (P) / Verb (V)",
        "parentPhrase": "Mệnh đề chính (Main Clause)",
        "grammarExplanation": "Động từ chính ở thì quá khứ đơn, bổ sung động cơ hành động còn thiếu của câu đề bài."
      },
      {
        "index": 4,
        "word": "at",
        "lemma": "at",
        "ipa": "/æt/",
        "pos": "PREP",
        "pos_vi": "Giới từ",
        "morphology": "Giới từ chỉ hướng tác động (Preposition of direction)",
        "meaning": "vào, về phía",
        "syntacticRole": "Preposition",
        "parentPhrase": "Cụm giới từ tân ngữ (Prepositional Phrase / PP)",
        "grammarExplanation": "Giới từ kết nối động từ \"barked\" với đối tượng tiếp nhận tiếng sủa."
      },
      {
        "index": 5,
        "word": "the",
        "lemma": "the",
        "ipa": "/ðə/",
        "pos": "DET",
        "pos_vi": "Từ hạn định",
        "morphology": "Mạo từ xác định (Definite Article)",
        "meaning": "người",
        "syntacticRole": "Determiner",
        "parentPhrase": "Cụm giới từ tân ngữ (Prepositional Phrase / PP)",
        "grammarExplanation": "Mạo từ xác định đứng trước danh từ người đưa thư."
      },
      {
        "index": 6,
        "word": "mailman",
        "lemma": "mailman",
        "ipa": "/ˈmeɪlmən/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ số ít / đếm được (Singular / Count noun)",
        "meaning": "người đưa thư",
        "syntacticRole": "Object of Preposition (OP)",
        "parentPhrase": "Cụm giới từ tân ngữ (Prepositional Phrase / PP)",
        "grammarExplanation": "Danh từ làm tân ngữ của giới từ \"at\"."
      },
      {
        "index": 7,
        "word": "loudly.",
        "lemma": "loudly",
        "ipa": "/ˈlaʊdli/",
        "pos": "ADV",
        "pos_vi": "Trạng từ",
        "morphology": "Trạng từ chỉ cách thức (Manner Adverb)",
        "meaning": "ầm ĩ, lớn tiếng",
        "syntacticRole": "Adjunct (A) / Trạng ngữ",
        "parentPhrase": "Cụm trạng từ (Adverb Phrase / AdvP)",
        "grammarExplanation": "Trạng từ cách thức bổ nghĩa cho động từ \"barked\", chỉ âm lượng tiếng sủa."
      }
    ],
    "advancedAnalysis": {
      "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
      "tree": {
        "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
        "subTitle": "Mô hình phân tầng của câu (S - P - PP - Adv):",
        "asciiTree": "                     S (Sentence / Mệnh đề)\n                    /                      \\\n          Subject NP                        Predicate VP\n         /          \\                      /     |      \\\n       DET         NOUN                VERB      PP    Adjunct (AdvP)\n        |           |                   |       /  \\          |\n       The         dog                barked  PREP  NP      loudly\n                                               |   /  \\\n                                              at DET  NOUN\n                                                  |     |\n                                                 the mailman"
      },
      "semanticRoles": [
        {
          "element": "The dog",
          "role": "Agent (Chủ thể thực hiện)",
          "explanation": "Con chó, chủ thể thực hiện hành động sủa."
        },
        {
          "element": "barked",
          "role": "Action / Process (Hành động sủa)",
          "explanation": "Động từ chính quá khứ chỉ hành vi phát ra tiếng sủa."
        },
        {
          "element": "at the mailman",
          "role": "Target / Direction (Mục tiêu hướng tới)",
          "explanation": "Người đưa thư là đối tượng hướng tới của tiếng sủa."
        },
        {
          "element": "loudly",
          "role": "Manner (Cách thức thực hiện)",
          "explanation": "Âm lượng tiếng sủa vang dội, ầm ĩ."
        }
      ]
    }
  },

  // ================= CÂU 12 =================
  {
    "id": 12,
    "title": "Câu 12: My friend sent a postcard from Paris. (Câu đúng chuẩn S - V - O - Adv)",
    "sentence": "My friend sent a postcard from Paris.",
    "translation": "Bạn của tôi đã gửi một tấm bưu thiếp từ Paris.",
    "ipa": "/maɪ frɛnd sɛnt ə ˈpoʊstkɑːrd frɒm ˈpærɪs/",
    "structurePattern": "Câu đúng chuẩn S - V - O - Adv",
    "tokens": [
      {
        "index": 1,
        "word": "My",
        "lemma": "my",
        "ipa": "/maɪ/",
        "pos": "DET",
        "pos_vi": "Từ hạn định",
        "morphology": "Từ hạn định sở hữu (Possessive Determiner)",
        "meaning": "của tôi",
        "syntacticRole": "Determiner",
        "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
        "grammarExplanation": "Từ hạn định sở hữu đứng trước danh từ chỉ người bạn."
      },
      {
        "index": 2,
        "word": "friend",
        "lemma": "friend",
        "ipa": "/frɛnd/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ số ít / đếm được (Singular / Count noun)",
        "meaning": "người bạn",
        "syntacticRole": "Subject (S)",
        "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
        "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành vi gửi thư."
      },
      {
        "index": 3,
        "word": "sent",
        "lemma": "send",
        "ipa": "/sɛnt/",
        "pos": "VERB",
        "pos_vi": "Động từ",
        "morphology": "Quá khứ đơn (V2) (Transitive Verb)",
        "meaning": "đã gửi",
        "syntacticRole": "Predicator (P) / Verb (V)",
        "parentPhrase": "Mệnh đề chính (Main Clause)",
        "grammarExplanation": "Ngoại động từ chính ở thì quá khứ đơn, tác động trực tiếp lên bưu thiếp."
      },
      {
        "index": 4,
        "word": "a",
        "lemma": "a",
        "ipa": "/ə/",
        "pos": "DET",
        "pos_vi": "Từ hạn định",
        "morphology": "Mạo từ bất định (Indefinite Article)",
        "meaning": "một",
        "syntacticRole": "Determiner",
        "parentPhrase": "Cụm tân ngữ (Object Phrase / NP)",
        "grammarExplanation": "Mạo từ bất định đứng trước danh từ số ít đếm được \"postcard\"."
      },
      {
        "index": 5,
        "word": "postcard",
        "lemma": "postcard",
        "ipa": "/ˈpoʊstkɑːrd/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ số ít đếm được",
        "meaning": "tấm bưu thiếp",
        "syntacticRole": "Direct Object (DO)",
        "parentPhrase": "Cụm tân ngữ (Object Phrase / NP)",
        "grammarExplanation": "Danh từ trung tâm làm tân ngữ trực tiếp hứng chịu hành vi gửi."
      },
      {
        "index": 6,
        "word": "from",
        "lemma": "from",
        "ipa": "/frɒm/",
        "pos": "PREP",
        "pos_vi": "Giới từ",
        "morphology": "Giới từ chỉ nguồn gốc nơi chốn (Preposition of Origin)",
        "meaning": "từ",
        "syntacticRole": "Preposition",
        "parentPhrase": "Cụm giới từ trạng ngữ (PP)",
        "grammarExplanation": "Giới từ mở đầu cụm giới từ chỉ địa điểm xuất phát."
      },
      {
        "index": 7,
        "word": "Paris.",
        "lemma": "Paris",
        "ipa": "/ˈpærɪs/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ riêng (Proper Noun)",
        "meaning": "Pa-ri (thủ đô nước Pháp)",
        "syntacticRole": "Object of Preposition",
        "parentPhrase": "Cụm giới từ trạng ngữ (PP)",
        "grammarExplanation": "Danh từ riêng làm tân ngữ cho giới từ \"from\", tạo trạng ngữ nơi chốn."
      }
    ],
    "advancedAnalysis": {
      "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
      "tree": {
        "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
        "subTitle": "Mô hình phân tầng của câu (S - P - DO - PP):",
        "asciiTree": "                     S (Sentence / Mệnh đề)\n                    /                      \\\n          Subject NP                        Predicate VP\n         /          \\                      /     |      \\\n       DET         NOUN                VERB    DO NP     PP (Adjunct)\n        |           |                   |     /     \\    /     \\\n       My         friend               sent DET   NOUN PREP  NOUN (Prop)\n                                             |      |    |      |\n                                             a  postcard from Paris"
      },
      "semanticRoles": [
        {
          "element": "My friend",
          "role": "Agent (Chủ thể thực hiện)",
          "explanation": "Người bạn, chủ thể thực hiện hành vi gửi bưu thiếp."
        },
        {
          "element": "sent",
          "role": "Action / Process (Hành động gửi)",
          "explanation": "Ngoại động từ quá khứ chỉ thao tác gửi thư từ."
        },
        {
          "element": "a postcard",
          "role": "Theme / Patient (Vật phẩm được gửi)",
          "explanation": "Tấm bưu thiếp, đối tượng được gửi đi."
        },
        {
          "element": "from Paris",
          "role": "Source (Nơi chốn xuất phát)",
          "explanation": "Địa điểm khởi đầu của hành trình chuyển phát bưu thiếp."
        }
      ]
    }
  },

  // ================= CÂU 13 =================
  {
    "id": 13,
    "title": "Câu 13: A lot of books reads Nam in the library. (Câu trật bánh) → Câu sửa chuẩn: Nam reads a lot of books in the library.",
    "sentence": "Nam reads a lot of books in the library.",
    "originalDerailedSentence": "A lot of books reads Nam in the library.",
    "derailStatus": "Trật bánh cấu trúc & ngữ nghĩa",
    "derailReason": "Tân ngữ \"A lot of books\" bị đảo lên trước chủ ngữ. Sách không tự đọc Nam.",
    "translation": "Nam đọc rất nhiều cuốn sách trong thư viện.",
    "ipa": "/næm riːdz ə lɒt ɒv bʊks ɪn ðə ˈlaɪbrəri/",
    "structurePattern": "Câu trật bánh đảo tân ngữ → Đã sửa chuẩn: S - V - O - Adv",
    "tokens": [
      {
        "index": 1,
        "word": "Nam",
        "lemma": "Nam",
        "ipa": "/næm/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ riêng (Proper Noun)",
        "meaning": "Nam (tên người)",
        "syntacticRole": "Subject (S)",
        "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
        "grammarExplanation": "Danh từ riêng làm chủ ngữ chính, chủ thể có năng lực nhận thức để đọc sách."
      },
      {
        "index": 2,
        "word": "reads",
        "lemma": "read",
        "ipa": "/riːdz/",
        "pos": "VERB",
        "pos_vi": "Động từ",
        "morphology": "Hiện tại đơn ngôi 3 số ít (Transitive Verb)",
        "meaning": "đọc",
        "syntacticRole": "Predicator (P) / Verb (V)",
        "parentPhrase": "Mệnh đề chính (Main Clause)",
        "grammarExplanation": "Ngoại động từ chia thêm -s phù hợp với chủ ngữ ngôi thứ 3 số ít \"Nam\"."
      },
      {
        "index": 3,
        "word": "a",
        "lemma": "a",
        "ipa": "/ə/",
        "pos": "DET",
        "pos_vi": "Từ hạn định",
        "morphology": "Thành tố cụm lượng từ (Part of Quantifier Phrase)",
        "meaning": "một",
        "syntacticRole": "Determiner",
        "parentPhrase": "Cụm tân ngữ (Object Phrase / NP)",
        "grammarExplanation": "Thành phần trong ngữ định lượng \"a lot of\"."
      },
      {
        "index": 4,
        "word": "lot",
        "lemma": "lot",
        "ipa": "/lɒt/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ chỉ số lượng",
        "meaning": "lượng lớn, nhiều",
        "syntacticRole": "Quantifier Head",
        "parentPhrase": "Cụm tân ngữ (Object Phrase / NP)",
        "grammarExplanation": "Danh từ trung tâm của cụm lượng từ."
      },
      {
        "index": 5,
        "word": "of",
        "lemma": "of",
        "ipa": "/ɒv/",
        "pos": "PREP",
        "pos_vi": "Giới từ",
        "morphology": "Giới từ liên kết lượng từ",
        "meaning": "của",
        "syntacticRole": "Preposition",
        "parentPhrase": "Cụm tân ngữ (Object Phrase / NP)",
        "grammarExplanation": "Giới từ nối lượng từ với danh từ số nhiều \"books\"."
      },
      {
        "index": 6,
        "word": "books",
        "lemma": "book",
        "ipa": "/bʊks/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ số nhiều đếm được (Plural noun)",
        "meaning": "những cuốn sách",
        "syntacticRole": "Direct Object Head",
        "parentPhrase": "Cụm tân ngữ (Object Phrase / NP)",
        "grammarExplanation": "Danh từ trung tâm bị đọc, làm tân ngữ trực tiếp."
      },
      {
        "index": 7,
        "word": "in",
        "lemma": "in",
        "ipa": "/ɪn/",
        "pos": "PREP",
        "pos_vi": "Giới từ",
        "morphology": "Giới từ chỉ nơi chốn (Preposition of Place)",
        "meaning": "ở trong",
        "syntacticRole": "Preposition",
        "parentPhrase": "Cụm giới từ trạng ngữ (PP)",
        "grammarExplanation": "Giới từ chỉ vị trí không gian thư viện."
      },
      {
        "index": 8,
        "word": "the",
        "lemma": "the",
        "ipa": "/ðə/",
        "pos": "DET",
        "pos_vi": "Từ hạn định",
        "morphology": "Mạo từ xác định (Definite Article)",
        "meaning": "trong",
        "syntacticRole": "Determiner",
        "parentPhrase": "Cụm giới từ trạng ngữ (PP)",
        "grammarExplanation": "Mạo từ xác định đứng trước \"library\"."
      },
      {
        "index": 9,
        "word": "library.",
        "lemma": "library",
        "ipa": "/ˈlaɪbrəri/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ số ít đếm được",
        "meaning": "thư viện",
        "syntacticRole": "Object of Preposition",
        "parentPhrase": "Cụm giới từ trạng ngữ (PP)",
        "grammarExplanation": "Danh từ làm tân ngữ của giới từ \"in\", tạo trạng ngữ nơi chốn."
      }
    ],
    "advancedAnalysis": {
      "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
      "tree": {
        "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
        "subTitle": "Mô hình phân tầng của câu (S - P - DO - PP):",
        "asciiTree": "                     S (Sentence / Mệnh đề)\n                    /                      \\\n          Subject NP                        Predicate VP\n              |                            /     |      \\\n            NOUN                       VERB    DO NP     PP (Adjunct)\n              |                          |    /     \\    /     \\\n             Nam                       reads QP    NOUN PREP   NP\n                                             |      |    |    /  \\\n                                         a lot of books in  DET  NOUN\n                                                             |     |\n                                                            the library"
      },
      "semanticRoles": [
        {
          "element": "Nam",
          "role": "Agent (Chủ thể người có ý thức đọc)",
          "explanation": "Nam, chủ thể con người thực hiện hành động đọc sách."
        },
        {
          "element": "reads",
          "role": "Action / Process (Hành động đọc)",
          "explanation": "Ngoại động từ hiện tại diễn tả thói quen đọc sách."
        },
        {
          "element": "a lot of books",
          "role": "Theme / Patient (Sách được đọc)",
          "explanation": "Các cuốn sách, đối tượng tiếp nhận hành vi đọc."
        },
        {
          "element": "in the library",
          "role": "Location (Không gian địa điểm)",
          "explanation": "Thư viện, nơi diễn ra hoạt động đọc sách."
        }
      ]
    }
  },

  // ================= CÂU 14 =================
  {
    "id": 14,
    "title": "Câu 14: Heavy rain destroyed the wooden bridge. (Câu đúng chuẩn S - V - O)",
    "sentence": "Heavy rain destroyed the wooden bridge.",
    "translation": "Cơn mưa lớn đã phá hủy cây cầu gỗ.",
    "ipa": "/ˈhɛvi reɪn dɪˈstrɔɪd ðə ˈwʊdn brɪdʒ/",
    "structurePattern": "Câu đúng chuẩn S - V - O",
    "tokens": [
      {
        "index": 1,
        "word": "Heavy",
        "lemma": "heavy",
        "ipa": "/ˈhɛvi/",
        "pos": "ADJ",
        "pos_vi": "Tính từ",
        "morphology": "Tính từ miêu tả mức độ (Descriptive Adjective)",
        "meaning": "nặng hạt, dữ dội",
        "syntacticRole": "Modifier",
        "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
        "grammarExplanation": "Tính từ đứng trước bổ nghĩa mức độ cho danh từ \"rain\"."
      },
      {
        "index": 2,
        "word": "rain",
        "lemma": "rain",
        "ipa": "/reɪn/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ không đếm được (Uncountable noun)",
        "meaning": "cơn mưa",
        "syntacticRole": "Subject (S)",
        "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
        "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể tự nhiên gây ra sức tàn phá."
      },
      {
        "index": 3,
        "word": "destroyed",
        "lemma": "destroy",
        "ipa": "/dɪˈstrɔɪd/",
        "pos": "VERB",
        "pos_vi": "Động từ",
        "morphology": "Quá khứ đơn (V2) (Transitive Verb)",
        "meaning": "đã phá hủy",
        "syntacticRole": "Predicator (P) / Verb (V)",
        "parentPhrase": "Mệnh đề chính (Main Clause)",
        "grammarExplanation": "Ngoại động từ chính quá khứ chỉ tác động lực phá hoại nghiêm trọng."
      },
      {
        "index": 4,
        "word": "the",
        "lemma": "the",
        "ipa": "/ðə/",
        "pos": "DET",
        "pos_vi": "Từ hạn định",
        "morphology": "Mạo từ xác định (Definite Article)",
        "meaning": "cây (xác định)",
        "syntacticRole": "Determiner",
        "parentPhrase": "Cụm tân ngữ (Object Phrase / NP)",
        "grammarExplanation": "Mạo từ xác định chỉ cây cầu cụ thể."
      },
      {
        "index": 5,
        "word": "wooden",
        "lemma": "wooden",
        "ipa": "/ˈwʊdn/",
        "pos": "ADJ",
        "pos_vi": "Tính từ",
        "morphology": "Tính từ chỉ chất liệu (Material Adjective)",
        "meaning": "bằng gỗ",
        "syntacticRole": "Modifier",
        "parentPhrase": "Cụm tân ngữ (Object Phrase / NP)",
        "grammarExplanation": "Tính từ bổ nghĩa chất liệu làm nên cây cầu."
      },
      {
        "index": 6,
        "word": "bridge.",
        "lemma": "bridge",
        "ipa": "/brɪdʒ/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ số ít đếm được",
        "meaning": "cây cầu",
        "syntacticRole": "Direct Object (DO)",
        "parentPhrase": "Cụm tân ngữ (Object Phrase / NP)",
        "grammarExplanation": "Danh từ trung tâm của tân ngữ trực tiếp, chịu lực phá hủy của mưa lũ."
      }
    ],
    "advancedAnalysis": {
      "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
      "tree": {
        "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
        "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
        "asciiTree": "                     S (Sentence / Mệnh đề)\n                    /                      \\\n          Subject NP                        Predicate VP\n         /          \\                      /            \\\n       ADJ         NOUN                VERB            DO NP\n        |           |                   |             /  |   \\\n      Heavy        rain             destroyed       DET ADJ NOUN\n                                                     |   |    |\n                                                    the wooden bridge"
      },
      "semanticRoles": [
        {
          "element": "Heavy rain",
          "role": "Cause / Force (Lực lượng tự nhiên gây tác động)",
          "explanation": "Cơn mưa lớn, lực lượng tự nhiên tạo ra sức tàn phá."
        },
        {
          "element": "destroyed",
          "role": "Action / Process (Hành động phá hủy)",
          "explanation": "Ngoại động từ quá khứ chỉ sự làm hư hại sập đổ hoàn toàn."
        },
        {
          "element": "the wooden bridge",
          "role": "Patient (Thực thể chịu tổn hại)",
          "explanation": "Cây cầu gỗ bị gãy sập do dòng lũ cuốn trôi."
        }
      ]
    }
  },

  // ================= CÂU 15 =================
  {
    "id": 15,
    "title": "Câu 15: Carefully drives the driver his truck. (Câu trật bánh) → Câu sửa chuẩn: The driver drives his truck carefully.",
    "sentence": "The driver drives his truck carefully.",
    "originalDerailedSentence": "Carefully drives the driver his truck.",
    "derailStatus": "Trật bánh cấu trúc",
    "derailReason": "Trạng từ \"Carefully\" chen lên trước động từ và chủ ngữ làm đảo lộn trật tự ngữ pháp.",
    "translation": "Người tài xế lái chiếc xe tải của mình rất cẩn thận.",
    "ipa": "/ðə ˈdraɪvər draɪvz hɪz trʌk ˈkeərfəli/",
    "structurePattern": "Câu trật bánh đảo trạng từ → Đã sửa chuẩn: S - V - O - Adv",
    "tokens": [
      {
        "index": 1,
        "word": "The",
        "lemma": "the",
        "ipa": "/ðə/",
        "pos": "DET",
        "pos_vi": "Từ hạn định",
        "morphology": "Mạo từ xác định (Definite Article)",
        "meaning": "người",
        "syntacticRole": "Determiner",
        "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
        "grammarExplanation": "Mạo từ xác định đứng trước danh từ \"driver\"."
      },
      {
        "index": 2,
        "word": "driver",
        "lemma": "driver",
        "ipa": "/ˈdraɪvər/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ số ít đếm được",
        "meaning": "người tài xế",
        "syntacticRole": "Subject (S)",
        "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
        "grammarExplanation": "Danh từ trung tâm làm chủ ngữ chính, người điều khiển phương tiện."
      },
      {
        "index": 3,
        "word": "drives",
        "lemma": "drive",
        "ipa": "/draɪvz/",
        "pos": "VERB",
        "pos_vi": "Động từ",
        "morphology": "Hiện tại đơn ngôi 3 số ít (Transitive Verb)",
        "meaning": "lái xe",
        "syntacticRole": "Predicator (P) / Verb (V)",
        "parentPhrase": "Mệnh đề chính (Main Clause)",
        "grammarExplanation": "Ngoại động từ chia thêm -s phù hợp với chủ ngữ ngôi thứ 3 số ít \"The driver\"."
      },
      {
        "index": 4,
        "word": "his",
        "lemma": "his",
        "ipa": "/hɪz/",
        "pos": "DET",
        "pos_vi": "Từ hạn định",
        "morphology": "Tính từ sở hữu (Possessive Determiner)",
        "meaning": "của anh ấy",
        "syntacticRole": "Determiner",
        "parentPhrase": "Cụm tân ngữ (Object Phrase / NP)",
        "grammarExplanation": "Từ hạn định sở hữu bổ nghĩa cho danh từ \"truck\"."
      },
      {
        "index": 5,
        "word": "truck",
        "lemma": "truck",
        "ipa": "/trʌk/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ số ít đếm được",
        "meaning": "chiếc xe tải",
        "syntacticRole": "Direct Object (DO)",
        "parentPhrase": "Cụm tân ngữ (Object Phrase / NP)",
        "grammarExplanation": "Danh từ trung tâm làm tân ngữ trực tiếp, phương tiện được điều khiển."
      },
      {
        "index": 6,
        "word": "carefully.",
        "lemma": "carefully",
        "ipa": "/ˈkeərfəli/",
        "pos": "ADV",
        "pos_vi": "Trạng từ",
        "morphology": "Trạng từ chỉ cách thức (Manner Adverb)",
        "meaning": "cẩn thận",
        "syntacticRole": "Adjunct (A) / Trạng ngữ",
        "parentPhrase": "Cụm trạng từ (Adverb Phrase / AdvP)",
        "grammarExplanation": "Trạng từ cách thức đứng cuối câu bổ nghĩa cho hành động lái xe \"drives\"."
      }
    ],
    "advancedAnalysis": {
      "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
      "tree": {
        "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
        "subTitle": "Mô hình phân tầng của câu (S - P - DO - Adv):",
        "asciiTree": "                     S (Sentence / Mệnh đề)\n                    /                      \\\n          Subject NP                        Predicate VP\n         /          \\                      /     |      \\\n       DET         NOUN                VERB    DO NP   Adjunct (AdvP)\n        |           |                   |     /     \\        |\n       The        driver              drives DET   NOUN   carefully\n                                              |      |\n                                             his   truck"
      },
      "semanticRoles": [
        {
          "element": "The driver",
          "role": "Agent (Chủ thể thực hiện)",
          "explanation": "Người tài xế, chủ thể điều khiển phương tiện giao thông."
        },
        {
          "element": "drives",
          "role": "Action / Process (Hành động lái xe)",
          "explanation": "Ngoại động từ chỉ thao tác vận hành xe cộ."
        },
        {
          "element": "his truck",
          "role": "Theme / Patient (Phương tiện được điều khiển)",
          "explanation": "Chiếc xe tải, phương tiện nhận lực điều khiển."
        },
        {
          "element": "carefully",
          "role": "Manner (Cách thức thực hiện)",
          "explanation": "Thao tác lái xe cẩn trọng, đảm bảo an toàn."
        }
      ]
    }
  },

  // ================= CÂU 16 =================
  {
    "id": 16,
    "title": "Câu 16: She became a famous singer. (Chủ đề 2: Mô hình S - V - Cs / Bổ ngữ chủ ngữ)",
    "sentence": "She became a famous singer.",
    "translation": "Cô ấy đã trở thành một ca sĩ nổi tiếng.",
    "ipa": "/ʃiː bɪˈkeɪm ə ˈfeɪməs ˈsɪŋər/",
    "structurePattern": "Mô hình S - V - Cs (S = C: She = a famous singer)",
    "tokens": [
      {
        "index": 1,
        "word": "She",
        "lemma": "she",
        "ipa": "/ʃiː/",
        "pos": "PRON",
        "pos_vi": "Đại từ",
        "morphology": "Đại từ nhân xưng chủ ngữ (Personal Pronoun)",
        "meaning": "cô ấy",
        "syntacticRole": "Subject (S)",
        "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
        "grammarExplanation": "Đại từ nhân xưng ngôi thứ 3 số ít làm chủ ngữ chính của câu."
      },
      {
        "index": 2,
        "word": "became",
        "lemma": "become",
        "ipa": "/bɪˈkeɪm/",
        "pos": "VERB",
        "pos_vi": "Động từ",
        "morphology": "Quá khứ đơn (V2) (Linking Verb / Động từ liên kết)",
        "meaning": "đã trở thành",
        "syntacticRole": "Predicator (P) / Verb (V)",
        "parentPhrase": "Mệnh đề chính (Main Clause)",
        "grammarExplanation": "Động từ liên kết nối chủ ngữ với trạng thái danh tính mới."
      },
      {
        "index": 3,
        "word": "a",
        "lemma": "a",
        "ipa": "/ə/",
        "pos": "DET",
        "pos_vi": "Từ hạn định",
        "morphology": "Mạo từ bất định (Indefinite Article)",
        "meaning": "một",
        "syntacticRole": "Determiner",
        "parentPhrase": "Cụm bổ ngữ chủ ngữ (Subject Complement NP)",
        "grammarExplanation": "Mạo từ bất định đứng trước danh từ đếm được số ít \"singer\"."
      },
      {
        "index": 4,
        "word": "famous",
        "lemma": "famous",
        "ipa": "/ˈfeɪməs/",
        "pos": "ADJ",
        "pos_vi": "Tính từ",
        "morphology": "Tính từ miêu tả đặc tính (Descriptive Adjective)",
        "meaning": "nổi tiếng",
        "syntacticRole": "Modifier",
        "parentPhrase": "Cụm bổ ngữ chủ ngữ (Subject Complement NP)",
        "grammarExplanation": "Tính từ đứng trước bổ nghĩa mức độ danh tiếng cho danh từ \"singer\"."
      },
      {
        "index": 5,
        "word": "singer.",
        "lemma": "singer",
        "ipa": "/ˈsɪŋər/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ số ít đếm được",
        "meaning": "ca sĩ",
        "syntacticRole": "Subject Complement (Cs) / Bổ ngữ chủ ngữ",
        "parentPhrase": "Cụm bổ ngữ chủ ngữ (Subject Complement NP)",
        "grammarExplanation": "Danh từ trung tâm làm bổ ngữ cho chủ ngữ, đồng nhất danh tính với \"She\" (She = singer)."
      }
    ],
    "advancedAnalysis": {
      "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
      "tree": {
        "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
        "subTitle": "Mô hình phân tầng của câu (S - P - Cs):",
        "asciiTree": "                     S (Sentence / Mệnh đề)\n                    /                      \\\n          Subject NP                        Predicate VP\n              |                            /            \\\n            PRON                      Linking V        Cs (NP)\n              |                           |           /   |   \\\n             She                        became      DET  ADJ NOUN\n                                                     |    |    |\n                                                     a  famous singer"
      },
      "semanticRoles": [
        {
          "element": "She",
          "role": "Theme / Entity (Thực thể biến đổi)",
          "explanation": "Cô ấy, người trải qua sự chuyển đổi danh tính nghề nghiệp."
        },
        {
          "element": "became",
          "role": "State Change / Copula (Quá trình biến chuyển)",
          "explanation": "Động từ liên kết biểu thị bước ngoặt trở thành ca sĩ."
        },
        {
          "element": "a famous singer",
          "role": "Attribute / Identity (Thuộc tính / Danh tính mới)",
          "explanation": "Danh xưng ca sĩ nổi tiếng gắn liền với cô ấy (She = singer)."
        }
      ]
    }
  },

  // ================= CÂU 17 =================
  {
    "id": 17,
    "title": "Câu 17: She met a famous singer. (Chủ đề 2: Mô hình S - V - O / Tân ngữ trực tiếp)",
    "sentence": "She met a famous singer.",
    "translation": "Cô ấy đã gặp gỡ một ca sĩ nổi tiếng.",
    "ipa": "/ʃiː mɛt ə ˈfeɪməs ˈsɪŋər/",
    "structurePattern": "Mô hình S - V - O (S ≠ O: She ≠ a famous singer)",
    "tokens": [
      {
        "index": 1,
        "word": "She",
        "lemma": "she",
        "ipa": "/ʃiː/",
        "pos": "PRON",
        "pos_vi": "Đại từ",
        "morphology": "Đại từ nhân xưng chủ ngữ (Personal Pronoun)",
        "meaning": "cô ấy",
        "syntacticRole": "Subject (S)",
        "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
        "grammarExplanation": "Đại từ nhân xưng ngôi 3 số ít làm chủ ngữ, chủ thể thực hiện hành động gặp."
      },
      {
        "index": 2,
        "word": "met",
        "lemma": "meet",
        "ipa": "/mɛt/",
        "pos": "VERB",
        "pos_vi": "Động từ",
        "morphology": "Quá khứ đơn (V2) (Transitive Verb)",
        "meaning": "đã gặp",
        "syntacticRole": "Predicator (P) / Verb (V)",
        "parentPhrase": "Mệnh đề chính (Main Clause)",
        "grammarExplanation": "Ngoại động từ chính quá khứ chỉ hành động tương tác với người khác."
      },
      {
        "index": 3,
        "word": "a",
        "lemma": "a",
        "ipa": "/ə/",
        "pos": "DET",
        "pos_vi": "Từ hạn định",
        "morphology": "Mạo từ bất định (Indefinite Article)",
        "meaning": "một",
        "syntacticRole": "Determiner",
        "parentPhrase": "Cụm tân ngữ (Object Phrase / NP)",
        "grammarExplanation": "Mạo từ bất định đứng trước danh từ số ít chỉ đối tượng người ca sĩ."
      },
      {
        "index": 4,
        "word": "famous",
        "lemma": "famous",
        "ipa": "/ˈfeɪməs/",
        "pos": "ADJ",
        "pos_vi": "Tính từ",
        "morphology": "Tính từ miêu tả (Descriptive Adjective)",
        "meaning": "nổi tiếng",
        "syntacticRole": "Modifier",
        "parentPhrase": "Cụm tân ngữ (Object Phrase / NP)",
        "grammarExplanation": "Tính từ bổ nghĩa mức độ danh tiếng cho danh từ \"singer\"."
      },
      {
        "index": 5,
        "word": "singer.",
        "lemma": "singer",
        "ipa": "/ˈsɪŋər/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ số ít đếm được",
        "meaning": "ca sĩ",
        "syntacticRole": "Direct Object (DO) / Tân ngữ trực tiếp",
        "parentPhrase": "Cụm tân ngữ (Object Phrase / NP)",
        "grammarExplanation": "Danh từ trung tâm làm tân ngữ trực tiếp; người ca sĩ là người riêng biệt với cô ấy (She ≠ singer)."
      }
    ],
    "advancedAnalysis": {
      "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
      "tree": {
        "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
        "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
        "asciiTree": "                     S (Sentence / Mệnh đề)\n                    /                      \\\n          Subject NP                        Predicate VP\n              |                            /            \\\n            PRON                         VERB          DO NP\n              |                           |           /   |   \\\n             She                         met        DET  ADJ NOUN\n                                                     |    |    |\n                                                     a  famous singer"
      },
      "semanticRoles": [
        {
          "element": "She",
          "role": "Agent (Chủ thể chủ động gặp)",
          "explanation": "Cô ấy, người chủ động đi gặp gỡ người khác."
        },
        {
          "element": "met",
          "role": "Action / Process (Hành động gặp gỡ)",
          "explanation": "Ngoại động từ quá khứ chỉ hành vi tương tác xã hội."
        },
        {
          "element": "a famous singer",
          "role": "Patient / Theme (Đối tượng được gặp)",
          "explanation": "Người ca sĩ được gặp, hoàn toàn độc lập với chủ ngữ (She ≠ singer)."
        }
      ]
    }
  },

  // ================= CÂU 18 =================
  {
    "id": 18,
    "title": "Câu 18: They elected him the team leader. (Chủ đề 2: Mô hình S - V - O - Co / Bổ ngữ tân ngữ)",
    "sentence": "They elected him the team leader.",
    "translation": "Họ đã bầu chọn anh ấy làm đội trưởng.",
    "ipa": "/ðeɪ ɪˈlɛktɪd hɪm ðə tiːm ˈliːdər/",
    "structurePattern": "Mô hình S - V - O - Co (O = Co: him = the team leader)",
    "tokens": [
      {
        "index": 1,
        "word": "They",
        "lemma": "they",
        "ipa": "/ðeɪ/",
        "pos": "PRON",
        "pos_vi": "Đại từ",
        "morphology": "Đại từ nhân xưng chủ ngữ số nhiều (Personal Pronoun)",
        "meaning": "họ",
        "syntacticRole": "Subject (S)",
        "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
        "grammarExplanation": "Đại từ làm chủ ngữ, tập thể những người bỏ phiếu bầu chọn."
      },
      {
        "index": 2,
        "word": "elected",
        "lemma": "elect",
        "ipa": "/ɪˈlɛktɪd/",
        "pos": "VERB",
        "pos_vi": "Động từ",
        "morphology": "Quá khứ đơn (V2) (Complex-Transitive Verb)",
        "meaning": "đã bầu chọn",
        "syntacticRole": "Predicator (P) / Verb (V)",
        "parentPhrase": "Mệnh đề chính (Main Clause)",
        "grammarExplanation": "Ngoại động từ phức (Complex-transitive verb) yêu cầu cả tân ngữ và bổ ngữ tân ngữ."
      },
      {
        "index": 3,
        "word": "him",
        "lemma": "he",
        "ipa": "/hɪm/",
        "pos": "PRON",
        "pos_vi": "Đại từ",
        "morphology": "Đại từ nhân xưng dạng tân ngữ (Object Pronoun)",
        "meaning": "anh ấy",
        "syntacticRole": "Direct Object (DO)",
        "parentPhrase": "Cụm tân ngữ (Object NP)",
        "grammarExplanation": "Đại từ tân ngữ, người được nhận số phiếu bầu."
      },
      {
        "index": 4,
        "word": "the",
        "lemma": "the",
        "ipa": "/ðə/",
        "pos": "DET",
        "pos_vi": "Từ hạn định",
        "morphology": "Mạo từ xác định (Definite Article)",
        "meaning": "chức danh",
        "syntacticRole": "Determiner",
        "parentPhrase": "Cụm bổ ngữ tân ngữ (Object Complement NP)",
        "grammarExplanation": "Mạo từ xác định chỉ chức danh độc nhất của nhóm."
      },
      {
        "index": 5,
        "word": "team",
        "lemma": "team",
        "ipa": "/tiːm/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ đóng vai trò bổ nghĩa (Noun Adjunct)",
        "meaning": "đội, nhóm",
        "syntacticRole": "Noun Adjunct / Modifier",
        "parentPhrase": "Cụm bổ ngữ tân ngữ (Object Complement NP)",
        "grammarExplanation": "Danh từ đứng trước bổ nghĩa loại hình lãnh đạo (đội trưởng)."
      },
      {
        "index": 6,
        "word": "leader.",
        "lemma": "leader",
        "ipa": "/ˈliːdər/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ số ít đếm được",
        "meaning": "người lãnh đạo, đội trưởng",
        "syntacticRole": "Object Complement (Co) / Bổ ngữ tân ngữ",
        "parentPhrase": "Cụm bổ ngữ tân ngữ (Object Complement NP)",
        "grammarExplanation": "Danh từ trung tâm của bổ ngữ tân ngữ; bổ nghĩa làm rõ chức danh mới cho tân ngữ \"him\" (him = leader)."
      }
    ],
    "advancedAnalysis": {
      "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
      "tree": {
        "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
        "subTitle": "Mô hình phân tầng của câu (S - P - DO - Co):",
        "asciiTree": "                     S (Sentence / Mệnh đề)\n                    /                      \\\n          Subject NP                        Predicate VP\n              |                            /     |      \\\n            PRON                         VERB  DO (NP)   Co (NP)\n              |                           |      |       /  |   \\\n            They                       elected  PRON   DET NOUN NOUN\n                                                 |      |   |     |\n                                                him    the team leader"
      },
      "semanticRoles": [
        {
          "element": "They",
          "role": "Agent (Tập thể thực hiện bầu chọn)",
          "explanation": "Tập thể cử tri, người trực tiếp bỏ phiếu bầu."
        },
        {
          "element": "elected",
          "role": "Action / Designation (Hành động suy tôn)",
          "explanation": "Ngoại động từ quá khứ chỉ sự phân bổ chức danh."
        },
        {
          "element": "him",
          "role": "Patient / Theme (Người nhận chức danh)",
          "explanation": "Anh ấy, người được bầu nhận chức vụ mới."
        },
        {
          "element": "the team leader",
          "role": "Resultant Role / Attribute (Chức danh được gán)",
          "explanation": "Thuộc tính vai trò mới của anh ấy (him = leader)."
        }
      ]
    }
  },

  // ================= CÂU 19 =================
  {
    "id": 19,
    "title": "Câu 19: My father kicked the ball. (Chủ đề 2: Mô hình S - V - O / Tân ngữ trực tiếp)",
    "sentence": "My father kicked the ball.",
    "translation": "Bố tôi đã đá quả bóng.",
    "ipa": "/maɪ ˈfɑːðər kɪkt ðə bɔːl/",
    "structurePattern": "Mô hình S - V - O (S ≠ O: My father ≠ the ball)",
    "tokens": [
      {
        "index": 1,
        "word": "My",
        "lemma": "my",
        "ipa": "/maɪ/",
        "pos": "DET",
        "pos_vi": "Từ hạn định",
        "morphology": "Từ hạn định sở hữu (Possessive Determiner)",
        "meaning": "của tôi",
        "syntacticRole": "Determiner",
        "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
        "grammarExplanation": "Từ hạn định sở hữu bổ nghĩa cho danh từ \"father\"."
      },
      {
        "index": 2,
        "word": "father",
        "lemma": "father",
        "ipa": "/ˈfɑːðər/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ số ít đếm được",
        "meaning": "bố, cha",
        "syntacticRole": "Subject (S)",
        "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
        "grammarExplanation": "Danh từ trung tâm làm chủ ngữ, chủ thể thực hiện cú đá."
      },
      {
        "index": 3,
        "word": "kicked",
        "lemma": "kick",
        "ipa": "/kɪkt/",
        "pos": "VERB",
        "pos_vi": "Động từ",
        "morphology": "Quá khứ đơn (V2) (Transitive Verb)",
        "meaning": "đã đá, đã sút",
        "syntacticRole": "Predicator (P) / Verb (V)",
        "parentPhrase": "Mệnh đề chính (Main Clause)",
        "grammarExplanation": "Ngoại động từ chính quá khứ chỉ hành động dùng chân tác động lực cơ học."
      },
      {
        "index": 4,
        "word": "the",
        "lemma": "the",
        "ipa": "/ðə/",
        "pos": "DET",
        "pos_vi": "Từ hạn định",
        "morphology": "Mạo từ xác định (Definite Article)",
        "meaning": "quả (xác định)",
        "syntacticRole": "Determiner",
        "parentPhrase": "Cụm tân ngữ (Object Phrase / NP)",
        "grammarExplanation": "Mạo từ xác định đứng trước quả bóng cụ thể."
      },
      {
        "index": 5,
        "word": "ball.",
        "lemma": "ball",
        "ipa": "/bɔːl/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ số ít đếm được",
        "meaning": "quả bóng",
        "syntacticRole": "Direct Object (DO)",
        "parentPhrase": "Cụm tân ngữ (Object Phrase / NP)",
        "grammarExplanation": "Danh từ trung tâm làm tân ngữ trực tiếp hứng chịu lực sút (Bố ≠ quả bóng)."
      }
    ],
    "advancedAnalysis": {
      "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
      "tree": {
        "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
        "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
        "asciiTree": "                     S (Sentence / Mệnh đề)\n                    /                      \\\n          Subject NP                        Predicate VP\n         /          \\                      /            \\\n       DET         NOUN                VERB            DO NP\n        |           |                   |             /     \\\n       My         father              kicked        DET    NOUN\n                                                     |       |\n                                                    the    ball"
      },
      "semanticRoles": [
        {
          "element": "My father",
          "role": "Agent (Chủ thể tạo lực)",
          "explanation": "Bố tôi, người trực tiếp dùng chân tạo lực sút."
        },
        {
          "element": "kicked",
          "role": "Action / Physical Impact (Tác động lực)",
          "explanation": "Hành động dùng chân tác động lực cơ học lên quả bóng."
        },
        {
          "element": "the ball",
          "role": "Patient / Theme (Vật tiếp nhận lực)",
          "explanation": "Quả bóng nhận lực và bay đi, đối tượng hứng lực hoàn toàn khác người đá (Father ≠ ball)."
        }
      ]
    }
  },

  // ================= CÂU 20 =================
  {
    "id": 20,
    "title": "Câu 20: The soup tastes delicious. (Chủ đề 2: Mô hình S - V - Cs / Bổ ngữ tính từ)",
    "sentence": "The soup tastes delicious.",
    "translation": "Món súp có vị rất ngon.",
    "ipa": "/ðə suːp teɪsts dɪˈlɪʃəs/",
    "structurePattern": "Mô hình S - V - Cs (S = C: The soup = delicious)",
    "tokens": [
      {
        "index": 1,
        "word": "The",
        "lemma": "the",
        "ipa": "/ðə/",
        "pos": "DET",
        "pos_vi": "Từ hạn định",
        "morphology": "Mạo từ xác định (Definite Article)",
        "meaning": "bát, món",
        "syntacticRole": "Determiner",
        "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
        "grammarExplanation": "Mạo từ xác định đứng trước món súp cụ thể."
      },
      {
        "index": 2,
        "word": "soup",
        "lemma": "soup",
        "ipa": "/suːp/",
        "pos": "NOUN",
        "pos_vi": "Danh từ",
        "morphology": "Danh từ không đếm được / đếm được (Mass / Count noun)",
        "meaning": "món súp, canh",
        "syntacticRole": "Subject (S)",
        "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
        "grammarExplanation": "Danh từ trung tâm làm chủ ngữ, thực thể mang đặc tính hương vị."
      },
      {
        "index": 3,
        "word": "tastes",
        "lemma": "taste",
        "ipa": "/teɪsts/",
        "pos": "VERB",
        "pos_vi": "Động từ",
        "morphology": "Hiện tại đơn ngôi 3 số ít (Sensory Linking Verb)",
        "meaning": "có vị, nếm có vị",
        "syntacticRole": "Predicator (P) / Verb (V)",
        "parentPhrase": "Mệnh đề chính (Main Clause)",
        "grammarExplanation": "Động từ giác quan liên kết (Linking verb) miêu tả cảm nhận vị giác của món ăn."
      },
      {
        "index": 4,
        "word": "delicious.",
        "lemma": "delicious",
        "ipa": "/dɪˈlɪʃəs/",
        "pos": "ADJ",
        "pos_vi": "Tính từ",
        "morphology": "Tính từ miêu tả phẩm chất (Descriptive Adjective)",
        "meaning": "ngon miệng, thơm ngon",
        "syntacticRole": "Subject Complement (Cs) / Bổ ngữ chủ ngữ",
        "parentPhrase": "Cụm tính từ bổ ngữ (Adjective Phrase / AdjP)",
        "grammarExplanation": "Tính từ làm bổ ngữ chủ ngữ, mô tả phẩm chất của món súp (Soup = delicious)."
      }
    ],
    "advancedAnalysis": {
      "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
      "tree": {
        "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
        "subTitle": "Mô hình phân tầng của câu (S - P - Cs):",
        "asciiTree": "                     S (Sentence / Mệnh đề)\n                    /                      \\\n          Subject NP                        Predicate VP\n         /          \\                      /            \\\n       DET         NOUN                Sensory V      Cs (AdjP)\n        |           |                     |               |\n       The         soup                 tastes           ADJ\n                                                          |\n                                                      delicious"
      },
      "semanticRoles": [
        {
          "element": "The soup",
          "role": "Theme / Entity (Thực thể mang vị giác)",
          "explanation": "Món súp, món ăn được cảm nhận và đánh giá hương vị."
        },
        {
          "element": "tastes",
          "role": "Perception / Sensory State (Trạng thái vị giác)",
          "explanation": "Động từ liên kết giác quan chỉ trải nghiệm vị giác."
        },
        {
          "element": "delicious",
          "role": "Attribute / Quality (Phẩm chất ngon)",
          "explanation": "Tính chất thơm ngon thuộc về món súp (Soup = delicious)."
        }
      ]
    }
  },

      // ================= CÂU 21 =================
  {
    "id": 21,
    "title": "Câu 21: The talented pianist played a soothing melody.",
    "sentence": "The talented pianist played a soothing melody.",
    "translation": "Nghệ sĩ piano tài năng đã chơi một giai điệu du dương, êm dịu.",
    "ipa": "/ðə ˈtæləntɪd ˈpiːənɪst pleɪd ə ˈsuːðɪŋ ˈmɛlədi/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "định nghĩa cụ thể",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ nghệ sĩ piano."
        },
        {
            "index": 2,
            "word": "talented",
            "lemma": "talented",
            "ipa": "/ˈtæləntɪd/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "tài năng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ pianist."
        },
        {
            "index": 3,
            "word": "pianist",
            "lemma": "pianist",
            "ipa": "/ˈpiːənɪst/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "nghệ sĩ piano",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động chơi đàn."
        },
        {
            "index": 4,
            "word": "played",
            "lemma": "play",
            "ipa": "/pleɪd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã chơi, đã biểu diễn",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động biểu diễn trong quá khứ."
        },
        {
            "index": 5,
            "word": "a",
            "lemma": "a",
            "ipa": "/ə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ bất định",
            "meaning": "một",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ bất định đứng trước danh từ đếm được số ít."
        },
        {
            "index": 6,
            "word": "soothing",
            "lemma": "soothe",
            "ipa": "/ˈsuːðɪŋ/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "du dương, êm dịu",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ melody."
        },
        {
            "index": 7,
            "word": "melody.",
            "lemma": "melody",
            "ipa": "/ˈmɛlədi/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "giai điệu",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, chịu tác động trực tiếp từ động từ played."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The talented pianist    played      DET  ADJ NOUN\n                                             |    |    |\n                                             a soothing melody"
        },
        "semanticRoles": [
            {
                "element": "The talented pianist",
                "role": "Agent (Chủ thể thực hiện hành động)",
                "explanation": "Nghệ sĩ piano tài năng trực tiếp thực hiện hành vi chơi bản nhạc."
            },
            {
                "element": "played",
                "role": "Action (Hành động)",
                "explanation": "Động từ quá khứ chỉ hành vi trình diễn âm nhạc."
            },
            {
                "element": "a soothing melody",
                "role": "Theme / Patient (Đối tượng được biểu diễn)",
                "explanation": "Giai điệu êm dịu được người nghệ sĩ tạo ra và truyền tải."
            }
        ]
    }
},

  // ================= CÂU 22 =================
  {
    "id": 22,
    "title": "Câu 22: The tired traveler drank a hot cup of tea.",
    "sentence": "The tired traveler drank a hot cup of tea.",
    "translation": "Vị lữ khách mệt mỏi đã uống một tách trà nóng.",
    "ipa": "/ðə ˈtaɪərd ˈtrævələr dræŋk ə hɑːt kʌp ʌv tiː/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "vị (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chủ ngữ."
        },
        {
            "index": 2,
            "word": "tired",
            "lemma": "tire",
            "ipa": "/ˈtaɪərd/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "mệt mỏi",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ traveler."
        },
        {
            "index": 3,
            "word": "traveler",
            "lemma": "traveler",
            "ipa": "/ˈtrævələr/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "lữ khách",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động uống."
        },
        {
            "index": 4,
            "word": "drank",
            "lemma": "drink",
            "ipa": "/dræŋk/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã uống",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động uống trong quá khứ (bất quy tắc)."
        },
        {
            "index": 5,
            "word": "a",
            "lemma": "a",
            "ipa": "/ə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ bất định",
            "meaning": "một",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ bất định đứng trước cụm danh từ đếm được số ít."
        },
        {
            "index": 6,
            "word": "hot",
            "lemma": "hot",
            "ipa": "/hɑːt/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "nóng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ bổ nghĩa cho từ cup."
        },
        {
            "index": 7,
            "word": "cup",
            "lemma": "cup",
            "ipa": "/kʌp/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "cốc, tách",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của cụm tân ngữ chứa thành phần định lượng."
        },
        {
            "index": 8,
            "word": "of",
            "lemma": "of",
            "ipa": "/ʌv/",
            "pos": "PREP",
            "pos_vi": "Giới từ",
            "morphology": "Giới từ chứa đựng",
            "meaning": "của",
            "syntacticRole": "Preposition",
            "parentPhrase": "Cụm giới từ bổ nghĩa",
            "grammarExplanation": "Giới từ nối xác định thành phần bên trong cốc."
        },
        {
            "index": 9,
            "word": "tea.",
            "lemma": "tea",
            "ipa": "/tiː/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ không đếm được",
            "meaning": "trà",
            "syntacticRole": "Object of Preposition",
            "parentPhrase": "Cụm giới từ bổ nghĩa",
            "grammarExplanation": "Danh từ đi sau giới từ of."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /  |   \\    \\\n        The  tired traveler     drank       DET ADJ NOUN   PP\n                                             |   |    |   /  \\\n                                             a  hot  cup PREP NOUN\n                                                          |    |\n                                                          of  tea"
        },
        "semanticRoles": [
            {
                "element": "The tired traveler",
                "role": "Agent / Experiencer (Chủ thể thực hiện)",
                "explanation": "Vị lữ khách mệt mỏi là người trực tiếp uống cốc trà."
            },
            {
                "element": "drank",
                "role": "Action (Hành động)",
                "explanation": "Động từ quá khứ chỉ hành vi tiêu thụ thức uống."
            },
            {
                "element": "a hot cup of tea",
                "role": "Patient / Theme (Đối tượng được uống)",
                "explanation": "Tách trà nóng là đồ uống được lữ khách thưởng thức."
            }
        ]
    }
},

  // ================= CÂU 23 =================
  {
    "id": 23,
    "title": "Câu 23: The dedicated nurse helped the injured patient.",
    "sentence": "The dedicated nurse helped the injured patient.",
    "translation": "Nữ y tá tận tụy đã giúp đỡ bệnh nhân bị thương.",
    "ipa": "/ðə ˈdɛdɪkeɪtɪd nɜːrs hɛlpt ðə ˈɪndʒərd ˈpeɪʃnt/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "nữ (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ y tá."
        },
        {
            "index": 2,
            "word": "dedicated",
            "lemma": "dedicate",
            "ipa": "/ˈdɛdɪkeɪtɪd/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "tận tụy, tận tâm",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ nurse."
        },
        {
            "index": 3,
            "word": "nurse",
            "lemma": "nurse",
            "ipa": "/nɜːrs/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "y tá, điều dưỡng",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động giúp đỡ."
        },
        {
            "index": 4,
            "word": "helped",
            "lemma": "help",
            "ipa": "/hɛlpt/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã giúp đỡ",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính diễn tả hành động giúp đỡ trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "người bệnh (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ đối tượng."
        },
        {
            "index": 6,
            "word": "injured",
            "lemma": "injure",
            "ipa": "/ˈɪndʒərd/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ phân từ",
            "meaning": "bị thương",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ patient."
        },
        {
            "index": 7,
            "word": "patient.",
            "lemma": "patient",
            "ipa": "/ˈpeɪʃnt/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "bệnh nhân",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động được giúp đỡ."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The dedicated nurse      helped     DET  ADJ NOUN\n                                             |    |    |\n                                            the injured patient"
        },
        "semanticRoles": [
            {
                "element": "The dedicated nurse",
                "role": "Agent (Chủ thể thực hiện)",
                "explanation": "Nữ y tá tận tụy là người chủ động hỗ trợ và chăm sóc."
            },
            {
                "element": "helped",
                "role": "Action (Hành động trợ giúp)",
                "explanation": "Động từ chỉ hành vi giúp đỡ, cứu chữa."
            },
            {
                "element": "the injured patient",
                "role": "Beneficiary / Patient (Đối tượng được thụ hưởng/giúp đỡ)",
                "explanation": "Bệnh nhân bị thương là người nhận được sự trợ giúp chăm sóc y tế."
            }
        ]
    }
},

  // ================= CÂU 24 =================
  {
    "id": 24,
    "title": "Câu 24: The young student speaks French fluently.",
    "sentence": "The young student speaks French fluently.",
    "translation": "Cậu học sinh trẻ tuổi nói tiếng Pháp rất lưu loát.",
    "ipa": "/ðə jʌŋ ˈstjuːdnt spiːks frɛntʃ ˈfluːəntli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "cậu (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chủ ngữ."
        },
        {
            "index": 2,
            "word": "young",
            "lemma": "young",
            "ipa": "/jʌŋ/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "trẻ",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ student."
        },
        {
            "index": 3,
            "word": "student",
            "lemma": "student",
            "ipa": "/ˈstjuːdnt/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "học sinh, sinh viên",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động nói."
        },
        {
            "index": 4,
            "word": "speaks",
            "lemma": "speak",
            "ipa": "/spiːks/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Hiện tại đơn (Ngôi 3 số ít)",
            "meaning": "nói",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính diễn tả hành động nói ngôn ngữ theo thói quen/khả năng."
        },
        {
            "index": 5,
            "word": "French",
            "lemma": "French",
            "ipa": "/frɛntʃ/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ riêng",
            "meaning": "tiếng Pháp",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, là ngôn ngữ được nói ra."
        },
        {
            "index": 6,
            "word": "fluently.",
            "lemma": "fluently",
            "ipa": "/ˈfluːəntli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ cách thức",
            "meaning": "trôi chảy, lưu loát",
            "syntacticRole": "Adverbial",
            "parentPhrase": "Cụm trạng ngữ cuối câu",
            "grammarExplanation": "Trạng từ chỉ cách thức đứng ở cuối câu bổ nghĩa cho động từ speaks."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP\n              /    |    \\       |       |\n            DET   ADJ  NOUN     |      ADV\n             |     |     |      |       |\n            The  young student  |    fluently\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |        |\n                           speaks   NOUN\n                                      |\n                                    French"
        },
        "semanticRoles": [
            {
                "element": "The young student",
                "role": "Agent (Chủ thể phát ngôn)",
                "explanation": "Cậu học sinh trẻ tuổi là người chủ động nói ngoại ngữ."
            },
            {
                "element": "speaks",
                "role": "Action (Hành động nói)",
                "explanation": "Hành vi giao tiếp bằng lời nói."
            },
            {
                "element": "French",
                "role": "Theme (Ngôn ngữ được nói)",
                "explanation": "Tiếng Pháp là ngôn ngữ được sử dụng."
            },
            {
                "element": "fluently",
                "role": "Manner (Cách thức)",
                "explanation": "Mức độ lưu loát, trôi chảy khi giao tiếp."
            }
        ]
    }
},

  // ================= CÂU 25 =================
  {
    "id": 25,
    "title": "Câu 25: The local baker baked fresh bread this morning.",
    "sentence": "The local baker baked fresh bread this morning.",
    "translation": "Người thợ làm bánh địa phương đã nướng bánh mì tươi sáng nay.",
    "ipa": "/ðə ˈloʊkl ˈbeɪkər beɪkt frɛʃ brɛd ðɪs ˈmɔːrnɪŋ/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial NP)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "người (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chủ ngữ."
        },
        {
            "index": 2,
            "word": "local",
            "lemma": "local",
            "ipa": "/ˈloʊkl/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "địa phương",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ baker."
        },
        {
            "index": 3,
            "word": "baker",
            "lemma": "baker",
            "ipa": "/ˈbeɪkər/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "thợ làm bánh",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động nướng bánh."
        },
        {
            "index": 4,
            "word": "baked",
            "lemma": "bake",
            "ipa": "/beɪkt/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã nướng",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động nướng trong quá khứ."
        },
        {
            "index": 5,
            "word": "fresh",
            "lemma": "fresh",
            "ipa": "/frɛʃ/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "tươi",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ bread."
        },
        {
            "index": 6,
            "word": "bread",
            "lemma": "bread",
            "ipa": "/brɛd/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ không đếm được",
            "meaning": "bánh mì",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của cụm tân ngữ, đối tượng chịu tác động."
        },
        {
            "index": 7,
            "word": "this",
            "lemma": "this",
            "ipa": "/ðɪs/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Từ hạn định chỉ định",
            "meaning": "này",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm trạng ngữ thời gian",
            "grammarExplanation": "Từ hạn định xác định thời gian."
        },
        {
            "index": 8,
            "word": "morning.",
            "lemma": "morning",
            "ipa": "/ˈmɔːrnɪŋ/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ thời gian",
            "meaning": "buổi sáng",
            "syntacticRole": "Head of Adverbial Phrase",
            "parentPhrase": "Cụm trạng ngữ thời gian",
            "grammarExplanation": "Danh từ trung tâm kết hợp với this tạo thành trạng ngữ chỉ thời gian đứng cuối câu."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP (NP)\n              /    |    \\       |       /     \\\n            DET   ADJ  NOUN     |     DET    NOUN\n             |     |     |      |      |       |\n            The  local baker    |     this  morning\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /     \\\n                           baked  ADJ    NOUN\n                                   |       |\n                                 fresh   bread"
        },
        "semanticRoles": [
            {
                "element": "The local baker",
                "role": "Agent (Chủ thể nướng bánh)",
                "explanation": "Người thợ làm bánh ở địa phương là người thực hiện việc nướng."
            },
            {
                "element": "baked",
                "role": "Action (Hành động)",
                "explanation": "Hành vi làm bánh trong lò nướng."
            },
            {
                "element": "fresh bread",
                "role": "Result / Patient (Thành phẩm tạo ra)",
                "explanation": "Bánh mì tươi mới là mẻ bánh được làm chín."
            },
            {
                "element": "this morning",
                "role": "Time (Thời gian)",
                "explanation": "Mốc thời gian hành động diễn ra (sáng nay)."
            }
        ]
    }
},

  // ================= CÂU 26 =================
  {
    "id": 26,
    "title": "Câu 26: The librarian arranged the old manuscripts neatly.",
    "sentence": "The librarian arranged the old manuscripts neatly.",
    "translation": "Người thủ thư đã sắp xếp các bản thảo cũ một cách ngăn nắp.",
    "ipa": "/ðə laɪˈbrɛəriən əˈreɪndʒd ðə oʊld ˈmænjuskrɪpts ˈniːtli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "người (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ thủ thư."
        },
        {
            "index": 2,
            "word": "librarian",
            "lemma": "librarian",
            "ipa": "/laɪˈbrɛəriən/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "thủ thư",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động sắp xếp."
        },
        {
            "index": 3,
            "word": "arranged",
            "lemma": "arrange",
            "ipa": "/əˈreɪndʒd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã sắp xếp",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính biểu thị hành động sắp xếp trong quá khứ."
        },
        {
            "index": 4,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "các (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ số nhiều."
        },
        {
            "index": 5,
            "word": "old",
            "lemma": "old",
            "ipa": "/oʊld/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "cũ",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ manuscripts."
        },
        {
            "index": 6,
            "word": "manuscripts",
            "lemma": "manuscript",
            "ipa": "/ˈmænjuskrɪpts/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số nhiều",
            "meaning": "bản thảo",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động trực tiếp."
        },
        {
            "index": 7,
            "word": "neatly.",
            "lemma": "neatly",
            "ipa": "/ˈniːtli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ cách thức",
            "meaning": "ngăn nắp, gọn gàng",
            "syntacticRole": "Adverbial",
            "parentPhrase": "Cụm trạng ngữ cuối câu",
            "grammarExplanation": "Trạng từ chỉ cách thức đứng cuối câu bổ nghĩa cho động từ arranged."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP\n              /          \\      |       |\n            DET         NOUN    |      ADV\n             |           |      |       |\n            The      librarian  |     neatly\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /  |   \\\n                          arranged DET ADJ NOUN\n                                   |   |    |\n                                  the old manuscripts"
        },
        "semanticRoles": [
            {
                "element": "The librarian",
                "role": "Agent (Chủ thể sắp xếp)",
                "explanation": "Người thủ thư là người thu dọn, chỉnh sửa và sắp đặt tài liệu."
            },
            {
                "element": "arranged",
                "role": "Action (Hành động)",
                "explanation": "Hành vi bài trí, phân loại và xếp đặt tài liệu ngăn nắp."
            },
            {
                "element": "the old manuscripts",
                "role": "Patient (Đối tượng chịu tác động)",
                "explanation": "Những bản thảo xưa cũ là đối tượng được xếp đặt."
            },
            {
                "element": "neatly",
                "role": "Manner (Cách thức)",
                "explanation": "Cách thức sắp xếp rất gọn gàng, trật tự."
            }
        ]
    }
},

  // ================= CÂU 27 =================
  {
    "id": 27,
    "title": "Câu 27: The brilliant engineer designed a sustainable bridge.",
    "sentence": "The brilliant engineer designed a sustainable bridge.",
    "translation": "Vị kỹ sư tài ba đã thiết kế một cây cầu bền vững.",
    "ipa": "/ðə ˈbrɪliənt ˌɛndʒɪˈnɪər dɪˈzaɪnd ə səˈsteɪnəbl brɪdʒ/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "vị (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ kỹ sư."
        },
        {
            "index": 2,
            "word": "brilliant",
            "lemma": "brilliant",
            "ipa": "/ˈbrɪliənt/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "tài giỏi, lỗi lạc",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ engineer."
        },
        {
            "index": 3,
            "word": "engineer",
            "lemma": "engineer",
            "ipa": "/ˌɛndʒɪˈnɪər/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "kỹ sư",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động thiết kế."
        },
        {
            "index": 4,
            "word": "designed",
            "lemma": "design",
            "ipa": "/dɪˈzaɪnd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã thiết kế",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động thiết kế trong quá khứ."
        },
        {
            "index": 5,
            "word": "a",
            "lemma": "a",
            "ipa": "/ə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ bất định",
            "meaning": "một",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ bất định đứng trước danh từ đếm được số ít."
        },
        {
            "index": 6,
            "word": "sustainable",
            "lemma": "sustainable",
            "ipa": "/səˈsteɪnəbl/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "bền vững",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ bridge."
        },
        {
            "index": 7,
            "word": "bridge.",
            "lemma": "bridge",
            "ipa": "/brɪdʒ/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "cây cầu",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động được thiết kế ra."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The brilliant engineer  designed    DET  ADJ NOUN\n                                             |    |    |\n                                             a sustainable bridge"
        },
        "semanticRoles": [
            {
                "element": "The brilliant engineer",
                "role": "Agent / Creator (Chủ thể thiết kế)",
                "explanation": "Vị kỹ sư tài giỏi là người lên ý tưởng và thiết kế kết cấu cầu."
            },
            {
                "element": "designed",
                "role": "Action / Creation (Hành vi thiết kế)",
                "explanation": "Hoạt động sáng tạo bản thiết kế công trình trong quá khứ."
            },
            {
                "element": "a sustainable bridge",
                "role": "Result / Theme (Công trình được thiết kế)",
                "explanation": "Cây cầu bền vững là sản phẩm được kiến tạo ra."
            }
        ]
    }
},

  // ================= CÂU 28 =================
  {
    "id": 28,
    "title": "Câu 28: My father cooked a delicious dinner yesterday.",
    "sentence": "My father cooked a delicious dinner yesterday.",
    "translation": "Bố tôi đã nấu một bữa tối rất ngon ngày hôm qua.",
    "ipa": "/maɪ ˈfɑːðər kʊkt ə dɪˈlɪʃəs ˈdɪnər ˈjɛstərdeɪ/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial)",
    "tokens": [
        {
            "index": 1,
            "word": "My",
            "lemma": "my",
            "ipa": "/maɪ/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Từ hạn định sở hữu",
            "meaning": "của tôi",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Từ hạn định sở hữu đứng trước danh từ chỉ người thân."
        },
        {
            "index": 2,
            "word": "father",
            "lemma": "father",
            "ipa": "/ˈfɑːðər/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "bố, cha",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động nấu ăn."
        },
        {
            "index": 3,
            "word": "cooked",
            "lemma": "cook",
            "ipa": "/kʊkt/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã nấu",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động nấu trong quá khứ."
        },
        {
            "index": 4,
            "word": "a",
            "lemma": "a",
            "ipa": "/ə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ bất định",
            "meaning": "một",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ bất định đứng trước danh từ đếm được số ít."
        },
        {
            "index": 5,
            "word": "delicious",
            "lemma": "delicious",
            "ipa": "/dɪˈlɪʃəs/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "ngon",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ dinner."
        },
        {
            "index": 6,
            "word": "dinner",
            "lemma": "dinner",
            "ipa": "/ˈdɪnər/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "bữa tối",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của cụm tân ngữ, đối tượng chịu tác động."
        },
        {
            "index": 7,
            "word": "yesterday.",
            "lemma": "yesterday",
            "ipa": "/ˈjɛstərdeɪ/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ thời gian",
            "meaning": "hôm qua",
            "syntacticRole": "Adverbial of Time",
            "parentPhrase": "Cụm trạng ngữ thời gian",
            "grammarExplanation": "Trạng từ chỉ thời gian đứng cuối câu bổ nghĩa cho toàn mệnh đề."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP\n              /          \\      |       |\n            DET         NOUN    |      ADV\n             |           |      |       |\n            My         father   |   yesterday\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /  |   \\\n                           cooked DET ADJ NOUN\n                                   |   |    |\n                                   a delicious dinner"
        },
        "semanticRoles": [
            {
                "element": "My father",
                "role": "Agent (Chủ thể nấu ăn)",
                "explanation": "Người bố là người trực tiếp nấu bữa cơm tối ngon lành."
            },
            {
                "element": "cooked",
                "role": "Action (Hành vi chế biến món ăn)",
                "explanation": "Động từ chỉ hành động nấu nướng."
            },
            {
                "element": "a delicious dinner",
                "role": "Result / Patient (Bữa ăn tạo ra)",
                "explanation": "Bữa tối thơm ngon là thành phẩm sau khi nấu."
            },
            {
                "element": "yesterday",
                "role": "Time (Thời gian)",
                "explanation": "Mốc thời gian diễn ra bữa ăn (ngày hôm qua)."
            }
        ]
    }
},

  // ================= CÂU 29 =================
  {
    "id": 29,
    "title": "Câu 29: The diligent students solved complex math problems.",
    "sentence": "The diligent students solved complex math problems.",
    "translation": "Những học sinh chăm chỉ đã giải quyết các bài toán phức tạp.",
    "ipa": "/ðə ˈdɪlɪdʒənt ˈstjuːdənts sɑːlvd ˈkɑːmplɛks mæθ ˈprɑːbləmz/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "những (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ số nhiều học sinh."
        },
        {
            "index": 2,
            "word": "diligent",
            "lemma": "diligent",
            "ipa": "/ˈdɪlɪdʒənt/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "chăm chỉ",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ students."
        },
        {
            "index": 3,
            "word": "students",
            "lemma": "student",
            "ipa": "/ˈstjuːdənts/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số nhiều",
            "meaning": "học sinh",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động giải quyết."
        },
        {
            "index": 4,
            "word": "solved",
            "lemma": "solve",
            "ipa": "/sɑːlvd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã giải quyết",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động giải quyết trong quá khứ."
        },
        {
            "index": 5,
            "word": "complex",
            "lemma": "complex",
            "ipa": "/ˈkɑːmplɛks/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "phức tạp",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ problems."
        },
        {
            "index": 6,
            "word": "math",
            "lemma": "math",
            "ipa": "/mæθ/",
            "pos": "NOUN",
            "pos_vi": "Danh từ (định ngữ)",
            "morphology": "Danh từ dùng làm định ngữ",
            "meaning": "toán học",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ bổ nghĩa cho từ problems."
        },
        {
            "index": 7,
            "word": "problems.",
            "lemma": "problem",
            "ipa": "/ˈprɑːbləmz/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số nhiều",
            "meaning": "các bài toán",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng được giải quyết."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |     \\\n        The diligent students   solved      ADJ  NOUN  NOUN\n                                             |    |      |\n                                          complex math problems"
        },
        "semanticRoles": [
            {
                "element": "The diligent students",
                "role": "Agent (Chủ thể tư duy / giải bài)",
                "explanation": "Những học sinh chăm chỉ là người suy nghĩ và tìm ra lời giải."
            },
            {
                "element": "solved",
                "role": "Action (Hành động giải)",
                "explanation": "Hành vi giải quyết bài toán phức tạp."
            },
            {
                "element": "complex math problems",
                "role": "Patient / Theme (Đối tượng được giải quyết)",
                "explanation": "Các bài toán hóc búa được học sinh tháo gỡ thành công."
            }
        ]
    }
},

  // ================= CÂU 30 =================
  {
    "id": 30,
    "title": "Câu 30: The frightened guard opened the heavy gate suddenly.",
    "sentence": "The frightened guard opened the heavy gate suddenly.",
    "translation": "Người lính gác hoảng sợ đã thình lình mở cánh cổng nặng nề.",
    "ipa": "/ðə ˈfraɪtnd ɡɑːrd ˈoʊpənd ðə ˈhɛvi ɡeɪt ˈsʌdənli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "người (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chủ ngữ."
        },
        {
            "index": 2,
            "word": "frightened",
            "lemma": "frighten",
            "ipa": "/ˈfraɪtnd/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ phân từ",
            "meaning": "hoảng sợ",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ guard."
        },
        {
            "index": 3,
            "word": "guard",
            "lemma": "guard",
            "ipa": "/ɡɑːrd/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "bảo vệ, lính canh",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động mở cửa."
        },
        {
            "index": 4,
            "word": "opened",
            "lemma": "open",
            "ipa": "/ˈoʊpənd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã mở",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính biểu thị hành động mở trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "cánh (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ vật."
        },
        {
            "index": 6,
            "word": "heavy",
            "lemma": "heavy",
            "ipa": "/ˈhɛvi/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "nặng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ gate."
        },
        {
            "index": 7,
            "word": "gate",
            "lemma": "gate",
            "ipa": "/ɡeɪt/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "cổng",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động trực tiếp."
        },
        {
            "index": 8,
            "word": "suddenly.",
            "lemma": "suddenly",
            "ipa": "/ˈsʌdənli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ cách thức",
            "meaning": "thình lình, bất ngờ",
            "syntacticRole": "Adjunct (A)",
            "parentPhrase": "Cụm trạng ngữ",
            "grammarExplanation": "Trạng từ đứng cuối câu bổ nghĩa cho toàn bộ hành động của động từ opened."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP\n              /    |    \\       |       |\n            DET   ADJ  NOUN     |      ADV\n             |     |     |      |       |\n            The frightened guard|    suddenly\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /  |   \\\n                           opened DET ADJ NOUN\n                                   |   |    |\n                                  the heavy gate"
        },
        "semanticRoles": [
            {
                "element": "The frightened guard",
                "role": "Agent / Experiencer (Chủ thể mang cảm xúc sợ hãi)",
                "explanation": "Người lính gác trong cơn hoảng sợ đã mở then cài cổng."
            },
            {
                "element": "opened",
                "role": "Action (Hành động mở cổng)",
                "explanation": "Hành vi làm cánh cổng mở ra trong quá khứ."
            },
            {
                "element": "the heavy gate",
                "role": "Patient (Vật chịu tác động)",
                "explanation": "Cánh cổng sắt nặng nề bị đẩy mở."
            },
            {
                "element": "suddenly",
                "role": "Manner (Cách thức)",
                "explanation": "Hành vi xảy ra bất ngờ, thình lình và đường đột."
            }
        ]
    }
},

  // ================= CÂU 31 =================
  {
    "id": 31,
    "title": "Câu 31: The experienced mechanic fixed my broken car.",
    "sentence": "The experienced mechanic fixed my broken car.",
    "translation": "Người thợ máy có kinh nghiệm đã sửa chiếc ô tô bị hỏng của tôi.",
    "ipa": "/ðə ɪkˈspɪriənst məˈkænɪk fɪkst maɪ ˈbroʊkən kɑːr/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "người (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ thợ máy."
        },
        {
            "index": 2,
            "word": "experienced",
            "lemma": "experience",
            "ipa": "/ɪkˈspɪriənst/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ phân từ",
            "meaning": "có kinh nghiệm, kỳ cựu",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ mechanic."
        },
        {
            "index": 3,
            "word": "mechanic",
            "lemma": "mechanic",
            "ipa": "/məˈkænɪk/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "thợ cơ khí, thợ máy",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động sửa chữa."
        },
        {
            "index": 4,
            "word": "fixed",
            "lemma": "fix",
            "ipa": "/fɪkst/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã sửa chữa",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động sửa chữa trong quá khứ."
        },
        {
            "index": 5,
            "word": "my",
            "lemma": "my",
            "ipa": "/maɪ/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Từ hạn định sở hữu",
            "meaning": "của tôi",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Từ hạn định sở hữu đứng trước danh từ trong cụm tân ngữ."
        },
        {
            "index": 6,
            "word": "broken",
            "lemma": "break",
            "ipa": "/ˈbroʊkən/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ phân từ",
            "meaning": "bị hỏng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ car."
        },
        {
            "index": 7,
            "word": "car.",
            "lemma": "car",
            "ipa": "/kɑːr/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "ô tô, xe hơi",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, là đối tượng chịu tác động được sửa."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The experienced mechanic fixed      DET  ADJ NOUN\n                                             |    |    |\n                                             my broken car"
        },
        "semanticRoles": [
            {
                "element": "The experienced mechanic",
                "role": "Agent (Chủ thể thực hiện)",
                "explanation": "Người thợ cơ khí lành nghề trực tiếp thực hiện sửa xe."
            },
            {
                "element": "fixed",
                "role": "Action (Hành động sửa chữa)",
                "explanation": "Hành vi phục hồi phương tiện hư hỏng."
            },
            {
                "element": "my broken car",
                "role": "Patient (Đối tượng chịu tác động)",
                "explanation": "Chiếc ô tô bị hỏng là vật được sửa chữa."
            }
        ]
    }
},

  // ================= CÂU 32 =================
  {
    "id": 32,
    "title": "Câu 32: The hungry student ate a delicious sandwich.",
    "sentence": "The hungry student ate a delicious sandwich.",
    "translation": "Cậu học sinh đói bụng đã ăn một chiếc bánh mì kẹp rất ngon.",
    "ipa": "/ðə ˈhʌŋɡri ˈstjuːdnt eɪt ə dɪˈlɪʃəs ˈsænwɪtʃ/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "cậu (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ học sinh."
        },
        {
            "index": 2,
            "word": "hungry",
            "lemma": "hungry",
            "ipa": "/ˈhʌŋɡri/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "đói bụng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ student."
        },
        {
            "index": 3,
            "word": "student",
            "lemma": "student",
            "ipa": "/ˈstjuːdnt/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "học sinh",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động ăn."
        },
        {
            "index": 4,
            "word": "ate",
            "lemma": "eat",
            "ipa": "/eɪt/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã ăn",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động ăn trong quá khứ (bất quy tắc: eat -> ate)."
        },
        {
            "index": 5,
            "word": "a",
            "lemma": "a",
            "ipa": "/ə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ bất định",
            "meaning": "một",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ bất định đứng trước danh từ đếm được số ít."
        },
        {
            "index": 6,
            "word": "delicious",
            "lemma": "delicious",
            "ipa": "/dɪˈlɪʃəs/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "ngon",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ sandwich."
        },
        {
            "index": 7,
            "word": "sandwich.",
            "lemma": "sandwich",
            "ipa": "/ˈsænwɪtʃ/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "bánh mì kẹp",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, là đối tượng bị ăn."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The hungry student       ate        DET  ADJ NOUN\n                                             |    |    |\n                                             a delicious sandwich"
        },
        "semanticRoles": [
            {
                "element": "The hungry student",
                "role": "Agent / Experiencer (Chủ thể thực hiện hành động ăn)",
                "explanation": "Cậu học sinh đói bụng là người trực tiếp ăn chiếc bánh."
            },
            {
                "element": "ate",
                "role": "Action (Hành vi ăn uống)",
                "explanation": "Động từ chỉ hành vi tiêu thụ thức ăn."
            },
            {
                "element": "a delicious sandwich",
                "role": "Patient (Thức ăn được tiêu thụ)",
                "explanation": "Chiếc bánh mì kẹp thơm ngon là món ăn bị tiêu thụ."
            }
        ]
    }
},

  // ================= CÂU 33 =================
  {
    "id": 33,
    "title": "Câu 33: The local postman delivered important letters.",
    "sentence": "The local postman delivered important letters.",
    "translation": "Người đưa thư địa phương đã phát những bức thư quan trọng.",
    "ipa": "/ðə ˈloʊkl ˈpoʊstmən dɪˈlɪvərd ɪmˈpɔːrtnt ˈlɛtərz/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "người (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ người đưa thư."
        },
        {
            "index": 2,
            "word": "local",
            "lemma": "local",
            "ipa": "/ˈloʊkl/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "địa phương",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ postman."
        },
        {
            "index": 3,
            "word": "postman",
            "lemma": "postman",
            "ipa": "/ˈpoʊstmən/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "người đưa thư",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động phát thư."
        },
        {
            "index": 4,
            "word": "delivered",
            "lemma": "deliver",
            "ipa": "/dɪˈlɪvərd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã giao, đã phát",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động giao phát trong quá khứ."
        },
        {
            "index": 5,
            "word": "important",
            "lemma": "important",
            "ipa": "/ɪmˈpɔːrtnt/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "quan trọng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ letters."
        },
        {
            "index": 6,
            "word": "letters.",
            "lemma": "letter",
            "ipa": "/ˈlɛtərz/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số nhiều",
            "meaning": "những bức thư",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động được giao."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /     \\\n        The  local postman    delivered     ADJ     NOUN\n                                             |        |\n                                         important letters"
        },
        "semanticRoles": [
            {
                "element": "The local postman",
                "role": "Agent (Chủ thể vận chuyển)",
                "explanation": "Người đưa thư địa phương là người trực tiếp chuyển phát thư từ."
            },
            {
                "element": "delivered",
                "role": "Action (Hành động giao phát)",
                "explanation": "Hành vi giao thư tín tới tay người nhận."
            },
            {
                "element": "important letters",
                "role": "Theme / Patient (Đối tượng được giao)",
                "explanation": "Những lá thư quan trọng là các bưu phẩm được phát đi."
            }
        ]
    }
},

  // ================= CÂU 34 =================
  {
    "id": 34,
    "title": "Câu 34: The intelligent tourist speaks German fluently.",
    "sentence": "The intelligent tourist speaks German fluently.",
    "translation": "Vị khách du lịch thông minh nói tiếng Đức rất lưu loát.",
    "ipa": "/ðə ɪnˈtɛlɪdʒənt ˈtʊrɪst spiːks ˈdʒɜːrmən ˈfluːəntli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "vị (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ du khách."
        },
        {
            "index": 2,
            "word": "intelligent",
            "lemma": "intelligent",
            "ipa": "/ɪnˈtɛlɪdʒənt/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "thông minh",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ tourist."
        },
        {
            "index": 3,
            "word": "tourist",
            "lemma": "tourist",
            "ipa": "/ˈtʊrɪst/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "khách du lịch",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động nói."
        },
        {
            "index": 4,
            "word": "speaks",
            "lemma": "speak",
            "ipa": "/spiːks/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Hiện tại đơn (Ngôi 3 số ít)",
            "meaning": "nói",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính diễn tả hành động nói ngôn ngữ theo thói quen/khả năng."
        },
        {
            "index": 5,
            "word": "German",
            "lemma": "German",
            "ipa": "/ˈdʒɜːrmən/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ riêng",
            "meaning": "tiếng Đức",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, là ngôn ngữ được nói ra."
        },
        {
            "index": 6,
            "word": "fluently.",
            "lemma": "fluently",
            "ipa": "/ˈfluːəntli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ cách thức",
            "meaning": "trôi chảy, lưu loát",
            "syntacticRole": "Adverbial",
            "parentPhrase": "Cụm trạng ngữ cuối câu",
            "grammarExplanation": "Trạng từ chỉ cách thức đứng cuối câu bổ nghĩa cho động từ speaks."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP\n              /    |    \\       |       |\n            DET   ADJ  NOUN     |      ADV\n             |     |     |      |       |\n            The intelligent tourist|  fluently\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |        |\n                           speaks   NOUN\n                                      |\n                                    German"
        },
        "semanticRoles": [
            {
                "element": "The intelligent tourist",
                "role": "Agent (Chủ thể phát ngôn)",
                "explanation": "Vị khách du lịch thông minh là người thực hiện hành vi nói tiếng Đức."
            },
            {
                "element": "speaks",
                "role": "Action (Hành động nói)",
                "explanation": "Động từ diễn tả khả năng sử dụng ngôn ngữ."
            },
            {
                "element": "German",
                "role": "Theme (Ngôn ngữ được nói)",
                "explanation": "Tiếng Đức là đối tượng của phát ngôn."
            },
            {
                "element": "fluently",
                "role": "Manner (Cách thức)",
                "explanation": "Mức độ thành thạo, trôi chảy khi giao tiếp."
            }
        ]
    }
},

  // ================= CÂU 35 =================
  {
    "id": 35,
    "title": "Câu 35: The clever artist painted a stunning portrait.",
    "sentence": "The clever artist painted a stunning portrait.",
    "translation": "Người họa sĩ tài hoa đã vẽ một bức chân dung tuyệt đẹp.",
    "ipa": "/ðə ˈklɛvər ˈɑːrtɪst ˈpeɪntɪd ə ˈstʌnɪŋ ˈpɔːrtrɪt/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "người (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ họa sĩ."
        },
        {
            "index": 2,
            "word": "clever",
            "lemma": "clever",
            "ipa": "/ˈklɛvər/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "khéo léo, thông minh",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ artist."
        },
        {
            "index": 3,
            "word": "artist",
            "lemma": "artist",
            "ipa": "/ˈɑːrtɪst/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "họa sĩ",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động vẽ."
        },
        {
            "index": 4,
            "word": "painted",
            "lemma": "paint",
            "ipa": "/ˈpeɪntɪd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã vẽ",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động vẽ trong quá khứ."
        },
        {
            "index": 5,
            "word": "a",
            "lemma": "a",
            "ipa": "/ə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ bất định",
            "meaning": "một",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ bất định đứng trước danh từ đếm được số ít."
        },
        {
            "index": 6,
            "word": "stunning",
            "lemma": "stun",
            "ipa": "/ˈstʌnɪŋ/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "tuyệt đẹp, lộng lẫy",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ portrait."
        },
        {
            "index": 7,
            "word": "portrait.",
            "lemma": "portrait",
            "ipa": "/ˈpɔːrtrɪt/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "bức chân dung",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động được vẽ."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The clever artist       painted     DET  ADJ NOUN\n                                             |    |    |\n                                             a stunning portrait"
        },
        "semanticRoles": [
            {
                "element": "The clever artist",
                "role": "Agent / Creator (Chủ thể sáng tạo)",
                "explanation": "Người họa sĩ tài hoa là tác giả sáng tạo nên bức tranh."
            },
            {
                "element": "painted",
                "role": "Action / Creation (Hành động vẽ)",
                "explanation": "Hành vi nghệ thuật vẽ tranh trong quá khứ."
            },
            {
                "element": "a stunning portrait",
                "role": "Result / Theme (Tác phẩm nghệ thuật tạo thành)",
                "explanation": "Bức chân dung lộng lẫy là kiệt tác nghệ thuật ra đời."
            }
        ]
    }
},

  // ================= CÂU 36 =================
  {
    "id": 36,
    "title": "Câu 36: The bank teller checked the money carefully.",
    "sentence": "The bank teller checked the money carefully.",
    "translation": "Giao dịch viên ngân hàng đã kiểm tra số tiền một cách cẩn thận.",
    "ipa": "/ðə bæŋk ˈtɛlər tʃɛkt ðə ˈmʌni ˈkɛrfəli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "người giao dịch (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ ngân hàng."
        },
        {
            "index": 2,
            "word": "bank",
            "lemma": "bank",
            "ipa": "/bæŋk/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ dùng làm định ngữ",
            "meaning": "ngân hàng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ bổ nghĩa cho từ teller."
        },
        {
            "index": 3,
            "word": "teller",
            "lemma": "teller",
            "ipa": "/ˈtɛlər/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "giao dịch viên",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động kiểm tra."
        },
        {
            "index": 4,
            "word": "checked",
            "lemma": "check",
            "ipa": "/tʃɛkt/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã kiểm tra",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính biểu thị hành động kiểm tra trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "số (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ tiền tệ."
        },
        {
            "index": 6,
            "word": "money.",
            "lemma": "money",
            "ipa": "/ˈmʌni/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ không đếm được",
            "meaning": "tiền bạc",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động trực tiếp."
        },
        {
            "index": 7,
            "word": "carefully.",
            "lemma": "carefully",
            "ipa": "/ˈkɛrfəli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ cách thức",
            "meaning": "cẩn thận",
            "syntacticRole": "Adverbial",
            "parentPhrase": "Cụm trạng ngữ cuối câu",
            "grammarExplanation": "Trạng từ chỉ cách thức đứng cuối câu bổ nghĩa cho động từ checked."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP\n              /    |    \\       |       |\n            DET  NOUN  NOUN     |      ADV\n             |     |     |      |       |\n            The  bank  teller   |   carefully\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /     \\\n                          checked DET   NOUN\n                                   |      |\n                                  the   money"
        },
        "semanticRoles": [
            {
                "element": "The bank teller",
                "role": "Agent (Chủ thể kiểm đếm)",
                "explanation": "Nhân viên giao dịch ngân hàng trực tiếp kiểm tra tiền."
            },
            {
                "element": "checked",
                "role": "Action (Hành động rà soát)",
                "explanation": "Hành vi xác minh tính chuẩn xác của các tờ tiền."
            },
            {
                "element": "the money",
                "role": "Patient / Theme (Đối tượng được kiểm tra)",
                "explanation": "Khoản tiền được nhân viên đối chiếu và đếm kỹ."
            },
            {
                "element": "carefully",
                "role": "Manner (Cách thức)",
                "explanation": "Mức độ thận trọng, tỉ mỉ khi làm việc."
            }
        ]
    }
},

  // ================= CÂU 37 =================
  {
    "id": 37,
    "title": "Câu 37: The diligent students completed their science projects.",
    "sentence": "The diligent students completed their science projects.",
    "translation": "Những học sinh chăm chỉ đã hoàn thành các dự án khoa học của họ.",
    "ipa": "/ðə ˈdɪlɪdʒənt ˈstjuːdənts kəmˈpliːtɪd ðɛər ˈsaɪəns ˈprɑːdʒɛkts/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "những (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ số nhiều học sinh."
        },
        {
            "index": 2,
            "word": "diligent",
            "lemma": "diligent",
            "ipa": "/ˈdɪlɪdʒənt/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "chăm chỉ",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ students."
        },
        {
            "index": 3,
            "word": "students",
            "lemma": "student",
            "ipa": "/ˈstjuːdənts/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số nhiều",
            "meaning": "học sinh",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động hoàn thành."
        },
        {
            "index": 4,
            "word": "completed",
            "lemma": "complete",
            "ipa": "/kəmˈpliːtɪd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã hoàn thành",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động hoàn thành trong quá khứ."
        },
        {
            "index": 5,
            "word": "their",
            "lemma": "they",
            "ipa": "/ðɛər/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Từ hạn định sở hữu",
            "meaning": "của họ",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Từ hạn định sở hữu đứng trước danh từ dự án."
        },
        {
            "index": 6,
            "word": "science",
            "lemma": "science",
            "ipa": "/ˈsaɪəns/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ dùng làm định ngữ",
            "meaning": "khoa học",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ bổ nghĩa cho từ projects."
        },
        {
            "index": 7,
            "word": "projects.",
            "lemma": "project",
            "ipa": "/ˈprɑːdʒɛkts/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số nhiều",
            "meaning": "các dự án",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng được hoàn thành."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |     \\\n        The diligent students  completed    DET  NOUN  NOUN\n                                             |    |      |\n                                           their science projects"
        },
        "semanticRoles": [
            {
                "element": "The diligent students",
                "role": "Agent (Chủ thể thực hiện)",
                "explanation": "Những học sinh chăm chỉ là nhóm trực tiếp hoàn tất đề tài nghiên cứu."
            },
            {
                "element": "completed",
                "role": "Action (Hành động hoàn thành)",
                "explanation": "Quá trình hoàn tất một công việc đề tài."
            },
            {
                "element": "their science projects",
                "role": "Result / Patient (Sản phẩm dự án hoàn thành)",
                "explanation": "Các dự án khoa học là kết quả nghiên cứu đã được xong xuôi."
            }
        ]
    }
},

  // ================= CÂU 38 =================
  {
    "id": 38,
    "title": "Câu 38: The postman carried a heavy package yesterday.",
    "sentence": "The postman carried a heavy package yesterday.",
    "translation": "Người đưa thư đã mang một gói hàng nặng ngày hôm qua.",
    "ipa": "/ðə ˈpoʊstmən ˈkærid ə ˈhɛvi ˈpækɪdʒ ˈjɛstərdeɪ/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "người (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chủ ngữ."
        },
        {
            "index": 2,
            "word": "postman",
            "lemma": "postman",
            "ipa": "/ˈpoʊstmən/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "người đưa thư",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động mang vác."
        },
        {
            "index": 3,
            "word": "carried",
            "lemma": "carry",
            "ipa": "/ˈkærid/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã mang, đã vác",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động mang vác trong quá khứ."
        },
        {
            "index": 4,
            "word": "a",
            "lemma": "a",
            "ipa": "/ə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ bất định",
            "meaning": "một",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ bất định đứng trước danh từ đếm được số ít."
        },
        {
            "index": 5,
            "word": "heavy",
            "lemma": "heavy",
            "ipa": "/ˈhɛvi/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "nặng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ package."
        },
        {
            "index": 6,
            "word": "package",
            "lemma": "package",
            "ipa": "/ˈpækɪdʒ/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "bưu phẩm, gói hàng",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của cụm tân ngữ, đối tượng chịu tác động."
        },
        {
            "index": 7,
            "word": "yesterday.",
            "lemma": "yesterday",
            "ipa": "/ˈjɛstərdeɪ/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ thời gian",
            "meaning": "ngày hôm qua",
            "syntacticRole": "Adverbial of Time",
            "parentPhrase": "Cụm trạng ngữ thời gian",
            "grammarExplanation": "Trạng từ chỉ thời gian đứng cuối câu bổ nghĩa cho toàn mệnh đề."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP\n              /          \\      |       |\n            DET         NOUN    |      ADV\n             |           |      |       |\n            The        postman  |   yesterday\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /  |   \\\n                          carried DET ADJ NOUN\n                                   |   |    |\n                                   a heavy package"
        },
        "semanticRoles": [
            {
                "element": "The postman",
                "role": "Agent (Chủ thể mang vác)",
                "explanation": "Người bưu tá là người mang kiện hàng nặng."
            },
            {
                "element": "carried",
                "role": "Action (Hành vi mang vác)",
                "explanation": "Hành vi khuân vác, chuyển dịch đồ đạc."
            },
            {
                "element": "a heavy package",
                "role": "Theme / Patient (Kiện hàng được mang)",
                "explanation": "Gói hàng nặng nề là vật phẩm được vận chuyển."
            },
            {
                "element": "yesterday",
                "role": "Time (Thời gian)",
                "explanation": "Mốc thời gian diễn ra sự việc (ngày hôm qua)."
            }
        ]
    }
},

  // ================= CÂU 39 =================
  {
    "id": 39,
    "title": "Câu 39: The brave firefighter rescued the trapped cat.",
    "sentence": "The brave firefighter rescued the trapped cat.",
    "translation": "Người lính cứu hỏa dũng cảm đã giải cứu chú mèo bị mắc kẹt.",
    "ipa": "/ðə breɪv ˈfaɪərfaɪtər ˈrɛskjuːd ðə træpt kæt/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "người (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ lính cứu hỏa."
        },
        {
            "index": 2,
            "word": "brave",
            "lemma": "brave",
            "ipa": "/breɪv/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "dũng cảm",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ firefighter."
        },
        {
            "index": 3,
            "word": "firefighter",
            "lemma": "firefighter",
            "ipa": "/ˈfaɪərfaɪtər/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "lính cứu hỏa",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động giải cứu."
        },
        {
            "index": 4,
            "word": "rescued",
            "lemma": "rescue",
            "ipa": "/ˈrɛskjuːd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã giải cứu",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động giải cứu trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "chú (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ đối tượng."
        },
        {
            "index": 6,
            "word": "trapped",
            "lemma": "trap",
            "ipa": "/træpt/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ phân từ",
            "meaning": "bị mắc kẹt",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ cat."
        },
        {
            "index": 7,
            "word": "cat.",
            "lemma": "cat",
            "ipa": "/kæt/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "con mèo",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động được cứu."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The  brave firefighter  rescued     DET  ADJ NOUN\n                                             |    |    |\n                                            the trapped cat"
        },
        "semanticRoles": [
            {
                "element": "The brave firefighter",
                "role": "Agent (Chủ thể cứu nạn)",
                "explanation": "Người lính cứu hỏa dũng cảm là người trực tiếp cứu hộ."
            },
            {
                "element": "rescued",
                "role": "Action (Hành động cứu thoát)",
                "explanation": "Hành vi giải thoát khỏi tình trạng nguy hiểm."
            },
            {
                "element": "the trapped cat",
                "role": "Patient / Beneficiary (Đối tượng được giải cứu)",
                "explanation": "Chú mèo bị kẹt được đưa ra ngoài an toàn."
            }
        ]
    }
},

  // ================= CÂU 40 =================
  {
    "id": 40,
    "title": "Câu 40: The clever thief opened the window suddenly.",
    "sentence": "The clever thief opened the window suddenly.",
    "translation": "Tên trộm ranh mãnh đã thình lình mở chiếc cửa sổ.",
    "ipa": "/ðə ˈklɛvər θiːf ˈoʊpənd ðə ˈwɪndoʊ ˈsʌdənli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "tên (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chủ ngữ."
        },
        {
            "index": 2,
            "word": "clever",
            "lemma": "clever",
            "ipa": "/ˈklɛvər/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "ranh mãnh, thông minh",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ thief."
        },
        {
            "index": 3,
            "word": "thief",
            "lemma": "thief",
            "ipa": "/θiːf/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "tên trộm",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động mở cửa."
        },
        {
            "index": 4,
            "word": "opened",
            "lemma": "open",
            "ipa": "/ˈoʊpənd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã mở",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính biểu thị hành động mở trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "chiếc (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ vật."
        },
        {
            "index": 6,
            "word": "window",
            "lemma": "window",
            "ipa": "/ˈwɪndoʊ/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "cửa sổ",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động trực tiếp."
        },
        {
            "index": 7,
            "word": "suddenly.",
            "lemma": "suddenly",
            "ipa": "/ˈsʌdənli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ cách thức",
            "meaning": "thình lình, bất ngờ",
            "syntacticRole": "Adjunct (A)",
            "parentPhrase": "Cụm trạng ngữ",
            "grammarExplanation": "Trạng từ đứng cuối câu bổ nghĩa cho toàn bộ hành động của động từ opened."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP\n              /    |    \\       |       |\n            DET   ADJ  NOUN     |      ADV\n             |     |     |      |       |\n            The clever thief    |    suddenly\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /     \\\n                           opened DET   NOUN\n                                   |      |\n                                  the   window"
        },
        "semanticRoles": [
            {
                "element": "The clever thief",
                "role": "Agent (Chủ thể đột nhập)",
                "explanation": "Tên trộm ranh mãnh là người lén lút cạy mở cửa."
            },
            {
                "element": "opened",
                "role": "Action (Hành vi mở)",
                "explanation": "Hành vi làm cánh cửa sổ mở ra."
            },
            {
                "element": "the window",
                "role": "Patient (Vật thể bị mở)",
                "explanation": "Cửa sổ bị tác động làm chuyển sang trạng thái mở."
            },
            {
                "element": "suddenly",
                "role": "Manner (Cách thức)",
                "explanation": "Hành động diễn ra mau lẹ, bất thình lình."
            }
        ]
    }
},

  // ================= CÂU 41 =================
  {
    "id": 41,
    "title": "Câu 41: The chef prepared a delicious dessert. (Câu đúng chuẩn S - V - O)",
    "sentence": "The chef prepared a delicious dessert.",
    "translation": "Đầu bếp đã chuẩn bị một món tráng miệng thơm ngon.",
    "ipa": "/ðə ʃef prɪˈpɛrd ə dɪˈlɪʃəs dɪˈzɜːrt/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "định nghĩa cụ thể",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ đầu bếp."
        },
        {
            "index": 2,
            "word": "chef",
            "lemma": "chef",
            "ipa": "/ʃef/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "đầu bếp",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động chuẩn bị."
        },
        {
            "index": 3,
            "word": "prepared",
            "lemma": "prepare",
            "ipa": "/prɪˈpɛrd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã chuẩn bị",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động chuẩn bị trong quá khứ."
        },
        {
            "index": 4,
            "word": "a",
            "lemma": "a",
            "ipa": "/ə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ bất định",
            "meaning": "một",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ bất định đứng trước danh từ đếm được số ít."
        },
        {
            "index": 5,
            "word": "delicious",
            "lemma": "delicious",
            "ipa": "/dɪˈlɪʃəs/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "ngon miệng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ dessert."
        },
        {
            "index": 6,
            "word": "dessert.",
            "lemma": "dessert",
            "ipa": "/dɪˈzɜːrt/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "món tráng miệng",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động trực tiếp."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /          \\             /            \\\n        DET         NOUN         VERB          DO NP\n         |           |            |           /   |   \\\n        The         chef       prepared     DET  ADJ NOUN\n                                             |    |    |\n                                             a delicious dessert"
        },
        "semanticRoles": [
            {
                "element": "The chef",
                "role": "Agent / Creator (Chủ thể tạo tác)",
                "explanation": "Đầu bếp là người tự tay làm ra món tráng miệng."
            },
            {
                "element": "prepared",
                "role": "Action / Creation (Hành vi chế biến)",
                "explanation": "Quá trình sửa soạn, làm bánh tráng miệng."
            },
            {
                "element": "a delicious dessert",
                "role": "Result / Theme (Món tráng miệng ra đời)",
                "explanation": "Món tráng miệng thơm ngon là sản phẩm hoàn tất."
            }
        ]
    }
},

  // ================= CÂU 42 =================
  {
    "id": 42,
    "title": "Câu 42: A warm blanket grabbed the sleepy child. (Câu trật bánh) → Câu sửa chuẩn: The sleepy child grabbed a warm blanket.",
    "sentence": "The sleepy child grabbed a warm blanket.",
    "translation": "Đứa trẻ buồn ngủ đã với lấy một chiếc chăn ấm.",
    "ipa": "/ðə ˈsliːpi tʃaɪld ɡræbd ə wɔːrm ˈblæŋkɪt/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object) [Đã khắc phục lỗi trật bánh ngữ nghĩa]",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "đứa",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ trẻ em."
        },
        {
            "index": 2,
            "word": "sleepy",
            "lemma": "sleepy",
            "ipa": "/ˈsliːpi/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "buồn ngủ",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ child."
        },
        {
            "index": 3,
            "word": "child",
            "lemma": "child",
            "ipa": "/tʃaɪld/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "đứa trẻ",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động cầm nắm."
        },
        {
            "index": 4,
            "word": "grabbed",
            "lemma": "grab",
            "ipa": "/ɡræbd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã chộp lấy, vớ lấy",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động tóm lấy trong quá khứ."
        },
        {
            "index": 5,
            "word": "a",
            "lemma": "a",
            "ipa": "/ə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ bất định",
            "meaning": "một",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ bất định đứng trước danh từ đếm được số ít."
        },
        {
            "index": 6,
            "word": "warm",
            "lemma": "warm",
            "ipa": "/wɔːrm/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "ấm áp",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ blanket."
        },
        {
            "index": 7,
            "word": "blanket.",
            "lemma": "blanket",
            "ipa": "/ˈblæŋkɪt/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "cái chăn",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động trực tiếp."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu chuẩn (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The sleepy child        grabbed     DET  ADJ NOUN\n                                             |    |    |\n                                             a   warm blanket"
        },
        "semanticRoles": [
            {
                "element": "The sleepy child",
                "role": "Agent / Experiencer (Chủ thể đứa bé)",
                "explanation": "Đứa trẻ buồn ngủ là chủ thể có ý thức thực hiện hành vi với lấy cái chăn."
            },
            {
                "element": "grabbed",
                "role": "Action (Hành động chộp/với lấy)",
                "explanation": "Hành vi với tay nắm lấy đồ vật để đắp ấm."
            },
            {
                "element": "a warm blanket",
                "role": "Patient / Theme (Vật bị tóm lấy)",
                "explanation": "Chiếc chăn ấm là vật thể tĩnh bị đứa trẻ kéo lại gần."
            }
        ]
    }
},

  // ================= CÂU 43 =================
  {
    "id": 43,
    "title": "Câu 43: The local fishermen caught many fish. (Câu đúng chuẩn S - V - O)",
    "sentence": "The local fishermen caught many fish.",
    "translation": "Những ngư dân địa phương đã bắt được rất nhiều cá.",
    "ipa": "/ðə ˈloʊkl ˈfɪʃərmən kɔːt ˈmɛni fɪʃ/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "những",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ số nhiều."
        },
        {
            "index": 2,
            "word": "local",
            "lemma": "local",
            "ipa": "/ˈloʊkl/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "địa phương",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ fishermen."
        },
        {
            "index": 3,
            "word": "fishermen",
            "lemma": "fisherman",
            "ipa": "/ˈfɪʃərmən/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số nhiều",
            "meaning": "ngư dân",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động đánh bắt."
        },
        {
            "index": 4,
            "word": "caught",
            "lemma": "catch",
            "ipa": "/kɔːt/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã bắt được",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động đánh bắt trong quá khứ."
        },
        {
            "index": 5,
            "word": "many",
            "lemma": "many",
            "ipa": "/ˈmɛni/",
            "pos": "DET",
            "pos_vi": "Từ hạn định chỉ số lượng",
            "morphology": "Từ hạn định chỉ số lượng",
            "meaning": "nhiều",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Từ hạn định đứng trước danh từ đếm được số nhiều."
        },
        {
            "index": 6,
            "word": "fish.",
            "lemma": "fish",
            "ipa": "/fɪʃ/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số nhiều (giữ nguyên)",
            "meaning": "con cá",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /     \\\n        The  local fishermen    caught      DET     NOUN\n                                             |        |\n                                            many     fish"
        },
        "semanticRoles": [
            {
                "element": "The local fishermen",
                "role": "Agent (Chủ thể đánh bắt)",
                "explanation": "Những ngư dân địa phương trực tiếp quăng lưới kéo cá."
            },
            {
                "element": "caught",
                "role": "Action (Hành động bắt)",
                "explanation": "Động từ chỉ hành vi đánh bắt hải sản."
            },
            {
                "element": "many fish",
                "role": "Theme / Patient (Sản vật đánh bắt)",
                "explanation": "Đàn cá lớn là đối tượng mắc lưới ngư dân."
            }
        ]
    }
},

  // ================= CÂU 44 =================
  {
    "id": 44,
    "title": "Câu 44: Japanese speaks the young architect fluently. (Câu trật bánh) → Câu sửa chuẩn: The young architect speaks Japanese fluently.",
    "sentence": "The young architect speaks Japanese fluently.",
    "translation": "Nam kiến trúc sư trẻ tuổi nói tiếng Nhật rất trôi chảy.",
    "ipa": "/ðə jʌŋ ˈɑːrkɪtɛkt spiːks ˌdʒæpəˈniːz ˈfluːəntli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "vị",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chủ ngữ."
        },
        {
            "index": 2,
            "word": "young",
            "lemma": "young",
            "ipa": "/jʌŋ/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "trẻ tuổi",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ architect."
        },
        {
            "index": 3,
            "word": "architect",
            "lemma": "architect",
            "ipa": "/ˈɑːrkɪtɛkt/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "kiến trúc sư",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động nói."
        },
        {
            "index": 4,
            "word": "speaks",
            "lemma": "speak",
            "ipa": "/spiːks/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Hiện tại đơn (Ngôi 3 số ít)",
            "meaning": "nói",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính diễn tả khả năng nói ngôn ngữ."
        },
        {
            "index": 5,
            "word": "Japanese",
            "lemma": "Japanese",
            "ipa": "/ˌdʒæpəˈniːz/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ riêng",
            "meaning": "tiếng Nhật",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, là ngôn ngữ được nói ra."
        },
        {
            "index": 6,
            "word": "fluently.",
            "lemma": "fluently",
            "ipa": "/ˈfluːəntli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ cách thức",
            "meaning": "trôi chảy, lưu loát",
            "syntacticRole": "Adverbial",
            "parentPhrase": "Trạng ngữ cuối câu",
            "grammarExplanation": "Trạng từ chỉ cách thức đứng cuối câu bổ nghĩa cho động từ speaks."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu chuẩn (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP\n              /    |    \\       |       |\n            DET   ADJ  NOUN     |      ADV\n             |     |     |      |       |\n            The  young architect|   fluently\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |        |\n                           speaks   NOUN\n                                      |\n                                   Japanese"
        },
        "semanticRoles": [
            {
                "element": "The young architect",
                "role": "Agent (Chủ thể phát ngôn)",
                "explanation": "Nam kiến trúc sư trẻ tuổi là người có khả năng sử dụng ngoại ngữ."
            },
            {
                "element": "speaks",
                "role": "Action (Hành động nói)",
                "explanation": "Khả năng nói tiếng Nhật lưu loát."
            },
            {
                "element": "Japanese",
                "role": "Theme (Ngôn ngữ được nói)",
                "explanation": "Tiếng Nhật là đối tượng ngôn ngữ được giao tiếp."
            },
            {
                "element": "fluently",
                "role": "Manner (Cách thức)",
                "explanation": "Trình độ lưu loát, không vấp váp."
            }
        ]
    }
},

  // ================= CÂU 45 =================
  {
    "id": 45,
    "title": "Câu 45: The astronomy professor observed distant stars. (Câu đúng chuẩn S - V - O)",
    "sentence": "The astronomy professor observed distant stars.",
    "translation": "Vị giáo sư thiên văn học đã quan sát các ngôi sao ở xa xôi.",
    "ipa": "/ðə əˈstrɑːnəmi prəˈfɛsər əbˈzɜːrvd ˈdɪstənt stɑːrz/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "vị",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ giáo sư."
        },
        {
            "index": 2,
            "word": "astronomy",
            "lemma": "astronomy",
            "ipa": "/əˈstrɑːnəmi/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ (dùng như tính từ định ngữ)",
            "meaning": "thiên văn học",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ bổ nghĩa cho từ professor."
        },
        {
            "index": 3,
            "word": "professor",
            "lemma": "professor",
            "ipa": "/prəˈfɛsər/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "giáo sư",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động quan sát."
        },
        {
            "index": 4,
            "word": "observed",
            "lemma": "observe",
            "ipa": "/əbˈzɜːrvd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã quan sát",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động quan sát trong quá khứ."
        },
        {
            "index": 5,
            "word": "distant",
            "lemma": "distant",
            "ipa": "/ˈdɪstənt/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "ở xa, xa xôi",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ stars."
        },
        {
            "index": 6,
            "word": "stars.",
            "lemma": "star",
            "ipa": "/stɑːrz/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số nhiều",
            "meaning": "những ngôi sao",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động được quan sát."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET  NOUN  NOUN          VERB          DO NP\n         |     |     |            |           /     \\\n        The astronomy professor observed    ADJ     NOUN\n                                             |        |\n                                          distant   stars"
        },
        "semanticRoles": [
            {
                "element": "The astronomy professor",
                "role": "Agent / Experiencer (Chủ thể quan sát)",
                "explanation": "Giáo sư thiên văn học là người tiến hành quan sát kính viễn vọng."
            },
            {
                "element": "observed",
                "role": "Action / Perception (Hành động thị giác)",
                "explanation": "Hành vi quan sát khoa học."
            },
            {
                "element": "distant stars",
                "role": "Theme / Stimulus (Thiên thể được ngắm nhìn)",
                "explanation": "Những vì sao xa xôi là đối tượng thiên văn được nghiên cứu."
            }
        ]
    }
},

  // ================= CÂU 46 =================
  {
    "id": 46,
    "title": "Câu 46: Angrily slammed the angry boss the heavy door. (Câu trật bánh) → Câu sửa chuẩn: The angry boss slammed the heavy door angrily.",
    "sentence": "The angry boss slammed the heavy door angrily.",
    "translation": "Vị sếp tức giận đã sập cánh cửa nặng một cách giận dữ.",
    "ipa": "/ðə ˈæŋɡri bɔːs slæmd ðə ˈhɛvi dɔːr ˈæŋɡrəli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial) [Đã sửa lỗi đảo trật tự]",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "vị",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chủ ngữ."
        },
        {
            "index": 2,
            "word": "angry",
            "lemma": "angry",
            "ipa": "/ˈæŋɡri/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "tức giận",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ boss."
        },
        {
            "index": 3,
            "word": "boss",
            "lemma": "boss",
            "ipa": "/bɔːs/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "sếp, ông chủ",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động sập cửa."
        },
        {
            "index": 4,
            "word": "slammed",
            "lemma": "slam",
            "ipa": "/slæmd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã sập mạnh, đóng mạnh",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính biểu thị hành động đóng sập trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "chiếc",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ vật."
        },
        {
            "index": 6,
            "word": "heavy",
            "lemma": "heavy",
            "ipa": "/ˈhɛvi/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "nặng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ door."
        },
        {
            "index": 7,
            "word": "door",
            "lemma": "door",
            "ipa": "/dɔːr/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "cánh cửa",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động trực tiếp."
        },
        {
            "index": 8,
            "word": "angrily.",
            "lemma": "angrily",
            "ipa": "/ˈæŋɡrəli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ chỉ cách thức",
            "meaning": "một cách giận dữ",
            "syntacticRole": "Adverbial",
            "parentPhrase": "Trạng ngữ cuối câu",
            "grammarExplanation": "Trạng từ đứng cuối câu bổ nghĩa cho động từ slammed."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu chuẩn (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP\n              /    |    \\       |       |\n            DET   ADJ  NOUN     |      ADV\n             |     |     |      |       |\n            The  angry  boss    |    angrily\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /  |   \\\n                          slammed DET ADJ NOUN\n                                   |   |    |\n                                  the heavy door"
        },
        "semanticRoles": [
            {
                "element": "The angry boss",
                "role": "Agent (Chủ thể mang cảm xúc giận dữ)",
                "explanation": "Vị sếp bực tức trút giận qua hành vi đóng cửa."
            },
            {
                "element": "slammed",
                "role": "Action (Hành động sập cửa)",
                "explanation": "Hành vi dùng lực mạnh đóng cánh cửa."
            },
            {
                "element": "the heavy door",
                "role": "Patient (Vật bị đóng sập)",
                "explanation": "Cánh cửa nặng nề bị đóng sầm lại."
            },
            {
                "element": "angrily",
                "role": "Manner (Cách thức thái độ)",
                "explanation": "Thái độ tức giận khi thực hiện hành động."
            }
        ]
    }
},

  // ================= CÂU 47 =================
  {
    "id": 47,
    "title": "Câu 47: The diligent secretary drafted official reports. (Câu đúng chuẩn S - V - O)",
    "sentence": "The diligent secretary drafted official reports.",
    "translation": "Cô thư ký chăm chỉ đã soạn thảo các bản báo cáo chính thức.",
    "ipa": "/ðə ˈdɪlɪdʒənt ˈsɛkrəteri ˈdræftɪd əˈfɪʃl rɪˈpɔːrts/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "cô",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ thư ký."
        },
        {
            "index": 2,
            "word": "diligent",
            "lemma": "diligent",
            "ipa": "/ˈdɪlɪdʒənt/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "chăm chỉ",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ secretary."
        },
        {
            "index": 3,
            "word": "secretary",
            "lemma": "secretary",
            "ipa": "/ˈsɛkrəteri/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "thư ký",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động soạn thảo."
        },
        {
            "index": 4,
            "word": "drafted",
            "lemma": "draft",
            "ipa": "/ˈdræftɪd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã soạn thảo",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động soạn thảo văn bản trong quá khứ."
        },
        {
            "index": 5,
            "word": "official",
            "lemma": "official",
            "ipa": "/əˈfɪʃl/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "chính thức",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ reports."
        },
        {
            "index": 6,
            "word": "reports.",
            "lemma": "report",
            "ipa": "/rɪˈpɔːrts/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số nhiều",
            "meaning": "các bản báo cáo",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng được soạn thảo ra."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /     \\\n        The diligent secretary drafted      ADJ     NOUN\n                                             |        |\n                                          official reports"
        },
        "semanticRoles": [
            {
                "element": "The diligent secretary",
                "role": "Agent (Chủ thể soạn thảo)",
                "explanation": "Cô thư ký tận tụy là người trực tiếp thảo văn bản."
            },
            {
                "element": "drafted",
                "role": "Action / Creation (Hành vi viết/soạn thảo)",
                "explanation": "Hành vi khởi thảo các tài liệu công văn."
            },
            {
                "element": "official reports",
                "role": "Result / Theme (Văn bản tạo ra)",
                "explanation": "Các bản báo cáo hành chính chính thức là sản phẩm được tạo nên."
            }
        ]
    }
},

  // ================= CÂU 48 =================
  {
    "id": 48,
    "title": "Câu 48: A brilliant painting created the young artist. (Câu trật bánh) → Câu sửa chuẩn: The young artist created a brilliant painting.",
    "sentence": "The young artist created a brilliant painting.",
    "translation": "Họa sĩ trẻ tuổi đã sáng tạo ra một bức tranh tuyệt đẹp.",
    "ipa": "/ðə jʌŋ ˈɑːrtɪst kriˈeɪtɪd ə ˈbrɪliənt ˈpeɪntɪŋ/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object) [Đã khắc phục lỗi trật bánh logic]",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "người",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chủ ngữ."
        },
        {
            "index": 2,
            "word": "young",
            "lemma": "young",
            "ipa": "/jʌŋ/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "trẻ tuổi",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ artist."
        },
        {
            "index": 3,
            "word": "artist",
            "lemma": "artist",
            "ipa": "/ˈɑːrtɪst/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "họa sĩ",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động sáng tác."
        },
        {
            "index": 4,
            "word": "created",
            "lemma": "create",
            "ipa": "/kriˈeɪtɪd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã tạo ra, sáng tác",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động sáng tác trong quá khứ."
        },
        {
            "index": 5,
            "word": "a",
            "lemma": "a",
            "ipa": "/ə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ bất định",
            "meaning": "một",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ bất định đứng trước danh từ đếm được số ít."
        },
        {
            "index": 6,
            "word": "brilliant",
            "lemma": "brilliant",
            "ipa": "/ˈbrɪliənt/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "rực rỡ, xuất sắc",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ painting."
        },
        {
            "index": 7,
            "word": "painting.",
            "lemma": "painting",
            "ipa": "/ˈpeɪntɪŋ/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "bức tranh",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của cụm tân ngữ, đối tượng chịu tác động."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu chuẩn (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The  young artist       created     DET  ADJ NOUN\n                                             |    |    |\n                                             a brilliant painting"
        },
        "semanticRoles": [
            {
                "element": "The young artist",
                "role": "Agent / Creator (Tác giả hội họa)",
                "explanation": "Họa sĩ trẻ là người đích thân vẽ nên tác phẩm."
            },
            {
                "element": "created",
                "role": "Action / Creation (Hành vi sáng tạo nghệ thuật)",
                "explanation": "Quá trình thai nghén và vẽ tranh."
            },
            {
                "element": "a brilliant painting",
                "role": "Result / Theme (Kiệt tác hội họa)",
                "explanation": "Bức họa rực rỡ là thành quả nghệ thuật ra đời."
            }
        ]
    }
},

  // ================= CÂU 49 =================
  {
    "id": 49,
    "title": "Câu 49: The experienced captain navigated the large ship. (Câu đúng chuẩn S - V - O)",
    "sentence": "The experienced captain navigated the large ship.",
    "translation": "Vị thuyền trưởng dày dặn kinh nghiệm đã điều khiển con tàu lớn.",
    "ipa": "/ðə ɪkˈspɪriənst ˈkæptɪn ˈnævɪɡeɪtɪd ðə lɑːrdʒ ʃɪp/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "vị",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ thuyền trưởng."
        },
        {
            "index": 2,
            "word": "experienced",
            "lemma": "experience",
            "ipa": "/ɪkˈspɪriənst/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ phân từ",
            "meaning": "dày dặn kinh nghiệm",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ captain."
        },
        {
            "index": 3,
            "word": "captain",
            "lemma": "captain",
            "ipa": "/ˈkæptɪn/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "thuyền trưởng",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động điều khiển tàu."
        },
        {
            "index": 4,
            "word": "navigated",
            "lemma": "navigate",
            "ipa": "/ˈnævɪɡeɪtɪd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã lái, điều hướng",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động điều hướng tàu bè trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "chiếc",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ đối tượng."
        },
        {
            "index": 6,
            "word": "large",
            "lemma": "large",
            "ipa": "/lɑːrdʒ/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "lớn, to lớn",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ ship."
        },
        {
            "index": 7,
            "word": "ship.",
            "lemma": "ship",
            "ipa": "/ʃɪp/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "con tàu lớn",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động được điều khiển."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The experienced captain navigated   DET  ADJ NOUN\n                                             |    |    |\n                                            the large ship"
        },
        "semanticRoles": [
            {
                "element": "The experienced captain",
                "role": "Agent (Chủ thể hoa tiêu / thuyền trưởng)",
                "explanation": "Vị thuyền trưởng lão luyện là người trực tiếp cầm lái, chỉ huy hướng đi."
            },
            {
                "element": "navigated",
                "role": "Action (Hành động điều hướng hàng hải)",
                "explanation": "Hành vi vận hành, định hướng con tàu trên biển."
            },
            {
                "element": "the large ship",
                "role": "Patient / Theme (Phương tiện được điều khiển)",
                "explanation": "Con tàu lớn là phương tiện hàng hải chịu sự điều khiển."
            }
        ]
    }
},

  // ================= CÂU 50 =================
  {
    "id": 50,
    "title": "Câu 50: Quietly assembled the skilled mechanics the complex engine. (Câu trật bánh) → Câu sửa chuẩn: The skilled mechanics assembled the complex engine quietly.",
    "sentence": "The skilled mechanics assembled the complex engine quietly.",
    "translation": "Những người thợ máy lành nghề đã lắp ráp động cơ phức tạp một cách êm ái, tĩnh lặng.",
    "ipa": "/ðə skɪld məˈkænɪks əˈsɛmbəld ðə ˈkɑːmplɛks ˈɛndʒɪn ˈkwaɪətli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial) [Đã sửa lỗi đảo trật tự]",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "những",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ số nhiều."
        },
        {
            "index": 2,
            "word": "skilled",
            "lemma": "skill",
            "ipa": "/skɪld/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ phân từ",
            "meaning": "lành nghề",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ mechanics."
        },
        {
            "index": 3,
            "word": "mechanics",
            "lemma": "mechanic",
            "ipa": "/məˈkænɪks/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số nhiều",
            "meaning": "thợ máy",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động lắp ráp."
        },
        {
            "index": 4,
            "word": "assembled",
            "lemma": "assemble",
            "ipa": "/əˈsɛmbəld/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã lắp ráp",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính biểu thị hành động lắp ráp trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "cái",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ vật."
        },
        {
            "index": 6,
            "word": "complex",
            "lemma": "complex",
            "ipa": "/ˈkɑːmplɛks/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "phức tạp",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ engine."
        },
        {
            "index": 7,
            "word": "engine",
            "lemma": "engine",
            "ipa": "/ˈɛndʒɪn/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "động cơ",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động trực tiếp."
        },
        {
            "index": 8,
            "word": "quietly.",
            "lemma": "quietly",
            "ipa": "/ˈkwaɪətli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ chỉ cách thức",
            "meaning": "lặng lẽ, yên lặng",
            "syntacticRole": "Adverbial",
            "parentPhrase": "Trạng ngữ cuối câu",
            "grammarExplanation": "Trạng từ đứng cuối câu bổ nghĩa cho toàn bộ hành động của động từ assembled."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu chuẩn (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP\n              /    |    \\       |       |\n            DET   ADJ  NOUN     |      ADV\n             |     |     |      |       |\n            The skilled mechanics|   quietly\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /  |   \\\n                         assembled DET ADJ NOUN\n                                   |   |    |\n                                  the complex engine"
        },
        "semanticRoles": [
            {
                "element": "The skilled mechanics",
                "role": "Agent (Những người thợ kỹ thuật)",
                "explanation": "Đội ngũ thợ cơ khí tay nghề cao trực tiếp ráp máy."
            },
            {
                "element": "assembled",
                "role": "Action (Hành động lắp ráp)",
                "explanation": "Quá trình gắn kết các linh kiện cơ khí."
            },
            {
                "element": "the complex engine",
                "role": "Patient / Result (Hệ thống động cơ được ráp)",
                "explanation": "Bộ động cơ phức tạp là cỗ máy được lắp ráp thành hình."
            },
            {
                "element": "quietly",
                "role": "Manner (Cách thức thực hiện)",
                "explanation": "Quá trình làm việc diễn ra êm ả, không ồn ào."
            }
        ]
    }
},

  // ================= CÂU 51 =================
  {
    "id": 51,
    "title": "Câu 51: The senior manager approved the new budget. (Câu đúng chuẩn S - V - O)",
    "sentence": "The senior manager approved the new budget.",
    "translation": "Vị quản lý cấp cao đã phê duyệt bản ngân sách mới.",
    "ipa": "/ðə ˈsiːniər ˈmænɪdʒər əˈpruːvd ðə nuː ˈbʌdʒɪt/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "vị (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ quản lý."
        },
        {
            "index": 2,
            "word": "senior",
            "lemma": "senior",
            "ipa": "/ˈsiːniər/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "cấp cao, thâm niên",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ manager."
        },
        {
            "index": 3,
            "word": "manager",
            "lemma": "manager",
            "ipa": "/ˈmænɪdʒər/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "quản lý",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động phê duyệt."
        },
        {
            "index": 4,
            "word": "approved",
            "lemma": "approve",
            "ipa": "/əˈpruːvd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã phê duyệt",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động chấp thuận trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "bản (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ ngân sách."
        },
        {
            "index": 6,
            "word": "new",
            "lemma": "new",
            "ipa": "/nuː/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "mới",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ budget."
        },
        {
            "index": 7,
            "word": "budget.",
            "lemma": "budget",
            "ipa": "/ˈbʌdʒɪt/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "ngân sách",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động được phê duyệt."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The senior manager     approved     DET  ADJ NOUN\n                                             |    |    |\n                                            the  new budget"
        },
        "semanticRoles": [
            {
                "element": "The senior manager",
                "role": "Agent (Chủ thể phê duyệt)",
                "explanation": "Vị quản lý cấp cao có thẩm quyền quyết định và phê duyệt."
            },
            {
                "element": "approved",
                "role": "Action (Hành vi phê duyệt)",
                "explanation": "Quyết định thông qua kế hoạch tài chính trong quá khứ."
            },
            {
                "element": "the new budget",
                "role": "Theme / Patient (Kế hoạch ngân sách)",
                "explanation": "Bản dự toán ngân sách mới được ban giám đốc thông qua."
            }
        ]
    }
},

  // ================= CÂU 52 =================
  {
    "id": 52,
    "title": "Câu 52: A valuable painting stole the clever thief. (Câu trật bánh) → Câu sửa chuẩn: The clever thief stole a valuable painting.",
    "sentence": "The clever thief stole a valuable painting.",
    "translation": "Tên trộm ranh mãnh đã đánh cắp một bức tranh quý giá.",
    "ipa": "/ðə ˈklɛvər θiːf stoʊl ə ˈvæljuəbl ˈpeɪntɪŋ/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object) [Đã khắc phục lỗi trật bánh ngữ nghĩa]",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "tên (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ người."
        },
        {
            "index": 2,
            "word": "clever",
            "lemma": "clever",
            "ipa": "/ˈklɛvər/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "ranh mãnh, khéo léo",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ thief."
        },
        {
            "index": 3,
            "word": "thief",
            "lemma": "thief",
            "ipa": "/θiːf/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "tên trộm",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động ăn trộm."
        },
        {
            "index": 4,
            "word": "stole",
            "lemma": "steal",
            "ipa": "/stoʊl/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã đánh cắp",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động ăn trộm trong quá khứ (bất quy tắc: steal -> stole)."
        },
        {
            "index": 5,
            "word": "a",
            "lemma": "a",
            "ipa": "/ə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ bất định",
            "meaning": "một",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ bất định đứng trước danh từ đếm được số ít."
        },
        {
            "index": 6,
            "word": "valuable",
            "lemma": "valuable",
            "ipa": "/ˈvæljuəbl/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "có giá trị, quý giá",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ painting."
        },
        {
            "index": 7,
            "word": "painting.",
            "lemma": "painting",
            "ipa": "/ˈpeɪntɪŋ/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "bức tranh",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng bị đánh cắp."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu chuẩn (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The clever  thief        stole      DET  ADJ NOUN\n                                             |    |    |\n                                             a valuable painting"
        },
        "semanticRoles": [
            {
                "element": "The clever thief",
                "role": "Agent (Kẻ trộm / Chủ thể hành vi)",
                "explanation": "Tên trộm tinh khôn là kẻ chủ động đột nhập và lấy cắp tranh."
            },
            {
                "element": "stole",
                "role": "Action (Hành vi trộm cắp)",
                "explanation": "Hành vi chiếm đoạt tài sản phi pháp."
            },
            {
                "element": "a valuable painting",
                "role": "Patient / Theme (Bức tranh quý)",
                "explanation": "Bức họa đắt giá là tài sản nghệ thuật bị lấy đi."
            }
        ]
    }
},

  // ================= CÂU 53 =================
  {
    "id": 53,
    "title": "Câu 53: The dedicated nurse comforted the crying child. (Câu đúng chuẩn S - V - O)",
    "sentence": "The dedicated nurse comforted the crying child.",
    "translation": "Cô y tá tận tụy đã an ủi đứa trẻ đang khóc.",
    "ipa": "/ðə ˈdɛdɪkeɪtɪd nɜːrs ˈkʌmfərtɪd ðə ˈkraɪɪŋ tʃaɪld/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "cô (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ y tá."
        },
        {
            "index": 2,
            "word": "dedicated",
            "lemma": "dedicate",
            "ipa": "/ˈdɛdɪkeɪtɪd/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ phân từ",
            "meaning": "tận tụy, tận tâm",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ nurse."
        },
        {
            "index": 3,
            "word": "nurse",
            "lemma": "nurse",
            "ipa": "/nɜːrs/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "y tá, điều dưỡng",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động an ủi."
        },
        {
            "index": 4,
            "word": "comforted",
            "lemma": "comfort",
            "ipa": "/ˈkʌmfərtɪd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã an ủi, vỗ về",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động an ủi trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "đứa (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ trẻ em."
        },
        {
            "index": 6,
            "word": "crying",
            "lemma": "cry",
            "ipa": "/ˈkraɪɪŋ/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ phân từ",
            "meaning": "đang khóc",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ child."
        },
        {
            "index": 7,
            "word": "child.",
            "lemma": "child",
            "ipa": "/tʃaɪld/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "đứa trẻ",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động được vỗ về."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The dedicated nurse   comforted     DET  ADJ NOUN\n                                             |    |    |\n                                            the crying child"
        },
        "semanticRoles": [
            {
                "element": "The dedicated nurse",
                "role": "Agent (Chủ thể vỗ về / Y tá)",
                "explanation": "Cô y tá dịu dàng là người chủ động dỗ dành."
            },
            {
                "element": "comforted",
                "role": "Action (Hành động an ủi)",
                "explanation": "Cử chỉ xoa dịu nỗi sợ hãi hoặc đau đớn."
            },
            {
                "element": "the crying child",
                "role": "Experiencer / Beneficiary (Em bé được an ủi)",
                "explanation": "Đứa trẻ đang khóc mếu nhận được sự quan tâm ấm áp."
            }
        ]
    }
},

  // ================= CÂU 54 =================
  {
    "id": 54,
    "title": "Câu 54: Italian speaks the cheerful tourist fluently. (Câu trật bánh) → Câu sửa chuẩn: The cheerful tourist speaks Italian fluently.",
    "sentence": "The cheerful tourist speaks Italian fluently.",
    "translation": "Vị khách du lịch vui vẻ nói tiếng Ý rất trôi chảy.",
    "ipa": "/ðə ˈtʃɪrfəl ˈtʊrɪst spiːks ɪˈtæliən ˈfluːəntli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial) [Đã sửa lỗi đảo trật tự]",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "vị (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ du khách."
        },
        {
            "index": 2,
            "word": "cheerful",
            "lemma": "cheerful",
            "ipa": "/ˈtʃɪrfəl/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "vui vẻ, phấn khởi",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ tourist."
        },
        {
            "index": 3,
            "word": "tourist",
            "lemma": "tourist",
            "ipa": "/ˈtʊrɪst/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "khách du lịch",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động nói."
        },
        {
            "index": 4,
            "word": "speaks",
            "lemma": "speak",
            "ipa": "/spiːks/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Hiện tại đơn (Ngôi 3 số ít)",
            "meaning": "nói",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính diễn tả khả năng nói ngôn ngữ."
        },
        {
            "index": 5,
            "word": "Italian",
            "lemma": "Italian",
            "ipa": "/ɪˈtæliən/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ riêng",
            "meaning": "tiếng Ý",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, là ngôn ngữ được nói ra."
        },
        {
            "index": 6,
            "word": "fluently.",
            "lemma": "fluently",
            "ipa": "/ˈfluːəntli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ cách thức",
            "meaning": "trôi chảy, lưu loát",
            "syntacticRole": "Adverbial",
            "parentPhrase": "Trạng ngữ cuối câu",
            "grammarExplanation": "Trạng từ chỉ cách thức đứng cuối câu bổ nghĩa cho động từ speaks."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu chuẩn (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP\n              /    |    \\       |       |\n            DET   ADJ  NOUN     |      ADV\n             |     |     |      |       |\n            The cheerful tourist|   fluently\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |        |\n                           speaks   NOUN\n                                      |\n                                   Italian"
        },
        "semanticRoles": [
            {
                "element": "The cheerful tourist",
                "role": "Agent (Chủ thể phát ngôn)",
                "explanation": "Vị khách du lịch vui tính giao tiếp lưu loát bằng tiếng Ý."
            },
            {
                "element": "speaks",
                "role": "Action (Hành động nói)",
                "explanation": "Năng lực giao tiếp ngôn ngữ."
            },
            {
                "element": "Italian",
                "role": "Theme (Ngôn ngữ được nói)",
                "explanation": "Tiếng Ý là đối tượng của lời nói."
            },
            {
                "element": "fluently",
                "role": "Manner (Cách thức)",
                "explanation": "Độ trôi chảy, tự nhiên khi nói."
            }
        ]
    }
},

  // ================= CÂU 55 =================
  {
    "id": 55,
    "title": "Câu 55: The professional photographer captured stunning landscapes. (Câu đúng chuẩn S - V - O)",
    "sentence": "The professional photographer captured stunning landscapes.",
    "translation": "Nhiếp ảnh gia chuyên nghiệp đã chụp lại những phong cảnh đẹp tuyệt trần.",
    "ipa": "/ðə prəˈfɛʃənl fəˈtɑːɡrəfər ˈkæptʃərd ˈstʌnɪŋ ˈlændskeɪps/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "nhà (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ nhiếp ảnh gia."
        },
        {
            "index": 2,
            "word": "professional",
            "lemma": "professional",
            "ipa": "/prəˈfɛʃənl/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "chuyên nghiệp",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ photographer."
        },
        {
            "index": 3,
            "word": "photographer",
            "lemma": "photographer",
            "ipa": "/fəˈtɑːɡrəfər/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "nhiếp ảnh gia",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động chụp ảnh."
        },
        {
            "index": 4,
            "word": "captured",
            "lemma": "capture",
            "ipa": "/ˈkæptʃərd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã ghi lại, chụp lại",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động chụp ảnh trong quá khứ."
        },
        {
            "index": 5,
            "word": "stunning",
            "lemma": "stun",
            "ipa": "/ˈstʌnɪŋ/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "đẹp tuyệt trần, ấn tượng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ landscapes."
        },
        {
            "index": 6,
            "word": "landscapes.",
            "lemma": "landscape",
            "ipa": "/ˈlændskeɪps/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số nhiều",
            "meaning": "phong cảnh thiên nhiên",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động được ghi lại."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /     \\\n        The professional photographer captured ADJ  NOUN\n                                                |     |\n                                             stunning landscapes"
        },
        "semanticRoles": [
            {
                "element": "The professional photographer",
                "role": "Agent (Nhiếp ảnh gia / Nghệ sĩ ảnh)",
                "explanation": "Nhà nhiếp ảnh chuyên nghiệp trực tiếp bấm máy chụp cảnh quan."
            },
            {
                "element": "captured",
                "role": "Action / Creation (Hành động chụp/ghi hình)",
                "explanation": "Thao tác nhiếp ảnh bắt trọn khoảnh khắc ánh sáng."
            },
            {
                "element": "stunning landscapes",
                "role": "Theme / Stimulus (Cảnh quan thiên nhiên kỳ vĩ)",
                "explanation": "Những khung cảnh thiên nhiên tuyệt mỹ được lưu lại trong ống kính."
            }
        ]
    }
},

  // ================= CÂU 56 =================
  {
    "id": 56,
    "title": "Câu 56: Gracefully danced the elegant ballerina on stage. (Câu trật bánh) → Câu sửa chuẩn: The elegant ballerina danced gracefully on stage.",
    "sentence": "The elegant ballerina danced gracefully on stage.",
    "translation": "Nữ vũ công ba-lê thanh lịch đã múa một cách uyển chuyển trên sân khấu.",
    "ipa": "/ðə ˈɛlɪɡənt ˌbæləˈriːnə dænst ˈɡreɪsfʊli ɑːn steɪdʒ/",
    "structurePattern": "Mô hình S - V - A - A (Subject + Verb + Adverbial + Prepositional Adverbial) [Đã sửa lỗi đảo trật tự]",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "nữ (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ vũ công."
        },
        {
            "index": 2,
            "word": "elegant",
            "lemma": "elegant",
            "ipa": "/ˈɛlɪɡənt/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "thanh lịch, tao nhã",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ ballerina."
        },
        {
            "index": 3,
            "word": "ballerina",
            "lemma": "ballerina",
            "ipa": "/ˌbæləˈriːnə/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "nữ diễn viên múa ba-lê",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động múa."
        },
        {
            "index": 4,
            "word": "danced",
            "lemma": "dance",
            "ipa": "/dænst/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã múa, khiêu vũ",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính biểu thị hành động múa trong quá khứ."
        },
        {
            "index": 5,
            "word": "gracefully",
            "lemma": "gracefully",
            "ipa": "/ˈɡreɪsfʊli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ cách thức",
            "meaning": "uyển chuyển, duyên dáng",
            "syntacticRole": "Adverbial",
            "parentPhrase": "Trạng ngữ cách thức",
            "grammarExplanation": "Trạng từ bổ nghĩa cho động từ danced."
        },
        {
            "index": 6,
            "word": "on",
            "lemma": "on",
            "ipa": "/ɑːn/",
            "pos": "PREP",
            "pos_vi": "Giới từ",
            "morphology": "Giới từ chỉ vị trí",
            "meaning": "trên",
            "syntacticRole": "Preposition",
            "parentPhrase": "Cụm giới từ chỉ nơi chốn",
            "grammarExplanation": "Giới từ định vị không gian bề mặt."
        },
        {
            "index": 7,
            "word": "stage.",
            "lemma": "stage",
            "ipa": "/steɪdʒ/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "sân khấu",
            "syntacticRole": "Object of Preposition",
            "parentPhrase": "Cụm giới từ chỉ nơi chốn",
            "grammarExplanation": "Danh từ trung tâm đi sau giới từ on."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu chuẩn (S - P - Adv - PP):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      PP (Location)\n              /    |    \\       |      /      \\\n            DET   ADJ  NOUN     |    PREP      NP\n             |     |     |      |     |        |\n            The elegant ballerina     on     NOUN\n                                VP             |\n                              /    \\         stage\n                            VERB   AdvP\n                             |      |\n                           danced  ADV\n                                    |\n                                 gracefully"
        },
        "semanticRoles": [
            {
                "element": "The elegant ballerina",
                "role": "Agent (Nữ vũ công ba-lê)",
                "explanation": "Vũ công tài ba là người thực hiện từng vũ điệu uyển chuyển."
            },
            {
                "element": "danced",
                "role": "Action (Hành vi biểu diễn múa)",
                "explanation": "Động tác nghệ thuật hình thể múa ba-lê."
            },
            {
                "element": "gracefully",
                "role": "Manner (Cách thức thể hiện)",
                "explanation": "Đường nét múa mềm mại, thanh tao và điêu luyện."
            },
            {
                "element": "on stage",
                "role": "Location (Địa điểm sân khấu)",
                "explanation": "Nơi diễn ra buổi trình diễn nghệ thuật."
            }
        ]
    }
},

  // ================= CÂU 57 =================
  {
    "id": 57,
    "title": "Câu 57: The creative designer launched a unique collection. (Câu đúng chuẩn S - V - O)",
    "sentence": "The creative designer launched a unique collection.",
    "translation": "Nhà thiết kế sáng tạo đã ra mắt một bộ sưu tập độc đáo.",
    "ipa": "/ðə kriˈeɪtɪv dɪˈzaɪnər lɔːntʃt ə juˈniːk kəˈlɛkʃən/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "nhà (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ nhà thiết kế."
        },
        {
            "index": 2,
            "word": "creative",
            "lemma": "creative",
            "ipa": "/kriˈeɪtɪv/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "sáng tạo",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ designer."
        },
        {
            "index": 3,
            "word": "designer",
            "lemma": "designer",
            "ipa": "/dɪˈzaɪnər/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "nhà thiết kế",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động ra mắt."
        },
        {
            "index": 4,
            "word": "launched",
            "lemma": "launch",
            "ipa": "/lɔːntʃt/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã ra mắt, tung ra",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động ra mắt sản phẩm trong quá khứ."
        },
        {
            "index": 5,
            "word": "a",
            "lemma": "a",
            "ipa": "/ə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ bất định",
            "meaning": "một",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ bất định đứng trước danh từ đếm được số ít."
        },
        {
            "index": 6,
            "word": "unique",
            "lemma": "unique",
            "ipa": "/juˈniːk/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "độc đáo, độc nhất",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ collection."
        },
        {
            "index": 7,
            "word": "collection.",
            "lemma": "collection",
            "ipa": "/kəˈlɛkʃən/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "bộ sưu tập",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động được ra mắt."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The creative designer  launched     DET  ADJ NOUN\n                                             |    |    |\n                                             a  unique collection"
        },
        "semanticRoles": [
            {
                "element": "The creative designer",
                "role": "Agent (Nhà thiết kế sáng tạo)",
                "explanation": "Nhà thiết kế thời trang là tác giả cho ra mắt bộ sưu tập."
            },
            {
                "element": "launched",
                "role": "Action (Hành vi công bố / ra mắt)",
                "explanation": "Sự kiện trình làng dòng sản phẩm thời trang mới."
            },
            {
                "element": "a unique collection",
                "role": "Result / Theme (Bộ sưu tập thời trang độc đáo)",
                "explanation": "Bộ sưu tập mang phong cách riêng biệt được giới thiệu đến công chúng."
            }
        ]
    }
},

  // ================= CÂU 58 =================
  {
    "id": 58,
    "title": "Câu 58: A delicious recipe cooked the talented chef yesterday. (Câu trật bánh) → Câu sửa chuẩn: The talented chef cooked a delicious recipe yesterday.",
    "sentence": "The talented chef cooked a delicious recipe yesterday.",
    "translation": "Đầu bếp tài năng đã nấu một công thức món ăn ngon vào ngày hôm qua.",
    "ipa": "/ðə ˈtæləntɪd ʃef kʊkt ə dɪˈlɪʃəs ˈrɛsəpi ˈjɛstərdeɪ/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial) [Đã sửa lỗi trật bánh logic]",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "vị (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ đầu bếp."
        },
        {
            "index": 2,
            "word": "talented",
            "lemma": "talented",
            "ipa": "/ˈtæləntɪd/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "tài năng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ chef."
        },
        {
            "index": 3,
            "word": "chef",
            "lemma": "chef",
            "ipa": "/ʃef/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "đầu bếp",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động nấu ăn."
        },
        {
            "index": 4,
            "word": "cooked",
            "lemma": "cook",
            "ipa": "/kʊkt/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã nấu",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động nấu nướng trong quá khứ."
        },
        {
            "index": 5,
            "word": "a",
            "lemma": "a",
            "ipa": "/ə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ bất định",
            "meaning": "một",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ bất định đứng trước danh từ đếm được số ít."
        },
        {
            "index": 6,
            "word": "delicious",
            "lemma": "delicious",
            "ipa": "/dɪˈlɪʃəs/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "ngon",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ recipe."
        },
        {
            "index": 7,
            "word": "recipe",
            "lemma": "recipe",
            "ipa": "/ˈrɛsəpi/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "công thức nấu ăn",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của cụm tân ngữ, đối tượng chịu tác động."
        },
        {
            "index": 8,
            "word": "yesterday.",
            "lemma": "yesterday",
            "ipa": "/ˈjɛstərdeɪ/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ thời gian",
            "meaning": "ngày hôm qua",
            "syntacticRole": "Adverbial of Time",
            "parentPhrase": "Trạng ngữ chỉ thời gian",
            "grammarExplanation": "Trạng ngữ chỉ thời gian đứng cuối câu bổ nghĩa cho toàn mệnh đề."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu chuẩn (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP\n              /    |    \\       |       |\n            DET   ADJ  NOUN     |      ADV\n             |     |     |      |       |\n            The talented chef   |   yesterday\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /  |   \\\n                           cooked DET ADJ NOUN\n                                   |   |    |\n                                   a delicious recipe"
        },
        "semanticRoles": [
            {
                "element": "The talented chef",
                "role": "Agent (Đầu bếp tài hoa)",
                "explanation": "Đầu bếp là người trực tiếp trổ tài chế biến theo công thức."
            },
            {
                "element": "cooked",
                "role": "Action (Hành vi nấu ăn)",
                "explanation": "Thao tác đun nấu thực phẩm công phu."
            },
            {
                "element": "a delicious recipe",
                "role": "Theme / Result (Món ăn theo công thức ngon lành)",
                "explanation": "Món ăn ngon được nấu chuẩn vị theo công thức."
            },
            {
                "element": "yesterday",
                "role": "Time (Thời gian)",
                "explanation": "Mốc thời gian diễn ra vào ngày hôm qua."
            }
        ]
    }
},

  // ================= CÂU 59 =================
  {
    "id": 59,
    "title": "Câu 59: The rigorous scientists conducted complex experiments. (Câu đúng chuẩn S - V - O)",
    "sentence": "The rigorous scientists conducted complex experiments.",
    "translation": "Những nhà khoa học nghiêm ngặt đã tiến hành các thí nghiệm phức tạp.",
    "ipa": "/ðə ˈrɪɡərəs ˈsaɪəntɪsts kənˈdʌktɪd ˈkɑːmplɛks ɪkˈspɛrɪmənts/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "những (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ số nhiều nhà khoa học."
        },
        {
            "index": 2,
            "word": "rigorous",
            "lemma": "rigorous",
            "ipa": "/ˈrɪɡərəs/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "nghiêm ngặt, khắt khe",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ scientists."
        },
        {
            "index": 3,
            "word": "scientists",
            "lemma": "scientist",
            "ipa": "/ˈsaɪəntɪsts/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số nhiều",
            "meaning": "các nhà khoa học",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động tiến hành."
        },
        {
            "index": 4,
            "word": "conducted",
            "lemma": "conduct",
            "ipa": "/kənˈdʌktɪd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã tiến hành, thực hiện",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động thực hiện thí nghiệm trong quá khứ."
        },
        {
            "index": 5,
            "word": "complex",
            "lemma": "complex",
            "ipa": "/ˈkɑːmplɛks/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "phức tạp",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ experiments."
        },
        {
            "index": 6,
            "word": "experiments.",
            "lemma": "experiment",
            "ipa": "/ɪkˈspɛrɪmənts/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số nhiều",
            "meaning": "các thí nghiệm",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng được thực hiện."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /     \\\n        The rigorous scientists conducted   ADJ     NOUN\n                                             |        |\n                                          complex experiments"
        },
        "semanticRoles": [
            {
                "element": "The rigorous scientists",
                "role": "Agent (Các nhà khoa học cẩn trọng)",
                "explanation": "Nhóm nghiên cứu khoa học làm việc với quy trình nghiêm ngặt."
            },
            {
                "element": "conducted",
                "role": "Action (Hành vi tiến hành nghiên cứu)",
                "explanation": "Quá trình thực nghiệm trong phòng lab."
            },
            {
                "element": "complex experiments",
                "role": "Theme / Patient (Các thí nghiệm khoa học)",
                "explanation": "Các bài thí nghiệm phức tạp được vận hành."
            }
        ]
    }
},

  // ================= CÂU 60 =================
  {
    "id": 60,
    "title": "Câu 60: Quietly entered the masked intruder the room. (Câu trật bánh) → Câu sửa chuẩn: The masked intruder entered the room quietly.",
    "sentence": "The masked intruder entered the room quietly.",
    "translation": "Kẻ đột nhập đeo mặt nạ đã bước vào căn phòng một cách lặng lẽ.",
    "ipa": "/ðə mæskt ɪnˈtruːdər ˈɛntərd ðə ruːm ˈkwaɪətli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial) [Đã sửa lỗi đảo trật tự]",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "kẻ (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chủ ngữ."
        },
        {
            "index": 2,
            "word": "masked",
            "lemma": "mask",
            "ipa": "/mæskt/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ phân từ",
            "meaning": "đeo mặt nạ",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ intruder."
        },
        {
            "index": 3,
            "word": "intruder",
            "lemma": "intruder",
            "ipa": "/ɪnˈtruːdər/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "kẻ đột nhập",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, chủ thể thực hiện hành động bước vào."
        },
        {
            "index": 4,
            "word": "entered",
            "lemma": "enter",
            "ipa": "/ˈɛntərd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã bước vào",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính biểu thị hành động bước vào trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "căn (xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ phòng."
        },
        {
            "index": 6,
            "word": "room",
            "lemma": "room",
            "ipa": "/ruːm/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "phòng",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object Phrase)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động trực tiếp của hành động bước vào."
        },
        {
            "index": 7,
            "word": "quietly.",
            "lemma": "quietly",
            "ipa": "/ˈkwaɪətli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ chỉ cách thức",
            "meaning": "lặng lẽ, không tiếng động",
            "syntacticRole": "Adverbial",
            "parentPhrase": "Trạng ngữ cuối câu",
            "grammarExplanation": "Trạng từ đứng cuối câu bổ nghĩa cho toàn bộ hành động của động từ entered."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu chuẩn (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP\n              /    |    \\       |       |\n            DET   ADJ  NOUN     |      ADV\n             |     |     |      |       |\n            The  masked intruder|    quietly\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /     \\\n                          entered DET   NOUN\n                                   |      |\n                                  the    room"
        },
        "semanticRoles": [
            {
                "element": "The masked intruder",
                "role": "Agent (Kẻ đột nhập bịt mặt)",
                "explanation": "Kẻ lạ mặt đeo mặt nạ lén lút bước vào nhà."
            },
            {
                "element": "entered",
                "role": "Action (Hành động xâm nhập)",
                "explanation": "Hành vi đi vào không gian phòng ốc."
            },
            {
                "element": "the room",
                "role": "Location / Patient (Căn phòng bị đột nhập)",
                "explanation": "Không gian bị kẻ xâm nhập bước vào."
            },
            {
                "element": "quietly",
                "role": "Manner (Cách thức di chuyển)",
                "explanation": "Bước chân êm nhẹ, tuyệt đối không gây tiếng động."
            }
        ]
    }
},

  // ================= CÂU 61 =================
  {
    "id": 61,
    "title": "Câu 61: The clever student solved the difficult puzzle.",
    "sentence": "The clever student solved the difficult puzzle.",
    "translation": "Cậu học sinh thông minh đã giải được câu đố khó.",
    "ipa": "/ðə ˈklɛvər ˈstuːdənt sɑːlvd ðə ˈdɪfɪkəlt ˈpʌzəl/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ học sinh."
        },
        {
            "index": 2,
            "word": "clever",
            "lemma": "clever",
            "ipa": "/ˈklɛvər/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "thông minh",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ student."
        },
        {
            "index": 3,
            "word": "student",
            "lemma": "student",
            "ipa": "/ˈstuːdənt/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "học sinh",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động giải."
        },
        {
            "index": 4,
            "word": "solved",
            "lemma": "solve",
            "ipa": "/sɑːlvd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã giải quyết",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động giải quyết trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ câu đố."
        },
        {
            "index": 6,
            "word": "difficult",
            "lemma": "difficult",
            "ipa": "/ˈdɪfɪkəlt/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "khó",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ puzzle."
        },
        {
            "index": 7,
            "word": "puzzle.",
            "lemma": "puzzle",
            "ipa": "/ˈpʌzəl/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "câu đố",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng bị giải."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The clever student      solved      DET  ADJ NOUN\n                                             |    |    |\n                                            the difficult puzzle"
        },
        "semanticRoles": [
            {
                "element": "The clever student",
                "role": "Agent (Chủ thể tư duy / Người giải)",
                "explanation": "Cậu học sinh thông minh là người suy nghĩ và tìm ra lời giải."
            },
            {
                "element": "solved",
                "role": "Action (Hành vi giải đố)",
                "explanation": "Quá trình tư duy logic tìm ra đáp án câu đố."
            },
            {
                "element": "the difficult puzzle",
                "role": "Patient / Theme (Câu đố hóc búa)",
                "explanation": "Câu đố khó khăn là đối tượng thử thách đã được hóa giải."
            }
        ]
    }
},

  // ================= CÂU 62 =================
  {
    "id": 62,
    "title": "Câu 62: The tired worker finished the important report.",
    "sentence": "The tired worker finished the important report.",
    "translation": "Người công nhân mệt mỏi đã hoàn thành bản báo cáo quan trọng.",
    "ipa": "/ðə ˈtaɪərd ˈwɜːrkər ˈfɪnɪʃt ðə ɪmˈpɔːrtənt rɪˈpɔːrt/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ công nhân."
        },
        {
            "index": 2,
            "word": "tired",
            "lemma": "tire",
            "ipa": "/ˈtaɪərd/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Quá khứ phân từ dùng như tính từ",
            "meaning": "mệt mỏi",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ phân từ đứng trước bổ nghĩa cho worker."
        },
        {
            "index": 3,
            "word": "worker",
            "lemma": "worker",
            "ipa": "/ˈwɜːrkər/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "công nhân",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động hoàn thành."
        },
        {
            "index": 4,
            "word": "finished",
            "lemma": "finish",
            "ipa": "/ˈfɪnɪʃt/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã hoàn thành",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động hoàn thành trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ báo cáo."
        },
        {
            "index": 6,
            "word": "important",
            "lemma": "important",
            "ipa": "/ɪmˈpɔːrtənt/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "quan trọng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ report."
        },
        {
            "index": 7,
            "word": "report.",
            "lemma": "report",
            "ipa": "/rɪˈpɔːrt/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "bản báo cáo",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng được hoàn thành."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The  tired worker       finished    DET  ADJ NOUN\n                                             |    |    |\n                                            the important report"
        },
        "semanticRoles": [
            {
                "element": "The tired worker",
                "role": "Agent / Experiencer (Người lao động mệt mỏi)",
                "explanation": "Người công nhân dù kiệt sức nhưng vẫn nỗ lực hoàn thành công việc."
            },
            {
                "element": "finished",
                "role": "Action (Hành động hoàn tất)",
                "explanation": "Công việc đã được khép lại trọn vẹn trong quá khứ."
            },
            {
                "element": "the important report",
                "role": "Result / Patient (Bản báo cáo trọng yếu)",
                "explanation": "Bản báo cáo quan trọng đã được viết và hoàn thiện xong."
            }
        ]
    }
},

  // ================= CÂU 63 =================
  {
    "id": 63,
    "title": "Câu 63: The young chef cooked a delicious meal.",
    "sentence": "The young chef cooked a delicious meal.",
    "translation": "Người đầu bếp trẻ tuổi đã nấu một bữa ăn ngon miệng.",
    "ipa": "/ðə jʌŋ ʃɛf kʊkt ə dɪˈlɪʃəs miːl/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ đầu bếp."
        },
        {
            "index": 2,
            "word": "young",
            "lemma": "young",
            "ipa": "/jʌŋ/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "trẻ tuổi",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ chef."
        },
        {
            "index": 3,
            "word": "chef",
            "lemma": "chef",
            "ipa": "/ʃɛf/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "đầu bếp",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động nấu."
        },
        {
            "index": 4,
            "word": "cooked",
            "lemma": "cook",
            "ipa": "/kʊkt/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã nấu",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động nấu trong quá khứ."
        },
        {
            "index": 5,
            "word": "a",
            "lemma": "a",
            "ipa": "/ə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ bất định",
            "meaning": "một",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Mạo từ bất định đứng trước danh từ chỉ bữa ăn."
        },
        {
            "index": 6,
            "word": "delicious",
            "lemma": "delicious",
            "ipa": "/dɪˈlɪʃəs/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "ngon",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ meal."
        },
        {
            "index": 7,
            "word": "meal.",
            "lemma": "meal",
            "ipa": "/miːl/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "bữa ăn",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng chịu tác động được nấu."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The  young  chef        cooked      DET  ADJ NOUN\n                                             |    |    |\n                                             a delicious meal"
        },
        "semanticRoles": [
            {
                "element": "The young chef",
                "role": "Agent / Creator (Đầu bếp trẻ tuổi)",
                "explanation": "Đầu bếp trẻ là người trực tiếp vào bếp chế biến thức ăn."
            },
            {
                "element": "cooked",
                "role": "Action / Creation (Hành vi nấu nướng)",
                "explanation": "Quá trình làm chín và nêm nếm thực phẩm."
            },
            {
                "element": "a delicious meal",
                "role": "Result / Theme (Bữa ăn thịnh soạn)",
                "explanation": "Bữa cơm thơm ngon là thành quả mỹ mãn sau khi nấu."
            }
        ]
    }
},

  // ================= CÂU 64 =================
  {
    "id": 64,
    "title": "Câu 64: The local police caught the dangerous thief.",
    "sentence": "The local police caught the dangerous thief.",
    "translation": "Lực lượng cảnh sát địa phương đã bắt được tên trộm nguy hiểm.",
    "ipa": "/ðə ˈloʊkəl pəˈliːs kɔːt ðə ˈdeɪndʒərəs θiːf/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ cảnh sát."
        },
        {
            "index": 2,
            "word": "local",
            "lemma": "local",
            "ipa": "/ˈloʊkəl/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "địa phương",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ police."
        },
        {
            "index": 3,
            "word": "police",
            "lemma": "police",
            "ipa": "/pəˈliːs/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ tập hợp (dùng số nhiều về nghĩa)",
            "meaning": "lực lượng cảnh sát",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động bắt."
        },
        {
            "index": 4,
            "word": "caught",
            "lemma": "catch",
            "ipa": "/kɔːt/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã bắt",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động bắt giữ trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ tên trộm."
        },
        {
            "index": 6,
            "word": "dangerous",
            "lemma": "dangerous",
            "ipa": "/ˈdeɪndʒərəs/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "nguy hiểm",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ thief."
        },
        {
            "index": 7,
            "word": "thief.",
            "lemma": "thief",
            "ipa": "/θiːf/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "tên trộm",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng bị bắt."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The  local police        caught     DET  ADJ NOUN\n                                             |    |    |\n                                            the dangerous thief"
        },
        "semanticRoles": [
            {
                "element": "The local police",
                "role": "Agent (Lực lượng cảnh sát)",
                "explanation": "Các chiến sĩ công an địa phương thực hiện nghiệp vụ vây bắt tội phạm."
            },
            {
                "element": "caught",
                "role": "Action (Hành vi khống chế / bắt giữ)",
                "explanation": "Hành vi tra tay vào còng số 8 bắt giữ can phạm."
            },
            {
                "element": "the dangerous thief",
                "role": "Patient (Tên trộm nguy hiểm)",
                "explanation": "Kẻ gian manh nguy hiểm là đối tượng bị tóm gọn."
            }
        ]
    }
},

  // ================= CÂU 65 =================
  {
    "id": 65,
    "title": "Câu 65: The bright student wrote a wonderful essay.",
    "sentence": "The bright student wrote a wonderful essay.",
    "translation": "Cậu học sinh sáng dạ đã viết một bài luận tuyệt vời.",
    "ipa": "/ðə braɪt ˈstuːdənt roʊt ə ˈwʌndərfʊl ˈɛseɪ/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ học sinh."
        },
        {
            "index": 2,
            "word": "bright",
            "lemma": "bright",
            "ipa": "/braɪt/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "sáng dạ, thông minh",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ student."
        },
        {
            "index": 3,
            "word": "student",
            "lemma": "student",
            "ipa": "/ˈstuːdənt/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "học sinh",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động viết."
        },
        {
            "index": 4,
            "word": "wrote",
            "lemma": "write",
            "ipa": "/roʊt/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã viết",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động viết trong quá khứ."
        },
        {
            "index": 5,
            "word": "a",
            "lemma": "a",
            "ipa": "/ə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ bất định",
            "meaning": "một",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Mạo từ bất định đứng trước danh từ chỉ bài luận."
        },
        {
            "index": 6,
            "word": "wonderful",
            "lemma": "wonderful",
            "ipa": "/ˈwʌndərfʊl/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "tuyệt vời",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ essay."
        },
        {
            "index": 7,
            "word": "essay.",
            "lemma": "essay",
            "ipa": "/ˈɛseɪ/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "bài luận",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng được viết ra."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The  bright student       wrote     DET  ADJ NOUN\n                                             |    |    |\n                                             a wonderful essay"
        },
        "semanticRoles": [
            {
                "element": "The bright student",
                "role": "Agent / Author (Tác giả bài luận)",
                "explanation": "Học sinh sáng dạ là người chấp bút sáng tạo tác phẩm."
            },
            {
                "element": "wrote",
                "role": "Action / Creation (Hành vi viết bài)",
                "explanation": "Quá trình viết chữ và lập luận văn bản."
            },
            {
                "element": "a wonderful essay",
                "role": "Result / Theme (Bài luận văn xuất sắc)",
                "explanation": "Bài văn tuyệt vời ra đời dưới ngòi bút của học sinh."
            }
        ]
    }
},

  // ================= CÂU 66 =================
  {
    "id": 66,
    "title": "Câu 66: The friendly doctor helped the injured child.",
    "sentence": "The friendly doctor helped the injured child.",
    "translation": "Bác sĩ thân thiện đã giúp đỡ đứa trẻ bị thương.",
    "ipa": "/ðə ˈfrɛndli ˈdɑːktər hɛlpt ðə ˈɪndʒərd tʃaɪld/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ bác sĩ."
        },
        {
            "index": 2,
            "word": "friendly",
            "lemma": "friendly",
            "ipa": "/ˈfrɛndli/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "thân thiện",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ doctor."
        },
        {
            "index": 3,
            "word": "doctor",
            "lemma": "doctor",
            "ipa": "/ˈdɑːktər/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "bác sĩ",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động giúp đỡ."
        },
        {
            "index": 4,
            "word": "helped",
            "lemma": "help",
            "ipa": "/hɛlpt/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã giúp đỡ",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động giúp đỡ trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ đứa trẻ."
        },
        {
            "index": 6,
            "word": "injured",
            "lemma": "injure",
            "ipa": "/ˈɪndʒərd/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Quá khứ phân từ dùng như tính từ",
            "meaning": "bị thương",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Tính từ phân từ đứng trước bổ nghĩa cho child."
        },
        {
            "index": 7,
            "word": "child.",
            "lemma": "child",
            "ipa": "/tʃaɪld/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "đứa trẻ",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng được giúp đỡ."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The friendly doctor      helped     DET  ADJ NOUN\n                                             |    |    |\n                                            the injured child"
        },
        "semanticRoles": [
            {
                "element": "The friendly doctor",
                "role": "Agent (Bác sĩ nhân hậu)",
                "explanation": "Người thầy thuốc giàu lòng trắc ẩn cứu chữa bệnh nhân."
            },
            {
                "element": "helped",
                "role": "Action (Hành động cứu chữa)",
                "explanation": "Biện pháp y tế sơ cứu điều trị vết thương."
            },
            {
                "element": "the injured child",
                "role": "Beneficiary / Patient (Bệnh nhi bị đau)",
                "explanation": "Đứa trẻ bị đau nhận được sự chăm sóc y tế tận tình."
            }
        ]
    }
},

  // ================= CÂU 67 =================
  {
    "id": 67,
    "title": "Câu 67: The old musician played a sweet melody.",
    "sentence": "The old musician played a sweet melody.",
    "translation": "Người nhạc sĩ già đã chơi một giai điệu ngọt ngào.",
    "ipa": "/ðə oʊld mjuˈzɪʃən pleɪd ə swiːt ˈmɛlədi/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ nhạc sĩ."
        },
        {
            "index": 2,
            "word": "old",
            "lemma": "old",
            "ipa": "/oʊld/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "lớn tuổi, già",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ musician."
        },
        {
            "index": 3,
            "word": "musician",
            "lemma": "musician",
            "ipa": "/mjuˈzɪʃən/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "nhạc sĩ",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động chơi nhạc."
        },
        {
            "index": 4,
            "word": "played",
            "lemma": "play",
            "ipa": "/pleɪd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã chơi (nhạc)",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động biểu diễn trong quá khứ."
        },
        {
            "index": 5,
            "word": "a",
            "lemma": "a",
            "ipa": "/ə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ bất định",
            "meaning": "một",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Mạo từ bất định đứng trước danh từ chỉ giai điệu."
        },
        {
            "index": 6,
            "word": "sweet",
            "lemma": "sweet",
            "ipa": "/swiːt/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "ngọt ngào",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ melody."
        },
        {
            "index": 7,
            "word": "melody.",
            "lemma": "melody",
            "ipa": "/ˈmɛlədi/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "giai điệu",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng được tạo ra."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The   old  musician     played      DET  ADJ NOUN\n                                             |    |    |\n                                             a   sweet melody"
        },
        "semanticRoles": [
            {
                "element": "The old musician",
                "role": "Agent (Nghệ sĩ lão thành)",
                "explanation": "Nhạc công già dặn kinh nghiệm cất lên tiếng đàn say đắm."
            },
            {
                "element": "played",
                "role": "Action (Hành vi biểu diễn âm nhạc)",
                "explanation": "Thao tác chơi nhạc cụ réo rắt."
            },
            {
                "element": "a sweet melody",
                "role": "Theme / Creation (Khúc nhạc ngọt ngào)",
                "explanation": "Giai điệu êm ái lan tỏa làm say đắm lòng người."
            }
        ]
    }
},

  // ================= CÂU 68 =================
  {
    "id": 68,
    "title": "Câu 68: The angry manager canceled the important meeting.",
    "sentence": "The angry manager canceled the important meeting.",
    "translation": "Người quản lý tức giận đã hủy bỏ cuộc họp quan trọng.",
    "ipa": "/ðə ˈæŋɡri ˈmænɪdʒər ˈkænsəld ðə ɪmˈpɔːrtənt ˈmiːtɪŋ/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ giám đốc."
        },
        {
            "index": 2,
            "word": "angry",
            "lemma": "angry",
            "ipa": "/ˈæŋɡri/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "tức giận",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ manager."
        },
        {
            "index": 3,
            "word": "manager",
            "lemma": "manager",
            "ipa": "/ˈmænɪdʒər/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "giám đốc, quản lý",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động hủy."
        },
        {
            "index": 4,
            "word": "canceled",
            "lemma": "cancel",
            "ipa": "/ˈkænsəld/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã hủy",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động hủy bỏ trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ cuộc họp."
        },
        {
            "index": 6,
            "word": "important",
            "lemma": "important",
            "ipa": "/ɪmˈpɔːrtənt/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "quan trọng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ meeting."
        },
        {
            "index": 7,
            "word": "meeting.",
            "lemma": "meeting",
            "ipa": "/ˈmiːtɪŋ/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "cuộc họp",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng bị hủy."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The  angry manager     canceled     DET  ADJ NOUN\n                                             |    |    |\n                                            the important meeting"
        },
        "semanticRoles": [
            {
                "element": "The angry manager",
                "role": "Agent / Experiencer (Vị quản lý nóng nảy)",
                "explanation": "Người đứng đầu đang trong cơn giận dữ đã ra quyết định bãi bỏ lịch trình."
            },
            {
                "element": "canceled",
                "role": "Action (Hành vi hủy bỏ)",
                "explanation": "Quyết định đình chỉ không tổ chức sự kiện."
            },
            {
                "element": "the important meeting",
                "role": "Patient / Theme (Cuộc họp quan trọng)",
                "explanation": "Phiên họp trọng thể bị bãi bỏ."
            }
        ]
    }
},

  // ================= CÂU 69 =================
  {
    "id": 69,
    "title": "Câu 69: The quiet librarian organized the old books.",
    "sentence": "The quiet librarian organized the old books.",
    "translation": "Người thủ thư trầm tính đã sắp xếp lại những cuốn sách cũ.",
    "ipa": "/ðə ˈkwaɪət laɪˈbrɛriən ˈɔːrɡənaɪzd ðə oʊld bʊks/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ thủ thư."
        },
        {
            "index": 2,
            "word": "quiet",
            "lemma": "quiet",
            "ipa": "/ˈkwaɪət/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "trầm tính, yên lặng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ librarian."
        },
        {
            "index": 3,
            "word": "librarian",
            "lemma": "librarian",
            "ipa": "/laɪˈbrɛriən/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "thủ thư",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động sắp xếp."
        },
        {
            "index": 4,
            "word": "organized",
            "lemma": "organize",
            "ipa": "/ˈɔːrɡənaɪzd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã sắp xếp",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động sắp xếp trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ sách."
        },
        {
            "index": 6,
            "word": "old",
            "lemma": "old",
            "ipa": "/oʊld/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "cũ",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ books."
        },
        {
            "index": 7,
            "word": "books.",
            "lemma": "book",
            "ipa": "/bʊks/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số nhiều",
            "meaning": "những cuốn sách",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng bị tác động sắp xếp."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The  quiet librarian   organized    DET  ADJ NOUN\n                                             |    |    |\n                                            the  old  books"
        },
        "semanticRoles": [
            {
                "element": "The quiet librarian",
                "role": "Agent (Người thủ thư thầm lặng)",
                "explanation": "Nhân viên quản thủ thư viện làm việc cẩn trọng, ngăn nắp."
            },
            {
                "element": "organized",
                "role": "Action (Hành vi xếp đặt / Phân loại)",
                "explanation": "Công việc phân loại và kê đặt sách lên kệ."
            },
            {
                "element": "the old books",
                "role": "Patient (Những cuốn sách xưa cũ)",
                "explanation": "Các tài liệu cổ kính được chỉnh trang vào đúng vị trí."
            }
        ]
    }
},

  // ================= CÂU 70 =================
  {
    "id": 70,
    "title": "Câu 70: The brave firefighter rescued the trapped cat quickly.",
    "sentence": "The brave firefighter rescued the trapped cat quickly.",
    "translation": "Người lính cứu hỏa dũng cảm đã nhanh chóng giải cứu chú mèo bị mắc kẹt.",
    "ipa": "/ðə breɪv ˈfaɪərˌfaɪtər ˈrɛskjuːd ðə træpt kæt ˈkwɪkli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ lính cứu hỏa."
        },
        {
            "index": 2,
            "word": "brave",
            "lemma": "brave",
            "ipa": "/breɪv/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "dũng cảm",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ firefighter."
        },
        {
            "index": 3,
            "word": "firefighter",
            "lemma": "firefighter",
            "ipa": "/ˈfaɪərˌfaɪtər/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "lính cứu hỏa",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm của chủ ngữ, thực hiện hành động giải cứu."
        },
        {
            "index": 4,
            "word": "rescued",
            "lemma": "rescue",
            "ipa": "/ˈrɛskjuːd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã giải cứu",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động giải cứu trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ chú mèo."
        },
        {
            "index": 6,
            "word": "trapped",
            "lemma": "trap",
            "ipa": "/træpt/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Quá khứ phân từ dùng như tính từ",
            "meaning": "bị mắc kẹt",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Tính từ phân từ đứng trước bổ nghĩa cho cat."
        },
        {
            "index": 7,
            "word": "cat",
            "lemma": "cat",
            "ipa": "/kæt/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "con mèo",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ, đối tượng được giải cứu."
        },
        {
            "index": 8,
            "word": "quickly.",
            "lemma": "quick",
            "ipa": "/ˈkwɪkli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ cách thức",
            "meaning": "nhanh chóng",
            "syntacticRole": "Adjunct (A)",
            "parentPhrase": "Cụm trạng ngữ",
            "grammarExplanation": "Trạng từ đứng cuối câu bổ nghĩa cho hành động của động từ rescued."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng của câu (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP\n              /    |    \\       |       |\n            DET   ADJ  NOUN     |      ADV\n             |     |     |      |       |\n            The  brave firefighter|  quickly\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /  |   \\\n                          rescued DET ADJ NOUN\n                                   |   |    |\n                                  the trapped cat"
        },
        "semanticRoles": [
            {
                "element": "The brave firefighter",
                "role": "Agent (Người lính cứu hỏa can trường)",
                "explanation": "Chiến sĩ cứu hỏa dũng cảm bất chấp hiểm nguy cứu sinh mạng."
            },
            {
                "element": "rescued",
                "role": "Action (Hành vi cứu nạn)",
                "explanation": "Thao tác ứng cứu, giải thoát khỏi điểm kẹt."
            },
            {
                "element": "the trapped cat",
                "role": "Patient / Beneficiary (Chú mèo gặp nạn)",
                "explanation": "Sinh linh bé nhỏ bị mắc kẹt được đưa đến nơi an toàn."
            },
            {
                "element": "quickly",
                "role": "Manner (Tác phong thần tốc)",
                "explanation": "Thao tác cứu hộ chuẩn xác và chớp nhoáng."
            }
        ]
    }
},

  // ================= CÂU 71 =================
  {
    "id": 71,
    "title": "Câu 71: The talented dancer performed the song smoothly.",
    "sentence": "The talented dancer performed the song smoothly.",
    "translation": "Vũ công tài năng đã biểu diễn bài hát một cách mượt mà.",
    "ipa": "/ðə ˈtæləntɪd ˈdænsər pərˈfɔːrmd ðə sɔːŋ ˈsmuːðli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ vũ công; cấp độ từ làm Determiner trong Subject NP."
        },
        {
            "index": 2,
            "word": "talented",
            "lemma": "talented",
            "ipa": "/ˈtæləntɪd/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "tài năng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ đứng trước bổ nghĩa cho danh từ dancer; cấp độ từ làm Modifier trong Subject NP."
        },
        {
            "index": 3,
            "word": "dancer",
            "lemma": "dancer",
            "ipa": "/ˈdænsər/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "vũ công",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm (Head Noun) của Subject NP, chủ thể thực hiện hành động biểu diễn."
        },
        {
            "index": 4,
            "word": "performed",
            "lemma": "perform",
            "ipa": "/pərˈfɔːrmd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã biểu diễn",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính (Head Verb của VP) diễn tả hành động trình diễn trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Mạo từ xác định đứng trước danh từ chỉ bài hát; làm Determiner trong Object NP."
        },
        {
            "index": 6,
            "word": "song",
            "lemma": "song",
            "ipa": "/sɔːŋ/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "bài hát, tiết mục",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm của tân ngữ trực tiếp (Head Noun của DO NP), đối tượng được trình diễn."
        },
        {
            "index": 7,
            "word": "smoothly.",
            "lemma": "smoothly",
            "ipa": "/ˈsmuːðli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ chỉ cách thức (-ly phái sinh)",
            "meaning": "mượt mà, êm ái",
            "syntacticRole": "Adjunct (A)",
            "parentPhrase": "Mệnh đề chính (Main Clause / VP Modifier)",
            "grammarExplanation": "Trạng từ chỉ cách thức (Adverbial Adjunct) đứng cuối câu, bổ nghĩa cho động từ performed."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng chuẩn học thuật (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP (Adjunct)\n              /    |    \\       |            |\n            DET   ADJ  NOUN     |           ADV\n             |     |     |      |            |\n            The talented dancer |         smoothly\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /     \\\n                         performed DET   NOUN\n                                   |       |\n                                  the    song"
        },
        "semanticRoles": [
            {
                "element": "The talented dancer",
                "role": "Agent (Vũ công tài ba)",
                "explanation": "Nghệ sĩ múa thực hiện bài biểu diễn với kỹ thuật điêu luyện."
            },
            {
                "element": "performed",
                "role": "Action (Hành động trình diễn)",
                "explanation": "Động tác diễn xuất nghệ thuật trên sân khấu."
            },
            {
                "element": "the song",
                "role": "Theme / Patient (Tiết mục / Bài hát)",
                "explanation": "Tác phẩm âm nhạc được dàn dựng biểu diễn."
            },
            {
                "element": "smoothly",
                "role": "Manner (Cách thức mượt mà)",
                "explanation": "Độ trôi chảy, không chút vấp váp trong từng động tác."
            }
        ]
    }
},

  // ================= CÂU 72 =================
  {
    "id": 72,
    "title": "Câu 72: The skilled surgeon operated the modern machine carefully.",
    "sentence": "The skilled surgeon operated the modern machine carefully.",
    "translation": "Bác sĩ phẫu thuật lành nghề đã vận hành cỗ máy hiện đại một cách cẩn thận.",
    "ipa": "/ðə skɪld ˈsɜːrdʒən ˈɑːpəreɪtɪd ðə ˈmɑːdərn məˈʃiːn ˈkɛrfəli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định làm Determiner trong Subject NP."
        },
        {
            "index": 2,
            "word": "skilled",
            "lemma": "skilled",
            "ipa": "/skɪld/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ phân từ",
            "meaning": "lành nghề, điêu luyện",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ làm Modifier bổ nghĩa cho danh từ surgeon trong Subject NP."
        },
        {
            "index": 3,
            "word": "surgeon",
            "lemma": "surgeon",
            "ipa": "/ˈsɜːrdʒən/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "bác sĩ phẫu thuật",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm (Head Noun) làm chủ ngữ, thực hiện hành động vận hành."
        },
        {
            "index": 4,
            "word": "operated",
            "lemma": "operate",
            "ipa": "/ˈɑːpəreɪtɪd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã vận hành",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính vị ngữ chỉ hành động điều khiển máy móc trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Mạo từ xác định làm Determiner trong cụm tân ngữ Object NP."
        },
        {
            "index": 6,
            "word": "modern",
            "lemma": "modern",
            "ipa": "/ˈmɑːdərn/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "hiện đại",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Tính từ làm Modifier bổ nghĩa cho danh từ machine trong Object NP."
        },
        {
            "index": 7,
            "word": "machine",
            "lemma": "machine",
            "ipa": "/məˈʃiːn/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "cỗ máy, thiết bị",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm làm tân ngữ trực tiếp (Direct Object)."
        },
        {
            "index": 8,
            "word": "carefully.",
            "lemma": "carefully",
            "ipa": "/ˈkɛrfəli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ chỉ cách thức (-ly)",
            "meaning": "cẩn thận, tỉ mỉ",
            "syntacticRole": "Adjunct (A)",
            "parentPhrase": "Mệnh đề chính (Main Clause / VP Modifier)",
            "grammarExplanation": "Trạng từ chỉ cách thức đứng cuối câu làm Adjunct bổ nghĩa cho động từ operated."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng chuẩn học thuật (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP (Adjunct)\n              /    |    \\       |            |\n            DET   ADJ  NOUN     |           ADV\n             |     |     |      |            |\n            The skilled surgeon |        carefully\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /  |   \\\n                          operated DET ADJ NOUN\n                                   |   |    |\n                                  the modern machine"
        },
        "semanticRoles": [
            {
                "element": "The skilled surgeon",
                "role": "Agent (Bác sĩ phẫu thuật tay nghề cao)",
                "explanation": "Chuyên gia y tế trực tiếp thao tác trên thiết bị y khoa."
            },
            {
                "element": "operated",
                "role": "Action (Hành vi vận hành máy)",
                "explanation": "Quy trình điều khiển máy móc công nghệ cao."
            },
            {
                "element": "the modern machine",
                "role": "Instrument / Patient (Cỗ máy hiện đại)",
                "explanation": "Thiết bị phẫu thuật tối tân được điều khiển."
            },
            {
                "element": "carefully",
                "role": "Manner (Tác phong thận trọng)",
                "explanation": "Sự tỉ mỉ, tập trung cao độ đảm bảo an toàn tuyệt đối."
            }
        ]
    }
},

  // ================= CÂU 73 =================
  {
    "id": 73,
    "title": "Câu 73: The passionate teacher explained the difficult lesson clearly.",
    "sentence": "The passionate teacher explained the difficult lesson clearly.",
    "translation": "Người giáo viên tâm huyết đã giải thích bài học khó một cách rõ ràng.",
    "ipa": "/ðə ˈpæʃənət ˈtiːtʃər ɪkˈspleɪnd ðə ˈdɪfɪkəlt ˈlɛsn ˈklɪrli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định làm Determiner trong Subject NP."
        },
        {
            "index": 2,
            "word": "passionate",
            "lemma": "passionate",
            "ipa": "/ˈpæʃənət/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "tâm huyết, nhiệt huyết",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ làm Modifier bổ nghĩa cho danh từ teacher."
        },
        {
            "index": 3,
            "word": "teacher",
            "lemma": "teacher",
            "ipa": "/ˈtiːtʃər/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "giáo viên",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm làm chủ ngữ của câu."
        },
        {
            "index": 4,
            "word": "explained",
            "lemma": "explain",
            "ipa": "/ɪkˈspleɪnd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã giải thích",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành vi giảng giải bài học trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Mạo từ xác định làm Determiner trong cụm tân ngữ."
        },
        {
            "index": 6,
            "word": "difficult",
            "lemma": "difficult",
            "ipa": "/ˈdɪfɪkəlt/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "khó khăn",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ lesson."
        },
        {
            "index": 7,
            "word": "lesson",
            "lemma": "lesson",
            "ipa": "/ˈlɛsn/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "bài học",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm làm tân ngữ trực tiếp (DO)."
        },
        {
            "index": 8,
            "word": "clearly.",
            "lemma": "clearly",
            "ipa": "/ˈklɪrli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ chỉ cách thức (-ly)",
            "meaning": "rõ ràng, mạch lạc",
            "syntacticRole": "Adjunct (A)",
            "parentPhrase": "Mệnh đề chính (Main Clause / VP Modifier)",
            "grammarExplanation": "Trạng từ chỉ cách thức làm Adjunct bổ nghĩa cho động từ explained."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng chuẩn học thuật (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP (Adjunct)\n              /    |    \\       |            |\n            DET   ADJ  NOUN     |           ADV\n             |     |     |      |            |\n            The passionate teacher|        clearly\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /  |   \\\n                          explained DET ADJ NOUN\n                                   |   |    |\n                                  the difficult lesson"
        },
        "semanticRoles": [
            {
                "element": "The passionate teacher",
                "role": "Agent (Nhà giáo tâm huyết)",
                "explanation": "Người thầy truyền đạt kiến thức bằng sự tận tụy."
            },
            {
                "element": "explained",
                "role": "Action (Hành vi truyền đạt / giảng giải)",
                "explanation": "Quá trình diễn giải logic các kiến thức khoa học."
            },
            {
                "element": "the difficult lesson",
                "role": "Theme / Topic (Bài giảng phức tạp)",
                "explanation": "Nội dung bài học khó được làm sáng tỏ."
            },
            {
                "element": "clearly",
                "role": "Manner (Sự sáng rõ, mạch lạc)",
                "explanation": "Cách thức giảng giải khúc chiết, dễ hiểu cho học trò."
            }
        ]
    }
},

  // ================= CÂU 74 =================
  {
    "id": 74,
    "title": "Câu 74: The brave pilot landed the damaged airplane safely.",
    "sentence": "The brave pilot landed the damaged airplane safely.",
    "translation": "Viên phi công dũng cảm đã hạ cánh chiếc máy bay bị hỏng một cách an toàn.",
    "ipa": "/ðə breɪv ˈpaɪlət ˈlændɪd ðə ˈdæmɪdʒd ˈɛrpleɪn ˈseɪfli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định làm Determiner trong Subject NP."
        },
        {
            "index": 2,
            "word": "brave",
            "lemma": "brave",
            "ipa": "/breɪv/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "dũng cảm",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ làm Modifier bổ nghĩa cho danh từ pilot."
        },
        {
            "index": 3,
            "word": "pilot",
            "lemma": "pilot",
            "ipa": "/ˈpaɪlət/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "phi công",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm làm chủ ngữ của câu."
        },
        {
            "index": 4,
            "word": "landed",
            "lemma": "land",
            "ipa": "/ˈlændɪd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã hạ cánh",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Ngoại động từ diễn tả hành động đáp máy bay an toàn trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Mạo từ xác định làm Determiner trong cụm tân ngữ."
        },
        {
            "index": 6,
            "word": "damaged",
            "lemma": "damage",
            "ipa": "/ˈdæmɪdʒd/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Quá khứ phân từ làm tính từ",
            "meaning": "bị hư hỏng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Tính từ phân từ bổ nghĩa cho danh từ airplane."
        },
        {
            "index": 7,
            "word": "airplane",
            "lemma": "airplane",
            "ipa": "/ˈɛrpleɪn/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "chiếc máy bay",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm làm tân ngữ trực tiếp (Direct Object)."
        },
        {
            "index": 8,
            "word": "safely.",
            "lemma": "safely",
            "ipa": "/ˈseɪfli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ chỉ cách thức (-ly)",
            "meaning": "an toàn",
            "syntacticRole": "Adjunct (A)",
            "parentPhrase": "Mệnh đề chính (Main Clause / VP Modifier)",
            "grammarExplanation": "Trạng từ chỉ cách thức đứng cuối câu làm Adjunct bổ nghĩa cho động từ landed."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng chuẩn học thuật (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP (Adjunct)\n              /    |    \\       |            |\n            DET   ADJ  NOUN     |           ADV\n             |     |     |      |            |\n            The   brave pilot   |          safely\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /  |   \\\n                          landed  DET ADJ NOUN\n                                   |   |    |\n                                  the damaged airplane"
        },
        "semanticRoles": [
            {
                "element": "The brave pilot",
                "role": "Agent (Viên phi công dũng cảm)",
                "explanation": "Cơ trưởng bình tĩnh xử lý tình huống khẩn cấp trên không."
            },
            {
                "element": "landed",
                "role": "Action (Hành vi hạ cánh)",
                "explanation": "Quy trình điều khiển phi cơ tiếp đất an toàn."
            },
            {
                "element": "the damaged airplane",
                "role": "Patient (Chiếc máy bay bị trục trặc)",
                "explanation": "Phương tiện bị hỏng hóc kỹ thuật nhưng được cứu vãn."
            },
            {
                "element": "safely",
                "role": "Manner (Mức độ an toàn tuyệt đối)",
                "explanation": "Kết quả hạ cánh không gây thương vong."
            }
        ]
    }
},

  // ================= CÂU 75 =================
  {
    "id": 75,
    "title": "Câu 75: The enthusiastic guide introduced the historic museum proudly.",
    "sentence": "The enthusiastic guide introduced the historic museum proudly.",
    "translation": "Người hướng dẫn viên nhiệt tình đã tự hào giới thiệu viện bảo tàng lịch sử.",
    "ipa": "/ðə ɪnˌθuːziˈæstɪk ɡaɪd ˌɪntrəˈduːst ðə hɪˈstɔːrɪk mjuˈziːəm ˈpraʊdli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định làm Determiner trong Subject NP."
        },
        {
            "index": 2,
            "word": "enthusiastic",
            "lemma": "enthusiastic",
            "ipa": "/ɪnˌθuːziˈæstɪk/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "nhiệt tình, hăng hái",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ làm Modifier bổ nghĩa cho danh từ guide."
        },
        {
            "index": 3,
            "word": "guide",
            "lemma": "guide",
            "ipa": "/ɡaɪd/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "hướng dẫn viên",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm làm chủ ngữ của câu."
        },
        {
            "index": 4,
            "word": "introduced",
            "lemma": "introduce",
            "ipa": "/ˌɪntrəˈduːst/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã giới thiệu",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành vi giới thiệu di tích trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Mạo từ xác định làm Determiner trong cụm tân ngữ."
        },
        {
            "index": 6,
            "word": "historic",
            "lemma": "historic",
            "ipa": "/hɪˈstɔːrɪk/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "mang tính lịch sử",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ museum."
        },
        {
            "index": 7,
            "word": "museum",
            "lemma": "museum",
            "ipa": "/mjuˈziːəm/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "viện bảo tàng",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm làm tân ngữ trực tiếp (Direct Object)."
        },
        {
            "index": 8,
            "word": "proudly.",
            "lemma": "proudly",
            "ipa": "/ˈpraʊdli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ chỉ cách thức (-ly)",
            "meaning": "tự hào, hãnh diện",
            "syntacticRole": "Adjunct (A)",
            "parentPhrase": "Mệnh đề chính (Main Clause / VP Modifier)",
            "grammarExplanation": "Trạng từ chỉ cách thức làm Adjunct bổ nghĩa cho động từ introduced."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng chuẩn học thuật (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP (Adjunct)\n              /    |    \\       |            |\n            DET   ADJ  NOUN     |           ADV\n             |     |     |      |            |\n            The enthusiastic guide|        proudly\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /  |   \\\n                         introduced DET ADJ NOUN\n                                   |   |    |\n                                  the historic museum"
        },
        "semanticRoles": [
            {
                "element": "The enthusiastic guide",
                "role": "Agent (Hướng dẫn viên du lịch nhiệt thành)",
                "explanation": "Người hướng dẫn du khách tham quan di tích lịch sử."
            },
            {
                "element": "introduced",
                "role": "Action (Hành vi giới thiệu / thuyết minh)",
                "explanation": "Hoạt động thuyết minh truyền cảm hứng lịch sử."
            },
            {
                "element": "the historic museum",
                "role": "Theme / Location (Bảo tàng lịch sử)",
                "explanation": "Địa điểm văn hóa được giới thiệu tới du khách."
            },
            {
                "element": "proudly",
                "role": "Manner (Thái độ tự hào)",
                "explanation": "Niềm kiêu hãnh dân tộc khi giới thiệu di sản."
            }
        ]
    }
},

  // ================= CÂU 76 =================
  {
    "id": 76,
    "title": "Câu 76: The young author wrote an inspiring novel.",
    "sentence": "The young author wrote an inspiring novel.",
    "translation": "Tác giả trẻ đã viết một cuốn tiểu thuyết truyền cảm hứng.",
    "ipa": "/ðə jʌŋ ˈɔːθər roʊt ən ɪnˈspaɪərɪŋ ˈnɑːvl/",
    "structurePattern": "Mô hình S - V - O (Subject + Verb + Direct Object)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định làm Determiner trong Subject NP."
        },
        {
            "index": 2,
            "word": "young",
            "lemma": "young",
            "ipa": "/jʌŋ/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "trẻ tuổi",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ làm Modifier bổ nghĩa cho danh từ author."
        },
        {
            "index": 3,
            "word": "author",
            "lemma": "author",
            "ipa": "/ˈɔːθər/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "tác giả, nhà văn",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm làm chủ ngữ của câu."
        },
        {
            "index": 4,
            "word": "wrote",
            "lemma": "write",
            "ipa": "/roʊt/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã viết",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành vi sáng tác văn học trong quá khứ."
        },
        {
            "index": 5,
            "word": "an",
            "lemma": "an",
            "ipa": "/ən/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ bất định (trước nguyên âm /ɪ/)",
            "meaning": "một",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Mạo từ bất định làm Determiner trong cụm tân ngữ."
        },
        {
            "index": 6,
            "word": "inspiring",
            "lemma": "inspire",
            "ipa": "/ɪnˈspaɪərɪŋ/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Hiện tại phân từ làm tính từ (-ing)",
            "meaning": "truyền cảm hứng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Tính từ phân từ bổ nghĩa cho danh từ novel."
        },
        {
            "index": 7,
            "word": "novel.",
            "lemma": "novel",
            "ipa": "/ˈnɑːvl/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "cuốn tiểu thuyết",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm làm tân ngữ trực tiếp (Direct Object)."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng chuẩn học thuật (S - P - DO):",
            "asciiTree": "                       S (Sentence)\n                      /            \\\n           Subject NP               Predicate VP\n          /    |    \\              /            \\\n        DET   ADJ  NOUN          VERB          DO NP\n         |     |     |            |           /   |   \\\n        The  young author       wrote       DET  ADJ NOUN\n                                             |    |    |\n                                            an inspiring novel"
        },
        "semanticRoles": [
            {
                "element": "The young author",
                "role": "Agent / Creator (Tác giả trẻ tài hoa)",
                "explanation": "Nhà văn trẻ tuổi trực tiếp sáng tác tác phẩm."
            },
            {
                "element": "wrote",
                "role": "Action / Creation (Hành vi sáng tác)",
                "explanation": "Quá trình viết nên cuốn sách."
            },
            {
                "element": "an inspiring novel",
                "role": "Result / Theme (Tác phẩm văn học truyền cảm hứng)",
                "explanation": "Cuốn tiểu thuyết ý nghĩa ra đời."
            }
        ]
    }
},

  // ================= CÂU 77 =================
  {
    "id": 77,
    "title": "Câu 77: The experienced mechanic repaired the broken engine efficiently.",
    "sentence": "The experienced mechanic repaired the broken engine efficiently.",
    "translation": "Người thợ cơ khí giàu kinh nghiệm đã sửa chữa động cơ hỏng một cách hiệu quả.",
    "ipa": "/ðə ɪkˈspɪriənst məˈkænɪk rɪˈpɛrd ðə ˈbroʊkən ˈɛndʒɪn ɪˈfɪʃntli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định làm Determiner trong Subject NP."
        },
        {
            "index": 2,
            "word": "experienced",
            "lemma": "experienced",
            "ipa": "/ɪkˈspɪriənst/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ phân từ",
            "meaning": "dày dạn kinh nghiệm",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ làm Modifier bổ nghĩa cho danh từ mechanic."
        },
        {
            "index": 3,
            "word": "mechanic",
            "lemma": "mechanic",
            "ipa": "/məˈkænɪk/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "thợ cơ khí, thợ máy",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm làm chủ ngữ của câu."
        },
        {
            "index": 4,
            "word": "repaired",
            "lemma": "repair",
            "ipa": "/rɪˈpɛrd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã sửa chữa",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động phục hồi cỗ máy trong quá khứ."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Mạo từ xác định làm Determiner trong cụm tân ngữ."
        },
        {
            "index": 6,
            "word": "broken",
            "lemma": "break",
            "ipa": "/ˈbroʊkən/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Quá khứ phân từ làm tính từ",
            "meaning": "bị hư hỏng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Tính từ phân từ bổ nghĩa cho danh từ engine."
        },
        {
            "index": 7,
            "word": "engine",
            "lemma": "engine",
            "ipa": "/ˈɛndʒɪn/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "động cơ",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm làm tân ngữ trực tiếp (Direct Object)."
        },
        {
            "index": 8,
            "word": "efficiently.",
            "lemma": "efficiently",
            "ipa": "/ɪˈfɪʃntli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ chỉ cách thức (-ly)",
            "meaning": "hiệu quả, chuẩn xác",
            "syntacticRole": "Adjunct (A)",
            "parentPhrase": "Mệnh đề chính (Main Clause / VP Modifier)",
            "grammarExplanation": "Trạng từ chỉ cách thức đứng cuối câu làm Adjunct bổ nghĩa cho động từ repaired."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng chuẩn học thuật (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP (Adjunct)\n              /    |    \\       |            |\n            DET   ADJ  NOUN     |           ADV\n             |     |     |      |            |\n            The experienced mechanic|     efficiently\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /  |   \\\n                          repaired DET ADJ NOUN\n                                   |   |    |\n                                  the broken engine"
        },
        "semanticRoles": [
            {
                "element": "The experienced mechanic",
                "role": "Agent (Người thợ cơ khí lành nghề)",
                "explanation": "Thợ máy trực tiếp chẩn đoán và khắc phục sự cố kỹ thuật."
            },
            {
                "element": "repaired",
                "role": "Action (Hành vi sửa chữa)",
                "explanation": "Quy trình tháo lắp, thay thế linh kiện."
            },
            {
                "element": "the broken engine",
                "role": "Patient (Bộ động cơ bị hỏng)",
                "explanation": "Bộ phận máy móc gặp sự cố đã được sửa chữa hoạt động trở lại."
            },
            {
                "element": "efficiently",
                "role": "Manner (Năng suất, hiệu quả cao)",
                "explanation": "Thao tác chuẩn xác trong thời gian ngắn nhất."
            }
        ]
    }
},

  // ================= CÂU 78 =================
  {
    "id": 78,
    "title": "Câu 78: The cheerful barista brewed fresh coffee quickly.",
    "sentence": "The cheerful barista brewed fresh coffee quickly.",
    "translation": "Người pha chế vui vẻ đã nhanh chóng pha một tách cà phê thơm mới.",
    "ipa": "/ðə ˈtʃɪrfəl bəˈriːstə bruːd frɛʃ ˈkɔːfi ˈkwɪkli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định làm Determiner trong Subject NP."
        },
        {
            "index": 2,
            "word": "cheerful",
            "lemma": "cheerful",
            "ipa": "/ˈtʃɪrfəl/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "vui tươi, đon đả",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ làm Modifier bổ nghĩa cho danh từ barista."
        },
        {
            "index": 3,
            "word": "barista",
            "lemma": "barista",
            "ipa": "/bəˈriːstə/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "nhân viên pha cà phê",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm làm chủ ngữ của câu."
        },
        {
            "index": 4,
            "word": "brewed",
            "lemma": "brew",
            "ipa": "/bruːd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã pha, ủ",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động pha chế cà phê trong quá khứ."
        },
        {
            "index": 5,
            "word": "fresh",
            "lemma": "fresh",
            "ipa": "/frɛʃ/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "tươi mới, nóng hổi",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ coffee trong cụm tân ngữ."
        },
        {
            "index": 6,
            "word": "coffee",
            "lemma": "coffee",
            "ipa": "/ˈkɔːfi/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ không đếm được",
            "meaning": "cà phê",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm làm tân ngữ trực tiếp (Direct Object)."
        },
        {
            "index": 7,
            "word": "quickly.",
            "lemma": "quickly",
            "ipa": "/ˈkwɪkli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ chỉ cách thức (-ly)",
            "meaning": "nhanh chóng",
            "syntacticRole": "Adjunct (A)",
            "parentPhrase": "Mệnh đề chính (Main Clause / VP Modifier)",
            "grammarExplanation": "Trạng từ chỉ cách thức làm Adjunct bổ nghĩa cho động từ brewed."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng chuẩn học thuật (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP (Adjunct)\n              /    |    \\       |            |\n            DET   ADJ  NOUN     |           ADV\n             |     |     |      |            |\n            The cheerful barista|         quickly\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /     \\\n                           brewed ADJ    NOUN\n                                   |       |\n                                 fresh   coffee"
        },
        "semanticRoles": [
            {
                "element": "The cheerful barista",
                "role": "Agent (Chuyên viên pha chế tươi vui)",
                "explanation": "Nhân viên quán nước đon đả phục vụ khách hàng."
            },
            {
                "element": "brewed",
                "role": "Action (Hành vi pha chế)",
                "explanation": "Thao tác xay, nén và chiết xuất cà phê."
            },
            {
                "element": "fresh coffee",
                "role": "Result / Patient (Cà phê thơm ngon)",
                "explanation": "Ly cà phê thơm lừng mới ra lò."
            },
            {
                "element": "quickly",
                "role": "Manner (Tốc độ phục vụ nhanh nhẹn)",
                "explanation": "Khách hàng không phải chờ đợi lâu."
            }
        ]
    }
},

  // ================= CÂU 79 =================
  {
    "id": 79,
    "title": "Câu 79: The generous philanthropist donated substantial funds generously.",
    "sentence": "The generous philanthropist donated substantial funds generously.",
    "translation": "Nhà từ thiện hào phóng đã quyên góp các quỹ tài trợ lớn một cách rộng rãi.",
    "ipa": "/ðə ˈdʒɛnərəs fɪˈlænθrəpɪst ˈdoʊneɪtɪd səbˈstænʃl fʌndz ˈdʒɛnərəsli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định làm Determiner trong Subject NP."
        },
        {
            "index": 2,
            "word": "generous",
            "lemma": "generous",
            "ipa": "/ˈdʒɛnərəs/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "hào phóng, rộng lượng",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ làm Modifier bổ nghĩa cho danh từ philanthropist."
        },
        {
            "index": 3,
            "word": "philanthropist",
            "lemma": "philanthropist",
            "ipa": "/fɪˈlænθrəpɪst/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "nhà từ thiện",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm làm chủ ngữ của câu."
        },
        {
            "index": 4,
            "word": "donated",
            "lemma": "donate",
            "ipa": "/ˈdoʊneɪtɪd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã quyên góp, tài trợ",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành động đóng góp tài chính trong quá khứ."
        },
        {
            "index": 5,
            "word": "substantial",
            "lemma": "substantial",
            "ipa": "/səbˈstænʃl/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "đáng kể, to lớn",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Tính từ bổ nghĩa cho danh từ funds trong cụm tân ngữ."
        },
        {
            "index": 6,
            "word": "funds",
            "lemma": "fund",
            "ipa": "/fʌndz/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số nhiều",
            "meaning": "các nguồn quỹ, tài chính",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm làm tân ngữ trực tiếp (Direct Object)."
        },
        {
            "index": 7,
            "word": "generously.",
            "lemma": "generously",
            "ipa": "/ˈdʒɛnərəsli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ chỉ cách thức (-ly)",
            "meaning": "rộng lượng, hào sảng",
            "syntacticRole": "Adjunct (A)",
            "parentPhrase": "Mệnh đề chính (Main Clause / VP Modifier)",
            "grammarExplanation": "Trạng từ chỉ cách thức làm Adjunct bổ nghĩa cho động từ donated."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng chuẩn học thuật (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP (Adjunct)\n              /    |    \\       |            |\n            DET   ADJ  NOUN     |           ADV\n             |     |     |      |            |\n       The generous philanthropist|      generously\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /     \\\n                          donated ADJ    NOUN\n                                   |       |\n                              substantial funds"
        },
        "semanticRoles": [
            {
                "element": "The generous philanthropist",
                "role": "Agent (Nhà hảo tâm nhân đức)",
                "explanation": "Mạnh thường quân tài trợ nguồn lực hỗ trợ xã hội."
            },
            {
                "element": "donated",
                "role": "Action (Hành vi quyên tặng)",
                "explanation": "Nghĩa cử chuyển giao tài chính từ thiện."
            },
            {
                "element": "substantial funds",
                "role": "Theme (Nguồn quỹ lớn)",
                "explanation": "Số tiền ủng hộ mang giá trị to lớn."
            },
            {
                "element": "generously",
                "role": "Manner (Tấm lòng quảng đại)",
                "explanation": "Sự trao đi vô tư, không toan tính vụ lợi."
            }
        ]
    }
},

  // ================= CÂU 80 =================
  {
    "id": 80,
    "title": "Câu 80: The honest cashier returned the lost wallet immediately.",
    "sentence": "The honest cashier returned the lost wallet immediately.",
    "translation": "Nhân viên thu ngân trung thực đã hoàn trả lại chiếc ví bị rơi ngay lập tức.",
    "ipa": "/ðə ˈɑːnɪst kæˈʃɪr rɪˈtɜːrnd ðə lɔːst ˈwɑːlɪt ɪˈmiːdiətli/",
    "structurePattern": "Mô hình S - V - O - A (Subject + Verb + Direct Object + Adverbial)",
    "tokens": [
        {
            "index": 1,
            "word": "The",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Mạo từ xác định làm Determiner trong Subject NP."
        },
        {
            "index": 2,
            "word": "honest",
            "lemma": "honest",
            "ipa": "/ˈɑːnɪst/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Tính từ miêu tả",
            "meaning": "thật thà, trung thực",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Tính từ làm Modifier bổ nghĩa cho danh từ cashier."
        },
        {
            "index": 3,
            "word": "cashier",
            "lemma": "cashier",
            "ipa": "/kæˈʃɪr/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "nhân viên thu ngân",
            "syntacticRole": "Subject (S)",
            "parentPhrase": "Cụm danh từ chủ ngữ (Subject NP)",
            "grammarExplanation": "Danh từ trung tâm làm chủ ngữ của câu."
        },
        {
            "index": 4,
            "word": "returned",
            "lemma": "return",
            "ipa": "/rɪˈtɜːrnd/",
            "pos": "VERB",
            "pos_vi": "Động từ",
            "morphology": "Quá khứ đơn (V2)",
            "meaning": "đã hoàn trả, trả lại",
            "syntacticRole": "Predicator (P) / Verb (V)",
            "parentPhrase": "Mệnh đề chính (Main Clause)",
            "grammarExplanation": "Động từ chính chỉ hành vi gửi lại tài sản cho chủ nhân."
        },
        {
            "index": 5,
            "word": "the",
            "lemma": "the",
            "ipa": "/ðə/",
            "pos": "DET",
            "pos_vi": "Từ hạn định",
            "morphology": "Mạo từ xác định",
            "meaning": "(Xác định)",
            "syntacticRole": "Determiner",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Mạo từ xác định làm Determiner trong cụm tân ngữ."
        },
        {
            "index": 6,
            "word": "lost",
            "lemma": "lose",
            "ipa": "/lɔːst/",
            "pos": "ADJ",
            "pos_vi": "Tính từ",
            "morphology": "Quá khứ phân từ làm tính từ",
            "meaning": "bị đánh rơi, thất lạc",
            "syntacticRole": "Modifier",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Tính từ phân từ bổ nghĩa cho danh từ wallet."
        },
        {
            "index": 7,
            "word": "wallet",
            "lemma": "wallet",
            "ipa": "/ˈwɑːlɪt/",
            "pos": "NOUN",
            "pos_vi": "Danh từ",
            "morphology": "Danh từ số ít",
            "meaning": "chiếc ví tiền",
            "syntacticRole": "Direct Object (DO)",
            "parentPhrase": "Cụm tân ngữ (Object NP)",
            "grammarExplanation": "Danh từ trung tâm làm tân ngữ trực tiếp (Direct Object)."
        },
        {
            "index": 8,
            "word": "immediately.",
            "lemma": "immediately",
            "ipa": "/ɪˈmiːdiətli/",
            "pos": "ADV",
            "pos_vi": "Trạng từ",
            "morphology": "Trạng từ chỉ thời gian / cách thức",
            "meaning": "ngay lập tức",
            "syntacticRole": "Adjunct (A)",
            "parentPhrase": "Mệnh đề chính (Main Clause / VP Modifier)",
            "grammarExplanation": "Trạng từ làm Adjunct bổ nghĩa cho hành vi returned."
        }
    ],
    "advancedAnalysis": {
        "sectionTitle": "PHẦN BỔ SUNG NÂNG CAO: SƠ ĐỒ CÂY CÚ PHÁP & PHÂN TÍCH NGỮ NGHĨA",
        "tree": {
            "title": "Sơ đồ cấu trúc cây cú pháp (Syntactic Phrase Structure Tree)",
            "subTitle": "Mô hình phân tầng chuẩn học thuật (S - P - DO - Adv):",
            "asciiTree": "                           S (Sentence)\n                          /     |     \\\n               Subject NP       |      AdvP (Adjunct)\n              /    |    \\       |            |\n            DET   ADJ  NOUN     |           ADV\n             |     |     |      |            |\n            The honest cashier  |        immediately\n                                VP\n                              /    \\\n                            VERB    DO NP\n                             |     /  |   \\\n                          returned DET ADJ NOUN\n                                   |   |    |\n                                  the lost wallet"
        },
        "semanticRoles": [
            {
                "element": "The honest cashier",
                "role": "Agent (Nhân viên thu ngân liêm chính)",
                "explanation": "Người nhặt được của rơi không tham của người khác."
            },
            {
                "element": "returned",
                "role": "Action (Hành vi trao trả)",
                "explanation": "Cử chỉ trao trả đồ cho thân chủ."
            },
            {
                "element": "the lost wallet",
                "role": "Theme (Chiếc ví bị đánh rơi)",
                "explanation": "Tài sản bị bỏ quên được tìm thấy và trao lại."
            },
            {
                "element": "immediately",
                "role": "Time / Manner (Ngay tức khắc)",
                "explanation": "Hành động nhanh chóng kịp thời."
            }
        ]
    }
}
];
