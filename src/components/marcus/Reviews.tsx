import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const REVIEWS = [
  {
    quote:
      "This is a homecoming for me and my wife, Maya. My culinary journey has always been influenced by our family roots here in Ethiopia.",
    who: "Chef Marcus Samuelsson",
    role: "Founder",
  },
  {
    quote:
      "The view alone is worth the trip. The food makes you never want to leave the 47th floor.",
    who: "Selam T.",
    role: "Guest · Addis Ababa",
  },
  {
    quote:
      "A masterclass in bringing Ethiopian ingredients into a global fine-dining language. Every plate has a story.",
    who: "Jonas L.",
    role: "Visiting from Stockholm",
  },
];

export function Reviews() {
  const [i, setI] = useState(0);
  const cur = REVIEWS[i];

  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="px-6 lg:px-16 max-w-4xl mx-auto text-center">
        <span className="text-eyebrow text-accent">Words</span>
        <div className="mt-8 min-h-[16rem] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="font-display text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.15] tracking-tight max-w-[28ch] mx-auto"
            >
              &ldquo;{cur.quote}&rdquo;
              <footer className="mt-8 text-eyebrow text-secondary not-italic">
                {cur.who} — {cur.role}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-10 flex justify-center gap-3">
          {REVIEWS.map((_, j) => (
            <button
              key={j}
              onClick={() => setI(j)}
              aria-label={`Review ${j + 1}`}
              className={`h-px transition-all ${j === i ? "w-12 bg-accent" : "w-6 bg-primary/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
