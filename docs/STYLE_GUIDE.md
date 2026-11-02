# STYLE GUIDE — QUY CHUẨN THIẾT KẾ & VIẾT CODE FRONTEND

> **Dự án:** Roadmap Lập trình Game C++ & Raylib (78 buổi)  
> **Áp dụng cho:** Các trang tổng quan (`index.html`), danh sách giai đoạn (`stage/stage-01.html` → `stage/stage-08.html`) và trang chi tiết bài học (`stage/lesson/lesson-XX-YY.html`).

---

## 1. Nguyên tắc thiết kế tổng thể (Design Principles)

1. **Giáo dục & Thực tiễn:** Mọi yếu tố giao diện sinh ra đều phục vụ việc đọc hiểu lý thuyết và thao tác code dễ dàng nhất. Tránh các hiệu ứng hoạt họa màu mè làm xao nhãng việc tư duy thuật toán.
2. **Nhất quán (Consistency):** Cùng một loại thông tin phải dùng cùng một định dạng (Ví dụ: Số thứ tự buổi luôn có định dạng `Buổi 01`, `Buổi 02` thay vì `Buổi 1`, `Buổi 2`).
3. **Phân cấp trực quan (Visual Hierarchy):** Nhìn lướt qua phải phân biệt được ngay đâu là đề bài, đâu là code mẫu và đâu là lời giải/đáp án.

---

## 2. Quy tắc sử dụng Màu Đỏ Primary (`#E53935`)

Màu đỏ là màu nhận diện chủ lực của lộ trình học, tượng trưng cho ngọn lửa đam mê sáng tạo game, nhưng nếu dùng sai cách sẽ gây ức chế mắt.

### 2.1 Quy tắc NÊN (Do)
- Dùng cho dải viền điểm nhấn bên trái của các thẻ card (`border-left: 5px solid #E53935`).
- Dùng cho số thứ tự lớn của giai đoạn/buổi học (`class="stage-number"` hoặc `class="lesson-number"`).
- Dùng cho Badge định danh chính: `BUỔI 01`, `GIAI ĐOẠN 02`.
- Dùng cho nút hành động chính (Primary Button / CTA) để kích thích học viên bắt đầu học hoặc nộp bài.
- Dùng cho trạng thái Active của thanh điều hướng (menu header) hoặc link đang đọc.

### 2.2 Quy tắc KHÔNG NÊN (Don't)
- **Không dùng màu đỏ cho các khối văn bản dài hay đoạn văn thường.**
- **Không dùng màu đỏ làm màu nền của cả section lớn** (ví dụ Hero section hoặc nền trang web).
- **Không phối chữ đỏ trên nền đen hoặc chữ vàng trên nền đỏ** (gây tức mắt và giảm khả năng tiếp cận).
- **Không dùng quá 2 nút primary màu đỏ trên cùng một màn hình hiển thị**.

---

## 3. Quy tắc biên soạn nội dung (Content Writing Guidelines)

### 3.1 Cấu trúc tiêu đề & Định danh
- **Tên Giai đoạn:** Định dạng `GIAI ĐOẠN 0X: [TÊN IN HOA]`.  
  *Ví dụ:* `GIAI ĐOẠN 01: NHẬP MÔN LẬP TRÌNH VÀ C++`
- **Tên Buổi học:** Định dạng `Buổi XX: [Tên chủ đề trọng tâm]`.  
  *Ví dụ:* `Buổi 05: Vòng lặp For & While trong C++`
- **Khoảng buổi:** Sử dụng dấu gạch ngang chuẩn `–` (en-dash), không dùng dấu gạch nối ngắn `-`.  
  *Ví dụ:* `Buổi 01–11 (11 buổi)`, `Buổi 58–68 (11 buổi)`.

### 3.2 Quy chuẩn nội dung một trang buổi học (`lesson-XX-YY.html`)
Mỗi file buổi học bắt buộc bao gồm 4 khối nội dung theo thứ tự cố định:
1. **Header bài học:** Breadcrumb + Badge số buổi + Tiêu đề buổi + Tóm tắt mục tiêu đầu ra (90 phút).
2. **Khối Lý thuyết (Theory):** Khái niệm cốt lõi, bảng tóm tắt cú pháp, lưu ý về bộ nhớ/tư duy game.
3. **Khối Bài tập trên lớp (Classwork):** Đề bài giảng viên hướng dẫn tại lớp + Code mẫu trực quan.
4. **Khối Bài tập về nhà (Homework):** Tách rõ 3 cấp độ:
   - `[Easy]`: Bài tập áp dụng trực tiếp cú pháp.
   - `[Medium]`: Bài tập đòi hỏi kết hợp logic/thuật toán.
   - `[Hard]`: Bài toán nâng cao hoặc mini game console/Raylib.
   *(Mỗi bài tập đều kèm theo hộp ẩn đáp án `collapse` có nút bấm mở xem lời giải).*

