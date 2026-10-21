import { DualTextButton } from "@/components/adelt/DualTextButton";
import { useContactOverlay } from "@/components/adelt/useContactOverlay";
import { SplitLines } from "@/components/adelt/SplitLines";

export function FinalCta() {
  const contact = useContactOverlay();
  return (
    <section className="relative bg-primary text-primary-foreground py-32 lg:py-48 overflow-hidden grain">
      <div className="px-6 lg:px-16 text-center">
        <h2 className="font-display text-[clamp(2.5rem,10vw,10rem)] leading-[0.95] tracking-tight max-w-[16ch] mx-auto">
          <SplitLines
            lines={[
              <>Come find us at</>,
              <em className="italic text-accent font-normal">forty-seven.</em>,
            ]}
          />
        </h2>
        <div className="mt-14 flex flex-wrap justify-center items-center gap-8">
          <DualTextButton label="Reserve a table" onClick={() => contact.setOpen(true)} />
          <a
            href="tel:+251945111111"
            className="text-eyebrow text-primary-foreground underline-offset-4 hover:text-accent"
          >
            +251 945 11 11 11
          </a>
        </div>
      </div>
    </section>
  );
}
