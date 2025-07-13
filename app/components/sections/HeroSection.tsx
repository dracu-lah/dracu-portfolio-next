import HeroImage from "../HeroImage";
import HeroCircles from "../HeroCircles";
import TypeWriterText from "../TypeWriterText";
const HeroSection = () => {
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
          <a
            target="_blank"
            href="#about"
            className="border-4 text-white/60  border-white/40 animate-bounce hover:animate-none font-bold py-2 px-4  text-lg md:text-sm rounded-full hover:border-none hover:bg-white/80 hover:text-black duration-300 backdrop-filter backdrop-blur-lg"
          >
            About
          </a>
          <a
            target="_blank"
            href="#skills"
            className="border-4 text-white/60  border-white/40 animate-bounce hover:animate-none font-bold py-2 px-4  text-lg md:text-sm rounded-full hover:border-none hover:bg-white/80 hover:text-black duration-300 backdrop-filter backdrop-blur-lg"
          >
            Skills
          </a>
          <a
            target="_blank"
            href="#portfolio"
            className="border-4 text-white/60  border-white/40 animate-bounce hover:animate-none font-bold py-2 px-4  text-lg md:text-sm rounded-full hover:border-none hover:bg-white/80 hover:text-black duration-300 backdrop-filter backdrop-blur-lg"
          >
            Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
