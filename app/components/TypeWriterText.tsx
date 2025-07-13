"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriterText = () => {
  return (
    <div className="text-3xl md:text-6xl text-primary  dark:opacity-60  font-semibold p-4">
      <Typewriter
        options={{
          strings: [
            "Hi I am Nevil",
            "Guy-who-loves-Sambar.tsx",
            "< ButLovesToCodeMore />",
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
