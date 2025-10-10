"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Globe, X } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { type Projects } from "@/types/appwrite";

const Projects = ({ projects }: Projects) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="relative">
        <Button
          onClick={() => scroll("left")}
          className="hidden lg:flex absolute -left-15 top-1/2 -translate-y-1/2 z-10"
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
              <div className="relative">
                <Image
                  draggable="false"
                  height={480}
                  width={640}
                  src={itm.img_url}
                  className="cursor-pointer h-40 w-full hover:opacity-80 duration-300 object-cover"
                  alt={itm.project_title}
                  onClick={() => openModal(itm.img_url)}
                />
                {itm.project_link && (
                  <a
                    target="_blank"
                    href={itm.project_link}
                    rel="noopener noreferrer"
                    className="absolute top-2 flex gap-2 justify-center items-center right-2 bg-white/90 hover:bg-white px-4 py-2 rounded-full shadow-lg transition-all duration-300"
                    aria-label="Visit project website"
                  >
                    <span className="text-black">Link</span>
                    <Globe size={20} className="text-gray-800" />
                  </a>
                )}
              </div>
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
          className="hidden lg:flex absolute -right-15 top-1/2 -translate-y-1/2 z-10 p-2"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </Button>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <Button
              onClick={closeModal}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white"
              aria-label="Close modal"
            >
              <X size={24} />
            </Button>
            <Image
              src={selectedImage}
              alt="Project preview"
              width={1920}
              height={1080}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
