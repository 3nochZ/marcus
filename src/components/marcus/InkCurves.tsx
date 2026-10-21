import { useEffect, useRef } from "react";

/**
 * Scroll-driven ink curves adapted from The Golden Relic's C2BroughtToLife.
 * Three staggered paths, one per Ethiopian flag color (green, yellow, red).
 *
 * Perf note: we update stroke-dashoffset directly on the DOM inside a rAF
 * loop instead of calling setState. Scroll-driven setState re-renders the
 * whole SVG on every frame and makes the page feel janky under Lenis smooth
 * scrolling.
 */
const FLAG = [
  { id: "ink-green", color: "#0f8a3c", yOffset: 0, delay: 0 },
  { id: "ink-yellow", color: "#fcd116", yOffset: 60, delay: 0.08 },
  { id: "ink-red", color: "#da121a", yOffset: 120, delay: 0.16 },
];

export function InkCurves() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pathRefs = useRef<Array<SVGPathElement | null>>([]);
  const lensRef = useRef<number[]>([0, 0, 0]);

  useEffect(() => {
    // Measure once mounted, and prime dash arrays.
    lensRef.current = pathRefs.current.map((p) => (p ? p.getTotalLength() : 0));
    pathRefs.current.forEach((p, i) => {
      if (!p) return;
      const len = lensRef.current[i] || 1;
      p.setAttribute("stroke-dasharray", String(len));
      p.setAttribute("stroke-dashoffset", String(len));
    });

    const el = sectionRef.current;
    if (!el) return;

    let raf = 0;
    let pending = false;
    const update = () => {
      pending = false;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height + vh;
      const scrolled = vh - r.top;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      for (let i = 0; i < FLAG.length; i++) {
        const p = pathRefs.current[i];
        if (!p) continue;
        const f = FLAG[i];
        const draw = Math.max(0, Math.min(1, (progress - f.delay) / 0.75));
        const eased = draw * draw * (3 - 2 * draw);
        const len = lensRef.current[i] || 1;
        p.setAttribute("stroke-dashoffset", String(len * (1 - eased)));
      }
    };
    const onScroll = () => {
      if (pending) return;
      pending = true;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={sectionRef} aria-hidden className="pointer-events-none absolute inset-0 z-0">
      <svg
        viewBox="0 0 1600 1700"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          top: -120,
          left: 0,
          width: "100%",
          height: "calc(100% + 240px)",
          overflow: "visible",
        }}
      >
        {FLAG.map((f, i) => (
          <path
            key={f.id}
            ref={(el) => {
              pathRefs.current[i] = el;
            }}
            d={`M 20 ${280 + f.yOffset}
                C 180 ${360 + f.yOffset}, 360 ${440 + f.yOffset}, 540 ${520 + f.yOffset}
                C 720 ${680 + f.yOffset}, 760 ${880 + f.yOffset}, 660 ${1020 + f.yOffset}
                C 540 ${1180 + f.yOffset}, 280 ${1240 + f.yOffset}, 200 ${1140 + f.yOffset}
                C 120 ${1040 + f.yOffset}, 220 ${900 + f.yOffset}, 420 ${920 + f.yOffset}
                C 620 ${940 + f.yOffset}, 760 ${1080 + f.yOffset}, 920 ${1080 + f.yOffset}
                C 1080 ${1080 + f.yOffset}, 1120 ${860 + f.yOffset}, 1260 ${880 + f.yOffset}
                C 1400 ${900 + f.yOffset}, 1500 ${1020 + f.yOffset}, 1540 ${1180 + f.yOffset}`}
            fill="none"
            stroke={f.color}
            strokeWidth="46"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.55, mixBlendMode: "multiply" }}
          />
        ))}
      </svg>
    </div>
  );
}
