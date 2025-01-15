"use client";
import React, { useState, useRef, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useProjects } from "@/hooks/useProjects";
import { storage } from "@/utils/appWrite";
import { ID } from "appwrite";

const BUCKET_ID = "648b8573106f84dfbc19";
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const ProjectForm = () => {
  const { addProject, operationState } = useProjects();
  const [uploadState, setUploadState] = useState({
    isUploading: false,
    progress: 0,
    error: "",
  });
  const [imageState, setImageState] = useState({
    url: "",
    fileId: "",
  });
  const fileInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      project_title: "",
      project_meta_description: "",
      project_link: "",
      project_skills: "",
    },
  });

  const validateFile = useCallback((file) => {
    if (!file) return "Please select a file";
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return "File type not supported. Please upload a JPEG, PNG, or WebP image.";
    }
    if (file.size > MAX_FILE_SIZE) {
      return "File is too large. Maximum size is 5MB.";
    }
    return null;
  }, []);

  const handleImageUpload = useCallback(
    async (file) => {
      const error = validateFile(file);
      if (error) {
        setUploadState((prev) => ({ ...prev, error }));
        return;
      }

      setUploadState({
        isUploading: true,
        progress: 0,
        error: "",
      });

      try {
        const response = await storage.createFile(BUCKET_ID, ID.unique(), file);
        const fileUrl = storage.getFileView(BUCKET_ID, response.$id);

        setImageState({
          url: fileUrl,
          fileId: response.$id,
        });
        clearErrors("image");
      } catch (error) {
        console.error("Error uploading image:", error);
        setUploadState((prev) => ({
          ...prev,
          error: "Failed to upload image. Please try again.",
        }));
        setError("image", { message: "Image upload failed" });
      } finally {
        setUploadState((prev) => ({ ...prev, isUploading: false }));
      }
    },
    [setError, clearErrors],
  );

  const handleDeleteImage = useCallback(async () => {
    if (!imageState.fileId) return;

    try {
      await storage.deleteFile(BUCKET_ID, imageState.fileId);
      setImageState({ url: "", fileId: "" });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error deleting image:", error);
      setUploadState((prev) => ({
        ...prev,
        error: "Failed to delete image. Please try again.",
      }));
    }
  }, [imageState.fileId]);

  const onSubmit = async (data) => {
    if (!imageState.url) {
      setError("image", { message: "Please upload an image for the project" });
      return;
    }

    try {
      await addProject({
        ...data,
        img_url: imageState.url,
        project_skills: data.project_skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      });

      // Reset form state
      reset();
      setImageState({ url: "", fileId: "" });
      setUploadState({ isUploading: false, progress: 0, error: "" });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error adding project:", error);
      setError("submit", {
        message: "Failed to add project. Please try again.",
      });
    }
  };

  const isFormDisabled =
    uploadState.isUploading || isSubmitting || operationState?.isLoading;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Project</h2>

      {(operationState?.error || errors.submit) && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg">
          {operationState?.error?.message || errors.submit?.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Text Input Fields */}
        <div className="space-y-4">
          {/* Project Title */}
          <div>
            <input
              placeholder="Project Title"
              {...register("project_title", {
                required: "Project title is required",
                minLength: {
                  value: 3,
                  message: "Title must be at least 3 characters",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white disabled:bg-gray-100"
              disabled={isFormDisabled}
            />
            {errors.project_title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.project_title.message}
              </p>
            )}
          </div>

          {/* Project Description */}
          <div>
            <textarea
              placeholder="Project Description"
              {...register("project_meta_description", {
                required: "Project description is required",
                minLength: {
                  value: 10,
                  message: "Description must be at least 10 characters",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white disabled:bg-gray-100"
              rows={3}
              disabled={isFormDisabled}
            />
            {errors.project_meta_description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.project_meta_description.message}
              </p>
            )}
          </div>

          {/* Project Link */}
          <div>
            <input
              placeholder="Project Link (e.g., https://example.com)"
              {...register("project_link", {
                required: "Project link is required",
                pattern: {
                  value:
                    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                  message: "Please enter a valid URL",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white disabled:bg-gray-100"
              disabled={isFormDisabled}
            />
            {errors.project_link && (
              <p className="text-red-500 text-sm mt-1">
                {errors.project_link.message}
              </p>
            )}
          </div>
        </div>

        {/* Image Upload Section */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Project Image <span className="text-red-500">*</span>
          </label>
          <input
            ref={fileInputRef}
            type="file"
            accept={ALLOWED_FILE_TYPES.join(",")}
            onChange={(e) => {
              if (e.target.files?.[0]) handleImageUpload(e.target.files[0]);
            }}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
                     file:rounded-lg file:border-0 file:text-sm file:font-semibold
                     file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100
                     disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isFormDisabled}
          />

          {uploadState.isUploading && (
            <div className="mt-2">
              <div className="h-2 bg-blue-200 rounded-full">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${uploadState.progress}%` }}
                />
              </div>
            </div>
          )}

          {uploadState.error && (
            <p className="text-red-500 text-sm">{uploadState.error}</p>
          )}

          {imageState.url && (
            <div className="mt-2">
              <div className="relative w-full max-w-md">
                <img
                  src={imageState.url}
                  alt="Project preview"
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
                <button
                  type="button"
                  onClick={handleDeleteImage}
                  disabled={isFormDisabled}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full
                           hover:bg-red-600 transition-colors disabled:opacity-50
                           disabled:cursor-not-allowed"
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

        {/* Skills Input */}
        <div>
          <input
            placeholder="Skills (e.g., React, Node.js, TypeScript)"
            {...register("project_skills", {
              required: "At least one skill is required",
              pattern: {
                value: /^[A-Za-z0-9\s,.-]+$/,
                message: "Please enter valid skill names separated by commas",
              },
            })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2
                     focus:ring-blue-500 text-gray-900 bg-white disabled:bg-gray-100"
            disabled={isFormDisabled}
          />
          {errors.project_skills && (
            <p className="text-red-500 text-sm mt-1">
              {errors.project_skills.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600
                   transition-colors flex items-center justify-center space-x-2
                   disabled:bg-blue-300 disabled:cursor-not-allowed"
          disabled={isFormDisabled}
        >
          {isFormDisabled ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
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
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span>Add Project</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
