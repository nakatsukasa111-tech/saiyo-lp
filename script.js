// ============================================
// Header: add shadow on scroll
// ============================================
const header = document.getElementById('siteHeader');
const updateHeader = () => {
  if (window.scrollY > 10) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// ============================================
// Mobile nav toggle
// ============================================
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});
nav.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

// ============================================
// Fade-in on scroll (IntersectionObserver)
// ============================================
const fadeTargets = document.querySelectorAll(
  '.section-head, .about-media, .about-text, .feature-card, .welcome, .job-card, .voice-card, .entry-form'
);
fadeTargets.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
});
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 60);
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
fadeTargets.forEach((el) => io.observe(el));

// ============================================
// Entry form (client-side only demo)
// ============================================
const form = document.getElementById('entryForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  note.classList.remove('success', 'error');

  const data = new FormData(form);
  const name = (data.get('name') || '').toString().trim();
  const email = (data.get('email') || '').toString().trim();
  const position = (data.get('position') || '').toString();
  const agree = data.get('agree');

  if (!name || !email || !position || !agree) {
    note.textContent = '必須項目が未入力です。ご確認ください。';
    note.classList.add('error');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    note.textContent = 'メールアドレスの形式が正しくありません。';
    note.classList.add('error');
    return;
  }

  note.textContent = 'ご応募ありがとうございます。内容を確認のうえご連絡いたします。';
  note.classList.add('success');
  form.reset();
});
