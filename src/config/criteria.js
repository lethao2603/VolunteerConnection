// config/criteria.js
const criteria = [
    'thiện nguyện',
    'bình đẳng',
    'miễn phí',
    'tình nguyện',
    'từ thiện',
    'cộng đồng',
    'phục vụ cộng đồng',
    'hoạt động từ thiện',
    'làm việc tình nguyện',
    'công việc thiện nguyện',
    'tự nguyện giúp đỡ',
    'hỗ trợ xã hội',
    'hành động nhân ái',
    'giúp đỡ người khác',
    'cộng đồng',
    'dự án thiện nguyện',
    'đóng góp cho xã hội',
    'hỗ trợ cộng đồng',
    'dịch vụ tình nguyện',
    'chương trình từ thiện',
    'lòng nhân ái',
    'tình yêu thương',
    'tự nguyện',
    'cứu trợ',
    'hỗ trợ',
    'bảo vệ',
    'môi trường',
    'bảo vệ môi trường',
    'hoạt động xã hội',
    'công việc xã hội',
    'giúp đỡ người nghèo',
    'giúp đỡ',
    'tặng quà',
    'phát quà',
    'phát đồ ăn',
    'phát nước uống',
    'dọn vệ sinh',
    'làm sạch bãi biển',
    'làm sạch công viên',
    'dọn rác',
    'giúp đỡ trẻ em',
    'giúp đỡ người già',
    'hỗ trợ y tế',
    'khám bệnh miễn phí',
    'phát thuốc miễn phí',
    'hiến máu nhân đạo',
    'tư vấn sức khỏe',
    'chăm sóc sức khỏe',
    'hỗ trợ giáo dục',
    'dạy học miễn phí',
    'lớp học tình thương',
    'hỗ trợ học sinh nghèo',
    'xây dựng nhà tình thương',
    'sửa chữa nhà cửa',
    'xây cầu',
    'làm đường',
    'trồng cây',
    'trồng rừng',
    'bảo vệ động vật',
    'nuôi thú cưng',
    'giúp đỡ người khuyết tật',
    'hỗ trợ nạn nhân thiên tai',
    'hỗ trợ nạn nhân bão lụt',
    'hỗ trợ nạn nhân cháy nổ',
    'hỗ trợ nạn nhân động đất',
    'cứu hộ cứu nạn',
    'hỗ trợ người vô gia cư',
    'phát đồ dùng cá nhân',
    'phát quần áo',
    'phát chăn màn',
    'phát giày dép',
    'phát sách vở',
    'phát đồ chơi',
    'phát bánh kẹo',
    'phát dụng cụ học tập',
    'phát xe đạp',
    'phát máy tính',
    'tổ chức sự kiện từ thiện',
    'hỗ trợ tìm việc làm',
    'hỗ trợ tư vấn pháp lý',
    'giúp đỡ người bệnh',
    'thăm hỏi bệnh nhân',
    'thăm hỏi người già',
    'tổ chức hoạt động vui chơi',
    'tổ chức buổi diễn văn nghệ',
    'tổ chức buổi dã ngoại',
    'tổ chức lớp học kỹ năng',
    'hỗ trợ phát triển kỹ năng',
    'hỗ trợ tài chính',
    'tặng học bổng',
    'tặng tiền',
    'tặng hiện vật',
    'hỗ trợ khởi nghiệp',
    'hỗ trợ kinh doanh nhỏ',
    'hỗ trợ người yếu thế',
    'hỗ trợ người bị bạo lực',
    'hỗ trợ người bị lạm dụng',
    'hỗ trợ người bị phân biệt đối xử',
    'giúp đỡ nạn nhân buôn người',
    'giúp đỡ người di cư',
    'hỗ trợ người tị nạn',
    'hỗ trợ pháp lý miễn phí',
    'hỗ trợ tâm lý miễn phí',
    'tư vấn tâm lý',
    'tư vấn pháp luật',
    'tư vấn giáo dục',
    'tình nguyện viên',
    'cứu trợ khẩn cấp',
    'hoạt động nhân đạo',
    'sự kiện tình nguyện',
    'sự kiện từ thiện',
    'dự án nhân ái',
    'phong trào từ thiện',
    'phong trào tình nguyện',
    'phong trào xã hội',
    'quỹ từ thiện',
    'quỹ nhân ái',
    'quỹ hỗ trợ',
    'chương trình cứu trợ',
    'chiến dịch từ thiện',
    'chiến dịch tình nguyện',
    'dịch vụ xã hội',
    'dịch vụ cứu trợ',
    'dịch vụ cộng đồng',
    'hoạt động phi lợi nhuận',
    'hoạt động hỗ trợ',
    'hỗ trợ người tị nạn',
    'hỗ trợ trẻ em mồ côi',
    'hỗ trợ phụ nữ',
    'hỗ trợ người dân tộc thiểu số',
    'hỗ trợ người mắc bệnh hiểm nghèo',
    'hỗ trợ trẻ em đường phố',
    'hỗ trợ người sống sót sau thiên tai',
    'hỗ trợ người bị ảnh hưởng bởi COVID-19',
    'tặng khẩu trang',
    'tặng nước rửa tay',
    'tặng máy thở',
    'hỗ trợ nạn nhân dịch bệnh',
    'hỗ trợ người bị cách ly',
    'cung cấp thực phẩm miễn phí',
    'cung cấp nước uống miễn phí',
    'cung cấp vật dụng vệ sinh',
    'cung cấp thiết bị y tế',
    'cung cấp nơi ở tạm thời',
    'cung cấp chỗ ở khẩn cấp',
    'cung cấp dịch vụ y tế miễn phí',
    'khám sức khỏe miễn phí',
    'tặng kính thuốc',
    'tặng máy trợ thính',
    'tặng xe lăn',
    'tặng nạng',
    'tặng thẻ bảo hiểm y tế',
    'tặng vé xe buýt',
    'tặng vé tàu',
    'tặng vé máy bay',
    'tổ chức hội thảo',
    'tổ chức khóa học',
    'tổ chức buổi nói chuyện',
    'tổ chức buổi hòa nhạc từ thiện',
    'tổ chức buổi chiếu phim từ thiện',
    'tổ chức buổi triển lãm từ thiện',
    'tổ chức bán đấu giá từ thiện',
    'tổ chức buổi lễ trao giải',
    'tổ chức tiệc từ thiện',
    'tổ chức buổi họp mặt từ thiện',
    'tổ chức sự kiện gây quỹ',
    'tổ chức đêm nhạc từ thiện',
    'tổ chức lễ hội từ thiện',
    'tổ chức cuộc thi từ thiện',
    'tổ chức buổi giao lưu từ thiện',
    'tổ chức buổi gặp mặt tình nguyện',
    'tổ chức buổi chia sẻ kinh nghiệm',
    'tổ chức buổi hội thảo giáo dục',
    'tổ chức buổi tư vấn nghề nghiệp',
    'tổ chức buổi hướng nghiệp',
    'tổ chức buổi giới thiệu việc làm',
    'tổ chức chương trình tặng quà',
    'tổ chức chương trình giao lưu văn hóa',
    'tổ chức chương trình khám bệnh',
    'tổ chức chương trình vui chơi cho trẻ em',
    'tổ chức chương trình hỗ trợ học sinh',
    'tổ chức chương trình hỗ trợ phụ nữ',
    'tổ chức chương trình hỗ trợ người khuyết tật',
    'tổ chức chương trình hỗ trợ nạn nhân',
    'tổ chức chương trình hỗ trợ người yếu thế',
    'tổ chức chương trình hỗ trợ người vô gia cư',
    'tổ chức chương trình hỗ trợ người già',
    'tổ chức chương trình hỗ trợ người bệnh',
    'tổ chức chương trình hỗ trợ người khó khăn',
    'tổ chức chương trình hỗ trợ người nghèo',
    'tổ chức chương trình hỗ trợ người khốn khó',
    'tổ chức chương trình hỗ trợ người tị nạn',
    'tổ chức chương trình hỗ trợ người mắc bệnh',
    'tổ chức chương trình hỗ trợ người mắc COVID-19',
    'tổ chức chương trình hỗ trợ người bị cách ly',
    'tổ chức chương trình hỗ trợ người bị ảnh hưởng bởi thiên tai',
    'tổ chức chương trình hỗ trợ người bị ảnh hưởng bởi dịch bệnh',
    'tác động tích cực',
    'ảnh hưởng tích cực',
    'có ý nghĩa tích cực',
    'lan tỏa yêu thương',
    'mang lại lợi ích cho cộng đồng',
    'đem lại giá trị tốt đẹp',
    'góp phần cải thiện cuộc sống',
    'tạo ra sự thay đổi tích cực',
    'nâng cao chất lượng sống',
    'giúp đỡ người khác',
    'mang lại niềm vui',
    'chia sẻ khó khăn',
    'tăng cường ý thức cộng đồng',
    'tạo sự khác biệt',
    'xây dựng tương lai tốt đẹp',
    'hỗ trợ người khó khăn',
    'mang lại hi vọng',
    'truyền cảm hứng',
    'giúp đỡ trẻ em',
    'giúp đỡ người già',
    'giúp đỡ người bệnh',
    'giúp đỡ người nghèo',
    'cải thiện môi trường',
    'bảo vệ môi trường',
    'cải thiện sức khỏe',
    'tăng cường giáo dục',
    'giúp đỡ phụ nữ',
    'giúp đỡ người khuyết tật',
    'giúp đỡ người vô gia cư',
    'tăng cường kỹ năng',
    'phát triển kỹ năng',
    'cải thiện điều kiện sống',
    'mang lại cơ hội',
    'mang lại sự thay đổi',
    'phát triển cộng đồng',
    'cải thiện cộng đồng',
    'tăng cường kết nối',
    'tăng cường giao lưu',
    'xây dựng cộng đồng mạnh mẽ',
    'giảm thiểu khó khăn',
    'giảm thiểu đói nghèo',
    'giảm thiểu bệnh tật',
    'giảm thiểu ô nhiễm',
    'cứu trợ thiên tai',
    'cứu trợ khẩn cấp',
    'hỗ trợ khẩn cấp',
    'cải thiện vệ sinh',
    'cải thiện an ninh',
    'cải thiện an toàn',
    'nâng cao nhận thức',
    'tăng cường an toàn',
    'tăng cường đoàn kết',
    'xây dựng đoàn kết',
    'tăng cường bảo vệ',
    'phát triển bền vững',
    'phát triển kinh tế',
    'phát triển xã hội',
    'phát triển văn hóa',
    'phát triển giáo dục',
    'phát triển y tế',
    'phát triển nông thôn',
    'phát triển đô thị',
    'phát triển trẻ em',
    'phát triển thanh niên',
    'phát triển phụ nữ',
    'phát triển người già',
    'phát triển cộng đồng thiểu số',
    'phát triển người khuyết tật',
    'phát triển người yếu thế',
    'phát triển nông nghiệp',
    'phát triển công nghiệp',
    'phát triển dịch vụ',
    'phát triển công nghệ',
    'phát triển thông tin',
    'phát triển truyền thông',
    'phát triển văn nghệ',
    'phát triển thể thao',
    'phát triển du lịch',
    'phát triển hạ tầng',
    'phát triển năng lượng',
    'phát triển giao thông',
    'phát triển tài nguyên',
    'phát triển nguồn nhân lực',
    'phát triển môi trường sống',
    'phát triển nguồn nước',
    'phát triển vệ sinh môi trường',
    'phát triển quản lý chất thải',
    'phát triển quản lý rác thải',
    'phát triển quản lý tài nguyên',
    'phát triển quản lý nước',
    'phát triển quản lý môi trường',
    'phát triển bảo tồn thiên nhiên',
    'phát triển bảo tồn động vật',
    'phát triển bảo tồn thực vật',
    'phát triển bảo tồn văn hóa',
    'phát triển bảo tồn lịch sử',
    'phát triển bảo tồn di sản',
    'phát triển bảo tồn kiến trúc',
    'phát triển bảo tồn cảnh quan',
    'phát triển bảo tồn sinh học',
    'phát triển bảo tồn tài nguyên',
    'phát triển bảo tồn năng lượng',
    'phát triển bảo tồn nguồn nước',
    'phát triển bảo tồn đất đai',
    'phát triển bảo tồn không khí',
    'phát triển bảo tồn biển',
    'phát triển bảo tồn rừng',
    'phát triển bảo tồn động vật quý hiếm',
    'phát triển bảo tồn thực vật quý hiếm',
    'phát triển bảo tồn hệ sinh thái',
    'phát triển bảo tồn đa dạng sinh học',
    'phát triển bảo tồn nguồn gene',
    'phát triển bảo tồn tài nguyên thiên nhiên',
    'phát triển bảo tồn văn hóa dân tộc',
    'phát triển bảo tồn văn hóa phi vật thể',
    'phát triển bảo tồn văn hóa vật thể',
    'phát triển bảo tồn văn hóa truyền thống',
    'phát triển bảo tồn văn hóa dân gian',
    'phát triển bảo tồn văn hóa dân tộc thiểu số',
    'phát triển bảo tồn văn hóa địa phương',
    'phát triển bảo tồn văn hóa vùng miền',
    'phát triển bảo tồn văn hóa nông thôn',
    'phát triển bảo tồn văn hóa đô thị',
    'phát triển bảo tồn văn hóa nghề nghiệp',
    'phát triển bảo tồn văn hóa sản xuất',
    'phát triển bảo tồn văn hóa sinh hoạt',
    'phát triển bảo tồn văn hóa lễ hội',
    'phát triển bảo tồn văn hóa tín ngưỡng',
    'phát triển bảo tồn văn hóa tôn giáo',
    'phát triển bảo tồn văn hóa giáo dục',
    'phát triển bảo tồn văn hóa y tế',
    'phát triển bảo tồn văn hóa khoa học',
    'phát triển bảo tồn văn hóa công nghệ',
    'phát triển bảo tồn văn hóa kinh tế',
    'phát triển bảo tồn văn hóa chính trị',
    'phát triển bảo tồn văn hóa xã hội',
    'phát triển bảo tồn văn hóa văn nghệ',
    'phát triển bảo tồn văn hóa thể thao',
    'phát triển bảo tồn văn hóa du lịch',
    'phát triển bảo tồn văn hóa giao thông',
    'phát triển bảo tồn văn hóa năng lượng',
    'phát triển bảo tồn văn hóa môi trường',
    'phát triển bảo tồn văn hóa tài nguyên',
    'phát triển bảo tồn văn hóa đô thị',
    'phát triển bảo tồn văn hóa nông thôn',
    'phát triển bảo tồn văn hóa công nghiệp',
    'phát triển bảo tồn văn hóa dịch vụ',
    'phát triển bảo tồn văn hóa nghề truyền thống',
    'phát triển bảo tồn văn hóa ẩm thực',
    'phát triển bảo tồn văn hóa du lịch sinh thái',
    'phát triển bảo tồn văn hóa du lịch cộng đồng',
    'phát triển bảo tồn văn hóa du lịch văn hóa',
    'phát triển bảo tồn văn hóa du lịch lịch sử',
    'phát triển bảo tồn văn hóa du lịch biển',
    'phát triển bảo tồn văn hóa du lịch rừng',
    'phát triển bảo tồn văn hóa du lịch núi',
    'phát triển bảo tồn văn hóa du lịch hang động',
    'phát triển bảo tồn văn hóa du lịch sông nước',
    'phát triển bảo tồn văn hóa du lịch đồng bằng',
    'phát triển bảo tồn văn hóa du lịch cao nguyên',
    'phát triển bảo tồn văn hóa du lịch đảo',
    'phát triển bảo tồn văn hóa du lịch thôn quê',
    'phát triển bảo tồn văn hóa du lịch thành thị',
    'phát triển bảo tồn văn hóa du lịch nghề nghiệp',
    'phát triển bảo tồn văn hóa du lịch sinh thái nông nghiệp',
    'phát triển bảo tồn văn hóa du lịch sinh thái công nghiệp',
    'phát triển bảo tồn văn hóa du lịch sinh thái dịch vụ',
    'phát triển bảo tồn văn hóa du lịch sinh thái công nghệ',
    'phát triển bảo tồn văn hóa du lịch sinh thái thông tin',
    'phát triển bảo tồn văn hóa du lịch sinh thái truyền thông',
    'phát triển bảo tồn văn hóa du lịch sinh thái văn nghệ',
    'phát triển bảo tồn văn hóa du lịch sinh thái thể thao',
    'phát triển bảo tồn văn hóa du lịch sinh thái nghệ thuật',
    'phát triển bảo tồn văn hóa du lịch sinh thái giáo dục',
    'chi tiết',
    'cụ thể',
    'rõ ràng',
    'đầy đủ thông tin',
    'minh bạch',
    'mô tả chi tiết',
    'nội dung rõ ràng',
    'thông tin chi tiết',
    'hướng dẫn cụ thể',
    'định nghĩa rõ ràng',
    'mô tả công việc',
    'nhiệm vụ cụ thể',
    'vai trò rõ ràng',
    'trách nhiệm cụ thể',
    'thông tin sự kiện',
    'thời gian cụ thể',
    'địa điểm chi tiết',
    'đối tượng hưởng lợi',
    'mục tiêu rõ ràng',
    'kết quả dự kiến',
    'ngày tháng cụ thể',
    'giờ cụ thể',
    'vị trí cụ thể',
    'người liên hệ rõ ràng',
    'số điện thoại liên hệ',
    'email liên hệ',
    'thời gian bắt đầu',
    'thời gian kết thúc',
    'hạn chót đăng ký',
    'điều kiện tham gia',
    'cách thức tham gia',
    'phương thức đăng ký',
    'hướng dẫn tham gia',
    'mục đích sự kiện',
    'yêu cầu tham gia',
    'quy trình tham gia',
    'đối tượng tham gia',
    'công việc cụ thể',
    'nhiệm vụ chính',
    'hoạt động chính',
    'chức năng nhiệm vụ',
    'yêu cầu công việc',
    'mô tả nhiệm vụ',
    'mô tả hoạt động',
    'kế hoạch công việc',
    'kế hoạch hành động',
    'kế hoạch tổ chức',
    'lịch trình cụ thể',
    'ngày tổ chức',
    'giờ tổ chức',
    'nội dung hoạt động',
    'chi phí tham gia',
    'phương tiện đi lại',
    'hướng dẫn đường đi',
    'sơ đồ tổ chức',
    'cách thức tổ chức',
    'quy định tham gia',
    'quy trình làm việc',
    'quy trình tổ chức',
    'hướng dẫn quy trình',
    'hướng dẫn chi tiết',
    'thông tin người nhận',
    'thông tin người gửi',
    'thông tin liên hệ',
    'thông tin đăng ký',
    'hướng dẫn sử dụng',
    'hướng dẫn an toàn',
    'yêu cầu an toàn',
    'quy định an toàn',
    'chỉ dẫn cụ thể',
    'yêu cầu rõ ràng',
    'mục đích rõ ràng',
    'nội dung cụ thể',
    'mô tả mục tiêu',
    'mô tả đối tượng',
    'mô tả sự kiện',
    'mô tả chương trình',
    'mô tả dự án',
    'mô tả hoạt động',
    'mô tả kết quả',
    'phân tích nhiệm vụ',
    'phân tích công việc',
    'phân tích mục tiêu',
    'phân tích hoạt động',
    'phân tích kết quả',
    'tóm tắt cụ thể',
    'tóm tắt rõ ràng',
    'tóm tắt nội dung',
    'tóm tắt sự kiện',
    'tóm tắt công việc',
    'tóm tắt chương trình',
    'tóm tắt dự án',
    'tóm tắt hoạt động',
    'tóm tắt kết quả',
    'tóm tắt nhiệm vụ',
    'phi thương mại',
    'không vì lợi nhuận',
    'phi lợi nhuận',
    'từ thiện',
    'tình nguyện',
    'cộng đồng',
    'hỗ trợ xã hội',
    'giúp đỡ người nghèo',
    'hoạt động xã hội',
    'hoạt động tình nguyện',
    'hoạt động từ thiện',
    'dự án xã hội',
    'dự án từ thiện',
    'dự án tình nguyện',
    'chương trình tình nguyện',
    'chương trình từ thiện',
    'chương trình xã hội',
    'sự kiện cộng đồng',
    'sự kiện từ thiện',
    'sự kiện tình nguyện',
    'hoạt động phi lợi nhuận',
    'hoạt động thiện nguyện',
    'công việc thiện nguyện',
    'hoạt động hỗ trợ',
    'công việc hỗ trợ',
    'chương trình hỗ trợ',
    'hoạt động cộng đồng',
    'hoạt động giúp đỡ',
    'dự án giúp đỡ',
    'chương trình giúp đỡ',
    'sự kiện giúp đỡ',
    'hoạt động cứu trợ',
    'dự án cứu trợ',
    'chương trình cứu trợ',
    'sự kiện cứu trợ',
    'quỹ từ thiện',
    'quỹ tình nguyện',
    'quỹ cộng đồng',
    'tổ chức phi lợi nhuận',
    'tổ chức từ thiện',
    'tổ chức tình nguyện',
    'tổ chức xã hội',
    'tổ chức cộng đồng',
    'tổ chức cứu trợ',
    'hội từ thiện',
    'hội tình nguyện',
    'hội xã hội',
    'hội cộng đồng',
    'hội cứu trợ',
    'đội từ thiện',
    'đội tình nguyện',
    'đội xã hội',
    'đội cộng đồng',
    'đội cứu trợ',
    'nhóm từ thiện',
    'nhóm tình nguyện',
    'nhóm xã hội',
    'nhóm cộng đồng',
    'nhóm cứu trợ',
    'chiến dịch từ thiện',
    'chiến dịch tình nguyện',
    'chiến dịch xã hội',
    'chiến dịch cộng đồng',
    'chiến dịch cứu trợ',
    'hoạt động cứu trợ khẩn cấp',
    'chương trình cứu trợ khẩn cấp',
    'dự án cứu trợ khẩn cấp',
    'sự kiện cứu trợ khẩn cấp',
    'quỹ cứu trợ khẩn cấp',
    'tổ chức cứu trợ khẩn cấp',
    'hội cứu trợ khẩn cấp',
    'đội cứu trợ khẩn cấp',
    'nhóm cứu trợ khẩn cấp',
    'chiến dịch cứu trợ khẩn cấp',
    'hoạt động thiện nguyện',
    'công việc thiện nguyện',
    'hoạt động tình nguyện viên',
    'công việc tình nguyện viên',
    'hoạt động hỗ trợ cộng đồng',
    'công việc hỗ trợ cộng đồng',
    'chương trình hỗ trợ cộng đồng',
    'hoạt động thiện nguyện viên',
    'công việc thiện nguyện viên',
    'hoạt động hỗ trợ xã hội',
    'công việc hỗ trợ xã hội',
    'chương trình hỗ trợ xã hội',
    'dự án hỗ trợ xã hội',
    'dự án hỗ trợ cộng đồng',
    'dự án thiện nguyện viên',
    'dự án thiện nguyện',
    'hoạt động trợ giúp',
    'công việc trợ giúp',
    'chương trình trợ giúp',
    'dự án trợ giúp',
    'sự kiện trợ giúp',
    'hoạt động bảo trợ',
    'công việc bảo trợ',
    'chương trình bảo trợ',
    'dự án bảo trợ',
    'sự kiện bảo trợ',
    'hoạt động khuyến học',
    'công việc khuyến học',
    'chương trình khuyến học',
    'dự án khuyến học',
    'sự kiện khuyến học',
    'hoạt động khuyến tài',
    'công việc khuyến tài',
    'chương trình khuyến tài',
    'dự án khuyến tài',
    'sự kiện khuyến tài',
    'hoạt động khuyến học khuyến tài',
    'công việc khuyến học khuyến tài',
    'chương trình khuyến học khuyến tài',
    'dự án khuyến học khuyến tài',
    'sự kiện khuyến học khuyến tài',
    'hoạt động chăm sóc sức khỏe',
    'công việc chăm sóc sức khỏe',
    'chương trình chăm sóc sức khỏe',
    'dự án chăm sóc sức khỏe',
    'sự kiện chăm sóc sức khỏe',
    'hoạt động bảo vệ sức khỏe',
    'công việc bảo vệ sức khỏe',
    'chương trình bảo vệ sức khỏe',
    'dự án bảo vệ sức khỏe',
    'sự kiện bảo vệ sức khỏe',
    'hoạt động bảo vệ môi trường',
    'công việc bảo vệ môi trường',
    'chương trình bảo vệ môi trường',
    'dự án bảo vệ môi trường',
    'sự kiện bảo vệ môi trường',
    'hoạt động làm sạch môi trường',
    'công việc làm sạch môi trường',
    'chương trình làm sạch môi trường',
    'dự án làm sạch môi trường',
    'sự kiện làm sạch môi trường',
    'hoạt động bảo tồn thiên nhiên',
    'công việc bảo tồn thiên nhiên',
    'chương trình bảo tồn thiên nhiên',
    'dự án bảo tồn thiên nhiên',
    'sự kiện bảo tồn thiên nhiên',
    'hoạt động bảo tồn văn hóa',
    'công việc bảo tồn văn hóa',
    'chương trình bảo tồn văn hóa',
    'dự án bảo tồn văn hóa',
    'sự kiện bảo tồn văn hóa',
    'hoạt động bảo tồn lịch sử',
    'công việc bảo tồn lịch sử',
    'chương trình bảo tồn lịch sử',
    'dự án bảo tồn lịch sử',
    'sự kiện bảo tồn lịch sử',
    'hoạt động khôi phục thiên nhiên',
    'công việc khôi phục thiên nhiên',
    'chương trình khôi phục thiên nhiên',
    'dự án khôi phục thiên nhiên',
    'sự kiện khôi phục thiên nhiên',
    'hoạt động khôi phục văn hóa',
    'công việc khôi phục văn hóa',
    'chương trình khôi phục văn hóa',
    'dự án khôi phục văn hóa',
    'sự kiện khôi phục văn hóa',
    'hoạt động khôi phục lịch sử',
    'công việc khôi phục lịch sử',
    'chương trình khôi phục lịch sử',
    'dự án khôi phục lịch sử',
    'sự kiện khôi phục lịch sử',
    'bao dung',
    'tôn trọng',
    'đa dạng',
    'đa nguyên tố',
    'đa dạng văn hóa',
    'đa dạng dân tộc',
    'đa dạng tôn giáo',
    'đa dạng giới tính',
    'đa dạng tình hình hôn nhân',
    'đa dạng tình trạng hôn nhân',
    'đa dạng tình hình hôn nhân',
    'không kỳ thị',
    'không phân biệt',
    'không phân rẽ',
    'tính chất rộng lớn',
    'phong phú',
    'đặc trưng',
    'chân thành',
    'chân thành',
    'đồng lòng',
    'chính xác',
    'chính xác',
    'minh bạch',
    'không kỳ thị tôn giáo',
    'không kỳ thị tình dục',
    'không kỳ thị giới tính',
    'không kỳ thị tình dục',
    'không kỳ thị sắc tộc',
    'không kỳ thị chủng tộc',
    'không kỳ thị ngôn ngữ',
    'không kỳ thị tình dục',
    'không kỳ thị khuyết tật',
    'không kỳ thị tình trạng hôn nhân',
    'không kỳ thị tình hình hôn nhân',
    'không kỳ thị tình trạng hôn nhân',
    'không kỳ thị tình hình hôn nhân',
    'không kỳ thị tuổi tác',
    'không kỳ thị quốc tịch',
    'không kỳ thị xuất xứ',
    'không kỳ thị địa lý',
    'không kỳ thị bản sắc văn hóa',
    'không kỳ thị phong cách sống',
    'không kỳ thị hoàn cảnh kinh tế',
    'không kỳ thị điều kiện gia đình',
    'không kỳ thị địa vị xã hội',
    'không kỳ thị trạng thái xã hội',
    'không kỳ thị tình trạng xã hội',
    'không kỳ thị tình hình xã hội',
    'không kỳ thị tình trạng xã hội',
    'không kỳ thị tình hình xã hội',
    'không kỳ thị điểm mạnh',
    'không kỳ thị điểm yếu',
    'không kỳ thị nghề nghiệp',
    'không kỳ thị trình độ học vấn',
    'không kỳ thị trình độ chuyên môn',
    'không kỳ thị kinh nghiệm làm việc',
    'không kỳ thị thành tích công việc',
    'không kỳ thị trình độ tinh thần',
    'không kỳ thị tình trạng sức khỏe',
    'không kỳ thị tình hình sức khỏe',
    'không kỳ thị tình trạng sức khỏe',
    'không kỳ thị tình hình sức khỏe',
    'không kỳ thị hành vi tình dục',
    'không kỳ thị phản hồi tình dục',
    'không kỳ thị quan điểm tình dục',
    'không kỳ thị hành vi tình dục',
    'không kỳ thị hành vi tình dục',
    'không kỳ thị phản hồi tình dục',
    'không kỳ thị quan điểm tình dục',
    'không kỳ thị hành vi giới tính',
    'không kỳ thị hành vi giới tính',
    'không kỳ thị phản hồi giới tính',
    'không kỳ thị quan điểm giới tính',
    'không kỳ thị hành vi tình dục',
    'không kỳ thị hành vi giới tính',
    'không kỳ thị phản hồi giới tính',
    'không kỳ thị quan điểm giới tính',
    'không kỳ thị hành vi định tính',
    'không kỳ thị hành vi định tính',
    'không kỳ thị phản hồi định tính',
    'không kỳ thị quan điểm định tính',
    'không kỳ thị hành vi quan hệ tình dục',
    'không kỳ thị hành vi quan hệ tình dục',
    'không kỳ thị phản hồi quan hệ tình dục',
    'không kỳ thị quan điểm quan hệ tình dục',
    'không kỳ thị hành vi quan hệ tình dục',
    'không kỳ thị hành vi quan hệ tình dục',
    'không kỳ thị phản hồi quan hệ tình dục',
    'không kỳ thị quan điểm quan hệ tình dục',
    'không kỳ thị hành vi tình dục',
    'không kỳ thị hành vi tình dục',
    "công việc tình nguyện",
    "dịch vụ cộng đồng",
    "sự kiện từ thiện",
    "tổ chức phi lợi nhuận",
    "chiến dịch gây quỹ",
    "trách nhiệm xã hội",
    "viện trợ nhân đạo",
    "nỗ lực từ thiện",
    "tiếp cận thanh niên",
    "nhà tạm trú",
    "đợt hiến máu",
    "dọn dẹp môi trường",
    "cứu trợ thiên tai",
    "sứ mệnh y tế",
    "cứu hộ động vật",
    "chương trình xóa mù chữ",
    "chương trình tư vấn",
    "nhóm hỗ trợ",
    "can thiệp khủng hoảng",
    "chăm sóc người già",
    "nhu cầu đặc biệt",
    "hỗ trợ người tị nạn",
    "giao lưu văn hóa",
    "công việc vận động",
    "xây dựng cộng đồng",
    "công bằng xã hội",
    "hỗ trợ giáo dục",
    "phát triển kỹ năng",
    "sáng kiến trao quyền",
    "thúc đẩy hòa bình",
    "hành động vì khí hậu",
    "bình đẳng giới",
    "nâng cao sức khỏe",
    "giảm nghèo",
    "trợ giúp pháp lý",
    "trao quyền thanh niên",
    "tiếp cận cộng đồng",
    "tham gia dân sự",
    "phân phối tài nguyên",
    "trung tâm phục hồi",
    "dịch vụ tư vấn",
    "hỗ trợ cô nhi",
    "quản lý khủng hoảng",
    "sáng tạo xã hội",
    "phản ứng khẩn cấp",
    "phát triển kinh tế",
    "phát triển nông thôn",
    "đổi mới đô thị",
    "vườn cộng đồng",
    "phối hợp tình nguyện",
    "y tế công cộng",
    "hỗ trợ người cao tuổi",
    "chuẩn bị thảm họa",
    "đẩy mạnh xóa mù chữ",
    "tiếp cận công nghệ",
    "nước sạch",
    "cung cấp đồ dùng học tập",
    "chiến dịch đồ chơi",
    "hỗ trợ người vô gia cư",
    "cải tạo nơi trú ẩn",
    "bếp ăn từ thiện",
    "cung cấp thiết bị y tế",
    "hỗ trợ tâm lý",
    "dự án nhà ở",
    "hướng dẫn nghề nghiệp",
    "thể thao thanh niên",
    "liệu pháp nghệ thuật",
    "chương trình âm nhạc",
    "lớp học nhảy",
    "bảo tồn văn hóa",
    "di tích lịch sử",
    "bảo tồn động vật hoang dã",
    "bảo vệ biển",
    "trồng cây",
    "năng lượng tái tạo",
    "quản lý chất thải",
    "sáng kiến tái chế",
    "chương trình ủ phân",
    "nông nghiệp đô thị",
    "không gian xanh",
    "chia sẻ xe đạp",
    "năng lượng sạch",
    "hiệu quả năng lượng",
    "dấu chân carbon",
    "thân thiện môi trường",
    "sống bền vững",
    "nông nghiệp hữu cơ",
    "ăn uống lành mạnh",
    "sức khỏe tâm thần",
    "hỗ trợ đồng đẳng",
    "phục hồi sau chấn thương",
    "tư vấn chia buồn",
    "hỗ trợ gia đình",
    "bảo vệ trẻ em",
    "bạo lực gia đình",
    "chống bắt nạt",
    "giáo dục toàn diện",
    "lớp học ngôn ngữ",
    "đào tạo nghề",
    "sắp xếp công việc",
    "hướng dẫn kinh doanh",
    "hiểu biết tài chính",
    "hiểu biết số",
    "lớp học lập trình",
    "câu lạc bộ robot",
    "hội chợ khoa học",
    "gia sư toán học",
    "câu lạc bộ lịch sử",
    "câu lạc bộ văn học",
    "quyên góp sách",
    "hỗ trợ thư viện",
    "cung cấp dụng cụ nghệ thuật",
    "bộ dụng cụ khoa học",
    "đồng phục học sinh",
    "chiến dịch ba lô",
    "chuẩn bị đại học",
    "quỹ học bổng",
    "chương trình thực tập",
    "theo dõi công việc",
    "chia sẻ kỹ năng",
    "mạng lưới chuyên nghiệp",
    "đào tạo lãnh đạo",
    "xây dựng đội ngũ",
    "triển lãm nghề nghiệp",
    "hỗ trợ doanh nhân",
    "doanh nghiệp nhỏ",
    "chương trình tài chính vi mô",
    "hội nhóm phụ nữ",
    "phòng khám sức khỏe",
    "phòng khám lưu động",
    "chương trình khám mắt",
    "chương trình nha khoa",
    "chiến dịch tiêm chủng",
    "kiểm tra sức khỏe",
    "quảng bá vệ sinh",
    "dự án vệ sinh",
    "nhà vệ sinh sạch",
    "vệ sinh kinh nguyệt",
    "nước uống an toàn",
    "làm sạch nước",
    "trạm rửa tay",
    "phòng ngừa bệnh tật",
    "chương trình dinh dưỡng",
    "chương trình ăn uống",
    "trung tâm sức khỏe",
    "liệu pháp vật lý",
    "lớp học thể dục",
    "buổi học yoga",
    "nhóm thiền",
    "giảm căng thẳng",
    "lối sống lành mạnh",
    "hội thảo về sức khỏe",
    "hội thảo về sức khỏe",
    "nghiên cứu y tế",
    "giáo dục sức khỏe",
    "thử thách thể dục",
    "sức khỏe cộng đồng",
    "chăm sóc phòng ngừa",
    "thuốc thảo dược",
    "điều trị bằng liệu pháp tự nhiên",
    "phòng khám châm cứu",
    "liệu pháp xoa bóp",
    "chăm sóc nha khoa",
    "chăm sóc mắt",
    "sức khỏe tâm thần",
    "hỗ trợ cảm xúc",
    "tư vấn đồng đẳng",
    "hỗ trợ cha mẹ",
    "tư vấn thanh niên",
    "hướng dẫn nghề nghiệp",
    "nhóm học tập",
    "giao lưu ngôn ngữ",
    "chuyến đi văn hóa",
    "tham quan di sản",
    "triển lãm nghệ thuật",
    "lễ hội âm nhạc",
    "buổi biểu diễn nhảy",
    "nhóm sân khấu",
    "buổi chiếu phim",
    "câu lạc bộ nhiếp ảnh",
    "nhóm nhà văn",
    "cuộc thi thơ",
    "câu lạc bộ sách",
    "lớp học hội họa",
    "lớp điêu khắc",
    "hội chợ thủ công",
    "chợ hàng thủ công",
    "chợ trời",
    "thương mại công bằng",
    "mua sắm đạo đức",
    "chợ hữu cơ",
    "chợ nông dân",
    "nhà bếp cộng đồng",
    "bếp ăn từ thiện",
    "hàng cứu trợ",
    "ngân hàng thực phẩm",
    "phát quà thực phẩm",
    "phân phối bữa ăn",
    "chiến dịch chăn ấm",
    "áo khoác mùa đông",
    "quần áo ấm",
    "chiến dịch đồ chơi",
    "niềm vui ngày lễ",
    "sự kiện lễ hội",
    "lễ hội cộng đồng",
    "tiệc đường phố",
    "hội chợ đường phố",
    "đội tuần tra khu phố",
    "tuần tra an ninh",
    "phòng chống tội phạm",
    "giải quyết xung đột",
    "dịch vụ hòa giải",
    "công lý phục hồi",
    "hỗ trợ nhà tù",
    "hỗ trợ tái hòa nhập",
    "quỹ bảo lãnh",
    "phòng khám pháp lý",
    "luật sư công cộng",
    "nhân quyền",
    "tự do dân sự",
    "vận động chính trị",
    "cải cách chính sách",
    "giáo dục cử tri",
    "giám sát bầu cử",
    "giáo dục công dân",
    "diễn đàn công cộng",
    "cuộc họp cộng đồng",
    "phát biểu trước công chúng",
    "câu lạc bộ tranh luận",
    "câu lạc bộ báo chí",
    "báo cáo tin tức",
    "hiểu biết truyền thông",
    "mạng xã hội",
    "chiến dịch kỹ thuật số",
    "hoạt động trực tuyến",
    "an ninh mạng",
    "bảo vệ dữ liệu",
    "quyền riêng tư",
    "an toàn internet",
    "hỗ trợ kỹ thuật",
    "đào tạo CNTT",
    "phát triển phần mềm",
    "ứng dụng di động",
    "thiết kế web",
    "thiết kế đồ họa",
    "sản xuất video",
    "chỉnh sửa phim",
    "sản xuất âm nhạc",
    "kỹ thuật âm thanh",
    "chương trình radio",
    "làm podcast",
    "viết blog",
    "sáng tạo nội dung",
    "viết tự do",
    "viết sáng tạo",
    "kể chuyện",
    "viết kịch bản",
    "kịch bản phim",
    "viết kịch",
    "quản lý sân khấu",
    "lập kế hoạch sự kiện",
    "lập kế hoạch đám cưới",
    "lập kế hoạch tiệc",
    "hội nghị",
    "hội thảo",
    "buổi hội thảo",
    "buổi đào tạo",
    "hội thảo lãnh đạo",
    "hội thảo kinh doanh",
    "phát triển chuyên môn",
    "đào tạo kỹ năng",
    "phát triển sự nghiệp",
    "sẵn sàng làm việc",
    "dịch vụ việc làm",
    "phát triển lực lượng lao động",
    "đào tạo nhân viên",
    "phát triển nhân viên",
    "trách nhiệm xã hội của doanh nghiệp",
    "đạo đức kinh doanh",
    "lao động công bằng",
    "kinh doanh đạo đức",
    "doanh nghiệp xã hội",
    "đầu tư tác động",
    "hoạt động từ thiện",
    "trả ơn",
    "quỹ cộng đồng",
    "từ thiện công cộng",
    "quan hệ nhà tài trợ",
    "quản lý quỹ",
    "viết đơn xin tài trợ",
    "viết đề xuất",
    "chiến lược gây quỹ",
    "tình nguyện",
    "nhà hảo tâm",
    "tổ chức",
    "thiện nguyện",
    "công việc",
    "cứu trợ",
    "ủng hộ",
    "quyên góp",
    "giúp đỡ",
    "cộng đồng",
    "phi lợi nhuận",
    "tình nguyện viên",
    "nhân đạo",
    "trợ giúp",
    "cứu trợ",
    "viện trợ",
    "trợ cấp",
    "nhân ái",
    "thiện tâm",
    "từ thiện",
    "hiến tặng",
    "ủng hộ",
    "tài trợ",
    "thiện nguyện",
    "thiện chí",
    "hoạt động",
    "tình nguyện",
    "viên chức",
    "công việc",
    "giúp sức",
    "hỗ trợ",
    "cứu tế",
    "phúc lợi",
    "lòng tốt",
    "nhân văn",
    "lòng nhân ái",
    "tương trợ",
    "quyên góp",
    "viện trợ",
    "trợ giúp",
    "nhà tài trợ",
    "cứu hộ",
    "hiến máu",
    "xã hội",
    "phát triển",
    "nỗ lực",
    "công ích",
    "cứu trợ",
    "viên chức",
    "hoạt động",
    "viên chức",
    "hỗ trợ",
    "lòng tốt",
    "nhân ái",
    "phát triển",
    "phúc lợi",
    "viên chức",
    "thiện nguyện",
    "nhân ái",
    "cứu tế",
    "lợi ích",
    "viện trợ",
    "nhà tài trợ",
    "quyên góp",
    "viên chức",
    "cứu tế",
    "phúc lợi",
    "lòng tốt",
    "tình nguyện",
    "viên chức",
    "hỗ trợ",
    "công ích",
    "tài trợ",
    "viên chức",
    "viện trợ",
    "lòng tốt",
    "phát triển",
    "tình nguyện",
    "nhân ái",
    "thiện nguyện",
    "nhà tài trợ",
    "viên chức",
    "hỗ trợ",
    "cứu tế",
    "viên chức",
    "phúc lợi",
    "tài trợ",
    "nhân ái",
    "công ích",
    "quyên góp",
    "thiện nguyện",
    "viên chức",
    "cứu trợ",
    "hỗ trợ",
    "phát triển",
    "tài trợ",
    "viên chức",
    "nhà tài trợ",
    "lợi ích",
    "phúc lợi",
    "thiện nguyện",
    "tình nguyện",
    "viên chức",
    "phát triển",
    "nhân ái",
    "viên chức",
    "quyên góp",
    "nhà tài trợ",
    "viên chức",
    "lòng tốt",
    "tài trợ",
    "nhân ái",
    "công ích",
    "hỗ trợ",
    "viên chức",
    "cứu tế",
    "thiện nguyện",
    "nhà tài trợ",
    "phát triển",
    "viên chức",
    "quyên góp",
    "tình nguyện",
    "viên chức",
    "hỗ trợ",
    "công ích",
    "nhân ái",
    "viên chức",
    "lòng tốt",
    "cứu trợ",
    "viên chức",
    "tài trợ",
    "phúc lợi",
    "thiện nguyện",
    "cứu tế",
    "nhà tài trợ",
    "viên chức",
    "quyên góp",
    "nhân ái",
    "viên chức",
    "phát triển",
    "hỗ trợ",
    "viên chức",
    "cứu tế",
    "công ích",
    "nhân ái",
    "viên chức",
    "lợi ích",
    "quyên góp",
    "nhà tài trợ",
    "tình nguyện",
    "viên chức",
    "tài trợ",
    "phúc lợi",
    "viên chức",
    "lòng tốt",
    "nhân ái",
    "công ích",
    "viên chức",
    "hỗ trợ",
    "phát triển",
    "thiện nguyện",
    "viên chức",
    "quyên góp",
    "cứu trợ",
    "viên chức",
    "nhà tài trợ",
    "nhân ái",
    "viên chức",
    "tài trợ",
    "phát triển",
    "viên chức",
    "công ích",
    "phúc lợi",
    "viên chức",
    "quyên góp",
    "hỗ trợ",
    "cứu tế",
    "nhân ái",
    "viên chức",
    "thiện nguyện",
    "viện trợ",
    "viên chức",
    "nhà tài trợ",
    "phát triển",
    "viên chức",
    "quyên góp",
    "tình nguyện",
    "viên chức",
    "tài trợ",
    "cứu trợ",
    "viên chức",
    "lòng tốt",
    "nhân ái",
    "viên chức",
    "hỗ trợ",
    "phát triển",
    "viên chức",
    "công ích",
    "thiện nguyện",
    "viên chức",
    "quyên góp",
    "cứu tế",
    "nhà tài trợ",
    "viên chức",
    "tài trợ",
    "nhân ái",
    "viên chức",
    "lợi ích",
    "quyên góp",
    "viên chức",
    "cứu trợ",
    "phát triển",
    "viên chức",
    "công ích",
    "nhà tài trợ",
    "viên chức",
    "tình nguyện",
    "viên chức",
    "nhân ái",
    "quyên góp",
    "viên chức",
    "hỗ trợ",
    "phúc lợi",
    "viên chức",
    "tài trợ",
    "cứu trợ",
    "viên chức",
    "lòng tốt",
    "nhân ái",
    "viên chức",
    "công ích",
    "viện trợ",
    "viên chức",
    "quyên góp",
    "phát triển",
    "viên chức",
    "nhà tài trợ",
    "cứu tế",
    "viên chức",
    "tài trợ",
    "nhân ái",
    "viên chức",
    "lợi ích",
    "quyên góp",
    "viên chức",
    "cứu trợ",
    "phát triển",
    "viên chức",
    "công ích",
    "thiện nguyện",
    "viên chức",
    "quyên góp",
    "cứu tế",
    "nhà tài trợ",
    "viên chức",
    "tài trợ",
    "nhân ái",
];

module.exports = criteria;