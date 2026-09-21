import { useEffect, useRef, useState } from 'react';

export default function StatNumber({ target, suffix }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame;
    let observer;
    let started = false;
    const finish = () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      setValue(target);
    };
    const onMotionChange = () => { if (motion.matches) finish(); };
    if (motion.matches || !window.IntersectionObserver) {
      finish();
      return;
    }
    observer = new IntersectionObserver((entries) => {
      if (started || !entries.some((entry) => entry.isIntersecting)) return;
      started = true;
      observer.disconnect();
      let start;
      const tick = (timestamp) => {
        start ??= timestamp;
        const progress = Math.min((timestamp - start) / 1600, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(progress === 1 ? target : Math.floor(target * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.15 });
    observer.observe(ref.current.closest('.stat-card'));
    motion.addEventListener('change', onMotionChange);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      motion.removeEventListener('change', onMotionChange);
    };
  }, [target]);

  return (
    <h3 ref={ref} aria-label={`${target}${suffix}`}>
      <span aria-hidden="true">{value}{suffix}</span>
    </h3>
  );
}
