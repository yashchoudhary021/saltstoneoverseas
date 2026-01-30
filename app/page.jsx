import HeroSlider from "@/components/hero/HeroSlider";
import CallToAction from "@/components/Home/CallToAction";
import Certifications from "@/components/Home/Certifications";
import GlobalPresence from "@/components/Home/GlobalPresence";
import QualityProcess from "@/components/Home/QualityProcess";
import WhatWeDo from "@/components/Home/WhatWeDo";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
export default function Home() {
  return (
    <>
      <HeroSlider />
      <WhatWeDo />
      <WhyChooseUs />
      <GlobalPresence />
      <QualityProcess />
      {/* <Certifications /> */}
      <CallToAction />
    </>
  );
}