import { createFileRoute } from "@tanstack/react-router";
import { VideoHero } from "@/components/site/VideoHero";
import { EarthHero } from "@/components/site/EarthHero";
import { TechStrip } from "@/components/site/TechStrip";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { Services } from "@/components/site/Services";
import { VideoContent } from "@/components/site/VideoContent";
import { Partners } from "@/components/site/Partners";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <VideoHero />
      <EarthHero />
      <TechStrip />
      <FeaturedProducts />
      <Services />
      <VideoContent />
      <Partners />
      <FAQ />
      <CTASection />
    </>
  );
}
