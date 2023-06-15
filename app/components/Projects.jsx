"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import client from "../utils/appWrite";
import { Databases } from "appwrite";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "648b831eb80f41aa8b37",
      "648b83371bf4cf374971"
    );
    promise.then(
      function (response) {
        setProjects(response.documents);
        // console.log(response.documents);
      },
      async function (error) {
        console.log(error);
      }
    );
  }, []);

  return (
    <div className="flex  md:flex-row m-4  max-w-sm md:max-w-4xl lg:max-w-6xl gap-4 overflow-x-scroll">
      {projects.map((itm) => (
        <div
          key={itm.$id}
          className=" rounded-sm  shadow-lg bg-gray-900 min-w-[320px]  "
        >
          <Link href={itm.project_link}>
            <Image
              width={640}
              height={480}
              className=" cursor-pointer hover:opacity-40 duration-300 "
              src={
                "https://cloud.appwrite.io/v1/storage/buckets/648b8573106f84dfbc19/files/648b85ac495aeabe2d00/view?project=648b8256bc833c7ec3e0&mode=admin"
              }
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
