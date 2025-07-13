import HeroImage from "./components/HeroImage";
import HeroCircles from "./components/HeroCircles";
import TypeWriterText from "./components/TypeWriterText";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  const heroLinks = [
    {
      href: "#about",
      name: "About",
    },

    {
      href: "#skills",
      name: "Skills",
    },

    {
      href: "#portfolio",
      name: "Portfolio",
    },
  ];
  return (
    <section
      id="hero"
      className="min-h-screen  flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-40"
    >
      <HeroCircles />
      <HeroImage />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Learner
        </h2>
        <TypeWriterText />
        <div className=" pt-5 flex justify-center items-center gap-x-2 ">
          {heroLinks.map((link) => (
            <a href={link.href} key={link.href}>
              <Button className="animate-bounce h-4 rounded-full duration-300 hover:animate-out">
                {link.name}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
