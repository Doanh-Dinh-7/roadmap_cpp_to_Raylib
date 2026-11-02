# BỘ MẪU COMPONENT HTML (COMPONENT EXAMPLES)

> **Dự án:** Roadmap Lập trình Game C++ & Raylib (78 buổi)  
> **Mục đích:** Cung cấp các đoạn code HTML chuẩn để copy-paste trực tiếp khi xây dựng `index.html`, `stage-01.html` → `stage-08.html` và `lesson-XX-YY.html`.

---

## 1. Site Header (Thanh điều hướng chung)

```html
<header class="site-header">
  <div class="container site-header__inner">
    <a href="index.html" class="brand">
      <img src="assets/images/logo.png" alt="InnoMind Logo" class="brand__logo-img">
      <div>
        <div class="brand__text">InnoMind • Game Dev</div>
        <div class="brand__sub">C++ &amp; Raylib • 78 Buổi</div>
      </div>
    </a>

    <nav class="site-nav" aria-label="Điều hướng chính">
      <ul class="site-nav__list">
        <li><a href="index.html" class="site-nav__link is-active">Trang chủ</a></li>
        <li><a href="stage-01.html" class="site-nav__link">Giai đoạn</a></li>
        <li><a href="#pedagogy" class="site-nav__link">Phương pháp</a></li>
        <li><a href="https://www.raylib.com/" target="_blank" rel="noopener" class="site-nav__link">Raylib.com ↗</a></li>
      </ul>
      <button class="nav-toggle-btn" aria-label="Mở menu điều hướng" aria-expanded="false">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </nav>
  </div>
</header>
```

---

## 2. Hero Section (Trang chủ `index.html`)

```html
<section class="hero">
  <div class="container hero__content">
    <div class="hero__badge">Lộ trình đào tạo chuẩn • 90 Phút / Buổi</div>
    <h1 class="hero__title">
      Học Lập Trình Game C++ &amp; Raylib <br>
      <span class="hero__title-accent">Từ Zero Đến Sản Phẩm Game Cá Nhân</span>
    </h1>
    <p class="hero__description">
      Chương trình bài bản 78 buổi đi từ tư duy cú pháp C++, Cấu trúc dữ liệu &amp; Thuật toán, 
      Lập trình hướng đối tượng (OOP) đến phát triển Game 2D hoàn chỉnh với thư viện Raylib.
    </p>

    <div class="hero__actions">
      <a href="#stages" class="btn btn--primary">Khám phá 8 Giai đoạn ↓</a>
      <a href="lesson-01-01.html" class="btn btn--secondary">Bắt đầu Buổi 01 →</a>
    </div>

    <!-- Thống kê lộ trình -->
    <div class="hero__stats">
      <div class="stat-item">
        <div class="stat-item__number">08</div>
        <div class="stat-item__label">Giai đoạn học</div>
      </div>
      <div class="stat-item">
        <div class="stat-item__number">78</div>
        <div class="stat-item__label">Buổi chuyên sâu</div>
      </div>
      <div class="stat-item">
        <div class="stat-item__number">90'</div>
        <div class="stat-item__label">Thời lượng / buổi</div>
      </div>
      <div class="stat-item">
        <div class="stat-item__number">01</div>
        <div class="stat-item__label">Đồ án Game cá nhân</div>
      </div>
    </div>
  </div>
</section>
```

---

## 3. Stage Card (Thẻ giai đoạn hiển thị trên `index.html` - Mỗi card 1 dòng)

```html
<article class="stage-card">
  <div class="stage-card__aside">
    <div class="stage-card__number">01</div>
    <span class="badge badge--primary">11 Buổi</span>
    <span class="stage-card__range">Buổi 01–11</span>
  </div>
  <div class="stage-card__body">
    <h3 class="stage-card__title">GIAI ĐOẠN 01 — NHẬP MÔN LẬP TRÌNH VÀ C++</h3>
    <p class="stage-card__desc">
      Làm quen tư duy máy tính, cài đặt IDE, mô hình IPO, biến, các kiểu dữ liệu, hằng số, ép kiểu, 
      toán tử số học, logic và cấu trúc rẽ nhánh <code>if-else</code>, <code>switch/case</code>.
    </p>
    <div class="stage-card__focus">
      <strong>Trọng tâm:</strong> Tính chu vi/diện tích, kiểm tra chẵn/lẻ, Mini Project: Guess Number Game console.
    </div>
  </div>
  <div class="stage-card__action">
    <a href="stage-01.html" class="btn btn--secondary">Xem danh sách buổi →</a>
  </div>
</article>
```

