import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Target, Layers, Users } from "lucide-react";
import { Partners } from "@/components/site/Partners";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NeuraSphere AI Solutions" },
      { name: "description", content: "Meet NeuraSphere AI Solutions — engineers and designers building AI-native products and scalable software." },
      { property: "og:title", content: "About NeuraSphere AI Solutions" },
      { property: "og:description", content: "Expertise in AI, web applications, and digital transformation." },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Sparkles, title: "Who we are", body: "A senior, distributed team of product engineers, designers, and AI specialists. We move with the focus of a startup and the discipline of an enterprise." },
  { icon: Target, title: "Our mission", body: "To turn ambitious ideas into production software that compounds in value — fast, durable, and beautifully crafted." },
  { icon: Layers, title: "Our approach", body: "Embedded teams, weekly demos, opinionated architecture. We choose proven tools and ship in vertical slices that de-risk every milestone." },
  { icon: Users, title: "Why clients choose us", body: "We pair design taste with engineering rigor — and we obsess over the details that turn good products into category leaders." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/80">About NeuraSphere</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
            We build the software that <span className="text-gradient">moves industries forward</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            NeuraSphere AI Solutions is a product engineering studio specializing in AI, scalable web platforms,
            and digital transformation for teams that refuse to settle.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-8 transition hover:border-primary/40"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-muted-foreground">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/20 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["10+", "Years of craft"],
            ["120+", "Products shipped"],
            ["40+", "Industries served"],
            ["98%", "Client retention"],
          ].map(([k, v]) => (
            <div key={v}>
              <p className="font-display text-4xl font-semibold text-gradient md:text-5xl">{k}</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <Partners />
      <CTASection />
    </>
  );
}
