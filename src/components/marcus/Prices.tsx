import { MEDIA } from "@/components/marcus/media";
const bg = MEDIA.locationHeader;

const ROWS = [
  { label: "Monday – Wednesday", price: "11:00 – 23:00", note: "Dinner service" },
  { label: "Thursday – Saturday", price: "11:00 – 02:00", note: "Live DJ from 9pm" },
  { label: "Sunday Vinyl Brunch", price: "11:00 – 16:00", note: "Reservations recommended" },
  { label: "Sunday Dinner", price: "19:00 – 23:00", note: "À la carte" },
  { label: "Private Events", price: "By arrangement", note: "Buyouts & long tables" },
];

export function Prices() {
  return (
    <section id="visit" className="relative bg-background py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={bg} alt="" className="h-full w-full object-cover opacity-30" loading="lazy" />
      </div>

      <div className="px-6 lg:px-16 max-w-5xl mx-auto">
        <span className="text-eyebrow text-accent">Hours</span>
        <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1] tracking-tight mt-3 max-w-[20ch]">
          When to find us on the 47th floor.
        </h2>

        <div className="mt-16 divide-y divide-primary/10 border-y border-primary/10">
          {ROWS.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-12 gap-4 py-6 items-baseline hover:bg-surface/60 transition-colors"
            >
              <span className="col-span-12 md:col-span-5 font-display text-2xl">{r.label}</span>
              <span className="col-span-6 md:col-span-4 text-secondary text-sm">{r.note}</span>
              <span className="col-span-6 md:col-span-3 text-right font-display text-xl text-accent">
                {r.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
