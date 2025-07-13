import React from "react";
import Projects from "./components/Projects";

const PortfolioSection = () => {
  return (
    <>
      <section
        id="portfolio"
        className="min-h-screen flex flex-col justify-start items-center gap-10 m-4"
      >
        <h1 className="text-4xl  px-10 font-bold text-center pt-40">
          Portfolio & Previous Projects
        </h1>

        <Projects />
      </section>
    </>
  );
};

export default PortfolioSection;
