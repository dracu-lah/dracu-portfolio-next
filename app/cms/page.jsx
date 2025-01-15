"use client";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import LoginForm from "@/components/cms/LoginForm";
import ProjectsList from "@/components/cms/ProjectsList";
import ProjectForm from "@/components/cms/ProjectForm";
import Loading from "@/components/common/Loading";

const CMSPage = () => {
  const { isLoggedIn, isLoading, handleLogout } = useAuth();
  const [activeTab, setActiveTab] = useState("Projects");

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoggedIn) {
    return <LoginForm />;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "Projects":
        return (
          <div>
            <ProjectForm />
            <ProjectsList />
          </div>
        );
      case "Users":
        return <div>Users management coming soon...</div>;
      case "Settings":
        return <div>Settings management coming soon...</div>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-600">CMS</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
        >
          Logout
        </button>
      </div>

      <div>
        <ul className="flex border-b mb-4">
          {["Projects", "Users", "Settings"].map((tab) => (
            <li
              key={tab}
              className={`cursor-pointer px-4 py-2 ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
        <div>{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default CMSPage;
