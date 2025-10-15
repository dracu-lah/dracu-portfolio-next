import { LinkedinIcon, MailIcon } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-[80vh] text-center p-1 lg:min-h-auto flex flex-col justify-center items-center px-4 md:px-8 py-12 lg:py-0"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl lg:text-3xl font-semibold ">Hey, I'm Nevil</h2>
        <h1 className="text-4xl  lg:text-5xl font-bold leading-tight">
          Frontend Developer
        </h1>
        <p className="text-base lg:text-lg font-light ">React • Next.js</p>
      </div>

      <div className=" mt-8 space-y-6 max-w-lg">
        {/* Consolidated Professional and Contribution Summary */}
        <p className="text-base lg:text-lg leading-relaxed font-light">
          I am a results-driven{" "}
          <b>Frontend Developer with 2+ years of experience</b> specializing in
          the <b>React/Next.js</b> ecosystem. My core focus is building{" "}
          <b>scalable, high-performance applications</b> by prioritizing
          optimization (code splitting, memoization) and{" "}
          <b>component reusability</b>.
        </p>

        <p className="text-base lg:text-lg leading-relaxed font-light">
          Beyond my professional role, I actively engage with the tech community
          by <b>attending FOSS meetups</b>, exploring technologies like{" "}
          <b>Docker and AWS</b>, and <b>mentoring others</b> to help them learn
          to code.
        </p>
      </div>

      <div className=" flex  gap-4 bottom-0 left-0 justify-center items-center m-4  p-2">
        <a target="_blank" href={"mailto:nevilkrishna@gmail.com"} className=" ">
          <MailIcon className="size-10 hover:text-primary/80 duration-300 transition-colors" />
        </a>
        <a target="_blank" href="https://github.com/dracu-lah" className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="fill-primary hover:fill-primary/80 transition-colors size-8 duration-300 backdrop-filter rounded-full bg-background"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          target="_blank"
          href={"https://www.linkedin.com/in/nevil-krishna-k-77170222a/"}
          className=" bg-primary flex justify-center items-center size-8 hover:bg-primary/80 transition-colors duration-300"
        >
          <LinkedinIcon className="text-background " />
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
