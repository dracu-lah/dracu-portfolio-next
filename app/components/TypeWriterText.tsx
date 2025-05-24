"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriterText = () => {
  return (
    <div className="text-3xl md:text-6xl  text-slate-100/60  font-semibold p-4">
      <Typewriter
        options={{
          strings: [
            "Hi I am Nevil",
            "Guy-who-loves-Sambar.tsx",
            "< ButLovesToCodeMore />",
          ],
          autoStart: true,
          loop: true,
          cursorClassName: "text-yellow-300 animate-pulse",
        }}
      />
    </div>
  );
};

export default TypeWriterText;
