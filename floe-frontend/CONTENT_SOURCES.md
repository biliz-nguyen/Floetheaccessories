# Nguồn nội dung cập nhật ngày 22/10/2026

## Tài liệu tham chiếu

- [Thư mục Drive do chủ website cung cấp](https://drive.google.com/drive/folders/1-40MIhkAY41sx7NCutbGLJYpzsl0R5DB).
- [Media checklist](https://docs.google.com/spreadsheets/d/1qVwXAXbbvAfmNzLbVrOCdrqAC7zH0o1J7vmuIb6cxVw/edit).

Đã đọc 4 tab kế hoạch: `KẾ HOẠCH XÚC TIẾN`, `Plan truyền thông ( GD2)`, `GRAND OPENING + KH1`, `PLAN TRUYỀN THÔNG ( GD1)`, và đối chiếu `CHECKLIST WEBSITE ` (tên tab có dấu cách cuối).

## Bài viết trên website

`src/data/posts.js` chứa 4 bài tổng hợp cho 4 chương trình trong tab `KẾ HOẠCH XÚC TIẾN`, thay cho việc lặp lại từng teaser, reminder và recap.

| Bài | Vùng nguồn | Thời gian chương trình |
| --- | --- | --- |
| Giải mã thông điệp | E6:F8; tiêu đề A4 | 16–20/10/2026 |
| Check-in booth | E12:F16 | Dự kiến 28/10/2026 |
| Special Gift 20/10 | E20:F22 | 18–20/10/2026 |
| Floé Moments | A24, E26:F28, C30 | Dự kiến nhận ảnh 29–31/10; tổng kết 01/11/2026 |

Nội dung được biên tập từ source để đọc trên web; giữ số lượng quà, điều kiện ưu đãi, hạn tham gia và sự đồng ý khi đăng lại ảnh. Các bài tổng hợp được hiển thị ngay, bao gồm lịch dự kiến. Trạng thái thời gian được tính theo UTC+7. Website không tự lấy thay đổi mới từ Google Sheets.

## Quyết định biên tập

- Theo yêu cầu chủ website, gỡ Lunara Choker/Dây chuyền khỏi dữ liệu sản phẩm, danh mục và phần giới thiệu. Không đưa combo có dây chuyền vào bài viết. Giữ nguyên các file ảnh sản phẩm cũ trên đĩa để có thể khôi phục khi cần.
- Theo yêu cầu tiếp theo của chủ website, đồng bộ giá toàn bộ sản phẩm đang bán thành 49.000 ₫/mẫu trong `src/data/products.js`. Giá này thay thế các mức giá trước đó; không thay phụ phí bao bì hoặc điều kiện ưu đãi lịch sử.
- Tab `GRAND OPENING + KH1` ghi Opening Week 09–15/10; tab `KẾ HOẠCH XÚC TIẾN` dời minigame sang 16–20/10 nhưng còn câu cộng dồn ưu đãi Opening Week. Vì vậy không công bố mức tổng 20% và không kéo dài ưu đãi 10% Opening Week trên website.
- Booth: F13/F14 ghi 09:00–16:00; F15 ghi 09:00–10:00; F14 còn placeholder giờ mở booth. Chỉ công bố ngày và địa điểm; hướng khách tới Fanpage để xác nhận giờ.
- Thể lệ booth dùng bản trong tab `KẾ HOẠCH XÚC TIẾN`: follow + share công khai. Bản GD2 chỉ nói tương tác bài đăng; không trộn hai bản.
- Các checkbox chương trình tháng 10 chưa đánh dấu hoàn tất. Không tuyên bố người thắng, sự kiện đã thực sự diễn ra hoặc ảnh khách hàng đã được phép dùng. Các bài recap tương lai được chuyển thành lời giới thiệu lịch dự kiến.
- `planned: true` luôn giữ nhãn lịch dự kiến trong thời gian chương trình; ngày đến hạn không được xem là bằng chứng sự kiện đã diễn ra. Nhãn “Đã kết thúc” chỉ cho biết khoảng thời gian trong kế hoạch đã qua.
- Ảnh KH2 chứa combo dây chuyền; ảnh KH4 chứa vòng cổ và lời cảm ơn sự kiện tương lai. Không sử dụng hai artwork này; dùng ảnh móc khóa có sẵn trong project để minh họa.
- Fanpage được dùng làm CTA vì sheet chưa có URL Facebook của từng bài. Không dẫn khách tới các tài liệu nội bộ hoặc tự tạo post URL.
- Sửa `id` trùng của mẫu MK-03 thành `nova-keychain-brown` để React phân biệt đúng card; không đổi mã mẫu, tên, giá hoặc ảnh.
- URL bộ lọc cũ hoặc không hợp lệ sẽ hiển thị tất cả mẫu đang bán.

## Artwork sử dụng

Ảnh gốc được lấy bằng Google Drive connector, chuyển định dạng WebP để giảm dung lượng; giữ nguyên nội dung và tỷ lệ.

| File local | File Drive gốc |
| --- | --- |
| `public/media/posts/giai-ma-thong-diep.webp` | [Artboard 1.png — KH1](https://drive.google.com/file/d/1KEIUeH9T4k8LeVJ5dUuu-SSWY_FmC9Sv/view) |
| `public/media/posts/special-gift-20-10.webp` | [Glossy Pink Floé 20_10 Gift Promo.png — KH3](https://drive.google.com/file/d/1eBwpKq3EXRTIb7WFWiaJejZdXXj1EEAC/view) |

## Chỉnh sửa bài viết về sau

- Sửa tiêu đề, nội dung, ảnh và ngày trong `src/data/posts.js`.
- `startsOn`/`endsOn` dùng định dạng `YYYY-MM-DD`, có hiệu lực trọn ngày theo UTC+7.
- Chỉ đổi `planned` thành `false` sau khi thông tin đã được xác nhận.
- Kiểm tra lại ưu đãi, thời gian và ảnh khi nội dung kế hoạch thay đổi, rồi build/deploy website như các cập nhật source khác.
