export function VideoHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
      <div className="absolute inset-0 bg-background/30" />

      <div className="absolute inset-x-0 bottom-0 pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            NeuraSphere AI Solutions
          </div>
          <p className="font-display text-2xl font-light leading-tight text-foreground/95 md:text-4xl lg:text-5xl">
            Have a project in mind?{" "}
            <span className="text-gradient font-medium">Let us know and we'll build it for you.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
