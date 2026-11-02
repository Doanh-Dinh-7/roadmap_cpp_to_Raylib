# DESIGN SYSTEM — ROADMAP LẬP TRÌNH GAME C++ & RAYLIB

> **Phiên bản:** 1.0.0  
> **Phong cách chủ đạo:** Modern Educational Tech — Minimalist, Clean, High Contrast  
> **Cảm hứng thiết kế:** [Code Up Your Brain](https://rudolphtran.github.io/code-up-your-brain)  
> **Ngôn ngữ triển khai:** Pure HTML5 / CSS3 / Vanilla JavaScript (Không framework ngoài)

---

## 1. Tổng quan Design System

Hệ thống tài liệu và giao diện web **Roadmap Lập trình Game C++ & Raylib (78 buổi)** được thiết kế nhằm tối ưu hóa trải nghiệm đọc, thực hành code và tra cứu bài tập của học viên.

### 1.1 Triết lý thiết kế (Design Pillars)
1. **Content-First & Distraction-Free:** Nội dung học tập, ví dụ code và bài tập là trung tâm. Giao diện sáng sủa, nền trắng chủ đạo `#FFFFFF` kết hợp nền xám nhạt `#F8F9FA` tạo chiều sâu phân tách các section.
2. **Intentional Accent (Điểm nhấn có chủ đích):** Màu đỏ chủ đạo (`#E53935` / `#D32F2F`) chỉ được dùng làm điểm nhấn nhận diện (dải viền card, số thứ tự, badge quan trọng, nút hành động chính, active state). Tuyệt đối không lạm dụng nền đỏ diện rộng gây mỏi mắt.
3. **Structured Hierarchy (Phân cấp thị giác rõ ràng):** 
   - Số thứ tự buổi/giai đoạn to, đậm (bold font) tạo nhịp điệu thị giác.
   - Phân cấp thẻ Card: Border-left đỏ 4–5px kết hợp bo góc 14px và shadow mềm mại.
   - Phân tách mạch lạc giữa: **Lý thuyết** $\rightarrow$ **Ví dụ** $\rightarrow$ **Bài tập trên lớp** $\rightarrow$ **Bài tập về nhà**.
4. **Developer-Friendly Code Display:** Khung code nền tối (`#1E1E1E`), font monospaced chất lượng cao (`JetBrains Mono`), có nút copy nhanh và cơ chế ẩn/mở đáp án (accordion collapse) để người học chủ động suy nghĩ trước khi xem lời giải.

---

## 2. Bảng màu (Color Palette)

### 2.1 Bảng màu chính (Core Palette)

| Tên màu | Mã Hex | RGB | Vai trò & Mục đích sử dụng |
| :--- | :--- | :--- | :--- |
| **Primary Red** | `#E53935` | `229, 57, 53` | Màu chủ đạo: Điểm nhấn, viền card, nút CTA chính, active link |
| **Primary Dark** | `#C62828` | `198, 40, 40` | Hover state của nút primary, viền card khi focus |
| **Primary Light** | `#FFEBEE` | `255, 235, 238` | Nền tag nhẹ, highlight badge phụ, hover background menu |
| **Text Main** | `#1A1A1A` | `26, 26, 26` | Màu chữ chính cho Heading và văn bản quan trọng (độ tương phản cao) |
| **Text Secondary** | `#555555` | `85, 85, 85` | Đoạn mô tả, thông tin phụ trợ, meta data, ngày giờ |
| **Text Muted** | `#888888` | `136, 136, 136` | Chú thích nhỏ, breadcrumb inactive, placeholder |
| **Page Background** | `#F8F9FA` | `248, 249, 250` | Nền tổng thể trang web (giảm chói so với trắng thuần) |
| **Surface / Card** | `#FFFFFF` | `255, 255, 255` | Nền các khối Card nội dung, container, modal, header |
| **Border Soft** | `#E9ECEF` | `233, 236, 239` | Đường viền bảng, viền thẻ card, đường gạch ngang chia cách |
| **Border Medium** | `#DEE2E6` | `222, 226, 230` | Viền input, viền component tương tác |

### 2.2 Bảng màu Code & Khối kỹ thuật (Code Theme)

| Tên màu | Mã Hex | Mục đích sử dụng |
| :--- | :--- | :--- |
| **Code Editor BG** | `#1E1E1E` | Nền toàn khối code block |
| **Code Header BG** | `#2D2D2D` | Thanh tiêu đề khối code (chứa tên file/ngôn ngữ & nút Copy) |
| **Code Text** | `#D4D4D4` | Màu chữ code mặc định |
| **Code Keyword** | `#569CD6` | Từ khóa (`int`, `void`, `class`, `public`, `return`) |
| **Code Type** | `#4EC9B0` | Kiểu dữ liệu / struct / class (`Vector2`, `Rectangle`, `Texture2D`) |
| **Code String** | `#CE9178` | Chuỗi ký tự (`"Hello World"`) |
| **Code Comment** | `#6A9955` | Ghi chú trong code (`// ...`) |
| **Code Number** | `#B5CEA8` | Hằng số, giá trị số (`10`, `0.5f`) |

### 2.3 Bảng màu Ngữ cảnh & Điểm nhấn đặc biệt (Semantic & Accent)

| Tên vai trò | Mã Hex | Ứng dụng |
| :--- | :--- | :--- |
| **Quote / Accent Tím nhạt** | `#F3E8FF` | Khối "Mẹo làm game" / "Lưu ý tư duy" / quote triết lý |
| **Quote Border** | `#A855F7` | Viền bên trái của Quote block |
| **Level Easy (Xanh ngọc)** | `#0D9488` / `#CCFBF1` | Badge phân loại bài tập Easy |
| **Level Medium (Vàng cam)** | `#D97706` / `#FEF3C7` | Badge phân loại bài tập Medium |
| **Level Hard (Đỏ Ruby)** | `#E11D48` / `#FFE4E6` | Badge phân loại bài tập Hard / Mini Project |
| **Success (Xanh lá)** | `#16A34A` / `#DCFCE7` | Nút copy thành công, trạng thái hoàn thành buổi |

---

## 3. Typography (Hệ thống chữ)

### 3.1 Phông chữ (Font Family)
- **Primary Body & Headings:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`
  - Ưu điểm: Hình học cân đối, độ x-height cao, dễ đọc trên cả màn hình di động lẫn desktop độ phân giải cao.
- **Monospace (Code blocks & Inline code):** `'JetBrains Mono', 'Fira Code', Menlo, Monaco, Consolas, 'Courier New', monospace`
  - Hỗ trợ ký tự lập trình rõ nét, phân biệt tốt giữa số `0` và chữ `O`, `l` và `1`.

### 3.2 Tỉ lệ & Cỡ chữ (Type Scale)

| Cấp bậc | Desktop Size | Mobile Size | Weight | Line Height | Ký tự hoa/thường |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / Hero H1** | 48px (`3rem`) | 32px (`2rem`) | 800 (Extra Bold) | 1.15 | Chữ hoa tiêu đề |
| **Section Title H2** | 32px (`2rem`) | 24px (`1.5rem`) | 700 (Bold) | 1.25 | Chữ đầu hoa |
| **Card / Subsection H3** | 22px (`1.375rem`) | 19px (`1.1875rem`) | 600 (Semi Bold) | 1.35 | Chữ đầu hoa |
| **Minor Title H4** | 18px (`1.125rem`) | 17px (`1.0625rem`) | 600 (Semi Bold) | 1.4 | Chữ đầu hoa |
| **Body Large** | 18px (`1.125rem`) | 16px (`1rem`) | 400 (Regular) | 1.65 | Sentence case |
| **Body Regular** | 16px (`1rem`) | 15px (`0.9375rem`) | 400 (Regular) | 1.65 | Sentence case |
| **Body Small / Meta** | 14px (`0.875rem`) | 13px (`0.8125rem`) | 400 / 500 | 1.5 | Sentence case |
| **Number Display (Số buổi)** | 40px (`2.5rem`) | 28px (`1.75rem`) | 800 (Extra Bold) | 1.0 | Chữ số |
| **Badge / Tag** | 12px (`0.75rem`) | 11px (`0.6875rem`) | 600 / 700 | 1.0 | UPPERCASE |

---

## 4. Spacing, Sizing & Layout Rules

### 4.1 Thang đo Spacing (8-Point Grid System)
- `space-1`: `4px` (0.25rem) — Khoảng cách icon nhỏ
- `space-2`: `8px` (0.5rem) — Padding tag nhỏ, gap inline
- `space-3`: `12px` (0.75rem) — Padding button vừa, gap nhỏ
- `space-4`: `16px` (1rem) — Padding thẻ card con, gap tiêu chuẩn
- `space-5`: `20px` (1.25rem) — Margin giữa các đoạn văn, gap giữa card
- `space-6`: `24px` (1.5rem) — Padding trong của thẻ card chính
- `space-8`: `32px` (2rem) — Khoảng cách giữa các bài tập
- `space-10`: `40px` (2.5rem) — Khoảng cách giữa các khối lớn
- `space-16`: `64px` (4rem) — Padding section trên tablet/desktop
- `space-20`: `80px` (5rem) — Padding Hero section desktop

### 4.2 Cấu trúc lưới & Container
- **Container Max-Width:** `1180px` (Đảm bảo độ dài dòng văn bản tối ưu, không tràn mắt người đọc).
- **Container Padding:**
  - Desktop: `24px`
  - Mobile: `16px`
- **Card Border Radius:** `14px` (Góc bo mềm vừa phải, hiện đại).
- **Badge Border Radius:** `999px` (Pill-shaped bo tròn hoàn toàn).
- **Button Border Radius:** `8px` hoặc `24px` (tùy ngữ cảnh CTA chính hay phụ).

### 4.3 Shadow & Elevation
- **Elevation 1 (Card phẳng):** `0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)`
- **Elevation 2 (Hover Card):** `0 10px 25px rgba(0, 0, 0, 0.08), 0 4px 6px rgba(0, 0, 0, 0.03)`
- **Elevation 3 (Sticky Header & Modal):** `0 4px 20px rgba(0, 0, 0, 0.06)`

---

## 5. Danh mục thành phần (Component Catalog)

### 5.1 Site Header / Navigation Bar
- Vị trí: Sticky top (`position: sticky; top: 0; z-index: 100`).
- Nền: `#FFFFFF` bán trong suốt (`rgba(255, 255, 255, 0.95)` có `backdrop-filter: blur(8px)`).
- Chứa: Logo/Tên dự án + Badge đỏ "78 Buổi" + Menu liên kết (Trang chủ, 8 Giai đoạn, Tài liệu, Raylib Cheat Sheet).

