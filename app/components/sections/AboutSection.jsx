"use client";
import { databases } from "@/app/utils/appWrite";
import React, { useEffect, useState } from "react";
const AboutSection = () => {
  const [description, setDescription] = useState("");
  useEffect(() => {

    let promise = databases.listDocuments(
      "648b831eb80f41aa8b37",
      "648bf10a5ed391156f0b"
    );
    promise.then(
      function (response) {
        setDescription(response.documents[0].about_description);
        // console.log(response.documents);
      },
      async function (error) {
        console.log(error);
      }
    );
  }, []);
  return (
    <section
      id="about"
      className="px-5 text-center md:text-left md:px-0 flex flex-col md:flex-row md:justify-around  justify-start pt-40 gap-y-10 items-center min-h-screen"
    >
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl lg:text-6xl font-bold">Hi, I'mNevil </h1>
        <h1 className="text-4xl lg:text-6xl font-bold pt-4">WebDeveloper</h1>
        <h3 className="font-bold pt-10 md:max-w-xs lg:max-w-max">
          Front End Developer / JavaScript Fan / Learner
        </h3>
      </div>
      <p className="max-w-sm lg:max-w-lg mt-4 font-extralight lg:text-xl md:mt-0 md:text-lg p-2 my-10 leading-relaxed">
        {description}
      </p>
    </section>
  );
};

export default AboutSection;
