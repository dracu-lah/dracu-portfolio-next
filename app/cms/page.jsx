"use client";
import React, { useState, useEffect } from "react";
import { databases, database, projects_cid, account } from "../utils/appWrite";
import { ID, Query } from "appwrite";
import Image from "next/image";
import Link from "next/link";

const CMSPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    project_title: "",
    project_meta_description: "",
    project_link: "",
    img_url: "",
    project_skills: "",
  });

  useEffect(() => {
    fetchProjects();
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
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailSession(email, password);
      setIsLoggedIn(true);
      setLoginError("");
    } catch (error) {
      setLoginError("Invalid credentials");
    }
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    try {
      const projectData = {
        ...newProject,
        project_skills: newProject.project_skills
          .split(",")
          .map((skill) => skill.trim()),
      };

      await databases.createDocument(
        database,
        projects_cid,
        ID.unique(),
        projectData,
      );

      setNewProject({
        project_title: "",
        project_meta_description: "",
        project_link: "",
        img_url: "",
        project_skills: "",
      });

      fetchProjects();
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const handleDeleteProject = async (projectId) => {
    try {
      await databases.deleteDocument(database, projects_cid, projectId);
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">CMS Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {loginError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                {loginError}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects CMS</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Logout
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Add New Project</h2>
        <form onSubmit={handleAddProject} className="space-y-4">
          <input
            placeholder="Project Title"
            value={newProject.project_title}
            onChange={(e) =>
              setNewProject({ ...newProject, project_title: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Project Description"
            value={newProject.project_meta_description}
            onChange={(e) =>
              setNewProject({
                ...newProject,
                project_meta_description: e.target.value,
              })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
          <input
            placeholder="Project Link"
            value={newProject.project_link}
            onChange={(e) =>
              setNewProject({ ...newProject, project_link: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            placeholder="Image URL"
            value={newProject.img_url}
            onChange={(e) =>
              setNewProject({ ...newProject, img_url: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            placeholder="Skills (comma-separated)"
            value={newProject.project_skills}
            onChange={(e) =>
              setNewProject({ ...newProject, project_skills: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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

      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.$id} className="bg-white rounded-lg shadow-md p-6">
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
                    <h2 className="text-xl font-semibold">
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
              <button
                onClick={() => handleDeleteProject(project.$id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CMSPage;
