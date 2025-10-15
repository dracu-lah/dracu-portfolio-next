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
    </section>
  );
};

export default AboutSection;
