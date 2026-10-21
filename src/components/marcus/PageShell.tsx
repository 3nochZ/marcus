import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import { ContactOverlayProvider } from "@/components/adelt/useContactOverlay";
import { SidebarStrip } from "@/components/marcus/SidebarStrip";
import { Footer } from "@/components/marcus/Footer";
import { ContactOverlay } from "@/components/marcus/ContactOverlay";
import { StickyReserve } from "@/components/marcus/StickyReserve";
import { useMarcusLenis } from "@/components/marcus/useMarcusLenis";

export function MarcusShell({ children }: { children: ReactNode }) {
  useMarcusLenis();
  return (
    <ContactOverlayProvider>
      <div className="theme-marcus">
        <SidebarStrip />
        <StickyReserve />

        <main className="relative min-h-screen bg-background text-primary antialiased lg:ml-[4.38em]">
          {children}
          <Footer />
        </main>
        <ContactOverlay />
      </div>
      <Toaster position="bottom-right" />
    </ContactOverlayProvider>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
}) {
  return (
    <section className="relative min-h-[65vh] w-full overflow-hidden bg-primary flex items-end">
      {image && (
        <div className="absolute inset-0 z-0">
          <img src={image} alt="" className="h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/85" />
        </div>
      )}
      <div className="relative z-10 px-6 lg:px-16 py-24 lg:py-32 text-primary-foreground">
        {eyebrow && (
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-14 bg-accent/70" />
            <span className="text-eyebrow text-accent">{eyebrow}</span>
          </div>
        )}
        <h1 className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-[-0.03em] max-w-[18ch]">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 max-w-[58ch] text-primary-foreground/85 text-base lg:text-lg leading-[1.75]">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
