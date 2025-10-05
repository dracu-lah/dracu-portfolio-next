"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { type Projects } from "@/types/appwrite";

const Projects = ({ projects }: Projects) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <Button
        onClick={() => scroll("left")}
        className="hidden lg:flex absolute -left-15 top-1/2 -translate-y-1/2 z-10 "
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} />
      </Button>

      <div
        ref={scrollRef}
        className="flex space-x-4 snap-x snap-proximity overflow-x-auto rounded-lg overflow-y-hidden max-w-xs md:max-w-[70vh] lg:max-w-[62rem] duration-300 scrollbar-visible"
      >
        {projects.map((itm: Projects) => (
          <div
            key={itm.$id}
            className="min-h-[512px] min-w-[320px] snap-center md:snap-start rounded-lg overflow-hidden shadow-lg bg-secondary/10 flex flex-col"
          >
            {" "}
            <a
              target="_blank"
              href={itm.project_link}
              rel="noopener noreferrer"
            >
              <Image
                draggable="false"
                height={480}
                width={640}
                src={itm.img_url}
                className="cursor-pointer h-40 w-full hover:opacity-80 duration-300 object-cover"
                alt={itm.project_title}
              />
            </a>
            <div className="px-6 py-4 flex-1">
              <div className="font-bold text-xl text-left mb-2">
                {itm.project_title}
              </div>
              <p className="opacity-60 text-justify text-sm">
                {itm.project_meta_description}
              </p>
            </div>
            <div className="px-4 pb-4 overflow-hidden">
              {itm.project_skills.map((skill: string, index: number) => (
                <span
                  key={index}
                  className="font-bold bg-secondary rounded-full px-3 py-1 text-xs m-1 inline-block"
                >
                  #{skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Button
        onClick={() => scroll("right")}
        className="hidden lg:flex absolute -right-15 top-1/2 -translate-y-1/2 z-10  p-2 "
        aria-label="Scroll right"
      >
        <ChevronRight size={24} />
      </Button>
    </div>
  );
};

export default Projects;
