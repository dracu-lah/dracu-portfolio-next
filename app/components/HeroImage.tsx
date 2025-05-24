import Image from "next/image";
import React from "react";
import { hero_image_bid, storage } from "../utils/appWrite";

async function getData() {
  const response = await storage.listFiles(hero_image_bid);
  return response.files[0].$id;
}

const HeroImage = async () => {
  const heroImage = await getData();
  return (
    <Image
      priority={true}
      width={80}
      height={80}
      draggable="false"
      className="relative rounded-full h-32 w-32 mx-auto object-cover "
      src={`https://cloud.appwrite.io/v1/storage/buckets/648bf6e406b47b7a7d94/files/${heroImage}/view?project=648b8256bc833c7ec3e0&mode=admin`}
      alt="Profile"
    />
  );
};

export default HeroImage;
