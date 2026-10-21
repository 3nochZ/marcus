import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type FormEvent } from "react";
import { Range, getTrackBackground } from "react-range";
import { toast } from "sonner";
import { useContactOverlay } from "@/components/adelt/useContactOverlay";

export function ContactOverlay() {
  const { open, setOpen } = useContactOverlay();
  const [party, setParty] = useState([4]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Thank you. Our host will confirm your reservation shortly.");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-primary/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-x-0 bottom-0 z-[90] max-h-[92vh] overflow-y-auto rounded-t-[2rem] bg-background p-8 lg:p-16"
            data-lenis-prevent
          >
            <div className="mx-auto max-w-3xl">
              <div className="flex items-start justify-between mb-10">
                <div>
                  <span className="text-eyebrow text-accent">Reserve a table</span>
                  <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.98] tracking-tight mt-2">
                    Come dine on the 47th floor.
                  </h2>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="text-eyebrow inline-flex items-center gap-3 shrink-0 mt-2"
                >
                  Close
                  <span className="relative h-6 w-6">
                    <span className="absolute inset-x-0 top-1/2 h-px bg-primary rotate-45" />
                    <span className="absolute inset-x-0 top-1/2 h-px bg-primary -rotate-45" />
                  </span>
                </button>
              </div>

              <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2 text-eyebrow">
                  Name
                  <input required className="border-b border-primary/20 bg-transparent py-3 font-sans text-base focus:border-accent focus:outline-none transition-colors" />
                </label>
                <label className="flex flex-col gap-2 text-eyebrow">
                  Email
                  <input required type="email" className="border-b border-primary/20 bg-transparent py-3 font-sans text-base focus:border-accent focus:outline-none transition-colors" />
                </label>
                <label className="flex flex-col gap-2 text-eyebrow">
                  Date
                  <input required type="date" className="border-b border-primary/20 bg-transparent py-3 font-sans text-base focus:border-accent focus:outline-none transition-colors" />
                </label>
                <label className="flex flex-col gap-2 text-eyebrow">
                  Time
                  <input required type="time" className="border-b border-primary/20 bg-transparent py-3 font-sans text-base focus:border-accent focus:outline-none transition-colors" />
                </label>
                <label className="flex flex-col gap-2 text-eyebrow md:col-span-2">
                  Special requests
                  <textarea rows={3} className="border-b border-primary/20 bg-transparent py-3 font-sans text-base focus:border-accent focus:outline-none transition-colors resize-none" />
                </label>

                <div className="md:col-span-2 mt-4">
                  <div className="flex items-baseline justify-between mb-6">
                    <span className="text-eyebrow">Party size</span>
                    <span className="font-display text-3xl">
                      {party[0]}<span className="text-secondary text-lg"> guests</span>
                    </span>
                  </div>
                  <Range
                    values={party}
                    step={1}
                    min={1}
                    max={20}
                    onChange={(v) => setParty(v)}
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          height: "2px",
                          background: getTrackBackground({
                            values: party,
                            colors: ["var(--accent)", "color-mix(in oklab, var(--primary) 15%, transparent)"],
                            min: 1,
                            max: 20,
                          }),
                        }}
                      >
                        {children}
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div
                        {...props}
                        key={props.key}
                        style={{ ...props.style }}
                        className="h-5 w-5 rounded-full bg-background border-2 border-accent shadow-md focus:outline-none"
                      />
                    )}
                  />
                  <div className="flex justify-between mt-3 text-eyebrow text-secondary">
                    <span>1</span>
                    <span>20+</span>
                  </div>
                </div>

                <div className="md:col-span-2 mt-6 flex justify-end">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground pl-7 pr-2 py-2 text-eyebrow hover:bg-accent transition-colors"
                  >
                    Request reservation
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10">
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path d="M0 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
