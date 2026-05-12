import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavTabs } from "@/components/ui/nav-tabs";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import logo from "@/assets/neurasphere-logo.png";

const mobileLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 " +
        (scrolled
          ? "px-4 pt-3"
          : "px-0 pt-0")
      }
    >
      <div
        className={
          "mx-auto flex items-center justify-between transition-all duration-500 " +
          (scrolled
            ? "h-14 max-w-5xl rounded-full border border-white/10 bg-black/50 px-4 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            : "h-16 md:h-20 max-w-7xl rounded-none border-b border-transparent px-6")
        }
      >
        <Link to="/" className="group flex items-center gap-2 shrink-0">
          <div className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
            <span className="absolute inset-0 rounded-lg bg-primary/40 blur-md transition group-hover:bg-primary/60" />
          </div>
          <span className="font-display text-base font-semibold tracking-tight text-foreground">
            NeuraSphere<span className="text-muted-foreground"> AI</span>
          </span>
        </Link>

        <div className="hidden md:block">
          <NavTabs />
        </div>

        <div className="hidden md:block shrink-0">
          <Button
            asChild
            size={scrolled ? "sm" : "default"}
            className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
          >
            <Link to="/contact">Start a Project</Link>
          </Button>
        </div>

        {/* mobile: hamburger + contact */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full border-white/15 bg-black/40 text-white hover:bg-white/10 hover:text-white"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 border-white/10 bg-black/90 text-white backdrop-blur-xl">
              <SheetHeader>
                <SheetTitle className="text-left text-white">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {mobileLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to as any}
                    className="rounded-lg px-3 py-2.5 text-sm text-white/85 hover:bg-white/10 hover:text-white"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Button asChild size="sm" className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
