import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SpiralAnimation } from "@/components/ui/spiral-animation";

export function CTASection() {
  return (
    <section className="relative px-6 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-black">
        {/* Spiral background animation */}
        <SpiralAnimation className="absolute inset-0 overflow-hidden opacity-90" />
        {/* Soft vignette for legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60" />

        <div className="relative grid gap-8 p-10 md:grid-cols-[2fr_1fr] md:items-center md:p-16 min-h-[420px] md:min-h-[520px]">
          <div>
            <h3 className="font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
              Ready to build something <span className="text-gradient">remarkable?</span>
            </h3>
            <p className="mt-4 max-w-xl text-white/70">
              Tell us about your idea — MVP, AI feature, or full platform. We'll come back within 24 hours with a clear path forward.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground glow hover:opacity-90"
            >
              <Link to="/contact">
                Start a Project <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
