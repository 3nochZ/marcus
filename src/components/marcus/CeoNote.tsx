import { MEDIA } from "@/components/marcus/media";
const chef = MEDIA.chef;
import { SplitLines } from "@/components/adelt/SplitLines";
import { InkCurves } from "@/components/marcus/InkCurves";

export function CeoNote() {
  return (
    <section id="chef" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <InkCurves />
      <div className="relative z-10 px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden bg-surface">
            <img src={chef} alt="Chef Marcus Samuelsson" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="mt-4 flex items-center justify-between text-eyebrow text-secondary">
            <span>Chef Marcus Samuelsson</span>
            <span>Founder</span>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pt-8">
          <span className="text-eyebrow text-accent">Global tastemaker</span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight mt-4">
            <SplitLines
              lines={[
                <>Born in Ethiopia.</>,
                <>Raised in Sweden.</>,
                <>Inspired by <em className="italic text-accent">Harlem</em>.</>,
              ]}
            />
          </h2>
          <p className="mt-8 text-secondary text-lg leading-[1.75] max-w-[55ch]">
            An influential figure in food, media, and fashion, Chef Marcus draws upon his
            Swedish and Ethiopian roots in the kitchen. His robust use of spice comes from
            his Ethiopian heritage; his appreciation of fresh, local ingredients was
            shaped growing up in Sweden under the loving eyes of his chef grandmother.
          </p>
          <p className="mt-6 text-secondary text-lg leading-[1.75] max-w-[55ch]">
            Marcus is committed to bringing opportunity and broader training to the local
            community — partnering with the Tourism Training Institute and Hyatt Addis
            Ababa on a new educational program, and amplifying Ethiopian and African
            artists through a rotating art curation with Addis Fine Art Gallery.
          </p>
          <p className="mt-8 font-display italic text-2xl text-primary/70">— Chef Marcus</p>
        </div>
      </div>
    </section>
  );
}
