import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { MEDIA } from "@/components/marcus/media";

const CASES = [
  { img: MEDIA.homeFood, title: "Our Food", where: "Ethio–Swedish", niche: ["Chef's Menu"], wide: true },
  { img: MEDIA.aboutA, title: "The View", where: "47th Floor", niche: ["Panorama", "Dusk"], wide: false },
  { img: MEDIA.aboutB, title: "Signature Plates", where: "Dining Room", niche: ["Spice-forward"], wide: false },
  { img: MEDIA.homeSecondary, title: "The Room", where: "Addis Ababa", niche: ["Interior", "Art Program"], wide: true },
  { img: MEDIA.aboutC, title: "The Bar", where: "Sky Lounge", niche: ["Cocktails"], wide: false },
];

export function CasesGrid() {
  return (
    <section id="gallery" className="bg-background py-24 lg:py-32">
      <div className="px-6 lg:px-16 mb-16 flex items-end justify-between gap-8 flex-wrap">
        <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1] tracking-tight max-w-[16ch]">
          The room, the view, the plate.
        </h2>
        <span className="text-eyebrow text-secondary">Gallery</span>
      </div>

      <div className="px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {CASES.map((c, i) => (
          <CaseCard key={c.title} {...c} index={i} />
        ))}
      </div>
    </section>
  );
}

function CaseCard({
  img,
  title,
  where,
  niche,
  wide,
  index,
}: {
  img: string;
  title: string;
  where: string;
  niche: string[];
  wide: boolean;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <motion.article
      ref={ref}
      initial={{ y: 60, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 1, delay: index * 0.08, ease: [0.21, 1, 0.32, 1] }}
      className={`group relative overflow-hidden bg-surface ${wide ? "md:col-span-2" : ""}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out bg-gradient-to-t from-primary/70 to-transparent">
          <div className="flex items-end justify-between text-primary-foreground gap-6">
            <div>
              <h3 className="font-display text-3xl lg:text-4xl leading-none">{title}</h3>
              <p className="mt-2 text-eyebrow opacity-80">{where}</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-end">
              {niche.map((n) => (
                <span key={n} className="text-eyebrow border border-primary-foreground/40 rounded-full px-3 py-1">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
