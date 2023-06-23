"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const HeroImage = () => {
  return (
    <>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Image
          priority={true}
          width={80}
          height={80}
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src="https://cloud.appwrite.io/v1/storage/buckets/648bf6e406b47b7a7d94/files/648bf75487127bdaa4f2/view?project=648b8256bc833c7ec3e0&mode=admin"
          alt="Profile"
        />
      </motion.div>
    </>
  );
};

export default HeroImage;
