import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './ScrollReveal.css';

export default function ScrollReveal({ children }) {
  const rootRef = useRef(null);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const root = rootRef.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!window.IntersectionObserver || !Element.prototype.animate) return;

    const seen = new WeakSet();
    const pending = new Set();
    const animations = new Map();
    const reveal = (element, immediate = false) => {
      if (!pending.delete(element)) return;
      observer.unobserve(element);
      element.classList.remove('scroll-reveal-pending');
      if (immediate || motion.matches) return;

      // Measure the actual column, including responsive layout changes.
      const bounds = element.getBoundingClientRect();
      const direction = element.dataset.reveal;
      const fromRight = direction === 'right' ||
        (direction !== 'left' && bounds.left + bounds.width / 2 > window.innerWidth / 2 + 1);
      const distance = window.innerWidth < 600 ? 24 : 48;
      const animation = element.animate([
        { opacity: 0, translate: `${fromRight ? distance : -distance}px 0` },
        { opacity: 1, translate: '0 0' },
      ], { duration: 700, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' });
      animations.set(element, animation);
      animation.onfinish = () => animations.delete(element);
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) reveal(target);
      });
    }, { threshold: 0.08 });

    const register = () => {
      pending.forEach((element) => {
        if (!root.contains(element)) reveal(element, true);
      });
      root.querySelectorAll('[data-reveal]').forEach((element) => {
        if (seen.has(element)) return;
        seen.add(element);
        if (motion.matches) return;
        pending.add(element);
        element.classList.add('scroll-reveal-pending');
        observer.observe(element);
      });
    };
    const showAll = () => {
      if (!motion.matches) return;
      pending.forEach((element) => reveal(element, true));
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    // Keyboard navigation must never land on invisible content.
    const onFocus = (event) => {
      const element = event.target.closest('[data-reveal]');
      if (element) reveal(element, true);
    };
    register();
    const mutations = new MutationObserver(register);
    mutations.observe(root, { childList: true, subtree: true });
    motion.addEventListener('change', showAll);
    root.addEventListener('focusin', onFocus);

    return () => {
      mutations.disconnect();
      observer.disconnect();
      pending.forEach((element) => element.classList.remove('scroll-reveal-pending'));
      animations.forEach((animation) => animation.cancel());
      motion.removeEventListener('change', showAll);
      root.removeEventListener('focusin', onFocus);
    };
  }, [pathname]);

  return <div ref={rootRef} className="scroll-reveal-root">{children}</div>;
}
