import { useId, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './BuildingScrollbar.css';

export default function BuildingScrollbar() {
  const artworkId = useId();
  const indicatorRef = useRef(null);
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    const indicator = indicatorRef.current;
    const root = document.documentElement;
    let frame = null;
    const update = () => {
      frame = null;
      const page = document.scrollingElement || root;
      const range = Math.max(0, page.scrollHeight - page.clientHeight);
      const progress = range ? Math.min(1, Math.max(0, page.scrollTop / range)) : 0;
      indicator.style.setProperty('--building-progress', progress);
      indicator.setAttribute('aria-valuenow', String(Math.round(progress * 100)));
      indicator.hidden = range <= 1;
    };
    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    root.classList.add('building-scroll-enabled');
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    // Recalculate after images, fonts, filters or other content change page height.
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    observer.observe(root);
    return () => {
      root.classList.remove('building-scroll-enabled');
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      observer.disconnect();
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [pathname, search]);

  return (
    <div
      ref={indicatorRef}
      className="building-scroll"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
    >
      <svg className="building-scroll-art" viewBox="0 0 180 140" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={`${artworkId}-fill`} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="var(--dark-blue)" />
            <stop offset="0.55" stopColor="var(--primary-blue)" />
            <stop offset="1" stopColor="var(--primary-green)" />
          </linearGradient>
          <g id={`${artworkId}-machine`} stroke="#273b50" strokeWidth="2.5" strokeLinejoin="round">
            {/* Raised boom and vertical dipper arm, matching the reference pose. */}
            <path d="M108 97L91 56Q88 50 80 47L36 30L32 18L89 37Q98 40 102 49L123 91Z" fill="var(--machine-paint)" />
            <path d="M29 10L40 16L43 38L34 98L24 99L25 39L20 17Z" fill="var(--machine-paint)" />
            <path d="M36 19L89 42M27 35L20 86" fill="none" stroke="#52677b" strokeWidth="5" />
            <path d="M37 19L52 25M24 60L20 87" fill="none" stroke="#dce8f2" strokeWidth="2" />
            <path d="M26 94L17 104M34 96L32 108" fill="none" strokeWidth="5" />
            <path d="M16 100L34 102L39 128L28 123L20 122Q4 118 4 111Z" fill="#52677b" />
            <path d="M10 107L31 112M12 114L33 119" fill="none" stroke="#8496a7" strokeWidth="2" />
            {/* Engine housing, glazed cab and chassis. */}
            <path d="M109 81H163Q172 81 172 90V108H101V94Z" fill="var(--machine-paint)" />
            <path d="M100 64H131L139 101H96Z" fill="var(--machine-paint)" />
            <path d="M104 69H115V91H100ZM120 69H128L133 91H120Z" fill="#d9edf5" />
            <path d="M124 73L129 86M105 73L102 85" stroke="#ffffff" strokeWidth="2" />
            <path d="M148 87H165M148 93H165M148 99H165" strokeWidth="3" />
            <path d="M96 105H171V112H96Z" fill="#52677b" />
            <path d="M112 112H143V119H112Z" fill="#273b50" />
            {/* Continuous crawler tracks with visible rollers and tread. */}
            <rect x="82" y="118" width="94" height="19" rx="9.5" fill="#34495e" />
            <rect x="89" y="122" width="80" height="11" rx="5.5" fill="#8496a7" />
            {[95, 111, 127, 143, 160].map((x) => <circle key={x} cx={x} cy="127.5" r="3.5" fill="#dce5ef" strokeWidth="1.5" />)}
            <path d="M92 118V121M106 118V121M120 118V121M134 118V121M148 118V121M162 118V121M92 134V137M106 134V137M120 134V137M134 134V137M148 134V137M162 134V137" stroke="#b4c1ce" strokeWidth="1.5" />
            <circle cx="31" cy="27" r="3" fill="#dce5ef" />
            <circle cx="92" cy="47" r="3" fill="#dce5ef" />
          </g>
        </defs>
        <use href={`#${artworkId}-machine`} style={{ '--machine-paint': '#cbd5e1' }} />
        <g className="building-scroll-fill" style={{ '--machine-paint': `url(#${artworkId}-fill)` }}>
          <use href={`#${artworkId}-machine`} />
        </g>
      </svg>
    </div>
  );
}
