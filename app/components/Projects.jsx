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
    <div className="flex justify-center md:flex-row m-4 max-w-xs  md:max-w-4xl lg:max-w-screen-lg gap-4 overflow-x-scroll">
      {projects.map((itm) => (
        <div
          key={itm.$id}
          className=" rounded-sm  shadow-lg bg-gray-900 min-w-[320px]  "
        >
          <Link href={itm.project_link}>
            <Image
              height={480}
              width={640}
              src={itm.img_url}
              className="cursor-pointer hover:opacity-40 duration-300 "
              alt={itm.project_title}
            />
          </Link>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{itm.project_title}</div>

            <p className="text-gray-400 text-base">
              {itm.project_meta_description}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {itm.project_skills.map((skill, key) => (
              <span
                key={key}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2 hover:bg-white cursor-pointer"
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
