"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { database, databases, projects_cid } from "../utils/appWrite";
import { motion, useAnimate, useInView } from "framer-motion";
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await databases.listDocuments(database, projects_cid);
      setProjects(response.documents);
    }
    fetchData();
  }, []);

  const [scope, animate] = useAnimate();

  const isInView = useInView(scope, { once: true });
  useEffect(() => {
    if (isInView) {
      const enterAnimation = async () => {
        await animate(
          scope.current,
          { opacity: [0, 1], scale: [0.5, 1] },
          {
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }
        );
      };
      enterAnimation();
    }
  }, [isInView]);

  return (
    <div
      ref={scope}
      className="flex space-x-4 overflow-x-scroll overflow-y-hidden max-w-xs md:max-w-[70vh] lg:max-w-[100vh]"
    >
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
