import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";
import { CTASection } from "@/components/site/CTASection";
import { TechStrip } from "@/components/site/TechStrip";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — NeuraSphere AI Solutions" },
      { name: "description", content: "AI solutions, web app development, SaaS, UI/UX design, integrations and scalable backends." },
      { property: "og:title", content: "Services — NeuraSphere AI Solutions" },
      { property: "og:description", content: "End-to-end product engineering for ambitious teams." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border pt-32 pb-16 md:pt-44">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Services</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Engineering <span className="text-gradient">end-to-end</span>, with senior teams from day one.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
            From discovery to scale — strategy, design, AI, and engineering under one accountable team.
          </p>
        </div>
      </section>
      <Services />
      <TechStrip />
      <CTASection />
    </>
  );
}
