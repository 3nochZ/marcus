import { createFileRoute } from "@tanstack/react-router";
import { MarcusShell, PageHeader } from "@/components/marcus/PageShell";
import { MEDIA } from "@/components/marcus/media";
import marcusPortrait from "@/assets/marcus/marcus-portrait.jpg.asset.json";

export const Route = createFileRoute("/marcus/about")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "About — Marcus Addis" },
      {
        name: "description",
        content:
          "A homecoming for Chef Marcus Samuelsson and his wife Maya. Global tastemaker, community partnership, and a rotating art program with Addis Fine Art Gallery.",
      },
      { property: "og:title", content: "About Marcus Addis" },
      { property: "og:description", content: "Global tastemaker · Community · Music & Art on the 47th floor." },
      { property: "og:image", content: MEDIA.aboutA },
      { name: "twitter:image", content: MEDIA.aboutA },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <MarcusShell>
      <PageHeader
        eyebrow="A Homecoming"
        title={
          <>
            This is a homecoming for me
            <br />
            and my wife, <em className="italic font-normal text-accent">Maya</em>.
          </>
        }
        intro="My culinary journey has always been influenced by our family roots here in Ethiopia — and Marcus Addis celebrates that heritage in every detail. — Chef Marcus Samuelsson"
        image={MEDIA.aboutA}
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 aspect-[4/5] overflow-hidden bg-surface">
            <img src={marcusPortrait.url} alt="Chef Marcus Samuelsson" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="lg:col-span-6">
            <span className="text-eyebrow text-accent">01 · Global Tastemaker</span>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.05] tracking-tight mt-4">
              Swedish craft. Ethiopian spice. Harlem soul.
            </h2>
            <p className="mt-6 text-secondary text-lg leading-[1.75]">
              An influential figure in food, media, and fashion, Chef Marcus draws upon his Swedish
              and Ethiopian roots in the kitchen. His robust use of spice comes from his Ethiopian
              heritage, and his appreciation of fresh, local foods comes from growing up in Sweden,
              under the loving eyes of his chef grandmother.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface/60 py-24 lg:py-32">
        <div className="px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 aspect-[4/5] overflow-hidden bg-surface">
            <img src={MEDIA.aboutD} alt="Community" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="lg:col-span-6">
            <span className="text-eyebrow text-accent">02 · Community</span>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.05] tracking-tight mt-4">
              Opportunity for the neighborhood that raised us.
            </h2>
            <p className="mt-6 text-secondary text-lg leading-[1.75]">
              Chef Marcus is committed to bringing opportunities and broader training to the local
              community. We've created a partnership with the Tourism Training Institute — a
              program our partners at Hyatt Addis Ababa already work with — to establish growth,
              inclusion, and opportunity for the surrounding community and broader Ethiopia.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <div className="px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="text-eyebrow text-accent">03 · Music &amp; Art</span>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.05] tracking-tight mt-4">
              A rotating curation of contemporary Ethiopian and African art.
            </h2>
            <p className="mt-6 text-secondary text-lg leading-[1.75]">
              Marcus Addis amplifies Ethiopian and African artists by partnering with Addis Fine
              Art Gallery. Our music reflects the modern growth of Addis Ababa — up-and-coming DJs
              and afrobeats with international touches infused throughout the programming.
            </p>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 aspect-[4/5] overflow-hidden bg-surface">
            <img src={MEDIA.artist} alt="Artist-in-Residence" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-24 lg:py-32">
        <div className="px-6 lg:px-16 max-w-5xl">
          <span className="text-eyebrow text-accent">Artist-in-Residence</span>
          <h2 className="font-display text-5xl lg:text-7xl leading-[1] tracking-tight mt-4">Fuad Mohammed</h2>
          <p className="mt-8 text-primary-foreground/80 text-lg leading-[1.85] max-w-[65ch]">
            Fuad's oil paintings emerge from his upbringing, watching women gather outside the
            church walls, setting up vegetable stalls and talking to each other. He is inspired by
            the outfits women wear for holidays, the vibrant colors, and floral decorations.
          </p>
          <p className="mt-6 text-primary-foreground/80 text-lg leading-[1.85] max-w-[65ch]">
            These paintings are defined by the warmth they radiate. Rich and layered, Fuad has
            chosen to present the economically marginalized — children and people with
            disabilities — set against the ubiquitous items around Ethiopian churches: tufa wax
            candles, prayer books, alongside vegetables available for sale in small bunches.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="px-6 lg:px-16">
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px w-14 bg-accent/70" />
            <span className="text-eyebrow text-accent">The room</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
            {[MEDIA.aboutA, MEDIA.aboutB, MEDIA.aboutC, MEDIA.aboutE, MEDIA.aboutF, MEDIA.homeFood, MEDIA.homeLocation, MEDIA.homeSecondary].map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden bg-surface">
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.05]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </MarcusShell>
  );
}
