import React from "react";
import Projects from "./components/Projects";
import { GetProjectsAPI } from "@/services/api";

const PortfolioSection = async () => {
  let projects: Projects = [];

  try {
    projects = await GetProjectsAPI();
  } catch (error) {
    console.error("Failed to load projects:", error);
  }

  return (
    <section
      id="portfolio"
      className="min-h-[80vh] lg:min-h-screen  py-20 lg:py-40 flex flex-col justify-center  items-center gap-10 "
    >
      <h1 className="text-4xl  lg:text-5xl font-bold leading-tight">
        Portfolio <span className="hidden md:inline">& Previous Projects</span>
      </h1>

      <Projects projects={projects} />
    </section>
  );
};

export default PortfolioSection;