---

## 4. Lesson Card (Thẻ buổi học hiển thị trên `stage-01.html` → `stage-08.html`)

```html
<article class="lesson-card">
  <div class="lesson-card__number-box">
    <span class="lesson-card__number-label">Buổi</span>
    <span class="lesson-card__number">05</span>
  </div>
  <div class="lesson-card__body">
    <h3 class="lesson-card__title">Vòng Lặp For &amp; While — Xử Lý Logic Lặp Trong Game</h3>
    <p>Nắm vững cơ chế lặp điều kiện, vòng lặp vô hạn an toàn, ứng dụng làm Game Loop đơn giản trên console.</p>
    <div class="lesson-card__tags">
      <span class="badge badge--tag">90 phút</span>
      <span class="badge badge--easy">Easy: Tổng dãy số</span>
      <span class="badge badge--hard">Hard: Guess Number Game</span>
    </div>
  </div>
  <div class="lesson-card__action">
    <a href="lesson-01-05.html" class="btn btn--primary btn--sm">Vào bài học →</a>
  </div>
</article>
```

---

## 5. Breadcrumb (Đường dẫn phân cấp trên `lesson-XX-YY.html`)

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <a href="index.html" class="breadcrumb__link">Trang chủ</a>
  <span class="breadcrumb__separator">/</span>
  <a href="stage-01.html" class="breadcrumb__link">Giai đoạn 01</a>
  <span class="breadcrumb__separator">/</span>
  <span class="breadcrumb__current">Buổi 05: Vòng lặp For &amp; While</span>
</nav>
```

---

## 6. Code Block (Kèm nút Sao chép & Syntax cơ bản)

```html
<div class="code-block">
  <div class="code-block__header">
    <span class="code-block__lang">main.cpp</span>
    <button class="code-block__copy" aria-label="Sao chép đoạn mã">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      <span>Sao chép</span>
    </button>
  </div>
  <pre><code><span class="com">// Ví dụ khởi tạo cửa sổ Raylib cơ bản</span>
<span class="kw">#include</span> <span class="str">"raylib.h"</span>

<span class="type">int</span> <span class="fn">main</span>() {
    <span class="kw">const</span> <span class="type">int</span> screenWidth = <span class="num">800</span>;
    <span class="kw">const</span> <span class="type">int</span> screenHeight = <span class="num">450</span>;

    <span class="fn">InitWindow</span>(screenWidth, screenHeight, <span class="str">"Raylib Game Window"</span>);
    <span class="fn">SetTargetFPS</span>(<span class="num">60</span>);

    <span class="kw">while</span> (!<span class="fn">WindowShouldClose</span>()) {
        <span class="fn">BeginDrawing</span>();
        <span class="fn">ClearBackground</span>(RAYWHITE);
        <span class="fn">DrawText</span>(<span class="str">"Hello Raylib C++!"</span>, <span class="num">190</span>, <span class="num">200</span>, <span class="num">20</span>, LIGHTGRAY);
        <span class="fn">EndDrawing</span>();
    }

    <span class="fn">CloseWindow</span>();
    <span class="kw">return</span> <span class="num">0</span>;
}</code></pre>
</div>
```

---

## 7. Collapse Box (Hộp ẩn/mở Đáp án & Lời giải)

```html
<div class="collapse-box">
  <button class="collapse-trigger" aria-expanded="false">
    <span>💡 Xem gợi ý &amp; Lời giải chi tiết</span>
    <span class="collapse-icon">▶</span>
  </button>
  <div class="collapse-content">
    <div class="collapse-inner">
      <p><strong>Phân tích thuật toán:</strong> Sử dụng vòng lặp kiểm tra từ 2 đến căn bậc hai của số N.</p>
      
      <!-- Khối code giải bên trong -->
      <div class="code-block">
        <div class="code-block__header">
          <span class="code-block__lang">solution.cpp</span>
          <button class="code-block__copy"><span>Sao chép</span></button>
        </div>
        <pre><code><span class="kw">bool</span> <span class="fn">isPrime</span>(<span class="type">int</span> n) {
    <span class="kw">if</span> (n &lt;= <span class="num">1</span>) <span class="kw">return</span> <span class="kw">false</span>;
    <span class="kw">for</span> (<span class="type">int</span> i = <span class="num">2</span>; i * i &lt;= n; ++i) {
        <span class="kw">if</span> (n % i == <span class="num">0</span>) <span class="kw">return</span> <span class="kw">false</span>;
    }
    <span class="kw">return</span> <span class="kw">true</span>;
}</code></pre>
      </div>
    </div>
  </div>
