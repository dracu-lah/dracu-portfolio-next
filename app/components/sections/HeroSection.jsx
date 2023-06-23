"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useAnimate } from "framer-motion";
import Image from "next/image";
import HeroImage from "../HeroImage";
async function getData() {
  const response = await databases.listDocuments(database, hero_image_url_cid);
  return response;
}

const HeroSection = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      scope.current,
      { opacity: [0, 1], scale: [0.5, 1] },
      {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }
    );
    animate(
      "article",
      { opacity: [0, 1], scale: [0.5, 1] },
      {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }
    );
  });
  return (
    <section
      ref={scope}
      id="hero"
      className="min-h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden "
    >
      <article
        className="relative flex justify-center items-center"
        style={{
          opacity: 1,
          borderRadius: "79.9639%",
          transform: "none",
        }}
      >
        <div className="absolute rounded-full border border-[#333333] h-[200px] w-[200px] mt-52 animate-ping"></div>
        <div className="absolute rounded-full border border-[#333333] h-[300px] w-[300px] mt-52 "></div>
        <div className="absolute rounded-full border border-[#333333] h-[500px] w-[500px] mt-52 "></div>
        <div className="absolute rounded-full border border-yellow-300 h-[650px] w-[650px] mt-52 opacity-20 animate-pulse"></div>
        <div className="absolute rounded-full border border-[#333333] h-[800px] w-[800px] mt-52 "></div>
      </article>
      <HeroImage />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Learner
        </h2>
        <h1 className="text-4xl md:text-6xl font-semibold px-10">
          {"<Frontend Developer "}
          <span className="animate-pulse text-yellow-400">/</span>
          {">"}
        </h1>
        <div className=" pt-5 flex justify-center items-center gap-x-2 ">
          <Link href="#about" className="heroButton ">
            About
          </Link>
          <Link href="#skills" className="heroButton ">
            Skills
          </Link>
          <Link href="#portfolio" className="heroButton">
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
