import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { MarcusShell, PageHeader } from "@/components/marcus/PageShell";
import { MEDIA } from "@/components/marcus/media";
import privateEventsHero from "@/assets/marcus/private-events-hero.jpg.asset.json";

export const Route = createFileRoute("/marcus/private-events")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Private Events — Marcus Addis" },
      {
        name: "description",
        content:
          "From bridal showers to business gatherings — Desta, Gobez and Selam host unforgettable events on the 47th floor.",
      },
      { property: "og:title", content: "Private Events at Marcus Addis" },
      { property: "og:description", content: "Buyouts, long tables and dedicated servers with a view." },
      { property: "og:image", content: privateEventsHero.url },
      { name: "twitter:image", content: privateEventsHero.url },
    ],
  }),
  component: PrivateEventsPage,
});

const ROOMS = [
  { name: "Desta", img: MEDIA.eventsRoom1, capacity: "Up to 40 guests", desc: "Bright corner room with unbroken views across Addis Ababa." },
  { name: "Gobez", img: MEDIA.eventsRoom2, capacity: "Up to 24 guests", desc: "Intimate boardroom-style setting for business gatherings." },
  { name: "Selam", img: MEDIA.eventsRoom3, capacity: "Up to 80 guests", desc: "Our largest space for weddings, showers and celebrations." },
];

const FEATURES = ["Special Menus", "Dedicated Hosts", "Dedicated Servers & Bartenders"];

const btnPrimary =
  "inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-eyebrow hover:bg-accent transition-colors disabled:opacity-60";

function scrollToInquire() {
  document.getElementById("inquire")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function PrivateEventsPage() {
  const [sending, setSending] = useState(false);
  const [room, setRoom] = useState<string>("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      setRoom("");
      toast.success("Thank you for your inquiry. Our events team will be in touch shortly.");
    }, 600);
  }

  function pickRoom(name: string) {
    setRoom(name);
    scrollToInquire();
  }

  return (
    <MarcusShell>
      <PageHeader
        eyebrow="Private Events"
        title={
          <>
            Book an <em className="italic font-normal text-accent">event</em>.
          </>
        }
        intro="From bridal and wedding showers to business gatherings and get-togethers, we host unforgettable events of all sizes. Fill in the form below and our events team will be in touch very soon."
        image={privateEventsHero.url}
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {ROOMS.map((r) => (
            <article key={r.name} className="group flex flex-col">
              <div className="aspect-[4/5] overflow-hidden bg-surface">
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="font-display text-3xl mt-6">{r.name}</h3>
              <p className="mt-2 text-eyebrow text-accent">{r.capacity}</p>
              <p className="mt-3 text-secondary text-sm leading-[1.65]">{r.desc}</p>
              <ul className="mt-6 space-y-1 text-eyebrow text-secondary">
                {FEATURES.map((f) => (
                  <li key={f}>· {f}</li>
                ))}
              </ul>
              <div className="mt-8">
                <button type="button" onClick={() => pickRoom(r.name)} className={btnPrimary}>
                  Inquire about {r.name} →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="inquire" className="bg-surface/60 py-24 lg:py-32 scroll-mt-16">
        <div className="px-6 lg:px-16 max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-14 bg-accent/70" />
            <span className="text-eyebrow text-accent">Event inquiry</span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] tracking-tight">
            Tell us about your <em className="italic font-normal text-accent">event</em>.
          </h2>

          <form onSubmit={onSubmit} className="mt-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone Number" name="phone" type="tel" required />
              <SelectField
                label="Event Type"
                name="type"
                options={[
                  "Bridal / Wedding Shower",
                  "Business Gathering",
                  "Birthday",
                  "Full Buyout",
                  "Other",
                ]}
              />
              <SelectField
                label="Preferred Room"
                name="room"
                value={room}
                onChange={setRoom}
                options={["No preference", ...ROOMS.map((r) => r.name)]}
              />
              <Field label="Guest Count" name="guests" type="number" required />
              <Field label="Preferred Date" name="date" type="date" required />
            </div>
            <div>
              <label className="block text-eyebrow text-secondary mb-3">
                Tell us more <span className="text-accent">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full bg-transparent border-b border-primary/30 focus:border-accent outline-none py-3 text-lg resize-none"
              />
            </div>
            <button type="submit" disabled={sending} className={btnPrimary}>
              {sending ? "Sending…" : "Send Inquiry →"}
            </button>
            <p className="text-xs text-secondary">This site is protected by reCAPTCHA.</p>
          </form>
        </div>
      </section>
    </MarcusShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-eyebrow text-secondary mb-3">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-primary/30 focus:border-accent outline-none py-3 text-lg"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  value?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-eyebrow text-secondary mb-3">{label}</label>
      <select
        name={name}
        value={value ?? undefined}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className="w-full bg-transparent border-b border-primary/30 focus:border-accent outline-none py-3 text-lg text-primary"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
