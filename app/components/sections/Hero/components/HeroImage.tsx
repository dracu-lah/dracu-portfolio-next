import { GetHeroImageAPI } from "@/services/api";
import Image from "next/image";
import React from "react";

const HeroImage = async () => {
  const heroImage = await GetHeroImageAPI();
  if (heroImage) {
    return (
      <Image
        priority={true}
        width={80}
        height={80}
        draggable="false"
        className="relative rounded-full h-32 w-32 mx-auto object-cover "
        src={heroImage}
        alt="Profile"
      />
    );
  }
};

export default HeroImage;
