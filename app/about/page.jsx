import AboutHero from "@/components/about/AboutHero";
import AboutCompany from "@/components/about/AboutCompany";
import Leadership from "@/components/about/Leadership";
import Certifications from "@/components/about/Certifications";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <div>

      <AboutHero />

      <div className="relative z-10 bg-white">
        <AboutCompany />
        <Leadership />
        <Certifications />
        <AboutCTA />
      </div>

    </div>
  );
}
