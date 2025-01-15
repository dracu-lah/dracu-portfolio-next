"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useProjects } from "@/hooks/useProjects";
import { storage } from "@/utils/appWrite";
import { ID } from "appwrite";

const bucket_id = "648b8573106f84dfbc19";

const ProjectForm = () => {
  const { addProject } = useProjects();
  const [uploading, setUploading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [fileId, setFileId] = useState("");
  const [imageError, setImageError] = useState("");
  const fileInputRef = useRef(null);

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

  const handleImageUpload = async (file) => {
    setUploading(true);
    setImageError("");
    try {
      const response = await storage.createFile(bucket_id, ID.unique(), file);
      const fileUrl = storage.getFileView(bucket_id, response.$id);
      setImgUrl(fileUrl);
      setFileId(response.$id);
    } catch (error) {
      console.error("Error uploading image:", error);
      setImageError("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteImage = async () => {
    if (!fileId) return;
    try {
      await storage.deleteFile(bucket_id, fileId);
      setImgUrl("");
      setFileId("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error deleting image:", error);
      setImageError("Failed to delete image. Please try again.");
    }
  };

  const onSubmit = async (data) => {
    if (!imgUrl) {
      setImageError("Please upload an image for the project");
      return;
    }

    try {
      await addProject({
        ...data,
        img_url: imgUrl,
        project_skills: data.project_skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      });
      reset();
      setImgUrl("");
      setFileId("");
      setImageError("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
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
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Upload Image <span className="text-red-500">*</span>
          </label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0]) handleImageUpload(e.target.files[0]);
            }}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {uploading && (
            <p className="text-blue-500 text-sm mt-1">Uploading...</p>
          )}
          {imageError && (
            <p className="text-red-500 text-sm mt-1">{imageError}</p>
          )}
          {imgUrl && (
            <div className="mt-2 space-y-2">
              <p className="text-green-500 text-sm">
                Image uploaded successfully!
              </p>
              <div className="relative w-full max-w-md">
                <img
                  src={imgUrl}
                  alt="Project preview"
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
                <button
                  type="button"
                  onClick={handleDeleteImage}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
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
          disabled={uploading}
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
