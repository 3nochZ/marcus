import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useContactOverlay } from "@/components/adelt/useContactOverlay";
import { DualTextButton } from "@/components/adelt/DualTextButton";

import logo from "@/assets/marcus/logo-vertical.png.asset.json";
import { MARCUS_NAV } from "@/components/marcus/media";

export function SidebarStrip() {
  const [open, setOpen] = useState(false);
  const contact = useContactOverlay();

  return (
    <>
      <div className="hidden lg:flex fixed top-0 left-0 bottom-0 w-[4.38em] z-40 bg-primary flex-col items-center justify-between py-8">
        <Link to="/" className="block w-8">
          <img src={logo.url} alt="Marcus Addis" className="w-full h-auto" />
        </Link>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="group flex flex-col gap-[6px] p-3"
        >
          <span className="block h-px w-6 bg-primary-foreground transition-transform group-hover:translate-x-1" />
          <span className="block h-px w-6 bg-primary-foreground transition-transform group-hover:translate-x-1 delay-75" />
        </button>
        <span className="[writing-mode:vertical-rl] rotate-180 text-eyebrow text-primary-foreground/60">
          47th Floor · Addis Ababa
        </span>
      </div>

      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-eyebrow"
        aria-label="Open menu"
      >
        Menu
        <span className="flex flex-col gap-[3px]">
          <span className="block h-px w-3 bg-primary-foreground" />
          <span className="block h-px w-3 bg-primary-foreground" />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-primary/30"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="fixed top-0 left-0 bottom-0 z-50 flex w-full overflow-hidden bg-background text-primary shadow-2xl sm:w-[32rem]"
            >
              <div className="flex w-20 shrink-0 items-center justify-center border-r border-primary/15 sm:w-24">
                <button
                  onClick={() => setOpen(false)}
                  className="group inline-flex h-12 w-12 items-center justify-center text-primary transition-transform duration-300 hover:scale-110 hover:text-accent"
                  aria-label="Close menu"
                >
                  <span className="relative h-7 w-7 transition-transform duration-500 group-hover:rotate-90">
                    <span className="absolute inset-x-0 top-1/2 h-px bg-current rotate-45" />
                    <span className="absolute inset-x-0 top-1/2 h-px bg-current -rotate-45" />
                  </span>
                </button>
              </div>

              <div className="flex min-w-0 flex-1 flex-col p-8 lg:p-10">
                <div className="h-[17px] w-44 overflow-hidden shrink-0">
                  <img
                    src={logo.url}
                    alt="Marcus Addis"
                    className="h-44 w-auto rotate-90 origin-top-left translate-x-44"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-center gap-8">
                  <nav className="flex flex-col gap-2">
                    {MARCUS_NAV.map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15 + i * 0.04, duration: 0.6, ease: [0.21, 1, 0.32, 1] }}
                      >
                        <Link
                          to={item.href}
                          onClick={() => setOpen(false)}
                          className="font-display text-3xl leading-tight tracking-tight text-primary hover:text-accent transition-colors duration-300 block"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <DualTextButton
                    label="Reserve a table"
                    onClick={() => {
                      setOpen(false);
                      contact.setOpen(true);
                    }}
                    className="self-start mt-4"
                  />
                </div>

                <div className="flex gap-5 text-eyebrow text-primary/60">
                  <a href="tel:+251945111111" className="hover:text-accent">+251 945 11 11 11</a>
                  <a href="#" className="hover:text-accent">Instagram</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

