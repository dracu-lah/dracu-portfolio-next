"use client";

// import React from "react";

// const TypeWriterText = () => {
//   return (
//     <h1 className="text-4xl md:text-6xl font-semibold px-10">
//       {"<Frontend Developer "}
//       <span className="animate-pulse text-yellow-400">/</span>
//       {">"}
//     </h1>
//   );
// };

// export default TypeWriterText;

import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriterText = () => {
  return (
    <div className="text-3xl md:text-6xl  text-slate-100/60  font-semibold p-4">
      <Typewriter
        options={{
          strings: [
            "Hi The Name's Nevil",
            "Guy-who-loves-Sambar.tsx",
            "< ButLovesToCodeMore />",
          ],
          autoStart: true,
          loop: true,
          cursorClassName:"text-yellow-300 animate-pulse"
        }}
      />
    </div>
  );
};

export default TypeWriterText;
