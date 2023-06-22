"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RightButtons = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(activeSection);
  return (
    <div className=" text-xs font-bold hidden md:block">
      <Link
        href="#hero"
        className={` rightButton bottom-[50vh] ${
          activeSection === "hero" && `  text-black bg-slate-100`
        } `}
      >
        1
      </Link>
      <Link
        href="#about"
        className={` rightButton bottom-[45vh] ${
          activeSection === "about" && `  text-black bg-slate-100`
        } `}
      >
        2
      </Link>
      <Link
        href="#skills"
        className={` rightButton bottom-[40vh] ${
          activeSection === "skills" && `  text-black bg-slate-100`
        } `}
      >
        3
      </Link>
      <Link
        href="#portfolio"
        className={` rightButton bottom-[35vh] ${
          activeSection === "portfolio" && `  text-black bg-slate-100`
        } `}
      >
        4
      </Link>
      <Link
        href="#contact"
        className={` rightButton bottom-[30vh] ${
          activeSection === "contact" && `  text-black bg-slate-100`
        } `}
      >
        5
      </Link>
    </div>
  );
};

export default RightButtons;
