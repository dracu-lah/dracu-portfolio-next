import Image from "next/image";
import Link from "next/link";
import { database, databases, projects_cid } from "../utils/appWrite";
import { Query } from "appwrite";
async function getData() {
  const response = await databases.listDocuments(database, projects_cid, [
    Query.orderDesc("$createdAt"),
  ]);

  return response.documents;
}
const Projects = async () => {
  const projects = await getData();

  return (
    <div className="flex space-x-4 snap-x snap-proximity overflow-x-scroll overflow-y-hidden max-w-xs md:max-w-[70vh] lg:max-w-[62rem] duration-300">
      {projects.map((itm) => (
        <div
          key={itm.$id}
          className=" min-h-[512px] min-w-[320px] snap-center md:snap-start rounded-sm  shadow-lg bg-gray-900 "
        >
          <Link href={itm.project_link}>
            <Image
              draggable="false"
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
