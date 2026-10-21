import { useContactOverlay } from "@/components/adelt/useContactOverlay";

const PLANS = [
  {
    name: "Sky Lunch",
    price: "Daily · 11am – 3pm",
    items: ["Chef's midday menu", "Panoramic views", "Signature cocktails", "Walk-ins welcome"],
  },
  {
    name: "Sunday Vinyl Brunch",
    price: "Sunday · 11am – 4pm",
    items: ["Live DJ on vinyl", "Bottomless additions", "Curated menu", "Reservations recommended"],
    highlight: true,
  },
  {
    name: "Dinner & Late Night",
    price: "Mon–Sat · 5pm onwards",
    items: ["Signature tasting", "Wine pairings", "Live DJ from 9pm", "Thurs–Sat until 2am"],
  },
];

export function Plans() {
  const contact = useContactOverlay();

  return (
    <section id="plans" className="bg-background py-24 lg:py-32">
      <div className="px-6 lg:px-16 mb-16">
        <span className="text-eyebrow text-accent">Ways to visit</span>
        <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1] tracking-tight mt-3 max-w-[20ch]">
          Three services. One view worth the elevator ride.
        </h2>
      </div>

      <div className="px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {PLANS.map((p) => (
          <article
            key={p.name}
            className={`p-8 lg:p-10 flex flex-col justify-between min-h-[26rem] transition-colors ${
              p.highlight
                ? "bg-primary text-primary-foreground"
                : "bg-surface border border-primary/10 hover:border-accent/50"
            }`}
          >
            <div>
              <div className="flex items-start justify-between mb-6">
                <span className="text-eyebrow opacity-80">Service</span>
                {p.highlight && (
                  <span className="rounded-full bg-accent text-accent-foreground text-eyebrow px-3 py-1">
                    Most requested
                  </span>
                )}
              </div>
              <h3 className="font-display text-4xl leading-tight tracking-tight">{p.name}</h3>
              <p className="mt-4 font-display text-xl opacity-90">{p.price}</p>
              <ul className={`mt-8 space-y-3 text-sm ${p.highlight ? "text-primary-foreground/80" : "text-secondary"}`}>
                {p.items.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent">/</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => contact.setOpen(true)}
              className={`mt-8 text-eyebrow inline-flex items-center gap-3 underline-offset-4 hover:underline ${
                p.highlight ? "text-accent" : "text-primary"
              }`}
            >
              Reserve →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
