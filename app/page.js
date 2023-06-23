import Navbar from "./components/Navbar/Navbar";
import GithubButton from "./components/GithubButton";
import RightButtons from "./components/RightButtons";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import ContactSection from "./components/sections/ContactSection";

export const revalidate =86400

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-br from-gray-900 via-gray-800/20 to-gray-900 overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <hr className="my-2 max-w-xs mx-auto"></hr>
        <AboutSection />
        <hr className="max-w-xs mx-auto"></hr>
        <SkillsSection />
        <hr className="max-w-xs mx-auto"></hr>
        <PortfolioSection />
        <hr className="max-w-xs mx-auto"></hr>
        <ContactSection />
        <RightButtons />
        <GithubButton />
      </main>
    </>
  );
}
