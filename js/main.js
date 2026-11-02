/**
 * ==============================================================================
 * ROADMAP C++ & RAYLIB - MAIN JAVASCRIPT
 * ==============================================================================
 * Vanilla JS xử lý tương tác:
 * 1. Collapse / Expand bài tập & đáp án (Accordion)
 * 2. Sao chép nhanh mã nguồn (Copy Code Block)
 * 3. Menu điều hướng trên thiết bị di động (Mobile Navigation)
 * 4. Active state link & Smooth scroll
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initCollapseBoxes();
  initCopyCodeButtons();
  initMobileMenu();
});

/**
 * 1. Xử lý Accordion / Collapse hộp đáp án
 */
function initCollapseBoxes() {
  const triggers = document.querySelectorAll('.collapse-trigger');

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', function () {
      const parentBox = this.closest('.collapse-box');
      if (!parentBox) return;

      const content = parentBox.querySelector('.collapse-content');
      if (!content) return;

      const isOpen = parentBox.classList.contains('is-open');

      if (isOpen) {
        // Đang mở -> Thu gọn lại
        content.style.maxHeight = content.scrollHeight + 'px';
        // Force reflow
        void content.offsetHeight;
        content.style.maxHeight = '0px';
        parentBox.classList.remove('is-open');
        this.setAttribute('aria-expanded', 'false');
      } else {
        // Đang đóng -> Mở rộng ra
        parentBox.classList.add('is-open');
        content.style.maxHeight = content.scrollHeight + 'px';
        this.setAttribute('aria-expanded', 'true');

        // Sau khi hoàn thành transition, chuyển về none để nếu kích thước thay đổi linh hoạt
        const onEnd = () => {
          if (parentBox.classList.contains('is-open')) {
            content.style.maxHeight = 'none';
          }
          content.removeEventListener('transitionend', onEnd);
        };
        content.addEventListener('transitionend', onEnd);
      }
    });
  });
}

/**
 * 2. Xử lý nút bấm Sao chép mã nguồn (Copy Code)
 */
function initCopyCodeButtons() {
  const copyButtons = document.querySelectorAll('.code-block__copy');

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async function () {
      const block = this.closest('.code-block');
      if (!block) return;

      const codeElement = block.querySelector('code');
      if (!codeElement) return;

      const textToCopy = codeElement.innerText;

      try {
        await navigator.clipboard.writeText(textToCopy);

        // Hiệu ứng nút khi sao chép thành công
        const originalText = this.innerHTML;
        this.classList.add('is-copied');
        this.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Đã sao chép!</span>
        `;

        setTimeout(() => {
          this.classList.remove('is-copied');
          this.innerHTML = originalText;
        }, 2000);
      } catch (err) {
        console.error('Không thể sao chép văn bản: ', err);
      }
    });
  });
}

/**
 * 3. Xử lý Toggle Menu trên Mobile
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.nav-toggle-btn');
  const navList = document.querySelector('.site-nav__list');

  if (!toggleBtn || !navList) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = navList.classList.toggle('is-mobile-open');
    toggleBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  });

  // Đóng menu khi nhấp vào link
  const navLinks = navList.querySelectorAll('.site-nav__link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('is-mobile-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

