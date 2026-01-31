import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import MissionVision from "@/components/about/MissionVision";
import OurValues from "@/components/about/OurValues";
import WhySaltstone from "@/components/about/WhySaltstone";
import AboutCTA from "@/components/about/AboutCTA";
import AboutFoundation from "@/components/about/AboutFoundation";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <AboutFoundation />
      {/* <MissionVision />
      <OurValues />
      <WhySaltstone /> */}
      <AboutCTA />
    </>
  );
}
