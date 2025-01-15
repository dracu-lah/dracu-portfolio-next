"use client";
import React from "react";
import { useProjects } from "@/hooks/useProjects";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  const { projects, isLoading } = useProjects();

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading projects...</p>;
  }

  return (
    <div className="grid gap-6">
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard key={project.$id} project={project} />
        ))
      ) : (
        <p className="text-center text-gray-500">No projects found.</p>
      )}
    </div>
  );
};

export default ProjectsList;
