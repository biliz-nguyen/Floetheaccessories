# 🌸 Floé — Handmade Floral Accessories

> **"Bloom In Your Own Way" • "Your Vibe, Your Style"**  
> Dự án thương hiệu phụ kiện hoa thủ công độc bản được phát triển trong khuôn khổ môn học Khởi nghiệp Thực nghiệm (EXE201).

- **Production URL:** [https://floetheaccessories.vercel.app/](https://floetheaccessories.vercel.app/)
- **Repository:** [https://github.com/biliz-nguyen/Floetheaccessories](https://github.com/biliz-nguyen/Floetheaccessories)
- **Primary Ordering Channel:** [Facebook Fanpage / Messenger](https://www.facebook.com/flowerfloe)

---

## 1. Giới thiệu tổng quan

**Floé** là thương hiệu phụ kiện thời trang thủ công tập trung vào các thiết kế hoa resin, ngọc trai nhân tạo và chi tiết kim loại mảnh mang phong cách pastel nữ tính, thanh lịch và cá nhân hóa:

1. **Móc khóa (Keychains):** Món phụ kiện nhỏ gọn đồng hành cùng túi xách, balo, chìa khóa mỗi ngày.
2. **Dây chuyền & Choker (Necklaces & Chokers):** Thiết kế ôm xương quai xanh với hoa resin và hạt pha lê giọt nước.
3. **Vòng đeo eo (Waist Chains):** Điểm nhấn uyển chuyển tôn vinh đường cong trang phục (váy suông, croptop, cạp trễ).
4. **Dịch vụ Thiết kế riêng (Custom Design):** Lắng nghe ý tưởng, sở thích màu sắc và kích thước theo số đo của từng khách hàng.

---

## 2. Công nghệ & Kiến trúc (Tech Stack)

- **Framework:** React 19 + Vite 8
- **Routing:** React Router v6 (SPA with dynamic client routing)
- **Styling:** Tailwind CSS v3 + CSS Variables + Custom Typography
- **Typography:**
  - Tiêu đề (Headings): **Cormorant Garamond** (Serif cổ điển, thanh thoát)
  - Nội dung (Body): **Sora** (Sans-serif hiện đại, rõ ràng, dễ đọc)
- **Bảng màu chủ đạo:**
  - `paper` / `paperWarm` (`#FFFAFB` / `#FFF6F8`): Nền giấy kem trang nhã
  - `petal` / `blush` (`#FFF0F4` / `#F7D4DF`): Hồng phấn pastel nhẹ nhàng
  - `pinkDeep` (`#B84F74`): Điểm nhấn hoa hồng đậm sang trọng
  - `ink` / `inkMuted` (`#34282D` / `#76636B`): Màu chữ nâu xám than dịu mắt
  - `mint` (`#F2FAF6`): Điểm xuyết xanh bạc hà tươi mát
- **Deployment & Hosting:** Vercel (kèm cấu hình SPA rewrites qua `vercel.json`)

---

## 3. Cấu trúc thư mục

```
floe-frontend/
├── public/
│   ├── favicon.svg
│   ├── media/
│   │   ├── brand/           # Logo, tranh minh họa custom, gift service
│   │   ├── packaging/       # Hộp Floé Box, tem niêm phong, card cảm ơn
│   │   ├── products/        # Ảnh cover và gallery chi tiết cho từng dòng sản phẩm
│   │   ├── team/            # Ảnh chân dung 5 thành viên sáng lập
│   │   └── video/           # Video câu chuyện mở hộp packaging
│   ├── news/                # Visual ra mắt thương hiệu
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── common/          # CopyButton, CustomerCareFaq
│   │   ├── home/            # Hero, ProductLineTeaser, WelcomeLetter, OurJourneyTimeline,
│   │   │                    # CustomDesignSection, PackagingExperience, FoundingTeam, CustomerFeedback
│   │   ├── layout/          # Header, Footer, MobileDock, ScrollManager
│   │   ├── media/           # ReducedMotionVideo
│   │   └── shop/            # CategoryTabs, ProductCard, ProductGrid
│   ├── data/
│   │   ├── categories.js    # Danh mục sản phẩm (Keychains, Necklaces, Waist Chains)
│   │   ├── customProcess.js # 5 bước quy trình đặt làm phụ kiện riêng & idea brief
│   │   ├── faqData.js       # Dữ liệu 6 chủ đề hỏi đáp & chăm sóc khách hàng
│   │   ├── journeyData.js   # 4 giai đoạn hành trình sáng tạo Behind the Bloom
│   │   ├── packaging.js     # Dữ liệu hình ảnh và video bao bì
│   │   ├── posts.js         # Nhật ký, hoạt động & recap chiến dịch EXE201
│   │   ├── productLines.js  # Teaser các dòng sản phẩm
│   │   ├── products.js      # Catalog sản phẩm kèm giá đã duyệt, chất liệu, kích thước, bảo quản
│   │   ├── siteContent.js   # Thông tin liên hệ, thương hiệu, điều hướng chung
│   │   └── team.js          # Thông tin 5 thành viên sáng lập
│   ├── pages/
│   │   ├── CustomPage.jsx   # Trang dịch vụ thiết kế riêng (Custom Design)
│   │   ├── HomePage.jsx     # Trang chủ thương hiệu
│   │   ├── NotFoundPage.jsx # Trang báo lỗi 404
│   │   ├── PostDetailPage.jsx # Trang chi tiết bài viết nhật ký
│   │   ├── PostsPage.jsx    # Trang danh sách bài viết & recap
│   │   └── ShopPage.jsx     # Trang catalog sản phẩm & Quick View đặt hàng
│   ├── utils/
│   │   └── formatCurrency.js # Định dạng tiền tệ VND chuẩn Việt Nam
│   ├── App.jsx              # Định tuyến ứng dụng React Router
│   ├── index.css            # Custom base styles, typography & animations
│   └── main.jsx             # Entry point
├── index.html               # Semantic HTML5, SEO Open Graph & Web Fonts
├── tailwind.config.js       # Cấu hình màu sắc, phông chữ và shadows
└── vercel.json              # Quy tắc định tuyến SPA Vercel
```

---

## 4. Các tính năng nổi bật

### 🌸 Catalog & Thông tin sản phẩm xác thực
- Hiển thị đầy đủ SKU (`MK-01`, `MK-02`, `MK-03`, `DC-01`, `VE-01`), tên sản phẩm, bộ sưu tập và đơn giá đã duyệt (Móc khóa `49.000 ₫`, Choker `130.000 ₫`, Waist Chain `160.000 ₫`).
- Phân biệt rõ ràng giữa **Mẫu thử nghiệm EXE201** (`Nova Keychain`, `Lunara Choker`) và **Bộ sưu tập hiện tại** (`Móc khóa hoa hồng`, `Elune Waist Chain`).
- Thông tin minh bạch: chất liệu, kích thước, màu sắc, tùy chọn kiểu dáng, quy cách đóng gói và hướng dẫn bảo quản.

### 💬 Trải nghiệm đặt hàng tối ưu qua Messenger
- Khách hàng xem sản phẩm qua Quick View trên máy tính hoặc di động.
- Cho phép chọn số lượng sản phẩm (tự động tính tạm tính tổng tiền).
- Cung cấp ô nhập ghi chú yêu cầu riêng (chiều dài xích nối, màu sắc charm, khắc thiệp...).
- Nút **"Sao chép thông tin đặt hàng"**: Định dạng sẵn văn bản đơn hàng rõ ràng, đẹp mắt để dán trực tiếp vào khung chat Messenger.
- Nút **"Nhắn Floé trên Facebook"**: Mở trực tiếp cuộc trò chuyện với fanpage Floé.

### 📖 Customer Care & FAQ
- Bộ câu hỏi - trả lời dạng Accordion tinh gọn giải đáp đầy đủ:
  1. Cách đặt hàng qua fanpage
  2. Quy trình làm đồ custom
  3. Hướng dẫn bảo quản phụ kiện hoa handmade
  4. Quy chuẩn đóng gói Standard & hộp quà Premium
  5. Tư vấn phương thức vận chuyển an toàn
  6. Hỗ trợ sau bán hàng và chỉnh sửa kích thước

### ⏳ Hành trình sáng tạo — Behind the Bloom
- Dòng thời gian 4 cột minh họa hành trình từ ý tưởng khởi nguồn đến sản phẩm thực tế:
  1. Cảm hứng & Nghiên cứu thị trường
  2. Thiết kế & Chế tác thủ công
  3. Hoàn thiện bao bì Floé Box & Kiểm soát chất lượng
  4. Thử nghiệm thị trường ban đầu (EXE201)

### 📰 Nhật ký & Hoạt động (Posts & Event Recap)
- Cập nhật các bài viết giới thiệu thương hiệu, câu chuyện bao bì và recap đợt thử nghiệm sản phẩm thực tế tháng 10/2026.
- Sử dụng ngôn ngữ trung thực, khách quan; không bịa đặt số liệu tài chính hoặc số lượng khách hàng.

---

## 5. Hướng dẫn cài đặt & Kiểm thử cục bộ

### Yêu cầu môi trường
- Node.js >= 18 (khuyến nghị v20+)
- npm >= 9

### Các bước chạy
```bash
# Di chuyển vào thư mục frontend
cd floe-frontend

# Cài đặt dependencies
npm ci

# Khởi chạy môi trường phát triển (Development Server)
npm run dev

# Kiểm tra cú pháp và chất lượng mã nguồn (Linter)
npm run lint

# Đóng gói sản phẩm cho môi trường Production
npm run build

# Xem thử bản đóng gói cục bộ
npm run preview
```

---

## 6. Thành viên dự án Floé (EXE201)

1. **Nguyễn Lê Minh** — Chief Executive Officer (CEO)
2. **Tạ Thị Hồng Phúc** — Chief Product Officer (CPO)
3. **Nguyễn Huỳnh Thúy Vy** — Chief Marketing Officer (CMO)
4. **Nguyễn Minh Thư** — Chief Operating Officer (COO)
5. **Đặng Nguyễn Nhật Quang** — Chief Customer Officer (CCO)
