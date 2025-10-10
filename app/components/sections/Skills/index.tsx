import Skills from "./components/Skills";
import { GetSkillsAPI } from "@/services/api";

const SkillsSection = async () => {
  let skills: string[] = [];

  try {
    skills = await GetSkillsAPI();
  } catch (error) {
    console.error("Failed to load skills:", error);
    // skills will remain empty array if API fails
  }

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-start items-center gap-10 m-4"
    >
      <div className="flex flex-col justify-center items-center gap-4 pt-40">
        <h3 className="font-mono text-center">
          A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.
        </h3>
        <h1 className="text-4xl md:text-6xl text-center font-semibold">
          Skills & Experience
        </h1>
        <p className="text-lg font-thin text-center">
          The main area of expertise is front end development (client side of
          the web).
        </p>
        <p className="max-w-2xl text-center text-lg md:text-xl">
          My focus is on creating high-quality, accessible user interfaces from
          concept to reality - using React.
        </p>
        <h3 className="text-[18px] text-center font-extralight">
          Visit my &nbsp;
          <a
            className="text-blue-400 font-semibold"
            href="https://www.linkedin.com/in/nevil-krishna-k-77170222a/"
            target="_blank"
          >
            Linkedin
          </a>
          &nbsp; for more details.
        </h3>
      </div>
      <Skills skills={skills} />
    </section>
  );
};
export default SkillsSection;
