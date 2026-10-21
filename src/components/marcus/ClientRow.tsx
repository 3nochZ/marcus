const NAMES = ["The New York Times", "Bon Appétit", "Food & Wine", "Eater", "Condé Nast Traveler", "Monocle"];

export function ClientRow() {
  return (
    <section className="border-y border-primary/10 bg-background py-10">
      <div className="px-6 lg:px-16 flex items-center gap-10 flex-wrap justify-center">
        <span className="text-eyebrow text-secondary shrink-0">As seen in</span>
        {NAMES.map((n) => (
          <span key={n} className="font-display text-xl text-primary/70 hover:text-primary transition-colors">
            {n}
          </span>
        ))}
      </div>
    </section>
  );
}
