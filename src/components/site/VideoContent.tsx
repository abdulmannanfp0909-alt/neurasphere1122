import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function VideoContent() {
  return (
    <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden border-y border-border">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-background/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />

      <div className="relative mx-auto flex h-full max-w-5xl items-center px-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/90">Built on craft, measured in outcomes</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            A decade of <span className="text-gradient">consistency, dedication</span>, and relentless innovation.
          </h2>
          <p className="mt-6 text-base text-muted-foreground md:text-lg">
            Client satisfaction is one of our highest priorities. At NeuraSphere AI Solutions, our consistency,
            dedication, and constant innovation have earned us recognition from teams across industries — and
            we engineer highly responsive, scalable, and robust web applications with a touch of finesse.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground glow hover:opacity-90">
              <Link to="/contact">
                Discuss your project <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
