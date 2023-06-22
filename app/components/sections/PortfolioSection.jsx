import React from "react";
import Projects from "../Projects";

const PortfolioSection = () => {
  return (
    <>
      <section
        id="portfolio"
        className="min-h-screen flex flex-col gap-y-10 justify-start items-center"
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
