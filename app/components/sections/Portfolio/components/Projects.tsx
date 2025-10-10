"use client";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  X,
  Github,
  Maximize2,
} from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { type Projects } from "@/types/appwrite";

// Project Card Component
const ProjectCard = ({
  project,
  onImageClick,
}: {
  project: Projects[0];
  onImageClick: (imageUrl: string) => void;
}) => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <div className="min-h-[512px] min-w-[320px] snap-center md:snap-start rounded-lg overflow-hidden shadow-lg bg-secondary/10 flex flex-col">
      <div
        className="relative"
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <Image
          draggable="false"
          height={480}
          width={640}
          src={project.img_url}
          className="cursor-pointer h-40 w-full hover:opacity-80 duration-300 object-cover"
          alt={project.project_title}
          onClick={() => onImageClick(project.img_url)}
        />

        {/* Maximize icon on hover */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${
            isImageHovered ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => onImageClick(project.img_url)}
        >
          <Maximize2 size={40} className="text-white drop-shadow-lg" />
        </div>

        {/* Links container */}
        <ProjectLinks project={project} />
      </div>

      <ProjectContent project={project} />
    </div>
  );
};

// Project Links Component
const ProjectLinks = ({ project }: { project: Projects[0] }) => {
  return (
    <div className="absolute top-2 right-2 flex gap-2">
      {project.project_link && (
        <Button asChild>
          <a
            target="_blank"
            href={project.project_link}
            rel="noopener noreferrer"
            aria-label="Visit project website"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="font-medium">Link</span>
            <Globe size={20} />
          </a>
        </Button>
      )}
      {project.github_link && (
        <Button asChild>
          <a
            target="_blank"
            href={project.github_link}
            rel="noopener noreferrer"
            aria-label="View GitHub repository"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="font-medium">Code</span>
            <Github size={20} className="" />
          </a>
        </Button>
      )}
    </div>
  );
};

// Project Content Component
const ProjectContent = ({ project }: { project: Projects[0] }) => {
  return (
    <>
      <div className="px-6 py-4 flex-1">
        <div className="font-bold text-xl text-left mb-2">
          {project.project_title}
        </div>
        <p className="opacity-60 text-justify text-sm">
          {project.project_meta_description}
        </p>
      </div>
      <div className="px-4 pb-4 overflow-hidden">
        {project.project_skills.map((skill: string, index: number) => (
          <span
            key={index}
            className="font-bold bg-secondary rounded-full px-3 py-1 text-xs m-1 inline-block"
          >
            #{skill}
          </span>
        ))}
      </div>
    </>
  );
};

// Scroll Button Component
const ScrollButton = ({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) => {
  const isLeft = direction === "left";

  return (
    <Button
      onClick={onClick}
      className={`hidden lg:flex absolute ${isLeft ? "-left-15" : "-right-15"} top-1/2 -translate-y-1/2 z-10 p-2`}
      aria-label={`Scroll ${direction}`}
    >
      {isLeft ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </Button>
  );
};

// Image Modal Component
const ImageModal = ({
  imageUrl,
  onClose,
}: {
  imageUrl: string;
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div className="relative max-w-5xl max-h-[90vh] w-full animate-in zoom-in-95 duration-300 ease-out">
        <Button
          onClick={onClose}
          className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110"
          aria-label="Close modal"
        >
          <X size={24} />
        </Button>
        <Image
          src={imageUrl}
          alt="Project preview"
          width={1920}
          height={1080}
          className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

// Main Projects Component
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
        <ScrollButton direction="left" onClick={() => scroll("left")} />

        <div
          ref={scrollRef}
          className="flex space-x-4 snap-x snap-proximity overflow-x-auto rounded-lg overflow-y-hidden max-w-xs md:max-w-[70vh] lg:max-w-[62rem] duration-300 scrollbar-visible"
        >
          {projects.map((project: Projects[0]) => (
            <ProjectCard
              key={project.$id}
              project={project}
              onImageClick={openModal}
            />
          ))}
        </div>

        <ScrollButton direction="right" onClick={() => scroll("right")} />
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </>
  );
};

export default Projects;
