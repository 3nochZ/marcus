import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { MarcusShell, PageHeader } from "@/components/marcus/PageShell";
import { MEDIA } from "@/components/marcus/media";

export const Route = createFileRoute("/marcus/careers")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Careers — Marcus Addis" },
      {
        name: "description",
        content:
          "Join the Marcus Addis team on the 47th floor. Send in your resume even if the position you're looking for isn't listed.",
      },
      { property: "og:title", content: "Careers at Marcus Addis" },
      {
        property: "og:description",
        content: "Grow with us — front of house, back of house, bar, and beyond.",
      },
      { property: "og:image", content: MEDIA.aboutB },
      { name: "twitter:image", content: MEDIA.aboutB },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
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
        eyebrow="Careers"
        title={
          <>
            Come <em className="italic font-normal text-accent">grow</em> with us.
          </>
        }
        intro="We'd love to have you join our team. Use the form below to apply — feel free to send in your resume even if you don't see the position you're looking for."
        image={MEDIA.aboutB}
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="px-6 lg:px-16 max-w-3xl mx-auto">
          <form onSubmit={onSubmit} className="space-y-8">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone Number" name="phone" type="tel" required />
            <div>
              <label className="block text-eyebrow text-secondary mb-3">
                Cover Letter <span className="text-accent">*</span>
              </label>
              <textarea
                name="cover"
                required
                rows={6}
                className="w-full bg-transparent border-b border-primary/30 focus:border-accent outline-none py-3 text-lg resize-none"
              />
            </div>
            <div>
              <label className="block text-eyebrow text-secondary mb-3">
                Resumé <span className="text-accent">*</span>
              </label>
              <input
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                required
                className="block w-full text-sm text-secondary file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-primary file:text-primary-foreground file:text-eyebrow file:cursor-pointer"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-eyebrow hover:bg-accent transition-colors disabled:opacity-60"
            >
              {sending ? "Sending…" : "Apply →"}
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
