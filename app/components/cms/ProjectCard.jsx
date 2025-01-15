"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useProjects } from "@/hooks/useProjects";
import { useRouter } from "next/navigation";

const ProjectCard = ({ project }) => {
  const { deleteProject, operationState } = useProjects();
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this project?")) {
      setIsDeleting(true);
      try {
        await deleteProject(project.$id);
      } catch (error) {
        console.error("Failed to delete project:", error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const handleEdit = () => {
    router.push(`/cms/projects/edit/${project.$id}`); // Navigate to the edit page for this project
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-4">
            {project.img_url && (
              <Image
                src={project.img_url}
                alt={project.project_title}
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
            )}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {project.project_title}
              </h2>
              <p className="text-gray-600 mt-2">
                {project.project_meta_description}
              </p>
            </div>
          </div>
          <div className="mt-4">
            {project.project_skills.map((skill, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{skill}
              </span>
            ))}
          </div>
          <Link
            href={project.project_link}
            target="_blank"
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            View Project
          </Link>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleEdit}
            aria-label="Edit project"
            className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 3l4 4m0 0l-2 2M3 17v4h4m6 0h4v-4m-3 0h-4v-4m4 0H7v4"
              />
            </svg>
          </button>
          <button
            onClick={handleDelete}
            aria-label="Delete project"
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            disabled={isDeleting || operationState.isLoading}
          >
            {isDeleting ||
            (operationState.type === "delete" && operationState.isLoading) ? (
              <svg
                className="w-5 h-5 animate-spin"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C4.477 0 0 4.477 0 10h4zm2 5.291a7.962 7.962 0 01-2-.291l-2 2C5.477 18 8 15.477 8 12h-4z"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
