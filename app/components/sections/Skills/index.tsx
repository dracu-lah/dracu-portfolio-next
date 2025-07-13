import Skills from "./components/Skills";
import { GetSkillsAPI } from "@/services/api";

const SkillsSection = async () => {
  const skills = await GetSkillsAPI();

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-start items-center gap-10 m-4"
    >
      <div className="flex flex-col justify-center items-center gap-4 pt-40">
        <h3 className="font-mono text-center">
          A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.
        </h3>
        <h1 className="text-4xl md:text-6xl font-semibold">
          Skills & Experience
        </h1>
        <p className="text-lg font-thin text-center">
          The main area of expertise is front end development (client side of
          the web).
        </p>
        <p className="max-w-2xl text-center text-lg md:text-xl">
          HTML, CSS, JS, building small and medium web applications with Vue or
          React, custom plugins, features, animations, and coding interactive
          layouts.
        </p>
        <h3 className="text-[18px] font-extralight">
          Visit my
          <a
            className="text-blue-400 font-semibold"
            href="https://www.linkedin.com/in/nevil-krishna-k-77170222a/"
            target="_blank"
          >
            Linkedin
          </a>
          for more details.
        </h3>
      </div>
      <Skills skills={skills} />
    </section>
  );
};
export default SkillsSection;
