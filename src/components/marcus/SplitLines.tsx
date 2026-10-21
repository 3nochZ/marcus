import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

export function SplitLines({
  lines,
  className = "",
  delay = 0,
  stagger = 0.08,
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <span ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : { y: "110%" }}
            transition={{ duration: 1.05, delay: delay + i * stagger, ease: [0.21, 1, 0.32, 1] }}
            className="block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
