'use client'
import { useAnimate } from 'framer-motion';
import React, { useEffect } from 'react'

const HeroCircles = () => {
    const [scope, animate] = useAnimate();
    useEffect(() => {
      animate(
        scope.current,
        { opacity: [0, 1], scale: [0.5, 1] },
        {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }
      );
    });
  return (
    <ul
    ref={scope}
    className="relative flex justify-center items-center"
    style={{
      opacity: 1,
      borderRadius: "79.9639%",
      transform: "none",
    }}
  >
    <li className="absolute rounded-full border border-[#333333] h-[200px] w-[200px] mt-52 animate-ping"></li>
    <li className="absolute rounded-full border border-[#333333] h-[300px] w-[300px] mt-52 "></li>
    <li className="absolute rounded-full border border-[#333333] h-[500px] w-[500px] mt-52 "></li>
    <li className="absolute rounded-full border border-yellow-300 h-[650px] w-[650px] mt-52 opacity-20 animate-pulse"></li>
    <li className="absolute rounded-full border border-[#333333] h-[800px] w-[800px] mt-52 "></li>
  </ul>
  )
}

export default HeroCircles