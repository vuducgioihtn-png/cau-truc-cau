import { WordToken, RawPosCode, SyntacticRoleCode } from './wordTokenizer';

export type DictionaryValue = {
  ipa: string;
  posName: string;
  posCode: RawPosCode;
  meaning: string;
  role: string;
  syntacticRole?: SyntacticRoleCode;
  grammarExplanation?: string;
  semanticDescription?: string;
  note?: string;
};

export const EXTENDED_VOCAB_DICTIONARY: Record<string, DictionaryValue> = {
  // --- ĐỘNG TỪ KHUYẾT THIẾU & TRỢ ĐỘNG TỪ CỐT LÕI (MODAL & AUXILIARY VERBS) ---
  can: {
    ipa: '/kæn/',
    posName: 'Động từ khuyết thiếu (Modal Verb)',
    posCode: 'Modal',
    meaning: 'có thể',
    role: 'Bổ trợ khả năng cho động từ nguyên mẫu đứng sau (can + V nguyên mẫu)',
    note: 'Sau can luôn là động từ nguyên mẫu không chia (bare infinitive)'
  },
  would: {
    ipa: '/wʊd/',
    posName: 'Động từ khuyết thiếu (Modal Verb)',
    posCode: 'Modal',
    meaning: 'sẽ, muốn, sẵn sàng (quá khứ/câu điều kiện)',
    role: 'Trợ động từ trong câu điều kiện hoặc lời đề nghị lịch sự (would like/would rather)',
    note: 'Sau would luôn là động từ nguyên mẫu không to'
  },
  may: {
    ipa: '/meɪ/',
    posName: 'Động từ khuyết thiếu (Modal Verb)',
    posCode: 'Modal',
    meaning: 'có thể, có lẽ, xin phép',
    role: 'Bổ trợ khả năng hoặc xin phép cho động từ nguyên mẫu đứng sau',
    note: 'Sau may là động từ nguyên mẫu không to'
  },
  might: {
    ipa: '/maɪt/',
    posName: 'Động từ khuyết thiếu (Modal Verb)',
    posCode: 'Modal',
    meaning: 'có thể, có lẽ (khả năng thấp hơn may)',
    role: 'Bổ trợ khả năng không chắc chắn cho động từ nguyên mẫu',
    note: 'Dạng quá khứ của may hoặc giả định'
  },
  shall: {
    ipa: '/ʃæl/',
    posName: 'Động từ khuyết thiếu (Modal Verb)',
    posCode: 'Modal',
    meaning: 'sẽ, phải (đề xuất, giao ước)',
    role: 'Trợ động từ đề xuất hoặc cam kết tương lai',
    note: 'Hay dùng với I/We trong câu đề nghị (Shall we...?)'
  },
  have: {
    ipa: '/hæv/',
    posName: 'Động từ nguyên mẫu / Trợ động từ',
    posCode: 'V',
    meaning: 'có, sở hữu hoặc phải (have to + V)',
    role: 'Động từ vị ngữ hoặc trợ động từ thì hiện tại hoàn thành',
    note: 'Have to + V = phải làm gì đó'
  },
  does: {
    ipa: '/dʌz/',
    posName: 'Trợ động từ / Động từ ngôi 3 số ít',
    posCode: 'V',
    meaning: 'làm, thực hiện (ngôi 3 số ít)',
    role: 'Trợ động từ câu hỏi/phủ định hoặc động từ chính thì hiện tại đơn',
    note: 'Chia theo chủ ngữ số ít He/She/It'
  },
  did: {
    ipa: '/dɪd/',
    posName: 'Trợ động từ / Động từ quá khứ (V2)',
    posCode: 'V',
    meaning: 'đã làm, đã thực hiện',
    role: 'Trợ động từ quá khứ đơn hoặc động từ chính (V2 của do)',
    note: 'Áp dụng cho mọi ngôi ở thì quá khứ đơn'
  },
  done: {
    ipa: '/dʌn/',
    posName: 'Quá khứ phân từ (V3)',
    posCode: 'V',
    meaning: 'đã làm xong, hoàn tất',
    role: 'Phân từ ba trong thì hoàn thành hoặc câu bị động (have done / be done)',
    note: 'Dạng V3 bất quy tắc của động từ do'
  },
  been: {
    ipa: '/biːn/',
    posName: 'Quá khứ phân từ của To Be (V3)',
    posCode: 'V',
    meaning: 'đã ở, đã từng là',
    role: 'Trợ động từ to be trong thì hoàn thành hoặc bị động (has been, have been)',
    note: 'Dạng phân từ ba V3 của Be'
  },
  being: {
    ipa: '/ˈbiː.ɪŋ/',
    posName: 'Hiện tại phân từ của To Be (V-ing)',
    posCode: 'V',
    meaning: 'đang là, đang ở, việc tồn tại',
    role: 'Thì tiếp diễn bị động (is being + V3) hoặc danh động từ',
    note: 'Dạng V-ing của Be'
  },
  am: {
    ipa: '/æm/',
    posName: 'Động từ To Be (thì hiện tại ngôi I)',
    posCode: 'V',
    meaning: 'thì, là, ở',
    role: 'Động từ to be đi kèm chủ ngữ I (I am)',
    note: 'Chia riêng duy nhất cho ngôi thứ nhất số ít I'
  },
  are: {
    ipa: '/ɑːr/',
    posName: 'Động từ To Be (thì hiện tại số nhiều)',
    posCode: 'V',
    meaning: 'thì, là, ở',
    role: 'Động từ to be đi kèm You/We/They hoặc danh từ số nhiều',
    note: 'Động từ to be số nhiều ở hiện tại đơn'
  },
  were: {
    ipa: '/wɜːr/',
    posName: 'Động từ To Be (thì quá khứ số nhiều)',
    posCode: 'V',
    meaning: 'đã là, đã ở',
    role: 'Động từ to be ở quá khứ đơn đi kèm You/We/They hoặc giả định',
    note: 'Dạng quá khứ số nhiều của To Be'
  },

  // --- ĐỘNG TỪ CHÍNH, TAKE & LIÊN QUAN ---
  take: {
    ipa: '/teɪk/',
    posName: 'Động từ nguyên mẫu (Verb)',
    posCode: 'V',
    meaning: 'lấy, thực hiện, làm (take a test = làm bài kiểm tra)',
    role: 'Động từ nguyên mẫu sau "had to" (had to take a test)',
    note: 'Cụm cố định: take a test / exam = làm bài thi, kiểm tra'
  },
  takes: {
    ipa: '/teɪks/',
    posName: 'Động từ thì hiện tại (ngôi 3 số ít)',
    posCode: 'V',
    meaning: 'lấy, mất (thời gian), dẫn tới',
    role: 'Động cơ vị ngữ [V] ngôi 3 số ít'
  },
  taking: {
    ipa: '/ˈteɪ.kɪŋ/',
    posName: 'Hiện tại phân từ / Danh động từ (V-ing)',
    posCode: 'V',
    meaning: 'đang lấy, việc tham gia/làm bài thi',
    role: 'Vị ngữ tiếp diễn hoặc danh động từ làm tân ngữ'
  },
  took: {
    ipa: '/tʊk/',
    posName: 'Động từ quá khứ (V2)',
    posCode: 'V',
    meaning: 'đã lấy, đã tham gia làm bài',
    role: 'Động cơ vị ngữ [V] ở quá khứ đơn'
  },
  taken: {
    ipa: '/ˈteɪ.kən/',
    posName: 'Quá khứ phân từ (V3)',
    posCode: 'V',
    meaning: 'được lấy, đã hoàn thành',
    role: 'Vị ngữ ở thể hoàn thành hoặc bị động'
  },
  takeoff: {
    ipa: '/ˈteɪk.ɒf/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'sự cất cánh (máy bay)',
    role: 'Danh từ làm tân ngữ của giới từ "before"'
  },
  government: {
    ipa: '/ˈɡʌv.ən.mənt/',
    posName: 'Danh từ tập thể (Noun)',
    posCode: 'N',
    meaning: 'chính phủ, chính quyền',
    role: 'Chủ ngữ [S] chủ thể ra quyết định',
    note: 'Đuôi danh từ quen thuộc: -ment'
  },
  television: {
    ipa: '/ˈtel.ɪ.vɪʒ.ən/',
    posName: 'Danh từ (Noun)',
    posCode: 'N',
    meaning: 'truyền hình, máy vô tuyến',
    role: 'Tân ngữ của giới từ "for" (for television)',
    note: 'Đuôi danh từ: -ion'
  },
  lost: {
    ipa: '/lɒst/',
    posName: 'Động từ quá khứ (V2 của lose)',
    posCode: 'V',
    meaning: 'đã làm mất, đánh mất',
    role: 'Động cơ vị ngữ [V] thể hiện sự mất mát'
  },
  software: {
    ipa: '/ˈsɒft.weər/',
    posName: 'Danh từ không đếm được',
    posCode: 'N',
    meaning: 'phần mềm máy tính',
    role: 'Tân ngữ trực tiếp [O_dir] được cài đặt'
  },

  // --- TRỢ ĐỘNG TỪ & MODAL VERBS ---
  had: {
    ipa: '/hæd/',
    posName: 'Động từ quá khứ / Trợ động từ',
    posCode: 'V',
    meaning: 'đã có, đã phải (had to: phải làm gì)',
    role: 'Trợ động từ vị ngữ kết hợp với "to V" (had to take)',
    note: 'Cấu trúc had to + V: thể hiện nghĩa vụ/bắt buộc trong quá khứ'
  },
  has: {
    ipa: '/hæz/',
    posName: 'Động từ hiện tại (ngôi 3 số ít) / Trợ động từ',
    posCode: 'V',
    meaning: 'có, sở hữu (hoặc trợ động từ thì hiện tại hoàn thành)',
    role: 'Động cơ vị ngữ [V] ngôi 3 số ít'
  },
  could: {
    ipa: '/kʊd/',
    posName: 'Động từ khuyết thiếu (Modal Verb)',
    posCode: 'Modal',
    meaning: 'có thể, đã có thể',
    role: 'Bổ trợ khả năng hoặc lời đề nghị lịch sự cho động từ nguyên mẫu đứng sau'
  },
  "couldn't": {
    ipa: '/ˈkʊd.ənt/',
    posName: 'Động từ khuyết thiếu phủ định',
    posCode: 'Modal',
    meaning: 'không thể, đã không thể',
    role: 'Trợ động từ phủ định khả năng'
  },
  "don't": {
    ipa: '/dəʊnt/',
    posName: 'Trợ động từ phủ định',
    posCode: 'V',
    meaning: 'không, đừng (trong câu mệnh lệnh)',
    role: 'Trợ động từ phủ định (Don\'t speak...)'
  },
  "won't": {
    ipa: '/wəʊnt/',
    posName: 'Động từ khuyết thiếu phủ định (will not)',
    posCode: 'Modal',
    meaning: 'sẽ không',
    role: 'Trợ động từ tương lai phủ định'
  },
  must: {
    ipa: '/mʌst/',
    posName: 'Động từ khuyết thiếu (Modal Verb)',
    posCode: 'Modal',
    meaning: 'phải, bắt buộc',
    role: 'Bổ trợ tính bắt buộc cho động từ nguyên mẫu đứng sau'
  },

  // --- ĐẠI TỪ & TÍNH TỪ SỞ HỮU / ĐỊNH TỪ ---
  i: {
    ipa: '/aɪ/',
    posName: 'Đại từ nhân xưng',
    posCode: 'Pron',
    meaning: 'tôi',
    role: 'Chủ ngữ [S] ngôi thứ nhất số ít'
  },
  me: {
    ipa: '/miː/',
    posName: 'Đại từ tân ngữ',
    posCode: 'Pron',
    meaning: 'tôi, cho tôi',
    role: 'Tân ngữ gián tiếp [O_ind] hoặc trực tiếp [O_dir]'
  },
  her: {
    ipa: '/hɜːr/',
    posName: 'Tính từ sở hữu / Đại từ tân ngữ',
    posCode: 'Det',
    meaning: 'của cô ấy (tính từ sở hữu) / cô ấy (tân ngữ)',
    role: 'Định từ sở hữu bổ nghĩa cho danh từ hoặc tân ngữ [O]'
  },
  it: {
    ipa: '/ɪt/',
    posName: 'Đại từ nhân xưng',
    posCode: 'Pron',
    meaning: 'nó, điều đó',
    role: 'Chủ ngữ [S] hoặc tân ngữ [O]'
  },
  your: {
    ipa: '/jɔːr/',
    posName: 'Tính từ sở hữu',
    posCode: 'Det',
    meaning: 'của bạn, của các bạn',
    role: 'Định từ bổ nghĩa cho danh từ đứng sau'
  },
  our: {
    ipa: '/aʊər/',
    posName: 'Tính từ sở hữu',
    posCode: 'Det',
    meaning: 'của chúng tôi, của chúng ta',
    role: 'Định từ bổ nghĩa cho danh từ đứng sau'
  },
  that: {
    ipa: '/ðæt/',
    posName: 'Đại từ chỉ định / Liên từ',
    posCode: 'Pron',
    meaning: 'đó, kia (chỉ định) / rằng, mà (liên từ nối mệnh đề)',
    role: 'Định từ chỉ định hoặc liên từ nối mệnh đề kết quả (so... that)'
  },
  this: {
    ipa: '/ðɪs/',
    posName: 'Đại từ chỉ định / Tính từ chỉ định',
    posCode: 'Pron',
    meaning: 'này, cái này',
    role: 'Định từ chỉ định hoặc chủ ngữ'
  },
  these: {
    ipa: '/ðiːz/',
    posName: 'Từ chỉ định số nhiều',
    posCode: 'Det',
    meaning: 'những cái này, các cái này',
    role: 'Định từ bổ nghĩa cho danh từ số nhiều đứng sau'
  },
  some: {
    ipa: '/sʌm/',
    posName: 'Lượng từ / Định từ',
    posCode: 'Det',
    meaning: 'một số, một ít',
    role: 'Bổ nghĩa số lượng cho danh từ'
  },
  more: {
    ipa: '/mɔːr/',
    posName: 'Phó từ chỉ mức độ / Lượng từ',
    posCode: 'Adv',
    meaning: 'nhiều hơn, thêm nữa',
    role: 'Bổ nghĩa mức độ cho động từ (invest more)'
  },
  much: {
    ipa: '/mʌtʃ/',
    posName: 'Lượng từ / Phó từ chỉ mức độ',
    posCode: 'Det',
    meaning: 'nhiều (đi với danh từ không đếm được)',
    role: 'Bổ nghĩa số lượng (too much fast food)'
  },
  everyone: {
    ipa: '/ˈev.ri.wʌn/',
    posName: 'Đại từ bất định',
    posCode: 'Pron',
    meaning: 'mọi người, tất cả mọi người',
    role: 'Tân ngữ [O] hoặc chủ ngữ [S]'
  },
  anything: {
    ipa: '/ˈen.i.θɪŋ/',
    posName: 'Đại từ bất định',
    posCode: 'Pron',
    meaning: 'bất cứ điều gì, cái gì',
    role: 'Tân ngữ [O] trong câu phủ định (couldn\'t do anything)'
  },
  other: {
    ipa: '/ˈʌð.ər/',
    posName: 'Định từ / Tính từ',
    posCode: 'Det',
    meaning: 'khác',
    role: 'Bổ nghĩa cho danh từ số nhiều (other nations)'
  },
  two: {
    ipa: '/tuː/',
    posName: 'Số từ',
    posCode: 'Det',
    meaning: 'hai (2)',
    role: 'Bổ nghĩa số lượng cho danh từ (the two countries)'
  },
  '15': {
    ipa: '/ˌfɪfˈtiːn/',
    posName: 'Số từ (Fifteen)',
    posCode: 'Det',
    meaning: 'mười lăm (15)',
    role: 'Bổ nghĩa số lượng cho kilometers'
  },
  '13th': {
    ipa: '/ˌθɜːˈtiːnθ/',
    posName: 'Số thứ tự (Thirteenth)',
    posCode: 'Det',
    meaning: 'thứ mười ba (ngày 13)',
    role: 'Bổ nghĩa cho thứ Sáu ngày 13 (Friday the 13th)'
  },

  // --- GIỚI TỪ & LIÊN TỪ ---
  with: {
    ipa: '/wɪð/',
    posName: 'Giới từ',
    posCode: 'Prep',
    meaning: 'với, cùng với, bằng',
    role: 'Giới từ liên kết đối tượng hoặc phương thức biểu đạt'
  },
  for: {
    ipa: '/fɔːr/',
    posName: 'Giới từ',
    posCode: 'Prep',
    meaning: 'cho, vì, đối với',
    role: 'Giới từ chỉ mục đích hoặc tân ngữ gián tiếp'
  },
  on: {
    ipa: '/ɒn/',
    posName: 'Giới từ nơi chốn / thời gian',
    posCode: 'Prep',
    meaning: 'trên, vào (ngày)',
    role: 'Giới từ chỉ vị trí tiếp xúc bề mặt hoặc sự kiện'
  },
  about: {
    ipa: '/əˈbaʊt/',
    posName: 'Giới từ',
    posCode: 'Prep',
    meaning: 'về, liên quan đến',
    role: 'Giới từ liên kết nội dung chủ đề (tips about local restaurants)'
  },
  across: {
    ipa: '/əˈkrɒs/',
    posName: 'Giới từ / Trạng từ',
    posCode: 'Prep',
    meaning: 'băng qua, ngang qua',
    role: 'Giới từ chỉ phương hướng di chuyển'
  },
  into: {
    ipa: '/ˈɪn.tuː/',
    posName: 'Giới từ chỉ hướng',
    posCode: 'Prep',
    meaning: 'vào trong',
    role: 'Giới từ chỉ hướng chuyển động vào bên trong'
  },
  to: {
    ipa: '/tuː/',
    posName: 'Dấu hiệu nguyên mẫu / Giới từ',
    posCode: 'INF',
    meaning: 'dấu hiệu đi kèm động từ nguyên thể to-V hoặc giới từ hướng đến',
    role: 'Dấu hiệu nguyên mẫu to-infinitive hoặc giới từ',
  },
  away: {
    ipa: '/əˈweɪ/',
    posName: 'Trạng từ phương hướng',
    posCode: 'Adv',
    meaning: 'xa, đi xa, rời khỏi',
    role: 'Bổ nghĩa cho động từ (throw it away)'
  },
  up: {
    ipa: '/ʌp/',
    posName: 'Trạng từ / Giới từ',
    posCode: 'Adv',
    meaning: 'lên, lên trên',
    role: 'Bổ nghĩa hướng chuyển động cho động từ (speed up, stood up)'
  },
  and: {
    ipa: '/ænd/',
    posName: 'Liên từ đẳng lập',
    posCode: 'Conj',
    meaning: 'và',
    role: 'Liên kết các từ hoặc mệnh đề đồng đẳng cú pháp'
  },
  because: {
    ipa: '/bɪˈkɒz/',
    posName: 'Liên từ chỉ nguyên nhân',
    posCode: 'Conj',
    meaning: 'bởi vì',
    role: 'Nối mệnh đề chỉ nguyên nhân với mệnh đề chính'
  },
  too: {
    ipa: '/tuː/',
    posName: 'Phó từ chỉ mức độ',
    posCode: 'Adv',
    meaning: 'quá, cũng vậy',
    role: 'Bổ nghĩa mức độ cho tính từ (too bad to go, too careless)'
  },
  nearly: {
    ipa: '/ˈnɪə.li/',
    posName: 'Trạng từ chỉ mức độ',
    posCode: 'Adv',
    meaning: 'gần như, suýt',
    role: 'Bổ nghĩa mức độ cho động từ'
  },
  exceptionally: {
    ipa: '/ɪkˈsep.ʃən.əl.i/',
    posName: 'Trạng từ chỉ mức độ',
    posCode: 'Adv',
    meaning: 'đặc biệt, xuất chúng',
    role: 'Bổ nghĩa mức độ cho tính từ "intelligent"'
  },
  easily: {
    ipa: '/ˈiː.zəl.i/',
    posName: 'Trạng từ cách thức',
    posCode: 'Adv',
    meaning: 'một cách dễ dàng',
    role: 'Bổ nghĩa cách thức cho động từ "installed"'
  },
  heavily: {
    ipa: '/ˈhev.əl.i/',
    posName: 'Trạng từ cách thức / mức độ',
    posCode: 'Adv',
    meaning: 'nặng nề, tầm tã (mưa to)',
    role: 'Bổ nghĩa mức độ cho động từ "rains"'
  },

  // --- CÁC ĐỘNG TỪ BỔ SUNG ---
  told: {
    ipa: '/təʊld/',
    posName: 'Động từ quá khứ (V2 của tell)',
    posCode: 'V',
    meaning: 'đã kể, đã bảo',
    role: 'Động từ truyền đạt (V_give) nhận 2 tân ngữ (O_ind + O_dir)'
  },
  lent: {
    ipa: '/lent/',
    posName: 'Động từ quá khứ (V2 của lend)',
    posCode: 'V',
    meaning: 'đã cho mượn, đã cho vay',
    role: 'Động từ trao tặng (V_give) nhận 2 tân ngữ (O_ind + O_dir)'
  },
  show: {
    ipa: '/ʃəʊ/',
    posName: 'Động từ nguyên mẫu',
    posCode: 'V',
    meaning: 'cho xem, trình bày',
    role: 'Động từ trao tặng nhận 2 tân ngữ sau modal verb "will"'
  },
  bring: {
    ipa: '/brɪŋ/',
    posName: 'Động từ nguyên mẫu',
    posCode: 'V',
    meaning: 'mang lại, đem đến',
    role: 'Động từ nguyên mẫu sau modal verb "could"'
  },
  brings: {
    ipa: '/brɪŋz/',
    posName: 'Động từ ngôi 3 số ít',
    posCode: 'V',
    meaning: 'mang lại, đem đến',
    role: 'Động cơ vị ngữ [V] ngôi 3 số ít'
  },
  drive: {
    ipa: '/draɪv/',
    posName: 'Động từ nguyên mẫu',
    posCode: 'V',
    meaning: 'lái xe',
    role: 'Động từ nguyên mẫu sau modal verb "must"'
  },
  speak: {
    ipa: '/spiːk/',
    posName: 'Động từ nguyên mẫu',
    posCode: 'V',
    meaning: 'nói, nói chuyện',
    role: 'Động từ trong câu mệnh lệnh phủ định (Don\'t speak)'
  },
  caused: {
    ipa: '/kɔːzd/',
    posName: 'Động từ quá khứ (V2)',
    posCode: 'V',
    meaning: 'đã gây ra',
    role: 'Động cơ vị ngữ [V] tác động lên tân ngữ'
  },
  spilled: {
    ipa: '/spɪld/',
    posName: 'Động từ quá khứ (V2)',
    posCode: 'V',
    meaning: 'đã làm tràn, làm đổ (sữa)',
    role: 'Động cơ vị ngữ [V] hành động'
  },
  bore: {
    ipa: '/bɔːr/',
    posName: 'Động từ gốc (Root verb)',
    posCode: 'V',
    meaning: 'làm buồn chán',
    role: 'Từ gốc tạo thành tính từ bored và boring'
  },
  disappoint: {
    ipa: '/ˌdɪs.əˈpɔɪnt/',
    posName: 'Động từ gốc (Root verb)',
    posCode: 'V',
    meaning: 'làm thất vọng',
    role: 'Từ gốc tạo thành tính từ disappointed'
  },
  excite: {
    ipa: '/ɪkˈsaɪt/',
    posName: 'Động từ gốc (Root verb)',
    posCode: 'V',
    meaning: 'làm phấn khích, kích động',
    role: 'Từ gốc tạo thành tính từ exciting'
  },
  interest: {
    ipa: '/ˈɪn.trəst/',
    posName: 'Động từ gốc / Danh từ',
    posCode: 'V',
    meaning: 'gây hứng thú, quan tâm',
    role: 'Từ gốc tạo thành tính từ interested'
  },
  tire: {
    ipa: '/taɪər/',
    posName: 'Động từ gốc / Danh từ',
    posCode: 'V',
    meaning: 'làm mệt mỏi / lốp xe',
    role: 'Từ gốc tạo tính từ tired hoặc danh từ lốp xe'
  },
  depress: {
    ipa: '/dɪˈpres/',
    posName: 'Động từ gốc (Root verb)',
    posCode: 'V',
    meaning: 'làm suy sụp, làm buồn nản',
    role: 'Từ gốc tạo thành tính từ depressing'
  },
  stood: {
    ipa: '/stʊd/',
    posName: 'Động từ quá khứ (V2 của stand)',
    posCode: 'V',
    meaning: 'đã đứng dậy (stood up)',
    role: 'Nội động từ vị ngữ [V]'
  },
  learning: {
    ipa: '/ˈlɜː.nɪŋ/',
    posName: 'Danh động từ (V-ing)',
    posCode: 'N',
    meaning: 'việc học tập, nghiên cứu',
    role: 'Tân ngữ của giới từ "in" (in learning AI)'
  },
  running: {
    ipa: '/ˈrʌn.ɪŋ/',
    posName: 'Danh động từ (V-ing)',
    posCode: 'V',
    meaning: 'việc chạy bộ, đang chạy',
    role: 'Tân ngữ của giới từ "after" (after running)'
  },
  eating: {
    ipa: '/ˈiː.tɪŋ/',
    posName: 'Danh động từ (V-ing)',
    posCode: 'N',
    meaning: 'việc ăn uống',
    role: 'Chủ ngữ [S] của câu (Eating too much...)'
  },
  reading: {
    ipa: '/ˈriː.dɪŋ/',
    posName: 'Danh động từ / Tính từ bổ nghĩa',
    posCode: 'N',
    meaning: 'việc đọc (reading passage = đoạn văn đọc hiểu)',
    role: 'Bổ nghĩa cho danh từ "passage"'
  },
  reviewing: {
    ipa: '/rɪˈvjuː.ɪŋ/',
    posName: 'Danh động từ (V-ing)',
    posCode: 'V',
    meaning: 'việc ôn tập, kiểm tra lại',
    role: 'Tân ngữ của giới từ "in" (in reviewing the lessons)'
  },
  selling: {
    ipa: '/ˈsel.ɪŋ/',
    posName: 'Danh động từ (V-ing)',
    posCode: 'V',
    meaning: 'việc bán (trước khi bán)',
    role: 'Tân ngữ của giới từ "before" (before selling it)'
  },
  joining: {
    ipa: '/ˈdʒɔɪ.nɪŋ/',
    posName: 'Danh động từ (V-ing)',
    posCode: 'V',
    meaning: 'việc tham gia, gia nhập khóa học',
    role: 'Tân ngữ của giới từ "before" (before joining the course)'
  },
  practicing: {
    ipa: '/ˈpræk.tɪs.ɪŋ/',
    posName: 'Danh động từ (V-ing)',
    posCode: 'N',
    meaning: 'việc luyện tập thường xuyên',
    role: 'Chủ ngữ [S] của câu'
  },
  receiving: {
    ipa: '/rɪˈsiː.vɪŋ/',
    posName: 'Danh động từ (V-ing)',
    posCode: 'V',
    meaning: 'việc nhận được',
    role: 'Tân ngữ của giới từ "after"'
  },
  sings: {
    ipa: '/sɪŋz/',
    posName: 'Động từ thì hiện tại đơn',
    posCode: 'V',
    meaning: 'hát',
    role: 'Nội động từ vị ngữ [V] ngôi 3 số ít'
  },
  rains: {
    ipa: '/reɪnz/',
    posName: 'Động từ thì hiện tại đơn',
    posCode: 'V',
    meaning: 'mưa',
    role: 'Động cơ vị ngữ trong mệnh đề điều kiện "when it rains"'
  },
  helps: {
    ipa: '/helps/',
    posName: 'Động từ thì hiện tại đơn',
    posCode: 'V',
    meaning: 'giúp đỡ',
    role: 'Động cơ vị ngữ [V] ngôi 3 số ít'
  },
  wants: {
    ipa: '/wɒnts/',
    posName: 'Động từ thì hiện tại đơn',
    posCode: 'V',
    meaning: 'muốn',
    role: 'Ngoại động từ vị ngữ [V]'
  },
  seems: {
    ipa: '/siːmz/',
    posName: 'Liên động từ (Linking Verb)',
    posCode: 'V',
    meaning: 'có vẻ, dường như',
    role: 'Liên động từ nối chủ ngữ với bổ ngữ [S = C]'
  },
  appreciated: {
    ipa: '/əˈpriː.ʃi.eɪ.tɪd/',
    posName: 'Động từ quá khứ (V2)',
    posCode: 'V',
    meaning: 'đã trân trọng, đánh giá cao',
    role: 'Động cơ vị ngữ [V] ở quá khứ đơn'
  },
  introduced: {
    ipa: '/ˌɪn.trəˈdjuːst/',
    posName: 'Quá khứ phân từ (V3)',
    posCode: 'V',
    meaning: 'đã đưa vào áp dụng, giới thiệu',
    role: 'Vị ngữ trong thì hiện tại hoàn thành (has introduced)'
  },
  ordered: {
    ipa: '/ˈɔː.dəd/',
    posName: 'Động từ quá khứ (V2)',
    posCode: 'V',
    meaning: 'đã gọi món, đã đặt hàng',
    role: 'Động cơ vị ngữ [V]'
  },
  punished: {
    ipa: '/ˈpʌn.ɪʃt/',
    posName: 'Quá khứ phân từ (V3) trong thể bị động',
    posCode: 'V',
    meaning: 'bị phạt, bị trừng phạt',
    role: 'Vị ngữ bị động (was punished)'
  },
  decorated: {
    ipa: '/ˈdek.ə.reɪ.tɪd/',
    posName: 'Quá khứ phân từ trong thể bị động',
    posCode: 'V',
    meaning: 'được trang trí, trang hoàng',
    role: 'Vị ngữ bị động (was decorated brightly)'
  },
  develop: {
    ipa: '/dɪˈvel.əp/',
    posName: 'Động từ nguyên mẫu',
    posCode: 'V',
    meaning: 'phát triển',
    role: 'Động từ nguyên mẫu sau "helps children develop"'
  },
  invest: {
    ipa: '/ɪnˈvest/',
    posName: 'Động từ nguyên mẫu',
    posCode: 'V',
    meaning: 'đầu tư',
    role: 'Động từ nguyên mẫu sau modal verb "should"'
  },
  need: {
    ipa: '/niːd/',
    posName: 'Động từ nguyên mẫu / Trợ động từ',
    posCode: 'V',
    meaning: 'cần',
    role: 'Động cơ vị ngữ [V] (need to modernize)'
  },
  save: {
    ipa: '/seɪv/',
    posName: 'Động từ nguyên mẫu',
    posCode: 'V',
    meaning: 'cứu giúp, bảo vệ, tiết kiệm',
    role: 'Động từ nguyên mẫu sau "to save"'
  },
  fix: {
    ipa: '/fɪks/',
    posName: 'Động từ',
    posCode: 'VERB',
    meaning: 'sửa chữa, khắc phục',
    role: 'Động từ nguyên mẫu trong cụm trạng từ chỉ mục đích [Purpose Adverbial]',
    syntacticRole: 'Purpose Adverbial',
    grammarExplanation: 'Động từ nguyên mẫu đứng sau dấu hiệu "to" trong cụm to-infinitive chỉ mục đích ("to fix the grammar errors").'
  },
  finish: {
    ipa: '/ˈfɪn.ɪʃ/',
    posName: 'Động từ nguyên mẫu',
    posCode: 'V',
    meaning: 'hoàn thành, xong',
    role: 'Động từ nguyên mẫu sau "will"'
  },
  go: {
    ipa: '/ɡəʊ/',
    posName: 'Động từ nguyên mẫu',
    posCode: 'V',
    meaning: 'đi (go camping: đi cắm trại)',
    role: 'Động từ nguyên mẫu sau "to go"'
  },
  thank: {
    ipa: '/θæŋk/',
    posName: 'Động từ',
    posCode: 'V',
    meaning: 'cảm ơn',
    role: 'Động từ trong cụm "Thank you"'
  },
  travel: {
    ipa: '/ˈtræv.əl/',
    posName: 'Động từ nguyên mẫu',
    posCode: 'V',
    meaning: 'du lịch, di chuyển',
    role: 'Động từ nguyên mẫu sau "will"'
  },
  worry: {
    ipa: '/ˈwʌr.i/',
    posName: 'Động từ nguyên mẫu',
    posCode: 'V',
    meaning: 'lo lắng',
    role: 'Động từ nguyên mẫu sau "don\'t worry"'
  },
  work: {
    ipa: '/wɜːk/',
    posName: 'Động từ nguyên mẫu / Danh từ',
    posCode: 'V',
    meaning: 'làm việc / công việc',
    role: 'Động từ sau "used to work" hoặc danh từ'
  },
  used: {
    ipa: '/juːzd/',
    posName: 'Động từ đặc biệt (used to)',
    posCode: 'V',
    meaning: 'đã từng (chỉ thói quen trong quá khứ)',
    role: 'Thành phần vị ngữ cấu trúc "used to + V"'
  },
  hurt: {
    ipa: '/hɜːt/',
    posName: 'Động từ quá khứ / Tính từ',
    posCode: 'V',
    meaning: 'làm tổn thương, bị đau',
    role: 'Động cơ vị ngữ [V]'
  },
  consider: {
    ipa: '/kənˈsɪd.ər/',
    posName: 'Động từ nhận thức (Verb)',
    posCode: 'V',
    meaning: 'xem như, coi như',
    role: 'Ngoại động từ vị ngữ [V] (consider this task a challenge)'
  },
  replay: {
    ipa: '/ˌriːˈpleɪ/',
    posName: 'Động từ ghép tiền tố re-',
    posCode: 'V',
    meaning: 'phát lại, chiếu lại',
    role: 'Động từ nguyên mẫu sau "to replay"'
  },
  rewrite: {
    ipa: '/ˌriːˈraɪt/',
    posName: 'Động từ ghép tiền tố re-',
    posCode: 'V',
    meaning: 'viết lại',
    role: 'Động từ nguyên mẫu sau "to rewrite"'
  },
  steer: {
    ipa: '/stɪər/',
    posName: 'Động từ nguyên mẫu',
    posCode: 'V',
    meaning: 'lái, điều khiển tay lái',
    role: 'Động từ nguyên mẫu sau modal verb "could"'
  },
  throw: {
    ipa: '/θrəʊ/',
    posName: 'Động từ nguyên mẫu',
    posCode: 'V',
    meaning: 'ném, vứt (throw away: vứt đi)',
    role: 'Động từ mệnh lệnh'
  },

  // --- TÍNH TỪ ---
  white: {
    ipa: '/waɪt/',
    posName: 'Tính từ chỉ màu sắc',
    posCode: 'Adj',
    meaning: 'màu trắng',
    role: 'Bổ nghĩa tính chất cho danh từ "rabbit"'
  },
  sharp: {
    ipa: '/ʃɑːp/',
    posName: 'Tính từ phẩm chất',
    posCode: 'Adj',
    meaning: 'sắc bén',
    role: 'Bổ nghĩa phẩm chất cho danh từ "knife"'
  },
  good: {
    ipa: '/ɡʊd/',
    posName: 'Tính từ phẩm chất',
    posCode: 'Adj',
    meaning: 'tốt, lành mạnh',
    role: 'Bổ nghĩa cho danh từ "diet" (a good diet)'
  },
  great: {
    ipa: '/ɡreɪt/',
    posName: 'Tính từ phẩm chất',
    posCode: 'Adj',
    meaning: 'to lớn, tuyệt vời',
    role: 'Bổ nghĩa cho danh từ "contribution"'
  },
  hot: {
    ipa: '/hɒt/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'nóng bức, gay gắt',
    role: 'Bổ nghĩa cho danh từ "sun"'
  },
  long: {
    ipa: '/lɒŋ/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'dài, kéo dài',
    role: 'Bổ nghĩa kích thước/thời gian cho "journey"'
  },
  'long-term': {
    ipa: '/ˌlɒŋˈtɜːm/',
    posName: 'Tính từ ghép',
    posCode: 'Adj',
    meaning: 'dài hạn, lâu dài',
    role: 'Bổ nghĩa tính chất cho "health"'
  },
  'eco-friendly': {
    ipa: '/ˌiː.kəʊˈfrend.li/',
    posName: 'Tính từ ghép',
    posCode: 'Adj',
    meaning: 'thân thiện với môi trường',
    role: 'Bổ nghĩa phẩm chất cho danh từ tài nguyên'
  },
  artificial: {
    ipa: '/ˌɑː.tɪˈfɪʃ.əl/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'nhân tạo',
    role: 'Bổ nghĩa cho danh từ "intelligence" (AI)'
  },
  creative: {
    ipa: '/kriˈeɪ.tɪv/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'sáng tạo',
    role: 'Bổ nghĩa cho danh từ "ability"'
  },
  harmful: {
    ipa: '/ˈhɑːm.fəl/',
    posName: 'Tính từ đuôi -ful',
    posCode: 'Adj',
    meaning: 'có hại, độc hại',
    role: 'Bổ ngữ tính từ sau to be (is harmful to)'
  },
  physical: {
    ipa: '/ˈfɪz.ɪ.kəl/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'thuộc thể chất, cơ thể',
    role: 'Bổ nghĩa cho danh từ "health"'
  },
  technical: {
    ipa: '/ˈtek.nɪ.kəl/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'thuộc kỹ thuật, chuyên môn',
    role: 'Bổ nghĩa cho danh từ "problem"'
  },
  rural: {
    ipa: '/ˈrʊə.rəl/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'thuộc nông thôn',
    role: 'Bổ nghĩa cho danh từ "development"'
  },
  solar: {
    ipa: '/ˈsəʊ.lər/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'thuộc mặt trời, quang năng',
    role: 'Bổ nghĩa cho danh từ "energy"'
  },
  medical: {
    ipa: '/ˈmed.ɪ.kəl/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'thuộc y tế, y học',
    role: 'Bổ nghĩa cho danh từ "research"'
  },
  historical: {
    ipa: '/hɪˈstɒr.ɪ.kəl/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'thuộc lịch sử',
    role: 'Bổ nghĩa cho danh từ "film"'
  },
  impossible: {
    ipa: '/ɪmˈpɒs.ə.bəl/',
    posName: 'Tính từ tiền tố im-',
    posCode: 'Adj',
    meaning: 'bất khả thi, không thể',
    role: 'Bổ ngữ tính từ cho chủ ngữ [S = C]'
  },
  unfair: {
    ipa: '/ʌnˈfeər/',
    posName: 'Tính từ tiền tố un-',
    posCode: 'Adj',
    meaning: 'bất công, không công bằng',
    role: 'Bổ ngữ tính từ cho chủ ngữ [S = C]'
  },
  valid: {
    ipa: '/ˈvæl.ɪd/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'hợp lệ, còn hiệu lực',
    role: 'Bổ nghĩa phẩm chất cho "license"'
  },
  full: {
    ipa: '/fʊl/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'đầy, no (with your mouth full: đầy miệng)',
    role: 'Bổ ngữ miêu tả trạng thái'
  },
  thin: {
    ipa: '/θɪn/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'mỏng, gầy',
    role: 'Bổ nghĩa cho danh từ "scarf"'
  },
  silver: {
    ipa: '/ˈsɪl.vər/',
    posName: 'Tính từ / Danh từ chất liệu',
    posCode: 'Adj',
    meaning: 'bằng bạc, màu bạc',
    role: 'Bổ nghĩa chất liệu cho danh từ "ring"'
  },
  big: {
    ipa: '/bɪɡ/',
    posName: 'Tính từ kích cỡ',
    posCode: 'Adj',
    meaning: 'to lớn, bự',
    role: 'Bổ nghĩa kích cỡ cho danh từ "parcel"'
  },
  latest: {
    ipa: '/ˈleɪ.tɪst/',
    posName: 'Tính từ so sánh hơn nhất',
    posCode: 'Adj',
    meaning: 'mới nhất, gần đây nhất',
    role: 'Bổ nghĩa thời điểm cho danh từ "painting"'
  },
  breaking: {
    ipa: '/ˈbreɪ.kɪŋ/',
    posName: 'Hiện tại phân từ làm tính từ',
    posCode: 'Adj',
    meaning: 'đột xuất, sốt dẻo (breaking news = tin tức nóng hổi)',
    role: 'Bổ nghĩa cho danh từ "news"'
  },
  broken: {
    ipa: '/ˈbrəʊ.kən/',
    posName: 'Quá khứ phân từ làm tính từ',
    posCode: 'Adj',
    meaning: 'bị vỡ, bị hỏng',
    role: 'Bổ nghĩa cho danh từ "phone"'
  },
  injured: {
    ipa: '/ˈɪn.dʒəd/',
    posName: 'Tính từ phân từ',
    posCode: 'Adj',
    meaning: 'bị thương',
    role: 'Bổ nghĩa cho danh từ "puppy"'
  },
  exhausting: {
    ipa: '/ɪɡˈzɔː.stɪŋ/',
    posName: 'Tính từ đuôi -ing (bản chất)',
    posCode: 'Adj',
    meaning: 'gây kiệt sức, mệt mỏi',
    role: 'Bổ ngữ tính từ miêu tả bản chất chuyến đi'
  },
  useless: {
    ipa: '/ˈjuːs.ləs/',
    posName: 'Tính từ hậu tố -less',
    posCode: 'Adj',
    meaning: 'vô dụng, vô ích',
    role: 'Bổ ngữ tính từ sau to be'
  },
  main: {
    ipa: '/meɪn/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'chính, cốt lõi',
    role: 'Bổ nghĩa cho danh từ "purpose"'
  },
  fast: {
    ipa: '/fɑːst/',
    posName: 'Tính từ / Trạng từ',
    posCode: 'Adj',
    meaning: 'nhanh, đồ ăn nhanh (fast food)',
    role: 'Bổ nghĩa cho danh từ "food"'
  },
  'high-paying': {
    ipa: '/ˌhaɪˈpeɪ.ɪŋ/',
    posName: 'Tính từ ghép',
    posCode: 'Adj',
    meaning: 'lương cao, đãi ngộ tốt',
    role: 'Bổ nghĩa cho danh từ "job"'
  },

  // --- DANH TỪ ---
  father: {
    ipa: '/ˈfɑː.ðər/',
    posName: 'Danh từ chỉ người',
    posCode: 'N',
    meaning: 'bố, người cha',
    role: 'Chủ ngữ [S] tạo lực trong câu'
  },
  bicycle: {
    ipa: '/ˈbaɪ.sɪ.kəl/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'chiếc xe đạp',
    role: 'Tân ngữ trực tiếp [O_dir] được mua tặng'
  },
  ring: {
    ipa: '/rɪŋ/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'chiếc nhẫn',
    role: 'Tân ngữ trực tiếp [O_dir] được tặng'
  },
  story: {
    ipa: '/ˈstɔː.ri/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'câu chuyện',
    role: 'Tân ngữ trực tiếp [O_dir] được kể'
  },
  bottle: {
    ipa: '/ˈbɒt.əl/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'chai, lọ',
    role: 'Tân ngữ trực tiếp'
  },
  water: {
    ipa: '/ˈwɔː.tər/',
    posName: 'Danh từ không đếm được',
    posCode: 'N',
    meaning: 'nước',
    role: 'Bổ nghĩa cho chai nước (bottle of water)'
  },
  classmate: {
    ipa: '/ˈklɑːs.meɪt/',
    posName: 'Danh từ chỉ người',
    posCode: 'N',
    meaning: 'bạn cùng lớp',
    role: 'Tân ngữ gián tiếp [O_ind] người nhận tiền mượn'
  },
  money: {
    ipa: '/ˈmʌn.i/',
    posName: 'Danh từ không đếm được',
    posCode: 'N',
    meaning: 'tiền bạc',
    role: 'Tân ngữ trực tiếp [O_dir] vật phẩm cho mượn'
  },
  manager: {
    ipa: '/ˈmæn.ɪ.dʒər/',
    posName: 'Danh từ chỉ người',
    posCode: 'N',
    meaning: 'người quản lý, giám đốc',
    role: 'Chủ ngữ [S] trong câu'
  },
  job: {
    ipa: '/dʒɒb/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'công việc',
    role: 'Tân ngữ trực tiếp [O_dir] được trao cơ hội'
  },
  parcel: {
    ipa: '/ˈpɑː.səl/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'gói hàng, bưu kiện',
    role: 'Tân ngữ trực tiếp [O_dir] được gửi'
  },
  family: {
    ipa: '/ˈfæm.əl.i/',
    posName: 'Danh từ tập hợp',
    posCode: 'N',
    meaning: 'gia đình',
    role: 'Tân ngữ gián tiếp [O_ind] người được nấu ăn cho'
  },
  dinner: {
    ipa: '/ˈdɪn.ər/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'bữa tối',
    role: 'Tân ngữ trực tiếp [O_dir] món ăn được nấu'
  },
  painting: {
    ipa: '/ˈpeɪn.tɪŋ/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'bức tranh, tác phẩm hội họa',
    role: 'Tân ngữ trực tiếp [O_dir] được mang ra cho xem'
  },
  son: {
    ipa: '/sʌn/',
    posName: 'Danh từ chỉ người',
    posCode: 'N',
    meaning: 'con trai',
    role: 'Tân ngữ gián tiếp [O_ind] người nhận lời hứa'
  },
  vacation: {
    ipa: '/veɪˈkeɪ.ʃən/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'kỳ nghỉ, chuyến du lịch',
    role: 'Tân ngữ trực tiếp [O_dir] được hứa hẹn'
  },
  bill: {
    ipa: '/bɪl/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'hóa đơn thanh toán',
    role: 'Tân ngữ trực tiếp [O_dir] được mang lại'
  },
  rules: {
    ipa: '/ruːlz/',
    posName: 'Danh từ số nhiều',
    posCode: 'N',
    meaning: 'các quy tắc, điều lệ an toàn',
    role: 'Tân ngữ trực tiếp'
  },
  tourists: {
    ipa: '/ˈtʊə.rɪsts/',
    posName: 'Danh từ số nhiều chỉ người',
    posCode: 'N',
    meaning: 'các du khách',
    role: 'Chủ ngữ [S] trong câu'
  },
  officer: {
    ipa: '/ˈɒf.ɪ.sər/',
    posName: 'Danh từ chỉ người',
    posCode: 'N',
    meaning: 'viên cảnh sát, cán bộ',
    role: 'Tân ngữ gián tiếp [O_ind]'
  },
  license: {
    ipa: '/ˈlaɪ.səns/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'giấy phép, bằng lái xe',
    role: 'Tân ngữ trực tiếp [O_dir]'
  },
  scarf: {
    ipa: '/skɑːf/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'chiếc khăn quàng cổ',
    role: 'Tân ngữ trực tiếp [O_dir]'
  },
  behavior: {
    ipa: '/bɪˈheɪv.jər/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'hành vi, cách ứng xử',
    role: 'Tân ngữ của giới từ "because of"'
  },
  mouth: {
    ipa: '/maʊθ/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'miệng',
    role: 'Tân ngữ của giới từ "with"'
  },
  magician: {
    ipa: '/məˈdʒɪʃ.ən/',
    posName: 'Danh từ chỉ người',
    posCode: 'N',
    meaning: 'nhà ảo thuật',
    role: 'Chủ ngữ [S] người biểu diễn'
  },
  rabbit: {
    ipa: '/ˈræb.ɪt/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'con thỏ',
    role: 'Tân ngữ trực tiếp [O_dir] được biến ra'
  },
  accident: {
    ipa: '/ˈæk.sɪ.dənt/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'vụ tai nạn',
    role: 'Tân ngữ trực tiếp của động từ "caused"'
  },
  highway: {
    ipa: '/ˈhaɪ.weɪ/',
    posName: 'Danh từ nơi chốn',
    posCode: 'N',
    meaning: 'đường cao tốc',
    role: 'Tân ngữ của giới từ "on"'
  },
  puppy: {
    ipa: '/ˈpʌp.i/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'chú cún con',
    role: 'Tân ngữ của động từ "save"'
  },
  advice: {
    ipa: '/ədˈvaɪs/',
    posName: 'Danh từ không đếm được',
    posCode: 'N',
    meaning: 'lời khuyên, sự chỉ dẫn',
    role: 'Tân ngữ của giới từ "for"'
  },
  preparation: {
    ipa: '/ˌprep.ərˈeɪ.ʃən/',
    posName: 'Danh từ đuôi -tion',
    posCode: 'N',
    meaning: 'sự chuẩn bị, kỳ ôn luyện',
    role: 'Tân ngữ của giới từ "during"'
  },
  girl: {
    ipa: '/ɡɜːl/',
    posName: 'Danh từ chỉ người',
    posCode: 'N',
    meaning: 'cô bé, bé gái',
    role: 'Chủ ngữ [S] trong câu'
  },
  lecture: {
    ipa: '/ˈlek.tʃər/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'bài giảng, buổi thuyết trình',
    role: 'Chủ ngữ của mệnh đề phụ'
  },
  results: {
    ipa: '/rɪˈzʌlts/',
    posName: 'Danh từ số nhiều',
    posCode: 'N',
    meaning: 'các kết quả (kết quả thi)',
    role: 'Tân ngữ của giới từ "by"'
  },
  intelligence: {
    ipa: '/ɪnˈtel.ɪ.dʒəns/',
    posName: 'Danh từ trừu tượng',
    posCode: 'N',
    meaning: 'trí tuệ, trí thông minh (AI)',
    role: 'Danh từ trung tâm trong cụm từ'
  },
  movie: {
    ipa: '/ˈmuː.vi/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'bộ phim',
    role: 'Chủ ngữ [S] trong câu'
  },
  plot: {
    ipa: '/plɒt/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'cốt truyện',
    role: 'Bổ nghĩa cho "twist" (plot twist: bước ngoặt cốt truyện)'
  },
  twist: {
    ipa: '/twɪst/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'bước ngoặt bất ngờ, cú lật ngược',
    role: 'Tân ngữ của động từ "had"'
  },
  end: {
    ipa: '/end/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'hồi kết, đoạn kết',
    role: 'Tân ngữ của giới từ "at"'
  },
  sun: {
    ipa: '/sʌn/',
    posName: 'Danh từ thiên thể',
    posCode: 'N',
    meaning: 'mặt trời, ánh nắng',
    role: 'Tân ngữ của giới từ "in"'
  },
  journey: {
    ipa: '/ˈdʒɜː.ni/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'chuyến hành trình, chuyến đi',
    role: 'Chủ ngữ [S] trong câu'
  },
  scenery: {
    ipa: '/ˈsiː.nər.i/',
    posName: 'Danh từ không đếm được',
    posCode: 'N',
    meaning: 'phong cảnh, cảnh sắc thiên nhiên',
    role: 'Chủ ngữ [S] trong câu'
  },
  lighting: {
    ipa: '/ˈlaɪ.tɪŋ/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'hệ thống chiếu sáng, đèn đường',
    role: 'Danh từ bổ nghĩa cho "system"'
  },
  system: {
    ipa: '/ˈsɪs.təm/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'hệ thống',
    role: 'Tân ngữ của động từ "modernize"'
  },
  neighborhood: {
    ipa: '/ˈneɪ.bə.hʊd/',
    posName: 'Danh từ đuôi -hood',
    posCode: 'N',
    meaning: 'khu dân cư, khu phố lân cận',
    role: 'Tân ngữ của giới từ "in"'
  },
  class: {
    ipa: '/klɑːs/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'lớp học',
    role: 'Tân ngữ của giới từ "in"'
  },
  beach: {
    ipa: '/biːtʃ/',
    posName: 'Danh từ nơi chốn',
    posCode: 'N',
    meaning: 'bãi biển',
    role: 'Tân ngữ của giới từ "on"'
  },
  morning: {
    ipa: '/ˈmɔː.nɪŋ/',
    posName: 'Danh từ thời gian',
    posCode: 'N',
    meaning: 'buổi sáng',
    role: 'Cụm trạng ngữ thời gian (all morning)'
  },
  melody: {
    ipa: '/ˈmel.ə.di/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'giai điệu',
    role: 'Tân ngữ của động từ "sings"'
  },
  tom: {
    ipa: '/tɒm/',
    posName: 'Danh từ riêng (Tên người)',
    posCode: 'N',
    meaning: 'Tom (tên riêng)',
    role: 'Chủ ngữ [S] trong câu'
  },
  safety: {
    ipa: '/ˈseɪf.ti/',
    posName: 'Danh từ đuôi -ty',
    posCode: 'N',
    meaning: 'sự an toàn, an ninh',
    role: 'Danh từ bổ nghĩa cho "announcements"'
  },
  announcements: {
    ipa: '/əˈnaʊns.mənts/',
    posName: 'Danh từ số nhiều',
    posCode: 'N',
    meaning: 'các thông báo, lời hướng dẫn an toàn',
    role: 'Tân ngữ của cụm "listened to"'
  },
  factory: {
    ipa: '/ˈfæk.tər.i/',
    posName: 'Danh từ nơi chốn',
    posCode: 'N',
    meaning: 'nhà máy, xí nghiệp',
    role: 'Chủ ngữ [S] trong câu'
  },
  speed: {
    ipa: '/spiːd/',
    posName: 'Động từ / Danh từ',
    posCode: 'V',
    meaning: 'tăng tốc (speed up: đẩy nhanh), tốc độ',
    role: 'Động từ trong cụm "to speed up"'
  },
  production: {
    ipa: '/prəˈdʌk.ʃən/',
    posName: 'Danh từ đuôi -tion',
    posCode: 'N',
    meaning: 'sự sản xuất, sản lượng',
    role: 'Tân ngữ của cụm "speed up"'
  },
  knife: {
    ipa: '/naɪf/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'con dao',
    role: 'Chủ ngữ [S] trong câu'
  },
  kitchen: {
    ipa: '/ˈkɪtʃ.ən/',
    posName: 'Danh từ nơi chốn',
    posCode: 'N',
    meaning: 'nhà bếp',
    role: 'Tân ngữ của giới từ "in"'
  },
  camping: {
    ipa: '/ˈkæm.pɪŋ/',
    posName: 'Danh từ hoạt động',
    posCode: 'N',
    meaning: 'việc cắm trại',
    role: 'Tân ngữ theo sau động từ "go" (go camping)'
  },
  education: {
    ipa: '/ˌedʒ.ʊˈkeɪ.ʃən/',
    posName: 'Danh từ trừu tượng',
    posCode: 'N',
    meaning: 'nền giáo dục, sự giáo dục',
    role: 'Chủ ngữ [S] trong câu'
  },
  house: {
    ipa: '/haʊs/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'ngôi nhà',
    role: 'Tân ngữ của động từ "decorate"'
  },
  questions: {
    ipa: '/ˈkwes.tʃənz/',
    posName: 'Danh từ số nhiều',
    posCode: 'N',
    meaning: 'các câu hỏi (phỏng vấn)',
    role: 'Tân ngữ của động từ "answered"'
  },
  source: {
    ipa: '/sɔːs/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'nguồn, nguồn phát điện',
    role: 'Bổ ngữ cho chủ ngữ (S = C)'
  },
  scientists: {
    ipa: '/ˈsaɪən.tɪsts/',
    posName: 'Danh từ số nhiều chỉ người',
    posCode: 'N',
    meaning: 'các nhà khoa học',
    role: 'Chủ ngữ [S] trong câu'
  },
  lessons: {
    ipa: '/ˈles.ənz/',
    posName: 'Danh từ số nhiều',
    posCode: 'N',
    meaning: 'các bài học',
    role: 'Tân ngữ của danh động từ "reviewing"'
  },
  passage: {
    ipa: '/ˈpæs.ɪdʒ/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'đoạn văn (đọc hiểu)',
    role: 'Tân ngữ của động từ "shorten"'
  },
  birthday: {
    ipa: '/ˈbɜːθ.deɪ/',
    posName: 'Danh từ bổ nghĩa',
    posCode: 'N',
    meaning: 'sinh nhật',
    role: 'Bổ nghĩa cho danh từ "party" (birthday party)'
  },
  party: {
    ipa: '/ˈpɑː.ti/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'bữa tiệc',
    role: 'Tân ngữ của giới từ "for"'
  },
  explanation: {
    ipa: '/ˌek.spləˈneɪ.ʃən/',
    posName: 'Danh từ đuôi -tion',
    posCode: 'N',
    meaning: 'lời giải thích, sự sáng tỏ',
    role: 'Tân ngữ trực tiếp của "gave"'
  },
  problem: {
    ipa: '/ˈprɒb.ləm/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'vấn đề, sự cố kỹ thuật',
    role: 'Tân ngữ của giới từ "of"'
  },
  purpose: {
    ipa: '/ˈpɜː.pəs/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'mục đích, tôn chỉ',
    role: 'Chủ ngữ [S] trong câu'
  },
  relations: {
    ipa: '/rɪˈleɪ.ʃənz/',
    posName: 'Danh từ số nhiều',
    posCode: 'N',
    meaning: 'các mối quan hệ ngoại giao, bang giao',
    role: 'Tân ngữ của động từ "strengthen"'
  },
  nations: {
    ipa: '/ˈneɪ.ʃənz/',
    posName: 'Danh từ số nhiều',
    posCode: 'N',
    meaning: 'các quốc gia, dân tộc',
    role: 'Tân ngữ của giới từ "with"'
  },
  'ex-boss': {
    ipa: '/ˌeksˈbɒs/',
    posName: 'Danh từ ghép tiền tố ex-',
    posCode: 'N',
    meaning: 'sếp cũ, người quản lý cũ',
    role: 'Tân ngữ của động từ "met"'
  },
  'ex-colleague': {
    ipa: '/ˌeksˈkɒl.iːɡ/',
    posName: 'Danh từ ghép tiền tố ex-',
    posCode: 'N',
    meaning: 'đồng nghiệp cũ',
    role: 'Bổ ngữ cho chủ ngữ (S = C)'
  },
  "doctor's": {
    ipa: '/ˈdɒk.təz/',
    posName: 'Danh từ sở hữu cách',
    posCode: 'N',
    meaning: 'của bác sĩ',
    role: 'Định từ sở hữu cho "handwriting"'
  },
  "yesterday's": {
    ipa: '/ˈjes.tə.deɪz/',
    posName: 'Danh từ sở hữu cách',
    posCode: 'N',
    meaning: 'của ngày hôm qua',
    role: 'Bổ nghĩa thời gian cho "recital"'
  },
  drivers: {
    ipa: '/ˈdraɪ.vəz/',
    posName: 'Danh từ số nhiều chỉ người',
    posCode: 'N',
    meaning: 'các tài xế, người cầm lái',
    role: 'Chủ ngữ [S] trong câu'
  },
  test: {
    ipa: '/test/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'bài thi, bài kiểm tra (driving test: thi bằng lái)',
    role: 'Tân ngữ của động từ "failed"'
  },
  'pre-test': {
    ipa: '/ˌpriːˈtest/',
    posName: 'Danh từ ghép tiền tố pre-',
    posCode: 'N',
    meaning: 'bài kiểm tra đầu vào, bài thi thử nghiệm trước khóa học',
    role: 'Tân ngữ của cụm "take a pre-test"'
  },
  course: {
    ipa: '/kɔːs/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'khóa học, chương trình đào tạo',
    role: 'Tân ngữ của danh động từ "joining"'
  },
  subway: {
    ipa: '/ˈsʌb.weɪ/',
    posName: 'Danh từ ghép tiền tố sub-',
    posCode: 'N',
    meaning: 'tàu điện ngầm',
    role: 'Tân ngữ của giới từ "by"'
  },
  train: {
    ipa: '/treɪn/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'đoàn tàu, tàu hỏa',
    role: 'Chủ ngữ hoặc tân ngữ'
  },
  crew: {
    ipa: '/kruː/',
    posName: 'Danh từ tập hợp',
    posCode: 'N',
    meaning: 'phi hành đoàn, thủy thủ đoàn',
    role: 'Chủ ngữ [S] trong câu'
  },
  captain: {
    ipa: '/ˈkæp.tɪn/',
    posName: 'Danh từ chỉ người',
    posCode: 'N',
    meaning: 'thuyền trưởng, cơ trưởng',
    role: 'Chủ ngữ [S] trong câu'
  },
  film: {
    ipa: '/fɪlm/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'bộ phim',
    role: 'Tân ngữ của động từ "replay"'
  },
  phone: {
    ipa: '/fəʊn/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'điện thoại',
    role: 'Chủ ngữ của mệnh đề'
  },
  manual: {
    ipa: '/ˈmæn.ju.əl/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'sách hướng dẫn sử dụng',
    role: 'Chủ ngữ [S] trong câu'
  },
  user: {
    ipa: '/ˈjuː.zər/',
    posName: 'Danh từ bổ nghĩa',
    posCode: 'N',
    meaning: 'người dùng (user manual: sách hướng dẫn cho người dùng)',
    role: 'Bổ nghĩa cho danh từ "manual"'
  },
  mirror: {
    ipa: '/ˈmɪr.ər/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'chiếc gương',
    role: 'Tân ngữ của giới từ "in"'
  },
  minutes: {
    ipa: '/ˈmɪn.ɪts/',
    posName: 'Danh từ số nhiều',
    posCode: 'N',
    meaning: 'phút (thời gian)',
    role: 'Tân ngữ chỉ lượng thời gian'
  },
  errors: {
    ipa: '/ˈer.əz/',
    posName: 'Danh từ',
    posCode: 'NOUN',
    meaning: 'những lỗi sai, sai sót',
    role: 'Tân ngữ trực tiếp [Direct Object (DO)] hoặc danh từ trung tâm',
    syntacticRole: 'Direct Object (DO)',
    grammarExplanation: 'Danh từ số nhiều làm tân ngữ trực tiếp hoặc danh từ trung tâm trong cụm danh từ.'
  },
  essay: {
    ipa: '/ˈes.eɪ/',
    posName: 'Danh từ',
    posCode: 'NOUN',
    meaning: 'bài luận, bài viết',
    role: 'Tân ngữ trực tiếp [Direct Object (DO)] của động từ "rewrite"',
    syntacticRole: 'Direct Object (DO)',
    grammarExplanation: 'Danh từ làm tân ngữ trực tiếp chịu tác động của hành động "rewrite".'
  },
  luck: {
    ipa: '/lʌk/',
    posName: 'Danh từ không đếm được',
    posCode: 'N',
    meaning: 'sự may mắn, vận may',
    role: 'Tân ngữ của động từ "wished"'
  },
  opinion: {
    ipa: '/əˈpɪn.jən/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'ý kiến, quan điểm',
    role: 'Tân ngữ của động từ "asked"'
  },
  news: {
    ipa: '/njuːz/',
    posName: 'Danh từ không đếm được',
    posCode: 'N',
    meaning: 'tin tức',
    role: 'Tân ngữ của động từ "told"'
  },
  air: {
    ipa: '/eər/',
    posName: 'Danh từ không đếm được',
    posCode: 'N',
    meaning: 'không khí trong lành',
    role: 'Tân ngữ của động từ "breathed"'
  },
  injection: {
    ipa: '/ɪnˈdʒek.ʃən/',
    posName: 'Danh từ đuôi -tion',
    posCode: 'N',
    meaning: 'mũi tiêm thuốc',
    role: 'Chủ ngữ [S] trong câu'
  },

  // --- CÁC TỪ TRẮC NGHIỆM ĐUÔI TỪ LOẠI (TOPIC 6 OPTIONS) ---
  attentive: {
    ipa: '/əˈten.tɪv/',
    posName: 'Tính từ đuôi -ive',
    posCode: 'Adj',
    meaning: 'chăm chú, tập trung',
    role: 'Tính từ phẩm chất'
  },
  attention: {
    ipa: '/əˈten.ʃən/',
    posName: 'Danh từ đuôi -tion',
    posCode: 'N',
    meaning: 'sự chú ý, sự tập trung',
    role: 'Danh từ trừu tượng'
  },
  attentiveness: {
    ipa: '/əˈten.tɪv.nəs/',
    posName: 'Danh từ đuôi -ness',
    posCode: 'N',
    meaning: 'sự chăm chú, tính chu đáo',
    role: 'Danh từ phẩm chất'
  },
  contribute: {
    ipa: '/kənˈtrɪb.juːt/',
    posName: 'Động từ nguyên mẫu',
    posCode: 'V',
    meaning: 'đóng góp, cống hiến',
    role: 'Động từ hành động'
  },
  contribution: {
    ipa: '/ˌkɒn.trɪˈbjuː.ʃən/',
    posName: 'Danh từ đuôi -tion',
    posCode: 'N',
    meaning: 'sự đóng góp, cống hiến',
    role: 'Tân ngữ trực tiếp của động từ "appreciated"'
  },
  contributory: {
    ipa: '/kənˈtrɪb.jə.tər.i/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'đóng góp một phần vào',
    role: 'Tính từ bổ nghĩa'
  },
  contributive: {
    ipa: '/kənˈtrɪb.jə.tɪv/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'có tính đóng góp',
    role: 'Tính từ phẩm chất'
  },
  modernize: {
    ipa: '/ˈmɒd.ən.aɪz/',
    posName: 'Động từ đuôi -ize',
    posCode: 'V',
    meaning: 'hiện đại hóa, đổi mới',
    role: 'Động từ nguyên mẫu sau "need to"'
  },
  modernization: {
    ipa: '/ˌmɒd.ən.aɪˈzeɪ.ʃən/',
    posName: 'Danh từ đuôi -tion',
    posCode: 'N',
    meaning: 'sự hiện đại hóa',
    role: 'Danh từ trừu tượng'
  },
  modernly: {
    ipa: '/ˈmɒd.ən.li/',
    posName: 'Trạng từ đuôi -ly',
    posCode: 'Adv',
    meaning: 'một cách hiện đại',
    role: 'Trạng từ cách thức'
  },
  easiness: {
    ipa: '/ˈiː.zi.nəs/',
    posName: 'Danh từ đuôi -ness',
    posCode: 'N',
    meaning: 'sự dễ dàng, sự thanh thản',
    role: 'Danh từ trừu tượng'
  },
  easy: {
    ipa: '/ˈiː.zi/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'dễ dàng',
    role: 'Tính từ phẩm chất'
  },
  healthful: {
    ipa: '/ˈhelθ.fəl/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'có lợi cho sức khỏe, lành mạnh',
    role: 'Tính từ bổ nghĩa'
  },
  healthiness: {
    ipa: '/ˈhel.θi.nəs/',
    posName: 'Danh từ đuôi -ness',
    posCode: 'N',
    meaning: 'sự khỏe mạnh, tình trạng sung sức',
    role: 'Danh từ trừu tượng'
  },
  healthily: {
    ipa: '/ˈhel.θəl.i/',
    posName: 'Trạng từ đuôi -ly',
    posCode: 'Adv',
    meaning: 'một cách lành mạnh, khỏe khoắn',
    role: 'Trạng từ cách thức'
  },
  healthy: {
    ipa: '/ˈhel.θi/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'khỏe mạnh, lành mạnh',
    role: 'Tính từ phẩm chất'
  },
  brighten: {
    ipa: '/ˈbraɪ.tən/',
    posName: 'Động từ khuôn dập -en',
    posCode: 'V',
    meaning: 'làm bừng sáng, trở nên tươi sáng',
    role: 'Động từ hành động'
  },
  brightness: {
    ipa: '/ˈbraɪt.nəs/',
    posName: 'Danh từ đuôi -ness',
    posCode: 'N',
    meaning: 'độ sáng, sự rực rỡ',
    role: 'Danh từ trừu tượng'
  },
  short: {
    ipa: '/ʃɔːt/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'ngắn, thấp',
    role: 'Tính từ phẩm chất'
  },
  shortly: {
    ipa: '/ˈʃɔːt.li/',
    posName: 'Trạng từ thời gian',
    posCode: 'Adv',
    meaning: 'sắp, chẳng bao lâu nữa',
    role: 'Trạng từ thời gian'
  },
  shortness: {
    ipa: '/ˈʃɔːt.nəs/',
    posName: 'Danh từ đuôi -ness',
    posCode: 'N',
    meaning: 'sự ngắn, sự thiếu hụt',
    role: 'Danh từ trừu tượng'
  },
  roughen: {
    ipa: '/ˈrʌf.ən/',
    posName: 'Động từ khuôn dập -en',
    posCode: 'V',
    meaning: 'làm cho thô ráp, làm nhám',
    role: 'Động từ hành động'
  },
  roughly: {
    ipa: '/ˈrʌf.li/',
    posName: 'Trạng từ cách thức / ước lượng',
    posCode: 'Adv',
    meaning: 'khoảng chừng, một cách dữ dội',
    role: 'Trạng từ mức độ'
  },
  roughness: {
    ipa: '/ˈrʌf.nəs/',
    posName: 'Danh từ đuôi -ness',
    posCode: 'N',
    meaning: 'sự gồ ghề, sự thô ráp',
    role: 'Danh từ trừu tượng'
  },
  strong: {
    ipa: '/strɒŋ/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'mạnh mẽ, kiên cường',
    role: 'Tính từ phẩm chất'
  },
  strongly: {
    ipa: '/ˈstrɒŋ.li/',
    posName: 'Trạng từ cách thức',
    posCode: 'Adv',
    meaning: 'một cách mạnh mẽ, kịch liệt',
    role: 'Trạng từ mức độ'
  },
  strength: {
    ipa: '/streŋθ/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'sức mạnh, nội lực',
    role: 'Danh từ trừu tượng'
  },
  renew: {
    ipa: '/rɪˈnjuː/',
    posName: 'Động từ ghép tiền tố re-',
    posCode: 'V',
    meaning: 'gia hạn, tái tạo, làm mới',
    role: 'Động từ hành động'
  },
  renewal: {
    ipa: '/rɪˈnjuː.əl/',
    posName: 'Danh từ đuôi -al',
    posCode: 'N',
    meaning: 'sự gia hạn, sự hồi sinh',
    role: 'Danh từ trừu tượng'
  },
  renewably: {
    ipa: '/rɪˈnjuː.ə.bli/',
    posName: 'Trạng từ đuôi -ly',
    posCode: 'Adv',
    meaning: 'một cách có thể tái tạo',
    role: 'Trạng từ cách thức'
  },
  renovation: {
    ipa: '/ˌren.əˈveɪ.ʃən/',
    posName: 'Danh từ đuôi -tion',
    posCode: 'N',
    meaning: 'sự cải tạo, sự nâng cấp trùng tu',
    role: 'Danh từ trừu tượng'
  },
  renovating: {
    ipa: '/ˈren.ə.veɪ.tɪŋ/',
    posName: 'Hiện tại phân từ (V-ing)',
    posCode: 'V',
    meaning: 'đang cải tạo, việc trùng tu',
    role: 'Vị ngữ hoặc danh động từ'
  },
  renovator: {
    ipa: '/ˈren.ə.veɪ.tər/',
    posName: 'Danh từ chỉ người đuôi -or',
    posCode: 'N',
    meaning: 'thợ cải tạo, người tân trang',
    role: 'Danh từ chỉ người'
  },
  discover: {
    ipa: '/dɪˈskʌv.ər/',
    posName: 'Động từ nguyên mẫu',
    posCode: 'V',
    meaning: 'phát hiện, khám phá',
    role: 'Động từ hành động'
  },
  discoverable: {
    ipa: '/dɪˈskʌv.ər.ə.bəl/',
    posName: 'Tính từ đuôi -able',
    posCode: 'Adj',
    meaning: 'có thể khám phá, phát hiện được',
    role: 'Tính từ phẩm chất'
  },
  discoverer: {
    ipa: '/dɪˈskʌv.ər.ər/',
    posName: 'Danh từ chỉ người đuôi -er',
    posCode: 'N',
    meaning: 'người khám phá, nhà thám hiểm',
    role: 'Danh từ chỉ người'
  },
  decoration: {
    ipa: '/ˌdek.əˈreɪ.ʃən/',
    posName: 'Danh từ đuôi -tion',
    posCode: 'N',
    meaning: 'đồ trang trí, sự trang hoàng',
    role: 'Danh từ trừu tượng'
  },
  decorative: {
    ipa: '/ˈdek.ər.ə.tɪv/',
    posName: 'Tính từ đuôi -ive',
    posCode: 'Adj',
    meaning: 'để trang trí, mang tính thẩm mỹ',
    role: 'Tính từ phẩm chất'
  },
  decorator: {
    ipa: '/ˈdek.ər.eɪ.tər/',
    posName: 'Danh từ chỉ người đuôi -or',
    posCode: 'N',
    meaning: 'người trang trí nội thất',
    role: 'Danh từ chỉ người'
  },
  impress: {
    ipa: '/ɪmˈpres/',
    posName: 'Động từ nguyên mẫu',
    posCode: 'V',
    meaning: 'gây ấn tượng',
    role: 'Động từ tâm lý'
  },
  impression: {
    ipa: '/ɪmˈpreʃ.ən/',
    posName: 'Danh từ đuôi -ion',
    posCode: 'N',
    meaning: 'ấn tượng, cảm nhận',
    role: 'Danh từ trừu tượng'
  },
  impressively: {
    ipa: '/ɪmˈpres.ɪv.li/',
    posName: 'Trạng từ đuôi -ly',
    posCode: 'Adv',
    meaning: 'một cách đầy ấn tượng',
    role: 'Trạng từ cách thức'
  },
  intelligently: {
    ipa: '/ɪnˈtel.ɪ.dʒənt.li/',
    posName: 'Trạng từ đuôi -ly',
    posCode: 'Adv',
    meaning: 'một cách thông minh, khôn khéo',
    role: 'Trạng từ cách thức'
  },
  caution: {
    ipa: '/ˈkɔː.ʃən/',
    posName: 'Danh từ / Động từ',
    posCode: 'N',
    meaning: 'sự thận trọng, lời cảnh báo',
    role: 'Danh từ trừu tượng'
  },
  cautiousness: {
    ipa: '/ˈkɔː.ʃəs.nəs/',
    posName: 'Danh từ đuôi -ness',
    posCode: 'N',
    meaning: 'tính cẩn trọng, sự cẩn thận',
    role: 'Danh từ trừu tượng'
  },
  carelessly: {
    ipa: '/ˈkeə.ləs.li/',
    posName: 'Trạng từ đuôi -ly',
    posCode: 'Adv',
    meaning: 'một cách bất cẩn, cẩu thả',
    role: 'Trạng từ cách thức'
  },
  careful: {
    ipa: '/ˈkeə.fəl/',
    posName: 'Tính từ đuôi -ful',
    posCode: 'Adj',
    meaning: 'cẩn thận, chu đáo',
    role: 'Tính từ phẩm chất'
  },
  care: {
    ipa: '/keər/',
    posName: 'Danh từ / Động từ',
    posCode: 'N',
    meaning: 'sự cẩn trọng, chăm sóc',
    role: 'Danh từ hoặc động từ'
  },
  beauty: {
    ipa: '/ˈbjuː.ti/',
    posName: 'Danh từ',
    posCode: 'N',
    meaning: 'vẻ đẹp, nét đẹp',
    role: 'Danh từ trừu tượng'
  },
  beautiful: {
    ipa: '/ˈbjuː.tɪ.fəl/',
    posName: 'Tính từ đuôi -ful',
    posCode: 'Adj',
    meaning: 'xinh đẹp, tuyệt đẹp',
    role: 'Tính từ phẩm chất'
  },
  beautify: {
    ipa: '/ˈbjuː.tɪ.faɪ/',
    posName: 'Động từ khuôn dập -ify',
    posCode: 'V',
    meaning: 'làm đẹp, tô điểm',
    role: 'Động từ hành động'
  },
  friendship: {
    ipa: '/ˈfrend.ʃɪp/',
    posName: 'Danh từ đuôi -ship',
    posCode: 'N',
    meaning: 'tình bạn, tình hữu nghị',
    role: 'Danh từ trừu tượng'
  },
  friendless: {
    ipa: '/ˈfrend.ləs/',
    posName: 'Tính từ đuôi -less',
    posCode: 'Adj',
    meaning: 'không có bạn bè, cô độc',
    role: 'Tính từ phẩm chất'
  },
  friendlily: {
    ipa: '/ˈfrend.lə.li/',
    posName: 'Trạng từ đuôi -ly',
    posCode: 'Adv',
    meaning: 'một cách thân thiện',
    role: 'Trạng từ cách thức'
  },
  happiness: {
    ipa: '/ˈhæp.i.nəs/',
    posName: 'Danh từ đuôi -ness',
    posCode: 'N',
    meaning: 'sự hạnh phúc, niềm vui',
    role: 'Danh từ trừu tượng'
  },
  badly: {
    ipa: '/ˈbæd.li/',
    posName: 'Trạng từ cách thức',
    posCode: 'Adv',
    meaning: 'một cách tồi tệ, nặng nề',
    role: 'Trạng từ cách thức'
  },
  badness: {
    ipa: '/ˈbæd.nəs/',
    posName: 'Danh từ đuôi -ness',
    posCode: 'N',
    meaning: 'sự xấu xa, tính tồi tệ',
    role: 'Danh từ trừu tượng'
  },
  worsen: {
    ipa: '/ˈwɜː.sən/',
    posName: 'Động từ khuôn dập -en',
    posCode: 'V',
    meaning: 'làm trầm trọng hơn, trở nên tồi tệ hơn',
    role: 'Động từ hành động'
  },
  confidence: {
    ipa: '/ˈkɒn.fɪ.dəns/',
    posName: 'Danh từ đuôi -ence',
    posCode: 'N',
    meaning: 'sự tự tin, niềm tin',
    role: 'Danh từ trừu tượng'
  },
  confident: {
    ipa: '/ˈkɒn.fɪ.dənt/',
    posName: 'Tính từ đuôi -ent',
    posCode: 'Adj',
    meaning: 'tự tin',
    role: 'Tính từ phẩm chất'
  },
  confidential: {
    ipa: '/ˌkɒn.fɪˈden.ʃəl/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'bí mật, tuyệt mật',
    role: 'Tính từ phẩm chất'
  },
  equip: {
    ipa: '/ɪˈkwɪp/',
    posName: 'Động từ nguyên mẫu',
    posCode: 'V',
    meaning: 'trang bị, cung cấp thiết bị',
    role: 'Động từ hành động'
  },
  equipped: {
    ipa: '/ɪˈkwɪpt/',
    posName: 'Quá khứ phân từ làm tính từ',
    posCode: 'Adj',
    meaning: 'được trang bị đầy đủ',
    role: 'Tính từ phẩm chất'
  },
  equippable: {
    ipa: '/ɪˈkwɪp.ə.bəl/',
    posName: 'Tính từ đuôi -able',
    posCode: 'Adj',
    meaning: 'có thể trang bị được',
    role: 'Tính từ phẩm chất'
  },
  equippers: {
    ipa: '/ɪˈkwɪp.əz/',
    posName: 'Danh từ số nhiều chỉ người',
    posCode: 'N',
    meaning: 'những người trang bị',
    role: 'Danh từ chỉ người'
  },
  developer: {
    ipa: '/dɪˈvel.ə.pər/',
    posName: 'Danh từ chỉ người đuôi -er',
    posCode: 'N',
    meaning: 'nhà phát triển, lập trình viên',
    role: 'Danh từ chỉ người'
  },
  developing: {
    ipa: '/dɪˈvel.ə.pɪŋ/',
    posName: 'Tính từ phân từ / Danh động từ',
    posCode: 'Adj',
    meaning: 'đang phát triển (developing countries)',
    role: 'Tính từ bổ nghĩa'
  },
  developable: {
    ipa: '/dɪˈvel.ə.pə.bəl/',
    posName: 'Tính từ đuôi -able',
    posCode: 'Adj',
    meaning: 'có thể phát triển được',
    role: 'Tính từ phẩm chất'
  },
  arrive: {
    ipa: '/əˈraɪv/',
    posName: 'Động từ nguyên mẫu',
    posCode: 'V',
    meaning: 'đến nơi, xuất hiện',
    role: 'Nội động từ'
  },
  arriving: {
    ipa: '/əˈraɪ.vɪŋ/',
    posName: 'Hiện tại phân từ (V-ing)',
    posCode: 'V',
    meaning: 'đang tới nơi',
    role: 'Phân từ vị ngữ'
  },
  arriver: {
    ipa: '/əˈraɪ.vər/',
    posName: 'Danh từ chỉ người',
    posCode: 'N',
    meaning: 'người đến nơi',
    role: 'Danh từ chỉ người'
  },
  able: {
    ipa: '/ˈeɪ.bəl/',
    posName: 'Tính từ',
    posCode: 'Adj',
    meaning: 'có khả năng, có năng lực',
    role: 'Tính từ vị ngữ (be able to)'
  },
  ably: {
    ipa: '/ˈeɪ.bli/',
    posName: 'Trạng từ cách thức',
    posCode: 'Adv',
    meaning: 'một cách khéo léo, tài tình',
    role: 'Trạng từ cách thức'
  },
  enable: {
    ipa: '/ɪˈneɪ.bəl/',
    posName: 'Động từ tiền tố en-',
    posCode: 'V',
    meaning: 'cho phép, kích hoạt khả năng',
    role: 'Động từ hành động'
  },
  importance: {
    ipa: '/ɪmˈpɔː.təns/',
    posName: 'Danh từ đuôi -ance',
    posCode: 'N',
    meaning: 'tầm quan trọng, ý nghĩa',
    role: 'Danh từ trừu tượng'
  },
  importantly: {
    ipa: '/ɪmˈpɔː.tənt.li/',
    posName: 'Trạng từ đuôi -ly',
    posCode: 'Adv',
    meaning: 'một cách quan trọng',
    role: 'Trạng từ liên kết'
  },
  import: {
    ipa: '/ɪmˈpɔːt/',
    posName: 'Động từ / Danh từ',
    posCode: 'V',
    meaning: 'nhập khẩu / tầm quan trọng',
    role: 'Động từ hoặc danh từ'
  },
  importer: {
    ipa: '/ɪmˈpɔː.tər/',
    posName: 'Danh từ chỉ người',
    posCode: 'N',
    meaning: 'nhà nhập khẩu',
    role: 'Danh từ chỉ người'
  }
};
