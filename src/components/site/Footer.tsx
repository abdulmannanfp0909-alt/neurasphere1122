import { Link } from "@tanstack/react-router";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/neurasphere-logo.png";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-background">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display text-base font-semibold">NeuraSphere AI</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            We design and engineer AI-native products, scalable web apps, and digital experiences for ambitious teams.
          </p>
          <div className="mt-6 flex gap-3">
            {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Company"
          links={[
            { label: "About", to: "/about" },
            { label: "Services", to: "/services" },
            { label: "Products", to: "/products" },
            { label: "Contact", to: "/contact" },
          ]}
        />
        <FooterCol
          title="Services"
          links={[
            { label: "AI Solutions", to: "/services" },
            { label: "Web Applications", to: "/services" },
            { label: "SaaS Products", to: "/services" },
            { label: "MVP Development", to: "/services" },
          ]}
        />
        <div>
          <h4 className="text-sm font-semibold text-foreground">Get in touch</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>hello@neurasphere.ai</li>
            <li>+1 (415) 000-0000</li>
            <li>San Francisco · Remote-first</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} NeuraSphere AI Solutions. All rights reserved.</p>
          <p>Crafted with intent · Built for scale</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-muted-foreground transition hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
