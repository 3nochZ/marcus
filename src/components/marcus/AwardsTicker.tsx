const AWARDS = [
  "Ethiopian roots",
  "Swedish craft",
  "Harlem soul",
  "47th floor · Addis Ababa",
  "Live DJ Thurs–Sat",
  "Sunday Vinyl Brunch",
];

export function AwardsTicker() {
  const stream = [...AWARDS, ...AWARDS];
  return (
    <section className="bg-primary text-primary-foreground py-6 overflow-hidden">
      <div className="marquee flex gap-16 whitespace-nowrap">
        {stream.map((a, i) => (
          <span key={i} className="text-eyebrow flex items-center gap-16">
            {a}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
