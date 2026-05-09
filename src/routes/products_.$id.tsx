import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProduct, products, type Product } from "@/data/products";

export const Route = createFileRoute("/products_/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.name} — NeuraSphere AI Solutions` },
        { name: "description", content: p.short },
        { property: "og:title", content: p.name },
        { property: "og:description", content: p.short },
        { property: "og:image", content: p.cover },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="grid min-h-[60vh] place-items-center px-6 pt-32 text-center">
      <div>
        <h1 className="font-display text-3xl font-semibold">Project not found</h1>
        <p className="mt-2 text-muted-foreground">The project you're looking for doesn't exist.</p>
        <Button asChild className="mt-6 rounded-full">
          <Link to="/products">Back to projects</Link>
        </Button>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="grid min-h-[60vh] place-items-center px-6 pt-32 text-center">
      <div>
        <p className="text-muted-foreground">{error.message}</p>
        <Button onClick={reset} className="mt-4 rounded-full">Retry</Button>
      </div>
    </div>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: Product };
  const others = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <article>
      <section className="relative overflow-hidden border-b border-border pt-28 md:pt-36">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="relative mx-auto max-w-6xl px-6 pb-12">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
          <div className="mt-8 grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
            <div>
              <span className="inline-flex items-center rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
                {product.category}
              </span>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                {product.name}
              </h1>
              <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">{product.short}</p>
            </div>
            <dl className="grid grid-cols-2 gap-4 text-sm">
              <Meta label="Industry" value={product.industry} />
              <Meta label="Timeline" value={product.timeline} />
              <Meta label="Stack" value={product.technologies.slice(0, 2).join(", ")} />
              <Meta label="Status" value="Shipped" />
            </dl>
          </div>
        </div>
        <div className="relative mx-auto max-w-6xl px-6 pb-16">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img src={product.cover} alt={product.name} className="aspect-[16/9] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-16">
          <Block title="Overview">{product.overview}</Block>
          <Block title="Problem">{product.problem}</Block>
          <Block title="Solution">{product.solution}</Block>

          <div>
            <SectionTitle>Features</SectionTitle>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionTitle>Technologies</SectionTitle>
            <div className="mt-6 flex flex-wrap gap-2">
              {product.technologies.map((t) => (
                <span key={t} className="rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-sm text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle>Gallery</SectionTitle>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {product.gallery.map((src, i) => (
                <div key={i} className="overflow-hidden rounded-xl border border-border">
                  <img src={src} alt={`${product.name} screenshot ${i + 1}`} className="aspect-[4/3] w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle>Results & impact</SectionTitle>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {product.results.map((r, i) => (
                <div key={i} className="rounded-2xl border border-border bg-gradient-to-br from-secondary/40 to-card p-6">
                  <p className="font-display text-2xl font-semibold text-gradient">{r.split(" ")[0]}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{r.split(" ").slice(1).join(" ")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary/60 to-card p-10 text-center md:p-16">
          <h3 className="font-display text-3xl font-semibold md:text-4xl">
            Have a similar project in mind?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Let's scope it together — we'll respond within 24 hours with a clear plan.
          </p>
          <Button asChild size="lg" className="mt-6 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
            <Link to="/contact">
              Start a conversation <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h4 className="mb-6 font-display text-2xl font-semibold">More projects</h4>
        <div className="grid gap-6 md:grid-cols-3">
          {others.map((p) => (
            <Link
              key={p.id}
              to="/products/$id"
              params={{ id: p.id }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/40"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.cover} alt={p.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.category}</p>
                <p className="mt-1 font-display text-lg font-semibold">{p.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <dt className="text-xs uppercase tracking-widest text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-medium">{value}</dd>
    </div>
  );
}
function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-2xl font-semibold md:text-3xl">{children}</h2>;
}
function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{children}</p>
    </div>
  );
}
