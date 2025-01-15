"use client";
import { useState, useEffect } from "react";
import { databases, database, projects_cid } from "@/utils/appwrite";
import { ID, Query } from "appwrite";
import { useAuth } from "./useAuth";

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      fetchProjects();
    }
  }, [isLoggedIn]);

  const fetchProjects = async () => {
    if (!isLoggedIn) return;

    try {
      const response = await databases.listDocuments(database, projects_cid, [
        Query.orderDesc("$createdAt"),
      ]);
      setProjects(response.documents);
    } catch (error) {
      console.error("Error fetching projects:", error);
      if (error.code === 401) {
        // Handle unauthorized access
        window.location.reload();
      }
    }
  };

  const addProject = async (projectData) => {
    try {
      await databases.createDocument(
        database,
        projects_cid,
        ID.unique(),
        projectData,
      );
      await fetchProjects();
    } catch (error) {
      if (error.code === 401) {
        window.location.reload();
      }
      throw error;
    }
  };

  const deleteProject = async (projectId) => {
    try {
      await databases.deleteDocument(database, projects_cid, projectId);
      await fetchProjects();
    } catch (error) {
      if (error.code === 401) {
        window.location.reload();
      }
      console.error("Error deleting project:", error);
    }
  };

  const updateProject = async (projectId, projectData) => {
    try {
      await databases.updateDocument(
        database,
        projects_cid,
        projectId,
        projectData,
      );
      await fetchProjects();
    } catch (error) {
      if (error.code === 401) {
        window.location.reload();
      }
      throw error;
    }
  };

  return {
    projects,
    addProject,
    deleteProject,
    updateProject,
    refreshProjects: fetchProjects,
  };
};
