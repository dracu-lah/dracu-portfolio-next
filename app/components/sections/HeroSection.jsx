import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden "
    >
      <div
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
      </div>
      <Image
        priority={true}
        width={80}
        height={80}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://cloud.appwrite.io/v1/storage/buckets/648bf6e406b47b7a7d94/files/648bf75487127bdaa4f2/view?project=648b8256bc833c7ec3e0&mode=admin"
        alt="Profile"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Student
        </h2>
        <h1 className="text-4xl md:text-6xl font-semibold px-10">
          {"<Frontend Developer "}
          <span className="animate-pulse text-yellow-400">/</span>
          {">"}
        </h1>
        <div className=" pt-5 flex justify-center items-center gap-x-2 ">
          <Link href="#about" className="heroButton hover:text-black ">
            About
          </Link>
          <Link href="#skills" className="heroButton hover:text-black">
            Skills
          </Link>
          <Link href="#portfolio" className="heroButton hover:text-black">
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
