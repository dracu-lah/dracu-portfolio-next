import React from "react";
import Projects from "../Projects";

const PortfolioSection = () => {
  return (
    <>
      <section
        id="portfolio"
        className="min-h-screen flex flex-col gap-y-10 justify-center items-center"
      >
        <h1 className="text-4xl font-bold text-center p-2">
          Portfolio & Previous Projects
        </h1>
        <Projects />
      </section>
    </>
  );
};

export default PortfolioSection;
