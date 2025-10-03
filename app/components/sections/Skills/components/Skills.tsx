"use client";
import { useAnimate, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const Skills = ({ skills }: { skills: string[] }) => {
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
  }, [isInView, animate, scope]);
  return (
    <ul ref={scope} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {skills.map((skill: string, key: number) => (
        <li key={key} className="size-20 md:size-30">
          <Image
            draggable="false"
            className="size-full"
            width={100}
            height={100}
            src={skill}
            alt={`key-${key}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default Skills;
