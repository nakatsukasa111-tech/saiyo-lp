// ============================================
// NeeDS 採用LP — Script
// ============================================

(function () {
  'use strict';

  // ── Header scroll shadow ──
  var header = document.getElementById('siteHeader');
  var fixedCta = document.getElementById('fixedCta');

  function updateScroll() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    // Show fixed CTA after scrolling past hero
    if (fixedCta) {
      fixedCta.style.transform =
        window.scrollY > window.innerHeight * 0.7
          ? 'translateY(0)'
          : 'translateY(100%)';
    }
  }

  if (fixedCta) {
    fixedCta.style.transform = 'translateY(100%)';
    fixedCta.style.transition = 'transform .3s ease';
  }
  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();

  // ── Mobile nav toggle ──
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  navToggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  });

  // ── Fade-up / slide-up on scroll (IntersectionObserver) ──
  var fadeEls = document.querySelectorAll('.fade-up, .slide-up');

  var fadeIO = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeIO.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  fadeEls.forEach(function (el) { fadeIO.observe(el); });

  // ── Counter animation ──
  var counters = document.querySelectorAll('.counter, [data-count]');

  var countIO = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-count') || el.textContent, 10);
        if (isNaN(target)) return;

        var duration = 1200;
        var start = performance.now();

        function animate(now) {
          var elapsed = now - start;
          var progress = Math.min(elapsed / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(target * eased);
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            el.textContent = target;
          }
        }
        requestAnimationFrame(animate);
        countIO.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach(function (el) { countIO.observe(el); });

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = anchor.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

})();
