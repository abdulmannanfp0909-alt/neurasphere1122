import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What services does NeuraSphere AI Solutions provide?",
    a: "We design and build AI-native products, custom web applications, SaaS platforms, MVPs, and automation systems — covering strategy, design, engineering, and post-launch growth.",
  },
  {
    q: "How long does it take to build a custom web application?",
    a: "Most production-grade applications ship in 8 to 16 weeks. Lean MVPs can launch in 4 to 6 weeks. We commit to a clear scope and weekly demos so timelines remain transparent.",
  },
  {
    q: "Do you work with startups as well as established companies?",
    a: "Yes. We partner with seed-stage founders shipping their first product as well as enterprises modernizing existing platforms — adapting our process to your stage and constraints.",
  },
  {
    q: "Can you improve or redesign an existing product?",
    a: "Absolutely. We routinely audit and rebuild legacy products — improving performance, UX, and architecture without disrupting your users or revenue.",
  },
  {
    q: "What technologies do you use?",
    a: "Our default stack is React, Next.js, TypeScript, Node.js, PostgreSQL and Supabase, with OpenAI and modern vector stores for AI features. We pick the right tool per project.",
  },
  {
    q: "Do you provide ongoing support and maintenance?",
    a: "Yes — most engagements transition into a retainer covering monitoring, iteration, and continuous delivery so your product keeps compounding.",
  },
  {
    q: "Can you build AI-powered features into our product?",
    a: "That's our core specialty. From chat assistants and agents to RAG, vision, and bespoke models — we integrate AI in ways that produce measurable business value.",
  },
  {
    q: "How do we get started?",
    a: "Send us a note via the contact page. We'll schedule a 30-minute discovery call, scope the work, and share a clear proposal within a few business days.",
  },
];

export function FAQ() {
  return (
    <section className="relative border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary/80">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">
            Answers to the questions <span className="text-gradient">teams ask us most</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Don't see your question? We're a short message away.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-xl border border-border bg-card px-5"
            >
              <AccordionTrigger className="text-left font-display text-base font-medium hover:no-underline md:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
