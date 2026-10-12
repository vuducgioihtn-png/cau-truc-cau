/**
 * Complete IPA Phonetic Transcriptions and Vietnamese Translations for Volume 1 (100 Questions)
 */
export const VOL1_PHONETICS_AND_TRANSLATIONS: Record<number, { 
  ipa: string; 
  translation: string;
  correctIpa?: string;
  correctTranslation?: string;
}> = {
  // ================= CHỦ ĐỀ 1: GIẢI PHẪU ĐOÀN TÀU 3 TOA (S - V - O) =================
  1: {
    ipa: '/ðə ʃef kʊkt ə dɪˈlɪʃəs miːl/',
    translation: 'Đầu bếp đã nấu một bữa ăn ngon miệng.'
  },
  2: {
    ipa: '/ə ˈteɪsti suːp eɪt ðə ˈhʌŋɡri bɔɪ/',
    translation: 'Một bát súp ngon đã ăn đứa bé đói (câu đề bài trật bánh ngữ nghĩa).',
    correctIpa: '/ðə ˈhʌŋɡri bɔɪ eɪt ə ˈteɪsti suːp/',
    correctTranslation: 'Đứa bé đói đã ăn một bát súp ngon.'
  },
  3: {
    ipa: '/ðə ˈɡɑːrdnər ˈwɔːtərz ðə ˈflaʊərz ˈevri ˈmɔːrnɪŋ/',
    translation: 'Người làm vườn tưới những bông hoa mỗi buổi sáng.'
  },
  4: {
    ipa: '/ˈɪŋɡlɪʃ ˈtiːtʃɪz ðə prəˈfɛsər æt ðə ˌjuːnɪˈvɜːrsɪti/',
    translation: 'Tiếng Anh dạy giáo sư ở trường đại học (câu đề bài trật bánh cấu trúc).',
    correctIpa: '/ðə prəˈfɛsər ˈtiːtʃɪz ˈɪŋɡlɪʃ æt ðə ˌjuːnɪˈvɜːrsɪti/',
    correctTranslation: 'Giáo sư dạy tiếng Anh ở trường đại học.'
  },
  5: {
    ipa: '/ðə ˈɑːrtɪst ˈpeɪntɪd ə ˈbjuːtɪfl ˈpɪktʃər/',
    translation: 'Người họa sĩ đã vẽ một bức tranh đẹp.'
  },
  6: {
    ipa: '/ðə ˈmænɪdʒər ˈænsərd ˈkʌstəmər ˈkwɛstʃənz ˈpeɪʃntli/',
    translation: 'Người quản lý đã kiên nhẫn trả lời các câu hỏi của khách hàng.'
  },
  7: {
    ipa: '/ðə strɔːŋ wɪnd bluː daʊn ðə oʊld triː/',
    translation: 'Cơn gió mạnh đã thổi đổ cây cổ thụ.'
  },
  8: {
    ipa: '/maɪ ˈmʌðər beɪkt ə dɪˈlɪʃəs keɪk ˈjɛstərdeɪ/',
    translation: 'Mẹ tôi đã nướng một chiếc bánh ngon vào ngày hôm qua.'
  },
  9: {
    ipa: '/ðə ˈstjuːdənts roʊt ˈɪntrəstɪŋ ˈɛseɪz/',
    translation: 'Các học sinh đã viết những bài luận thú vị.'
  },
  10: {
    ipa: '/ðə θiːf ˈoʊpənd ðə ˈbækˌdɔːr ˈkwɪkli/',
    translation: 'Tên trộm đã mở cửa sau một cách nhanh chóng.'
  },
  11: {
    ipa: '/ðə dɒɡ ðə ˈmeɪlmən ˈlaʊdli/',
    translation: 'Con chó người đưa thư một cách ầm ĩ (câu đề bài trật bánh thiếu động từ).',
    correctIpa: '/ðə dɒɡ bɑːkt æt ðə ˈmeɪlmən ˈlaʊdli/',
    correctTranslation: 'Con chó đã sủa ầm ĩ vào người đưa thư.'
  },
  12: {
    ipa: '/maɪ frɛnd sɛnt ə ˈpoʊstkɑːrd frɒm ˈpærɪs/',
    translation: 'Bạn của tôi đã gửi một tấm bưu thiếp từ Pa-ri.'
  },
  13: {
    ipa: '/ə lɒt ɒv bʊks riːdz nɑːm ɪn ðə ˈlaɪbrəri/',
    translation: 'Rất nhiều cuốn sách đọc Nam ở trong thư viện (câu đề bài trật bánh).',
    correctIpa: '/næm riːdz ə lɒt ɒv bʊks ɪn ðə ˈlaɪbrəri/',
    correctTranslation: 'Nam đọc rất nhiều cuốn sách trong thư viện.'
  },
  14: {
    ipa: '/ˈhɛvi reɪn dɪˈstrɔɪd ðə ˈwʊdn brɪdʒ/',
    translation: 'Cơn mưa lớn đã phá hủy cây cầu gỗ.'
  },
  15: {
    ipa: '/ˈkeərfəli draɪvz ðə ˈdraɪvər hɪz trʌk/',
    translation: 'Cẩn thận lái người tài xế chiếc xe tải của mình (câu đề bài trật bánh).',
    correctIpa: '/ðə ˈdraɪvər draɪvz hɪz trʌk ˈkeərfəli/',
    correctTranslation: 'Người tài xế lái chiếc xe tải của mình rất cẩn thận.'
  },

  // ================= CHỦ ĐỀ 2: PHÂN BIỆT TÂN NGỮ VÀ BỔ NGỮ (S - V - O vs S - V - C) =================
  16: {
    ipa: '/ʃiː bɪˈkeɪm ə ˈfeɪməs ˈsɪŋər/',
    translation: 'Cô ấy đã trở thành một ca sĩ nổi tiếng.'
  },
  17: {
    ipa: '/ʃiː mɛt ə ˈfeɪməs ˈsɪŋər/',
    translation: 'Cô ấy đã gặp gỡ một ca sĩ nổi tiếng.'
  },
  18: {
    ipa: '/ðeɪ ɪˈlɛktɪd hɪm ðə tiːm ˈliːdər/',
    translation: 'Họ đã bầu chọn anh ấy làm đội trưởng.'
  },
  19: {
    ipa: '/maɪ ˈfɑːðər kɪkt ðə bɔːl/',
    translation: 'Bố tôi đã đá quả bóng.'
  },
  20: {
    ipa: '/ðə suːp teɪsts dɪˈlɪʃəs/',
    translation: 'Món súp này có vị rất ngon.'
  },
  21: {
    ipa: '/ðə ˈstjuːdənts ˈlɪsnd tuː ðə ˈtiːtʃər/',
    translation: 'Các học sinh đã lắng nghe thầy giáo giảng bài.'
  },
  22: {
    ipa: '/wiː ˈpeɪntɪd ðə wɔːl ˈjɛloʊ/',
    translation: 'Chúng tôi đã sơn bức tường thành màu vàng.'
  },
  23: {
    ipa: '/ðə keɪk lʊks swiːt/',
    translation: 'Chiếc bánh trông có vẻ ngọt ngào.'
  },
  24: {
    ipa: '/hiː kənˈsɪdərz hɪmˈsɛlf ə ˈhɪəroʊ/',
    translation: 'Anh ấy tự xem bản thân mình là một người anh hùng.'
  },
  25: {
    ipa: '/læn broʊk ðə ˈwɪndoʊ/',
    translation: 'Lan đã làm vỡ cửa sổ.'
  },
  26: {
    ipa: '/hiː əˈpɪərz ˈtaɪərd təˈdeɪ/',
    translation: 'Hôm nay anh ấy trông có vẻ mệt mỏi.'
  },
  27: {
    ipa: '/ðə ˈkʌmpəni ˈhaɪərd faɪv njuː ˌɛndʒɪˈnɪərz/',
    translation: 'Công ty đã tuyển dụng năm kỹ sư mới.'
  },
  28: {
    ipa: '/hɜːr vɔɪs saʊndz ˈlʌvli/',
    translation: 'Giọng hát của cô ấy nghe thật dễ thương, ngọt ngào.'
  },
  29: {
    ipa: '/ðeɪ faʊnd ði ɪɡˈzæm ɪkˈstriːmli ˈdɪfɪkəlt/',
    translation: 'Họ cảm thấy bài thi này cực kỳ khó khăn.'
  },
  30: {
    ipa: '/ðə ʃɛf kʊkt ə ˈspɛʃl miːl/',
    translation: 'Đầu bếp đã nấu một bữa ăn đặc biệt.'
  },

  // ================= CHỦ ĐỀ 3: MA TRẬN TÂN NGỮ KÉP (S - V - IO - DO) =================
  31: {
    ipa: '/maɪ ˈfɑːðər bɔːt miː ə njuː ˈbaɪsɪkl/',
    translation: 'Bố tôi đã mua cho tôi một chiếc xe đạp mới.'
  },
  32: {
    ipa: '/ʃiː ɡeɪv hɜːr ˈsɪstər ə ˈsɪlvər rɪŋ/',
    translation: 'Cô ấy đã tặng cho em gái mình một chiếc nhẫn bạc.'
  },
  33: {
    ipa: '/ðə ˈtiːtʃər toʊld ðə ˈstjuːdənts ən ɪnˈspaɪərɪŋ ˈstɔːri/',
    translation: 'Thầy giáo đã kể cho các học sinh nghe một câu chuyện truyền cảm hứng.'
  },
  34: {
    ipa: '/kæn juː pɑːs miː ðæt ˈbɒtl ɒv ˈwɔːtər/',
    translation: 'Bạn có thể chuyền cho tôi chai nước đó được không?'
  },
  35: {
    ipa: '/hiː lɛnt hɪz ˈklɑːsmeɪt sʌm ˈmʌni/',
    translation: 'Cậu ấy đã cho bạn cùng lớp vay một ít tiền.'
  },
  36: {
    ipa: '/ðə ˈmænɪdʒər ˈɒfərd hɪm ə haɪ ˈpeɪɪŋ dʒɒb/',
    translation: 'Người quản lý đã đề bạt cho anh ấy một công việc lương cao.'
  },
  37: {
    ipa: '/maɪ ˈʌŋkl sɛnt ʌs ə bɪɡ ˈpɑːrsl/',
    translation: 'Chú tôi đã gửi cho chúng tôi một kiện hàng lớn.'
  },
  38: {
    ipa: '/ʃiː kʊkt hɜːr ˈfæməli ə dɪˈlɪʃəs ˈdɪnər/',
    translation: 'Cô ấy đã nấu cho gia đình một bữa tối thơm ngon.'
  },
  39: {
    ipa: '/aɪ wɪl ʃoʊ juː maɪ ˈleɪtɪst ˈpeɪntɪŋ/',
    translation: 'Tôi sẽ cho bạn xem bức tranh mới nhất của mình.'
  },
  40: {
    ipa: '/ðeɪ ˈprɒmɪst ðeər sʌn ə ˈwʌndərfʊl vəˈkeɪʃn/',
    translation: 'Họ đã hứa với con trai một kỳ nghỉ tuyệt vời.'
  },
  41: {
    ipa: '/kʊd juː brɪŋ miː ðə bɪl pliːz/',
    translation: 'Bạn có thể vui lòng mang hóa đơn cho tôi được không?'
  },
  42: {
    ipa: '/ʃiː meɪd hɜːr ˈdɔːtər ə ˈlʌvli drɛs/',
    translation: 'Cô ấy đã may cho con gái một chiếc váy đáng yêu.'
  },
  43: {
    ipa: '/ðə ɡaɪd ɪkˈspleɪnd ðə ruːlz tuː ðə ˈtʊərɪsts/',
    translation: 'Người hướng dẫn viên đã giải thích các quy định cho khách du lịch.'
  },
  44: {
    ipa: '/hiː ˈhændɪd ði ˈɒfɪsər hɪz ˈdraɪvɪŋ ˈlaɪsns/',
    translation: 'Anh ấy đã trao giấy phép lái xe của mình cho viên cảnh sát.'
  },
  45: {
    ipa: '/maɪ ˈɡrændˌmʌðər ˈnɪtɪd maɪ ˈbrʌðər ə wɔːrm skɑːrf/',
    translation: 'Bà tôi đã đan cho anh trai tôi một chiếc khăn quàng cổ ấm áp.'
  },

  // ================= CHỦ ĐỀ 4: XI-NHAN TIỀN TỐ (PREFIXES) =================
  46: {
    ipa: '/ɪt ɪz kəmˈpliːtli ɪˈliːɡl tuː draɪv wɪˈðaʊt ə ˈvælɪd ˈlaɪsns/',
    translation: 'Lái xe mà không có bằng lái hợp lệ là hoàn toàn bất hợp pháp.'
  },
  47: {
    ipa: '/hiː wɒz ˈpʌnɪʃt bɪˈkɒz ɒv hɪz ˌɪrɪˈspɒnsəbl bɪˈheɪvjər/',
    translation: 'Cậu ấy đã bị phạt vì hành vi vô trách nhiệm của mình.'
  },
  48: {
    ipa: '/ɪt ɪz ˈvɛri ˌɪmpəˈlaɪt tuː spiːk wɪð jɔːr maʊθ fʊl ɒv fuːd/',
    translation: 'Vừa nhai đầy thức ăn trong miệng vừa nói chuyện là rất bất lịch sự.'
  },
  49: {
    ipa: '/ðə məˈdʒɪʃn meɪd ðə waɪt ˈræbɪt ˌdɪsəˈpɪər ˈɪntuː θɪn eər/',
    translation: 'Nhà ảo thuật đã làm cho chú thỏ trắng biến mất vào hư không.'
  },
  50: {
    ipa: '/aɪ ˌdɪsəˈɡriː wɪð jɔːr əˈpɪnjən bɪˈkɒz ɪt siːmz ʌnˈfeər/',
    translation: 'Tôi không đồng ý với ý kiến của bạn vì nó có vẻ không công bằng.'
  },
  51: {
    ipa: '/ðə ˈstjuːdənts hæd tuː teɪk ə ˈpriːtɛst bɪˈfɔːr ˈdʒɔɪnɪŋ ðə kɔːrs/',
    translation: 'Các học sinh đã phải làm một bài kiểm tra đầu vào trước khi tham gia khóa học.'
  },
  52: {
    ipa: '/ðə ˈtiːtʃər ɑːskt hɪm tuː ˌriːˈraɪt hɪz ˈɛseɪ tuː fɪks ðə ˈɡræmər ˈɛrərz/',
    translation: 'Giáo viên đã yêu cầu cậu ấy viết lại bài luận để sửa các lỗi ngữ pháp.'
  },
  53: {
    ipa: '/juː kæn ˈtrævl əˈkrɒs ðə ˈsɪti ˈkwɪkli baɪ ˈteɪkɪŋ ðə ˈsʌbweɪ treɪn/',
    translation: 'Bạn có thể di chuyển nhanh chóng khắp thành phố bằng cách đi tàu điện ngầm.'
  },
  54: {
    ipa: '/ʃiː fɛlt ˈvɛri ʌnˈhæpi ˈɑːftər rɪˈsiːvɪŋ ðə bæd njuːz/',
    translation: 'Cô ấy đã cảm thấy rất buồn bã sau khi nhận được tin dữ.'
  },
  55: {
    ipa: '/ɪt ɪz ˈnɪəli ɪmˈpɒsəbl tuː ˈfɪnɪʃ ɔːl ðɪs wɜːrk ɪn faɪv ˈmɪnɪts/',
    translation: 'Gần như là bất khả thi để hoàn thành toàn bộ công việc này trong năm phút.'
  },
  56: {
    ipa: '/ðə ˈkæptɪn ˈɔːrdərd ðə kruː tuː stɪər ðə ˈsʌbməriːn diːp ˈɪntuː ði ˈoʊʃn/',
    translation: 'Thuyền trưởng đã ra lệnh cho thủy thủ đoàn điều khiển tàu ngầm lặn sâu xuống đại dương.'
  },
  57: {
    ipa: '/hiː juːzd tuː wɜːrk wɪð maɪ ˈfɑːðər hiː ɪz ən ɛks ˈkɒliːɡ ɒv hɪz/',
    translation: 'Ông ấy từng làm việc với bố tôi; ông ấy là đồng nghiệp cũ của bố tôi.'
  },
  58: {
    ipa: '/ˈmɛni ˈpiːpl bɪˈliːv ðæt ˈbreɪkɪŋ ə ˈmɪrər brɪŋz ʌnˈlʌki lʌk/',
    translation: 'Nhiều người tin rằng làm vỡ gương sẽ mang lại sự xui xẻo.'
  },
  59: {
    ipa: '/hɪz ˈhændˌraɪtɪŋ ɪz soʊ ˈmɛsi ðæt ɪt ɪz kəmˈpliːtli ɪˈlɛdʒəbl tuː riːd/',
    translation: 'Chữ viết tay của anh ấy cẩu thả đến mức hoàn toàn không thể đọc nổi.'
  },
  60: {
    ipa: '/ðə ˈɡʌvərnmənt dɪˈsaɪdɪd tuː ˌriːˈpleɪ ðə hɪˈstɒrɪkl fɪlm fɔːr ˈtɛlɪvɪʒn/',
    translation: 'Chính phủ đã quyết định phát lại bộ phim lịch sử trên truyền hình.'
  },

  // ================= CHỦ ĐỀ 5: MẶT NẠ HẬU TỐ (SUFFIXES) & TÍNH TỪ CẶP (-ED / -ING) =================
  61: {
    ipa: '/hiː lɒst ɔːl hɪz ˈmʌni ænd bɪˈkeɪm ˈhoʊmləs ɒn ðə striːt/',
    translation: 'Anh ấy đã mất hết tiền bạc và trở thành người vô gia cư trên đường phố.'
  },
  62: {
    ipa: '/ðɪs ˈjuːzər ˈmænjuəl ɪz ɪkˈstriːmli ˈjuːsfʊl aɪ ɪnˈstɔːld ðə ˈsɒftweər ˈiːzəli/',
    translation: 'Cuốn sách hướng dẫn sử dụng này cực kỳ hữu ích; tôi đã cài đặt phần mềm một cách dễ dàng.'
  },
  63: {
    ipa: '/bɪˈkɒz ɒv hɪz ˈkeərləs ˈdraɪvɪŋ hiː kɔːzd ən ˈæksɪdənt ɒn ðə ˈhaɪweɪ/',
    translation: 'Vì sự lái xe bất cẩn của mình, anh ấy đã gây ra một vụ tai nạn trên đường cao tốc.'
  },
  64: {
    ipa: '/doʊnt ˈwʌri ði ɪnˈdʒɛkʃn ɪz kəmˈpliːtli ˈpeɪnləs ɪt woʊnt hɜːrt æt ɔːl/',
    translation: 'Đừng lo, mũi tiêm này hoàn toàn không đau đớn; nó sẽ không đau chút nào đâu.'
  },
  65: {
    ipa: '/aɪ fɛlt ˈvɛri ˈhɛlpləs wɛn aɪ ˈkʊdnt duː ˈɛniθɪŋ tuː seɪv ði ˈɪndʒərd ˈpʌpi/',
    translation: 'Tôi đã cảm thấy vô cùng bất lực khi không thể làm gì để cứu chú cún con bị thương.'
  },
  66: {
    ipa: '/ðæt ˈbroʊkən foʊn ɪz kəmˈpliːtli ˈjuːsləs θroʊ ɪt əˈweɪ/',
    translation: 'Chiếc điện thoại hỏng đó hoàn toàn vô dụng rồi; hãy vứt nó đi.'
  },
  67: {
    ipa: '/θæŋk juː fɔːr jɔːr ˈhɛlpfʊl ədˈvaɪs ˈdjʊərɪŋ maɪ ɪɡˈzæm ˌprɛpəˈreɪʃn/',
    translation: 'Cảm ơn bạn vì những lời khuyên hữu ích trong suốt quá trình chuẩn bị cho kỳ thi của tôi.'
  },
  68: {
    ipa: '/ðə ˈlɪtl ɡɜːrl wɒz soʊ ˈkeərləs ðæt ʃiː spɪld hɜːr mɪlk ɒn ðə ˈteɪbl/',
    translation: 'Cô bé đã bất cẩn đến mức làm đổ sữa ra bàn.'
  },
  69: {
    ipa: '/aɪ wɒz ˈtoʊtəli bɔːrd bɪˈkɒz ðə ˈlɛktʃər wɒz ɪkˈstriːmli ˈbɔːrɪŋ/',
    translation: 'Tôi đã hoàn toàn cảm thấy chán nản vì bài giảng cực kỳ tẻ nhạt.'
  },
  70: {
    ipa: '/ʃiː wɒz ˈdiːpli ˌdɪsəˈpɔɪntɪd baɪ ðə ˈfaɪnl ɪɡˈzæm rɪˈzʌlts/',
    translation: 'Cô ấy đã cảm thấy vô cùng thất vọng trước kết quả của kỳ thi cuối kỳ.'
  },
  71: {
    ipa: '/ðə mætʃ ˈjɛstərdeɪ wɒz soʊ ɪkˈsaɪtɪŋ ðæt ɔːl fænz stʊd ʌp ænd tʃɪərd/',
    translation: 'Trận đấu hôm qua hấp dẫn đến mức tất cả người hâm mộ đều đứng dậy reo hò.'
  },
  72: {
    ipa: '/ɑːr juː ˈɪntrəstɪd ɪn ˈlɜːrnɪŋ ˈmɒdərn ˌɑːrtɪˈfɪʃl ɪnˈtɛlɪdʒəns/',
    translation: 'Bạn có thấy hứng thú với việc tìm hiểu trí tuệ nhân tạo hiện đại không?'
  },
  73: {
    ipa: '/ðə ˈmuːvi hæd ən əˈmeɪzɪŋ plɒt twɪst æt ði ɛnd/',
    translation: 'Bộ phim đã có một bước ngoặt cốt truyện đáng kinh ngạc ở phần kết.'
  },
  74: {
    ipa: '/hiː fɛlt ˈtaɪərd ˈɑːftər ˈrʌnɪŋ tɛn kɪˈlɒmɪtərz ɪn ðə hɒt sʌn/',
    translation: 'Anh ấy đã cảm thấy mệt mỏi sau khi chạy mười cây số dưới trời nắng gắt.'
  },
  75: {
    ipa: '/ðæt lɒŋ ˈdʒɜːrni wɒz ɪɡˈzɔːstɪŋ ænd ðə ˈsiːnəri wɒz ˈrɪəli dɪˈprɛsɪŋ/',
    translation: 'Chuyến đi dài đó thật kiệt sức, và phong cảnh thì thực sự ảm đạm, thê lương.'
  },

  // ================= CHỦ ĐỀ 6: NHẬN DIỆN TỪ LOẠI 3 GIÂY (3-SECOND POS DETECTION) =================
  76: {
    ipa: '/ðə ˈmænɪdʒər əˈpriːʃieɪtɪd hɪz ɡreɪt ˌkɒntrɪˈbjuːʃn tuː ðə ˈkʌmpəni/',
    translation: 'Người quản lý đã đánh giá cao sự đóng góp to lớn của anh ấy cho công ty.'
  },
  77: {
    ipa: '/wiː niːd tuː ˈmɒdənaɪz ðə ˈpʌblɪk ˈlaɪtɪŋ ˈsɪstəm ɪn ˈaʊər ˈneɪbərhʊd/',
    translation: 'Chúng ta cần phải hiện đại hóa hệ thống chiếu sáng công cộng trong khu phố của mình.'
  },
  78: {
    ipa: '/ʃiː ɪz ən ɪkˈsɛpʃənəli ɪnˈtɛlɪdʒənt ˈstjuːdənt ɪn ˈaʊər klɑːs/',
    translation: 'Cô ấy là một học sinh đặc biệt thông minh trong lớp học của chúng tôi.'
  },
  79: {
    ipa: '/ðə ˈtʃɪldrən pleɪd ˈhæpəli ɒn ðə biːtʃ ɔːl ˈmɔːrnɪŋ/',
    translation: 'Lũ trẻ đã chơi đùa một cách vui vẻ trên bãi biển suốt cả buổi sáng.'
  },
  80: {
    ipa: '/ə ɡʊd ˈdaɪət ɪz ˈvɛri ɪmˈpɔːrtnt fɔːr jɔːr lɒŋ tɜːrm hɛlθ/',
    translation: 'Một chế độ ăn uống lành mạnh là rất quan trọng đối với sức khỏe lâu dài của bạn.'
  },
  81: {
    ipa: '/ʃiː sɪŋz ðæt ˈmɛlədi ˈvɛri ˈbjuːtɪfəli/',
    translation: 'Cô ấy hát giai điệu đó thật ngọt ngào và tuyệt đẹp.'
  },
  82: {
    ipa: '/ðə ˈɡʌvərnmənt ʃʊd ɪnˈvɛst mɔːr ɪn ˈrʊərəl dɪˈvɛləpmənt/',
    translation: 'Chính phủ nên đầu tư nhiều hơn vào sự phát triển nông thôn.'
  },
  83: {
    ipa: '/tɒm ɪz ə ˈvɛri ˈfrɛndli bɔɪ hiː ˈɔːlweɪz hɛlps ˈɛvriwʌn əˈraʊnd hɪm/',
    translation: 'Tom là một cậu bé rất thân thiện; cậu ấy luôn giúp đỡ mọi người xung quanh.'
  },
  84: {
    ipa: '/ðeɪ ˈlɪsnd əˈtɛntɪvli tuː ðə ˈseɪfti əˈnaʊnsmənts bɪˈfɔːr ˈteɪkɒf/',
    translation: 'Họ đã chăm chú lắng nghe các thông báo an toàn trước khi máy bay cất cánh.'
  },
  85: {
    ipa: '/ðə ˈfæktri hæz ˌɪntrəˈdjuːst ˈmɒdərn ɪˈkwɪpmənt tuː spiːd ʌp prəˈdʌkʃn/',
    translation: 'Nhà máy đã đưa vào sử dụng trang thiết bị hiện đại để đẩy nhanh tốc độ sản xuất.'
  },
  86: {
    ipa: '/ðɪs ʃɑːrp naɪf kæn iːz jɔːr wɜːrk ɪn ðə ˈkɪtʃɪn/',
    translation: 'Chiếc dao sắc bén này có thể giúp công việc trong bếp của bạn trở nên dễ dàng hơn.'
  },
  87: {
    ipa: '/hɜːr ˈsʌdn əˈraɪvl sərˈpraɪzd ˈɛvriwʌn ɪn ðə ruːm/',
    translation: 'Sự xuất hiện đột ngột của cô ấy đã làm cho mọi người trong phòng ngạc nhiên.'
  },
  88: {
    ipa: '/ðə ˈwɛðər təˈdeɪ ɪz tuː bæd tuː ɡoʊ ˈkæmpɪŋ/',
    translation: 'Thời tiết hôm nay quá xấu để có thể đi cắm trại.'
  },
  89: {
    ipa: '/juː mʌst draɪv ˈkeərfəli wɛn ɪt reɪnz ˈhɛvəli/',
    translation: 'Bạn phải lái xe cẩn thận khi trời mưa lớn.'
  },
  90: {
    ipa: '/ˌɛdʒuˈkeɪʃn hɛlps ˈtʃɪldrən dɪˈvɛləp ðeər kriˈeɪtɪv əˈbɪləti/',
    translation: 'Giáo dục giúp trẻ em phát triển khả năng sáng tạo của bản thân.'
  },
  91: {
    ipa: '/hiː wɒnts tuː ˈdɛkəreɪt ði oʊld haʊs bɪˈfɔːr ˈsɛlɪŋ ɪt/',
    translation: 'Anh ấy muốn trang hoàng lại ngôi nhà cũ trước khi rao bán nó.'
  },
  92: {
    ipa: '/hiː ˈɑːnsərd ɔːl ði ˈɪntərvjuː ˈkwɛstʃənz ˈvɛri ˈkɒnfɪdəntli/',
    translation: 'Anh ấy đã trả lời tất cả các câu hỏi phỏng vấn một cách rất tự tin.'
  },
  93: {
    ipa: '/ˈsoʊlər ˈɛnərdʒi ɪz ə kliːn ænd rɪˈnjuːəbl ˈpaʊər sɔːrs/',
    translation: 'Năng lượng mặt trời là một nguồn năng lượng sạch và có thể tái tạo được.'
  },
  94: {
    ipa: '/ðə ˈsaɪəntɪsts meɪd ən ɪmˈpɔːrtnt dɪˈskʌvəri ɪn ˈmɛdɪkl rɪˈsɜːrtʃ/',
    translation: 'Các nhà khoa học đã tạo ra một phát kiến quan trọng trong nghiên cứu y học.'
  },
  95: {
    ipa: '/hiː feɪld ði ɪɡˈzæm bɪˈkɒz hiː wɒz tuː ˈkeərləs ɪn rɪˈvjuːɪŋ ðə ˈlɛsnz/',
    translation: 'Cậu ấy đã thi trượt vì quá bất cẩn, lơ là trong việc ôn tập lại các bài học.'
  },
  96: {
    ipa: '/ðə ˈtiːtʃər wɒnts ʌs tuː ˈʃɔːrtn ðə lɛŋkθ ɒv ðɪs ˈriːdɪŋ ˈpæsɪdʒ/',
    translation: 'Giáo viên muốn chúng tôi rút ngắn độ dài của đoạn văn đọc hiểu này.'
  },
  97: {
    ipa: '/ðə ruːm wɒz ˈdɛkəreɪtɪd ˈbraɪtli fɔːr ðə ˈbɜːrθdeɪ ˈpɑːrti/',
    translation: 'Căn phòng đã được trang hoàng rực rỡ cho bữa tiệc sinh nhật.'
  },
  98: {
    ipa: '/ˈiːtɪŋ tuː mʌtʃ fɑːst fuːd ɪz ˈhɑːrmfʊl tuː jɔːr ˈfɪzɪkl hɛlθ/',
    translation: 'Ăn quá nhiều thức ăn nhanh sẽ có hại cho sức khỏe thể chất của bạn.'
  },
  99: {
    ipa: '/ʃiː ɡeɪv ən ɪmˈprɛsɪv ˌɛkspləˈneɪʃn ɒv ðə ˈtɛknɪkl ˈprɒbləm/',
    translation: 'Cô ấy đã đưa ra một lời giải thích đầy ấn tượng về vấn đề kỹ thuật.'
  },
  100: {
    ipa: '/ˈaʊər meɪn ˈpɜːrpəs ɪz tuː ˈstrɛŋkθn ˈfrɛndli rɪˈleɪʃnz wɪð ˈʌðər ˈneɪʃnz/',
    translation: 'Mục đích chính của chúng tôi là củng cố mối quan hệ hữu nghị với các quốc gia khác.'
  }
};
