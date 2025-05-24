"use client";
import { useAnimate, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const Skills = ({ skills }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  useEffect(() => {
    if (isInView) {
      const enterAnimation = async () => {
        await animate(
          scope.current,
          { opacity: [0, 1], y: [100, 0] },
          { duration: 1 },
        );
      };
      enterAnimation();
    }
  }, [isInView]);
  return (
    <ul ref={scope} className="grid grid-cols-3 md:grid-cols-4 gap-8">
      {skills.map((skill, key) => (
        <li key={key}>
          <Image
            draggable="false"
            className="w-auto h-auto"
            width={80}
            height={80}
            src={skill}
            alt={key}
          />
        </li>
      ))}
    </ul>
  );
};

export default Skills;
