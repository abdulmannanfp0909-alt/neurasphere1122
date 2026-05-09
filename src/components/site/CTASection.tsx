import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative px-6 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary/60 via-card to-background p-10 md:p-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
          <div>
            <h3 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
              Ready to build something <span className="text-gradient">remarkable?</span>
            </h3>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Tell us about your idea — MVP, AI feature, or full platform. We'll come back within 24 hours with a clear path forward.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground glow hover:opacity-90">
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
