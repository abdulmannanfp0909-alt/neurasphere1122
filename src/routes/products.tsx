import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { CTASection } from "@/components/site/CTASection";
import { TiltCard } from "@/components/ui/tilt-card";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Projects — NeuraSphere AI Solutions" },
      { name: "description", content: "Selected products and projects we have designed and engineered." },
      { property: "og:title", content: "Our Products & Projects" },
      { property: "og:description", content: "AI platforms, SaaS, fintech, healthcare, and more." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(products.map((p) => p.category)))],
    [],
  );
  const [active, setActive] = useState("All");
  const list = products.filter((p) => active === "All" || p.category === active);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border pt-32 pb-12 md:pt-44">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Selected work</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Products & projects we've <span className="text-gradient">designed and shipped</span>.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                active === c
                  ? "border-primary/50 bg-primary/15 text-foreground"
                  : "border-border bg-secondary/30 text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}
            >
              <TiltCard className="rounded-2xl">
                <Link
                  to="/products/$id"
                  params={{ id: p.id }}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/40"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.cover}
                      alt={p.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{p.category}</span>
                    <h3 className="mt-2 font-display text-xl font-semibold">{p.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm text-foreground">
                      View Project <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
