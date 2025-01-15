"use client";
import React from "react";
import { useProjects } from "@/hooks/useProjects";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  const { projects } = useProjects();

  return (
    <div className="grid gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.$id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
