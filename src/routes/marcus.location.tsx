import { createFileRoute } from "@tanstack/react-router";
import { MarcusShell, PageHeader } from "@/components/marcus/PageShell";
import { MEDIA } from "@/components/marcus/media";

export const Route = createFileRoute("/marcus/location")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Location & Hours — Marcus Addis" },
      {
        name: "description",
        content:
          "Head Office Tower 47th Floor, Ras Desta Damtew, Addis Ababa, Ethiopia. Views, music and art on East Africa's tallest building.",
      },
      { property: "og:title", content: "Visit Marcus Addis — 47th Floor" },
      { property: "og:description", content: "Head Office Tower, Ras Desta Damtew, Addis Ababa." },
      { property: "og:image", content: MEDIA.locationHeader },
      { name: "twitter:image", content: MEDIA.locationHeader },
    ],
  }),
  component: LocationPage,
});

const HOURS = [
  { day: "Monday – Wednesday", time: "11:00 AM – 11:00 PM" },
  { day: "Thursday – Saturday", time: "11:00 AM – 2:00 AM", note: "Live DJ starts at 9:00 PM" },
  { day: "The Sunday Vinyl Brunch", time: "11:00 AM – 4:00 PM", note: "Reservations recommended" },
  { day: "Sunday Dinner", time: "7:00 PM – 11:00 PM" },
];

function LocationPage() {
  return (
    <MarcusShell>
      <PageHeader
        eyebrow="Visit Us"
        title={
          <>
            Hours &amp;
            <br />
            <em className="italic font-normal text-accent">Location</em>.
          </>
        }
        intro="Located on the 47th floor of the Commercial Bank of Ethiopia — East Africa's tallest building — you'll find views, music and art as unforgettable as the food."
        image={MEDIA.locationHeader}
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-eyebrow text-accent">Address</span>
            <p className="mt-4 font-display text-2xl lg:text-3xl leading-[1.2]">
              Head Office Tower, 47th Floor
              <br />
              Ras Desta Damtew
              <br />
              Addis Ababa, Ethiopia
            </p>
            <a
              href="tel:+251945111111"
              className="mt-8 inline-block font-display text-3xl text-accent hover:text-primary transition-colors"
            >
              +251 945 11 11 11
            </a>
            <div className="mt-8">
              <a
                href="https://maps.google.com/?q=Head+Office+Tower+Ras+Desta+Damtew+Addis+Ababa"
                target="_blank"
                rel="noreferrer"
                className="text-eyebrow underline underline-offset-4 hover:text-accent"
              >
                Get Directions →
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-eyebrow text-accent">Hours</span>
            <div className="mt-4 divide-y divide-primary/10 border-y border-primary/10">
              {HOURS.map((h) => (
                <div key={h.day} className="grid grid-cols-12 gap-4 py-6 items-baseline">
                  <span className="col-span-12 md:col-span-6 font-display text-2xl">{h.day}</span>
                  <span className="col-span-12 md:col-span-6 md:text-right">
                    <span className="font-display text-xl text-accent">{h.time}</span>
                    {h.note && <span className="block text-sm text-secondary mt-1">{h.note}</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MarcusShell>
  );
}
