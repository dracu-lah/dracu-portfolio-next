import { GetHeroImageAPI } from "@/services/api";
import Image from "next/image";
import React from "react";

const HeroImage = async () => {
  try {
    const heroImage = await GetHeroImageAPI();

    if (heroImage) {
      return (
        <Image
          priority={true}
          width={80}
          height={80}
          draggable="false"
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src={heroImage}
          alt="Profile"
        />
      );
    }
  } catch (error) {
    console.error("Failed to load hero image:", error);
  }

  // Fallback if image fails to load
  return (
    <div className="relative rounded-full h-32 w-32 mx-auto bg-gray-200 flex items-center justify-center border-2 border-gray-300">
      <span className="text-gray-500 text-sm">Image</span>
    </div>
  );
};

export default HeroImage;
