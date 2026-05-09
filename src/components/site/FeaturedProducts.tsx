import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { featuredProducts } from "@/data/products";

export function FeaturedProducts() {
  return (
    <section className="relative -mt-24 md:-mt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Selected work</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">
              Featured <span className="text-gradient">products & projects</span>
            </h2>
          </div>
          <Link to="/products" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            View all projects <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="relative">
        {featuredProducts.map((p, i) => (
          <StickyCard key={p.id} index={i} total={featuredProducts.length} product={p} />
        ))}
      </div>
    </section>
  );
}

function StickyCard({
  product,
  index,
  total,
}: {
  product: (typeof featuredProducts)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.6]);

  const top = `calc(6rem + ${index * 28}px)`;

  return (
    <div ref={ref} className="sticky px-6" style={{ top, marginBottom: index === total - 1 ? "8rem" : "4rem" }}>
      <motion.div
        style={{ scale, y, opacity }}
        className="mx-auto max-w-6xl"
      >
        <Link
          to="/products/$id"
          params={{ id: product.id }}
          className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-elegant"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
              <img
                src={product.cover}
                alt={product.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="flex flex-col justify-between gap-8 p-8 md:p-12">
              <div>
                <span className="inline-flex items-center rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
                  {product.category}
                </span>
                <h3 className="mt-5 font-display text-3xl font-semibold leading-tight md:text-4xl">
                  {product.name}
                </h3>
                <p className="mt-4 text-base text-muted-foreground">{product.short}</p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {product.technologies.slice(0, 4).map((t) => (
                    <span key={t} className="rounded-md border border-border bg-background/40 px-2 py-1 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
                  View Project <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
