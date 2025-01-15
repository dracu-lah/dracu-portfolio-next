"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useProjects } from "@/hooks/useProjects";

const ProjectForm = () => {
  const { addProject } = useProjects();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      project_title: "",
      project_meta_description: "",
      project_link: "",
      img_url: "",
      project_skills: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await addProject({
        ...data,
        project_skills: data.project_skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      });
      reset();
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Project</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            placeholder="Project Title"
            {...register("project_title", {
              required: "Project title is required",
            })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
          />
          {errors.project_title && (
            <p className="text-red-500 text-sm mt-1">
              {errors.project_title.message}
            </p>
          )}
        </div>

        <div>
          <textarea
            placeholder="Project Description"
            {...register("project_meta_description", {
              required: "Project description is required",
            })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
            rows={3}
          />
          {errors.project_meta_description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.project_meta_description.message}
            </p>
          )}
        </div>

        <div>
          <input
            placeholder="Project Link"
            {...register("project_link", {
              required: "Project link is required",
              pattern: {
                value:
                  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                message: "Please enter a valid URL",
              },
            })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
          />
          {errors.project_link && (
            <p className="text-red-500 text-sm mt-1">
              {errors.project_link.message}
            </p>
          )}
        </div>

        <div>
          <input
            placeholder="Image URL"
            {...register("img_url", {
              required: "Image URL is required",
              pattern: {
                value:
                  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                message: "Please enter a valid URL",
              },
            })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
          />
          {errors.img_url && (
            <p className="text-red-500 text-sm mt-1">
              {errors.img_url.message}
            </p>
          )}
        </div>

        <div>
          <input
            placeholder="Skills (comma-separated)"
            {...register("project_skills", {
              required: "At least one skill is required",
            })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
          />
          {errors.project_skills && (
            <p className="text-red-500 text-sm mt-1">
              {errors.project_skills.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Project
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
