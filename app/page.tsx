import HeroSection from "./components/sections/Hero";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/Skills";
import PortfolioSection from "./components/sections/Portfolio";
import ContactSection from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <hr className="my-2 max-w-xs mx-auto"></hr>
      <AboutSection />
      <hr className="max-w-xs mx-auto"></hr>
      <SkillsSection />
      <hr className="max-w-xs mx-auto"></hr>
      <PortfolioSection />
      <hr className="max-w-xs mx-auto"></hr>
      <ContactSection />
    </>
  );
}
