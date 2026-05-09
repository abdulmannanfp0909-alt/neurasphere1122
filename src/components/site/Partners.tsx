const partners = [
  "Helix Labs", "Northwave", "Arcadia", "Brightline", "Quantis", "Lumen Co",
  "Veritas", "Onyx Studio", "Polaris", "Stellar", "Aurora", "Nimbus",
];

export function Partners() {
  const row = [...partners, ...partners];
  return (
    <section className="relative border-t border-border bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Collaborators & technology partners</p>
        <h3 className="mt-4 font-display text-2xl font-semibold md:text-3xl">Trusted by teams shipping at scale</h3>
      </div>
      <div className="mask-fade-x mt-10 overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-16 pr-16">
          {row.map((p, i) => (
            <span
              key={i}
              className="shrink-0 font-display text-2xl font-light text-muted-foreground/60 transition hover:text-foreground"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
