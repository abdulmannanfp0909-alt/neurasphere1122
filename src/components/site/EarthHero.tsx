import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export function EarthHero() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background pt-28 md:pt-40">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Building the next decade of software
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            AI-powered products,{" "}
            <span className="text-gradient">scalable web apps,</span>{" "}
            and digital experiences engineered to ship.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            We transform ambitious ideas into production-ready software — from MVPs to enterprise-grade platforms,
            crafted with engineering rigor and design finesse.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground glow hover:opacity-90">
              <Link to="/contact">
                Start a Project <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-border bg-secondary/40 hover:bg-secondary">
              <Link to="/products">
                <Play className="mr-2 h-4 w-4" /> View our work
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="relative rounded-2xl border border-border glass p-2 shadow-2xl">
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-secondary to-background">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
                alt="Product dashboard preview"
                className="aspect-[16/9] w-full object-cover opacity-90"
              />
            </div>
            <div className="pointer-events-none absolute -inset-x-20 -bottom-20 h-40 bg-gradient-glow opacity-60 blur-3xl" />
          </div>
        </motion.div>
      </div>

      {/* Earth hemisphere rising */}
      <div className="relative mt-20 h-[280px] overflow-hidden md:h-[420px]">
        <div className="absolute left-1/2 top-0 aspect-square w-[180%] -translate-x-1/2 md:w-[140%] lg:w-[120%]">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[oklch(0.35_0.12_240)] via-[oklch(0.22_0.08_260)] to-[oklch(0.14_0.04_270)]" />
            <div className="absolute inset-0 rounded-full opacity-60 mix-blend-screen"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, oklch(0.7 0.18 215 / 0.5), transparent 40%), radial-gradient(circle at 70% 60%, oklch(0.6 0.22 295 / 0.4), transparent 45%)",
              }}
            />
            <div className="absolute inset-0 rounded-full border border-primary/20" />
            <div className="absolute -inset-4 rounded-full bg-primary/20 blur-3xl" />
            {/* meridians */}
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute inset-x-0 top-1/2 h-px bg-primary/15"
                style={{ transform: `rotate(${i * 36}deg)` }}
              />
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </div>
    </section>
  );
}
