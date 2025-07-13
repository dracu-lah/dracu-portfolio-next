import { GetProjectsAPI } from "@/services/api";
import Image from "next/image";

const Projects = async () => {
  const projects = await GetProjectsAPI();

  return (
    <div className="flex space-x-4 snap-x snap-proximity overflow-x-scroll overflow-y-hidden max-w-xs md:max-w-[70vh] lg:max-w-[62rem] duration-300">
      {projects.map((itm) => (
        <div
          key={itm.$id}
          className=" min-h-[512px] min-w-[320px] snap-center md:snap-start rounded-sm  shadow-lg bg-secondary "
        >
          <a target="_blank" href={itm.project_link}>
            <Image
              draggable="false"
              height={480}
              width={640}
              src={itm.img_url}
              className="cursor-pointer h-40 hover:opacity-40 duration-300 "
              alt={itm.project_title}
            />
          </a>
          <div className="px-6 py-4 ">
            <div className="font-bold text-xl  text-left">
              {itm.project_title}
            </div>

            <p className="opacity-60 text-justify">
              {itm.project_meta_description}
            </p>
          </div>
          <div className="max-w-[90vh] px-4 overflow-hidden">
            {itm.project_skills.map((skill: string, key: number) => (
              <span
                key={key}
                className=" font-bold bg-background  rounded-full px-2 py-1.5 text-xs m-1 inline-block"
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
