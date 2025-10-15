const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-[80vh] text-center p-1 lg:min-h-auto flex flex-col justify-center items-center px-4 md:px-8 py-12 lg:py-0"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl lg:text-3xl font-semibold ">Hey, I'm Nevil</h2>
        <h1 className="text-4xl  lg:text-5xl font-bold leading-tight">
          Full-Stack Developer
        </h1>
        <p className="text-base lg:text-lg font-light ">React • Next.js</p>
      </div>

      <div className="mt-8  space-y-4 max-w-lg">
        <p className="text-base lg:text-lg leading-relaxed font-light">
          I build scalable, high-performance applications with a focus on
          optimization and clean architecture.
        </p>
        <p className="text-base lg:text-lg leading-relaxed font-light">
          Passionate about solving complex problems, streamlining workflows, and
          contributing to open-source projects.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
