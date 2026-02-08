import HeroSlider from "@/components/hero/HeroSlider";
import CallToAction from "@/components/Home/CallToAction";
import ShipBanner from "@/components/Home/ShipBanner";
import ServingDiverseIndustries from "@/components/Home/ServingDiverseIndustries";
import TrustGrid from "@/components/Home/TrustGrid";
import WhyChooseAndGlobal from "@/components/Home/WhyChooseAndGlobal";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <TrustGrid />
      <ServingDiverseIndustries />
      <ShipBanner />
      <WhyChooseAndGlobal />
      <CallToAction />
    </>
  );
}