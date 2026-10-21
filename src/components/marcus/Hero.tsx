import { motion } from "motion/react";
import { SplitLines } from "@/components/marcus/SplitLines";
import { DualTextButton } from "@/components/marcus/DualTextButton";
import { useContactOverlay } from "@/components/marcus/useContactOverlay";

import heroImage from "@/assets/marcus/hero-interior.jpg.asset.json";
const HERO_IMAGE = heroImage.url;

export function Hero() {
  const contact = useContactOverlay();

  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden grain flex flex-col justify-end"
    >
      <div className="absolute inset-0 z-0">
        <img src={HERO_IMAGE} alt="" className="h-full w-full object-cover" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 30% 75%, oklch(0 0 0 / 0.65) 0%, transparent 60%), radial-gradient(ellipse 120% 90% at 50% 50%, transparent 55%, oklch(0 0 0 / 0.55) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 px-6 lg:px-16 pb-16 lg:pb-24 pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="h-px w-14 bg-accent/70" />
          <span className="text-eyebrow text-accent">Addis Ababa · 47th Floor</span>
        </motion.div>

        <h1 className="font-display text-primary-foreground text-[clamp(3rem,10vw,10rem)] leading-[0.94] tracking-[-0.035em] max-w-[16ch]">
          <SplitLines
            lines={[
              <>A homecoming</>,
              <>
                for <em className="italic font-normal text-accent">Chef Marcus</em>.
              </>,
            ]}
            delay={0.5}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05 }}
          className="mt-10 max-w-[54ch] text-primary-foreground/85 text-base lg:text-lg leading-[1.75]"
        >
          Born in Ethiopia. Raised in Sweden. Inspired by Harlem. Marcus Samuelsson's first
          restaurant in Africa — a fusion of his world-renowned cuisine with an unforgettable
          Ethiopian twist, served at the top of East Africa's tallest building.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <DualTextButton label="Reserve a table" onClick={() => contact.setOpen(true)} />
        </motion.div>
      </div>
    </section>
  );
}
