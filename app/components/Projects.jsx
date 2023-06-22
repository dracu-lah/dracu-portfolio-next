"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { database, databases, projects_cid } from "../utils/appWrite";
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await databases.listDocuments(database, projects_cid);
      setProjects(response.documents);
    }
    fetchData();
  }, []);

  return (
    <div className="flex space-x-4 overflow-x-scroll overflow-y-hidden max-w-xs md:max-w-[70vh] lg:max-w-[100vh]">
      {projects.map((itm) => (
        <div
          key={itm.$id}
          className=" min-h-[512px] min-w-[320px]  rounded-sm  shadow-lg bg-gray-900 "
        >
          <Link href={itm.project_link}>
            <Image
              height={480}
              width={640}
              src={itm.img_url}
              className="cursor-pointer h-40 hover:opacity-40 duration-300 "
              alt={itm.project_title}
            />
          </Link>
          <div className="px-6 py-4">
            <div className="font-bold text-xl  text-left">
              {itm.project_title}
            </div>

            <p className="text-gray-400 text-justify">
              {itm.project_meta_description}
            </p>
          </div>
          <div className="max-w-[90vh] px-4 overflow-hidden">
            {itm.project_skills.map((skill, key) => (
              <span
                key={key}
                className="text-sky-950 font-bold bg-slate-100  rounded-full px-2 py-1.5 text-xs m-1 inline-block"
                // className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2 hover:bg-white cursor-pointer"
              >
                #{skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
