import HeroSlider from "@/components/hero/HeroSlider";
import CallToAction from "@/components/Home/CallToAction";
import Certifications from "@/components/Home/Certifications";
import GlobalPresence from "@/components/Home/GlobalPresence";
import QualityProcess from "@/components/Home/QualityProcess";
import ServingDiverseIndustries from "@/components/Home/ServingDiverseIndustries";
import WhatWeDo from "@/components/Home/WhatWeDo";
import WhyChooseAndGlobal from "@/components/Home/WhyChooseAndGlobal";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
export default function Home() {
  return (
    <>
      <HeroSlider />
      {/* <WhatWeDo /> */}
      <ServingDiverseIndustries />
      <WhyChooseAndGlobal />
      {/* <WhyChooseUs />
      <GlobalPresence /> */}
      <QualityProcess />
      {/* <Certifications /> */}
      <CallToAction />
    </>
  );
}