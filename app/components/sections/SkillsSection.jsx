"use client";
import client from "@/app/utils/appWrite";
import { Storage } from "appwrite";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SkillsSection = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const bucketid = "648b85d925a96d32d702";
    const storage = new Storage(client);

    const promise = storage.listFiles(bucketid);

    promise.then(
      function (response) {
        // console.log(response); // Success
        let results = [];
        for (const item of response.files) {
          // console.log(item.$id);
          const result = storage.getFilePreview(bucketid, item.$id);
          results.push(result);
        }
        setSkills(results);

        // console.log(results[0].href);
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  }, []);
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-start items-center gap-10 m-4"
    >
      <div className="flex flex-col justify-center items-center gap-4 pt-40">
        <h3 className="font-mono text-center">
          A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.
        </h3>
        <h1 className="text-4xl md:text-6xl font-semibold">
          Skills & Experience
        </h1>
        <p className="text-lg font-thin text-center">
          The main area of expertise is front end development (client side of
          the web).
        </p>
        <p className="max-w-2xl text-center text-lg md:text-xl">
          HTML, CSS, JS, building small and medium web applications with Vue or
          React, custom plugins, features, animations, and coding interactive
          layouts.
        </p>
        <h3 className="text-[18px] font-extralight">
          Visit my{" "}
          <Link
            className="text-blue-400 font-semibold"
            href="https://www.linkedin.com/in/nevil-krishna-k-77170222a/"
          >
            Linkedin
          </Link>{" "}
          for more details.
        </h3>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, key) => (
          <div key={key}>
            <Image
              className="w-auto h-auto"
              width={80}
              height={80}
              src={skill.href}
              alt={key}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
