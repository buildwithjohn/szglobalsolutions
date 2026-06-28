'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Global scroll-reveal. Tags eligible elements with [data-reveal], staggers
// siblings inside the same grid/row, then reveals them as they enter view.
// Re-scans on mount, on animation frames, on a short timeout and on DOM
// mutations so it also catches content from client components that mount after
// this effect first runs.
export default function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('anim-ready');

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const supportsIO = 'IntersectionObserver' in window;
    const tracked = new WeakSet();

    const reveal = (el) => el.classList.add('is-visible');

    const io = supportsIO
      ? new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                reveal(entry.target);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
        )
      : null;

    const scan = () => {
      // Auto-tag cards that aren't explicitly marked.
      document
        .querySelectorAll('.card:not([data-reveal])')
        .forEach((el) => el.setAttribute('data-reveal', ''));

      const targets = Array.from(
        document.querySelectorAll('[data-reveal]:not(.is-visible)')
      ).filter((el) => !tracked.has(el));
      if (!targets.length) return;

      const seen = new Map();
      targets.forEach((el) => {
        tracked.add(el);

        // Stagger elements that share a parent (e.g. cards in a grid).
        if (!el.style.getPropertyValue('--reveal-delay')) {
          const parent = el.parentElement;
          const idx = seen.get(parent) || 0;
          seen.set(parent, idx + 1);
          const delay = Math.min(idx, 6) * 80;
          if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);
        }

        if (reduce || !io) {
          reveal(el);
          return;
        }
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          reveal(el);
        } else {
          io.observe(el);
        }
      });
    };

    scan();
    const raf = requestAnimationFrame(scan);
    const t1 = setTimeout(scan, 250);
    const t2 = setTimeout(scan, 800);

    // Catch elements mounted later by client components.
    let pending = false;
    const mo = new MutationObserver(() => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        scan();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      mo.disconnect();
      if (io) io.disconnect();
    };
  }, [pathname]);

  return null;
}