</div>
```

---

## 8. Note Box / Mẹo làm Game

```html
<!-- Mẹo tư duy game -->
<div class="note-box note-box--tip">
  <strong>🎮 Mẹo tư duy Game:</strong> Luôn phân tách rõ ràng giữa <code>Update()</code> (tính toán vị trí, kiểm tra va chạm) và <code>Draw()</code> (vẽ các pixel ra màn hình). Không bao giờ đặt logic tính toán điểm số hay di chuyển bên trong khối lệnh vẽ.
</div>

<!-- Lưu ý C++ -->
<div class="note-box note-box--warning">
  <strong>⚠️ Cảnh báo con trỏ &amp; Bộ nhớ:</strong> Khi cấp phát động bằng toán tử <code>new</code>, luôn đảm bảo gọi <code>delete</code> khi kết thúc game hoặc giải phóng đối tượng để tránh rò rỉ bộ nhớ (Memory Leak).
</div>
```

---

## 9. Cấu trúc một Bài tập hoàn chỉnh (Exercise Item)

```html
<div class="exercise-item">
  <div class="exercise-item__header">
    <h4 class="exercise-item__title">Bài tập 02: Bắn bóng phản xạ (Bouncing Ball)</h4>
    <span class="badge badge--medium">Medium</span>
  </div>
  <p>
    Viết chương trình tạo một quả bóng hình tròn chuyển động trên màn hình 800x450. 
    Khi quả bóng chạm vào một trong 4 cạnh viền màn hình, bóng phải tự đổi hướng vận tốc (phản xạ lại).
  </p>

  <!-- Hộp đáp án ẩn -->
  <div class="collapse-box">
    <button class="collapse-trigger" aria-expanded="false">
      <span>👉 Xem mã nguồn giải mẫu</span>
      <span class="collapse-icon">▶</span>
    </button>
    <div class="collapse-content">
      <div class="collapse-inner">
        <p><strong>Gợi ý:</strong> Đảo ngược dấu của vận tốc <code>speedX = -speedX</code> khi <code>x + radius &gt;= screenWidth</code> hoặc <code>x - radius &lt;= 0</code>.</p>
      </div>
    </div>
  </div>
</div>
```

---

## 10. Site Footer (Kèm thông tin liên hệ InnoMind)

```html
<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-brand">
        <div class="brand" style="margin-bottom: var(--space-3)">
          <img src="assets/images/logo.png" alt="InnoMind Logo" class="brand__logo-img" />
          <div>
            <div class="brand__text">InnoMind Academy</div>
            <div class="brand__sub">NextGen Skills for Future Innovators</div>
          </div>
        </div>
        <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); max-width: 400px; margin: 0;">
          Chương trình đào tạo tư duy lập trình và phát triển Game C++ &amp; Raylib thực chiến 78 buổi.
        </p>
      </div>

      <div class="footer-contact">
        <h4>Liên hệ</h4>
        <div class="contact-info-compact">
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>136 Nguyễn Mậu Tài, Hòa Xuân, Cẩm Lệ, Đà Nẵng</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <span>090 198 05 69</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>innomindskills@gmail.com</span>
          </div>
          <div class="contact-item">
            <i class="fab fa-facebook"></i>
            <a href="https://www.facebook.com/hocvienkynangthehemoiinnomind" target="_blank" rel="noopener">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="site-footer__text">
        © 2026 <strong>InnoMind</strong> • Roadmap Lập trình Game C++ &amp; Raylib.
      </div>
      <div class="site-footer__links">
        <a href="#stages" class="site-nav__link">Về đầu trang ↑</a>
      </div>
    </div>
  </div>
</footer>
```

