"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriterText = () => {
  return (
    <div className="text-2xl md:text-5xl text-primary dark:opacity-60 font-semibold p-4 whitespace-nowrap overflow-hidden">
      <Typewriter
        options={{
          strings: [
            "Hi I am Nevil",
            "Guy-who-loves-Sambar.tsx",
            "<\u200BButLovesToCodeMore />",
          ],
          autoStart: true,
          loop: true,
          cursorClassName: "text-secondary animate-pulse",
        }}
      />
    </div>
  );
};

export default TypeWriterText;
