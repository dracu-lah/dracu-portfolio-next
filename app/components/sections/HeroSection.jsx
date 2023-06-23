import Link from "next/link";
import HeroImage from "../HeroImage";
import HeroCircles from "../HeroCircles";
import TypeWriterText from "../TypeWriterText";
import Navbar from "../Navbar/Navbar";
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-40"
    >

        <HeroCircles />
        <HeroImage />
        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
            Learner
          </h2>
          <TypeWriterText />
          <div className=" pt-5 flex justify-center items-center gap-x-2 ">
            <Link href="#about" className="heroButton ">
              About
            </Link>
            <Link href="#skills" className="heroButton ">
              Skills
            </Link>
            <Link href="#portfolio" className="heroButton">
              Projects
            </Link>
          </div>

        </div>
    </section>
  );
};

export default HeroSection;