### 5.2 Hero Section
- Nền trắng/xám nhẹ phối dải gradient mờ (`radial-gradient` đỏ nhạt ở góc).
- Tiêu đề H1 lớn, subtitle giới thiệu mục tiêu học C++ & Raylib.
- Quick Stats: 8 Giai đoạn, 78 Buổi, 90 Phút/buổi, 1 Đồ án Game hoàn chỉnh.
- Nút CTA bắt đầu học (chuyển hướng xuống danh sách giai đoạn hoặc buổi 1).

### 5.3 Stage Card (Thẻ Giai đoạn — Stage 01 $\rightarrow$ 08)
- Nền trắng, bo góc 14px, viền trái `border-left: 5px solid var(--color-primary)`.
- Bên trái: Số thứ tự to bản (ví dụ: `01`, `02`) màu đỏ, font 800.
- Nội dung: Tên giai đoạn, khoảng buổi (`Buổi 01–11`), số buổi, tóm tắt kiến thức và danh sách bài tập vận dụng chính.
- Nút "Xem danh sách buổi $\rightarrow$".
- Hiệu ứng: Khi hover, thẻ nhấc nhẹ lên (`transform: translateY(-4px)`) và shadow đậm hơn.

### 5.4 Lesson Card (Thẻ Buổi học trong danh mục)
- Nền trắng, viền nhẹ `#E9ECEF`, viền trái màu đỏ thanh lịch.
- Header thẻ: Badge đỏ `BUỔI XX`, thời lượng `90 phút`, tag trạng thái / phân loại.
- Title: Tên bài học rõ ràng.
- Tóm tắt: 2-3 gạch đầu dòng về lý thuyết và bài thực hành chính.
- Footer thẻ: Nút liên kết tới trang chi tiết `stage/lesson/lesson-XX-YY.html`.

