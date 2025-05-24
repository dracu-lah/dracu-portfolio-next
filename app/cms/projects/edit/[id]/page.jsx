"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useProjects } from "@/hooks/useProjects";
import { useForm } from "react-hook-form";

const EditProject = () => {
  const { id } = useParams();
  const { getProject, updateProject } = useProjects();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Fetch the project data
      getProject(id).then((data) => {
        // Set the form values with project data
        setValue("project_title", data.project_title);
        setValue("project_meta_description", data.project_meta_description);
        setValue("project_skills", data.project_skills);
        setValue("project_link", data.project_link);
        setLoading(false);
      });
    }
  }, [id, getProject, setValue]);

  const onSubmit = async (data) => {
    try {
      await updateProject(id, data);
      router.push("/admin/projects"); // Redirect to the project list page
    } catch (error) {
      console.error("Failed to update project:", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800">Edit Project</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="mb-4">
          <label
            htmlFor="project_title"
            className="block text-sm font-medium text-gray-700"
          >
            Project Title
          </label>
          <input
            id="project_title"
            type="text"
            {...register("project_title", { required: "Title is required" })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.project_title && (
            <p className="text-sm text-red-600">
              {errors.project_title.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="project_meta_description"
            className="block text-sm font-medium text-gray-700"
          >
            Project Description
          </label>
          <textarea
            id="project_meta_description"
            {...register("project_meta_description", {
              required: "Description is required",
            })}
            rows={4}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.project_meta_description && (
            <p className="text-sm text-red-600">
              {errors.project_meta_description.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="project_skills"
            className="block text-sm font-medium text-gray-700"
          >
            Skills
          </label>
          <input
            id="project_skills"
            type="text"
            {...register("project_skills", { required: "Skills are required" })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.project_skills && (
            <p className="text-sm text-red-600">
              {errors.project_skills.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="project_link"
            className="block text-sm font-medium text-gray-700"
          >
            Project Link
          </label>
          <input
            id="project_link"
            type="url"
            {...register("project_link", {
              required: "Project link is required",
            })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.project_link && (
            <p className="text-sm text-red-600">
              {errors.project_link.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Update Project
        </button>
      </form>
    </div>
  );
};

export default EditProject;
