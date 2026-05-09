import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NeuraSphere AI Solutions" },
      { name: "description", content: "Tell us about your project — MVPs, AI features, or scalable platforms. We respond in 24 hours." },
      { property: "og:title", content: "Contact NeuraSphere AI Solutions" },
      { property: "og:description", content: "Start a project with our team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thanks — we'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-44">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Contact</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Let's build something <span className="text-gradient">remarkable</span> together.
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground md:text-lg">
            We're open to discussing new ideas, MVPs, AI solutions, and scalable products. Tell us where you are
            today and where you want to go — we'll come back with a clear path forward.
          </p>

          <div className="mt-10 space-y-4">
            <Info icon={Mail} label="Email" value="hello@neurasphere.ai" />
            <Info icon={Phone} label="Phone" value="+1 (415) 000-0000" />
            <Info icon={MapPin} label="Studio" value="San Francisco · Remote-first worldwide" />
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Sparkles className="h-4 w-4 text-primary" /> What we'd love to hear about
            </div>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <li>• MVP & v1 product builds</li>
              <li>• AI features & agents</li>
              <li>• SaaS platform engineering</li>
              <li>• Redesigns & rebuilds</li>
            </ul>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card/80 p-8 glass">
          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name"><Input required name="name" placeholder="Jane Cooper" /></Field>
              <Field label="Email"><Input required type="email" name="email" placeholder="jane@company.com" /></Field>
            </div>
            <Field label="Company"><Input name="company" placeholder="Company name" /></Field>
            <Field label="Project type"><Input name="type" placeholder="MVP, AI feature, SaaS platform…" /></Field>
            <Field label="Tell us about your project">
              <Textarea required name="message" rows={6} placeholder="A few sentences about goals, timeline, and what success looks like." />
            </Field>
            <Button
              type="submit"
              size="lg"
              disabled={sending}
              className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground glow hover:opacity-90"
            >
              {sending ? "Sending…" : (<>Send message <Send className="ml-2 h-4 w-4" /></>)}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Info({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-secondary/40 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="text-base text-foreground">{value}</p>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2">
      <Label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}