### 5.5 Breadcrumb
- Đường dẫn điều hướng phân tầng: `Trang chủ / Giai đoạn 01 / Buổi 05: Vòng lặp For`.
- Giúp người học luôn biết mình đang ở đâu trong lộ trình 78 buổi.

### 5.6 Theory Section & Note Box
- Trình bày kiến thức ngắn gọn, trực diện, có minh họa bằng code snippet.
- **Tip / Note Box:** Nền tím nhạt `#F3E8FF`, viền trái tím đậm `#9333EA`, icon bóng đèn/bút viết cho các mẹo tư duy logic hoặc quy chuẩn viết code C++.

### 5.7 Practice / Exercise Section
- Mỗi buổi chia làm:
  1. **Bài tập tại lớp (Classwork):** Giảng viên cùng học viên code trực tiếp.
  2. **Bài tập về nhà (Homework):** Tự luyện tập từ Easy $\rightarrow$ Medium $\rightarrow$ Hard.
- Mỗi bài có tiêu đề, mô tả đề bài, input/output mẫu và hộp ẩn đáp án.

### 5.8 Collapse Answer (Hộp ẩn/mở Lời giải & Đáp án)
- **Mặc định:** Thu gọn (`collapsed`), chỉ hiện tiêu đề "👉 Xem gợi ý & Lời giải mẫu".
- Có icon mũi tên xoay 90 độ mượt mà khi mở rộng.
- Khi người dùng click, phần code giải và giải thích logic trượt mở ra (`transition: all 0.3s ease`).
- Hạn chế người học nhìn thấy đáp án ngay lập tức.