---

## 4. Best Practices khi viết HTML

### 4.1 Sử dụng Semantic HTML5
- Sử dụng `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- Các khối ẩn/mở lời giải sử dụng cấu trúc `<div class="collapse-box">` với `<button class="collapse-trigger">` có thuộc tính `aria-expanded="false"`.
- Các khối code bọc trong `<pre><code class="language-cpp">...</code></pre>`.

### 4.2 Escape ký tự HTML trong Code Block
Khi chèn code C++ vào thẻ `<code>`, bắt buộc phải chuyển đổi các ký tự đặc biệt để tránh lỗi render:
- `<` chuyển thành `&lt;` (ví dụ: `#include &lt;iostream&gt;`)
- `>` chuyển thành `&gt;`
- `&` chuyển thành `&amp;`

### 4.3 Tách biệt cấu trúc - phong cách - hành vi
- **HTML:** Chỉ chứa dữ liệu ngữ nghĩa, không viết style inline (`style="..."`).
- **CSS:** Toàn bộ gom về `variables.css` và `style.css`.
- **JS:** Toàn bộ tương tác gom về `main.js`, không viết mã inline `onclick="..."`. Sử dụng event delegation hoặc class listener.

---

## 5. Quy chuẩn đặt tên Class CSS (BEM nhẹ)

Dự án áp dụng phương pháp đặt tên theo tư duy **BEM (Block - Element - Modifier)** tinh gọn, dễ đọc và dễ bảo trì:

```
.block {}
.block__element {}
.block--modifier {}
```

### 5.1 Các Block cốt lõi
- `.site-header` | `.site-nav` | `.site-footer`
- `.hero` | `.hero__title` | `.hero__stats`
- `.stage-card` | `.stage-card__number` | `.stage-card__content` | `.stage-card__title`
- `.lesson-card` | `.lesson-card__header` | `.lesson-card__body` | `.lesson-card__meta`
- `.badge` | `.badge--primary` | `.badge--easy` | `.badge--medium` | `.badge--hard`
- `.btn` | `.btn--primary` | `.btn--secondary` | `.btn--sm`
- `.code-block` | `.code-block__header` | `.code-block__copy` | `.code-block__content`
- `.collapse-box` | `.collapse-box__trigger` | `.collapse-box__content` | `.collapse-box--open`
- `.note-box` | `.note-box--tip` | `.note-box--warning`

### 5.2 Utility Classes thông dụng
- Căn lề: `.container`, `.flex`, `.items-center`, `.justify-between`, `.gap-sm`, `.gap-md`
- Ẩn hiện: `.sr-only` (chỉ cho screen reader), `.is-hidden`
- Văn bản: `.text-center`, `.text-muted`, `.text-red`

---

## 6. Tiêu chuẩn Khả năng tiếp cận cơ bản (Accessibility - A11y)

1. **Tương phản màu sắc (Color Contrast):**
   - Đảm bảo tỷ lệ tương phản tối thiểu `4.5:1` cho chữ thường trên nền trắng (Text `#1A1A1A` đạt `16.1:1`, Text Secondary `#555555` đạt `7.4:1`).
   - Nút đỏ `#E53935` với chữ trắng `#FFFFFF` đạt tỷ lệ `4.53:1` (chuẩn WCAG AA).
2. **Điều hướng bằng bàn phím (Keyboard Navigation):**
   - Mọi nút bấm và trigger collapse đều sử dụng thẻ `<button>` chuẩn, có thể nhấn `Tab` để di chuyển và `Enter`/`Space` để kích hoạt.
   - Thẻ hiển thị rõ viền outline khi focus.
3. **Screen Reader Support:**
   - Các nút icon hoặc nút copy đều có `aria-label` mô tả rõ hành động (ví dụ: `aria-label="Sao chép đoạn mã C++"`).
   - Thẻ collapse có `aria-expanded="false"` chuyển sang `"true"` khi mở ra.

---
*Tài liệu này là cẩm nang hướng dẫn cho bất kỳ ai tham gia soạn thảo nội dung các buổi học trong lộ trình.*

