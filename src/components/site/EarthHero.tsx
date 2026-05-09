import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import halfEarth from "@/assets/half-earth.png";

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

      </div>

      {/* Earth hemisphere rising */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative mt-20 h-[320px] overflow-hidden md:h-[520px] lg:h-[620px]"
      >
        <div className="absolute left-1/2 top-0 aspect-square w-[180%] -translate-x-1/2 md:w-[140%] lg:w-[120%]">
          <div className="relative h-full w-full">
            <div className="absolute -inset-10 rounded-full bg-primary/30 blur-3xl" />
            <img
              src={halfEarth}
              alt="Half Earth rising from space"
              width={1920}
              height={1080}
              loading="lazy"
              className="relative h-full w-full object-cover object-top"
            />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </motion.div>
    </section>
  );
}
