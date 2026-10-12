export interface PlaybookChapter {
  id: string;
  chapterNumber: number;
  title: string;
  mentalModelName: string;
  quote: string;
  rules: {
    ruleName: string;
    description: string;
    formula?: string;
    examples: { wrong?: string; correct: string; note: string }[];
  }[];
  quickCheckGuide: string[];
}

export const PLAYBOOK_CHAPTERS: PlaybookChapter[] = [
  {
    id: 'ch-1',
    chapterNumber: 1,
    title: 'Giải Phẫu Đoàn Tàu 3 Toa & Cứu Hộ Trật Bánh',
    mentalModelName: 'Mô hình Đoàn tàu Tốc hành S-V-O',
    quote: 'Câu tiếng Anh giống một đoàn tàu hỏa chạy một chiều từ Trái sang Phải. Không thể để toa hàng đẩy đầu tàu!',
    rules: [
      {
        ruleName: 'Trật tự 3 Toa chuẩn mực (S - V - O)',
        description: 'Toa 1 (Chủ ngữ S - Người/vật tạo lực) ➔ Toa 2 (Động cơ V - Hành động) ➔ Toa 3 (Tân ngữ O - Người/vật hứng trọn lực).',
        formula: '[S] + [V] + [O] + [Adv (Cách thức/Nơi chốn/Thời gian)]',
        examples: [
          {
            correct: 'The mechanic fixed my motorbike very carefully.',
            note: 'Chủ ngữ thợ máy (S) tác động vặn ốc (V) lên xe máy (O) rất cẩn thận (Adv).'
          }
        ]
      },
      {
        ruleName: 'Cứu hộ 3 loại trật bánh nguy hiểm nhất',
        description: 'Phát hiện sự cố logic: Đồ vật tự mua người, câu mất động cơ V, trạng từ nhảy lộn xộn.',
        examples: [
          {
            wrong: 'A new laptop bought my brother last week. (Trật bánh)',
            correct: 'My brother bought a new laptop last week.',
            note: 'Đồ vật không có chân tay để đi mua người. Đảo người làm chủ ngữ!'
          },
          {
            wrong: 'The cat the mouse under the table. (Mất động cơ)',
            correct: 'The cat chased the mouse under the table.',
            note: 'Bổ sung ngoại động từ bị rơi rụng (chased, caught).'
          },
          {
            wrong: 'Quickly ran the boy to the school gate. (Trạng từ nhảy cóc)',
            correct: 'The boy ran quickly to the school gate.',
            note: 'Trạng từ cách thức không làm đầu kéo, đưa S lên đầu.'
          }
        ]
      }
    ],
    quickCheckGuide: [
      'Soi Toa 1: Chủ ngữ có phải là đối tượng tạo lực hợp lý không?',
      'Soi Toa 2: Đã có động cơ động từ (V) chưa?',
      'Soi Toa 3: Tân ngữ có đứng ngay sau động từ không?',
      'Trạng từ nơi chốn / thời gian nên để ở cuối toa tàu.'
    ]
  },
  {
    id: 'ch-2',
    chapterNumber: 2,
    title: 'Phân Biệt Tân Ngữ (O) và Bổ Ngữ (C)',
    mentalModelName: 'Kính Lúp Soi Cán Cân: S ≠ O vs S = C',
    quote: 'Tân ngữ là nạn nhân chịu tác động. Bổ ngữ là chiếc gương soi chân dung.',
    rules: [
      {
        ruleName: 'Phép thử Dấu Bằng (=)',
        description: 'Tân ngữ (O): Khác đối tượng với S (S ≠ O), bị động từ tác động trực tiếp. Bổ ngữ (C): Cầm kính lúp vẽ rõ chân dung cho S hoặc O, có thể đặt dấu bằng (S = C hoặc O = C).',
        formula: 'S ≠ O (Tân ngữ) | S = C hoặc O = C (Bổ ngữ)',
        examples: [
          {
            correct: 'She became [a famous singer]. ➔ C',
            note: 'She = a famous singer (S = C). Cô ấy chính là ca sĩ! Bổ ngữ cho S (Cs).'
          },
          {
            correct: 'She met [a famous singer]. ➔ O',
            note: 'She ≠ a famous singer (S ≠ O). Ca sĩ là người khác chịu tác động gặp mặt! Tân ngữ (O).'
          },
          {
            correct: 'They elected him [the team leader]. ➔ C',
            note: 'him = the team leader (O = C). Bổ ngữ chức vụ cho tân ngữ him (Co).'
          },
          {
            correct: 'The soup tastes [delicious]. ➔ C',
            note: 'The soup = delicious. Tính từ đứng sau Linking verb miêu tả món súp!'
          }
        ]
      }
    ],
    quickCheckGuide: [
      'Bước 1: Thử đặt dấu bằng giữa S và thành phần cần xét.',
      'Nếu bằng nhau (S = X) hoặc miêu tả trạng thái tính chất của S ➔ Bổ ngữ (C).',
      'Nếu là 2 đối tượng tách biệt chịu lực cơ học / cảm nhận ➔ Tân ngữ (O).'
    ]
  },
  {
    id: 'ch-3',
    chapterNumber: 3,
    title: 'Ma Trận Tân Ngữ Kép (O_dir & O_ind)',
    mentalModelName: 'Bàn Tay Chuyền Đồ (What) & Bàn Tay Đón Nhận (Whom)',
    quote: 'Tân ngữ trực tiếp là vật bị xách đi. Tân ngữ gián tiếp là người đứng xòe tay nhận quà.',
    rules: [
      {
        ruleName: 'Quy tắc bàn tay di chuyển vật',
        description: 'O_dir (Direct Object): Đồ vật bị lực chạm vào / di chuyển (Trả lời: Cái gì? / What?). O_ind (Indirect Object): Người đứng đón nhận kết quả (Trả lời: Cho ai? / Whom?).',
        formula: 'Verb + [O_ind người nhận] + [O_dir vật chạm] HOẶC Verb + [O_dir] + to/for + [O_ind]',
        examples: [
          {
            correct: 'My father bought [me] [a new bicycle].',
            note: 'O_ind = me (Tôi nhận). O_dir = a new bicycle (Xe đạp bị tiền mua).'
          },
          {
            correct: 'She gave [her sister] [a silver ring].',
            note: 'O_ind = her sister (Em nhận nhẫn). O_dir = a silver ring (Nhẫn bạc chuyền tay).'
          },
          {
            correct: 'The guide explained the rules to the tourists.',
            note: 'O_dir = the rules. Lưu ý động từ "explain" không dùng cấu trúc kép liền kề!'
          }
        ]
      }
    ],
    quickCheckGuide: [
      'Hỏi "Chạm vào cái gì? / Di chuyển cái gì?" ➔ Tân ngữ trực tiếp (O_dir).',
      'Hỏi "Đưa cho ai? / Ai hưởng lợi?" ➔ Tân ngữ gián tiếp (O_ind).'
    ]
  },
  {
    id: 'ch-4',
    chapterNumber: 4,
    title: 'Xi-Nhan Tiền Tố (Prefix) – Bẻ Lái Nghĩa',
    mentalModelName: 'Xi-Nhan Giao Thông Bẻ Lái Từ Vựng',
    quote: 'Tiền tố đứng đầu như chiếc xi-nhan: gạt sang trái đảo chiều phủ định, gạt sang phải đổi mốc thời gian/vị trí.',
    rules: [
      {
        ruleName: 'Xi-nhan Phủ định theo quy tắc chính tả',
        description: 'Quy tắc ghép phụ âm vàng không bao giờ sai:',
        formula: 'il- (trước L) | ir- (trước R) | im- (trước M/P) | in- & un- & dis-',
        examples: [
          { correct: 'il- + legal = illegal', note: 'Bắt đầu bằng L dùng IL-' },
          { correct: 'ir- + responsible = irresponsible', note: 'Bắt đầu bằng R dùng IR-' },
          { correct: 'im- + polite / possible = impolite / impossible', note: 'Bắt đầu bằng P/M dùng IM-' },
          { correct: 'dis- + appear / agree = disappear / disagree', note: 'Đảo ngược hành động dùng DIS-' }
        ]
      },
      {
        ruleName: 'Xi-nhan Thời gian & Vị trí',
        description: 'Đổi hướng tọa độ không gian và thời gian:',
        formula: 'pre- (trước) | re- (lặp lại) | sub- (ở dưới) | ex- (cựu/cũ)',
        examples: [
          { correct: 'pre- + test = pre-test', note: 'Kiểm tra trước đầu vào' },
          { correct: 're- + write / play = rewrite / replay', note: 'Viết lại / chiếu lại' },
          { correct: 'sub- + way / marine = subway / submarine', note: 'Tàu dưới lòng đất / tàu ngầm dưới biển' },
          { correct: 'ex- + colleague = ex-colleague', note: 'Đồng nghiệp cũ' }
        ]
      }
    ],
    quickCheckGuide: [
      'Từ bắt đầu bằng chữ L ➔ nghĩ ngay tới IL-',
      'Từ bắt đầu bằng chữ R ➔ nghĩ ngay tới IR-',
      'Từ bắt đầu bằng chữ P hoặc M ➔ nghĩ ngay tới IM-',
      'Lặp lại hành động ➔ chọn RE-',
      'Nằm ở tầng dưới ➔ chọn SUB-'
    ]
  },
  {
    id: 'ch-5',
    chapterNumber: 5,
    title: 'Cân Đối Trọng & Mặt Nạ Cảm Xúc',
    mentalModelName: 'Đĩa Cân -ful/-less & Hai Mặt Nạ -ed/-ing',
    quote: 'Đĩa cân nặng đầy là -ful, đĩa cân rỗng không là -less. Con người đeo mặt nạ -ed, sự vật phát sóng -ing.',
    rules: [
      {
        ruleName: 'Cán cân Đối Trọng (-ful vs -less)',
        description: '-ful = Đầy đặn, dồi dào, hữu ích. -less = Rỗng tuếch, thiếu thốn, mất mát.',
        formula: 'Gốc từ + -ful (Có / Đầy) ⟷ Gốc từ + -less (Không có / Thiếu)',
        examples: [
          { correct: 'home + -less = homeless', note: 'Mất nhà cửa, vô gia cư' },
          { correct: 'use + -ful = useful ⟷ use + -less = useless', note: 'Hữu ích ⟷ Vô dụng' },
          { correct: 'care + -ful = careful ⟷ care + -less = careless', note: 'Cẩn thận ⟷ Bất cẩn' },
          { correct: 'pain + -less = painless', note: 'Không đau một chút nào' },
          { correct: 'help + -ful = helpful ⟷ help + -less = helpless', note: 'Có ích ⟷ Bất lực' }
        ]
      },
      {
        ruleName: 'Hai Mặt Nạ Cảm Xúc (-ed vs -ing)',
        description: 'Mặt nạ -ed = Cảm xúc, tâm trạng chủ quan của CON NGƯỜI (bị/được tác động). Mặt nạ -ing = Bản chất nội tại của SỰ VẬT / HIỆN TƯỢNG phát ra tác động lên người khác.',
        formula: 'Con người + -ED (cảm thấy...) | Sự vật/Sự việc + -ING (gây ra...)',
        examples: [
          { correct: 'I was bored because the lecture was boring.', note: 'Tôi cảm thấy chán (-ed) vì bài giảng phát sóng gây chán (-ing).' },
          { correct: 'She was disappointed.', note: 'Cô ấy là người nhận cảm xúc thất vọng (-ed).' },
          { correct: 'The match was exciting.', note: 'Trận bóng đá bản chất rất kịch tính lôi cuốn (-ing).' }
        ]
      }
    ],
    quickCheckGuide: [
      'Ngữ cảnh có/đầy đủ ➔ đĩa cân -ful.',
      'Ngữ cảnh thiếu/không có gì ➔ đĩa cân -less.',
      'Miêu tả người cảm thấy thế nào ➔ mặt nạ -ed.',
      'Miêu tả bản chất sự vật/hiện tượng cuốn hút/gây cảm xúc ➔ mặt nạ -ing.'
    ]
  },
  {
    id: 'ch-6',
    chapterNumber: 6,
    title: 'Thuật Toán 3 Giây – Trắc Nghiệm Từ Loại',
    mentalModelName: 'Quy Trình 3 Bước: Soi Kính Lúp ➔ Đoán Toa ➔ Kéo Cắt Đuôi',
    quote: 'Đừng dịch nghĩa cả câu! 3 giây là đủ để khóa chặt đáp án đúng.',
    rules: [
      {
        ruleName: 'Quy trình 3 bước thần tốc',
        description: 'Bước 1: Soi kính lúp (nhìn 1 từ ngay trước và 1 từ ngay sau). Bước 2: Đoán toa thiếu (cần Danh từ N, Động từ V, Tính từ Adj hay Trạng từ Adv?). Bước 3: Dùng kéo chặt đuôi nhận diện.',
        formula: 'Kính lúp ➔ Đoán vị trí ➔ Cắt đuôi vàng',
        examples: [
          { correct: 'The manager appreciated his great [contribution].', note: 'his (TTSH) + great (Adj) ➔ Cần Noun đuôi -tion (contribution).' },
          { correct: 'We need to [modernize] the system.', note: 'need to + V bare ➔ Đuôi động từ -ize (modernize).' },
          { correct: 'She sings very [beautifully].', note: 'Bổ nghĩa động từ sings ➔ Trạng từ đuôi -ly (beautifully).' }
        ]
      },
      {
        ruleName: 'Bảng Đuôi Nhận Diện Thần Tốc (Suffix Cheat Sheet)',
        description: 'Dấu hiệu nhận diện từ loại chỉ trong 1 cái liếc mắt:',
        formula: 'N: -tion, -ment, -ity, -al, -ness | V: -ize, -en, -ify | Adj: -ive, -able, -ful, -less, -ent, -ant | Adv: -ly',
        examples: [
          { correct: 'Danh từ (N): -tion (action), -ment (development), -ity (ability), -al (arrival)', note: 'Đứng sau Adj, TTSH, mạo từ a/an/the' },
          { correct: 'Tính từ (Adj): -ive (impressive), -able (renewable), -ful (helpful)', note: 'Đứng trước Noun hoặc sau Linking verb' },
          { correct: 'Động từ (V): -ize (modernize), -en (shorten, strengthen)', note: 'Đứng sau Modal verb, to' },
          { correct: 'Trạng từ (Adv): Tính từ + -ly (carefully, brightly)', note: 'Bổ nghĩa cho động từ thường, tính từ' }
        ]
      }
    ],
    quickCheckGuide: [
      'Gặp mạo từ/TTSH + Adj + [?] ➔ Điền Danh từ (N).',
      'Gặp want to / need to / can / should + [?] ➔ Điền Động từ nguyên thể (V).',
      'Gặp động từ thường + [?] ➔ Điền Trạng từ (Adv đuôi -ly).',
      'Gặp to be + very + [?] + N ➔ Cần Tính từ (Adj).'
    ]
  }
];
