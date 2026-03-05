'use client';
import { useEffect } from 'react';

/* ── Reusable page-level animations (re-trigger on route change) ── */
export function usePageAnimations(deps = []) {
  useEffect(() => {
    /* Scroll Reveals */
    const revealEls = document.querySelectorAll('.reveal, .stagger, .text-mask');
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => revealObs.observe(el));

    /* Split Characters */
    document.querySelectorAll('.split-chars:not([data-split])').forEach((el) => {
      el.setAttribute('data-split', '1');
      const text = el.textContent;
      el.innerHTML = text.split('').map((c, i) => c === ' ' ? ' ' : `<span class="char" style="transition-delay:${i * 0.03}s">${c}</span>`).join('');
      const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } }, { threshold: 0.2 });
      obs.observe(el);
    });

    /* Fade Words */
    document.querySelectorAll('.fade-words:not([data-fw])').forEach((el) => {
      el.setAttribute('data-fw', '1');
      const words = el.textContent.split(' ');
      el.innerHTML = words.map((w, i) => `<span class="word" style="transition-delay:${i * 0.06}s">${w}</span>`).join(' ');
      const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } }, { threshold: 0.2 });
      obs.observe(el);
    });

    /* Counters */
    document.querySelectorAll('.counter:not([data-counted])').forEach((el) => {
      el.setAttribute('data-counted', '1');
      const final = el.textContent;
      const num = parseFloat(final.replace(/[^0-9.]/g, ''));
      const suffix = final.replace(/[0-9.]/g, '');
      const isDecimal = final.includes('.');
      const obs = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        let start = 0;
        const duration = 2000;
        const startTime = performance.now();
        const step = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          const current = eased * num;
          el.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }, { threshold: 0.5 });
      obs.observe(el);
    });

    /* Parallax */
    const parallaxEls = document.querySelectorAll('.parallax-target');
    const handleParallax = () => {
      parallaxEls.forEach((el) => {
        const rect = el.parentElement.getBoundingClientRect();
        const speed = parseFloat(el.dataset.speed || 0.1);
        const y = (rect.top - window.innerHeight / 2) * speed;
        el.style.transform = `translateY(${y}px)`;
      });
    };
    window.addEventListener('scroll', handleParallax, { passive: true });
    handleParallax();

    return () => {
      revealObs.disconnect();
      window.removeEventListener('scroll', handleParallax);
    };
  }, deps);
}

/* ── Global animations (cursor, scroll bar) — called once ── */
export function useAnimations() {
  useEffect(() => {
    /* Custom Cursor */
    const cursor = document.getElementById('cursor');
    if (cursor && window.innerWidth > 768) {
      let mx = 0, my = 0, cx = 0, cy = 0;
      const onMove = (e) => { mx = e.clientX; my = e.clientY; };
      const loop = () => {
        cx += (mx - cx) * 0.35;
        cy += (my - cy) * 0.35;
        cursor.style.transform = `translate(${cx}px, ${cy}px)`;
        requestAnimationFrame(loop);
      };
      window.addEventListener('mousemove', onMove);
      requestAnimationFrame(loop);
      return () => window.removeEventListener('mousemove', onMove);
    }

    /* Scroll Progress */
    const bar = document.getElementById('scroll-progress');
    if (bar) {
      const onScroll = () => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = h > 0 ? `${(window.scrollY / h) * 100}%` : '0%';
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, []);
}
