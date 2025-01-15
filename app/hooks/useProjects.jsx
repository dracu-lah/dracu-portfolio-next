"use client";
import { useState, useEffect, useCallback } from "react";
import { databases, database, projects_cid } from "@/utils/appWrite";
import { ID, Query } from "appwrite";
import { useAuth } from "./useAuth";

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [operationState, setOperationState] = useState({
    type: null, // 'create' | 'update' | 'delete' | null
    isLoading: false,
    error: null,
  });
  const { isLoggedIn } = useAuth();

  const handleAuthError = useCallback((error) => {
    if (error?.code === 401) {
      window.location.reload();
    }
    return error;
  }, []);

  const fetchProjects = useCallback(async () => {
    if (!isLoggedIn) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const response = await databases.listDocuments(database, projects_cid, [
        Query.orderDesc("$createdAt"),
      ]);
      setProjects(response.documents);
    } catch (error) {
      handleAuthError(error);
      console.error("Error fetching projects:", error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoggedIn, handleAuthError]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const addProject = async (projectData) => {
    setOperationState({
      type: "create",
      isLoading: true,
      error: null,
    });

    try {
      const newProject = await databases.createDocument(
        database,
        projects_cid,
        ID.unique(),
        projectData,
      );

      // Optimistic update
      setProjects((prev) => [newProject, ...prev]);

      return newProject;
    } catch (error) {
      handleAuthError(error);
      setOperationState((prev) => ({ ...prev, error }));
      throw error;
    } finally {
      setOperationState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const deleteProject = async (projectId) => {
    setOperationState({
      type: "delete",
      isLoading: true,
      error: null,
    });

    try {
      await databases.deleteDocument(database, projects_cid, projectId);

      // Optimistic update
      setProjects((prev) =>
        prev.filter((project) => project.$id !== projectId),
      );
    } catch (error) {
      handleAuthError(error);
      setOperationState((prev) => ({ ...prev, error }));
      console.error("Error deleting project:", error);
      throw error;
    } finally {
      setOperationState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const updateProject = async (projectId, projectData) => {
    setOperationState({
      type: "update",
      isLoading: true,
      error: null,
    });

    try {
      const updatedProject = await databases.updateDocument(
        database,
        projects_cid,
        projectId,
        projectData,
      );

      // Optimistic update
      setProjects((prev) =>
        prev.map((project) =>
          project.$id === projectId ? updatedProject : project,
        ),
      );

      return updatedProject;
    } catch (error) {
      handleAuthError(error);
      setOperationState((prev) => ({ ...prev, error }));
      throw error;
    } finally {
      setOperationState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  return {
    projects,
    isLoading,
    operationState,
    addProject,
    deleteProject,
    updateProject,
    refreshProjects: fetchProjects,
  };
};
