import { motion } from "framer-motion";
import {
  Bot, Code2, Boxes, Palette, Plug, Workflow, Server, Rocket,
} from "lucide-react";

const services = [
  { icon: Bot, title: "AI Solutions", desc: "Custom LLM apps, agents, RAG pipelines and AI features built into your product." },
  { icon: Code2, title: "Custom Web App Development", desc: "Performant, accessible web apps engineered with modern stacks." },
  { icon: Boxes, title: "SaaS Product Development", desc: "End-to-end SaaS — from architecture to billing, auth, and analytics." },
  { icon: Palette, title: "UI/UX Design", desc: "Design systems and product flows that feel inevitable to use." },
  { icon: Plug, title: "API Integrations", desc: "Reliable integrations across payments, CRMs, AI, and data platforms." },
  { icon: Workflow, title: "Automation Systems", desc: "Internal tools and AI workflows that compound team productivity." },
  { icon: Server, title: "Scalable Backend Development", desc: "Resilient services, queues, and data layers built to scale." },
  { icon: Rocket, title: "MVP Development", desc: "Ship a credible v1 in weeks — designed to validate and grow." },
];

export function Services({ compact = false }: { compact?: boolean }) {
  return (
    <section className="relative border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/80">What we do</p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">
            Services built for{" "}
            <span className="text-gradient">ambitious teams</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A senior team of designers and engineers, embedded with you from discovery to scale.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(compact ? services.slice(0, 4) : services).map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
