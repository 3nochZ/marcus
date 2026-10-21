import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { MarcusShell, PageHeader } from "@/components/marcus/PageShell";
import { MEDIA } from "@/components/marcus/media";

export const Route = createFileRoute("/marcus/contact")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Contact — Marcus Addis" },
      {
        name: "description",
        content: "Send us a message and we'll get back to you as soon as possible.",
      },
      { property: "og:title", content: "Contact Marcus Addis" },
      { property: "og:description", content: "General and press inquiries." },
      { property: "og:image", content: MEDIA.homeSecondary },
      { name: "twitter:image", content: MEDIA.homeSecondary },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you for your inquiry. We'll be in touch shortly.");
    }, 600);
  }

  return (
    <MarcusShell>
      <PageHeader
        eyebrow="Get in touch"
        title={
          <>
            Contact <em className="italic font-normal text-accent">us</em>.
          </>
        }
        intro="Send us a message and we'll get back to you as soon as possible. Looking forward to hearing from you."
        image={MEDIA.homeSecondary}
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="px-6 lg:px-16 max-w-3xl mx-auto">
          <form onSubmit={onSubmit} className="space-y-8">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone Number" name="phone" type="tel" required />
            <SelectField
              label="What are you getting in touch about?"
              name="topic"
              options={["General Inquiry", "Press Inquiry"]}
            />
            <div>
              <label className="block text-eyebrow text-secondary mb-3">
                Your Message <span className="text-accent">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full bg-transparent border-b border-primary/30 focus:border-accent outline-none py-3 text-lg resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-eyebrow hover:bg-accent transition-colors disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send Message →"}
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

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-eyebrow text-secondary mb-3">{label}</label>
      <select
        name={name}
        className="w-full bg-transparent border-b border-primary/30 focus:border-accent outline-none py-3 text-lg text-primary"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
