'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Global scroll-reveal. Tags eligible elements with [data-reveal], staggers
// siblings inside the same grid/row, then reveals them as they enter view.
export default function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('anim-ready');

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Auto-tag cards that aren't already explicitly marked.
    document.querySelectorAll('.card:not([data-reveal])').forEach((el) => {
      el.setAttribute('data-reveal', '');
    });

    const targets = Array.from(document.querySelectorAll('[data-reveal]'));

    if (reduce || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    // Stagger elements that share a parent (e.g. cards in a grid).
    const seen = new Map();
    targets.forEach((el) => {
      if (el.style.getPropertyValue('--reveal-delay')) return;
      const parent = el.parentElement;
      const idx = seen.get(parent) || 0;
      seen.set(parent, idx + 1);
      const delay = Math.min(idx, 6) * 80;
      if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);
    });

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Reveal immediately anything already on screen at load.
      if (rect.top < window.innerHeight * 0.92) {
        el.classList.add('is-visible');
      } else {
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
