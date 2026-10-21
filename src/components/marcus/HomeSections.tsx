import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SplitLines } from "@/components/marcus/SplitLines";
import { DualTextButton } from "@/components/marcus/DualTextButton";
import { MEDIA } from "@/components/marcus/media";
import { InkCurves } from "@/components/marcus/InkCurves";

/* ---------- Positioning strip ---------- */
export function Positioning() {
  return (
    <section className="relative bg-background py-32 lg:py-48 overflow-hidden">
      <InkCurves />
      <div className="relative z-10 px-6 lg:px-16 max-w-4xl mx-auto text-center">
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.15] tracking-tight text-primary">
          <SplitLines
            lines={[
              <>International cuisine,</>,
              <>reimagined through</>,
              <>
                an <em className="italic text-accent">Ethiopian</em> lens.
              </>,
            ]}
          />
        </h2>
      </div>
    </section>
  );
}

/* ---------- Teaser row ---------- */
type TeaserProps = {
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  image: string;
  cta: string;
  href?: string;
  onCta?: () => void;
  reverse?: boolean;
  tone?: "light" | "dark";
};

export function TeaserRow({
  eyebrow,
  title,
  copy,
  image,
  cta,
  href,
  onCta,
  reverse,
  tone = "light",
}: TeaserProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const dark = tone === "dark";
  const bg = dark ? "bg-primary text-primary-foreground" : "bg-background text-primary";
  const bodyClr = dark ? "text-primary-foreground/75" : "text-secondary";

  return (
    <section className={`${bg} py-24 lg:py-32`}>
      <div
        className={`px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div ref={ref} className="lg:col-span-7 overflow-hidden aspect-[4/3] lg:aspect-[16/11]">
          <motion.img
            src={image}
            alt=""
            loading="lazy"
            style={{ y }}
            className="h-[112%] w-full object-cover"
          />
        </div>
        <div className="lg:col-span-5">
          <span className="text-eyebrow text-accent">{eyebrow}</span>
          <h3 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight">
            {title}
          </h3>
          <p className={`mt-6 text-lg leading-[1.75] max-w-[46ch] ${bodyClr}`}>{copy}</p>
          <div className="mt-10">
            {href ? (
              <Link to={href}>
                <DualTextButton label={cta} />
              </Link>
            ) : (
              <DualTextButton label={cta} onClick={onCta} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Chef quote band ---------- */
export function ChefQuote() {
  return (
    <section className="bg-primary text-primary-foreground py-32 lg:py-48 overflow-hidden grain relative">
      <div className="px-6 lg:px-16 max-w-5xl mx-auto text-center">
        <span className="text-eyebrow text-accent">Chef Marcus Samuelsson</span>
        <blockquote className="mt-8 font-display italic text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.2] tracking-tight">
          <SplitLines
            lines={[
              <>"This is a homecoming for me</>,
              <>and my wife, Maya. My culinary</>,
              <>journey has always been</>,
              <>influenced by our family roots</>,
              <>
                here in <em className="not-italic text-accent">Ethiopia</em>."
              </>,
            ]}
          />
        </blockquote>
        <div className="mt-14">
          <Link to="/marcus/about">
            <DualTextButton
              label="Our story"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Convenience: teasers block ---------- */
export function HomeTeasers({ onReserve }: { onReserve: () => void }) {
  void onReserve;
  return (
    <>
      <TeaserRow
        eyebrow="Our Food"
        title={
          <SplitLines
            lines={[
              <>Small plates.</>,
              <>
                <em className="italic text-accent">Wagyu</em>.
              </>,
              <>Family-style feasts.</>,
            ]}
          />
        }
        copy="Chef Marcus draws from his Ethiopian heritage and Swedish craft — spice-forward, ingredient-led, and built for sharing across the table."
        image={MEDIA.homeFood}
        cta="View the menu"
        href="/marcus/menus"
        tone="light"
      />
      <TeaserRow
        eyebrow="The View"
        title={
          <SplitLines
            lines={[
              <>Forty-seven floors</>,
              <>
                above <em className="italic text-accent">Addis Ababa</em>.
              </>,
            ]}
          />
        }
        copy="Perched atop East Africa's tallest building — a room built for the light, the skyline, and the long, slow dinners that follow."
        image={MEDIA.homeLocation}
        cta="Hours & location"
        href="/marcus/location"
        reverse
        tone="dark"
      />
      <TeaserRow
        eyebrow="Private Events"
        title={
          <SplitLines
            lines={[
              <>Celebrations,</>,
              <>
                hosted <em className="italic text-accent">your way</em>.
              </>,
            ]}
          />
        }
        copy="Bridal showers, business gatherings, and long-table dinners — three tiers of private space with dedicated hosts, chefs, and bartenders."
        image={MEDIA.eventsRoom1}
        cta="Book an event"
        href="/marcus/private-events"
        tone="light"
      />
    </>
  );
}
