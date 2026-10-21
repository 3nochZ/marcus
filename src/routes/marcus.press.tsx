import { createFileRoute, Link } from "@tanstack/react-router";
import { MarcusShell, PageHeader } from "@/components/marcus/PageShell";
import { MEDIA } from "@/components/marcus/media";

export const Route = createFileRoute("/marcus/press")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Press — Marcus Addis" },
      {
        name: "description",
        content:
          "Selected press coverage of Marcus Addis — Chef Marcus Samuelsson's first restaurant in Africa, on the 47th floor in Addis Ababa.",
      },
      { property: "og:title", content: "Press — Marcus Addis" },
      { property: "og:description", content: "Selected coverage from around the world." },
      { property: "og:image", content: MEDIA.aboutE },
      { name: "twitter:image", content: MEDIA.aboutE },
    ],
  }),
  component: PressPage,
});

const CLIPS = [
  {
    outlet: "The New York Times",
    date: "March 2026",
    headline: "Marcus Samuelsson Returns to Ethiopia — A Homecoming at 47 Floors Up.",
    href: "#",
  },
  {
    outlet: "Condé Nast Traveler",
    date: "February 2026",
    headline: "The most anticipated opening in East Africa this year.",
    href: "#",
  },
  {
    outlet: "Financial Times — HTSI",
    date: "January 2026",
    headline: "Injera, mustard caviar and a view over Addis: inside Marcus Addis.",
    href: "#",
  },
  {
    outlet: "Eater",
    date: "December 2025",
    headline: "First Look: Marcus Samuelsson's Ethio-Swedish Tasting Menu.",
    href: "#",
  },
  {
    outlet: "Monocle",
    date: "November 2025",
    headline: "A new chapter for the Addis Ababa dining scene.",
    href: "#",
  },
];

function PressPage() {
  return (
    <MarcusShell>
      <PageHeader
        eyebrow="Press"
        title={
          <>
            In the <em className="italic font-normal text-accent">press</em>.
          </>
        }
        intro="Selected coverage from around the world. For interviews with Chef Marcus, high-resolution imagery, or fact-checking assistance, please use the contact form."
        image={MEDIA.aboutE}
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="px-6 lg:px-16 max-w-5xl mx-auto">
          <ul className="divide-y divide-primary/15 border-y border-primary/15">
            {CLIPS.map((c, i) => (
              <li key={i}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-12 gap-4 py-8 items-baseline hover:bg-surface/60 transition-colors"
                >
                  <span className="col-span-12 md:col-span-3 text-eyebrow text-accent">
                    {c.outlet}
                  </span>
                  <h3 className="col-span-12 md:col-span-7 font-display text-2xl lg:text-3xl leading-[1.15] tracking-tight transition-colors group-hover:text-accent">
                    {c.headline}
                  </h3>
                  <span className="col-span-12 md:col-span-2 md:text-right text-eyebrow text-secondary">
                    {c.date}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-24 lg:py-32">
        <div className="px-6 lg:px-16 max-w-4xl mx-auto text-center">
          <span className="text-eyebrow text-accent">Press inquiries</span>
          <h2 className="mt-6 font-display text-4xl lg:text-6xl leading-[1.05] tracking-tight">
            Writing about us? <em className="italic font-normal text-accent">Let's talk.</em>
          </h2>
          <Link
            to="/marcus/contact"
            className="mt-10 inline-flex items-center gap-3 bg-accent text-primary px-8 py-4 text-eyebrow hover:bg-primary-foreground transition-colors"
          >
            Send a press inquiry →
          </Link>
        </div>
      </section>
    </MarcusShell>
  );
}
