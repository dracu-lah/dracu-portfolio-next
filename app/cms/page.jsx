"use client";
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import LoginForm from "@/components/cms/LoginForm";
import ProjectsList from "@/components/cms/ProjectsList";
import ProjectForm from "@/components/cms/ProjectForm";
import Loading from "@/components/common/Loading";

const CMSPage = () => {
  const { isLoggedIn, isLoading, handleLogout } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoggedIn) {
    return <LoginForm />;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Projects CMS</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
        >
          Logout
        </button>
      </div>

      <ProjectForm />
      <ProjectsList />
    </div>
  );
};

export default CMSPage;
