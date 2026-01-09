'use client';

import { useEffect, useRef } from 'react';

export default function ScrollToTop() {
  const circleRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    const radius = 45;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      const offset = circumference - scrollPercent * circumference;

      circle.style.strokeDashoffset = `${offset}`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      aria-label="Scroll to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
      className="
        fixed bottom-6 right-6
        h-14 w-14
        rounded-full
        bg-white
        shadow-lg
        flex items-center justify-center
        z-50
        hover:scale-105
        transition-transform
      "
    >
      {/* SVG Progress Ring */}
      <svg className="-rotate-90 absolute" width="48" height="48" viewBox="0 0 100 100">
        <circle
          ref={circleRef}
          cx="50"
          cy="50"
          r="45"
          className="
            fill-transparent
            stroke-black
            stroke-[6]
            transition-[stroke-dashoffset]
            duration-75
          "
        />
      </svg>

      {/* Arrow */}
      <span className="text-lg font-bold">↑</span>
    </button>
  );
}
