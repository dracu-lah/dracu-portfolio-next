import Link from "next/link";
import HeroImage from "../HeroImage";
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden "
    >
      <HeroImage />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Learner
        </h2>
        <h1 className="text-4xl md:text-6xl font-semibold px-10">
          {"<Frontend Developer "}
          <span className="animate-pulse text-yellow-400">/</span>
          {">"}
        </h1>
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
