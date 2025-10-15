import HeroSection from "./components/sections/Hero";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/Skills";
import PortfolioSection from "./components/sections/Portfolio";
import ContactSection from "./components/sections/Contact";

export const revalidate = 86400;
export default function Home() {
  return (
    <>
      <div className="grid py-4 min-h-screen grid-cols-1 lg:grid-cols-2">
        <HeroSection />
        <AboutSection />
      </div>
      <hr className="max-w-xs mx-auto"></hr>
      <SkillsSection />
      <hr className="max-w-xs mx-auto"></hr>
      <PortfolioSection />
      <hr className="max-w-xs mx-auto"></hr>
      <ContactSection />
    </>
  );
}