### 5.9 Code Block & Syntax Highlighter
- Khung màu tối `#1E1E1E`, bo góc 10px.
- **Header:** Hiển thị ngôn ngữ (`main.cpp`, `player.h`) và nút bấm `Sao chép mã` (Copy).
- Nút copy tự đổi thành `✓ Đã chép!` trong 2 giây khi nhấp chuột.
- Hỗ trợ cuộn ngang (`overflow-x: auto`) mượt mà trên mobile.

### 5.10 Badges & Tags
- **Stage Badge:** Nền đỏ đậm, chữ trắng, in hoa (`GIAI ĐOẠN 01`).
- **Lesson Badge:** Nền đỏ viền mềm (`BUỔI 08`).
- **Difficulty Badges:**
  - Easy: `#0D9488` trên nền `#CCFBF1`
  - Medium: `#D97706` trên nền `#FEF3C7`
  - Hard: `#E11D48` trên nền `#FFE4E6`

### 5.11 Buttons
- **Primary Button:** Nền `#E53935`, chữ trắng, không viền, hover sáng màu hoặc tối nhẹ `#C62828`, shadow nhỏ.
- **Secondary Button:** Nền trắng/trong suốt, viền `1.5px solid #E53935`, chữ `#E53935`.
- **Text Button / Link Button:** Không viền, có mũi tên trượt nhẹ khi hover (`→`).

### 5.12 Footer
- Nền trắng với border-top `#E9ECEF`.
- Bản quyền, link nhanh tới 8 giai đoạn, link GitHub mã nguồn và liên hệ hỗ trợ.

---

## 6. Nguyên tắc Chuyển động & Tương tác (Motion & Interaction)

1. **Thời gian chuyển động:**
   - Siêu nhanh (Icon, button hover): `150ms – 200ms ease`
   - Vừa phải (Collapse expand, dropdown menu): `250ms – 300ms cubic-bezier(0.4, 0, 0.2, 1)`
   - Chuyển trang/scroll: `smooth`
2. **Hover States:** Mọi thành phần tương tác (Card, Link, Button, Accordion) bắt buộc phải có hiệu ứng hover rõ rệt (đổi màu, nhấc bóng, dịch chuyển icon).
3. **Focus States:** Đối với truy cập bàn phím (Accessibility), hiển thị vòng viền nét đôi rõ nét `outline: 2px solid #E53935; outline-offset: 2px`.

---

## 7. Responsive Breakpoints

Áp dụng chiến lược **Mobile-First**:

| Tên Breakpoint | Kích thước màn hình | Mục tiêu thiết bị | Điều chỉnh bố cục |
| :--- | :--- | :--- | :--- |
| **Mobile (Mặc định)** | `< 768px` | Smartphone dọc | Cột đơn (1 column), Hero căn giữa, menu hamburger nếu cần, padding 16px |
| **Tablet** | `768px – 1023px` | iPad, tablet | Lưới 2 cột cho danh sách buổi, thanh điều hướng ngang tinh gọn |
| **Desktop** | `≥ 1024px` | Laptop, màn hình ngoài | Lưới 2–3 cột cho Card, container 1180px, padding section 60–80px |
| **Large Desktop** | `≥ 1280px` | Màn hình lớn | Tối ưu khoảng trắng, sidebar điều hướng cố định cho trang bài học |

---
*Tài liệu này là quy chuẩn thiết kế duy nhất cho toàn bộ giao diện HTML/CSS/JS của dự án.*

