import { MarcusShell } from "@/components/marcus/PageShell";
import { Hero } from "@/components/marcus/Hero";
import { Positioning, HomeTeasers, ChefQuote } from "@/components/marcus/HomeSections";

export function MarcusHomePage() {
  return (
    <MarcusShell>
      <Hero />
      <Positioning />
      <HomeTeasers onReserve={() => {}} />
      <ChefQuote />
    </MarcusShell>
  );
}