const techs = [
  "OpenAI", "Vercel", "GitHub", "Supabase", "Next.js", "React",
  "Node.js", "Tailwind", "TypeScript", "Firebase", "PostgreSQL", "Figma",
];

export function TechStrip() {
  const row = [...techs, ...techs];
  return (
    <section className="relative border-y border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Technologies we use to build modern products
        </p>
      </div>
      <div className="mask-fade-x mt-10 overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-12 pr-12">
          {row.map((t, i) => (
            <div
              key={i}
              className="flex h-12 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-secondary/30 px-8 font-display text-lg font-medium text-muted-foreground transition hover:text-foreground"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
