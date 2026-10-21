import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useContactOverlay } from "@/components/marcus/useContactOverlay";

export function StickyReserve() {
  const contact = useContactOverlay();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Reveal after the user scrolls roughly one viewport (past the hero).
      setShow(window.scrollY > window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="sticky-reserve"
          type="button"
          onClick={() => contact.setOpen(true)}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.21, 1, 0.32, 1] }}
          className="group fixed right-5 top-5 z-40 hidden md:inline-flex items-center gap-3 rounded-full bg-primary/95 backdrop-blur-md text-primary-foreground pl-5 pr-2 py-2 text-eyebrow shadow-lg hover:bg-accent transition-colors"
        >
          <span className="btn-dual">
            <span className="btn-dual__a">Reserve</span>
            <span className="btn-dual__b" aria-hidden="true">
              Reserve
            </span>
          </span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/15">
            <svg width="12" height="10" viewBox="0 0 14 10" fill="none">
              <path
                d="M0 5h12M8 1l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
