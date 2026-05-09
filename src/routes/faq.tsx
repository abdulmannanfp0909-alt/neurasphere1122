import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — NeuraSphere AI Solutions" },
      { name: "description", content: "Frequently asked questions about working with NeuraSphere AI Solutions." },
      { property: "og:title", content: "FAQ — NeuraSphere AI Solutions" },
      { property: "og:description", content: "Common questions about our process, timelines, and stack." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border pt-32 pb-12 md:pt-44">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/80">FAQ</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Everything you need to know <span className="text-gradient">before we start</span>.
          </h1>
        </div>
      </section>
      <FAQ />
      <CTASection />
    </>
  );
}
